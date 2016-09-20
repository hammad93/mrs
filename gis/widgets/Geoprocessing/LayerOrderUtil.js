// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/array","dojo/Deferred","jimu/LayerInfos/LayerInfos"],function(k,d,l,m){return k(null,{config:null,constructor:function(b,a){this.config=b;this.map=a;if(!("layerOrder"in this.config)||0===this.config.layerOrder.length)this.config.layerOrder=this.getCandidateParamNames(!1)},getCandidateParamNames:function(b){var a=[];if(!this.config)return a;d.forEach(this.config.outputParams,function(c){"GPFeatureRecordSetLayer"===c.dataType&&(!b||!0!==this.config.useResultMapServer)&&
a.push(c.name)},this);d.forEach(this.config.inputParams,function(c){"GPFeatureRecordSetLayer"===c.dataType&&(!b||"draw"===c.featureSetMode)&&a.push(c.name)},this);return a},getOrderableInput:function(){var b=[];if(!this.config)return b;d.forEach(this.config.inputParams,function(a){"GPFeatureRecordSetLayer"===a.dataType&&"draw"===a.featureSetMode&&b.push(a.name)},this);return d.filter(this.config.layerOrder,function(a){return-1!==d.indexOf(b,a)},this)},getOrderableOutput:function(){var b=[];if(!this.config)return b;
d.forEach(this.config.outputParams,function(a){"GPFeatureRecordSetLayer"===a.dataType&&!0!==this.config.useResultMapServer&&b.push(a.name)},this);return d.filter(this.config.layerOrder,function(a){return-1!==d.indexOf(b,a)},this)},calculateLayerIndex:function(b,a){if(!this.map)throw Error("The map cannot be null in LayerOrderUtil.calculateLayerIndex");var c,g,e,f=new l,h=this.config.layerOrder;g=d.indexOf(h,b);if(-1===g)throw Error(b+"cannot be found in the orderable params");for(c=g-1;0<=c;c--)if(e=
d.indexOf(this.map.graphicsLayerIds,a+h[c]),-1!==e)return f.resolve(e),f;c=g+1;for(g=h.length;c<g;c++)if(e=d.indexOf(this.map.graphicsLayerIds,a+h[c]),-1!==e)return f.resolve(e+1),f;f.isResolved()||m.getInstance(this.map,this.map.itemInfo).then(function(a){var b;a=a.getMapNotesLayerInfoArray();0===a.length?f.resolve(-1):(a=a[a.length-1],b=a.getSubLayers(),a=0===b.length?a.layerObject.id:b[b.length-1].layerObject.id,e=d.indexOf(this.map.graphicsLayerIds,a),f.resolve(e))});return f}})});