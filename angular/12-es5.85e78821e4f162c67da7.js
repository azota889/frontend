!function(){function n(t,e){return(n=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(t,e)}function t(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}();return function(){var c,o=i(n);if(t){var r=i(this).constructor;c=Reflect.construct(o,arguments,r)}else c=o.apply(this,arguments);return e(this,c)}}function e(n,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function r(n,t,e){return t&&o(n.prototype,t),e&&o(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{diKk:function(n,t,e){"use strict";e.d(t,"a",function(){return H});var i=e("fXoL"),o=e("KVcZ"),a=e("oUVn"),s=e("k9IB"),b=e("ofXK"),u=e("hZBc"),l=e("k3bj"),d=e("nzN9"),f=e("NFeN"),g=e("Qu3c"),p=e("IU+r"),m=e("Vwpm"),v=e("bTqV"),h=e("wAhq"),O=e("wPhD");function w(n,t){1&n&&(i.Tb(0),i.Qb(1,"header-backend",5),i.Sb()),2&n&&(i.Db(1),i.nc("headerTitle","Xem c\xe2u h\u1ecfi")("back_link","/admin/testbank/dashboard"))}function x(n,t){1&n&&i.Qb(0,"header-frontend",5),2&n&&i.nc("headerTitle","Xem c\xe2u h\u1ecfi")("back_link","/student/dashboard/2")}function k(n,t){1&n&&i.Qb(0,"azt-loading-effect")}function P(n,t){if(1&n){var e=i.Wb();i.Vb(0,"div",11),i.Vb(1,"mat-icon",12),i.cc("click",function(){return i.Ec(e),i.gc(2).ShowDialogConfirm()}),i.Tc(2,"clear"),i.Ub(),i.Ub()}}function C(n,t){if(1&n&&(i.Vb(0,"h4"),i.Vb(1,"span",29),i.Tc(2,"\u0110\xe1p \xe1n c\u1ee7a HS: "),i.Ub(),i.Tc(3),i.Ub()),2&n){var e=i.gc(3);i.Db(3),i.Vc(" ",null==e.studentAnswerObj.content?"kh\xf4ng c\xf3 \u0111\xe1p \xe1n n\xe0o \u0111\u01b0\u1ee3c ch\u1ecdn.":e.studentAnswerObj.content,"")}}function j(n,t){if(1&n&&(i.Vb(0,"div",16),i.Tc(1," \u0110\u1ec1 thi: "),i.Vb(2,"span"),i.Tc(3),i.Ub(),i.Ub()),2&n){var e=i.gc(3);i.Db(3),i.Uc(e.assetObjectObj.name)}}function _(n,t){if(1&n&&(i.Vb(0,"div",30),i.Vb(1,"div",31),i.Qb(2,"azt-loaded-img",32),i.Ub(),i.lc(3,2),i.Ub()),2&n){var e=i.gc(3);i.Db(2),i.nc("imgSrc",e.curQuestionObj.files)}}function y(n,t){1&n&&(i.Vb(0,"div",44),i.Vb(1,"mat-icon"),i.Tc(2,"check"),i.Ub(),i.Ub())}function V(n,t){if(1&n){var e=i.Wb();i.Vb(0,"div",47),i.cc("click",function(){i.Ec(e);var n=t.$implicit;return i.gc(6).onShowFile(n,-1)}),i.Vb(1,"span",48),i.Tc(2),i.Ub(),i.Ub()}if(2&n){var c=t.$implicit;i.oc("matTooltip",c.name),i.Db(2),i.Uc(c.name)}}function M(n,t){if(1&n&&(i.Vb(0,"div",45),i.Rc(1,V,3,2,"div",46),i.Ub()),2&n){var e=i.gc().$implicit;i.Db(1),i.nc("ngForOf",e.fileObjs)}}function U(n,t){if(1&n){var e=i.Wb();i.Vb(0,"button",53),i.cc("click",function(){i.Ec(e);var n=i.gc(2).$implicit;return i.gc(4).acceptAnswer(n)}),i.Tc(1,"Ch\u1ea5p nh\u1eadn c\xe2u tr\u1ea3 l\u1eddi n\xe0y"),i.Ub()}}function D(n,t){if(1&n){var e=i.Wb();i.Vb(0,"span"),i.Tc(1,"B\u1ea1n \u0111\xe3 ch\u1ea5p nh\u1eadn c\xe2u tr\u1ea3 l\u1eddi n\xe0y"),i.Ub(),i.Vb(2,"button",54),i.cc("click",function(){i.Ec(e);var n=i.gc(2).$implicit;return i.gc(4).removeAcceptAnswer(n)}),i.Tc(3,"H\u1ee7y"),i.Ub()}}function A(n,t){if(1&n&&(i.Vb(0,"div",49),i.Vb(1,"div",50),i.Rc(2,U,2,0,"button",51),i.Rc(3,D,4,0,"ng-template",null,52,i.Sc),i.Ub(),i.Ub()),2&n){var e=i.Ac(4),c=i.gc().$implicit,o=i.gc(4);i.Db(2),i.nc("ngIf",c.id!=o.curQuestionObj.rightAnswerId)("ngIfElse",e)}}var I=function(n){return{"justify-end":n}};function T(n,t){if(1&n&&(i.Vb(0,"div",34),i.Vb(1,"div",35),i.Vb(2,"div",36),i.Vb(3,"span"),i.Tc(4),i.Ub(),i.Ub(),i.Rc(5,y,3,0,"div",37),i.Ub(),i.Vb(6,"div",38),i.Qb(7,"div",39),i.Rc(8,M,2,1,"div",40),i.Vb(9,"div",41),i.Rc(10,A,5,2,"div",42),i.Vb(11,"div",21),i.Vb(12,"p",43),i.Tc(13),i.Ub(),i.Vb(14,"div",22),i.Qb(15,"azt-create-avatar",23),i.Vb(16,"span",24),i.Tc(17),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Ub()),2&n){var e=t.$implicit,c=i.gc(4);i.Db(4),i.Uc(e.totalAccept),i.Db(1),i.nc("ngIf",!0===c.viewBigNumber(e.totalAccept,e.id)),i.Db(2),i.nc("innerHtml",e.content,i.Fc),i.Db(1),i.nc("ngIf",0!=(null==e.fileObjs?null:e.fileObjs.length)),i.Db(1),i.nc("ngClass",i.tc(10,I,c.isBackend)),i.Db(1),i.nc("ngIf",!c.isBackend),i.Db(3),i.Vc("\u0110\xe3 tr\u1ea3 l\u1eddi ",c.calculationTime(e.createdAt)," tr\u01b0\u1edbc"),i.Db(2),i.nc("nameCreateAvatar",null==e.creatorObj?null:e.creatorObj.fullName)("size",25),i.Db(2),i.Uc(null==e.creatorObj?null:e.creatorObj.fullName)}}function Q(n,t){if(1&n&&(i.Tb(0),i.Rc(1,T,18,12,"div",33),i.Sb()),2&n){var e=i.gc(3);i.Db(1),i.nc("ngForOf",e.answerObjs)}}function S(n,t){if(1&n&&(i.Vb(0,"div",55),i.Vb(1,"button",56),i.Vb(2,"mat-icon"),i.Tc(3,"keyboard_arrow_down"),i.Ub(),i.Ub(),i.Ub()),2&n){var e=i.gc(3);i.Db(1),i.nc("disabled",1==e.isEndPage)}}function E(n,t){if(1&n&&(i.Tb(0),i.Vb(1,"div",13),i.Vb(2,"h3",14),i.Tc(3),i.Ub(),i.Rc(4,C,4,1,"h4",3),i.Vb(5,"div",15),i.Vb(6,"div",16),i.Tc(7," \u0110\u01b0\u1ee3c t\u1ea1o: "),i.Vb(8,"span"),i.Tc(9),i.Ub(),i.Ub(),i.Vb(10,"div",16),i.Tc(11," \u0110\xe3 xem: "),i.Vb(12,"span"),i.Tc(13),i.Ub(),i.Ub(),i.Rc(14,j,4,1,"div",17),i.Ub(),i.Rc(15,_,4,1,"div",18),i.Qb(16,"div",19),i.Vb(17,"div",20),i.Vb(18,"div",21),i.Vb(19,"div",22),i.Qb(20,"azt-create-avatar",23),i.Vb(21,"span",24),i.Tc(22),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Vb(23,"div",25),i.Vb(24,"div",26),i.Vb(25,"div",27),i.Tc(26),i.Ub(),i.lc(27),i.Ub(),i.lc(28,1),i.Rc(29,Q,2,1,"ng-container",3),i.Ub(),i.Rc(30,S,4,1,"div",28),i.Sb()),2&n){var e=i.gc(2);i.Db(3),i.Vc(" ",e.curQuestionObj.title," "),i.Db(1),i.nc("ngIf",null!=e.studentAnswerObj),i.Db(5),i.Vc("",e.calculationTime(e.curQuestionObj.createdAt)," tr\u01b0\u1edbc"),i.Db(4),i.Vc("",null==e.assetGroupStatisticObj?null:e.assetGroupStatisticObj.totalView," l\u01b0\u1ee3t"),i.Db(1),i.nc("ngIf",e.assetObjectObj),i.Db(1),i.nc("ngIf",e.curQuestionObj.files),i.Db(1),i.nc("innerHtml",e.curQuestionObj.content,i.Fc),i.Db(4),i.nc("nameCreateAvatar",null==e.curQuestionObj.creatorObj?null:e.curQuestionObj.creatorObj.fullName)("size",25),i.Db(2),i.Uc(null==e.curQuestionObj.creatorObj?null:e.curQuestionObj.creatorObj.fullName),i.Db(4),i.Vc("",e.answerObjs.length," c\xe2u tr\u1ea3 l\u1eddi"),i.Db(3),i.nc("ngIf",e.answerObjs.length>0),i.Db(1),i.nc("ngIf",!e.isEndPage)}}function R(n,t){1&n&&(i.Vb(0,"div",57),i.Vb(1,"span",58),i.Tc(2,"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u"),i.Ub(),i.Ub())}function z(n,t){if(1&n&&(i.Vb(0,"div",6),i.Vb(1,"div",7),i.Vb(2,"div",8),i.Rc(3,P,3,0,"div",9),i.Rc(4,E,31,13,"ng-container",0),i.Rc(5,R,3,0,"ng-template",null,10,i.Sc),i.Ub(),i.Ub(),i.Ub()),2&n){var e=i.Ac(6),c=i.gc();i.Db(3),i.nc("ngIf",c.isBackend),i.Db(1),i.nc("ngIf",c.curQuestionObj)("ngIfElse",e)}}function F(n,t){if(1&n){var e=i.Wb();i.Vb(0,"div"),i.Vb(1,"azt-preview-media",59),i.cc("closePreview",function(){return i.Ec(e),i.gc().onFileClose()}),i.Ub(),i.Ub()}if(2&n){var c=i.gc();i.Db(1),i.nc("fileOption",c.previewFile)}}var q=function(n){return{title:n}};function B(n,t){if(1&n){var e=i.Wb();i.Vb(0,"azt-dialog-confirm",60),i.cc("sendEvent",function(n){return i.Ec(e),i.gc().removeQuestion(n)}),i.Ub()}if(2&n){var c=i.gc();i.nc("data",i.tc(1,q,null==c.curQuestionObj?null:c.curQuestionObj.title))}}var N=[[["","buttonShowFormInput",""]],[["","answerInput",""]],[["","nextBack",""]]],X=["[buttonShowFormInput]","[answerInput]","[nextBack]"],H=function(){var n=function(){function n(t,e,o){c(this,n),this.commonService=t,this.studentQuestionService=e,this.timeService=o,this.isBackend=!1,this.isLoading=!1,this.totalQuestion=0,this.isEndPage=0,this.sendEvent=new i.o,this.previewFile={},this.isShowPreviewFile=!1,this.showDialogConfirm=!1,this.isShowFormInputAnswer=!1}return r(n,[{key:"calculationTime",value:function(n,t){return this.timeService.calculationTime(n,t)}},{key:"onFileClose",value:function(){this.isShowPreviewFile=!1,this.previewFile={}}},{key:"onShowFile",value:function(n,t){this.isShowPreviewFile=!0,this.previewFile=Object.assign(Object.assign({},n),{index:t})}},{key:"acceptAnswer",value:function(n){var t,e=this;this.studentQuestionService.apiStudentQuestionAcceptAnswerObjGet(null===(t=this.curQuestionObj)||void 0===t?void 0:t.id,n.id).subscribe(function(t){t.success?(e.answerObjs.forEach(function(n){var t,i;n.id==(null===(t=e.curQuestionObj)||void 0===t?void 0:t.rightAnswerId)&&(n.totalAccept=(null!==(i=n.totalAccept)&&void 0!==i?i:0)-1)}),e.curQuestionObj&&(e.curQuestionObj.rightAnswerId=n.id),n.totalAccept&&n.totalAccept++,e.commonService.snackSuccess("Ch\u1ea5p nh\u1eadn c\xe2u tr\u1ea3 l\u1eddi th\xe0nh c\xf4ng","")):e.commonService.snackError("Ch\u1ea5p nh\u1eadn c\xe2u tr\u1ea3 l\u1eddi kh\xf4ng th\xe0nh c\xf4ng","")})}},{key:"removeAcceptAnswer",value:function(n){var t,e=this;this.studentQuestionService.apiStudentQuestionRemoveAcceptAnswerObjGet(null===(t=this.curQuestionObj)||void 0===t?void 0:t.id,n.id).subscribe(function(t){t.success?(e.curQuestionObj&&(e.curQuestionObj.rightAnswerId=void 0),n.totalAccept&&n.totalAccept--,e.commonService.snackSuccess("B\u1ecf ch\u1ea5p nh\u1eadn c\xe2u tr\u1ea3 l\u1eddi th\xe0nh c\xf4ng","")):e.commonService.snackError("B\u1ecf ch\u1ea5p nh\u1eadn c\xe2u tr\u1ea3 l\u1eddi kh\xf4ng th\xe0nh c\xf4ng","")})}},{key:"ShowDialogConfirm",value:function(){this.showDialogConfirm=!0}},{key:"removeQuestion",value:function(n){var t;this.showDialogConfirm=!1,"cancel"!=n&&this.sendEvent.emit(null===(t=this.curQuestionObj)||void 0===t?void 0:t.id)}},{key:"viewBigNumber",value:function(n,t){var e=[];this.answerObjs.forEach(function(n){e.push(Number(n.totalAccept))});var i=Math.max.apply(Math,e),c=this.answerObjs.find(function(n){return n.totalAccept==i});return n==i&&(null==c?void 0:c.id)==t}},{key:"ngOnInit",value:function(){}},{key:"ngOnChanges",value:function(){}}]),n}();return n.\u0275fac=function(t){return new(t||n)(i.Pb(a.a),i.Pb(o.d),i.Pb(s.a))},n.\u0275cmp=i.Jb({type:n,selectors:[["azt-view-answer-question"]],inputs:{isBackend:"isBackend",isLoading:"isLoading",curQuestionObj:"curQuestionObj",totalQuestion:"totalQuestion",assetGroupStatisticObj:"assetGroupStatisticObj",assetObjectObj:"assetObjectObj",answerObjs:"answerObjs",isEndPage:"isEndPage",studentAnswerObj:"studentAnswerObj"},outputs:{sendEvent:"sendEvent"},features:[i.Bb],ngContentSelectors:X,decls:8,vars:6,consts:[[4,"ngIf","ngIfElse"],["notBackEnd",""],["doneLoading",""],[4,"ngIf"],[3,"data","sendEvent",4,"ngIf"],[3,"headerTitle","back_link"],[1,"app","py-4","maxW1200"],[1,"container"],[1,"block-list","p-4",2,"position","relative"],["style","position: absolute; top: 5px; right: 5px",4,"ngIf"],["emptyData",""],[2,"position","absolute","top","5px","right","5px"],["matTooltip","X\xf3a c\xe2u h\u1ecfi",1,"btn-remove",2,"padding","2px","border-radius","2px","height","auto","width","auto",3,"click"],[1,"block-question"],[1,"question-title"],[1,"question-info"],[1,"question-text"],["class","question-text",4,"ngIf"],["class","question-block-img",4,"ngIf"],["id","__QA_question",1,"question-content",3,"innerHtml"],[1,"d-flex","mt-2","justify-end"],[1,"answer-user"],[1,"user-info"],[2,"cursor","pointer","margin-right","5px",3,"nameCreateAvatar","size"],[1,"user-name"],[1,"block-list-answer"],["id","addAnswerBar"],[1,"answer-count"],["class","d-flex justify-content-center mt-1",4,"ngIf"],[2,"font-weight","500"],[1,"question-block-img"],[1,"question-image"],[3,"imgSrc"],["class","block-answer",4,"ngFor","ngForOf"],[1,"block-answer"],[1,"block-answer-left"],[1,"count-view"],["class","true-answer",4,"ngIf"],[1,"block-answer-right"],[1,"answer-content",3,"innerHtml"],["id","answer-attach",4,"ngIf"],[1,"block-answer-bottom",3,"ngClass"],["class","answer-confirm",4,"ngIf"],[1,"time-ago"],[1,"true-answer"],["id","answer-attach"],["class","file-item",3,"matTooltip","click",4,"ngFor","ngForOf"],[1,"file-item",3,"matTooltip","click"],["alt","",1,"img-preview","truncate"],[1,"answer-confirm"],[1,"confirm"],["class","btn btn-primary",3,"click",4,"ngIf","ngIfElse"],["accepted",""],[1,"btn","btn-primary",3,"click"],[1,"btn-unconfirm",3,"click"],[1,"d-flex","justify-content-center","mt-1"],["mat-button","","matTooltip","Xem th\xeam",1,"btn-all-add",3,"disabled"],[1,"block-else"],[1,"text-else"],[3,"fileOption","closePreview"],[3,"data","sendEvent"]],template:function(n,t){if(1&n&&(i.mc(N),i.Rc(0,w,2,2,"ng-container",0),i.Rc(1,x,1,2,"ng-template",null,1,i.Sc),i.Rc(3,k,1,0,"azt-loading-effect",0),i.Rc(4,z,7,3,"ng-template",null,2,i.Sc),i.Rc(6,F,2,1,"div",3),i.Rc(7,B,1,3,"azt-dialog-confirm",4)),2&n){var e=i.Ac(2),c=i.Ac(5);i.nc("ngIf",t.isBackend)("ngIfElse",e),i.Db(3),i.nc("ngIf",t.isLoading)("ngIfElse",c),i.Db(3),i.nc("ngIf",t.isShowPreviewFile),i.Db(1),i.nc("ngIf",1==t.showDialogConfirm)}},directives:[b.m,u.a,l.a,d.a,f.a,g.a,p.a,m.a,b.l,b.k,v.b,h.a,O.a],styles:[".block-list[_ngcontent-%COMP%]{background:#ececec;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.14)}.block-list-bottom[_ngcontent-%COMP%]{margin:10px 0}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]{border:none;display:flex;align-items:center;color:#707070;background:transparent}.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%]{text-transform:none;margin-left:2px}button[_ngcontent-%COMP%]{border:none;text-transform:none}.justify-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.img-preview[_ngcontent-%COMP%]{cursor:pointer}.block-else[_ngcontent-%COMP%]{height:90px;display:flex;justify-content:center;align-items:center;border-radius:5px}.text-else[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.question-title[_ngcontent-%COMP%]{font-weight:600;margin-bottom:10px}.question-info[_ngcontent-%COMP%]{display:flex;padding:0 9px 20px 0}.question-image[_ngcontent-%COMP%]{background-color:#fff;margin:20px auto 0}.question-block-img[_ngcontent-%COMP%]{position:relative}.question-text[_ngcontent-%COMP%]{font-size:13px;color:#9a9a9a;margin-right:10px}.question-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.question-content[_ngcontent-%COMP%]{margin-top:10px}.block-list-answer[_ngcontent-%COMP%]{margin-top:15px}.answer-count[_ngcontent-%COMP%]{font-size:18px;color:#333}.block-answer[_ngcontent-%COMP%]{display:flex;margin-top:15px;padding-bottom:10px;border-bottom:1px solid #d0d0d0}.block-answer[_ngcontent-%COMP%]:last-child{border-bottom:none}.block-answer-left[_ngcontent-%COMP%]{margin-right:10px}.count-view[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ddd;border-radius:5px;display:flex;justify-content:center;align-items:center;padding:6px;width:30px;height:30px}.count-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.true-answer[_ngcontent-%COMP%]{color:#0ca74a}.true-answer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.block-answer-right[_ngcontent-%COMP%]{padding-right:15px;flex:auto}.confirm[_ngcontent-%COMP%]{padding:6px 7px;background:#e8e8e8;border-radius:5px;font-size:12px}.btn-unconfirm[_ngcontent-%COMP%]{color:#00a7d0;background:transparent;transition:all .5s}.btn-unconfirm[_ngcontent-%COMP%]:hover{color:#026680;font-weight:700}.btn-confirm[_ngcontent-%COMP%]{background:#169bd5;color:#fff;font-size:13px;transition:all .5s;border-radius:5px;padding:5px 7px 5px 20px}.btn-confirm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;font-size:20px}.btn-confirm[_ngcontent-%COMP%]:hover{background:#0b6992}.block-answer-bottom[_ngcontent-%COMP%]{margin-top:15px;justify-content:space-between}.block-answer-bottom[_ngcontent-%COMP%], .user-info[_ngcontent-%COMP%]{display:flex;align-items:center}.time-ago[_ngcontent-%COMP%]{color:#868686;font-size:10px;margin-bottom:0}.btn-all-add[_ngcontent-%COMP%]{color:#00a7d0}#formInputAnswer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:1px solid #dfdfdf;border-radius:3px;padding:5px}#addAnswerBar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}#answer-attach[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}#answer-attach[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]{max-width:250px;margin-right:20px;display:flex;border:1px solid #ddd;padding:0 7px}#answer-attach[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]:hover{border:1px solid #333;cursor:pointer}#answer-attach[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-style:italic}.btn-remove[_ngcontent-%COMP%]{cursor:pointer;transition:all .5s;background:#d3d1d1}.btn-remove[_ngcontent-%COMP%]:hover{background:#8f8f8f}@media screen and (max-width:500px){.block-answer-bottom[_ngcontent-%COMP%]{flex-direction:column-reverse;align-items:flex-start}.confirm[_ngcontent-%COMP%], .confirm-took[_ngcontent-%COMP%]{margin-top:10px}.question-info[_ngcontent-%COMP%]{flex-direction:column}.question-info[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%]{margin-top:10px}}"]}),n}()},wPhD:function(e,i,o){"use strict";o.d(i,"a",function(){return b});var a=o("fXoL"),s=o("gm2p"),b=function(){var e=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(o,e);var i=t(o);function o(){var n;return c(this,o),(n=i.apply(this,arguments)).data={},n.sendEvent=new a.o,n}return r(o,[{key:"eventDialog",value:function(n){this.sendEvent.emit(n)}}]),o}(s.a);return e.\u0275fac=function(n){return u(n||e)},e.\u0275cmp=a.Jb({type:e,selectors:[["azt-dialog-confirm"]],inputs:{data:"data"},outputs:{sendEvent:"sendEvent"},features:[a.Ab],decls:12,vars:1,consts:[[1,"form"],[1,"body"],[2,"font-weight","500"],[2,"font-weight","700"],[1,"d-flex","justify-content-end","mt-4"],[1,"buttom-clean","mr-2",3,"click"],[1,"button-delete",3,"click"]],template:function(n,t){1&n&&(a.Vb(0,"div",0),a.Vb(1,"div",1),a.Vb(2,"div",2),a.Tc(3," B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a c\xe2u h\u1ecfi "),a.Vb(4,"span",3),a.Tc(5),a.Ub(),a.Tc(6," kh\xf4ng? "),a.Ub(),a.Vb(7,"div",4),a.Vb(8,"div",5),a.cc("click",function(){return t.eventDialog("cancel")}),a.Tc(9,"H\u1ee6Y"),a.Ub(),a.Vb(10,"div",6),a.cc("click",function(){return t.eventDialog("delete")}),a.Tc(11,"X\xd3A"),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&n&&(a.Db(5),a.Uc(t.data.title))},styles:[".form[_ngcontent-%COMP%]{background:rgba(0,0,0,.5607843137254902);z-index:90;display:flex;left:0;top:0;position:fixed;height:100vh;width:100%}.body[_ngcontent-%COMP%]{width:90%;max-width:700px;background:#fff;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:20px;border-radius:5px;margin:auto}.button-delete[_ngcontent-%COMP%]{background-color:#dc3545;border-radius:5px;width:85px;padding:5px 0;text-align:center;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer}.button-delete[_ngcontent-%COMP%]:hover{background-color:#d61226}.buttom-clean[_ngcontent-%COMP%]{border:1px solid #797979;border-radius:5px;width:85px;padding:5px 0;text-align:center;display:flex;align-items:center;justify-content:center;cursor:pointer}.buttom-clean[_ngcontent-%COMP%]:hover{background-color:#dfdfdf}"]}),e}(),u=a.Xb(b)}}])}();