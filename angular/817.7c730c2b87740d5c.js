"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[817],{64123:(b,M,a)=>{a.d(M,{t:()=>f});var e=a(55330),s=a(5e3),n=a(35018),v=a(35191),p=a(69808),i=a(1033);const R=function(u,g){return{width:u,height:g}};function D(u,g){if(1&u&&(s.ynx(0),s._UZ(1,"img",2),s.ALo(2,"mycdn"),s.BQk()),2&u){const c=s.oxw();s.xp6(1),s.Q6J("src",s.lcZ(2,2,c.linkAvatar),s.LSH)("ngStyle",s.WLB(4,R,c.size+"px",c.size+"px"))}}const I=function(u,g,c){return{width:u,height:g,"font-size":c}};function L(u,g){if(1&u&&(s.TgZ(0,"div",3),s._uU(1),s.qZA()),2&u){const c=s.oxw();s.Q6J("ngStyle",s.kEZ(2,I,c.size+"px",c.size+"px",c.size/2+"px")),s.xp6(1),s.hij(" ",c.returnNameAvatar," ")}}let f=(()=>{class u extends e.Q{constructor(c,E){super(c),this.commonService=c,this.homeworkExamService=E,this.nameCreateAvatar="",this.linkAvatar="",this.size=0,this.returnNameAvatar=""}createNewAvatar(){var c;try{this.nameCreateAvatar=this.homeworkExamService.removeInvalidChars(this.nameCreateAvatar).trim()}catch(w){this.nameCreateAvatar=this.nameCreateAvatar}var E=this.commonService.convertVietnameseToEnglish(null!==(c=this.nameCreateAvatar)&&void 0!==c?c:""),l=String(E).toUpperCase().split(" ");this.returnNameAvatar=1==l.length?l[0]?l[0].charAt(0):"A":l[0].charAt(0)+l[l.length-1].charAt(0)}ngOnInit(){this.createNewAvatar()}ngOnChanges(){this.createNewAvatar()}}return u.\u0275fac=function(c){return new(c||u)(s.Y36(n.v),s.Y36(v.j))},u.\u0275cmp=s.Xpm({type:u,selectors:[["azt-create-avatar"]],inputs:{nameCreateAvatar:"nameCreateAvatar",linkAvatar:"linkAvatar",size:"size"},features:[s.qOj,s.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["elseTemplate",""],[2,"border-radius","50%",3,"src","ngStyle"],["id","create-avatar",2,"display","inline-flex","justify-content","center","align-items","center","background-color","#dddddd","border-radius","50%","color","#000","font-weight","500","margin","auto","border","1px solid #acacac",3,"ngStyle"]],template:function(c,E){if(1&c&&(s.YNc(0,D,3,7,"ng-container",0),s.YNc(1,L,2,6,"ng-template",null,1,s.W1O)),2&c){const l=s.MAs(2);s.Q6J("ngIf",""!=E.linkAvatar&&null!=E.linkAvatar)("ngIfElse",l)}},dependencies:[p.O5,p.PC,i.GT],encapsulation:2}),u})()},75477:(b,M,a)=>{a.d(M,{x:()=>E});var e=a(55330),s=a(92340),n=a(5e3),v=a(60284),p=a(35018),i=a(88386),R=a(72475),D=a(3785),I=a(69808),L=a(47423),f=a(92181),u=a(1033);function g(l,w){if(1&l&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"mytranslate"),n.qZA()),2&l){const r=n.oxw().$implicit;n.xp6(1),n.hij(" ",n.lcZ(2,1,r.label)," ")}}function c(l,w){if(1&l){const r=n.EpF();n.TgZ(0,"div",7)(1,"button",8),n.NdJ("click",function(){const A=n.CHM(r).$implicit,O=n.oxw();return n.KtG(O.switchLanguage(A.value))}),n._UZ(2,"img",4),n.ALo(3,"convertCdn"),n.YNc(4,g,3,3,"span",9),n.qZA()()}if(2&l){const r=w.$implicit;n.xp6(2),n.s9C("alt",r),n.Q6J("src",n.lcZ(3,3,r.img),n.LSH),n.xp6(2),n.Q6J("ngIf",r.label)}}let E=(()=>{class l extends e.Q{constructor(r,d,m,A,O){super(d),this.processNoticeService=r,this.commonService=d,this.userService=m,this.userLangService=A,this.switchLanguageService=O,this.imgLanguage="",this.languageList=[]}getImgLanguage(r){for(var d=0;d<this.languageList.length;d++)r==this.languageList[d].value&&(this.imgLanguage=this.languageList[d].img)}initLanguages(){for(var r=[],d=s.N.listLanguages,m=0;m<d.length;m++){var A=d[m];r.push({value:A,label:"lang_core_language_"+A,img:"azota_assets/flag/"+A+".svg"})}this.languageList=r}switchLanguage(r){r&&r!=this.commonService.getCurrentLang()&&(this.userService.isLogin()?(this.initStatusObj(),this.subscriptions.add(this.userLangService.apiUserLangSwitchLangGet(r).subscribe(d=>{var m;1==d.success?(this.stopStatusObj(),this.switchLanguageService.redirectToNewLanguage(r)):this.errorStatusObj(null!==(m=d.message)&&void 0!==m?m:"",!0)}))):this.switchLanguageService.redirectToNewLanguage(r))}ngOnInit(){this.initLanguages(),this.getImgLanguage(this.commonService.getCurrentLang())}}return l.\u0275fac=function(r){return new(r||l)(n.Y36(v.e),n.Y36(p.v),n.Y36(i.K),n.Y36(R.Ew),n.Y36(D.B))},l.\u0275cmp=n.Xpm({type:l,selectors:[["azt-switch-language"]],features:[n.qOj],decls:10,vars:8,consts:[["mat-icon-button","",1,"btn-language",3,"matMenuTriggerFor"],["role","status",1,"spinner-border","spinner-border-sm",3,"hidden"],[1,"sr-only"],[3,"hidden"],[3,"src","alt"],["switchlanguage","matMenu"],["class","block-switch",4,"ngFor","ngForOf"],[1,"block-switch"],["mat-menu-item","",1,"btn-switch",2,"text-transform","inherit",3,"click"],[4,"ngIf"]],template:function(r,d){if(1&r&&(n.TgZ(0,"button",0)(1,"div",1),n._UZ(2,"span",2),n.qZA(),n.TgZ(3,"span",3),n._uU(4,"\xa0"),n.qZA(),n._UZ(5,"img",4),n.ALo(6,"convertCdn"),n.qZA(),n.TgZ(7,"mat-menu",null,5),n.YNc(9,c,5,5,"div",6),n.qZA()),2&r){const m=n.MAs(8);n.Q6J("matMenuTriggerFor",m),n.xp6(1),n.Q6J("hidden",!d.statusObj.loading),n.xp6(2),n.Q6J("hidden",!d.statusObj.loading),n.xp6(2),n.s9C("alt",d.imgLanguage),n.Q6J("src",n.lcZ(6,6,d.imgLanguage),n.LSH),n.xp6(4),n.Q6J("ngForOf",d.languageList)}},dependencies:[I.sg,I.O5,L.lW,f.VK,f.OP,f.p6,u.bT,u.BI],encapsulation:2}),l})()},60284:(b,M,a)=>{a.d(M,{e:()=>n});var e=a(5e3),s=a(35018);let n=(()=>{class v{constructor(i){this.commonService=i}getTypeObjNotice(i){return"NEW_SHARE_CLASS_PERMISSION"==i.type?"L\u1edbp: "+i.classroomName:"NEW_SHARE_HOMEWORK_PERMISSION"==i.type?"B\xe0i t\u1eadp: "+i.homeworkName:"NEW_SHARE_EXAM_PERMISSION"==i.type?"\u0110\u1ec1 thi: "+i.examName:""}redirectToPage(i){switch(i.type){case"NEW_ANSWER":case"NEW_SHARE_HOMEWORK_PERMISSION":this.commonService.myNavigation(`/admin/homework/score-list/${i.classroomId}/${i.homeworkId}/${i.homeworkHashId}`);break;case"HAS_MARK":case"NEW_HOMEWORK":case"RESEND_ANSWER":this.commonService.myNavigation(`/bai-tap/${i.homeworkHashId}`);break;case"NEW_EXAM_SUBMIT":this.commonService.myNavigation(`/admin/testbank/test-review/${i.examId}/${i.parentId}/${i.studentId}/${i.examResultId}`);break;case"NEW_EXAM":this.commonService.myNavigation(`/de-thi/${i.examHashId}`);break;case"EXAM_HAS_MARK":this.commonService.myNavigation(`/test/answer-test/${i.parentId}/0/${i.examHashId}/${i.examResultId}`);break;case"NEW_SHARE_CLASS_PERMISSION":this.commonService.myNavigation(1==i.isMultipleClassroom?"/admin/student/manage-class/0":"/admin/student/class-details/"+i.classroomId);break;case"NEW_SHARE_EXAM_PERMISSION":this.commonService.myNavigation(`/admin/testbank/tested-list/0/${i.examId}/0`);break;case"NEW_QA_EXAM_ASK":case"NEW_QA_HOMEWORK_ASK":this.commonService.myNavigation("/admin/teacher-qa/view-question/"+Number(i.datas));break;case"NEW_QA_EXAM_ANSWER":case"NEW_QA_HOMEWORK_ANSWER":this.commonService.myNavigation("/student-qa/view-question/"+Number(i.datas));break;case"NEW_ASSIGN":this.commonService.myNavigation("/admin/student/manage-class/0");break;case"NEW_REQUEST_REAPPROVE":case"NEW_SHARE_PERMISSION":break;default:this.commonService.myNavigation("/student/dashboard/1")}}}return v.\u0275fac=function(i){return new(i||v)(e.LFG(s.v))},v.\u0275prov=e.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},51908:(b,M,a)=>{a.d(M,{PG:()=>B,Z_:()=>F});var e=a(5e3),s=a(69808),n=a(93075);function v(t,h){}const p=()=>{const t="undefined"!=typeof window?window:void 0;return t&&t.tinymce?t.tinymce:null};let R=(()=>{class t{constructor(){this.onBeforePaste=new e.vpe,this.onBlur=new e.vpe,this.onClick=new e.vpe,this.onContextMenu=new e.vpe,this.onCopy=new e.vpe,this.onCut=new e.vpe,this.onDblclick=new e.vpe,this.onDrag=new e.vpe,this.onDragDrop=new e.vpe,this.onDragEnd=new e.vpe,this.onDragGesture=new e.vpe,this.onDragOver=new e.vpe,this.onDrop=new e.vpe,this.onFocus=new e.vpe,this.onFocusIn=new e.vpe,this.onFocusOut=new e.vpe,this.onKeyDown=new e.vpe,this.onKeyPress=new e.vpe,this.onKeyUp=new e.vpe,this.onMouseDown=new e.vpe,this.onMouseEnter=new e.vpe,this.onMouseLeave=new e.vpe,this.onMouseMove=new e.vpe,this.onMouseOut=new e.vpe,this.onMouseOver=new e.vpe,this.onMouseUp=new e.vpe,this.onPaste=new e.vpe,this.onSelectionChange=new e.vpe,this.onActivate=new e.vpe,this.onAddUndo=new e.vpe,this.onBeforeAddUndo=new e.vpe,this.onBeforeExecCommand=new e.vpe,this.onBeforeGetContent=new e.vpe,this.onBeforeRenderUI=new e.vpe,this.onBeforeSetContent=new e.vpe,this.onChange=new e.vpe,this.onClearUndos=new e.vpe,this.onDeactivate=new e.vpe,this.onDirty=new e.vpe,this.onExecCommand=new e.vpe,this.onGetContent=new e.vpe,this.onHide=new e.vpe,this.onInit=new e.vpe,this.onInitNgModel=new e.vpe,this.onLoadContent=new e.vpe,this.onNodeChange=new e.vpe,this.onPostProcess=new e.vpe,this.onPostRender=new e.vpe,this.onPreInit=new e.vpe,this.onPreProcess=new e.vpe,this.onProgressState=new e.vpe,this.onRedo=new e.vpe,this.onRemove=new e.vpe,this.onReset=new e.vpe,this.onResizeEditor=new e.vpe,this.onSaveContent=new e.vpe,this.onSetAttrib=new e.vpe,this.onObjectResizeStart=new e.vpe,this.onObjectResized=new e.vpe,this.onObjectSelected=new e.vpe,this.onSetContent=new e.vpe,this.onShow=new e.vpe,this.onSubmit=new e.vpe,this.onUndo=new e.vpe,this.onVisualAid=new e.vpe}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275dir=e.lG2({type:t,outputs:{onBeforePaste:"onBeforePaste",onBlur:"onBlur",onClick:"onClick",onContextMenu:"onContextMenu",onCopy:"onCopy",onCut:"onCut",onDblclick:"onDblclick",onDrag:"onDrag",onDragDrop:"onDragDrop",onDragEnd:"onDragEnd",onDragGesture:"onDragGesture",onDragOver:"onDragOver",onDrop:"onDrop",onFocus:"onFocus",onFocusIn:"onFocusIn",onFocusOut:"onFocusOut",onKeyDown:"onKeyDown",onKeyPress:"onKeyPress",onKeyUp:"onKeyUp",onMouseDown:"onMouseDown",onMouseEnter:"onMouseEnter",onMouseLeave:"onMouseLeave",onMouseMove:"onMouseMove",onMouseOut:"onMouseOut",onMouseOver:"onMouseOver",onMouseUp:"onMouseUp",onPaste:"onPaste",onSelectionChange:"onSelectionChange",onActivate:"onActivate",onAddUndo:"onAddUndo",onBeforeAddUndo:"onBeforeAddUndo",onBeforeExecCommand:"onBeforeExecCommand",onBeforeGetContent:"onBeforeGetContent",onBeforeRenderUI:"onBeforeRenderUI",onBeforeSetContent:"onBeforeSetContent",onChange:"onChange",onClearUndos:"onClearUndos",onDeactivate:"onDeactivate",onDirty:"onDirty",onExecCommand:"onExecCommand",onGetContent:"onGetContent",onHide:"onHide",onInit:"onInit",onInitNgModel:"onInitNgModel",onLoadContent:"onLoadContent",onNodeChange:"onNodeChange",onPostProcess:"onPostProcess",onPostRender:"onPostRender",onPreInit:"onPreInit",onPreProcess:"onPreProcess",onProgressState:"onProgressState",onRedo:"onRedo",onRemove:"onRemove",onReset:"onReset",onResizeEditor:"onResizeEditor",onSaveContent:"onSaveContent",onSetAttrib:"onSetAttrib",onObjectResizeStart:"onObjectResizeStart",onObjectResized:"onObjectResized",onObjectSelected:"onObjectSelected",onSetContent:"onSetContent",onShow:"onShow",onSubmit:"onSubmit",onUndo:"onUndo",onVisualAid:"onVisualAid"}}),t})();const D=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onResizeEditor","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],g=(t,h)=>"string"==typeof t?t.split(",").map(o=>o.trim()):Array.isArray(t)?t:h;let E=0;const l=t=>{const o=(new Date).getTime(),_=Math.floor(1e9*Math.random());return E++,t+"_"+_+E+String(o)},r=t=>void 0!==t&&"textarea"===t.tagName.toLowerCase(),m=t=>void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" "),O=(t,h)=>m(t).concat(m(h)),W=()=>{},T=t=>null==t,U=()=>({listeners:[],scriptId:l("tiny-script"),scriptLoaded:!1}),z=(()=>{let t=U();return{load:(C,S,y)=>{t.scriptLoaded?y():(t.listeners.push(y),C.getElementById(t.scriptId)||((C,S,y,N)=>{const P=S.createElement("script");P.referrerPolicy="origin",P.type="application/javascript",P.id=C,P.src=y;const x=()=>{P.removeEventListener("load",x),t.listeners.forEach(N=>N()),t.scriptLoaded=!0};P.addEventListener("load",x),S.head&&S.head.appendChild(P)})(t.scriptId,C,S))},reinitialize:()=>{t=U()}}})(),k=new e.OlP("TINYMCE_SCRIPT_SRC"),j={provide:n.JU,useExisting:(0,e.Gpc)(()=>B),multi:!0};let B=(()=>{class t extends R{constructor(o,_,C,S){super(),this.platformId=C,this.tinymceScriptSrc=S,this.cloudChannel="5",this.apiKey="no-api-key",this.id="",this.modelEvents="change input undo redo",this.onTouchedCallback=W,this._elementRef=o,this.ngZone=_,this.initialise=this.initialise.bind(this)}set disabled(o){this._disabled=o,this._editor&&this._editor.initialized&&this._editor.setMode(o?"readonly":"design")}get disabled(){return this._disabled}get editor(){return this._editor}writeValue(o){this._editor&&this._editor.initialized?this._editor.setContent(T(o)?"":o):this.initialValue=null===o?void 0:o}registerOnChange(o){this.onChangeCallback=o}registerOnTouched(o){this.onTouchedCallback=o}setDisabledState(o){this._editor?this._editor.setMode(o?"readonly":"design"):o&&(this.init=Object.assign(Object.assign({},this.init),{readonly:!0}))}ngAfterViewInit(){var o;(0,s.NF)(this.platformId)&&(this.id=this.id||l("tiny-angular"),this.inline=void 0!==this.inline?!1!==this.inline:!(null===(o=this.init)||void 0===o||!o.inline),this.createElement(),null!==p()?this.initialise():this._element&&this._element.ownerDocument&&z.load(this._element.ownerDocument,this.getScriptSrc(),this.initialise.bind(this)))}ngOnDestroy(){null!==p()&&p().remove(this._editor)}createElement(){this._element=document.createElement(this.inline?"string"==typeof this.tagName?this.tagName:"div":"textarea"),this._element&&(document.getElementById(this.id)&&console.warn(`TinyMCE-Angular: an element with id [${this.id}] already exists. Editors with duplicate Id will not be able to mount`),this._element.id=this.id,r(this._element)&&(this._element.style.visibility="hidden"),this._elementRef.nativeElement.appendChild(this._element))}initialise(){const o=Object.assign(Object.assign({},this.init),{target:this._element,inline:this.inline,readonly:this.disabled,plugins:O(this.init&&this.init.plugins,this.plugins),toolbar:this.toolbar||this.init&&this.init.toolbar,setup:_=>{this._editor=_,_.on("init",C=>{this.initEditor(_)}),((t,h)=>{(t=>{const h=g(t.ignoreEvents,[]);return g(t.allowedEvents,D).filter(_=>D.includes(_)&&!h.includes(_))})(t).forEach(_=>{const C=t[_];h.on(_.substring(2),S=>t.ngZone.run(()=>C.emit({event:S,editor:h})))})})(this,_),this.init&&"function"==typeof this.init.setup&&this.init.setup(_)}});r(this._element)&&(this._element.style.visibility=""),this.ngZone.runOutsideAngular(()=>{p().init(o)})}getScriptSrc(){return T(this.tinymceScriptSrc)?`https://cdn.tiny.cloud/1/${this.apiKey}/tinymce/${this.cloudChannel}/tinymce.min.js`:this.tinymceScriptSrc}initEditor(o){o.on("blur",()=>this.ngZone.run(()=>this.onTouchedCallback())),o.on(this.modelEvents,()=>this.ngZone.run(()=>this.emitOnChange(o))),"string"==typeof this.initialValue&&this.ngZone.run(()=>{o.setContent(this.initialValue),o.getContent()!==this.initialValue&&this.emitOnChange(o),void 0!==this.onInitNgModel&&this.onInitNgModel.emit(o)})}emitOnChange(o){this.onChangeCallback&&this.onChangeCallback(o.getContent({format:this.outputFormat}))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(e.Lbi),e.Y36(k,8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["editor"]],inputs:{cloudChannel:"cloudChannel",apiKey:"apiKey",id:"id",modelEvents:"modelEvents",disabled:"disabled",initialValue:"initialValue",init:"init",inline:"inline",outputFormat:"outputFormat",tagName:"tagName",plugins:"plugins",toolbar:"toolbar",allowedEvents:"allowedEvents",ignoreEvents:"ignoreEvents"},features:[e._Bn([j]),e.qOj],decls:1,vars:0,template:function(o,_){1&o&&e.YNc(0,v,0,0,"ng-template")},styles:["[_nghost-%COMP%] { display: block; }"]}),t})(),F=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,n.u5]}),t})()}}]);