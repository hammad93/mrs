// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SituationAwareness/setting/FeaturelayerSource.html":'\x3cdiv\x3e\r\n  \x3cdiv\x3e\r\n    \x3cspan class\x3d"label"\x3e${nls.selectLayers}: \x3c/span\x3e\r\n    \x3cdiv class\x3d"layerSelect" data-dojo-attach-point\x3d"selectLayers"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"footer"\x3e\r\n      \x3cdiv class\x3d"jimu-btn ok" data-dojo-attach-point\x3d"btnOk"\x3e${nls.ok}\x3c/div\x3e\r\n      \x3cdiv class\x3d"jimu-btn cancel" data-dojo-attach-point\x3d"btnCancel"\x3e${nls.cancel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/dijit/Message dojo/text!./FeaturelayerSource.html dojo/_base/lang dojo/_base/array dojox/form/CheckedMultiSelect dojo/on dojo/Evented".split(" "),function(k,l,m,n,p,q,c,e,r,f,s){return k([l,m,n,s],{templateString:q,baseClass:"imt-featurelayer-source",postCreate:function(){this.inherited(arguments);this._initUI()},_initUI:function(){var a=this.map.itemInfo.itemData.operationalLayers,b=[];0===a.length&&
new p({message:this.nls.missingLayerInWebMap});this.weatherLayersSelect=(new r({name:"selectLayers",multiple:!0,style:"width:100%;"})).placeAt(this.selectLayers);for(var d=0;d<a.length;d++){var g=e.filter(b,function(b){return b.label===a[d].title});(null===g||0===g.length)&&this.weatherLayersSelect.addOption({label:a[d].title,value:a[d].title})}if(this.weatherTabAdditionalLayers){var b=this.weatherTabAdditionalLayers.split(","),h=[];e.forEach(b,c.hitch(this,function(a){h.push(c.trim(a))}));this.weatherLayersSelect.set("value",
h)}this.own(f(this.btnOk,"click",c.hitch(this,function(){var a=this._getSelectedLayers();this.emit("ok",a)})));this.own(f(this.btnCancel,"click",c.hitch(this,function(){this.emit("cancel")})))},_getSelectedLayers:function(){var a="";e.forEach(this.weatherLayersSelect.options,c.hitch(this,function(b){b.selected&&(0<a.length&&(a+=","),a+=b.value)}));return a}})});