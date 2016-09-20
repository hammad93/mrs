// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/html dijit/_WidgetBase dgrid/OnDemandGrid dgrid/Selection dgrid/extensions/ColumnHider dgrid/extensions/ColumnResizer dgrid/extensions/ColumnReorder dojo/Evented dojo/store/Memory esri/request esri/tasks/RelationshipQuery esri/lang dojo/_base/lang dojo/on dojo/_base/array dojo/query jimu/dijit/LoadingIndicator jimu/CSVUtils jimu/utils ./utils".split(" "),function(p,b,s,t,u,v,w,x,y,z,A,B,q,e,C,m,r,D,E,F,l){return p([s,y],{baseClass:"jimu-widget-attributetable-relationship-table",
_defaultFeatureCount:2E3,_defaultBatchCount:25,_batchCount:0,_currentDef:null,_requestStatus:"initial",relationship:null,parentWidget:null,footerHeight:25,loading:null,grid:null,footer:null,selectedRowsLabel:null,selectionRows:null,nls:null,actived:!1,showSelected:!1,tableCreated:!1,constructor:function(a){a=a||{};this.set("relationship",a.relationship||null);this.parentWidget=a.parentWidget||null;this.configedInfo=a.configInfo||null;this.originalInfo=a.originalInfo||null},postCreate:function(){this.selectionRows=
[];this.loading=new D;this.loading.placeAt(this.domNode);b.setAttr(this.domNode,"data-originalinfoid",e.getObject("originalInfo.id",!1,this));b.setAttr(this.domNode,"data-configedinfoid",e.getObject("configedInfo.id",!1,this))},showRefreshing:function(a){a?this.loading.show():this.loading.hide()},active:function(){this.actived=!0},deactive:function(){this.actived=!1},cancelThread:function(){"fulfilled"!==this._requestStatus&&this._currentDef&&(this._currentDef.cancel({canceledBySelf:!0}),this._requestStatus=
"canceled")},isCanceled:function(){return"canceled"===this._requestStatus},startQuery:function(a){var d=a&&a.layer,c=a&&a.selectedIds,h=this.relationship;d&&h&&c&&0<c.length&&!F.isEqual(this._currentSelectedIds,c)&&e.getObject("originalInfo.layerObject.url",!1,this)?(this.loading.show(),this._requestStatus="processing",e.getObject("relatedTableUrl",!1,this)||(a=this.originalInfo.layerObject.url.split("/"),a[a.length-1]=this.relationship.relatedTableId,this.relatedTableUrl=a.join("/")),this._currentDef=
a=A({url:this.relatedTableUrl,content:{f:"json"},hangleAs:"json",callbackParamName:"callback"}),a.then(e.hitch(this,function(a){if(this.domNode){var g=this.relationship.shipInfo;if(g){var f=this.configedInfo,g=l.getConfigInfoFromLayerInfo(g),f=e.getObject("layer.fields",!1,f)||e.getObject("layer.fields",!1,g);l.merge(a.fields,f,"name",function(a,c){e.mixin(a,c)});a.fields=l.syncOrderWith(a.fields,f,"name")}var n=[];m.forEach(a.fields,function(c){(!q.isDefined(c.show)||!0===c.show||"esriFieldTypeOID"===
c.type||q.isDefined(a.objectIdField)&&c.name===a.objectIdField)&&n.push(c.name)});f=new B;f.objectIds=c;f.outFields=n.length?n:["*"];f.relationshipId=h.id;f.returnGeometry=!1;(this._currentDef=d.queryRelatedFeatures(f,function(a){return a})).then(e.hitch(this,function(d){if(this.domNode){var e={displayFieldName:h.objectIdField,fields:a.fields,features:[],fieldAliases:null},g;for(g in d){var f=d[g];f.features&&0<f.features.length&&(e.features=e.features.concat(f.features))}0<e.features.length?(this.tableDefinition=
a,this.createTable(a,e),this._currentSelectedIds=c,this.emit("data-loaded")):(d=b.toDom("\x3cdiv\x3e"+this.nls.noRelatedRecords+"\x3c/div\x3e"),this._removeTable(),b.empty(this.domNode),b.place(d,this.domNode),b.place(this.loading.domNode,this.domNode));h.opened=!0;this.loading.hide()}}),e.hitch(this,function(a){a&&"Request canceled"!==a.message&&console.error(a);a=b.toDom("\x3cdiv\x3e"+this.nls.noRelatedRecords+"\x3c/div\x3e");this._removeTable();b.empty(this.domNode);b.place(a,this.domNode);b.place(this.loading.domNode,
this.domNode);this.loading.hide()}))}}),e.hitch(this,function(a){a&&"Request canceled"!==a.message&&console.error(a);this.loading.hide()}))):this.loading.hide()},getSelectedRows:function(){if(this.tableCreated)return this.selectionRows},zoomTo:function(){},toggleSelectedRecords:function(){this.tableCreated&&(this.showSelected?this.showAllSelectedRecords():this.showSelectedRecords(),this.showSelected=!this.showSelected)},showSelectedRecords:function(){if(this.tableCreated){var a=this.relationship.objectIdField;
this.grid._clickShowSelectedRecords=!0;var d=this._getSelectedIds();0<d.length&&this.grid&&this.grid.set("query",e.hitch(this,function(c){return"number"===typeof c&&-1<d.indexOf(c)||-1<d.indexOf(c[a])?!0:!1}))}},showAllSelectedRecords:function(){this.tableCreated&&(this.grid.set("query",{}),m.forEach(this.selectionRows,e.hitch(this,function(a){this.grid.select(a)})),this.setSelectedNumber())},clearSelection:function(a){this.tableCreated&&(this.grid.clearSelection(),this.selectionRows=[],a&&this.grid.set("query",
{}),this.setSelectedNumber(),this.showSelected=!1,this.emit("clear-selection"))},refresh:function(){this.grid&&this.grid.clearSelection();this.startQuery()},exportToCSV:function(a){if(this.relationship&&this.tableDefinition&&this.tableCreated){var d=this.grid.__outFields,c=this.getSelectedRowsData(),b={};c&&0<c.length?b.datas=c:this.grid.store instanceof z&&(c=this.grid.store.data,b.datas=c);b.fromClient=!1;b.outFields=d;b.formatNumber=!1;b.formatDate=!0;b.formatCodedValue=!0;d=this.relationship.shipInfo&&
this.relationship.shipInfo.getPopupInfo();b.popupInfo=d;return E.exportCSVFromFeatureLayer(a||this.relationship.name,this.tableDefinition,b)}},toggleColumns:function(){this.grid&&this.grid._toggleColumnHiderMenu()},changeHeight:function(a){this.grid&&0<=a-this.footerHeight&&b.setStyle(this.grid.domNode,"height",a-this.footerHeight+"px")},destroy:function(){this.destroyed||(this.parentWidget=this.configedInfo=this.layerInfo=null,this.grid&&this.grid.destroy(),this.nls=this.map=null,this.relationship.opened=
!1,this.relationship=null,this.inherited(arguments))},createTable:function(a,d){var c=m.map(d.features,e.hitch(this,function(a){return a.attributes})),h=l.generateMemoryStore(c,d.displayFieldName),k=a.typeIdField,g=a.types,f=this.relationship.shipInfo&&this.relationship.shipInfo.getPopupInfo(),k=l.generateColumnsFromFields(f,d.fields,k,g);this.grid?(this.grid.set("store",h),this.grid.refresh()):(h={columns:k,store:h,keepScrollPosition:!0,pagingDelay:1E3,allowTextSelection:!0},this.grid=new (p([t,
u,v,w,x]))(h,b.create("div")),b.empty(this.domNode),b.place(this.grid.domNode,this.domNode),b.place(this.loading.domNode,this.domNode),this.grid.startup(),this.grid.__pk=d.displayFieldName,this.grid.__outFields=d.fields,this.own(C(this.grid,".dgrid-row:click",e.hitch(this,this._onRowClick))));this.getParent()&&(h=r(".dgrid-scroller",this.grid.domNode)[0],g=r(".dgrid-header",this.grid.domNode)[0],k=b.getComputedStyle(h),g=b.getMarginBox(g),k=parseInt(k.marginTop,10),isFinite(k)&&(g&&k<g.h)&&b.setStyle(h,
"marginTop",g.h+"px"));this.footer?b.empty(this.footer):this.footer=b.create("div",null,this.domNode);c=b.create("div",{"class":"dgrid-status self-footer",innerHTML:c.length+"\x26nbsp;"+this.nls.features+"\x26nbsp;"},this.footer);this.selectedRowsLabel=b.create("div",{"class":"dgrid-status self-footer",innerHTML:"0\x26nbsp;"+this.nls.selected+"\x26nbsp;"},c,"after");c=b.getStyle(this.domNode,"height");this.changeHeight(c);this._requestStatus="fulfilled";this.tableCreated=!0},_removeTable:function(){this.grid&&
this.grid.domNode&&(this.grid.destroy(),this.grid=null);this.footer&&(b.destroy(this.footer),this.selectedRowsLabel=this.footer=null)},getSelectedRowsData:function(){if(!this.grid)return null;var a=this.relationship.objectIdField,b=this.grid.store,c=b._entityData||b.data,b=this.getSelectedRows();return m.map(b,e.hitch(this,function(b){for(var d=0,e=c.length;d<e;d++)if(c[d]&&c[d][a]===b)return c[d];return{}}))||[]},setSelectedNumber:function(){if(this.selectedRowsLabel&&this.grid){var a=this.getSelectedRows();
this.selectedRowsLabel.innerHTML="\x26nbsp;\x26nbsp;"+a.length+" "+this.nls.selected+"\x26nbsp;\x26nbsp;"}},_onRowClick:function(){this.selectionRows=this._getSelectedIds();this.setSelectedNumber();this.emit("row-click",{table:this,selectedIds:e.clone(this.selectionRows)})},_getSelectedIds:function(){var a=[],b=this.grid.selection,c;for(c in b)b[c]&&(isFinite(c)?a.push(parseInt(c,10)):a.push(c));return a}})});