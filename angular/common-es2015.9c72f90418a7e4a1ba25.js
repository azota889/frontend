(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{AWii:function(t,n,e){"use strict";e.d(n,"a",function(){return k});var o=e("gm2p"),i=e("fXoL"),a=e("oUVn"),c=e("KVcZ"),s=e("0pw4"),r=e("k9IB"),l=e("ofXK"),b=e("NFeN"),d=e("Qu3c"),g=e("bTqV"),h=e("wPhD");function u(t,n){1&t&&(i.Vb(0,"div",6),i.Vb(1,"div",7),i.Vb(2,"span",8),i.Tc(3,"Loading..."),i.Ub(),i.Ub(),i.Ub())}function p(t,n){if(1&t){const t=i.Wb();i.Vb(0,"button",20),i.cc("click",function(){i.Ec(t);const n=i.gc().$implicit;return i.gc(3).handleClick(n.id?n.id:0)}),i.Tc(1,"Tr\u1ea3 l\u1eddi"),i.Ub()}}function f(t,n){1&t&&(i.Vb(0,"div"),i.Tc(1,"\u0110\xe3 tr\u1ea3 l\u1eddi"),i.Ub())}function m(t,n){if(1&t){const t=i.Wb();i.Vb(0,"div"),i.Vb(1,"div",12),i.Vb(2,"div",13),i.cc("click",function(){i.Ec(t);const e=n.$implicit;return i.gc(3).handleClick(e.id?e.id:0)}),i.Vb(3,"p",14),i.Tc(4),i.Ub(),i.Vb(5,"p",15),i.Tc(6),i.Ub(),i.Vb(7,"p",16),i.Tc(8),i.Ub(),i.Ub(),i.Vb(9,"div",17),i.Rc(10,p,2,0,"button",18),i.Rc(11,f,2,0,"div",9),i.Ub(),i.Vb(12,"mat-icon",19),i.cc("click",function(){i.Ec(t);const e=n.$implicit;return i.gc(3).setDataConfirm(e.id?e.id:0,e.title?e.title:"")}),i.Tc(13,"clear"),i.Ub(),i.Ub(),i.Ub()}if(2&t){const t=n.$implicit,e=i.gc(3);i.Db(4),i.Vc(" ",t.title," "),i.Db(2),i.Vc("",e.calculationTime(t.createdAt)," tr\u01b0\u1edbc"),i.Db(2),i.Vc("",t.totalPeopleAsk," h\u1ecdc sinh h\u1ecfi"),i.Db(2),i.nc("ngIf",0==t.isAnswered),i.Db(1),i.nc("ngIf",0!=t.isAnswered)}}function x(t,n){1&t&&(i.Vb(0,"div",21),i.Vb(1,"div",22),i.Tc(2,"Danh s\xe1ch tr\u1ed1ng"),i.Ub(),i.Ub())}function O(t,n){if(1&t&&(i.Vb(0,"div"),i.Rc(1,m,14,5,"div",10),i.Rc(2,x,3,0,"div",11),i.Ub()),2&t){const t=i.gc(2);i.Db(1),i.nc("ngForOf",t.ObjsInDashboardData.objs),i.Db(1),i.nc("ngIf",0==t.ObjsInDashboardData.objs.length)}}function v(t,n){if(1&t&&i.Rc(0,O,3,2,"div",9),2&t){const t=i.gc();i.nc("ngIf",t.ObjsInDashboardData&&t.ObjsInDashboardData.objs)}}function C(t,n){if(1&t){const t=i.Wb();i.Vb(0,"div",23),i.Vb(1,"a",24),i.cc("click",function(){return i.Ec(t),i.gc().PrevPaging()}),i.Vb(2,"mat-icon"),i.Tc(3,"arrow_back_ios"),i.Ub(),i.Ub(),i.Vb(4,"a",24),i.cc("click",function(){return i.Ec(t),i.gc().NextPaging()}),i.Vb(5,"mat-icon"),i.Tc(6,"arrow_forward_ios"),i.Ub(),i.Ub(),i.Ub()}if(2&t){const t=i.gc();i.Db(1),i.nc("disabled",1==t.page),i.Db(3),i.nc("disabled",1==t.isEndPage)}}function P(t,n){if(1&t){const t=i.Wb();i.Vb(0,"azt-dialog-confirm",25),i.cc("sendEvent",function(n){return i.Ec(t),i.gc().eventDialog(n)}),i.Ub()}if(2&t){const t=i.gc();i.nc("data",t.dataConfirm)}}let k=(()=>{class t extends o.a{constructor(t,n,e,o){super(t),this.commonService=t,this.teacherQuestionService=n,this.localStorageObjetct=e,this.timeService=o,this.ObjsInDashboardData={},this.page=1,this.isEndPage=0,this.showConfirm=!1,this.dataConfirm={id:0,title:""}}handleClick(t){this.commonService.myNavigation("/admin/teacher-qa/view-question/"+t)}PrevPaging(){1!=this.page&&(this.page--,this.getObjsData())}NextPaging(){0==this.isEndPage&&(this.page++,this.getObjsData())}getObjsData(){this.initStatusObj(),this.teacherQuestionService.apiTeacherQuestionGetObjsInDashboardGet(this.page).subscribe(t=>{var n,e,o;1==t.success?(this.ObjsInDashboardData=null!==(n=t.data)&&void 0!==n?n:{},this.isEndPage=null!==(o=null===(e=t.data)||void 0===e?void 0:e.isEndPage)&&void 0!==o?o:0,this.successStatusObj(),this.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetObjsInDashboard"),this.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetAnswerObjs")):this.showErrorSnack("L\u1ed7i: Kh\xf4ng l\u1ea5y \u0111\u01b0\u1ee3c danh s\xe1ch c\xe2u h\u1ecfi")})}setDataConfirm(t,n){this.dataConfirm={id:t,title:n},this.showConfirm=!0}TeacherQuestionDeleteObj(){var t;this.initStatusObj(),this.teacherQuestionService.apiTeacherQuestionDeleteObjGet(null!==(t=this.dataConfirm.id)&&void 0!==t?t:0).subscribe(t=>{1==t.success?(this.showSuccessSnack("X\xf3a c\xe2u h\u1ecfi th\xe0nh c\xf4ng"),this.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetObjsInDashboard"),this.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetAnswerObjs"),this.getObjsData(),this.showConfirm=!1):this.showErrorSnack("X\xf3a c\xe2u h\u1ecfi kh\xf4ng th\xe0nh c\xf4ng"),this.stopStatusObj()})}eventDialog(t){"delete"==t?this.TeacherQuestionDeleteObj():"cancel"==t&&(this.dataConfirm={id:0,title:""},this.showConfirm=!1)}calculationTime(t){var n=new Date;return this.timeService.calculationTime(t,n)}goToScreenQuestionOfStudent(){this.commonService.myNavigation("/admin/teacher-qa/list-questions")}ngOnInit(){this.getObjsData(),super.ngOnInit()}}return t.\u0275fac=function(n){return new(n||t)(i.Pb(a.a),i.Pb(c.e),i.Pb(s.a),i.Pb(r.a))},t.\u0275cmp=i.Jb({type:t,selectors:[["azt-list-questions"]],inputs:{screen:"screen"},features:[i.Ab],decls:9,vars:4,consts:[[1,"content","mb-5"],[1,"content-list-view"],["class","d-flex justify-content-center mt-3 h-block",4,"ngIf","ngIfElse"],["doneLoading",""],["class","block-bottom",4,"ngIf"],[3,"data","sendEvent",4,"ngIf"],[1,"d-flex","justify-content-center","mt-3","h-block"],["role","status",1,"spinner-border","text-secondary"],[1,"sr-only"],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","view-single view-none row justify-content-center ml-0 mr-0 mb-2",4,"ngIf"],[1,"view-single","clickable","mb-2"],[2,"width","100%",3,"click"],[1,"mb-0",2,"font-family","'Arial Bold', 'Arial'","font-weight","700","font-style","normal"],[1,"mb-0",2,"color","#8e8e8e"],[1,"mb-0"],[2,"width","75px","display","grid","align-items","center","justify-content","center"],[3,"click",4,"ngIf"],["matTooltip","X\xf3a c\xe2u h\u1ecfi",1,"btn-remove",2,"position","absolute","top","0","right","0","font-size","20px","height","20px","width","20px",3,"click"],[3,"click"],[1,"view-single","view-none","row","justify-content-center","ml-0","mr-0","mb-2"],[2,"font-size","20","font-weight","500"],[1,"block-bottom"],["mat-button","",1,"btn","btn-more",3,"disabled","click"],[3,"data","sendEvent"]],template:function(t,n){if(1&t&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.Vb(2,"p"),i.Tc(3,"H\u1eccC SINH H\u1eceI B\u1ea0N"),i.Ub(),i.Rc(4,u,4,0,"div",2),i.Rc(5,v,1,1,"ng-template",null,3,i.Sc),i.Ub(),i.Rc(7,C,7,2,"div",4),i.Ub(),i.Rc(8,P,1,1,"azt-dialog-confirm",5)),2&t){const t=i.Ac(6);i.Db(4),i.nc("ngIf",n.statusObj.loading)("ngIfElse",t),i.Db(3),i.nc("ngIf",!(1==n.isEndPage&&1==n.page)),i.Db(1),i.nc("ngIf",n.showConfirm)}},directives:[l.m,l.l,b.a,d.a,g.a,h.a],styles:[".content[_ngcontent-%COMP%]{padding:15px;margin-top:20px!important;margin:auto;min-width:280px;height:467px;background:inherit;background-color:#ececec;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.14);position:relative}.h-block[_ngcontent-%COMP%]{height:380px;align-items:center}.content-header[_ngcontent-%COMP%]{text-align:center}.content-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:40px}.content-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .content-list-view[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{max-width:270px;background:inherit;background-color:#169bd5;border:none;border-radius:5px;color:#fff;font-weight:500}.view-single[_ngcontent-%COMP%]{position:relative;padding:10px 15px;background:inherit;background-color:#fff;box-sizing:border-box;border:1px solid #ececec;border-radius:5px;box-shadow:none;font-style:normal;font-size:12px;color:#494949;display:flex;justify-content:space-between}.view-none[_ngcontent-%COMP%]{background:transparent;height:380px;display:flex;justify-content:center;align-items:center;font-size:15px}.btn-more[_ngcontent-%COMP%]{text-transform:uppercase;color:#000;font-size:14px;border-radius:5px;transition:all .5s;margin:0 2px}.btn-more[_ngcontent-%COMP%]:hover{background:#e6e2e2}.block-bottom[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:10px;position:absolute;bottom:5px;left:50%;transform:translateX(-50%)}.btn-remove[_ngcontent-%COMP%]{transition:all .5s;color:#605f5f}.btn-remove[_ngcontent-%COMP%]:hover{color:#000}"]}),t})()},MDNF:function(t,n,e){"use strict";e.d(n,"a",function(){return p});var o=e("fXoL"),i=e("3Pt+"),a=e("quSY"),c=e("gm2p"),s=e("atsk"),r=e("oUVn"),l=e("ofXK"),b=e("Qu3c");function d(t,n){if(1&t){const t=o.Wb();o.Vb(0,"div",7),o.Vb(1,"div",8),o.cc("click",function(){o.Ec(t);const e=n.$implicit;return o.gc(2).selectedClass(e)}),o.Vb(2,"div",3),o.Vb(3,"p",9),o.Tc(4),o.hc(5,"slice"),o.Ub(),o.Ub(),o.Ub(),o.Ub()}if(2&t){const t=n.$implicit;o.Db(3),o.oc("matTooltip",t.name&&t.name.length>30?t.name:""),o.Db(1),o.Uc(t.name&&t.name.length>30?o.kc(5,2,t.name,0,28)+"..":t.name)}}function g(t,n){if(1&t&&(o.Vb(0,"div"),o.Vb(1,"div",3),o.Vb(2,"p",4),o.Tc(3," Ch\u1ecdn l\u1edbp "),o.Ub(),o.Ub(),o.Vb(4,"div",5),o.Rc(5,d,6,6,"div",6),o.Ub(),o.Ub()),2&t){const t=o.gc();o.Db(5),o.nc("ngForOf",t.classList)}}function h(t,n){1&t&&(o.Vb(0,"div",10),o.Vb(1,"span"),o.Tc(2," \u0110\u1ec1 thi ch\u01b0a \u0111\u01b0\u1ee3c c\u1ea5u h\xecnh theo l\u1edbp, Vui l\xf2ng li\xean h\u1ec7 v\u1edbi gi\xe1o vi\xean "),o.Ub(),o.Ub())}const u=function(t,n){return{margin_question_bar_40:t,margin_question_bar_60:n}};let p=(()=>{class t extends c.a{constructor(t,n){super(n),this.fb=t,this.commonService=n,this.dataClass=[],this.isSearchTeacher=!1,this.isMobile=!1,this.selectClassroom=new o.o,this.approvedByName=new o.o,this.subscriptions=new a.a,this.formName=new i.k({}),this.classList=[],this.classObj={}}approvedToClass(){var t=this.commonService.getFormObj(this.formName);this.approvedByName.emit({nameEmit:t.fullName,classId:this.classObj.id})}selectedClass(t){this.selectClassroom.emit({classObj:t,type:1})}ngOnChanges(){this.dataClass&&this.dataClass.length>0&&(this.classList=this.dataClass)}ngOnInit(){this.formName=this.fb.group({fullName:new i.h("",[i.A.required,s.a.noWhiteSpace])}),this.dataClass&&this.dataClass.length>0&&(this.classList=this.dataClass),super.ngOnInit()}ngOnDestroy(){this.subscriptions.unsubscribe(),super.ngDestroy()}}return t.\u0275fac=function(n){return new(n||t)(o.Pb(i.g),o.Pb(r.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-select-classes"]],inputs:{dataClass:"dataClass",isSearchTeacher:"isSearchTeacher",isMobile:"isMobile"},outputs:{selectClassroom:"selectClassroom",approvedByName:"approvedByName"},features:[o.Ab,o.Bb],decls:4,vars:6,consts:[[1,"container",3,"ngClass"],[4,"ngIf","ngIfElse"],["NoClassData",""],[1,"text-center"],[1,"title"],[1,"row","ml-0","mr-0","pl-0","pr-0"],["class","col-12 col-sm-12 col-md-4 col-lg-3 mb-2",4,"ngFor","ngForOf"],[1,"col-12","col-sm-12","col-md-4","col-lg-3","mb-2"],[1,"card","pt-3","pb-3","pl-2","pr-1","clickable","select_class",3,"click"],[1,"h5","mb-1","card-title","text-white",3,"matTooltip"],[1,"alert","alert-danger"]],template:function(t,n){if(1&t&&(o.Vb(0,"div",0),o.Rc(1,g,6,1,"div",1),o.Rc(2,h,3,0,"ng-template",null,2,o.Sc),o.Ub()),2&t){const t=o.Ac(3);o.nc("ngClass",o.uc(3,u,!n.isSearchTeacher&&!n.isMobile,!n.isSearchTeacher&&n.isMobile)),o.Db(1),o.nc("ngIf",n.classList&&n.classList.length>0)("ngIfElse",t)}},directives:[l.k,l.m,l.l,b.a],pipes:[l.u],styles:[".margin_question_bar_40[_ngcontent-%COMP%]{margin-top:calc(2rem + 40px)!important}.margin_question_bar_60[_ngcontent-%COMP%]{margin-top:calc(2rem + 60px)!important}.student_obj[_ngcontent-%COMP%]{padding:5px;min-height:69px}.select_class[_ngcontent-%COMP%]{background:inherit;background-color:#3c8dbc;box-sizing:border-box;border-radius:5px;box-shadow:none;color:#fff}.isSelected[_ngcontent-%COMP%]{border:2px solid #004f7b}.isDisabled[_ngcontent-%COMP%]{opacity:.6}.title[_ngcontent-%COMP%]{color:#000;font-size:20px;margin-bottom:15px}"]}),t})()},Txro:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var o=e("fXoL");let i=(()=>{class t{constructor(){this.filesChangeEmiter=new o.o,this.background="#fff",this.borderStyle="1px dashed",this.borderColor="#1baba1",this.borderRadius="5px"}onDragOver(t){t.preventDefault(),t.stopPropagation(),this.background="#eee",this.borderStyle="1px solid #1baba1"}onDragLeave(t){t.preventDefault(),t.stopPropagation(),this.background="#fff",this.borderStyle="1px dashed #1baba1"}onDrop(t){t.preventDefault(),t.stopPropagation(),this.background="#fff",this.borderStyle="1px dashed #1baba1",this.filesChangeEmiter.emit(t.dataTransfer.files)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=o.Kb({type:t,selectors:[["","appDragDrop",""]],hostVars:8,hostBindings:function(t,n){1&t&&o.cc("dragover",function(t){return n.onDragOver(t)})("dragleave",function(t){return n.onDragLeave(t)})("drop",function(t){return n.onDrop(t)}),2&t&&o.Oc("background",n.background)("border",n.borderStyle)("border-color",n.borderColor)("border-radius",n.borderRadius)},outputs:{filesChangeEmiter:"filesChangeEmiter"}}),t})()},VcHj:function(t,n,e){"use strict";e.d(n,"a",function(){return _});var o=e("gm2p"),i=e("fXoL"),a=e("oUVn"),c=e("k9IB"),s=e("ofXK"),r=e("Qu3c"),l=e("IU+r"),b=e("loSA"),d=e("iWHX");function g(t,n){if(1&t&&(i.Vb(0,"div",14),i.Qb(1,"azt-create-avatar",15),i.Ub()),2&t){const t=i.gc(2);i.qc("matTooltip","",1==t.data.teacherObj.gender?"Th\u1ea7y ":"C\xf4 "," ",t.data.teacherObj.fullName,""),i.Db(1),i.nc("nameCreateAvatar",t.data.teacherObj.fullName)("size",25)("linkAvatar",t.data.teacherObj.avatar)}}function h(t,n){if(1&t&&(i.Vb(0,"span",16),i.Tc(1),i.Ub()),2&t){const t=i.gc(2);i.Db(1),i.Vc("",t.data.attended," l\u01b0\u1ee3t l\xe0m \u0111\u1ec1")}}function u(t,n){if(1&t&&(i.Vb(0,"span"),i.Vb(1,"span",17),i.Tc(2,"\u0110i\u1ec3m c\u1ee7a b\u1ea1n: "),i.Qb(3,"azt-check-mark",18),i.Ub(),i.Ub()),2&t){const t=i.gc(3);i.Db(3),i.nc("mark",t.data.examResultObj.mark)}}function p(t,n){if(1&t&&(i.Vb(0,"span",17),i.Tc(1,"\u0110i\u1ec3m c\u1ee7a b\u1ea1n: "),i.Vb(2,"span"),i.Tc(3),i.Ub(),i.Ub()),2&t){const t=i.gc(4);i.Db(3),i.Uc(t.data.examResultObj.mark)}}function f(t,n){if(1&t&&(i.Vb(0,"span"),i.Rc(1,p,4,1,"span",19),i.Ub()),2&t){const t=i.gc(3);i.Db(1),i.nc("ngIf",null!=t.data.examResultObj.confirmedAt)}}function m(t,n){if(1&t&&(i.Vb(0,"span"),i.Rc(1,u,4,1,"span",10),i.Rc(2,f,2,1,"span",10),i.Ub()),2&t){const t=i.gc(2);i.Db(1),i.nc("ngIf",1==t.data.examType||0==t.data.examType),i.Db(1),i.nc("ngIf",11==t.data.examType||10==t.data.examType||21==t.data.examType||20==t.data.examType)}}function x(t,n){if(1&t&&(i.Vb(0,"span",20),i.Tc(1),i.Ub()),2&t){const t=i.gc(2);i.Db(1),i.Vc("",t.data.price," azo")}}function O(t,n){if(1&t&&(i.Vb(0,"h3",21),i.Tc(1," Th\u1eddi gian v\xe0o thi:\xa0 "),i.Vb(2,"span",22),i.Tc(3),i.hc(4,"date"),i.hc(5,"date"),i.Ub(),i.Ub()),2&t){const t=i.gc(2);i.Db(2),i.nc("ngClass",-1==t.calculatorTime(t.data.startTime)?"text-danger":t.calculatorTime(t.data.startTime)<=1*t.secondOfDay&&t.calculatorTime(t.data.startTime)>0?"text-warning":""),i.Db(1),i.Wc("",i.jc(4,3,t.data.startTime,"dd/MM/yyyy HH:mm:ss")," -> ",i.jc(5,6,t.data.endTime,"dd/MM/yyyy HH:mm:ss"),"")}}function v(t,n){if(1&t&&(i.Vb(0,"h3",23),i.Tc(1," Thi tr\u01b0\u1edbc l\xfac:\xa0 "),i.Vb(2,"span"),i.Tc(3),i.hc(4,"date"),i.Ub(),i.Ub()),2&t){const t=i.gc(2);i.nc("ngClass",-1==t.calculatorTime(t.data.endTime)?"text-danger":t.calculatorTime(t.data.endTime)<=1*t.secondOfDay&&t.calculatorTime(t.data.endTime)>0?"text-warning":""),i.Db(3),i.Uc(i.jc(4,2,t.data.endTime,"dd/MM/yyyy HH:mm:ss"))}}function C(t,n){if(1&t&&(i.Vb(0,"h3",23),i.Tc(1," Th\u1eddi gian v\xe0o thi:\xa0 "),i.Vb(2,"span"),i.Tc(3),i.hc(4,"date"),i.Ub(),i.Ub()),2&t){const t=i.gc(2);i.nc("ngClass",-1==t.calculatorTime(t.data.startTime)?"text-danger":t.calculatorTime(t.data.startTime)<=1*t.secondOfDay&&t.calculatorTime(t.data.startTime)>0?"text-warning":""),i.Db(3),i.Uc(i.jc(4,2,t.data.startTime,"dd/MM/yyyy HH:mm:ss"))}}function P(t,n){1&t&&(i.Vb(0,"h3",21),i.Tc(1," Th\u1eddi gian v\xe0o thi:\xa0 "),i.Vb(2,"span"),i.Tc(3,"Kh\xf4ng th\u1eddi h\u1ea1n"),i.Ub(),i.Ub())}function k(t,n){if(1&t&&(i.Vb(0,"div",1),i.Vb(1,"div",2),i.Qb(2,"img",3),i.hc(3,"convertCdn"),i.Ub(),i.Vb(4,"div",4),i.Vb(5,"div",5),i.Vb(6,"h3",6),i.Tc(7),i.Ub(),i.Rc(8,g,2,5,"div",7),i.Ub(),i.Vb(9,"p",8),i.Rc(10,h,2,1,"span",9),i.Rc(11,m,3,2,"span",10),i.Ub(),i.Rc(12,x,2,1,"span",11),i.Rc(13,O,6,9,"h3",12),i.Rc(14,v,5,5,"h3",13),i.Rc(15,C,5,5,"h3",13),i.Rc(16,P,4,0,"h3",12),i.Ub(),i.Ub()),2&t){const t=i.gc();i.Db(2),i.nc("src",i.ic(3,10,"azota_assets/images/u416.svg"),i.Ic),i.Db(5),i.Uc(t.data.name),i.Db(1),i.nc("ngIf",t.data.teacherObj),i.Db(2),i.nc("ngIf",null!=t.data.attended),i.Db(1),i.nc("ngIf",null!=t.data.examResultObj),i.Db(1),i.nc("ngIf",t.data.price&&t.data.price>0),i.Db(1),i.nc("ngIf",t.data.startTime&&t.data.endTime),i.Db(1),i.nc("ngIf",!t.data.startTime&&t.data.endTime),i.Db(1),i.nc("ngIf",t.data.startTime&&!t.data.endTime),i.Db(1),i.nc("ngIf",!t.data.startTime&&!t.data.endTime)}}let _=(()=>{class t extends o.a{constructor(t,n){super(t),this.commonService=t,this.timeService=n,this.type=1,this.secondOfDay=86400}calculatorTime(t){return this.timeService.calculationHomeworkTime(t)}ngOnInit(){super.ngOnInit()}ngOnDestroy(){this.subscriptions.unsubscribe(),super.ngDestroy()}}return t.\u0275fac=function(n){return new(n||t)(i.Pb(a.a),i.Pb(c.a))},t.\u0275cmp=i.Jb({type:t,selectors:[["azt-block-exam"]],inputs:{data:"data",type:"type"},features:[i.Ab],decls:1,vars:1,consts:[["class","block-body link-text mt-3",4,"ngIf"],[1,"block-body","link-text","mt-3"],[1,"block-body-status"],["alt","",2,"height","60px",3,"src"],[1,"block-body-content"],[1,"d-flex","align-items-center"],[1,"content-title"],["class","block-avatar-share",3,"matTooltip",4,"ngIf"],[1,"content-desc","mb-0"],["class","text-count",4,"ngIf"],[4,"ngIf"],["class","coin-azo",4,"ngIf"],["class","content-deadline",4,"ngIf"],["class","content-deadline",3,"ngClass",4,"ngIf"],[1,"block-avatar-share",3,"matTooltip"],[2,"cursor","pointer",3,"nameCreateAvatar","size","linkAvatar"],[1,"text-count"],[1,"text-mark","mb-0"],[3,"mark"],["class","text-mark mb-0",4,"ngIf"],[1,"coin-azo"],[1,"content-deadline"],[3,"ngClass"],[1,"content-deadline",3,"ngClass"]],template:function(t,n){1&t&&i.Rc(0,k,17,12,"div",0),2&t&&i.nc("ngIf",n.data)},directives:[s.m,r.a,l.a,b.a,s.k],pipes:[d.f,s.e],styles:["a[_ngcontent-%COMP%]:hover{text-decoration:none}.app[_ngcontent-%COMP%]{overflow-x:hidden}.color-gray[_ngcontent-%COMP%]{color:#918d8d!important}.box[_ngcontent-%COMP%]{background-color:#fff;border:1px solid hsla(0,0%,86.3%,.8);color:#222;text-align:center;transition:all .5s;display:flex;padding:6px 1px 1px;justify-content:center;align-items:center;border-radius:5px!important}.box[_ngcontent-%COMP%]:hover{box-shadow:10px 10px 20px rgba(0,0,0,.07),-10px -10px 20px hsla(0,0%,100%,.8)}.box-icon[_ngcontent-%COMP%]{font-size:16px;margin-right:10px}.box-icon-upload[_ngcontent-%COMP%]{color:#00a7d0}.box-icon-search[_ngcontent-%COMP%]{color:#bf3232}.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:45px;width:45px}.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:45px}.box-text[_ngcontent-%COMP%]{font-size:17px}.box-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px}.box-active[_ngcontent-%COMP%]{background-color:#f1f1f1;box-shadow:10px 10px 20px rgba(0,0,0,.07),-10px -10px 20px hsla(0,0%,100%,.8);font-weight:500}.bg-block-list[_ngcontent-%COMP%]{background:#ececec;padding:10px 20px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:5px}.block-list-bottom[_ngcontent-%COMP%]{margin:10px 0}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]{border:none;display:flex;align-items:center;color:#707070;background:transparent;transition:all .3s}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:hover{color:#222}.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%]{text-transform:none;margin-left:2px}.mta-15[_ngcontent-%COMP%]{margin-top:-15px}.panel-custom[_ngcontent-%COMP%]{margin:1rem 0!important;background:#ececec}.text-mark[_ngcontent-%COMP%]{display:block;margin-top:5px;color:#0eafc0}.block[_ngcontent-%COMP%]{margin:40px 0}.block[_ngcontent-%COMP%]:first-child{margin-top:25px}.block-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;position:relative}.block-body[_ngcontent-%COMP%]{cursor:pointer;display:flex;background:#fff;border-radius:3px;margin-top:20px;width:100%;min-height:95px;overflow-x:hidden}.block-body-status[_ngcontent-%COMP%]{align-items:center;border-top-left-radius:3px;border-bottom-left-radius:3px;color:#fff;width:90px;font-weight:500;text-align:center}.block-body-content[_ngcontent-%COMP%], .block-body-status[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px}.block-body-content[_ngcontent-%COMP%]{max-width:70%;flex-direction:column}.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{font-weight:500;margin-bottom:2px;font-size:14px;color:#000}.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0}.block-body-content[_ngcontent-%COMP%]   .content-desc[_ngcontent-%COMP%]{margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#000}.block-body-content[_ngcontent-%COMP%]   .content-deadline[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;color:#000}.block-body-content[_ngcontent-%COMP%]   .content-deadline[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0}.heading[_ngcontent-%COMP%]{display:flex;align-items:center}.heading-title[_ngcontent-%COMP%]{margin-bottom:0;font-weight:500;font-size:16px;margin-right:15px}.heading-text[_ngcontent-%COMP%]{margin-bottom:0;font-size:14px;overflow:hidden;max-width:90%;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.block-avatar[_ngcontent-%COMP%]{margin-right:15px;width:30px;height:30px}.block-avatar-share[_ngcontent-%COMP%]{width:25px;height:25px;margin-left:10px}.image[_ngcontent-%COMP%]{border-radius:50px!important;width:100%}.block[_ngcontent-%COMP%]:first-child{margin-top:20px}.block-header-left[_ngcontent-%COMP%]{display:flex;align-items:center}.class-visible[_ngcontent-%COMP%]{visibility:hidden;opacity:0}.no-active[_ngcontent-%COMP%]{background:#e0e0e0}.block-else[_ngcontent-%COMP%]{height:90px;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:5px}.btn-all[_ngcontent-%COMP%], .text-else[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.btn-all[_ngcontent-%COMP%]{text-transform:inherit;color:#0eafc0;position:absolute;top:-3px;right:0}.block-avatar-info[_ngcontent-%COMP%], .block-header-info[_ngcontent-%COMP%]{display:flex;align-items:center}@media (max-width:768px){.block-avatar-info[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.heading-text[_ngcontent-%COMP%]{max-width:200px}.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:24px;width:24px}.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:35px}.block-body-status[_ngcontent-%COMP%]{width:90px}}"]}),t})()},YTzd:function(t,n,e){"use strict";e.d(n,"a",function(){return u});var o=e("fXoL"),i=e("3Pt+"),a=e("quSY"),c=e("gm2p"),s=e("tyNb"),r=e("oUVn"),l=e("PYj7"),b=e("clS4"),d=e("ofXK"),g=e("bTqV");function h(t,n){if(1&t){const t=o.Wb();o.Vb(0,"div",1),o.Vb(1,"div",2),o.Vb(2,"div",3),o.Vb(3,"p",4),o.Tc(4," H\u1ecdc sinh "),o.Vb(5,"b"),o.Tc(6),o.Ub(),o.Tc(7),o.Vb(8,"b"),o.Tc(9),o.Ub(),o.Tc(10),o.Vb(11,"b"),o.Tc(12,'"B\xe1o gi\xe1o vi\xean"'),o.Ub(),o.Tc(13," \u0111\u1ec3 gi\xe1o vi\xean ki\u1ec3m tra l\u1ea1i. "),o.Ub(),o.Ub(),o.Vb(14,"div",5),o.Vb(15,"div",6),o.Vb(16,"button",7),o.cc("click",function(){return o.Ec(t),o.gc().btnCloseDialog(!1)}),o.Tc(17," H\u1ee7y "),o.Ub(),o.Ub(),o.Vb(18,"button",8),o.cc("click",function(){return o.Ec(t),o.gc().sendRequest()}),o.Tc(19," B\xe1o gi\xe1o vi\xean "),o.Ub(),o.Ub(),o.Ub(),o.Ub()}if(2&t){const t=o.gc();o.Db(6),o.Uc(null==t.studentObj?null:t.studentObj.fullName),o.Db(1),o.Vc(" \u0111\xe3 \u0111\u01b0\u1ee3c ch\u1ecdn b\u1edfi T\xe0i kho\u1ea3n ",""!=(null==t.studentObj?null:t.studentObj.last4DigitPhone)?" v\u1edbi S\u0110T c\xf3 \u0111u\xf4i - xxx xxx":"v\u1edbi t\xean Zalo - "," "),o.Db(2),o.Uc(""!=(null==t.studentObj?null:t.studentObj.last4DigitPhone)?null==t.studentObj?null:t.studentObj.last4DigitPhone:null==t.studentObj?null:t.studentObj.zaloName),o.Db(1),o.Vc(" . N\u1ebfu b\u1ea1n ch\u1eafc ch\u1eafn \u0111\xf3 kh\xf4ng ph\u1ea3i ",""!=(null==t.studentObj?null:t.studentObj.last4DigitPhone)?"s\u1ed1 \u0110T":"t\xean t\xe0i kho\u1ea3n Zalo"," c\u1ee7a b\u1ea1n, vui l\xf2ng b\u1ea5m n\xfat ")}}let u=(()=>{class t extends c.a{constructor(t,n,e,c){super(n),this.router=t,this.commonService=n,this.frontStudentService=e,this.redirectService=c,this.isMobile=!1,this.closeDialog=new o.o,this.confirmSend=new o.o,this.subscriptions=new a.a,this.formName=new i.k({})}sendRequest(){var t,n,e;this.initStatusObj(),this.frontStudentService.apiFrontStudentRequestForReApproveStudentGet(null===(t=this.data)||void 0===t?void 0:t.classId,(null===(e=null===(n=this.data)||void 0===n?void 0:n.studentObj)||void 0===e?void 0:e.id)?this.data.studentObj.id:0).subscribe(t=>{var n;1==t.success?(this.confirmSend.emit(!0),this.successStatusObj()):(this.confirmSend.emit(!1),this.errorStatusObj(null!==(n=t.message)&&void 0!==n?n:""))})}btnCloseDialog(t){this.closeDialog.emit(t)}goToLogin(){this.redirectService.redirectToLoginBackLinkWithFromRegister(""+this.router.url)}ngOnChanges(){var t;(null===(t=this.data)||void 0===t?void 0:t.studentObj)&&(this.studentObj=this.data.studentObj)}ngOnInit(){var t;(null===(t=this.data)||void 0===t?void 0:t.studentObj)&&(this.studentObj=this.data.studentObj),super.ngOnInit()}ngOnDestroy(){this.subscriptions.unsubscribe(),super.ngDestroy()}}return t.\u0275fac=function(n){return new(n||t)(o.Pb(s.i),o.Pb(r.a),o.Pb(l.L),o.Pb(b.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-send-request"]],inputs:{data:"data",isMobile:"isMobile",back_link:"back_link"},outputs:{closeDialog:"closeDialog",confirmSend:"confirmSend"},features:[o.Ab,o.Bb],decls:1,vars:1,consts:[["class","school-info_bg",4,"ngIf"],[1,"school-info_bg"],[1,"school-info","p-4"],[1,"text-center"],[1,"h5","para_respon","font-weight-normal"],[1,"d-flex","justify-content-center","mt-3"],[1,"azt-block-button",2,"margin-right","15px"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,n){1&t&&o.Rc(0,h,20,4,"div",0),2&t&&o.nc("ngIf",null==n.data?null:n.data.isShow)},directives:[d.m,g.b],styles:[".school-info_bg[_ngcontent-%COMP%]{z-index:9990;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;background:rgba(0,0,0,.5607843137254902);min-height:100vh}.school-info[_ngcontent-%COMP%]{z-index:9990;top:50%;left:50%;min-width:30%;transform:translate(-50%,-50%);position:fixed;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px rgba(0,0,0,.58)}.close-btn[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-7px;padding:5px 10px;background:#dadada;cursor:pointer;border-radius:20px}.note[_ngcontent-%COMP%]{font-style:italic;font-size:15px;font-weight:600}@media only screen and (max-width:1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:95%}}"]}),t})()},caLj:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var o=e("fXoL"),i=e("gm2p"),a=e("ofXK"),c=e("bTqV");function s(t,n){if(1&t){const t=o.Wb();o.Vb(0,"div",1),o.Vb(1,"div",2),o.Vb(2,"div",3),o.Qb(3,"div",4),o.Ub(),o.Vb(4,"div",5),o.Vb(5,"div",6),o.Vb(6,"button",7),o.cc("click",function(){return o.Ec(t),o.gc().btnCloseDialog(!1)}),o.Tc(7,"\u0110\xf3ng"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub()}if(2&t){const t=o.gc();o.Db(3),o.nc("innerHtml",null==t.data?null:t.data.content,o.Fc)}}let r=(()=>{class t extends i.a{constructor(){super(...arguments),this.closeDialog=new o.o}btnCloseDialog(t){t?this.closeDialog.emit(t):this.closeDialog.emit()}}return t.\u0275fac=function(n){return l(n||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["azt-dialog-warning"]],inputs:{data:"data"},outputs:{closeDialog:"closeDialog"},features:[o.Ab],decls:1,vars:1,consts:[["class","school-info_bg",4,"ngIf"],[1,"school-info_bg"],[1,"school-info","p-4"],[1,"text-left"],[3,"innerHtml"],[1,"d-flex","float-right","mt-3"],[1,"azt-block-button"],["mat-raised-button","",1,"btn-close",3,"click"]],template:function(t,n){1&t&&o.Rc(0,s,8,1,"div",0),2&t&&o.nc("ngIf",null==n.data?null:n.data.isShow)},directives:[a.m,c.b],styles:[".school-info_bg[_ngcontent-%COMP%]{z-index:1000;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;min-height:100vh;background-color:rgba(60,60,60,.5)}.school-info[_ngcontent-%COMP%]{z-index:1001;top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;max-width:600px;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px rgba(0,0,0,.58)}.btn-close[_ngcontent-%COMP%]{transition:all .5s}.btn-close[_ngcontent-%COMP%]:hover{background:#dfe6e9}@media only screen and (max-width:1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:800px}}@media only screen and (max-width:768px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:700px}}@media only screen and (max-width:576px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:400px}}@media only screen and (max-width:380px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:300px}}@media only screen and (max-width:290px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:250px}}"]}),t})();const l=o.Xb(r)}}]);