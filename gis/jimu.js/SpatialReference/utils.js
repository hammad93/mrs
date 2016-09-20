// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/promise/all dojo/request esri/SpatialReference ./unitUtils".split(" "),function(b,m,f,n,p,k,h,e){var d=null,g=null,c=!1;b=b(null,function(){});var l=require.toUrl("jimu"),q=k(l+"/SpatialReference/wkidDetails.json",{handleAs:"json"}),r=k(l+"/SpatialReference/transform.json",{handleAs:"json"});b.loadResource=function(){var a=new n;if(d&&g)return a.resolve(),a;p([q,r]).then(function(b){d=b[0];g=b[1];c=!0;a.resolve()},function(b){console.error(b);
c=!1;a.reject(b)});return a};b.getAllCSUnits=function(){if(c){var a=[];f.forEach(d.wkids,m.hitch(this,function(b){b=this.getCSUnit(b);-1===f.indexOf(a,b)&&a.push(b)}));return a}};b.convertUnit=function(a,b,d){if(c)return e.convertUnit(a,b,d)};b.getUnitRate=function(a,b){if(c)return e.getUnitRate(a,b)};b.isProjectUnit=function(a){if(c)return e.isProjectUnit(a)};b.isGeographicUnit=function(a){if(c)return e.isGeographicUnit(a)};b.getGeographicUnits=function(){if(c)return e.getGeographicUnits()};b.getProjectUnits=
function(){if(c)return e.getProjectUnits()};b.getCSUnit=function(a){if(c){a=this.getCSStr(a);var b=0,d=0,b=a.lastIndexOf("UNIT"),d=a.indexOf(",",b);return a.slice(b+6,d-1)}};b.isSameSR=function(a,b){if(c){var e=this.indexOfWkid(a),f=this.indexOfWkid(b);return d.labels[e]===d.labels[f]}};b.isValidWkid=function(a){if(c)return-1<this.indexOfWkid(a)};b.getSRLabel=function(a){if(c&&this.isValidWkid(a))return a=this.indexOfWkid(a),d.labels[a]};b.indexOfWkid=function(a){if(c)return f.indexOf(d.wkids,a)};
b.isWebMercator=function(a){return h.prototype._isWebMercator?h.prototype._isWebMercator.apply({wkid:parseInt(a,10)},[]):(new h(parseInt(a,10))).isWebMercator()};b.standardizeWkid=function(a){return this.isWebMercator(a)?3857:parseInt(a,10)};b.isValidTfWkid=function(a){if(c)return-1<this.indexOfTfWkid(a)};b.getTransformationLabel=function(a){if(c)return this.isValidTfWkid(a)?(a=this.indexOfTfWkid(a),g.labels[a]):""};b.indexOfTfWkid=function(a){if(c)return f.indexOf(g.tfWkids,a)};b.isGeographicCS=
function(a){if(c)return this.isValidWkid(a)?d.details[this.indexOfWkid(a)].startWith("GEOGCS"):!1};b.isProjectedCS=function(a){if(c)return this.isValidWkid(a)?d.details[this.indexOfWkid(a)].startWith("PROJCS"):!1};b.getGeoCSByProj=function(a){if(c&&this.isProjectedCS(a))return a=this.getSpheroidStr(a),a=f.indexOf(d.details,a),d.wkids[a]};b.getSpheroidStr=function(a){if(c){if(this.isGeographicCS(a))return d.details[this.indexOfWkid(a)];if(this.isProjectedCS(a)){a=d.details[this.indexOfWkid(a)];var b=
a.indexOf("GEOGCS"),e=a.indexOf("PROJECTION")-1;return a.slice(b,e)}return null}};b.getCSStr=function(a){if(c)return d.details[this.indexOfWkid(a)]};b.isSameSpheroid=function(a,b){if(c){var d=this.getSpheroidStr(a),e=this.getSpheroidStr(b);return d&&e&&d===e?!0:!1}};return b});