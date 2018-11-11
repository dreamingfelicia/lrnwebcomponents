define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/iron-a11y-keys/iron-a11y-keys.js",
  "../node_modules/@lrnwebcomponents/relative-heading/relative-heading.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_9548b3a0e5f811e8a9fbed540f2b1eca() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: none;\n      }\n      :host #desc {\n        margin: 0 0 15px;\n      }\n      @media print {\n        :host {\n          display: block;\n        }\n      }\n    </style>\n    <relative-heading hidden$="[[!label]]" id="heading" text$="[[label]]">\n    </relative-heading>\n    <div id="desc"><slot></slot></div>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: none;\n      }\n      :host #desc {\n        margin: 0 0 15px;\n      }\n      @media print {\n        :host {\n          display: block;\n        }\n      }\n    </style>\n    <relative-heading hidden\\$="[[!label]]" id="heading" text\\$="[[label]]">\n    </relative-heading>\n    <div id="desc"><slot></slot></div>\n'
      ]
    );
    _templateObject_9548b3a0e5f811e8a9fbed540f2b1eca = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_9548b3a0e5f811e8a9fbed540f2b1eca()
    ),
    is: "lrndesign-imagemap-hotspot",
    properties: {
      label: { type: String, value: null },
      hotspotId: { type: String, value: null }
    },
    setParentHeading: function setParentHeading(parent) {
      this.$.heading._setParent(parent);
    }
  });
});
