"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[925],{45668:(C,w,r)=>{r.d(w,{J:()=>y});var _=r(5e3),v=r(43147),h=r(42873);let y=(()=>{class p{constructor(c,b){this.baseApiService=c,this.redirectService=b}canActivate(c,b){return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginAnonymous(b.url),!1)}canActivateChild(c,b){return this.canActivate(c,b)}canLoad(c){const b=`/${c.path}`;return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(b),!1)}}return p.\u0275fac=function(c){return new(c||p)(_.LFG(v._),_.LFG(h.V))},p.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},41752:(C,w,r)=>{r.d(w,{D:()=>y});var _=r(92340),v=r(5e3),h=r(58914);let y=(()=>{class p{constructor(c){this.configService=c}getCurrentVersion(){return _.N.versionTime}getGlobalNotice(){return this.configService.getConfig("globalNotice")}getEnvValue(c){return this.configService.getConfig(c)}getLinkEmbedDocument(c){var b=this.configService.getConfig("docView");return b&&"MICROSOFT"!=b?`https://docs.google.com/viewer?url=${c}&embedded=true`:`https://view.officeapps.live.com/op/embed.aspx?src=${c}`}}return p.\u0275fac=function(c){return new(c||p)(v.LFG(h.E))},p.\u0275prov=v.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},84925:(C,w,r)=>{r.r(w),r.d(w,{DashboardModule:()=>vt});var _=r(69808),v=r(93075),h=r(48966),y=r(74202),p=r(51908),A=r(1737),c=r(43189),b=r(63728),V=r(44841),E=r(47470),Q=r(75658),G=r(49088),I=r(8785),j=r(37389),K=r(45668),T=r(55330),t=r(5e3),S=r(35018),M=r(74693),R=r(90508),D=r(67322),Y=r(74107),x=r(1033);function B(a,s){if(1&a&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&a){const e=s.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e.desc)}}function P(a,s){if(1&a&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&a){const e=s.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}const $=function(a){return{"col-span-12":a}},U=function(){return{standalone:!0}};function H(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"div",19)(1,"div",1)(2,"p",2),t._uU(3),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),t._uU(8),t.ALo(9,"mytranslate"),t.qZA(),t.TgZ(10,"mat-select",6),t.NdJ("ngModelChange",function(n){const l=t.CHM(e).$implicit;return t.KtG(l.subjectsIds=n)})("ngModelChange",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.backUpObjData())}),t.YNc(11,P,2,2,"mat-option",7),t.qZA()()()()()}if(2&a){const e=s.$implicit,o=t.oxw(2);let n;t.Q6J("ngClass",t.VKq(8,$,1==o.dataObjs.length)),t.xp6(3),t.Oqu(null==e.class?null:e.class.desc),t.xp6(5),t.Oqu(t.lcZ(9,6,"lang_auto_chon_mon")),t.xp6(2),t.Q6J("ngModel",e.subjectsIds)("ngModelOptions",t.DdM(10,U)),t.xp6(1),t.Q6J("ngForOf",o.valueSubjectSurvey[null!==(n=null==e.class?null:e.class.value)&&void 0!==n?n:0])}}function W(a,s){if(1&a&&(t.ynx(0),t.TgZ(1,"div",16)(2,"p",2),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()(),t.TgZ(5,"div",17),t.YNc(6,H,12,11,"div",18),t.qZA(),t.BQk()),2&a){const e=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,2,"lang_auto_thay_co_day_mon_gi")),t.xp6(3),t.Q6J("ngForOf",e.dataObjs)}}function X(a,s){1&a&&(t.TgZ(0,"div",20)(1,"div"),t._uU(2),t.ALo(3,"mytranslate"),t.qZA()()),2&a&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"lang_auto_vui_long_chon_lop")))}function tt(a,s){1&a&&(t.O4$(),t.TgZ(0,"svg",21)(1,"g",22)(2,"g",23),t._UZ(3,"circle",24),t.TgZ(4,"path",25),t._UZ(5,"animateTransform",26),t.qZA()()()())}let N=(()=>{class a extends T.Q{constructor(e,o,n,i){super(e),this.commonService=e,this.surveyConfigService=o,this.dialogRef=n,this.valueSurvey=[],this.valueSubjectSurvey=[],this.dataObjs=[],this.oldDataObjs=[],this.classGrade=[]}ngOnInit(){this.valueSurvey=[{value:1,desc:"L\u1edbp 1"},{value:2,desc:"L\u1edbp 2"},{value:3,desc:"L\u1edbp 3"},{value:4,desc:"L\u1edbp 4"},{value:5,desc:"L\u1edbp 5"},{value:6,desc:"L\u1edbp 6"},{value:7,desc:"L\u1edbp 7"},{value:8,desc:"L\u1edbp 8"},{value:9,desc:"L\u1edbp 9"},{value:10,desc:"L\u1edbp 10"},{value:11,desc:"L\u1edbp 11"},{value:12,desc:"L\u1edbp 12"},{value:13,desc:"Kh\xe1c"}];for(var e=[{type:1,id:1,name:"C\xf4ng ngh\u1ec7"},{type:1,id:2,name:"Gi\xe1o d\u1ee5c c\xf4ng d\xe2n"},{type:1,id:3,name:"Gi\xe1o d\u1ee5c th\u1ec3 ch\u1ea5t"},{type:1,id:4,name:"Khoa h\u1ecdc T\u1ef1 nhi\xean"},{type:1,id:5,name:"L\u1ecbch s\u1eed v\xe0 \u0110\u1ecba l\xfd"},{type:1,id:6,name:"Ngh\u1ec7 Thu\u1eadt"},{type:1,id:7,name:"Ngo\u1ea1i ng\u1eef 1"},{type:1,id:8,name:"Ngo\u1ea1i ng\u1eef 2"},{type:1,id:9,name:"Ng\u1eef V\u0103n"},{type:1,id:10,name:"Tin h\u1ecdc"},{type:1,id:11,name:"Ti\u1ebfng D\xe2n t\u1ed9c thi\u1ec3u s\u1ed1"},{type:1,id:12,name:"To\xe1n"},{type:1,id:13,name:"\u0110\u1ea1o \u0110\u1ee9c"}],o=[{type:2,id:100,name:"Ng\u1eef V\u0103n"},{type:2,id:101,name:"To\xe1n"},{type:2,id:102,name:"Ngo\u1ea1i ng\u1eef 1"},{type:2,id:103,name:"Gi\xe1o d\u1ee5c th\u1ec3 ch\u1ea5t"},{type:2,id:104,name:"Gi\xe1o d\u1ee5c c\xf4ng d\xe2n"},{type:2,id:105,name:"L\u1ecbch s\u1eed v\xe0 \u0110\u1ecba l\xfd"},{type:2,id:106,name:"Khoa h\u1ecdc T\u1ef1 nhi\xean"},{type:2,id:107,name:"\u0110\u1ea1o \u0110\u1ee9c"},{type:2,id:108,name:"Ngh\u1ec7 Thu\u1eadt"},{type:2,id:109,name:"Tin h\u1ecdc"},{type:2,id:110,name:"C\xf4ng ngh\u1ec7"},{type:2,id:111,name:"Ti\u1ebfng D\xe2n t\u1ed9c thi\u1ec3u s\u1ed1"},{type:2,id:112,name:"Ngo\u1ea1i ng\u1eef 2"}],n=[{type:3,id:200,name:"C\xf4ng ngh\u1ec7"},{type:3,id:201,name:"Gi\xe1o d\u1ee5c Qu\u1ed1c ph\xf2ng v\xe0 an ninh"},{type:3,id:202,name:"Gi\xe1o d\u1ee5c kinh t\u1ebf v\xe0 Ph\xe1p lu\u1eadt"},{type:3,id:203,name:"Gi\xe1o d\u1ee5c th\u1ec3 ch\u1ea5t"},{type:3,id:204,name:"H\xf3a h\u1ecdc"},{type:3,id:205,name:"L\u1ecbch s\u1eed"},{type:3,id:206,name:"Ngh\u1ec7 thu\u1eadt"},{type:3,id:207,name:"Ngo\u1ea1i ng\u1eef 1"},{type:3,id:208,name:"Ngo\u1ea1i ng\u1eef 2"},{type:3,id:209,name:"Ng\u1eef V\u0103n"},{type:3,id:210,name:"Sinh h\u1ecdc"},{type:3,id:211,name:"Tin h\u1ecdc"},{type:3,id:212,name:"Ti\u1ebfng D\xe2n t\u1ed9c thi\u1ec3u s\u1ed1"},{type:3,id:213,name:"To\xe1n"},{type:3,id:214,name:"V\u1eadt l\xfd"},{type:3,id:215,name:"\u0110\u1ecba l\xfd"}],i=1;i<=5;i++)this.valueSubjectSurvey[i]=e;for(i=6;i<=9;i++)this.valueSubjectSurvey[i]=o;for(i=10;i<=13;i++)this.valueSubjectSurvey[i]=n}saveSurveyV3(){var e,o,n,i,l,g,d;let f=[];for(let u=0;u<this.dataObjs.length;u++)if(this.dataObjs[u].subjectsIds)for(let Z=0;Z<(null!==(n=null===(o=null===(e=this.dataObjs)||void 0===e?void 0:e[u].subjectsIds)||void 0===o?void 0:o.length)&&void 0!==n?n:0);Z++){let k={classId:null===(l=null===(i=this.dataObjs)||void 0===i?void 0:i[u].class)||void 0===l?void 0:l.value,subjectId:null===(d=null===(g=this.dataObjs)||void 0===g?void 0:g[u].subjectsIds)||void 0===d?void 0:d[Z]};f.push(k)}f.length>0&&this.surveyConfigService.apiSurveyConfigSaveSurvey3Post({objs:f}).subscribe(u=>{u&&1==u.success?this.btnCloseDialog(!0):(this.showErrorSnack("lang_auto_khong_load_duoc_du_lieu"),this.btnCloseDialog(!1))})}backUpObjData(){this.oldDataObjs=this.dataObjs}addSubject(){var e,o,n,i;this.dataObjs=[];let l=this.oldDataObjs.length,g=this.classGrade.length;for(let d=0;d<g;d++)if(this.dataObjs[d]={class:this.classGrade[d],subjectsIds:[]},l>0)for(let u=0;u<l;u++)(null===(o=null===(e=this.dataObjs)||void 0===e?void 0:e[d].class)||void 0===o?void 0:o.value)==(null===(i=null===(n=this.oldDataObjs)||void 0===n?void 0:n[u].class)||void 0===i?void 0:i.value)&&(this.dataObjs[d]=this.oldDataObjs[u])}btnCloseDialog(e){this.dialogRef.close(e)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(S.v),t.Y36(M.XG),t.Y36(h.so,8),t.Y36(h.WI,8))},a.\u0275cmp=t.Xpm({type:a,selectors:[["azt-survey-info-two"]],features:[t.qOj],decls:25,vars:20,consts:[[1,"box","p-5"],[1,"text-left"],[1,"text-md","font-medium"],[1,"grid","grid-cols-12","mt-2"],[1,"col-span-12"],["appearance","outline"],["multiple","",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger text-xs mt-1",4,"ngIf"],["align","end"],[1,"text-right"],[1,"btn","btn-outline-secondary","w-24","mr-3",3,"click"],[1,"btn","btn-primary","w-24",3,"disabled","click"],["width","25","viewBox","-2 -2 42 42","xmlns","http://www.w3.org/2000/svg","stroke","rgb(30, 41, 59)","class","w-4 h-4 mr-2",4,"ngIf"],[3,"value"],[1,"text-left","mt-5"],[1,"grid","grid-cols-12","gap-5","mt-2"],["class","col-span-6",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-span-6",3,"ngClass"],[1,"text-danger","text-xs","mt-1"],["width","25","viewBox","-2 -2 42 42","xmlns","http://www.w3.org/2000/svg","stroke","rgb(30, 41, 59)",1,"w-4","h-4","mr-2"],["fill","none","fill-rule","evenodd"],["transform","translate(1 1)","stroke-width","4"],["stroke-opacity",".5","cx","18","cy","18","r","18"],["d","M36 18c0-9.94-8.06-18-18-18"],["attributeName","transform","type","rotate","from","0 18 18","to","360 18 18","dur","1s","repeatCount","indefinite"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"mat-dialog-content")(2,"div",1)(3,"p",2),t._uU(4),t.ALo(5,"mytranslate"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"mat-form-field",5)(9,"mat-label"),t._uU(10),t.ALo(11,"mytranslate"),t.qZA(),t.TgZ(12,"mat-select",6),t.NdJ("ngModelChange",function(i){return o.classGrade=i})("ngModelChange",function(){return o.addSubject()}),t.YNc(13,B,2,2,"mat-option",7),t.qZA()()()(),t.YNc(14,W,7,4,"ng-container",8),t.YNc(15,X,4,3,"div",9),t.qZA(),t.TgZ(16,"mat-dialog-actions",10)(17,"div",11)(18,"button",12),t.NdJ("click",function(){return o.btnCloseDialog(!1)}),t._uU(19),t.ALo(20,"mytranslate"),t.qZA(),t.TgZ(21,"button",13),t.NdJ("click",function(){return o.saveSurveyV3()}),t.YNc(22,tt,6,0,"svg",14),t._uU(23),t.ALo(24,"mytranslate"),t.qZA()()()()),2&e&&(t.xp6(4),t.Oqu(t.lcZ(5,11,"lang_auto_thay_co_day_lop_may")),t.xp6(6),t.Oqu(t.lcZ(11,13,"lang_auto_chon_lop")),t.xp6(2),t.Q6J("ngModel",o.classGrade)("ngModelOptions",t.DdM(19,U)),t.xp6(1),t.Q6J("ngForOf",o.valueSurvey),t.xp6(1),t.Q6J("ngIf",o.dataObjs.length>0),t.xp6(1),t.Q6J("ngIf",0==o.classGrade.length),t.xp6(4),t.hij(" ",t.lcZ(20,15,"lang_auto_de_sau")," "),t.xp6(2),t.Q6J("disabled",0==o.classGrade.length),t.xp6(1),t.Q6J("ngIf",o.statusObj.loading),t.xp6(1),t.hij(" ",t.lcZ(24,17,"lang_auto_luu")," "))},dependencies:[_.mk,_.sg,_.O5,R.ey,h.xY,h.H8,D.KE,D.hX,Y.gD,v.JJ,v.On,x.bT]}),a})();var et=r(85736);let L=(()=>{class a{constructor(e,o){this.dialogRef=e,this.data=o,this.isNotShowAgain=new v.p4(!1)}ngOnInit(){}onNoClick(){this.dialogRef.close(this.isNotShowAgain.value)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(h.so),t.Y36(h.WI))},a.\u0275cmp=t.Xpm({type:a,selectors:[["new-feature-notice-dialog"]],decls:13,vars:9,consts:[[1,"box","p-5"],[3,"innerHTML"],["align","end"],[1,"flex","items-center","w-full",2,"justify-content","space-between"],[1,"form-check"],["id","is-not-show-again","type","checkbox",1,"form-check-input",3,"formControl"],["for","is-not-show-again",1,"form-check-label"],[1,"btn","btn-primary","w-24",3,"mat-dialog-close","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"azt-mat-dialog-content"),t._UZ(2,"div",1),t.qZA(),t.TgZ(3,"mat-dialog-actions",2)(4,"div",3)(5,"div",4),t._UZ(6,"input",5),t.TgZ(7,"label",6),t._uU(8),t.ALo(9,"mytranslate"),t.qZA()(),t.TgZ(10,"button",7),t.NdJ("click",function(){return o.onNoClick()}),t._uU(11),t.ALo(12,"mytranslate"),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("innerHTML",o.data.description,t.oJD),t.xp6(4),t.Q6J("formControl",o.isNotShowAgain),t.xp6(2),t.hij(" ",t.lcZ(9,5,"lang_testbank_create_exam_width_file_pdf_not_view")," "),t.xp6(2),t.Q6J("mat-dialog-close",o.isNotShowAgain.value),t.xp6(1),t.Oqu(t.lcZ(12,7,"lang_buttom_close")))},dependencies:[h.ZT,h.H8,v.Wl,v.JJ,v.oH,et.O,x.bT],encapsulation:2}),a})();var z=r(41752),ot=r(43147),at=r(24096),q=r(34202),nt=r(34782);let J=(()=>{class a{constructor(e,o,n,i){this.commonService=e,this.dialog=o,this.dashboardService=n,this.browserStorageService=i,this.subscriptions=new at.w,this.welcomeDashboardStorageKey="azt_dashboard_welcome",this.newDashboardStorageKey="azt_dashboard_new"}saveToLocalStorage(e,o){this.browserStorageService.saveSimpleSessionStorage(this.welcomeDashboardStorageKey,e.toString()),this.browserStorageService.saveSimpleSessionStorage(this.newDashboardStorageKey,o.toString())}isWelcomeDashboard(){return new q.y(e=>{this.getDashboardStatus(!0,!1).subscribe(o=>{let n=this.browserStorageService.getSimpleSessionStorage(this.welcomeDashboardStorageKey);var i=null!=n&&1==Number(n);e.next(i),e.complete()})})}checkRedirectDashboard(e){this.commonService.myNavigation(1==e?"/admin/dashboard-welcome":"/admin/dashboard")}getDashboardStatus(e,o){return new q.y(n=>{let i=this.browserStorageService.getSimpleSessionStorage(this.welcomeDashboardStorageKey),l=this.browserStorageService.getSimpleSessionStorage(this.newDashboardStorageKey);1==e&&null!=l&&null!=i?(n.next(void 0),n.complete(),o&&this.checkRedirectDashboard(Number(i))):this.subscriptions.add(this.dashboardService.apiDashboardGetObjGet().subscribe(g=>{var d,f,u,Z;if(1==g.success){var k=null!==(f=null===(d=g.data)||void 0===d?void 0:d.useWelcomeDashboard)&&void 0!==f?f:0,_t=null!==(Z=null===(u=g.data)||void 0===u?void 0:u.useNewDashboard)&&void 0!==Z?Z:0;this.saveToLocalStorage(k,_t),n.next(g),n.complete(),o&&this.checkRedirectDashboard(k)}else n.next(g),n.complete()}))})}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(S.v),t.LFG(h.uw),t.LFG(M.sp),t.LFG(nt.z))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var O=r(92181),F=r(20371);function it(a,s){if(1&a&&(t.O4$(),t.kcU(),t.TgZ(0,"button",41),t.O4$(),t.TgZ(1,"svg",76),t._UZ(2,"path",20)(3,"circle",21)(4,"path",22)(5,"path",23),t.qZA()()),2&a){t.oxw();const e=t.MAs(134);t.Q6J("matMenuTriggerFor",e)}}const m=function(a){return[a]},rt=function(){return{confirm_type:"forgot_password"}};let st=(()=>{class a extends T.Q{constructor(e,o,n,i,l,g){super(e),this.commonService=e,this.envService=o,this.dialog=n,this.baseApiService=i,this.globalNoticeService=l,this.switchVersionService=g,this.currentVersion="",this.checkFeatureNotice=!1,this.user_obj={}}getNewFeatureNotice(e){this.initStatusObj(),this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet().subscribe(o=>{var n,i,l;1==o.success?(null!==(n=o.data)&&void 0!==n&&n.obj?(this.checkFeatureNotice=!0,this.dialog.open(L,{width:"750px",data:null===(i=o.data)||void 0===i?void 0:i.obj}).afterClosed().subscribe(d=>{if(d)try{this.setMarkAsReadFeaturesNotice()}catch(f){console.log(f)}})):this.checkFeatureNotice=!1,this.successStatusObj()):this.errorStatusObj(null!==(l=o.message)&&void 0!==l?l:"",!0)}))}showSurveyDialog(){this.dialog.open(N,{width:"750px",data:{status:!0}}).afterClosed().subscribe(o=>{o&&this.showSuccessSnack("lang_auto_cam_on_ban_da_tham_gia_khao_sat_nay")})}showNewFeatureNotice(e){this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet(e?1:0).subscribe(o=>{var n,i,l;1==o.success?null!==(n=o.data)&&void 0!==n&&n.obj&&this.dialog.open(L,{width:"750px",data:null===(i=o.data)||void 0===i?void 0:i.obj}).afterClosed().subscribe(d=>{}):this.errorStatusObj(null!==(l=o.message)&&void 0!==l?l:"",!0)}))}setMarkAsReadFeaturesNotice(){this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeMarkAsReadGet().subscribe(e=>{var o;1==e.success?this.successStatusObj():this.errorStatusObj(null!==(o=e.message)&&void 0!==o?o:"",!0)}))}ngOnInit(){this.initStatusObj(),this.user_obj=this.baseApiService.getUserObj(),this.currentVersion=this.envService.getCurrentVersion(),this.switchVersionService.getDashboardStatus(!0,!0).subscribe(e=>{var o;null==e||1==e.success?this.getNewFeatureNotice(0):this.showErrorSnack(null!==(o=e.message)&&void 0!==o?o:"")}),this.commonService.translateMetaData({title:"lang_cms_test_dashboard_title",description:"lang_cms_test_dashboard_description",image:"lang_cms_test_image"}),super.ngOnInit()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(S.v),t.Y36(z.D),t.Y36(h.uw),t.Y36(ot._),t.Y36(M.ID),t.Y36(J))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-test-dashboard"]],features:[t.qOj],decls:168,vars:113,consts:[[3,"headerTitle"],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto"],[1,"mb-3","grid","grid-cols-12","sm:gap-10","intro-y","sm:mt-10"],[1,"col-span-12","grid","grid-cols-12","gap-6","mt-8","flex","items-center"],[1,"col-span-6","md:col-span-3","intro-y"],[3,"routerLink"],[1,"box","p-8","zoom-in"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"block","lucide","w-12","h-12","text-primary","mx-auto"],["d","M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"],["points","14 2 14 8 20 8"],["x1","16","y1","13","x2","8","y2","13"],["x1","16","y1","17","x2","8","y2","17"],["x1","10","y1","9","x2","8","y2","9"],[1,"font-medium","text-center","text-base","mt-3"],["d","M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","icon-name","layers","data-lucide","layers",1,"block","lucide","w-12","h-12","text-primary","mx-auto"],["points","12 2 2 7 12 12 22 7 12 2"],["points","2 17 12 22 22 17"],["points","2 12 12 17 22 12"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","icon-name","users","data-lucide","users",1,"block","lucide","w-12","h-12","text-primary","mx-auto"],["d","M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"],["cx","9","cy","7","r","4"],["d","M23 21v-2a4 4 0 00-3-3.87"],["d","M16 3.13a4 4 0 010 7.75"],[1,"col-span-12","grid","grid-cols-12","mt-8","gap-6","flex","items-center"],[1,"col-span-12","md:col-span-3","intro-y"],[1,"box","px-4","py-4","mb-3","flex","items-center","zoom-in"],[1,"w-10","h-10","flex-none","image-fit","rounded-md","overflow-hidden"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"lucide","w-10","h-10","text-pending"],["d","M3 6h18"],["d","M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"],["d","M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"],["x1","10","y1","11","x2","10","y2","17"],["x1","14","y1","11","x2","14","y2","17"],[1,"ml-4","mr-auto"],[1,"font-medium"],["href","https://docs.azota.vn/","target","_blank"],["cx","12","cy","12","r","10"],["d","M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"],["x1","12","y1","17","x2","12.01","y2","17"],[1,"absolute","left-0","bottom-0","index"],[1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matMenuTriggerFor"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["x1","12","y1","16","x2","12","y2","12"],["x1","12","y1","8","x2","12.01","y2","8"],["dashboardMenu",""],[1,"dropdown-menu","show","w-72","relative"],[1,"dropdown-content"],[1,"dropdown-item",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","lucide","mr-2"],["d","M16 16h6"],["d","M19 13v6"],["d","M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"],["d","M16.5 9.4 7.55 4.24"],["points","3.29 7 12 12 20.71 7"],["x1","12","y1","22","x2","12","y2","12"],["x","8","y","2","width","8","height","4","rx","1","ry","1"],["d","M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"],["d","M16 4h2a2 2 0 0 1 1.73 1"],["d","M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"],["d","M8 18h1"],["href","https://www.facebook.com/groups/azota.vn","target","_blank",1,"dropdown-item"],["d","M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"],["d","M22 21v-2a4 4 0 0 0-3-3.87"],["d","M16 3.13a4 4 0 0 1 0 7.75"],["href","https://www.facebook.com/azotavn","target","_blank",1,"dropdown-item"],["d","M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"],[1,"dropdown-item","hover:bg-white/5"],["d","M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"],["d","m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"],["d","M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"],["d","M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"],["class","btn btn-outline-primary dropdown-toggle btn-transparent mb-5 ml-5",3,"matMenuTriggerFor",4,"ngIf"],["dashboardAdminMenu",""],[1,"dropdown-item",3,"routerLink"],[1,"dropdown-item",3,"routerLink","queryParams"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","icon-name","users","data-lucide","users",1,"lucide-users"]],template:function(e,o){if(1&e&&(t.TgZ(0,"teacher-layout",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"a",5),t.ALo(6,"mylocalize"),t.TgZ(7,"div",6),t.O4$(),t.TgZ(8,"svg",7),t._UZ(9,"path",8)(10,"polyline",9)(11,"line",10)(12,"line",11)(13,"line",12),t.qZA(),t.kcU(),t.TgZ(14,"div",13),t._uU(15),t.ALo(16,"mytranslate"),t.qZA()()()(),t.TgZ(17,"div",4)(18,"a",5),t.ALo(19,"mylocalize"),t.TgZ(20,"div",6),t.O4$(),t.TgZ(21,"svg",7),t._UZ(22,"path",14),t.qZA(),t.kcU(),t.TgZ(23,"div",13),t._uU(24),t.ALo(25,"mytranslate"),t.qZA()()()(),t.TgZ(26,"div",4)(27,"a",5),t.ALo(28,"mylocalize"),t.TgZ(29,"div",6),t.O4$(),t.TgZ(30,"svg",15),t._UZ(31,"polygon",16)(32,"polyline",17)(33,"polyline",18),t.qZA(),t.kcU(),t.TgZ(34,"div",13),t._uU(35),t.ALo(36,"mytranslate"),t.qZA()()()(),t.TgZ(37,"div",4)(38,"a",5),t.ALo(39,"mylocalize"),t.TgZ(40,"div",6),t.O4$(),t.TgZ(41,"svg",19),t._UZ(42,"path",20)(43,"circle",21)(44,"path",22)(45,"path",23),t.qZA(),t.kcU(),t.TgZ(46,"div",13),t._uU(47),t.ALo(48,"mytranslate"),t.qZA()()()()(),t.TgZ(49,"div",24)(50,"div",25)(51,"a",5),t.ALo(52,"mylocalize"),t.TgZ(53,"div",26)(54,"div",27),t.O4$(),t.TgZ(55,"svg",28),t._UZ(56,"path",29)(57,"path",30)(58,"path",31)(59,"line",32)(60,"line",33),t.qZA()(),t.kcU(),t.TgZ(61,"div",34)(62,"div",35),t._uU(63),t.ALo(64,"mytranslate"),t.qZA()()()()(),t.TgZ(65,"div",25)(66,"a",36)(67,"div",26)(68,"div",27),t.O4$(),t.TgZ(69,"svg",28),t._UZ(70,"circle",37)(71,"path",38)(72,"line",39),t.qZA()(),t.kcU(),t.TgZ(73,"div",34)(74,"div",35),t._uU(75),t.ALo(76,"mytranslate"),t.qZA()()()()()()(),t.TgZ(77,"div",40)(78,"button",41),t.O4$(),t.TgZ(79,"svg",42),t._UZ(80,"circle",37)(81,"line",43)(82,"line",44),t.qZA()(),t.kcU(),t.TgZ(83,"mat-menu",null,45)(85,"div",46)(86,"ul",47)(87,"li")(88,"a",48),t.NdJ("click",function(){return o.showNewFeatureNotice(!0)}),t.O4$(),t.TgZ(89,"svg",49),t._UZ(90,"path",50)(91,"path",51)(92,"path",52)(93,"path",53)(94,"polyline",54)(95,"line",55),t.qZA(),t._uU(96),t.ALo(97,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(98,"li")(99,"a",48),t.NdJ("click",function(){return o.showSurveyDialog()}),t.O4$(),t.TgZ(100,"svg",49),t._UZ(101,"rect",56)(102,"path",57)(103,"path",58)(104,"path",59)(105,"path",60),t.qZA(),t._uU(106),t.ALo(107,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(108,"li")(109,"a",61),t.O4$(),t.TgZ(110,"svg",49),t._UZ(111,"path",62)(112,"circle",21)(113,"path",63)(114,"path",64),t.qZA(),t._uU(115),t.ALo(116,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(117,"li")(118,"a",65),t.O4$(),t.TgZ(119,"svg",49),t._UZ(120,"path",66),t.qZA(),t._uU(121),t.ALo(122,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(123,"li")(124,"a",67),t.O4$(),t.TgZ(125,"svg",49),t._UZ(126,"path",68)(127,"path",69)(128,"path",70)(129,"path",71),t.qZA(),t._uU(130),t.ALo(131,"mytranslate"),t.qZA()()()()(),t.YNc(132,it,6,1,"button",72),t.kcU(),t.TgZ(133,"mat-menu",null,73)(135,"div",46)(136,"ul",47)(137,"li")(138,"a",74),t.ALo(139,"mylocalize"),t._uU(140," H\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng "),t.qZA(),t.TgZ(141,"a",74),t.ALo(142,"mylocalize"),t._uU(143," Kh\xe1ch b\xe1o l\u1ed7i "),t.qZA(),t.TgZ(144,"a",74),t.ALo(145,"mylocalize"),t._uU(146," Js exception "),t.qZA(),t.TgZ(147,"a",74),t.ALo(148,"mylocalize"),t._uU(149," .Net exception "),t.qZA(),t.TgZ(150,"a",74),t.ALo(151,"mylocalize"),t._uU(152," S\u1eeda c\u1ea5u h\xecnh "),t.qZA(),t.TgZ(153,"a",74),t.ALo(154,"mylocalize"),t._uU(155," Gzip tool "),t.qZA(),t.TgZ(156,"a",75),t.ALo(157,"localize"),t._uU(158," Qu\xean pass d\xf9ng Firebase "),t.qZA(),t.TgZ(159,"a",74),t.ALo(160,"mylocalize"),t._uU(161," Decode Json Tool "),t.qZA(),t.TgZ(162,"a",74),t.ALo(163,"mylocalize"),t._uU(164," Th\xeam tr\u01b0\u1eddng "),t.qZA(),t.TgZ(165,"a",74),t.ALo(166,"mylocalize"),t._uU(167," T\xednh n\u0103ng m\u1edbi "),t.qZA()()()()()()()()),2&e){const n=t.MAs(84);t.Q6J("headerTitle","dashboard"),t.xp6(5),t.Q6J("routerLink",t.VKq(82,m,t.lcZ(6,30,"/admin/testbank/document-management/1/0/1"))),t.xp6(10),t.hij(" ",t.lcZ(16,32,"lang_auto_bai_tap")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(84,m,t.lcZ(19,34,"/admin/testbank/document-management/0/0/1"))),t.xp6(6),t.hij(" ",t.lcZ(25,36,"lang_auto_de_thi")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(86,m,t.lcZ(28,38,"/admin/student/manage-class/0"))),t.xp6(8),t.hij(" ",t.lcZ(36,40,"lang_auto_quan_ly_lop")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(88,m,t.lcZ(39,42,"/admin/teacher-group/0/0"))),t.xp6(9),t.hij(" ",t.lcZ(48,44,"lang_auto_doi_nhom")," "),t.xp6(4),t.Q6J("routerLink",t.VKq(90,m,t.lcZ(52,46,"/admin/trash/0"))),t.xp6(12),t.hij(" ",t.lcZ(64,48,"lang_auto_thung_rac")," "),t.xp6(12),t.hij(" ",t.lcZ(76,50,"lang_auto_huong_dan")," "),t.xp6(3),t.Q6J("matMenuTriggerFor",n),t.xp6(18),t.hij(" ",t.lcZ(97,52,"lang_auto_tinh_nang_moi")," "),t.xp6(10),t.hij(" ",t.lcZ(107,54,"lang_auto_khao_sat")," "),t.xp6(9),t.hij(" ",t.lcZ(116,56,"lang_auto_cong_dong_ho_tro")," "),t.xp6(6),t.hij(" ",t.lcZ(122,58,"lang_auto_fanpage_azota")," "),t.xp6(9),t.hij(" ",t.lcZ(131,60,"lang_auto_phien_ban")+": "+o.currentVersion," "),t.xp6(2),t.Q6J("ngIf",1==o.user_obj.id),t.xp6(6),t.Q6J("routerLink",t.VKq(92,m,t.lcZ(139,62,"/super-role/support"))),t.xp6(3),t.Q6J("routerLink",t.VKq(94,m,t.lcZ(142,64,"/super-role/report_error"))),t.xp6(3),t.Q6J("routerLink",t.VKq(96,m,t.lcZ(145,66,"/super-role/report_exception"))),t.xp6(3),t.Q6J("routerLink",t.VKq(98,m,t.lcZ(148,68,"/super-role/exception_log"))),t.xp6(3),t.Q6J("routerLink",t.VKq(100,m,t.lcZ(151,70,"/super-role/update-config"))),t.xp6(3),t.Q6J("routerLink",t.VKq(102,m,t.lcZ(154,72,"/super-role/gzip-tool"))),t.xp6(3),t.Q6J("routerLink",t.VKq(104,m,t.lcZ(157,74,"/auth/checking_service")))("queryParams",t.DdM(106,rt)),t.xp6(3),t.Q6J("routerLink",t.VKq(107,m,t.lcZ(160,76,"/super-role/json-tool"))),t.xp6(3),t.Q6J("routerLink",t.VKq(109,m,t.lcZ(163,78,"/super-role/add_school"))),t.xp6(3),t.Q6J("routerLink",t.VKq(111,m,t.lcZ(166,80,"/super-role/add_new_feature_notice")))}},dependencies:[y.yS,_.O5,O.VK,O.p6,F._,x.mp,x.bT,j.lO],encapsulation:2}),a})();var lt=r(25245),ct=r(91350);function dt(a,s){1&a&&t._UZ(0,"azt-loading-effect")}const ut=function(a){return[a]};function ht(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"h3",5),t._uU(4),t.ALo(5,"mytranslate"),t.qZA(),t.TgZ(6,"p",6),t._uU(7),t.ALo(8,"mytranslate"),t.TgZ(9,"b"),t._uU(10),t.ALo(11,"mytranslate"),t.qZA(),t._uU(12,", "),t.TgZ(13,"b"),t._uU(14),t.ALo(15,"mytranslate"),t.qZA(),t._uU(16,", "),t.TgZ(17,"b"),t._uU(18),t.ALo(19,"mytranslate"),t.qZA(),t._uU(20),t.ALo(21,"mytranslate"),t.TgZ(22,"b"),t._uU(23),t.ALo(24,"mytranslate"),t.qZA(),t._uU(25),t.ALo(26,"mytranslate"),t.ALo(27,"mytranslate"),t.TgZ(28,"a",7),t._uU(29),t.ALo(30,"mytranslate"),t.qZA()(),t.TgZ(31,"button",8),t.ALo(32,"mylocalize"),t.TgZ(33,"mat-icon"),t._uU(34,"add"),t.qZA(),t.TgZ(35,"span"),t._uU(36),t.ALo(37,"mytranslate"),t.qZA()()()()(),t.TgZ(38,"div",9)(39,"button",10),t.O4$(),t.TgZ(40,"svg",11),t._UZ(41,"circle",12)(42,"line",13)(43,"line",14),t.qZA()(),t.kcU(),t.TgZ(44,"mat-menu",null,15)(46,"div",16)(47,"ul",17)(48,"li")(49,"a",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.showNewFeatureNotice(!0))}),t.O4$(),t.TgZ(50,"svg",19),t._UZ(51,"path",20)(52,"path",21)(53,"path",22)(54,"path",23)(55,"polyline",24)(56,"line",25),t.qZA(),t._uU(57),t.ALo(58,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(59,"li")(60,"a",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.showSurveyDialog())}),t.O4$(),t.TgZ(61,"svg",19),t._UZ(62,"rect",26)(63,"path",27)(64,"path",28)(65,"path",29)(66,"path",30),t.qZA(),t._uU(67),t.ALo(68,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(69,"li")(70,"a",31),t.O4$(),t.TgZ(71,"svg",19),t._UZ(72,"path",32)(73,"circle",33)(74,"path",34)(75,"path",35),t.qZA(),t._uU(76),t.ALo(77,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(78,"li")(79,"a",36),t.O4$(),t.TgZ(80,"svg",19),t._UZ(81,"path",37),t.qZA(),t._uU(82),t.ALo(83,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(84,"li")(85,"a",38),t.O4$(),t.TgZ(86,"svg",19),t._UZ(87,"path",39)(88,"path",40)(89,"path",41)(90,"path",42),t.qZA(),t._uU(91),t.ALo(92,"mytranslate"),t.qZA()()()()()()}if(2&a){const e=t.MAs(45),o=t.oxw();t.xp6(4),t.hij(" ",t.lcZ(5,18,"lang_auto_chao_mung_ban_den_voi_azota")," "),t.xp6(3),t.hij(" ",t.lcZ(8,20,"lang_auto_ban_co_the_tao")," "),t.xp6(3),t.Oqu(t.lcZ(11,22,"lang_auto_bai_tap")),t.xp6(4),t.Oqu(t.lcZ(15,24,"lang_auto_de_thi")),t.xp6(4),t.Oqu(t.lcZ(19,26,"lang_auto_de_kiem_tra")),t.xp6(2),t.hij(" ",t.lcZ(21,28,"lang_auto_hoac_tao")," "),t.xp6(3),t.Oqu(t.lcZ(24,30,"lang_auto_bang_dap_an")),t.xp6(2),t.AsE(" ",t.lcZ(26,32,"lang_auto_de_tu_dong")," ",t.lcZ(27,34,"lang_auto_cham_bai_lam_offline_cua_hoc_sinh")," "),t.xp6(4),t.Oqu(t.lcZ(30,36,"lang_auto_tim_hieu_them")),t.xp6(2),t.Q6J("routerLink",t.VKq(52,ut,t.lcZ(32,38,"/admin/testbank/create-new-document/0"))),t.xp6(5),t.hij(" ",t.lcZ(37,40,"lang_auto_tao_moi"),""),t.xp6(3),t.Q6J("matMenuTriggerFor",e),t.xp6(18),t.hij(" ",t.lcZ(58,42,"lang_auto_tinh_nang_moi")," "),t.xp6(10),t.hij(" ",t.lcZ(68,44,"lang_auto_khao_sat")," "),t.xp6(9),t.hij(" ",t.lcZ(77,46,"lang_auto_cong_dong_ho_tro")," "),t.xp6(6),t.hij(" ",t.lcZ(83,48,"lang_auto_fanpage_azota")," "),t.xp6(9),t.hij(" ",t.lcZ(92,50,"lang_auto_phien_ban")+": "+o.currentVersion," ")}}let gt=(()=>{class a extends T.Q{constructor(e,o,n,i,l){super(e),this.commonService=e,this.switchVersionService=o,this.globalNoticeService=n,this.envService=i,this.dialog=l,this.checkFeatureNotice=!1,this.currentVersion=""}showNewFeatureNotice(e){this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet(e?1:0).subscribe(o=>{var n,i,l;1==o.success?null!==(n=o.data)&&void 0!==n&&n.obj&&this.dialog.open(L,{width:"750px",data:null===(i=o.data)||void 0===i?void 0:i.obj}).afterClosed().subscribe(d=>{}):this.errorStatusObj(null!==(l=o.message)&&void 0!==l?l:"",!0)}))}showSurveyDialog(){this.dialog.open(N,{width:"750px",data:{status:!0}}).afterClosed().subscribe(o=>{o&&this.showSuccessSnack("lang_auto_cam_on_ban_da_tham_gia_khao_sat_nay")})}ngOnInit(){this.initStatusObj(),this.currentVersion=this.envService.getCurrentVersion(),this.switchVersionService.isWelcomeDashboard().subscribe(e=>{e||this.switchVersionService.checkRedirectDashboard(e?1:0),this.stopStatusObj()}),super.ngOnInit()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(S.v),t.Y36(J),t.Y36(M.ID),t.Y36(z.D),t.Y36(h.uw))},a.\u0275cmp=t.Xpm({type:a,selectors:[["dashboard-welcome"]],features:[t.qOj],decls:4,vars:2,consts:[[4,"ngIf","ngIfElse"],["doneLoading",""],[1,"app"],[1,"container"],[1,"dashboard"],[1,"dashboard-title"],[1,"dashboard-desc"],["href","https://docs.azota.vn","target","_blank",1,"btn-text-primary"],[1,"btn","w-32","btn-primary",3,"routerLink"],[1,"absolute","left-0","bottom-0","index"],[1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matMenuTriggerFor"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["cx","12","cy","12","r","10"],["x1","12","y1","16","x2","12","y2","12"],["x1","12","y1","8","x2","12.01","y2","8"],["dashboardMenu",""],[1,"dropdown-menu","show","w-72","relative"],[1,"dropdown-content"],[1,"dropdown-item",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","lucide","mr-2"],["d","M16 16h6"],["d","M19 13v6"],["d","M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"],["d","M16.5 9.4 7.55 4.24"],["points","3.29 7 12 12 20.71 7"],["x1","12","y1","22","x2","12","y2","12"],["x","8","y","2","width","8","height","4","rx","1","ry","1"],["d","M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"],["d","M16 4h2a2 2 0 0 1 1.73 1"],["d","M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"],["d","M8 18h1"],["href","https://www.facebook.com/groups/azota.vn","target","_blank",1,"dropdown-item"],["d","M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"],["cx","9","cy","7","r","4"],["d","M22 21v-2a4 4 0 0 0-3-3.87"],["d","M16 3.13a4 4 0 0 1 0 7.75"],["href","https://www.facebook.com/azotavn","target","_blank",1,"dropdown-item"],["d","M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"],[1,"dropdown-item","hover:bg-white/5"],["d","M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"],["d","m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"],["d","M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"],["d","M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"]],template:function(e,o){if(1&e&&(t.TgZ(0,"teacher-layout"),t.YNc(1,dt,1,0,"azt-loading-effect",0),t.YNc(2,ht,93,54,"ng-template",null,1,t.W1O),t.qZA()),2&e){const n=t.MAs(3);t.xp6(1),t.Q6J("ngIf",o.statusObj.loading)("ngIfElse",n)}},dependencies:[y.rH,_.O5,lt.Hw,O.VK,O.p6,ct.Q,F._,x.mp,x.bT],styles:[".dashboard[_ngcontent-%COMP%]{text-align:center}.dashboard-title[_ngcontent-%COMP%]{font-size:20px;margin-bottom:20px}.app[_ngcontent-%COMP%]{margin-top:100px}.dashboard-desc[_ngcontent-%COMP%]{margin:0 auto 25px;max-width:500px}.btn-azt-primary[_ngcontent-%COMP%]{text-transform:inherit;font-size:16px;font-weight:400;padding:5px 50px}.mt-150[_ngcontent-%COMP%]{margin-top:150px}"]}),a})();const pt=[{component:(()=>{class a extends T.Q{}return a.\u0275fac=function(){let s;return function(o){return(s||(s=t.n5z(a)))(o||a)}}(),a.\u0275cmp=t.Xpm({type:a,selectors:[["app-dashboard"]],features:[t.qOj],decls:1,vars:0,template:function(e,o){1&e&&t._UZ(0,"router-outlet")},dependencies:[y.lC],encapsulation:2}),a})(),path:"",canActivate:[K.J],children:[{path:"dashboard-welcome",component:gt},{path:"dashboard",component:st},{path:"dashboard-v1",redirectTo:"dashboard",pathMatch:"full"}]}];let mt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[y.Bz.forChild(pt),y.Bz,j.fQ]}),a})(),vt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[y.Bz,_.ez,G.j,V.Xd,p.Z_,v.u5,v.UX,h.Is,Q.Z,A.xC,b.QG,c.h,E.W,I.t,mt]}),a})()}}]);