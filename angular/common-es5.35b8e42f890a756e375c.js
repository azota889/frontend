!function(){function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{MDNF:function(i,n,a){"use strict";a.d(n,"a",function(){return v});var o=a("fXoL"),c=a("3Pt+"),r=a("quSY"),s=a("tyNb"),l=a("gbi4"),b=a("Avyq"),f=a("yTNM"),u=a("ofXK"),g=a("Qu3c");function p(e,i){1&e&&(o.Ub(0,"div",3),o.Ub(1,"p",4),o.Pc(2," Ch\u1ecdn l\u1edbp "),o.Tb(),o.Tb())}function d(e,i){if(1&e){var t=o.Vb();o.Ub(0,"div",7),o.Ub(1,"div",8),o.bc("click",function(){o.Cc(t);var e=i.$implicit;return o.fc(2).selectedClass(e)}),o.Ub(2,"div",3),o.Ub(3,"p",9),o.Pc(4),o.gc(5,"slice"),o.Tb(),o.Tb(),o.Tb(),o.Tb()}if(2&e){var n=i.$implicit;o.Cb(3),o.nc("matTooltip",n.name.length>30?n.name:""),o.Cb(1),o.Qc(n.name.length>30?o.jc(5,2,n.name,0,28)+"..":n.name)}}function h(e,i){if(1&e&&(o.Ub(0,"div",5),o.Nc(1,d,6,6,"div",6),o.Tb()),2&e){var t=o.fc();o.Cb(1),o.mc("ngForOf",t.classList)}}var m=function(e,i){return{margin_question_bar_40:e,margin_question_bar_60:i}},v=function(){var i=function(){function i(t,n,a,s,l,b){e(this,i),this.fb=t,this.activeRoute=n,this.router=a,this.commonService=s,this.localize=l,this.apiService=b,this.isSearchTeacher=!1,this.isMobile=!1,this.selectClassroom=new o.o,this.approvedByName=new o.o,this.subscriptions=new r.a,this.formName=new c.k({}),this.status_obj={loading:!1,error:!1,error_obj:{message:""}},this.classList=[],this.classObj={}}return t(i,[{key:"approvedToClass",value:function(){var e=this.getFormObj(this.formName);this.approvedByName.emit({nameEmit:e.fullName,classId:this.classObj.id})}},{key:"selectedClass",value:function(e){this.selectClassroom.emit({classObj:e,type:1})}},{key:"getError",value:function(e){return!(!this.formName.controls[e]||!this.formName.controls[e].errors)&&this.formName.controls[e].errors}},{key:"getErrorType",value:function(e,i){return!!(this.formName.controls[e]&&this.formName.controls[e].errors&&this.formName.controls[e].errors[i])&&this.formName.controls[e].errors[i]}},{key:"getFormObj",value:function(e){var i=e.value;for(var t in i)i[t]=e.get(t).value;return i}},{key:"isEmpty",value:function(e){for(var i in e)if(e.hasOwnProperty(i))return!1;return!0}},{key:"ngOnChanges",value:function(){this.dataClass&&this.dataClass.length>0&&(this.classList=this.dataClass)}},{key:"ngOnInit",value:function(){this.formName=this.fb.group({fullName:new c.h("",[c.z.required])}),this.dataClass&&this.dataClass.length>0&&(this.classList=this.dataClass)}},{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}}]),i}();return i.\u0275fac=function(e){return new(e||i)(o.Ob(c.g),o.Ob(s.a),o.Ob(s.i),o.Ob(l.a),o.Ob(b.e),o.Ob(f.a))},i.\u0275cmp=o.Ib({type:i,selectors:[["app-select-classes"]],inputs:{dataClass:"dataClass",isSearchTeacher:"isSearchTeacher",isMobile:"isMobile"},outputs:{selectClassroom:"selectClassroom",approvedByName:"approvedByName"},features:[o.Ab],decls:3,vars:6,consts:[[1,"container",3,"ngClass"],["class","text-center",4,"ngIf"],["class","row ml-0 mr-0 pl-0 pr-0",4,"ngIf"],[1,"text-center"],[1,"title"],[1,"row","ml-0","mr-0","pl-0","pr-0"],["class","col-12 col-sm-12 col-md-4 col-lg-3 mb-2",4,"ngFor","ngForOf"],[1,"col-12","col-sm-12","col-md-4","col-lg-3","mb-2"],[1,"card","pt-3","pb-3","pl-2","pr-1","clickable","select_class",3,"click"],[1,"h5","mb-1","card-title","text-white",3,"matTooltip"]],template:function(e,i){1&e&&(o.Ub(0,"div",0),o.Nc(1,p,3,0,"div",1),o.Nc(2,h,2,1,"div",2),o.Tb()),2&e&&(o.mc("ngClass",o.sc(3,m,!i.isSearchTeacher&&!i.isMobile,!i.isSearchTeacher&&i.isMobile)),o.Cb(1),o.mc("ngIf",i.classList&&i.classList.length>0),o.Cb(1),o.mc("ngIf",i.classList&&i.classList.length>0))},directives:[u.k,u.m,u.l,g.a],pipes:[u.u],styles:[".margin_question_bar_40[_ngcontent-%COMP%]{margin-top:calc(2rem + 40px)!important}.margin_question_bar_60[_ngcontent-%COMP%]{margin-top:calc(2rem + 60px)!important}.student_obj[_ngcontent-%COMP%]{padding:5px;min-height:69px}.select_class[_ngcontent-%COMP%]{background:inherit;background-color:#3c8dbc;box-sizing:border-box;border-radius:5px;box-shadow:none;color:#fff}.isSelected[_ngcontent-%COMP%]{border:2px solid #004f7b}.isDisabled[_ngcontent-%COMP%]{opacity:.6}.title[_ngcontent-%COMP%]{color:#000;font-size:20px;margin-bottom:15px}"]}),i}()},YTzd:function(i,n,a){"use strict";a.d(n,"a",function(){return d});var o=a("fXoL"),c=a("3Pt+"),r=a("quSY"),s=a("tyNb"),l=a("gbi4"),b=a("Avyq"),f=a("yTNM"),u=a("ofXK"),g=a("bTqV");function p(e,i){if(1&e){var t=o.Vb();o.Ub(0,"div",1),o.Ub(1,"div",2),o.Ub(2,"div",3),o.Ub(3,"p",4),o.Pc(4," H\u1ecdc sinh "),o.Ub(5,"b"),o.Pc(6),o.Tb(),o.Pc(7),o.Ub(8,"b"),o.Pc(9),o.Tb(),o.Pc(10,". N\u1ebfu b\u1ea1n v\u1eabn ch\u1eafc ch\u1eafn \u0111\xf3 \u0111\xfang l\xe0 t\xean b\u1ea1n, vui l\xf2ng b\u1ea5m n\xfat "),o.Ub(11,"b"),o.Pc(12,'"B\xe1o gi\xe1o vi\xean"'),o.Tb(),o.Pc(13," \u0111\u1ec3 gi\xe1o vi\xean ki\u1ec3m tra l\u1ea1i. "),o.Tb(),o.Tb(),o.Ub(14,"div",5),o.Ub(15,"button",6),o.bc("click",function(){return o.Cc(t),o.fc().sendRequest()}),o.Pc(16," B\xe1o gi\xe1o vi\xean "),o.Tb(),o.Ub(17,"div",7),o.Ub(18,"button",8),o.bc("click",function(){return o.Cc(t),o.fc().btnCloseDialog(!1)}),o.Pc(19," H\u1ee7y "),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()}if(2&e){var n=o.fc();o.Cb(6),o.Qc(n.studentObj.fullName),o.Cb(1),o.Rc(" \u0111\xe3 \u0111\u01b0\u1ee3c ch\u1ecdn b\u1edfi T\xe0i kho\u1ea3n v\u1edbi ",""!=n.studentObj.last4DigitPhone?"\u0111u\xf4i s\u1ed1 \u0110T - xxx xxx":"v\u1edbi t\xean Zalo - "," "),o.Cb(2),o.Qc(""!=n.studentObj.last4DigitPhone?n.studentObj.last4DigitPhone:n.studentObj.ZaloName)}}var d=function(){var i=function(){function i(t,n,a,s,l,b){e(this,i),this.fb=t,this.activeRoute=n,this.router=a,this.commonService=s,this.localize=l,this.apiService=b,this.isMobile=!1,this.closeDialog=new o.o,this.confirmSend=new o.o,this.subscriptions=new r.a,this.formName=new c.k({}),this.status_obj={loading:!1,error:!1,error_obj:{message:""}},this.studentObjs=[],this.studentObj={}}return t(i,[{key:"sendRequest",value:function(){var e=this;this.status_obj={loading:!0,error:!1,error_obj:{message:""}},this.apiService.sendRequestReApprove(this.data.classId,this.data.studentObj.id?this.data.studentObj.id:0).subscribe(function(i){e.confirmSend.emit(1==i.success)})}},{key:"getError",value:function(e){return!(!this.formName.controls[e]||!this.formName.controls[e].errors)&&this.formName.controls[e].errors}},{key:"getErrorType",value:function(e,i){return!!(this.formName.controls[e]&&this.formName.controls[e].errors&&this.formName.controls[e].errors[i])&&this.formName.controls[e].errors[i]}},{key:"getFormObj",value:function(e){var i=e.value;for(var t in i)i[t]=e.get(t).value;return i}},{key:"isEmpty",value:function(e){for(var i in e)if(e.hasOwnProperty(i))return!1;return!0}},{key:"btnCloseDialog",value:function(e){this.closeDialog.emit(e)}},{key:"goToLogin",value:function(){this.commonService.redirectToLoginBackLinkWithFromRegister(""+this.router.url)}},{key:"ngOnChanges",value:function(){this.data.studentObj&&(this.studentObj=this.data.studentObj)}},{key:"ngOnInit",value:function(){this.data.studentObj&&(this.studentObj=this.data.studentObj)}},{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}}]),i}();return i.\u0275fac=function(e){return new(e||i)(o.Ob(c.g),o.Ob(s.a),o.Ob(s.i),o.Ob(l.a),o.Ob(b.e),o.Ob(f.a))},i.\u0275cmp=o.Ib({type:i,selectors:[["app-send-request"]],inputs:{data:"data",isMobile:"isMobile",back_link:"back_link"},outputs:{closeDialog:"closeDialog",confirmSend:"confirmSend"},features:[o.Ab],decls:1,vars:1,consts:[["class","school-info_bg",4,"ngIf"],[1,"school-info_bg"],[1,"school-info","p-4"],[1,"text-center"],[1,"h5","para_respon","font-weight-normal"],[1,"d-flex","justify-content-center","mt-3"],["mat-raised-button","","color","primary",3,"click"],[1,"zalo-share-button",2,"margin-left","15px"],["mat-raised-button","",3,"click"]],template:function(e,i){1&e&&o.Nc(0,p,20,3,"div",0),2&e&&o.mc("ngIf",i.data.isShow)},directives:[u.m,g.b],styles:[".school-info_bg[_ngcontent-%COMP%]{z-index:9990;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;background:rgba(0,0,0,.5607843137254902);min-height:100vh}.school-info[_ngcontent-%COMP%]{z-index:9990;top:50%;left:50%;min-width:30%;transform:translate(-50%,-50%);position:fixed;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px rgba(0,0,0,.58)}.close-btn[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-7px;padding:5px 10px;background:#dadada;cursor:pointer;border-radius:20px}.note[_ngcontent-%COMP%]{font-style:italic;font-size:15px;font-weight:600}@media only screen and (max-width:1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:95%}}"]}),i}()},uZ1F:function(i,n,a){"use strict";a.d(n,"a",function(){return h});var o=a("fXoL"),c=a("ofXK");function r(e,i){if(1&e){var t=o.Vb();o.Ub(0,"a",9),o.bc("click",function(){return o.Cc(t),o.fc(2).clickPage(1)}),o.Pc(1,"\u0110\u1ea7u "),o.Tb()}}function s(e,i){if(1&e){var t=o.Vb();o.Ub(0,"li",4),o.Ub(1,"a",10),o.bc("click",function(){o.Cc(t);var e=o.fc(2);return e.clickPage(e.page-1)}),o.Ub(2,"span",11),o.Pc(3,"\xab"),o.Tb(),o.Ub(4,"span",12),o.Pc(5,"Previous"),o.Tb(),o.Tb(),o.Tb()}}function l(e,i){if(1&e){var t=o.Vb();o.Ub(0,"a",14),o.bc("click",function(){o.Cc(t);var e=o.fc().$implicit;return o.fc(2).clickPage(e)}),o.Pc(1),o.Tb()}if(2&e){var n=o.fc().$implicit;o.Cb(1),o.Rc("",n," ")}}function b(e,i){if(1&e){var t=o.Vb();o.Ub(0,"a",9),o.bc("click",function(){o.Cc(t);var e=o.fc().$implicit;return o.fc(2).clickPage(e)}),o.Pc(1),o.Tb()}if(2&e){var n=o.fc().$implicit;o.Cb(1),o.Rc("",n," ")}}function f(e,i){if(1&e&&(o.Ub(0,"li",4),o.Nc(1,l,2,1,"a",13),o.Nc(2,b,2,1,"a",5),o.Tb()),2&e){var t=i.$implicit,n=o.fc(2);o.Cb(1),o.mc("ngIf",n.page==t),o.Cb(1),o.mc("ngIf",n.page!=t&&t<=n.page+2&&t>=n.page-1)}}function u(e,i){1&e&&(o.Ub(0,"span",15),o.Pc(1,"..."),o.Tb())}function g(e,i){if(1&e){var t=o.Vb();o.Ub(0,"span",9),o.bc("click",function(){o.Cc(t);var e=o.fc(2);return e.clickPage(e.lengthPage)}),o.Pc(1),o.Tb()}if(2&e){var n=o.fc(2);o.Cb(1),o.Qc(n.lengthPage)}}function p(e,i){if(1&e){var t=o.Vb();o.Ub(0,"li",4),o.Ub(1,"a",16),o.bc("click",function(){o.Cc(t);var e=o.fc(2);return e.clickPage(e.page+1)}),o.Ub(2,"span",11),o.Pc(3,"\xbb"),o.Tb(),o.Ub(4,"span",12),o.Pc(5,"Next"),o.Tb(),o.Tb(),o.Tb()}}function d(e,i){if(1&e&&(o.Ub(0,"div",1),o.Ub(1,"nav",2),o.Ub(2,"ul",3),o.Ub(3,"li",4),o.Nc(4,r,2,0,"a",5),o.Tb(),o.Nc(5,s,6,0,"li",6),o.Nc(6,f,3,2,"li",7),o.Nc(7,u,2,0,"span",8),o.Nc(8,g,2,1,"span",5),o.Nc(9,p,6,0,"li",6),o.Tb(),o.Tb(),o.Tb()),2&e){var t=o.fc();o.Cb(4),o.mc("ngIf",t.page>2),o.Cb(1),o.mc("ngIf",t.page>1),o.Cb(1),o.mc("ngForOf",t.arrayPag),o.Cb(1),o.mc("ngIf",t.lengthPage>3&&t.page<t.lengthPage-3),o.Cb(1),o.mc("ngIf",t.lengthPage>3&&t.page<t.lengthPage-2),o.Cb(1),o.mc("ngIf",t.lengthPage>t.page&&t.lengthPage>=2)}}var h=function(){var i=function(){function i(){e(this,i),this.lengthPage=0,this.paging=1,this.SendPage=new o.o,this.page=1,this.arrayPag=[]}return t(i,[{key:"ArrayPage",value:function(){for(var e=1;e<=this.lengthPage;e++)this.arrayPag.push(e)}},{key:"clickPage",value:function(e){this.page=e,this.SendPage.emit(e)}},{key:"ngOnInit",value:function(){this.arrayPag=[],this.page=this.paging,this.ArrayPage()}},{key:"ngOnChanges",value:function(){this.arrayPag=[],this.page=this.paging,this.ArrayPage()}}]),i}();return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=o.Ib({type:i,selectors:[["azt-paging"]],inputs:{lengthPage:"lengthPage",paging:"paging"},outputs:{SendPage:"SendPage"},features:[o.Ab],decls:1,vars:1,consts:[["class","row mt-5 m-0 justify-content-center",4,"ngIf"],[1,"row","mt-5","m-0","justify-content-center"],["aria-label","Page navigation pagination-nav",2,"display","inline-block"],[1,"pagination"],[1,"page-item"],["class","btn btn-pag page-link",3,"click",4,"ngIf"],["class","page-item",4,"ngIf"],["class","page-item",4,"ngFor","ngForOf"],["style","padding: 16px 0 0 0; font-size: 25px;",4,"ngIf"],[1,"btn","btn-pag","page-link",3,"click"],["aria-label","Previous",1,"btn","btn-pag","page-link",3,"click"],["aria-hidden","true"],[1,"sr-only"],["style","background-color: #e9ecef;","class","btn btn-pag page-link",3,"click",4,"ngIf"],[1,"btn","btn-pag","page-link",2,"background-color","#e9ecef",3,"click"],[2,"padding","16px 0 0 0","font-size","25px"],["aria-label","Next",1,"btn","btn-pag","page-link",3,"click"]],template:function(e,i){1&e&&o.Nc(0,d,10,6,"div",0),2&e&&o.mc("ngIf",i.lengthPage>1)},directives:[c.m,c.l],encapsulation:2}),i}()},wAhq:function(i,n,a){"use strict";a.d(n,"a",function(){return _});var o=a("fXoL"),c=a("quSY"),r=a("BTbT"),s=a("gbi4"),l=a("jhN1"),b=a("ofXK"),f=a("NFeN"),u=a("IkSl");function g(e,i){if(1&e&&(o.Ub(0,"div"),o.Ub(1,"div",19),o.Ub(2,"audio",20),o.Pb(3,"source",21),o.Pc(4," Your browser does not support the audio element. "),o.Tb(),o.Tb(),o.Tb()),2&e){var t=o.fc(2);o.Cb(3),o.mc("src",t.cdn_link,o.Gc),o.Db("type",t.fileOption.mimes)}}function p(e,i){if(1&e&&(o.Ub(0,"div"),o.Ub(1,"div",22),o.Ub(2,"video",23),o.Pb(3,"source",21),o.Ub(4,"p",24),o.Pc(5," B\u1ea1n \u0111ang s\u1eed d\u1ee5ng tr\xecnh duy\u1ec7t kh\xf4ng h\u1ed7 tr\u1ee3 xem video tr\u1ef1c tuy\u1ebfn. "),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&e){var t=o.fc(2);o.Cb(2),o.nc("poster",t.video_thumb_url,o.Gc),o.Cb(1),o.mc("src",t.cdn_link,o.Gc),o.Db("type",t.fileOption.mimes)}}function d(e,i){if(1&e&&(o.Ub(0,"div"),o.Ub(1,"div",22),o.Pb(2,"img",25),o.Tb(),o.Tb()),2&e){var t=o.fc(2);o.Cb(2),o.Db("src",t.cdn_link,o.Gc)}}function h(e,i){if(1&e&&(o.Ub(0,"div"),o.Ub(1,"div",26),o.Pb(2,"iframe",27),o.Tb(),o.Tb()),2&e){var t=o.fc(2);o.Cb(2),o.mc("src",t.cdn_link,o.Ec)}}function m(e,i){if(1&e&&(o.Ub(0,"div"),o.Ub(1,"div",28),o.Pb(2,"pdf-viewer",29),o.Tb(),o.Tb()),2&e){var t=o.fc(2);o.Cb(2),o.mc("src",t.cdn_link)("show-all",!0)}}function v(e,i){if(1&e){var t=o.Vb();o.Ub(0,"div",1),o.Ub(1,"div",2),o.Ub(2,"div",3),o.Ub(3,"div",4),o.Nc(4,g,5,2,"div",5),o.Nc(5,p,6,3,"div",5),o.Nc(6,d,3,1,"div",5),o.Nc(7,h,3,1,"div",5),o.Nc(8,m,3,2,"div",5),o.Pb(9,"div",6),o.Tb(),o.Pb(10,"div",7),o.Tb(),o.Ub(11,"div",8),o.Ub(12,"div",9),o.Ub(13,"div",10),o.Pb(14,"div",11),o.Tb(),o.Ub(15,"div",12),o.Pc(16),o.Tb(),o.Ub(17,"div",13),o.Pc(18),o.Tb(),o.Tb(),o.Ub(19,"div",14),o.Ub(20,"span",15),o.Ub(21,"a",16),o.Ub(22,"mat-icon",17),o.Pc(23,"save_alt"),o.Tb(),o.Tb(),o.Tb(),o.Ub(24,"span",18),o.bc("click",function(){return o.Cc(t),o.fc().btnClosePreview()}),o.Ub(25,"mat-icon",17),o.Pc(26,"close"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()}if(2&e){var n=o.fc();o.Cb(4),o.mc("ngIf","audio"===n.typeFile),o.Cb(1),o.mc("ngIf","video"===n.typeFile),o.Cb(1),o.mc("ngIf","image"===n.typeFile),o.Cb(1),o.mc("ngIf","officeapps"===n.typeFile),o.Cb(1),o.mc("ngIf","pdf"===n.typeFile),o.Cb(8),o.Qc(n.fileOption.name),o.Cb(2),o.Sc("Dung l\u01b0\u1ee3ng: ",n.file_mb," MB | Lo\u1ea1i : ",n.fileOption.mimes,""),o.Cb(3),o.Db("href",n.root_link,o.Gc)("download",n.fileOption.name)}}var _=function(){var i=function(){function i(t,n,a){e(this,i),this.commonService=t,this.dom=n,this.sanitizer=a,this.closePreview=new o.o,this.subscriptions=new c.a,this.typeFile="",this.cdn_link="",this.root_link="",this.file_mb=0,this.video_thumb_url=""}return t(i,[{key:"ngOnInit",value:function(){this.initData(),this.video_thumb_url="https://5002373-s3user.cloudstorage.com.vn/viwewiin/storage_public/azota_assets/images/video-thumb.png"}},{key:"initData",value:function(){if(this.cdn_link=this.commonService.getMyCdn(this.fileOption.url),this.root_link=this.commonService.getMyCdn(this.fileOption.url),this.file_mb=this.getFileMB(this.fileOption.size),this.typeFile=Object(r.b)(this.fileOption.mimes),""!=this.cdn_link)switch(this.typeFile){case"pdf":this.cdn_link=this.cdn_link;break;case"officeapps":this.cdn_link=this.dom.bypassSecurityTrustResourceUrl(this.commonService.getLinkEmbedDocument(this.cdn_link));break;case"video":default:this.cdn_link=this.dom.bypassSecurityTrustResourceUrl(this.cdn_link)}}},{key:"btnClosePreview",value:function(){this.closePreview.emit()}},{key:"getFileMB",value:function(e){return e>0?(e/=1048576).toFixed(2):0}},{key:"reloadFrame",value:function(e){var i=document.getElementById(e);i&&i.parentNode.replaceChild(i.cloneNode(),i)}},{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}}]),i}();return i.\u0275fac=function(e){return new(e||i)(o.Ob(s.a),o.Ob(l.b),o.Ob(l.b))},i.\u0275cmp=o.Ib({type:i,selectors:[["azt-preview-media"]],inputs:{fileOption:"fileOption"},outputs:{closePreview:"closePreview"},decls:1,vars:1,consts:[["class","file-preview",4,"ngIf"],[1,"file-preview"],[1,"file-preview__main","flx",2,"overflow-x","auto","flex","1 1 auto"],[1,"file-preview__main-iframe","mx-auto"],[1,"file-preview__notify"],[4,"ngIf"],[1,"tool-hide"],[1,"file-preview__main-comments"],[1,"file-preview__header","flx","flx-sp-btw"],[1,"file-preview__header-left"],["title","",1,"avatar","avatar--xs"],[1,"avatar-img",2,"background-image",'url("https://5002373-s3user.cloudstorage.com.vn/viwewiin/storage_public/azota_assets/images/documents.png")',"background-size","cover"],[1,"file-preview__header__title"],[1,"file-preview__header__send-time"],[1,"file-preview__header-right"],[1,"file-preview__controls-container"],["target","_blank",1,"clickable","download"],[2,"color","rgb(53, 53, 53)","cursor","pointer"],[1,"file-preview__buttons-container",3,"click"],[1,"container-fluid","mt-3"],["controls",""],[3,"src"],[1,"pl-2","pr-2","mt-3"],["id","my-video","playsinline","playsinline","controls","","preload","auto","data-setup","{}",1,"video-js",2,"max-height","calc(100vh - 80px)","width","100%","padding-bottom","1rem",3,"poster"],[1,"vjs-no-js"],["alt","Responsive image",1,"img-fluid","image-preview",2,"max-height","calc(100vh - 80px)","padding-bottom","1rem"],[1,"pl-2","pr-2","mp-0"],["frameborder","0",2,"width","100vw","height","95vh","max-height","calc(100vh - 60px)","padding-bottom","1rem",3,"src"],[1,"container-fluid","mp-0"],[2,"width","100vw","height","95vh","max-height","calc(100vh - 60px)","padding-bottom","1rem","display","block",3,"src","show-all"]],template:function(e,i){1&e&&o.Nc(0,v,27,10,"div",0),2&e&&o.mc("ngIf",null!=i.fileOption)},directives:[b.m,f.a,u.a],styles:[".file-preview[_ngcontent-%COMP%]{position:absolute;height:100vh;z-index:9999;flex-direction:column;left:0;top:0}.file-preview[_ngcontent-%COMP%], .file-preview__main[_ngcontent-%COMP%]{background:#ecf0f5;width:100%;display:flex}.file-preview__main[_ngcontent-%COMP%]{margin-top:65px;min-height:100%;min-width:277px;position:fixed}.file-preview__header[_ngcontent-%COMP%]{padding-top:10px;height:65px;background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.2);position:fixed;align-items:center;z-index:1;top:0;width:100%}.flx-sp-btw[_ngcontent-%COMP%]{justify-content:space-between}.flx[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}.file-preview__header-left[_ngcontent-%COMP%]{margin-left:20px;margin-right:10px;margin-bottom:12px;flex:1 1 50px;min-width:0}.file-preview__header-left[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{float:left;margin-right:10px}.avatar--xs[_ngcontent-%COMP%]{width:40px;height:40px;font-size:17px}.avatar[_ngcontent-%COMP%]{position:relative;color:#fff;contain:layout size style}.avatar--xs[_ngcontent-%COMP%] > .avatar-img[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#e5efff}.avatar-img[_ngcontent-%COMP%]{border-radius:100%}.file-preview__header__title[_ngcontent-%COMP%]{font-size:15px;color:#222;font-weight:500}.file-preview__header__send-time[_ngcontent-%COMP%], .file-preview__header__title[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.file-preview__header__send-time[_ngcontent-%COMP%]{padding-top:2px;font-size:13px;color:#a0a0a0}.file-preview__header-right[_ngcontent-%COMP%]{color:#fff;margin-right:15px;white-space:nowrap;display:flex}.file-preview__controls-container[_ngcontent-%COMP%]{margin-right:40px}.file-preview__buttons-container[_ngcontent-%COMP%]{display:inline-flex;align-items:center;position:relative}.mp-0[_ngcontent-%COMP%]{margin:0!important;padding:0!important}"]}),i}()}}])}();