!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"6DXj":function(n,i,s){"use strict";s.d(i,"a",function(){return R});var o=s("fXoL"),c=s("3Pt+"),a=s("quSY"),r=s("tyNb"),l=s("gbi4"),b=s("Avyq"),u=s("yTNM"),d=s("ofXK"),h=s("NFeN"),f=s("Qu3c"),m=s("IU+r"),g=s("bTqV"),p=s("gaSO");function v(t,n){if(1&t){var e=o.Vb();o.Ub(0,"div",11),o.Ub(1,"a",12),o.bc("click",function(){return o.Cc(e),o.fc(2).backToSelectClass()}),o.Ub(2,"mat-icon",13),o.Qc(3,"arrow_back"),o.Tb(),o.Ub(4,"span",13),o.Qc(5,"Ch\u1ecdn L\u1edbp"),o.Tb(),o.Tb(),o.Tb()}}function O(t,n){if(1&t&&(o.Ub(0,"div",9),o.Oc(1,v,6,0,"div",10),o.Tb()),2&t){var e=o.fc();o.Cb(1),o.mc("ngIf",!e.onlyOneClass)}}function C(t,n){1&t&&(o.Ub(0,"p",14),o.Qc(1," Vui l\xf2ng ch\u1ecdn \u0111\xfang t\xean m\xecnh \u0111\u1ec3 b\xe1o danh v\u1edbi Gi\xe1o vi\xean "),o.Tb())}function k(t,n){if(1&t&&(o.Pb(0,"img",28),o.gc(1,"mycdn")),2&t){var e=o.fc().$implicit;o.nc("src",o.hc(1,1,e.avatar),o.Gc)}}function y(t,n){if(1&t&&o.Pb(0,"azt-create-avatar",29),2&t){var e=o.fc().$implicit;o.mc("nameCreateAvatar",e.fullName)("size",50)}}function T(t,n){if(1&t&&(o.Ub(0,"p",30),o.Qc(1),o.gc(2,"date"),o.Tb()),2&t){var e=o.fc().$implicit;o.Cb(1),o.Rc(o.ic(2,1,e.birthday,"dd/MM/yyyy"))}}function x(t,n){1&t&&(o.Ub(0,"p",31),o.Qc(1,"\u0110\xe3 \u0111\u01b0\u1ee3c ch\u1ecdn"),o.Tb())}var j=function(t){return{isDisabled:t}};function w(t,n){if(1&t){var e=o.Vb();o.Ub(0,"div",17),o.Ub(1,"div",18),o.bc("click",function(){o.Cc(e);var t=n.$implicit;return o.fc(2).selectedStudent(t)}),o.Ub(2,"div",19),o.Ub(3,"div",20),o.Oc(4,k,2,3,"img",21),o.Oc(5,y,1,2,"azt-create-avatar",22),o.Tb(),o.Ub(6,"div",23),o.Ub(7,"div",24),o.Ub(8,"p",25),o.Qc(9),o.gc(10,"slice"),o.Tb(),o.Oc(11,T,3,4,"p",26),o.Oc(12,x,2,0,"p",27),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()}if(2&t){var i=n.$implicit,s=o.fc(2);o.Cb(1),o.mc("ngClass",o.rc(11,j,1==i.isVerified&&0==s.classObj.freeChooseName)),o.Cb(3),o.mc("ngIf",i.avatar&&""!=i.avatar),o.Cb(1),o.mc("ngIf",!i.avatar||""==i.avatar),o.Cb(3),o.nc("matTooltip",i.fullName.length>25?i.fullName:""),o.Cb(1),o.Rc(i.fullName.length>25?o.jc(10,7,i.fullName,0,25)+"..":i.fullName),o.Cb(2),o.mc("ngIf",null!=i.birthday),o.Cb(1),o.mc("ngIf",1==i.isVerified)}}function U(t,n){if(1&t&&(o.Ub(0,"div",15),o.Oc(1,w,13,13,"div",16),o.Tb()),2&t){var e=o.fc();o.Cb(1),o.mc("ngForOf",e.studentObjs)}}function _(t,n){if(1&t){var e=o.Vb();o.Ub(0,"div",32),o.Ub(1,"div",33),o.Ub(2,"div",2),o.Ub(3,"p",34),o.Qc(4," B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn ch\u1ecdn "),o.Ub(5,"b"),o.Qc(6),o.Tb(),o.Qc(7," ? "),o.Tb(),o.Tb(),o.Ub(8,"div",35),o.Ub(9,"div",36),o.Ub(10,"button",37),o.bc("click",function(){return o.Cc(e),o.fc().btnCloseDialog()}),o.Qc(11," H\u1ee7y "),o.Tb(),o.Tb(),o.Ub(12,"button",38),o.bc("click",function(){return o.Cc(e),o.fc().confirmSelectStudent()}),o.Qc(13," X\xe1c nh\u1eadn "),o.Tb(),o.Tb(),o.Tb(),o.Tb()}if(2&t){var i=o.fc();o.Cb(6),o.Rc(i.dataSelect.studentObj.fullName)}}function N(t,n){1&t&&(o.Ub(0,"p",52),o.Qc(1," Vui l\xf2ng nh\u1eadp l\u1ea1i t\xean b\u1ea1n \u0111\u1ec3 b\xe1o danh v\u1edbi Gi\xe1o vi\xean "),o.Tb())}function S(t,n){1&t&&(o.Ub(0,"p",52),o.Qc(1," Kh\xf4ng c\xf3 t\xean trong danh s\xe1ch tr\xean, vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 h\u1ecd t\xean "),o.Tb())}function I(t,n){1&t&&(o.Ub(0,"div"),o.Qc(1," Y\xeau c\u1ea7u nh\u1eadp h\u1ecd t\xean \u0111\u1ea7y \u0111\u1ee7! "),o.Tb())}function P(t,n){if(1&t&&(o.Ub(0,"div",53),o.Oc(1,I,2,0,"div",51),o.Tb()),2&t){var e=o.fc(2);o.Cb(1),o.mc("ngIf",e.getErrorType("fullName","required"))}}function M(t,n){1&t&&(o.Ub(0,"span"),o.Pb(1,"span",54),o.Qc(2,"\xa0"),o.Tb())}function Q(t,n){if(1&t){var e=o.Vb();o.Ub(0,"div",39),o.Oc(1,N,2,0,"p",40),o.Oc(2,S,2,0,"p",40),o.Ub(3,"form",41),o.Ub(4,"div",42),o.Ub(5,"div",43),o.Ub(6,"div",44),o.Pb(7,"input",45),o.Ub(8,"div",46),o.Ub(9,"span",47),o.Ub(10,"mat-icon"),o.Qc(11,"account_box"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Oc(12,P,2,1,"div",48),o.Tb(),o.Tb(),o.Ub(13,"div",42),o.Ub(14,"div",43),o.Ub(15,"div",49),o.Ub(16,"button",50),o.bc("click",function(){return o.Cc(e),o.fc().approvedToClass()}),o.Oc(17,M,3,0,"span",51),o.Qc(18,"Xin v\xe0o l\u1edbp "),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()}if(2&t){var i=o.fc();o.Cb(1),o.mc("ngIf",!i.studentObjs||0==i.studentObjs.length),o.Cb(1),o.mc("ngIf",i.studentObjs&&i.studentObjs.length>0),o.Cb(1),o.mc("formGroup",i.formName),o.Cb(9),o.mc("ngIf",i.formName.controls.fullName.invalid&&i.formName.controls.fullName.dirty),o.Cb(4),o.mc("disabled",i.formName.invalid||i.status_obj.loading),o.Cb(1),o.mc("ngIf",1==i.status_obj.loading)}}function z(t,n){1&t&&(o.Ub(0,"p",14),o.Qc(1," Kh\xf4ng c\xf3 trong danh s\xe1ch tr\xean, vui l\xf2ng li\xean h\u1ec7 v\u1edbi Gi\xe1o vi\xean c\u1ee7a b\u1ea1n! "),o.Tb())}function F(t,n){1&t&&(o.Ub(0,"p",14),o.Qc(1," Vui l\xf2ng \u0111\u1ee3i gi\xe1o vi\xean th\xeam danh s\xe1ch l\u1edbp! "),o.Tb())}function A(t,n){if(1&t&&(o.Ub(0,"div",39),o.Oc(1,z,2,0,"p",3),o.Oc(2,F,2,0,"p",3),o.Tb()),2&t){var e=o.fc();o.Cb(1),o.mc("ngIf",e.studentObjs&&e.studentObjs.length>0),o.Cb(1),o.mc("ngIf",e.studentObjs&&0==e.studentObjs.length)}}function D(t,n){if(1&t&&(o.Ub(0,"div",2),o.Ub(1,"p",58),o.Qc(2),o.Tb(),o.Tb()),2&t){var e=o.fc(2);o.Cb(2),o.Sc(" H\u1ecdc sinh: ",e.data.studentObj.fullName," ")}}function q(t,n){if(1&t&&(o.Ub(0,"div",55),o.Oc(1,D,3,1,"div",56),o.Ub(2,"div",57),o.Ub(3,"p",58),o.Qc(4," B\u1ea1n \u0111\xe3 xin v\xe0o l\u1edbp, vui l\xf2ng \u0111\u1ee3i Gi\xe1o vi\xean ch\u1ea5p thu\u1eadn! "),o.Tb(),o.Tb(),o.Tb()),2&t){var e=o.fc();o.Cb(1),o.mc("ngIf",!e.isEmpty(e.data.studentObj))}}var L=function(t,n,e){return{margin_question_bar:t,margin_question_bar_40:n,margin_question_bar_60:e}},R=function(){var n=function(){function n(e,i,s,r,l,b){t(this,n),this.fb=e,this.activeRoute=i,this.router=s,this.commonService=r,this.localize=l,this.apiService=b,this.showAddStudent=0,this.isMobile=!1,this.homeworkFlow=!1,this.isSearchTeacher=!1,this.selectChild=new o.o,this.approvedByName=new o.o,this.backToClass=new o.o,this.subscriptions=new a.a,this.formName=new c.k({}),this.status_obj={loading:!1,error:!1,error_obj:{message:""}},this.studentObjs=[],this.classList=[],this.classObj={},this.checkForm=!1,this.onlyOneClass=!1,this.dataSelect=[],this.checkDialog=!1}return e(n,[{key:"selectedStudent",value:function(t){var n={studentObj:t,classId:t.classroomId,classObj:this.classObj,type:2};0===t.isVerified||1==this.classObj.freeChooseName?(this.checkDialog=!0,this.dataSelect=n):this.selectChild.emit(n)}},{key:"approvedToClass",value:function(){var t=this.getFormObj(this.formName);this.approvedByName.emit({nameEmit:t.fullName,classId:this.classObj.id})}},{key:"backToSelectClass",value:function(){this.backToClass.emit({selectClass:!0,selectStudent:!1})}},{key:"getError",value:function(t){return!(!this.formName.controls[t]||!this.formName.controls[t].errors)&&this.formName.controls[t].errors}},{key:"getErrorType",value:function(t,n){return!!(this.formName.controls[t]&&this.formName.controls[t].errors&&this.formName.controls[t].errors[n])&&this.formName.controls[t].errors[n]}},{key:"getFormObj",value:function(t){var n=t.value;for(var e in n)n[e]=t.get(e).value;return n}},{key:"isEmpty",value:function(t){for(var n in t)if(t.hasOwnProperty(n))return!1;return!0}},{key:"btnCloseDialog",value:function(){this.checkDialog=!1}},{key:"confirmSelectStudent",value:function(){this.selectChild.emit(this.dataSelect)}},{key:"onResize",value:function(t){}},{key:"ngOnChanges",value:function(){this.data.classObjs&&this.data.classObjs.length>0?this.classList=this.data.classObjs:this.data.hasOwnProperty("studentObj")?(this.classObj=this.data.classObj,this.studentObjs=this.commonService.sortFirstNameStudents(this.data.studentObjs),this.checkForm=0!=this.showAddStudent,this.onlyOneClass=this.data.onlyOneClass,this.selectedStudent(this.data.studentObj)):(this.classObj=this.data.classObj,this.studentObjs=this.commonService.sortFirstNameStudents(this.data.studentObjs),this.checkForm=0!=this.showAddStudent)}},{key:"ngOnInit",value:function(){this.formName=this.fb.group({fullName:new c.h("",[c.z.required])}),this.data.classObjs&&this.data.classObjs.length>0?this.classList=this.data.classObjs:this.data.hasOwnProperty("studentObj")?(this.classObj=this.data.classObj,this.studentObjs=this.commonService.sortFirstNameStudents(this.data.studentObjs),this.checkForm=0!=this.showAddStudent,this.onlyOneClass=this.data.onlyOneClass,this.selectedStudent(this.data.studentObj)):(this.classObj=this.data.classObj,this.studentObjs=this.commonService.sortFirstNameStudents(this.data.studentObjs),this.checkForm=0!=this.showAddStudent,this.onlyOneClass=this.data.onlyOneClass)}},{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}}]),n}();return n.\u0275fac=function(t){return new(t||n)(o.Ob(c.g),o.Ob(r.a),o.Ob(r.i),o.Ob(l.a),o.Ob(b.e),o.Ob(u.a))},n.\u0275cmp=o.Ib({type:n,selectors:[["app-select-student"]],inputs:{data:"data",showAddStudent:"showAddStudent",isMobile:"isMobile",homeworkFlow:"homeworkFlow",back_link:"back_link",isSearchTeacher:"isSearchTeacher"},outputs:{selectChild:"selectChild",approvedByName:"approvedByName",backToClass:"backToClass"},features:[o.Ab],decls:10,vars:12,consts:[[1,"container",3,"ngClass","resize"],["class","row pl-0 pr-0 ml-0 mr-0",4,"ngIf"],[1,"text-center"],["class","h5 text-info",4,"ngIf"],["class","row ml-0 mr-0 pl-0 pr-0 select_child",4,"ngIf"],["class","school-info_bg",4,"ngIf"],["class","text-center mt-3",4,"ngIf","ngIfElse"],["NotSubmitName",""],["class","container",4,"ngIf"],[1,"row","pl-0","pr-0","ml-0","mr-0"],["class","col-12",4,"ngIf"],[1,"col-12"],[1,"clickable","text-info",3,"click"],[2,"vertical-align","middle"],[1,"h5","text-info"],[1,"row","ml-0","mr-0","pl-0","pr-0","select_child"],["class","col-12 col-sm-12 col-md-4 col-lg-3 mb-2",4,"ngFor","ngForOf"],[1,"col-12","col-sm-12","col-md-4","col-lg-3","mb-2"],[1,"card","student_obj","clickable",3,"ngClass","click"],[1,"row","ml-0","mr-0","justify-content-between"],[1,"col-3","align-self-center","text-center",2,"min-height","56px"],["style","vertical-align: middle; margin-top: 2px; border-radius: 50%","width","50","height","50",3,"src",4,"ngIf"],[3,"nameCreateAvatar","size",4,"ngIf"],[1,"col-9","pr-1"],[1,"text-left"],[1,"h5","mb-1","card-title","font-bold",3,"matTooltip"],["class","h6 mb-1 card-title ",4,"ngIf"],["class","h6 mb-0 card-title ",4,"ngIf"],["width","50","height","50",2,"vertical-align","middle","margin-top","2px","border-radius","50%",3,"src"],[3,"nameCreateAvatar","size"],[1,"h6","mb-1","card-title"],[1,"h6","mb-0","card-title"],[1,"school-info_bg"],[1,"school-info","p-4"],[1,"h5","para_respon","font-weight-normal"],[1,"d-flex","float-right","mt-3"],[1,"azt-block-button"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","warn",2,"margin-left","15px",3,"click"],[1,"text-center","mt-3"],["class","text-info","style","font-size: 18px;",4,"ngIf"],[1,"form-horizontal","mt-1",3,"formGroup"],[1,"form-group"],[1,"col-sm-6","ml-auto","mr-auto"],[1,"input-group","mb-3"],["type","text","placeholder","H\u1ecd v\xe0 t\xean","formControlName","fullName",1,"form-control"],[1,"input-group-append"],["id","basic-addon3",1,"input-group-text"],["class","alert alert-danger",4,"ngIf"],[1,"text-right"],["mat-raised-button","","color","primary",3,"disabled","click"],[4,"ngIf"],[1,"text-info",2,"font-size","18px"],[1,"alert","alert-danger"],["role","status",1,"spinner-border","spinner-border-sm"],[1,"container"],["class","text-center",4,"ngIf"],[1,"text-center","alert","alert-info","mt-3"],[1,"h5","mb-0"]],template:function(t,n){if(1&t&&(o.Ub(0,"div",0),o.bc("resize",function(t){return n.onResize(t)},!1,o.Bc),o.Oc(1,O,2,1,"div",1),o.Ub(2,"div",2),o.Oc(3,C,2,0,"p",3),o.Tb(),o.Oc(4,U,2,1,"div",4),o.Oc(5,_,14,1,"div",5),o.Oc(6,Q,19,6,"div",6),o.Oc(7,A,3,2,"ng-template",null,7,o.Pc),o.Tb(),o.Oc(9,q,5,1,"div",8)),2&t){var e=o.yc(8);o.mc("ngClass",o.tc(8,L,!n.isSearchTeacher&&!n.isMobile&&n.homeworkFlow,!n.isSearchTeacher&&!n.isMobile&&!n.homeworkFlow,!n.isSearchTeacher&&n.isMobile&&!n.homeworkFlow)),o.Cb(1),o.mc("ngIf",n.back_link),o.Cb(2),o.mc("ngIf",n.studentObjs&&n.studentObjs.length>0),o.Cb(1),o.mc("ngIf",n.studentObjs&&n.studentObjs.length>0),o.Cb(1),o.mc("ngIf",n.checkDialog),o.Cb(1),o.mc("ngIf",1==n.checkForm)("ngIfElse",e),o.Cb(3),o.mc("ngIf",n.data.isPendingApproved)}},directives:[d.k,d.m,h.a,d.l,f.a,m.a,g.b,c.B,c.s,c.l,c.d,c.r,c.j],pipes:[d.u,p.k,d.e],styles:[".margin_question_bar_40[_ngcontent-%COMP%]{margin-top:calc(2rem + 40px)!important}.margin_question_bar[_ngcontent-%COMP%]{margin-top:calc(2rem)!important}.margin_question_bar_60[_ngcontent-%COMP%]{margin-top:calc(2rem + 60px)!important}.student_obj[_ngcontent-%COMP%]{padding:5px;min-height:69px}.select_class[_ngcontent-%COMP%]{background:inherit;background-color:#3c8dbc;box-sizing:border-box;border-radius:5px;box-shadow:none;color:#fff}.isSelected[_ngcontent-%COMP%]{border:2px solid #004f7b}.isDisabled[_ngcontent-%COMP%]{opacity:.6}.school-info_bg[_ngcontent-%COMP%]{z-index:9990;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;background:rgba(0,0,0,.5607843137254902);min-height:100vh}.school-info[_ngcontent-%COMP%]{z-index:9990;top:50%;left:50%;min-width:30%;transform:translate(-50%,-50%);position:fixed;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px rgba(0,0,0,.58)}.close-btn[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-7px;padding:5px 10px;background:#dadada;cursor:pointer;border-radius:20px}.note[_ngcontent-%COMP%]{font-style:italic;font-size:15px;font-weight:600}@media only screen and (max-width:1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:95%}.col-3[_ngcontent-%COMP%]{flex:0 0 30%;max-width:30%}.col-9[_ngcontent-%COMP%]{flex:0 0 70%;max-width:70%}}@media only screen and (max-width:768px){.col-3[_ngcontent-%COMP%]{flex:0 0 25%;max-width:25%}.col-9[_ngcontent-%COMP%]{flex:0 0 75%;max-width:75%}}"]}),n}()},YTzd:function(n,i,s){"use strict";s.d(i,"a",function(){return m});var o=s("fXoL"),c=s("3Pt+"),a=s("quSY"),r=s("tyNb"),l=s("gbi4"),b=s("Avyq"),u=s("yTNM"),d=s("ofXK"),h=s("bTqV");function f(t,n){if(1&t){var e=o.Vb();o.Ub(0,"div",1),o.Ub(1,"div",2),o.Ub(2,"div",3),o.Ub(3,"p",4),o.Qc(4," H\u1ecdc sinh "),o.Ub(5,"b"),o.Qc(6),o.Tb(),o.Qc(7),o.Ub(8,"b"),o.Qc(9),o.Tb(),o.Qc(10,". N\u1ebfu b\u1ea1n v\u1eabn ch\u1eafc ch\u1eafn \u0111\xf3 \u0111\xfang l\xe0 t\xean b\u1ea1n, vui l\xf2ng b\u1ea5m n\xfat "),o.Ub(11,"b"),o.Qc(12,'"B\xe1o gi\xe1o vi\xean"'),o.Tb(),o.Qc(13," \u0111\u1ec3 gi\xe1o vi\xean ki\u1ec3m tra l\u1ea1i. "),o.Tb(),o.Tb(),o.Ub(14,"div",5),o.Ub(15,"button",6),o.bc("click",function(){return o.Cc(e),o.fc().sendRequest()}),o.Qc(16," B\xe1o gi\xe1o vi\xean "),o.Tb(),o.Ub(17,"div",7),o.Ub(18,"button",8),o.bc("click",function(){return o.Cc(e),o.fc().btnCloseDialog(!1)}),o.Qc(19," H\u1ee7y "),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()}if(2&t){var i=o.fc();o.Cb(6),o.Rc(i.studentObj.fullName),o.Cb(1),o.Sc(" \u0111\xe3 \u0111\u01b0\u1ee3c ch\u1ecdn b\u1edfi T\xe0i kho\u1ea3n v\u1edbi ",""!=i.studentObj.last4DigitPhone?"\u0111u\xf4i s\u1ed1 \u0110T - xxx xxx":"v\u1edbi t\xean Zalo - "," "),o.Cb(2),o.Rc(""!=i.studentObj.last4DigitPhone?i.studentObj.last4DigitPhone:i.studentObj.zaloName)}}var m=function(){var n=function(){function n(e,i,s,r,l,b){t(this,n),this.fb=e,this.activeRoute=i,this.router=s,this.commonService=r,this.localize=l,this.apiService=b,this.isMobile=!1,this.closeDialog=new o.o,this.confirmSend=new o.o,this.subscriptions=new a.a,this.formName=new c.k({}),this.status_obj={loading:!1,error:!1,error_obj:{message:""}},this.studentObjs=[],this.studentObj={}}return e(n,[{key:"sendRequest",value:function(){var t=this;this.status_obj={loading:!0,error:!1,error_obj:{message:""}},this.apiService.sendRequestReApprove(this.data.classId,this.data.studentObj.id?this.data.studentObj.id:0).subscribe(function(n){t.confirmSend.emit(1==n.success)})}},{key:"getError",value:function(t){return!(!this.formName.controls[t]||!this.formName.controls[t].errors)&&this.formName.controls[t].errors}},{key:"getErrorType",value:function(t,n){return!!(this.formName.controls[t]&&this.formName.controls[t].errors&&this.formName.controls[t].errors[n])&&this.formName.controls[t].errors[n]}},{key:"getFormObj",value:function(t){var n=t.value;for(var e in n)n[e]=t.get(e).value;return n}},{key:"isEmpty",value:function(t){for(var n in t)if(t.hasOwnProperty(n))return!1;return!0}},{key:"btnCloseDialog",value:function(t){this.closeDialog.emit(t)}},{key:"goToLogin",value:function(){this.commonService.redirectToLoginBackLinkWithFromRegister(""+this.router.url)}},{key:"ngOnChanges",value:function(){this.data.studentObj&&(this.studentObj=this.data.studentObj)}},{key:"ngOnInit",value:function(){this.data.studentObj&&(this.studentObj=this.data.studentObj)}},{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}}]),n}();return n.\u0275fac=function(t){return new(t||n)(o.Ob(c.g),o.Ob(r.a),o.Ob(r.i),o.Ob(l.a),o.Ob(b.e),o.Ob(u.a))},n.\u0275cmp=o.Ib({type:n,selectors:[["app-send-request"]],inputs:{data:"data",isMobile:"isMobile",back_link:"back_link"},outputs:{closeDialog:"closeDialog",confirmSend:"confirmSend"},features:[o.Ab],decls:1,vars:1,consts:[["class","school-info_bg",4,"ngIf"],[1,"school-info_bg"],[1,"school-info","p-4"],[1,"text-center"],[1,"h5","para_respon","font-weight-normal"],[1,"d-flex","justify-content-center","mt-3"],["mat-raised-button","","color","primary",3,"click"],[1,"azt-block-button",2,"margin-left","15px"],["mat-raised-button","",3,"click"]],template:function(t,n){1&t&&o.Oc(0,f,20,3,"div",0),2&t&&o.mc("ngIf",n.data.isShow)},directives:[d.m,h.b],styles:[".school-info_bg[_ngcontent-%COMP%]{z-index:9990;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;background:rgba(0,0,0,.5607843137254902);min-height:100vh}.school-info[_ngcontent-%COMP%]{z-index:9990;top:50%;left:50%;min-width:30%;transform:translate(-50%,-50%);position:fixed;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px rgba(0,0,0,.58)}.close-btn[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-7px;padding:5px 10px;background:#dadada;cursor:pointer;border-radius:20px}.note[_ngcontent-%COMP%]{font-style:italic;font-size:15px;font-weight:600}@media only screen and (max-width:1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:95%}}"]}),n}()},kmNb:function(n,i,s){"use strict";s.d(i,"a",function(){return l});var o=s("fXoL"),c=s("yTNM"),a=s("tyNb"),r=s("gbi4"),l=function(){var n=function(){function n(e,i,s){t(this,n),this.apiService=e,this.router=i,this.commonService=s}return e(n,[{key:"canActivate",value:function(t,n){return window,!!this.apiService.isLogin()||(this.commonService.redirectLoginAnonymous(n.url),!1)}},{key:"canActivateChild",value:function(t,n){return this.canActivate(t,n)}},{key:"canLoad",value:function(t){var n="/"+t.path;return!!this.apiService.isLogin()||(this.commonService.redirectLoginByReturnUrl(n),!1)}}]),n}();return n.\u0275fac=function(t){return new(t||n)(o.Yb(c.a),o.Yb(a.i),o.Yb(r.a))},n.\u0275prov=o.Kb({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()}}])}();