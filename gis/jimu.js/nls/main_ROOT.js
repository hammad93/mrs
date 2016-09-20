// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"jimu/nls/main":{common:{ok:"OK",cancel:"Cancel",next:"Next",back:"Back"},errorCode:"Code",errorMessage:"Message",errorDetail:"Detail",widgetPlaceholderTooltip:"To set it up, go to Widgets and click corresponding placeholder",symbolChooser:{preview:"Preview",basic:"Basic",arrows:"Arrows",business:"Business",cartographic:"Cartographic",nationalParkService:"National Park Service",outdoorRecreation:"Outdoor Recreation",peoplePlaces:"People Places",safetyHealth:"Safety Health",shapes:"Shapes",
transportation:"Transportation",symbolSize:"Symbol Size",color:"Color",alpha:"Alpha",outlineColor:"Outline Color",outlineWidth:"Outline Width",style:"Style",width:"Width",text:"Text",fontColor:"Font Color",fontSize:"Font Size",transparency:"Transparency",solid:"Solid",dash:"Dash",dot:"Dot",dashDot:"Dash Dot",dashDotDot:"Dash Dot Dot"},transparency:{opaque:"Opaque",transparent:"Transparent"},rendererChooser:{domain:"Domain",use:"Use",singleSymbol:"A Single Symbol",uniqueSymbol:"Unique Symbols",color:"Color",
size:"Size",toShow:"To Show",colors:"Colors",classes:"Classes",symbolSize:"Symbol Size",addValue:"Add Value",setDefaultSymbol:"Set Default Symbol",defaultSymbol:"Default Symbol",selectedSymbol:"Selected Symbol",value:"Value",label:"Label",range:"Range"},drawBox:{point:"Point",line:"Line",polyline:"Polyline",freehandPolyline:"Freehand Polyline",triangle:"Triangle",extent:"Extent",circle:"Circle",ellipse:"Ellipse",polygon:"Polygon",freehandPolygon:"Freehand Polygon",text:"Text",clear:"Clear"},popupConfig:{title:"Title",
add:"Add",fields:"Fields",noField:"No Field",visibility:"Visible",name:"Name",alias:"Alias",actions:"Actions"},includeButton:{include:"Include"},loadingShelter:{loading:"Loading"},basicServiceBrowser:{noServicesFound:"No service found.",unableConnectTo:"Unable to connect to",invalidUrlTip:"The URL you have entered is invalid or inaccessible."},serviceBrowser:{noGpFound:"No geoprocessing service found.",unableConnectTo:"Unable to connect to"},layerServiceBrowser:{noServicesFound:"No map service or feature service found",
unableConnectTo:"Unable to connect to"},basicServiceChooser:{validate:"Validate",example:"Example",set:"Set"},urlInput:{invalidUrl:"Invalid URL."},urlComboBox:{invalidUrl:"Invalid URL."},filterBuilder:{addAnotherExpression:"Add a filter expression",addSet:"Add an expression set",matchMsg:"Get features in the layer that match ${any_or_all} of the following expressions",matchMsgSet:"${any_or_all} of the following expressions in this set are true",all:"All",any:"Any",value:"Value",field:"Field",unique:"Unique",
none:"None",and:"and",valueTooltip:"Enter value",fieldTooltip:"Pick from existing field",uniqueValueTooltip:"Pick from unique values in selected field",stringOperatorIs:"is",stringOperatorIsNot:"is not",stringOperatorStartsWith:"starts with",stringOperatorEndsWith:"ends with",stringOperatorContains:"contains",stringOperatorDoesNotContain:"does not contain",stringOperatorIsBlank:"is blank",stringOperatorIsNotBlank:"is not blank",dateOperatorIsOn:"is on",dateOperatorIsNotOn:"is not on",dateOperatorIsBefore:"is before",
dateOperatorIsAfter:"is after",dateOperatorDays:"days",dateOperatorWeeks:"weeks",dateOperatorMonths:"months",dateOperatorInTheLast:"in the last",dateOperatorNotInTheLast:"not in the last",dateOperatorIsBetween:"is between",dateOperatorIsNotBetween:"is not between",dateOperatorIsBlank:"is blank",dateOperatorIsNotBlank:"is not blank",numberOperatorIs:"is",numberOperatorIsNot:"is not",numberOperatorIsAtLeast:"is at least",numberOperatorIsLessThan:"is less than",numberOperatorIsAtMost:"is at most",numberOperatorIsGreaterThan:"is greater than",
numberOperatorIsBetween:"is between",numberOperatorIsNotBetween:"is not between",numberOperatorIsBlank:"is blank",numberOperatorIsNotBlank:"is not blank",string:"String",number:"Number",date:"Date",askForValues:"Ask for values",prompt:"Prompt",hint:"Hint",error:{invalidParams:"Invalid parameters.",invalidUrl:"Invalid URL.",noFilterFields:"Layer has no fields that can be used for filter.",invalidSQL:"Invalid SQL expression.",cantParseSQL:"Can't parse the SQL expression."},caseSensitive:"Case Sensitive",
notSupportCaseSensitiveTip:"Hosted services do not support case-sensitive query."},featureLayerSource:{layer:"Layer",browse:"Browse",selectFromMap:"Select from Map",selectFromPortal:"Add from Portal for ArcGIS",addServiceUrl:"Add Service URL",inputLayerUrl:"Input Layer URL",selectLayer:"Select a feature layer from current map.",chooseItem:"Choose a feature layer item.",setServiceUrl:"Enter the URL of feature service or map service.",selectFromOnline:"Add from ArcGIS Online",chooseLayer:"Choose a feature layer."},
queryableLayerSource:{layer:"Layer",browse:"Browse",selectFromMap:"Select from Map",selectFromPortal:"Add from Portal for ArcGIS",addServiceUrl:"Add Service URL",inputLayerUrl:"Input Layer URL",selectLayer:"Select a layer from current map.",chooseItem:"Choose an item.",setServiceUrl:"Enter the URL of the service.",selectFromOnline:"Add from ArcGIS Online",chooseLayer:"Choose a layer."},gpSource:{selectFromPortal:"Add from Portal for ArcGIS",addServiceUrl:"Add Service URL",selectFromOnline:"Add from ArcGIS Online",
setServiceUrl:"Enter the URL of geoprocessing service.",chooseItem:"Choose a geoprocessing service item.",chooseTask:"Choose a geoprocessing task."},itemSelector:{map:"Map",selectWebMap:"Choose Web Map",addMapFromOnlineOrPortal:"Find and add a web map in the application from ArcGIS Online public resources or your private content in ArcGIS Online or Portal.",searchMapName:"Search by map name...",searchNone:"We couldn't find what you were looking for. Please try again.",groups:"Groups",noneGroups:"No groups",
signInTip:"Your login session has expired, please refresh your browser to sign in to your portal again.",signIn:"Sign in",publicMap:"Public",myOrganization:"My Organization",myGroup:"My Groups",myContent:"My Content",count:"Count",fromPortal:"from Portal",fromOnline:"from ArcGIS.com",noneThumbnail:"Thumbnail Not Available",owner:"owner",signInTo:"Sign in to",lastModified:"Last Modified",moreDetails:"More Details"},featureLayerChooserFromPortal:{notSupportQuery:"The service doesn't support query."},
basicLayerChooserFromMap:{noLayersTip:"There is no appropriate layer available in the map."},layerInfosMenu:{titleBasemap:"Basemaps",titleLayers:"Operational Layers",labelLayer:"Layer Name",itemZoomTo:"Zoom to",itemTransparency:"Transparency",itemTransparent:"Transparent",itemOpaque:"Opaque",itemMoveUp:"Move up",itemMoveDown:"Move down",itemDesc:"Description",itemDownload:"Download",itemToAttributeTable:"Open Attribute Table"},imageChooser:{unsupportReaderAPI:"TODO: The browser does not suport file reader API",
readError:"Failed to read the file.",unknowError:"unable to complete operations",invalidType:"Invalid file type.",exceed:"File size cannot exceed 1024 KB",enableFlash:"TODO: please enable flash.",cropWaining:"Please choose a photo that's at least ${width} x ${height} pixels.",toolTip:"For the best result, the image should be ${width} pixels wide by ${height} pixels high. Other sizes will be adjusted to fit. Acceptable image formats are: PNG, GIF and JPEG."},simpleTable:{moveUp:"Move up",moveDown:"Move down",
deleteRow:"Delete",edit:"Edit"},urlParams:{invalidToken:"Invalid token",validateTokenError:"Invalid token or Network error"},exportTo:{exportTo:"Export",toCSV:"Export to CSV file",toFeatureCollection:"Export to Feature Collection",toGeoJSON:"Export to GeoJSON"},appState:{title:"App State",restoreMap:"Click to restore the map extent and layers visibility where you left off."},popupManager:{showRelatedRecords:"Show Related Records",edit:"Edit",getDirections:"Get Directions",zoomTo:"Zoom to"},_localized:{ar:1,
cs:1,da:1,de:1,el:1,es:1,et:1,fi:1,fr:1,he:1,it:1,ja:1,ko:1,lt:1,lv:1,nb:1,nl:1,pl:1,"pt-br":1,"pt-pt":1,ro:1,ru:1,sv:1,th:1,tr:1,vi:1,"zh-cn":1,"zh-hk":1,"zh-tw":1}},"dojox/widget/nls/ColorPicker":{redLabel:"r",greenLabel:"g",blueLabel:"b",hueLabel:"h",saturationLabel:"s",valueLabel:"v",degLabel:"\u00b0",hexLabel:"hex",huePickerTitle:"Hue Selector",saturationPickerTitle:"Saturation Selector",_localized:{ar:1,az:1,bg:1,ca:1,cs:1,da:1,de:1,el:1,es:1,fi:1,fr:1,he:1,hr:1,hu:1,id:1,it:1,ja:1,kk:1,ko:1,
nb:1,nl:1,pl:1,pt:1,"pt-pt":1,ro:1,ru:1,sk:1,sl:1,sv:1,th:1,tr:1,uk:1,zh:1,"zh-hk":1,"zh-tw":1}},"dojo/nls/colors":{aliceblue:"alice blue",antiquewhite:"antique white",aqua:"aqua",aquamarine:"aquamarine",azure:"azure",beige:"beige",bisque:"bisque",black:"black",blanchedalmond:"blanched almond",blue:"blue",blueviolet:"blue-violet",brown:"brown",burlywood:"burlywood",cadetblue:"cadet blue",chartreuse:"chartreuse",chocolate:"chocolate",coral:"coral",cornflowerblue:"cornflower blue",cornsilk:"cornsilk",
crimson:"crimson",cyan:"cyan",darkblue:"dark blue",darkcyan:"dark cyan",darkgoldenrod:"dark goldenrod",darkgray:"dark gray",darkgreen:"dark green",darkgrey:"dark gray",darkkhaki:"dark khaki",darkmagenta:"dark magenta",darkolivegreen:"dark olive green",darkorange:"dark orange",darkorchid:"dark orchid",darkred:"dark red",darksalmon:"dark salmon",darkseagreen:"dark sea green",darkslateblue:"dark slate blue",darkslategray:"dark slate gray",darkslategrey:"dark slate gray",darkturquoise:"dark turquoise",
darkviolet:"dark violet",deeppink:"deep pink",deepskyblue:"deep sky blue",dimgray:"dim gray",dimgrey:"dim gray",dodgerblue:"dodger blue",firebrick:"fire brick",floralwhite:"floral white",forestgreen:"forest green",fuchsia:"fuchsia",gainsboro:"gainsboro",ghostwhite:"ghost white",gold:"gold",goldenrod:"goldenrod",gray:"gray",green:"green",greenyellow:"green-yellow",grey:"gray",honeydew:"honeydew",hotpink:"hot pink",indianred:"indian red",indigo:"indigo",ivory:"ivory",khaki:"khaki",lavender:"lavender",
lavenderblush:"lavender blush",lawngreen:"lawn green",lemonchiffon:"lemon chiffon",lightblue:"light blue",lightcoral:"light coral",lightcyan:"light cyan",lightgoldenrodyellow:"light goldenrod yellow",lightgray:"light gray",lightgreen:"light green",lightgrey:"light gray",lightpink:"light pink",lightsalmon:"light salmon",lightseagreen:"light sea green",lightskyblue:"light sky blue",lightslategray:"light slate gray",lightslategrey:"light slate gray",lightsteelblue:"light steel blue",lightyellow:"light yellow",
lime:"lime",limegreen:"lime green",linen:"linen",magenta:"magenta",maroon:"maroon",mediumaquamarine:"medium aquamarine",mediumblue:"medium blue",mediumorchid:"medium orchid",mediumpurple:"medium purple",mediumseagreen:"medium sea green",mediumslateblue:"medium slate blue",mediumspringgreen:"medium spring green",mediumturquoise:"medium turquoise",mediumvioletred:"medium violet-red",midnightblue:"midnight blue",mintcream:"mint cream",mistyrose:"misty rose",moccasin:"moccasin",navajowhite:"navajo white",
navy:"navy",oldlace:"old lace",olive:"olive",olivedrab:"olive drab",orange:"orange",orangered:"orange red",orchid:"orchid",palegoldenrod:"pale goldenrod",palegreen:"pale green",paleturquoise:"pale turquoise",palevioletred:"pale violet-red",papayawhip:"papaya whip",peachpuff:"peach puff",peru:"peru",pink:"pink",plum:"plum",powderblue:"powder blue",purple:"purple",red:"red",rosybrown:"rosy brown",royalblue:"royal blue",saddlebrown:"saddle brown",salmon:"salmon",sandybrown:"sandy brown",seagreen:"sea green",
seashell:"seashell",sienna:"sienna",silver:"silver",skyblue:"sky blue",slateblue:"slate blue",slategray:"slate gray",slategrey:"slate gray",snow:"snow",springgreen:"spring green",steelblue:"steel blue",tan:"tan",teal:"teal",thistle:"thistle",tomato:"tomato",transparent:"transparent",turquoise:"turquoise",violet:"violet",wheat:"wheat",white:"white",whitesmoke:"white smoke",yellow:"yellow",yellowgreen:"yellow green",_localized:{ar:1,az:1,bg:1,ca:1,cs:1,da:1,de:1,el:1,es:1,et:1,fi:1,fr:1,he:1,hr:1,hu:1,
id:1,it:1,ja:1,kk:1,ko:1,lt:1,lv:1,nb:1,nl:1,pl:1,pt:1,"pt-pt":1,ro:1,ru:1,sk:1,sl:1,sv:1,th:1,tr:1,uk:1,vi:1,zh:1,"zh-hk":1,"zh-tw":1}},"dijit/form/nls/ComboBox":{previousMessage:"Previous choices",nextMessage:"More choices",_localized:{ar:1,az:1,bg:1,ca:1,cs:1,da:1,de:1,el:1,es:1,et:1,fi:1,fr:1,he:1,hr:1,hu:1,id:1,it:1,ja:1,kk:1,ko:1,lt:1,lv:1,nb:1,nl:1,pl:1,pt:1,"pt-pt":1,ro:1,ru:1,sk:1,sl:1,sv:1,th:1,tr:1,uk:1,vi:1,zh:1,"zh-hk":1,"zh-tw":1}}});