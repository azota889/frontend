(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{AWii:function(t,n,e){"use strict";e.d(n,"a",function(){return C});var o=e("fXoL"),i=e("tyNb"),a=e("gbi4"),c=e("yTNM"),s=e("3Pt+"),r=e("ofXK"),l=e("0pw4"),b=e("NFeN"),d=e("bTqV"),g=e("wPhD");function h(t,n){1&t&&(o.Vb(0,"div",6),o.Vb(1,"div",7),o.Vb(2,"span",8),o.Rc(3,"Loading..."),o.Ub(),o.Ub(),o.Ub())}function m(t,n){if(1&t){const t=o.Wb();o.Vb(0,"button",20),o.cc("click",function(){o.Dc(t);const n=o.gc().$implicit;return o.gc(3).handleClick(n.id)}),o.Rc(1,"Tr\u1ea3 l\u1eddi"),o.Ub()}}function f(t,n){1&t&&(o.Vb(0,"div"),o.Rc(1,"\u0110\xe3 tr\u1ea3 l\u1eddi"),o.Ub())}function u(t,n){if(1&t){const t=o.Wb();o.Vb(0,"div"),o.Vb(1,"div",12),o.Vb(2,"div",13),o.cc("click",function(){o.Dc(t);const e=n.$implicit;return o.gc(3).handleClick(e.id)}),o.Vb(3,"p",14),o.Rc(4),o.Ub(),o.Vb(5,"p",15),o.Rc(6),o.Ub(),o.Vb(7,"p",16),o.Rc(8),o.Ub(),o.Ub(),o.Vb(9,"div",17),o.Pc(10,m,2,0,"button",18),o.Pc(11,f,2,0,"div",9),o.Ub(),o.Vb(12,"mat-icon",19),o.cc("click",function(){o.Dc(t);const e=n.$implicit;return o.gc(3).setDataConfirm(e.id,e.title)}),o.Rc(13,"clear"),o.Ub(),o.Ub(),o.Ub()}if(2&t){const t=n.$implicit,e=o.gc(3);o.Db(4),o.Tc(" ",t.title," "),o.Db(2),o.Tc("",e.calculationTime(t.createdAt)," tr\u01b0\u1edbc"),o.Db(2),o.Tc("",t.totalPeopleAsk," h\u1ecdc sinh h\u1ecfi"),o.Db(2),o.nc("ngIf",0==t.isAnswered),o.Db(1),o.nc("ngIf",0!=t.isAnswered)}}function p(t,n){1&t&&(o.Vb(0,"div",21),o.Vb(1,"div",22),o.Rc(2," Danh s\xe1ch tr\u1ed1ng "),o.Ub(),o.Ub())}function x(t,n){if(1&t&&(o.Vb(0,"div"),o.Pc(1,u,14,5,"div",10),o.Pc(2,p,3,0,"div",11),o.Ub()),2&t){const t=o.gc(2);o.Db(1),o.nc("ngForOf",t.ObjsInDashboardData.objs),o.Db(1),o.nc("ngIf",0==t.ObjsInDashboardData.objs.length)}}function v(t,n){if(1&t&&o.Pc(0,x,3,2,"div",9),2&t){const t=o.gc();o.nc("ngIf",t.ObjsInDashboardData&&t.ObjsInDashboardData.objs)}}function P(t,n){if(1&t){const t=o.Wb();o.Vb(0,"div",23),o.Vb(1,"a",24),o.cc("click",function(){return o.Dc(t),o.gc().PrevPaging()}),o.Vb(2,"mat-icon"),o.Rc(3,"arrow_back_ios"),o.Ub(),o.Ub(),o.Vb(4,"a",24),o.cc("click",function(){return o.Dc(t),o.gc().NextPaging()}),o.Vb(5,"mat-icon"),o.Rc(6,"arrow_forward_ios"),o.Ub(),o.Ub(),o.Ub()}if(2&t){const t=o.gc();o.Db(1),o.nc("disabled",1==t.page),o.Db(3),o.nc("disabled",1==t.isEndPage)}}function O(t,n){if(1&t){const t=o.Wb();o.Vb(0,"azt-dialog-confirm",25),o.cc("sendEvent",function(n){return o.Dc(t),o.gc().eventDialog(n)}),o.Ub()}if(2&t){const t=o.gc();o.nc("data",t.dataConfirm)}}let C=(()=>{class t{constructor(t,n,e,o,i,a,c){this.activeRoute=t,this.commonService=n,this.apiService=e,this.router=o,this.fb=i,this.vps=a,this.localStorageObjetct=c,this.isLoading=!1,this.ObjsInDashboardData=[],this.page=1,this.isEndPage=0,this.showConfirm=!1,this.dataConfirm={}}handleClick(t){this.commonService.myNavigation("/admin/teacher-qa/view-question/"+t)}PrevPaging(){1!=this.page&&(this.page--,this.getObjsData())}NextPaging(){0==this.isEndPage&&(this.page++,this.getObjsData())}getObjsData(){this.isLoading=!0,this.apiService.getTeacherQuestionDashboard(this.page).subscribe(t=>{1==t.success?(this.ObjsInDashboardData=t.data,this.isEndPage=t.data.isEndPage,this.isLoading=!1,this.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetObjsInDashboard"),this.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetAnswerObjs")):this.commonService.snackError("L\u1ed7i: Kh\xf4ng l\u1ea5y \u0111\u01b0\u1ee3c danh s\xe1ch c\xe2u h\u1ecfi","\u0110\xf3ng")})}setDataConfirm(t,n){this.dataConfirm={id:t,title:n},this.showConfirm=!0}TeacherQuestionDeleteObj(){this.isLoading=!0,this.apiService.TeacherQuestionDeleteObj(this.dataConfirm.id).subscribe(t=>{1==t.success?(this.commonService.snackSuccess("X\xf3a c\xe2u h\u1ecfi th\xe0nh c\xf4ng",""),this.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetObjsInDashboard"),this.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetAnswerObjs"),this.getObjsData(),this.showConfirm=!1):this.commonService.snackError("X\xf3a c\xe2u h\u1ecfi kh\xf4ng th\xe0nh c\xf4ng","\u0110\xf3ng"),this.isLoading=!1})}eventDialog(t){"delete"==t?this.TeacherQuestionDeleteObj():"cancel"==t&&(this.dataConfirm={},this.showConfirm=!1)}calculationTime(t){var n=new Date;return this.commonService.calculationTime(t,n)}goToScreenQuestionOfStudent(){this.commonService.myNavigation("/admin/teacher-qa/list-questions")}ngOnInit(){this.getObjsData()}}return t.\u0275fac=function(n){return new(n||t)(o.Pb(i.a),o.Pb(a.a),o.Pb(c.a),o.Pb(i.a),o.Pb(s.g),o.Pb(r.w),o.Pb(l.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["azt-list-questions"]],inputs:{screen:"screen"},decls:9,vars:4,consts:[[1,"content","mb-5"],[1,"content-list-view"],["class","d-flex justify-content-center mt-3 h-block",4,"ngIf","ngIfElse"],["doneLoading",""],["class","block-bottom",4,"ngIf"],[3,"data","sendEvent",4,"ngIf"],[1,"d-flex","justify-content-center","mt-3","h-block"],["role","status",1,"spinner-border","text-secondary"],[1,"sr-only"],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","view-single view-none row justify-content-center ml-0 mr-0 mb-2",4,"ngIf"],[1,"view-single","clickable","mb-2"],[2,"width","100%",3,"click"],[1,"mb-0",2,"font-family","'Arial Bold', 'Arial'","font-weight","700","font-style","normal"],[1,"mb-0",2,"color","#8E8E8E"],[1,"mb-0"],[2,"width","75px","display","grid","align-items","center","justify-content","center"],[3,"click",4,"ngIf"],[2,"position","absolute","top","0","right","0","font-size","20px","height","20px","width","20px",3,"click"],[3,"click"],[1,"view-single","view-none","row","justify-content-center","ml-0","mr-0","mb-2"],[2,"font-size","20","font-weight","500"],[1,"block-bottom"],["mat-button","",1,"btn","btn-more",3,"disabled","click"],[3,"data","sendEvent"]],template:function(t,n){if(1&t&&(o.Vb(0,"div",0),o.Vb(1,"div",1),o.Vb(2,"p"),o.Rc(3,"H\u1eccC SINH H\u1eceI B\u1ea0N"),o.Ub(),o.Pc(4,h,4,0,"div",2),o.Pc(5,v,1,1,"ng-template",null,3,o.Qc),o.Ub(),o.Pc(7,P,7,2,"div",4),o.Ub(),o.Pc(8,O,1,1,"azt-dialog-confirm",5)),2&t){const t=o.zc(6);o.Db(4),o.nc("ngIf",n.isLoading)("ngIfElse",t),o.Db(3),o.nc("ngIf",!(1==n.isEndPage&&1==n.page)),o.Db(1),o.nc("ngIf",n.showConfirm)}},directives:[r.m,r.l,b.a,d.a,g.a],styles:[".content[_ngcontent-%COMP%]{padding:15px;margin-top:20px!important;margin:auto;min-width:280px;height:467px;background:inherit;background-color:#ececec;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.14);position:relative}.h-block[_ngcontent-%COMP%]{height:380px;align-items:center}.content-header[_ngcontent-%COMP%]{text-align:center}.content-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:40px}.content-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .content-list-view[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{max-width:270px;background:inherit;background-color:#169bd5;border:none;border-radius:5px;color:#fff;font-weight:500}.view-single[_ngcontent-%COMP%]{position:relative;padding:10px 15px;background:inherit;background-color:#fff;box-sizing:border-box;border:1px solid #ececec;border-radius:5px;box-shadow:none;font-style:normal;font-size:12px;color:#494949;display:flex;justify-content:space-between}.view-none[_ngcontent-%COMP%]{background:transparent;height:380px;display:flex;justify-content:center;align-items:center;font-size:15px}.btn-more[_ngcontent-%COMP%]{text-transform:uppercase;color:#000;font-size:14px;border-radius:5px;transition:all .5s;margin:0 2px}.btn-more[_ngcontent-%COMP%]:hover{background:#e6e2e2}.block-bottom[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:10px;position:absolute;bottom:5px;left:50%;transform:translateX(-50%)}"]}),t})()},MDNF:function(t,n,e){"use strict";e.d(n,"a",function(){return u});var o=e("fXoL"),i=e("3Pt+"),a=e("quSY"),c=e("tyNb"),s=e("gbi4"),r=e("Avyq"),l=e("yTNM"),b=e("ofXK"),d=e("Qu3c");function g(t,n){if(1&t){const t=o.Wb();o.Vb(0,"div",7),o.Vb(1,"div",8),o.cc("click",function(){o.Dc(t);const e=n.$implicit;return o.gc(2).selectedClass(e)}),o.Vb(2,"div",3),o.Vb(3,"p",9),o.Rc(4),o.hc(5,"slice"),o.Ub(),o.Ub(),o.Ub(),o.Ub()}if(2&t){const t=n.$implicit;o.Db(3),o.oc("matTooltip",t.name.length>30?t.name:""),o.Db(1),o.Sc(t.name.length>30?o.kc(5,2,t.name,0,28)+"..":t.name)}}function h(t,n){if(1&t&&(o.Vb(0,"div"),o.Vb(1,"div",3),o.Vb(2,"p",4),o.Rc(3," Ch\u1ecdn l\u1edbp "),o.Ub(),o.Ub(),o.Vb(4,"div",5),o.Pc(5,g,6,6,"div",6),o.Ub(),o.Ub()),2&t){const t=o.gc();o.Db(5),o.nc("ngForOf",t.classList)}}function m(t,n){1&t&&(o.Vb(0,"div",10),o.Vb(1,"span"),o.Rc(2," L\u1edbp \u0111\u01b0\u1ee3c giao \u0111\u1ec1 \u0111\xe3 b\u1ecb x\xf3a, vui l\xf2ng li\xean h\u1ec7 gi\xe1o vi\xean \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3! "),o.Ub(),o.Ub())}const f=function(t,n){return{margin_question_bar_40:t,margin_question_bar_60:n}};let u=(()=>{class t{constructor(t,n,e,c,s,r){this.fb=t,this.activeRoute=n,this.router=e,this.commonService=c,this.localize=s,this.apiService=r,this.isSearchTeacher=!1,this.isMobile=!1,this.selectClassroom=new o.o,this.approvedByName=new o.o,this.subscriptions=new a.a,this.formName=new i.k({}),this.status_obj={loading:!1,error:!1,error_obj:{message:""}},this.classList=[],this.classObj={}}approvedToClass(){var t=this.getFormObj(this.formName);this.approvedByName.emit({nameEmit:t.fullName,classId:this.classObj.id})}selectedClass(t){this.selectClassroom.emit({classObj:t,type:1})}getError(t){return!(!this.formName.controls[t]||!this.formName.controls[t].errors)&&this.formName.controls[t].errors}getErrorType(t,n){return!!(this.formName.controls[t]&&this.formName.controls[t].errors&&this.formName.controls[t].errors[n])&&this.formName.controls[t].errors[n]}getFormObj(t){var n=t.value;for(var e in n)n[e]=t.get(e).value;return n}isEmpty(t){for(var n in t)if(t.hasOwnProperty(n))return!1;return!0}ngOnChanges(){this.dataClass&&this.dataClass.length>0&&(this.classList=this.dataClass)}ngOnInit(){this.formName=this.fb.group({fullName:new i.h("",[i.z.required])}),this.dataClass&&this.dataClass.length>0&&(this.classList=this.dataClass)}ngOnDestroy(){this.subscriptions.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(o.Pb(i.g),o.Pb(c.a),o.Pb(c.i),o.Pb(s.a),o.Pb(r.e),o.Pb(l.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-select-classes"]],inputs:{dataClass:"dataClass",isSearchTeacher:"isSearchTeacher",isMobile:"isMobile"},outputs:{selectClassroom:"selectClassroom",approvedByName:"approvedByName"},features:[o.Bb],decls:4,vars:6,consts:[[1,"container",3,"ngClass"],[4,"ngIf","ngIfElse"],["NoClassData",""],[1,"text-center"],[1,"title"],[1,"row","ml-0","mr-0","pl-0","pr-0"],["class","col-12 col-sm-12 col-md-4 col-lg-3 mb-2",4,"ngFor","ngForOf"],[1,"col-12","col-sm-12","col-md-4","col-lg-3","mb-2"],[1,"card","pt-3","pb-3","pl-2","pr-1","clickable","select_class",3,"click"],[1,"h5","mb-1","card-title","text-white",3,"matTooltip"],[1,"alert","alert-danger"]],template:function(t,n){if(1&t&&(o.Vb(0,"div",0),o.Pc(1,h,6,1,"div",1),o.Pc(2,m,3,0,"ng-template",null,2,o.Qc),o.Ub()),2&t){const t=o.zc(3);o.nc("ngClass",o.tc(3,f,!n.isSearchTeacher&&!n.isMobile,!n.isSearchTeacher&&n.isMobile)),o.Db(1),o.nc("ngIf",n.classList&&n.classList.length>0)("ngIfElse",t)}},directives:[b.k,b.m,b.l,d.a],pipes:[b.u],styles:[".margin_question_bar_40[_ngcontent-%COMP%]{margin-top:calc(2rem + 40px)!important}.margin_question_bar_60[_ngcontent-%COMP%]{margin-top:calc(2rem + 60px)!important}.student_obj[_ngcontent-%COMP%]{padding:5px;min-height:69px}.select_class[_ngcontent-%COMP%]{background:inherit;background-color:#3c8dbc;box-sizing:border-box;border-radius:5px;box-shadow:none;color:#fff}.isSelected[_ngcontent-%COMP%]{border:2px solid #004f7b}.isDisabled[_ngcontent-%COMP%]{opacity:.6}.title[_ngcontent-%COMP%]{color:#000;font-size:20px;margin-bottom:15px}"]}),t})()},RgyD:function(t,n,e){"use strict";e.d(n,"a",function(){return s});var o=e("fXoL"),i=e("gbi4"),a=e("yTNM"),c=e("tk/3");let s=(()=>{class t{constructor(t,n,e){this.commonService=t,this.apiService=n,this.http=e,this.fillColor=(t,n,e,o,i,a)=>{n.fillStyle=t,n.fillRect(Math.round(e),Math.round(o),Math.round(i),Math.round(a))},this.drawRect=(t,n,e,o,i,a)=>{n.beginPath(),n.lineWidth=1,n.strokeStyle=t,n.rect(Math.round(e),Math.round(o),Math.round(i),Math.round(a)),n.stroke()},this.getSingleImgData=(t,n)=>{if(t.inactive)throw this.commonService.snackError("Kh\xf4ng x\xe1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c v\xf9ng th\xf4ng tin",""),new Error("Kh\xf4ng x\xe1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c v\xf9ng th\xf4ng tin");try{let e=document.createElement("canvas");e.width=0==t.width?2:Math.round(t.width),e.height=0==t.heigh?2:Math.round(t.heigh);let o=e.getContext("2d");return null==o||o.drawImage(n[t.pageIndex].canvas,Math.round(t.left),Math.round(t.top),e.width,e.height,0,0,e.width,e.height),e.toDataURL("image/png")}catch(e){return console.log(e),"https://via.placeholder.com/300"}},this.getScatteredImgData=(t,n)=>{const e=t.filter(t=>!t.inactive);if(t.filter(t=>t.inactive).length==t.length)throw this.commonService.snackError("Kh\xf4ng x\xe1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c v\xf9ng th\xf4ng tin",""),new Error("Kh\xf4ng x\xe1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c v\xf9ng th\xf4ng tin");try{let t=document.createElement("canvas"),o=e.map(t=>t.width);t.width=Math.round(Math.max(...o));let i=0;for(let n=0;n<e.length;n++)i+=e[n].heigh;t.height=Math.round(i);let a=t.getContext("2d");for(let c=0;c<e.length;c++)0==c?null==a||a.drawImage(n[e[c].pageIndex].canvas,Math.round(e[c].left),Math.round(e[c].top),Math.round(e[c].width),Math.round(e[c].heigh),0,0,Math.round(e[c].width),Math.round(e[c].heigh)):null==a||a.drawImage(n[e[c].pageIndex].canvas,Math.round(e[c].left),Math.round(e[c].top),Math.round(e[c].width),Math.round(e[c].heigh),0,this.sumHighTo(c,e),Math.round(e[c].width),Math.round(e[c].heigh));return t.toDataURL("image/png")}catch(o){return console.log(o),"https://via.placeholder.com/300"}}}getErrorQtns(t){var n=[];for(let e=0;e<t.length;e++)t[e].isGroup||0!=t[e].answers.length||n.push(t[e].num);return n}sumHighTo(t,n){let e=0,o=n.filter(t=>!t.inactive);for(let i=0;i<t;i++)e+=Math.round(o[i].heigh);return e}maxWidthTo(t,n){let e=[],o=n.filter(t=>!t.inactive);for(let i=0;i<t;i++)e.push(o[i].width);return Math.round(Math.max(...e))}}return t.\u0275fac=function(n){return new(n||t)(o.Zb(i.a),o.Zb(a.a),o.Zb(c.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},VcHj:function(t,n,e){"use strict";e.d(n,"a",function(){return y});var o=e("quSY"),i=e("fXoL"),a=e("tyNb"),c=e("gbi4"),s=e("yTNM"),r=e("ofXK"),l=e("Qu3c"),b=e("IU+r"),d=e("loSA");function g(t,n){if(1&t&&(i.Vb(0,"div",14),i.Qb(1,"azt-create-avatar",15),i.Ub()),2&t){const t=i.gc(2);i.qc("matTooltip","",1==t.data.teacherObj.gender?"Th\u1ea7y ":"C\xf4 "," ",t.data.teacherObj.fullName,""),i.Db(1),i.nc("nameCreateAvatar",t.data.teacherObj.fullName)("size",25)("linkAvatar",t.data.teacherObj.avatar)}}function h(t,n){if(1&t&&(i.Vb(0,"span",16),i.Rc(1),i.Ub()),2&t){const t=i.gc(2);i.Db(1),i.Tc("",t.data.attended," l\u01b0\u1ee3t l\xe0m \u0111\u1ec1")}}function m(t,n){if(1&t&&(i.Vb(0,"span",16),i.Rc(1),i.Ub()),2&t){const t=i.gc(2);i.Db(1),i.Tc("",t.data.totalPeopleAsk," ng\u01b0\u1eddi h\u1ecfi")}}function f(t,n){if(1&t&&(i.Vb(0,"span"),i.Vb(1,"span",17),i.Rc(2,"\u0110i\u1ec3m c\u1ee7a b\u1ea1n: "),i.Qb(3,"azt-check-mark",18),i.Ub(),i.Ub()),2&t){const t=i.gc(3);i.Db(3),i.nc("mark",t.data.examResultObj.mark)}}function u(t,n){if(1&t&&(i.Vb(0,"span",17),i.Rc(1,"\u0110i\u1ec3m c\u1ee7a b\u1ea1n: "),i.Vb(2,"span"),i.Rc(3),i.Ub(),i.Ub()),2&t){const t=i.gc(4);i.Db(3),i.Sc(t.data.examResultObj.mark)}}function p(t,n){if(1&t&&(i.Vb(0,"span"),i.Pc(1,u,4,1,"span",19),i.Ub()),2&t){const t=i.gc(3);i.Db(1),i.nc("ngIf",null!=t.data.examResultObj.confirmedAt)}}function x(t,n){if(1&t&&(i.Vb(0,"span"),i.Pc(1,f,4,1,"span",10),i.Pc(2,p,2,1,"span",10),i.Ub()),2&t){const t=i.gc(2);i.Db(1),i.nc("ngIf",1==t.data.examType||0==t.data.examType),i.Db(1),i.nc("ngIf",11==t.data.examType||10==t.data.examType||21==t.data.examType||20==t.data.examType)}}function v(t,n){if(1&t&&(i.Vb(0,"span",20),i.Rc(1),i.Ub()),2&t){const t=i.gc(2);i.Db(1),i.Tc("",t.data.price," azo")}}function P(t,n){if(1&t&&(i.Vb(0,"h3",21),i.Rc(1," Th\u1eddi gian v\xe0o thi:\xa0 "),i.Vb(2,"span",22),i.Rc(3),i.hc(4,"date"),i.hc(5,"date"),i.Ub(),i.Ub()),2&t){const t=i.gc(2);i.Db(2),i.nc("ngClass",-1==t.calculatorTime(t.data.startTime)?"text-danger":t.calculatorTime(t.data.startTime)<=1*t.secondOfDay&&t.calculatorTime(t.data.startTime)>0?"text-warning":""),i.Db(1),i.Uc("",i.jc(4,3,t.data.startTime,"dd/MM/yyyy HH:mm:ss")," -> ",i.jc(5,6,t.data.endTime,"dd/MM/yyyy HH:mm:ss"),"")}}function O(t,n){if(1&t&&(i.Vb(0,"h3",23),i.Rc(1," Thi tr\u01b0\u1edbc l\xfac:\xa0 "),i.Vb(2,"span"),i.Rc(3),i.hc(4,"date"),i.Ub(),i.Ub()),2&t){const t=i.gc(2);i.nc("ngClass",-1==t.calculatorTime(t.data.endTime)?"text-danger":t.calculatorTime(t.data.endTime)<=1*t.secondOfDay&&t.calculatorTime(t.data.endTime)>0?"text-warning":""),i.Db(3),i.Sc(i.jc(4,2,t.data.endTime,"dd/MM/yyyy HH:mm:ss"))}}function C(t,n){if(1&t&&(i.Vb(0,"h3",23),i.Rc(1," Th\u1eddi gian v\xe0o thi:\xa0 "),i.Vb(2,"span"),i.Rc(3),i.hc(4,"date"),i.Ub(),i.Ub()),2&t){const t=i.gc(2);i.nc("ngClass",-1==t.calculatorTime(t.data.startTime)?"text-danger":t.calculatorTime(t.data.startTime)<=1*t.secondOfDay&&t.calculatorTime(t.data.startTime)>0?"text-warning":""),i.Db(3),i.Sc(i.jc(4,2,t.data.startTime,"dd/MM/yyyy HH:mm:ss"))}}function M(t,n){1&t&&(i.Vb(0,"h3",21),i.Rc(1," Th\u1eddi gian v\xe0o thi:\xa0 "),i.Vb(2,"span"),i.Rc(3,"Kh\xf4ng th\u1eddi h\u1ea1n"),i.Ub(),i.Ub())}function w(t,n){if(1&t&&(i.Vb(0,"div",1),i.Vb(1,"div",2),i.Qb(2,"img",3),i.Ub(),i.Vb(3,"div",4),i.Vb(4,"div",5),i.Vb(5,"h3",6),i.Rc(6),i.Ub(),i.Pc(7,g,2,5,"div",7),i.Ub(),i.Vb(8,"p",8),i.Pc(9,h,2,1,"span",9),i.Pc(10,m,2,1,"span",9),i.Pc(11,x,3,2,"span",10),i.Ub(),i.Pc(12,v,2,1,"span",11),i.Pc(13,P,6,9,"h3",12),i.Pc(14,O,5,5,"h3",13),i.Pc(15,C,5,5,"h3",13),i.Pc(16,M,4,0,"h3",12),i.Ub(),i.Ub()),2&t){const t=i.gc();i.Db(6),i.Sc(t.data.name),i.Db(1),i.nc("ngIf",t.data.teacherObj),i.Db(2),i.nc("ngIf",null!=t.data.attended),i.Db(1),i.nc("ngIf",null!=t.data.totalPeopleAsk),i.Db(1),i.nc("ngIf",null!=t.data.examResultObj),i.Db(1),i.nc("ngIf",t.data.price>0),i.Db(1),i.nc("ngIf",t.data.startTime&&t.data.endTime),i.Db(1),i.nc("ngIf",!t.data.startTime&&t.data.endTime),i.Db(1),i.nc("ngIf",t.data.startTime&&!t.data.endTime),i.Db(1),i.nc("ngIf",!t.data.startTime&&!t.data.endTime)}}let y=(()=>{class t{constructor(t,n,e,i){this.activeRoute=t,this.commonService=n,this.apiService=e,this.router=i,this.type=1,this.subscriptions=new o.a,this.secondOfDay=86400}calculatorTime(t){return this.commonService.calculationHomeworkTime(t)}convertSecondToHour(t){return this.commonService.convertHMS(t)}ngOnInit(){}ngOnDestroy(){this.subscriptions.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(i.Pb(a.a),i.Pb(c.a),i.Pb(s.a),i.Pb(a.i))},t.\u0275cmp=i.Jb({type:t,selectors:[["azt-block-exam"]],inputs:{data:"data",type:"type"},decls:1,vars:1,consts:[["class","block-body link-text mt-3",4,"ngIf"],[1,"block-body","link-text","mt-3"],[1,"block-body-status"],["src","https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/images/u416.svg","alt","",2,"height","60px"],[1,"block-body-content"],[1,"d-flex","align-items-center"],[1,"content-title"],["class","block-avatar-share",3,"matTooltip",4,"ngIf"],[1,"content-desc","mb-0"],["class","text-count",4,"ngIf"],[4,"ngIf"],["class","coin-azo",4,"ngIf"],["class","content-deadline",4,"ngIf"],["class","content-deadline",3,"ngClass",4,"ngIf"],[1,"block-avatar-share",3,"matTooltip"],[2,"cursor","pointer",3,"nameCreateAvatar","size","linkAvatar"],[1,"text-count"],[1,"text-mark","mb-0"],[3,"mark"],["class","text-mark mb-0",4,"ngIf"],[1,"coin-azo"],[1,"content-deadline"],[3,"ngClass"],[1,"content-deadline",3,"ngClass"]],template:function(t,n){1&t&&i.Pc(0,w,17,10,"div",0),2&t&&i.nc("ngIf",n.data)},directives:[r.m,l.a,b.a,d.a,r.k],pipes:[r.e],styles:["a[_ngcontent-%COMP%]:hover{text-decoration:none}.app[_ngcontent-%COMP%]{overflow-x:hidden}.color-gray[_ngcontent-%COMP%]{color:#918d8d!important}.box[_ngcontent-%COMP%]{background-color:#fff;border:1px solid hsla(0,0%,86.3%,.8);color:#222;text-align:center;transition:all .5s;display:flex;padding:6px 1px 1px;justify-content:center;align-items:center;border-radius:5px!important}.box[_ngcontent-%COMP%]:hover{box-shadow:10px 10px 20px rgba(0,0,0,.07),-10px -10px 20px hsla(0,0%,100%,.8)}.box-icon[_ngcontent-%COMP%]{font-size:16px;margin-right:10px}.box-icon-upload[_ngcontent-%COMP%]{color:#00a7d0}.box-icon-search[_ngcontent-%COMP%]{color:#bf3232}.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:45px;width:45px}.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:45px}.box-text[_ngcontent-%COMP%]{font-size:17px}.box-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px}.box-active[_ngcontent-%COMP%]{background-color:#f1f1f1;box-shadow:10px 10px 20px rgba(0,0,0,.07),-10px -10px 20px hsla(0,0%,100%,.8);font-weight:500}.bg-block-list[_ngcontent-%COMP%]{background:#ececec;padding:10px 20px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:5px}.block-list-bottom[_ngcontent-%COMP%]{margin:10px 0}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]{border:none;display:flex;align-items:center;color:#707070;background:transparent;transition:all .3s}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:hover{color:#222}.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%]{text-transform:none;margin-left:2px}.mta-15[_ngcontent-%COMP%]{margin-top:-15px}.panel-custom[_ngcontent-%COMP%]{margin:1rem 0!important;background:#ececec}.text-mark[_ngcontent-%COMP%]{display:block;margin-top:5px;color:#0eafc0}.block[_ngcontent-%COMP%]{margin:40px 0}.block[_ngcontent-%COMP%]:first-child{margin-top:25px}.block-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;position:relative}.block-body[_ngcontent-%COMP%]{cursor:pointer;display:flex;background:#fff;border-radius:3px;margin-top:20px;width:100%;min-height:95px;overflow-x:hidden}.block-body-status[_ngcontent-%COMP%]{align-items:center;border-top-left-radius:3px;border-bottom-left-radius:3px;color:#fff;width:90px;font-weight:500;text-align:center}.block-body-content[_ngcontent-%COMP%], .block-body-status[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px}.block-body-content[_ngcontent-%COMP%]{max-width:70%;flex-direction:column}.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{font-weight:500;margin-bottom:2px;font-size:14px;color:#000}.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0}.block-body-content[_ngcontent-%COMP%]   .content-desc[_ngcontent-%COMP%]{margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#000}.block-body-content[_ngcontent-%COMP%]   .content-deadline[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;color:#000}.block-body-content[_ngcontent-%COMP%]   .content-deadline[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0}.heading[_ngcontent-%COMP%]{display:flex;align-items:center}.heading-title[_ngcontent-%COMP%]{margin-bottom:0;font-weight:500;font-size:16px;margin-right:15px}.heading-text[_ngcontent-%COMP%]{margin-bottom:0;font-size:14px;overflow:hidden;max-width:90%;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.block-avatar[_ngcontent-%COMP%]{margin-right:15px;width:30px;height:30px}.block-avatar-share[_ngcontent-%COMP%]{width:25px;height:25px;margin-left:10px}.image[_ngcontent-%COMP%]{border-radius:50px!important;width:100%}.block[_ngcontent-%COMP%]:first-child{margin-top:20px}.block-header-left[_ngcontent-%COMP%]{display:flex;align-items:center}.class-visible[_ngcontent-%COMP%]{visibility:hidden;opacity:0}.no-active[_ngcontent-%COMP%]{background:#e0e0e0}.block-else[_ngcontent-%COMP%]{height:90px;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:5px}.btn-all[_ngcontent-%COMP%], .text-else[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.btn-all[_ngcontent-%COMP%]{text-transform:inherit;color:#0eafc0;position:absolute;top:-3px;right:0}.block-avatar-info[_ngcontent-%COMP%], .block-header-info[_ngcontent-%COMP%]{display:flex;align-items:center}@media (max-width:768px){.block-avatar-info[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.heading-text[_ngcontent-%COMP%]{max-width:200px}.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:24px;width:24px}.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:35px}.block-body-status[_ngcontent-%COMP%]{width:90px}}"]}),t})()},YTzd:function(t,n,e){"use strict";e.d(n,"a",function(){return h});var o=e("fXoL"),i=e("3Pt+"),a=e("quSY"),c=e("tyNb"),s=e("gbi4"),r=e("Avyq"),l=e("yTNM"),b=e("ofXK"),d=e("bTqV");function g(t,n){if(1&t){const t=o.Wb();o.Vb(0,"div",1),o.Vb(1,"div",2),o.Vb(2,"div",3),o.Vb(3,"p",4),o.Rc(4," H\u1ecdc sinh "),o.Vb(5,"b"),o.Rc(6),o.Ub(),o.Rc(7),o.Vb(8,"b"),o.Rc(9),o.Ub(),o.Rc(10,". N\u1ebfu b\u1ea1n v\u1eabn ch\u1eafc ch\u1eafn \u0111\xf3 \u0111\xfang l\xe0 t\xean b\u1ea1n, vui l\xf2ng b\u1ea5m n\xfat "),o.Vb(11,"b"),o.Rc(12,'"B\xe1o gi\xe1o vi\xean"'),o.Ub(),o.Rc(13," \u0111\u1ec3 gi\xe1o vi\xean ki\u1ec3m tra l\u1ea1i. "),o.Ub(),o.Ub(),o.Vb(14,"div",5),o.Vb(15,"button",6),o.cc("click",function(){return o.Dc(t),o.gc().sendRequest()}),o.Rc(16," B\xe1o gi\xe1o vi\xean "),o.Ub(),o.Vb(17,"div",7),o.Vb(18,"button",8),o.cc("click",function(){return o.Dc(t),o.gc().btnCloseDialog(!1)}),o.Rc(19," H\u1ee7y "),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub()}if(2&t){const t=o.gc();o.Db(6),o.Sc(t.studentObj.fullName),o.Db(1),o.Tc(" \u0111\xe3 \u0111\u01b0\u1ee3c ch\u1ecdn b\u1edfi T\xe0i kho\u1ea3n v\u1edbi ",""!=t.studentObj.last4DigitPhone?"\u0111u\xf4i s\u1ed1 \u0110T - xxx xxx":"v\u1edbi t\xean Zalo - "," "),o.Db(2),o.Sc(""!=t.studentObj.last4DigitPhone?t.studentObj.last4DigitPhone:t.studentObj.zaloName)}}let h=(()=>{class t{constructor(t,n,e,c,s,r){this.fb=t,this.activeRoute=n,this.router=e,this.commonService=c,this.localize=s,this.apiService=r,this.isMobile=!1,this.closeDialog=new o.o,this.confirmSend=new o.o,this.subscriptions=new a.a,this.formName=new i.k({}),this.status_obj={loading:!1,error:!1,error_obj:{message:""}},this.studentObjs=[],this.studentObj={}}sendRequest(){this.status_obj={loading:!0,error:!1,error_obj:{message:""}},this.apiService.sendRequestReApprove(this.data.classId,this.data.studentObj.id?this.data.studentObj.id:0).subscribe(t=>{this.confirmSend.emit(1==t.success)})}getError(t){return!(!this.formName.controls[t]||!this.formName.controls[t].errors)&&this.formName.controls[t].errors}getErrorType(t,n){return!!(this.formName.controls[t]&&this.formName.controls[t].errors&&this.formName.controls[t].errors[n])&&this.formName.controls[t].errors[n]}getFormObj(t){var n=t.value;for(var e in n)n[e]=t.get(e).value;return n}isEmpty(t){for(var n in t)if(t.hasOwnProperty(n))return!1;return!0}btnCloseDialog(t){this.closeDialog.emit(t)}goToLogin(){this.commonService.redirectToLoginBackLinkWithFromRegister(""+this.router.url)}ngOnChanges(){this.data.studentObj&&(this.studentObj=this.data.studentObj)}ngOnInit(){this.data.studentObj&&(this.studentObj=this.data.studentObj)}ngOnDestroy(){this.subscriptions.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(o.Pb(i.g),o.Pb(c.a),o.Pb(c.i),o.Pb(s.a),o.Pb(r.e),o.Pb(l.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-send-request"]],inputs:{data:"data",isMobile:"isMobile",back_link:"back_link"},outputs:{closeDialog:"closeDialog",confirmSend:"confirmSend"},features:[o.Bb],decls:1,vars:1,consts:[["class","school-info_bg",4,"ngIf"],[1,"school-info_bg"],[1,"school-info","p-4"],[1,"text-center"],[1,"h5","para_respon","font-weight-normal"],[1,"d-flex","justify-content-center","mt-3"],["mat-raised-button","","color","primary",3,"click"],[1,"azt-block-button",2,"margin-left","15px"],["mat-raised-button","",3,"click"]],template:function(t,n){1&t&&o.Pc(0,g,20,3,"div",0),2&t&&o.nc("ngIf",n.data.isShow)},directives:[b.m,d.b],styles:[".school-info_bg[_ngcontent-%COMP%]{z-index:9990;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;background:rgba(0,0,0,.5607843137254902);min-height:100vh}.school-info[_ngcontent-%COMP%]{z-index:9990;top:50%;left:50%;min-width:30%;transform:translate(-50%,-50%);position:fixed;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px rgba(0,0,0,.58)}.close-btn[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-7px;padding:5px 10px;background:#dadada;cursor:pointer;border-radius:20px}.note[_ngcontent-%COMP%]{font-style:italic;font-size:15px;font-weight:600}@media only screen and (max-width:1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:95%}}"]}),t})()},caLj:function(t,n,e){"use strict";e.d(n,"a",function(){return s});var o=e("fXoL"),i=e("ofXK"),a=e("bTqV");function c(t,n){if(1&t){const t=o.Wb();o.Vb(0,"div",1),o.Vb(1,"div",2),o.Vb(2,"div",3),o.Qb(3,"div",4),o.Ub(),o.Vb(4,"div",5),o.Vb(5,"div",6),o.Vb(6,"button",7),o.cc("click",function(){return o.Dc(t),o.gc().btnCloseDialog(!1)}),o.Rc(7," \u0110\xf3ng "),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub()}if(2&t){const t=o.gc();o.Db(3),o.nc("innerHtml",t.data.content,o.Ec)}}let s=(()=>{class t{constructor(){this.closeDialog=new o.o}btnCloseDialog(t){t?this.closeDialog.emit(t):this.closeDialog.emit()}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["azt-dialog-warning"]],inputs:{data:"data"},outputs:{closeDialog:"closeDialog"},decls:1,vars:1,consts:[["class","school-info_bg",4,"ngIf"],[1,"school-info_bg"],[1,"school-info","p-4"],[1,"text-left"],[3,"innerHtml"],[1,"d-flex","float-right","mt-3"],[1,"azt-block-button"],["mat-raised-button","",3,"click"]],template:function(t,n){1&t&&o.Pc(0,c,8,1,"div",0),2&t&&o.nc("ngIf",n.data.isShow)},directives:[i.m,a.b],styles:[".school-info_bg[_ngcontent-%COMP%]{z-index:1000;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;min-height:100vh;background-color:rgba(60,60,60,.5)}.school-info[_ngcontent-%COMP%]{z-index:1001;top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;max-width:600px;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px rgba(0,0,0,.58)}@media only screen and (max-width:1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:800px}}@media only screen and (max-width:768px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:700px}}@media only screen and (max-width:576px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:400px}}@media only screen and (max-width:380px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:300px}}@media only screen and (max-width:290px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:250px}}"]}),t})()}}]);