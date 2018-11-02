define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./node_modules/@polymer/iron-image/iron-image.js",
  "./node_modules/@polymer/paper-card/paper-card.js",
  "./node_modules/@polymer/iron-icon/iron-icon.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_9a6d09b0dbb911e892675d0aa96972b5() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style include="materializecss-styles"></style>\n    <style>\n       :host {\n        display: inline-flex;\n      }\n      :host[size="micro"] {\n        transform: scale(.5);\n      }\n      :host[size="small"] {\n        transform: scale(.8);\n      }\n\n      paper-card {\n        border-radius: 4px;\n        margin: 0;\n        width: 100%;\n      }\n\n      .card-actions {\n        background-color: #f5f5f5;\n        border-radius: 0 0 4px 4px;\n        padding: 0 .5em;\n      }\n      .card-actions .card-action-details{\n        display: inline-block;\n        vertical-align: middle;\n        vertical-align: -webkit-baseline-middle;\n        width: 80%;\n      }\n      #avatar {\n        display: inline-block;\n        vertical-align: text-top;\n        transform: scale(.8);\n      }\n\n      .card-control-height {\n        height: 15rem;\n      }\n\n      [elevation="0"] {\n        border: solid 1px #EEEEEE;\n      }\n\n      .text-right {\n        text-align: right;\n      }\n\n      .text-left {\n        text-align: left;\n      }\n\n      .title {\n        color: #222;\n        font-size: .8em;\n        font-weight: 600;\n        line-height: 1.25em;\n        padding: 0 .75em;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: .5em;\n      }\n\n      .comments {\n        font-size: .75rem;\n        float: right;\n      }\n\n      .divider {\n        height: 1px;\n        width: 100%;\n        background: #efefef;\n      }\n\n      .project-icon {\n        --iron-icon-height: 100%;\n        --iron-icon-width: 100%;\n        overflow: hidden;\n        color: grey;\n      }\n      .project-icon:hover,\n      .project-icon:focus {\n        color: black;\n      }\n\n      .center {\n        margin: auto;\n        width: 80%;\n        padding: 1em;\n      }\n\n      .link {\n        font-size: 1em;\n        line-height: 1em;\n      }\n\n      .submission-info {\n        width: 100%;\n      }\n      .submission-preview {\n        height: 10em;\n      }\n\n      .card-content {\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n      }\n\n      .inline {\n        display: inline;\n      }\n\n    </style>\n    <paper-card elevation="[[elevation]]">\n      <div class="card-content card-control-height card-control-center">\n        <div class="submission-preview">\n          <iron-icon class="project-icon" icon="[[icon]]" hidden$="[[!icon]]"></iron-icon>\n          <iron-image style="width:100%; height:100%; background-color: lightgray;" sizing="cover" preload="" fade="" src="[[image]]" hidden$="[[!image]]"></iron-image>\n        </div>\n        <div class="submission-info">\n          <div class="divider"></div>\n          <div class="title">[[title]]</div>\n        </div>\n      </div>\n      <div class="card-actions">\n        <lrndesign-avatar id="avatar" label="[[author.name]]" src="[[author.avatar]]"></lrndesign-avatar>\n        <div class="card-action-details">\n          <span class="text-left author">[[author.display_name]]</span>\n          <span class="comments text-right">Comments: [[comments]]</span>\n        </div>\n      </div>\n    </paper-card>\n'
      ],
      [
        '\n    <style include="materializecss-styles"></style>\n    <style>\n       :host {\n        display: inline-flex;\n      }\n      :host[size="micro"] {\n        transform: scale(.5);\n      }\n      :host[size="small"] {\n        transform: scale(.8);\n      }\n\n      paper-card {\n        border-radius: 4px;\n        margin: 0;\n        width: 100%;\n      }\n\n      .card-actions {\n        background-color: #f5f5f5;\n        border-radius: 0 0 4px 4px;\n        padding: 0 .5em;\n      }\n      .card-actions .card-action-details{\n        display: inline-block;\n        vertical-align: middle;\n        vertical-align: -webkit-baseline-middle;\n        width: 80%;\n      }\n      #avatar {\n        display: inline-block;\n        vertical-align: text-top;\n        transform: scale(.8);\n      }\n\n      .card-control-height {\n        height: 15rem;\n      }\n\n      [elevation="0"] {\n        border: solid 1px #EEEEEE;\n      }\n\n      .text-right {\n        text-align: right;\n      }\n\n      .text-left {\n        text-align: left;\n      }\n\n      .title {\n        color: #222;\n        font-size: .8em;\n        font-weight: 600;\n        line-height: 1.25em;\n        padding: 0 .75em;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: .5em;\n      }\n\n      .comments {\n        font-size: .75rem;\n        float: right;\n      }\n\n      .divider {\n        height: 1px;\n        width: 100%;\n        background: #efefef;\n      }\n\n      .project-icon {\n        --iron-icon-height: 100%;\n        --iron-icon-width: 100%;\n        overflow: hidden;\n        color: grey;\n      }\n      .project-icon:hover,\n      .project-icon:focus {\n        color: black;\n      }\n\n      .center {\n        margin: auto;\n        width: 80%;\n        padding: 1em;\n      }\n\n      .link {\n        font-size: 1em;\n        line-height: 1em;\n      }\n\n      .submission-info {\n        width: 100%;\n      }\n      .submission-preview {\n        height: 10em;\n      }\n\n      .card-content {\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n      }\n\n      .inline {\n        display: inline;\n      }\n\n    </style>\n    <paper-card elevation="[[elevation]]">\n      <div class="card-content card-control-height card-control-center">\n        <div class="submission-preview">\n          <iron-icon class="project-icon" icon="[[icon]]" hidden\\$="[[!icon]]"></iron-icon>\n          <iron-image style="width:100%; height:100%; background-color: lightgray;" sizing="cover" preload="" fade="" src="[[image]]" hidden\\$="[[!image]]"></iron-image>\n        </div>\n        <div class="submission-info">\n          <div class="divider"></div>\n          <div class="title">[[title]]</div>\n        </div>\n      </div>\n      <div class="card-actions">\n        <lrndesign-avatar id="avatar" label="[[author.name]]" src="[[author.avatar]]"></lrndesign-avatar>\n        <div class="card-action-details">\n          <span class="text-left author">[[author.display_name]]</span>\n          <span class="comments text-right">Comments: [[comments]]</span>\n        </div>\n      </div>\n    </paper-card>\n'
      ]
    );
    _templateObject_9a6d09b0dbb911e892675d0aa96972b5 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_9a6d09b0dbb911e892675d0aa96972b5()
    ),
    is: "lrndesign-gallerycard",
    listeners: { mouseenter: "_mouseEnter", mouseleave: "_mouseLeave" },
    properties: {
      size: { type: String, notify: !0, reflectToAttribute: !0 },
      image: { type: String, notify: !0, reflectToAttribute: !0 },
      icon: { type: String, notify: !0, reflectToAttribute: !0 },
      title: { type: String, value: "Project", notify: !0 },
      author: {
        type: Object,
        value: { name: "author", display_name: "Author" },
        notify: !0
      },
      elevation: { type: Number, value: 1, reflectToAttribute: !0, notify: !0 },
      comments: { type: Number, value: 0, reflectToAttribute: !0, notify: !0 }
    },
    _mouseEnter: function _mouseEnter() {
      this.elevation += 2;
    },
    _mouseLeave: function _mouseLeave() {
      this.elevation -= 2;
    }
  });
});