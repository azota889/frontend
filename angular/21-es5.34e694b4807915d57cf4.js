!function(){function t(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function e(t,n,o){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var o=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=r(t)););return t}(t,n);if(o){var a=Object.getOwnPropertyDescriptor(o,n);return a.get?a.get.call(e):a.value}})(t,n,o||t)}function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function i(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var e,o=r(t);if(n){var a=r(this).constructor;e=Reflect.construct(o,arguments,a)}else e=o.apply(this,arguments);return c(this,e)}}function c(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function l(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,n,e){return n&&l(t.prototype,n),e&&l(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"6Fp8":function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e("fXoL"),a=e("5ete"),i=e("clS4"),c=function(){var t=function(){function t(n,e){s(this,t),this.baseApiService=n,this.redirectService=e}return d(t,[{key:"canActivate",value:function(t,n){return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginAnonymous(n.url),!1)}},{key:"canActivateChild",value:function(t,n){return this.canActivate(t,n)}},{key:"canLoad",value:function(t){var n="/"+t.path;return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(n),!1)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(o.Zb(a.a),o.Zb(i.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},Qnr8:function(n,a,c){"use strict";c.r(a),c.d(a,"StudentQAModule",function(){return vt});var l=c("ofXK"),u=c("3Pt+"),b=c("0IaG"),g=c("tyNb"),p=c("fB2i"),f=c("IkSl"),m=c("rIor"),h=c("Zhhu"),v=c("vvyD"),_=c("sOeQ"),x=c("Avyq"),k=c("6Fp8"),O=c("itXk"),y=c("gm2p"),w=c("atsk"),P=c("HU+v"),C=c("h/+u"),j=c("fXoL"),M=c("l7P3"),I=c("oUVn"),T=c("VMFx"),V=c("0pw4"),U=c("k3bj"),q=c("iWHX");function S(t,n){if(1&t&&(j.Vb(0,"div",18),j.Vb(1,"h4",6),j.Tc(2),j.hc(3,"mytranslate"),j.Ub(),j.Vb(4,"div",19),j.Qb(5,"img",20),j.Ub(),j.Ub()),2&t){var e=j.gc(2);j.Db(2),j.Uc(j.ic(3,3,"lang_student_qa_create_question_title_image_question")),j.Db(2),j.nc("id","img-"+e.state.tbFront.selectedQuestion.id),j.Db(1),j.nc("src",e.state.tbFront.selectedQuestion.url,j.Ic)}}function D(t,n){if(1&t&&(j.Vb(0,"div",18),j.Vb(1,"h4",6),j.Tc(2),j.hc(3,"mytranslate"),j.Ub(),j.Qb(4,"div",21),j.Ub()),2&t){var e=j.gc(2);j.Db(2),j.Uc(j.ic(3,2,"lang_student_qa_create_question_related_content")),j.Db(2),j.nc("innerHtml",e.state.tbFront.selectedQuestion.docxContent,j.Fc)}}function L(t,n){if(1&t&&(j.Vb(0,"a",25),j.Tc(1),j.Ub()),2&t){var e=j.gc(3);j.pc("href","/vi/de-thi/",e.paramValue.hashId,"",j.Ic),j.Db(1),j.Vc(" ",e.state.tbFront.selectTest.name," ")}}function R(t,n){if(1&t&&(j.Vb(0,"a",25),j.Tc(1),j.Ub()),2&t){var e=j.gc(3);j.pc("href","/vi/bai-tap/",e.paramValue.hashId,"",j.Ic),j.Db(1),j.Vc(" ",e.state.tbFront.selectTest.name," ")}}function Q(t,n){if(1&t&&(j.Vb(0,"div",22),j.Vb(1,"div",23),j.Rc(2,L,2,2,"a",24),j.Rc(3,R,2,2,"a",24),j.Ub(),j.Ub()),2&t){var e=j.gc(2);j.Db(2),j.nc("ngIf",e.state.tbFront.selectTest),j.Db(1),j.nc("ngIf",!e.state.tbFront.selectTest)}}function E(t,n){if(1&t&&(j.Vb(0,"div",26),j.Tc(1),j.Ub()),2&t){var e=j.gc(2);j.Db(1),j.Uc(e.state.studentQa.error)}}function A(t,n){1&t&&(j.Vb(0,"span"),j.Qb(1,"span",27),j.Tc(2,"\xa0"),j.Ub())}var F=function(){return[]},z=function(t){return{height:250,menubar:!1,plugins:t,toolbar:"bold italic backcolor | alignleft aligncenter alignright alignjustify"}};function H(t,n){if(1&t){var e=j.Wb();j.Vb(0,"div",4),j.Vb(1,"form",5),j.Vb(2,"h4",6),j.Tc(3),j.hc(4,"mytranslate"),j.Ub(),j.Qb(5,"input",7),j.Vb(6,"h4",6),j.Tc(7),j.hc(8,"mytranslate"),j.Ub(),j.Vb(9,"div",8),j.Qb(10,"editor",9),j.Ub(),j.Ub(),j.Rc(11,S,6,5,"div",10),j.Rc(12,D,5,4,"div",10),j.Vb(13,"div",11),j.Vb(14,"h4",6),j.Tc(15),j.hc(16,"mytranslate"),j.hc(17,"mytranslate"),j.hc(18,"mytranslate"),j.Ub(),j.Rc(19,Q,4,2,"div",12),j.Ub(),j.Rc(20,E,2,1,"div",13),j.Vb(21,"div",14),j.Vb(22,"button",15),j.cc("click",function(){return j.Ec(e),j.gc().handleClose()}),j.Tc(23),j.hc(24,"mytranslate"),j.Ub(),j.Vb(25,"button",16),j.cc("click",function(){return j.Ec(e),j.gc().handleSend()}),j.Rc(26,A,3,0,"span",17),j.Tc(27),j.hc(28,"mytranslate"),j.Ub(),j.Ub(),j.Ub()}if(2&t){var o=j.gc();j.Db(1),j.nc("formGroup",o.form),j.Db(2),j.Uc(j.ic(4,16,"lang_student_qa_create_question_title")),j.Db(2),j.nc("disabled",o.isLoading),j.Db(2),j.Uc(j.ic(8,18,"lang_student_qa_create_question_content_question")),j.Db(3),j.nc("disabled",o.isLoading)("init",j.tc(31,z,j.sc(30,F))),j.Db(1),j.nc("ngIf",o.state.tbFront.selectedQuestion.url),j.Db(1),j.nc("ngIf",o.state.tbFront.selectedQuestion.docxContent),j.Db(3),j.Wc("",o.state.tbFront.selectTest?j.ic(16,20,"lang_student_qa_create_question_exam"):j.ic(17,22,"lang_student_qa_create_question_homework")," ",j.ic(18,24,"lang_student_qa_create_question_related"),""),j.Db(4),j.nc("ngIf",o.state.tbFront.selectTest),j.Db(1),j.nc("ngIf",o.state.studentQa.error),j.Db(3),j.Uc(j.ic(24,26,"lang_buttom_close")),j.Db(2),j.nc("disabled",o.form.invalid||o.state.studentQa.loading||o.isLoading),j.Db(1),j.nc("ngIf",o.state.studentQa.loading||o.isLoading),j.Db(1),j.Vc(" ",j.ic(28,28,"lang_student_qa_create_question_send_question")," ")}}var G,W=((G=function(n){o(c,n);var a=i(c);function c(t,n,e,o,i,r){var l;return s(this,c),(l=a.call(this,e)).activeRoute=t,l.store=n,l.commonService=e,l.apiUploadService=o,l.localStorageObjetct=i,l.fb=r,l.isLoading=!1,l.form=new u.k({}),l.notContainImage=!1,l.paramValue={tenantId:"",cateId:"",hashId:"",resultId:""},l}return d(c,[{key:"addmore",value:function(){window.history.back()}},{key:"redirectToBackLink",value:function(){this.commonService.myNavigationWithQueryString("/test/answer-test/".concat(this.paramValue.tenantId,"/").concat(""!=this.paramValue.cateId?this.paramValue.cateId:0,"/").concat(this.paramValue.hashId,"/").concat(this.paramValue.resultId),"?backto="+encodeURIComponent("/student-qa/enter-question"))}},{key:"handleClose",value:function(){this.store.dispatch(C.c()),this.redirectToBackLink()}},{key:"cleanContent",value:function(){var t=this.form.controls.content.value.replace(/<img .*?>/gim,"");this.form.controls.content.setValue(t)}},{key:"handleSend",value:function(){var t=this;if(this.form.invalid)this.commonService.snackError("B\u1ea1n ph\u1ea3i nh\u1eadp ti\xeau \u0111\u1ec1 v\xe0 m\xf4 t\u1ea3 c\xe2u h\u1ecfi","");else{this.cleanContent();var n=this.commonService.getFormObj(this.form);this.isLoading=!0,this.state.tbFront.selectedQuestion.url?this.apiUploadService.reactiveUploadBase64ToCDN("front_qa_question",this.state.tbFront.selectedQuestion.url).subscribe(function(e){var o;1==e.success?(t.isLoading=!1,t.store.dispatch(P.b({question:{assetObjectId:t.state.tbFront.resultId,assetId:"ex"+t.state.tbFront.selectTest.id,assetGroupId:"ex"+t.state.tbFront.selectedQuestion.data.id,title:n.title,content:n.content,datas:"",files:null!==(o=e.data)&&void 0!==o?o:""}})),t.localStorageObjetct.removeCacheByValue("StudentQuestion/GetObjs"),t.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetObjsInDashboard")):(t.isLoading=!1,t.commonService.snackError("L\u1ed7i t\u1ea3i \u1ea3nh l\xean CDN",""))}):(this.isLoading=!1,this.store.dispatch(P.b({question:{assetObjectId:this.state.tbFront.resultId,assetId:"ex"+this.state.tbFront.selectTest.id,assetGroupId:"ex"+this.state.tbFront.selectedQuestion.data.id,title:this.form.controls.title.value,content:this.state.tbFront.selectedQuestion.docxContent+this.form.controls.content.value,datas:"",files:""}})),this.localStorageObjetct.removeCacheByValue("StudentQuestion/GetObjs"),this.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetObjsInDashboard"))}}},{key:"ngOnInit",value:function(){var n=this;this.form=this.fb.group({title:new u.h("",[u.z.required,w.a.noWhiteSpace]),content:new u.h("",[u.z.required])}),Object(O.b)([this.activeRoute.params,this.activeRoute.queryParams]).subscribe(function(e){var o,a,i,c;t(e),n.paramValue.tenantId=null!==(o=n.activeRoute.snapshot.paramMap.get("tenant_id"))&&void 0!==o?o:"",n.paramValue.cateId=null!==(a=n.activeRoute.snapshot.paramMap.get("cate_id"))&&void 0!==a?a:"",n.paramValue.hashId=null!==(i=n.activeRoute.snapshot.paramMap.get("hash_id"))&&void 0!==i?i:"",n.paramValue.resultId=null!==(c=n.activeRoute.snapshot.paramMap.get("result_id"))&&void 0!==c?c:""}),this.commonService.translateMetaData({title:"lang_cms_create_question_title",description:"lang_cms_create_question_description",image:"lang_cms_test_image"}),this.subscriptions.add(this.store.subscribe(function(t){n.state=t,n.state.tbFront.selectedQuestion||n.commonService.myNavigation("/student/dashboard/2")})),e(r(c.prototype),"ngOnInit",this).call(this)}},{key:"f",get:function(){return this.form.controls}}]),c}(y.a)).\u0275fac=function(t){return new(t||G)(j.Pb(g.a),j.Pb(M.h),j.Pb(I.a),j.Pb(T.a),j.Pb(V.a),j.Pb(u.g))},G.\u0275cmp=j.Jb({type:G,selectors:[["app-create-question"]],features:[j.Ab],decls:5,vars:5,consts:[[3,"headerTitle","checkUrlFunction","RedirectToLink"],[1,"app","py-4","maxW1200"],[1,"container","pb-5"],["class","block-list",4,"ngIf"],[1,"block-list"],[3,"formGroup"],[1,"block-title","mb-2"],["type","text","formControlName","title","name","","id","titleInput",1,"mb-3",3,"disabled"],[1,"block-editor","mb-3"],["formControlName","content","apiKey","ldij13v1886vlrnk42g9bvngyqdc6gxpe8l0n9mo8gdjpg9d",3,"disabled","init"],["class","block-content",4,"ngIf"],[1,"block-involve","mt-2"],["class","row",4,"ngIf"],["class","alert alert-danger p-3 m-3",4,"ngIf"],[1,"block-save"],[1,"btn-cannel",3,"click"],[1,"btn-save",3,"disabled","click"],[4,"ngIf"],[1,"block-content"],[1,"selected_img","mb-1",3,"id"],["alt","",2,"max-width","100%",3,"src"],["id","blockContentDocx",3,"innerHtml"],[1,"row"],[1,"col-md-4","col-sm-6"],["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],[1,"alert","alert-danger","p-3","m-3"],["role","status",1,"spinner-border","spinner-border-sm"]],template:function(t,n){1&t&&(j.Vb(0,"header-frontend",0),j.cc("RedirectToLink",function(){return n.redirectToBackLink()}),j.hc(1,"mytranslate"),j.Ub(),j.Vb(2,"div",1),j.Vb(3,"div",2),j.Rc(4,H,29,33,"div",3),j.Ub(),j.Ub()),2&t&&(j.nc("headerTitle",j.ic(1,3,"lang_student_qa_create_question_header_title"))("checkUrlFunction",!0),j.Db(4),j.nc("ngIf",n.state.tbFront.selectedQuestion))},directives:[U.a,l.m,u.B,u.s,u.l,u.d,u.r,u.j,p.a],pipes:[q.r],styles:[".block-list[_ngcontent-%COMP%]{background:#fff;padding:10px;border-radius:5px}.block-list-bottom[_ngcontent-%COMP%]{margin:10px 0}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]{border:none;display:flex;align-items:center;color:#707070;background:transparent}.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%]{text-transform:none;margin-left:2px}.block-editor[_ngcontent-%COMP%]{min-height:250px;background-color:#fff}.block-save[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:flex-end}.btn-add[_ngcontent-%COMP%]{background:transparent;display:flex;align-items:center;border:none;color:#169bd5;text-transform:none;padding-left:0}.btn-add[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px}.btn-cannel[_ngcontent-%COMP%], .btn-save[_ngcontent-%COMP%]{font-size:12px;border-radius:5px;padding:5px 25px;transition:all .5s}.btn-save[_ngcontent-%COMP%]{border:none;background:#169bd5;margin-left:10px;color:#fff;padding:6px 25px}.btn-save[_ngcontent-%COMP%]:hover:not([disabled]){background:#066d99}.btn-cannel[_ngcontent-%COMP%]{border:1px solid #797979;color:#797979}.btn-cannel[_ngcontent-%COMP%]:hover{background:#a1a1a1}.btn-save[_ngcontent-%COMP%]:disabled{background:#e0e0e0!important}#titleInput[_ngcontent-%COMP%]{width:100%;border:1px solid #ccc;height:40px;padding-left:10px;font-size:16px;font-weight:500;color:#333}"]}),G),N=c("quSY"),B=c("KVcZ"),J=c("nzN9"),X=c("VcHj"),K=c("bTqV"),Z=c("Qu3c"),$=c("NFeN"),Y=c("caLj");function tt(t,n){1&t&&j.Qb(0,"azt-loading-effect")}function nt(t,n){if(1&t){var e=j.Wb();j.Tb(0),j.Vb(1,"a",15),j.cc("click",function(){j.Ec(e);var t=n.$implicit;return j.gc(3).redirectCreareQuestion(t)}),j.Qb(2,"azt-block-exam",16),j.Ub(),j.Sb()}if(2&t){var o=n.$implicit;j.Db(2),j.nc("data",o)("type",2)}}function et(t,n){if(1&t){var e=j.Wb();j.Vb(0,"div",17),j.Vb(1,"button",18),j.cc("click",function(){return j.Ec(e),j.gc(3).loadMoreExam()}),j.hc(2,"mytranslate"),j.Vb(3,"mat-icon"),j.Tc(4,"keyboard_arrow_down"),j.Ub(),j.Ub(),j.Ub()}if(2&t){var o=j.gc(3);j.Db(1),j.oc("matTooltip",j.ic(2,2,"lang_buttom_see_more")),j.nc("disabled",o.checkEndPage.exam)}}function ot(t,n){1&t&&(j.Vb(0,"div",17),j.Vb(1,"div",19),j.Vb(2,"span",20),j.Tc(3,"Loading..."),j.Ub(),j.Ub(),j.Ub())}function at(t,n){if(1&t&&(j.Tb(0),j.Rc(1,nt,3,2,"ng-container",13),j.Rc(2,et,5,4,"div",14),j.Rc(3,ot,4,0,"div",14),j.Sb()),2&t){var e=j.gc(2);j.Db(1),j.nc("ngForOf",e.objsExam),j.Db(1),j.nc("ngIf",!e.checkLoading.exam),j.Db(1),j.nc("ngIf",e.checkLoading.exam)}}function it(t,n){1&t&&(j.Vb(0,"div",21),j.Vb(1,"span",22),j.Tc(2),j.hc(3,"mytranslate"),j.Ub(),j.Ub()),2&t&&(j.Db(2),j.Uc(j.ic(3,1,"lang_not_data")))}function ct(t,n){if(1&t&&(j.Vb(0,"div",4),j.Vb(1,"div",5),j.Vb(2,"div",6),j.Vb(3,"p",7),j.Tc(4),j.hc(5,"mytranslate"),j.Ub(),j.Vb(6,"p",8),j.Tc(7),j.hc(8,"mytranslate"),j.Ub(),j.Ub(),j.Vb(9,"div",9),j.Vb(10,"h3",10),j.Tc(11),j.hc(12,"mytranslate"),j.Ub(),j.Vb(13,"div",11),j.Rc(14,at,4,3,"ng-container",1),j.Rc(15,it,4,3,"ng-template",null,12,j.Sc),j.Ub(),j.Ub(),j.Ub(),j.Ub()),2&t){var e=j.Ac(16),o=j.gc();j.Db(4),j.Vc("",j.ic(5,5,"lang_student_qa_enter_question_header_node_one"),"."),j.Db(3),j.Uc(j.ic(8,7,"lang_student_qa_enter_question_header_node_two")),j.Db(4),j.Vc(" ",j.ic(12,9,"lang_student_qa_enter_question_did_exam")," "),j.Db(3),j.nc("ngIf",o.objsExam.length>0)("ngIfElse",e)}}function rt(t,n){if(1&t){var e=j.Wb();j.Vb(0,"azt-dialog-warning",23),j.cc("closeDialog",function(){return j.Ec(e),j.gc().closeAllowWarning()}),j.Ub()}if(2&t){var o=j.gc();j.nc("data",o.dataDialogWarning)}}var st,lt,dt,ut,bt,gt=((lt=function(n){o(c,n);var a=i(c);function c(t,n,e){var o;return s(this,c),(o=a.call(this,n)).activeRoute=t,o.commonService=n,o.studentAssetService=e,o.subscriptions=new N.a,o.statusObjs={isLoading:!1,type:1,error:{message:""}},o.objsExam=[],o.objsHomework=[],o.pageExam=1,o.pageHomework=1,o.checkLoading={exam:!1,homework:!1},o.checkEndPage={exam:!1,homework:!1},o.backToLink="/student-qa/enter-question",o.dataDialogWarning={isShow:!1,content:""},o}return d(c,[{key:"getObjsExam",value:function(t){var n=this;1==t?this.statusObjs={isLoading:!0,type:1,error:{message:""}}:this.checkLoading.exam=!0,this.studentAssetService.apiStudentAssetGetExamObjsGet(t).subscribe(function(e){var o,a,i,c,r,s,l,d,u,b,g,p;if(1==e.success&&(1==(null===(o=e.data)||void 0===o?void 0:o.isEndPage)&&(n.checkEndPage.exam=!0),(null!==(c=null===(i=null===(a=e.data)||void 0===a?void 0:a.objs)||void 0===i?void 0:i.length)&&void 0!==c?c:0)>0))if(1==t)n.objsExam=null!==(s=null===(r=e.data)||void 0===r?void 0:r.objs)&&void 0!==s?s:[];else for(var f=null!==(u=null===(d=null===(l=e.data)||void 0===l?void 0:l.objs)||void 0===d?void 0:d.length)&&void 0!==u?u:0,m=0;m<f;m++)n.objsExam.push(null!==(p=null===(g=null===(b=e.data)||void 0===b?void 0:b.objs)||void 0===g?void 0:g[m])&&void 0!==p?p:{});n.statusObjs={isLoading:!1,type:1,error:{message:""}},n.checkLoading.exam=!1})}},{key:"getObjsHomework",value:function(t){var n=this;1==t?this.statusObjs={isLoading:!0,type:1,error:{message:""}}:this.checkLoading.homework=!0,this.studentAssetService.apiStudentAssetGetHomeworkObjsGet(t).subscribe(function(e){var o,a,i,c,r,s,l,d,u,b,g,p;if(1==e.success&&(1==(null===(o=e.data)||void 0===o?void 0:o.isEndPage)&&(n.checkEndPage.homework=!0),(null!==(c=null===(i=null===(a=e.data)||void 0===a?void 0:a.objs)||void 0===i?void 0:i.length)&&void 0!==c?c:0)>0))if(1==t)n.objsHomework=null!==(s=null===(r=e.data)||void 0===r?void 0:r.objs)&&void 0!==s?s:[];else for(var f=null!==(u=null===(d=null===(l=e.data)||void 0===l?void 0:l.objs)||void 0===d?void 0:d.length)&&void 0!==u?u:0,m=0;m<f;m++)n.objsHomework.push(null!==(p=null===(g=null===(b=e.data)||void 0===b?void 0:b.objs)||void 0===g?void 0:g[m])&&void 0!==p?p:{});n.statusObjs={isLoading:!1,type:1,error:{message:""}},n.checkLoading.homework=!1})}},{key:"loadMoreExam",value:function(){this.pageExam++,this.getObjsExam(this.pageExam)}},{key:"loadMoreHomework",value:function(){this.pageHomework++,this.getObjsHomework(this.pageHomework)}},{key:"closeAllowWarning",value:function(){this.dataDialogWarning.isShow=!1}},{key:"redirectCreareQuestion",value:function(t){var n;1==t.examType||11==t.examType||21==t.examType?this.dataDialogWarning.isShow=!0:this.commonService.myNavigationWithQueryString("/test/answer-test/".concat(t.tenantId,"/").concat(null!=t.categoryId?t.categoryId:0,"/").concat(t.hashId,"/").concat(null===(n=t.examResult)||void 0===n?void 0:n.id),"?backto="+encodeURIComponent(this.backToLink))}},{key:"ngOnInit",value:function(){var n=this;Object(O.b)([this.activeRoute.params,this.activeRoute.queryParams]).subscribe(function(e){t(e),n.getObjsExam(n.pageExam)}),this.dataDialogWarning.content="Hi\u1ec7n t\xednh n\u0103ng h\u1ecfi \u0111\xe1p ch\u01b0a h\u1ed7 tr\u1ee3 \u0111\u1ec1 thi \u0111\u01b0\u1ee3c t\u1ea1o t\u1eeb file docx",this.commonService.translateMetaData({title:"lang_cms_enter_question_title",description:"lang_cms_enter_question_description",image:"lang_cms_test_image"}),e(r(c.prototype),"ngOnInit",this).call(this)}}]),c}(y.a)).\u0275fac=function(t){return new(t||lt)(j.Pb(g.a),j.Pb(I.a),j.Pb(B.c))},lt.\u0275cmp=j.Jb({type:lt,selectors:[["app-enter-question"]],features:[j.Ab],decls:6,vars:7,consts:[[3,"headerTitle","back_link"],[4,"ngIf","ngIfElse"],["doneLoading",""],[3,"data","closeDialog",4,"ngIf"],[1,"app","py-4","maxW1200"],[1,"container"],[1,"app-header"],[1,"header-note"],[1,"header-note","font-bold"],[1,"app-block","bock-exam"],[1,"block-title"],[1,"block-list"],["emptyData",""],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center mt-3",4,"ngIf"],[3,"click"],[3,"data","type"],[1,"d-flex","justify-content-center","mt-3"],["mat-button","",1,"btn-all-add",3,"matTooltip","disabled","click"],["role","status",1,"spinner-border","text-secondary"],[1,"sr-only"],[1,"block-else"],[1,"text-else"],[3,"data","closeDialog"]],template:function(t,n){if(1&t&&(j.Qb(0,"header-frontend",0),j.hc(1,"mytranslate"),j.Rc(2,tt,1,0,"azt-loading-effect",1),j.Rc(3,ct,17,11,"ng-template",null,2,j.Sc),j.Rc(5,rt,1,1,"azt-dialog-warning",3)),2&t){var e=j.Ac(4);j.nc("headerTitle",j.ic(1,5,"lang_student_qa_enter_question_header_title"))("back_link","/student/dashboard/2"),j.Db(2),j.nc("ngIf",n.statusObjs.isLoading)("ngIfElse",e),j.Db(3),j.nc("ngIf",n.dataDialogWarning.isShow)}},directives:[U.a,l.m,J.a,l.l,X.a,K.b,Z.a,$.a,Y.a],pipes:[q.r],styles:[".header-note[_ngcontent-%COMP%]{color:#717171;font-size:14px}.font-bold[_ngcontent-%COMP%]{color:#000}.block-title[_ngcontent-%COMP%]{text-transform:uppercase;margin-bottom:10px}.block-list[_ngcontent-%COMP%]{background:#ececec;padding:10px;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.14)}.block-list-bottom[_ngcontent-%COMP%]{margin:10px 0}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]{border:none;display:flex;align-items:center;color:#707070;background:transparent}.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%]{text-transform:none;margin-left:2px}.block-else[_ngcontent-%COMP%]{height:90px;display:flex;justify-content:center;align-items:center;border-radius:5px}.text-else[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.bock-exam[_ngcontent-%COMP%]{margin-top:25px}.btn-all-add[_ngcontent-%COMP%]{color:#0eafc0}.school-info_bg[_ngcontent-%COMP%]{z-index:9998;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;min-height:100vh;background:rgba(0,0,0,.5607843137254902)}.school-info[_ngcontent-%COMP%]{z-index:9999;top:50%;left:50%;min-width:30%;transform:translate(-50%,-50%);position:fixed;max-width:600px;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px rgba(0,0,0,.58)}.truncate[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;overflow:hidden;max-width:90%;padding:5px 0;white-space:nowrap}.close-btn[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-7px;padding:5px 10px;background:#dadada;cursor:pointer;border-radius:20px}@media only screen and (max-width:1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:95%}}"]}),lt),pt=((st=function(){function t(){s(this,t)}return d(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||st)},st.\u0275cmp=j.Jb({type:st,selectors:[["question-master-page"]],decls:2,vars:0,consts:[["id","student-layout"]],template:function(t,n){1&t&&(j.Vb(0,"div",0),j.Qb(1,"router-outlet"),j.Ub())},directives:[g.m],styles:[""]}),st),ft=c("diKk"),mt=[{path:"",component:pt,canActivate:[k.a],children:[{path:"",canActivateChild:[k.a],children:[{path:"create-question/:tenant_id/:cate_id/:hash_id/:result_id",component:W},{path:"view-question/:id",component:(dt=function(t){o(a,t);var n=i(a);function a(t,e,o){var i;return s(this,a),(i=n.call(this,e)).activeRoute=t,i.commonService=e,i.studentQuestionService=o,i.subscriptions=new N.a,i.isLoading=!1,i.isEndPage=0,i}return d(a,[{key:"ngOnInit",value:function(){var t=this;this.commonService.translateMetaData({title:"lang_cms_view_answer_question_title",description:"lang_cms_view_answer_question_description",image:"lang_cms_test_image"}),this.isLoading=!0;var n=Number(this.activeRoute.snapshot.paramMap.get("id"));this.subscriptions.add(this.studentQuestionService.apiStudentQuestionGetAnswerObjsGet(n).subscribe(function(n){var e,o,a,i,c,r,s,l,d,u;n.success?(t.curQuestionObj=null!==(o=null===(e=n.data)||void 0===e?void 0:e.curQuestionObj)&&void 0!==o?o:{},t.answerObjs=null!==(i=null===(a=n.data)||void 0===a?void 0:a.answerObjs)&&void 0!==i?i:[],t.answerObjs.forEach(function(n){var e,o;n.fileObjs=null!==(o=t.castJsonToObj(null!==(e=n.files)&&void 0!==e?e:""))&&void 0!==o?o:[]}),t.assetGroupStatisticObj=null!==(r=null===(c=n.data)||void 0===c?void 0:c.assetGroupStatisticObj)&&void 0!==r?r:{},t.assetObjectObj=null!==(l=null===(s=n.data)||void 0===s?void 0:s.assetObjectObj)&&void 0!==l?l:{},t.isEndPage=null!==(u=null===(d=n.data)||void 0===d?void 0:d.isEndPage)&&void 0!==u?u:0,t.isLoading=!1):(t.commonService.snackError("C\xf3 l\u1ed7i khi xem chi ti\u1ebft c\xe2u h\u1ecfi",""),t.isLoading=!1)})),e(r(a.prototype),"ngOnInit",this).call(this)}}]),a}(y.a),dt.\u0275fac=function(t){return new(t||dt)(j.Pb(g.a),j.Pb(I.a),j.Pb(B.d))},dt.\u0275cmp=j.Jb({type:dt,selectors:[["app-student-view-question"]],features:[j.Ab],decls:1,vars:6,consts:[[3,"curQuestionObj","answerObjs","assetGroupStatisticObj","assetObjectObj","isEndPage","isLoading"]],template:function(t,n){1&t&&j.Qb(0,"azt-view-answer-question",0),2&t&&j.nc("curQuestionObj",n.curQuestionObj)("answerObjs",n.answerObjs)("assetGroupStatisticObj",n.assetGroupStatisticObj)("assetObjectObj",n.assetObjectObj)("isEndPage",n.isEndPage)("isLoading",n.isLoading)},directives:[ft.a],styles:[".block-list[_ngcontent-%COMP%]{background:#ececec;padding:10px 10px 3px;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.14)}.block-list-bottom[_ngcontent-%COMP%]{margin:10px 0}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]{border:none;display:flex;align-items:center;color:#707070;background:transparent}.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%]{text-transform:none;margin-left:2px}button[_ngcontent-%COMP%]{border:none;text-transform:none}.block-else[_ngcontent-%COMP%]{height:90px;display:flex;justify-content:center;align-items:center;border-radius:5px}.text-else[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.question-title[_ngcontent-%COMP%]{font-weight:600;margin-bottom:10px}.question-info[_ngcontent-%COMP%]{display:flex;align-items:center}.question-image[_ngcontent-%COMP%]{background-color:#fff;margin-top:20px}.question-text[_ngcontent-%COMP%]{font-size:13px;color:#9a9a9a;margin-right:10px}.question-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.question-content[_ngcontent-%COMP%]{margin-top:10px}.block-list-answer[_ngcontent-%COMP%]{margin-top:15px}.answer-count[_ngcontent-%COMP%]{font-size:18px;color:#333}.block-answer[_ngcontent-%COMP%]{display:flex;margin-top:15px;padding-bottom:10px;border-bottom:1px solid #d0d0d0}.block-answer-left[_ngcontent-%COMP%]{margin-right:10px}.count-view[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ddd;border-radius:5px;display:flex;justify-content:center;align-items:center;padding:6px}.count-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.true-answer[_ngcontent-%COMP%]{color:#0ca74a}.true-answer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.block-answer-right[_ngcontent-%COMP%]{padding-right:15px;flex:auto}.confirm[_ngcontent-%COMP%]{padding:6px 7px;background:#e8e8e8;border-radius:5px;font-size:12px}.btn-unconfirm[_ngcontent-%COMP%]{color:#00a7d0;background:transparent;transition:all .5s}.btn-unconfirm[_ngcontent-%COMP%]:hover{color:#026680;font-weight:700}.btn-confirm[_ngcontent-%COMP%]{background:#169bd5;color:#fff;font-size:13px;transition:all .5s;border-radius:5px;padding:5px 7px 5px 20px}.btn-confirm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;font-size:20px}.btn-confirm[_ngcontent-%COMP%]:hover{background:#0b6992}.block-answer-bottom[_ngcontent-%COMP%]{margin-top:15px;justify-content:space-between}.block-answer-bottom[_ngcontent-%COMP%], .user-info[_ngcontent-%COMP%]{display:flex;align-items:center}.time-ago[_ngcontent-%COMP%]{color:#868686;font-size:10px;margin-bottom:0}.btn-all-add[_ngcontent-%COMP%]{color:#00a7d0}#formInputAnswer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:1px solid #dfdfdf;border-radius:3px;padding:5px}@media screen and (max-width:500px){.block-answer-bottom[_ngcontent-%COMP%]{flex-direction:column-reverse;align-items:flex-start}.confirm[_ngcontent-%COMP%], .confirm-took[_ngcontent-%COMP%]{margin-top:10px}}"]}),dt)},{path:"enter-question",component:gt},{path:"create-question",component:W}]}]}],ht=((bt=function t(){s(this,t)}).\u0275mod=j.Nb({type:bt}),bt.\u0275inj=j.Mb({factory:function(t){return new(t||bt)},imports:[[g.l.forChild(mt)],g.l,x.c]}),bt),vt=((ut=function t(){s(this,t)}).\u0275mod=j.Nb({type:ut}),ut.\u0275inj=j.Mb({factory:function(t){return new(t||ut)},imports:[[g.l,l.c,v.a,p.b,u.m,u.x,b.f,_.a,f.b,m.b,ht,h.a]]}),ut)},loSA:function(t,n,e){"use strict";e.d(n,"a",function(){return m});var a=e("gm2p"),c=e("fXoL"),r=e("ofXK"),l=e("Qu3c");function d(t,n){1&t&&(c.Vb(0,"span",6),c.Tc(1,"\u0110"),c.Ub())}function u(t,n){1&t&&(c.Vb(0,"span",7),c.Tc(1,"C\u0110"),c.Ub())}function b(t,n){1&t&&(c.Vb(0,"span",8),c.Tc(1,"HT"),c.Ub())}function g(t,n){1&t&&(c.Vb(0,"span",9),c.Tc(1,"CHT"),c.Ub())}function p(t,n){1&t&&(c.Vb(0,"span",10),c.Tc(1,"HTT"),c.Ub())}function f(t,n){if(1&t&&(c.Vb(0,"span",11),c.Tc(1),c.Ub()),2&t){var e=c.gc();c.Db(1),c.Uc(e.mark)}}var m=function(){var t=function(t){o(e,t);var n=i(e);function e(){var t;return s(this,e),(t=n.apply(this,arguments)).mark=0,t}return e}(a.a);return t.\u0275fac=function(n){return h(n||t)},t.\u0275cmp=c.Jb({type:t,selectors:[["azt-check-mark"]],inputs:{mark:"mark"},features:[c.Ab],decls:6,vars:6,consts:[["class","text-mark mb-0","matTooltip","\u0110\u1ea1t",4,"ngIf"],["class","text-mark mb-0","matTooltip","Ch\u01b0a \u0110\u1ea1t",4,"ngIf"],["class","text-mark mb-0","matTooltip","Ho\xe0n Th\xe0nh",4,"ngIf"],["class","text-mark mb-0","matTooltip","Ch\u01b0a Ho\xe0n Th\xe0nh",4,"ngIf"],["class","text-mark mb-0","matTooltip","Ho\xe0n Th\xe0nh T\u1ed1t",4,"ngIf"],["class","text-mark mb-0",4,"ngIf"],["matTooltip","\u0110\u1ea1t",1,"text-mark","mb-0"],["matTooltip","Ch\u01b0a \u0110\u1ea1t",1,"text-mark","mb-0"],["matTooltip","Ho\xe0n Th\xe0nh",1,"text-mark","mb-0"],["matTooltip","Ch\u01b0a Ho\xe0n Th\xe0nh",1,"text-mark","mb-0"],["matTooltip","Ho\xe0n Th\xe0nh T\u1ed1t",1,"text-mark","mb-0"],[1,"text-mark","mb-0"]],template:function(t,n){1&t&&(c.Rc(0,d,2,0,"span",0),c.Rc(1,u,2,0,"span",1),c.Rc(2,b,2,0,"span",2),c.Rc(3,g,2,0,"span",3),c.Rc(4,p,2,0,"span",4),c.Rc(5,f,2,1,"span",5)),2&t&&(c.nc("ngIf","1000"==n.mark),c.Db(1),c.nc("ngIf","1001"==n.mark),c.Db(1),c.nc("ngIf","2000"==n.mark),c.Db(1),c.nc("ngIf","2001"==n.mark),c.Db(1),c.nc("ngIf","3000"==n.mark),c.Db(1),c.nc("ngIf","2001"!=n.mark&&"2000"!=n.mark&&"1001"!=n.mark&&"1000"!=n.mark&&"3000"!=n.mark))},directives:[r.m,l.a],encapsulation:2}),t}(),h=c.Xb(m)}}])}();