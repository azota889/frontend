"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[457],{64123:(P,C,c)=>{c.d(C,{t:()=>M});var e=c(55330),i=c(5e3),g=c(35018),u=c(35191),m=c(69808),o=c(39453);const A=function(l,d){return{width:l,height:d}};function S(l,d){if(1&l&&(i.ynx(0),i._UZ(1,"img",2),i.ALo(2,"mycdn"),i.BQk()),2&l){const s=i.oxw();i.xp6(1),i.Q6J("src",i.lcZ(2,2,s.linkAvatar),i.LSH)("ngStyle",i.WLB(4,A,s.size+"px",s.size+"px"))}}const f=function(l,d,s){return{width:l,height:d,"font-size":s}};function I(l,d){if(1&l&&(i.TgZ(0,"div",3),i._uU(1),i.qZA()),2&l){const s=i.oxw();i.Q6J("ngStyle",i.kEZ(2,f,s.size+"px",s.size+"px",s.size/2+"px")),i.xp6(1),i.hij(" ",s.returnNameAvatar," ")}}let M=(()=>{class l extends e.Q{constructor(s,v){super(s),this.commonService=s,this.homeworkExamService=v,this.nameCreateAvatar="",this.linkAvatar="",this.size=0,this.returnNameAvatar=""}createNewAvatar(){var s;try{this.nameCreateAvatar=this.homeworkExamService.removeInvalidChars(this.nameCreateAvatar).trim()}catch(U){this.nameCreateAvatar=this.nameCreateAvatar}var v=this.commonService.convertVietnameseToEnglish(null!==(s=this.nameCreateAvatar)&&void 0!==s?s:""),h=String(v).toUpperCase().split(" ");this.returnNameAvatar=1==h.length?h[0]?h[0].charAt(0):"A":h[0].charAt(0)+h[h.length-1].charAt(0)}ngOnInit(){this.createNewAvatar()}ngOnChanges(){this.createNewAvatar()}}return l.\u0275fac=function(s){return new(s||l)(i.Y36(g.v),i.Y36(u.j))},l.\u0275cmp=i.Xpm({type:l,selectors:[["azt-create-avatar"]],inputs:{nameCreateAvatar:"nameCreateAvatar",linkAvatar:"linkAvatar",size:"size"},features:[i.qOj,i.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["elseTemplate",""],[2,"border-radius","50%",3,"src","ngStyle"],["id","create-avatar",2,"display","inline-flex","justify-content","center","align-items","center","background-color","#dddddd","border-radius","50%","color","#000","font-weight","500","margin","auto","border","1px solid #acacac",3,"ngStyle"]],template:function(s,v){if(1&s&&(i.YNc(0,S,3,7,"ng-container",0),i.YNc(1,I,2,6,"ng-template",null,1,i.W1O)),2&s){const h=i.MAs(2);i.Q6J("ngIf",""!=v.linkAvatar&&null!=v.linkAvatar)("ngIfElse",h)}},dependencies:[m.O5,m.PC,o.GT],encapsulation:2}),l})()},60284:(P,C,c)=>{c.d(C,{e:()=>g});var e=c(5e3),i=c(35018);let g=(()=>{class u{constructor(o){this.commonService=o}getTypeObjNotice(o){return"NEW_SHARE_CLASS_PERMISSION"==o.type?"L\u1edbp: "+o.classroomName:"NEW_SHARE_HOMEWORK_PERMISSION"==o.type?"B\xe0i t\u1eadp: "+o.homeworkName:"NEW_SHARE_EXAM_PERMISSION"==o.type?"\u0110\u1ec1 thi: "+o.examName:""}redirectToPage(o){switch(o.type){case"NEW_ANSWER":case"NEW_SHARE_HOMEWORK_PERMISSION":this.commonService.myNavigation(`/admin/homework/score-list/${o.classroomId}/${o.homeworkId}/${o.homeworkHashId}`);break;case"HAS_MARK":case"NEW_HOMEWORK":case"RESEND_ANSWER":this.commonService.myNavigation(`/bai-tap/${o.homeworkHashId}`);break;case"NEW_EXAM_SUBMIT":this.commonService.myNavigation(`/admin/testbank/test-review/${o.examId}/${o.parentId}/${o.studentId}/${o.examResultId}`);break;case"NEW_EXAM":this.commonService.myNavigation(`/de-thi/${o.examHashId}`);break;case"EXAM_HAS_MARK":this.commonService.myNavigation(`/test/answer-test/${o.parentId}/0/${o.examHashId}/${o.examResultId}`);break;case"NEW_SHARE_CLASS_PERMISSION":this.commonService.myNavigation(1==o.isMultipleClassroom?"/admin/student/manage-class/0":"/admin/student/class-details/"+o.classroomId);break;case"NEW_SHARE_EXAM_PERMISSION":this.commonService.myNavigation(`/admin/testbank/tested-list/0/${o.examId}/0`);break;case"NEW_QA_EXAM_ASK":case"NEW_QA_HOMEWORK_ASK":this.commonService.myNavigation("/admin/teacher-qa/view-question/"+Number(o.datas));break;case"NEW_QA_EXAM_ANSWER":case"NEW_QA_HOMEWORK_ANSWER":this.commonService.myNavigation("/student-qa/view-question/"+Number(o.datas));break;case"NEW_ASSIGN":this.commonService.myNavigation("/admin/student/manage-class/0");break;case"NEW_REQUEST_REAPPROVE":case"NEW_SHARE_PERMISSION":break;default:this.commonService.myNavigation("/student/dashboard/1")}}}return u.\u0275fac=function(o){return new(o||u)(e.LFG(i.v))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},51908:(P,C,c)=>{c.d(C,{PG:()=>b,Z_:()=>z});var e=c(5e3),i=c(69808),g=c(93075);function u(n,a){}const m=()=>{const n="undefined"!=typeof window?window:void 0;return n&&n.tinymce?n.tinymce:null};let A=(()=>{class n{constructor(){this.onBeforePaste=new e.vpe,this.onBlur=new e.vpe,this.onClick=new e.vpe,this.onContextMenu=new e.vpe,this.onCopy=new e.vpe,this.onCut=new e.vpe,this.onDblclick=new e.vpe,this.onDrag=new e.vpe,this.onDragDrop=new e.vpe,this.onDragEnd=new e.vpe,this.onDragGesture=new e.vpe,this.onDragOver=new e.vpe,this.onDrop=new e.vpe,this.onFocus=new e.vpe,this.onFocusIn=new e.vpe,this.onFocusOut=new e.vpe,this.onKeyDown=new e.vpe,this.onKeyPress=new e.vpe,this.onKeyUp=new e.vpe,this.onMouseDown=new e.vpe,this.onMouseEnter=new e.vpe,this.onMouseLeave=new e.vpe,this.onMouseMove=new e.vpe,this.onMouseOut=new e.vpe,this.onMouseOver=new e.vpe,this.onMouseUp=new e.vpe,this.onPaste=new e.vpe,this.onSelectionChange=new e.vpe,this.onActivate=new e.vpe,this.onAddUndo=new e.vpe,this.onBeforeAddUndo=new e.vpe,this.onBeforeExecCommand=new e.vpe,this.onBeforeGetContent=new e.vpe,this.onBeforeRenderUI=new e.vpe,this.onBeforeSetContent=new e.vpe,this.onChange=new e.vpe,this.onClearUndos=new e.vpe,this.onDeactivate=new e.vpe,this.onDirty=new e.vpe,this.onExecCommand=new e.vpe,this.onGetContent=new e.vpe,this.onHide=new e.vpe,this.onInit=new e.vpe,this.onInitNgModel=new e.vpe,this.onLoadContent=new e.vpe,this.onNodeChange=new e.vpe,this.onPostProcess=new e.vpe,this.onPostRender=new e.vpe,this.onPreInit=new e.vpe,this.onPreProcess=new e.vpe,this.onProgressState=new e.vpe,this.onRedo=new e.vpe,this.onRemove=new e.vpe,this.onReset=new e.vpe,this.onResizeEditor=new e.vpe,this.onSaveContent=new e.vpe,this.onSetAttrib=new e.vpe,this.onObjectResizeStart=new e.vpe,this.onObjectResized=new e.vpe,this.onObjectSelected=new e.vpe,this.onSetContent=new e.vpe,this.onShow=new e.vpe,this.onSubmit=new e.vpe,this.onUndo=new e.vpe,this.onVisualAid=new e.vpe}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,outputs:{onBeforePaste:"onBeforePaste",onBlur:"onBlur",onClick:"onClick",onContextMenu:"onContextMenu",onCopy:"onCopy",onCut:"onCut",onDblclick:"onDblclick",onDrag:"onDrag",onDragDrop:"onDragDrop",onDragEnd:"onDragEnd",onDragGesture:"onDragGesture",onDragOver:"onDragOver",onDrop:"onDrop",onFocus:"onFocus",onFocusIn:"onFocusIn",onFocusOut:"onFocusOut",onKeyDown:"onKeyDown",onKeyPress:"onKeyPress",onKeyUp:"onKeyUp",onMouseDown:"onMouseDown",onMouseEnter:"onMouseEnter",onMouseLeave:"onMouseLeave",onMouseMove:"onMouseMove",onMouseOut:"onMouseOut",onMouseOver:"onMouseOver",onMouseUp:"onMouseUp",onPaste:"onPaste",onSelectionChange:"onSelectionChange",onActivate:"onActivate",onAddUndo:"onAddUndo",onBeforeAddUndo:"onBeforeAddUndo",onBeforeExecCommand:"onBeforeExecCommand",onBeforeGetContent:"onBeforeGetContent",onBeforeRenderUI:"onBeforeRenderUI",onBeforeSetContent:"onBeforeSetContent",onChange:"onChange",onClearUndos:"onClearUndos",onDeactivate:"onDeactivate",onDirty:"onDirty",onExecCommand:"onExecCommand",onGetContent:"onGetContent",onHide:"onHide",onInit:"onInit",onInitNgModel:"onInitNgModel",onLoadContent:"onLoadContent",onNodeChange:"onNodeChange",onPostProcess:"onPostProcess",onPostRender:"onPostRender",onPreInit:"onPreInit",onPreProcess:"onPreProcess",onProgressState:"onProgressState",onRedo:"onRedo",onRemove:"onRemove",onReset:"onReset",onResizeEditor:"onResizeEditor",onSaveContent:"onSaveContent",onSetAttrib:"onSetAttrib",onObjectResizeStart:"onObjectResizeStart",onObjectResized:"onObjectResized",onObjectSelected:"onObjectSelected",onSetContent:"onSetContent",onShow:"onShow",onSubmit:"onSubmit",onUndo:"onUndo",onVisualAid:"onVisualAid"}}),n})();const S=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onResizeEditor","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],d=(n,a)=>"string"==typeof n?n.split(",").map(t=>t.trim()):Array.isArray(n)?n:a;let v=0;const h=n=>{const t=(new Date).getTime(),r=Math.floor(1e9*Math.random());return v++,n+"_"+r+v+String(t)},y=n=>void 0!==n&&"textarea"===n.tagName.toLowerCase(),D=n=>void 0===n||""===n?[]:Array.isArray(n)?n:n.split(" "),k=(n,a)=>D(n).concat(D(a)),T=()=>{},R=n=>null==n,N=()=>({listeners:[],scriptId:h("tiny-script"),scriptLoaded:!1}),W=(()=>{let n=N();return{load:(p,_,w)=>{n.scriptLoaded?w():(n.listeners.push(w),p.getElementById(n.scriptId)||((p,_,w,O)=>{const E=_.createElement("script");E.referrerPolicy="origin",E.type="application/javascript",E.id=p,E.src=w;const B=()=>{E.removeEventListener("load",B),n.listeners.forEach(O=>O()),n.scriptLoaded=!0};E.addEventListener("load",B),_.head&&_.head.appendChild(E)})(n.scriptId,p,_))},reinitialize:()=>{n=N()}}})(),L=new e.OlP("TINYMCE_SCRIPT_SRC"),K={provide:g.JU,useExisting:(0,e.Gpc)(()=>b),multi:!0};let b=(()=>{class n extends A{constructor(t,r,p,_){super(),this.platformId=p,this.tinymceScriptSrc=_,this.cloudChannel="5",this.apiKey="no-api-key",this.id="",this.modelEvents="change input undo redo",this.onTouchedCallback=T,this._elementRef=t,this.ngZone=r,this.initialise=this.initialise.bind(this)}set disabled(t){this._disabled=t,this._editor&&this._editor.initialized&&this._editor.setMode(t?"readonly":"design")}get disabled(){return this._disabled}get editor(){return this._editor}writeValue(t){this._editor&&this._editor.initialized?this._editor.setContent(R(t)?"":t):this.initialValue=null===t?void 0:t}registerOnChange(t){this.onChangeCallback=t}registerOnTouched(t){this.onTouchedCallback=t}setDisabledState(t){this._editor?this._editor.setMode(t?"readonly":"design"):t&&(this.init=Object.assign(Object.assign({},this.init),{readonly:!0}))}ngAfterViewInit(){var t;(0,i.NF)(this.platformId)&&(this.id=this.id||h("tiny-angular"),this.inline=void 0!==this.inline?!1!==this.inline:!(null===(t=this.init)||void 0===t||!t.inline),this.createElement(),null!==m()?this.initialise():this._element&&this._element.ownerDocument&&W.load(this._element.ownerDocument,this.getScriptSrc(),this.initialise.bind(this)))}ngOnDestroy(){null!==m()&&m().remove(this._editor)}createElement(){this._element=document.createElement(this.inline?"string"==typeof this.tagName?this.tagName:"div":"textarea"),this._element&&(document.getElementById(this.id)&&console.warn(`TinyMCE-Angular: an element with id [${this.id}] already exists. Editors with duplicate Id will not be able to mount`),this._element.id=this.id,y(this._element)&&(this._element.style.visibility="hidden"),this._elementRef.nativeElement.appendChild(this._element))}initialise(){const t=Object.assign(Object.assign({},this.init),{target:this._element,inline:this.inline,readonly:this.disabled,plugins:k(this.init&&this.init.plugins,this.plugins),toolbar:this.toolbar||this.init&&this.init.toolbar,setup:r=>{this._editor=r,r.on("init",p=>{this.initEditor(r)}),((n,a)=>{(n=>{const a=d(n.ignoreEvents,[]);return d(n.allowedEvents,S).filter(r=>S.includes(r)&&!a.includes(r))})(n).forEach(r=>{const p=n[r];a.on(r.substring(2),_=>n.ngZone.run(()=>p.emit({event:_,editor:a})))})})(this,r),this.init&&"function"==typeof this.init.setup&&this.init.setup(r)}});y(this._element)&&(this._element.style.visibility=""),this.ngZone.runOutsideAngular(()=>{m().init(t)})}getScriptSrc(){return R(this.tinymceScriptSrc)?`https://cdn.tiny.cloud/1/${this.apiKey}/tinymce/${this.cloudChannel}/tinymce.min.js`:this.tinymceScriptSrc}initEditor(t){t.on("blur",()=>this.ngZone.run(()=>this.onTouchedCallback())),t.on(this.modelEvents,()=>this.ngZone.run(()=>this.emitOnChange(t))),"string"==typeof this.initialValue&&this.ngZone.run(()=>{t.setContent(this.initialValue),t.getContent()!==this.initialValue&&this.emitOnChange(t),void 0!==this.onInitNgModel&&this.onInitNgModel.emit(t)})}emitOnChange(t){this.onChangeCallback&&this.onChangeCallback(t.getContent({format:this.outputFormat}))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(e.Lbi),e.Y36(L,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["editor"]],inputs:{cloudChannel:"cloudChannel",apiKey:"apiKey",id:"id",modelEvents:"modelEvents",disabled:"disabled",initialValue:"initialValue",init:"init",inline:"inline",outputFormat:"outputFormat",tagName:"tagName",plugins:"plugins",toolbar:"toolbar",allowedEvents:"allowedEvents",ignoreEvents:"ignoreEvents"},features:[e._Bn([K]),e.qOj],decls:1,vars:0,template:function(t,r){1&t&&e.YNc(0,u,0,0,"ng-template")},styles:["[_nghost-%COMP%] { display: block; }"]}),n})(),z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[i.ez,g.u5]}),n})()}}]);