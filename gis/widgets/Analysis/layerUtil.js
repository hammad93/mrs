// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/array","dojo/promise/all","jimu/LayerInfos/LayerInfos"],function(d,f,b){return{getLayerObjects:function(a){return b.getInstance(a,a.itemInfo).then(function(a){var c=[];a.traversal(function(a){c.push(a)});var b=d.map(c,function(a){return a.getLayerObject()});return f(b).then(function(b){var e=[];d.forEach(b,function(a,b){a.id=a.id||c[b].id;a&&"esri.layers.FeatureLayer"===a.declaredClass&&e.push(a)});return{layerInfosObject:a,layerInfos:c,layerObjects:e}})})}}});