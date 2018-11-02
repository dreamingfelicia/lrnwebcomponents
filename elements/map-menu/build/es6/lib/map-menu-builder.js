import {
  html,
  Polymer
} from "../node_modules/@polymer/polymer/polymer-legacy.js";
import "./map-menu-submenu.js";
import "./map-menu-item.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
    </style>

    <template id="domRepeat" is="dom-repeat" items="[[items]]" as="item">
      <template is="dom-if" if="[[__hasChildren(item)]]">
        <map-menu-submenu title="[[item.title]]" id="[[item.id]]" url="[[item.url]]" icon="[[item.metadata.icon]]" open="[[item.active]]" avatar-label="[[item.avatarLabel]]">
          <map-menu-builder items="[[item.children]]"></map-menu-builder>
        </map-menu-submenu>
      </template>
      <template is="dom-if" if="[[!__hasChildren(item)]]">
        <map-menu-item title="[[item.title]]" id="[[item.id]]" url="[[item.url]]" icon="[[item.metadata.icon]]" active-path="[[activePath]]"></map-menu-item>
      </template>
    </template>
`,
  is: "map-menu-builder",
  properties: { items: { type: Array, value: [] } },
  __hasChildren: function(item) {
    return 0 < item.children.length;
  },
  _hasActiveChildren: function() {}
});