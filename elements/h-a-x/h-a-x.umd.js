!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@lrnwebcomponents/hax-body/lib/hax-store.js"),require("@lrnwebcomponents/hax-body/lib/hax-panel.js"),require("@lrnwebcomponents/hax-body/lib/hax-manager.js"),require("@lrnwebcomponents/hax-body/lib/hax-autoloader.js"),require("@lrnwebcomponents/hax-body/hax-body.js"),require("@lrnwebcomponents/hax-body/lib/hax-app-picker.js"),require("@lrnwebcomponents/hax-body/lib/hax-app.js"),require("@lrnwebcomponents/hax-body/lib/hax-toolbar.js"),require("@lrnwebcomponents/hax-body/lib/hax-preferences-dialog.js"),require("@lrnwebcomponents/hax-body/lib/hax-stax-picker.js"),require("@lrnwebcomponents/hax-body/lib/hax-blox-picker.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icons/editor-icons.js"),require("@polymer/iron-icons/device-icons.js"),require("@polymer/iron-icons/hardware-icons.js"),require("@polymer/iron-icons/communication-icons.js"),require("@lrnwebcomponents/lrn-icons/lrn-icons.js"),require("@polymer/iron-icons/social-icons.js"),require("@polymer/iron-icons/av-icons.js"),require("@polymer/iron-icons/places-icons.js"),require("@polymer/iron-icons/maps-icons.js"),require("@polymer/iron-image/iron-image.js"),require("@lrnwebcomponents/hax-body/lib/hax-export-dialog.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/hax-body/lib/hax-store.js","@lrnwebcomponents/hax-body/lib/hax-panel.js","@lrnwebcomponents/hax-body/lib/hax-manager.js","@lrnwebcomponents/hax-body/lib/hax-autoloader.js","@lrnwebcomponents/hax-body/hax-body.js","@lrnwebcomponents/hax-body/lib/hax-app-picker.js","@lrnwebcomponents/hax-body/lib/hax-app.js","@lrnwebcomponents/hax-body/lib/hax-toolbar.js","@lrnwebcomponents/hax-body/lib/hax-preferences-dialog.js","@lrnwebcomponents/hax-body/lib/hax-stax-picker.js","@lrnwebcomponents/hax-body/lib/hax-blox-picker.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icons/editor-icons.js","@polymer/iron-icons/device-icons.js","@polymer/iron-icons/hardware-icons.js","@polymer/iron-icons/communication-icons.js","@lrnwebcomponents/lrn-icons/lrn-icons.js","@polymer/iron-icons/social-icons.js","@polymer/iron-icons/av-icons.js","@polymer/iron-icons/places-icons.js","@polymer/iron-icons/maps-icons.js","@polymer/iron-image/iron-image.js","@lrnwebcomponents/hax-body/lib/hax-export-dialog.js"],n):n(e.HAX={})}("undefined"!=typeof self?self:this,function(e){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function t(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function a(e,n,o){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,o){var t=[null];t.push.apply(t,n);var r=new(Function.bind.apply(e,t));return o&&i(r,o.prototype),r}).apply(null,arguments)}function c(e){var n="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(o=e,-1===Function.toString.call(o).indexOf("[native code]")))return e;var o;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return a(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i(t,e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,n,o){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,o){var t=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=r(e)););return e}(e,n);if(t){var i=Object.getOwnPropertyDescriptor(t,n);return i.get?i.get.call(o):i.value}})(e,n,o||e)}var u=function(e){function o(){var e,n,t,i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),n=this,(e=!(t=r(o).call(this))||"object"!=typeof t&&"function"!=typeof t?l(n):t).tag=o.tag;var a=o.properties;for(var c in a)a.hasOwnProperty(c)&&(e.hasAttribute(c)?e[c]=e.getAttribute(c):(e.setAttribute(c,a[c].value),e[c]=a[c].value));return e._queue=[],e.template=document.createElement("template"),e.attachShadow({mode:"open"}),i&&!window.HaxStore.ready||e.render(),window.addEventListener("hax-store-ready",e.render.bind(l(l(e)))),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(o,c(HTMLElement)),t(o,[{key:"html",get:function(){return"\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<hax-body>\n    <slot></slot>\n</hax-body>"}}],[{key:"properties",get:function(){return{appStore:{name:"appStore",type:"String",value:""}}}},{key:"tag",get:function(){return"h-a-x"}}]),t(o,[{key:"connectedCallback",value:function(){this.__HAXApplied||window.__HAXApplied||(window.__HAXApplied=this.__HAXApplied=this.applyHAX()),this._queue.length&&this._processQueue()}},{key:"_copyAttribute",value:function(e,n){var o=this.shadowRoot.querySelectorAll(n),t=this.getAttribute(e),r=null==t?"removeAttribute":"setAttribute",i=!0,a=!1,c=void 0;try{for(var l,s=o[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){l.value[r](e,t)}}catch(e){a=!0,c=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw c}}}},{key:"_queueAction",value:function(e){this._queue.push(e)}},{key:"_processQueue",value:function(){var e=this;this._queue.forEach(function(n){e["_".concat(n.type)](n.data)}),this._queue=[]}},{key:"_setProperty",value:function(e){var n=e.name,o=e.value;this[n]=o}},{key:"render",value:function(){if(!this.__rendered){this.__rendered=!0,this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,this.shadowRoot.appendChild(this.template.content.cloneNode(!0));var e=this.shadowRoot.querySelector("slot").assignedNodes(),o="";for(var t in e)"undefined"!==n(e[t].outerHTML)&&(o+=e[t].outerHTML);window.HaxStore.instance.activeHaxBody.importContent(o),window.HaxStore.instance.appStore=JSON.parse(this.getAttribute("app-store"))}}},{key:"applyHAX",value:function(){return window.HaxStore.requestAvailability(),document.body.appendChild(document.createElement("hax-panel")),document.body.appendChild(document.createElement("hax-manager")),document.body.appendChild(document.createElement("hax-app-picker")),document.body.appendChild(document.createElement("hax-stax-picker")),document.body.appendChild(document.createElement("hax-blox-picker")),document.body.appendChild(document.createElement("hax-preferences-dialog")),document.body.appendChild(document.createElement("hax-export-dialog")),document.body.appendChild(document.createElement("hax-autoloader")),!0}},{key:"disconnectedCallback",value:function(){s(r(o.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("hax-store-ready",this.render.bind(this))}},{key:"attributeChangedCallback",value:function(e,n,o){}}]),o}();window.customElements.define("h-a-x",u),e.HAX=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=h-a-x.umd.js.map
