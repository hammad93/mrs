// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/JewelryBoxTheme/widgets/HeaderController/PopupTileNodes":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/dom-construct dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack jimu/utils".split(" "),function(s,k,t,a,n,l,m,r,f,b,d){return s([r,f],{baseClass:"jimu-header-more-popup",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points jimu-corner-bottom"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
margin:4,postCreate:function(){this.nodes=[];this.pages=[];this.createCloseBtn()},startup:function(){this.viewStack=new b({views:[],viewType:"dom"},this.pagesNode);this.viewStack.startup();this.resize()},resize:function(){var h=this._calculateGridParam(),f;if(null!==h){a.setStyle(this.domNode,d.getPositionStyle(h.position));this.nodeWidth=h.cellSize-this.margin;if(!this.oldGridParam||this.oldGridParam.rows!==h.rows||this.oldGridParam.cols!==h.cols)this.clearPages(),this.createPages(h);this.nodes.forEach(k.hitch(this,
function(a,f){this.setItemNodePosition(a,f,h)}));this.oldGridParam=h;f=m("div.close",this.domNode)[0];a.setStyle(f,{width:0.25*this.nodeWidth+"px",height:0.25*this.nodeWidth+"px"})}else this.oldGridParam=null,a.setStyle(this.domNode,d.getPositionStyle({left:0,top:0,width:0,height:0,zIndex:111})),this.nodeWidth=0},setItemNodePosition:function(h,f,e){var q,d,b=48,k=16;q=0===f%e.cols?0:this.margin/2;d=f%(e.rows*e.cols)<e.cols?0:this.margin/2;f={};"number"===typeof this.nodeWidth&&(f.width=this.nodeWidth+
"px",f.height=this.nodeWidth+"px");"number"===typeof q&&(window.isRTL?f.marginRight=q+"px":f.marginLeft=q+"px");"number"===typeof d&&(f.marginTop=d+"px");if(q=m("img",h)[0])e.iconScaled&&(b*=this.nodeWidth/120),a.setStyle(q,{width:b+"px",height:b+"px"});if(b=m("div.node-label",h)[0])e.showLabel?(e.iconScaled&&(k*=this.nodeWidth/120),a.setStyle(b,{"font-size":k+"px",display:"block"})):a.setStyle(b,{"font-size":k+"px",display:"none"});a.setStyle(h,f)},clearPages:function(){t.forEach(this.pages,function(a){this.viewStack.removeView(a.pageNode)},
this);l.empty(this.pointsNode);this.pages=[];this.nodes=[]},createPages:function(a){var f,e,q,b;f=Math.ceil(this.items.length/(a.rows*a.cols));for(e=0;e<f;e++)q=l.create("div",{"class":"page"}),this.createPageItems(e,q,a),this.viewStack.addView(q),1<f&&(b=l.create("div",{"class":"point"},this.pointsNode),this.own(n(b,"click",k.hitch(this,this._onPageNodeClick,e)))),this.pages.push({pageNode:q,pointNode:b});0<this.viewStack.views.length&&this._selectPage(0)},_onPageNodeClick:function(a){this._selectPage(a)},
_selectPage:function(f){1<this.pages.length&&(m(".point",this.domNode).removeClass("point-selected"),a.addClass(this.pages[f].pointNode,"point-selected"));this.viewStack.switchView(this.pages[f].pageNode)},createPageItems:function(a,f,e){var b,d;b=this.items.length;d=e.rows*e.cols;e=a*d;a=(a+1)*d;d=a-b;for(a=Math.min(a,b);e<a;e++)this.createItemNode(e,f);for(e=b;e<b+d;e++)this.createEmptyItemNode(f)},createItemNode:function(a,f){var e,b;b=this.items[a];e=l.create("div",{"class":"icon-node jimu-float-leading",
title:b.label,settingId:b.id},f);l.create("img",{src:b.icon},e);l.create("div",{"class":"node-label",title:b.label,innerHTML:d.stripHTML(b.label)},e);e.config=b;this.own(n(e,"click",k.hitch(this,function(){this.onNodeClicked(e)})));this.nodes.push(e)},createEmptyItemNode:function(a){a=l.create("div",{"class":"icon-node jimu-float-leading"},a);this.nodes.push(a);return a},createCloseBtn:function(){var a;a=l.create("div",{"class":"close"},this.domNode);l.create("div",{"class":"close-inner"},a);n(a,
"click",k.hitch(this,function(){this.hide()}));return a},hide:function(){a.setStyle(this.domNode,"display","none")},show:function(){a.setStyle(this.domNode,"display","block")},onNodeClicked:function(a){this.hide()},_calculateGridParam:function(){var f,b,e,d,k=!1,l=!0;f=a.getContentBox(jimuConfig.mapId);b=Math.min(f.w,f.h)-40;if(360<=b)d=120;else{d=Math.floor(b/3);if(10>d)return null;k=!0;80>d&&(l=!1)}b=Math.floor((f.h-40)/d);e=Math.floor((f.w-40)/d);b=4<b?4:b;b=3>b?3:b;e=3>b?3:4<e?4:e;return{rows:b,
cols:e,cellSize:d,iconScaled:k,showLabel:l,position:{top:(f.h-d*b)/2,bottom:(f.h-d*b)/2,left:(f.w-d*e)/2,right:(f.w-d*e)/2,width:d*e-this.margin*(e-1)/2,height:d*b-this.margin*(b-1)/2,zIndex:111}}}})})},"dojo/NodeList-manipulate":function(){define("./query ./_base/lang ./_base/array ./dom-construct ./dom-attr ./NodeList-dom".split(" "),function(s,k,t,a,n){function l(a){for(;a.childNodes[0]&&1==a.childNodes[0].nodeType;)a=a.childNodes[0];return a}function m(f,b){"string"==typeof f?(f=a.toDom(f,b&&
b.ownerDocument),11==f.nodeType&&(f=f.childNodes[0])):1==f.nodeType&&f.parentNode&&(f=f.cloneNode(!1));return f}var r=s.NodeList;k.extend(r,{_placeMultiple:function(f,b){for(var d="string"==typeof f||f.nodeType?s(f):f,h=[],k=0;k<d.length;k++)for(var e=d[k],l=this.length,m=l-1,p;p=this[m];m--)0<k&&(p=this._cloneNode(p),h.unshift(p)),m==l-1?a.place(p,e,b):e.parentNode.insertBefore(p,e),e=p;h.length&&(h.unshift(0),h.unshift(this.length-1),Array.prototype.splice.apply(this,h));return this},innerHTML:function(a){return arguments.length?
this.addContent(a,"only"):this[0].innerHTML},text:function(a){if(arguments.length){for(var b=0,d;d=this[b];b++)1==d.nodeType&&n.set(d,"textContent",a);return this}for(var h="",b=0;d=this[b];b++)h+=n.get(d,"textContent");return h},val:function(a){if(arguments.length){for(var b=k.isArray(a),d=0,h;h=this[d];d++){var l=h.nodeName.toUpperCase(),e=h.type,m=b?a[d]:a;if("SELECT"==l){l=h.options;for(e=0;e<l.length;e++){var n=l[e];n.selected=h.multiple?-1!=t.indexOf(a,n.value):n.value==m}}else"checkbox"==e||
"radio"==e?h.checked=h.value==m:h.value=m}return this}if((h=this[0])&&1==h.nodeType){a=h.value||"";if("SELECT"==h.nodeName.toUpperCase()&&h.multiple){a=[];l=h.options;for(e=0;e<l.length;e++)n=l[e],n.selected&&a.push(n.value);a.length||(a=null)}return a}},append:function(a){return this.addContent(a,"last")},appendTo:function(a){return this._placeMultiple(a,"last")},prepend:function(a){return this.addContent(a,"first")},prependTo:function(a){return this._placeMultiple(a,"first")},after:function(a){return this.addContent(a,
"after")},insertAfter:function(a){return this._placeMultiple(a,"after")},before:function(a){return this.addContent(a,"before")},insertBefore:function(a){return this._placeMultiple(a,"before")},remove:r.prototype.orphan,wrap:function(a){if(this[0]){a=m(a,this[0]);for(var b=0,d;d=this[b];b++){var h=this._cloneNode(a);d.parentNode&&d.parentNode.replaceChild(h,d);l(h).appendChild(d)}}return this},wrapAll:function(a){if(this[0]){a=m(a,this[0]);this[0].parentNode.replaceChild(a,this[0]);a=l(a);for(var b=
0,d;d=this[b];b++)a.appendChild(d)}return this},wrapInner:function(a){if(this[0]){a=m(a,this[0]);for(var b=0;b<this.length;b++){var d=this._cloneNode(a);this._wrap(k._toArray(this[b].childNodes),null,this._NodeListCtor).wrapAll(d)}}return this},replaceWith:function(a){a=this._normalize(a,this[0]);for(var b=0,d;d=this[b];b++)this._place(a,d,"before",0<b),d.parentNode.removeChild(d);return this},replaceAll:function(a){a=s(a);for(var b=this._normalize(this,this[0]),d=0,h;h=a[d];d++)this._place(b,h,"before",
0<d),h.parentNode.removeChild(h);return this},clone:function(){for(var a=[],b=0;b<this.length;b++)a.push(this._cloneNode(this[b]));return this._wrap(a,this,this._NodeListCtor)}});r.prototype.html||(r.prototype.html=r.prototype.innerHTML);return r})},"themes/JewelryBoxTheme/widgets/HeaderController/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings","dojo/text!./config.json"],function(){})},"url:themes/JewelryBoxTheme/widgets/HeaderController/Widget.html":'\x3cdiv\x3e\r\n  \x3c!-- solve the bug of style delay loading --\x3e\r\n  \x3cdiv class\x3d"header-section jimu-float-leading" data-dojo-attach-point\x3d"headerNode"\x3e\r\n    \x3cimg class\x3d"logo jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"logoNode" data-dojo-attach-event\x3d"onload:_onLogoLoad"\x3e\r\n    \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n      \x3cdiv class\x3d"jimu-title jimu-float-leading" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"jimu-subtitle jimu-float-leading jimu-leading-margin5" data-dojo-attach-point\x3d"subtitleNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"links jimu-float-leading jimu-leading-margin25" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cdiv class\x3d"dynamic-section jimu-float-leading" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"signin-section jimu-float-leading" data-dojo-attach-point\x3d"signInSectionNode"\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSigninClick"\r\n        data-dojo-attach-point\x3d"signinLinkNode"\x3e${nls.signin}\x3c/a\x3e\r\n        \x3ca href\x3d"" target\x3d"_blank" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onUserNameClick" data-dojo-attach-point\x3d"userNameLinkNode"\x3e\x3c/a\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSignoutClick" data-dojo-attach-point\x3d"signoutLinkNode"\x3e${nls.signout}\x3c/a\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"container-section jimu-float-leading" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/JewelryBoxTheme/widgets/HeaderController/css/style.css":".jimu-widget-header-controller{box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .header-section{height: 100%; overflow: hidden;}.jimu-widget-header-controller .container-section{height: 100%; min-width: 80px;}.jimu-widget-header-controller .logo{cursor: pointer;}.jimu-widget-header-controller .hide-logo{display: none;}.jimu-widget-header-controller .titles{height: 100%; overflow: hidden;}.jimu-widget-header-controller .jimu-title{text-align: center; height: 100%;}.jimu-widget-header-controller .jimu-subtitle{text-align: center; height: 100%;}.jimu-widget-header-controller .links{height: 100%; overflow: hidden;}.jimu-widget-header-controller .dynamic-section,.jimu-widget-header-controller .signin-section{height: 100%;}.jimu-widget-header-controller .links .jimu-link{height: 100%;}.jimu-widget-header-controller .signin-section .jimu-link{color: #d9dde0;}.jimu-widget-header-controller .icon-node{cursor: pointer; opacity: 0.6; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header-controller .icon-node img{height: 24px; width: 24px;}.jimu-widget-header-controller .icon-node:first-child{border: none;}.jimu-widget-header-controller .icon-node:hover{opacity: 1;}.jimu-widget-header-controller .icon-node.jimu-state-selected{background-color: #697a8c; opacity: 1; border: none; border-top: 2px solid #8491a1;}.jimu-widget-header-controller .drop-triangle{position: absolute; width: 0px; height: 0px; bottom: 1px; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid white;}.jimu-widget-header-controller .jimu-drop-menu{box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .jimu-drop-menu .menu-item{overflow: hidden; border-top: 1px solid rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item:hover{background-color: rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item img{width: 24px; height: 24px; cursor: pointer; margin: 8px;}.jimu-widget-header-controller .jimu-drop-menu .menu-item .label{cursor: pointer; margin-top: 12px; font-size: 14px; color: white; min-width: 50px; text-align: center; white-space: nowrap; max-width: 300px; text-overflow: ellipsis; overflow: hidden; padding-right: 8px;}.jimu-rtl .jimu-widget-header-controller .jimu-drop-menu .menu-item .label{padding-left: 8px;}.popup-links .popup-title{}.popup-links .logo{*/ height: 30px;}.popup-links .title{color:#fff; text-align: center; font-size: 16px; */ width: 71.42857142857143%; overflow: hidden; white-space: nowrap; height: 100%;}.popup-links .line{width: 100%; height: 4px; border-bottom: 1px solid #393c40;}.popup-links .link-section{width: 100%; height: 66px;}.popup-links a{color: #fff; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; overflow: hidden; display: inline-block;}.popup-links .link-section.signin a{color: #d9dde0;}.jimu-header-more-popup{position: absolute; border-radius: 2px; z-index: 111; background-color: #516070;}.jimu-header-more-popup .pages{position: relative; overflow: hidden; padding: 2px;}.jimu-header-more-popup .points{position: absolute; overflow: hidden; bottom: -15px; left: 0px; right: 0px; text-align: center; background-color: #bababa;}.jimu-header-more-popup .points-inner{display: inline-block; overflow: hidden;}.jimu-header-more-popup .point{float: left; width: 8px; height: 8px; margin-left: 5px; border-radius: 4px; background-color: #f2f6f9; cursor: pointer;}.jimu-header-more-popup .point-selected{background-color: #485566;}.jimu-header-more-popup .page{position: relative; overflow: hidden;}.jimu-header-more-popup .close{position: absolute; top: -04.46428571428571%; right: -04.46428571428571%; border-radius: 50%; background-color: #697a8c; cursor: pointer;}.jimu-rtl .jimu-header-more-popup .close{left: -04.46428571428571%; right: auto;}.jimu-header-more-popup .close-inner{width: 80%; height: 80%; margin-left: 10%; margin-top: 10%; border-radius: 50%; background: #1d2123 url(images/close.png) no-repeat center center;}.jimu-header-more-popup .icon-node{background-color: #697a8c; cursor: pointer;}.jimu-header-more-popup .icon-node.jimu-state-selected{background-color: red;}.jimu-header-more-popup img{width: 48px; height: 48px; margin: auto; margin-top: 25%; display: block;}.jimu-header-more-popup .node-label{width: 100%; text-align: center; font-size: 16px; margin-top: 5px; color: white; overflow: hidden; white-space: pre-line; text-overflow: ellipsis; display: inline-block;}@media screen and (max-width:600px){.jimu-header-more-popup .node-label{font-size: 14px;}}.jimu-more-icon-cover{z-index: 110; position: absolute; left: 0; top: 0; width: 100%; height: 100%;}.esriPopup .titlePane {background-color: rgba(72, 85, 102, 0.9);}",
"url:themes/JewelryBoxTheme/widgets/HeaderController/config.json":'{\r\n  "groupSetting": [\r\n    {\r\n      "label": "AttributeTable",\r\n      "type": "dropDown"\r\n    }\r\n  ]\r\n}',"*now":function(s){s(['dojo/i18n!*preload*themes/JewelryBoxTheme/widgets/HeaderController/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/aspect dojo/query dojo/on dojo/Deferred dojo/mouse dojo/dom-construct dojo/dom-geometry jimu/BaseWidget jimu/PoolControllerMixin jimu/tokenUtils jimu/portalUtils jimu/portalUrlUtils jimu/utils jimu/dijit/Message ./PopupTileNodes dojo/NodeList-manipulate".split(" "),function(s,k,t,a,n,l,m,r,f,b,d,h,v,e,q,u,p,w,x){return s([h,v],{baseClass:"jimu-widget-header-controller jimu-main-background",maxIconCount:-1,createMoreIcon:!1,
switchableElements:{},height:40,openedId:"",moveTopOnActive:!1,postCreate:function(){this.inherited(arguments);this._processGroupSetting();this.switchableElements.title=this.titleNode;this.switchableElements.links=this.linksNode;this.switchableElements.subtitle=this.subtitleNode;this.position&&this.position.height&&(this.height=this.position.height);a.setStyle(this.signInSectionNode,"display","none");this.appConfig&&this.appConfig.logo?(this.logoNode.src=this.appConfig.logo,a.removeClass(this.logoNode,
"hide-logo")):(this.logoNode.src="",a.addClass(this.logoNode,"hide-logo"));this.switchableElements.title.innerHTML=p.sanitizeHTML(this.appConfig.title?this.appConfig.title:"");this.switchableElements.subtitle.innerHTML=p.sanitizeHTML(this.appConfig.subtitle?this.appConfig.subtitle:"");this._createDynamicLinks(this.appConfig.links);this._setElementsSize();this.own(m(this.domNode,f.enter,k.hitch(this,function(){var a="",c=u.getServerByUrl(this.appConfig&&this.appConfig.portalUrl||"");u.isArcGIScom(c)&&
(c="ArcGIS.com");c&&(a=this.nls.signInTo+" "+c);this.signinLinkNode.title=a})))},startup:function(){this.inherited(arguments);this.resize()},onAction:function(a,c){if("highLight"===a&&c){var b=l('div[settingid\x3d"'+c.widgetId+'"]',this.domNode)[0];this._highLight(b)}"removeHighLight"===a&&this._removeHighLight()},onSignIn:function(g){this.inherited(arguments);a.setStyle(this.signinLinkNode,"display","none");a.setStyle(this.userNameLinkNode,"display","");a.setStyle(this.signoutLinkNode,"display",
"");this.userNameLinkNode.innerHTML=g.userId;a.setAttr(this.userNameLinkNode,"href",this.appConfig.portalUrl+"home/user.html");this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display","none"),a.setStyle(this.popupUserNameNode,"display",""),a.setStyle(this.popupSignoutNode,"display",""),l("a",this.popupUserNameNode).html(g.userId).attr("href",this.appConfig.portalUrl+"home/user.html"));this.resize()},onSignOut:function(){this.inherited(arguments);this._onSignOut(this.nls.signin);q.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(k.hitch(this,
function(a){this._onSignOut(this.nls.signInTo+" "+a.name)}),k.hitch(this,function(a){console.error(a)}))},_onSignOut:function(g){a.setStyle(this.signinLinkNode,"display","");a.setAttr(this.signinLinkNode,"innerHTML",g);a.setStyle(this.userNameLinkNode,"display","none");a.setStyle(this.signoutLinkNode,"display","none");this.userNameLinkNode.innerHTML="";this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display",""),a.setAttr(this.popupSigninNode,"innerHTML",g),a.setStyle(this.popupUserNameNode,
"display","none"),a.setStyle(this.popupSignoutNode,"display","none"),l("a",this.popupUserNameNode).html(""));this.resize()},resize:function(){var g=a.getStyle(this.headerNode,"float"),c=a.getStyle(this.logoNode,"float"),b=a.getStyle(this.titlesNode,"float"),d=a.getStyle(this.linksNode,"float");g&&"none"!==g&&c&&"none"!==c&&b&&"none"!==b&&d&&"none"!==d?this._resize():setTimeout(k.hitch(this,this.resize),200)},_resize:function(){var g=a.getContentBox(this.domNode);this._showSwitchableElements(["title",
"links","subtitle"]);this._createIconNodes(g);this.morePane&&this.morePane.resize();this.popupLinkNode&&a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+"px"})},destroy:function(){this.timeoutHandle&&(clearTimeout(this.timeoutHandle),this.timeoutHandle=null);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&(a.destroy(this.moreIconPaneCoverNode),this.moreIconPaneCoverNode=null);this.popupLinkNode&&this.popupLinksVisible&&this._hidePopupLink();a.destroy(this.popupLinkNode);
this.inherited(arguments)},onAppConfigChanged:function(a,c,b){switch(c){case "attributeChange":this._onAttributeChange(a,b);break;default:return}this.appConfig=a;this.resize()},getOpenedIds:function(){this.inherited(arguments);return""===this.openedId?[]:[this.openedId]},setOpenedIds:function(a){if(0!==a.length){var c=this.getConfigById(a[0]);c&&(this.openedId=a[0],c.widgets&&"openAll"===c.openType?this._showIconContent(c):c.widgets||this._showIconContent(c))}},_onLogoLoad:function(){this.resize()},
_highLight:function(a){this.hlDiv&&this._removeHighLight();if(a){var c=d.getMarginBox(a);this.hlDiv=b.create("div",{style:{position:"absolute",left:c.l+"px",top:c.t+"px",width:c.w+"px",height:c.h+"px"},"class":"icon-highlight"},a,"before")}},_removeHighLight:function(){this.hlDiv&&(b.destroy(this.hlDiv),this.hlDiv=null)},_onAttributeChange:function(g,c){"title"in c&&c.title!==this.appConfig.title&&(this.titleNode.innerHTML=p.sanitizeHTML(c.title));"subtitle"in c&&c.subtitle!==this.appConfig.subtitle&&
(this.subtitleNode.innerHTML=p.sanitizeHTML(c.subtitle));"logo"in c&&c.logo!==this.appConfig.logo&&(c.logo?(a.setAttr(this.logoNode,"src",c.logo),a.removeClass(this.logoNode,"hide-logo")):(a.removeAttr(this.logoNode,"src"),a.addClass(this.logoNode,"hide-logo")));"links"in c&&this._createDynamicLinks(c.links)},_setElementsSize:function(){a.setStyle(this.logoNode,{height:"30px",marginTop:(this.height-30)/2+"px"});a.setStyle(this.titleNode,{lineHeight:this.height+"px"});a.setStyle(this.subtitleNode,
{lineHeight:this.height+"px"});l(".jimu-link",this.domNode).style({lineHeight:this.height+"px"})},_processGroupSetting:function(){t.forEach(this.appConfig.widgetPool.groups,function(a){var c;a:{if(this.config.groupSetting)for(c=0;c<this.config.groupSetting.length;c++)if(this.config.groupSetting[c].label===a.label){c=this.config.groupSetting[c].type;break a}c="openAll"}a.openType=c},this)},_createDynamicLinks:function(g){if(window.isRTL){var c=[];t.forEach(g,function(a){c.unshift(a)});g=c}a.empty(this.dynamicLinksNode);
t.forEach(g,function(c){a.create("a",{href:c.url,target:"_blank",innerHTML:p.sanitizeHTML(c.label),"class":"jimu-link jimu-align-leading jimu-leading-margin1",style:{lineHeight:this.height+"px"}},this.dynamicLinksNode)},this)},_showSwitchableElements:function(g){var c=this.switchableElements,b;for(b in c)c.hasOwnProperty(b)&&(-1<g.indexOf(b)?(a.setStyle(c[b],"display","block"),c[b].visible=!0):(a.setStyle(c[b],"display","none"),c[b].visible=!1));this.logoClickHandle&&this.logoClickHandle.remove();
0>g.indexOf("links")?this.logoClickHandle=m(this.logoNode,"click",k.hitch(this,this._onLogoClick)):(this.popupLinksVisible&&this._hidePopupLink(),a.setStyle(this.logoNode,{cursor:"default"}))},_switchSignin:function(){var a=e.getPortalCredential(this.appConfig.portalUrl);if(a)this.onSignIn(a);else this.onSignOut()},_onLogoClick:function(){this.popupLinkNode&&a.destroy(this.popupLinkNode);this.popupLinkNode=this._createPopupLinkNode();this.popupLinksVisible?this._hidePopupLink():this._showPopupLink()},
_hidePopupLink:function(){a.setStyle(this.popupLinkNode,"display","none");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:0}):a.setStyle(jimuConfig.layoutId,{left:0});this.popupLinksVisible=!1},_showPopupLink:function(){a.setStyle(this.popupLinkNode,"display","");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:a.getContentBox(this.popupLinkNode).w+"px"}):a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+"px"});this.popupLinksVisible=!0},_createPopupLinkNode:function(){var g,
c;a.getContentBox(jimuConfig.mainPageId);g=a.create("div",{"class":"popup-links jimu-main-background",style:{position:"absolute",zIndex:100,top:0,bottom:0}},jimuConfig.mainPageId);window.isRTL?a.setStyle(g,{right:0,left:"50px"}):a.setStyle(g,{left:0,right:"50px"});c=a.create("div",{"class":"popup-title",style:{height:this.height+"px",width:"100%"}},g);var b=a.create("img",{"class":"logo jimu-float-leading jimu-leading-margin1",src:this.appConfig.logo?this.appConfig.logo:this.folderUrl+"images/app-logo.png",
style:{width:"30px",height:"30px",marginTop:(this.height-30)/2+"px"}},c),d=a.create("div",{"class":"title jimu-float-leading jimu-leading-margin1 jimu-ellipsis",innerHTML:p.sanitizeHTML(this.appConfig.title),style:{lineHeight:this.height+"px"}},c),e="auto";try{e=a.getMarginBox(c).w-a.getMarginBox(b).w-a.getMarginExtents(d).w+"px"}catch(f){console.error(f),e="auto"}a.setStyle(d,"width",e);t.forEach(this.appConfig.links,function(a){this._createLinkNode(g,a,!1)},this);this._createLinkNode(g,{label:"",
url:"#"},!1);return g},_createLinkNode:function(g,c,b){g=a.place('\x3cdiv class\x3d"jimu-link"\x3e\x3c/div\x3e',g);a.place('\x3cdiv class\x3d"line"\x3e\x3c/div\x3e',g);b=a.place('\x3cdiv class\x3d"'+(b?"link-section signin":"link-section")+'"\x3e\x3c/div\x3e',g);a.create("a",{href:c.url,"class":"jimu-ellipsis",target:"_blank",innerHTML:p.sanitizeHTML(c.label),title:c.label,style:{lineHeight:"66px"}},b);return g},_onSigninClick:function(){e.signInPortal(this.appConfig.portalUrl,this.appConfig.appId)},
_onSignoutClick:function(){this.appConfig.mode?new w({message:this.nls.cantSignOutTip}):e.signOutAll()},_onUserNameClick:function(){},_getHeaderSectionWidth:function(){return a.getMarginBox(this.headerNode).w},_getContainerWidth:function(a){var c=this._getHeaderSectionWidth();return a.w-c-this._getEmptyWidth(a)},_calcContainerAndEmptyWidth:function(a){var c=this._getContainerWidth(a),b=this._getEmptyWidth(a);c<2*this.iconWidth&&(this.switchableElements.subtitle.visible?(this._showSwitchableElements(["title",
"links"]),c=this._getContainerWidth(a),c<2*this.iconWidth&&(this._showSwitchableElements(["title"]),c=this._getContainerWidth(a),c<2*this.iconWidth&&(this._showSwitchableElements([]),c=this._getContainerWidth(a),c<2*this.iconWidth&&(b-=2*this.iconWidth-c,c=2*this.iconWidth,this._getContainerWidth(a))))):(this._showSwitchableElements([]),c=this._getContainerWidth(a),c<2*this.iconWidth&&(b-=2*this.iconWidth-c,c=2*this.iconWidth)));return{containerWidth:c,emptyWidth:b}},_getEmptyWidth:function(a){return 0.1*
a.w},_createIconNodes:function(g){l(".icon-node",this.containerNode).remove();this._closeDropMenu();var c,b=this.getAllConfigs();this.iconWidth=g.h;g=this._calcContainerAndEmptyWidth(g);c={width:g.containerWidth+"px"};c[window.isRTL?"marginRight":"marginLeft"]=g.emptyWidth-5+"px";a.setStyle(this.containerNode,c);this.maxIconCount=Math.floor(g.containerWidth/this.iconWidth);this.maxIconCount>=b.length?(this.headerIconCount=b.length,this.createMoreIcon=!1):(this.headerIconCount=this.maxIconCount-1,
this.createMoreIcon=!0);this.createMoreIcon&&this._createIconNode({label:this.nls.more});var d;for(g=this.headerIconCount-1;0<=g;g--){c=b[g];var e=this._createIconNode(c);c.openAtStart&&(d=e)}d&&!this.openAtStartWidget&&(this._onIconClick(d),this.openAtStartWidget=d.config.name);this.openedId&&(this.getConfigById(this.openedId)&&!1===this.getConfigById(this.openedId).inPanel)&&(b=this._getIconNodeById(this.openedId),d=this.widgetManager.getWidgetById(this.openedId),b&&d?this._setOffPanelWidgetPosition(b,
d):(this.widgetManager.closeWidget(this.openedId),this.openedId=""))},_createIconNode:function(g){var c,b;b=g.label===this.nls.more?this.folderUrl+"images/more_icon.png":g.icon;c=a.create("div",{"class":"icon-node jimu-float-trailing",title:g.label,settingId:g.id,style:{width:this.height+"px",height:this.height+"px"}},this.containerNode);a.create("img",{src:b,style:{marginTop:(this.height-24)/2+"px"}},c);g.label===this.nls.more?m(c,"click",k.hitch(this,this._showMorePane,g)):m(c,"click",k.hitch(this,
function(){this._onIconClick(c)}));c.config=g;c.config.widgets&&(1<c.config.widgets.length&&"dropDown"===c.config.openType)&&this._createDropTriangle(c);return c},_createDropTriangle:function(b){var c=a.getMarginBox(b);a.create("div",{"class":"drop-triangle",style:{left:c.l+c.w/2-4+"px"}},b)},_onIconClick:function(a){!a.config.widgets||1===a.config.widgets.length||"openAll"===a.config.openType?this.openedId&&this.openedId===a.config.id?this._switchNodeToClose(this.openedId):this.openedId?this._switchNodeToClose(this.openedId).then(k.hitch(this,
function(){this._closeDropMenu();this._switchNodeToOpen(a.config.id)})):this._switchNodeToOpen(a.config.id):this.dropMenuNode?this._closeDropMenu():this._openDropMenu(a)},_closeDropMenu:function(){this.dropMenuNode&&(a.destroy(this.dropMenuNode),this.dropMenuNode=null)},_openDropMenu:function(b){this.dropMenuNode=a.create("div",{"class":"jimu-drop-menu jimu-main-background",title:b.config.label,style:{position:"absolute",zIndex:"101"}});a.place(this.dropMenuNode,this.containerNode);t.forEach(b.config.widgets,
function(a){this._createDropMenuItem(a)},this);this._setDropMenuPosition(b);this.morePane&&this.morePane.hide()},_createDropMenuItem:function(b){var c=a.create("div",{"class":"menu-item",title:b.label,style:{height:this.height+"px"}},this.dropMenuNode);a.create("img",{"class":"jimu-float-leading",src:b.icon},c);a.create("div",{"class":"label jimu-float-leading",innerHTML:p.sanitizeHTML(b.label)},c);this.own(m(c,"click",k.hitch(this,function(){this._closeDropMenu();this.openedId?this._switchNodeToClose(this.openedId).then(k.hitch(this,
function(){this._showIconContent(c.config)})):this._showIconContent(c.config)})));c.config=b;return c},_setDropMenuPosition:function(b){var c={},c=a.getMarginBox(this.dropMenuNode),c=this._getDropdownPosition(b,c);c.zIndex=101;a.setStyle(this.dropMenuNode,p.getPositionStyle(c))},_getDropdownPosition:function(b,c){var d={},e=a.getMarginBox(b),f=a.getMarginBox(this.domNode);d.top=this.height+1;window.isRTL?d.right=0>e.l+e.w-c.w?0:e.l+e.w-c.w:e.l+c.w>f.w?d.right=0:d.left=e.l;return d},_switchNodeToOpen:function(b){b=
this._getIconNodeById(b);l(".icon-node",this.domNode).removeClass("jimu-state-selected");a.addClass(b,"jimu-state-selected");this._showIconContent(b.config)},_switchNodeToClose:function(a){l(".icon-node",this.domNode).removeClass("jimu-state-selected");var c=this.appConfig.getConfigElementById(a);if(c)return!1===c.inPanel?(this.widgetManager.closeWidget(a),this.openedId="",a=new r,a.resolve(),a):this.panelManager.closePanel(a+"_panel");a=new r;a.resolve();return a},_getIconNodeById:function(a){a=
l('.icon-node[settingId\x3d"'+a+'"]',this.domNode);if(0!==a.length)return a[0]},_unSelectIcon:function(a){l('.icon-node[settingId\x3d"'+a+'"]',this.domNode).removeClass("jimu-state-selected");this.openedId=""},_showIconContent:function(b){!1===b.inPanel?this.widgetManager.loadWidget(b).then(k.hitch(this,function(c){this.openedId=b.id;var d=this._getIconNodeById(b.id);a.setStyle(c.domNode,"zIndex",101);this._setOffPanelWidgetPosition(d,c);this.widgetManager.openWidget(c);this.own(n.after(c,"onClose",
k.hitch(this,function(){this._unSelectIcon(b.id)})))})):this.panelManager.showPanel(b).then(k.hitch(this,function(a){this.openedId=b.id;this.own(n.after(a,"onClose",k.hitch(this,function(){this._unSelectIcon(b.id)})))}))},_setOffPanelWidgetPosition:function(a,b){var d=this._getDropdownPosition(a,this.widgetManager.getWidgetMarginBox(b));b.setPosition(d,this.containerNode)},_showMorePane:function(){var b,c,d=[],e=this.getAllConfigs();for(b=this.headerIconCount;b<e.length;b++)c=e[b],d.push(c);this.morePane&&
this.morePane.destroy();this.moreIconPaneCoverNode&&a.destroy(this.moreIconPaneCoverNode);this._closeDropMenu();this.morePane=new x({openedId:this.openedId,items:d});this._createCoverNode();a.place(this.morePane.domNode,jimuConfig.mapId);this.morePane.startup();n.after(this.morePane,"onNodeClicked",k.hitch(this,function(b){this._moveConfigToHeader(b.config);this._createIconNodes(a.getContentBox(this.domNode));this._onIconClick(this._getIconNodeById(b.config.id))}),!0);n.after(this.morePane,"hide",
k.hitch(this,function(){a.destroy(this.moreIconPaneCoverNode)}),!0)},_moveConfigToHeader:function(a){var b=this.getAllConfigs(),d=a.index;a.index=b[this.headerIconCount-1].index;b[this.headerIconCount-1].index=d},_createCoverNode:function(){this.moreIconPaneCoverNode=a.create("div",{"class":"jimu-more-icon-cover"},jimuConfig.layoutId)}})});