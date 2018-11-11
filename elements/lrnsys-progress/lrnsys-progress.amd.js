define(["./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/paper-progress/paper-progress.js","./lib/lrnsys-progress-circle.js"],function(_polymerLegacy){"use strict";function _templateObject_caddb390e5f711e8b54db5f0b7f5f644(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        margin-top: 24px;\n      }\n      :host([size=\"tiny\"]) {\n        font-size: 12.8px;\n      }\n      :host([size=\"small\"]) {\n        font-size: 19.2px;\n      }\n      :host([size=\"medium\"]) {\n        font-size: 25.6px;\n      }\n      :host([size=\"large\"]) {\n        font-size: 44.8px;\n      }\n      :host([size=\"x-large\"]) {\n        font-size: 64px;\n      }\n      :host([size=\"epic\"]) {\n        font-size: 96px;\n      }\n      #circle-container {\n        display: flex;\n        justify-content:space-between;\n        margin: -24px 0 0 0;\n        padding: 0;\n        list-style: none;\n      }\n      .progress-title {\n        position: absolute !important;\n        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n        clip: rect(1px, 1px, 1px, 1px);\n        overflow: hidden;\n        height: 1px;\n      }\n      paper-progress {\n        --paper-progress-height: 8px;\n        --paper-progress-transition-duration: 0.5s;\n        --paper-progress-transition-timing-function: ease;\n        --paper-progress-transition-delay: .4s;\n        width: 100%;\n      }\n      /* required to get the box shadow above the progress bar */\n      .circle-node {\n        z-index: 1;\n      }\n      ul#circle-container li.circle-node {\n        list-style-type: none;\n      }\n\n      :host([vertical]) {\n        width: max-content;\n      }\n      :host([vertical]) #circle-container {\n        display: block;\n      }\n      :host([vertical]) paper-progress {\n        display: none !important;\n      }\n      :host([vertical]) lrnsys-progress-circle {\n        margin: 16px 0;\n        padding: 0;\n        width: 100%;\n      }\n\n      lrnsys-progress-circle {\n        width: 40px;\n        height: 40px;\n        --lrnsys-progress-circle-size: 40px;\n        --lrnsys-progress-spinner-size: 32px;\n        --lrnsys-progress-icon-size: 24px;\n        --paper-spinner-stroke-width: 1.2px;\n      }\n\n    </style>\n    <iron-ajax id=\"ajax\" url=\"[[activeNodeURL]]\" handle-as=\"json\" last-response=\"{{nodeData}}\" last-error=\"{{nodeDataError}}\" on-response=\"handleNodeResponse\"></iron-ajax>\n    <h3 class=\"progress-title\">[[title]]</h3>\n    <paper-progress id=\"progress\" value=\"[[overallPercentage]]\"></paper-progress>\n    <ul id=\"circle-container\">\n      <template is=\"dom-repeat\" items=\"[[items]]\" as=\"item\">\n        <li class=\"circle-node\">\n          <lrnsys-progress-circle play-finish-sound=\"[[soundFinish]]\" play-sound=\"[[sound]]\" complete-sound=\"[[completeSound]]\" finished-sound=\"[[finishedSound]]\" active=\"[[_isActive(index, active)]]\" step=\"[[index]]\" label=\"[[item.title]]\" icon=\"[[item.icon]]\" icon-complete=\"[[item.iconComplete]]\" data-url=\"[[item.dataUrl]]\" url=\"[[item.url]]\" status=\"[[item.status]]\" value=\"[[item.value]]\" max=\"[[item.max]]\" stroke-width=\"[[strokeWidth]]\" tool-tip=\"[[!vertical]]\" list-view=\"[[vertical]]\" class$=\"[[size]]\">\n            <span slot=\"description\">[[item.description]]</span>\n          </lrnsys-progress-circle>\n        </li>\n      </template>\n    </ul>\n"],["\n    <style>\n      :host {\n        display: block;\n        margin-top: 24px;\n      }\n      :host([size=\"tiny\"]) {\n        font-size: 12.8px;\n      }\n      :host([size=\"small\"]) {\n        font-size: 19.2px;\n      }\n      :host([size=\"medium\"]) {\n        font-size: 25.6px;\n      }\n      :host([size=\"large\"]) {\n        font-size: 44.8px;\n      }\n      :host([size=\"x-large\"]) {\n        font-size: 64px;\n      }\n      :host([size=\"epic\"]) {\n        font-size: 96px;\n      }\n      #circle-container {\n        display: flex;\n        justify-content:space-between;\n        margin: -24px 0 0 0;\n        padding: 0;\n        list-style: none;\n      }\n      .progress-title {\n        position: absolute !important;\n        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n        clip: rect(1px, 1px, 1px, 1px);\n        overflow: hidden;\n        height: 1px;\n      }\n      paper-progress {\n        --paper-progress-height: 8px;\n        --paper-progress-transition-duration: 0.5s;\n        --paper-progress-transition-timing-function: ease;\n        --paper-progress-transition-delay: .4s;\n        width: 100%;\n      }\n      /* required to get the box shadow above the progress bar */\n      .circle-node {\n        z-index: 1;\n      }\n      ul#circle-container li.circle-node {\n        list-style-type: none;\n      }\n\n      :host([vertical]) {\n        width: max-content;\n      }\n      :host([vertical]) #circle-container {\n        display: block;\n      }\n      :host([vertical]) paper-progress {\n        display: none !important;\n      }\n      :host([vertical]) lrnsys-progress-circle {\n        margin: 16px 0;\n        padding: 0;\n        width: 100%;\n      }\n\n      lrnsys-progress-circle {\n        width: 40px;\n        height: 40px;\n        --lrnsys-progress-circle-size: 40px;\n        --lrnsys-progress-spinner-size: 32px;\n        --lrnsys-progress-icon-size: 24px;\n        --paper-spinner-stroke-width: 1.2px;\n      }\n\n    </style>\n    <iron-ajax id=\"ajax\" url=\"[[activeNodeURL]]\" handle-as=\"json\" last-response=\"{{nodeData}}\" last-error=\"{{nodeDataError}}\" on-response=\"handleNodeResponse\"></iron-ajax>\n    <h3 class=\"progress-title\">[[title]]</h3>\n    <paper-progress id=\"progress\" value=\"[[overallPercentage]]\"></paper-progress>\n    <ul id=\"circle-container\">\n      <template is=\"dom-repeat\" items=\"[[items]]\" as=\"item\">\n        <li class=\"circle-node\">\n          <lrnsys-progress-circle play-finish-sound=\"[[soundFinish]]\" play-sound=\"[[sound]]\" complete-sound=\"[[completeSound]]\" finished-sound=\"[[finishedSound]]\" active=\"[[_isActive(index, active)]]\" step=\"[[index]]\" label=\"[[item.title]]\" icon=\"[[item.icon]]\" icon-complete=\"[[item.iconComplete]]\" data-url=\"[[item.dataUrl]]\" url=\"[[item.url]]\" status=\"[[item.status]]\" value=\"[[item.value]]\" max=\"[[item.max]]\" stroke-width=\"[[strokeWidth]]\" tool-tip=\"[[!vertical]]\" list-view=\"[[vertical]]\" class\\$=\"[[size]]\">\n            <span slot=\"description\">[[item.description]]</span>\n          </lrnsys-progress-circle>\n        </li>\n      </template>\n    </ul>\n"]);_templateObject_caddb390e5f711e8b54db5f0b7f5f644=function(){return data};return data}(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_caddb390e5f711e8b54db5f0b7f5f644()),is:"lrnsys-progress",listeners:{"node-is-active":"_bubbleUpChangeActive","node-status-change":"_statusChanged"},properties:{disableAjaxCalls:{type:Boolean,value:!1,reflectToAttribute:!0},items:{type:Array,value:[],notify:!0,observer:"_itemsChanged"},sound:{type:Boolean,value:!1,reflectToAttribute:!0},soundFinish:{type:Boolean,value:!1,reflectToAttribute:!0},completeSound:{type:String,value:"assets/complete.mp3",reflectToAttribute:!0},finishedSound:{type:String,value:"assets/finished.mp3",reflectToAttribute:!0},title:{type:String,value:"Steps to completion",reflectToAttribute:!0},keyItems:{type:Array,value:[],notify:!0},active:{type:Number,value:0,notify:!0,reflectToAttribute:!0,observer:"_activeChanged"},progressiveUnlock:{type:Boolean,value:!0,reflectToAttribute:!0,notify:!0},state:{type:String,value:null,reflectToAttribute:!0,observer:"_reportState"},overallPercentage:{type:Number,computed:"_overallPercentageCompute(items, active)",reflectToAttribute:!0},_responseList:{type:Array,value:[]},activeNodeResponse:{type:String,value:"",observer:"_activeResponseChange"},nodeData:{type:Object,value:[]},nodeDataError:{type:Object,value:[],observer:"_handleNodeError"},vertical:{type:Boolean,value:!1},size:{type:String,value:"medium",notify:!0,reflectToAttribute:!0},strokeWidth:{type:Number,computed:"_getStrokeWidth(size)"}},_getStrokeWidth:function _getStrokeWidth(size){var width=4;if("tiny"==size){width=3}else if("small"==size){width=4}else if("medium"==size){width=5}else if("large"==size){width=6}else if("x-large"==size){width=7}else if("epic"==size){width=8}return width},_reportState:function _reportState(newValue){if(babelHelpers.typeof(newValue)!==babelHelpers.typeof(null)){this.fire("progress-state-change",{state:this.state,active:this.items[this.active]})}},_itemsChanged:function _itemsChanged(newValue,oldValue){var _this=this;if(babelHelpers.typeof(oldValue)!=="undefined"&&newValue.length!=oldValue.length&&babelHelpers.typeof(this._responseList[this.active])==="undefined"){newValue[this.active].status="loading";this.set("items."+this.active+".status","loading");if(babelHelpers.typeof(newValue[this.active].dataUrl)!=="undefined"&&!this.disableAjaxCalls){this.$.ajax.url=newValue[this.active].dataUrl;this.$.ajax.generateRequest()}else{setTimeout(function(){newValue[_this.active].status="available";_this.set("items."+_this.active+".status","available");_this._responseList[_this.active]={};_this.activeNodeResponse=_this._responseList[_this.active]},1200)}}},_isActive:function _isActive(index,active){return index===active},_activeResponseChange:function _activeResponseChange(value){this.fire("progress-response-loaded",{response:value})},_bubbleUpChangeActive:function _bubbleUpChangeActive(e){this.active=e.target.step},_activeChanged:function _activeChanged(){var _this2=this;this.state="active item is "+this.active;this.items.forEach(function(element,index){if("disabled"==_this2.items[index].status){if(0!=index&&_this2.progressiveUnlock&&"complete"==_this2.items[index-1].status){_this2.items[index].status="loading";_this2.set("items."+index+".status","loading")}}else if(_this2.items[index].value>=_this2.items[index].max&&index==_this2.items.length-1){_this2.items[index].status="finished";_this2.set("items."+index+".status","finished")}else if(_this2.items[index].value>=_this2.items[index].max){_this2.items[index].status="complete";_this2.set("items."+index+".status","complete")}else if(index==_this2.active){if(babelHelpers.typeof(_this2._responseList[index])==="undefined"){_this2.items[index].status="loading";_this2.set("items."+index+".status","loading")}else{_this2.activeNodeResponse=_this2._responseList[index];_this2.items[index].status="available";_this2.set("items."+index+".status","available")}}else{_this2.items[index].status="available";_this2.set("items."+index+".status","available")}})},_statusChanged:function _statusChanged(e){var _this3=this;if("loading"==e.target.status){if(babelHelpers.typeof(this.items[this.active].dataUrl)!=="undefined"&&!this.disableAjaxCalls){this.$.ajax.url=this.items[this.active].dataUrl;this.$.ajax.generateRequest()}else{setTimeout(function(){_this3.items[_this3.active].status="available";_this3.set("items."+_this3.active+".status","available");_this3._responseList[_this3.active]={};_this3.activeNodeResponse=_this3._responseList[_this3.active]},1500)}}else if("complete"==e.target.status&&this.items.length===this.active+1){setTimeout(function(){_this3.items[_this3.active].status="finished";_this3.set("items."+_this3.active+".status","finished")},100)}},handleNodeResponse:function handleNodeResponse(e){var _this4=this,detail=e.detail;if(babelHelpers.typeof(detail.response)===babelHelpers.typeof(null)){setTimeout(function(){_this4.items[_this4.active].status="available";_this4.set("items."+_this4.active+".status","available");_this4._responseList[_this4.active]=detail.response;_this4.activeNodeResponse=_this4._responseList[_this4.active]},1500)}else{this.items[this.active].status="available";this.set("items."+this.active+".status","available");this._responseList[this.active]=detail.response;this.activeNodeResponse=this._responseList[this.active]}},_handleNodeError:function _handleNodeError(newValue,oldValue){if(babelHelpers.typeof(oldValue)!=="undefined"&&null!=newValue&&0!=newValue.length){this._responseList[this.active]=newValue;this.activeNodeResponse=this._responseList[this.active];this.items[this.active].status="available";this.set("items."+this.active+".status","available");this.fire("node-load-failed",{message:newValue,node:this.items[this.active]})}},_overallPercentageCompute:function _overallPercentageCompute(items,active){this.$.progress.classList.add("transiting");return 100*(active/(items.length-1))},changePercentage:function changePercentage(percentage,mode){var newp=0;if("add"==mode){newp=this.items[this.active].value+percentage}else if("subtract"==mode){newp=this.items[this.active].value-percentage}else{newp=percentage}if(newp>=this.items[this.active].max){if(this.items.length==this.active+1){this.state="finished";this.items[this.active].status="finished";this.set("items."+this.active+".status","finished");this.items[this.active].value=this.items[this.active].max;this.set("items."+this.active+".value",this.items[this.active].max)}else{this.items[this.active].value=this.items[this.active].max;this.set("items."+this.active+".value",this.items[this.active].max)}if(this.items.length>this.active+1){if(this.progressiveUnlock&&"complete"==this.items[this.active].status&&"disabled"==this.items[this.active+1].status||babelHelpers.typeof(this._responseList[this.active+1])==="undefined"){this.items[this.active+1].status="loading";this.set("items."+(this.active+1)+".status","loading")}this.state="active item is "+(this.active+1);this.active=this.active+1}}else{this.items[this.active].value=newp;this.set("items."+this.active+".value",newp)}},updateItems:function updateItems(op,item){var response=!1;if("push"==op){this.push("items",item);response=!0}else if("pop"==op){response=this.pop("items")}else if("splice"==op){this.splice("items",this.items.length,0,item);response=!0}var active=this.active;this.set("active",0);this.set("active",active);return response}})});