// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/RelatedTableCharts/setting/ChartSetting.html":'\x3cdiv class\x3d"esriCTFullHeight"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"tabDiv" class\x3d"esriCTFullHeight"\x3e\r\n        \x3c!-- Settings tab --\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"settingsTabNode" class\x3d"esriCTFullHeight"\x3e\r\n            \x3cdiv class\x3d"esriCTChartSettingsNode"\x3e\r\n                \x3cdiv class\x3d"esriCTmainContainer"\x3e\r\n                    \x3c!-- Section Title --\x3e\r\n                    \x3cdiv\x3e\r\n                        \x3cdiv class\x3d"esriCTChartTitleDiv"\x3e\r\n                            \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.sectionTitle}"\x3e\r\n                                ${nls.sectionTitle}\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                \x3cdiv class\x3d"esriCTControlWidth" data-dojo-attach-point\x3d"sectionTitleTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n                                    required\x3d"true" trim\x3d"true" data-dojo-attach-event\x3d"change:_onSectionTitleChanged"\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTHint " title\x3d"${nls.sectionTitleHintText}"\x3e\r\n                                    ${nls.sectionTitleHintText}\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- Chart Title --\x3e\r\n                    \x3cdiv\x3e\r\n                        \x3cdiv class\x3d"esriCTChartTitleDiv"\x3e\r\n                            \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.chartTitle}"\x3e\r\n                                ${nls.chartTitle}\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                \x3cdiv class\x3d"esriCTControlWidth" data-dojo-attach-point\x3d"chartTitleTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTHint " title\x3d"${nls.chartTitleHintText}"\x3e\r\n                                    ${nls.chartTitleHintText}\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldSelectorDiv" data-dojo-attach-point\x3d"titleFieldSelectorDiv"\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- Chart Description --\x3e\r\n                    \x3cdiv\x3e\r\n                        \x3cdiv class\x3d"esriCTChartDescriptionDiv "\x3e\r\n                            \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.chartDescription}"\x3e\r\n                                ${nls.chartDescription}\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                \x3ctextarea class\x3d"esriCTTextAreaFont esriCTControlWidth esriCTTextAreaHeight" data-dojo-type\x3d"dijit/form/Textarea"\r\n                                    data-dojo-attach-point\x3d"chartDescriptionTextBoxArea"\x3e\x3c/textarea\x3e\r\n                                \x3cdiv class\x3d"esriCTHint " title\x3d"${nls.chartDescriptionHintText}"\x3e\r\n                                    ${nls.chartDescriptionHintText}\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldSelectorDiv" data-dojo-attach-point\x3d"descriptionFieldSelectorDiv"\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- Select chart type--\x3e\r\n                    \x3cdiv class\x3d"esriCTChartChartTypeDiv esriCTFieldRow"\x3e\r\n                        \x3cdiv class\x3d"esriCTChartSettingLabel" data-dojo-attach-point\x3d"chartTypeLabelNode"\r\n                            title\x3d"${nls.chartType}"\x3e\r\n                            ${nls.chartType}\r\n                        \x3c/div\x3e\r\n                        \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                            \x3cdiv class\x3d"esriCTMarginRight"\x3e\r\n                                \x3cinput class\x3d"esriCTCursorPointer" checked\x3d"checked" id\x3d"rdoBarChart" value\x3d"rdoBarChart" type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton"\r\n                                    name\x3d"chart" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"rdoBarChart" /\x3e\r\n                                \x3clabel class\x3d"esriCTChartTypeEllipsis esriCTCursorPointer" for\x3d"rdoBarChart" data-dojo-attach-point\x3d"barLabel"\r\n                                    title\x3d"${nls.barChart}"\x3e\r\n                                    ${nls.barChart}\x3c/label\x3e\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTMarginRight"\x3e\r\n                                \x3cinput class\x3d"esriCTCursorPointer" id\x3d"rdoPieChart" value\x3d"rdoPieChart" type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton"\r\n                                    name\x3d"chart" data-dojo-attach-point\x3d"rdoPieChart"  data-dojo-attach-event\x3d"change:_onChartTypeChanged"/\x3e\r\n                                \x3clabel class\x3d"esriCTChartTypeEllipsis esriCTCursorPointer" for\x3d"rdoPieChart" data-dojo-attach-point\x3d"pieLabel"\r\n                                    title\x3d"${nls.pieChart}"\x3e\r\n                                    ${nls.pieChart}\x3c/label\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- Data Series Field--\x3e\r\n                    \x3cdiv class\x3d"esriCTControlWidth esriCTLeftAlign esriCTFieldRow"\x3e\r\n                        \x3cdiv class\x3d"esriCTChartDescriptionDiv "\x3e\r\n                            \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.dataSeriesField}"\x3e\r\n                                ${nls.dataSeriesField}\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                \x3cselect style\x3d"width: 232px;" data-dojo-attach-point\x3d"dataSeriesFieldDropdown" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                                \x3c/select\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- Label Field --\x3e\r\n                    \x3cdiv class\x3d"esriCTControlWidth esriCTLeftAlign esriCTFieldRow esriCTChartChartTypeDiv"\x3e\r\n                        \x3cdiv class\x3d"esriCTChartDescriptionDiv "\x3e\r\n                            \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.labelField}"\x3e\r\n                                ${nls.labelField}\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                \x3cselect style\x3d"width: 232px;" data-dojo-attach-point\x3d"labelSeriesFieldDropdown" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                                \x3c/select\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- Chart Color --\x3e\r\n                    \x3cdiv\x3e\r\n                        \x3cdiv\x3e\r\n                            \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d" ${nls.chartColor}"\x3e\r\n                                ${nls.chartColor}\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                \x3cdiv class\x3d"esriCTChartColorMargin esriCTSingleColorContainer"\x3e\r\n                                    \x3cdiv class\x3d"jimu-trailing-margin2 esriCTLeftAlign esriCTChartColorWidth"\x3e\r\n                                        \x3cinput class\x3d"esriCTCursorPointer" checked\x3d"checked" id\x3d"rdoSingleColor" value\x3d"rdoSingleColor" type\x3d"radio"\r\n                                            data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"ChartColor" data-dojo-attach-point\x3d"rdoSingleColor" /\x3e\r\n                                        \x3clabel class\x3d"esriCTChartColorEllipsis esriCTCursorPointer" for\x3d"rdoSingleColor" title\x3d"${nls.singleColor}"\x3e\r\n                                            ${nls.singleColor}\x3c/label\x3e\r\n                                    \x3c/div\x3e\r\n                                    \x3cdiv class\x3d"esriCTColorPicker" data-dojo-attach-point\x3d"colorPicker" data-dojo-type\x3d"jimu/dijit/ColorPicker"\x3e\r\n                                    \x3c/div\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTChartColorMargin esriCTChartColorHeight"\x3e\r\n                                    \x3cdiv class\x3d"jimu-trailing-margin2 esriCTLeftAlign esriCTChartColorWidth esriCTColorByThemeContainer"\x3e\r\n                                        \x3cinput id\x3d"rdoColorByTheme" class\x3d"esriCTCursorPointer" value\x3d"rdoColorByTheme" type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton"\r\n                                            name\x3d"ChartColor" data-dojo-attach-point\x3d"rdoColorByTheme" /\x3e\r\n                                        \x3clabel class\x3d"esriCTChartColorEllipsis esriCTCursorPointer" for\x3d"rdoColorByTheme" title\x3d"${nls.colorByTheme}"\x3e\r\n                                            ${nls.colorByTheme}\x3c/label\x3e\r\n                                    \x3c/div\x3e\r\n                                    \x3cdiv class\x3d"esriCTThemeSelectorDiv" data-dojo-attach-point\x3d"themeSelectorDiv"\x3e\r\n                                    \x3c/div\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTChartColorMargin esriCTHidden" data-dojo-attach-point\x3d"colorByFieldContainer"\x3e\r\n                                    \x3cdiv class\x3d"jimu-trailing-margin2 esriCTLeftAlign esriCTChartColorWidth"\x3e\r\n                                        \x3cinput id\x3d"rdoColorByFieldValue" class\x3d"esriCTCursorPointer" value\x3d"rdoColorByFieldValue" type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton"\r\n                                            name\x3d"ChartColor" data-dojo-attach-point\x3d"rdoColorByFieldValue" /\x3e\r\n                                        \x3clabel class\x3d"esriCTChartColorEllipsis esriCTCursorPointer" for\x3d"rdoColorByFieldValue" title\x3d"${nls.colorByFieldValue}"\x3e\r\n                                            ${nls.colorByFieldValue}\x3c/label\x3e\r\n                                    \x3c/div\x3e\r\n                                    \x3cselect style\x3d"width: 232px;" data-dojo-attach-point\x3d"ColorByFieldValueDropdown"\r\n                                        data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                                    \x3c/select\x3e\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                        \x3cdiv class\x3d"esriCTColorByFieldContainer esriCTHidden" data-dojo-attach-point\x3d"colorByFieldTableContainer"\x3e\r\n                            \x3cdiv class\x3d"esriCTChartTypeDiv"\x3e\r\n                                \x3cdiv data-dojo-attach-point\x3d"colorByFieldTablePanel"\x3e\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- X-axis label --\x3e\r\n                    \x3cdiv data-dojo-attach-point\x3d"xAxisArea"\x3e\r\n                        \x3cdiv class\x3d"esriCTChartTitleDiv"\x3e\r\n                            \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.xAxisTitle}"\x3e\r\n                                ${nls.xAxisTitle}\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                \x3cdiv class\x3d"esriCTControlWidth" data-dojo-attach-point\x3d"xAxisTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTHint " title\x3d"${nls.xAxisHintText}"\x3e\r\n                                    ${nls.xAxisHintText}\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldSelectorDiv" data-dojo-attach-point\x3d"xAxisFieldSelectorDiv"\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- Y-axis label --\x3e\r\n                    \x3cdiv data-dojo-attach-point\x3d"yAxisArea"\x3e\r\n                        \x3cdiv class\x3d"esriCTChartTitleDiv"\x3e\r\n                            \x3cdiv class\x3d"esriCTChartSettingLabel" title\x3d"${nls.yAxisTitle}"\x3e\r\n                                ${nls.yAxisTitle}\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldInput"\x3e\r\n                                \x3cdiv class\x3d"esriCTControlWidth" data-dojo-attach-point\x3d"yAxisTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\x3e\r\n                                \x3c/div\x3e\r\n                                \x3cdiv class\x3d"esriCTHint " title\x3d"${nls.yAxisHintText}"\x3e\r\n                                    ${nls.yAxisHintText}\r\n                                \x3c/div\x3e\r\n                            \x3c/div\x3e\r\n                            \x3cdiv class\x3d"esriCTFieldSelectorDiv" data-dojo-attach-point\x3d"yAxisFieldSelectorDiv"\x3e\r\n                            \x3c/div\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Layout tab --\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"layoutTabNode"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"layoutDiv" class\x3d"esriCTLayoutContainer"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/dom-attr dojo/dom-construct dojo/_base/declare dojo/_base/lang dojo/on dojo/Evented dojo/text!./ChartSetting.html jimu/dijit/TabContainer3 ./ChartThemeSelector ./FieldSelector jimu/dijit/ColorPicker dojo/dom-class dojo/query dojo/_base/Color dojo/_base/array esri/tasks/query esri/tasks/QueryTask dojo/dom-style jimu/dijit/Message ../ChartLayout dijit/popup dojox/charting/themes/GreySkies jimu/dijit/SimpleTable dijit/form/Textarea".split(" "),
function(r,s,t,h,l,u,d,k,v,w,x,y,z,A,f,q,m,n,B,C,p,D,E,F,G,H){return u([r,s,t,v],{baseClass:"jimu-widget-RelatedTableCharts-setting",templateString:w,_widgets:[],_stringFieldType:"esriFieldTypeString",_oidFieldType:"esriFieldTypeOID",_numberFieldTypes:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],tr:null,layerDetails:null,config:{},_chartColorType:{singleColor:"SingleColor",byThemeColor:"ColorByTheme",byFieldValue:"ColorByFieldValue"},selectedNode:null,
fieldColorPicker:null,defaultColor:"#000000",constructor:function(){this._widgets=[]},startup:function(){this.inherited(arguments)},postCreate:function(){this._createColorByFieldTable();this._initSelf()},destroy:function(){this.tr=null;delete this.tr;n.forEach(this._widgets,function(a){a.destroy()});this._widgets=[];this.inherited(arguments)},getConfig:function(a){var b={sectionTitle:"",chartTitle:"",description:"",chartType:"",dataSeriesField:"",labelField:"",chartColor:{},labelXAxis:"",labelYAxis:""};
if(a&&""===this.sectionTitleTextBox.get("value"))return this._errorMessage(this.nls.errMsgSectionTitle),!1;b.sectionTitle=this.sectionTitleTextBox.get("value");b.chartTitle=this.chartTitleTextBox.get("value");b.description=this.chartDescriptionTextBoxArea.get("value");b.chartType=this._getChartType();b.dataSeriesField=this.dataSeriesFieldDropdown.get("value");b.labelField=this.labelSeriesFieldDropdown.get("value");if(a&&this.rdoColorByFieldValue.checked&&"esriCTEmptyOption"===this.ColorByFieldValueDropdown.value)return this._errorMessage(this.nls.errMsgFieldByValue),
!1;b.chartColor=d.clone(this._getChartColorConfig());b.labelXAxis=this.xAxisTextBox.get("value");b.labelYAxis=this.yAxisTextBox.get("value");return b},setConfig:function(a){a?(a.sectionTitle&&""!==a.sectionTitle?this.sectionTitleTextBox.set("value",a.sectionTitle):this.sectionTitleTextBox.set("value",this.layerDetails.polygonLayerInfo.title),a.chartTitle&&this.chartTitleTextBox.set("value",a.chartTitle),a.description&&this.chartDescriptionTextBoxArea.set("value",a.description),a.chartType?this._setChartType(a.chartType):
this._setChartType("BarChart"),a.dataSeriesField&&this.dataSeriesFieldDropdown.set("value",a.dataSeriesField),a.labelField&&this.labelSeriesFieldDropdown.set("value",a.labelField),a.chartColor&&this._setChartColorType(a.chartColor),a.labelXAxis&&this.xAxisTextBox.set("value",a.labelXAxis),a.labelYAxis&&this.yAxisTextBox.set("value",a.labelYAxis)):this.sectionTitleTextBox.set("value",this.layerDetails.polygonLayerInfo.title)},_createColorByFieldTable:function(){this.colorByFieldTable=new H({fields:[{name:this.nls.fieldColorColor,
title:this.nls.fieldColorColor,"class":"label",type:"empty",width:"50px"},{name:this.nls.fieldColorLabel,title:this.nls.fieldColorLabel,"class":"label",type:"empty"}]},this.colorByFieldTablePanel);this.colorByFieldTable.startup()},_errorMessage:function(a){(new D({message:a})).message=a},_getChartType:function(){var a;this.rdoBarChart.get("checked")?a="BarChart":this.rdoPieChart.get("checked")&&(a="PieChart");return a},_setChartType:function(a){"BarChart"===a?(this.rdoBarChart.set("checked",!0),this.rdoPieChart.set("checked",
!1)):"PieChart"===a&&(this.rdoPieChart.set("checked",!0),this.rdoBarChart.set("checked",!1))},_initSelf:function(){this._initTabs();this.colorPicker.setColor(new m(this.defaultColor));this._initFieldSelectors();this._createRelatedLayerFieldOptions(this.dataSeriesFieldDropdown,!1,this._numberFieldTypes);this._createRelatedLayerFieldOptions(this.labelSeriesFieldDropdown,!0,null);this._createFieldColorPicker();this._createThemeSelector(this.themeSelectorDiv);k(this.colorPicker,"click",d.hitch(this,function(){this.rdoSingleColor.set("checked",
!0)}));k(this.themeSelectorDiv,"click",d.hitch(this,function(){this.rdoColorByTheme.set("checked",!0)}));k(this.ColorByFieldValueDropdown,"click",d.hitch(this,function(){this.rdoColorByFieldValue.set("checked",!0)}));this.layerDetails.polygonLayerInfo.supportsDistinct&&(f.remove(this.colorByFieldContainer,"esriCTHidden"),this._createColorByFieldSelector())},_createFieldColorPicker:function(){this.fieldColorPicker=new A;this.fieldColorPicker.startup();k(this.fieldColorPicker.tooltipDialog,"close",
d.hitch(this,function(){var a;f.contains(this.selectedNode.parentElement.parentElement,"jimu-state-active")&&(a=q(".jimu-state-active",this.colorByFieldTableContainer),0<a.length&&a.removeClass("jimu-state-active"))}));k(this.fieldColorPicker,"change",d.hitch(this,function(){var a,b=this.fieldColorPicker.color.toHex();a=q(".jimu-state-active .fieldColorPicker",this.colorByFieldTableContainer);0<a.length?f.contains(this.selectedNode.parentElement.parentElement,"jimu-state-active")?n.forEach(a,d.hitch(this,
function(a){p.set(a,"backgroundColor",b);h.set(a.parentElement.parentElement,"field_Color",b)})):(p.set(this.selectedNode,"backgroundColor",b),h.set(this.selectedNode.parentElement.parentElement,"field_Color",b)):(p.set(this.selectedNode,"backgroundColor",b),h.set(this.selectedNode.parentElement.parentElement,"field_Color",b))}))},_setChartColorType:function(a){a&&a.colorType&&(this.rdoSingleColor.set("checked",!1),a.colorType===this._chartColorType.singleColor?(this.rdoSingleColor.set("checked",
!0),this.colorPicker.setColor(new m(a.colorInfo))):a.colorType===this._chartColorType.byThemeColor?(this.rdoColorByTheme.set("checked",!0),this.config.chartColor&&(this.config.chartColor.colorType===this._chartColorType.byThemeColor&&this.chartThemeSelector)&&setTimeout(d.hitch(this,function(){this.chartThemeSelector.selectTheme(a.colorInfo)}),500)):a.colorType===this._chartColorType.byFieldValue&&(this.rdoColorByFieldValue.set("checked",!0),this.ColorByFieldValueDropdown.set("value",a.colorInfo.layerField),
f.remove(this.colorByFieldTableContainer,"esriCTHidden")))},_initTabs:function(){var a,b;a={title:this.nls.settingTabTitle,content:this.settingsTabNode};b={title:this.nls.layoutTabTitle,content:this.layoutTabNode};this.tab=new x({tabs:[a,b]});this.tab.placeAt(this.tabDiv);this.own(k(this.tab,"tabChanged",d.hitch(this,function(a){a===b.title&&this._updatePreview()})))},_updatePreview:function(){var a;l.empty(this.layoutDiv);a={chartConfig:this.getConfig(),isPreview:!0};a.chartConfig&&("esriCTEmptyOption"===
a.chartConfig.labelField&&(a.chartConfig.labelField=" "),a.chartData=this._createStaticDataForLayout(a.chartConfig.chartType,a.chartConfig.labelField,a.chartConfig.dataSeriesField),a=new E({config:a}),a.placeAt(l.create("div",{},this.layoutDiv)),a.startup())},_createStaticDataForLayout:function(a,b,c){var e={chartSeries:[],chartLabels:[],selectedTheme:G};switch(a){case "BarChart":e.chartSeries=[{y:65},{y:35},{y:40},{y:55},{y:50}];e.chartLabels=[{value:1,y:65,text:""},{value:2,y:35,text:""},{value:3,
y:40,text:""},{value:4,y:55,text:""},{value:5,y:50,text:""}];e.fill="#7989a0";break;case "PieChart":e.chartSeries=[{y:65,text:"{"+c+" %}"},{y:35,text:"{"+b+"}"}],e.chartLabels=[{value:1,y:65},{value:2,y:35}]}return e},_initFieldSelectors:function(){this._createFieldSelector(this.titleFieldSelectorDiv,this.chartTitleTextBox,this.layerDetails.polygonLayerInfo.fields);this._createFieldSelector(this.descriptionFieldSelectorDiv,this.chartDescriptionTextBoxArea,this.layerDetails.polygonLayerInfo.fields);
this._createFieldSelector(this.xAxisFieldSelectorDiv,this.xAxisTextBox,this.layerDetails.polygonLayerInfo.fields);this._createFieldSelector(this.yAxisFieldSelectorDiv,this.yAxisTextBox,this.layerDetails.polygonLayerInfo.fields)},_createFieldSelector:function(a,b,c){a=new z({fields:c,showOnlyNumericFields:!1,hideOnSelect:!0},l.create("div",{},a));a.onSelect=d.hitch(this,function(a){var c=h.get(b,"value"),c=c+"{"+a.name+"}";b.set?b.set("value",c):h.set(b,"value",c)});this._widgets.push(a);return a},
_createThemeSelector:function(a){this.chartThemeSelector||(this.chartThemeSelector=new y({},l.create("div",{},a)),this._widgets.push(this.chartThemeSelector));return this.chartThemeSelector},_onSectionTitleChanged:function(){this.emit("sectionTitleChanged",this.sectionTitleTextBox.get("value"))},showMainLoadingIndicator:function(){this.emit("showLoadingIndicator")},hideMainLoadingIndicator:function(){this.emit("hideLoadingIndicator")},_onChartTypeChanged:function(){this.rdoPieChart.get("checked")?
(f.add(this.xAxisArea,"esriCTHidden"),f.add(this.yAxisArea,"esriCTHidden")):(f.remove(this.xAxisArea,"esriCTHidden"),f.remove(this.yAxisArea,"esriCTHidden"))},_createRelatedLayerFieldOptions:function(a,b,c){var e={},d,g;if((d=this.layerDetails.relatedLayerInfo.fields)&&0<d.length){b&&a.addOption({value:"esriCTEmptyOption",label:this.nls.defaultFieldSelectLabel,selected:!0});for(g=0;g<d.length;g++)e=!0,c&&0>c.indexOf(d[g].type)&&(e=!1),e&&(e={value:d[g].name,label:d[g].name,selected:!1},0===g&&!b&&
(e.selected=!0),a.addOption(e))}},_createColorByFieldSelector:function(){l.empty(this.ColorByFieldValueDropdown);this._createRelatedLayerFieldOptions(this.ColorByFieldValueDropdown,!0);k(this.ColorByFieldValueDropdown,"change",d.hitch(this,function(a){this.showMainLoadingIndicator();"esriCTEmptyOption"===a?(this._removeTableRows(),f.add(this.colorByFieldTableContainer,"esriCTHidden"),this.hideMainLoadingIndicator()):this._getDistintValueForLayerField(a)}))},_getDistintValueForLayerField:function(a){var b,
c;this._selectedUniqueValues=[];b=new C(this.layerDetails.relatedLayerInfo.url);c=new B;c.where="1\x3d1";c.returnDistinctValues=!0;c.returnGeometry=!1;c.outFields=[a];b.execute(c,d.hitch(this,function(b){n.forEach(b.features,d.hitch(this,function(b){this._selectedUniqueValues.push(b.attributes[a])}));0<this._selectedUniqueValues.length&&b.fields&&0<b.fields.length&&b.fields[0].type?(b=d.clone(b.fields[0]),1<this._selectedUniqueValues.length&&this._sortUniqueValueData(b.type),this._createTableRows(b)):
(this._errorMessage(this.nls.errMsgFieldValuesNotFound),this.hideMainLoadingIndicator())}),d.hitch(this,function(){this._errorMessage(this.nls.errMsgFieldValuesNotFound);this.hideMainLoadingIndicator()}))},_removeTableRows:function(){var a,b;if((a=this.colorByFieldTable.getRows())&&0<a.length)for(b=0;b<a.length;b++)this.colorByFieldTable.deleteRow(a[b])},_createTableRows:function(a){var b,c;this._removeTableRows();f.remove(this.colorByFieldTableContainer,"esriCTHidden");n.forEach(this._selectedUniqueValues,
d.hitch(this,function(e){var f,g;f=this.colorByFieldTable.addRow({});g=e;f.success&&f.tr&&("esriFieldTypeDate"===a.type&&(g=this._getLocaleFormatedDate(e)),b=f.tr,c=q(".simple-table-cell",b),this._createColorPicker(b,e,c[0]),this._createLabelFields(g,c[1]));b&&k(b,"click",d.hitch(this,function(a){this._toggleRowSelection(a.currentTarget)}))}));this.hideMainLoadingIndicator()},_toggleRowSelection:function(a){f.contains(a,"jimu-state-active")?f.remove(a,"jimu-state-active"):f.add(a,"jimu-state-active")},
_createLabelFields:function(a,b){l.create("label",{innerHTML:a,title:a},b)},_createColorPicker:function(a,b,c){var e;c=l.create("div",{"class":"fieldColorPicker"},c);e=this.config&&this.config.chartColor&&this.config.chartColor.colorInfo&&this.config.chartColor.colorInfo.layerFieldValues&&this.config.chartColor.colorInfo.layerFieldValues[b]?this.config.chartColor.colorInfo.layerFieldValues[b]:this.defaultColor;p.set(c,"backgroundColor",e);h.set(a,"fieldVal",b);h.set(a,"field_Color",e);k(c,"click",
d.hitch(this,function(a){a.stopPropagation();a.preventDefault();this.selectedNode=a.currentTarget;var b=h.get(this.selectedNode.parentElement.parentElement,"field_Color");this.fieldColorPicker.setColor(new m(b));this.fieldColorPicker.picker.setColor((new m(b)).toHex(),!0);F.open({popup:this.fieldColorPicker.tooltipDialog,around:a.currentTarget})}))},_getColorByFieldValue:function(){var a,b={},c={},d;d=this.colorByFieldTable.getRows();for(a=0;a<d.length;a++)c[h.get(d[a],"fieldVal")]=h.get(d[a],"field_Color");
b.layerFieldValues=c;b.layerField=this.ColorByFieldValueDropdown.value;return b},_getChartColorConfig:function(){var a={};this.rdoSingleColor.checked?(a.colorType=this._chartColorType.singleColor,a.colorInfo=this.colorPicker.getColor().toHex()):this.rdoColorByTheme.checked?(a.colorType=this._chartColorType.byThemeColor,a.colorInfo=this.chartThemeSelector.selectedTheme):this.rdoColorByFieldValue.checked&&(a.colorType=this._chartColorType.byFieldValue,a.colorInfo=this._getColorByFieldValue());return a},
_sortUniqueValueData:function(a){"esriFieldTypeString"===a?this._selectedUniqueValues.sort():this._selectedUniqueValues.sort(d.hitch(this,function(a,c){return a-c}))},_getLocaleFormatedDate:function(a){return(new Date(a)).toLocaleDateString()}})});