// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/promise/all dojo/Deferred jimu/utils esri/request esri/tasks/query esri/tasks/QueryTask esri/tasks/RelationshipQuery".split(" "),function(q,d,g,n,h,s,t,p,l,v){function u(){return{queryTr:null,config:null,layerInfo:null,askForValues:null,queryType:-1,query:{maxRecordCount:1E3,resultLayer:null,where:"",geometry:null,nextIndex:0,allCount:0,objectIds:[]}}}q=q(null,{tempResultLayer:null,map:null,currentAttrs:null,constructor:function(a,b){this.map=
a;this.currentAttrs=b},resetCurrentAttrs:function(){this.currentAttrs=u()},getCurrentAttrs:function(){return this.currentAttrs},executeQueryForFirstTime:function(){var a=null,a=this.currentAttrs.query.where,b=this.currentAttrs.query.geometry;return a=1===this.currentAttrs.queryType?this.doQuery_SupportOrderByAndPagination(a,b):2===this.currentAttrs.queryType?this.doQuery_SupportObjectIds(a,b):this.doQuery_NotSupportObjectIds(a,b)},executeQueryWhenScrollToBottom:function(){var a=null;1===this.currentAttrs.queryType?
a=this.onResultsScroll_SupportOrderByAndPagination():2===this.currentAttrs.queryType&&(a=this.onResultsScroll_SupportObjectIds());return a},_isServiceSupportsOrderBy:function(a){var b=!1;a.advancedQueryCapabilities&&a.advancedQueryCapabilities.supportsOrderBy&&(b=!0);return b},_isServiceSupportsPagination:function(a){var b=!1;a.advancedQueryCapabilities&&a.advancedQueryCapabilities.supportsPagination&&(b=!0);return b},_tryLocaleNumber:function(a){var b=s.localizeNumber(a);if(null===b||void 0===b)b=
a;return b},_tryLocaleDate:function(a){var b=s.localizeDate(a);b||(b=a.toLocaleDateString());return b},_removeTempResultLayer:function(){this.tempResultLayer&&this.map.removeLayer(this.tempResultLayer);this.tempResultLayer=null},_addOperationalLayer:function(a){this.map.addLayer(a)},_getLayerInfoWithRelationships:function(a){var b=new h;t({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(d.hitch(this,function(c){c.relationships||(c.relationships=[]);var f=this._getServiceUrlByLayerUrl(a),
e=g.map(c.relationships,d.hitch(this,function(a){return t({url:f+"/"+a.relatedTableId,content:{f:"json"},handleAs:"json",callbackParamName:"callback"})}));n(e).then(d.hitch(this,function(a){g.forEach(a,d.hitch(this,function(a,b){var e=c.relationships[b];e.name=a.name;e.fields=g.filter(a.fields,d.hitch(this,function(a){return"esriFieldTypeGeometry"!==a.type}))}));b.resolve(c)}),d.hitch(this,function(a){b.reject(a)}))}),d.hitch(this,function(a){b.reject(a)}));return b},_getLayerIndexByLayerUrl:function(a){var b=
a.lastIndexOf("/");a=a.slice(b+1,a.length);return parseInt(a,10)},_getServiceUrlByLayerUrl:function(a){var b=a.lastIndexOf("/");return a.slice(0,b)},_isSupportObjectIds:function(a){var b=0;a.currentVersion&&(b=parseFloat(a.currentVersion));return 10<=b||a.hasOwnProperty("typeIdField")},_isImageServiceLayer:function(a){return-1<a.indexOf("/ImageServer")},_isTable:function(a){return"Table"===a.type},_getBestQueryName:function(a){for(var b=a=a?a+(" _"+this.nls.queryResult):a+this.nls.queryResult,c=g.map(this.map.graphicsLayerIds,
d.hitch(this,function(a){return this.map.getLayer(a).name})),f=2;0<=g.indexOf(c,b);)b=a+"_"+f,f++;return b},_getQueryResultTemplate:function(){return{features:[],relatedResults:[],relatedTableIds:[]}},doQuery_SupportOrderByAndPagination:function(a,b){var c=new h,f=d.hitch(this,function(a){console.error(a);c.reject(a)});this._queryCount(a,b).then(d.hitch(this,function(e){if(0===e)this.currentAttrs.query.allCount=0,c.resolve(this._getQueryResultTemplate());else{this.currentAttrs.query.allCount=e;this.currentAttrs.query.nextIndex=
0;var m=this.currentAttrs.config.objectIdField;this._queryWithPaginationAndOrder(a,b,0,this.currentAttrs.query.maxRecordCount).then(d.hitch(this,function(a){var b=a.features;a=g.map(b,d.hitch(this,function(a){a=a.attributes[m];return a=parseInt(a,10)}));a=this._queryRelatedFeaturesById(a);var e=g.map(a,d.hitch(this,function(a){return a.promise})),h=g.map(a,function(a){return a.relationshipId});n(e).then(d.hitch(this,function(a){this.currentAttrs.query.nextIndex+=b.length;c.resolve({features:b,relatedResults:a,
relatedTableIds:h})}),f)}),f)}}),f);return c},onResultsScroll_SupportOrderByAndPagination:function(){var a=new h,b=this.currentAttrs.query.nextIndex;if(b>=this.currentAttrs.query.allCount)return a.resolve(this._getQueryResultTemplate()),a;var c=d.hitch(this,function(b){console.error(b);a.reject(b)}),f=this.currentAttrs.config.objectIdField;this._queryWithPaginationAndOrder(this.currentAttrs.query.where,this.currentAttrs.query.geometry,b,this.currentAttrs.query.maxRecordCount).then(d.hitch(this,function(b){var m=
b.features;b=g.map(m,d.hitch(this,function(a){a=a.attributes[f];return a=parseInt(a,10)}));b=this._queryRelatedFeaturesById(b);var r=g.map(b,d.hitch(this,function(a){return a.promise})),k=g.map(b,function(a){return a.relationshipId});n(r).then(d.hitch(this,function(b){this.currentAttrs.query.nextIndex+=m.length;a.resolve({features:m,relatedResults:b,relatedTableIds:k})}),c)}),c);return a},doQuery_SupportObjectIds:function(a,b){var c=new h,f=d.hitch(this,function(a){console.error(a);c.reject(a)});
this._queryIds(a,b).then(d.hitch(this,function(a){if(a&&0<a.length){var b=this.currentAttrs.query.allCount=a.length;this.currentAttrs.query.objectIds=a;this.currentAttrs.query.nextIndex=0;var r=this.currentAttrs.query.maxRecordCount,k=[],k=b>r?a.slice(0,r):a,h=[];a=this._queryByObjectIds(k,!0);h.push(a);k=this._queryRelatedFeaturesById(k);g.forEach(k,function(a){h.push(a.promise)});var l=g.map(k,function(a){return a.relationshipId});n(h).then(d.hitch(this,function(a){var b=a[0].features;this.currentAttrs.query.maxRecordCount=
b.length;this.currentAttrs.query.nextIndex+=b.length;a=a.slice(1);c.resolve({features:b,relatedResults:a,relatedTableIds:l})}),f)}else this.currentAttrs.query.allCount=0,c.resolve(this._getQueryResultTemplate())}),f);return c},onResultsScroll_SupportObjectIds:function(){var a=new h,b=this.currentAttrs.query.objectIds,c=this.currentAttrs.query.nextIndex;if(c>=b.length)a.resolve(this._getQueryResultTemplate());else{var f=Math.min(b.length-c,this.currentAttrs.query.maxRecordCount),b=b.slice(c,c+f);if(0===
b.length)a.resolve(this._getQueryResultTemplate());else{var e=[],c=this._queryByObjectIds(b,!0);e.push(c);b=this._queryRelatedFeaturesById(b);g.forEach(b,function(a){e.push(a.promise)});var m=g.map(b,function(a){return a.relationshipId});n(e).then(d.hitch(this,function(b){var c=b[0].features;this.currentAttrs.query.nextIndex+=c.length;b=b.slice(1);a.resolve({features:c,relatedResults:b,relatedTableIds:m})}),d.hitch(this,function(b){console.error(b);a.reject(b)}));return a}}},doQuery_NotSupportObjectIds:function(a,
b){var c=new h;this._query(a,b,!0).then(d.hitch(this,function(a){a=a.features;this.currentAttrs.query.allCount=a.length;c.resolve({features:a,relatedResults:[],relatedTableIds:[]})}),d.hitch(this,function(a){console.error(a);c.reject(a)}));return c},_getObjectIdField:function(){return this.currentAttrs.config.objectIdField},_getOutputFields:function(){var a=g.map(this.currentAttrs.config.popup.fields,d.hitch(this,function(a){return a.name})),b=this.currentAttrs.config.objectIdField;0>g.indexOf(a,
b)&&a.push(b);(b=this.currentAttrs.config.popup.title.match(/\$\{\w+\}/g))&&0<b.length&&g.forEach(b,d.hitch(this,function(b){b=b.replace("${","").replace("}","");0>a.indexOf(b)&&a.push(b)}));var c=g.map(this.currentAttrs.layerInfo.fields,d.hitch(this,function(a){return a.name}));return a=g.filter(a,d.hitch(this,function(a){return 0<=c.indexOf(a)}))},_query:function(a,b,c){var d=new p;d.where=a;b&&(d.geometry=b);d.outSpatialReference=this.map.spatialReference;d.returnGeometry=!!c;d.outFields=this._getOutputFields();
return(new l(this.currentAttrs.config.url)).execute(d)},_queryIds:function(a,b){var c=new p;c.where=a;b&&(c.geometry=b);c.returnGeometry=!1;c.outSpatialReference=this.map.spatialReference;return(new l(this.currentAttrs.config.url)).executeForIds(c)},_queryByObjectIds:function(a,b){var c=new h,f=new p;f.returnGeometry=!!b;f.outSpatialReference=this.map.spatialReference;f.outFields=this._getOutputFields();f.objectIds=a;(new l(this.currentAttrs.config.url)).execute(f).then(d.hitch(this,function(a){c.resolve(a)}),
d.hitch(this,function(e){if(400===e.code){var f=this._getObjectIdField(),h="",k=a.length;g.forEach(a,d.hitch(this,function(a,b){h+=f+" \x3d "+a;b!==k-1&&(h+=" OR ")}));this._query(h,null,b).then(d.hitch(this,function(a){c.resolve(a)}),d.hitch(this,function(a){c.reject(a)}))}else c.reject(e)}));return c},_queryCount:function(a,b){var c=new p;c.where=a;b&&(c.geometry=b);c.returnGeometry=!1;c.outSpatialReference=this.map.spatialReference;return(new l(this.currentAttrs.config.url)).executeForCount(c)},
_queryWithPaginationAndOrder:function(a,b,c,f){var e=new p;e.where=a;b&&(e.geometry=b);e.outSpatialReference=this.map.spatialReference;e.returnGeometry=!0;e.outFields=this._getOutputFields();e.start=c;e.num=f;if((a=this.currentAttrs.config.orderByFields)&&0<a.length)e.orderByFields=a,a=g.map(a,d.hitch(this,function(a){return a.split(" ")[0]})),g.forEach(a,d.hitch(this,function(a){0>e.outFields.indexOf(a)&&e.outFields.push(a)}));return(new l(this.currentAttrs.config.url)).execute(e)},_getCurrentRelationships:function(){return this.currentAttrs.queryTr.layerInfo.relationships||
[]},_queryRelatedFeaturesById:function(a){var b=[],c=this._getCurrentRelationships();if(c&&0<c.length){var f=new l(this.currentAttrs.config.url);g.forEach(c,d.hitch(this,function(c){var d=new v;d.objectIds=a;d.relationshipId=c.id;var h=g.map(c.fields,function(a){return a.name});d.outFields=h;d.returnGeometry=!1;d=f.executeRelationshipQuery(d);b.push({relationshipId:c.id,promise:d})}))}return b},_findRelationshipInfo:function(a){for(var b=this._getCurrentRelationships(),c=0;c<b.length;c++)if(b[c].id===
a)return b[c];return null},_findRelationshipFields:function(a){var b=[];if(a=this._findRelationshipInfo(a))b=a.fields;return b},_addResultItems:function(a,b,c,d){console.log(a,b,c,d)}});q.getCleanCurrentAttrsTemplate=u;return q});