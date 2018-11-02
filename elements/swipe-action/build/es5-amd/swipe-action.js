define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js"
], function(_polymerLegacy, _polymerDom, _ironResizableBehavior) {
  "use strict";
  var _Mathmin = Math.min,
    _Mathabs = Math.abs;
  function _templateObject_852f0730dbb711e8abd8173dd8002f27() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n        position: relative;\n      }\n\n      :host([is-swiping]) {\n        z-index: 1001;\n      }\n\n      :host > ::content > * {\n        position: absolute;\n        box-sizing: border-box;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        height: 100%;\n      }\n\n      ::content > [swipe-left-action] {visibility: hidden;}\n      ::content > [swipe-right-action] {visibility: hidden;}\n      ::content > [swipe-up-action] {visibility: hidden;}\n      ::content > [swipe-down-action] {visibility: hidden;}\n\n      ::content > .visible-action {\n        visibility: visible;\n      }\n\n      #swipeTarget {\n        @apply(--swipe-action-swipe-target);\n      }\n\n      #swipeTarget.fade {\n        opacity: 0 !important;\n      }\n\n      #swipeTarget.snap-back {\n        -webkit-transform: none !important;\n        transform: none !important;\n        opacity: 1 !important;\n      }\n\n      #swipeTarget.snap-back.animated {\n        transition: all 200ms ease-in-out;\n      }\n    </style>\n\n    <slot id="actions" name="[swipe-left-action],[swipe-right-action],[swipe-up-action],[swipe-down-action]"></slot>\n    \n    <div id="swipeTarget">\n      <slot id="content"></slot>\n    </div>\n'
    ]);
    _templateObject_852f0730dbb711e8abd8173dd8002f27 = function() {
      return data;
    };
    return data;
  }
  var Action = function(
    id,
    node,
    size,
    requestedSize,
    rubberBand,
    fade,
    maxRubberBandReached,
    axis,
    direction
  ) {
    this.id = id;
    this.node = node;
    this.size = size;
    this.requestedSize = requestedSize;
    this.rubberBand = rubberBand;
    this.fade = fade;
    this.maxRubberBandReached = maxRubberBandReached;
    this.axis = axis;
    this.direction = direction;
  };
  Action.prototype = {
    constructor: Action,
    id: "right",
    node: void 0,
    size: void 0,
    requestedSize: void 0,
    rubberBand: !1,
    fade: !1,
    maxRubberBandReached: !1,
    axis: "x",
    direction: 1
  };
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_852f0730dbb711e8abd8173dd8002f27()
    ),
    is: "swipe-action",
    properties: {
      gestureDisabled: {
        type: Boolean,
        value: !1,
        reflectToAttribute: !0,
        observer: "_refreshActions"
      },
      isSwiping: {
        type: Boolean,
        value: !1,
        readOnly: !0,
        notify: !0,
        reflectToAttribute: !0
      },
      isSwipedAway: {
        type: Boolean,
        value: !1,
        readOnly: !0,
        notify: !0,
        reflectToAttribute: !0
      },
      activatedAction: {
        type: Action,
        value: void 0,
        readOnly: !0,
        notify: !0
      },
      activatedActionId: {
        type: String,
        value: void 0,
        notify: !0,
        observer: "_onActivatedActionIdChange"
      },
      _SWIPE_SPEED_THREASHOLD: { type: Number, value: 10, readOnly: !0 },
      _OPPOSITE_AXIS_MAX_SCROLLING_THREASHOLD: {
        type: Number,
        value: 10,
        readOnly: !0
      },
      _SWIPE_TRANSITION: {
        type: String,
        value: "all 200ms ease-in-out",
        readOnly: !0
      },
      _ACTIONS_CONFIG: {
        type: Array,
        value: function value() {
          return [
            { attr: "swipe-left-action", id: window.SwipeAction.ACTION_LEFT },
            { attr: "swipe-right-action", id: window.SwipeAction.ACTION_RIGHT },
            { attr: "swipe-up-action", id: window.SwipeAction.ACTION_UP },
            { attr: "swipe-down-action", id: window.SwipeAction.ACTION_DOWN }
          ];
        },
        readOnly: !0
      },
      _gesture: { type: Object, value: null }
    },
    behaviors: [
      _ironResizableBehavior.IronResizableBehavior,
      MutationObserverBehavior
    ],
    listeners: {
      "iron-resize": "_onResize",
      "dom-mutation": "_refreshActions"
    },
    ready: function ready() {
      this._mutationOptions = {
        childList: !0,
        subtree: !0,
        attributes: !0,
        characterData: !1,
        attributeFilter: this._ACTIONS_CONFIG.map(function(config) {
          return config.attr;
        })
      };
      this._mutationFilter = function(mutation) {
        return (
          this._mutationIsChildList(mutation, this.$.actions) ||
          this._mutationIsChildAttributes(mutation, this.$.actions)
        );
      };
      this.target = this.$.swipeTarget;
      this.listen(this.target, "track", "_onTrack");
      this.listen(this.target, "transitionend", "_onTransitionEnd");
      this._refreshActions();
    },
    detached: function detached() {
      this.unlisten(this.target, "track", "_onTrack");
      this.unlisten(this.target, "transitionend", "_onTransitionEnd");
    },
    reset: function reset(animate) {
      this._snapBack(animate);
    },
    activateAction: function activateAction(actionId, animate) {
      this._animateActivation = animate;
      var actionToActivate = this._actionsMap[actionId],
        activatedId = this.activatedAction ? this.activatedAction.id : void 0,
        toActivateId = actionToActivate ? actionToActivate.id : void 0;
      if (activatedId === toActivateId) {
      } else if (!toActivateId && activatedId) {
        this.reset(animate);
      } else {
        this._currentAction = actionToActivate;
        if (this.activatedAction) {
          this.listen(this, "swipe-canceled", "_activateCurrentAction");
          this.reset(animate);
        } else {
          this._activateCurrentAction();
        }
      }
    },
    _activateCurrentAction: function _activateCurrentAction() {
      this.unlisten(this, "swipe-canceled", "_activateCurrentAction");
      if (this._currentAction) {
        this._updateActions(
          this._currentAction.axis,
          this._currentAction.direction
        );
        this._swipeAway(
          this._currentAction,
          this._animateActivation ? this._SWIPE_TRANSITION : ""
        );
      }
    },
    _onActivatedActionIdChange: function _onActivatedActionIdChange(newValue) {
      if (!this._activatedActionIdAlreadyChanged) {
        this._mutationObserverPaused = !0;
        this._mute = 1;
        if (!newValue) {
          this._mute++;
          this.reset(!1);
        } else {
          this.activateAction(newValue, !1);
        }
      }
      this._activatedActionIdAlreadyChanged = !1;
    },
    _onResize: function _onResize() {
      this.debounce("_refreshActions", this._refreshActions, 100);
    },
    _refreshActions: function _refreshActions() {
      if (this.target && this._ACTIONS_CONFIG) {
        this._targetHeight = this.target.offsetHeight;
        this._targetWidth = this.target.offsetWidth;
        var action,
          map = {},
          canSwipeX = !1,
          canSwipeY = !1;
        this.getContentChildren("#actions").forEach(function(el) {
          this._ACTIONS_CONFIG.forEach(function(config) {
            if (el.hasAttribute(config.attr)) {
              action = this._actionFactory(config.id, el);
              map[config.id] = action;
              canSwipeX = canSwipeX || "x" === action.axis;
              canSwipeY = canSwipeY || "y" === action.axis;
            }
          }, this);
        }, this);
        this._actionsMap = map;
        this.setScrollDirection(
          this.gestureDisabled || (!canSwipeX && !canSwipeY)
            ? "all"
            : !canSwipeX
              ? "x"
              : !canSwipeY
                ? "y"
                : "none",
          this.target
        );
      }
    },
    _actionFactory: function _actionFactory(actionId, actionNode) {
      if (!actionNode) {
        return null;
      }
      var sizeAttr = +actionNode.getAttribute("swipe-size") || null,
        fadeAttr = actionNode.getAttribute("swipe-fade"),
        rubberBandAttr = +actionNode.getAttribute("swipe-rubber-band");
      return new Action(
        actionId,
        actionNode,
        sizeAttr ||
          (actionId === window.SwipeAction.ACTION_UP ||
          actionId === window.SwipeAction.ACTION_DOWN
            ? this._targetHeight
            : this._targetWidth),
        sizeAttr,
        isNaN(rubberBandAttr) ? 60 : rubberBandAttr,
        fadeAttr || "" === fadeAttr,
        !1,
        actionId === window.SwipeAction.ACTION_UP ||
        actionId === window.SwipeAction.ACTION_DOWN
          ? "y"
          : "x",
        actionId === window.SwipeAction.ACTION_LEFT ||
        actionId === window.SwipeAction.ACTION_UP
          ? -1
          : 1
      );
    },
    _getActionId: function _getActionId(axis, direction) {
      if (0 < direction) {
        return "x" === axis
          ? window.SwipeAction.ACTION_RIGHT
          : window.SwipeAction.ACTION_DOWN;
      } else {
        return "x" === axis
          ? window.SwipeAction.ACTION_LEFT
          : window.SwipeAction.ACTION_UP;
      }
    },
    _getSwipingDirection: function _getSwipingDirection(e, axis) {
      return 0 < e.detail["d" + axis] ? 1 : -1;
    },
    _onTrack: function _onTrack(e) {
      if (!this.isSwipedAway && !this.gestureDisabled) {
        switch (e.detail.state) {
          case "start":
            this._swipeStart(e);
            break;
          case "track":
            if (this.isSwiping) {
              this._swipeUpdate(e);
            }
            break;
          case "end":
            if (this.isSwiping) {
              this._swipeEnd(e);
            }
            break;
        }
      }
    },
    _swipeStart: function _swipeStart(e) {
      this._mutationObserverPaused = !0;
      this._gesture = {
        axis: _Mathabs(e.detail.dx) > _Mathabs(e.detail.dy) ? "x" : "y"
      };
      var oppositeAxis = "x" === this._gesture.axis ? "y" : "x";
      this._gesture.direction = this._getSwipingDirection(
        e,
        this._gesture.axis
      );
      this._gesture.lastTimestamp = Date.now();
      this._updateActions(this._gesture.axis, this._gesture.direction);
      var validateSwipe =
        this._currentAction &&
        _Mathabs(e.detail["d" + oppositeAxis]) <=
          this._OPPOSITE_AXIS_MAX_SCROLLING_THREASHOLD;
      this._setIsSwiping(validateSwipe);
      if (!validateSwipe) {
        return;
      }
      this.target.style.willChange = "transform";
      this._applyGestureTranslation(
        e.detail["d" + this._gesture.axis],
        this._gesture.axis
      );
    },
    _swipeUpdate: function _swipeUpdate(e) {
      var newSwipingDirection = this._getSwipingDirection(
          e,
          this._gesture.axis
        ),
        track = e.detail["d" + this._gesture.axis];
      if (newSwipingDirection != this._gesture.direction) {
        this._gesture.direction = newSwipingDirection;
        this._updateActions(this._gesture.axis, this._gesture.direction);
        this.target.style.opacity = 1;
      }
      var newTimestamp = Date.now();
      this._gesture.lastDelta = e.detail["dd" + this._gesture.axis];
      this._gesture.lastDeltaDuration =
        newTimestamp - this._gesture.lastTimestamp;
      this._gesture.lastTimestamp = newTimestamp;
      this._applyGestureTranslation(track, this._gesture.axis);
      if (this._currentAction.fade) {
        this.target.style.opacity =
          1 - _Mathabs(track) / this._currentAction.size;
      }
    },
    _swipeEnd: function _swipeEnd(e) {
      var absTranslation = _Mathabs(e.detail["d" + this._gesture.axis]),
        transition;
      if (
        absTranslation >= this._currentAction.size &&
        !this._currentAction.rubberBand
      ) {
        transition = "";
      } else if (
        absTranslation < this._currentAction.size &&
        this._gesture.lastDelta * this._gesture.direction >
          this._SWIPE_SPEED_THREASHOLD
      ) {
        transition = "all ";
        transition += Math.floor(
          _Mathmin(
            200,
            ((this._currentAction.size - absTranslation) /
              (this._gesture.lastDelta * this._gesture.direction)) *
              this._gesture.lastDeltaDuration
          )
        );
        transition += "ms linear";
      } else if (absTranslation >= this._currentAction.size / 2) {
        transition = this._SWIPE_TRANSITION;
      } else {
        this._snapBack(!0);
        return;
      }
      this._swipeAway(this._currentAction, transition);
    },
    _updateActions: function _updateActions(axis, direction) {
      var actionId = this._getActionId(axis, direction);
      this._currentAction = this._actionsMap[actionId];
      for (actionId in this._actionsMap) {
        (0, _polymerDom.dom)(this._actionsMap[actionId].node).classList.remove(
          "visible-action"
        );
      }
      if (this._currentAction) {
        (0, _polymerDom.dom)(this._currentAction.node).classList.add(
          "visible-action"
        );
      }
    },
    _swipeAway: function _swipeAway(action, transition) {
      this.target.style.transition = transition;
      this._willBeSwipedAway = !0;
      if (action.fade) {
        (0, _polymerDom.dom)(this.target).classList.add("fade");
      }
      _polymerLegacy.Polymer.Base.transform(
        this._getTranslate3d(action.direction * action.size, action.axis),
        this.target
      );
      if (!transition) {
        this._cleanupAfterTransition();
      }
    },
    _snapBack: function _snapBack(animate) {
      if (this.isSwiping || this.isSwipedAway) {
        (0, _polymerDom.dom)(this.target).classList.add("snap-back");
      }
      if (animate) {
        (0, _polymerDom.dom)(this.target).classList.add("animated");
      } else {
        this.target.style.transition = "";
        this._cleanupAfterTransition();
      }
    },
    _onTransitionEnd: function _onTransitionEnd(e) {
      if ((0, _polymerDom.dom)(e).rootTarget === this.target) {
        e.stopPropagation();
        if ("transform" === e.propertyName) {
          this._cleanupAfterTransition();
        }
      }
    },
    _cleanupAfterTransition: function _cleanupAfterTransition() {
      if (this._willBeSwipedAway) {
        this._willBeSwipedAway = !1;
        this._changeActivatedAction(this._currentAction);
        this._fireEvent("swiped-away");
        return;
      } else if (
        (0, _polymerDom.dom)(this.target).classList.contains("snap-back")
      ) {
        this._changeActivatedAction(void 0);
        this._fireEvent("swipe-canceled");
      }
      this._mute--;
    },
    _fireEvent: function _fireEvent(eventName) {
      if (!this._mute) {
        this.fire(eventName, {
          action: this._currentAction,
          gesture: this._gesture
        });
      }
    },
    _changeActivatedAction: function _changeActivatedAction(action) {
      var actionId = action ? action.id : void 0;
      if (this.activatedActionId !== actionId) {
        this._activatedActionIdAlreadyChanged = !0;
        this.activatedActionId = actionId;
      }
      if (!action) {
        _polymerLegacy.Polymer.Base.transform("", this.target);
        this.target.style.opacity = "";
        var classList = (0, _polymerDom.dom)(this.target).classList;
        classList.remove("snap-back");
        classList.remove("animated");
        classList.remove("fade");
      }
      this._setActivatedAction(action);
      this.target.style.transition = "";
      this.target.style.willChange = "";
      this._gesture = void 0;
      this._mutationObserverPaused = !1;
      this._setIsSwipedAway(!!action);
      this._setIsSwiping(!1);
    },
    _getTranslate3d: function _getTranslate3d(translation, axis) {
      var t = "x" === axis ? translation + "px, 0" : "0, " + translation + "px";
      return "translate3d(" + t + ", 0)";
    },
    _applyGestureTranslation: function _applyGestureTranslation(track, axis) {
      var translation = track;
      if (!this._currentAction.rubberBand || this._currentAction.fade) {
        translation =
          this._currentAction.direction *
          _Mathmin(_Mathabs(translation), this._currentAction.size);
      } else {
        translation = this._applyRubberBand(translation);
      }
      _polymerLegacy.Polymer.Base.transform(
        this._getTranslate3d(translation, axis),
        this.target
      );
    },
    _applyRubberBand: function _applyRubberBand(track) {
      var absTrack = _Mathabs(track),
        rubberBandTrackLength = Math.max(
          this._gesture.direction *
            (this._currentAction.size + this._currentAction.rubberBand),
          3.5 * this._currentAction.rubberBand
        ),
        actionSizePlusRubberBandTrack =
          rubberBandTrackLength + this._currentAction.size;
      if (
        absTrack > this._currentAction.size &&
        absTrack < actionSizePlusRubberBandTrack
      ) {
        return (
          this._gesture.direction *
          this._rubberBand(
            absTrack,
            this._currentAction.size,
            rubberBandTrackLength,
            this._currentAction.rubberBand
          )
        );
      }
      if (absTrack >= actionSizePlusRubberBandTrack) {
        if (!this._currentAction.maxRubberBandReached) {
          this._currentAction.maxRubberBandReached = !0;
          this._fireEvent("swipe-rubber-band-limit");
        }
        return (
          this._gesture.direction *
          (this._currentAction.size + this._currentAction.rubberBand)
        );
      }
      return track;
    },
    _rubberBand: function _rubberBand(
      currentTrack,
      trackForEffectStart,
      trackForEffectPeak,
      maxResult
    ) {
      var res = (currentTrack - trackForEffectStart) / trackForEffectPeak;
      return _Mathmin(
        -maxResult * res * (res - 2) + trackForEffectStart,
        currentTrack
      );
    }
  });
  Object.defineProperty(window.SwipeAction, "ACTION_LEFT", {
    get: function get() {
      return "left";
    }
  });
  Object.defineProperty(window.SwipeAction, "ACTION_RIGHT", {
    get: function get() {
      return "right";
    }
  });
  Object.defineProperty(window.SwipeAction, "ACTION_UP", {
    get: function get() {
      return "up";
    }
  });
  Object.defineProperty(window.SwipeAction, "ACTION_DOWN", {
    get: function get() {
      return "down";
    }
  });
});