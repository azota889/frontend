(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"6Fp8":function(n,t,e){"use strict";e.d(t,"a",function(){return o});var c=e("fXoL"),i=e("5ete"),a=e("clS4");let o=(()=>{class n{constructor(n,t){this.baseApiService=n,this.redirectService=t}canActivate(n,t){return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginAnonymous(t.url),!1)}canActivateChild(n,t){return this.canActivate(n,t)}canLoad(n){const t="/"+n.path;return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(t),!1)}}return n.\u0275fac=function(t){return new(t||n)(c.Zb(i.a),c.Zb(a.a))},n.\u0275prov=c.Lb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},XJaZ:function(n,t,e){"use strict";e.r(t),e.d(t,"NotifyModule",function(){return G});var c=e("ofXK"),i=e("3Pt+"),a=e("0IaG"),o=e("tyNb"),s=e("fB2i"),r=e("IkSl"),l=e("rIor"),b=e("Zhhu"),g=e("sOeQ"),d=e("vvyD"),h=e("Avyq"),p=e("6Fp8"),f=e("quSY"),u=e("gm2p"),_=e("fXoL"),m=e("oUVn"),y=e("5ete"),v=e("PYj7"),k=e("1ffk"),P=e("hZBc"),U=e("k3bj"),V=e("nzN9"),D=e("uZ1F"),S=e("iWHX");function I(n,t){1&n&&(_.Qb(0,"header-backend",5),_.hc(1,"mytranslate")),2&n&&_.nc("headerTitle",_.ic(1,2,"lang_notify_list_header_title"))("back_link","/admin/testbank/dashboard")}function T(n,t){1&n&&(_.Qb(0,"header-frontend",6),_.hc(1,"mytranslate")),2&n&&_.nc("headerTitle",_.ic(1,2,"lang_notify_list_header_title"))("back_link","/student/dashboard/0")}function N(n,t){1&n&&_.Qb(0,"azt-loading-effect")}function M(n,t){if(1&n&&(_.Vb(0,"span"),_.Tc(1),_.hc(2,"mytranslate"),_.Vb(3,"span",20),_.Tc(4),_.Ub(),_.Ub()),2&n){const n=_.gc().$implicit;_.Db(1),_.Vc(" ",_.ic(2,2,"lang_notify_list_new_decentralization_for_class")," "),_.Db(3),_.Vc(" ",n.classroomName," ")}}function R(n,t){if(1&n&&(_.Vb(0,"span"),_.Vb(1,"span",20),_.Tc(2),_.Ub(),_.Tc(3),_.hc(4,"mytranslate"),_.Vb(5,"b"),_.Tc(6),_.Ub(),_.Tc(7),_.hc(8,"mytranslate"),_.Vb(9,"span",21),_.Tc(10),_.hc(11,"date"),_.Ub(),_.Ub()),2&n){const n=_.gc().$implicit;_.Db(2),_.Uc(n.studentName),_.Db(1),_.Vc(" ",_.ic(4,5,"lang_notify_list_scored_homework")," "),_.Db(3),_.Uc(n.homeworkName),_.Db(1),_.Vc(" ",_.ic(8,7,"lang_notify_list_in_date")," "),_.Db(3),_.Uc(_.jc(11,9,n.createdAt,"dd/MM/yyyy"))}}function x(n,t){if(1&n&&(_.Vb(0,"span"),_.Vb(1,"span",20),_.Tc(2),_.Ub(),_.Tc(3),_.hc(4,"mytranslate"),_.Vb(5,"b"),_.Tc(6),_.Ub(),_.Tc(7),_.hc(8,"mytranslate"),_.Vb(9,"span",21),_.Tc(10),_.hc(11,"date"),_.Ub(),_.Ub()),2&n){const n=_.gc().$implicit;_.Db(2),_.Uc(n.studentName),_.Db(1),_.Vc(" ",_.ic(4,5,"lang_notify_list_submitted")," "),_.Db(3),_.Uc(n.homeworkName),_.Db(1),_.Vc(" ",_.ic(8,7,"lang_notify_list_in_date")," "),_.Db(3),_.Uc(_.jc(11,9,n.createdAt,"dd/MM/yyyy"))}}function E(n,t){if(1&n&&(_.Vb(0,"span"),_.Vb(1,"span",20),_.Tc(2),_.Ub(),_.Tc(3),_.hc(4,"mytranslate"),_.Vb(5,"b"),_.Tc(6),_.Ub(),_.Tc(7),_.hc(8,"mytranslate"),_.Vb(9,"span",21),_.Tc(10),_.hc(11,"date"),_.Ub(),_.Ub()),2&n){const n=_.gc().$implicit;_.Db(2),_.Uc(n.studentName),_.Db(1),_.Vc(" ",_.ic(4,5,"lang_notify_list_there_are_exercises")," "),_.Db(3),_.Uc(n.homeworkName),_.Db(1),_.Vc(" ",_.ic(8,7,"lang_notify_list_delivered")," "),_.Db(3),_.Uc(_.jc(11,9,n.createdAt,"dd/MM/yyyy"))}}function A(n,t){if(1&n&&(_.Vb(0,"span"),_.Vb(1,"span",20),_.Tc(2),_.Ub(),_.Tc(3),_.hc(4,"mytranslate"),_.Vb(5,"b"),_.Tc(6),_.Ub(),_.Tc(7),_.hc(8,"mytranslate"),_.Vb(9,"span",21),_.Tc(10),_.hc(11,"date"),_.Ub(),_.Ub()),2&n){const n=_.gc().$implicit;_.Db(2),_.Uc(n.studentName),_.Db(1),_.Vc(" ",_.ic(4,5,"lang_notify_list_submit_assignments")," "),_.Db(3),_.Uc(n.homeworkName),_.Db(1),_.Vc(" ",_.ic(8,7,"lang_notify_list_in_date")," "),_.Db(3),_.Uc(_.jc(11,9,n.createdAt,"dd/MM/yyyy"))}}function O(n,t){if(1&n&&(_.Vb(0,"span"),_.Vb(1,"span",20),_.Tc(2),_.Ub(),_.Tc(3),_.hc(4,"mytranslate"),_.Vb(5,"b"),_.Tc(6),_.Ub(),_.Tc(7),_.hc(8,"mytranslate"),_.Vb(9,"span",21),_.Tc(10),_.hc(11,"date"),_.Ub(),_.Ub()),2&n){const n=_.gc().$implicit;_.Db(2),_.Uc(n.studentName),_.Db(1),_.Vc(" ",_.ic(4,5,"lang_notify_list_submit_succes")," "),_.Db(3),_.Uc(n.examName),_.Db(1),_.Vc(" ",_.ic(8,7,"lang_notify_list_in_date")," "),_.Db(3),_.Uc(_.jc(11,9,n.createdAt,"dd/MM/yyyy"))}}function w(n,t){if(1&n&&(_.Vb(0,"span"),_.Vb(1,"span",20),_.Tc(2),_.Ub(),_.Tc(3),_.hc(4,"mytranslate"),_.Vb(5,"b"),_.Tc(6),_.Ub(),_.Tc(7),_.hc(8,"mytranslate"),_.Vb(9,"span",21),_.Tc(10),_.hc(11,"date"),_.Ub(),_.Ub()),2&n){const n=_.gc().$implicit;_.Db(2),_.Uc(n.studentName),_.Db(1),_.Vc(" ",_.ic(4,5,"lang_notify_list_new_tested")," "),_.Db(3),_.Uc(n.examName),_.Db(1),_.Vc(" ",_.ic(8,7,"lang_notify_list_in_date")," "),_.Db(3),_.Uc(_.jc(11,9,n.createdAt,"dd/MM/yyyy"))}}function W(n,t){if(1&n&&(_.Vb(0,"span"),_.Vb(1,"span",20),_.Tc(2),_.Ub(),_.Tc(3),_.hc(4,"mytranslate"),_.Vb(5,"b"),_.Tc(6),_.Ub(),_.Tc(7),_.hc(8,"mytranslate"),_.Vb(9,"span",21),_.Tc(10),_.hc(11,"date"),_.Ub(),_.Ub()),2&n){const n=_.gc().$implicit;_.Db(2),_.Uc(n.studentName),_.Db(1),_.Vc(" ",_.ic(4,5,"lang_notify_list_tested")," "),_.Db(3),_.Uc(n.examName),_.Db(1),_.Vc(" ",_.ic(8,7,"lang_notify_list_has_been_graded")," "),_.Db(3),_.Uc(_.jc(11,9,n.createdAt,"dd/MM/yyyy"))}}function $(n,t){if(1&n&&(_.Vb(0,"span"),_.Tc(1),_.hc(2,"mytranslate"),_.Vb(3,"b"),_.Tc(4),_.Ub(),_.Tc(5),_.hc(6,"mytranslate"),_.Vb(7,"span",21),_.Tc(8),_.hc(9,"date"),_.Ub(),_.Ub()),2&n){const n=_.gc().$implicit,t=_.gc(2);_.Db(1),_.Vc(" ",_.ic(2,4,"lang_notify_list_new_decentralization")," "),_.Db(3),_.Uc(t.getTypeObjNotice(n)),_.Db(1),_.Vc(" ",_.ic(6,6,"lang_notify_list_in_date")," "),_.Db(3),_.Uc(_.jc(9,8,n.createdAt,"dd/MM/yyyy"))}}function C(n,t){if(1&n&&(_.Vb(0,"span"),_.Tc(1),_.hc(2,"mytranslate"),_.Vb(3,"b"),_.Tc(4),_.Ub(),_.Tc(5),_.hc(6,"mytranslate"),_.Vb(7,"span",21),_.Tc(8),_.hc(9,"date"),_.Ub(),_.Ub()),2&n){const n=_.gc().$implicit;_.Db(1),_.Vc(" ",_.ic(2,4,"lang_notify_list_new_qa_exam_ask")," "),_.Db(3),_.Uc(n.examName),_.Db(1),_.Vc(" ",_.ic(6,6,"lang_notify_list_in_date")," "),_.Db(3),_.Uc(_.jc(9,8,n.createdAt,"dd/MM/yyyy"))}}function j(n,t){if(1&n&&(_.Vb(0,"span"),_.Tc(1),_.hc(2,"mytranslate"),_.Vb(3,"b"),_.Tc(4),_.Ub(),_.Tc(5),_.hc(6,"mytranslate"),_.Vb(7,"span",21),_.Tc(8),_.hc(9,"date"),_.Ub(),_.Ub()),2&n){const n=_.gc().$implicit;_.Db(1),_.Vc(" ",_.ic(2,4,"lang_notify_list_new_qa_homework_ask")," "),_.Db(3),_.Uc(n.homeworkName),_.Db(1),_.Vc(" ",_.ic(6,6,"lang_notify_list_in_date")," "),_.Db(3),_.Uc(_.jc(9,8,n.createdAt,"dd/MM/yyyy"))}}function H(n,t){if(1&n&&(_.Vb(0,"span"),_.Tc(1),_.hc(2,"mytranslate"),_.Vb(3,"b"),_.Tc(4),_.Ub(),_.Tc(5),_.hc(6,"mytranslate"),_.Vb(7,"span",21),_.Tc(8),_.hc(9,"date"),_.Ub(),_.Ub()),2&n){const n=_.gc().$implicit;_.Db(1),_.Vc(" ",_.ic(2,4,"lang_notify_list_new_qa_exam_answer")," "),_.Db(3),_.Uc(n.examName),_.Db(1),_.Vc(" ",_.ic(6,6,"lang_notify_list_in_date")," "),_.Db(3),_.Uc(_.jc(9,8,n.createdAt,"dd/MM/yyyy"))}}function L(n,t){if(1&n&&(_.Vb(0,"span"),_.Tc(1),_.hc(2,"mytranslate"),_.Vb(3,"b"),_.Tc(4),_.Ub(),_.Tc(5),_.hc(6,"mytranslate"),_.Vb(7,"span",21),_.Tc(8),_.hc(9,"date"),_.Ub(),_.Ub()),2&n){const n=_.gc().$implicit;_.Db(1),_.Vc(" ",_.ic(2,4,"lang_notify_list_new_qa_homework_answer")," "),_.Db(3),_.Uc(n.homeworkName),_.Db(1),_.Vc(" ",_.ic(6,6,"lang_notify_list_in_date")," "),_.Db(3),_.Uc(_.jc(9,8,n.createdAt,"dd/MM/yyyy"))}}function q(n,t){if(1&n&&(_.Vb(0,"span",28),_.Tc(1),_.hc(2,"mytranslate"),_.Vb(3,"span",20),_.Tc(4),_.Ub(),_.Ub()),2&n){const n=_.gc(2).$implicit;_.Db(1),_.Vc("",_.ic(2,2,"lang_notify_list_number_phone_accuracy"),": "),_.Db(3),_.Uc(n.datas)}}function z(n,t){if(1&n){const n=_.Wb();_.Vb(0,"div",22),_.Vb(1,"div",23),_.Vb(2,"span"),_.Tc(3),_.hc(4,"mytranslate"),_.Vb(5,"span",20),_.Tc(6),_.Ub(),_.Tc(7),_.hc(8,"mytranslate"),_.Vb(9,"span",20),_.Tc(10),_.Ub(),_.Tc(11),_.hc(12,"mytranslate"),_.Rc(13,q,5,4,"span",24),_.Ub(),_.Vb(14,"div",25),_.Vb(15,"span",26),_.cc("click",function(){_.Ec(n);const t=_.gc().$implicit;return _.gc(2).delRequestNotice(t.id)}),_.Tc(16),_.hc(17,"mytranslate"),_.Ub(),_.Vb(18,"span",27),_.cc("click",function(){_.Ec(n);const t=_.gc().$implicit;return _.gc(2).reApproveStudent(t.studentId,t.id)}),_.Tc(19),_.hc(20,"mytranslate"),_.Ub(),_.Ub(),_.Ub(),_.Ub()}if(2&n){const n=_.gc().$implicit;_.Db(3),_.Vc(" ",_.ic(4,8,"lang_notify_list_students")," "),_.Db(3),_.Uc(n.studentName),_.Db(1),_.Vc(" ",_.ic(8,10,"lang_notify_list_class")," "),_.Db(3),_.Vc(" ",n.classroomName," "),_.Db(1),_.Vc(" ",_.ic(12,12,"lang_notify_list_dont_choose_name"),". "),_.Db(2),_.nc("ngIf",null!=n.datas),_.Db(3),_.Uc(_.ic(17,14,"lang_notify_list_del_request")),_.Db(3),_.Uc(_.ic(20,16,"lang_notify_list_re_approve"))}}function X(n,t){if(1&n){const n=_.Wb();_.Vb(0,"div",12),_.Vb(1,"a",13),_.cc("click",function(){_.Ec(n);const e=t.$implicit;return _.gc(2).redirectToPage(e)}),_.Vb(2,"div",14),_.Vb(3,"div",15),_.Tc(4),_.Ub(),_.Ub(),_.Vb(5,"div",16),_.Rc(6,M,5,4,"span",17),_.Rc(7,R,12,12,"span",17),_.Rc(8,x,12,12,"span",17),_.Rc(9,E,12,12,"span",17),_.Rc(10,A,12,12,"span",17),_.Rc(11,O,12,12,"span",17),_.Rc(12,w,12,12,"span",17),_.Rc(13,W,12,12,"span",17),_.Rc(14,$,10,11,"span",17),_.Rc(15,C,10,11,"span",17),_.Rc(16,j,10,11,"span",17),_.Rc(17,H,10,11,"span",17),_.Rc(18,L,10,11,"span",17),_.Rc(19,z,21,18,"div",18),_.Vb(20,"p",19),_.Tc(21),_.hc(22,"date"),_.Ub(),_.Ub(),_.Ub(),_.Ub()}if(2&n){const n=t.$implicit;_.Db(4),_.Vc(" ",n.classroomName," "),_.Db(2),_.nc("ngIf","NEW_ASSIGN"==n.type),_.Db(1),_.nc("ngIf","HAS_MARK"==n.type),_.Db(1),_.nc("ngIf","NEW_ANSWER"==n.type),_.Db(1),_.nc("ngIf","NEW_HOMEWORK"==n.type),_.Db(1),_.nc("ngIf","RESEND_ANSWER"==n.type),_.Db(1),_.nc("ngIf","NEW_EXAM_SUBMIT"==n.type),_.Db(1),_.nc("ngIf","NEW_EXAM"==n.type),_.Db(1),_.nc("ngIf","EXAM_HAS_MARK"==n.type),_.Db(1),_.nc("ngIf","NEW_SHARE_PERMISSION"==n.type),_.Db(1),_.nc("ngIf","NEW_QA_EXAM_ASK"==n.type),_.Db(1),_.nc("ngIf","NEW_QA_HOMEWORK_ASK"==n.type),_.Db(1),_.nc("ngIf","NEW_QA_EXAM_ANSWER"==n.type),_.Db(1),_.nc("ngIf","NEW_QA_HOMEWORK_ANSWER"==n.type),_.Db(1),_.nc("ngIf","NEW_REQUEST_REAPPROVE"==n.type),_.Db(2),_.Vc(" ",_.jc(22,16,n.createdAt,"dd/MM/yyyy HH:mm:ss")," ")}}function K(n,t){if(1&n){const n=_.Wb();_.Vb(0,"div",7),_.Vb(1,"div",8),_.Rc(2,X,23,19,"div",9),_.Ub(),_.Ub(),_.Vb(3,"div",10),_.Vb(4,"azt-paging",11),_.cc("SendPage",function(t){return _.Ec(n),_.gc().clickPage(t)}),_.Ub(),_.Ub()}if(2&n){const n=_.gc();_.Db(2),_.nc("ngForOf",n.dataNotify.objs),_.Db(2),_.nc("lengthPage",n.lengthPage)("paging",n.page)}}let Q=(()=>{class n extends u.a{constructor(n,t,e,c,i,a){super(t),this.activeRoute=n,this.commonService=t,this.baseApiService=e,this.noticeService=c,this.studentService=i,this.globalService=a,this.isLoading=!1,this.subscriptions=new f.a,this.dataNotify={},this.arrayPag=[],this.lengthPage=0,this.totalNotify=0,this.page=1,this.textNotify="",this.role=1}getTypeObjNotice(n){return"NEW_SHARE_PERMISSION"==n.type?n.classroomId?"L\u1edbp: "+n.classroomName:n.homeworkId?"B\xe0i t\u1eadp: "+n.homeworkName:"\u0110\u1ec1 thi: "+n.examName:""}getDataNotifyByRole(n,t){this.isLoading=!0,this.noticeService.apiNoticeGetObjsByRoleGet(n,t).subscribe(n=>{var t,e,c;n&&(this.isLoading=!1,1==n.success?(this.dataNotify=null!==(t=n.data)&&void 0!==t?t:{},this.lengthPage=Math.ceil((null!==(e=this.dataNotify.total)&&void 0!==e?e:0)/18),this.createPag()):this.showErrorSnack(null!==(c=n.message)&&void 0!==c?c:""))})}redirectToPage(n){switch(n.type){case"NEW_ANSWER":this.commonService.myNavigation(`/admin/homework/score-list/${n.classroomId}/${n.homeworkId}/${n.homeworkHashId}`);break;case"HAS_MARK":case"NEW_HOMEWORK":case"RESEND_ANSWER":this.commonService.myNavigation("/bai-tap/"+n.homeworkHashId);break;case"NEW_EXAM_SUBMIT":this.commonService.myNavigation(`/admin/testbank/test-review/${n.examId}/${n.parentId}/${n.studentId}/0`);break;case"NEW_EXAM":this.commonService.myNavigation("/de-thi/"+n.examHashId);break;case"EXAM_HAS_MARK":this.commonService.myNavigation(`/test/answer-test/${n.parentId}/0/${n.examHashId}/${n.examResultId}`);break;case"NEW_QA_EXAM_ASK":case"NEW_QA_HOMEWORK_ASK":this.commonService.myNavigation("/admin/teacher-qa/view-question/"+Number(n.datas));break;case"NEW_QA_EXAM_ANSWER":case"NEW_QA_HOMEWORK_ANSWER":this.commonService.myNavigation("/student-qa/view-question/"+Number(n.datas))}null===n.homeworkId&&null===n.homeworkHashId&&null===n.examHashId&&null===n.examId&&("NEW_ASSIGN"==n.type?this.commonService.myNavigation("/admin/student/manage-class/0"):"NEW_REQUEST_REAPPROVE"==n.type||this.commonService.myNavigation("/student/dashboard/1"))}reApproveStudent(n,t){this.subscriptions.add(this.studentService.apiStudentRemoveMappingObjGet(n).subscribe(n=>{var e;1==n.success?(this.delRequestNotice(t),this.getDataNotifyByRole(this.role,this.page),this.commonService.snackSuccess("M\u1edf kh\xf3a cho h\u1ecdc sinh th\xe0nh c\xf4ng","")):this.showErrorSnack(null!==(e=n.message)&&void 0!==e?e:"")}))}delRequestNotice(n){this.subscriptions.add(this.noticeService.apiNoticeDeleteObjGet(n).subscribe(n=>{var t;1==n.success?(this.reGetNotifice(),this.getDataNotifyByRole(this.role,this.page)):this.showErrorSnack(null!==(t=n.message)&&void 0!==t?t:"")}))}reGetNotifice(){var n="back_header_infors_"+this.baseApiService.getUserObj().id;this.globalService.removeGlobalData(n)}createPag(){for(let n=1;n<=this.lengthPage;n++)this.arrayPag.push(n)}clickPage(n){this.isLoading=!0,this.page=n,this.arrayPag=[],this.commonService.myNavigation(`/notify/${this.role}/${this.page}`),this.getDataNotifyByRole(this.role,this.page),window.scrollTo(0,0)}ngOnInit(){this.role=+this.commonService.getMyParam(this.activeRoute,"role"),this.page=+this.commonService.getMyParam(this.activeRoute,"page"),this.getDataNotifyByRole(this.role,this.page),this.commonService.translateMetaData({title:"lang_cms_homework_notify_title",description:"lang_cms_homework_notify_description",image:"lang_cms_test_image"}),super.ngOnInit()}}return n.\u0275fac=function(t){return new(t||n)(_.Pb(o.a),_.Pb(m.a),_.Pb(y.a),_.Pb(v.N),_.Pb(v.db),_.Pb(k.a))},n.\u0275cmp=_.Jb({type:n,selectors:[["app-notify"]],features:[_.Ab],decls:7,vars:4,consts:[["class","mb-3",3,"headerTitle","back_link",4,"ngIf"],[3,"headerTitle","back_link",4,"ngIf"],[1,"container-fluid","component-wrap","content","maxW1000","m-auto","mt-3"],[4,"ngIf","ngIfElse"],["doneLoading",""],[1,"mb-3",3,"headerTitle","back_link"],[3,"headerTitle","back_link"],[1,"dashboard"],[1,"content__notifi"],["class","block",4,"ngFor","ngForOf"],[1,"my-4"],[3,"lengthPage","paging","SendPage"],[1,"block"],[1,"notify__block",3,"click"],[1,"col-3","left-col","d-flex","justify-content-center","align-items-center","ng-star-inserted","notify__class"],[1,"content-center","text-white","class-info","pt-2","pb-2"],[1,"notify__content"],[4,"ngIf"],["class","pt-1 pb-1 clickable",4,"ngIf"],[1,"time__ago"],[1,"notify__name"],[1,"notify__time"],[1,"pt-1","pb-1","clickable"],[1,"notify__content","p-0"],["class","d-block",4,"ngIf"],[1,"d-flex","justify-content-end","mt-2",2,"flex-wrap","wrap"],[1,"notify__btn",3,"click"],[1,"notify__btn","bg-info","ml-2",3,"click"],[1,"d-block"]],template:function(n,t){if(1&n&&(_.Rc(0,I,2,4,"header-backend",0),_.Rc(1,T,2,4,"header-frontend",1),_.Vb(2,"div",2),_.Rc(3,N,1,0,"azt-loading-effect",3),_.Rc(4,K,5,3,"ng-template",null,4,_.Sc),_.Ub(),_.Qb(6,"homework-backend-footer")),2&n){const n=_.Ac(5);_.nc("ngIf",0==t.role),_.Db(1),_.nc("ngIf",1==t.role),_.Db(2),_.nc("ngIf",t.isLoading)("ngIfElse",n)}},directives:[c.m,P.a,U.a,V.a,c.l,D.a],pipes:[S.t,c.e],styles:["*[_ngcontent-%COMP%]{margin:0;box-sizing:border-box}a[_ngcontent-%COMP%]:hover{text-decoration:none}.white[_ngcontent-%COMP%]{margin-top:5px;padding-bottom:-5px;background-color:#fff;height:50px}a[_ngcontent-%COMP%]{text-decoration:none}.text-white[_ngcontent-%COMP%]{color:#fff}.content[_ngcontent-%COMP%]{overflow-x:hidden}.back-to[_ngcontent-%COMP%]{color:#969696;display:flex;text-decoration:none}.block[_ngcontent-%COMP%]{padding-top:2px}.dashboard__header[_ngcontent-%COMP%]{background-color:#0089a7;margin-top:-15px;margin-left:-15px;margin-right:-15px}.header__top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:20px}.header__coin[_ngcontent-%COMP%]{background-color:#009cbe;width:90px;height:36px;border:none;border-radius:5px;box-shadow:none;text-align:center;padding-top:8px}.notify__btn[_ngcontent-%COMP%]{border-radius:5px;padding:5px;color:#000;font-size:12px;border:1px solid #979696}.bg-info[_ngcontent-%COMP%]{color:#fff!important;border:none!important;background-color:#00a7d0}.coin__link[_ngcontent-%COMP%]{color:#fff}.coin__text[_ngcontent-%COMP%]{font-weight:700;margin-right:4px;font-size:18px}.header__work[_ngcontent-%COMP%]{display:flex}.header__gift[_ngcontent-%COMP%]{position:relative;margin-right:24px;margin-top:8px}.gift__link[_ngcontent-%COMP%]{color:#fff}.girt__count[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-10px;background-color:#fe4531;border-radius:50%;width:16px;height:16px;color:#fff;padding:0;text-align:center;font-weight:700;font-size:9px}.header__work[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:32px}.header__user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35px;height:35px;border-radius:50%;margin-top:4px}.header__body[_ngcontent-%COMP%]{padding-top:30px;text-align:center;color:#fff}.header__body[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:45px}.content__notifi[_ngcontent-%COMP%]{margin-top:20px}.content__title[_ngcontent-%COMP%]{text-transform:uppercase}.notify__block[_ngcontent-%COMP%]{display:flex;background-color:#fff;border:none;border-radius:3px;box-shadow:0 0 6px rgba(0,0,0,.1215686275);margin-top:15px}.notify__class[_ngcontent-%COMP%]{background-color:#00c0f0;border-radius:3px;border-top-right-radius:0;border-bottom-right-radius:0}.notify__content[_ngcontent-%COMP%]{color:#000;padding:10px}.class__text[_ngcontent-%COMP%]{color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.notify__name[_ngcontent-%COMP%], .notify__time[_ngcontent-%COMP%]{font-weight:700}.time__ago[_ngcontent-%COMP%]{margin:5px 0 0;color:#909090}.col-pag[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;text-align:right}.btn-pag[_ngcontent-%COMP%]{padding:5px 8px}.page-item[_ngcontent-%COMP%]{margin:0 3px}"]}),n})();const B=[{path:"",component:Q,canActivate:[p.a],children:[{path:"",canActivateChild:[p.a],children:[{path:"",component:Q}]}]}];let F=(()=>{class n{}return n.\u0275mod=_.Nb({type:n}),n.\u0275inj=_.Mb({factory:function(t){return new(t||n)},imports:[[o.l.forChild(B)],o.l,h.c]}),n})(),G=(()=>{class n{}return n.\u0275mod=_.Nb({type:n}),n.\u0275inj=_.Mb({factory:function(t){return new(t||n)},imports:[[o.l,c.c,d.a,s.b,i.m,i.x,a.f,g.a,r.b,l.b,F,b.a]]}),n})()},uZ1F:function(n,t,e){"use strict";e.d(t,"a",function(){return w});var c=e("fXoL"),i=e("gm2p"),a=e("ofXK"),o=e("tyNb"),s=e("iWHX");function r(n,t){if(1&n){const n=c.Wb();c.Vb(0,"li",6),c.Vb(1,"a",7),c.cc("click",function(){c.Ec(n);const t=c.gc(2);return t.clickPage(t.page-1)}),c.Vb(2,"span",8),c.Tc(3,"\xab"),c.Ub(),c.Vb(4,"span",9),c.Tc(5,"Previous"),c.Ub(),c.Ub(),c.Ub()}}const l=function(n){return[n]};function b(n,t){if(1&n){const n=c.Wb();c.Vb(0,"a",13),c.cc("click",function(){c.Ec(n);const t=c.gc().$implicit;return c.gc(3).clickPage(t)}),c.hc(1,"mylocalize"),c.Tc(2),c.Ub()}if(2&n){const n=c.gc().$implicit,t=c.gc(3);c.nc("routerLink",c.tc(5,l,c.ic(1,3,t.linkPage)))("queryParams",t.eventSearchHandle(n)),c.Db(2),c.Vc("",n," ")}}function g(n,t){if(1&n){const n=c.Wb();c.Vb(0,"a",14),c.cc("click",function(){c.Ec(n);const t=c.gc().$implicit;return c.gc(3).clickPage(t)}),c.hc(1,"mylocalize"),c.Tc(2),c.Ub()}if(2&n){const n=c.gc().$implicit,t=c.gc(3);c.nc("routerLink",c.tc(5,l,c.ic(1,3,t.linkPage)))("queryParams",t.eventSearchHandle(n)),c.Db(2),c.Vc("",n," ")}}function d(n,t){if(1&n&&(c.Vb(0,"li",6),c.Rc(1,b,3,7,"a",11),c.Rc(2,g,3,7,"a",12),c.Ub()),2&n){const n=t.$implicit,e=c.gc(3);c.Db(1),c.nc("ngIf",e.page==n),c.Db(1),c.nc("ngIf",e.page!=n&&n<=e.page+3&&n>=e.page-3)}}function h(n,t){if(1&n&&(c.Tb(0),c.Rc(1,d,3,2,"li",10),c.Sb()),2&n){const n=c.gc(2);c.Db(1),c.nc("ngForOf",n.arrayPag)}}function p(n,t){if(1&n){const n=c.Wb();c.Vb(0,"a",17),c.cc("click",function(){c.Ec(n);const t=c.gc().$implicit;return c.gc(3).clickPage(t)}),c.Tc(1),c.Ub()}if(2&n){const n=c.gc().$implicit;c.Db(1),c.Vc("",n," ")}}function f(n,t){if(1&n){const n=c.Wb();c.Vb(0,"a",18),c.cc("click",function(){c.Ec(n);const t=c.gc().$implicit;return c.gc(3).clickPage(t)}),c.Tc(1),c.Ub()}if(2&n){const n=c.gc().$implicit;c.Db(1),c.Vc("",n," ")}}function u(n,t){if(1&n&&(c.Vb(0,"li",6),c.Rc(1,p,2,1,"a",15),c.Rc(2,f,2,1,"a",16),c.Ub()),2&n){const n=t.$implicit,e=c.gc(3);c.Db(1),c.nc("ngIf",e.page==n),c.Db(1),c.nc("ngIf",e.page!=n&&n<=e.page+3&&n>=e.page-3)}}function _(n,t){if(1&n&&(c.Tb(0),c.Rc(1,u,3,2,"li",10),c.Sb()),2&n){const n=c.gc(2);c.Db(1),c.nc("ngForOf",n.arrayPag)}}function m(n,t){if(1&n){const n=c.Wb();c.Vb(0,"li",6),c.Vb(1,"a",14),c.cc("click",function(){return c.Ec(n),c.gc(3).clickPage(1)}),c.hc(2,"mylocalize"),c.Tc(3,"1"),c.Ub(),c.Ub()}if(2&n){const n=c.gc(3);c.Db(1),c.nc("routerLink",c.tc(4,l,c.ic(2,2,n.linkPage)))("queryParams",n.eventSearchHandle(1))}}function y(n,t){1&n&&(c.Vb(0,"a",20),c.Tc(1,"..."),c.Ub())}function v(n,t){if(1&n){const n=c.Wb();c.Vb(0,"a",13),c.cc("click",function(){c.Ec(n);const t=c.gc().$implicit;return c.gc(3).clickPage(t)}),c.hc(1,"mylocalize"),c.Tc(2),c.Ub()}if(2&n){const n=c.gc().$implicit,t=c.gc(3);c.nc("routerLink",c.tc(5,l,c.ic(1,3,t.linkPage)))("queryParams",t.eventSearchHandle(n)),c.Db(2),c.Vc("",n," ")}}function k(n,t){if(1&n){const n=c.Wb();c.Vb(0,"a",14),c.cc("click",function(){c.Ec(n);const t=c.gc().$implicit;return c.gc(3).clickPage(t)}),c.hc(1,"mylocalize"),c.Tc(2),c.Ub()}if(2&n){const n=c.gc().$implicit,t=c.gc(3);c.nc("routerLink",c.tc(5,l,c.ic(1,3,t.linkPage)))("queryParams",t.eventSearchHandle(n)),c.Db(2),c.Vc("",n," ")}}function P(n,t){if(1&n&&(c.Vb(0,"li",6),c.Rc(1,v,3,7,"a",11),c.Rc(2,k,3,7,"a",12),c.Ub()),2&n){const n=t.$implicit,e=c.gc(3);c.Db(1),c.nc("ngIf",e.page==n),c.Db(1),c.nc("ngIf",e.page!=n&&n<e.page+3&&n>=e.page-1)}}function U(n,t){1&n&&(c.Vb(0,"span",20),c.Tc(1,"..."),c.Ub())}function V(n,t){if(1&n){const n=c.Wb();c.Vb(0,"a",14),c.cc("click",function(){c.Ec(n);const t=c.gc(3);return t.clickPage(t.lengthPage)}),c.hc(1,"mylocalize"),c.Tc(2),c.Ub()}if(2&n){const n=c.gc(3);c.nc("routerLink",c.tc(5,l,c.ic(1,3,n.linkPage)))("queryParams",n.eventSearchHandle(n.lengthPage)),c.Db(2),c.Uc(n.lengthPage)}}function D(n,t){if(1&n&&(c.Tb(0),c.Rc(1,m,4,6,"li",4),c.Vb(2,"li",6),c.Rc(3,y,2,0,"a",19),c.Ub(),c.Rc(4,P,3,2,"li",10),c.Vb(5,"li",6),c.Rc(6,U,2,0,"span",19),c.Ub(),c.Vb(7,"li",6),c.Rc(8,V,3,7,"a",12),c.Ub(),c.Sb()),2&n){const n=c.gc(2);c.Db(1),c.nc("ngIf",n.page>=3),c.Db(2),c.nc("ngIf",n.page>=4),c.Db(1),c.nc("ngForOf",n.arrayPag),c.Db(2),c.nc("ngIf",n.page<n.lengthPage-3),c.Db(2),c.nc("ngIf",n.page<n.lengthPage-2)}}function S(n,t){if(1&n){const n=c.Wb();c.Vb(0,"li",6),c.Vb(1,"a",18),c.cc("click",function(){return c.Ec(n),c.gc(3).clickPage(1)}),c.Tc(2,"1"),c.Ub(),c.Ub()}}function I(n,t){1&n&&(c.Vb(0,"a",20),c.Tc(1,"..."),c.Ub())}function T(n,t){if(1&n){const n=c.Wb();c.Vb(0,"a",17),c.cc("click",function(){c.Ec(n);const t=c.gc().$implicit;return c.gc(3).clickPage(t)}),c.Tc(1),c.Ub()}if(2&n){const n=c.gc().$implicit;c.Db(1),c.Vc("",n," ")}}function N(n,t){if(1&n){const n=c.Wb();c.Vb(0,"a",18),c.cc("click",function(){c.Ec(n);const t=c.gc().$implicit;return c.gc(3).clickPage(t)}),c.Tc(1),c.Ub()}if(2&n){const n=c.gc().$implicit;c.Db(1),c.Vc("",n," ")}}function M(n,t){if(1&n&&(c.Vb(0,"li",6),c.Rc(1,T,2,1,"a",15),c.Rc(2,N,2,1,"a",16),c.Ub()),2&n){const n=t.$implicit,e=c.gc(3);c.Db(1),c.nc("ngIf",e.page==n),c.Db(1),c.nc("ngIf",e.page!=n&&n<e.page+3&&n>=e.page-1)}}function R(n,t){1&n&&(c.Vb(0,"span",20),c.Tc(1,"..."),c.Ub())}function x(n,t){if(1&n){const n=c.Wb();c.Vb(0,"a",18),c.cc("click",function(){c.Ec(n);const t=c.gc(3);return t.clickPage(t.lengthPage)}),c.Tc(1),c.Ub()}if(2&n){const n=c.gc(3);c.Db(1),c.Uc(n.lengthPage)}}function E(n,t){if(1&n&&(c.Tb(0),c.Rc(1,S,3,0,"li",4),c.Vb(2,"li",6),c.Rc(3,I,2,0,"a",19),c.Ub(),c.Rc(4,M,3,2,"li",10),c.Vb(5,"li",6),c.Rc(6,R,2,0,"span",19),c.Ub(),c.Vb(7,"li",6),c.Rc(8,x,2,1,"a",16),c.Ub(),c.Sb()),2&n){const n=c.gc(2);c.Db(1),c.nc("ngIf",n.page>=3),c.Db(2),c.nc("ngIf",n.page>=4),c.Db(1),c.nc("ngForOf",n.arrayPag),c.Db(2),c.nc("ngIf",n.page<n.lengthPage-3),c.Db(2),c.nc("ngIf",n.page<n.lengthPage-2)}}function A(n,t){if(1&n){const n=c.Wb();c.Vb(0,"li",6),c.Vb(1,"a",21),c.cc("click",function(){c.Ec(n);const t=c.gc(2);return t.clickPage(t.page+1)}),c.Vb(2,"span",8),c.Tc(3,"\xbb"),c.Ub(),c.Vb(4,"span",9),c.Tc(5,"Next"),c.Ub(),c.Ub(),c.Ub()}}function O(n,t){if(1&n&&(c.Vb(0,"div",1),c.Vb(1,"nav",2),c.Vb(2,"ul",3),c.Rc(3,r,6,0,"li",4),c.Rc(4,h,2,1,"ng-container",5),c.Rc(5,_,2,1,"ng-container",5),c.Rc(6,D,9,5,"ng-container",5),c.Rc(7,E,9,5,"ng-container",5),c.Rc(8,A,6,0,"li",4),c.Ub(),c.Ub(),c.Ub()),2&n){const n=c.gc();c.Db(3),c.nc("ngIf",n.page>1),c.Db(1),c.nc("ngIf",n.lengthPage<=4&&"report_error"==n.screen),c.Db(1),c.nc("ngIf",n.lengthPage<=4&&"report_error"!=n.screen),c.Db(1),c.nc("ngIf",n.lengthPage>4&&"report_error"==n.screen),c.Db(1),c.nc("ngIf",n.lengthPage>4&&"report_error"!=n.screen),c.Db(1),c.nc("ngIf",n.lengthPage>n.page&&n.lengthPage>=2)}}let w=(()=>{class n extends i.a{constructor(){super(...arguments),this.lengthPage=0,this.paging=1,this.screen="",this.linkPage="",this.SendPage=new c.o,this.page=1,this.arrayPag=[]}eventSearchHandle(n){var t,e,c,i,a,o,s,r,l,b,g,d,h,p,f,u,_,m,y,v,k,P,U,V,D,S,I,T,N,M,R,x,E,A,O,w;return""!=(null===(t=this.eventSearch)||void 0===t?void 0:t.userPhone)&&""==(null===(e=this.eventSearch)||void 0===e?void 0:e.userId)&&""==(null===(c=this.eventSearch)||void 0===c?void 0:c.urls)?{page:n,userPhone:null===(i=this.eventSearch)||void 0===i?void 0:i.userPhone}:""==(null===(a=this.eventSearch)||void 0===a?void 0:a.userPhone)&&""!=(null===(o=this.eventSearch)||void 0===o?void 0:o.userId)&&""==(null===(s=this.eventSearch)||void 0===s?void 0:s.urls)?{page:n,userId:Number(null===(r=this.eventSearch)||void 0===r?void 0:r.userId)}:""==(null===(l=this.eventSearch)||void 0===l?void 0:l.userPhone)&&""==(null===(b=this.eventSearch)||void 0===b?void 0:b.userId)&&""!=(null===(g=this.eventSearch)||void 0===g?void 0:g.urls)?{page:n,urls:null===(d=this.eventSearch)||void 0===d?void 0:d.urls}:""!=(null===(h=this.eventSearch)||void 0===h?void 0:h.userPhone)&&""!=(null===(p=this.eventSearch)||void 0===p?void 0:p.userId)&&""==(null===(f=this.eventSearch)||void 0===f?void 0:f.urls)?{page:n,userPhone:null===(u=this.eventSearch)||void 0===u?void 0:u.userPhone,userId:Number(null===(_=this.eventSearch)||void 0===_?void 0:_.userId)}:""!=(null===(m=this.eventSearch)||void 0===m?void 0:m.userPhone)&&""==(null===(y=this.eventSearch)||void 0===y?void 0:y.userId)&&""!=(null===(v=this.eventSearch)||void 0===v?void 0:v.urls)?{page:n,userPhone:null===(k=this.eventSearch)||void 0===k?void 0:k.userPhone,urls:null===(P=this.eventSearch)||void 0===P?void 0:P.urls}:""==(null===(U=this.eventSearch)||void 0===U?void 0:U.userPhone)&&""!=(null===(V=this.eventSearch)||void 0===V?void 0:V.userId)&&""!=(null===(D=this.eventSearch)||void 0===D?void 0:D.urls)?{page:n,userId:Number(null===(S=this.eventSearch)||void 0===S?void 0:S.userId),urls:null===(I=this.eventSearch)||void 0===I?void 0:I.urls}:""==(null===(T=this.eventSearch)||void 0===T?void 0:T.userPhone)&&""==(null===(N=this.eventSearch)||void 0===N?void 0:N.userId)&&""==(null===(M=this.eventSearch)||void 0===M?void 0:M.urls)?{page:n}:""!=(null===(R=this.eventSearch)||void 0===R?void 0:R.userPhone)&&""!=(null===(x=this.eventSearch)||void 0===x?void 0:x.userId)&&""!=(null===(E=this.eventSearch)||void 0===E?void 0:E.urls)?{page:n,userPhone:null===(A=this.eventSearch)||void 0===A?void 0:A.userPhone,userId:Number(null===(O=this.eventSearch)||void 0===O?void 0:O.userId),urls:null===(w=this.eventSearch)||void 0===w?void 0:w.urls}:void 0}ArrayPage(){var n;for(let t=1;t<=(null!==(n=this.lengthPage)&&void 0!==n?n:0);t++)this.arrayPag.push(t)}clickPage(n){this.page=n,this.SendPage.emit(n)}ngOnInit(){var n;this.arrayPag=[],this.page=null!==(n=this.paging)&&void 0!==n?n:0,this.ArrayPage(),super.ngOnInit()}ngOnChanges(){var n;this.arrayPag=[],this.page=null!==(n=this.paging)&&void 0!==n?n:0,this.ArrayPage()}}return n.\u0275fac=function(t){return W(t||n)},n.\u0275cmp=c.Jb({type:n,selectors:[["azt-paging"]],inputs:{lengthPage:"lengthPage",paging:"paging",screen:"screen",eventSearch:"eventSearch",linkPage:"linkPage"},outputs:{SendPage:"SendPage"},features:[c.Ab,c.Bb],decls:1,vars:1,consts:[["class","row m-0 justify-content-center",4,"ngIf"],[1,"row","m-0","justify-content-center"],["aria-label","Page navigation pagination-nav",2,"display","inline-block"],[1,"pagination"],["class","page-item",4,"ngIf"],[4,"ngIf"],[1,"page-item"],["aria-label","Previous",1,"btn","btn-pag","page-link",3,"click"],["aria-hidden","true"],[1,"sr-only"],["class","page-item",4,"ngFor","ngForOf"],["style","background-color: #e9ecef","class","btn btn-pag page-link",3,"routerLink","queryParams","click",4,"ngIf"],["class","btn btn-pag page-link",3,"routerLink","queryParams","click",4,"ngIf"],[1,"btn","btn-pag","page-link",2,"background-color","#e9ecef",3,"routerLink","queryParams","click"],[1,"btn","btn-pag","page-link",3,"routerLink","queryParams","click"],["style","background-color: #e9ecef","class","btn btn-pag page-link",3,"click",4,"ngIf"],["class","btn btn-pag page-link",3,"click",4,"ngIf"],[1,"btn","btn-pag","page-link",2,"background-color","#e9ecef",3,"click"],[1,"btn","btn-pag","page-link",3,"click"],["class","btn btn-pag page-link",4,"ngIf"],[1,"btn","btn-pag","page-link"],["aria-label","Next",1,"btn","btn-pag","page-link",3,"click"]],template:function(n,t){1&n&&c.Rc(0,O,9,6,"div",0),2&n&&c.nc("ngIf",t.lengthPage&&t.lengthPage>1)},directives:[a.m,a.l,o.k],pipes:[s.s],styles:[".page-link[_ngcontent-%COMP%]:visited{color:pink}"]}),n})();const W=c.Xb(w)}}]);