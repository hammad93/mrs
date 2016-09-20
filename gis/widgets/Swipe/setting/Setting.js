// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Swipe/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Swipe/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"style-section"\x3e\r\n    \x3cspan class\x3d"style-text"\x3e${nls.styleText}\x3c/span\x3e\r\n    \x3cdiv class\x3d"style-items"\x3e\r\n      \x3cdiv class\x3d"style-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"verticalNode"\x3e\r\n        \x3cdiv class\x3d"style-vertical style-item-image"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'swipe\'"\x3e\x3c/div\x3e\r\n        \x3clabel\x3e${nls.vertical}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"style-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"horizontalNode"\x3e\r\n        \x3cdiv class\x3d"style-horizontal style-item-image"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'swipe\'"\x3e\x3c/div\x3e\r\n        \x3clabel\x3e${nls.horizontal}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"style-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"scopeNode"\x3e\r\n        \x3cdiv class\x3d"style-scope style-item-image"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'swipe\'"\x3e\x3c/div\x3e\r\n        \x3clabel\x3e${nls.scope}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"layer-section"\x3e\r\n    \x3cspan class\x3d"layer-text" data-dojo-attach-point\x3d"layerTextNode"\x3e${nls.layerText}\x3c/span\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;" data-dojo-attach-point\x3d"swipeLayers"\x3e\x3c/div\x3e\r\n    \x3clabel class\x3d"layer-hint"\x3e${nls.layerHint}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Swipe/setting/css/style.css":".jimu-widget-swipe-setting{margin:0; padding:0; font-size:14px; color: #596679;}.jimu-widget-swipe-setting .style-text,.jimu-widget-swipe-setting .layer-text{font-weight: bold;}.jimu-widget-swipe-setting .style-section .style-items{margin-top: 15px; margin-bottom: 40px; overflow: hidden; font-size: 10px;}.jimu-widget-swipe-setting .style-section .style-item {text-align: center; color: #596679; cursor: pointer;}.jimu-widget-swipe-setting .style-section .style-item label {font-size: 14px; vertical-align: middle;}.jimu-widget-swipe-setting .style-section .style-item:first-child{margin-left: 0;}.jimu-rtl .style-item:first-child {margin-left: 2em; margin-right: 0;}.jimu-widget-swipe-setting .style-section .style-item-image{position: relative; width: 226px; height: 150px; margin-bottom: 10px;}.jimu-widget-swipe-setting .jimu-radio {width: 14px; height: 14px; vertical-align: middle;}.jimu-widget-swipe-setting .jimu-radio-inner{width: 8px; height: 8px;}.jimu-widget-swipe-setting .style-item .style-vertical{background: url(images/vertical.png);}.jimu-widget-swipe-setting .style-item .style-horizontal{background: url(images/horizontal.png);}.jimu-widget-swipe-setting .style-item .style-scope{background: url(images/scope.png);}.jimu-widget-swipe-setting .layer-text{margin-bottom: 15px; display: inline-block;}.jimu-widget-swipe-setting .layer-hint{display: inline-block; margin-top: 5px; color: #a0acbf; font-size: 12px; font-style: italic;}.claro .jimu-widget-swipe-setting .dijitSelect {color: #7989a0; border-color: #d2dade;}.claro .jimu-widget-swipe-setting .dijitSelectHover,.claro .jimu-widget-swipe-setting .dijitSelectFocused {border-color: #759dc0;}.claro .jimu-widget-swipe-setting .dijitSelect .dijitButtonContents {border-style: none; background: #fafafc !important;}.claro .jimu-widget-swipe-setting .dijitSelect .dijitArrowButton {border-style: none; background: #fafafc !important;}",
"*now":function(c){c(['dojo/i18n!*preload*widgets/Swipe/setting/nls/Setting*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dijit/registry dojo/_base/lang dojo/_base/array dojo/on dojo/query jimu/LayerInfos/LayerInfos jimu/dijit/LoadingShelter jimu/dijit/RadioBtn dijit/form/Select".split(" "),function(c,e,f,g,b,h,d,k,l,m){return c([e,f],{baseClass:"jimu-widget-swipe-setting",_selectedStyle:"",postCreate:function(){this.own(d(this.verticalNode,"click",b.hitch(this,function(){this._selectItem("vertical")})));this.own(d(this.horizontalNode,"click",
b.hitch(this,function(){this._selectItem("horizontal")})));this.own(d(this.scopeNode,"click",b.hitch(this,function(){this._selectItem("scope")})));this.shelter=new m({hidden:!0});this.shelter.placeAt(this.domNode);this.shelter.startup();this.shelter.show();this._getLayersFromMap(this.map).then(b.hitch(this,function(a){this.domNode&&this.swipeLayers.set("options",a)}),function(a){console.log(a)}).always(b.hitch(this,function(){this.shelter.hide()}))},startup:function(){this.inherited(arguments);this.setConfig(this.config)},
setConfig:function(a){this.config=a;this.config.style?this._selectItem(this.config.style):this._selectItem("vertical");this.config.layer&&this.swipeLayers.set("value",this.config.layer)},_getLayersFromMap:function(a){return l.getInstance(a,a.itemInfo).then(b.hitch(this,function(a){a=a.getLayerInfoArray();return h.map(a,function(a){return{label:a.title,value:a.id}})}))},_selectItem:function(a){var b=null,c="";"scope"===a?(b=this.scopeNode,c=this.nls.spyglassText):(b="horizontal"===a?this.horizontalNode:
this.verticalNode,c=this.nls.layerText);this.layerTextNode.innerHTML=c;g.byNode(k(".jimu-radio",b)[0]).check(!0);this._selectedStyle=a},_getSelectedStyle:function(){return this._selectedStyle},getConfig:function(){this.config.style=this._getSelectedStyle();this.config.layer=this.swipeLayers.get("value");return this.config}})});