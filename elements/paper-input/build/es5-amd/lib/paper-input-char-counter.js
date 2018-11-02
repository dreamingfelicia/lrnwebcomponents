define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/paper-styles/typography.js",
  "./paper-input-addon-behavior.js"
], function(_polymerLegacy, _typography, _paperInputAddonBehavior) {
  "use strict";
  function _templateObject_9345ca10dbb811e8a0f707d45fd382ad() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: inline-block;\n        float: right;\n\n        @apply --paper-font-caption;\n        @apply --paper-input-char-counter;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host-context([dir="rtl"]) {\n        float: left;\n      }\n    </style>\n\n    <span>[[_charCounterStr]]</span>\n'
    ]);
    _templateObject_9345ca10dbb811e8a0f707d45fd382ad = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_9345ca10dbb811e8a0f707d45fd382ad()
    ),
    is: "paper-input-char-counter",
    behaviors: [_paperInputAddonBehavior.PaperInputAddonBehavior],
    properties: { _charCounterStr: { type: String, value: "0" } },
    update: function update(state) {
      if (!state.inputElement) {
        return;
      }
      state.value = state.value || "";
      var counter = state.value.toString().length.toString();
      if (state.inputElement.hasAttribute("maxlength")) {
        counter += "/" + state.inputElement.getAttribute("maxlength");
      }
      this._charCounterStr = counter;
    }
  });
});