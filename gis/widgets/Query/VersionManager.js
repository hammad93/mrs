// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/shared/BaseVersionManager"],function(e){function c(){this.versions=[{version:"1.0",upgrader:function(a){return a}},{version:"1.1",upgrader:function(a){return a}},{version:"1.2",upgrader:function(a){return a}},{version:"1.3",upgrader:function(a){for(var d=null,b=0;b<a.queries.length;b++)d=a.queries[b],d.orderByFields=[],d.popup.fields=this._updatePopupFields(d.popup.fields);return a},_updatePopupFields:function(a){for(var d=[],b=null,c=0;c<a.length;c++)b=a[c],b.showInInfoWindow&&d.push({name:b.name,
alias:b.alias,specialType:b.specialType});return d}},{version:"1.4",upgrader:function(a){return a}}]}c.prototype=new e;return c.prototype.constructor=c});