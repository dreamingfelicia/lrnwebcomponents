import {
  html,
  Polymer
} from "./node_modules/@polymer/polymer/polymer-legacy.js";
import * as async from "./node_modules/@polymer/polymer/lib/utils/async.js";
import { IronResizableBehavior } from "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js";
window.ResponsiveUtility = {};
window.ResponsiveUtility.instance = null;
Polymer({
  _template: html`
    <style>
      :host {
        display: inline;
      }
    </style>
    <slot></slot>
`,
  is: "responsive-utility",
  behaviors: [IronResizableBehavior],
  listeners: { "iron-resize": "_onIronResize" },
  properties: { targets: { type: Array, value: [] } },
  created: function() {
    let root = this;
    if (null == window.ResponsiveUtility.instance) {
      window.ResponsiveUtility.instance = root;
    }
    document.body.addEventListener("responsive-element", function(e) {
      let relative =
        e.detail.relativeToParent !== void 0 &&
        null !== e.detail.relativeToParent
          ? e.detail.relativeToParent
          : !0;
      if ("ResizeObserver" in window && !0 === relative.relativeToParent) {
        let parent = e.detail.element.parentNode,
          resize = new ResizeObserver(function() {
            window.ResponsiveUtility.setSize(e.detail);
          });
        if (parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          parent = parent.host;
        }
        resize.observe(parent);
      }
      root.push("targets", e.detail);
      window.ResponsiveUtility.setSize(e.detail);
    });
    document.body.addEventListener("delete-responsive-element", function(e) {
      for (let i = 0; i < this.targets.length; i++) {
        if (e.detail === target[i]) root.splice("targets", i, 1);
      }
    });
  },
  _onIronResize: function() {
    for (let i = 0; i < this.targets.length; i++) {
      window.ResponsiveUtility.setSize(this.targets[i]);
    }
  }
});
window.ResponsiveUtility.requestAvailability = function() {
  if (null == window.ResponsiveUtility.instance) {
    window.ResponsiveUtility.instance = document.createElement(
      "responsive-utility"
    );
  }
  document.body.appendChild(window.ResponsiveUtility.instance);
};
window.ResponsiveUtility.setSize = function(target) {
  let element = target.element,
    attribute =
      target.attribute !== void 0 && null !== target.attribute
        ? target.attribute
        : "responsive-size",
    size = window.ResponsiveUtility.getSize(target);
  if (
    element.getAttribute(attribute) === void 0 ||
    size !== element.getAttribute(attribute)
  ) {
    element.setAttribute(attribute, size);
  }
};
window.ResponsiveUtility.getSize = function(target) {
  let relative =
      target.relativeToParent !== void 0 && null !== target.relativeToParent
        ? target.relativeToParent
        : !0,
    testBreakpoint = function(width, breakpoint, def) {
      let val = breakpoint !== void 0 && null !== breakpoint ? breakpoint : def;
      return width < val;
    },
    size,
    width = (function() {
      if (null !== target.element.parentNode && !0 === relative) {
        if (
          target.element.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
        ) {
          return target.element.parentNode.host.offsetWidth;
        }
        return target.element.parentNode.offsetWidth;
      }
      return window.outerWidth;
    })();
  if (testBreakpoint(width, target.sm, 600)) {
    size = "xs";
  } else if (testBreakpoint(width, target.md, 900)) {
    size = "sm";
  } else if (testBreakpoint(width, target.lg, 1200)) {
    size = "md";
  } else if (testBreakpoint(width, target.xl, 1200)) {
    size = "lg";
  } else {
    size = "xl";
  }
  return size;
};