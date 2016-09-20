// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/lang","dojo/_base/array"],function(h,e){function g(a,b,d){var c=null;e.some(a,h.hitch(this,function(a){if(a&&d!==a.id)if(1===b.length){if("*"===b[0]||b[0]===a.geometryType)return c=a.id,!0}else if(-1<b.indexOf(a.geometryType))return c=a.id,!0}));return c}return{isValid:function(a,b,d){var c=!1,c=a.layerObjects;-1!==b.dijitID.indexOf("MergeLayers")?c=this.mergeAvailable(c):-1!==b.dijitID.indexOf("ExtractData")?c=this.extractAvailable(a,d):(a=null,"requiredParam"in b&&(a=b.requiredParam),
c=this.paramAvailable(c,b.analysisLayer,a));return c},mergeAvailable:function(a){return e.some(a,function(b){return e.some(a,function(a){return a!==b&&a.geometryType===b.geometryType})})},extractAvailable:function(a,b){var d=b.getUser(),c=a.layerInfos,g=a.layerInfosObject.getMapNotesLayerInfoArray(),f=!1;e.forEach(c,function(a){var c=this._isMapNotes(g,a),k="esri.layers.GeoRSSLayer"===a.layerObject.declaredClass,l="esri.layers.CSVLayer"===a.layerObject.declaredClass,m="FeatureCollection"===a.layerObject.type,
h=m&&!c;m||k||l||c?k||l?f=this._addExtractCapability(a):c||h?(a=a.getSubLayers())&&0<a.length&&e.forEach(a,function(a){f=this._addExtractCapability(a)},this):f=this._addExtractCapability(a):b.isAdmin()&&(a.layerObject.url&&-1<a.layerObject.url.indexOf("/"+d.orgId+"/"))&&(f=this._addExtractCapability(a))},this);return f},_isMapNotes:function(a,b){return e.some(a,function(a){return a.id===b.id})},_addExtractCapability:function(a){a.layerObject.capabilities?-1===a.layerObject.capabilities.indexOf("Extract")&&
(a.layerObject.capabilities+=",Extract"):a.layerObject.capabilities="Extract";return!0},paramAvailable:function(a,b,d){var c;c=b.geomTypes;b=g(a,c);return null===b?!1:null!==d?(c=d.geomTypes,null!==g(a,c,b)):!0}}});