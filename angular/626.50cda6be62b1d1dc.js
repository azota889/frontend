"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[626],{45668:(N,f,i)=>{i.d(f,{J:()=>d});var l=i(5e3),u=i(16384),y=i(42873);let d=(()=>{class p{constructor(c,r){this.baseApiService=c,this.redirectService=r}canActivate(c,r){return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginAnonymous(r.url),!1)}canActivateChild(c,r){return this.canActivate(c,r)}canLoad(c){const r=`/${c.path}`;return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(r),!1)}}return p.\u0275fac=function(c){return new(c||p)(l.LFG(u._),l.LFG(y.V))},p.\u0275prov=l.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},76626:(N,f,i)=>{i.r(f),i.d(f,{NotifyModule:()=>ot});var l=i(69808),u=i(93075),y=i(48966),d=i(74202),p=i(51908),x=i(1737),c=i(63728),r=i(71410),v=i(75658),Z=i(95880),M=i(37389),O=i(45668),E=i(24096),S=i(55330),t=i(5e3),T=i(35018),b=i(16384),h=i(7147),L=i(54209),U=i(47691),C=i(17852),I=i(58496),P=i(51176),R=i(1033);function k(n,a){1&n&&(t._UZ(0,"header-backend",5),t.ALo(1,"mytranslate")),2&n&&t.Q6J("headerTitle",t.lcZ(1,2,"lang_notify_list_header_title"))("headerBackTolink","/admin/dashboard")}function w(n,a){1&n&&(t._UZ(0,"header-frontend",6),t.ALo(1,"mytranslate")),2&n&&t.Q6J("headerTitle",t.lcZ(1,2,"lang_notify_list_header_title"))("headerBackTolink","/student/dashboard/0")}function q(n,a){1&n&&t._UZ(0,"azt-loading-effect")}function W(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"span",21),t._uU(4),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,2,"lang_notify_list_new_decentralization_for_class")," "),t.xp6(3),t.hij(" ",e.classroomName," ")}}function j(n,a){if(1&n&&(t.TgZ(0,"span")(1,"span",21),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"mytranslate"),t.TgZ(5,"b"),t._uU(6),t.qZA(),t._uU(7),t.ALo(8,"mytranslate"),t.TgZ(9,"span",22),t._uU(10),t.ALo(11,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(e.studentName),t.xp6(1),t.hij(" ",t.lcZ(4,5,"lang_notify_list_scored_homework")," "),t.xp6(3),t.Oqu(e.homeworkName),t.xp6(1),t.hij(" ",t.lcZ(8,7,"lang_notify_list_in_date")," "),t.xp6(3),t.Oqu(t.xi3(11,9,e.createdAt,"dd/MM/yyyy"))}}function $(n,a){if(1&n&&(t.TgZ(0,"span")(1,"span",21),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"mytranslate"),t.TgZ(5,"b"),t._uU(6),t.qZA(),t._uU(7),t.ALo(8,"mytranslate"),t.TgZ(9,"span",22),t._uU(10),t.ALo(11,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(e.studentName),t.xp6(1),t.hij(" ",t.lcZ(4,5,"lang_notify_list_submitted")," "),t.xp6(3),t.Oqu(e.homeworkName),t.xp6(1),t.hij(" ",t.lcZ(8,7,"lang_notify_list_in_date")," "),t.xp6(3),t.Oqu(t.xi3(11,9,e.createdAt,"dd/MM/yyyy"))}}function Q(n,a){if(1&n&&(t.TgZ(0,"span")(1,"span",21),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"mytranslate"),t.TgZ(5,"b"),t._uU(6),t.qZA(),t._uU(7),t.ALo(8,"mytranslate"),t.TgZ(9,"span",22),t._uU(10),t.ALo(11,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(e.studentName),t.xp6(1),t.hij(" ",t.lcZ(4,5,"lang_notify_list_there_are_exercises")," "),t.xp6(3),t.Oqu(e.homeworkName),t.xp6(1),t.hij(" ",t.lcZ(8,7,"lang_notify_list_delivered")," "),t.xp6(3),t.Oqu(t.xi3(11,9,e.createdAt,"dd/MM/yyyy"))}}function H(n,a){if(1&n&&(t.TgZ(0,"span")(1,"span",21),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"mytranslate"),t.TgZ(5,"b"),t._uU(6),t.qZA(),t._uU(7),t.ALo(8,"mytranslate"),t.TgZ(9,"span",22),t._uU(10),t.ALo(11,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(e.studentName),t.xp6(1),t.hij(" ",t.lcZ(4,5,"lang_notify_list_submit_assignments")," "),t.xp6(3),t.Oqu(e.homeworkName),t.xp6(1),t.hij(" ",t.lcZ(8,7,"lang_notify_list_in_date")," "),t.xp6(3),t.Oqu(t.xi3(11,9,e.createdAt,"dd/MM/yyyy"))}}function J(n,a){if(1&n&&(t.TgZ(0,"span")(1,"span",21),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"mytranslate"),t.TgZ(5,"b"),t._uU(6),t.qZA(),t._uU(7),t.ALo(8,"mytranslate"),t.TgZ(9,"span",22),t._uU(10),t.ALo(11,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(e.studentName),t.xp6(1),t.hij(" ",t.lcZ(4,5,"lang_notify_list_submit_succes")," "),t.xp6(3),t.Oqu(e.examName),t.xp6(1),t.hij(" ",t.lcZ(8,7,"lang_notify_list_in_date")," "),t.xp6(3),t.Oqu(t.xi3(11,9,e.createdAt,"dd/MM/yyyy"))}}function Y(n,a){if(1&n&&(t.TgZ(0,"span")(1,"span",21),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"mytranslate"),t.TgZ(5,"b"),t._uU(6),t.qZA(),t._uU(7),t.ALo(8,"mytranslate"),t.TgZ(9,"span",22),t._uU(10),t.ALo(11,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(e.studentName),t.xp6(1),t.hij(" ",t.lcZ(4,5,"lang_notify_list_new_tested")," "),t.xp6(3),t.Oqu(e.examName),t.xp6(1),t.hij(" ",t.lcZ(8,7,"lang_notify_list_in_date")," "),t.xp6(3),t.Oqu(t.xi3(11,9,e.createdAt,"dd/MM/yyyy"))}}function B(n,a){if(1&n&&(t.TgZ(0,"span")(1,"span",21),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"mytranslate"),t.TgZ(5,"b"),t._uU(6),t.qZA(),t._uU(7),t.ALo(8,"mytranslate"),t.TgZ(9,"span",22),t._uU(10),t.ALo(11,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(e.studentName),t.xp6(1),t.hij(" ",t.lcZ(4,5,"lang_notify_list_tested")," "),t.xp6(3),t.Oqu(e.examName),t.xp6(1),t.hij(" ",t.lcZ(8,7,"lang_notify_list_has_been_graded")," "),t.xp6(3),t.Oqu(t.xi3(11,9,e.createdAt,"dd/MM/yyyy"))}}function K(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"b"),t._uU(4),t.qZA(),t._uU(5),t.ALo(6,"mytranslate"),t.TgZ(7,"span",22),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit,_=t.oxw(2);t.xp6(1),t.hij(" ",t.lcZ(2,4,"lang_notify_list_new_decentralization")," "),t.xp6(3),t.Oqu(_.getTypeObjNotice(e)),t.xp6(1),t.hij(" ",t.lcZ(6,6,"lang_notify_list_in_date")," "),t.xp6(3),t.Oqu(t.xi3(9,8,e.createdAt,"dd/MM/yyyy"))}}function z(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"b"),t._uU(4),t.qZA(),t._uU(5),t.ALo(6,"mytranslate"),t.TgZ(7,"span",22),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,4,"lang_notify_list_new_qa_exam_ask")," "),t.xp6(3),t.Oqu(e.examName),t.xp6(1),t.hij(" ",t.lcZ(6,6,"lang_notify_list_in_date")," "),t.xp6(3),t.Oqu(t.xi3(9,8,e.createdAt,"dd/MM/yyyy"))}}function G(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"b"),t._uU(4),t.qZA(),t._uU(5),t.ALo(6,"mytranslate"),t.TgZ(7,"span",22),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,4,"lang_notify_list_new_qa_homework_ask")," "),t.xp6(3),t.Oqu(e.homeworkName),t.xp6(1),t.hij(" ",t.lcZ(6,6,"lang_notify_list_in_date")," "),t.xp6(3),t.Oqu(t.xi3(9,8,e.createdAt,"dd/MM/yyyy"))}}function D(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"b"),t._uU(4),t.qZA(),t._uU(5),t.ALo(6,"mytranslate"),t.TgZ(7,"span",22),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,4,"lang_notify_list_new_qa_exam_answer")," "),t.xp6(3),t.Oqu(e.examName),t.xp6(1),t.hij(" ",t.lcZ(6,6,"lang_notify_list_in_date")," "),t.xp6(3),t.Oqu(t.xi3(9,8,e.createdAt,"dd/MM/yyyy"))}}function F(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"b"),t._uU(4),t.qZA(),t._uU(5),t.ALo(6,"mytranslate"),t.TgZ(7,"span",22),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,4,"lang_notify_list_new_qa_homework_answer")," "),t.xp6(3),t.Oqu(e.homeworkName),t.xp6(1),t.hij(" ",t.lcZ(6,6,"lang_notify_list_in_date")," "),t.xp6(3),t.Oqu(t.xi3(9,8,e.createdAt,"dd/MM/yyyy"))}}function X(n,a){if(1&n&&(t.TgZ(0,"span",29),t._uU(1),t.ALo(2,"mytranslate"),t.TgZ(3,"span",21),t._uU(4),t.qZA()()),2&n){const e=t.oxw(3).$implicit;t.xp6(1),t.hij("",t.lcZ(2,2,"lang_notify_list_number_phone_accuracy"),": "),t.xp6(3),t.Oqu(e.datas)}}function V(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",23)(1,"div",24)(2,"span"),t._uU(3),t.ALo(4,"mytranslate"),t.TgZ(5,"span",21),t._uU(6),t.qZA(),t._uU(7),t.ALo(8,"mytranslate"),t.TgZ(9,"span",21),t._uU(10),t.qZA(),t._uU(11),t.ALo(12,"mytranslate"),t.YNc(13,X,5,4,"span",25),t.qZA(),t.TgZ(14,"div",26)(15,"span",27),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2).$implicit,s=t.oxw(2);return t.KtG(s.delRequestNotice(o.id))}),t._uU(16),t.ALo(17,"mytranslate"),t.qZA(),t.TgZ(18,"span",28),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2).$implicit,s=t.oxw(2);return t.KtG(s.reApproveStudent(o.studentId,o.id))}),t._uU(19),t.ALo(20,"mytranslate"),t.qZA()()()()}if(2&n){const e=t.oxw(2).$implicit;t.xp6(3),t.hij(" ",t.lcZ(4,8,"lang_notify_list_students")," "),t.xp6(3),t.Oqu(e.studentName),t.xp6(1),t.hij(" ",t.lcZ(8,10,"lang_notify_list_class")," "),t.xp6(3),t.hij(" ",e.classroomName," "),t.xp6(1),t.hij(" ",t.lcZ(12,12,"lang_notify_list_dont_choose_name"),". "),t.xp6(2),t.Q6J("ngIf",null!=e.datas),t.xp6(3),t.Oqu(t.lcZ(17,14,"lang_notify_list_del_request")),t.xp6(3),t.Oqu(t.lcZ(20,16,"lang_notify_list_re_approve"))}}function tt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",14),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.redirectToPage(o))}),t.TgZ(1,"div",15)(2,"div",16),t._uU(3),t.qZA()(),t.TgZ(4,"div",17),t.YNc(5,W,5,4,"span",18),t.YNc(6,j,12,12,"span",18),t.YNc(7,$,12,12,"span",18),t.YNc(8,Q,12,12,"span",18),t.YNc(9,H,12,12,"span",18),t.YNc(10,J,12,12,"span",18),t.YNc(11,Y,12,12,"span",18),t.YNc(12,B,12,12,"span",18),t.YNc(13,K,10,11,"span",18),t.YNc(14,z,10,11,"span",18),t.YNc(15,G,10,11,"span",18),t.YNc(16,D,10,11,"span",18),t.YNc(17,F,10,11,"span",18),t.YNc(18,V,21,18,"div",19),t.TgZ(19,"p",20),t._uU(20),t.ALo(21,"date"),t.qZA()()()}if(2&n){const e=t.oxw().$implicit;t.xp6(3),t.hij(" ",e.classroomName," "),t.xp6(2),t.Q6J("ngIf","NEW_ASSIGN"==e.type),t.xp6(1),t.Q6J("ngIf","HAS_MARK"==e.type),t.xp6(1),t.Q6J("ngIf","NEW_ANSWER"==e.type),t.xp6(1),t.Q6J("ngIf","NEW_HOMEWORK"==e.type),t.xp6(1),t.Q6J("ngIf","RESEND_ANSWER"==e.type),t.xp6(1),t.Q6J("ngIf","NEW_EXAM_SUBMIT"==e.type),t.xp6(1),t.Q6J("ngIf","NEW_EXAM"==e.type),t.xp6(1),t.Q6J("ngIf","EXAM_HAS_MARK"==e.type),t.xp6(1),t.Q6J("ngIf","NEW_SHARE_CLASS_PERMISSION"==e.type||"NEW_SHARE_HOMEWORK_PERMISSION"==e.type||"NEW_SHARE_EXAM_PERMISSION"==e.type),t.xp6(1),t.Q6J("ngIf","NEW_QA_EXAM_ASK"==e.type),t.xp6(1),t.Q6J("ngIf","NEW_QA_HOMEWORK_ASK"==e.type),t.xp6(1),t.Q6J("ngIf","NEW_QA_EXAM_ANSWER"==e.type),t.xp6(1),t.Q6J("ngIf","NEW_QA_HOMEWORK_ANSWER"==e.type),t.xp6(1),t.Q6J("ngIf","NEW_REQUEST_REAPPROVE"==e.type),t.xp6(2),t.hij(" ",t.xi3(21,16,e.createdAt,"dd/MM/yyyy HH:mm:ss")," ")}}function et(n,a){if(1&n&&(t.TgZ(0,"div",12),t.YNc(1,tt,22,19,"a",13),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.Q6J("ngIf","NEW_SHARE_PERMISSION"!=e.type)}}function nt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"div",8),t.YNc(2,et,2,1,"div",9),t.qZA()(),t.TgZ(3,"div",10)(4,"azt-paging",11),t.NdJ("SendPage",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.clickPage(o))}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.dataNotify.objs),t.xp6(2),t.Q6J("lengthPage",e.lengthPage)("paging",e.page)}}let A=(()=>{class n extends S.Q{constructor(e,_,o,s,m,g){super(_),this.activeRoute=e,this.commonService=_,this.baseApiService=o,this.noticeService=s,this.studentService=m,this.globalService=g,this.isLoading=!1,this.subscriptions=new E.w,this.dataNotify={},this.arrayPag=[],this.lengthPage=0,this.totalNotify=0,this.page=1,this.textNotify="",this.role=1}getTypeObjNotice(e){return"NEW_SHARE_CLASS_PERMISSION"==e.type?"L\u1edbp: "+e.classroomName:"NEW_SHARE_HOMEWORK_PERMISSION"==e.type?"B\xe0i t\u1eadp: "+e.homeworkName:"NEW_SHARE_EXAM_PERMISSION"==e.type?"\u0110\u1ec1 thi: "+e.examName:""}getDataNotifyByRole(e,_){this.isLoading=!0,this.noticeService.apiNoticeGetObjsByRoleGet(e,_).subscribe(o=>{var s,m,g;o&&(this.isLoading=!1,1==o.success?(this.dataNotify=null!==(s=o.data)&&void 0!==s?s:{},this.lengthPage=Math.ceil((null!==(m=this.dataNotify.total)&&void 0!==m?m:0)/18),this.createPag()):this.showErrorSnack(null!==(g=o.message)&&void 0!==g?g:""))})}redirectToPage(e){switch(e.type){case"NEW_ANSWER":case"NEW_SHARE_HOMEWORK_PERMISSION":this.commonService.myNavigation(`/admin/homework/score-list/${e.classroomId}/${e.homeworkId}/${e.homeworkHashId}`);break;case"HAS_MARK":case"NEW_HOMEWORK":case"RESEND_ANSWER":this.commonService.myNavigation(`/bai-tap/${e.homeworkHashId}`);break;case"NEW_EXAM_SUBMIT":this.commonService.myNavigation(`/admin/testbank/test-review/${e.examId}/${e.parentId}/${e.studentId}/${e.examResultId}`);break;case"NEW_EXAM":this.commonService.myNavigation(`/de-thi/${e.examHashId}`);break;case"EXAM_HAS_MARK":this.commonService.myNavigation(`/test/answer-test/${e.parentId}/0/${e.examHashId}/${e.examResultId}`);break;case"NEW_QA_EXAM_ASK":case"NEW_QA_HOMEWORK_ASK":this.commonService.myNavigation("/admin/teacher-qa/view-question/"+Number(e.datas));break;case"NEW_QA_EXAM_ANSWER":case"NEW_QA_HOMEWORK_ANSWER":this.commonService.myNavigation("/student-qa/view-question/"+Number(e.datas));break;case"NEW_SHARE_CLASS_PERMISSION":this.commonService.myNavigation("/admin/student/class-details/"+e.classroomId);break;case"NEW_SHARE_EXAM_PERMISSION":this.commonService.myNavigation(`/admin/testbank/tested-list/0/${e.examId}/0`)}null===e.homeworkId&&null===e.homeworkHashId&&null===e.examHashId&&null===e.examId&&("NEW_ASSIGN"==e.type?this.commonService.myNavigation("/admin/student/manage-class/0"):"NEW_REQUEST_REAPPROVE"==e.type||this.commonService.myNavigation("/student/dashboard/1"))}reApproveStudent(e,_){this.subscriptions.add(this.studentService.apiStudentRemoveMappingObjGet(e).subscribe(o=>{var s;1==o.success?(this.delRequestNotice(_),this.getDataNotifyByRole(this.role,this.page),this.commonService.snackSuccess("M\u1edf kh\xf3a cho h\u1ecdc sinh th\xe0nh c\xf4ng","")):this.showErrorSnack(null!==(s=o.message)&&void 0!==s?s:"")}))}delRequestNotice(e){this.subscriptions.add(this.noticeService.apiNoticeDeleteObjGet(e).subscribe(_=>{var o;1==_.success?(this.reGetNotifice(),this.getDataNotifyByRole(this.role,this.page)):this.showErrorSnack(null!==(o=_.message)&&void 0!==o?o:"")}))}reGetNotifice(){var e="back_header_infors_"+this.baseApiService.getUserObj().id;this.globalService.removeGlobalData(e)}createPag(){for(let e=1;e<=this.lengthPage;e++)this.arrayPag.push(e)}clickPage(e){this.isLoading=!0,this.page=e,this.arrayPag=[],this.commonService.myNavigation(`/notify/${this.role}/${this.page}`),this.getDataNotifyByRole(this.role,this.page),window.scrollTo(0,0)}ngOnInit(){this.role=+this.commonService.getMyParam(this.activeRoute,"role"),this.page=+this.commonService.getMyParam(this.activeRoute,"page"),this.getDataNotifyByRole(this.role,this.page),this.commonService.translateMetaData({title:"lang_cms_homework_notify_title",description:"lang_cms_homework_notify_description",image:"lang_cms_test_image"}),super.ngOnInit()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.gz),t.Y36(T.v),t.Y36(b._),t.Y36(h.L$),t.Y36(h.VT),t.Y36(L.U))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-notify"]],features:[t.qOj],decls:7,vars:4,consts:[["class","mb-3",3,"headerTitle","headerBackTolink",4,"ngIf"],[3,"headerTitle","headerBackTolink",4,"ngIf"],[1,"container-fluid","component-wrap","content","maxW1000","m-auto","mt-3"],[4,"ngIf","ngIfElse"],["doneLoading",""],[1,"mb-3",3,"headerTitle","headerBackTolink"],[3,"headerTitle","headerBackTolink"],[1,"dashboard"],[1,"content__notifi"],["class","block",4,"ngFor","ngForOf"],[1,"my-4"],[3,"lengthPage","paging","SendPage"],[1,"block"],["class","notify__block",3,"click",4,"ngIf"],[1,"notify__block",3,"click"],[1,"col-3","left-col","d-flex","justify-content-center","align-items-center","ng-star-inserted","notify__class"],[1,"content-center","text-white","class-info","pt-2","pb-2"],[1,"notify__content"],[4,"ngIf"],["class","pt-1 pb-1 clickable",4,"ngIf"],[1,"time__ago"],[1,"notify__name"],[1,"notify__time"],[1,"pt-1","pb-1","clickable"],[1,"notify__content","p-0"],["class","d-block",4,"ngIf"],[1,"d-flex","justify-content-end","mt-2",2,"flex-wrap","wrap"],[1,"notify__btn",3,"click"],[1,"notify__btn","bg-info","ml-2",3,"click"],[1,"d-block"]],template:function(e,_){if(1&e&&(t.YNc(0,k,2,4,"header-backend",0),t.YNc(1,w,2,4,"header-frontend",1),t.TgZ(2,"div",2),t.YNc(3,q,1,0,"azt-loading-effect",3),t.YNc(4,nt,5,3,"ng-template",null,4,t.W1O),t.qZA(),t._UZ(6,"homework-backend-footer")),2&e){const o=t.MAs(5);t.Q6J("ngIf",0==_.role),t.xp6(1),t.Q6J("ngIf",1==_.role),t.xp6(2),t.Q6J("ngIf",_.isLoading)("ngIfElse",o)}},dependencies:[l.sg,l.O5,U.Q,C.p,I.d,P.L,l.uU,R.bT],styles:["*[_ngcontent-%COMP%]{margin:0;box-sizing:border-box}a[_ngcontent-%COMP%]:hover{text-decoration:none}.white[_ngcontent-%COMP%]{margin-top:5px;padding-bottom:-5px;background-color:#fff;height:50px}a[_ngcontent-%COMP%]{text-decoration:none}.text-white[_ngcontent-%COMP%]{color:#fff}.content[_ngcontent-%COMP%]{overflow-x:hidden}.back-to[_ngcontent-%COMP%]{color:#969696;display:flex;text-decoration:none}.block[_ngcontent-%COMP%]{padding-top:2px}.dashboard__header[_ngcontent-%COMP%]{background-color:#0089a7;margin-top:-15px;margin-left:-15px;margin-right:-15px}.header__top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:20px}.header__coin[_ngcontent-%COMP%]{background-color:#009cbe;width:90px;height:36px;border:none;border-radius:5px;box-shadow:none;text-align:center;padding-top:8px}.notify__btn[_ngcontent-%COMP%]{border-radius:5px;padding:5px;color:#000;font-size:12px;border:1px solid #979696}.bg-info[_ngcontent-%COMP%]{color:#fff!important;border:none!important;background-color:#00a7d0}.coin__link[_ngcontent-%COMP%]{color:#fff}.coin__text[_ngcontent-%COMP%]{font-weight:700;margin-right:4px;font-size:18px}.header__work[_ngcontent-%COMP%]{display:flex}.header__gift[_ngcontent-%COMP%]{position:relative;margin-right:24px;margin-top:8px}.gift__link[_ngcontent-%COMP%]{color:#fff}.girt__count[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-10px;background-color:#fe4531;border-radius:50%;width:16px;height:16px;color:#fff;padding:0;text-align:center;font-weight:700;font-size:9px}.header__work[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:32px}.header__user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35px;height:35px;border-radius:50%;margin-top:4px}.header__body[_ngcontent-%COMP%]{padding-top:30px;text-align:center;color:#fff}.header__body[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:45px}.content__notifi[_ngcontent-%COMP%]{margin-top:20px}.content__title[_ngcontent-%COMP%]{text-transform:uppercase}.notify__block[_ngcontent-%COMP%]{display:flex;border-width:0px;background-color:#fff;border:none;border-radius:3px;box-shadow:0 0 6px #0000001f;margin-top:15px}.notify__class[_ngcontent-%COMP%]{background-color:#00c0f0;border-radius:3px 0 0 3px/3px 0px 0px 3px}.notify__content[_ngcontent-%COMP%]{color:#000;padding:10px}.class__text[_ngcontent-%COMP%]{color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.notify__name[_ngcontent-%COMP%], .notify__time[_ngcontent-%COMP%]{font-weight:700}.time__ago[_ngcontent-%COMP%]{margin:5px 0 0;color:#909090}.col-pag[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;text-align:right}.btn-pag[_ngcontent-%COMP%]{padding:5px 8px}.page-item[_ngcontent-%COMP%]{margin:0 3px}"]}),n})();const it=[{path:"",component:A,canActivate:[O.J],children:[{path:"",component:A}]}];let at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(it),d.Bz,M.fQ]}),n})(),ot=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz,l.ez,Z.j,p.Z_,u.u5,u.UX,y.Is,v.Z,x.xC,c.QG,at,r.W]}),n})()}}]);