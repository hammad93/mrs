// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/RelatedTableCharts/setting/LayerChooser.html":'\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTLayerSelectorDiv"\x3e\r\n        \x3cdiv class\x3d"esriCTLayerChooserContainer row"\x3e\r\n            \x3cdiv class\x3d"esriCTlabel esriCTLabelContainer" title\x3d"${nls.layerChooser.selectPolygonLayerLabel}"\x3e\r\n                ${nls.layerChooser.selectPolygonLayerLabel}\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTLayerField"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"itemSelectDiv"\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriCTHint"\x3e\r\n                    ${nls.layerChooser.selectPolygonLayerHintText}\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTLayerChooserContainer row"\x3e\r\n            \x3cdiv class\x3d"esriCTlabel esriCTLabelContainer" title\x3d"${nls.layerChooser.selectRelatedTableLayerLabel}"\x3e\r\n                ${nls.layerChooser.selectRelatedTableLayerLabel}\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTLayerField"\x3e\r\n                \x3cselect data-dojo-attach-point\x3d"relationshipSelect" style\x3d"width: 232px;" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                \x3c/select\x3e\r\n                \x3cdiv class\x3d"esriCTHint"\x3e\r\n                    ${nls.layerChooser.selectRelatedTableLayerHintText}\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"buttonsDiv" class\x3d"buttonsDiv"\x3e\r\n        \x3cdiv class\x3d"button-container button-container-absolute" style\x3d"padding: 0px;"\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1" data-dojo-attach-point\x3d"cancelButton"\x3e\r\n                ${nls.layerChooser.cancelButton}\x3c/div\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1 jimu-state-disabled"\r\n                data-dojo-attach-point\x3d"okButton"\x3e\r\n                ${nls.layerChooser.okButton}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/array dojo/promise/all dojo/Deferred dojo/on dojo/dom-class dojo/text!./LayerChooser.html jimu/dijit/LayerChooserFromMap jimu/dijit/LayerChooserFromMapWithDropbox esri/request jimu/dijit/Message dojo/domReady!".split(" "),function(m,n,p,e,g,q,r,k,l,s,h,t,u,v){return m([n,p],{baseClass:"jimu-widget-RelatedTableCharts-setting",templateString:s,selectRouteURL:null,agolFlag:!1,serviceFlag:!1,_numberFieldTypes:["esriFieldTypeSmallInteger",
"esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],startup:function(){this.inherited(arguments)},postCreate:function(){this._createPolygonChooserArgs();this.own(k(this.cancelButton,"click",e.hitch(this,function(a){this.onCancleClick(a)})));this.own(k(this.okButton,"click",e.hitch(this,this._onOKButtonClicked)))},_getGeometryType:function(a){switch(a){case "esriGeometryPolygon":return"polygon";case "esriGeometryPolyline":return"polyline";case "esriGeometryPoint":return"point";default:return"*"}},
_createPolygonChooserArgs:function(){var a;a=[];var d;a.push(this.geometryType);a=h.createFeaturelayerFilter(a,!1);d=h.createQueryableLayerFilter();a={multiple:!1,createMapResponse:this.map.webMapResponse,showLayerTypes:["FeatureLayer"],filter:h.andCombineFilters([a,d])};a=new h(a);a=new t({layerChooser:a});a.placeAt(this.itemSelectDiv);a.startup();this.own(k(a,"selection-change",e.hitch(this,this._createRelatedTableOptions)))},_createRelatedTableOptions:function(a){var d=[],c,b;a&&0<a.length?(this.polygonLayer=
a[0],this.polygonLayerInfo={url:this.polygonLayer.url,geometryType:this._getGeometryType(this.polygonLayer.geometryType),supportsDistinct:!1},this.polygonLayer.advancedQueryCapabilities&&this.polygonLayer.advancedQueryCapabilities.supportsDistinct&&(this.polygonLayerInfo.supportsDistinct=!0),this.polygonLayer.fields&&(this.polygonLayerInfo.fields=e.clone(this.polygonLayer.fields)),this.polygonLayerInfo.layerId=this.polygonLayer.layerId?this.polygonLayer.layerId:this.polygonLayer.url.substr(this.polygonLayer.url.lastIndexOf("/")+
1,this.polygonLayer.url.length),b=this.polygonLayer.url.substr(0,this.polygonLayer.url.lastIndexOf("/")+1),this.polygonLayerInfo.baseURL=b,this.polygonLayerInfo=e.mixin(this.polygonLayerInfo,this._getLayerDetailsFromMap(b,this.polygonLayerInfo.layerId)),this.relatedTableInfo=[],c=[],g.forEach(this.polygonLayer.relationships,e.hitch(this,function(a){var d=new r;c.push(d);u({url:b+a.relatedTableId,content:{f:"json"},handleAs:"json"}).then(e.hitch(this,function(a){d.resolve(a)}),e.hitch(this,function(){d.resolve()}))})),
q(c).then(e.hitch(this,function(a){var c,f;for(f=0;f<a.length;f++)if(a[f].fields&&(c=g.some(a[f].fields,e.hitch(this,function(a){return 0<=this._numberFieldTypes.indexOf(a.type)}))))c={url:b+a[f].id,baseURL:b,relationShipId:this.polygonLayer.relationships[f].id,layerId:a[f].id,title:this.polygonLayer.relationships[f].name},c.fields=e.clone(a[f].fields),c=e.mixin(c,this._getLayerDetailsFromMap(b,a[f].id)),c=e.mixin(c,this._getLayerDetailsFromMapTables(b,a[f].id)),c.title&&(this.relatedTableInfo[d.length]=
c,d.push({label:this.relatedTableInfo[d.length].title,value:d.length}));0<d.length?(this.relationshipSelect.options.length=0,d[0].selected=!0,this.relationshipSelect.addOption(d),l.remove(this.okButton,"jimu-state-disabled")):this._resetRelatedLayerSelector()}),e.hitch(this,function(){this._resetRelatedLayerSelector()}))):this._resetRelatedLayerSelector()},_resetRelatedLayerSelector:function(){this.relationshipSelect.value="";this.relationshipSelect.options.length=0;this.relationshipSelect.addOption({value:"",
label:"",selected:!0});l.add(this.okButton,"jimu-state-disabled")},_getLayerDetailsFromMap:function(a,d){var c={};this.map&&(this.map.webMapResponse&&this.map.webMapResponse.itemInfo&&this.map.webMapResponse.itemInfo.itemData&&this.map.webMapResponse.itemInfo.itemData.operationalLayers)&&g.forEach(this.map.webMapResponse.itemInfo.itemData.operationalLayers,e.hitch(this,function(b){b.layerObject&&("ArcGISMapServiceLayer"===b.layerType||"ArcGISTiledMapServiceLayer"===b.layerType?a.substring(0,a.length-
1)===b.url&&(g.forEach(b.resourceInfo.layers,e.hitch(this,function(a){a.id===parseInt(d,10)&&(c.title=a.name)})),g.forEach(b.layers,e.hitch(this,function(a){a.id===parseInt(d,10)&&(a.name&&(c.title=a.name),c.popupInfo=a.popupInfo,a.layerDefinition&&a.layerDefinition.definitionExpression&&(c.definitionExpression=a.layerDefinition.definitionExpression))}))):b.url.replace(/.*?:\/\//g,"")===(a+d).replace(/.*?:\/\//g,"")&&(c.title=b.title,c.popupInfo=b.popupInfo,b.layerDefinition&&b.layerDefinition.definitionExpression&&
(c.definitionExpression=b.layerDefinition.definitionExpression)))}));return c},_getLayerDetailsFromMapTables:function(a,d){var c={};this.map&&(this.map.webMapResponse&&this.map.webMapResponse.itemInfo&&this.map.webMapResponse.itemInfo.itemData&&this.map.webMapResponse.itemInfo.itemData.tables)&&g.forEach(this.map.webMapResponse.itemInfo.itemData.tables,e.hitch(this,function(b){b.url.replace(/.*?:\/\//g,"")===(a+d).replace(/.*?:\/\//g,"")&&(c.title=b.title,c.popupInfo=b.popupInfo,b.layerDefinition&&
b.layerDefinition.definitionExpression&&(c.definitionExpression=b.layerDefinition.definitionExpression))}));return c},_onOKButtonClicked:function(){var a;if(!l.contains(this.okButton,"jimu-state-disabled"))if(this.polygonLayerInfo){if(""===this.relationshipSelect.value)return this._errorMessage(this.nls.layerChooser.errorInSelectingRelatedLayer),!1;a={polygonLayerInfo:this.polygonLayerInfo,relatedLayerInfo:this.relatedTableInfo[this.relationshipSelect.value]};this.onOkClick(a)}else return this._errorMessage(this.nls.layerChooser.errorInSelectingPolygonLayer),
!1},_errorMessage:function(a){(new v({message:a})).message=a},onOkClick:function(a){return a},onCancleClick:function(a){return a}})});