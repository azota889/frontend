(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"3u6u":function(n,t,e){"use strict";e.r(t),e.d(t,"TeacherQAModule",function(){return H});var o=e("ofXK"),i=e("3Pt+"),c=e("0IaG"),s=e("tyNb"),r=e("fB2i"),a=e("IkSl"),l=e("rIor"),d=e("Zhhu"),g=e("vvyD"),u=e("sOeQ"),b=e("Avyq"),p=e("wccm"),f=e("fXoL"),h=e("oUVn"),m=e("hZBc"),O=e("nzN9"),_=e("AWii"),x=e("iWHX");function v(n,t){1&n&&f.Qb(0,"azt-loading-effect")}function P(n,t){1&n&&(f.Vb(0,"div",3),f.Qb(1,"azt-list-questions"),f.Ub())}let C=(()=>{class n{constructor(n){this.commonService=n,this.isLoading=!1}ngOnInit(){this.isLoading=!0,this.commonService.translateMetaData({title:"lang_cms_teacher_group_title",description:"lang_cms_teacher_group_description",image:"lang_cms_test_image"}),this.isLoading=!1}}return n.\u0275fac=function(t){return new(t||n)(f.Pb(h.a))},n.\u0275cmp=f.Jb({type:n,selectors:[["app-list-questions-student"]],decls:5,vars:6,consts:[[3,"headerTitle","back_link"],[4,"ngIf","ngIfElse"],["doneLoading",""],[1,"pl-2","pr-2",2,"max-width","700px","margin","auto"]],template:function(n,t){if(1&n&&(f.Qb(0,"header-backend",0),f.hc(1,"mytranslate"),f.Rc(2,v,1,0,"azt-loading-effect",1),f.Rc(3,P,2,0,"ng-template",null,2,f.Sc)),2&n){const n=f.Ac(4);f.nc("headerTitle",f.ic(1,4,"lang_teacher_qa_list_questions_student_header_title"))("back_link","/admin/testbank/dashboard"),f.Db(2),f.nc("ngIf",t.isLoading)("ngIfElse",n)}},directives:[m.a,o.m,O.a,_.a],pipes:[x.t],styles:[".content[_ngcontent-%COMP%]{padding:15px;margin-top:20px!important;margin:auto;max-width:430px;background:inherit;background-color:#ececec;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.14)}.content-header[_ngcontent-%COMP%]{text-align:center}.content-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:40px}.content-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .content-list-view[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{max-width:270px;background:inherit;background-color:#169bd5;border:none;border-radius:5px;color:#fff;font-weight:500}.view-single[_ngcontent-%COMP%]{padding:10px 15px;background:inherit;background-color:#fff;box-sizing:border-box;border:1px solid #ececec;border-radius:5px;box-shadow:none;font-style:normal;font-size:12px;color:#494949}"]}),n})(),w=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=f.Jb({type:n,selectors:[["question-master-page"]],decls:2,vars:0,consts:[["id","student-layout"]],template:function(n,t){1&n&&(f.Vb(0,"div",0),f.Qb(1,"router-outlet"),f.Ub())},directives:[s.m],styles:[""]}),n})();var M=e("quSY"),k=e("KVcZ"),I=e("gm2p"),j=e("0pw4"),y=e("diKk"),S=e("tk/3"),Q=e("BTbT"),U=e("VMFx"),A=e("Txro"),z=e("NFeN"),V=e("Qu3c"),F=e("wAhq");function D(n,t){if(1&n){const n=f.Wb();f.Vb(0,"div",21),f.Vb(1,"span",22),f.cc("click",function(){f.Ec(n);const e=t.$implicit;return f.gc(2).onShowFile(e,-1)}),f.Tc(2),f.Ub(),f.Vb(3,"span"),f.Tc(4),f.Ub(),f.Vb(5,"i",23),f.cc("click",function(){f.Ec(n);const e=t.$implicit;return f.gc(2).removeAttach(e)}),f.hc(6,"mytranslate"),f.Ub(),f.Ub()}if(2&n){const n=t.$implicit;f.Db(1),f.nc("matTooltip",(null==n?null:n.name)||""),f.Db(1),f.Uc(n.name),f.Db(2),f.Vc(".",n.extension,""),f.Db(1),f.oc("matTooltip",f.ic(6,4,"lang_teacher_qa_form_input_answer_remove_file"))}}function q(n,t){if(1&n&&(f.Tb(0),f.Rc(1,D,7,6,"div",20),f.Sb()),2&n){const n=f.gc();f.Db(1),f.nc("ngForOf",n.filesUploaded)}}function T(n,t){1&n&&f.Qb(0,"span",24)}function E(n,t){1&n&&(f.Vb(0,"span"),f.Qb(1,"span",24),f.Tc(2,"\xa0"),f.Ub())}function G(n,t){if(1&n){const n=f.Wb();f.Vb(0,"div"),f.Vb(1,"azt-preview-media",25),f.cc("closePreview",function(){return f.Ec(n),f.gc().onFileClose()}),f.Ub(),f.Ub()}if(2&n){const n=f.gc();f.Db(1),f.nc("fileOption",n.previewFile)}}const L=function(){return[]},N=function(n){return{height:250,menubar:!1,plugins:n,toolbar:"bold italic backcolor | alignleft aligncenter alignright alignjustify"}};let R=(()=>{class n extends I.a{constructor(n,t,e,o){super(n),this.commonService=n,this.teacherQuestionService=t,this.apiUploadService=e,this.fb=o,this.closeFormInputAnswer=new f.o,this.fetchNewData=new f.o,this.isLoading=!1,this.form=new i.k({}),this.loadingUpload=!1,this.uploadProgress=-1,this.filesUploaded=[],this.previewFile={},this.isShowPreviewFile=!1}cleanContent(){let n=this.form.controls.content.value.replace(/<img .*?>/gim,"");this.form.controls.content.setValue(n)}uploadFile(n){n&&(Object(Q.k)(n.type)?(this.loadingUpload=!0,this.uploadProgress=0,Object(Q.a)(n).then(t=>{this.apiUploadService.uploadToCdnForAnswerQA(t).subscribe(t=>{t.type!=S.d.UploadProgress&&(1==t.success?(this.loadingUpload=!1,this.uploadProgress=-1,t.data&&this.filesUploaded.push(t.data)):(this.loadingUpload=!1,this.commonService.snackError("Kh\xf4ng Upload \u0111\u01b0\u1ee3c \u1ea3nh (T\xean: "+n.name+")! Vui l\xf2ng th\u1eed l\u1ea1i sau! L\u1ed7i:  [SPLIT_LANG]"+t.message,"")))})})):this.commonService.snackError("\u0110\u1ecbnh d\u1ea1ng file kh\xf4ng \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3!",""))}onFileClose(){this.isShowPreviewFile=!1,this.previewFile={}}onShowFile(n,t){this.isShowPreviewFile=!0,this.previewFile=Object.assign(Object.assign({},n),{index:t})}onFileSelected(n){let t=!!n&&n[0];0!=t&&this.uploadFile(t)}saveAnswer(){let n=this.commonService.getFormObj(this.form);if(this.form.invalid)this.commonService.snackError("Vui l\xf2ng nh\u1eadp n\u1ed9i dung c\xe2u tr\u1ea3 l\u1eddi","");else{this.cleanContent(),this.isLoading=!0;var t={assetGroupId:this.assetGroupId,content:n.content,files:JSON.stringify(this.filesUploaded)};this.subscriptions.add(this.teacherQuestionService.apiTeacherQuestionSaveAnswerObjPost(t).subscribe(n=>{n.success?(this.commonService.snackSuccess("G\u1eedi c\xe2u tr\u1ea3 l\u1eddi th\xe0nh c\xf4ng",""),this.fetchNewData.emit(),this.isLoading=!1,this.cancelAnswer()):(this.commonService.snackError("G\u1eedi c\xe2u tr\u1ea3 l\u1eddi kh\xf4ng th\xe0nh c\xf4ng",""),this.isLoading=!1)}))}}removeAttach(n){let t=this.filesUploaded.indexOf(n);this.filesUploaded.splice(t,1)}cancelAnswer(){this.form.controls.content.setValue(""),this.file=null,this.closeFormInputAnswer.emit()}ngOnInit(){this.form=this.fb.group({File:new i.h(""),content:new i.h("",[i.z.required])}),super.ngOnInit()}}return n.\u0275fac=function(t){return new(t||n)(f.Pb(h.a),f.Pb(k.e),f.Pb(U.a),f.Pb(i.g))},n.\u0275cmp=f.Jb({type:n,selectors:[["form-input-answer-teacher"]],inputs:{assetGroupId:"assetGroupId"},outputs:{closeFormInputAnswer:"closeFormInputAnswer",fetchNewData:"fetchNewData"},features:[f.Ab],decls:33,vars:23,consts:[[1,"form-horizontal","text-center",3,"formGroup"],[1,"create-answer"],[1,"answer-editor"],["formControlName","content","apiKey","ldij13v1886vlrnk42g9bvngyqdc6gxpe8l0n9mo8gdjpg9d",3,"init"],[1,"answer-upload"],["id","dropzoneAreaFrame",1,"text-center","v-dragndrop","dropzone","dz-started","cur-po",3,"click"],["appDragDrop","",1,"px-4","py-3","rounded",3,"filesChangeEmiter"],[1,"file"],["id","select-upload-file",1,"align-self-center","select","dz-clickable"],["type","file","formControlName","File",1,"form-control","file-input",3,"change"],["fileSelect",""],[1,"d-block","text-dark-green"],[1,"answer-save"],[1,"mt-1","text-left"],[1,"attachs"],[4,"ngIf"],["class","spinner-border spinner-border-sm","role","status",4,"ngIf"],[1,"answer-buttons"],[1,"btn-cannel",3,"click"],[1,"btn-save",3,"disabled","click"],["class","att-item",4,"ngFor","ngForOf"],[1,"att-item"],[1,"image-preview","truncate",3,"matTooltip","click"],[1,"fas","fa-window-close",3,"matTooltip","click"],["role","status",1,"spinner-border","spinner-border-sm"],[3,"fileOption","closePreview"]],template:function(n,t){if(1&n){const n=f.Wb();f.Vb(0,"form",0),f.Vb(1,"div",1),f.Vb(2,"div",2),f.Qb(3,"editor",3),f.Ub(),f.Vb(4,"div",4),f.Vb(5,"div",5),f.cc("click",function(){return f.Ec(n),f.Ac(12).click()}),f.Vb(6,"div",6),f.cc("filesChangeEmiter",function(n){return t.onFileSelected(n)}),f.Vb(7,"div",7),f.Vb(8,"a",8),f.Vb(9,"mat-icon"),f.Tc(10,"cloud_upload"),f.Ub(),f.Ub(),f.Vb(11,"input",9,10),f.cc("change",function(n){return t.onFileSelected(n.target.files)}),f.Ub(),f.Vb(13,"span",11),f.Tc(14),f.hc(15,"mytranslate"),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Vb(16,"div",12),f.Vb(17,"h4",13),f.Tc(18),f.hc(19,"mytranslate"),f.Ub(),f.Vb(20,"div",14),f.Rc(21,q,2,1,"ng-container",15),f.Tc(22," \xa0 "),f.Rc(23,T,1,0,"span",16),f.Ub(),f.Vb(24,"div",17),f.Vb(25,"button",18),f.cc("click",function(){return t.cancelAnswer()}),f.Tc(26),f.hc(27,"mytranslate"),f.Ub(),f.Vb(28,"button",19),f.cc("click",function(){return t.saveAnswer()}),f.Rc(29,E,3,0,"span",15),f.Tc(30),f.hc(31,"mytranslate"),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Rc(32,G,2,1,"div",15)}2&n&&(f.nc("formGroup",t.form),f.Db(3),f.nc("init",f.tc(21,N,f.sc(20,L))),f.Db(11),f.Uc(f.ic(15,12,"lang_teacher_qa_form_input_answer_note_tutorial")),f.Db(4),f.Wc("",f.ic(19,14,"lang_teacher_qa_form_input_answer_title_file")," (",t.filesUploaded.length,")"),f.Db(3),f.nc("ngIf",t.filesUploaded.length>0),f.Db(2),f.nc("ngIf",t.loadingUpload),f.Db(3),f.Uc(f.ic(27,16,"lang_buttom_cancel")),f.Db(2),f.nc("disabled",t.isLoading),f.Db(1),f.nc("ngIf",t.isLoading),f.Db(1),f.Vc(" ",f.ic(31,18,"lang_buttom_send")," "),f.Db(2),f.nc("ngIf",t.isShowPreviewFile))},directives:[i.B,i.s,i.l,r.a,i.r,i.j,A.a,z.a,i.d,o.m,o.l,V.a,F.a],pipes:[x.t],styles:["button[_ngcontent-%COMP%]{border:none;text-transform:none}.question-title[_ngcontent-%COMP%]{font-weight:600;margin-bottom:10px}.question-info[_ngcontent-%COMP%]{display:flex;align-items:center}.question-text[_ngcontent-%COMP%]{font-size:13px;color:#9a9a9a;margin-right:10px}.question-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.block-list-answer[_ngcontent-%COMP%], .question-content[_ngcontent-%COMP%]{margin-top:15px}.answer-count[_ngcontent-%COMP%]{font-size:18px;color:#333}.block-answer[_ngcontent-%COMP%]{display:flex;margin-top:15px;padding-bottom:10px;border-bottom:1px solid #d0d0d0}.block-answer-left[_ngcontent-%COMP%]{margin-right:10px}.count-view[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ddd;border-radius:5px;display:flex;justify-content:center;align-items:center;padding:6px}.count-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.true-answer[_ngcontent-%COMP%]{color:#0ca74a}.true-answer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.block-answer-right[_ngcontent-%COMP%]{padding-right:15px}.confirm[_ngcontent-%COMP%]{padding:6px 7px;background:#e8e8e8;border-radius:5px;font-size:12px}.btn-unconfirm[_ngcontent-%COMP%]{color:#00a7d0;background:transparent;transition:all .5s}.btn-unconfirm[_ngcontent-%COMP%]:hover{color:#026680;font-weight:700}.btn-confirm[_ngcontent-%COMP%]{background:#169bd5;color:#fff;font-size:13px;transition:all .5s;border-radius:5px;padding:5px 7px 5px 20px}.btn-confirm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;font-size:20px}.btn-confirm[_ngcontent-%COMP%]:hover{background:#0b6992}.block-answer-bottom[_ngcontent-%COMP%]{margin-top:15px;justify-content:flex-end}.block-answer-bottom[_ngcontent-%COMP%], .user-info[_ngcontent-%COMP%]{display:flex;align-items:center}.time-ago[_ngcontent-%COMP%]{color:#868686;font-size:10px;margin-bottom:0}.btn-all-add[_ngcontent-%COMP%]{color:#00a7d0}.answer-upload[_ngcontent-%COMP%], .create-answer[_ngcontent-%COMP%]{margin-top:20px}.upload-file[_ngcontent-%COMP%]{background-color:#fff;height:100px;display:flex;justify-content:center;align-items:center}.upload-file-text[_ngcontent-%COMP%]{font-size:16px}.image-preview[_ngcontent-%COMP%]{cursor:pointer}.answer-editor[_ngcontent-%COMP%]{min-height:250px}.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]{flex:auto;margin-right:15px;margin-top:15px;display:flex;flex-wrap:wrap}.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]   .att-item[_ngcontent-%COMP%]{max-width:250px;margin-right:20px;display:flex;align-items:center}.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]   .att-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-style:italic;display:block;text-decoration:underline}.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]   .att-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:rgba(255,0,0,.7098039215686275);margin-left:5px}.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]   .att-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{cursor:pointer;color:red}.answer-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.btn-cannel[_ngcontent-%COMP%], .btn-save[_ngcontent-%COMP%]{font-size:12px;border-radius:5px;padding:5px 25px;transition:all .5s}.btn-save[_ngcontent-%COMP%]{border:none;background:#169bd5;margin-left:10px;color:#fff;padding:6px 25px}.btn-save[_ngcontent-%COMP%]:hover:not([disabled]){background:#066d99}.btn-cannel[_ngcontent-%COMP%]{border:1px solid #797979;color:#797979}.btn-cannel[_ngcontent-%COMP%]:hover{background:#a1a1a1}.btn-save[_ngcontent-%COMP%]:disabled{background:#e0e0e0!important}.file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px;vertical-align:super}.v-dragndrop[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background:rgba(27,171,161,.05);border:1px dashed #1baba1}.v-dragndrop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500}.file-input[_ngcontent-%COMP%]{display:none}.dz-clickable[_ngcontent-%COMP%]{cursor:pointer;color:#007bff}.font-size-1[_ngcontent-%COMP%]{font-size:15px}.fileinfo[_ngcontent-%COMP%]{width:200px;border:1px dashed #1baba1;background:#f0f8ff}.fileinfo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px}.fileinfo[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.fileinfo[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]{background:#f71414;color:#fff;padding:2px 20px;border:none;border-radius:5px;margin-top:5px}.is-dragover[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{background-color:#c8e6c9}"]}),n})();function B(n,t){if(1&n){const n=f.Wb();f.Vb(0,"button",4),f.cc("click",function(){return f.Ec(n),f.gc().isShowFormInputAnswer=!0}),f.Tc(1,"+ Tr\u1ea3 l\u1eddi"),f.Ub()}}function W(n,t){if(1&n){const n=f.Wb();f.Vb(0,"button",8),f.cc("click",function(){return f.Ec(n),f.gc(2).clickRelate("prev")}),f.Qb(1,"i",9),f.Ub()}}function J(n,t){if(1&n){const n=f.Wb();f.Vb(0,"button",10),f.cc("click",function(){return f.Ec(n),f.gc(2).clickRelate("next")}),f.Qb(1,"i",11),f.Ub()}}function K(n,t){if(1&n&&(f.Vb(0,"div",5),f.Rc(1,W,2,0,"button",6),f.Rc(2,J,2,0,"button",7),f.Ub()),2&n){const n=f.gc();f.Db(1),f.nc("ngIf",n.previousQuestionId),f.Db(1),f.nc("ngIf",n.nextQuestionId)}}function X(n,t){if(1&n){const n=f.Wb();f.Vb(0,"form-input-answer-teacher",12),f.cc("fetchNewData",function(){return f.Ec(n),f.gc().getData()})("closeFormInputAnswer",function(){return f.Ec(n),f.gc().isShowFormInputAnswer=!1}),f.Ub()}if(2&n){const n=f.gc();f.nc("assetGroupId",n.assetGroupStatisticObj.assetGroupId)}}const Z=[{path:"",component:w,canActivate:[p.a],children:[{path:"",canActivateChild:[p.a],children:[{path:"view-question/:id",component:(()=>{class n extends I.a{constructor(n,t,e,o,i){super(t),this.activeRoute=n,this.commonService=t,this._location=e,this.localStorageObjetct=o,this.teacherQuestionService=i,this.subscriptions=new M.a,this.isLoading=!1,this.isShowFormInputAnswer=!1,this.studentAnswerObj={}}getData(){this.isLoading=!0;let n=Number(this.activeRoute.snapshot.paramMap.get("id"));this.subscriptions.add(this.teacherQuestionService.apiTeacherQuestionGetAnswerObjsGet(n,1).subscribe(n=>{var t,e,o,i,c,s,r,a,l,d,g,u,b,p,f,h,m,O;n.success?(this.curQuestionObj=null!==(e=null===(t=n.data)||void 0===t?void 0:t.curQuestionObj)&&void 0!==e?e:{},this.assetGroupStatisticObj=null!==(i=null===(o=n.data)||void 0===o?void 0:o.assetGroupStatisticObj)&&void 0!==i?i:{},this.assetObjectObj=null!==(s=null===(c=n.data)||void 0===c?void 0:c.assetObjectObj)&&void 0!==s?s:{},this.answerObjs=null!==(a=null===(r=n.data)||void 0===r?void 0:r.answerObjs)&&void 0!==a?a:[],this.studentAnswerObj=null!==(d=null===(l=n.data)||void 0===l?void 0:l.studentAnswerObj)&&void 0!==d?d:{},this.answerObjs.forEach(n=>{var t,e;n.files&&(n.fileObjs=null!==(e=this.castJsonToObj(null!==(t=n.files)&&void 0!==t?t:""))&&void 0!==e?e:[])}),this.sortAnswer(),this.nextQuestionId=null!==(u=null===(g=n.data)||void 0===g?void 0:g.nextQuestionId)&&void 0!==u?u:0,this.questionIds=null!==(p=null===(b=n.data)||void 0===b?void 0:b.questionIds)&&void 0!==p?p:[],this.previousQuestionId=null!==(h=null===(f=n.data)||void 0===f?void 0:f.previousQuestionId)&&void 0!==h?h:0,this.isEndPage=null!==(O=null===(m=n.data)||void 0===m?void 0:m.isEndPage)&&void 0!==O?O:0,this.isLoading=!1):(this.commonService.snackError("C\xf3 l\u1ed7i khi xem chi ti\u1ebft c\xe2u h\u1ecfi",""),this.isLoading=!1)}))}sortAnswer(){this.answerObjs.sort((n,t)=>{var e,o;return(null!==(e=t.totalAccept)&&void 0!==e?e:0)-(null!==(o=n.totalAccept)&&void 0!==o?o:0)})}clickRelate(n){this.subscriptions.add(this.teacherQuestionService.apiTeacherQuestionGetQuestionObjGet("next"==n?this.nextQuestionId:this.previousQuestionId).subscribe(n=>{var t,e,o,i,c,s;n.success?(this.curQuestionObj=null!==(e=null===(t=n.data)||void 0===t?void 0:t.curQuestionObj)&&void 0!==e?e:{},this.nextQuestionId=null!==(i=null===(o=n.data)||void 0===o?void 0:o.nextQuestionId)&&void 0!==i?i:0,this.previousQuestionId=null!==(s=null===(c=n.data)||void 0===c?void 0:c.previousQuestionId)&&void 0!==s?s:0):this.commonService.snackError("C\xf3 l\u1ed7i khi xem chi ti\u1ebft c\xe2u h\u1ecfi","")}))}backClicked(){this._location.back()}deleteQuestion(n){this.teacherQuestionService.apiTeacherQuestionDeleteObjGet(n).subscribe(n=>{n.success?(this.nextQuestionId?this.clickRelate("next"):this.previousQuestionId&&!this.nextQuestionId?this.clickRelate("prev"):this.previousQuestionId||this.nextQuestionId||this.commonService.myNavigation("/admin/testbank/dashboard"),this.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetAnswerObjs"),this.commonService.snackSuccess("X\xf3a c\xe2u h\u1ecfi th\xe0nh c\xf4ng","")):this.commonService.snackError("X\xf3a c\xe2u h\u1ecfi kh\xf4ng th\xe0nh c\xf4ng","")})}ngOnInit(){this.commonService.translateMetaData({title:"lang_cms_view_question_student_title",description:"lang_cms_view_question_student_description",image:"lang_cms_test_image"}),this.getData(),super.ngOnInit()}}return n.\u0275fac=function(t){return new(t||n)(f.Pb(s.a),f.Pb(h.a),f.Pb(o.i),f.Pb(j.a),f.Pb(k.e))},n.\u0275cmp=f.Jb({type:n,selectors:[["app-teacher-view-question"]],features:[f.Ab],decls:4,vars:12,consts:[[3,"isBackend","totalQuestion","studentAnswerObj","curQuestionObj","answerObjs","assetGroupStatisticObj","assetObjectObj","isEndPage","isLoading","sendEvent"],["buttonShowFormInput","","class","btn btn-primary",3,"click",4,"ngIf"],["nextBack","","id","nextBack",4,"ngIf"],["answerInput","",3,"assetGroupId","fetchNewData","closeFormInputAnswer",4,"ngIf"],["buttonShowFormInput","",1,"btn","btn-primary",3,"click"],["nextBack","","id","nextBack"],["id","buttonPrev","class","btn btn-info",3,"click",4,"ngIf"],["id","buttonNext","class","btn btn-info",3,"click",4,"ngIf"],["id","buttonPrev",1,"btn","btn-info",3,"click"],[1,"fas","fa-angle-left",2,"font-size","18px"],["id","buttonNext",1,"btn","btn-info",3,"click"],[1,"fas","fa-angle-right",2,"font-size","18px"],["answerInput","",3,"assetGroupId","fetchNewData","closeFormInputAnswer"]],template:function(n,t){1&n&&(f.Vb(0,"azt-view-answer-question",0),f.cc("sendEvent",function(n){return t.deleteQuestion(n)}),f.Rc(1,B,2,0,"button",1),f.Rc(2,K,3,2,"div",2),f.Rc(3,X,1,1,"form-input-answer-teacher",3),f.Ub()),2&n&&(f.nc("isBackend",!0)("totalQuestion",null==t.questionIds?null:t.questionIds.length)("studentAnswerObj",t.studentAnswerObj)("curQuestionObj",t.curQuestionObj)("answerObjs",t.answerObjs)("assetGroupStatisticObj",t.assetGroupStatisticObj)("assetObjectObj",t.assetObjectObj)("isEndPage",t.isEndPage)("isLoading",t.isLoading),f.Db(1),f.nc("ngIf",!t.isShowFormInputAnswer),f.Db(1),f.nc("ngIf",t.previousQuestionId||t.nextQuestionId),f.Db(1),f.nc("ngIf",t.isShowFormInputAnswer))},directives:[y.a,o.m,R],styles:[".block-list[_ngcontent-%COMP%]{background:#ececec;padding:10px;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.14)}.block-list-bottom[_ngcontent-%COMP%]{margin:10px 0}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]{border:none;display:flex;align-items:center;color:#707070;background:transparent}.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%]{text-transform:none;margin-left:2px}button[_ngcontent-%COMP%]{border:none;text-transform:none}.block-else[_ngcontent-%COMP%]{height:90px;display:flex;justify-content:center;align-items:center;border-radius:5px}.text-else[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.question-title[_ngcontent-%COMP%]{font-weight:600;margin-bottom:10px}.question-info[_ngcontent-%COMP%]{display:flex;align-items:center}.question-text[_ngcontent-%COMP%]{font-size:13px;color:#9a9a9a;margin-right:10px}.question-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.block-list-answer[_ngcontent-%COMP%], .question-content[_ngcontent-%COMP%]{margin-top:15px}.answer-count[_ngcontent-%COMP%]{font-size:18px;color:#333}.block-answer[_ngcontent-%COMP%]{display:flex;margin-top:15px;padding-bottom:10px;border-bottom:1px solid #d0d0d0}.block-answer-left[_ngcontent-%COMP%]{margin-right:10px}.count-view[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ddd;border-radius:5px;display:flex;justify-content:center;align-items:center;padding:6px}.count-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.true-answer[_ngcontent-%COMP%]{color:#0ca74a}.true-answer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.block-answer-right[_ngcontent-%COMP%]{padding-right:15px}.confirm[_ngcontent-%COMP%]{padding:6px 7px;background:#e8e8e8;border-radius:5px;font-size:12px}.btn-unconfirm[_ngcontent-%COMP%]{color:#00a7d0;background:transparent;transition:all .5s}.btn-unconfirm[_ngcontent-%COMP%]:hover{color:#026680;font-weight:700}.btn-confirm[_ngcontent-%COMP%]{background:#169bd5;color:#fff;font-size:13px;transition:all .5s;border-radius:5px;padding:5px 7px 5px 20px}.btn-confirm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;font-size:20px}.btn-confirm[_ngcontent-%COMP%]:hover{background:#0b6992}.block-answer-bottom[_ngcontent-%COMP%]{margin-top:15px;justify-content:flex-end}.block-answer-bottom[_ngcontent-%COMP%], .user-info[_ngcontent-%COMP%]{display:flex;align-items:center}.time-ago[_ngcontent-%COMP%]{color:#868686;font-size:10px;margin-bottom:0}.btn-all-add[_ngcontent-%COMP%]{color:#00a7d0}.answer-upload[_ngcontent-%COMP%], .create-answer[_ngcontent-%COMP%]{margin-top:20px}.upload-file[_ngcontent-%COMP%]{background-color:#fff;height:100px;display:flex;justify-content:center;align-items:center}.upload-file-text[_ngcontent-%COMP%]{font-size:16px}.answer-editor[_ngcontent-%COMP%]{min-height:250px}.answer-save[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:15px}.btn-cannel[_ngcontent-%COMP%], .btn-save[_ngcontent-%COMP%]{font-size:12px;border-radius:5px;padding:5px 25px;transition:all .5s}.btn-save[_ngcontent-%COMP%]{border:none;background:#169bd5;margin-left:10px;color:#fff;padding:6px 25px}.btn-save[_ngcontent-%COMP%]:hover:not([disabled]){background:#066d99}.btn-cannel[_ngcontent-%COMP%]{border:1px solid #797979;color:#797979}.btn-cannel[_ngcontent-%COMP%]:hover{background:#eee}.btn-save[_ngcontent-%COMP%]:disabled{background:#e0e0e0!important}.file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px;vertical-align:super}.v-dragndrop[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background:rgba(27,171,161,.05);border:1px dashed #1baba1}.v-dragndrop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500}.file-input[_ngcontent-%COMP%]{display:none}.dz-clickable[_ngcontent-%COMP%]{cursor:pointer;color:#007bff}.font-size-1[_ngcontent-%COMP%]{font-size:15px}.fileinfo[_ngcontent-%COMP%]{width:200px;border:1px dashed #1baba1;background:#f0f8ff}.fileinfo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px}.fileinfo[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.fileinfo[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]{background:#f71414;color:#fff;padding:2px 20px;border:none;border-radius:5px;margin-top:5px}.is-dragover[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{background-color:#c8e6c9}#nextBack[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:50%;margin-top:-18px;width:20px;right:-26px;background-color:rgba(24,162,184,.4117647058823529)}#nextBack[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#18a2b8}#nextBack[_ngcontent-%COMP%]   button#buttonPrev[_ngcontent-%COMP%]{left:-26px}"]}),n})()},{path:"list-questions",component:C}]}]}];let $=(()=>{class n{}return n.\u0275mod=f.Nb({type:n}),n.\u0275inj=f.Mb({factory:function(t){return new(t||n)},imports:[[s.l.forChild(Z)],s.l,b.c]}),n})(),H=(()=>{class n{}return n.\u0275mod=f.Nb({type:n}),n.\u0275inj=f.Mb({factory:function(t){return new(t||n)},imports:[[s.l,o.c,g.a,r.b,i.m,i.x,c.f,u.a,a.b,l.b,$,d.a]]}),n})()}}]);