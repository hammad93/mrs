// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/dijit/Scalebar":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/query ../kernel ../lang ../domUtils ../units ../SpatialReference ../WKIDUnitConversion ../geometry/Point ../geometry/ScreenPoint ../geometry/Polyline ../geometry/geodesicUtils ../geometry/webMercatorUtils ../geometry/screenUtils ../geometry/normalizeUtils dojo/i18n!../nls/jsapi".split(" "),function(r,
l,h,b,n,m,v,s,w,g,x,y,z,p,A,t,B,C,D,E,u,F,G,H){return r(null,{declaredClass:"esri.dijit.Scalebar",map:null,mapUnit:null,scalebarUnit:null,unitsDictionary:[],domNode:null,screenPt1:null,screenPt2:null,localStrings:H.widgets.scalebar,constructor:function(a,d){this.metricScalebar=m.create("div",{innerHTML:"\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLine esriScalebarMetricLine'\x3e\x3c/div\x3e"});
this.englishScalebar=m.create("div",{innerHTML:"\x3cdiv class\x3d'esriScalebarLine esriScalebarEnglishLine'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e"});this.domNode=m.create("div");a=a||{};if(a.map){if(a.scalebarUnit){if("english"!==a.scalebarUnit&&"metric"!==a.scalebarUnit&&"dual"!==a.scalebarUnit){console.error("scalebar unit only accepts english or metric or dual");return}this.scalebarUnit=
a.scalebarUnit}else this.scalebarUnit="english";if(a.scalebarStyle){if("ruler"!==a.scalebarStyle&&"line"!==a.scalebarStyle){console.error("scalebar style must be ruler or line");return}this.scalebarStyle=a.scalebarStyle}else this.scalebarStyle="ruler";this.background=a.background;switch(this.scalebarUnit){case "english":"ruler"===this.scalebarStyle&&(this.englishScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.englishScalebar);break;case "metric":"ruler"===this.scalebarStyle&&(this.metricScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.metricScalebar);break;case "dual":this.domNode.appendChild(this.metricScalebar),this.domNode.appendChild(this.englishScalebar)}this.map=a.map;d?d.appendChild(this.domNode):(this.map.container.appendChild(this.domNode),a.attachTo?n.add(this.domNode,"scalebar_"+a.attachTo):n.add(this.domNode,"scalebar_bottom-left"));n.add(this.domNode,"esriScalebar");if(this.map.loaded)this._getDistance(this.map.extent),this._checkBingMaps();else var c=b.connect(this.map,"onLoad",this,
function(){b.disconnect(c);c=null;this._getDistance(this.map.extent);this._checkBingMaps()});this._mapOnPan=b.connect(this.map,"onPan",this,this._getDistance);this._mapOnExtentChange=b.connect(this.map,"onExtentChange",this,this._getDistance);h.forEach(this.map.layerIds,function(a,c){"esri.virtualearth.VETiledLayer"===this.map.getLayer(a).declaredClass&&b.connect(this.map.getLayer(a),"onVisibilityChange",l.hitch(this,function(a){this._checkBingMaps()}))},this);this._mapOnLayerAdd=b.connect(this.map,
"onLayerAdd",l.hitch(this,function(a){"esri.virtualearth.VETiledLayer"===a.declaredClass&&b.connect(a,"onVisibilityChange",l.hitch(this,function(a){this._checkBingMaps()}));this._checkBingMaps()}));this._mapOnLayerRemove=b.connect(this.map,"onLayerRemove",l.hitch(this,this._checkBingMaps))}else console.error("scalebar: unable to find the 'map' property in parameters")},hide:function(){this._hidden=!0;z.hide(this.domNode)},show:function(){this._hidden=!1;z.show(this.domNode)},destroy:function(){b.disconnect(this._mapOnPan);
b.disconnect(this._mapOnExtentChange);b.disconnect(this._mapOnLayerAdd);b.disconnect(this._mapOnLayerRemove);this.hide();this.map=null;m.destroy(this.domNode)},_checkBingMaps:function(){n.contains(this.domNode,"scalebar_bottom-left")&&(s.set(this.domNode,"left","25px"),h.forEach(this.map.layerIds,function(a,d){if("esri.virtualearth.VETiledLayer"===this.map.getLayer(a).declaredClass&&this.map.getLayer(a).visible){var c="95px";this.map._mapParams.nav&&(c="115px");s.set(this.domNode,"left",c)}},this))},
_getDistance:function(a){var d=v.position(this.domNode,!0).y-this.map.position.y,d=d>this.map.height?this.map.height:d,d=0>d?0:d,c=new C(0,d),d=new C(this.map.width,d),q,f;this.mapUnit="esriDecimalDegrees";var e=F.toMapPoint(a,this.map.width,this.map.height,c),k=F.toMapPoint(a,this.map.width,this.map.height,d),c=new B(a.xmin,(a.ymin+a.ymax)/2,this.map.spatialReference),d=new B(a.xmax,(a.ymin+a.ymax)/2,this.map.spatialReference);if(3857===this.map.spatialReference.wkid||102100===this.map.spatialReference.wkid||
102113===this.map.spatialReference.wkid||this.map.spatialReference.wkt&&-1!=this.map.spatialReference.wkt.indexOf("WGS_1984_Web_Mercator"))e=u.webMercatorToGeographic(e,!0),k=u.webMercatorToGeographic(k,!0),c=u.webMercatorToGeographic(c,!0),d=u.webMercatorToGeographic(d,!0);else if(y.isDefined(t[this.map.spatialReference.wkid])||this.map.spatialReference.wkt&&0===this.map.spatialReference.wkt.indexOf("PROJCS")){this.mapUnit="linearUnit";a=Math.abs(a.xmax-a.xmin);if(y.isDefined(t[this.map.spatialReference.wkid]))f=
t.values[t[this.map.spatialReference.wkid]];else{f=this.map.spatialReference.wkt;q=f.lastIndexOf(",")+1;var b=f.lastIndexOf("]]");f=parseFloat(f.substring(q,b))}a*=f;f=a/1609;q=a/1E3}"esriDecimalDegrees"===this.mapUnit&&(a=new D(new A({wkid:4326})),a.addPath([e,k]),e=G._straightLineDensify(a,10),a=E.geodesicLengths([e],p.KILOMETERS)[0],e=new D(new A({wkid:4326})),e.addPath([c,d]),c=G._straightLineDensify(e,10),E.geodesicLengths([c],p.KILOMETERS),f=a/1.609,q=a);"english"===this.scalebarUnit?this._getScaleBarLength(f,
"mi"):"metric"===this.scalebarUnit?this._getScaleBarLength(q,"km"):"dual"===this.scalebarUnit&&(this._getScaleBarLength(f,"mi"),this._getScaleBarLength(q,"km"))},_getScaleBarLength:function(a,d){var c=50*a/this.map.width,b=0,f=d;0.1>c&&("mi"===d?(c*=5280,f="ft"):"km"===d&&(c*=1E3,f="m"));for(;1<=c;)c/=10,b++;var e,k;0.5<c?(e=1,k=0.5):0.3<c?(e=0.5,k=0.3):0.2<c?(e=0.3,k=0.2):0.15<c?(e=0.2,k=0.15):0.1<=c&&(e=0.15,k=0.1);e=e/c>=c/k?k:e;c=50*(e/c);b=Math.pow(10,b)*e;this._drawScaleBar(c,b,f)},_drawScaleBar:function(a,
d,c){var b=2*Math.round(a),f,e;"mi"===c||"ft"===c?(this.englishScalebar.style.width=b+"px",a=g(".esriScalebarFirstNumber",this.englishScalebar),f=g(".esriScalebarSecondNumber",this.englishScalebar),e=g(".esriScalebarMetricLineBackground",this.englishScalebar)):(this.metricScalebar.style.width=b+"px",a=g(".esriScalebarFirstNumber",this.metricScalebar),f=g(".esriScalebarSecondNumber",this.metricScalebar),e=g(".esriScalebarMetricLineBackground",this.metricScalebar));h.forEach(e,function(a,c){a.style.width=
b-2+"px"},this);h.forEach(a,function(a,c){a.innerHTML=d},this);h.forEach(f,function(a,b){a.innerHTML="esriUnknown"!==this.mapUnit?2*d+this.localStrings[c]:2*d+"Unknown Unit"},this)}})})},"widgets/Scalebar/_build-generate_module":function(){define(["dojo/text!./css/style.css","dojo/i18n!./nls/strings","dojo/text!./config.json"],function(){})},"url:widgets/Scalebar/css/style.css":".jimu-rtl .jimu-widget-scalebar .scaleLabelDiv .esriScalebarLabel:first-child{right: -3% !important; left: auto !important;};.jimu-rtl .jimu-widget-scalebar .scaleLabelDiv .esriScalebarFirstNumber{right: 45% !important; left: auto;}.jimu-rtl .jimu-widget-scalebar .scaleLabelDiv .esriScalebarSecondNumber{right: 95%; left: auto;}.jimu-widget-scalebar .ruler-style {position: relative; top: -5px !important; left: 0 !important;}",
"url:widgets/Scalebar/config.json":'{\r\n  "scalebar": {\r\n    "scalebarStyle": "",\r\n    "scalebarUnit": ""\r\n  }\r\n}',"*now":function(r){r(['dojo/i18n!*preload*widgets/Scalebar/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/Deferred jimu/BaseWidget jimu/utils jimu/portalUtils jimu/dijit/Message esri/dijit/Scalebar dojo/dom-style dojo/query dojo/NodeList-dom".split(" "),function(r,l,h,b,n,m,v,s,w,g,x){return r([n],{baseClass:"jimu-widget-scalebar",name:"Scalebar",scalebar:null,startup:function(){this.inherited(arguments);var b=this.config.scalebar;b.map=this.map;this.position&&(void 0!==this.position.top&&void 0!==this.position.left?b.attachTo="top-left":
void 0!==this.position.top&&void 0!==this.position.right?b.attachTo="top-right":void 0!==this.position.bottom&&void 0!==this.position.left?b.attachTo="bottom-left":void 0!==this.position.bottom&&void 0!==this.position.right&&(b.attachTo="bottom-right"));this._processConfig(b).then(l.hitch(this,function(b){b.scalebarStyle||(b.scalebarStyle="line");this.scalebar=new w(b);this.scalebar.show();this.domNode.appendChild(this.scalebar.domNode);this._hackForhighlight();"ruler"===b.scalebarStyle?h.addClass(this.scalebar.domNode,
"ruler-style"):h.removeClass(this.scalebar.domNode,"ruler-style");var p={left:"auto",right:"auto",top:"auto",bottom:"auto",width:"auto"};l.mixin(p,this.position);g.set(this.domNode,m.getPositionStyle(p));setTimeout(l.hitch(this,function(){g.set(this.domNode,m.getPositionStyle(p))}),1E3)}),l.hitch(this,function(b){new s({message:b.message||b})}))},_processConfig:function(g){var h=new b;g.scalebarUnit?h.resolve(g):v.getUnits(this.appConfig.portalUrl).then(l.hitch(this,function(b){g.scalebarUnit="english"===
b?"english":"metric";h.resolve(g)}));return h.promise},_hackForhighlight:function(){x(".esriScalebar",this.domNode).removeClass("esriScalebar")},onClose:function(){this.scalebar.destroy()}})});