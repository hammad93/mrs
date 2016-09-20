// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/promise/all esri/lang ./_FeatureTable ./_RelationshipTable ./utils".split(" "),function(q,e,k,l,r,m,s,t,p){return q(null,{_activeLayerInfoId:null,_activeRelationshipKey:null,nls:null,config:null,map:null,_delayedLayerInfos:[],_layerInfosFromMap:[],featureTableSet:{},relationshipsSet:{},relationshipTableSet:{},currentRelationshipKey:null,constructor:function(a){this.map=a&&a.map;this.nls=a&&a.nls;this._delayedLayerInfos=
[];this._layerInfosFromMap=[];this.featureTableSet={};this.relationshipsSet={};this.relationshipTableSet={};this.currentRelationshipKey=null},setConfig:function(a){this.config=e.clone(a||{})},setMap:function(a){this.map=a},updateLayerInfoResources:function(a){var c=new l;p.readConfigLayerInfosFromMap(this.map,!1,!0).then(e.hitch(this,function(d){this._layerInfosFromMap=d;this._processDelayedLayerInfos();a&&(0===this.config.layerInfos.length?(d=p.getConfigInfosFromLayerInfos(d),this.config.layerInfos=
k.filter(d,function(a){return a.show})):this.config.layerInfos=k.filter(e.delegate(this.config.layerInfos),e.hitch(this,function(a){var c=this._getLayerInfoById(a.id);return a.show&&c&&(a.name=c.name||c.title)})));c.resolve()}),function(a){c.reject(a)});return c},isEmpty:function(){return this.config&&this.config.layerInfos&&0>=this.config.layerInfos.length},getConfigInfos:function(){return e.clone(this.config.layerInfos)},addLayerInfo:function(a){0===this._layerInfosFromMap.length?this._delayedLayerInfos.push(a):
0<this._layerInfosFromMap.length&&!this._getLayerInfoById(a.id)&&this._layerInfosFromMap.push(a)},addConfigInfo:function(a){this._getConfigInfoById(a.id)||(a=p.getConfigInfoFromLayerInfo(a),this.config.layerInfos.push({id:a.id,name:a.name,layer:{url:a.layer.url,fields:a.layer.fields}}))},removeLayerInfo:function(a){a=this._getLayerInfoById(a);a=this._layerInfosFromMap.indexOf(a);this._layerInfosFromMap.splice(a,1)},removeConfigInfo:function(a){if(e.getObject("config.layerInfos",!1,this))for(var c=
this.config.layerInfos.length,d=0;d<c;d++)if(this.config.layerInfos[d].id===a){this.featureTableSet[a]&&(this.featureTableSet[a].destroy(),delete this.featureTableSet);this.config.layerInfos.splice(d,1);break}},getQueryTable:function(a,c){var d=new l;this._activeLayerInfoId=a;this.featureTableSet[a]?d.resolve({isSupportQuery:!0,table:this.featureTableSet[a]}):this._getQueryTableInfo(a).then(e.hitch(this,function(b){if(b){var f=b.layerInfo,n=b.layerObject;b=b.tableInfo;if(e.getObject("isSupportQuery",
!1,b)){var g=this._getConfigInfoById(a);g.layer.fields=this._clipValidFields(g.layer.fields,n&&n.fields);f=new s({map:this.map,matchingMap:c,layerInfo:f,configedInfo:g,nls:this.nls});this.featureTableSet[a]=f;d.resolve({isSupportQuery:b.isSupportQuery,table:f})}else d.resolve({isSupportQuery:!1})}else d.resolve(null)}),function(a){d.reject(a)});return d},getRelationTable:function(a,c){var d=new l,b=this.relationshipsSet[c];this._activeRelationshipKey=c;if(b){b=this.relationshipTableSet[c];if(!b){var b=
this._getLayerInfoById(a),f=this.relationshipsSet[c],n=this._getConfigInfoById(f&&f.shipInfo&&f.shipInfo.id),b=new t({relationship:f,configedInfo:n,originalInfo:b,nls:this.nls});this.relationshipTableSet[c]=b}d.resolve(b)}else d.resolve(null);return d},removeRelationTable:function(a){this.relationshipTableSet[a]&&(this.relationshipTableSet[a].destroy(),this.relationshipTableSet[a]=null)},getCurrentTable:function(a){return this.featureTableSet[a]||this.relationshipTableSet[a]},collectRelationShips:function(a,
c){this._collectRelationShips(a,a.layerObject,c)},getConfigInfoById:function(a){return this._getConfigInfoById(a)},getLayerInfoById:function(a){return this._getLayerInfoById(a)},getRelationshipsByInfoId:function(a){var c=[],d;for(d in this.relationshipsSet){var b=this.relationshipsSet[d];b._layerInfoId===a&&c.push(b)}return c},empty:function(){this._delayedLayerInfos=[];this._layerInfosFromMap=[];this.featureTableSet={};for(var a in this.relationshipsSet)this.relationshipsSet[a].shipInfo=null;this.relationshipsSet=
{};this.relationshipTableSet={};this.nls=this.map=this.config=this.currentRelationshipKey=null},_processDelayedLayerInfos:function(){0<this._delayedLayerInfos.length&&(k.forEach(this._delayedLayerInfos,e.hitch(this,function(a){this._getLayerInfoById(a&&a.id)||this._layerInfosFromMap.push(a)})),this._delayedLayerInfos=[])},_getLayerInfoById:function(a){for(var c=0,d=this._layerInfosFromMap.length;c<d;c++)if(this._layerInfosFromMap[c]&&this._layerInfosFromMap[c].id===a)return this._layerInfosFromMap[c]},
_getConfigInfoById:function(a){if(!e.getObject("layerInfos.length",!1,this.config))return null;for(var c=0,d=this.config.layerInfos.length;c<d;c++){var b=this.config.layerInfos[c];if(b&&b.id===a)return b}return null},_getQueryTableInfo:function(a){var c=new l,d=this._getLayerInfoById(a);if(d){var b=[],f=d.getUrl();b.push(d.getLayerObject());b.push(d.getSupportTableInfo());f&&b.push(d.getRelatedTableInfoArray());r(b).then(e.hitch(this,function(b){if(this._activeLayerInfoId!==a||!b)c.resolve(null);
else{var g=b[0],e=b[1];b=f?b[2]:[];m.isDefined(b)&&(m.isDefined(g)&&0<b.length)&&this._collectRelationShips(d,g,b);c.resolve({layerInfo:d,layerObject:g,tableInfo:e})}}),function(a){c.reject(a)})}else console.error("no activeLayerInfo!"),c.reject(Error());return c},_collectRelationShips:function(a,c,d){var b=c.relationships;if(b&&0<b.length&&c&&c.url){var f=c.url.split("/");k.forEach(b,e.hitch(this,function(b){f[f.length-1]=b.relatedTableId;var g=f.join("/"),h=k.filter(d,e.hitch(this,function(a){a=
a.getUrl();return m.isDefined(a)&&m.isDefined(g)&&a.toLowerCase()===g.toLowerCase()}));h&&0<h.length&&(b.shipInfo=h[0]);h=a.id+"_"+b.name+"_"+b.id;b._relKey=h;b._layerInfoId=a.id;this.relationshipsSet[h]||(this.relationshipsSet[h]=b,this.relationshipsSet[h].objectIdField=c.objectIdField)}))}},_getLayerInfoLabel:function(a){return a.name||a.title},_getLayerInfoId:function(a){return a&&a.id||""},_clipValidFields:function(a,c){if(!a||!a.length)return c||[];if(!c||!c.length)return a;for(var d=[],b=0,
f=a.length;b<f;b++)for(var e=a[b],g=0,h=c.length;g<h;g++)if(c[g].name===e.name){d.push(e);break}return d}})});