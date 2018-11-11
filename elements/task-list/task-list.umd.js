!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/materializecss-styles/materializecss-styles.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/materializecss-styles/materializecss-styles.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t(e.polymerLegacy_js)}(this,function(e){"use strict";function t(){var e,r,i=(e=['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <h3><span property="oer:name">[[name]]</span></h3>\n    <ol>\n      <template is="dom-repeat" items="[[tasks]]" as="task">\n        <li><span property="oer:task">[[task.name]]</span></li>\n      </template>\n    </ol>\n'],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return t=function(){return i},i}e.Polymer({_template:e.html(t()),is:"task-list",behaviors:[HAXBehaviors.PropertiesBehaviors,MaterializeCSSBehaviors.ColorBehaviors,SchemaBehaviors.Schema],hostAttributes:{typeof:"oer:SupportingMaterial"},observers:["_valueChanged(tasks.*)"],properties:{name:{type:String,value:"Steps to completion"},relatedResource:{type:String},tasks:{type:Array,value:[],notify:!0},_resourceLink:{type:Object,computed:"_generateResourceLink(relatedResource)"}},_generateResourceLink:function(e){this._resourceLink&&document.head.removeChild(this._resourceLink);var t=document.createElement("link");return t.setAttribute("property","oer:forComponent"),t.setAttribute("content",e),document.head.appendChild(t),t},_valueChanged:function(e){for(var t in e.base)for(var r in e.base[t])this.notifyPath("tasks."+t+"."+r)},attached:function(){this.setHaxProperties({canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Task list",description:"A list of tasks which is an ordered list",icon:"icons:list",color:"orange",groups:["Content","Instructional"],handles:[],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"name",title:"Name",description:"Name of the list",inputMethod:"textfield",icon:"editor:title"},{property:"relatedResource",title:"Related resource",description:"A reference to the related Schema resource",inputMethod:"textfield",icon:"editor:title"}],configure:[{property:"name",title:"Name",description:"Name of the list",inputMethod:"textfield",icon:"editor:title"},{property:"relatedResource",title:"Related resource",description:"A reference to the related Schema resource",inputMethod:"textfield",icon:"editor:title"},{property:"tasks",title:"Tasks",description:"The tasks to be completed",inputMethod:"array",properties:[{property:"name",title:"Name",description:"Name of the task",inputMethod:"textfield",required:!0},{property:"link",title:"Link",description:"Optional link",inputMethod:"textfield"}]}],advanced:[]}})}})});
//# sourceMappingURL=task-list.umd.js.map
