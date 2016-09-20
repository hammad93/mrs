// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NearMe/setting/NetworkServiceChooser.html":'\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv class\x3d"public-search-radios esriCTSearchRadio" data-dojo-attach-point\x3d"routeSearch"\x3e\r\n        \x3cinput data-dojo-attach-point\x3d"organizationRadio" checked type\x3d"radio" name\x3d"routeSearchRadio"\r\n            class\x3d"jimu-float-leading portal-public-radio routeSearchRadio" id\x3d"org_Radio"\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"organizationLabel" class\x3d"jimu-float-leading portal-public-label"\r\n            for\x3d"org_Radio" style\x3d"cursor: pointer;"\x3e\r\n            ${nls.networkServiceChooser.arcgislabel}\x3c/label\x3e\r\n        \x3cinput data-dojo-attach-point\x3d"inputRouteURLRadio" type\x3d"radio" name\x3d"routeSearchRadio"\r\n            class\x3d"jimu-float-leading online-public-radio routeSearchRadio" id\x3d"route_URL_Radio"\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"inputRouteURLLabel" class\x3d"jimu-float-leading online-public-label"\r\n            for\x3d"route_URL_Radio" style\x3d"cursor: pointer;"\x3e\r\n            ${nls.networkServiceChooser.serviceURLabel}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"itemSelectDiv" class\x3d"esriCTItemSelectDiv"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"serviceUrlDiv" class\x3d"esriCTServiceUrlDiv esriCTHidden"\x3e\r\n        \x3cdiv class\x3d"serviceUrlContainer row"\x3e\r\n            \x3cdiv class\x3d"esriCTServiceLable" title\x3d"${nls.networkServiceChooser.routeURL}"\x3e\r\n                ${nls.networkServiceChooser.routeURL}\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTServiceField"\x3e\r\n                \x3cdiv class\x3d"esriCTSetServiceURL" data-dojo-type\x3d"dijit/form/ValidationTextBox" trim\x3d"true" required\x3d"true"\r\n                    data-dojo-attach-point\x3d"serviceURL"\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1 urlButton esriCTBtnEllipsis jimu-state-disabled"\r\n                    title\x3d"${nls.networkServiceChooser.validateRouteURL}" data-dojo-attach-point\x3d"validateRouteURL"\x3e\r\n                    ${nls.networkServiceChooser.validateRouteURL}\x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTExampleUrl row"\x3e\r\n            \x3cdiv class\x3d"esriCTServiceLable" title\x3d" ${nls.networkServiceChooser.exampleText}"\x3e\r\n                ${nls.networkServiceChooser.exampleText}\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTServiceField"\x3e\r\n                \x3cdiv class\x3d"esriCTHint esriCTNetworkChooserHint"\x3e\r\n                    \x3cdiv class\x3d"esriCTExampleUrl"\x3e\r\n                        ${nls.networkServiceChooser.hintRouteURL1}\x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriCTExampleUrl"\x3e\r\n                        ${nls.networkServiceChooser.hintRouteURL2}\x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"routeLayerList" class\x3d"esriCTRouteListDiv"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"agolRouteLayerList" class\x3d"esriCTAgolRouteListDiv esriCTHidden"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"buttonsDiv" class\x3d"buttonsDiv"\x3e\r\n        \x3cdiv class\x3d"button-container button-container-absolute" style\x3d"padding: 0px;"\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1" data-dojo-attach-point\x3d"cancelButton"\x3e\r\n                ${nls.networkServiceChooser.cancelButton}\x3c/div\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1 jimu-state-disabled"\r\n                data-dojo-attach-point\x3d"okButton"\x3e\r\n                ${nls.networkServiceChooser.okButton}\x3c/div\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing next jimu-state-disabled" data-dojo-attach-point\x3d"btnNext"\x3e\r\n                ${nls.networkServiceChooser.nextButton}\x3c/div\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing back esriCTHidden" data-dojo-attach-point\x3d"btnBack"\r\n                data-dojo-attach-event\x3d"onclick:_onBtnBackClicked"\x3e\r\n                ${nls.networkServiceChooser.backButton}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/on dojo/dom-class dojo/text!./NetworkServiceChooser.html jimu/dijit/ItemSelector dijit/Tree dojo/query esri/request dojo/store/Memory dojo/dom-construct dijit/tree/ObjectStoreModel jimu/dijit/LoadingIndicator dojox/validate/regexp jimu/dijit/Message dojo/domReady!".split(" "),function(l,m,n,c,f,a,p,q,r,s,t,u,k,v,w,x,y){return l([m,n],{baseClass:"jimu-widget-nearme-setting",templateString:p,selectRouteURL:null,
agolFlag:!1,serviceFlag:!1,startup:function(){this.inherited(arguments)},postCreate:function(){var b;this.routeChooser=new q({portalUrl:this.portalUrl,itemTypes:["Network analysis service"]});this.routeChooser.placeAt(this.itemSelectDiv);this.own(f(this.okButton,"click",c.hitch(this,function(b){if(!a.contains(this.okButton,"jimu-state-disabled"))this.onOkClick(b)})));this.own(f(this.cancelButton,"click",c.hitch(this,function(b){this.onCancelClick(b)})));this.own(f(this.routeChooser,"item-selected",
c.hitch(this,function(){a.remove(this.btnNext,"jimu-state-disabled")})));this.own(f(this.routeChooser,"none-item-selected",c.hitch(this,function(){a.add(this.btnNext,"jimu-state-disabled")})));this.own(f(this.serviceURL,"keyup",c.hitch(this,function(){""===c.trim(this.serviceURL.get("value"))?a.add(this.validateRouteURL,"jimu-state-disabled"):a.remove(this.validateRouteURL,"jimu-state-disabled")})));this.own(f(this.validateRouteURL,"click",c.hitch(this,function(){a.contains(this.validateRouteURL,
"jimu-state-disabled")||(this.serviceFlag=!0,this._fetchRouteLayer(this.routeLayerList))})));this.own(f(this.btnNext,"click",c.hitch(this,function(){a.contains(this.btnNext,"jimu-state-disabled")||(this.agolFlag=!0,this._fetchRouteLayer(this.agolRouteLayerList))})));b=s(".routeSearchRadio",this.routeSearch);this.own(f(b,"change",c.hitch(this,function(){this.organizationRadio&&this.organizationRadio.checked?(a.add(this.serviceUrlDiv,"esriCTHidden"),this.agolFlag?(a.add(this.itemSelectDiv,"esriCTHidden"),
a.remove(this.agolRouteLayerList,"esriCTHidden"),a.add(this.btnBack,"esriCTHidden")):(a.remove(this.itemSelectDiv,"esriCTHidden"),a.add(this.agolRouteLayerList,"esriCTHidden"),a.remove(this.btnNext,"esriCTHidden"),a.add(this.okButton,"jimu-state-disabled"))):(a.add(this.itemSelectDiv,"esriCTHidden"),a.remove(this.serviceUrlDiv,"esriCTHidden"),a.add(this.btnNext,"esriCTHidden"),a.add(this.btnBack,"esriCTHidden"),a.add(this.agolRouteLayerList,"esriCTHidden"))})));this._initLoading()},_initLoading:function(){this.loading=
new w({hidden:!0});this.loading.placeAt(this.domNode);this.loading.startup()},onOkClick:function(b){return b},onCancelClick:function(b){return b},_fetchRouteLayer:function(b){var d;d=this._getValidRouteURL();this.loading.show();t({url:d,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(c.hitch(this,function(c){var g=!1;c.hasOwnProperty("routeLayers")&&(null!==c.routeLayers&&0<c.routeLayers.length)&&(a.add(this.itemSelectDiv,"esriCTHidden"),this.serviceFlag?(a.remove(this.serviceUrlDiv,
"esriCTHidden"),a.add(this.agolRouteLayerList,"esriCTHidden"),a.add(this.btnNext,"esriCTHidden"),a.add(this.btnBack,"esriCTHidden"),this.serviceFlag=!1):(a.add(this.serviceUrlDiv,"esriCTHidden"),a.remove(this.agolRouteLayerList,"esriCTHidden"),a.add(this.btnNext,"esriCTHidden"),a.remove(this.btnBack,"esriCTHidden"),this.agolFlag=!1),this._createTree(d,c.routeLayers,b),g=!0);g||(this._resetRouteSearch(b,this.nls.networkServiceChooser.invalidRouteServiceURL),this.loading.hide())}),c.hitch(this,function(){this._resetRouteSearch(b,
this.nls.networkServiceChooser.invalidRouteServiceURL);this.loading.hide()}))},_getValidRouteURL:function(){var b,a,c,g;this.routeChooser&&this.agolFlag?(b=this.routeChooser.getSelectedItem(),a=b.url):a=this.serviceURL.value;c=a.lastIndexOf("/");g=a.substr(0,c+1);b=this._urlValidator(g);this.routeName="";b&&(this.routeName=a.substring(c+1,a.length+1),a=g);return a},_createTree:function(b,d,f){var g=this,h,e;k.empty(f);h={data:[{id:1,name:"Route Layers",url:b,root:!0}],getChildren:function(a){return this.query({parent:a.id})}};
if(this.routeName)for(e=0;e<d.length;e++)this.routeName===d[e]&&h.data.push({id:d[e],name:d[e],url:b+d[e],parent:1});else for(e=0;e<d.length;e++)h.data.push({id:d[e],name:d[e],url:b+"/"+d[e],parent:1});b=new u(h);b=new v({store:b,query:{root:!0}});b=new r({model:b,onClick:function(b){1===b.id?a.add(g.okButton,"jimu-state-disabled"):(a.remove(g.okButton,"jimu-state-disabled"),g.selectRouteURL=b.url)},getIconStyle:c.hitch(this,function(a){var b;if(!a||"root"===a.id)return null;b={width:"20px",height:"20px",
backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundImage:""};b.backgroundImage="url("+this.folderUrl+"images/"+(1===a.id?"group-layer.png":"route-layer.png")+")";return b})});b.placeAt(f).startup();this.routeName&&1<h.data.length&&(b.set("paths",[["1",this.routeName]]),a.remove(this.okButton,"jimu-state-disabled"),this.selectRouteURL=h.data[1].url);this.loading.hide()},_resetRouteSearch:function(a,c){this._errorMessage(c);k.empty(a);this.loading.hide();this.serviceFlag=this.agolFlag=
!1},_onBtnBackClicked:function(){a.remove(this.itemSelectDiv,"esriCTHidden");a.add(this.serviceUrlDiv,"esriCTHidden");a.add(this.agolRouteLayerList,"esriCTHidden");a.remove(this.btnNext,"esriCTHidden");a.add(this.btnBack,"esriCTHidden")},_errorMessage:function(a){(new y({message:a})).message=a},_urlValidator:function(a){var c;c="^"+x.url({allowNamed:!0,allLocal:!1});c=RegExp(c,"g").test(a);a=/\/Route\/NAServer/gi.test(a);return c&&a}})});