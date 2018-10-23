define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.TaskList = void 0;
  function _templateObject_65774ed0d70b11e8bcf32b3f4c1f4a19() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_65774ed0d70b11e8bcf32b3f4c1f4a19 = function() {
      return data;
    };
    return data;
  }
  var TaskList = (function(_PolymerElement) {
    babelHelpers.inherits(TaskList, _PolymerElement);
    function TaskList() {
      babelHelpers.classCallCheck(this, TaskList);
      return babelHelpers.possibleConstructorReturn(
        this,
        (TaskList.__proto__ || Object.getPrototypeOf(TaskList)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      TaskList,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                TaskList.prototype.__proto__ ||
                  Object.getPrototypeOf(TaskList.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              TaskList.haxProperties,
              TaskList.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_65774ed0d70b11e8bcf32b3f4c1f4a19()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Task list",
                description: "Automated conversion of task-list/",
                icon: "icons:android",
                color: "green",
                groups: ["List"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "task-list";
          }
        }
      ]
    );
    return TaskList;
  })(_polymerElement.PolymerElement);
  _exports.TaskList = TaskList;
  window.customElements.define(TaskList.tag, TaskList);
});
