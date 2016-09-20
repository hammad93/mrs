// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/html dijit/_WidgetBase jimu/dijit/Message dgrid/OnDemandGrid dgrid/Selection dgrid/extensions/ColumnHider dgrid/extensions/ColumnResizer dgrid/extensions/ColumnReorder dojo/Deferred dojo/when dojo/Evented dojo/store/Memory esri/config esri/lang esri/request esri/tasks/RelationParameters esri/layers/GraphicsLayer esri/layers/FeatureLayer esri/tasks/QueryTask esri/tasks/query esri/tasks/ProjectParameters esri/graphic esri/geometry/Point esri/geometry/Multipoint esri/geometry/Polyline esri/geometry/Polygon esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/Color esri/geometry/normalizeUtils dojo/_base/lang dojo/on dojo/aspect dojo/_base/array jimu/dijit/LoadingIndicator jimu/CSVUtils ./utils dojo/query".split(" "),
function(v,m,F,G,H,I,J,K,L,s,M,N,w,t,q,O,x,P,y,z,r,Q,R,S,A,T,U,B,C,D,V,e,p,W,n,X,Y,u,E){return v([F,N],{baseClass:"jimu-widget-attributetable-feature-table",_defaultFeatureCount:2E3,_defaultBatchCount:25,_batchCount:0,_filterObj:null,_currentDef:null,_requestStatus:"initial",map:null,matchingMap:!1,layerInfo:null,configedInfo:null,parentWidget:null,footerHeight:25,layer:null,loading:null,grid:null,footer:null,selectedRowsLabel:null,selectionRows:null,griaphicLayer:null,nls:null,_dblClickResult:null,
actived:!1,showSelected:!1,tableCreated:!1,constructor:function(a){a=a||{};this.set("map",a.map||null);this.set("matchingMap",!!a.matchingMap);this.set("layerInfo",a.layerInfo||null);this.set("layer",a.layer||null);this.set("configedInfo",a.configedInfo||null);this.parentWidget=a.parentWidget||null},postCreate:function(){this.selectionRows=[];this.loading=new X;this.loading.placeAt(this.domNode);m.setAttr(this.domNode,"data-layerinfoid",e.getObject("layerInfo.id",!1,this));this.get("map")&&this.own(p(this.map,
"extent-change",e.hitch(this,"_onExtentChange")))},startup:function(){this.map&&(this.graphicsLayer=new P,this.map.addLayer(this.graphicsLayer))},setLayerDefinition:function(a){this._layerDefinition=a},getLayerDefinition:function(){return this._getLayerDifinition()},getFilterableFields:function(){if(this._layerDefinition&&this.configedInfo){var a=e.clone(this._layerDefinition);return this._getFilterableFields(a.fields,this.configedInfo.layer.fields)}return[]},getFilterObj:function(){return this._filterObj},
setFilterObj:function(a){this._filterObj=a},showRefreshing:function(a){a?this.loading.show():this.loading.hide()},active:function(){this.actived=!0},deactive:function(){this.actived=!1},cancelThread:function(){"fulfilled"!==this._requestStatus&&this._currentDef&&(this._currentDef.cancel({canceledBySelf:!0}),this._requestStatus="canceled")},isCanceled:function(){return"canceled"===this._requestStatus},startQuery:function(){this.cancelThread();if(!this.tableCreated||!this.layerInfo||!this.layerInfo.isTable)this._requestStatus=
"processing",this.loading.show(),this._getLayerObject().then(e.hitch(this,function(a){this.domNode&&(this.layer=a,(a=!this.layerInfo.isTable&&this.matchingMap&&this.map.extent||null)&&a.spatialReference&&a.spatialReference.isWebMercator()?(this._currentDef=V.normalizeCentralMeridian([a],null,e.hitch(this,function(a){return a[0]}))).then(e.hitch(this,function(a){this._doQuery(a)}),e.hitch(this,function(a){a&&"Request canceled"!==a.message&&console.error(a);this.loading.hide()})):this._doQuery(a))}),
e.hitch(this,function(a){console.error(a);this.loading.hide()}))},getSelectedRows:function(){return this.selectionRows},zoomTo:function(){this._zoomToSelected()},toggleSelectedRecords:function(){this.tableCreated&&(this.showSelected?this.showAllSelectedRecords():this.showSelectedRecords(),this.showSelected=!this.showSelected)},showSelectedRecords:function(){if(this.tableCreated){var a=this.layer.objectIdField;this.grid._clickShowSelectedRecords=!0;var b=this._getSelectedIds();0<b.length&&this.grid&&
(this.grid.store instanceof w?this.grid.set("query",e.hitch(this,function(d){return"number"===typeof d&&-1<b.indexOf(d)||-1<b.indexOf(d[a])?!0:!1})):this.grid.set("query",function(){return b}))}},showAllSelectedRecords:function(){this.tableCreated&&(this.grid.set("query",{}),n.forEach(this.selectionRows,e.hitch(this,function(a){this.grid.select(a)})),this.setSelectedNumber())},clearSelection:function(a){this.tableCreated&&(this.grid.clearSelection(),this.selectionRows=[],a&&this.grid.set("query",
{}),this._closePopup(),this.graphicsLayer.clear(),this.setSelectedNumber(),this.showSelected=!1,this.emit("clear-selection"))},refresh:function(){this.grid&&this.grid.clearSelection();this.startQuery()},exportToCSV:function(a){if(this.layerInfo&&this.layer&&this.tableCreated){var b=null,b=this.layer.objectIdField,d=this.getSelectedRowsData(),b=this._getOutFieldsFromLayerInfos(b),b=this._processExecuteFields(this.layer.fields,b),c={};d&&0<d.length?c.datas=d:this.grid.store instanceof w&&(d=this.grid.store.data,
c.datas=d);c.fromClient=!1;c.outFields=b;c.formatNumber=!1;c.formatDate=!0;c.formatCodedValue=!0;c.popupInfo=this.layerInfo.getPopupInfo();return Y.exportCSVFromFeatureLayer(a||this.configedInfo.name,this.layer,c)}},toggleColumns:function(){this.tableCreated&&this.grid._toggleColumnHiderMenu()},changeHeight:function(a){this.grid&&0<=a-this.footerHeight&&m.setStyle(this.grid.domNode,"height",a-this.footerHeight+"px")},showGraphic:function(){this.graphicsLayer&&this.graphicsLayer.show()},hideGraphic:function(){this.graphicsLayer&&
this.graphicsLayer.hide()},isSupportQueryToServer:function(){var a=this.layer&&"esri.layers.CSVLayer"===this.layer.declaredClass,b=this.layer&&"esri.layers.StreamLayer"===this.layer.declaredClass;return this.layer&&this.layer.url&&this.configedInfo.layer.url&&!a&&!b},isSupportQueryOnClient:function(){var a=this.layer&&"esri.layers.CSVLayer"===this.layer.declaredClass,b=this.layer&&"esri.layers.StreamLayer"===this.layer.declaredClass;return!(this.layer&&this.layer.url&&this.configedInfo.layer.url)||
a||b},destroy:function(){this._destroyed||(this.layer=this.parentWidget=this.configedInfo=this.layerInfo=null,this.graphicsLayer&&this.graphicsLayer.clear&&(this.graphicsLayer.clear(),this.map.removeLayer(this.graphicsLayer)),this._dblClickResult=null,this.grid&&this.grid.destroy(),this.nls=this.map=null,this._currentDef&&!this._currentDef.isCanceled()&&this._currentDef.cancel({canceledBySelf:!0}),this.inherited(arguments))},_closePopup:function(){var a=this.map.infoWindow.getSelectedFeature(),a=
a&&this._dblClickResult&&a===this._dblClickResult;this.domNode&&a&&(this.map.infoWindow.hide(),this._dblClickResult=null)},_getLayerObject:function(){return(this._currentDef=this.layerInfo.getLayerObject()).then(e.hitch(this,function(a){var b=new s;"esri.layers.ArcGISImageServiceLayer"===a.declaredClass||"esri.layers.ArcGISImageServiceVectorLayer"===a.declaredClass?(a=new y(a.url),this.own(p(a,"load",e.hitch(this,function(a){b.resolve(a.layer)})))):b.resolve(a);return b}))},_getLayerDifinition:function(){return this._layerDefinition?
M(e.clone(this._layerDefinition)):O({url:this.layer.url,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(e.hitch(this,function(a){this.setLayerDefinition(a);return this.getLayerDefinition()}))},_getFilterableFields:function(a,b){return n.filter(a,function(a){return n.some(b,function(b){return a.name===b.name&&(b.show||!q.isDefined(b.show))&&e.mixin(a,b)})})},_doQuery:function(a){if(this.layer){var b=this.getSelectedRows(),d=this.layer.objectIdField;this.isSupportQueryToServer()?
this._queryToServer(a,d,b):this.isSupportQueryOnClient()&&this._queryOnClient(a,d,b)}},_queryOnClient:function(a,b,d){var c={};c.features="esri.layers.StreamLayer"===this.layer.declaredClass?this.layer.getLatestObservations():this.layer.graphics;var h=this.layer.fields,f=this.configedInfo.layer.fields;c.fields=f?n.filter(f,e.hitch(this,function(a){q.isDefined(a.show)||(a.show=!0);if(a.name===b&&("esriFieldTypeOID"===a.type||"esriFieldTypeInteger"===a.type))a._pk=!0;for(var c=0,d=h.length;c<d;c++)h[c].name===
a.name&&!a.type&&(a.type=h[c].type);return a.show||a._pk})):n.filter(h,e.hitch(this,function(a){q.isDefined(a.show)||(a.show=!0);if(a.name===b&&("esriFieldTypeOID"===a.type||"esriFieldTypeInteger"===a.type))a._pk=!0;return a.show||a._pk}));for(var f=[],g=c.features.length,k=0;k<g;k++)c&&(c.features&&c.features[k]&&c.features[k].geometry)&&f.push(c.features[k].geometry);c.selectionRows=d;a&&t.defaults.geometryService&&0<f.length?(g=new x,g.geometries1=f,g.geometries2=[a],g.relation=x.SPATIAL_REL_INTERSECTION,
(this._currentDef=t.defaults.geometryService.relation(g,e.hitch(this,function(a){return a}))).then(e.hitch(this,function(a,b){for(var c=b.length,f=[],e=0;e<c;e++)f.push(a.features[b[e].geometry1Index]);a.features=f;this.queryExecute(d,a.fields,a.features.length,!1,a)},c),e.hitch(this,function(a){a&&"Request canceled"!==a.message&&console.error(a);this.loading.hide()}))):this.queryExecute(d,c.fields,c.features.length,!1,c)},_queryToServer:function(a,b,d){this._getFeatureCount(a).then(e.hitch(this,
function(c){if(this.domNode){var h=this.layer,f=q.isDefined(h.maxRecordCount)?h.maxRecordCount:1E3;this._batchCount=Math.min(f,this._defaultBatchCount);if(c<f)this._queryFeatureLayer(a,b,d,c,!1);else{var g=this._getOutFieldsFromLayerInfos(b),k={fields:this.layer.fields};this.layer._recordCounts=c;h.advancedQueryCapabilities&&h.advancedQueryCapabilities.supportsPagination?this.queryExecute(d,g,c,!0,k,a):this._getFeatureIds(b,a).then(e.hitch(this,function(a){this.domNode&&(this.layer._objectIds=a,this.queryExecute(d,
g,c,!0,k))}))}}}))},_getFeatureCount:function(a){var b=new s,d=new r;d.returnGeometry=!1;d.where=this._getLayerFilterExpression();a&&(d.geometry=a);(this._currentDef=this.layer.queryCount(d)).then(e.hitch(this,function(a){b.resolve(a)}),e.hitch(this,function(a){a&&"Request canceled"!==a.message&&(console.error(a),console.log("Could not get feature count."));this.loading.hide();b.reject(a)}));return b},_queryFeatureLayer:function(a,b,d,c,h){var f=new z(this.configedInfo.layer.url),g=new r;g.where=
this._getLayerFilterExpression();var k=this._getOutFieldsFromLayerInfos(b);0<k.length?(b=n.map(k,function(a){return a.name}),g.outFields=b):g.outFields=["*"];a&&(g.geometry=a,g.spatialRelationship=r.SPATIAL_REL_INTERSECTS);g.outSpatialReference=e.clone(this.map.spatialReference);g.returnGeometry=!1;(this._currentDef=f.execute(g,e.hitch(this,function(a){return a}))).then(e.hitch(this,function(a){this.queryExecute(d,k,c,h,a)}),e.hitch(this,function(a){a&&"Request canceled"!==a.message&&console.error(a);
this.loading.hide()}))},_getFeatureIds:function(a,b){var d=new s,c=new r;c.returnGeometry=!1;c.returnIdsOnly=!0;c.where=this._getLayerFilterExpression();c.orderByFields=this.layer._orderByFields||[a+" ASC"];b&&(c.geometry=b);(this._currentDef=this.layer.queryIds(c)).then(e.hitch(this,function(a){d.resolve(a)}),e.hitch(this,function(a){a&&"Request canceled"!==a.message&&(console.error(a),console.log("Could not get feature Ids"));d.resolve([])}));return d},queryExecute:function(a,b,d,c,h,f){var g=[],
g=null,k={};if(this.domNode){h.fields=this._processExecuteFields(this.layer.fields,b);c?g=u.generateCacheStore(this.layer,d,this._batchCount,this._getLayerFilterExpression(),f):(g=n.map(h.features,e.hitch(this,function(a){return e.clone(a.attributes)})),g=u.generateMemoryStore(g,this.layer.objectIdField));var l=this.layer;b=l.typeIdField;f=l.types;k=l.advancedQueryCapabilities&&l.advancedQueryCapabilities.supportsOrderBy;l=l.advancedQueryCapabilities&&l.advancedQueryCapabilities.supportsPagination;
k=u.generateColumnsFromFields(this.layerInfo.getPopupInfo(),h.fields,b,f,k&&l||!c);this.createTable(k,g,d);if(a&&a.length){for(var Z in a)this.grid.select(a[Z]);this.selectionRows=a;this.setSelectedNumber()}this.emit("data-loaded")}},createTable:function(a,b,d){if(this.grid)this.grid.set("store",b),this.grid.refresh();else{var c={};c.columns=a;c.store=b;c.keepScrollPosition=!0;c.pagingDelay=1E3;c.allowTextSelection=!0;this.grid=new (v([H,I,J,K,L]))(c,m.create("div"));m.place(this.grid.domNode,this.domNode);
this.grid.startup();this.grid._clickShowSelectedRecords=!1;this.own(p(this.grid,".dgrid-row:click",e.hitch(this,this._onRowClick)));this.own(p(this.grid,".dgrid-row:dblclick",e.hitch(this,function(){this.layerInfo&&this.layerInfo.isShowInMap()&&this._zoomToSelected()})));this.own(p(this.grid,"dgrid-refresh-complete",e.hitch(this,this._onRefreshComplete)))}this.getParent()&&(a=E(".dgrid-scroller",this.grid.domNode)[0],c=E(".dgrid-header",this.grid.domNode)[0],b=m.getComputedStyle(a),c=m.getMarginBox(c),
b=parseInt(b.marginTop,10),isFinite(b)&&(c&&b<c.h)&&m.setStyle(a,"marginTop",c.h+"px"));this.footer?m.empty(this.footer):this.footer=m.create("div",null,this.domNode);d=m.create("div",{"class":"dgrid-status self-footer",innerHTML:d+"\x26nbsp;"+this.nls.features+"\x26nbsp;"},this.footer);this.selectedRowsLabel=m.create("div",{"class":"dgrid-status self-footer",innerHTML:"0\x26nbsp;"+this.nls.selected+"\x26nbsp;"},d,"after");d=m.getStyle(this.domNode,"height");this.changeHeight(d);this._requestStatus=
"fulfilled";this.tableCreated=!0;this.loading.hide()},getSelectedRowsData:function(){if(!this.grid)return null;var a=this.layer.objectIdField,b=this.grid.store,d=b._entityData||b.data,b=this.getSelectedRows();return n.map(b,e.hitch(this,function(b){for(var e=0,f=d.length;e<f;e++)if(d[e]&&d[e][a]===b)return d[e];return{}}))||[]},setSelectedNumber:function(){if(this.selectedRowsLabel&&this.grid){var a=this.getSelectedRows();this.selectedRowsLabel.innerHTML="\x26nbsp;\x26nbsp;"+a.length+" "+this.nls.selected+
"\x26nbsp;\x26nbsp;"}},selectFeatures:function(a,b){b&&0<b.length?("rowclick"===a||"selectall"===a?this.addGraphics(b,!0):"zoom"===a&&this.getExtent(b).then(e.hitch(this,function(a){if(a){var c=null;"point"===a.type?(c=15,c=-1<this.map.getMaxZoom()?this.map.getMaxZoom():0.1,c=this.map.centerAndZoom(a,c)):c=this.map.setExtent(a.expand(1.1));c.then(e.hitch(this,function(){var c=this.map.infoWindow,f=this.layerInfo.getInfoTemplate();if(c&&c.setFeatures&&1===b.length&&f){n.forEach(b,e.hitch(this,function(a){a._layer=
this.layerInfo.layerObject;a.setInfoTemplate(f)}));c.setFeatures(b);var g=null;if("point"===a.type){var g=b[0].geometry,k=e.clone(c.markerSymbol);n.forEach(this.graphicsLayer.graphics,function(a){a.setSymbol(k)})}else g=a.getCenter();c.show(g,{closetFirst:!0});this._dblClickResult=b[0];p.once(c,"hide",e.hitch(this,function(){var a=c.getSelectedFeature(),d=e.getObject("_layer.objectIdField",!1,a),d=e.getObject("attributes."+d,!1,a),a=a&&-1<b.indexOf(a),f=this._getSelectedIds();this.domNode&&(a&&d&&
-1<f.indexOf(d))&&this.clearSelection(!1);l&&l.remove&&(l.remove(),l=null)}));var l=W.after(c,"show",e.hitch(this,function(){var a=c.getSelectedFeature(),a=a&&-1<b.indexOf(a);this.domNode&&!a&&(this.clearSelection(!1),l.remove(),l=null)}))}}))}}),e.hitch(this,function(a){a&&"Request canceled"!==a.message&&console.error(a)})),this.setSelectedNumber()):this._popupMessage(this.nls.dataNotAvailable)},getGraphicsFromLocalFeatureLayer:function(a){for(var b=[],d,c,e=a.length,f=this.layer.graphics.length,
g=this.layer.objectIdField,k=0;k<e;k++)for(var l=0;l<f;l++)if(d=this.layer.graphics[l].attributes[g]+"",c=a[k]+"",d===c){b.push(this.layer.graphics[l]);break}return b},addGraphics:function(a){var b,d,c=a.length,h=new B(B.STYLE_SOLID,new D([0,255,255]),2);this.graphicsLayer.clear();for(var f=0;f<c;f++)d=null,a[f].geometry?(a[f].geometry.spatialReference.equals(this.map.spatialReference)||console.warn("unable to draw graphic result in different wkid from map"),"point"===a[f].geometry.type?(d=new S(a[f].geometry.toJson()),
b=e.clone(this.map.infoWindow.markerSymbol)):"multipoint"===a[f].geometry.type?(d=new A(a[f].geometry.toJson()),b=e.clone(this.map.infoWindow.markerSymbol)):"polyline"===a[f].geometry.type?(d=new T(a[f].geometry.toJson()),b=h):"polygon"===a[f].geometry.type&&(d=new U(a[f].geometry.toJson()),b=new C(C.STYLE_SOLID,h,new D([255,255,255,0.25]))),d=new R(d,b,a[f].attributes,a[f].infoTemplate),this.graphicsLayer.add(d)):console.error("unable to get geometry of the reocord: ",a[f])},getExtent:function(a){var b=
new s,d,c,h=a.length;if(1===h&&a[0].geometry&&"point"===a[0].geometry.type)d=a[0].geometry;else{if(1===h&&!a[0].geometry)return b.reject(Error("AttributeTable.getExtent:: extent was not projected.")),b;for(var f=0;f<h;f++)a[f].geometry?"point"===a[f].geometry.type?(c||(c=new A(a[f].geometry.spatialReference)),c.addPoint(a[f].geometry),f===h-1&&(d=c.getExtent())):d=d?d.union(a[f].geometry.getExtent()):a[f].geometry.getExtent():console.error("unable to get geometry of the reocord: ",a[f])}if(!d||!d.spatialReference)return b.reject(Error("AttributeTable.getExtent:: extent was not projected.")),
b;a=this.map.spatialReference;d.spatialReference.equals(a)?b.resolve(d):(c=new Q,c.geometries=[d],c.outSR=a,t.defaults.geometryService.project(c,e.hitch(this,function(a){this.domNode&&(a&&a.length?b.resolve(a[0]):b.reject(Error("AttributeTable.getExtent:: extent was not projected.")))}),e.hitch(this,function(a){a||(a=Error("AttributeTable.getExtent:: extent was not projected."));b.reject(a)})));return b},_onRefreshComplete:function(a){if(a.grid._clickShowSelectedRecords){var b=this.selectionRows;
n.forEach(b,e.hitch(this,function(b){a.grid.select(b)}));a.grid._clickShowSelectedRecords=!1;this.isSupportQueryToServer()?this._queryFeaturesByIds(b,"selectall"):this.isSupportQueryOnClient()&&this.selectFeatures("selectall",this.getGraphicsFromLocalFeatureLayer(b))}},_zoomToSelected:function(){if(this.configedInfo&&this.tableCreated){var a=this._getSelectedIds();0!==a.length&&(this.isSupportQueryToServer()?this._queryFeaturesByIds(a,"zoom"):this.isSupportQueryOnClient()&&this.selectFeatures("zoom",
this.getGraphicsFromLocalFeatureLayer(a)))}},_queryFeaturesByIds:function(a,b){var d=new r;d.objectIds=a;d.returnGeometry=!0;d.outSpatialReference=e.clone(this.map.spatialReference);d.outFields=["*"];var c=this.layer,h="esri.layers.CSVLayer"===c.declaredClass;c.url&&!h?(new z(c.url)).execute(d,e.hitch(this,function(a){this.selectFeatures(b,a.features)}),e.hitch(this,this._errorSelectFeatures)):c.selectFeatures(d,y.SELECTION_NEW,e.hitch(this,this.selectFeatures,b),e.hitch(this,this._errorSelectFeatures))},
_onRowClick:function(){var a=this._getSelectedIds();this.selectionRows=a;this._closePopup();a.length&&!this.layerInfo.isTable?this.isSupportQueryToServer()?this._queryFeaturesByIds(a,"rowclick"):this.isSupportQueryOnClient()&&this.selectFeatures("rowclick",this.getGraphicsFromLocalFeatureLayer(a)):this.graphicsLayer.clear();this.setSelectedNumber();this.emit("row-click",{table:this,selectedIds:a})},_onExtentChange:function(a){this.matchingMap&&(this.actived&&this.layerInfo&&!this.layerInfo.isTable)&&
this.startQuery(a.extent)},_getLayerFilterExpression:function(){var a=this._filterObj&&this._filterObj.expr||"",b=this.layerInfo.getFilterOfWebmap();return a?b?a+" AND "+b:a:b?b:"1\x3d1"},_getOutFieldsFromLayerInfos:function(a){var b=this.configedInfo.layer.fields,d=[];b&&n.forEach(b,e.hitch(this,function(b){q.isDefined(b.show)||(b.show=!0);if(b.name===a&&("esriFieldTypeOID"===b.type||"esriFieldTypeInteger"===b.type||!b.type))b._pk=!0;(b.show||b._pk)&&d.push(b)}));return d},_processExecuteFields:function(a,
b){if(a&&0<a.length){var d=[];if(!b.length)return a;for(var c=0,h=b.length;c<h;c++)for(var f=0;f<a.length;f++)if(b[c].name===a[f].name&&(b[c].type===a[f].type||!b[c].type))a[f]=e.mixin(a[f],b[c]),d.push(a[f]);return d}return b},_getSelectedIds:function(){var a=[],b=this.grid.selection,d;for(d in b)b[d]&&(isFinite(d)?a.push(parseInt(d,10)):a.push(d));return a},_errorSelectFeatures:function(a){console.error(a)},_popupMessage:function(a){var b=new G({message:a,buttons:[{label:this.nls.ok,onClick:e.hitch(this,
function(){b.close()})}]});this.loading.hide()}})});