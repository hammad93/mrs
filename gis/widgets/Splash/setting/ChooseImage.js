// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo dijit dijit/_editor/_Plugin jimu/dijit/ImageChooser dojo/_base/html dojo/_base/connect dojo/_base/declare dojox/form/FileUploader dijit/_editor/_Plugin".split(" "),function(c,f,g,b,d){c.experimental("dojox.editor.plugins.ChooseImage");var e=c.declare("dojox.editor.plugins.ChooseImage",g,{tempImageUrl:"",iconClassPrefix:"editorIcon",useDefaultCommand:!1,uploadUrl:"",button:null,label:"Upload",setToolbar:function(a){this.button.destroy();this.createFileInput();a.addChild(this.button)},
_initButton:function(){this.command="uploadImage";this.editor.commands[this.command]="Upload Image";this.inherited("_initButton",arguments);delete this.command},updateState:function(){this.button.set("disabled",this.get("disabled"))},createFileInput:function(){var a=c.create("span",{innerHTML:"."},document.body);c.style(a,{width:"40px",height:"20px",paddingLeft:"8px",paddingRight:"8px"});this.button=new b({showSelfImg:!1,cropImage:!1,format:[b.GIF,b.JPEG,b.PNG]},a);d.setStyle(this.button.domNode,
{width:"29px",height:"24px",top:0,position:"absolute"});window.isRTL?d.setStyle(this.button.domNode,"left","391px"):d.setStyle(this.button.domNode,"right","387px");this.connect(this.button,"onImageChange","insertTempImage")},onComplete:function(a){a=a[0];var b=c.byId(this.currentImageId,this.editor.document),d;d=this.downloadPath?this.downloadPath+a.name:a.file;b.src=d;c.attr(b,"_djrealurl",d);a.width&&(b.width=a.width,b.height=a.height)},insertTempImage:function(a){this.currentImageId="img_"+(new Date).getTime();
this.editor.execCommand("inserthtml",'\x3cimg id\x3d"'+this.currentImageId+'" src\x3d"'+a+'" /\x3e')}});c.subscribe(f._scopeName+".Editor.getPlugin",null,function(a){if(!a.plugin)switch(a.args.name){case "chooseImage":a.plugin=new e({url:a.args.url})}});return e});