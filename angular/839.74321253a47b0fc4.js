"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[839],{74650:(Z,N,c)=>{c.d(N,{H:()=>W});var t=c(55330),e=c(5e3),M=c(35018),h=c(43147),f=c(34782),r=c(15575),D=c(74202),E=c(69808),p=c(92181),O=c(87238),b=c(64123),S=c(1033);const v=function(_){return[_]};function B(_,x){if(1&_&&(e.TgZ(0,"li")(1,"a",10),e.ALo(2,"mylocalize"),e.O4$(),e.TgZ(3,"svg",11),e._UZ(4,"path",15)(5,"circle",16),e.qZA(),e._uU(6),e.ALo(7,"mytranslate"),e.qZA()()),2&_){const d=e.oxw();e.xp6(1),e.Q6J("routerLink",e.VKq(6,v,e.lcZ(2,2,d.isTeacherDashboard?"/auth/account-setting/0":"/auth/account-setting/1"))),e.xp6(5),e.hij(" ",e.lcZ(7,4,"lang_auto_tai_khoan")," ")}}function T(_,x){if(1&_&&(e.TgZ(0,"li")(1,"a",10),e.ALo(2,"mylocalize"),e.O4$(),e.TgZ(3,"svg",11),e._UZ(4,"polyline",17)(5,"line",18)(6,"polyline",19)(7,"line",20),e.qZA(),e._uU(8),e.ALo(9,"mytranslate"),e.qZA()()),2&_){const d=e.oxw();e.xp6(1),e.Q6J("routerLink",e.VKq(6,v,e.lcZ(2,2,d.isTeacherDashboard?"/student/dashboard/0":"/admin/dashboard"))),e.xp6(7),e.hij(" ",e.lcZ(9,4,d.isTeacherDashboard?"lang_auto_vao_man_hoc_sinh":"lang_auto_vao_man_giao_vien")," ")}}function R(_,x){1&_&&(e.TgZ(0,"li"),e._UZ(1,"hr",8),e.qZA())}function L(_,x){1&_&&(e.TgZ(0,"li")(1,"a",10),e.ALo(2,"mylocalize"),e.O4$(),e.TgZ(3,"svg",11),e._UZ(4,"path",21)(5,"path",22)(6,"path",23)(7,"path",24)(8,"line",25),e.qZA(),e._uU(9),e.ALo(10,"mytranslate"),e.qZA()()),2&_&&(e.xp6(1),e.Q6J("routerLink",e.VKq(6,v,e.lcZ(2,2,"/auth/login-scan/0"))),e.xp6(8),e.hij(" ",e.lcZ(10,4,"lang_auto_qr_dang_nhap")," "))}function P(_,x){1&_&&(e.TgZ(0,"li")(1,"a",10),e.ALo(2,"mylocalize"),e.O4$(),e.TgZ(3,"svg",11),e._UZ(4,"rect",26)(5,"rect",27)(6,"rect",28)(7,"path",29)(8,"path",30)(9,"path",31)(10,"path",32)(11,"path",33)(12,"path",34)(13,"path",35)(14,"path",36)(15,"path",37),e.qZA(),e._uU(16),e.ALo(17,"mytranslate"),e.qZA()()),2&_&&(e.xp6(1),e.Q6J("routerLink",e.VKq(6,v,e.lcZ(2,2,"/auth/create-qr-forgot-pass/0"))),e.xp6(15),e.hij(" ",e.lcZ(17,4,"lang_auto_tao_qr_quen_mat_khau")," "))}let W=(()=>{class _ extends t.Q{constructor(d,u,y,H){super(d),this.commonService=d,this.baseApiService=u,this.browserStorageService=y,this.userLoginStateService=H,this.isTeacherDashboard=!0,this.userObj={},this.modeUI="",this.isAnonymous=!1}switchModeUI(d){let u=document.getElementById("azota-app-html");this.modeUI=d,this.browserStorageService.saveStorage("mode_ui",this.modeUI),"light"==this.modeUI?(u.classList.remove("dark"),u.classList.add("light")):(u.classList.remove("light"),u.classList.add("dark"))}ngOnInit(){var d;this.modeUI=""==this.browserStorageService.getStorage("mode_ui")?"light":null!==(d=this.browserStorageService.getStorage("mode_ui"))&&void 0!==d?d:"light",this.switchModeUI(this.modeUI),this.userObj=this.baseApiService.getUserObj(),this.isAnonymous=this.baseApiService.isAnonymousRole(),this.userLoginStateService.loginMessage.subscribe(u=>{this.userObj=this.baseApiService.getUserObj(),this.isAnonymous=this.baseApiService.isAnonymousRole()}),super.ngOnInit()}}return _.\u0275fac=function(d){return new(d||_)(e.Y36(M.v),e.Y36(h._),e.Y36(f.z),e.Y36(r.N))},_.\u0275cmp=e.Xpm({type:_,selectors:[["header-account-menu"]],inputs:{isTeacherDashboard:"isTeacherDashboard"},features:[e.qOj],decls:31,vars:28,consts:[[1,"dropdown-toggle","w-8","h-8","rounded-full","overflow-hidden","shadow-lg","image-fit","zoom-in",3,"matMenuTriggerFor"],[3,"nameCreateAvatar","size","linkAvatar"],["accountMenu","matMenu"],[1,"dropdown-menu","show","relative","w-56"],[1,"dropdown-content"],[1,"p-2"],[1,"font-medium","truncate",3,"matTooltip"],[1,"text-xs","text-slate-600","-mt-0.5","dark:text-slate-500"],[1,"dropdown-divider","border-slate-200","dark:border-darkmode-400"],[4,"ngIf"],[1,"dropdown-item",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"lucide","w-4","h-4","mr-2"],["d","M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"],["points","16 17 21 12 16 7"],["x1","21","y1","12","x2","9","y2","12"],["d","M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"],["cx","12","cy","7","r","4"],["points","17 11 21 7 17 3"],["x1","21","y1","7","x2","9","y2","7"],["points","7 21 3 17 7 13"],["x1","15","y1","17","x2","3","y2","17"],["d","M3 7V5a2 2 0 0 1 2-2h2"],["d","M17 3h2a2 2 0 0 1 2 2v2"],["d","M21 17v2a2 2 0 0 1-2 2h-2"],["d","M7 21H5a2 2 0 0 1-2-2v-2"],["x1","7","y1","12","x2","17","y2","12"],["x","3","y","3","width","5","height","5","rx","1"],["x","16","y","3","width","5","height","5","rx","1"],["x","3","y","16","width","5","height","5","rx","1"],["d","M21 16h-3a2 2 0 0 0-2 2v3"],["d","M21 21v.01"],["d","M12 7v3a2 2 0 0 1-2 2H7"],["d","M3 12h.01"],["d","M12 3h.01"],["d","M12 16v.01"],["d","M16 12h1"],["d","M21 12v.01"],["d","M12 21v-1"]],template:function(d,u){if(1&d&&(e.TgZ(0,"div",0),e._UZ(1,"azt-create-avatar",1),e.qZA(),e.TgZ(2,"mat-menu",null,2)(4,"div",3)(5,"ul",4)(6,"li",5)(7,"div",6),e.ALo(8,"mytranslate"),e._uU(9),e.ALo(10,"mytranslate"),e.qZA(),e.TgZ(11,"div",7),e._uU(12),e.ALo(13,"mytranslate"),e.ALo(14,"mytranslate"),e.qZA()(),e.TgZ(15,"li"),e._UZ(16,"hr",8),e.qZA(),e.YNc(17,B,8,8,"li",9),e.YNc(18,T,10,8,"li",9),e.YNc(19,R,2,0,"li",9),e.YNc(20,L,11,8,"li",9),e.YNc(21,P,18,8,"li",9),e.TgZ(22,"li")(23,"a",10),e.ALo(24,"mylocalize"),e.O4$(),e.TgZ(25,"svg",11),e._UZ(26,"path",12)(27,"polyline",13)(28,"line",14),e.qZA(),e._uU(29),e.ALo(30,"mytranslate"),e.qZA()()()()()),2&d){const y=e.MAs(3);e.Q6J("matMenuTriggerFor",y),e.xp6(1),e.Q6J("nameCreateAvatar",u.userObj.fullName)("size",30)("linkAvatar",u.userObj.avatar),e.xp6(6),e.MGl("matTooltip"," ",u.isAnonymous?e.lcZ(8,14,"lang_auto_tai_khoan_an_danh"):u.userObj.fullName,""),e.xp6(2),e.hij(" ",u.isAnonymous?e.lcZ(10,16,"lang_auto_tai_khoan_an_danh"):u.userObj.fullName," "),e.xp6(3),e.hij(" ",null!=u.userObj.roles&&u.userObj.roles.includes("TEACHER")?e.lcZ(13,18,"lang_auto_giao_vien"):e.lcZ(14,20,"lang_auto_hoc_sinh")," "),e.xp6(5),e.Q6J("ngIf",!u.isAnonymous),e.xp6(1),e.Q6J("ngIf",!u.isAnonymous),e.xp6(1),e.Q6J("ngIf",!u.isAnonymous),e.xp6(1),e.Q6J("ngIf",!u.isAnonymous),e.xp6(1),e.Q6J("ngIf",!u.isAnonymous),e.xp6(2),e.Q6J("routerLink",e.VKq(26,v,e.lcZ(24,22,"/auth/logout"))),e.xp6(6),e.hij(" ",e.lcZ(30,24,"lang_auto_dang_xuat")," ")}},dependencies:[D.yS,E.O5,p.VK,p.p6,O.gM,b.t,S.mp,S.bT],encapsulation:2}),_})()},76224:(Z,N,c)=>{c.d(N,{y:()=>q});var t=c(55330),e=c(5e3),M=c(60284),h=c(43147),f=c(74693),r=c(35018),D=c(61886),E=c(74202),p=c(69808),O=c(92181),b=c(64123),S=c(1033);function v(o,l){if(1&o&&(e.O4$(),e.kcU(),e.TgZ(0,"div",11),e._uU(1),e.qZA()),2&o){const a=e.oxw();e.xp6(1),e.hij(" ",a.unreadNotification," ")}}function B(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1," B\u1ea1n m\u1edbi \u0111\u01b0\u1ee3c ph\xe2n quy\u1ec1n cho l\u1edbp "),e.TgZ(2,"span",27),e._uU(3),e.qZA()()),2&o){const a=e.oxw(2).$implicit;e.xp6(3),e.Oqu(a.classroomName)}}function T(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1," gi\xe1o vi\xean \u0111\xe3 ch\u1ea5m \u0111i\u1ec1m b\xe0i t\u1eadp "),e.TgZ(2,"b"),e._uU(3),e.qZA()()),2&o){const a=e.oxw(2).$implicit;e.xp6(3),e.Oqu(a.homeworkName)}}function R(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1," \u0110\xe3 n\u1ed9p b\xe0i t\u1eadp "),e.TgZ(2,"b"),e._uU(3),e.qZA()()),2&o){const a=e.oxw(2).$implicit;e.xp6(3),e.Oqu(a.homeworkName)}}function L(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1," C\xf3 b\xe0i t\u1eadp "),e.TgZ(2,"b"),e._uU(3),e.qZA(),e._uU(4," m\u1edbi \u0111\u01b0\u1ee3c giao "),e.qZA()),2&o){const a=e.oxw(2).$implicit;e.xp6(3),e.Oqu(a.homeworkName)}}function P(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1," C\xf3 y\xeau c\u1ea7u n\u1ed9p l\u1ea1i b\xe0i t\u1eadp "),e.TgZ(2,"b"),e._uU(3),e.qZA()()),2&o){const a=e.oxw(2).$implicit;e.xp6(3),e.Oqu(a.homeworkName)}}function W(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1," \u0110\xe3 n\u1ed9p b\xe0i thi "),e.TgZ(2,"b"),e._uU(3),e.qZA()()),2&o){const a=e.oxw(2).$implicit;e.xp6(3),e.Oqu(a.examName)}}function _(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1," C\xf3 b\xe0i thi m\u1edbi "),e.TgZ(2,"b"),e._uU(3),e.qZA()()),2&o){const a=e.oxw(2).$implicit;e.xp6(3),e.Oqu(a.examName)}}function x(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1," B\xe0i thi "),e.TgZ(2,"b"),e._uU(3),e.qZA(),e._uU(4," \u0111\xe3 \u0111\u01b0\u01a1c ch\u1ea5m \u0111i\u1ec3m "),e.qZA()),2&o){const a=e.oxw(2).$implicit;e.xp6(3),e.Oqu(a.examName)}}function d(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1," B\u1ea1n m\u1edbi \u0111\u01b0\u1ee3c ph\xe2n quy\u1ec1n cho "),e.TgZ(2,"b"),e._uU(3),e.qZA()()),2&o){const a=e.oxw(2).$implicit,n=e.oxw(2);e.xp6(3),e.Oqu(n.processNoticeService.getTypeObjNotice(a))}}function u(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1," H\u1ecdc sinh m\u1edbi \u0111\u1eb7t cho b\u1ea1n c\xe2u h\u1ecfi trong \u0111\u1ec1 thi "),e.TgZ(2,"b"),e._uU(3),e.qZA()()),2&o){const a=e.oxw(2).$implicit;e.xp6(3),e.Oqu(a.examName)}}function y(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1," H\u1ecdc sinh m\u1edbi \u0111\u1eb7t cho b\u1ea1n c\xe2u h\u1ecfi trong b\xe0i t\u1eadp "),e.TgZ(2,"b"),e._uU(3),e.qZA()()),2&o){const a=e.oxw(2).$implicit;e.xp6(3),e.Oqu(a.homeworkName)}}function H(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1," Gi\xe1o vi\xean \u0111\xe3 tr\u1ea3 l\u1eddi c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n \u1edf \u0111\u1ec1 thi "),e.TgZ(2,"b"),e._uU(3),e.qZA()()),2&o){const a=e.oxw(2).$implicit;e.xp6(3),e.Oqu(a.examName)}}function K(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1," Gi\xe1o vi\xean \u0111\xe3 tr\u1ea3 l\u1eddi c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n \u1edf b\xe0i t\u1eadp "),e.TgZ(2,"b"),e._uU(3),e.qZA()()),2&o){const a=e.oxw(2).$implicit;e.xp6(3),e.Oqu(a.homeworkName)}}const F=function(o){return{"mt-3":o}};function k(o,l){if(1&o){const a=e.EpF();e.TgZ(0,"div",18),e.NdJ("click",function(){e.CHM(a);const s=e.oxw().$implicit,i=e.oxw(2);return e.KtG(i.processNoticeService.redirectToPage(s))}),e.TgZ(1,"div",19),e._UZ(2,"azt-create-avatar",20),e.qZA(),e.TgZ(3,"div",21)(4,"div",22)(5,"span",23),e._uU(6),e.qZA(),e.TgZ(7,"div",24),e._uU(8),e.ALo(9,"date"),e.qZA()(),e.TgZ(10,"div",25),e.YNc(11,B,4,1,"span",26),e.YNc(12,T,4,1,"span",26),e.YNc(13,R,4,1,"span",26),e.YNc(14,L,5,1,"span",26),e.YNc(15,P,4,1,"span",26),e.YNc(16,W,4,1,"span",26),e.YNc(17,_,4,1,"span",26),e.YNc(18,x,5,1,"span",26),e.YNc(19,d,4,1,"span",26),e.YNc(20,u,4,1,"span",26),e.YNc(21,y,4,1,"span",26),e.YNc(22,H,4,1,"span",26),e.YNc(23,K,4,1,"span",26),e.qZA()()()}if(2&o){const a=e.oxw(),s=a.$implicit;e.Q6J("ngClass",e.VKq(21,F,0!==a.index)),e.xp6(2),e.Q6J("nameCreateAvatar",s.studentName)("size",48),e.xp6(4),e.hij(" ",s.studentName," "),e.xp6(2),e.hij(" ",e.xi3(9,18,s.createdAt,"dd/MM/yyyy")," "),e.xp6(3),e.Q6J("ngIf","NEW_ASSIGN"==s.type),e.xp6(1),e.Q6J("ngIf","HAS_MARK"==s.type),e.xp6(1),e.Q6J("ngIf","NEW_ANSWER"==s.type),e.xp6(1),e.Q6J("ngIf","NEW_HOMEWORK"==s.type),e.xp6(1),e.Q6J("ngIf","RESEND_ANSWER"==s.type),e.xp6(1),e.Q6J("ngIf","NEW_EXAM_SUBMIT"==s.type),e.xp6(1),e.Q6J("ngIf","NEW_EXAM"==s.type),e.xp6(1),e.Q6J("ngIf","EXAM_HAS_MARK"==s.type),e.xp6(1),e.Q6J("ngIf","NEW_SHARE_CLASS_PERMISSION"==s.type||"NEW_SHARE_HOMEWORK_PERMISSION"==s.type||"NEW_SHARE_EXAM_PERMISSION"==s.type),e.xp6(1),e.Q6J("ngIf","NEW_QA_EXAM_ASK"==s.type),e.xp6(1),e.Q6J("ngIf","NEW_QA_HOMEWORK_ASK"==s.type),e.xp6(1),e.Q6J("ngIf","NEW_QA_EXAM_ANSWER"==s.type),e.xp6(1),e.Q6J("ngIf","NEW_QA_HOMEWORK_ANSWER"==s.type)}}function Q(o,l){if(1&o&&(e.ynx(0),e.YNc(1,k,24,23,"div",17),e.BQk()),2&o){const a=l.$implicit;e.xp6(1),e.Q6J("ngIf","NEW_REQUEST_REAPPROVE"!=a.type&&"NEW_SHARE_PERMISSION"!=a.type)}}const j=function(o){return[o]};function $(o,l){if(1&o&&(e.TgZ(0,"div",12),e.YNc(1,Q,2,1,"ng-container",13),e._UZ(2,"hr",14),e.TgZ(3,"div",15)(4,"a",16),e.ALo(5,"mylocalize"),e._uU(6,"Xem t\u1ea5t c\u1ea3"),e.qZA()()()),2&o){const a=e.oxw();e.xp6(1),e.Q6J("ngForOf",a.commonNoticeData),e.xp6(3),e.Q6J("routerLink",e.VKq(4,j,e.lcZ(5,2,"/notify")))}}function z(o,l){1&o&&(e.TgZ(0,"div",28),e._uU(1," Ch\u01b0a c\xf3 th\xf4ng b\xe1o! "),e.qZA())}let q=(()=>{class o extends t.Q{constructor(a,n,s,i,m){super(i),this.processNoticeService=a,this.baseApiService=n,this.frontCommonService=s,this.commonService=i,this.globalService=m,this.commonNoticeData=[],this.unreadNotification=0}removeNumberNoti(a){"notification"==a&&this.frontCommonService.apiFrontCommonMarkNotificationAsReadGet(0).subscribe(n=>{1==n.success&&(this.resetNotification(0),this.getHeaderInfo())}),"avatar"==a&&this.frontCommonService.apiFrontCommonMarkPlusPaymentAsReadGet().subscribe(n=>{1==n.success&&(this.resetNotification(1),this.getHeaderInfo())})}resetNotification(a){var n="back_header_infors_"+this.baseApiService.getUserObj().id,s=this.globalService.getGlobalData(n);s&&s.data&&(1==a&&(s.data.plusAzo=0),0==a&&(s.data.unreadNotification=0),this.globalService.setGlobalData(n,this.serializeJson(s)))}reGetNotifice(){var a="back_header_infors_"+this.baseApiService.getUserObj().id;this.globalService.removeGlobalData(a)}getHeaderInfo(){var a,n,s,i,m="back_header_infors_"+this.baseApiService.getUserObj().id,A=this.globalService.getGlobalData(m);A?(this.unreadNotification=null!==(n=null===(a=A.data)||void 0===a?void 0:a.unreadNotification)&&void 0!==n?n:0,this.commonNoticeData=null!==(i=null===(s=A.data)||void 0===s?void 0:s.commonNoticeObjs)&&void 0!==i?i:[]):this.frontCommonService.apiFrontCommonGetHeaderInfoGet(0).subscribe(g=>{var w,I,C,U;1==g.success&&(this.unreadNotification=null!==(I=null===(w=g.data)||void 0===w?void 0:w.unreadNotification)&&void 0!==I?I:0,this.globalService.setGlobalData(m,this.serializeJson(g)),this.commonNoticeData=null!==(U=null===(C=g.data)||void 0===C?void 0:C.commonNoticeObjs)&&void 0!==U?U:new Array)})}ngOnInit(){super.ngOnInit(),this.getHeaderInfo()}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(M.e),e.Y36(h._),e.Y36(f.j$),e.Y36(r.v),e.Y36(D.U))},o.\u0275cmp=e.Xpm({type:o,selectors:[["header-notice-box"]],features:[e.qOj],decls:15,vars:7,consts:[[1,"dropdown-toggle","notification","cursor-pointer","relative",3,"matMenuTriggerFor","click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"notification__icon","dark:text-slate-500"],["d","M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"],["d","M13.73 21a2 2 0 0 1-3.46 0"],["class","absolute bg-danger text-white rounded-full font-bold","style","top: -5px;right: -5px;font-size: 7px;overflow: hidden;width: 15px;height: 15px;line-height: 15px;text-align: center;",4,"ngIf"],["notification","matMenu"],[1,"notification-content","dropdown-menu","show","relative","pt-2",2,"width","auto"],[1,"notification-content__box","dropdown-content"],[1,"notification-content__title"],["class","notice-azt",4,"ngIf","ngIfElse"],["noNotification",""],[1,"absolute","bg-danger","text-white","rounded-full","font-bold",2,"top","-5px","right","-5px","font-size","7px","overflow","hidden","width","15px","height","15px","line-height","15px","text-align","center"],[1,"notice-azt"],[4,"ngFor","ngForOf"],[1,"dropdown-divider","border-gray/[0.08]","mt-3"],[1,"text-center","p-1"],[1,"text-primary","text-center",3,"routerLink"],["class","cursor-pointer relative flex items-center",3,"ngClass","click",4,"ngIf"],[1,"cursor-pointer","relative","flex","items-center",3,"ngClass","click"],[1,"w-12","h-12","flex-none","image-fit","mr-1"],[3,"nameCreateAvatar","size"],[1,"ml-2","overflow-hidden","w-full"],[1,"flex","items-center"],[1,"font-medium","truncate","mr-5"],[1,"text-xs","text-slate-400","ml-auto","whitespace-nowrap"],[1,"truncate","text-slate-500","mt-0.5"],[4,"ngIf"],[1,"notify__name"],[1,"w-full","text-center","truncate","text-slate-500","mt-0.5","mb-4"]],template:function(a,n){if(1&a&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return n.removeNumberNoti("notification")}),e.O4$(),e.TgZ(1,"svg",1),e._UZ(2,"path",2)(3,"path",3),e.qZA(),e.YNc(4,v,2,1,"div",4),e.qZA(),e.kcU(),e.TgZ(5,"mat-menu",null,5)(7,"div",6)(8,"div",7)(9,"div",8),e._uU(10),e.ALo(11,"mytranslate"),e.qZA(),e.YNc(12,$,7,6,"div",9),e.YNc(13,z,2,0,"ng-template",null,10,e.W1O),e.qZA()()()),2&a){const s=e.MAs(6),i=e.MAs(14);e.Q6J("matMenuTriggerFor",s),e.xp6(4),e.Q6J("ngIf",n.unreadNotification),e.xp6(6),e.Oqu(e.lcZ(11,5,"lang_auto_thong_bao")),e.xp6(2),e.Q6J("ngIf",n.commonNoticeData.length>0)("ngIfElse",i)}},dependencies:[E.yS,p.mk,p.sg,p.O5,O.VK,O.p6,b.t,p.uU,S.mp,S.bT],encapsulation:2}),o})()},4334:(Z,N,c)=>{c.d(N,{f:()=>f});var t=c(36053),e=c(5e3),M=c(74202),h=c(35018);let f=(()=>{class r{constructor(E,p,O){this.el=E,this.activeRoute=p,this.commonService=O,this.changeActiveRouter=[]}checkActiveRouter(){for(var E=!1,p=0;p<this.changeActiveRouter.length;p++){var O=this.changeActiveRouter[p],b=this.commonService.getCurrentUrl(),S="/"+this.commonService.getCurrentLang()+O;0===b.indexOf(S)&&(E=!0)}const v=this.el.nativeElement;E?(v.classList.remove("side-menu--active"),v.classList.add("side-menu--active")):v.classList.remove("side-menu--active")}ngOnInit(){(0,t.aj)([this.activeRoute.params,this.activeRoute.queryParams]).subscribe(([])=>{this.checkActiveRouter()})}}return r.\u0275fac=function(E){return new(E||r)(e.Y36(e.SBq),e.Y36(M.gz),e.Y36(h.v))},r.\u0275dir=e.lG2({type:r,selectors:[["","changeActiveRouter",""]],inputs:{changeActiveRouter:"changeActiveRouter"}}),r})()},60284:(Z,N,c)=>{c.d(N,{e:()=>M});var t=c(5e3),e=c(35018);let M=(()=>{class h{constructor(r){this.commonService=r}getTypeObjNotice(r){return"NEW_SHARE_CLASS_PERMISSION"==r.type?"L\u1edbp: "+r.classroomName:"NEW_SHARE_HOMEWORK_PERMISSION"==r.type?"B\xe0i t\u1eadp: "+r.homeworkName:"NEW_SHARE_EXAM_PERMISSION"==r.type?"\u0110\u1ec1 thi: "+r.examName:""}redirectToPage(r){switch(r.type){case"NEW_ANSWER":case"NEW_SHARE_HOMEWORK_PERMISSION":this.commonService.myNavigation(`/admin/testbank/homework-results-list/${r.classroomId}/${r.homeworkId}/${r.homeworkHashId}`);break;case"HAS_MARK":case"NEW_HOMEWORK":case"RESEND_ANSWER":this.commonService.myNavigation(`/bai-tap/${r.homeworkHashId}`);break;case"NEW_EXAM_SUBMIT":this.commonService.myNavigation(`/admin/testbank/test-review/${r.examId}/${r.parentId}/${r.studentId}/${r.examResultId}`);break;case"NEW_EXAM":this.commonService.myNavigation(`/de-thi/${r.examHashId}`);break;case"EXAM_HAS_MARK":this.commonService.myNavigation(`/test/answer-test/${r.parentId}/0/${r.examHashId}/${r.examResultId}`);break;case"NEW_SHARE_CLASS_PERMISSION":this.commonService.myNavigation(1==r.isMultipleClassroom?"/admin/student/manage-class/0":"/admin/student/class-details/"+r.classroomId);break;case"NEW_SHARE_EXAM_PERMISSION":this.commonService.myNavigation(`/admin/testbank/exam-results-list/0/${r.examId}/0`);break;case"NEW_QA_EXAM_ASK":case"NEW_QA_HOMEWORK_ASK":this.commonService.myNavigation("/admin/teacher-qa/view-question/"+Number(r.datas));break;case"NEW_QA_EXAM_ANSWER":case"NEW_QA_HOMEWORK_ANSWER":this.commonService.myNavigation("/student-qa/view-question/"+Number(r.datas));break;case"NEW_ASSIGN":this.commonService.myNavigation("/admin/student/manage-class/0");break;case"NEW_REQUEST_REAPPROVE":case"NEW_SHARE_PERMISSION":break;default:this.commonService.myNavigation("/student/dashboard/1")}}}return h.\u0275fac=function(r){return new(r||h)(t.LFG(e.v))},h.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},51908:(Z,N,c)=>{c.d(N,{PG:()=>l,Z_:()=>a});var t=c(5e3),e=c(69808),M=c(93075);function h(n,s){}const f=()=>{const n="undefined"!=typeof window?window:void 0;return n&&n.tinymce?n.tinymce:null};let D=(()=>{class n{constructor(){this.onBeforePaste=new t.vpe,this.onBlur=new t.vpe,this.onClick=new t.vpe,this.onContextMenu=new t.vpe,this.onCopy=new t.vpe,this.onCut=new t.vpe,this.onDblclick=new t.vpe,this.onDrag=new t.vpe,this.onDragDrop=new t.vpe,this.onDragEnd=new t.vpe,this.onDragGesture=new t.vpe,this.onDragOver=new t.vpe,this.onDrop=new t.vpe,this.onFocus=new t.vpe,this.onFocusIn=new t.vpe,this.onFocusOut=new t.vpe,this.onKeyDown=new t.vpe,this.onKeyPress=new t.vpe,this.onKeyUp=new t.vpe,this.onMouseDown=new t.vpe,this.onMouseEnter=new t.vpe,this.onMouseLeave=new t.vpe,this.onMouseMove=new t.vpe,this.onMouseOut=new t.vpe,this.onMouseOver=new t.vpe,this.onMouseUp=new t.vpe,this.onPaste=new t.vpe,this.onSelectionChange=new t.vpe,this.onActivate=new t.vpe,this.onAddUndo=new t.vpe,this.onBeforeAddUndo=new t.vpe,this.onBeforeExecCommand=new t.vpe,this.onBeforeGetContent=new t.vpe,this.onBeforeRenderUI=new t.vpe,this.onBeforeSetContent=new t.vpe,this.onChange=new t.vpe,this.onClearUndos=new t.vpe,this.onDeactivate=new t.vpe,this.onDirty=new t.vpe,this.onExecCommand=new t.vpe,this.onGetContent=new t.vpe,this.onHide=new t.vpe,this.onInit=new t.vpe,this.onInitNgModel=new t.vpe,this.onLoadContent=new t.vpe,this.onNodeChange=new t.vpe,this.onPostProcess=new t.vpe,this.onPostRender=new t.vpe,this.onPreInit=new t.vpe,this.onPreProcess=new t.vpe,this.onProgressState=new t.vpe,this.onRedo=new t.vpe,this.onRemove=new t.vpe,this.onReset=new t.vpe,this.onResizeEditor=new t.vpe,this.onSaveContent=new t.vpe,this.onSetAttrib=new t.vpe,this.onObjectResizeStart=new t.vpe,this.onObjectResized=new t.vpe,this.onObjectSelected=new t.vpe,this.onSetContent=new t.vpe,this.onShow=new t.vpe,this.onSubmit=new t.vpe,this.onUndo=new t.vpe,this.onVisualAid=new t.vpe}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275dir=t.lG2({type:n,outputs:{onBeforePaste:"onBeforePaste",onBlur:"onBlur",onClick:"onClick",onContextMenu:"onContextMenu",onCopy:"onCopy",onCut:"onCut",onDblclick:"onDblclick",onDrag:"onDrag",onDragDrop:"onDragDrop",onDragEnd:"onDragEnd",onDragGesture:"onDragGesture",onDragOver:"onDragOver",onDrop:"onDrop",onFocus:"onFocus",onFocusIn:"onFocusIn",onFocusOut:"onFocusOut",onKeyDown:"onKeyDown",onKeyPress:"onKeyPress",onKeyUp:"onKeyUp",onMouseDown:"onMouseDown",onMouseEnter:"onMouseEnter",onMouseLeave:"onMouseLeave",onMouseMove:"onMouseMove",onMouseOut:"onMouseOut",onMouseOver:"onMouseOver",onMouseUp:"onMouseUp",onPaste:"onPaste",onSelectionChange:"onSelectionChange",onActivate:"onActivate",onAddUndo:"onAddUndo",onBeforeAddUndo:"onBeforeAddUndo",onBeforeExecCommand:"onBeforeExecCommand",onBeforeGetContent:"onBeforeGetContent",onBeforeRenderUI:"onBeforeRenderUI",onBeforeSetContent:"onBeforeSetContent",onChange:"onChange",onClearUndos:"onClearUndos",onDeactivate:"onDeactivate",onDirty:"onDirty",onExecCommand:"onExecCommand",onGetContent:"onGetContent",onHide:"onHide",onInit:"onInit",onInitNgModel:"onInitNgModel",onLoadContent:"onLoadContent",onNodeChange:"onNodeChange",onPostProcess:"onPostProcess",onPostRender:"onPostRender",onPreInit:"onPreInit",onPreProcess:"onPreProcess",onProgressState:"onProgressState",onRedo:"onRedo",onRemove:"onRemove",onReset:"onReset",onResizeEditor:"onResizeEditor",onSaveContent:"onSaveContent",onSetAttrib:"onSetAttrib",onObjectResizeStart:"onObjectResizeStart",onObjectResized:"onObjectResized",onObjectSelected:"onObjectSelected",onSetContent:"onSetContent",onShow:"onShow",onSubmit:"onSubmit",onUndo:"onUndo",onVisualAid:"onVisualAid"}}),n})();const E=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onResizeEditor","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],v=(n,s)=>"string"==typeof n?n.split(",").map(i=>i.trim()):Array.isArray(n)?n:s;let T=0;const R=n=>{const i=(new Date).getTime(),m=Math.floor(1e9*Math.random());return T++,n+"_"+m+T+String(i)},P=n=>void 0!==n&&"textarea"===n.tagName.toLowerCase(),_=n=>void 0===n||""===n?[]:Array.isArray(n)?n:n.split(" "),d=(n,s)=>_(n).concat(_(s)),y=()=>{},K=n=>null==n,k=()=>({listeners:[],scriptId:R("tiny-script"),scriptLoaded:!1}),z=(()=>{let n=k();return{load:(A,g,w)=>{n.scriptLoaded?w():(n.listeners.push(w),A.getElementById(n.scriptId)||((A,g,w,I)=>{const C=g.createElement("script");C.referrerPolicy="origin",C.type="application/javascript",C.id=A,C.src=w;const U=()=>{C.removeEventListener("load",U),n.listeners.forEach(I=>I()),n.scriptLoaded=!0};C.addEventListener("load",U),g.head&&g.head.appendChild(C)})(n.scriptId,A,g))},reinitialize:()=>{n=k()}}})(),q=new t.OlP("TINYMCE_SCRIPT_SRC"),o={provide:M.JU,useExisting:(0,t.Gpc)(()=>l),multi:!0};let l=(()=>{class n extends D{constructor(i,m,A,g){super(),this.platformId=A,this.tinymceScriptSrc=g,this.cloudChannel="5",this.apiKey="no-api-key",this.id="",this.modelEvents="change input undo redo",this.onTouchedCallback=y,this._elementRef=i,this.ngZone=m,this.initialise=this.initialise.bind(this)}set disabled(i){this._disabled=i,this._editor&&this._editor.initialized&&this._editor.setMode(i?"readonly":"design")}get disabled(){return this._disabled}get editor(){return this._editor}writeValue(i){this._editor&&this._editor.initialized?this._editor.setContent(K(i)?"":i):this.initialValue=null===i?void 0:i}registerOnChange(i){this.onChangeCallback=i}registerOnTouched(i){this.onTouchedCallback=i}setDisabledState(i){this._editor?this._editor.setMode(i?"readonly":"design"):i&&(this.init=Object.assign(Object.assign({},this.init),{readonly:!0}))}ngAfterViewInit(){var i;(0,e.NF)(this.platformId)&&(this.id=this.id||R("tiny-angular"),this.inline=void 0!==this.inline?!1!==this.inline:!(null===(i=this.init)||void 0===i||!i.inline),this.createElement(),null!==f()?this.initialise():this._element&&this._element.ownerDocument&&z.load(this._element.ownerDocument,this.getScriptSrc(),this.initialise.bind(this)))}ngOnDestroy(){null!==f()&&f().remove(this._editor)}createElement(){this._element=document.createElement(this.inline?"string"==typeof this.tagName?this.tagName:"div":"textarea"),this._element&&(document.getElementById(this.id)&&console.warn(`TinyMCE-Angular: an element with id [${this.id}] already exists. Editors with duplicate Id will not be able to mount`),this._element.id=this.id,P(this._element)&&(this._element.style.visibility="hidden"),this._elementRef.nativeElement.appendChild(this._element))}initialise(){const i=Object.assign(Object.assign({},this.init),{target:this._element,inline:this.inline,readonly:this.disabled,plugins:d(this.init&&this.init.plugins,this.plugins),toolbar:this.toolbar||this.init&&this.init.toolbar,setup:m=>{this._editor=m,m.on("init",A=>{this.initEditor(m)}),((n,s)=>{(n=>{const s=v(n.ignoreEvents,[]);return v(n.allowedEvents,E).filter(m=>E.includes(m)&&!s.includes(m))})(n).forEach(m=>{const A=n[m];s.on(m.substring(2),g=>n.ngZone.run(()=>A.emit({event:g,editor:s})))})})(this,m),this.init&&"function"==typeof this.init.setup&&this.init.setup(m)}});P(this._element)&&(this._element.style.visibility=""),this.ngZone.runOutsideAngular(()=>{f().init(i)})}getScriptSrc(){return K(this.tinymceScriptSrc)?`https://cdn.tiny.cloud/1/${this.apiKey}/tinymce/${this.cloudChannel}/tinymce.min.js`:this.tinymceScriptSrc}initEditor(i){i.on("blur",()=>this.ngZone.run(()=>this.onTouchedCallback())),i.on(this.modelEvents,()=>this.ngZone.run(()=>this.emitOnChange(i))),"string"==typeof this.initialValue&&this.ngZone.run(()=>{i.setContent(this.initialValue),i.getContent()!==this.initialValue&&this.emitOnChange(i),void 0!==this.onInitNgModel&&this.onInitNgModel.emit(i)})}emitOnChange(i){this.onChangeCallback&&this.onChangeCallback(i.getContent({format:this.outputFormat}))}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(t.Lbi),t.Y36(q,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["editor"]],inputs:{cloudChannel:"cloudChannel",apiKey:"apiKey",id:"id",modelEvents:"modelEvents",disabled:"disabled",initialValue:"initialValue",init:"init",inline:"inline",outputFormat:"outputFormat",tagName:"tagName",plugins:"plugins",toolbar:"toolbar",allowedEvents:"allowedEvents",ignoreEvents:"ignoreEvents"},features:[t._Bn([o]),t.qOj],decls:1,vars:0,template:function(i,m){1&i&&t.YNc(0,h,0,0,"ng-template")},styles:["[_nghost-%COMP%] { display: block; }"]}),n})(),a=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[e.ez,M.u5]}),n})()}}]);