(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{SPOn:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var i=e("fXoL"),c=e("gbi4");let o=(()=>{class n{constructor(n){this.commonService=n}convertUrl(){this.src=this.commonService.getRawCdnLink(this.src)}}return n.\u0275fac=function(t){return new(t||n)(i.Pb(c.a))},n.\u0275dir=i.Kb({type:n,selectors:[["","appImageFallback",""]],hostVars:1,hostBindings:function(n,t){1&n&&i.cc("error",function(){return t.convertUrl()}),2&n&&i.Yb("src",t.src,i.Jc)},inputs:{src:"src"}}),n})()},Vwpm:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var i=e("fXoL"),c=e("ofXK"),o=e("SPOn"),s=e("gaSO");function r(n,t){1&n&&(i.Vb(0,"div",2),i.Qb(1,"img",3),i.Ub())}let a=(()=>{class n{constructor(){this.loading=!0}onLoad(){this.loading=!1}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=i.Jb({type:n,selectors:[["azt-loaded-img"]],inputs:{imgSrc:"imgSrc",id:"id",noClass:"noClass"},decls:4,vars:8,consts:[["class","px-4 py-3 text-center",4,"ngIf"],["appImageFallback","",2,"width","100%",3,"hidden","src","alt","load"],[1,"px-4","py-3","text-center"],["src","https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/svgs/Img2_dat-01.svg","alt","image_loading_placeholer"]],template:function(n,t){1&n&&(i.Vb(0,"div"),i.Qc(1,r,2,0,"div",0),i.Vb(2,"img",1),i.cc("load",function(){return t.onLoad()}),i.hc(3,"mycdn"),i.Ub(),i.Ub()),2&n&&(i.Db(1),i.nc("ngIf",t.loading),i.Db(1),i.Fb(t.id?"img-fluid questionId_"+t.id:t.noClass?"w-auto":"img-fluid"),i.oc("src",i.ic(3,6,t.imgSrc),i.Ic),i.oc("alt",t.imgSrc),i.nc("hidden",t.loading))},directives:[c.m,o.a],pipes:[s.o],styles:[""]}),n})()},diKk:function(n,t,e){"use strict";e.d(t,"a",function(){return W});var i=e("fXoL"),c=e("tyNb"),o=e("gbi4"),s=e("Dcbt"),r=e("3Pt+"),a=e("ofXK"),l=e("hZBc"),b=e("k3bj"),d=e("nzN9"),g=e("NFeN"),f=e("IU+r"),u=e("Vwpm"),p=e("Qu3c"),m=e("bTqV"),h=e("wAhq"),v=e("wPhD");function w(n,t){1&n&&(i.Tb(0),i.Qb(1,"header-backend",5),i.Sb()),2&n&&(i.Db(1),i.nc("headerTitle","Xem c\xe2u h\u1ecfi")("back_link","/admin/testbank/dashboard"))}function _(n,t){1&n&&i.Qb(0,"header-frontend",5),2&n&&i.nc("headerTitle","Xem c\xe2u h\u1ecfi")("back_link","/student/dashboard/2")}function x(n,t){1&n&&i.Qb(0,"azt-loading-effect")}function O(n,t){if(1&n&&(i.Vb(0,"h4"),i.Vb(1,"span",29),i.Sc(2,"\u0110\xe1p \xe1n c\u1ee7a HS: "),i.Ub(),i.Sc(3),i.Ub()),2&n){const n=i.gc(3);i.Db(3),i.Uc(" ",null==n.studentAnswerObj.content?"kh\xf4ng c\xf3 \u0111\xe1p \xe1n n\xe0o \u0111\u01b0\u1ee3c ch\u1ecdn.":n.studentAnswerObj.content," ")}}function k(n,t){if(1&n&&(i.Vb(0,"div",15),i.Sc(1," \u0110\u1ec1 thi: "),i.Vb(2,"span"),i.Sc(3),i.Ub(),i.Ub()),2&n){const n=i.gc(3);i.Db(3),i.Tc(n.assetObjectObj.name)}}function P(n,t){if(1&n&&(i.Vb(0,"div",30),i.Vb(1,"div",31),i.Qb(2,"azt-loaded-img",32),i.Ub(),i.lc(3,2),i.Ub()),2&n){const n=i.gc(3);i.Db(2),i.nc("imgSrc",n.curQuestionObj.files)}}function U(n,t){if(1&n&&(i.Vb(0,"div",33),i.Qb(1,"azt-loaded-img",32),i.Ub()),2&n){const n=i.gc(3);i.Db(1),i.nc("imgSrc",n.curQuestionObj.datas)}}function C(n,t){1&n&&(i.Vb(0,"div",45),i.Vb(1,"mat-icon"),i.Sc(2,"check"),i.Ub(),i.Ub())}function V(n,t){if(1&n){const n=i.Wb();i.Vb(0,"div",48),i.cc("click",function(e){i.Ec(n);const c=t.$implicit;return i.gc(6).onShowFile(e,c,-1)}),i.Vb(1,"span",49),i.Sc(2),i.Ub(),i.Vb(3,"span"),i.Sc(4),i.Ub(),i.Ub()}if(2&n){const n=t.$implicit;i.nc("matTooltip",n.name),i.Db(2),i.Tc(n.name.split(".")[0]),i.Db(2),i.Uc(".",n.extension,"")}}function y(n,t){if(1&n&&(i.Vb(0,"div",46),i.Qc(1,V,5,3,"div",47),i.Ub()),2&n){const n=i.gc().$implicit;i.Db(1),i.nc("ngForOf",n.files)}}function M(n,t){if(1&n){const n=i.Wb();i.Vb(0,"button",54),i.cc("click",function(){i.Ec(n);const t=i.gc(2).$implicit;return i.gc(4).acceptAnswer(t)}),i.Sc(1,"Ch\u1ea5p nh\u1eadn c\xe2u tr\u1ea3 l\u1eddi n\xe0y"),i.Ub()}}function S(n,t){if(1&n){const n=i.Wb();i.Vb(0,"span"),i.Sc(1,"B\u1ea1n \u0111\xe3 ch\u1ea5p nh\u1eadn c\xe2u tr\u1ea3 l\u1eddi n\xe0y"),i.Ub(),i.Vb(2,"button",55),i.cc("click",function(){i.Ec(n);const t=i.gc(2).$implicit;return i.gc(4).removeAcceptAnswer(t)}),i.Sc(3,"H\u1ee7y"),i.Ub()}}function D(n,t){if(1&n&&(i.Vb(0,"div",50),i.Vb(1,"div",51),i.Qc(2,M,2,0,"button",52),i.Qc(3,S,4,0,"ng-template",null,53,i.Rc),i.Ub(),i.Ub()),2&n){const n=i.Ac(4),t=i.gc().$implicit,e=i.gc(4);i.Db(2),i.nc("ngIf",t.id!=e.curQuestionObj.rightAnswerId)("ngIfElse",n)}}const I=function(n){return{"justify-end":n}};function Q(n,t){if(1&n&&(i.Vb(0,"div",35),i.Vb(1,"div",36),i.Vb(2,"div",37),i.Vb(3,"span"),i.Sc(4),i.Ub(),i.Ub(),i.Qc(5,C,3,0,"div",38),i.Ub(),i.Vb(6,"div",39),i.Qb(7,"div",40),i.Qc(8,y,2,1,"div",41),i.Vb(9,"div",42),i.Qc(10,D,5,2,"div",43),i.Vb(11,"div",21),i.Vb(12,"p",44),i.Sc(13),i.Ub(),i.Vb(14,"div",22),i.Qb(15,"azt-create-avatar",23),i.Vb(16,"span",24),i.Sc(17),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Ub()),2&n){const n=t.$implicit,e=t.index,c=i.gc(4);i.Db(4),i.Tc(n.totalAccept),i.Db(1),i.nc("ngIf",0===e&&0!=n.totalAccept),i.Db(2),i.nc("innerHtml",n.content,i.Fc),i.Db(1),i.nc("ngIf",n.files),i.Db(1),i.nc("ngClass",i.tc(10,I,c.isBackend)),i.Db(1),i.nc("ngIf",!c.isBackend),i.Db(3),i.Uc(" \u0110\xe3 tr\u1ea3 l\u1eddi ",c.calculationTime(n.createdAt)," tr\u01b0\u1edbc "),i.Db(2),i.nc("nameCreateAvatar",n.creatorObj.fullName)("size",25),i.Db(2),i.Tc(n.creatorObj.fullName)}}function j(n,t){if(1&n&&(i.Tb(0),i.Qc(1,Q,18,12,"div",34),i.Sb()),2&n){const n=i.gc(3);i.Db(1),i.nc("ngForOf",n.answerObjs)}}function z(n,t){if(1&n&&(i.Vb(0,"div",56),i.Vb(1,"button",57),i.Vb(2,"mat-icon"),i.Sc(3,"keyboard_arrow_down"),i.Ub(),i.Ub(),i.Ub()),2&n){const n=i.gc(3);i.Db(1),i.nc("disabled",n.isEndPage)}}function E(n,t){if(1&n&&(i.Tb(0),i.Vb(1,"div",12),i.Vb(2,"h3",13),i.Sc(3),i.Ub(),i.Qc(4,O,4,1,"h4",3),i.Vb(5,"div",14),i.Vb(6,"div",15),i.Sc(7," \u0110\u01b0\u1ee3c t\u1ea1o: "),i.Vb(8,"span"),i.Sc(9),i.Ub(),i.Ub(),i.Vb(10,"div",15),i.Sc(11," \u0110\xe3 xem: "),i.Vb(12,"span"),i.Sc(13),i.Ub(),i.Ub(),i.Qc(14,k,4,1,"div",16),i.Ub(),i.Qc(15,P,4,1,"div",17),i.Qc(16,U,2,1,"div",18),i.Qb(17,"div",19),i.Vb(18,"div",20),i.Vb(19,"div",21),i.Vb(20,"div",22),i.Qb(21,"azt-create-avatar",23),i.Vb(22,"span",24),i.Sc(23),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Vb(24,"div",25),i.Vb(25,"div",26),i.Vb(26,"div",27),i.Sc(27),i.Ub(),i.lc(28),i.Ub(),i.lc(29,1),i.Qc(30,j,2,1,"ng-container",3),i.Ub(),i.Qc(31,z,4,1,"div",28),i.Sb()),2&n){const n=i.gc(2);i.Db(3),i.Uc(" ",n.curQuestionObj.title," "),i.Db(1),i.nc("ngIf",null!=n.studentAnswerObj),i.Db(5),i.Uc("",n.calculationTime(n.curQuestionObj.createdAt)," tr\u01b0\u1edbc"),i.Db(4),i.Uc("",n.assetGroupStatisticObj.totalView," l\u01b0\u1ee3t"),i.Db(1),i.nc("ngIf",n.assetObjectObj),i.Db(1),i.nc("ngIf",n.curQuestionObj.files),i.Db(1),i.nc("ngIf",n.curQuestionObj.datas),i.Db(1),i.nc("innerHtml",n.curQuestionObj.content,i.Fc),i.Db(4),i.nc("nameCreateAvatar",n.curQuestionObj.creatorObj.fullName)("size",25),i.Db(2),i.Tc(n.curQuestionObj.creatorObj.fullName),i.Db(4),i.Uc("",n.answerObjs.length," c\xe2u tr\u1ea3 l\u1eddi"),i.Db(3),i.nc("ngIf",n.answerObjs.length>0),i.Db(1),i.nc("ngIf",!n.isEndPage)}}function A(n,t){1&n&&(i.Vb(0,"div",58),i.Vb(1,"span",59),i.Sc(2,"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u"),i.Ub(),i.Ub())}function F(n,t){if(1&n){const n=i.Wb();i.Vb(0,"div",6),i.Vb(1,"div",7),i.Vb(2,"div",8),i.Vb(3,"div",9),i.Vb(4,"mat-icon",10),i.cc("click",function(){return i.Ec(n),i.gc().ShowDialogConfirm()}),i.Sc(5,"clear"),i.Ub(),i.Ub(),i.Qc(6,E,32,14,"ng-container",0),i.Qc(7,A,3,0,"ng-template",null,11,i.Rc),i.Ub(),i.Ub(),i.Ub()}if(2&n){const n=i.Ac(8),t=i.gc();i.Db(6),i.nc("ngIf",t.curQuestionObj)("ngIfElse",n)}}function L(n,t){if(1&n){const n=i.Wb();i.Vb(0,"div"),i.Vb(1,"azt-preview-media",60),i.cc("closePreview",function(){return i.Ec(n),i.gc().onFileClose()}),i.Ub(),i.Ub()}if(2&n){const n=i.gc();i.Db(1),i.nc("fileOption",n.previewFile)}}const T=function(n){return{title:n}};function q(n,t){if(1&n){const n=i.Wb();i.Vb(0,"azt-dialog-confirm",61),i.cc("sendEvent",function(t){return i.Ec(n),i.gc().removeQuestion(t)}),i.Ub()}if(2&n){const n=i.gc();i.nc("data",i.tc(1,T,n.curQuestionObj.title))}}const B=[[["","buttonShowFormInput",""]],[["","answerInput",""]],[["","nextBack",""]]],N=["[buttonShowFormInput]","[answerInput]","[nextBack]"];let W=(()=>{class n{constructor(n,t,e,c,o,s){this.activeRoute=n,this.commonService=t,this.apiQAService=e,this.router=c,this.fb=o,this.cd=s,this.isBackend=!1,this.isLoading=!1,this.totalQuestion=0,this.studentAnswerObj=null,this.sendEvent=new i.o,this.previewFile={},this.isShowPreviewFile=!1,this.showDialogConfirm=!1,this.isShowFormInputAnswer=!1}calculationTime(n,t){return this.commonService.calculationTime(n,t)}onFileClose(){this.isShowPreviewFile=!1,this.previewFile={}}onShowFile(n,t,e){this.isShowPreviewFile=!0,this.previewFile=Object.assign(Object.assign({},t),{index:e})}acceptAnswer(n){this.apiQAService.acceptAnswer(this.curQuestionObj.id,n.id).subscribe(t=>{t.success?(this.curQuestionObj.rightAnswerId=n.id,n.totalAccept++,this.commonService.snackSuccess("Ch\u1ea5p nh\u1eadn c\xe2u tr\u1ea3 l\u1eddi th\xe0nh c\xf4ng","")):this.commonService.snackError("Ch\u1ea5p nh\u1eadn c\xe2u tr\u1ea3 l\u1eddi kh\xf4ng th\xe0nh c\xf4ng","")})}removeAcceptAnswer(n){this.apiQAService.removeAcceptAnswer(this.curQuestionObj.id,n.id).subscribe(t=>{t.success?(this.curQuestionObj.rightAnswerId=null,n.totalAccept--,this.commonService.snackSuccess("B\u1ecf ch\u1ea5p nh\u1eadn c\xe2u tr\u1ea3 l\u1eddi th\xe0nh c\xf4ng","")):this.commonService.snackError("B\u1ecf ch\u1ea5p nh\u1eadn c\xe2u tr\u1ea3 l\u1eddi kh\xf4ng th\xe0nh c\xf4ng","")})}ShowDialogConfirm(){this.showDialogConfirm=!0}removeQuestion(n){this.showDialogConfirm=!1,"cancel"!=n&&this.sendEvent.emit(this.curQuestionObj.id)}ngOnInit(){}ngOnChanges(){}}return n.\u0275fac=function(t){return new(t||n)(i.Pb(c.a),i.Pb(o.a),i.Pb(s.a),i.Pb(c.i),i.Pb(r.g),i.Pb(i.h))},n.\u0275cmp=i.Jb({type:n,selectors:[["azt-view-answer-question"]],inputs:{isBackend:"isBackend",isLoading:"isLoading",curQuestionObj:"curQuestionObj",totalQuestion:"totalQuestion",assetGroupStatisticObj:"assetGroupStatisticObj",assetObjectObj:"assetObjectObj",answerObjs:"answerObjs",isEndPage:"isEndPage",studentAnswerObj:"studentAnswerObj"},outputs:{sendEvent:"sendEvent"},features:[i.Bb],ngContentSelectors:N,decls:8,vars:6,consts:[[4,"ngIf","ngIfElse"],["notBackEnd",""],["doneLoading",""],[4,"ngIf"],[3,"data","sendEvent",4,"ngIf"],[3,"headerTitle","back_link"],[1,"app","py-4","maxW1200"],[1,"container"],[1,"block-list","p-4",2,"position","relative"],[2,"position","absolute","top","5px","right","5px"],[1,"clickable",2,"background","#d3d1d1","padding","2px","border-radius","2px","height","auto","width","auto",3,"click"],["emptyData",""],[1,"block-question"],[1,"question-title"],[1,"question-info"],[1,"question-text"],["class","question-text",4,"ngIf"],["class","question-block-img",4,"ngIf"],["class","homework-image",4,"ngIf"],["id","__QA_question",1,"question-content",3,"innerHtml"],[1,"d-flex","mt-2","justify-end"],[1,"answer-user"],[1,"user-info"],[2,"cursor","pointer","margin-right","5px",3,"nameCreateAvatar","size"],[1,"user-name"],[1,"block-list-answer"],["id","addAnswerBar"],[1,"answer-count"],["class","d-flex justify-content-center mt-1",4,"ngIf"],[2,"font-weight","500"],[1,"question-block-img"],[1,"question-image"],[3,"imgSrc"],[1,"homework-image"],["class","block-answer",4,"ngFor","ngForOf"],[1,"block-answer"],[1,"block-answer-left"],[1,"count-view"],["class","true-answer",4,"ngIf"],[1,"block-answer-right"],[1,"answer-content",3,"innerHtml"],["id","answer-attach",4,"ngIf"],[1,"block-answer-bottom",3,"ngClass"],["class","answer-confirm",4,"ngIf"],[1,"time-ago"],[1,"true-answer"],["id","answer-attach"],["class","file-item",3,"matTooltip","click",4,"ngFor","ngForOf"],[1,"file-item",3,"matTooltip","click"],["alt","",1,"img-preview","truncate"],[1,"answer-confirm"],[1,"confirm"],["class","btn btn-primary",3,"click",4,"ngIf","ngIfElse"],["accepted",""],[1,"btn","btn-primary",3,"click"],[1,"btn-unconfirm",3,"click"],[1,"d-flex","justify-content-center","mt-1"],["mat-button","","matTooltip","Xem th\xeam",1,"btn-all-add",3,"disabled"],[1,"block-else"],[1,"text-else"],[3,"fileOption","closePreview"],[3,"data","sendEvent"]],template:function(n,t){if(1&n&&(i.mc(B),i.Qc(0,w,2,2,"ng-container",0),i.Qc(1,_,1,2,"ng-template",null,1,i.Rc),i.Qc(3,x,1,0,"azt-loading-effect",0),i.Qc(4,F,9,2,"ng-template",null,2,i.Rc),i.Qc(6,L,2,1,"div",3),i.Qc(7,q,1,3,"azt-dialog-confirm",4)),2&n){const n=i.Ac(2),e=i.Ac(5);i.nc("ngIf",t.isBackend)("ngIfElse",n),i.Db(3),i.nc("ngIf",t.isLoading)("ngIfElse",e),i.Db(3),i.nc("ngIf",t.isShowPreviewFile),i.Db(1),i.nc("ngIf",1==t.showDialogConfirm)}},directives:[a.m,l.a,b.a,d.a,g.a,f.a,u.a,a.l,a.k,p.a,m.b,h.a,v.a],styles:[".block-list[_ngcontent-%COMP%]{background:#ececec;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.14)}.block-list-bottom[_ngcontent-%COMP%]{margin:10px 0}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]{border:none;display:flex;align-items:center;color:#707070;background:transparent}.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%]{text-transform:none;margin-left:2px}button[_ngcontent-%COMP%]{border:none;text-transform:none}.justify-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.img-preview[_ngcontent-%COMP%]{cursor:pointer}.block-else[_ngcontent-%COMP%]{height:90px;display:flex;justify-content:center;align-items:center;border-radius:5px}.text-else[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.question-title[_ngcontent-%COMP%]{font-weight:600;margin-bottom:10px}.question-info[_ngcontent-%COMP%]{display:flex;align-items:center}.question-image[_ngcontent-%COMP%]{background-color:#fff;margin:20px auto 0}.question-block-img[_ngcontent-%COMP%]{position:relative}.question-text[_ngcontent-%COMP%]{font-size:13px;color:#9a9a9a;margin-right:10px}.question-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.question-content[_ngcontent-%COMP%]{margin-top:10px}.block-list-answer[_ngcontent-%COMP%]{margin-top:15px}.answer-count[_ngcontent-%COMP%]{font-size:18px;color:#333}.block-answer[_ngcontent-%COMP%]{display:flex;margin-top:15px;padding-bottom:10px;border-bottom:1px solid #d0d0d0}.block-answer[_ngcontent-%COMP%]:last-child{border-bottom:none}.block-answer-left[_ngcontent-%COMP%]{margin-right:10px}.count-view[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ddd;border-radius:5px;display:flex;justify-content:center;align-items:center;padding:6px;width:30px;height:30px}.count-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.true-answer[_ngcontent-%COMP%]{color:#0ca74a}.true-answer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.block-answer-right[_ngcontent-%COMP%]{padding-right:15px;flex:auto}.confirm[_ngcontent-%COMP%]{padding:6px 7px;background:#e8e8e8;border-radius:5px;font-size:12px}.btn-unconfirm[_ngcontent-%COMP%]{color:#00a7d0;background:transparent;transition:all .5s}.btn-unconfirm[_ngcontent-%COMP%]:hover{color:#026680;font-weight:700}.btn-confirm[_ngcontent-%COMP%]{background:#169bd5;color:#fff;font-size:13px;transition:all .5s;border-radius:5px;padding:5px 7px 5px 20px}.btn-confirm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;font-size:20px}.btn-confirm[_ngcontent-%COMP%]:hover{background:#0b6992}.block-answer-bottom[_ngcontent-%COMP%]{margin-top:15px;justify-content:space-between}.block-answer-bottom[_ngcontent-%COMP%], .user-info[_ngcontent-%COMP%]{display:flex;align-items:center}.time-ago[_ngcontent-%COMP%]{color:#868686;font-size:10px;margin-bottom:0}.btn-all-add[_ngcontent-%COMP%]{color:#00a7d0}#formInputAnswer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:1px solid #dfdfdf;border-radius:3px;padding:5px}#addAnswerBar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}#answer-attach[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}#answer-attach[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]{max-width:250px;margin-right:20px;display:flex;border:1px solid #ddd;padding:0 7px}#answer-attach[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]:hover{border:1px solid #333;cursor:pointer}#answer-attach[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-style:italic}@media screen and (max-width:500px){.block-answer-bottom[_ngcontent-%COMP%]{flex-direction:column-reverse;align-items:flex-start}.confirm[_ngcontent-%COMP%], .confirm-took[_ngcontent-%COMP%]{margin-top:10px}.question-info[_ngcontent-%COMP%]{flex-direction:column}.question-info[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%]{margin-top:10px}}"]}),n})()},wAhq:function(n,t,e){"use strict";e.d(t,"a",function(){return V});var i=e("fXoL"),c=e("quSY"),o=e("BTbT"),s=e("gbi4"),r=e("jhN1"),a=e("ofXK"),l=e("NFeN"),b=e("IkSl"),d=e("Vwpm");function g(n,t){1&n&&(i.Vb(0,"div",2),i.Vb(1,"div",3),i.Vb(2,"span",4),i.Sc(3,"Loading..."),i.Ub(),i.Ub(),i.Ub())}function f(n,t){if(1&n&&(i.Vb(0,"div",20),i.Sc(1),i.Ub()),2&n){const n=i.gc(2);i.Db(1),i.Tc(n.fileOption.name)}}function u(n,t){1&n&&(i.Vb(0,"div",20),i.Sc(1,"D\u1eef li\u1ec7u \u1ea3nh c\u1eaft \u0111\u1ec1"),i.Ub())}function p(n,t){if(1&n&&(i.Vb(0,"div",21),i.Sc(1),i.Ub()),2&n){const n=i.gc(2);i.Db(1),i.Vc("Dung l\u01b0\u1ee3ng: ",n.file_mb," MB | Lo\u1ea1i : ",n.fileOption.mimes,"")}}function m(n,t){1&n&&(i.Vb(0,"div",21),i.Sc(1,"Dung l\u01b0\u1ee3ng: 0.3 MB | Lo\u1ea1i : Images"),i.Ub())}function h(n,t){if(1&n&&(i.Vb(0,"a",22),i.Vb(1,"mat-icon",16),i.Sc(2,"save_alt"),i.Ub(),i.Ub()),2&n){const n=i.gc(2);i.Eb("href",n.root_link,i.Ic)("download",n.fileOption.name)}}function v(n,t){if(1&n){const n=i.Wb();i.Vb(0,"div"),i.Vb(1,"div",28),i.Vb(2,"audio",29),i.Vb(3,"source",30),i.cc("load",function(){return i.Ec(n),i.gc(3).onLoad()}),i.Ub(),i.Sc(4," Your browser does not support the audio element. "),i.Ub(),i.Ub(),i.Ub()}if(2&n){const n=i.gc(3);i.Db(3),i.nc("src",n.cdn_link,i.Ic),i.Eb("type",n.fileOption.mimes)}}function w(n,t){if(1&n){const n=i.Wb();i.Vb(0,"div"),i.Vb(1,"div",31),i.Vb(2,"video",32),i.Vb(3,"source",30),i.cc("load",function(){return i.Ec(n),i.gc(3).onLoad()}),i.Ub(),i.Vb(4,"p",33),i.Sc(5," B\u1ea1n \u0111ang s\u1eed d\u1ee5ng tr\xecnh duy\u1ec7t kh\xf4ng h\u1ed7 tr\u1ee3 xem video tr\u1ef1c tuy\u1ebfn. "),i.Ub(),i.Ub(),i.Ub(),i.Ub()}if(2&n){const n=i.gc(3);i.Db(2),i.oc("poster",n.video_thumb_url,i.Ic),i.Db(1),i.nc("src",n.cdn_link,i.Ic),i.Eb("type",n.fileOption.mimes)}}function _(n,t){if(1&n){const n=i.Wb();i.Vb(0,"div"),i.Vb(1,"iframe",34),i.cc("load",function(){return i.Ec(n),i.gc(3).onLoad()}),i.Ub(),i.Ub()}if(2&n){const n=i.gc(3);i.Db(1),i.nc("src",n.cdn_link,i.Gc)}}function x(n,t){if(1&n){const n=i.Wb();i.Vb(0,"div"),i.Vb(1,"div",31),i.Vb(2,"img",35),i.cc("load",function(){return i.Ec(n),i.gc(3).onLoad()}),i.Ub(),i.Ub(),i.Ub()}if(2&n){const n=i.gc(3);i.Db(2),i.Eb("src",n.cdn_link,i.Ic)}}function O(n,t){if(1&n){const n=i.Wb();i.Vb(0,"div"),i.Vb(1,"div",36),i.Vb(2,"iframe",37),i.cc("load",function(){return i.Ec(n),i.gc(3).onLoad()}),i.Ub(),i.Ub(),i.Ub()}if(2&n){const n=i.gc(3);i.Db(2),i.nc("src",n.cdn_link,i.Gc)}}function k(n,t){if(1&n){const n=i.Wb();i.Vb(0,"div"),i.Vb(1,"div",38),i.Vb(2,"pdf-viewer",39),i.cc("load",function(){return i.Ec(n),i.gc(3).onLoad()}),i.Ub(),i.Ub(),i.Ub()}if(2&n){const n=i.gc(3);i.Db(2),i.nc("src",n.cdn_link)("show-all",!0)}}function P(n,t){if(1&n&&(i.Tb(0),i.Vb(1,"div",23),i.Vb(2,"div",24),i.Qc(3,v,5,2,"div",25),i.Qc(4,w,6,3,"div",25),i.Qc(5,_,2,1,"div",25),i.Qc(6,x,3,1,"div",25),i.Qc(7,O,3,1,"div",25),i.Qc(8,k,3,2,"div",25),i.Qb(9,"div",26),i.Ub(),i.Qb(10,"div",27),i.Ub(),i.Sb()),2&n){const n=i.gc(2);i.Db(3),i.nc("ngIf","audio"===n.typeFile),i.Db(1),i.nc("ngIf","video"===n.typeFile),i.Db(1),i.nc("ngIf","vimeo"===n.typeFile),i.Db(1),i.nc("ngIf","image"===n.typeFile),i.Db(1),i.nc("ngIf","officeapps"===n.typeFile),i.Db(1),i.nc("ngIf","pdf"===n.typeFile)}}function U(n,t){if(1&n&&(i.Vb(0,"div",23),i.Vb(1,"div",24),i.Vb(2,"div",40),i.Qb(3,"azt-loaded-img",41),i.Ub(),i.Ub(),i.Ub()),2&n){const n=i.gc(2);i.Db(3),i.nc("imgSrc",n.linkUrl)}}function C(n,t){if(1&n){const n=i.Wb();i.Vb(0,"div",5),i.Vb(1,"div",6),i.Vb(2,"div",7),i.Vb(3,"div",8),i.Qb(4,"div",9),i.Ub(),i.Qc(5,f,2,1,"div",10),i.Qc(6,u,2,0,"div",10),i.Qc(7,p,2,2,"div",11),i.Qc(8,m,2,0,"div",11),i.Ub(),i.Vb(9,"div",12),i.Vb(10,"span",13),i.Qc(11,h,3,2,"a",14),i.Ub(),i.Vb(12,"span",15),i.cc("click",function(){return i.Ec(n),i.gc().btnClosePreview()}),i.Vb(13,"mat-icon",16),i.Sc(14,"close"),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Vb(15,"div",17),i.Qc(16,P,11,6,"ng-container",18),i.Qc(17,U,4,1,"ng-template",null,19,i.Rc),i.Ub(),i.Ub()}if(2&n){const n=i.Ac(18),t=i.gc();i.Db(5),i.nc("ngIf",null!=t.fileOption),i.Db(1),i.nc("ngIf",null==t.fileOption),i.Db(1),i.nc("ngIf",null!=t.fileOption),i.Db(1),i.nc("ngIf",null==t.fileOption),i.Db(3),i.nc("ngIf",null!=t.fileOption),i.Db(5),i.nc("ngIf",0==t.typePreview)("ngIfElse",n)}}let V=(()=>{class n{constructor(n,t,e){this.commonService=n,this.dom=t,this.sanitizer=e,this.typePreview=0,this.linkUrl="",this.closePreview=new i.o,this.subscriptions=new c.a,this.typeFile="",this.cdn_link="",this.root_link="",this.file_mb=0,this.video_thumb_url="",this.isVimeoLink=!1,this.isLoading=!0}ngOnInit(){document.body.classList.add("overflow-hidden"),setTimeout(()=>{this.initData()},0),this.video_thumb_url="https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/images/video-thumb.png"}onLoad(){this.isLoading=!1}initData(){if(0==this.typePreview){if(this.cdn_link=this.commonService.getMyCdn(this.fileOption.url),this.root_link=this.cdn_link,this.file_mb=this.getFileMB(this.fileOption.size),this.typeFile=Object(o.c)(this.fileOption.mimes),this.isVimeoLink=this.cdn_link.includes("https://player.vimeo.com/")||this.cdn_link.includes("https://mega.nz"),this.isVimeoLink&&(this.typeFile="vimeo"),""!=this.cdn_link)switch(this.typeFile){case"pdf":this.cdn_link=this.cdn_link;break;case"officeapps":this.cdn_link=this.dom.bypassSecurityTrustResourceUrl(this.commonService.getLinkEmbedDocument(this.cdn_link));break;case"video":default:this.cdn_link=this.dom.bypassSecurityTrustResourceUrl(this.cdn_link)}}else this.linkUrl=this.commonService.getMyCdn(this.linkUrl);setTimeout(()=>{this.isLoading=!1},200)}removeClassCss(){document.body.classList.remove("overflow-hidden")}objToString(n){let t="";for(const[e,i]of Object.entries(n))t+=`${e}::${i}\n`;return t}btnClosePreview(){this.removeClassCss(),this.closePreview.emit()}getFileMB(n){return n>0?(n/=1048576).toFixed(2):0}reloadFrame(n){let t=document.getElementById(n);t&&t.parentNode.replaceChild(t.cloneNode(),t)}ngOnDestroy(){this.subscriptions.unsubscribe(),this.removeClassCss()}}return n.\u0275fac=function(t){return new(t||n)(i.Pb(s.a),i.Pb(r.b),i.Pb(r.b))},n.\u0275cmp=i.Jb({type:n,selectors:[["azt-preview-media"]],inputs:{fileOption:"fileOption",typePreview:"typePreview",linkUrl:"linkUrl"},outputs:{closePreview:"closePreview"},decls:2,vars:2,consts:[["class","loading-block",4,"ngIf"],["class","file-preview",4,"ngIf"],[1,"loading-block"],["role","status",1,"spinner-border","text-secondary",2,"width","5rem","height","5rem"],[1,"sr-only"],[1,"file-preview"],[1,"file-preview__header","flx","flx-sp-btw"],[1,"file-preview__header-left"],["title","",1,"avatar","avatar--xs"],[1,"avatar-img",2,"background-image",'url("https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/images/documents.png")',"background-size","cover"],["class","file-preview__header__title",4,"ngIf"],["class","file-preview__header__send-time",4,"ngIf"],[1,"file-preview__header-right"],[1,"file-preview__controls-container"],["class","clickable download","target","_blank",4,"ngIf"],[1,"file-preview__buttons-container",3,"click"],[2,"color","rgb(53, 53, 53)","cursor","pointer"],[1,"file-preview__main","flx",2,"overflow-x","auto","flex","1 1 auto"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"file-preview__header__title"],[1,"file-preview__header__send-time"],["target","_blank",1,"clickable","download"],[1,"file-preview__main-iframe","mx-auto"],[1,"file-preview__notify"],[4,"ngIf"],[1,"tool-hide"],[1,"file-preview__main-comments"],[1,"container-fluid","mt-3"],["controls",""],[3,"src","load"],[1,"pl-2","pr-2","mt-3"],["id","my-video","playsinline","playsinline","controls","","preload","auto","data-setup","{}",1,"video-js",2,"max-height","calc(100vh - 80px)","width","100%","padding-bottom","1rem",3,"poster"],[1,"vjs-no-js"],["frameborder","0","allowfullscreen","",2,"width","100vw","height","95vh","max-height","calc(100vh - 60px)","padding-bottom","1rem",3,"src","load"],["alt","Responsive image",1,"img-fluid","image-preview",2,"max-height","calc(100vh - 80px)","padding-bottom","1rem",3,"load"],[1,"pl-2","pr-2","mp-0"],["frameborder","0",2,"width","100vw","height","95vh","max-height","calc(100vh - 60px)","padding-bottom","1rem",3,"src","load"],[1,"container-fluid","mp-0"],[2,"width","100vw","height","95vh","max-height","calc(100vh - 60px)","padding-bottom","1rem","display","block",3,"src","show-all","load"],[1,"pl-2","pr-2","mt-3","block-img"],[3,"imgSrc"]],template:function(n,t){1&n&&(i.Qc(0,g,4,0,"div",0),i.Qc(1,C,19,7,"div",1)),2&n&&(i.nc("ngIf",t.isLoading),i.Db(1),i.nc("ngIf",(null!=t.fileOption||""!=t.linkUrl)&&!t.isLoading))},directives:[a.m,l.a,b.a,d.a],styles:[".file-preview[_ngcontent-%COMP%]{background:#ecf0f5;position:fixed;width:100%;height:100vh;z-index:9999;display:flex;flex-direction:column;left:0;top:0}.block-img[_ngcontent-%COMP%]{background:#a3a3a3;width:100vw;height:90vh;overflow-y:auto}.loading-block[_ngcontent-%COMP%]{z-index:1000;justify-content:center;align-items:center;left:0;top:0;height:100%;min-height:100vh;background-color:#ecf0f5}.file-preview__main[_ngcontent-%COMP%], .loading-block[_ngcontent-%COMP%]{width:100%;display:flex;position:fixed}.file-preview__main[_ngcontent-%COMP%]{margin-top:65px;min-height:100%;min-width:277px;background:#ecf0f5}.file-preview__header[_ngcontent-%COMP%]{padding-top:10px;height:65px;background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.2);position:fixed;align-items:center;z-index:1;top:0;width:100%}.flx-sp-btw[_ngcontent-%COMP%]{justify-content:space-between}.flx[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}.file-preview__header-left[_ngcontent-%COMP%]{margin-left:20px;margin-right:10px;margin-bottom:12px;flex:1 1 50px;min-width:0}.file-preview__header-left[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{float:left;margin-right:10px}.avatar--xs[_ngcontent-%COMP%]{width:40px;height:40px;font-size:17px}.avatar[_ngcontent-%COMP%]{position:relative;color:#fff;contain:layout size style}.avatar--xs[_ngcontent-%COMP%] > .avatar-img[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#e5efff}.avatar-img[_ngcontent-%COMP%]{border-radius:100%}.file-preview__header__title[_ngcontent-%COMP%]{font-size:15px;color:#222;font-weight:500}.file-preview__header__send-time[_ngcontent-%COMP%], .file-preview__header__title[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.file-preview__header__send-time[_ngcontent-%COMP%]{padding-top:2px;font-size:13px;color:#a0a0a0}.file-preview__header-right[_ngcontent-%COMP%]{color:#fff;margin-right:15px;white-space:nowrap;display:flex}.file-preview__controls-container[_ngcontent-%COMP%]{margin-right:40px}.file-preview__buttons-container[_ngcontent-%COMP%]{display:inline-flex;align-items:center;position:relative}.mp-0[_ngcontent-%COMP%]{margin:0!important;padding:0!important}"]}),n})()},wPhD:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var i=e("fXoL"),c=e("tyNb"),o=e("gbi4"),s=e("3Pt+"),r=e("ofXK");let a=(()=>{class n{constructor(n,t,e,c,o){this.activeRoute=n,this.commonService=t,this.router=e,this.fb=c,this.vps=o,this.data={},this.sendEvent=new i.o}eventDialog(n){this.sendEvent.emit(n)}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(i.Pb(c.a),i.Pb(o.a),i.Pb(c.a),i.Pb(s.g),i.Pb(r.w))},n.\u0275cmp=i.Jb({type:n,selectors:[["azt-dialog-confirm"]],inputs:{data:"data"},outputs:{sendEvent:"sendEvent"},decls:12,vars:1,consts:[[1,"form"],[1,"body"],[2,"font-weight","500"],[2,"font-weight","700"],[1,"d-flex","justify-content-end","mt-4"],[1,"buttom-clean","mr-2",3,"click"],[1,"button-delete",3,"click"]],template:function(n,t){1&n&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.Vb(2,"div",2),i.Sc(3," B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a c\xe2u h\u1ecfi "),i.Vb(4,"span",3),i.Sc(5),i.Ub(),i.Sc(6," kh\xf4ng? "),i.Ub(),i.Vb(7,"div",4),i.Vb(8,"div",5),i.cc("click",function(){return t.eventDialog("cancel")}),i.Sc(9," H\u1ee6Y "),i.Ub(),i.Vb(10,"div",6),i.cc("click",function(){return t.eventDialog("delete")}),i.Sc(11," X\xd3A "),i.Ub(),i.Ub(),i.Ub(),i.Ub()),2&n&&(i.Db(5),i.Tc(t.data.title))},styles:[".form[_ngcontent-%COMP%]{background:rgba(0,0,0,.5607843137254902);z-index:90;display:flex;left:0;top:0;position:fixed;height:100vh;width:100%}.body[_ngcontent-%COMP%]{width:90%;max-width:700px;background:#fff;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:20px;border-radius:5px;margin:auto}.button-delete[_ngcontent-%COMP%]{background-color:#dc3545;border-radius:5px;width:85px;padding:5px 0;text-align:center;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer}.button-delete[_ngcontent-%COMP%]:hover{background-color:#d61226}.buttom-clean[_ngcontent-%COMP%]{border:1px solid #797979;border-radius:5px;width:85px;padding:5px 0;text-align:center;display:flex;align-items:center;justify-content:center;cursor:pointer}.buttom-clean[_ngcontent-%COMP%]:hover{background-color:#dfdfdf}"]}),n})()}}]);