// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/on dojo/aspect dijit/form/Select dijit/form/TextBox esri/symbols/jsonUtils jimu/dijit/CheckBox jimu/dijit/URLInput jimu/utils ./editors/simpleEditors ./editors/FeatureSetEditorChooser ./editors/FeatureSetResultEditor ./editors/SelectFeatureSetFromUrl ./editors/SelectFeatureSetFromLayer ./editors/SelectFeatureSetFromFile ./editors/DataFileEditor ./editors/RasterLayerEditor ./editors/RecordSetEditor".split(" "),function(k,n,p,q,r,s,t,u,v,e,w,x,y,z,A,B,C,D){function E(a,
d,b){if(a.editorName&&0>a.dataType.indexOf("GPMultiValue"))return a.editorName;if("input"===d)return"GPMultiValue:GPFeatureRecordSetLayer"===a.dataType?"UnsupportEditor":-1<a.dataType.indexOf("GPMultiValue")&&a.choiceList&&0<a.choiceList.length?"MultiValueChooser":-1<a.dataType.indexOf("GPMultiValue")&&(!a.choiceList||0===a.choiceList.length)?"MultiValueEditor":"GPLong"===a.dataType?"LongNumberTextBox":"GPDouble"===a.dataType?"DoubleNumberTextBox":"GPString"===a.dataType?a.choiceList&&0<a.choiceList.length?
"Select":"TextBox":"GPBoolean"===a.dataType?"CheckBox":"GPLinearUnit"===a.dataType?"LinerUnitEditor":"GPDate"===a.dataType?"DateTimeEditor":"GPDataFile"===a.dataType?"DataFileEditor":"GPRasterDataLayer"===a.dataType?"RasterLayerEditor":"GPRecordSet"===a.dataType?"SimpleJsonEditor":"GPFeatureRecordSetLayer"===a.dataType?"setting"===b?"FeatureSetEditorChooser":"draw"===a.featureSetMode?"SelectFeatureSetFromDraw":"layers"===a.featureSetMode?"SelectFeatureSetFromLayer":"url"===a.featureSetMode?"SelectFeatureSetFromUrl":
"file"===a.featureSetMode?"SelectFeatureSetFromFile":"UnsupportEditor":"UnsupportEditor";a="GPFeatureRecordSetLayer"===a.dataType?"FeatureSetResultEditor":"GPRecordSet"===a.dataType?"RecordSetEditor":"ShowMessage";return a}var g={},l,h=[],m;g.createEditor=function(a,d,b,f){var c;d=E(a,d,b);b={param:a,widgetUID:f?f.uid:void 0,config:f?f.config:void 0,appConfig:f?f.appConfig:void 0,map:l,nls:m,context:b,editorManager:g,style:{width:"100%"}};"UnsupportEditor"===d?(b.message="type "+a.dataType+" is not supported for now.",
c=new e.UnsupportEditor(b)):"ShowMessage"===d?(b.message="GPRecordSet"===a.dataType?"table":"GPDataFile"===a.dataType||"GPRasterDataLayer"===a.dataType?"link":"text",c=new e.UnsupportEditor(b)):"RecordSetEditor"===d?c=new D(b):"MultiValueChooser"===d?c=new e.MultiValueChooser(b):"MultiValueEditor"===d?c=new e.MultiValueEditor(b):"LongNumberTextBox"===d?c=new e.LongNumberEditor(b):"DoubleNumberTextBox"===d?c=new e.DoubleNumberEditor(b):"Select"===d?(b.gEditor=new q({options:k.map(a.choiceList,function(a){return{label:a,
value:a}}),value:void 0===a.defaultValue?"":a.defaultValue}),b.editorName="Select",c=new e.GeneralEditorWrapperEditor(b)):"TextBox"===d?(b.gEditor=new r({value:void 0===a.defaultValue?"":a.defaultValue}),c=new e.GeneralEditorWrapperEditor(b)):"CheckBox"===d?(b.gEditor=new t({checked:void 0===a.defaultValue?!1:a.defaultValue}),c=new e.GeneralEditorWrapperEditor(b)):"LinerUnitEditor"===d?c=new e.LinerUnitEditor(b):"DateTimeEditor"===d?c=new e.DateTimeEditor(b):"URLInput"===d?(b.gEditor=new u({value:void 0===
a.defaultValue?"":a.defaultValue}),c=new e.GeneralEditorWrapperEditor(b)):"ObjectUrlEditor"===d?(a.defaultValue&&"string"===typeof a.defaultValue&&(b.value=a.defaultValue),c=new e.ObjectUrlEditor(b)):"SimpleJsonEditor"===d?(a.defaultValue&&(b.value=a.defaultValue),c=new e.SimpleJsonEditor(b)):"DataFileEditor"===d?(a.defaultValue&&(b.value=a.defaultValue),c=new B(b)):"RasterLayerEditor"===d?(a.defaultValue&&(b.value=a.defaultValue),c=new C(b)):"SelectFeatureSetFromDraw"===d?void 0===a.defaultValue?
(b.message="No defaultValue property.",c=new e.UnsupportEditor(b)):(a.defaultValue&&a.defaultValue.geometryType?(f=v.getTypeByGeometryType(a.defaultValue.geometryType),b.types=[f],b.showClear=!0,a.symbol&&(b[f+"Symbol"]=s.fromJson(a.symbol))):b.showClear=!0,c=new e.SelectFeatureSetFromDraw(b)):"SelectFeatureSetFromLayer"===d?(a.defaultValue&&(b.value=a.defaultValue),c=new z(b)):"SelectFeatureSetFromUrl"===d?(b.querySetting=a.defaultValue,c=new y(b)):"SelectFeatureSetFromFile"===d?c=new A(b):"FeatureSetEditorChooser"===
d?c=new w(b):"FeatureSetResultEditor"===d?c=new x(b):"GetUrlObjectFromLayer"===d?(a.defaultValue&&(b.value=a.defaultValue),c=new e.GetUrlObjectFromLayer(b)):(b.message="wrong editorName."+d,c=new e.UnsupportEditor(b));a.editorDependParamName&&(c.dependParam=a.editorDependParamName);p.before(c,"destroy",function(){h.splice(h.indexOf(c),1)});c.dependParam&&k.forEach(h,function(a){a.param.name===c.dependParam&&c.update(a.getValue())});"SelectFeatureSetFromLayer"===d&&n(c,"change",function(){k.forEach(h,
function(b){b.dependParam===a.name&&b.update(c.getValue())})});h.push(c);return c};g.setMap=function(a){l=a};g.setNls=function(a){m=a};return g});