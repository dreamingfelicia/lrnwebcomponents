!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@polymer/polymer/polymer-legacy.js"),require("@polymer/paper-input/paper-input.js"),require("@polymer/paper-tooltip/paper-tooltip.js"),require("@polymer/paper-input/paper-input-behavior.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icon/iron-icon.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@polymer/paper-input/paper-input.js","@polymer/paper-tooltip/paper-tooltip.js","@polymer/paper-input/paper-input-behavior.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icon/iron-icon.js"],t):t(e.polymerLegacy_js,null,null,e.paperInputBehavior_js)}(this,function(e,t,n,i){"use strict";function r(){var e,t,n=(e=['\n    <style>\n      :host {\n        display: block;\n      }\n      iron-icon {\n        transition: .6s all ease-in;\n        width: 24px;\n        height: 24px;\n        margin-right: 4px;\n      }\n      paper-tooltip {\n        font-size: 11px;\n        --paper-tooltip-delay-in: 100;\n      }\n      #icon {\n        color: var(--paper-grey-400);\n        background-color: transparent;\n      }\n      :host([status="info"]) #icon {\n        color: var(--paper-green-400);\n      }\n      :host([status="notice"]) #icon {\n        color: var(--paper-grey-400);\n      }\n      :host([status="warning"]) #icon {\n        color: var(--paper-yellow-700);\n      }\n      :host([status="error"]) #icon {\n        color: var(--paper-red-900);\n      }\n      .element-invisible {\n        position: absolute !important;\n        clip: rect(1px, 1px, 1px, 1px);\n        overflow: hidden;\n        height: 1px;\n      }\n    </style>\n    <paper-input label="[[label]]" value="{{value}}" char-counter="[[charCounter]]" disabled="[[disabled]]" minlength="[[minlength]]" maxlength="[[minlength]]">\n      <iron-icon id="icon" icon="[[icon]]" slot="prefix"></iron-icon>\n    </paper-input>\n    <div class="element-invisible">[[__activeMessage]]</div>\n    <paper-tooltip for="icon" position="top" offset="20" fit-to-visible-bounds>\n        [[__activeMessage]]\n    </paper-tooltip>\n'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return r=function(){return n},n}e.Polymer({_template:e.html(r()),is:"paper-input-flagged",behaviors:[i.PaperInputBehavior],properties:{icon:{type:String,computed:"_iconFromStatus(status)"},status:{type:String,reflectToAttribute:!0,computed:"testStatus(flaggedInput, value)"},value:{type:String,notify:!0,value:""},flaggedInput:{type:Array,value:[{match:null,message:"Alt data is required for everything except decoration images.",status:"notice"},{match:"image",message:"Screenreaders will say the word image, don't put it in the descriptive text",status:"error"},{match:"photo",message:"Screenreaders will say the word image, don't put photo in the descriptive text",status:"error"},{match:"picture",message:"Screenreaders will say the word image, don't put picture in the descriptive text",status:"error"},{match:3,message:"Description not effective enough. This should be at least a sentance about what the image is.",status:"error"},{match:10,message:"Make sure your alt text is descriptive enough for those that can't see the media.",status:"warning"}]},inputSuccess:{type:Object,value:{message:"You passed our simple accessibility checks.",status:"info"}}},ready:function(){this.removeAttribute("tabindex")},testStatus:function(e,t){for(var n in e){if(null===e[n].match&&(""===t||null===t))return this.__activeMessage=e[n].message,e[n].status;if(!isNaN(e[n].match)&&t.split(/\s+/g).length<parseInt(e[n].match))return this.__activeMessage=e[n].message,e[n].status;if(t.toLowerCase().includes(e[n].match))return this.__activeMessage=e[n].message,e[n].status}return this.__activeMessage=this.inputSuccess.message,this.inputSuccess.status},_iconFromStatus:function(e){switch(e){case"error":return"icons:error";case"warning":case"notice":return"icons:warning";case"info":return"icons:info-outline";default:return"icons:info"}}})});
//# sourceMappingURL=paper-input-flagged.umd.js.map
