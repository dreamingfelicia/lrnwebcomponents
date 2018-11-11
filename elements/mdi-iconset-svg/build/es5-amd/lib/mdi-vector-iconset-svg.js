define([
  "../node_modules/@polymer/iron-icon/iron-icon.js",
  "../node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js",
  "../node_modules/@polymer/polymer/lib/utils/html-tag.js"
], function(_ironIcon, _ironIconsetSvg, _htmlTag) {
  "use strict";
  function _templateObject_e87f2690e5f711e8b08b0516373de3b8() {
    var data = babelHelpers.taggedTemplateLiteral([
      '<iron-iconset-svg name="mdi-vector" size="24">\n  <svg>\n\n    <g id="vector-square">\n      <path d="M2,2H8V4H16V2H22V8H20V16H22V22H16V20H8V22H2V16H4V8H2V2M16,8V6H8V8H6V16H8V18H16V16H18V8H16M4,4V6H6V4H4M18,4V6H20V4H18M4,18V20H6V18H4M18,18V20H20V18H18Z"></path>\n    </g>\n\n  </svg>\n</iron-iconset-svg>'
    ]);
    _templateObject_e87f2690e5f711e8b08b0516373de3b8 = function() {
      return data;
    };
    return data;
  }
  var template = (0, _htmlTag.html)(
    _templateObject_e87f2690e5f711e8b08b0516373de3b8()
  );
  document.head.appendChild(template.content);
});
