!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("@polymer/iron-icons/iron-icons.js"),require("@polymer/paper-input/paper-input.js"),require("@polymer/paper-tooltip/paper-tooltip.js"),require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js")):"function"==typeof define&&define.amd?define(["@polymer/iron-icons/iron-icons.js","@polymer/paper-input/paper-input.js","@polymer/paper-tooltip/paper-tooltip.js","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/legacy/polymer.dom.js"],n):n(null,null,null,e.polymerLegacy_js,e.polymer_dom_js)}(this,function(e,n,t,o,r){"use strict";var l=document.createElement("div");function a(){var e,n,t=(e=['\n  <custom-style>\n    <style is="custom-style">\n      :host {\n        display: flex;\n        align-items: flex-end;\n        justify-content: space-between;\n        width: 100%;\n      }\n      :host #input {\n        flex-grow: 2;\n        margin-right: 4px;\n        --paper-input-container-input-color: var(--simple-search-input-text-color, #000);\n        --paper-input-container-focus-color: var(--simple-search-input-line-color, #000);\n        --paper-input-container-color: var(--simple-search-input-placeholder-color, #222);\n        color: var(--simple-search-input-placeholder-color, #222);\n        @apply --simple-search-container;\n      }\n      :host #xofy {\n        margin: 8px;\n      }\n      :host button {\n        margin: 8px 0 8px;\n        color: var(--simple-search-button-color, #111);\n        background-color: var(--simple-search-button-bg-color, #eee);\n        border-color: var(--simple-search-button-border-color, #ccc);\n        @apply --simple-search-button;\n      }\n      :host button:not([disabled]):focus,\n      :host button:not([disabled]):hover {\n        cursor: pointer;\n        color: var(--simple-search-button-hover-color, #000);\n        background-color: var(--simple-search-button-hover-bg-color, #fff);\n        border-color: var(--simple-search-button-hover-border-color, #ddd);\n        @apply --simple-search-button-hover;\n      }\n      :host button[disabled] {\n        cursor: not-allowed;\n        color: var(--simple-search-button-disabled-color, #999);\n        background-color: var(--simple-search-button-disabled-bg-color, #eee);\n        border-color: var(--simple-search-button-disabled-border-color, #ccc);\n        @apply --simple-search-button-disabled;\n      }\n      :host button:not([controls]) {\n        display: none;\n      }\n      :host [shrink-hide] {\n        display: none;\n      }\n    </style>\n    </custom-style>\n    <paper-input id="input" always-float-label$="[[alwaysFloatLabel]]" label="[[searchInputLabel]]" no-label-float$="[[noLabelFloat]]">\n      <iron-icon icon="[[searchInputIcon]]" slot="prefix"></iron-icon>\n    </paper-input>\n    <div id="xofy" shrink-hide$="[[noSearch]]"></div>\n    <div shrink-hide$="[[noResults]]">\n      <button id="prev" aria-label="[[prevButtonLabel]]" aria-role="button" controls$="[[controls]]" disabled$="[[prevButtonDisabled]]" tabindex="0">\n        <iron-icon icon="[[prevButtonIcon]]"></iron-icon>\n      </button>\n      <paper-tooltip for="prev">[[prevButtonLabel]]</paper-tooltip>\n      <button id="next" aria-label="[[nextButtonLabel]]" aria-role="button" controls$="[[controls]]" disabled$="[[nextButtonDisabled]]" tabindex="0">\n        <iron-icon icon$="[[nextButtonIcon]]"></iron-icon>\n      </button>\n      <paper-tooltip for="next">[[nextButtonLabel]]</paper-tooltip>\n    </div>\n'],(n=['\n  <custom-style>\n    <style is="custom-style">\n      :host {\n        display: flex;\n        align-items: flex-end;\n        justify-content: space-between;\n        width: 100%;\n      }\n      :host #input {\n        flex-grow: 2;\n        margin-right: 4px;\n        --paper-input-container-input-color: var(--simple-search-input-text-color, #000);\n        --paper-input-container-focus-color: var(--simple-search-input-line-color, #000);\n        --paper-input-container-color: var(--simple-search-input-placeholder-color, #222);\n        color: var(--simple-search-input-placeholder-color, #222);\n        @apply --simple-search-container;\n      }\n      :host #xofy {\n        margin: 8px;\n      }\n      :host button {\n        margin: 8px 0 8px;\n        color: var(--simple-search-button-color, #111);\n        background-color: var(--simple-search-button-bg-color, #eee);\n        border-color: var(--simple-search-button-border-color, #ccc);\n        @apply --simple-search-button;\n      }\n      :host button:not([disabled]):focus,\n      :host button:not([disabled]):hover {\n        cursor: pointer;\n        color: var(--simple-search-button-hover-color, #000);\n        background-color: var(--simple-search-button-hover-bg-color, #fff);\n        border-color: var(--simple-search-button-hover-border-color, #ddd);\n        @apply --simple-search-button-hover;\n      }\n      :host button[disabled] {\n        cursor: not-allowed;\n        color: var(--simple-search-button-disabled-color, #999);\n        background-color: var(--simple-search-button-disabled-bg-color, #eee);\n        border-color: var(--simple-search-button-disabled-border-color, #ccc);\n        @apply --simple-search-button-disabled;\n      }\n      :host button:not([controls]) {\n        display: none;\n      }\n      :host [shrink-hide] {\n        display: none;\n      }\n    </style>\n    </custom-style>\n    <paper-input id="input" always-float-label\\$="[[alwaysFloatLabel]]" label="[[searchInputLabel]]" no-label-float\\$="[[noLabelFloat]]">\n      <iron-icon icon="[[searchInputIcon]]" slot="prefix"></iron-icon>\n    </paper-input>\n    <div id="xofy" shrink-hide\\$="[[noSearch]]"></div>\n    <div shrink-hide\\$="[[noResults]]">\n      <button id="prev" aria-label="[[prevButtonLabel]]" aria-role="button" controls\\$="[[controls]]" disabled\\$="[[prevButtonDisabled]]" tabindex="0">\n        <iron-icon icon="[[prevButtonIcon]]"></iron-icon>\n      </button>\n      <paper-tooltip for="prev">[[prevButtonLabel]]</paper-tooltip>\n      <button id="next" aria-label="[[nextButtonLabel]]" aria-role="button" controls\\$="[[controls]]" disabled\\$="[[nextButtonDisabled]]" tabindex="0">\n        <iron-icon icon\\$="[[nextButtonIcon]]"></iron-icon>\n      </button>\n      <paper-tooltip for="next">[[nextButtonLabel]]</paper-tooltip>\n    </div>\n'])||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return a=function(){return t},t}l.setAttribute("style","display: none;"),l.innerHTML='<dom-module id="simple-search-content">\n<template>\n  <style>\n    :host #content {\n      @apply --simple-search-content;\n    }\n    :host #content[match-number]{\n      color: var(--simple-search-match-text-color, #000);\n      background-color: var(--simple-search-match-bg-color, #f0f0f0);\n      border: 1px solid; \n      border-color: var(--simple-search-match-border-color, #ddd);\n      padding: 0.16px 4px;\n      border-radius: 0.16px;\n      font-weight: bold;\n      @apply --simple-search-match;\n    }\n  </style>\n    <span id="content">\n      <template is="dom-repeat" items="[[_searchedContent]]">\n        <span match-number$="[[item.matchNumber]]" tabindex$="[[_getTabIndex(item.matchNumber)]]">[[item.text]]</span>\n      </template>\n    </span>\n  </template>\n\n  \n</dom-module>',document.head.appendChild(l),o.Polymer({is:"simple-search-content",properties:{content:{type:String,value:null}},enableSearch:function(e){var n=this,t=[{matched:!1,text:n.content}];null===t[0].text&&(t[0].text=r.dom(n).innerHTML),n.setContent(t),e.addEventListener("search",function(){n.setContent(t),n.setContent(e.findMatches(t))}),e.addEventListener("goto-result",function(e){n.focus(e.detail)})},setContent:function(e){this._searchedContent=e},focus:function(e){var n=this.$.content.querySelector('[match-number="'+e+'"]');null!=n&&n.focus()},_getTabIndex:function(e){return null!=e?"1":""}}),o.Polymer({_template:o.html(a()),is:"simple-search",properties:{alwaysFloatLabel:{type:Boolean,value:!1},caseSensitive:{type:Boolean,value:null},controls:{type:String,value:null},nextButtonDisabled:{type:Boolean,computed:"_isNavButtonDisabled(resultPointer,resultCount,resultsSpan,1)"},nextButtonIcon:{type:String,value:"arrow-forward"},nextButtonLabel:{type:String,value:"next result"},noLabelFloat:{type:Boolean,value:!1},noResults:{type:Boolean,computed:"_hasNoResults(resultCount)"},noSearch:{type:Boolean,computed:"_hasNoSearch(searchTerms)"},prevButtonDisabled:{type:Boolean,computed:"_isNavButtonDisabled(resultPointer,resultCount,resultsSpan,-1)"},prevButtonIcon:{type:String,value:"arrow-back"},prevButtonLabel:{type:String,value:"previous result"},resultCount:{type:Number,value:0},resultPointer:{type:Number,value:0},resultsSpan:{type:String,computed:"_getResultsSpan(noSearch,resultPointer,resultCount)"},searchInputIcon:{type:String,value:"search"},searchInputLabel:{type:String,value:"search"},searchTerms:{type:Array,value:[]},target:{type:Object,value:null}},ready:function(){var e=this,n=e.$.input;e._getSearchText(n.value),e.addEventListener("change",function(t){e._getSearchText(n.value),e.resultCount=0,e.resultPointer=0,e.fire("search",e)}),e.$.prev.addEventListener("tap",function(n){e._navigateResults(-1)}),e.$.next.addEventListener("tap",function(n){e._navigateResults(1)})},_hasNoResults:function(e){return e<1},_hasNoSearch:function(e){return e.length<1},_getResultsSpan:function(e,n,t){var o="";return o=t>0&&n>0?n+"/"+t:" "+t,this.$.xofy.innerHTML=o,this.$.xofy.innerHTML},_navigateResults:function(e){this.resultPointer+e>0&&this.resultPointer+e<=this.resultCount&&(this.resultPointer+=e,this.fire("goto-result",this.resultPointer))},_isNavButtonDisabled:function(e,n,t,o){return""==t||e+o<=0||e+o>n},_getSearchText:function(e){var n=new Array;if(null!=e){n=e.split(/[\"\']/gm);for(var t=0;t<n.length;t++)n[t]=n[t].trim(),""===n[t]&&n.splice(t,1)}this.set("searchTerms",n.slice(0))},findMatches:function(e){for(var n=this,t=n.searchTerms,o=this.caseSensitive?"gm":"gim",r=e.slice(0),l=function(e){for(var t=0;t<r.length;t++)if(!1===r[t].matched){var l=new RegExp("\\b"+e+"\\b",o),a=r[t].text,i=a.search(l),s=i+e.length;if(i>-1){n.resultCount+=1;var c=a.slice(0,i),p=a.slice(i,s),u=a.slice(s,a.length);r.splice(t,1,{matched:!1,text:c,searchObject:n},{matched:!0,matchNumber:n.resultCount,text:p,searchObject:n},{matched:!1,text:u,searchObject:n})}}},a=0;a<t.length;a++)l(t[a]);return n.resultPointer=0,r}})});
//# sourceMappingURL=simple-search.umd.js.map
