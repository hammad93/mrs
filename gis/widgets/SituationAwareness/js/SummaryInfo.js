// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/Color dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-style dojo/number dojo/on dojo/has dijit/form/Button jimu/dijit/Popup jimu/CSVUtils jimu/utils esri/config esri/geometry/geometryEngine esri/geometry/mathUtils esri/geometry/Point esri/geometry/webMercatorUtils esri/graphic esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query".split(" "),
function(u,l,e,y,n,f,p,z,v,r,A,B,C,w,x,D,q,E,F,G,H,s,I,J,K,L,t){return u("SummaryInfo",null,{summaryLayer:null,summaryFields:[],summaryIds:[],summaryFeatures:[],summaryGeom:null,symbolField:null,graphicsLayer:null,lyrRenderer:null,lyrSymbol:null,constructor:function(a,c,d){this.tab=a;this.container=c;this.parent=d;this.config=d.config;this.graphicsLayer=null},updateForIncident:function(a,c,d){this.container.innerHTML="";f.add(this.container,"loading");this.summaryIds=[];this.summaryFeatures=[];this.summaryGeom=
c.geometry;if(0<this.tab.tabLayers.length){var b;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?(this.summaryLayer=this.tab.tabLayers[0],b=new s(this.summaryLayer.url),b.infoTemplate=this.tab.tabLayers[0].infoTemplate,this.tab.tabLayers.push(b),this._initGraphicsLayer(d),this.summaryFields=this._getFields(this.summaryLayer),e.hitch(this,this._queryFeatures(c.geometry))):(b=new s(this.tab.tabLayers[0].url),r(b,"load",e.hitch(this,function(){this.summaryLayer=b;if(-1<this.tab.tabLayers[0].url.indexOf("MapServer"))for(var a=
this.tab.tabLayers[0].url.split("MapServer/")[1],g=this.parent.map.itemInfo.itemData.operationalLayers,k=0;k<g.length;k++){var m=g[k];if("undefined"!==typeof m.layerObject&&m.layerObject.infoTemplates&&(m=m.layerObject.infoTemplates[a])){b.infoTemplate=m.infoTemplate;break}}this.tab.tabLayers.push(b);this._initGraphicsLayer(d);this.summaryFields=this._getFields(this.summaryLayer);e.hitch(this,this._queryFeatures(c.geometry))})))}},_initGraphicsLayer:function(a){null!==a&&(this.graphicsLayer=a,this.graphicsLayer.clear(),
this.summaryLayer&&this.summaryLayer.renderer&&(this.lyrRenderer=this.summaryLayer.renderer,this.graphicsLayer.renderer=this.lyrRenderer,"undefined"!==typeof this.summaryLayer.renderer.attributeField?this.symbolField=this.summaryLayer.renderer.attributeField:this.lyrSymbol=this.lyrRenderer.symbol))},_queryFeatures:function(a){var c=new t;c.geometry=a;this.summaryLayer.queryIds(c,e.hitch(this,function(a){a?(this.summaryIds=a,0<this.summaryIds.length?this._queryFeaturesByIds():this._processResults()):
this._processResults()}))},_queryFeaturesByIds:function(){var a=this.summaryLayer.maxRecordCount||1E3,c=this.summaryIds.slice(0,a);this.summaryIds.splice(0,a);var a=new t,d=!1;l.some(this.summaryFields,e.hitch(this,function(a){if("area"===a.type||"length"===a.type||this.graphicsLayer)return d=!0}));a.returnGeometry=d;var b=[];l.forEach(this.summaryFields,function(a){b.push(a.field)});this.symbolField&&b.push(this.symbolField);a.outFields=!0===this.config.csvAllFields||"true"===this.config.csvAllFields?
["*"]:b;a.objectIds=c;this.summaryLayer.queryFeatures(a,e.hitch(this,function(a){this.summaryFeatures=this.summaryFeatures.concat(a.features);this._processResults();0<this.summaryIds.length?(n.byId("SA_SAT_download")&&f.replace(n.byId("SA_SAT_download"),"processing","download"),this._queryFeaturesByIds()):n.byId("SA_SAT_download")&&f.replace(n.byId("SA_SAT_download"),"download","processing")}))},_prepResults:function(){for(var a=0;a<this.summaryFields.length;a++){var c=this.summaryFields[a],d=c.field,
b=c.total;switch(c.type){case "count":b=this.summaryFeatures.length;break;case "area":b=this._getArea();break;case "length":b=this._getLength();break;case "sum":b=this._getSum(d);break;case "avg":b=this._getSum(d)/this.summaryFeatures.length;break;case "min":b=this._getMin(d);break;case "max":b=this._getMax(d)}c.total=b}},_sortResults:function(a){return function(c,d){return c.attributes[a]<d.attributes[a]?-1:c.attributes[a]>d.attributes[a]?1:0}},_getSum:function(a){var c=0;l.forEach(this.summaryFeatures,
function(d){c+=d.attributes[a]});return c},_getMin:function(a){this.summaryFeatures.sort(this._sortResults(a));return this.summaryFeatures[0].attributes[a]},_getMax:function(a){this.summaryFeatures.sort(this._sortResults(a));this.summaryFeatures.reverse();return this.summaryFeatures[0].attributes[a]},_getArea:function(){var a=0,c=e.clone(this.config.distanceSettings);c.miles=109413;c.kilometers=109414;c.feet=109405;c.meters=109404;c.yards=109442;c.nauticalMiles=109409;var d=c[this.config.distanceUnits];
l.forEach(this.summaryFeatures,e.hitch(this,function(b){b=q.intersect(b.geometry,this.summaryGeom);null!==b&&(a+=q.geodesicArea(b,d))}));return a},_getLength:function(){var a=0,c=this.config.distanceSettings[this.config.distanceUnits];l.forEach(this.summaryFeatures,e.hitch(this,function(d){d=q.intersect(d.geometry,this.summaryGeom);null!==d&&(a+=q.geodesicLength(d,c))}));return a},_processResults:function(){this._prepResults();this.container.innerHTML="";f.remove(this.container,"loading");var a=this.summaryFields,
c=0,d=p.create("div",{id:"SA_tpc",style:"width:"+220*(a.length+1)+"px;"},this.container);f.add(d,"SAT_tabPanelContent");var b=p.create("div",{},d);f.add(b,"SATcol");b=p.create("div",{id:"SA_SAT_download",innerHTML:this.parent.nls.downloadCSV},b);f.add(b,["btnExport","download"]);r(b,"click",e.hitch(this,this._exportToCSV));for(b=0;b<a.length;b++){var c=a[b],h=x.sanitizeHTML(c.alias?c.alias:"")+"\x3cbr/\x3e",c=c.alias===this.parent.nls.area||c.alias===this.parent.nls.length?c.total:Math.round(c.total);
isNaN(c)&&(c=0);h+="\x3cdiv class\x3d'colSummary'\x3e"+v.format(c)+"\x3c/div\x3e\x3cbr/\x3e";h=p.create("div",{id:"SA_Demographics_"+b,innerHTML:h},d);f.add(h,"SATcol")}if(null!==this.graphicsLayer){this.graphicsLayer.clear();this.tab.tabLayers[1].clear();if(this.summaryFeatures)for(a=0;a<this.summaryFeatures.length;a++)d=this.summaryFeatures[a],this.lyrSymbol?d.symbol=this.lyrSymbol:this.graphicsLayer.renderer&&(b=this.graphicsLayer.renderer.getSymbol(d),d.symbol=b),this.graphicsLayer.add(d),this.tab.tabLayers[1].add(d);
this.graphicsLayer.setVisibility(!0)}},_exportToCSV:function(){if(0===this.summaryFeatures.length)return!1;var a=this.tab.tabLayers[0].id,c=[],d=[];l.forEach(this.summaryFeatures,function(a){c.push(a.attributes)});if(!0===this.config.csvAllFields||"true"===this.config.csvAllFields)for(var b in c[0])d.push(b);else for(b=0;b<this.summaryFields.length;b++)d.push(this.summaryFields[b].field);w.exportCSV(a,c,d)},_getFields:function(a){var c=[];if(this.tab.advStat){a=this.tab.advStat.stats;for(var d in a)0<
a[d].length&&l.forEach(a[d],function(a){c.push({field:a.expression,alias:a.label+"",type:d,total:0})});return c}var b;if(a.infoTemplate)b=a.infoTemplate.info.fieldInfos;else if(-1<this.tab.tabLayers[0].url.indexOf("MapServer")){var h=this.tab.tabLayers[0].url.split("MapServer/")[1],g=this.parent.map.itemInfo.itemData.operationalLayers;b=null;for(var k=0;k<g.length;k++){var e=g[k];if(e.layerObject.infoTemplates&&(e=e.layerObject.infoTemplates[h])){b=e.infoTemplate.info.fieldInfos;break}}}else b=a.fields;
b||(b=a.fields);for(h=0;h<b.length;h++)if(g=b[h],"undefined"!==typeof a.fields){var k=a.fields[h].type,f;if(g.name!==a.objectIdField&&("esriFieldTypeDouble"===k||"esriFieldTypeInteger"===k||"esriFieldTypeSmallInteger"===k))"undefined"!==typeof g.visible?g.visible&&(f={field:g.fieldName,alias:g.label,type:"sum",total:0}):f={field:g.name,alias:g.alias,type:"sum",total:0},f&&c.push(f),f=null}return c}})});