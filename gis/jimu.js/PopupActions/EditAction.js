// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dijit/_WidgetBase dojo/on dojo/topic jimu/WidgetManager jimu/PopupActions/PopupAction".split(" "),function(d,b,e,f,g,h,k){return d([e],{name:null,map:null,popupUnion:null,editWidgetState:null,appConfig:null,constructor:function(){this.own(g.subscribe("appConfigChanged",b.hitch(this,this._onAppConfigChanged)))},postCreate:function(){this.inherited(arguments);this.editBtn=new k({popupUnion:this.popupUnion,buttonInfo:{label:window.jimuNls.popupManager.edit,
baseClass:"edit",onClick:b.hitch(this,this._onEditClick)}});this.hide();this._updateEditWidgetState();this.own(f(this.editBtn,"selectionChange",b.hitch(this,this._onSelectionChange)))},_updateEditWidgetState:function(){this.editWidgetState=this.appConfig.getConfigElementsByName("Edit")[0]},_onEditClick:function(a,c){this.editWidgetState&&this.editWidgetState.visible&&h.getInstance().triggerWidgetOpen(this.editWidgetState.id).then(b.hitch(this,function(b){c.mapPoint=c.target.location;c.graphic=a;b.reClickMap(c)}))},
_onSelectionChange:function(a){this.editWidgetState&&this.editWidgetState.visible&&a._layer&&a._layer.isEditable&&a._layer.isEditable()?this.show():this.hide()},_onAppConfigChanged:function(a){this.appConfig=a;this._updateEditWidgetState()},show:function(){this.editBtn.show()},hide:function(){this.editBtn.hide()},destroy:function(){this.editBtn.destroy();this.inherited(arguments)}})});