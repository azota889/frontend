(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{EgMX:function(t,e,n){"use strict";n.r(e),n.d(e,"TrashModule",function(){return mt});var o=n("tyNb"),i=n("ofXK"),s=n("vvyD"),a=n("3Pt+"),c=n("fB2i"),r=n("0IaG"),h=n("mYPf"),l=n("IkSl"),d=n("kmNb"),b=n("Avyq"),g=n("fXoL"),m=n("gbi4"),p=n("yTNM"),u=n("hZBc"),f=n("wZkO"),v=n("nzN9"),C=n("uZ1F"),y=n("bSwM"),k=n("Qu3c"),w=n("quSY"),_=n("bTqV"),S=n("gaSO");function T(t,e){1&t&&(g.Ub(0,"div"),g.Ub(1,"p",11),g.Pc(2," B\u1ea1n mu\u1ed1n kh\xf4i ph\u1ee5c l\u1edbp h\u1ecdc "),g.Tb(),g.Tb())}function P(t,e){1&t&&(g.Ub(0,"div"),g.Ub(1,"p",11),g.Pc(2," B\u1ea1n mu\u1ed1n kh\xf4i ph\u1ee5c \u0111\u1ec1 thi "),g.Tb(),g.Tb())}function x(t,e){1&t&&(g.Ub(0,"div"),g.Ub(1,"p",11),g.Pc(2," B\u1ea1n mu\u1ed1n kh\xf4i ph\u1ee5c danh m\u1ee5c "),g.Tb(),g.Tb())}function D(t,e){1&t&&(g.Ub(0,"div"),g.Ub(1,"p",11),g.Pc(2," B\u1ea1n mu\u1ed1n kh\xf4i ph\u1ee5c b\xe0i t\u1eadp "),g.Tb(),g.Tb())}function O(t,e){1&t&&(g.Ub(0,"div"),g.Ub(1,"p",11),g.Pc(2," B\u1ea1n mu\u1ed1n kh\xf4i ph\u1ee5c h\u1ecdc sinh "),g.Tb(),g.Tb())}function R(t,e){if(1&t&&(g.Ub(0,"span",12),g.Pc(1),g.Tb()),2&t){const t=g.fc(2);g.nc("matTooltip",t.data.obj.name),g.Cb(1),g.Rc("",t.data.obj.name," ?")}}function M(t,e){if(1&t&&(g.Ub(0,"span",12),g.Pc(1),g.Tb()),2&t){const t=g.fc(2);g.nc("matTooltip",t.data.obj.name),g.Cb(1),g.Rc("",t.data.obj.fullName," ?")}}function U(t,e){1&t&&(g.Ub(0,"span"),g.Pb(1,"span",13),g.Pc(2,"\xa0"),g.Tb())}function I(t,e){if(1&t){const t=g.Vb();g.Ub(0,"div",1),g.Ub(1,"div",2),g.Ub(2,"div",3),g.Nc(3,T,3,0,"div",4),g.Nc(4,P,3,0,"div",4),g.Nc(5,x,3,0,"div",4),g.Nc(6,D,3,0,"div",4),g.Nc(7,O,3,0,"div",4),g.Ub(8,"p",5),g.Nc(9,R,2,2,"span",6),g.Nc(10,M,2,2,"span",6),g.Tb(),g.Tb(),g.Ub(11,"div",7),g.Ub(12,"div",8),g.Ub(13,"button",9),g.bc("click",function(){return g.Cc(t),g.fc().btnCloseDialog()}),g.Pc(14),g.gc(15,"mytranslate"),g.Tb(),g.Tb(),g.Ub(16,"button",10),g.bc("click",function(){return g.Cc(t),g.fc().confirmRevert()}),g.Nc(17,U,3,0,"span",4),g.Pc(18),g.gc(19,"mytranslate"),g.Tb(),g.Tb(),g.Tb(),g.Tb()}if(2&t){const t=g.fc();g.Cb(3),g.mc("ngIf","classroom"===t.typeString),g.Cb(1),g.mc("ngIf","exam"===t.typeString),g.Cb(1),g.mc("ngIf","category"===t.typeString),g.Cb(1),g.mc("ngIf","homework"===t.typeString),g.Cb(1),g.mc("ngIf","student"===t.typeString),g.Cb(2),g.mc("ngIf",t.data.obj.name),g.Cb(1),g.mc("ngIf",t.data.obj.fullName),g.Cb(4),g.Rc(" ",g.hc(15,11,"lang_cms_common_close_btn")," "),g.Cb(2),g.mc("disabled",t.isLoading),g.Cb(1),g.mc("ngIf",!0===t.isLoading),g.Cb(1),g.Rc(" ",g.hc(19,13,"lang_cms_common_confirm_btn")," ")}}let N=(()=>{class t{constructor(t,e){this.commonService=t,this.apiService=e,this.closeDialog=new g.o,this.subscriptions=new w.a,this.isLoading=!1,this.typeString=""}confirmRevert(){switch(this.data.type){case 0:this.subscriptions.add(this.apiService.getRevertClassroom(this.data.obj.id).subscribe(t=>{1==t.success?(this.data.obj=Object.assign(Object.assign({},this.data.obj),{typeOfDelete:this.data.type}),this.closeDialog.emit(this.data.obj),this.commonService.myTranslate(["lang_cms_revert_success","lang_cms_common_ok"]).subscribe(t=>{this.commonService.snackSuccess(t.lang_cms_revert_success,t.lang_cms_common_ok)})):(this.btnCloseDialog(),this.commonService.myTranslate([t.message,"lang_cms_common_ok"]).subscribe(e=>{this.commonService.snackError(e[t.message],e.lang_cms_common_ok)}))}));break;case 1:this.subscriptions.add(this.apiService.getRevertStudent(this.data.obj.id).subscribe(t=>{1==t.success?(this.data.obj=Object.assign(Object.assign({},this.data.obj),{typeOfDelete:this.data.type}),this.closeDialog.emit(this.data.obj),this.commonService.myTranslate(["lang_cms_revert_success","lang_cms_common_ok"]).subscribe(t=>{this.commonService.snackSuccess(t.lang_cms_revert_success,t.lang_cms_common_ok)})):(this.btnCloseDialog(),this.commonService.myTranslate([t.message,"lang_cms_common_ok"]).subscribe(e=>{this.commonService.snackError(e[t.message],e.lang_cms_common_ok)}))}));break;case 2:this.subscriptions.add(this.apiService.getRevertHomework(this.data.obj.id).subscribe(t=>{1==t.success?(this.data.obj=Object.assign(Object.assign({},this.data.obj),{typeOfDelete:this.data.type}),this.closeDialog.emit(this.data.obj),this.commonService.myTranslate(["lang_cms_revert_success","lang_cms_common_ok"]).subscribe(t=>{this.commonService.snackSuccess(t.lang_cms_revert_success,t.lang_cms_common_ok)})):(this.btnCloseDialog(),this.commonService.myTranslate([t.message,"lang_cms_common_ok"]).subscribe(e=>{this.commonService.snackError(e[t.message],e.lang_cms_common_ok)}))}));break;case 3:this.subscriptions.add(this.apiService.getRevertExam(this.data.obj.id).subscribe(t=>{1==t.success?(this.data.obj=Object.assign(Object.assign({},this.data.obj),{typeOfDelete:this.data.type}),this.closeDialog.emit(this.data.obj),this.commonService.myTranslate(["lang_cms_revert_success","lang_cms_common_ok"]).subscribe(t=>{this.commonService.snackSuccess(t.lang_cms_revert_success,t.lang_cms_common_ok)})):(this.btnCloseDialog(),this.commonService.myTranslate([t.message,"lang_cms_common_ok"]).subscribe(e=>{this.commonService.snackError(e[t.message],e.lang_cms_common_ok)}))}));break;case 4:this.subscriptions.add(this.apiService.getRevertExamCategory(this.data.obj.id).subscribe(t=>{1==t.success?(this.data.obj=Object.assign(Object.assign({},this.data.obj),{typeOfDelete:this.data.type}),this.closeDialog.emit(this.data.obj),this.commonService.myTranslate(["lang_cms_revert_success","lang_cms_common_ok"]).subscribe(t=>{this.commonService.snackSuccess(t.lang_cms_revert_success,t.lang_cms_common_ok)})):(this.btnCloseDialog(),this.commonService.myTranslate([t.message,"lang_cms_common_ok"]).subscribe(e=>{this.commonService.snackError(e[t.message],e.lang_cms_common_ok)}))}))}}checkType(){if(this.data)switch(this.data.type){case 0:this.typeString="classroom";break;case 1:this.typeString="student";break;case 2:this.typeString="homework";break;case 3:this.typeString="exam";break;case 4:this.typeString="category"}return this.typeString}btnCloseDialog(){this.closeDialog.emit()}ngOnInit(){this.checkType()}ngOnDestroy(){this.subscriptions.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(g.Ob(m.a),g.Ob(p.a))},t.\u0275cmp=g.Ib({type:t,selectors:[["app-revert-dialog"]],inputs:{data:"data"},outputs:{closeDialog:"closeDialog"},decls:1,vars:1,consts:[["class","school-info_bg",4,"ngIf"],[1,"school-info_bg"],[1,"school-info","p-4"],[1,"text-center"],[4,"ngIf"],[1,"h5","text-danger",2,"padding-bottom","21px","border-bottom","1px solid #b2b4b7"],["class","truncate",3,"matTooltip",4,"ngIf"],[1,"d-flex","float-right","mt-3"],[1,"zalo-share-button"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","warn",2,"margin-left","15px",3,"disabled","click"],[1,"h5","para_respon","font-weight-normal"],[1,"truncate",3,"matTooltip"],["role","status",1,"spinner-border","spinner-border-sm"]],template:function(t,e){1&t&&g.Nc(0,I,20,15,"div",0),2&t&&g.mc("ngIf",e.data.isShow)},directives:[i.m,_.b,k.a],pipes:[S.i],styles:[".school-info_bg[_ngcontent-%COMP%]{z-index:9998;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;min-height:100vh;background:rgba(0,0,0,.5607843137254902)}.school-info[_ngcontent-%COMP%]{z-index:9999;top:50%;left:50%;min-width:30%;transform:translate(-50%,-50%);position:fixed;max-width:600px;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px rgba(0,0,0,.58)}.truncate[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;overflow:hidden;max-width:90%;padding:5px 0;white-space:nowrap}.close-btn[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-7px;padding:5px 10px;background:#dadada;cursor:pointer;border-radius:20px}@media only screen and (max-width:1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:95%}}"]}),t})();function j(t,e){1&t&&g.Pb(0,"azt-loading-effect")}function E(t,e){if(1&t){const t=g.Vb();g.Ub(0,"a",8),g.bc("click",function(){return g.Cc(t),g.fc(3).clickRemoveAllData()}),g.Pc(1,"x\xf3a"),g.Tb()}}function L(t,e){if(1&t&&(g.Ub(0,"span",22),g.Pc(1),g.Tb()),2&t){const t=g.fc().$implicit;g.nc("matTooltip",t.name),g.Cb(1),g.Qc(t.name)}}function B(t,e){if(1&t&&(g.Ub(0,"span",22),g.Pc(1),g.Tb()),2&t){const t=g.fc().$implicit;g.nc("matTooltip",t.fullName),g.Cb(1),g.Qc(t.fullName)}}function A(t,e){if(1&t&&(g.Ub(0,"span",23),g.Pc(1),g.Tb()),2&t){const t=g.fc().$implicit;g.nc("matTooltip",t.classroom.name),g.Cb(1),g.Rc("l\u1edbp: ",t.classroom.name,"")}}function H(t,e){if(1&t){const t=g.Vb();g.Ub(0,"div"),g.Ub(1,"div",9),g.Ub(2,"div",10),g.Ub(3,"div",11),g.Ub(4,"mat-checkbox",12),g.bc("ngModelChange",function(t){return e.$implicit.completed=t})("ngModelChange",function(){return g.Cc(t),g.fc(3).updateAllComplete()}),g.Tb(),g.Tb(),g.Ub(5,"div",13),g.Ub(6,"span",14),g.Nc(7,L,2,2,"span",15),g.Nc(8,B,2,2,"span",15),g.Nc(9,A,2,2,"span",16),g.Tb(),g.Ub(10,"span",17),g.Pc(11," Th\u1eddi gian x\xf3a: "),g.Ub(12,"span",18),g.gc(13,"date"),g.Pc(14),g.gc(15,"date"),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Ub(16,"div",19),g.bc("click",function(){g.Cc(t);const n=e.$implicit,o=g.fc(3);return o.clickRevertData(n,o.type)}),g.Ub(17,"div",20),g.Ub(18,"span",21),g.Pc(19,"Kh\xf4i ph\u1ee5c"),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb()}if(2&t){const t=e.$implicit;g.Cb(4),g.mc("ngModel",t.completed),g.Cb(3),g.mc("ngIf",t.name),g.Cb(1),g.mc("ngIf",t.fullName),g.Cb(1),g.mc("ngIf",t.classroom),g.Cb(3),g.nc("matTooltip",g.ic(13,6,t.deletedAt,"dd/MM/yyyy HH:mm")),g.Cb(2),g.Qc(g.ic(15,9,t.deletedAt,"dd/MM/yyyy HH:mm"))}}function V(t,e){if(1&t){const t=g.Vb();g.Ub(0,"div"),g.Ub(1,"mat-checkbox",5),g.bc("change",function(e){return g.Cc(t),g.fc(2).setAll(e.checked)}),g.Pc(2," Ch\u1ecdn t\u1ea5t c\u1ea3 "),g.Tb(),g.Nc(3,E,2,0,"a",6),g.Nc(4,H,20,12,"div",7),g.Tb()}if(2&t){const t=g.fc(2);g.Cb(1),g.mc("checked",t.allComplete),g.Cb(2),g.mc("ngIf",1==t.someComplete()||1==t.allComplete),g.Cb(1),g.mc("ngForOf",t.task.subtasks)}}function z(t,e){1&t&&(g.Ub(0,"div"),g.Ub(1,"div",24),g.Pc(2," Kh\xf4ng c\xf3 d\u1eef li\u1ec7u. "),g.Tb(),g.Tb())}function K(t,e){if(1&t){const t=g.Vb();g.Ub(0,"app-revert-dialog",25),g.bc("closeDialog",function(e){return g.Cc(t),g.fc(2).closeRevertDialog(e)}),g.Tb()}if(2&t){const t=g.fc(2);g.mc("data",t.dataRevertDialog)}}function F(t,e){if(1&t){const t=g.Vb();g.Nc(0,V,5,3,"div",2),g.Nc(1,z,3,0,"div",2),g.Ub(2,"azt-paging",3),g.bc("SendPage",function(e){return g.Cc(t),g.fc().clickPage(e)}),g.Tb(),g.Nc(3,K,1,1,"app-revert-dialog",4)}if(2&t){const t=g.fc();g.mc("ngIf",t.data.total>0),g.Cb(1),g.mc("ngIf",0==t.data.total),g.Cb(1),g.mc("lengthPage",t.lengthPage)("paging",t.page),g.Cb(1),g.mc("ngIf",t.dataRevertDialog.isShow)}}const G=".check-all[_ngcontent-%COMP%]{margin:20px 15px 0}.check-item[_ngcontent-%COMP%]{margin:8px 15px 0}.block-header[_ngcontent-%COMP%]{display:flex;align-items:center}.block-body[_ngcontent-%COMP%]{display:flex;justify-content:space-between;background:#fff;border-radius:3px;margin-top:20px;width:100%}.block-body-main[_ngcontent-%COMP%]{display:flex;align-items:center;max-width:70%}.block-body-status[_ngcontent-%COMP%]{align-items:center;border-top-right-radius:3px;border-bottom-right-radius:3px;background:#00c0ef;cursor:pointer;color:#fff;width:100px;font-weight:500;text-align:center}.block-body-content[_ngcontent-%COMP%], .block-body-status[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px}.block-body-content[_ngcontent-%COMP%]{max-width:85%;flex-direction:column}.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{font-weight:500;margin-bottom:2px;font-size:14px}.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0}.block-body-content[_ngcontent-%COMP%]   .content-desc[_ngcontent-%COMP%]{margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.block_none[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:#fff;border:none;border-radius:3px;box-shadow:0 0 6px rgba(0,0,0,.1215686275);margin-top:15px}.truncate[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;overflow:hidden;max-width:100%;padding:5px 0;white-space:nowrap}.text-student[_ngcontent-%COMP%]{font-weight:500}@media only screen and (max-width:768px){.block-body[_ngcontent-%COMP%], .block_none[_ngcontent-%COMP%]{height:auto}}";let X=(()=>{class t{constructor(t){this.dialog=t,this.data=[],this.pageSend=0,this.lengthPage=0,this.type=0,this.pageReset=0,this.DataRevert=new g.o,this.PageNumber=new g.o,this.isLoading=!1,this.viewButtomREmove=!1,this.dataTrashHomework=[],this.page=1,this.dataRevertDialog={obj:"",type:0,isShow:!1},this.allComplete=!1,this.allCompletes=this.data,this.task={}}setAll(t){null!=this.task.subtasks&&(this.task.subtasks.forEach(e=>e.completed=t),this.allComplete=1==t)}updateAllComplete(){this.allComplete=null!=this.task.subtasks&&this.task.subtasks.every(t=>t.completed)}someComplete(){return null!=this.task.subtasks&&this.task.subtasks.filter(t=>t.completed).length>0&&!this.allComplete}clickRemoveAllData(){var t=[];for(let e=0;e<this.task.subtasks.length;e++)1==this.task.subtasks[e].completed&&t.push(this.task.subtasks[e].id);this.dialog.open(Z,{width:"750px",data:{type:this.type,data:t}}).afterClosed().subscribe(t=>{"remove"==t&&this.DataRevert.emit({page:this.page,type:this.type})})}closeRevertDialog(t){t?(this.dataRevertDialog={obj:"",type:0,isShow:!1},this.DataRevert.emit({page:this.page,type:this.type})):this.dataRevertDialog={obj:"",type:0,isShow:!1}}clickRevertData(t,e){this.dataRevertDialog={obj:t,type:e,isShow:!0}}clickPage(t){this.page=t,this.PageNumber.emit({page:this.page,type:this.type})}dataProcessing(){var t=[];if(0!=this.data.length)for(var e=0;e<this.data.objs.length;e++)t.push(Object.assign(Object.assign({},this.data.objs[e]),{completed:!1}));this.task={completed:!1,subtasks:t}}ngOnInit(){}ngOnChanges(){this.page=this.pageSend,this.dataProcessing()}}return t.\u0275fac=function(e){return new(e||t)(g.Ob(r.b))},t.\u0275cmp=g.Ib({type:t,selectors:[["app-trash-tab"]],inputs:{data:"data",pageSend:"pageSend",lengthPage:"lengthPage",type:"type",pageReset:"pageReset"},outputs:{DataRevert:"DataRevert",PageNumber:"PageNumber"},features:[g.Ab],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["doneLoading",""],[4,"ngIf"],[3,"lengthPage","paging","SendPage"],[3,"data","closeDialog",4,"ngIf"],["color","primary",1,"check-all",3,"checked","change"],["style","float: right; margin: 14px; padding: 6px 15px; background: #f44336; color: white; border-radius: 5px;",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"float","right","margin","14px","padding","6px 15px","background","#f44336","color","white","border-radius","5px",3,"click"],[1,"block-body"],[1,"block-body-main"],[1,"check-item"],["color","primary",3,"ngModel","ngModelChange"],[1,"block-body-content"],[1,"notify__active"],["class","truncate mr-2 text-student",3,"matTooltip",4,"ngIf"],["class","truncate",3,"matTooltip",4,"ngIf"],[1,"notify__time","truncate"],[3,"matTooltip"],[1,"block-body-status",3,"click"],[1,"text-center","text-white","class-info","pt-2","pb-2"],[1,"text-azo"],[1,"truncate","mr-2","text-student",3,"matTooltip"],[1,"truncate",3,"matTooltip"],[1,"block_none","py-5"],[3,"data","closeDialog"]],template:function(t,e){if(1&t&&(g.Nc(0,j,1,0,"azt-loading-effect",0),g.Nc(1,F,4,5,"ng-template",null,1,g.Oc)),2&t){const t=g.yc(2);g.mc("ngIf",e.isLoading)("ngIfElse",t)}},directives:[i.m,v.a,C.a,y.a,i.l,a.r,a.u,k.a,N],pipes:[i.e],styles:[G]}),t})(),Z=(()=>{class t{constructor(t,e,n,o){this.apiService=t,this.commonService=e,this.dialogRef=n,this.data=o}postRemoveExam(t){this.apiService.postRemoveExam(t).subscribe(t=>{1==t.success?(this.onNoClick("remove"),this.commonService.snackSuccess("X\xf3a \u0111\u1ec1 thi th\xe0nh c\xf4ng","")):(this.onNoClick("cancel"),this.commonService.snackError("L\u1ed7i: x\xf3a \u0111\u1ec1 thi kh\xf4ng th\xe0nh c\xf4ng",""))})}postRemoveExamCategory(t){this.apiService.postRemoveExamCategory(t).subscribe(t=>{1==t.success?(this.onNoClick("remove"),this.commonService.snackSuccess("X\xf3a th\u01b0 m\u1ee5c \u0111\u1ec1 thi th\xe0nh c\xf4ng","")):(this.onNoClick("cancel"),this.commonService.snackError("L\u1ed7i: x\xf3a th\u01b0 m\u1ee5c \u0111\u1ec1 thi kh\xf4ng th\xe0nh c\xf4ng",""))})}postRemoveHomework(t){this.apiService.postRemoveHomework(t).subscribe(t=>{1==t.success?(this.onNoClick("remove"),this.commonService.snackSuccess("X\xf3a b\xe0i t\u1eadp th\xe0nh c\xf4ng","")):(this.onNoClick("cancel"),this.commonService.snackError("L\u1ed7i: x\xf3a b\xe0i t\u1eadp kh\xf4ng th\xe0nh c\xf4ng",""))})}postRemoveClassroom(t){this.apiService.postRemoveClassroom(t).subscribe(t=>{1==t.success?(this.onNoClick("remove"),this.commonService.snackSuccess("X\xf3a l\u1edbp h\u1ecdc th\xe0nh c\xf4ng","")):(this.onNoClick("cancel"),this.commonService.snackError("L\u1ed7i: x\xf3a l\u1edbp h\u1ecdc kh\xf4ng th\xe0nh c\xf4ng",""))})}postRemoveStudent(t){this.apiService.postRemoveStudent(t).subscribe(t=>{1==t.success?(this.onNoClick("remove"),this.commonService.snackSuccess("X\xf3a h\u1ecdc sinh th\xe0nh c\xf4ng","")):(this.onNoClick("cancel"),this.commonService.snackError("L\u1ed7i: x\xf3a h\u1ecdc sinh kh\xf4ng th\xe0nh c\xf4ng",""))})}changeRemove(t){var e={ids:t.data};0==t.type?this.postRemoveClassroom(e):1==t.type?this.postRemoveStudent(e):2==t.type?this.postRemoveHomework(e):3==t.type?this.postRemoveExam(e):4==t.type&&this.postRemoveExamCategory(e)}ngOnInit(){}onNoClick(t){this.dialogRef.close(t)}}return t.\u0275fac=function(e){return new(e||t)(g.Ob(p.a),g.Ob(m.a),g.Ob(r.g),g.Ob(r.a))},t.\u0275cmp=g.Ib({type:t,selectors:[["dialog-overview-example-dialog"]],decls:12,vars:2,consts:[[2,"border-bottom","1px solid","margin-bottom","20px","padding-bottom","10px"],[2,"color","#6d6d6d","font-weight","400!important","text-align","center","font-size","18px"],[2,"color","#dc3545!important"],[2,"float","right"],["type","button",1,"btn","btn-danger","mr-3",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(g.Ub(0,"div"),g.Ub(1,"div",0),g.Ub(2,"p",1),g.Pc(3," B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a "),g.Ub(4,"span",2),g.Pc(5),g.Tb(),g.Pc(6," \u0111\xe3 \u0111\xe1nh d\u1ea5u ra kh\u1ecfi th\xf9ng r\xe1c? "),g.Tb(),g.Tb(),g.Ub(7,"div",3),g.Ub(8,"button",4),g.bc("click",function(){return e.onNoClick("cancal")}),g.Pc(9,"H\u1ee7y"),g.Tb(),g.Ub(10,"button",5),g.bc("click",function(){return e.changeRemove(e.data)}),g.Pc(11,"Ti\u1ebfp t\u1ee5c"),g.Tb(),g.Tb(),g.Tb()),2&t&&(g.Cb(5),g.Sc(" ",e.data.data.length," ",0==e.data.type?" l\u1edbp h\u1ecdc ":1==e.data.type?" h\u1ecdc sinh ":2==e.data.type?" b\xe0i t\u1eadp ":3==e.data.type?" \u0111\u1ec1 thi ":4==e.data.type?" th\u01b0 m\u1ee5c \u0111\u1ec1 thi ":""," "))},styles:[G]}),t})();function $(t,e){1&t&&g.Pb(0,"div",11)}function Y(t,e){if(1&t){const t=g.Vb();g.Ub(0,"app-trash-tab",14),g.bc("PageNumber",function(e){return g.Cc(t),g.fc(2).checkClickPage(e)})("DataRevert",function(e){return g.Cc(t),g.fc(2).checkRevertData(e)}),g.Tb()}if(2&t){const t=g.fc(2);g.mc("data",t.dataTrashClassroom)("lengthPage",t.lengthPage)("type",0)("pageSend",t.page)}}function Q(t,e){if(1&t&&(g.Ub(0,"div",12),g.Nc(1,Y,1,4,"app-trash-tab",13),g.Tb()),2&t){const t=g.fc();g.Cb(1),g.mc("ngIf",0==t.typeTab)}}function q(t,e){1&t&&g.Pb(0,"div",11)}function J(t,e){if(1&t){const t=g.Vb();g.Ub(0,"app-trash-tab",14),g.bc("PageNumber",function(e){return g.Cc(t),g.fc(2).checkClickPage(e)})("DataRevert",function(e){return g.Cc(t),g.fc(2).checkRevertData(e)}),g.Tb()}if(2&t){const t=g.fc(2);g.mc("data",t.dataTrashStudent)("lengthPage",t.lengthPage)("type",1)("pageSend",t.page)}}function W(t,e){if(1&t&&(g.Ub(0,"div",12),g.Nc(1,J,1,4,"app-trash-tab",13),g.Tb()),2&t){const t=g.fc();g.Cb(1),g.mc("ngIf",1==t.typeTab)}}function tt(t,e){1&t&&g.Pb(0,"div",11)}function et(t,e){if(1&t){const t=g.Vb();g.Ub(0,"app-trash-tab",14),g.bc("PageNumber",function(e){return g.Cc(t),g.fc(2).checkClickPage(e)})("DataRevert",function(e){return g.Cc(t),g.fc(2).checkRevertData(e)}),g.Tb()}if(2&t){const t=g.fc(2);g.mc("data",t.dataTrashHomework)("lengthPage",t.lengthPage)("type",2)("pageSend",t.page)}}function nt(t,e){if(1&t&&(g.Ub(0,"div",12),g.Nc(1,et,1,4,"app-trash-tab",13),g.Tb()),2&t){const t=g.fc();g.Cb(1),g.mc("ngIf",2==t.typeTab)}}function ot(t,e){1&t&&g.Pb(0,"div",11)}function it(t,e){if(1&t){const t=g.Vb();g.Ub(0,"app-trash-tab",14),g.bc("PageNumber",function(e){return g.Cc(t),g.fc(2).checkClickPage(e)})("DataRevert",function(e){return g.Cc(t),g.fc(2).checkRevertData(e)}),g.Tb()}if(2&t){const t=g.fc(2);g.mc("data",t.dataTrashExam)("lengthPage",t.lengthPage)("type",3)("pageSend",t.page)}}function st(t,e){if(1&t&&(g.Ub(0,"div",12),g.Nc(1,it,1,4,"app-trash-tab",13),g.Tb()),2&t){const t=g.fc();g.Cb(1),g.mc("ngIf",3==t.typeTab)}}function at(t,e){1&t&&g.Pb(0,"div",11)}function ct(t,e){if(1&t){const t=g.Vb();g.Ub(0,"app-trash-tab",14),g.bc("PageNumber",function(e){return g.Cc(t),g.fc(2).checkClickPage(e)})("DataRevert",function(e){return g.Cc(t),g.fc(2).checkRevertData(e)}),g.Tb()}if(2&t){const t=g.fc(2);g.mc("data",t.dataTrashCategory)("lengthPage",t.lengthPage)("type",4)("pageSend",t.page)}}function rt(t,e){if(1&t&&(g.Ub(0,"div",12),g.Nc(1,ct,1,4,"app-trash-tab",13),g.Tb()),2&t){const t=g.fc();g.Cb(1),g.mc("ngIf",4==t.typeTab)}}let ht=(()=>{class t{constructor(t,e,n,o){this.router=t,this.vps=e,this.commonService=n,this.apiService=o,this.dataTrashClassroom=[],this.dataTrashExam=[],this.dataTrashCategory=[],this.dataTrashHomework=[],this.dataTrashStudent=[],this.isLoading=!1,this.typeTab=0,this.page=1,this.lengthPage=0}getDataStudent(t){this.isLoading=!0,this.apiService.getTrashStudentObjs(t).subscribe(t=>{1==t.success&&(this.dataTrashStudent=t.data,this.lengthPage=Math.ceil(this.dataTrashStudent.total/18)),this.isLoading=!1})}getDataHomework(t){this.isLoading=!0,this.apiService.getTrashHomeworkObjs(t).subscribe(t=>{1==t.success&&(this.dataTrashHomework=t.data,this.lengthPage=Math.ceil(this.dataTrashHomework.total/18)),this.isLoading=!1})}getDataCategory(t){this.isLoading=!0,this.apiService.getTrashExamCategoryObjs(t).subscribe(t=>{1==t.success&&(this.dataTrashCategory=t.data,this.lengthPage=Math.ceil(this.dataTrashCategory.total/18)),this.isLoading=!1})}getDataExam(t){this.isLoading=!0,this.apiService.getTrashExamObjs(t).subscribe(t=>{1==t.success&&(this.dataTrashExam=t.data,this.lengthPage=Math.ceil(this.dataTrashExam.total/18)),this.isLoading=!1})}getDataClassroom(t){this.isLoading=!0,this.apiService.getTrashClassroomObjs(t).subscribe(t=>{1==t.success&&(this.dataTrashClassroom=t.data,this.lengthPage=Math.ceil(this.dataTrashClassroom.total/18)),this.isLoading=!1})}checkGetData(t){switch(null!=t.index&&(this.typeTab=t.index),this.commonService.myNavigation("/admin/trash/"+this.typeTab),this.typeTab){case 0:this.getDataClassroom(this.page);break;case 1:this.getDataStudent(this.page);break;case 2:this.getDataHomework(this.page);break;case 3:this.getDataExam(this.page);break;case 4:this.getDataCategory(this.page)}}checkClickPage(t){switch(this.isLoading=!0,this.page=t.page,t.type){case 0:this.getDataClassroom(t.page);break;case 1:this.getDataStudent(t.page);break;case 2:this.getDataHomework(t.page);break;case 3:this.getDataExam(t.page);break;case 4:this.getDataCategory(t.page)}window.scrollTo(0,0)}checkRevertData(t){switch(this.isLoading=!0,t.type){case 0:this.getDataClassroom(t.page);break;case 1:this.getDataStudent(t.page);break;case 2:this.getDataHomework(t.page);break;case 3:this.getDataExam(t.page);break;case 4:this.getDataCategory(t.page)}}ngOnInit(){this.typeTab=this.router.snapshot.paramMap.get("type"),this.typeTab=parseInt(this.typeTab),this.checkGetData(""),this.commonService.translateMetaData({title:"lang_cms_trash_title",description:"lang_cms_trash_description",image:"lang_cms_test_image"})}}return t.\u0275fac=function(e){return new(e||t)(g.Ob(o.a),g.Ob(i.w),g.Ob(m.a),g.Ob(p.a))},t.\u0275cmp=g.Ib({type:t,selectors:[["app-trash"]],decls:19,vars:13,consts:[[3,"headerTitle","back_link"],[1,"container"],[1,"app","py-4","maxW1200"],[3,"selectedIndex","selectedTabChange"],["label","L\u1edbp h\u1ecdc"],["class","spinner-border spinner-border-sm","role","status","style","display: flex; margin: 20% auto;",4,"ngIf"],["class","wrapper",4,"ngIf"],["label","H\u1ecdc sinh"],["label","B\xe0i t\u1eadp"],["label","\u0110\u1ec1 thi"],["label","Th\u01b0 m\u1ee5c \u0111\u1ec1 thi"],["role","status",1,"spinner-border","spinner-border-sm",2,"display","flex","margin","20% auto"],[1,"wrapper"],[3,"data","lengthPage","type","pageSend","PageNumber","DataRevert",4,"ngIf"],[3,"data","lengthPage","type","pageSend","PageNumber","DataRevert"]],template:function(t,e){1&t&&(g.Pb(0,"header-backend",0),g.Ub(1,"div",1),g.Ub(2,"div",2),g.Ub(3,"mat-tab-group",3),g.bc("selectedTabChange",function(t){return e.checkGetData(t)}),g.Ub(4,"mat-tab",4),g.Nc(5,$,1,0,"div",5),g.Nc(6,Q,2,1,"div",6),g.Tb(),g.Ub(7,"mat-tab",7),g.Nc(8,q,1,0,"div",5),g.Nc(9,W,2,1,"div",6),g.Tb(),g.Ub(10,"mat-tab",8),g.Nc(11,tt,1,0,"div",5),g.Nc(12,nt,2,1,"div",6),g.Tb(),g.Ub(13,"mat-tab",9),g.Nc(14,ot,1,0,"div",5),g.Nc(15,st,2,1,"div",6),g.Tb(),g.Ub(16,"mat-tab",10),g.Nc(17,at,1,0,"div",5),g.Nc(18,rt,2,1,"div",6),g.Tb(),g.Tb(),g.Tb(),g.Tb()),2&t&&(g.mc("headerTitle","Th\xf9ng R\xe1c")("back_link","/admin/testbank/dashboard"),g.Cb(3),g.mc("selectedIndex",e.typeTab),g.Cb(2),g.mc("ngIf",!0===e.isLoading),g.Cb(1),g.mc("ngIf",!1===e.isLoading),g.Cb(2),g.mc("ngIf",!0===e.isLoading),g.Cb(1),g.mc("ngIf",!1===e.isLoading),g.Cb(2),g.mc("ngIf",!0===e.isLoading),g.Cb(1),g.mc("ngIf",!1===e.isLoading),g.Cb(2),g.mc("ngIf",!0===e.isLoading),g.Cb(1),g.mc("ngIf",!1===e.isLoading),g.Cb(2),g.mc("ngIf",!0===e.isLoading),g.Cb(1),g.mc("ngIf",!1===e.isLoading))},directives:[u.a,f.b,f.a,i.m,X],styles:[".wrapper[_ngcontent-%COMP%]{overflow-x:hidden}"]}),t})();const lt=[{path:"",component:ht,canActivate:[d.a],children:[{path:"",canActivateChild:[d.a],children:[{path:"",component:ht}]}]}];let dt=(()=>{class t{}return t.\u0275mod=g.Mb({type:t}),t.\u0275inj=g.Lb({factory:function(e){return new(e||t)},imports:[[o.l.forChild(lt)],o.l,b.c]}),t})();var bt=n("rIor"),gt=n("Zhhu");let mt=(()=>{class t{}return t.\u0275mod=g.Mb({type:t}),t.\u0275inj=g.Lb({factory:function(e){return new(e||t)},imports:[[o.l,i.c,s.a,c.b,a.m,a.x,r.f,h.a,l.b,bt.b,dt,gt.a]]}),t})()},fB2i:function(t,e,n){"use strict";n.d(e,"a",function(){return k}),n.d(e,"b",function(){return w});var o=n("fXoL"),i=n("ofXK"),s=n("3Pt+");function a(t,e){}const c=()=>{const t="undefined"!=typeof window?window:void 0;return t&&t.tinymce?t.tinymce:null};let r=(()=>{class t{constructor(){this.onBeforePaste=new o.o,this.onBlur=new o.o,this.onClick=new o.o,this.onContextMenu=new o.o,this.onCopy=new o.o,this.onCut=new o.o,this.onDblclick=new o.o,this.onDrag=new o.o,this.onDragDrop=new o.o,this.onDragEnd=new o.o,this.onDragGesture=new o.o,this.onDragOver=new o.o,this.onDrop=new o.o,this.onFocus=new o.o,this.onFocusIn=new o.o,this.onFocusOut=new o.o,this.onKeyDown=new o.o,this.onKeyPress=new o.o,this.onKeyUp=new o.o,this.onMouseDown=new o.o,this.onMouseEnter=new o.o,this.onMouseLeave=new o.o,this.onMouseMove=new o.o,this.onMouseOut=new o.o,this.onMouseOver=new o.o,this.onMouseUp=new o.o,this.onPaste=new o.o,this.onSelectionChange=new o.o,this.onActivate=new o.o,this.onAddUndo=new o.o,this.onBeforeAddUndo=new o.o,this.onBeforeExecCommand=new o.o,this.onBeforeGetContent=new o.o,this.onBeforeRenderUI=new o.o,this.onBeforeSetContent=new o.o,this.onChange=new o.o,this.onClearUndos=new o.o,this.onDeactivate=new o.o,this.onDirty=new o.o,this.onExecCommand=new o.o,this.onGetContent=new o.o,this.onHide=new o.o,this.onInit=new o.o,this.onInitNgModel=new o.o,this.onLoadContent=new o.o,this.onNodeChange=new o.o,this.onPostProcess=new o.o,this.onPostRender=new o.o,this.onPreInit=new o.o,this.onPreProcess=new o.o,this.onProgressState=new o.o,this.onRedo=new o.o,this.onRemove=new o.o,this.onReset=new o.o,this.onSaveContent=new o.o,this.onSetAttrib=new o.o,this.onObjectResizeStart=new o.o,this.onObjectResized=new o.o,this.onObjectSelected=new o.o,this.onSetContent=new o.o,this.onShow=new o.o,this.onSubmit=new o.o,this.onUndo=new o.o,this.onVisualAid=new o.o}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o.Jb({type:t,outputs:{onBeforePaste:"onBeforePaste",onBlur:"onBlur",onClick:"onClick",onContextMenu:"onContextMenu",onCopy:"onCopy",onCut:"onCut",onDblclick:"onDblclick",onDrag:"onDrag",onDragDrop:"onDragDrop",onDragEnd:"onDragEnd",onDragGesture:"onDragGesture",onDragOver:"onDragOver",onDrop:"onDrop",onFocus:"onFocus",onFocusIn:"onFocusIn",onFocusOut:"onFocusOut",onKeyDown:"onKeyDown",onKeyPress:"onKeyPress",onKeyUp:"onKeyUp",onMouseDown:"onMouseDown",onMouseEnter:"onMouseEnter",onMouseLeave:"onMouseLeave",onMouseMove:"onMouseMove",onMouseOut:"onMouseOut",onMouseOver:"onMouseOver",onMouseUp:"onMouseUp",onPaste:"onPaste",onSelectionChange:"onSelectionChange",onActivate:"onActivate",onAddUndo:"onAddUndo",onBeforeAddUndo:"onBeforeAddUndo",onBeforeExecCommand:"onBeforeExecCommand",onBeforeGetContent:"onBeforeGetContent",onBeforeRenderUI:"onBeforeRenderUI",onBeforeSetContent:"onBeforeSetContent",onChange:"onChange",onClearUndos:"onClearUndos",onDeactivate:"onDeactivate",onDirty:"onDirty",onExecCommand:"onExecCommand",onGetContent:"onGetContent",onHide:"onHide",onInit:"onInit",onInitNgModel:"onInitNgModel",onLoadContent:"onLoadContent",onNodeChange:"onNodeChange",onPostProcess:"onPostProcess",onPostRender:"onPostRender",onPreInit:"onPreInit",onPreProcess:"onPreProcess",onProgressState:"onProgressState",onRedo:"onRedo",onRemove:"onRemove",onReset:"onReset",onSaveContent:"onSaveContent",onSetAttrib:"onSetAttrib",onObjectResizeStart:"onObjectResizeStart",onObjectResized:"onObjectResized",onObjectSelected:"onObjectSelected",onSetContent:"onSetContent",onShow:"onShow",onSubmit:"onSubmit",onUndo:"onUndo",onVisualAid:"onVisualAid"}}),t})();const h=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],l=(t,e)=>"string"==typeof t?t.split(",").map(t=>t.trim()):Array.isArray(t)?t:e;let d=0;const b=t=>{const e=(new Date).getTime(),n=Math.floor(1e9*Math.random());return d++,t+"_"+n+d+String(e)},g=t=>void 0!==t&&"textarea"===t.tagName.toLowerCase(),m=t=>void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" "),p=()=>{},u=t=>null==t,f=()=>({listeners:[],scriptId:b("tiny-script"),scriptLoaded:!1}),v=(()=>{let t=f();return{load:(e,n,o)=>{t.scriptLoaded?o():(t.listeners.push(o),e.getElementById(t.scriptId)||((e,n,o,i)=>{const s=n.createElement("script");s.referrerPolicy="origin",s.type="application/javascript",s.id=e,s.src=o;const a=()=>{s.removeEventListener("load",a),t.listeners.forEach(t=>t()),t.scriptLoaded=!0};s.addEventListener("load",a),n.head&&n.head.appendChild(s)})(t.scriptId,e,n))},reinitialize:()=>{t=f()}}})(),C=new o.s("TINYMCE_SCRIPT_SRC"),y={provide:s.p,useExisting:Object(o.W)(()=>k),multi:!0};let k=(()=>{class t extends r{constructor(t,e,n,o){super(),this.platformId=n,this.tinymceScriptSrc=o,this.cloudChannel="5",this.apiKey="no-api-key",this.id="",this.modelEvents="change input undo redo",this.onTouchedCallback=p,this.onChangeCallback=p,this._elementRef=t,this.ngZone=e,this.initialise=this.initialise.bind(this)}set disabled(t){this._disabled=t,this._editor&&this._editor.initialized&&this._editor.setMode(t?"readonly":"design")}get disabled(){return this._disabled}get editor(){return this._editor}writeValue(t){this._editor&&this._editor.initialized?this._editor.setContent(u(t)?"":t):this.initialValue=null===t?void 0:t}registerOnChange(t){this.onChangeCallback=t}registerOnTouched(t){this.onTouchedCallback=t}setDisabledState(t){this._editor?this._editor.setMode(t?"readonly":"design"):t&&(this.init=Object.assign(Object.assign({},this.init),{readonly:!0}))}ngAfterViewInit(){Object(i.y)(this.platformId)&&(this.id=this.id||b("tiny-angular"),this.inline=void 0!==this.inline?"boolean"!=typeof this.inline||this.inline:this.init&&this.init.inline,this.createElement(),null!==c()?this.initialise():this._element&&this._element.ownerDocument&&v.load(this._element.ownerDocument,this.getScriptSrc(),this.initialise))}ngOnDestroy(){null!==c()&&c().remove(this._editor)}createElement(){this._element=document.createElement(this.inline?"string"==typeof this.tagName?this.tagName:"div":"textarea"),this._element&&(this._element.id=this.id,g(this._element)&&(this._element.style.visibility="hidden"),this._elementRef.nativeElement.appendChild(this._element))}initialise(){const t=Object.assign(Object.assign({},this.init),{target:this._element,inline:this.inline,readonly:this.disabled,plugins:(e=this.init&&this.init.plugins,n=this.plugins,m(e).concat(m(n))),toolbar:this.toolbar||this.init&&this.init.toolbar,setup:t=>{this._editor=t,t.on("init",e=>{this.initEditor(t)}),((t,e)=>{(t=>{const e=l(t.ignoreEvents,[]);return l(t.allowedEvents,h).filter(t=>h.includes(t)&&!e.includes(t))})(t).forEach(n=>{const o=t[n];e.on(n.substring(2),n=>t.ngZone.run(()=>o.emit({event:n,editor:e})))})})(this,t),this.init&&"function"==typeof this.init.setup&&this.init.setup(t)}});var e,n;g(this._element)&&(this._element.style.visibility=""),this.ngZone.runOutsideAngular(()=>{c().init(t)})}getScriptSrc(){return u(this.tinymceScriptSrc)?`https://cdn.tiny.cloud/1/${this.apiKey}/tinymce/${this.cloudChannel}/tinymce.min.js`:this.tinymceScriptSrc}initEditor(t){t.on("blur",()=>this.ngZone.run(()=>this.onTouchedCallback())),t.on(this.modelEvents,()=>{this.ngZone.run(()=>this.onChangeCallback(t.getContent({format:this.outputFormat})))}),"string"==typeof this.initialValue&&this.ngZone.run(()=>{t.setContent(this.initialValue),t.getContent()!==this.initialValue&&this.onChangeCallback(t.getContent({format:this.outputFormat})),void 0!==this.onInitNgModel&&this.onInitNgModel.emit(t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(o.l),o.Ob(o.B),o.Ob(o.D),o.Ob(C,8))},t.\u0275cmp=o.Ib({type:t,selectors:[["editor"]],inputs:{cloudChannel:"cloudChannel",apiKey:"apiKey",id:"id",modelEvents:"modelEvents",disabled:"disabled",initialValue:"initialValue",init:"init",inline:"inline",outputFormat:"outputFormat",tagName:"tagName",plugins:"plugins",toolbar:"toolbar",allowedEvents:"allowedEvents",ignoreEvents:"ignoreEvents"},features:[o.Bb([y]),o.zb],decls:1,vars:0,template:function(t,e){1&t&&o.Nc(0,a,0,0,"ng-template")},styles:["[_nghost-%COMP%] { display: block; }"]}),t})(),w=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},imports:[[i.c,s.m]]}),t})()},kmNb:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var o=n("fXoL"),i=n("yTNM"),s=n("tyNb"),a=n("gbi4");let c=(()=>{class t{constructor(t,e,n){this.apiService=t,this.router=e,this.commonService=n}canActivate(t,e){return window,!!this.apiService.isLogin()||(this.commonService.redirectLoginAnonymous(e.url),!1)}canActivateChild(t,e){return this.canActivate(t,e)}canLoad(t){const e="/"+t.path;return!!this.apiService.isLogin()||(this.commonService.redirectLoginByReturnUrl(e),!1)}}return t.\u0275fac=function(e){return new(e||t)(o.Yb(i.a),o.Yb(s.i),o.Yb(a.a))},t.\u0275prov=o.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);