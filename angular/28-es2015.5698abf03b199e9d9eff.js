(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"3u6u":function(n,t,e){"use strict";e.r(t),e.d(t,"TeacherQAModule",function(){return K});var o=e("tyNb"),i=e("ofXK"),c=e("vvyD"),r=e("3Pt+"),s=e("fB2i"),a=e("0IaG"),l=e("mYPf"),d=e("IkSl"),g=e("AeZ5"),p=e("Avyq"),b=e("quSY"),u=e("fXoL"),f=e("gbi4"),h=e("yTNM"),m=e("diKk"),P=e("BTbT"),O=e("NFeN"),x=e("Qu3c"),_=e("wAhq"),C=e("gaSO");function M(n,t){if(1&n){const n=u.Wb();u.Vb(0,"div",20),u.Vb(1,"img",21),u.cc("click",function(e){u.Dc(n);const o=t.$implicit;return u.gc(2).onShowFile(e,o,-1)}),u.hc(2,"mycdn"),u.Ub(),u.Vb(3,"i",22),u.cc("click",function(){u.Dc(n);const e=t.$implicit;return u.gc(2).removeAttach(e.url)}),u.Ub(),u.Ub()}if(2&n){const n=t.$implicit;u.Db(1),u.oc("src",u.ic(2,1,n.url),u.Hc)}}function w(n,t){if(1&n&&(u.Tb(0),u.Pc(1,M,4,3,"div",19),u.Sb()),2&n){const n=u.gc();u.Db(1),u.nc("ngForOf",n.filesUploaded)}}function v(n,t){1&n&&u.Qb(0,"span",23)}function k(n,t){1&n&&(u.Vb(0,"span"),u.Qb(1,"span",23),u.Rc(2,"\xa0"),u.Ub())}function y(n,t){if(1&n){const n=u.Wb();u.Vb(0,"div"),u.Vb(1,"azt-preview-media",24),u.cc("closePreview",function(){return u.Dc(n),u.gc().onFileClose()}),u.Ub(),u.Ub()}if(2&n){const n=u.gc();u.Db(1),u.nc("fileOption",n.previewFile)}}const I=function(){return{standalone:!0}},j=function(){return[]},S=function(n){return{height:250,menubar:!1,plugins:n,toolbar:"bold italic backcolor | alignleft aligncenter alignright alignjustify"}};let z=(()=>{class n{constructor(n,t,e,o,i,c){this.activeRoute=n,this.commonService=t,this.apiService=e,this.router=o,this.fb=i,this.vps=c,this.closeFormInputAnswer=new u.o,this.fetchNewData=new u.o,this.subscriptions=new b.a,this.isLoading=!1,this.form=new r.k({}),this.tinymceInit={},this.content="",this.loadingUpload=!1,this.uploadProgress=-1,this.filesUploaded=[],this.previewFile={},this.isShowPreviewFile=!1}cleanContent(){let n=this.content.replace(/<img .*?>/gim,"");this.content=n}uploadFile(n){n&&(Object(P.i)(n.type)?(this.loadingUpload=!0,this.uploadProgress=0,Object(P.a)(n).then(n=>{this.apiService.uploadToCdnProgressForAnswerQA(n).subscribe(n=>{1==n.success?(this.loadingUpload=!1,this.uploadProgress=-1,this.filesUploaded.push(n.data)):n.hasOwnProperty("success")&&(this.loadingUpload=!1,this.commonService.snackError("Kh\xf4ng Upload \u0111\u01b0\u1ee3c \u1ea3nh! Vui l\xf2ng th\u1eed l\u1ea1i sau! L\u1ed7i: "+n.message,""))},n=>{this.commonService.snackError("L\u1ed7i: "+n.subString(0,50),"")})})):this.commonService.snackError("Vui l\xf2ng ch\u1ec9 t\u1ea3i l\xean \u0111\u1ecbnh d\u1ea1ng file \u1ea3nh",""))}onFileClose(){this.isShowPreviewFile=!1,this.previewFile={}}onShowFile(n,t,e){this.isShowPreviewFile=!0,this.previewFile=Object.assign(Object.assign({},t),{index:e})}onFileSelected(n){let t=n,e=t.target.files,o=!!e&&e[0];0!=o&&this.uploadFile(o),t.target.value=null}removeFile(n){n.stopPropagation(),this.file=null}loadEventDropFile(){var n=jQuery("#dropzoneAreaFrame");n.on("drag dragstart dragend dragover dragenter dragleave drop",n=>{n.preventDefault(),n.stopPropagation()}).on("dragover dragenter",function(){n.addClass("is-dragover")}).on("dragleave dragend drop",function(){n.removeClass("is-dragover")}).on("drop",n=>{var t=n.originalEvent.dataTransfer.files;console.log(t),this.file=t?t[0]:this.file,this.uploadFile(this.file)})}saveAnswer(){this.content?(this.cleanContent(),this.isLoading=!0,this.subscriptions.add(this.apiService.saveTeacherAnswerObj({assetGroupId:this.assetGroupId,content:this.content,files:JSON.stringify(this.filesUploaded)}).subscribe(n=>{n.success?(this.commonService.snackSuccess("G\u1eedi c\xe2u tr\u1ea3 l\u1eddi th\xe0nh c\xf4ng",""),this.fetchNewData.emit(),this.isLoading=!1,this.cancelAnswer()):(this.commonService.snackError("G\u1eedi c\xe2u tr\u1ea3 l\u1eddi kh\xf4ng th\xe0nh c\xf4ng",""),this.isLoading=!1)}))):this.commonService.snackError("Vui l\xf2ng nh\u1eadp n\u1ed9i dung c\xe2u tr\u1ea3 l\u1eddi","")}removeAttach(n){let t=this.filesUploaded.indexOf(n);this.filesUploaded.splice(t,1)}cancelAnswer(){this.content="",this.file=null,this.closeFormInputAnswer.emit()}ngOnInit(){this.form=this.fb.group({File:new r.h("")}),setTimeout(()=>{this.loadEventDropFile()},0),this.tinymceInit={branding:!1,height:250,image_advtab:!0,imagetools_toolbar:"\n            rotateleft rotateright |\n            flipv fliph | \n            editimage imageoptions",importcss_append:!0,inline:!1,menubar:!1,paste_data_images:!0,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"\n            undo redo | formatselect | bold italic backcolor |             alignleft aligncenter alignright alignjustify |             bullist numlist outdent indent | removeformat | help"}}}return n.\u0275fac=function(t){return new(t||n)(u.Pb(o.a),u.Pb(f.a),u.Pb(h.a),u.Pb(o.a),u.Pb(r.g),u.Pb(i.w))},n.\u0275cmp=u.Jb({type:n,selectors:[["form-input-answer-teacher"]],inputs:{assetGroupId:"assetGroupId"},outputs:{closeFormInputAnswer:"closeFormInputAnswer",fetchNewData:"fetchNewData"},decls:27,vars:13,consts:[[1,"form-horizontal","text-center",3,"formGroup"],[1,"create-answer"],[1,"answer-editor"],["apiKey","ldij13v1886vlrnk42g9bvngyqdc6gxpe8l0n9mo8gdjpg9d",3,"ngModel","ngModelOptions","init","ngModelChange"],[1,"answer-upload"],["id","dropzoneAreaFrame",1,"text-center","v-dragndrop","dropzone","dz-started","cur-po",3,"click"],[1,"px-4","py-3","rounded"],[1,"file"],["id","select-upload-file",1,"align-self-center","select","dz-clickable"],["type","file","formControlName","File",1,"form-control","file-input",3,"change"],["fileSelect",""],[1,"d-block","text-dark-green"],[1,"answer-save"],[1,"attachs"],[4,"ngIf"],["class","spinner-border spinner-border-sm","role","status",4,"ngIf"],[1,"answer-buttons"],[1,"btn-cannel",3,"click"],[1,"btn-save",3,"disabled","click"],["class","att-item",4,"ngFor","ngForOf"],[1,"att-item"],["alt","image preview",1,"image-preview",3,"src","click"],["matTooltip","B\u1ecf \u1ea3nh n\xe0y",1,"fas","fa-window-close",3,"click"],["role","status",1,"spinner-border","spinner-border-sm"],[3,"fileOption","closePreview"]],template:function(n,t){if(1&n){const n=u.Wb();u.Vb(0,"form",0),u.Vb(1,"div",1),u.Vb(2,"div",2),u.Vb(3,"editor",3),u.cc("ngModelChange",function(n){return t.content=n}),u.Ub(),u.Ub(),u.Vb(4,"div",4),u.Vb(5,"div",5),u.cc("click",function(){return u.Dc(n),u.zc(12).click()}),u.Vb(6,"div",6),u.Vb(7,"div",7),u.Vb(8,"a",8),u.Vb(9,"mat-icon"),u.Rc(10,"cloud_upload"),u.Ub(),u.Ub(),u.Vb(11,"input",9,10),u.cc("change",function(n){return t.onFileSelected(n)}),u.Ub(),u.Vb(13,"span",11),u.Rc(14,"K\xe9o th\u1ea3 file ho\u1eb7c Click \u0111\u1ec3 ch\u1ecdn file"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(15,"div",12),u.Vb(16,"div",13),u.Pc(17,w,2,1,"ng-container",14),u.Rc(18," \xa0 "),u.Pc(19,v,1,0,"span",15),u.Ub(),u.Vb(20,"div",16),u.Vb(21,"button",17),u.cc("click",function(){return t.cancelAnswer()}),u.Rc(22,"H\u1ee7y"),u.Ub(),u.Vb(23,"button",18),u.cc("click",function(){return t.saveAnswer()}),u.Pc(24,k,3,0,"span",14),u.Rc(25," L\u01b0u "),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Pc(26,y,2,1,"div",14)}2&n&&(u.nc("formGroup",t.form),u.Db(3),u.nc("ngModel",t.content)("ngModelOptions",u.rc(9,I))("init",u.sc(11,S,u.rc(10,j))),u.Db(14),u.nc("ngIf",t.filesUploaded.length>0),u.Db(2),u.nc("ngIf",t.loadingUpload),u.Db(4),u.nc("disabled",t.isLoading),u.Db(1),u.nc("ngIf",t.isLoading),u.Db(2),u.nc("ngIf",t.isShowPreviewFile))},directives:[r.B,r.s,r.l,s.a,r.r,r.u,O.a,r.d,r.j,i.m,i.l,x.a,_.a],pipes:[C.n],styles:[".block-list[_ngcontent-%COMP%]{background:#ececec;padding:10px;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.14)}.block-list-bottom[_ngcontent-%COMP%]{margin:10px 0}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]{border:none;display:flex;align-items:center;color:#707070;background:transparent}.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%]{text-transform:none;margin-left:2px}button[_ngcontent-%COMP%]{border:none;text-transform:none}.block-else[_ngcontent-%COMP%]{height:90px;display:flex;justify-content:center;align-items:center;border-radius:5px}.text-else[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.question-title[_ngcontent-%COMP%]{font-weight:600;margin-bottom:10px}.question-info[_ngcontent-%COMP%]{display:flex;align-items:center}.question-text[_ngcontent-%COMP%]{font-size:13px;color:#9a9a9a;margin-right:10px}.question-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.block-list-answer[_ngcontent-%COMP%], .question-content[_ngcontent-%COMP%]{margin-top:15px}.answer-count[_ngcontent-%COMP%]{font-size:18px;color:#333}.block-answer[_ngcontent-%COMP%]{display:flex;margin-top:15px;padding-bottom:10px;border-bottom:1px solid #d0d0d0}.block-answer-left[_ngcontent-%COMP%]{margin-right:10px}.count-view[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ddd;border-radius:5px;display:flex;justify-content:center;align-items:center;padding:6px}.count-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.true-answer[_ngcontent-%COMP%]{color:#0ca74a}.true-answer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.block-answer-right[_ngcontent-%COMP%]{padding-right:15px}.confirm[_ngcontent-%COMP%]{padding:6px 7px;background:#e8e8e8;border-radius:5px;font-size:12px}.btn-unconfirm[_ngcontent-%COMP%]{color:#00a7d0;background:transparent;transition:all .5s}.btn-unconfirm[_ngcontent-%COMP%]:hover{color:#026680;font-weight:700}.btn-confirm[_ngcontent-%COMP%]{background:#169bd5;color:#fff;font-size:13px;transition:all .5s;border-radius:5px;padding:5px 7px 5px 20px}.btn-confirm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;font-size:20px}.btn-confirm[_ngcontent-%COMP%]:hover{background:#0b6992}.block-answer-bottom[_ngcontent-%COMP%]{margin-top:15px;justify-content:flex-end}.block-answer-bottom[_ngcontent-%COMP%], .user-info[_ngcontent-%COMP%]{display:flex;align-items:center}.time-ago[_ngcontent-%COMP%]{color:#868686;font-size:10px;margin-bottom:0}.btn-all-add[_ngcontent-%COMP%]{color:#00a7d0}.answer-upload[_ngcontent-%COMP%], .create-answer[_ngcontent-%COMP%]{margin-top:20px}.upload-file[_ngcontent-%COMP%]{background-color:#fff;height:100px;display:flex;justify-content:center;align-items:center}.upload-file-text[_ngcontent-%COMP%]{font-size:16px}.image-preview[_ngcontent-%COMP%]{cursor:pointer}.answer-editor[_ngcontent-%COMP%]{min-height:250px}.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]{flex:auto;margin-right:15px;margin-top:15px;display:flex;flex-wrap:wrap}.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]   .att-item[_ngcontent-%COMP%]{width:100px;height:70px;overflow:hidden;margin-right:5px;border:1px solid #ddd;position:relative}.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]   .att-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]   .att-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;right:0;top:0;color:rgba(255,0,0,.7098039215686275)}.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]   .att-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{cursor:pointer;color:red}.answer-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.btn-cannel[_ngcontent-%COMP%], .btn-save[_ngcontent-%COMP%]{font-size:12px;border-radius:5px;padding:5px 25px;transition:all .5s}.btn-save[_ngcontent-%COMP%]{border:none;background:#169bd5;margin-left:10px;color:#fff;padding:6px 25px}.btn-save[_ngcontent-%COMP%]:hover:not([disabled]){background:#066d99}.btn-cannel[_ngcontent-%COMP%]{border:1px solid #797979;color:#797979}.btn-cannel[_ngcontent-%COMP%]:hover{background:#eee}.btn-save[_ngcontent-%COMP%]:disabled{background:#e0e0e0!important}.file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px;vertical-align:super}.v-dragndrop[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background:rgba(27,171,161,.05);border:1px dashed #1baba1}.v-dragndrop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500}.file-input[_ngcontent-%COMP%]{display:none}.dz-clickable[_ngcontent-%COMP%]{cursor:pointer;color:#007bff}.font-size-1[_ngcontent-%COMP%]{font-size:15px}.fileinfo[_ngcontent-%COMP%]{width:200px;border:1px dashed #1baba1;background:#f0f8ff}.fileinfo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px}.fileinfo[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.fileinfo[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]{background:#f71414;color:#fff;padding:2px 20px;border:none;border-radius:5px;margin-top:5px}.is-dragover[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{background-color:#c8e6c9}"]}),n})();function U(n,t){if(1&n){const n=u.Wb();u.Vb(0,"button",4),u.cc("click",function(){return u.Dc(n),u.gc().isShowFormInputAnswer=!0}),u.Rc(1,"+ Tr\u1ea3 l\u1eddi"),u.Ub()}}function F(n,t){if(1&n){const n=u.Wb();u.Vb(0,"button",8),u.cc("click",function(){return u.Dc(n),u.gc(2).clickRelate("prev")}),u.Qb(1,"i",9),u.Ub()}}function D(n,t){if(1&n){const n=u.Wb();u.Vb(0,"button",10),u.cc("click",function(){return u.Dc(n),u.gc(2).clickRelate("next")}),u.Qb(1,"i",11),u.Ub()}}function A(n,t){if(1&n&&(u.Vb(0,"div",5),u.Pc(1,F,2,0,"button",6),u.Pc(2,D,2,0,"button",7),u.Ub()),2&n){const n=u.gc();u.Db(1),u.nc("ngIf",n.previousQuestionId),u.Db(1),u.nc("ngIf",n.nextQuestionId)}}function Q(n,t){if(1&n){const n=u.Wb();u.Vb(0,"form-input-answer-teacher",12),u.cc("fetchNewData",function(){return u.Dc(n),u.gc().getData()})("closeFormInputAnswer",function(){return u.Dc(n),u.gc().isShowFormInputAnswer=!1}),u.Ub()}if(2&n){const n=u.gc();u.nc("assetGroupId",n.assetGroupStatisticObj.assetGroupId)}}let V=(()=>{class n{constructor(n,t,e,o,i,c,r){this.activeRoute=n,this.commonService=t,this.apiService=e,this.router=o,this.fb=i,this.cd=c,this._location=r,this.subscriptions=new b.a,this.isLoading=!1,this.isShowFormInputAnswer=!1}getData(){this.isLoading=!0;let n=this.activeRoute.snapshot.paramMap.get("id");this.subscriptions.add(this.apiService.getTeacherAnwerQuestionObjs(n,1).subscribe(n=>{n.success?(this.curQuestionObj=n.data.curQuestionObj,this.assetGroupStatisticObj=n.data.assetGroupStatisticObj,this.assetObjectObj=n.data.assetObjectObj,this.answerObjs=n.data.answerObjs,this.answerObjs.forEach(n=>{n.files&&(n.files=this.commonService.parseJson(n.files))}),this.sortAnswer(),this.nextQuestionId=n.data.nextQuestionId,this.previousQuestionId=n.data.previousQuestionId,this.isEndPage=n.data.isEndPage,this.isLoading=!1):(this.commonService.snackError("C\xf3 l\u1ed7i khi xem chi ti\u1ebft c\xe2u h\u1ecfi",""),this.isLoading=!1)}))}sortAnswer(){this.answerObjs.sort(function(n,t){return t.totalAccept-n.totalAccept})}clickRelate(n){this.subscriptions.add(this.apiService.getRelatedTeacherQuestionObj("next"==n?this.nextQuestionId:this.previousQuestionId).subscribe(n=>{n.success?(this.curQuestionObj=n.data.curQuestionObj,this.nextQuestionId=n.data.nextQuestionId,this.previousQuestionId=n.data.previousQuestionId):this.commonService.snackError("C\xf3 l\u1ed7i khi xem chi ti\u1ebft c\xe2u h\u1ecfi","")}))}backClicked(){this._location.back()}ngOnInit(){this.commonService.translateMetaData({title:"lang_cms_view_question_student_title",description:"lang_cms_view_question_student_description",image:"lang_cms_test_image"}),this.getData()}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(u.Pb(o.a),u.Pb(f.a),u.Pb(h.a),u.Pb(o.i),u.Pb(r.g),u.Pb(u.h),u.Pb(i.i))},n.\u0275cmp=u.Jb({type:n,selectors:[["app-teacher-view-question"]],decls:4,vars:10,consts:[[3,"isBackend","curQuestionObj","answerObjs","assetGroupStatisticObj","assetObjectObj","isEndPage","isLoading"],["buttonShowFormInput","","class","btn btn-primary",3,"click",4,"ngIf"],["nextBack","","id","nextBack",4,"ngIf"],["answerInput","",3,"assetGroupId","fetchNewData","closeFormInputAnswer",4,"ngIf"],["buttonShowFormInput","",1,"btn","btn-primary",3,"click"],["nextBack","","id","nextBack"],["id","buttonPrev","class","btn btn-info",3,"click",4,"ngIf"],["id","buttonNext","class","btn btn-info",3,"click",4,"ngIf"],["id","buttonPrev",1,"btn","btn-info",3,"click"],[1,"fas","fa-angle-left",2,"font-size","18px"],["id","buttonNext",1,"btn","btn-info",3,"click"],[1,"fas","fa-angle-right",2,"font-size","18px"],["answerInput","",3,"assetGroupId","fetchNewData","closeFormInputAnswer"]],template:function(n,t){1&n&&(u.Vb(0,"azt-view-answer-question",0),u.Pc(1,U,2,0,"button",1),u.Pc(2,A,3,2,"div",2),u.Pc(3,Q,1,1,"form-input-answer-teacher",3),u.Ub()),2&n&&(u.nc("isBackend",!0)("curQuestionObj",t.curQuestionObj)("answerObjs",t.answerObjs)("assetGroupStatisticObj",t.assetGroupStatisticObj)("assetObjectObj",t.assetObjectObj)("isEndPage",t.isEndPage)("isLoading",t.isLoading),u.Db(1),u.nc("ngIf",!t.isShowFormInputAnswer),u.Db(1),u.nc("ngIf",t.previousQuestionId||t.nextQuestionId),u.Db(1),u.nc("ngIf",t.isShowFormInputAnswer))},directives:[m.a,i.m,z],styles:[".block-list[_ngcontent-%COMP%]{background:#ececec;padding:10px;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.14)}.block-list-bottom[_ngcontent-%COMP%]{margin:10px 0}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]{border:none;display:flex;align-items:center;color:#707070;background:transparent}.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%]{text-transform:none;margin-left:2px}button[_ngcontent-%COMP%]{border:none;text-transform:none}.block-else[_ngcontent-%COMP%]{height:90px;display:flex;justify-content:center;align-items:center;border-radius:5px}.text-else[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.question-title[_ngcontent-%COMP%]{font-weight:600;margin-bottom:10px}.question-info[_ngcontent-%COMP%]{display:flex;align-items:center}.question-text[_ngcontent-%COMP%]{font-size:13px;color:#9a9a9a;margin-right:10px}.question-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.block-list-answer[_ngcontent-%COMP%], .question-content[_ngcontent-%COMP%]{margin-top:15px}.answer-count[_ngcontent-%COMP%]{font-size:18px;color:#333}.block-answer[_ngcontent-%COMP%]{display:flex;margin-top:15px;padding-bottom:10px;border-bottom:1px solid #d0d0d0}.block-answer-left[_ngcontent-%COMP%]{margin-right:10px}.count-view[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ddd;border-radius:5px;display:flex;justify-content:center;align-items:center;padding:6px}.count-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.true-answer[_ngcontent-%COMP%]{color:#0ca74a}.true-answer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.block-answer-right[_ngcontent-%COMP%]{padding-right:15px}.confirm[_ngcontent-%COMP%]{padding:6px 7px;background:#e8e8e8;border-radius:5px;font-size:12px}.btn-unconfirm[_ngcontent-%COMP%]{color:#00a7d0;background:transparent;transition:all .5s}.btn-unconfirm[_ngcontent-%COMP%]:hover{color:#026680;font-weight:700}.btn-confirm[_ngcontent-%COMP%]{background:#169bd5;color:#fff;font-size:13px;transition:all .5s;border-radius:5px;padding:5px 7px 5px 20px}.btn-confirm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;font-size:20px}.btn-confirm[_ngcontent-%COMP%]:hover{background:#0b6992}.block-answer-bottom[_ngcontent-%COMP%]{margin-top:15px;justify-content:flex-end}.block-answer-bottom[_ngcontent-%COMP%], .user-info[_ngcontent-%COMP%]{display:flex;align-items:center}.time-ago[_ngcontent-%COMP%]{color:#868686;font-size:10px;margin-bottom:0}.btn-all-add[_ngcontent-%COMP%]{color:#00a7d0}.answer-upload[_ngcontent-%COMP%], .create-answer[_ngcontent-%COMP%]{margin-top:20px}.upload-file[_ngcontent-%COMP%]{background-color:#fff;height:100px;display:flex;justify-content:center;align-items:center}.upload-file-text[_ngcontent-%COMP%]{font-size:16px}.answer-editor[_ngcontent-%COMP%]{min-height:250px}.answer-save[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:15px}.btn-cannel[_ngcontent-%COMP%], .btn-save[_ngcontent-%COMP%]{font-size:12px;border-radius:5px;padding:5px 25px;transition:all .5s}.btn-save[_ngcontent-%COMP%]{border:none;background:#169bd5;margin-left:10px;color:#fff;padding:6px 25px}.btn-save[_ngcontent-%COMP%]:hover:not([disabled]){background:#066d99}.btn-cannel[_ngcontent-%COMP%]{border:1px solid #797979;color:#797979}.btn-cannel[_ngcontent-%COMP%]:hover{background:#eee}.btn-save[_ngcontent-%COMP%]:disabled{background:#e0e0e0!important}.file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px;vertical-align:super}.v-dragndrop[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background:rgba(27,171,161,.05);border:1px dashed #1baba1}.v-dragndrop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500}.file-input[_ngcontent-%COMP%]{display:none}.dz-clickable[_ngcontent-%COMP%]{cursor:pointer;color:#007bff}.font-size-1[_ngcontent-%COMP%]{font-size:15px}.fileinfo[_ngcontent-%COMP%]{width:200px;border:1px dashed #1baba1;background:#f0f8ff}.fileinfo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px}.fileinfo[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.fileinfo[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]{background:#f71414;color:#fff;padding:2px 20px;border:none;border-radius:5px;margin-top:5px}.is-dragover[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{background-color:#c8e6c9}#nextBack[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:50%;margin-top:-18px;width:20px;right:0;background-color:rgba(24,162,184,.4117647058823529)}#nextBack[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#18a2b8}#nextBack[_ngcontent-%COMP%]   button#buttonPrev[_ngcontent-%COMP%]{left:0}"]}),n})(),q=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=u.Jb({type:n,selectors:[["question-master-page"]],decls:2,vars:0,consts:[["id","student-layout"]],template:function(n,t){1&n&&(u.Vb(0,"div",0),u.Qb(1,"router-outlet"),u.Ub())},directives:[o.m],styles:[""]}),n})();var L=e("hZBc"),G=e("nzN9"),E=e("AWii");function N(n,t){1&n&&u.Qb(0,"azt-loading-effect")}function R(n,t){1&n&&(u.Vb(0,"div",3),u.Qb(1,"azt-list-questions"),u.Ub())}const T=[{path:"",component:q,canActivate:[g.a],children:[{path:"",canActivateChild:[g.a],children:[{path:"view-question/:id",component:V},{path:"list-questions",component:(()=>{class n{constructor(n,t,e,o,i,c){this.activeRoute=n,this.commonService=t,this.apiService=e,this.router=o,this.fb=i,this.vps=c,this.isLoading=!1}ngOnInit(){this.isLoading=!0,this.commonService.translateMetaData({title:"lang_cms_teacher_group_title",description:"lang_cms_teacher_group_description",image:"lang_cms_test_image"}),this.isLoading=!1}}return n.\u0275fac=function(t){return new(t||n)(u.Pb(o.a),u.Pb(f.a),u.Pb(h.a),u.Pb(o.a),u.Pb(r.g),u.Pb(i.w))},n.\u0275cmp=u.Jb({type:n,selectors:[["app-list-questions-student"]],decls:4,vars:4,consts:[[3,"headerTitle","back_link"],[4,"ngIf","ngIfElse"],["doneLoading",""],[1,"pl-2","pr-2",2,"max-width","700px","margin","auto"]],template:function(n,t){if(1&n&&(u.Qb(0,"header-backend",0),u.Pc(1,N,1,0,"azt-loading-effect",1),u.Pc(2,R,2,0,"ng-template",null,2,u.Qc)),2&n){const n=u.zc(3);u.nc("headerTitle","Danh s\xe1ch c\xe2u h\u1ecfi c\u1ee7a h\u1ecdc sinh")("back_link","/admin/testbank/dashboard"),u.Db(1),u.nc("ngIf",t.isLoading)("ngIfElse",n)}},directives:[L.a,i.m,G.a,E.a],styles:[".content[_ngcontent-%COMP%]{padding:15px;margin-top:20px!important;margin:auto;max-width:430px;background:inherit;background-color:#ececec;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.14)}.content-header[_ngcontent-%COMP%]{text-align:center}.content-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:40px}.content-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .content-list-view[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{max-width:270px;background:inherit;background-color:#169bd5;border:none;border-radius:5px;color:#fff;font-weight:500}.view-single[_ngcontent-%COMP%]{padding:10px 15px;background:inherit;background-color:#fff;box-sizing:border-box;border:1px solid #ececec;border-radius:5px;box-shadow:none;font-style:normal;font-size:12px;color:#494949}"]}),n})()}]}]}];let B=(()=>{class n{}return n.\u0275mod=u.Nb({type:n}),n.\u0275inj=u.Mb({factory:function(t){return new(t||n)},imports:[[o.l.forChild(T)],o.l,p.c]}),n})();var J=e("rIor"),W=e("Zhhu");let K=(()=>{class n{}return n.\u0275mod=u.Nb({type:n}),n.\u0275inj=u.Mb({factory:function(t){return new(t||n)},imports:[[o.l,i.c,c.a,s.b,r.m,r.x,a.f,l.a,d.b,J.b,B,W.a]]}),n})()}}]);