!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}function o(n,t,e){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(n,t,e){var o=function(n,t){for(;!Object.prototype.hasOwnProperty.call(n,t)&&null!==(n=l(n)););return n}(n,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(e):i.value}})(n,t,e||n)}function i(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}function a(n,t){return(a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function r(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}();return function(){var e,o=l(n);if(t){var i=l(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return s(this,e)}}function s(n,t){return!t||"object"!=typeof t&&"function"!=typeof t?c(n):t}function c(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6DXj":function(t,a,s){"use strict";s.d(a,"a",function(){return H});var c=s("fXoL"),u=s("3Pt+"),d=s("quSY"),h=s("gm2p"),b=s("atsk"),f=s("oUVn"),m=s("++0c"),v=s("ofXK"),p=s("NFeN"),g=s("Qu3c"),y=s("IU+r"),w=s("bTqV"),C=s("iWHX");function O(n,t){if(1&n){var e=c.Wb();c.Vb(0,"div",11),c.Vb(1,"a",12),c.cc("click",function(){return c.Ec(e),c.gc(2).backToSelectClass()}),c.Vb(2,"mat-icon",13),c.Tc(3,"arrow_back"),c.Ub(),c.Vb(4,"span",13),c.Tc(5,"Ch\u1ecdn L\u1edbp"),c.Ub(),c.Ub(),c.Ub()}}function k(n,t){if(1&n&&(c.Vb(0,"div",9),c.Rc(1,O,6,0,"div",10),c.Ub()),2&n){var e=c.gc();c.Db(1),c.nc("ngIf",!e.onlyOneClass)}}function S(n,t){1&n&&(c.Vb(0,"p",14),c.Tc(1," Vui l\xf2ng ch\u1ecdn \u0111\xfang t\xean m\xecnh \u0111\u1ec3 b\xe1o danh v\u1edbi Gi\xe1o vi\xean "),c.Ub())}function D(n,t){if(1&n&&(c.Qb(0,"img",28),c.hc(1,"mycdn")),2&n){var e=c.gc().$implicit;c.oc("src",c.ic(1,1,e.avatar),c.Ic)}}function x(n,t){if(1&n&&c.Qb(0,"azt-create-avatar",29),2&n){var e=c.gc().$implicit;c.nc("nameCreateAvatar",e.fullName)("size",50)}}function j(n,t){if(1&n&&(c.Vb(0,"p",30),c.Tc(1),c.hc(2,"date"),c.Ub()),2&n){var e=c.gc().$implicit;c.Db(1),c.Uc(c.jc(2,1,e.birthday,"dd/MM/yyyy"))}}function U(n,t){1&n&&(c.Vb(0,"p",31),c.Tc(1,"\u0110\xe3 \u0111\u01b0\u1ee3c ch\u1ecdn"),c.Ub())}var I=function(n){return{isDisabled:n}};function _(n,t){if(1&n){var e=c.Wb();c.Vb(0,"div",17),c.Vb(1,"div",18),c.cc("click",function(){c.Ec(e);var n=t.$implicit;return c.gc(2).selectedStudent(n)}),c.Vb(2,"div",19),c.Vb(3,"div",20),c.Rc(4,D,2,3,"img",21),c.Rc(5,x,1,2,"azt-create-avatar",22),c.Ub(),c.Vb(6,"div",23),c.Vb(7,"div",24),c.Vb(8,"p",25),c.Tc(9),c.hc(10,"slice"),c.Ub(),c.Rc(11,j,3,4,"p",26),c.Rc(12,U,2,0,"p",27),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Ub()}if(2&n){var o=t.$implicit,i=c.gc(2);c.Db(1),c.nc("ngClass",c.tc(11,I,1==o.isVerified&&0==(null==i.classObj?null:i.classObj.freeChooseName))),c.Db(3),c.nc("ngIf",o.avatar&&""!=o.avatar),c.Db(1),c.nc("ngIf",!o.avatar||""==o.avatar),c.Db(3),c.oc("matTooltip",o.fullName&&o.fullName.length>25?o.fullName:""),c.Db(1),c.Uc(o.fullName&&o.fullName.length>25?c.kc(10,7,o.fullName,0,25)+"..":o.fullName),c.Db(2),c.nc("ngIf",null!=o.birthday),c.Db(1),c.nc("ngIf",1==o.isVerified)}}function V(n,t){if(1&n&&(c.Vb(0,"div",15),c.Rc(1,_,13,13,"div",16),c.Ub()),2&n){var e=c.gc();c.Db(1),c.nc("ngForOf",e.studentObjs)}}function T(n,t){if(1&n){var e=c.Wb();c.Vb(0,"div",32),c.Vb(1,"div",33),c.Vb(2,"div",2),c.Vb(3,"p",34),c.Tc(4," B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn ch\u1ecdn "),c.Vb(5,"b"),c.Tc(6),c.Ub(),c.Tc(7," ? "),c.Ub(),c.Ub(),c.Vb(8,"div",35),c.Vb(9,"div",36),c.Vb(10,"button",37),c.cc("click",function(){return c.Ec(e),c.gc().btnCloseDialog()}),c.Tc(11," H\u1ee7y "),c.Ub(),c.Ub(),c.Vb(12,"button",38),c.cc("click",function(){return c.Ec(e),c.gc().confirmSelectStudent()}),c.Tc(13," X\xe1c nh\u1eadn "),c.Ub(),c.Ub(),c.Ub(),c.Ub()}if(2&n){var o=c.gc();c.Db(6),c.Uc(null==o.dataSelect||null==o.dataSelect.studentObj?null:o.dataSelect.studentObj.fullName)}}function P(n,t){1&n&&(c.Vb(0,"p",52),c.Tc(1," Vui l\xf2ng nh\u1eadp l\u1ea1i t\xean b\u1ea1n \u0111\u1ec3 b\xe1o danh v\u1edbi Gi\xe1o vi\xean "),c.Ub())}function A(n,t){1&n&&(c.Vb(0,"p",52),c.Tc(1," Kh\xf4ng c\xf3 t\xean trong danh s\xe1ch tr\xean, vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 h\u1ecd t\xean "),c.Ub())}function M(n,t){1&n&&(c.Vb(0,"div"),c.Tc(1," Y\xeau c\u1ea7u nh\u1eadp h\u1ecd t\xean \u0111\u1ea7y \u0111\u1ee7! "),c.Ub())}function R(n,t){if(1&n&&(c.Vb(0,"div",53),c.Rc(1,M,2,0,"div",51),c.Ub()),2&n){var e=c.gc(2);c.Db(1),c.nc("ngIf",e.getErrorType("fullName","required"))}}function E(n,t){1&n&&(c.Vb(0,"span"),c.Qb(1,"span",54),c.Tc(2,"\xa0"),c.Ub())}function N(n,t){if(1&n){var e=c.Wb();c.Vb(0,"div",39),c.Rc(1,P,2,0,"p",40),c.Rc(2,A,2,0,"p",40),c.Vb(3,"form",41),c.Vb(4,"div",42),c.Vb(5,"div",43),c.Vb(6,"div",44),c.Qb(7,"input",45),c.Vb(8,"div",46),c.Vb(9,"span",47),c.Vb(10,"mat-icon"),c.Tc(11,"account_box"),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Rc(12,R,2,1,"div",48),c.Ub(),c.Ub(),c.Vb(13,"div",42),c.Vb(14,"div",43),c.Vb(15,"div",49),c.Vb(16,"button",50),c.cc("click",function(){return c.Ec(e),c.gc().approvedToClass()}),c.Rc(17,E,3,0,"span",51),c.Tc(18,"Xin v\xe0o l\u1edbp "),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Ub()}if(2&n){var o=c.gc();c.Db(1),c.nc("ngIf",!o.studentObjs||0==o.studentObjs.length),c.Db(1),c.nc("ngIf",o.studentObjs&&o.studentObjs.length>0),c.Db(1),c.nc("formGroup",o.formName),c.Db(9),c.nc("ngIf",o.formName.controls.fullName.invalid&&o.formName.controls.fullName.dirty),c.Db(4),c.nc("disabled",o.formName.invalid||o.statusObj.loading),c.Db(1),c.nc("ngIf",1==o.statusObj.loading)}}function B(n,t){1&n&&(c.Vb(0,"p",14),c.Tc(1," Kh\xf4ng c\xf3 trong danh s\xe1ch tr\xean, vui l\xf2ng li\xean h\u1ec7 v\u1edbi Gi\xe1o vi\xean c\u1ee7a b\u1ea1n! "),c.Ub())}function z(n,t){1&n&&(c.Vb(0,"p",14),c.Tc(1," Vui l\xf2ng \u0111\u1ee3i gi\xe1o vi\xean th\xeam danh s\xe1ch l\u1edbp! "),c.Ub())}function F(n,t){if(1&n&&(c.Vb(0,"div",39),c.Rc(1,B,2,0,"p",3),c.Rc(2,z,2,0,"p",3),c.Ub()),2&n){var e=c.gc();c.Db(1),c.nc("ngIf",e.studentObjs&&e.studentObjs.length>0),c.Db(1),c.nc("ngIf",e.studentObjs&&0==e.studentObjs.length)}}function L(n,t){if(1&n&&(c.Vb(0,"div",2),c.Vb(1,"p",58),c.Tc(2),c.Ub(),c.Ub()),2&n){var e=c.gc(2);c.Db(2),c.Vc(" H\u1ecdc sinh: ",null==e.data||null==e.data.studentObj?null:e.data.studentObj.fullName," ")}}function K(n,t){if(1&n&&(c.Vb(0,"div",55),c.Rc(1,L,3,1,"div",56),c.Vb(2,"div",57),c.Vb(3,"p",58),c.Tc(4," B\u1ea1n \u0111\xe3 xin v\xe0o l\u1edbp, vui l\xf2ng \u0111\u1ee3i Gi\xe1o vi\xean ch\u1ea5p thu\u1eadn! "),c.Ub(),c.Ub(),c.Ub()),2&n){var e=c.gc();c.Db(1),c.nc("ngIf",null==e.data?null:e.data.studentObj)}}var G=function(n,t,e){return{margin_question_bar:n,margin_question_bar_40:t,margin_question_bar_60:e}},H=function(){var t=function(t){i(s,t);var a=r(s);function s(t,e,o){var i;return n(this,s),(i=a.call(this,e)).fb=t,i.commonService=e,i.sortService=o,i.isMobile=!1,i.homeworkFlow=!1,i.isSearchTeacher=!1,i.selectChild=new c.o,i.approvedByName=new c.o,i.backToClass=new c.o,i.subscriptions=new d.a,i.formName=new u.k({}),i.studentObjs=[],i.classList=[],i.checkForm=!1,i.onlyOneClass=!1,i.checkDialog=!1,i}return e(s,[{key:"selectedStudent",value:function(n){var t,e={studentObj:n,classId:n.classroomId,classObj:this.classObj,type:2};0===n.isVerified||1==(null===(t=this.classObj)||void 0===t?void 0:t.freeChooseName)?(this.checkDialog=!0,this.dataSelect=e):this.selectChild.emit(e)}},{key:"approvedToClass",value:function(){var n,t={nameEmit:this.commonService.getFormObj(this.formName).fullName,classId:null===(n=this.classObj)||void 0===n?void 0:n.id};this.approvedByName.emit(t)}},{key:"backToSelectClass",value:function(){this.backToClass.emit({selectClass:!0,selectStudent:!1})}},{key:"getErrorType",value:function(n,t){var e,o;return!!(this.formName.controls[n]&&this.formName.controls[n].errors&&(null===(e=this.formName.controls[n].errors)||void 0===e?void 0:e[t]))&&(null===(o=this.formName.controls[n].errors)||void 0===o?void 0:o[t])}},{key:"btnCloseDialog",value:function(){this.checkDialog=!1}},{key:"confirmSelectStudent",value:function(){this.selectChild.emit(this.dataSelect)}},{key:"checkSortListStudent",value:function(){var n,t,e;this.studentObjs=0==(null===(n=this.classObj)||void 0===n?void 0:n.sortType)?this.sortService.sortFirstNameStudents(null!==(t=this.commonService.myClone(this.studentObjs))&&void 0!==t?t:[]):this.sortService.sortArrayByMultipleObjectKeyAsc(null!==(e=this.commonService.myClone(this.studentObjs))&&void 0!==e?e:[],"pos","id")}},{key:"ngOnChanges",value:function(){var n,t,e,o,i,a,r;(null===(n=this.data)||void 0===n?void 0:n.classObjs)&&this.data.classObjs.length>0?this.classList=this.data.classObjs:(null===(t=this.data)||void 0===t?void 0:t.studentObj)?(this.classObj=this.data.classObj,this.studentObjs=null===(e=this.data)||void 0===e?void 0:e.studentObjs,this.checkForm=!!this.showAddStudent,this.onlyOneClass=null!==(i=null===(o=this.data)||void 0===o?void 0:o.onlyOneClass)&&void 0!==i&&i,this.selectedStudent(this.data.studentObj)):(this.classObj=null===(a=this.data)||void 0===a?void 0:a.classObj,this.studentObjs=null===(r=this.data)||void 0===r?void 0:r.studentObjs,this.checkForm=!!this.showAddStudent)}},{key:"ngOnInit",value:function(){var n,t,e,i,a,r,c;this.formName=this.fb.group({fullName:new u.h("",[u.z.required,b.a.noWhiteSpace])}),(null===(n=this.data)||void 0===n?void 0:n.classObjs)&&this.data.classObjs.length>0?this.classList=this.data.classObjs:(null===(t=this.data)||void 0===t?void 0:t.studentObj)?(this.classObj=this.data.classObj,this.studentObjs=this.data.studentObjs,this.checkForm=!!this.showAddStudent,this.onlyOneClass=null!==(e=this.data.onlyOneClass)&&void 0!==e&&e,this.selectedStudent(this.data.studentObj)):(this.classObj=null===(i=this.data)||void 0===i?void 0:i.classObj,this.studentObjs=null===(a=this.data)||void 0===a?void 0:a.studentObjs,this.checkForm=!!this.showAddStudent,this.onlyOneClass=null!==(c=null===(r=this.data)||void 0===r?void 0:r.onlyOneClass)&&void 0!==c&&c),this.checkSortListStudent(),o(l(s.prototype),"ngOnInit",this).call(this)}}]),s}(h.a);return t.\u0275fac=function(n){return new(n||t)(c.Pb(u.g),c.Pb(f.a),c.Pb(m.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-select-student"]],inputs:{data:"data",showAddStudent:"showAddStudent",isMobile:"isMobile",homeworkFlow:"homeworkFlow",back_link:"back_link",isSearchTeacher:"isSearchTeacher"},outputs:{selectChild:"selectChild",approvedByName:"approvedByName",backToClass:"backToClass"},features:[c.Ab,c.Bb],decls:10,vars:12,consts:[[1,"container",3,"ngClass"],["class","row pl-0 pr-0 ml-0 mr-0",4,"ngIf"],[1,"text-center"],["class","h5 text-info",4,"ngIf"],["class","row ml-0 mr-0 pl-0 pr-0 select_child",4,"ngIf"],["class","school-info_bg",4,"ngIf"],["class","text-center mt-3",4,"ngIf","ngIfElse"],["NotSubmitName",""],["class","container",4,"ngIf"],[1,"row","pl-0","pr-0","ml-0","mr-0"],["class","col-12",4,"ngIf"],[1,"col-12"],[1,"clickable","text-info",3,"click"],[2,"vertical-align","middle"],[1,"h5","text-info"],[1,"row","ml-0","mr-0","pl-0","pr-0","select_child"],["class","col-12 col-sm-12 col-md-4 col-lg-3 mb-2",4,"ngFor","ngForOf"],[1,"col-12","col-sm-12","col-md-4","col-lg-3","mb-2"],[1,"card","student_obj","clickable",3,"ngClass","click"],[1,"row","ml-0","mr-0","justify-content-between"],[1,"col-3","align-self-center","text-center",2,"min-height","56px"],["style","vertical-align: middle; margin-top: 2px; border-radius: 50%","width","50","height","50",3,"src",4,"ngIf"],[3,"nameCreateAvatar","size",4,"ngIf"],[1,"col-9","pr-1"],[1,"text-left"],[1,"h5","mb-1","card-title","font-bold",3,"matTooltip"],["class","h6 mb-1 card-title ",4,"ngIf"],["class","h6 mb-0 card-title ",4,"ngIf"],["width","50","height","50",2,"vertical-align","middle","margin-top","2px","border-radius","50%",3,"src"],[3,"nameCreateAvatar","size"],[1,"h6","mb-1","card-title"],[1,"h6","mb-0","card-title"],[1,"school-info_bg"],[1,"school-info","p-4"],[1,"h5","para_respon","font-weight-normal"],[1,"d-flex","float-right","mt-3"],[1,"azt-block-button"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","warn",2,"margin-left","15px",3,"click"],[1,"text-center","mt-3"],["class","text-info","style","font-size: 18px;",4,"ngIf"],[1,"form-horizontal","mt-1",3,"formGroup"],[1,"form-group"],[1,"col-sm-6","ml-auto","mr-auto"],[1,"input-group","mb-3"],["type","text","placeholder","H\u1ecd v\xe0 t\xean","formControlName","fullName",1,"form-control"],[1,"input-group-append"],["id","basic-addon3",1,"input-group-text"],["class","alert alert-danger",4,"ngIf"],[1,"text-right"],["mat-raised-button","","color","primary",3,"disabled","click"],[4,"ngIf"],[1,"text-info",2,"font-size","18px"],[1,"alert","alert-danger"],["role","status",1,"spinner-border","spinner-border-sm"],[1,"container"],["class","text-center",4,"ngIf"],[1,"text-center","alert","alert-info","mt-3"],[1,"h5","mb-0"]],template:function(n,t){if(1&n&&(c.Vb(0,"div",0),c.Rc(1,k,2,1,"div",1),c.Vb(2,"div",2),c.Rc(3,S,2,0,"p",3),c.Ub(),c.Rc(4,V,2,1,"div",4),c.Rc(5,T,14,1,"div",5),c.Rc(6,N,19,6,"div",6),c.Rc(7,F,3,2,"ng-template",null,7,c.Sc),c.Ub(),c.Rc(9,K,5,1,"div",8)),2&n){var e=c.Ac(8);c.nc("ngClass",c.vc(8,G,!t.isSearchTeacher&&!t.isMobile&&t.homeworkFlow,!t.isSearchTeacher&&!t.isMobile&&!t.homeworkFlow,!t.isSearchTeacher&&t.isMobile&&!t.homeworkFlow)),c.Db(1),c.nc("ngIf",t.back_link),c.Db(2),c.nc("ngIf",t.studentObjs&&t.studentObjs.length>0),c.Db(1),c.nc("ngIf",t.studentObjs&&t.studentObjs.length>0),c.Db(1),c.nc("ngIf",t.checkDialog),c.Db(1),c.nc("ngIf",1==t.checkForm)("ngIfElse",e),c.Db(3),c.nc("ngIf",null==t.data?null:t.data.isPendingApproved)}},directives:[v.k,v.m,p.a,v.l,g.a,y.a,w.b,u.B,u.s,u.l,u.d,u.r,u.j],pipes:[v.u,C.r,v.e],styles:[".margin_question_bar_40[_ngcontent-%COMP%]{margin-top:calc(2rem + 40px)!important}.margin_question_bar[_ngcontent-%COMP%]{margin-top:calc(2rem)!important}.margin_question_bar_60[_ngcontent-%COMP%]{margin-top:calc(2rem + 60px)!important}.student_obj[_ngcontent-%COMP%]{padding:5px;min-height:69px}.select_class[_ngcontent-%COMP%]{background:inherit;background-color:#3c8dbc;box-sizing:border-box;border-radius:5px;box-shadow:none;color:#fff}.isSelected[_ngcontent-%COMP%]{border:2px solid #004f7b}.isDisabled[_ngcontent-%COMP%]{opacity:.6}.school-info_bg[_ngcontent-%COMP%]{z-index:9990;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;background:rgba(0,0,0,.5607843137254902);min-height:100vh}.school-info[_ngcontent-%COMP%]{z-index:9990;top:50%;left:50%;min-width:30%;transform:translate(-50%,-50%);position:fixed;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px rgba(0,0,0,.58)}.close-btn[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-7px;padding:5px 10px;background:#dadada;cursor:pointer;border-radius:20px}.note[_ngcontent-%COMP%]{font-style:italic;font-size:15px;font-weight:600}@media only screen and (max-width:1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:95%}.col-3[_ngcontent-%COMP%]{flex:0 0 30%;max-width:30%}.col-9[_ngcontent-%COMP%]{flex:0 0 70%;max-width:70%}}@media only screen and (max-width:768px){.col-3[_ngcontent-%COMP%]{flex:0 0 25%;max-width:25%}.col-9[_ngcontent-%COMP%]{flex:0 0 75%;max-width:75%}}"]}),t}()},"6Fp8":function(t,o,i){"use strict";i.d(o,"a",function(){return c});var a=i("fXoL"),r=i("5ete"),s=i("clS4"),c=function(){var t=function(){function t(e,o){n(this,t),this.baseApiService=e,this.redirectService=o}return e(t,[{key:"canActivate",value:function(n,t){return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginAnonymous(t.url),!1)}},{key:"canActivateChild",value:function(n,t){return this.canActivate(n,t)}},{key:"canLoad",value:function(n){var t="/"+n.path;return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(t),!1)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.Zb(r.a),a.Zb(s.a))},t.\u0275prov=a.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"IU+r":function(t,o,a){"use strict";a.d(o,"a",function(){return p});var s=a("gm2p"),c=a("fXoL"),l=a("oUVn"),u=a("luLc"),d=a("ofXK"),h=a("iWHX"),b=function(n,t){return{width:n,height:t}};function f(n,t){if(1&n&&(c.Tb(0),c.Qb(1,"img",2),c.hc(2,"mycdn"),c.Sb()),2&n){var e=c.gc();c.Db(1),c.nc("src",c.ic(2,2,e.linkAvatar),c.Ic)("ngStyle",c.uc(4,b,e.size+"px",e.size+"px"))}}var m=function(n,t,e){return{width:n,height:t,"font-size":e}};function v(n,t){if(1&n&&(c.Vb(0,"div",3),c.Tc(1),c.Ub()),2&n){var e=c.gc();c.nc("ngStyle",c.vc(2,m,e.size+"px",e.size+"px",e.size/2+"px")),c.Db(1),c.Vc(" ",e.returnNameAvatar," ")}}var p=function(){var t=function(t){i(a,t);var o=r(a);function a(t,e){var i;return n(this,a),(i=o.call(this,t)).commonService=t,i.homeworkExamService=e,i.nameCreateAvatar="",i.size=0,i.linkAvatar="",i.returnNameAvatar="",i}return e(a,[{key:"ngOnInit",value:function(){var n;try{this.nameCreateAvatar=this.homeworkExamService.removeInvalidChars(this.nameCreateAvatar).trim()}catch(o){this.nameCreateAvatar=this.nameCreateAvatar}var t=this.commonService.convertVietnameseToEnglish(null!==(n=this.nameCreateAvatar)&&void 0!==n?n:""),e=String(t).toUpperCase().split(" ");this.returnNameAvatar=1==e.length?e[0]?e[0].charAt(0):"A":e[0].charAt(0)+e[e.length-1].charAt(0)}}]),a}(s.a);return t.\u0275fac=function(n){return new(n||t)(c.Pb(l.a),c.Pb(u.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["azt-create-avatar"]],inputs:{nameCreateAvatar:"nameCreateAvatar",size:"size",linkAvatar:"linkAvatar"},features:[c.Ab],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["elseTemplate",""],[2,"border-radius","50%",3,"src","ngStyle"],["id","create-avatar",2,"display","inline-flex","justify-content","center","align-items","center","background-color","#dddddd","border-radius","50%","font-weight","500","margin","auto","border","1px solid #acacac",3,"ngStyle"]],template:function(n,t){if(1&n&&(c.Rc(0,f,3,7,"ng-container",0),c.Rc(1,v,2,6,"ng-template",null,1,c.Sc)),2&n){var e=c.Ac(2);c.nc("ngIf",""!=t.linkAvatar&&null!=t.linkAvatar)("ngIfElse",e)}},directives:[d.m,d.n],pipes:[h.r],encapsulation:2}),t}()},fB2i:function(t,o,a){"use strict";a.d(o,"a",function(){return j}),a.d(o,"b",function(){return U});var s=a("fXoL"),l=a("ofXK"),u=a("3Pt+");function d(n,t){}var h,b=function(){var n="undefined"!=typeof window?window:void 0;return n&&n.tinymce?n.tinymce:null},f=function(){var t=function t(){n(this,t),this.onBeforePaste=new s.o,this.onBlur=new s.o,this.onClick=new s.o,this.onContextMenu=new s.o,this.onCopy=new s.o,this.onCut=new s.o,this.onDblclick=new s.o,this.onDrag=new s.o,this.onDragDrop=new s.o,this.onDragEnd=new s.o,this.onDragGesture=new s.o,this.onDragOver=new s.o,this.onDrop=new s.o,this.onFocus=new s.o,this.onFocusIn=new s.o,this.onFocusOut=new s.o,this.onKeyDown=new s.o,this.onKeyPress=new s.o,this.onKeyUp=new s.o,this.onMouseDown=new s.o,this.onMouseEnter=new s.o,this.onMouseLeave=new s.o,this.onMouseMove=new s.o,this.onMouseOut=new s.o,this.onMouseOver=new s.o,this.onMouseUp=new s.o,this.onPaste=new s.o,this.onSelectionChange=new s.o,this.onActivate=new s.o,this.onAddUndo=new s.o,this.onBeforeAddUndo=new s.o,this.onBeforeExecCommand=new s.o,this.onBeforeGetContent=new s.o,this.onBeforeRenderUI=new s.o,this.onBeforeSetContent=new s.o,this.onChange=new s.o,this.onClearUndos=new s.o,this.onDeactivate=new s.o,this.onDirty=new s.o,this.onExecCommand=new s.o,this.onGetContent=new s.o,this.onHide=new s.o,this.onInit=new s.o,this.onInitNgModel=new s.o,this.onLoadContent=new s.o,this.onNodeChange=new s.o,this.onPostProcess=new s.o,this.onPostRender=new s.o,this.onPreInit=new s.o,this.onPreProcess=new s.o,this.onProgressState=new s.o,this.onRedo=new s.o,this.onRemove=new s.o,this.onReset=new s.o,this.onSaveContent=new s.o,this.onSetAttrib=new s.o,this.onObjectResizeStart=new s.o,this.onObjectResized=new s.o,this.onObjectSelected=new s.o,this.onSetContent=new s.o,this.onShow=new s.o,this.onSubmit=new s.o,this.onUndo=new s.o,this.onVisualAid=new s.o};return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=s.Kb({type:t,outputs:{onBeforePaste:"onBeforePaste",onBlur:"onBlur",onClick:"onClick",onContextMenu:"onContextMenu",onCopy:"onCopy",onCut:"onCut",onDblclick:"onDblclick",onDrag:"onDrag",onDragDrop:"onDragDrop",onDragEnd:"onDragEnd",onDragGesture:"onDragGesture",onDragOver:"onDragOver",onDrop:"onDrop",onFocus:"onFocus",onFocusIn:"onFocusIn",onFocusOut:"onFocusOut",onKeyDown:"onKeyDown",onKeyPress:"onKeyPress",onKeyUp:"onKeyUp",onMouseDown:"onMouseDown",onMouseEnter:"onMouseEnter",onMouseLeave:"onMouseLeave",onMouseMove:"onMouseMove",onMouseOut:"onMouseOut",onMouseOver:"onMouseOver",onMouseUp:"onMouseUp",onPaste:"onPaste",onSelectionChange:"onSelectionChange",onActivate:"onActivate",onAddUndo:"onAddUndo",onBeforeAddUndo:"onBeforeAddUndo",onBeforeExecCommand:"onBeforeExecCommand",onBeforeGetContent:"onBeforeGetContent",onBeforeRenderUI:"onBeforeRenderUI",onBeforeSetContent:"onBeforeSetContent",onChange:"onChange",onClearUndos:"onClearUndos",onDeactivate:"onDeactivate",onDirty:"onDirty",onExecCommand:"onExecCommand",onGetContent:"onGetContent",onHide:"onHide",onInit:"onInit",onInitNgModel:"onInitNgModel",onLoadContent:"onLoadContent",onNodeChange:"onNodeChange",onPostProcess:"onPostProcess",onPostRender:"onPostRender",onPreInit:"onPreInit",onPreProcess:"onPreProcess",onProgressState:"onProgressState",onRedo:"onRedo",onRemove:"onRemove",onReset:"onReset",onSaveContent:"onSaveContent",onSetAttrib:"onSetAttrib",onObjectResizeStart:"onObjectResizeStart",onObjectResized:"onObjectResized",onObjectSelected:"onObjectSelected",onSetContent:"onSetContent",onShow:"onShow",onSubmit:"onSubmit",onUndo:"onUndo",onVisualAid:"onVisualAid"}}),t}(),m=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],v=function(n,t){return"string"==typeof n?n.split(",").map(function(n){return n.trim()}):Array.isArray(n)?n:t},p=0,g=function(n){var t=(new Date).getTime();return n+"_"+Math.floor(1e9*Math.random())+ ++p+String(t)},y=function(n){return void 0!==n&&"textarea"===n.tagName.toLowerCase()},w=function(n){return void 0===n||""===n?[]:Array.isArray(n)?n:n.split(" ")},C=function(){},O=function(n){return null==n},k=function(){return{listeners:[],scriptId:g("tiny-script"),scriptLoaded:!1}},S=(h=k(),{load:function(n,t,e){h.scriptLoaded?e():(h.listeners.push(e),n.getElementById(h.scriptId)||function(n,t,e,o){var i=t.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=n,i.src=e,i.addEventListener("load",function n(){i.removeEventListener("load",n),h.listeners.forEach(function(n){return n()}),h.scriptLoaded=!0}),t.head&&t.head.appendChild(i)}(h.scriptId,n,t))},reinitialize:function(){h=k()}}),D=new s.s("TINYMCE_SCRIPT_SRC"),x={provide:u.p,useExisting:Object(s.X)(function(){return j}),multi:!0},j=function(){var t=function(t){i(a,t);var o=r(a);function a(t,e,i,r){var s;return n(this,a),(s=o.call(this)).platformId=i,s.tinymceScriptSrc=r,s.cloudChannel="5",s.apiKey="no-api-key",s.id="",s.modelEvents="change input undo redo",s.onTouchedCallback=C,s.onChangeCallback=C,s._elementRef=t,s.ngZone=e,s.initialise=s.initialise.bind(c(s)),s}return e(a,[{key:"writeValue",value:function(n){this._editor&&this._editor.initialized?this._editor.setContent(O(n)?"":n):this.initialValue=null===n?void 0:n}},{key:"registerOnChange",value:function(n){this.onChangeCallback=n}},{key:"registerOnTouched",value:function(n){this.onTouchedCallback=n}},{key:"setDisabledState",value:function(n){this._editor?this._editor.setMode(n?"readonly":"design"):n&&(this.init=Object.assign(Object.assign({},this.init),{readonly:!0}))}},{key:"ngAfterViewInit",value:function(){Object(l.y)(this.platformId)&&(this.id=this.id||g("tiny-angular"),this.inline=void 0!==this.inline?"boolean"!=typeof this.inline||this.inline:this.init&&this.init.inline,this.createElement(),null!==b()?this.initialise():this._element&&this._element.ownerDocument&&S.load(this._element.ownerDocument,this.getScriptSrc(),this.initialise))}},{key:"ngOnDestroy",value:function(){null!==b()&&b().remove(this._editor)}},{key:"createElement",value:function(){this._element=document.createElement(this.inline?"string"==typeof this.tagName?this.tagName:"div":"textarea"),this._element&&(this._element.id=this.id,y(this._element)&&(this._element.style.visibility="hidden"),this._elementRef.nativeElement.appendChild(this._element))}},{key:"initialise",value:function(){var n,t,e=this,o=Object.assign(Object.assign({},this.init),{target:this._element,inline:this.inline,readonly:this.disabled,plugins:(n=this.init&&this.init.plugins,t=this.plugins,w(n).concat(w(t))),toolbar:this.toolbar||this.init&&this.init.toolbar,setup:function(n){e._editor=n,n.on("init",function(t){e.initEditor(n)}),function(n,t){(function(n){var t=v(n.ignoreEvents,[]);return v(n.allowedEvents,m).filter(function(n){return m.includes(n)&&!t.includes(n)})})(n).forEach(function(e){var o=n[e];t.on(e.substring(2),function(e){return n.ngZone.run(function(){return o.emit({event:e,editor:t})})})})}(e,n),e.init&&"function"==typeof e.init.setup&&e.init.setup(n)}});y(this._element)&&(this._element.style.visibility=""),this.ngZone.runOutsideAngular(function(){b().init(o)})}},{key:"getScriptSrc",value:function(){return O(this.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/".concat(this.apiKey,"/tinymce/").concat(this.cloudChannel,"/tinymce.min.js"):this.tinymceScriptSrc}},{key:"initEditor",value:function(n){var t=this;n.on("blur",function(){return t.ngZone.run(function(){return t.onTouchedCallback()})}),n.on(this.modelEvents,function(){t.ngZone.run(function(){return t.onChangeCallback(n.getContent({format:t.outputFormat}))})}),"string"==typeof this.initialValue&&this.ngZone.run(function(){n.setContent(t.initialValue),n.getContent()!==t.initialValue&&t.onChangeCallback(n.getContent({format:t.outputFormat})),void 0!==t.onInitNgModel&&t.onInitNgModel.emit(n)})}},{key:"disabled",set:function(n){this._disabled=n,this._editor&&this._editor.initialized&&this._editor.setMode(n?"readonly":"design")},get:function(){return this._disabled}},{key:"editor",get:function(){return this._editor}}]),a}(f);return t.\u0275fac=function(n){return new(n||t)(s.Pb(s.l),s.Pb(s.B),s.Pb(s.D),s.Pb(D,8))},t.\u0275cmp=s.Jb({type:t,selectors:[["editor"]],inputs:{cloudChannel:"cloudChannel",apiKey:"apiKey",id:"id",modelEvents:"modelEvents",disabled:"disabled",initialValue:"initialValue",init:"init",inline:"inline",outputFormat:"outputFormat",tagName:"tagName",plugins:"plugins",toolbar:"toolbar",allowedEvents:"allowedEvents",ignoreEvents:"ignoreEvents"},features:[s.Cb([x]),s.Ab],decls:1,vars:0,template:function(n,t){1&n&&s.Rc(0,d,0,0,"ng-template")},styles:["[_nghost-%COMP%] { display: block; }"]}),t}(),U=function(){var t=function t(){n(this,t)};return t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({factory:function(n){return new(n||t)},imports:[[l.c,u.m]]}),t}()},loSA:function(t,e,o){"use strict";o.d(e,"a",function(){return v});var a=o("gm2p"),s=o("fXoL"),c=o("ofXK"),l=o("Qu3c");function u(n,t){1&n&&(s.Vb(0,"span",6),s.Tc(1,"\u0110"),s.Ub())}function d(n,t){1&n&&(s.Vb(0,"span",7),s.Tc(1,"C\u0110"),s.Ub())}function h(n,t){1&n&&(s.Vb(0,"span",8),s.Tc(1,"HT"),s.Ub())}function b(n,t){1&n&&(s.Vb(0,"span",9),s.Tc(1,"CHT"),s.Ub())}function f(n,t){1&n&&(s.Vb(0,"span",10),s.Tc(1,"HTT"),s.Ub())}function m(n,t){if(1&n&&(s.Vb(0,"span",11),s.Tc(1),s.Ub()),2&n){var e=s.gc();s.Db(1),s.Uc(e.mark)}}var v=function(){var t=function(t){i(o,t);var e=r(o);function o(){var t;return n(this,o),(t=e.apply(this,arguments)).mark=0,t}return o}(a.a);return t.\u0275fac=function(n){return p(n||t)},t.\u0275cmp=s.Jb({type:t,selectors:[["azt-check-mark"]],inputs:{mark:"mark"},features:[s.Ab],decls:6,vars:6,consts:[["class","text-mark mb-0","matTooltip","\u0110\u1ea1t",4,"ngIf"],["class","text-mark mb-0","matTooltip","Ch\u01b0a \u0110\u1ea1t",4,"ngIf"],["class","text-mark mb-0","matTooltip","Ho\xe0n Th\xe0nh",4,"ngIf"],["class","text-mark mb-0","matTooltip","Ch\u01b0a Ho\xe0n Th\xe0nh",4,"ngIf"],["class","text-mark mb-0","matTooltip","Ho\xe0n Th\xe0nh T\u1ed1t",4,"ngIf"],["class","text-mark mb-0",4,"ngIf"],["matTooltip","\u0110\u1ea1t",1,"text-mark","mb-0"],["matTooltip","Ch\u01b0a \u0110\u1ea1t",1,"text-mark","mb-0"],["matTooltip","Ho\xe0n Th\xe0nh",1,"text-mark","mb-0"],["matTooltip","Ch\u01b0a Ho\xe0n Th\xe0nh",1,"text-mark","mb-0"],["matTooltip","Ho\xe0n Th\xe0nh T\u1ed1t",1,"text-mark","mb-0"],[1,"text-mark","mb-0"]],template:function(n,t){1&n&&(s.Rc(0,u,2,0,"span",0),s.Rc(1,d,2,0,"span",1),s.Rc(2,h,2,0,"span",2),s.Rc(3,b,2,0,"span",3),s.Rc(4,f,2,0,"span",4),s.Rc(5,m,2,1,"span",5)),2&n&&(s.nc("ngIf","1000"==t.mark),s.Db(1),s.nc("ngIf","1001"==t.mark),s.Db(1),s.nc("ngIf","2000"==t.mark),s.Db(1),s.nc("ngIf","2001"==t.mark),s.Db(1),s.nc("ngIf","3000"==t.mark),s.Db(1),s.nc("ngIf","2001"!=t.mark&&"2000"!=t.mark&&"1001"!=t.mark&&"1000"!=t.mark&&"3000"!=t.mark))},directives:[c.m,l.a],encapsulation:2}),t}(),p=s.Xb(v)}}])}();