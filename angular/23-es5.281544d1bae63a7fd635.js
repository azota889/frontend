!function(){function e(n,t,c){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var c=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=a(e)););return e}(e,n);if(c){var i=Object.getOwnPropertyDescriptor(c,n);return i.get?i.get.call(t):i.value}})(n,t,c||n)}function n(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function c(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,c=a(e);if(n){var r=a(this).constructor;t=Reflect.construct(c,arguments,r)}else t=c.apply(this,arguments);return i(this,t)}}function i(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var c=n[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function l(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"6Fp8":function(e,n,t){"use strict";t.d(n,"a",function(){return o});var c=t("fXoL"),i=t("5ete"),a=t("clS4"),o=function(){var e=function(){function e(n,t){r(this,e),this.baseApiService=n,this.redirectService=t}return l(e,[{key:"canActivate",value:function(e,n){return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginAnonymous(n.url),!1)}},{key:"canActivateChild",value:function(e,n){return this.canActivate(e,n)}},{key:"canLoad",value:function(e){var n="/"+e.path;return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(n),!1)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(c.Zb(i.a),c.Zb(a.a))},e.\u0275prov=c.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},XJaZ:function(t,i,o){"use strict";o.r(i),o.d(i,"NotifyModule",function(){return ae});var s=o("ofXK"),b=o("3Pt+"),g=o("0IaG"),f=o("tyNb"),u=o("fB2i"),d=o("IkSl"),p=o("rIor"),h=o("Zhhu"),v=o("sOeQ"),_=o("vvyD"),y=o("Avyq"),m=o("6Fp8"),k=o("quSY"),P=o("gm2p"),U=o("fXoL"),V=o("oUVn"),D=o("5ete"),S=o("PYj7"),T=o("1ffk"),I=o("hZBc"),N=o("k3bj"),R=o("nzN9"),M=o("uZ1F"),x=o("iWHX");function E(e,n){1&e&&(U.Qb(0,"header-backend",5),U.hc(1,"mytranslate")),2&e&&U.nc("headerTitle",U.ic(1,2,"lang_notify_list_header_title"))("back_link","/admin/testbank/dashboard")}function O(e,n){1&e&&(U.Qb(0,"header-frontend",6),U.hc(1,"mytranslate")),2&e&&U.nc("headerTitle",U.ic(1,2,"lang_notify_list_header_title"))("back_link","/student/dashboard/0")}function w(e,n){1&e&&U.Qb(0,"azt-loading-effect")}function A(e,n){if(1&e&&(U.Vb(0,"span"),U.Tc(1),U.hc(2,"mytranslate"),U.Vb(3,"span",20),U.Tc(4),U.Ub(),U.Ub()),2&e){var t=U.gc().$implicit;U.Db(1),U.Vc(" ",U.ic(2,2,"lang_notify_list_new_decentralization_for_class")," "),U.Db(3),U.Vc(" ",t.classroomName," ")}}function W(e,n){if(1&e&&(U.Vb(0,"span"),U.Vb(1,"span",20),U.Tc(2),U.Ub(),U.Tc(3),U.hc(4,"mytranslate"),U.Vb(5,"b"),U.Tc(6),U.Ub(),U.Tc(7),U.hc(8,"mytranslate"),U.Vb(9,"span",21),U.Tc(10),U.hc(11,"date"),U.Ub(),U.Ub()),2&e){var t=U.gc().$implicit;U.Db(2),U.Uc(t.studentName),U.Db(1),U.Vc(" ",U.ic(4,5,"lang_notify_list_scored_homework")," "),U.Db(3),U.Uc(t.homeworkName),U.Db(1),U.Vc(" ",U.ic(8,7,"lang_notify_list_in_date")," "),U.Db(3),U.Uc(U.jc(11,9,t.createdAt,"dd/MM/yyyy"))}}function C(e,n){if(1&e&&(U.Vb(0,"span"),U.Vb(1,"span",20),U.Tc(2),U.Ub(),U.Tc(3),U.hc(4,"mytranslate"),U.Vb(5,"b"),U.Tc(6),U.Ub(),U.Tc(7),U.hc(8,"mytranslate"),U.Vb(9,"span",21),U.Tc(10),U.hc(11,"date"),U.Ub(),U.Ub()),2&e){var t=U.gc().$implicit;U.Db(2),U.Uc(t.studentName),U.Db(1),U.Vc(" ",U.ic(4,5,"lang_notify_list_submitted")," "),U.Db(3),U.Uc(t.homeworkName),U.Db(1),U.Vc(" ",U.ic(8,7,"lang_notify_list_in_date")," "),U.Db(3),U.Uc(U.jc(11,9,t.createdAt,"dd/MM/yyyy"))}}function j(e,n){if(1&e&&(U.Vb(0,"span"),U.Vb(1,"span",20),U.Tc(2),U.Ub(),U.Tc(3),U.hc(4,"mytranslate"),U.Vb(5,"b"),U.Tc(6),U.Ub(),U.Tc(7),U.hc(8,"mytranslate"),U.Vb(9,"span",21),U.Tc(10),U.hc(11,"date"),U.Ub(),U.Ub()),2&e){var t=U.gc().$implicit;U.Db(2),U.Uc(t.studentName),U.Db(1),U.Vc(" ",U.ic(4,5,"lang_notify_list_there_are_exercises")," "),U.Db(3),U.Uc(t.homeworkName),U.Db(1),U.Vc(" ",U.ic(8,7,"lang_notify_list_delivered")," "),U.Db(3),U.Uc(U.jc(11,9,t.createdAt,"dd/MM/yyyy"))}}function $(e,n){if(1&e&&(U.Vb(0,"span"),U.Vb(1,"span",20),U.Tc(2),U.Ub(),U.Tc(3),U.hc(4,"mytranslate"),U.Vb(5,"b"),U.Tc(6),U.Ub(),U.Tc(7),U.hc(8,"mytranslate"),U.Vb(9,"span",21),U.Tc(10),U.hc(11,"date"),U.Ub(),U.Ub()),2&e){var t=U.gc().$implicit;U.Db(2),U.Uc(t.studentName),U.Db(1),U.Vc(" ",U.ic(4,5,"lang_notify_list_submit_assignments")," "),U.Db(3),U.Uc(t.homeworkName),U.Db(1),U.Vc(" ",U.ic(8,7,"lang_notify_list_in_date")," "),U.Db(3),U.Uc(U.jc(11,9,t.createdAt,"dd/MM/yyyy"))}}function H(e,n){if(1&e&&(U.Vb(0,"span"),U.Vb(1,"span",20),U.Tc(2),U.Ub(),U.Tc(3),U.hc(4,"mytranslate"),U.Vb(5,"b"),U.Tc(6),U.Ub(),U.Tc(7),U.hc(8,"mytranslate"),U.Vb(9,"span",21),U.Tc(10),U.hc(11,"date"),U.Ub(),U.Ub()),2&e){var t=U.gc().$implicit;U.Db(2),U.Uc(t.studentName),U.Db(1),U.Vc(" ",U.ic(4,5,"lang_notify_list_submit_succes")," "),U.Db(3),U.Uc(t.examName),U.Db(1),U.Vc(" ",U.ic(8,7,"lang_notify_list_in_date")," "),U.Db(3),U.Uc(U.jc(11,9,t.createdAt,"dd/MM/yyyy"))}}function L(e,n){if(1&e&&(U.Vb(0,"span"),U.Vb(1,"span",20),U.Tc(2),U.Ub(),U.Tc(3),U.hc(4,"mytranslate"),U.Vb(5,"b"),U.Tc(6),U.Ub(),U.Tc(7),U.hc(8,"mytranslate"),U.Vb(9,"span",21),U.Tc(10),U.hc(11,"date"),U.Ub(),U.Ub()),2&e){var t=U.gc().$implicit;U.Db(2),U.Uc(t.studentName),U.Db(1),U.Vc(" ",U.ic(4,5,"lang_notify_list_new_tested")," "),U.Db(3),U.Uc(t.examName),U.Db(1),U.Vc(" ",U.ic(8,7,"lang_notify_list_in_date")," "),U.Db(3),U.Uc(U.jc(11,9,t.createdAt,"dd/MM/yyyy"))}}function q(e,n){if(1&e&&(U.Vb(0,"span"),U.Vb(1,"span",20),U.Tc(2),U.Ub(),U.Tc(3),U.hc(4,"mytranslate"),U.Vb(5,"b"),U.Tc(6),U.Ub(),U.Tc(7),U.hc(8,"mytranslate"),U.Vb(9,"span",21),U.Tc(10),U.hc(11,"date"),U.Ub(),U.Ub()),2&e){var t=U.gc().$implicit;U.Db(2),U.Uc(t.studentName),U.Db(1),U.Vc(" ",U.ic(4,5,"lang_notify_list_tested")," "),U.Db(3),U.Uc(t.examName),U.Db(1),U.Vc(" ",U.ic(8,7,"lang_notify_list_has_been_graded")," "),U.Db(3),U.Uc(U.jc(11,9,t.createdAt,"dd/MM/yyyy"))}}function z(e,n){if(1&e&&(U.Vb(0,"span"),U.Tc(1),U.hc(2,"mytranslate"),U.Vb(3,"b"),U.Tc(4),U.Ub(),U.Tc(5),U.hc(6,"mytranslate"),U.Vb(7,"span",21),U.Tc(8),U.hc(9,"date"),U.Ub(),U.Ub()),2&e){var t=U.gc().$implicit,c=U.gc(2);U.Db(1),U.Vc(" ",U.ic(2,4,"lang_notify_list_new_decentralization")," "),U.Db(3),U.Uc(c.getTypeObjNotice(t)),U.Db(1),U.Vc(" ",U.ic(6,6,"lang_notify_list_in_date")," "),U.Db(3),U.Uc(U.jc(9,8,t.createdAt,"dd/MM/yyyy"))}}function X(e,n){if(1&e&&(U.Vb(0,"span"),U.Tc(1),U.hc(2,"mytranslate"),U.Vb(3,"b"),U.Tc(4),U.Ub(),U.Tc(5),U.hc(6,"mytranslate"),U.Vb(7,"span",21),U.Tc(8),U.hc(9,"date"),U.Ub(),U.Ub()),2&e){var t=U.gc().$implicit;U.Db(1),U.Vc(" ",U.ic(2,4,"lang_notify_list_new_qa_exam_ask")," "),U.Db(3),U.Uc(t.examName),U.Db(1),U.Vc(" ",U.ic(6,6,"lang_notify_list_in_date")," "),U.Db(3),U.Uc(U.jc(9,8,t.createdAt,"dd/MM/yyyy"))}}function K(e,n){if(1&e&&(U.Vb(0,"span"),U.Tc(1),U.hc(2,"mytranslate"),U.Vb(3,"b"),U.Tc(4),U.Ub(),U.Tc(5),U.hc(6,"mytranslate"),U.Vb(7,"span",21),U.Tc(8),U.hc(9,"date"),U.Ub(),U.Ub()),2&e){var t=U.gc().$implicit;U.Db(1),U.Vc(" ",U.ic(2,4,"lang_notify_list_new_qa_homework_ask")," "),U.Db(3),U.Uc(t.homeworkName),U.Db(1),U.Vc(" ",U.ic(6,6,"lang_notify_list_in_date")," "),U.Db(3),U.Uc(U.jc(9,8,t.createdAt,"dd/MM/yyyy"))}}function Q(e,n){if(1&e&&(U.Vb(0,"span"),U.Tc(1),U.hc(2,"mytranslate"),U.Vb(3,"b"),U.Tc(4),U.Ub(),U.Tc(5),U.hc(6,"mytranslate"),U.Vb(7,"span",21),U.Tc(8),U.hc(9,"date"),U.Ub(),U.Ub()),2&e){var t=U.gc().$implicit;U.Db(1),U.Vc(" ",U.ic(2,4,"lang_notify_list_new_qa_exam_answer")," "),U.Db(3),U.Uc(t.examName),U.Db(1),U.Vc(" ",U.ic(6,6,"lang_notify_list_in_date")," "),U.Db(3),U.Uc(U.jc(9,8,t.createdAt,"dd/MM/yyyy"))}}function B(e,n){if(1&e&&(U.Vb(0,"span"),U.Tc(1),U.hc(2,"mytranslate"),U.Vb(3,"b"),U.Tc(4),U.Ub(),U.Tc(5),U.hc(6,"mytranslate"),U.Vb(7,"span",21),U.Tc(8),U.hc(9,"date"),U.Ub(),U.Ub()),2&e){var t=U.gc().$implicit;U.Db(1),U.Vc(" ",U.ic(2,4,"lang_notify_list_new_qa_homework_answer")," "),U.Db(3),U.Uc(t.homeworkName),U.Db(1),U.Vc(" ",U.ic(6,6,"lang_notify_list_in_date")," "),U.Db(3),U.Uc(U.jc(9,8,t.createdAt,"dd/MM/yyyy"))}}function F(e,n){if(1&e&&(U.Vb(0,"span",28),U.Tc(1),U.hc(2,"mytranslate"),U.Vb(3,"span",20),U.Tc(4),U.Ub(),U.Ub()),2&e){var t=U.gc(2).$implicit;U.Db(1),U.Vc("",U.ic(2,2,"lang_notify_list_number_phone_accuracy"),": "),U.Db(3),U.Uc(t.datas)}}function G(e,n){if(1&e){var t=U.Wb();U.Vb(0,"div",22),U.Vb(1,"div",23),U.Vb(2,"span"),U.Tc(3),U.hc(4,"mytranslate"),U.Vb(5,"span",20),U.Tc(6),U.Ub(),U.Tc(7),U.hc(8,"mytranslate"),U.Vb(9,"span",20),U.Tc(10),U.Ub(),U.Tc(11),U.hc(12,"mytranslate"),U.Rc(13,F,5,4,"span",24),U.Ub(),U.Vb(14,"div",25),U.Vb(15,"span",26),U.cc("click",function(){U.Ec(t);var e=U.gc().$implicit;return U.gc(2).delRequestNotice(e.id)}),U.Tc(16),U.hc(17,"mytranslate"),U.Ub(),U.Vb(18,"span",27),U.cc("click",function(){U.Ec(t);var e=U.gc().$implicit;return U.gc(2).reApproveStudent(e.studentId,e.id)}),U.Tc(19),U.hc(20,"mytranslate"),U.Ub(),U.Ub(),U.Ub(),U.Ub()}if(2&e){var c=U.gc().$implicit;U.Db(3),U.Vc(" ",U.ic(4,8,"lang_notify_list_students")," "),U.Db(3),U.Uc(c.studentName),U.Db(1),U.Vc(" ",U.ic(8,10,"lang_notify_list_class")," "),U.Db(3),U.Vc(" ",c.classroomName," "),U.Db(1),U.Vc(" ",U.ic(12,12,"lang_notify_list_dont_choose_name"),". "),U.Db(2),U.nc("ngIf",null!=c.datas),U.Db(3),U.Uc(U.ic(17,14,"lang_notify_list_del_request")),U.Db(3),U.Uc(U.ic(20,16,"lang_notify_list_re_approve"))}}function Z(e,n){if(1&e){var t=U.Wb();U.Vb(0,"div",12),U.Vb(1,"a",13),U.cc("click",function(){U.Ec(t);var e=n.$implicit;return U.gc(2).redirectToPage(e)}),U.Vb(2,"div",14),U.Vb(3,"div",15),U.Tc(4),U.Ub(),U.Ub(),U.Vb(5,"div",16),U.Rc(6,A,5,4,"span",17),U.Rc(7,W,12,12,"span",17),U.Rc(8,C,12,12,"span",17),U.Rc(9,j,12,12,"span",17),U.Rc(10,$,12,12,"span",17),U.Rc(11,H,12,12,"span",17),U.Rc(12,L,12,12,"span",17),U.Rc(13,q,12,12,"span",17),U.Rc(14,z,10,11,"span",17),U.Rc(15,X,10,11,"span",17),U.Rc(16,K,10,11,"span",17),U.Rc(17,Q,10,11,"span",17),U.Rc(18,B,10,11,"span",17),U.Rc(19,G,21,18,"div",18),U.Vb(20,"p",19),U.Tc(21),U.hc(22,"date"),U.Ub(),U.Ub(),U.Ub(),U.Ub()}if(2&e){var c=n.$implicit;U.Db(4),U.Vc(" ",c.classroomName," "),U.Db(2),U.nc("ngIf","NEW_ASSIGN"==c.type),U.Db(1),U.nc("ngIf","HAS_MARK"==c.type),U.Db(1),U.nc("ngIf","NEW_ANSWER"==c.type),U.Db(1),U.nc("ngIf","NEW_HOMEWORK"==c.type),U.Db(1),U.nc("ngIf","RESEND_ANSWER"==c.type),U.Db(1),U.nc("ngIf","NEW_EXAM_SUBMIT"==c.type),U.Db(1),U.nc("ngIf","NEW_EXAM"==c.type),U.Db(1),U.nc("ngIf","EXAM_HAS_MARK"==c.type),U.Db(1),U.nc("ngIf","NEW_SHARE_PERMISSION"==c.type),U.Db(1),U.nc("ngIf","NEW_QA_EXAM_ASK"==c.type),U.Db(1),U.nc("ngIf","NEW_QA_HOMEWORK_ASK"==c.type),U.Db(1),U.nc("ngIf","NEW_QA_EXAM_ANSWER"==c.type),U.Db(1),U.nc("ngIf","NEW_QA_HOMEWORK_ANSWER"==c.type),U.Db(1),U.nc("ngIf","NEW_REQUEST_REAPPROVE"==c.type),U.Db(2),U.Vc(" ",U.jc(22,16,c.createdAt,"dd/MM/yyyy HH:mm:ss")," ")}}function J(e,n){if(1&e){var t=U.Wb();U.Vb(0,"div",7),U.Vb(1,"div",8),U.Rc(2,Z,23,19,"div",9),U.Ub(),U.Ub(),U.Vb(3,"div",10),U.Vb(4,"azt-paging",11),U.cc("SendPage",function(e){return U.Ec(t),U.gc().clickPage(e)}),U.Ub(),U.Ub()}if(2&e){var c=U.gc();U.Db(2),U.nc("ngForOf",c.dataNotify.objs),U.Db(2),U.nc("lengthPage",c.lengthPage)("paging",c.page)}}var Y,ee,ne,te=((Y=function(t){n(o,t);var i=c(o);function o(e,n,t,c,a,l){var s;return r(this,o),(s=i.call(this,n)).activeRoute=e,s.commonService=n,s.baseApiService=t,s.noticeService=c,s.studentService=a,s.globalService=l,s.isLoading=!1,s.subscriptions=new k.a,s.dataNotify={},s.arrayPag=[],s.lengthPage=0,s.totalNotify=0,s.page=1,s.textNotify="",s.role=1,s}return l(o,[{key:"getTypeObjNotice",value:function(e){return"NEW_SHARE_PERMISSION"==e.type?e.classroomId?"L\u1edbp: "+e.classroomName:e.homeworkId?"B\xe0i t\u1eadp: "+e.homeworkName:"\u0110\u1ec1 thi: "+e.examName:""}},{key:"getDataNotifyByRole",value:function(e,n){var t=this;this.isLoading=!0,this.noticeService.apiNoticeGetObjsByRoleGet(e,n).subscribe(function(e){var n,c,i;e&&(t.isLoading=!1,1==e.success?(t.dataNotify=null!==(n=e.data)&&void 0!==n?n:{},t.lengthPage=Math.ceil((null!==(c=t.dataNotify.total)&&void 0!==c?c:0)/18),t.createPag()):t.showErrorSnack(null!==(i=e.message)&&void 0!==i?i:""))})}},{key:"redirectToPage",value:function(e){switch(e.type){case"NEW_ANSWER":this.commonService.myNavigation("/admin/homework/score-list/".concat(e.classroomId,"/").concat(e.homeworkId,"/").concat(e.homeworkHashId));break;case"HAS_MARK":case"NEW_HOMEWORK":case"RESEND_ANSWER":this.commonService.myNavigation("/bai-tap/"+e.homeworkHashId);break;case"NEW_EXAM_SUBMIT":this.commonService.myNavigation("/admin/testbank/test-review/".concat(e.examId,"/").concat(e.parentId,"/").concat(e.studentId,"/0"));break;case"NEW_EXAM":this.commonService.myNavigation("/de-thi/"+e.examHashId);break;case"EXAM_HAS_MARK":this.commonService.myNavigation("/test/answer-test/".concat(e.parentId,"/0/").concat(e.examHashId,"/").concat(e.examResultId));break;case"NEW_QA_EXAM_ASK":case"NEW_QA_HOMEWORK_ASK":this.commonService.myNavigation("/admin/teacher-qa/view-question/"+Number(e.datas));break;case"NEW_QA_EXAM_ANSWER":case"NEW_QA_HOMEWORK_ANSWER":this.commonService.myNavigation("/student-qa/view-question/"+Number(e.datas))}null===e.homeworkId&&null===e.homeworkHashId&&null===e.examHashId&&null===e.examId&&("NEW_ASSIGN"==e.type?this.commonService.myNavigation("/admin/student/manage-class/0"):"NEW_REQUEST_REAPPROVE"==e.type||this.commonService.myNavigation("/student/dashboard/1"))}},{key:"reApproveStudent",value:function(e,n){var t=this;this.subscriptions.add(this.studentService.apiStudentRemoveMappingObjGet(e).subscribe(function(e){var c;1==e.success?(t.delRequestNotice(n),t.getDataNotifyByRole(t.role,t.page),t.commonService.snackSuccess("M\u1edf kh\xf3a cho h\u1ecdc sinh th\xe0nh c\xf4ng","")):t.showErrorSnack(null!==(c=e.message)&&void 0!==c?c:"")}))}},{key:"delRequestNotice",value:function(e){var n=this;this.subscriptions.add(this.noticeService.apiNoticeDeleteObjGet(e).subscribe(function(e){var t;1==e.success?(n.reGetNotifice(),n.getDataNotifyByRole(n.role,n.page)):n.showErrorSnack(null!==(t=e.message)&&void 0!==t?t:"")}))}},{key:"reGetNotifice",value:function(){var e="back_header_infors_"+this.baseApiService.getUserObj().id;this.globalService.removeGlobalData(e)}},{key:"createPag",value:function(){for(var e=1;e<=this.lengthPage;e++)this.arrayPag.push(e)}},{key:"clickPage",value:function(e){this.isLoading=!0,this.page=e,this.arrayPag=[],this.commonService.myNavigation("/notify/".concat(this.role,"/").concat(this.page)),this.getDataNotifyByRole(this.role,this.page),window.scrollTo(0,0)}},{key:"ngOnInit",value:function(){this.role=+this.commonService.getMyParam(this.activeRoute,"role"),this.page=+this.commonService.getMyParam(this.activeRoute,"page"),this.getDataNotifyByRole(this.role,this.page),this.commonService.translateMetaData({title:"lang_cms_homework_notify_title",description:"lang_cms_homework_notify_description",image:"lang_cms_test_image"}),e(a(o.prototype),"ngOnInit",this).call(this)}}]),o}(P.a)).\u0275fac=function(e){return new(e||Y)(U.Pb(f.a),U.Pb(V.a),U.Pb(D.a),U.Pb(S.N),U.Pb(S.db),U.Pb(T.a))},Y.\u0275cmp=U.Jb({type:Y,selectors:[["app-notify"]],features:[U.Ab],decls:7,vars:4,consts:[["class","mb-3",3,"headerTitle","back_link",4,"ngIf"],[3,"headerTitle","back_link",4,"ngIf"],[1,"container-fluid","component-wrap","content","maxW1000","m-auto","mt-3"],[4,"ngIf","ngIfElse"],["doneLoading",""],[1,"mb-3",3,"headerTitle","back_link"],[3,"headerTitle","back_link"],[1,"dashboard"],[1,"content__notifi"],["class","block",4,"ngFor","ngForOf"],[1,"my-4"],[3,"lengthPage","paging","SendPage"],[1,"block"],[1,"notify__block",3,"click"],[1,"col-3","left-col","d-flex","justify-content-center","align-items-center","ng-star-inserted","notify__class"],[1,"content-center","text-white","class-info","pt-2","pb-2"],[1,"notify__content"],[4,"ngIf"],["class","pt-1 pb-1 clickable",4,"ngIf"],[1,"time__ago"],[1,"notify__name"],[1,"notify__time"],[1,"pt-1","pb-1","clickable"],[1,"notify__content","p-0"],["class","d-block",4,"ngIf"],[1,"d-flex","justify-content-end","mt-2",2,"flex-wrap","wrap"],[1,"notify__btn",3,"click"],[1,"notify__btn","bg-info","ml-2",3,"click"],[1,"d-block"]],template:function(e,n){if(1&e&&(U.Rc(0,E,2,4,"header-backend",0),U.Rc(1,O,2,4,"header-frontend",1),U.Vb(2,"div",2),U.Rc(3,w,1,0,"azt-loading-effect",3),U.Rc(4,J,5,3,"ng-template",null,4,U.Sc),U.Ub(),U.Qb(6,"homework-backend-footer")),2&e){var t=U.Ac(5);U.nc("ngIf",0==n.role),U.Db(1),U.nc("ngIf",1==n.role),U.Db(2),U.nc("ngIf",n.isLoading)("ngIfElse",t)}},directives:[s.m,I.a,N.a,R.a,s.l,M.a],pipes:[x.t,s.e],styles:["*[_ngcontent-%COMP%]{margin:0;box-sizing:border-box}a[_ngcontent-%COMP%]:hover{text-decoration:none}.white[_ngcontent-%COMP%]{margin-top:5px;padding-bottom:-5px;background-color:#fff;height:50px}a[_ngcontent-%COMP%]{text-decoration:none}.text-white[_ngcontent-%COMP%]{color:#fff}.content[_ngcontent-%COMP%]{overflow-x:hidden}.back-to[_ngcontent-%COMP%]{color:#969696;display:flex;text-decoration:none}.block[_ngcontent-%COMP%]{padding-top:2px}.dashboard__header[_ngcontent-%COMP%]{background-color:#0089a7;margin-top:-15px;margin-left:-15px;margin-right:-15px}.header__top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:20px}.header__coin[_ngcontent-%COMP%]{background-color:#009cbe;width:90px;height:36px;border:none;border-radius:5px;box-shadow:none;text-align:center;padding-top:8px}.notify__btn[_ngcontent-%COMP%]{border-radius:5px;padding:5px;color:#000;font-size:12px;border:1px solid #979696}.bg-info[_ngcontent-%COMP%]{color:#fff!important;border:none!important;background-color:#00a7d0}.coin__link[_ngcontent-%COMP%]{color:#fff}.coin__text[_ngcontent-%COMP%]{font-weight:700;margin-right:4px;font-size:18px}.header__work[_ngcontent-%COMP%]{display:flex}.header__gift[_ngcontent-%COMP%]{position:relative;margin-right:24px;margin-top:8px}.gift__link[_ngcontent-%COMP%]{color:#fff}.girt__count[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-10px;background-color:#fe4531;border-radius:50%;width:16px;height:16px;color:#fff;padding:0;text-align:center;font-weight:700;font-size:9px}.header__work[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:32px}.header__user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35px;height:35px;border-radius:50%;margin-top:4px}.header__body[_ngcontent-%COMP%]{padding-top:30px;text-align:center;color:#fff}.header__body[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:45px}.content__notifi[_ngcontent-%COMP%]{margin-top:20px}.content__title[_ngcontent-%COMP%]{text-transform:uppercase}.notify__block[_ngcontent-%COMP%]{display:flex;background-color:#fff;border:none;border-radius:3px;box-shadow:0 0 6px rgba(0,0,0,.1215686275);margin-top:15px}.notify__class[_ngcontent-%COMP%]{background-color:#00c0f0;border-radius:3px;border-top-right-radius:0;border-bottom-right-radius:0}.notify__content[_ngcontent-%COMP%]{color:#000;padding:10px}.class__text[_ngcontent-%COMP%]{color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.notify__name[_ngcontent-%COMP%], .notify__time[_ngcontent-%COMP%]{font-weight:700}.time__ago[_ngcontent-%COMP%]{margin:5px 0 0;color:#909090}.col-pag[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;text-align:right}.btn-pag[_ngcontent-%COMP%]{padding:5px 8px}.page-item[_ngcontent-%COMP%]{margin:0 3px}"]}),Y),ce=[{path:"",component:te,canActivate:[m.a],children:[{path:"",canActivateChild:[m.a],children:[{path:"",component:te}]}]}],ie=((ne=function e(){r(this,e)}).\u0275mod=U.Nb({type:ne}),ne.\u0275inj=U.Mb({factory:function(e){return new(e||ne)},imports:[[f.l.forChild(ce)],f.l,y.c]}),ne),ae=((ee=function e(){r(this,e)}).\u0275mod=U.Nb({type:ee}),ee.\u0275inj=U.Mb({factory:function(e){return new(e||ee)},imports:[[f.l,s.c,_.a,u.b,b.m,b.x,g.f,v.a,d.b,p.b,ie,h.a]]}),ee)},uZ1F:function(t,i,o){"use strict";o.d(i,"a",function(){return L});var s=o("fXoL"),b=o("gm2p"),g=o("ofXK"),f=o("tyNb"),u=o("iWHX");function d(e,n){if(1&e){var t=s.Wb();s.Vb(0,"li",6),s.Vb(1,"a",7),s.cc("click",function(){s.Ec(t);var e=s.gc(2);return e.clickPage(e.page-1)}),s.Vb(2,"span",8),s.Tc(3,"\xab"),s.Ub(),s.Vb(4,"span",9),s.Tc(5,"Previous"),s.Ub(),s.Ub(),s.Ub()}}var p=function(e){return[e]};function h(e,n){if(1&e){var t=s.Wb();s.Vb(0,"a",13),s.cc("click",function(){s.Ec(t);var e=s.gc().$implicit;return s.gc(3).clickPage(e)}),s.hc(1,"mylocalize"),s.Tc(2),s.Ub()}if(2&e){var c=s.gc().$implicit,i=s.gc(3);s.nc("routerLink",s.tc(5,p,s.ic(1,3,i.linkPage)))("queryParams",i.eventSearchHandle(c)),s.Db(2),s.Vc("",c," ")}}function v(e,n){if(1&e){var t=s.Wb();s.Vb(0,"a",14),s.cc("click",function(){s.Ec(t);var e=s.gc().$implicit;return s.gc(3).clickPage(e)}),s.hc(1,"mylocalize"),s.Tc(2),s.Ub()}if(2&e){var c=s.gc().$implicit,i=s.gc(3);s.nc("routerLink",s.tc(5,p,s.ic(1,3,i.linkPage)))("queryParams",i.eventSearchHandle(c)),s.Db(2),s.Vc("",c," ")}}function _(e,n){if(1&e&&(s.Vb(0,"li",6),s.Rc(1,h,3,7,"a",11),s.Rc(2,v,3,7,"a",12),s.Ub()),2&e){var t=n.$implicit,c=s.gc(3);s.Db(1),s.nc("ngIf",c.page==t),s.Db(1),s.nc("ngIf",c.page!=t&&t<=c.page+3&&t>=c.page-3)}}function y(e,n){if(1&e&&(s.Tb(0),s.Rc(1,_,3,2,"li",10),s.Sb()),2&e){var t=s.gc(2);s.Db(1),s.nc("ngForOf",t.arrayPag)}}function m(e,n){if(1&e){var t=s.Wb();s.Vb(0,"a",17),s.cc("click",function(){s.Ec(t);var e=s.gc().$implicit;return s.gc(3).clickPage(e)}),s.Tc(1),s.Ub()}if(2&e){var c=s.gc().$implicit;s.Db(1),s.Vc("",c," ")}}function k(e,n){if(1&e){var t=s.Wb();s.Vb(0,"a",18),s.cc("click",function(){s.Ec(t);var e=s.gc().$implicit;return s.gc(3).clickPage(e)}),s.Tc(1),s.Ub()}if(2&e){var c=s.gc().$implicit;s.Db(1),s.Vc("",c," ")}}function P(e,n){if(1&e&&(s.Vb(0,"li",6),s.Rc(1,m,2,1,"a",15),s.Rc(2,k,2,1,"a",16),s.Ub()),2&e){var t=n.$implicit,c=s.gc(3);s.Db(1),s.nc("ngIf",c.page==t),s.Db(1),s.nc("ngIf",c.page!=t&&t<=c.page+3&&t>=c.page-3)}}function U(e,n){if(1&e&&(s.Tb(0),s.Rc(1,P,3,2,"li",10),s.Sb()),2&e){var t=s.gc(2);s.Db(1),s.nc("ngForOf",t.arrayPag)}}function V(e,n){if(1&e){var t=s.Wb();s.Vb(0,"li",6),s.Vb(1,"a",14),s.cc("click",function(){return s.Ec(t),s.gc(3).clickPage(1)}),s.hc(2,"mylocalize"),s.Tc(3,"1"),s.Ub(),s.Ub()}if(2&e){var c=s.gc(3);s.Db(1),s.nc("routerLink",s.tc(4,p,s.ic(2,2,c.linkPage)))("queryParams",c.eventSearchHandle(1))}}function D(e,n){1&e&&(s.Vb(0,"a",20),s.Tc(1,"..."),s.Ub())}function S(e,n){if(1&e){var t=s.Wb();s.Vb(0,"a",13),s.cc("click",function(){s.Ec(t);var e=s.gc().$implicit;return s.gc(3).clickPage(e)}),s.hc(1,"mylocalize"),s.Tc(2),s.Ub()}if(2&e){var c=s.gc().$implicit,i=s.gc(3);s.nc("routerLink",s.tc(5,p,s.ic(1,3,i.linkPage)))("queryParams",i.eventSearchHandle(c)),s.Db(2),s.Vc("",c," ")}}function T(e,n){if(1&e){var t=s.Wb();s.Vb(0,"a",14),s.cc("click",function(){s.Ec(t);var e=s.gc().$implicit;return s.gc(3).clickPage(e)}),s.hc(1,"mylocalize"),s.Tc(2),s.Ub()}if(2&e){var c=s.gc().$implicit,i=s.gc(3);s.nc("routerLink",s.tc(5,p,s.ic(1,3,i.linkPage)))("queryParams",i.eventSearchHandle(c)),s.Db(2),s.Vc("",c," ")}}function I(e,n){if(1&e&&(s.Vb(0,"li",6),s.Rc(1,S,3,7,"a",11),s.Rc(2,T,3,7,"a",12),s.Ub()),2&e){var t=n.$implicit,c=s.gc(3);s.Db(1),s.nc("ngIf",c.page==t),s.Db(1),s.nc("ngIf",c.page!=t&&t<c.page+3&&t>=c.page-1)}}function N(e,n){1&e&&(s.Vb(0,"span",20),s.Tc(1,"..."),s.Ub())}function R(e,n){if(1&e){var t=s.Wb();s.Vb(0,"a",14),s.cc("click",function(){s.Ec(t);var e=s.gc(3);return e.clickPage(e.lengthPage)}),s.hc(1,"mylocalize"),s.Tc(2),s.Ub()}if(2&e){var c=s.gc(3);s.nc("routerLink",s.tc(5,p,s.ic(1,3,c.linkPage)))("queryParams",c.eventSearchHandle(c.lengthPage)),s.Db(2),s.Uc(c.lengthPage)}}function M(e,n){if(1&e&&(s.Tb(0),s.Rc(1,V,4,6,"li",4),s.Vb(2,"li",6),s.Rc(3,D,2,0,"a",19),s.Ub(),s.Rc(4,I,3,2,"li",10),s.Vb(5,"li",6),s.Rc(6,N,2,0,"span",19),s.Ub(),s.Vb(7,"li",6),s.Rc(8,R,3,7,"a",12),s.Ub(),s.Sb()),2&e){var t=s.gc(2);s.Db(1),s.nc("ngIf",t.page>=3),s.Db(2),s.nc("ngIf",t.page>=4),s.Db(1),s.nc("ngForOf",t.arrayPag),s.Db(2),s.nc("ngIf",t.page<t.lengthPage-3),s.Db(2),s.nc("ngIf",t.page<t.lengthPage-2)}}function x(e,n){if(1&e){var t=s.Wb();s.Vb(0,"li",6),s.Vb(1,"a",18),s.cc("click",function(){return s.Ec(t),s.gc(3).clickPage(1)}),s.Tc(2,"1"),s.Ub(),s.Ub()}}function E(e,n){1&e&&(s.Vb(0,"a",20),s.Tc(1,"..."),s.Ub())}function O(e,n){if(1&e){var t=s.Wb();s.Vb(0,"a",17),s.cc("click",function(){s.Ec(t);var e=s.gc().$implicit;return s.gc(3).clickPage(e)}),s.Tc(1),s.Ub()}if(2&e){var c=s.gc().$implicit;s.Db(1),s.Vc("",c," ")}}function w(e,n){if(1&e){var t=s.Wb();s.Vb(0,"a",18),s.cc("click",function(){s.Ec(t);var e=s.gc().$implicit;return s.gc(3).clickPage(e)}),s.Tc(1),s.Ub()}if(2&e){var c=s.gc().$implicit;s.Db(1),s.Vc("",c," ")}}function A(e,n){if(1&e&&(s.Vb(0,"li",6),s.Rc(1,O,2,1,"a",15),s.Rc(2,w,2,1,"a",16),s.Ub()),2&e){var t=n.$implicit,c=s.gc(3);s.Db(1),s.nc("ngIf",c.page==t),s.Db(1),s.nc("ngIf",c.page!=t&&t<c.page+3&&t>=c.page-1)}}function W(e,n){1&e&&(s.Vb(0,"span",20),s.Tc(1,"..."),s.Ub())}function C(e,n){if(1&e){var t=s.Wb();s.Vb(0,"a",18),s.cc("click",function(){s.Ec(t);var e=s.gc(3);return e.clickPage(e.lengthPage)}),s.Tc(1),s.Ub()}if(2&e){var c=s.gc(3);s.Db(1),s.Uc(c.lengthPage)}}function j(e,n){if(1&e&&(s.Tb(0),s.Rc(1,x,3,0,"li",4),s.Vb(2,"li",6),s.Rc(3,E,2,0,"a",19),s.Ub(),s.Rc(4,A,3,2,"li",10),s.Vb(5,"li",6),s.Rc(6,W,2,0,"span",19),s.Ub(),s.Vb(7,"li",6),s.Rc(8,C,2,1,"a",16),s.Ub(),s.Sb()),2&e){var t=s.gc(2);s.Db(1),s.nc("ngIf",t.page>=3),s.Db(2),s.nc("ngIf",t.page>=4),s.Db(1),s.nc("ngForOf",t.arrayPag),s.Db(2),s.nc("ngIf",t.page<t.lengthPage-3),s.Db(2),s.nc("ngIf",t.page<t.lengthPage-2)}}function $(e,n){if(1&e){var t=s.Wb();s.Vb(0,"li",6),s.Vb(1,"a",21),s.cc("click",function(){s.Ec(t);var e=s.gc(2);return e.clickPage(e.page+1)}),s.Vb(2,"span",8),s.Tc(3,"\xbb"),s.Ub(),s.Vb(4,"span",9),s.Tc(5,"Next"),s.Ub(),s.Ub(),s.Ub()}}function H(e,n){if(1&e&&(s.Vb(0,"div",1),s.Vb(1,"nav",2),s.Vb(2,"ul",3),s.Rc(3,d,6,0,"li",4),s.Rc(4,y,2,1,"ng-container",5),s.Rc(5,U,2,1,"ng-container",5),s.Rc(6,M,9,5,"ng-container",5),s.Rc(7,j,9,5,"ng-container",5),s.Rc(8,$,6,0,"li",4),s.Ub(),s.Ub(),s.Ub()),2&e){var t=s.gc();s.Db(3),s.nc("ngIf",t.page>1),s.Db(1),s.nc("ngIf",t.lengthPage<=4&&"report_error"==t.screen),s.Db(1),s.nc("ngIf",t.lengthPage<=4&&"report_error"!=t.screen),s.Db(1),s.nc("ngIf",t.lengthPage>4&&"report_error"==t.screen),s.Db(1),s.nc("ngIf",t.lengthPage>4&&"report_error"!=t.screen),s.Db(1),s.nc("ngIf",t.lengthPage>t.page&&t.lengthPage>=2)}}var L=function(){var t=function(t){n(o,t);var i=c(o);function o(){var e;return r(this,o),(e=i.apply(this,arguments)).lengthPage=0,e.paging=1,e.screen="",e.linkPage="",e.SendPage=new s.o,e.page=1,e.arrayPag=[],e}return l(o,[{key:"eventSearchHandle",value:function(e){var n,t,c,i,a,r,o,l,s,b,g,f,u,d,p,h,v,_,y,m,k,P,U,V,D,S,T,I,N,R,M,x,E,O,w,A;return""!=(null===(n=this.eventSearch)||void 0===n?void 0:n.userPhone)&&""==(null===(t=this.eventSearch)||void 0===t?void 0:t.userId)&&""==(null===(c=this.eventSearch)||void 0===c?void 0:c.urls)?{page:e,userPhone:null===(i=this.eventSearch)||void 0===i?void 0:i.userPhone}:""==(null===(a=this.eventSearch)||void 0===a?void 0:a.userPhone)&&""!=(null===(r=this.eventSearch)||void 0===r?void 0:r.userId)&&""==(null===(o=this.eventSearch)||void 0===o?void 0:o.urls)?{page:e,userId:Number(null===(l=this.eventSearch)||void 0===l?void 0:l.userId)}:""==(null===(s=this.eventSearch)||void 0===s?void 0:s.userPhone)&&""==(null===(b=this.eventSearch)||void 0===b?void 0:b.userId)&&""!=(null===(g=this.eventSearch)||void 0===g?void 0:g.urls)?{page:e,urls:null===(f=this.eventSearch)||void 0===f?void 0:f.urls}:""!=(null===(u=this.eventSearch)||void 0===u?void 0:u.userPhone)&&""!=(null===(d=this.eventSearch)||void 0===d?void 0:d.userId)&&""==(null===(p=this.eventSearch)||void 0===p?void 0:p.urls)?{page:e,userPhone:null===(h=this.eventSearch)||void 0===h?void 0:h.userPhone,userId:Number(null===(v=this.eventSearch)||void 0===v?void 0:v.userId)}:""!=(null===(_=this.eventSearch)||void 0===_?void 0:_.userPhone)&&""==(null===(y=this.eventSearch)||void 0===y?void 0:y.userId)&&""!=(null===(m=this.eventSearch)||void 0===m?void 0:m.urls)?{page:e,userPhone:null===(k=this.eventSearch)||void 0===k?void 0:k.userPhone,urls:null===(P=this.eventSearch)||void 0===P?void 0:P.urls}:""==(null===(U=this.eventSearch)||void 0===U?void 0:U.userPhone)&&""!=(null===(V=this.eventSearch)||void 0===V?void 0:V.userId)&&""!=(null===(D=this.eventSearch)||void 0===D?void 0:D.urls)?{page:e,userId:Number(null===(S=this.eventSearch)||void 0===S?void 0:S.userId),urls:null===(T=this.eventSearch)||void 0===T?void 0:T.urls}:""==(null===(I=this.eventSearch)||void 0===I?void 0:I.userPhone)&&""==(null===(N=this.eventSearch)||void 0===N?void 0:N.userId)&&""==(null===(R=this.eventSearch)||void 0===R?void 0:R.urls)?{page:e}:""!=(null===(M=this.eventSearch)||void 0===M?void 0:M.userPhone)&&""!=(null===(x=this.eventSearch)||void 0===x?void 0:x.userId)&&""!=(null===(E=this.eventSearch)||void 0===E?void 0:E.urls)?{page:e,userPhone:null===(O=this.eventSearch)||void 0===O?void 0:O.userPhone,userId:Number(null===(w=this.eventSearch)||void 0===w?void 0:w.userId),urls:null===(A=this.eventSearch)||void 0===A?void 0:A.urls}:void 0}},{key:"ArrayPage",value:function(){for(var e,n=1;n<=(null!==(e=this.lengthPage)&&void 0!==e?e:0);n++)this.arrayPag.push(n)}},{key:"clickPage",value:function(e){this.page=e,this.SendPage.emit(e)}},{key:"ngOnInit",value:function(){var n;this.arrayPag=[],this.page=null!==(n=this.paging)&&void 0!==n?n:0,this.ArrayPage(),e(a(o.prototype),"ngOnInit",this).call(this)}},{key:"ngOnChanges",value:function(){var e;this.arrayPag=[],this.page=null!==(e=this.paging)&&void 0!==e?e:0,this.ArrayPage()}}]),o}(b.a);return t.\u0275fac=function(e){return q(e||t)},t.\u0275cmp=s.Jb({type:t,selectors:[["azt-paging"]],inputs:{lengthPage:"lengthPage",paging:"paging",screen:"screen",eventSearch:"eventSearch",linkPage:"linkPage"},outputs:{SendPage:"SendPage"},features:[s.Ab,s.Bb],decls:1,vars:1,consts:[["class","row m-0 justify-content-center",4,"ngIf"],[1,"row","m-0","justify-content-center"],["aria-label","Page navigation pagination-nav",2,"display","inline-block"],[1,"pagination"],["class","page-item",4,"ngIf"],[4,"ngIf"],[1,"page-item"],["aria-label","Previous",1,"btn","btn-pag","page-link",3,"click"],["aria-hidden","true"],[1,"sr-only"],["class","page-item",4,"ngFor","ngForOf"],["style","background-color: #e9ecef","class","btn btn-pag page-link",3,"routerLink","queryParams","click",4,"ngIf"],["class","btn btn-pag page-link",3,"routerLink","queryParams","click",4,"ngIf"],[1,"btn","btn-pag","page-link",2,"background-color","#e9ecef",3,"routerLink","queryParams","click"],[1,"btn","btn-pag","page-link",3,"routerLink","queryParams","click"],["style","background-color: #e9ecef","class","btn btn-pag page-link",3,"click",4,"ngIf"],["class","btn btn-pag page-link",3,"click",4,"ngIf"],[1,"btn","btn-pag","page-link",2,"background-color","#e9ecef",3,"click"],[1,"btn","btn-pag","page-link",3,"click"],["class","btn btn-pag page-link",4,"ngIf"],[1,"btn","btn-pag","page-link"],["aria-label","Next",1,"btn","btn-pag","page-link",3,"click"]],template:function(e,n){1&e&&s.Rc(0,H,9,6,"div",0),2&e&&s.nc("ngIf",n.lengthPage&&n.lengthPage>1)},directives:[g.m,g.l,f.k],pipes:[u.s],styles:[".page-link[_ngcontent-%COMP%]:visited{color:pink}"]}),t}(),q=s.Xb(L)}}])}();