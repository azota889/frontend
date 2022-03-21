!function(){function t(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"5quN":function(t,n,o){"use strict";o.d(n,"a",function(){return d});var a=o("AytR"),r=o("fXoL"),c=o("pMRa"),s=o("gbi4"),d=function(){var t=function(){function t(n,o){e(this,t),this.apiCommonService=n,this.commonService=o}return i(t,[{key:"GetObjsAndPermissionsByClassroom",value:function(t,n){var e=a.a.base_api+"Homework/GetObjsAndPermissionsByClassroom?classroomId="+t+"&nextPage="+encodeURIComponent(n),o={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(e,o,!1)}},{key:"saveHomeWork",value:function(t,n,e,o,i,r,c,s,d,l,b){var m=a.a.base_api+"Homework/SaveObj",h={name:t,content:n,deadline:e,testbankExams:o,files:i,mustVerified:r,dontShowMark:c,whenShowAnswer:s,globalSetting:d,classroomIds:l},u={Authorization:"Bearer "+this.apiCommonService.getToken(),object:this.apiCommonService.createObjHeader(b)};return this.apiCommonService.commonHttp(m,u,h)}},{key:"getHomework",value:function(t,n){var e=a.a.base_api+"Homework/GetObj?homeworkHashId="+n+"&id="+t,o={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(e,o,!1)}},{key:"updateHomework",value:function(t,n,e,o,i,r,c,s,d,l,b,m,h){var u=a.a.base_api+"Homework/UpdateObj",g={id:t,homeworkHashId:m,name:n,content:e,deadline:o,testbankExams:i,files:r,mustVerified:c,dontShowMark:s,whenShowAnswer:d,globalSetting:l,classroomIds:b},f={Authorization:"Bearer "+this.apiCommonService.getToken(),object:this.apiCommonService.createObjHeader(h)};return this.apiCommonService.commonHttp(u,f,g)}},{key:"DeleteHomework",value:function(t,n){var e=a.a.base_api+"Homework/DeleteObj?homeworkHashId="+n+"&id="+t,o={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(e,o,!1)}},{key:"getHistoryAnswerHomeworkObjs",value:function(t,n){var e=a.a.base_api+"Answer/getHistoryObjs?homeworkHashId=".concat(n,"&answerId=").concat(t),o={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(e,o,!1)}},{key:"getHistoryAnswerHomework",value:function(t,n,e){var o=a.a.base_api+"Answer/getHistoryObj?homeworkHashId=".concat(e,"&answerId=").concat(t,"&historyId=").concat(n),i={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(o,i,!1)}},{key:"getAllHomeworkAndExam",value:function(){var t=a.a.base_api+"FrontStudent/GetHomeWorkAndExamOfStudent",n={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(t,n,!1)}},{key:"getClassroomInHomeworkObjsInDashboard",value:function(){var t=a.a.base_api+"FrontPageStudent/GetClassroomInHomeworkObjsInDashboard",n={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(t,n,!1)}},{key:"getHomePageWorkObjsByClassId",value:function(t,n){var e=a.a.base_api+"FrontPageStudent/GetHomeworkObjsInDashboardByClassId?classId=".concat(t,"&nextPage=").concat(encodeURIComponent(n)),o={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(e,o,!1)}},{key:"searchHomeworkObjsInDashboardByName",value:function(t){var n=a.a.base_api+"FrontPageStudent/SearchHomeworkObjsInDashboard?searchContent="+t,e={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(n,e,!1)}},{key:"getFrontHomework",value:function(t){var n=a.a.base_api+"FrontHomework/GetObj?homeworkHashId="+t,e={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(n,e,!1)}},{key:"submitAnswer",value:function(t,n){var e=a.a.base_api+"FrontAnswer/SaveObj",o={Authorization:"Bearer "+this.apiCommonService.getToken(),object:this.apiCommonService.createObjHeader(n)};return this.apiCommonService.commonHttp(e,o,t)}},{key:"viewAnswer",value:function(t,n){var e=a.a.base_api+"FrontAnswer/GetObj?homeworkHashId="+n+"&id="+t,o={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(e,o,!1)}},{key:"viewAnswerHistory",value:function(t,n){var e=a.a.base_api+"FrontAnswerHistory/GetObj?homeworkHashId="+n+"&id="+t,o={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(e,o,!1)}},{key:"addStudentToClass",value:function(t,n,e){var o=a.a.base_api+"FrontStudent/AddStudentToClassForHomework?homeworkHashId="+t+"&classroomId="+n+"&studentId="+e,i={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(o,i,!1)}},{key:"GetObjsByHomework",value:function(t,n){var e=a.a.base_api+"Answer/GetObjsByHomework?homeworkHashId="+n+"&homeworkId="+t,o={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(e,o,!1)}},{key:"GetStudentsHomework",value:function(t,n){var e=a.a.base_api+"Answer/GetStudentsHomework?homeworkHashId="+n+"&classId="+t,o={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(e,o,!1)}},{key:"searchStudentHomework",value:function(t,n,e,o){var i=a.a.base_api+"Answer/SearchStudentsHomework?homeworkId="+t+"&classId="+n+"&searchContent="+e+"&homeworkHashId="+o,r={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(i,r,!1)}},{key:"GetNextObjByHomework",value:function(t){var n=a.a.base_api+"Answer/GetNextObjByHomework?homeworkHashId="+t,e={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(n,e,!1)}},{key:"ResendAnswer",value:function(t){var n=a.a.base_api+"Answer/ResendAnswer",e={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(n,e,t)}},{key:"getSubmittedAnswers",value:function(t,n){var e=a.a.base_api+"Answer/GetObj?homeworkHashId="+n+"&id="+t,o={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(e,o,!1)}},{key:"saveResult",value:function(t,n,e,o,i){var r=a.a.base_api+"Answer/SaveResult",c={Authorization:"Bearer "+this.apiCommonService.getToken(),object:this.apiCommonService.createObjHeader(i)},s=n?n.replace(",","."):"0",d={id:t,comment:e.comment,hideMark:e.hideMark?1:0,point:s,result:this.commonService.convertContentGzip(JSON.stringify(e)),homeworkHashId:o};return this.apiCommonService.commonHttp(r,c,d)}},{key:"getHomeSuccessHomeWork",value:function(t){var n=a.a.base_api+"Homework/GetSuccessHomeworkObjs",e={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(n,e,{homeworkHashIds:t})}},{key:"ExportDataHomework",value:function(t){var n=a.a.base_api+"Classroom/ExportData?id="+t,e={Authorization:"Bearer "+this.apiCommonService.getToken()};return this.apiCommonService.commonHttp(n,e,!1)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(r.Zb(c.a),r.Zb(s.a))},t.\u0275prov=r.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},AWii:function(t,n,o){"use strict";o.d(n,"a",function(){return O});var a=o("fXoL"),r=o("tyNb"),c=o("gbi4"),s=o("Dcbt"),d=o("3Pt+"),l=o("ofXK"),b=o("0pw4"),m=o("NFeN"),h=o("bTqV"),u=o("wPhD");function g(t,n){1&t&&(a.Vb(0,"div",6),a.Vb(1,"div",7),a.Vb(2,"span",8),a.Rc(3,"Loading..."),a.Ub(),a.Ub(),a.Ub())}function f(t,n){if(1&t){var e=a.Wb();a.Vb(0,"button",20),a.cc("click",function(){a.Dc(e);var t=a.gc().$implicit;return a.gc(3).handleClick(t.id)}),a.Rc(1,"Tr\u1ea3 l\u1eddi"),a.Ub()}}function p(t,n){1&t&&(a.Vb(0,"div"),a.Rc(1,"\u0110\xe3 tr\u1ea3 l\u1eddi"),a.Ub())}function v(t,n){if(1&t){var e=a.Wb();a.Vb(0,"div"),a.Vb(1,"div",12),a.Vb(2,"div",13),a.cc("click",function(){a.Dc(e);var t=n.$implicit;return a.gc(3).handleClick(t.id)}),a.Vb(3,"p",14),a.Rc(4),a.Ub(),a.Vb(5,"p",15),a.Rc(6),a.Ub(),a.Vb(7,"p",16),a.Rc(8),a.Ub(),a.Ub(),a.Vb(9,"div",17),a.Pc(10,f,2,0,"button",18),a.Pc(11,p,2,0,"div",9),a.Ub(),a.Vb(12,"mat-icon",19),a.cc("click",function(){a.Dc(e);var t=n.$implicit;return a.gc(3).setDataConfirm(t.id,t.title)}),a.Rc(13,"clear"),a.Ub(),a.Ub(),a.Ub()}if(2&t){var o=n.$implicit,i=a.gc(3);a.Db(4),a.Tc(" ",o.title," "),a.Db(2),a.Tc("",i.calculationTime(o.createdAt)," tr\u01b0\u1edbc"),a.Db(2),a.Tc("",o.totalPeopleAsk," h\u1ecdc sinh h\u1ecfi"),a.Db(2),a.nc("ngIf",0==o.isAnswered),a.Db(1),a.nc("ngIf",0!=o.isAnswered)}}function x(t,n){1&t&&(a.Vb(0,"div",21),a.Vb(1,"div",22),a.Rc(2," Danh s\xe1ch tr\u1ed1ng "),a.Ub(),a.Ub())}function k(t,n){if(1&t&&(a.Vb(0,"div"),a.Pc(1,v,14,5,"div",10),a.Pc(2,x,3,0,"div",11),a.Ub()),2&t){var e=a.gc(2);a.Db(1),a.nc("ngForOf",e.ObjsInDashboardData.objs),a.Db(1),a.nc("ngIf",0==e.ObjsInDashboardData.objs.length)}}function w(t,n){if(1&t&&a.Pc(0,k,3,2,"div",9),2&t){var e=a.gc();a.nc("ngIf",e.ObjsInDashboardData&&e.ObjsInDashboardData.objs)}}function y(t,n){if(1&t){var e=a.Wb();a.Vb(0,"div",23),a.Vb(1,"a",24),a.cc("click",function(){return a.Dc(e),a.gc().PrevPaging()}),a.Vb(2,"mat-icon"),a.Rc(3,"arrow_back_ios"),a.Ub(),a.Ub(),a.Vb(4,"a",24),a.cc("click",function(){return a.Dc(e),a.gc().NextPaging()}),a.Vb(5,"mat-icon"),a.Rc(6,"arrow_forward_ios"),a.Ub(),a.Ub(),a.Ub()}if(2&t){var o=a.gc();a.Db(1),a.nc("disabled",1==o.page),a.Db(3),a.nc("disabled",1==o.isEndPage)}}function C(t,n){if(1&t){var e=a.Wb();a.Vb(0,"azt-dialog-confirm",25),a.cc("sendEvent",function(t){return a.Dc(e),a.gc().eventDialog(t)}),a.Ub()}if(2&t){var o=a.gc();a.nc("data",o.dataConfirm)}}var O=function(){var t=function(){function t(n,o,i,a,r,c,s){e(this,t),this.activeRoute=n,this.commonService=o,this.apiQAService=i,this.router=a,this.fb=r,this.vps=c,this.localStorageObjetct=s,this.isLoading=!1,this.ObjsInDashboardData=[],this.page=1,this.isEndPage=0,this.showConfirm=!1,this.dataConfirm={}}return i(t,[{key:"handleClick",value:function(t){this.commonService.myNavigation("/admin/teacher-qa/view-question/"+t)}},{key:"PrevPaging",value:function(){1!=this.page&&(this.page--,this.getObjsData())}},{key:"NextPaging",value:function(){0==this.isEndPage&&(this.page++,this.getObjsData())}},{key:"getObjsData",value:function(){var t=this;this.isLoading=!0,this.apiQAService.getTeacherQuestionDashboard(this.page).subscribe(function(n){1==n.success?(t.ObjsInDashboardData=n.data,t.isEndPage=n.data.isEndPage,t.isLoading=!1,t.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetObjsInDashboard"),t.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetAnswerObjs")):t.commonService.snackError("L\u1ed7i: Kh\xf4ng l\u1ea5y \u0111\u01b0\u1ee3c danh s\xe1ch c\xe2u h\u1ecfi","\u0110\xf3ng")})}},{key:"setDataConfirm",value:function(t,n){this.dataConfirm={id:t,title:n},this.showConfirm=!0}},{key:"TeacherQuestionDeleteObj",value:function(){var t=this;this.isLoading=!0,this.apiQAService.TeacherQuestionDeleteObj(this.dataConfirm.id).subscribe(function(n){1==n.success?(t.commonService.snackSuccess("X\xf3a c\xe2u h\u1ecfi th\xe0nh c\xf4ng",""),t.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetObjsInDashboard"),t.localStorageObjetct.removeCacheByValue("TeacherQuestion/GetAnswerObjs"),t.getObjsData(),t.showConfirm=!1):t.commonService.snackError("X\xf3a c\xe2u h\u1ecfi kh\xf4ng th\xe0nh c\xf4ng","\u0110\xf3ng"),t.isLoading=!1})}},{key:"eventDialog",value:function(t){"delete"==t?this.TeacherQuestionDeleteObj():"cancel"==t&&(this.dataConfirm={},this.showConfirm=!1)}},{key:"calculationTime",value:function(t){var n=new Date;return this.commonService.calculationTime(t,n)}},{key:"goToScreenQuestionOfStudent",value:function(){this.commonService.myNavigation("/admin/teacher-qa/list-questions")}},{key:"ngOnInit",value:function(){this.getObjsData()}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.Pb(r.a),a.Pb(c.a),a.Pb(s.a),a.Pb(r.a),a.Pb(d.g),a.Pb(l.w),a.Pb(b.a))},t.\u0275cmp=a.Jb({type:t,selectors:[["azt-list-questions"]],inputs:{screen:"screen"},decls:9,vars:4,consts:[[1,"content","mb-5"],[1,"content-list-view"],["class","d-flex justify-content-center mt-3 h-block",4,"ngIf","ngIfElse"],["doneLoading",""],["class","block-bottom",4,"ngIf"],[3,"data","sendEvent",4,"ngIf"],[1,"d-flex","justify-content-center","mt-3","h-block"],["role","status",1,"spinner-border","text-secondary"],[1,"sr-only"],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","view-single view-none row justify-content-center ml-0 mr-0 mb-2",4,"ngIf"],[1,"view-single","clickable","mb-2"],[2,"width","100%",3,"click"],[1,"mb-0",2,"font-family","'Arial Bold', 'Arial'","font-weight","700","font-style","normal"],[1,"mb-0",2,"color","#8E8E8E"],[1,"mb-0"],[2,"width","75px","display","grid","align-items","center","justify-content","center"],[3,"click",4,"ngIf"],[2,"position","absolute","top","0","right","0","font-size","20px","height","20px","width","20px",3,"click"],[3,"click"],[1,"view-single","view-none","row","justify-content-center","ml-0","mr-0","mb-2"],[2,"font-size","20","font-weight","500"],[1,"block-bottom"],["mat-button","",1,"btn","btn-more",3,"disabled","click"],[3,"data","sendEvent"]],template:function(t,n){if(1&t&&(a.Vb(0,"div",0),a.Vb(1,"div",1),a.Vb(2,"p"),a.Rc(3,"H\u1eccC SINH H\u1eceI B\u1ea0N"),a.Ub(),a.Pc(4,g,4,0,"div",2),a.Pc(5,w,1,1,"ng-template",null,3,a.Qc),a.Ub(),a.Pc(7,y,7,2,"div",4),a.Ub(),a.Pc(8,C,1,1,"azt-dialog-confirm",5)),2&t){var e=a.zc(6);a.Db(4),a.nc("ngIf",n.isLoading)("ngIfElse",e),a.Db(3),a.nc("ngIf",!(1==n.isEndPage&&1==n.page)),a.Db(1),a.nc("ngIf",n.showConfirm)}},directives:[l.m,l.l,m.a,h.a,u.a],styles:[".content[_ngcontent-%COMP%]{padding:15px;margin-top:20px!important;margin:auto;min-width:280px;height:467px;background:inherit;background-color:#ececec;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.14);position:relative}.h-block[_ngcontent-%COMP%]{height:380px;align-items:center}.content-header[_ngcontent-%COMP%]{text-align:center}.content-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:40px}.content-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .content-list-view[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{max-width:270px;background:inherit;background-color:#169bd5;border:none;border-radius:5px;color:#fff;font-weight:500}.view-single[_ngcontent-%COMP%]{position:relative;padding:10px 15px;background:inherit;background-color:#fff;box-sizing:border-box;border:1px solid #ececec;border-radius:5px;box-shadow:none;font-style:normal;font-size:12px;color:#494949;display:flex;justify-content:space-between}.view-none[_ngcontent-%COMP%]{background:transparent;height:380px;display:flex;justify-content:center;align-items:center;font-size:15px}.btn-more[_ngcontent-%COMP%]{text-transform:uppercase;color:#000;font-size:14px;border-radius:5px;transition:all .5s;margin:0 2px}.btn-more[_ngcontent-%COMP%]:hover{background:#e6e2e2}.block-bottom[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:10px;position:absolute;bottom:5px;left:50%;transform:translateX(-50%)}"]}),t}()},RgyD:function(n,o,a){"use strict";a.d(o,"a",function(){return d});var r=a("fXoL"),c=a("gbi4"),s=a("tk/3"),d=function(){var n=function(){function n(o,i){var a=this;e(this,n),this.commonService=o,this.http=i,this.fillColor=function(t,n,e,o,i,a){n.fillStyle=t,n.fillRect(Math.round(e),Math.round(o),Math.round(i),Math.round(a))},this.drawRect=function(t,n,e,o,i,a){n.beginPath(),n.lineWidth=1,n.strokeStyle=t,n.rect(Math.round(e),Math.round(o),Math.round(i),Math.round(a)),n.stroke()},this.getSingleImgData=function(t,n){if(t.inactive)throw a.commonService.snackError("Kh\xf4ng x\xe1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c v\xf9ng th\xf4ng tin",""),new Error("Kh\xf4ng x\xe1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c v\xf9ng th\xf4ng tin");try{var e=document.createElement("canvas");e.width=0==t.width?2:Math.round(t.width),e.height=0==t.heigh?2:Math.round(t.heigh);var o=e.getContext("2d");return null==o||o.drawImage(n[t.pageIndex].canvas,Math.round(t.left),Math.round(t.top),e.width,e.height,0,0,e.width,e.height),e.toDataURL("image/png")}catch(i){return console.log(i),"https://via.placeholder.com/300"}},this.getScatteredImgData=function(n,e){var o=n.filter(function(t){return!t.inactive});if(n.filter(function(t){return t.inactive}).length==n.length)throw a.commonService.snackError("Kh\xf4ng x\xe1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c v\xf9ng th\xf4ng tin",""),new Error("Kh\xf4ng x\xe1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c v\xf9ng th\xf4ng tin");try{var i=document.createElement("canvas"),r=o.map(function(t){return t.width});i.width=Math.round(Math.max.apply(Math,t(r)));for(var c=0,s=0;s<o.length;s++)c+=o[s].heigh;i.height=Math.round(c);for(var d=i.getContext("2d"),l=0;l<o.length;l++)0==l?null==d||d.drawImage(e[o[l].pageIndex].canvas,Math.round(o[l].left),Math.round(o[l].top),Math.round(o[l].width),Math.round(o[l].heigh),0,0,Math.round(o[l].width),Math.round(o[l].heigh)):null==d||d.drawImage(e[o[l].pageIndex].canvas,Math.round(o[l].left),Math.round(o[l].top),Math.round(o[l].width),Math.round(o[l].heigh),0,a.sumHighTo(l,o),Math.round(o[l].width),Math.round(o[l].heigh));return i.toDataURL("image/png")}catch(b){return console.log(b),"https://via.placeholder.com/300"}}}return i(n,[{key:"getErrorQtns",value:function(t){for(var n=[],e=0;e<t.length;e++)t[e].isGroup||0!=t[e].answers.length||n.push(t[e].num);return n}},{key:"sumHighTo",value:function(t,n){for(var e=0,o=n.filter(function(t){return!t.inactive}),i=0;i<t;i++)e+=Math.round(o[i].heigh);return e}},{key:"maxWidthTo",value:function(t,n){for(var e=[],o=n.filter(function(t){return!t.inactive}),i=0;i<t;i++)e.push(o[i].width);return Math.round(Math.max.apply(Math,e))}}]),n}();return n.\u0275fac=function(t){return new(t||n)(r.Zb(c.a),r.Zb(s.a))},n.\u0275prov=r.Lb({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()},VcHj:function(t,n,o){"use strict";o.d(n,"a",function(){return M});var a=o("quSY"),r=o("fXoL"),c=o("tyNb"),s=o("gbi4"),d=o("ofXK"),l=o("Qu3c"),b=o("IU+r"),m=o("loSA");function h(t,n){if(1&t&&(r.Vb(0,"div",14),r.Qb(1,"azt-create-avatar",15),r.Ub()),2&t){var e=r.gc(2);r.qc("matTooltip","",1==e.data.teacherObj.gender?"Th\u1ea7y ":"C\xf4 "," ",e.data.teacherObj.fullName,""),r.Db(1),r.nc("nameCreateAvatar",e.data.teacherObj.fullName)("size",25)("linkAvatar",e.data.teacherObj.avatar)}}function u(t,n){if(1&t&&(r.Vb(0,"span",16),r.Rc(1),r.Ub()),2&t){var e=r.gc(2);r.Db(1),r.Tc("",e.data.attended," l\u01b0\u1ee3t l\xe0m \u0111\u1ec1")}}function g(t,n){if(1&t&&(r.Vb(0,"span",16),r.Rc(1),r.Ub()),2&t){var e=r.gc(2);r.Db(1),r.Tc("",e.data.totalPeopleAsk," ng\u01b0\u1eddi h\u1ecfi")}}function f(t,n){if(1&t&&(r.Vb(0,"span"),r.Vb(1,"span",17),r.Rc(2,"\u0110i\u1ec3m c\u1ee7a b\u1ea1n: "),r.Qb(3,"azt-check-mark",18),r.Ub(),r.Ub()),2&t){var e=r.gc(3);r.Db(3),r.nc("mark",e.data.examResultObj.mark)}}function p(t,n){if(1&t&&(r.Vb(0,"span",17),r.Rc(1,"\u0110i\u1ec3m c\u1ee7a b\u1ea1n: "),r.Vb(2,"span"),r.Rc(3),r.Ub(),r.Ub()),2&t){var e=r.gc(4);r.Db(3),r.Sc(e.data.examResultObj.mark)}}function v(t,n){if(1&t&&(r.Vb(0,"span"),r.Pc(1,p,4,1,"span",19),r.Ub()),2&t){var e=r.gc(3);r.Db(1),r.nc("ngIf",null!=e.data.examResultObj.confirmedAt)}}function x(t,n){if(1&t&&(r.Vb(0,"span"),r.Pc(1,f,4,1,"span",10),r.Pc(2,v,2,1,"span",10),r.Ub()),2&t){var e=r.gc(2);r.Db(1),r.nc("ngIf",1==e.data.examType||0==e.data.examType),r.Db(1),r.nc("ngIf",11==e.data.examType||10==e.data.examType||21==e.data.examType||20==e.data.examType)}}function k(t,n){if(1&t&&(r.Vb(0,"span",20),r.Rc(1),r.Ub()),2&t){var e=r.gc(2);r.Db(1),r.Tc("",e.data.price," azo")}}function w(t,n){if(1&t&&(r.Vb(0,"h3",21),r.Rc(1," Th\u1eddi gian v\xe0o thi:\xa0 "),r.Vb(2,"span",22),r.Rc(3),r.hc(4,"date"),r.hc(5,"date"),r.Ub(),r.Ub()),2&t){var e=r.gc(2);r.Db(2),r.nc("ngClass",-1==e.calculatorTime(e.data.startTime)?"text-danger":e.calculatorTime(e.data.startTime)<=1*e.secondOfDay&&e.calculatorTime(e.data.startTime)>0?"text-warning":""),r.Db(1),r.Uc("",r.jc(4,3,e.data.startTime,"dd/MM/yyyy HH:mm:ss")," -> ",r.jc(5,6,e.data.endTime,"dd/MM/yyyy HH:mm:ss"),"")}}function y(t,n){if(1&t&&(r.Vb(0,"h3",23),r.Rc(1," Thi tr\u01b0\u1edbc l\xfac:\xa0 "),r.Vb(2,"span"),r.Rc(3),r.hc(4,"date"),r.Ub(),r.Ub()),2&t){var e=r.gc(2);r.nc("ngClass",-1==e.calculatorTime(e.data.endTime)?"text-danger":e.calculatorTime(e.data.endTime)<=1*e.secondOfDay&&e.calculatorTime(e.data.endTime)>0?"text-warning":""),r.Db(3),r.Sc(r.jc(4,2,e.data.endTime,"dd/MM/yyyy HH:mm:ss"))}}function C(t,n){if(1&t&&(r.Vb(0,"h3",23),r.Rc(1," Th\u1eddi gian v\xe0o thi:\xa0 "),r.Vb(2,"span"),r.Rc(3),r.hc(4,"date"),r.Ub(),r.Ub()),2&t){var e=r.gc(2);r.nc("ngClass",-1==e.calculatorTime(e.data.startTime)?"text-danger":e.calculatorTime(e.data.startTime)<=1*e.secondOfDay&&e.calculatorTime(e.data.startTime)>0?"text-warning":""),r.Db(3),r.Sc(r.jc(4,2,e.data.startTime,"dd/MM/yyyy HH:mm:ss"))}}function O(t,n){1&t&&(r.Vb(0,"h3",21),r.Rc(1," Th\u1eddi gian v\xe0o thi:\xa0 "),r.Vb(2,"span"),r.Rc(3,"Kh\xf4ng th\u1eddi h\u1ea1n"),r.Ub(),r.Ub())}function P(t,n){if(1&t&&(r.Vb(0,"div",1),r.Vb(1,"div",2),r.Qb(2,"img",3),r.Ub(),r.Vb(3,"div",4),r.Vb(4,"div",5),r.Vb(5,"h3",6),r.Rc(6),r.Ub(),r.Pc(7,h,2,5,"div",7),r.Ub(),r.Vb(8,"p",8),r.Pc(9,u,2,1,"span",9),r.Pc(10,g,2,1,"span",9),r.Pc(11,x,3,2,"span",10),r.Ub(),r.Pc(12,k,2,1,"span",11),r.Pc(13,w,6,9,"h3",12),r.Pc(14,y,5,5,"h3",13),r.Pc(15,C,5,5,"h3",13),r.Pc(16,O,4,0,"h3",12),r.Ub(),r.Ub()),2&t){var e=r.gc();r.Db(6),r.Sc(e.data.name),r.Db(1),r.nc("ngIf",e.data.teacherObj),r.Db(2),r.nc("ngIf",null!=e.data.attended),r.Db(1),r.nc("ngIf",null!=e.data.totalPeopleAsk),r.Db(1),r.nc("ngIf",null!=e.data.examResultObj),r.Db(1),r.nc("ngIf",e.data.price>0),r.Db(1),r.nc("ngIf",e.data.startTime&&e.data.endTime),r.Db(1),r.nc("ngIf",!e.data.startTime&&e.data.endTime),r.Db(1),r.nc("ngIf",e.data.startTime&&!e.data.endTime),r.Db(1),r.nc("ngIf",!e.data.startTime&&!e.data.endTime)}}var M=function(){var t=function(){function t(n,o,i){e(this,t),this.activeRoute=n,this.commonService=o,this.router=i,this.type=1,this.subscriptions=new a.a,this.secondOfDay=86400}return i(t,[{key:"calculatorTime",value:function(t){return this.commonService.calculationHomeworkTime(t)}},{key:"convertSecondToHour",value:function(t){return this.commonService.convertHMS(t)}},{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}}]),t}();return t.\u0275fac=function(n){return new(n||t)(r.Pb(c.a),r.Pb(s.a),r.Pb(c.i))},t.\u0275cmp=r.Jb({type:t,selectors:[["azt-block-exam"]],inputs:{data:"data",type:"type"},decls:1,vars:1,consts:[["class","block-body link-text mt-3",4,"ngIf"],[1,"block-body","link-text","mt-3"],[1,"block-body-status"],["src","https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/images/u416.svg","alt","",2,"height","60px"],[1,"block-body-content"],[1,"d-flex","align-items-center"],[1,"content-title"],["class","block-avatar-share",3,"matTooltip",4,"ngIf"],[1,"content-desc","mb-0"],["class","text-count",4,"ngIf"],[4,"ngIf"],["class","coin-azo",4,"ngIf"],["class","content-deadline",4,"ngIf"],["class","content-deadline",3,"ngClass",4,"ngIf"],[1,"block-avatar-share",3,"matTooltip"],[2,"cursor","pointer",3,"nameCreateAvatar","size","linkAvatar"],[1,"text-count"],[1,"text-mark","mb-0"],[3,"mark"],["class","text-mark mb-0",4,"ngIf"],[1,"coin-azo"],[1,"content-deadline"],[3,"ngClass"],[1,"content-deadline",3,"ngClass"]],template:function(t,n){1&t&&r.Pc(0,P,17,10,"div",0),2&t&&r.nc("ngIf",n.data)},directives:[d.m,l.a,b.a,m.a,d.k],pipes:[d.e],styles:["a[_ngcontent-%COMP%]:hover{text-decoration:none}.app[_ngcontent-%COMP%]{overflow-x:hidden}.color-gray[_ngcontent-%COMP%]{color:#918d8d!important}.box[_ngcontent-%COMP%]{background-color:#fff;border:1px solid hsla(0,0%,86.3%,.8);color:#222;text-align:center;transition:all .5s;display:flex;padding:6px 1px 1px;justify-content:center;align-items:center;border-radius:5px!important}.box[_ngcontent-%COMP%]:hover{box-shadow:10px 10px 20px rgba(0,0,0,.07),-10px -10px 20px hsla(0,0%,100%,.8)}.box-icon[_ngcontent-%COMP%]{font-size:16px;margin-right:10px}.box-icon-upload[_ngcontent-%COMP%]{color:#00a7d0}.box-icon-search[_ngcontent-%COMP%]{color:#bf3232}.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:45px;width:45px}.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:45px}.box-text[_ngcontent-%COMP%]{font-size:17px}.box-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px}.box-active[_ngcontent-%COMP%]{background-color:#f1f1f1;box-shadow:10px 10px 20px rgba(0,0,0,.07),-10px -10px 20px hsla(0,0%,100%,.8);font-weight:500}.bg-block-list[_ngcontent-%COMP%]{background:#ececec;padding:10px 20px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:5px}.block-list-bottom[_ngcontent-%COMP%]{margin:10px 0}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]{border:none;display:flex;align-items:center;color:#707070;background:transparent;transition:all .3s}.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:hover{color:#222}.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%]{text-transform:none;margin-left:2px}.mta-15[_ngcontent-%COMP%]{margin-top:-15px}.panel-custom[_ngcontent-%COMP%]{margin:1rem 0!important;background:#ececec}.text-mark[_ngcontent-%COMP%]{display:block;margin-top:5px;color:#0eafc0}.block[_ngcontent-%COMP%]{margin:40px 0}.block[_ngcontent-%COMP%]:first-child{margin-top:25px}.block-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;position:relative}.block-body[_ngcontent-%COMP%]{cursor:pointer;display:flex;background:#fff;border-radius:3px;margin-top:20px;width:100%;min-height:95px;overflow-x:hidden}.block-body-status[_ngcontent-%COMP%]{align-items:center;border-top-left-radius:3px;border-bottom-left-radius:3px;color:#fff;width:90px;font-weight:500;text-align:center}.block-body-content[_ngcontent-%COMP%], .block-body-status[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px}.block-body-content[_ngcontent-%COMP%]{max-width:70%;flex-direction:column}.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{font-weight:500;margin-bottom:2px;font-size:14px;color:#000}.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0}.block-body-content[_ngcontent-%COMP%]   .content-desc[_ngcontent-%COMP%]{margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#000}.block-body-content[_ngcontent-%COMP%]   .content-deadline[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;color:#000}.block-body-content[_ngcontent-%COMP%]   .content-deadline[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0}.heading[_ngcontent-%COMP%]{display:flex;align-items:center}.heading-title[_ngcontent-%COMP%]{margin-bottom:0;font-weight:500;font-size:16px;margin-right:15px}.heading-text[_ngcontent-%COMP%]{margin-bottom:0;font-size:14px;overflow:hidden;max-width:90%;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.block-avatar[_ngcontent-%COMP%]{margin-right:15px;width:30px;height:30px}.block-avatar-share[_ngcontent-%COMP%]{width:25px;height:25px;margin-left:10px}.image[_ngcontent-%COMP%]{border-radius:50px!important;width:100%}.block[_ngcontent-%COMP%]:first-child{margin-top:20px}.block-header-left[_ngcontent-%COMP%]{display:flex;align-items:center}.class-visible[_ngcontent-%COMP%]{visibility:hidden;opacity:0}.no-active[_ngcontent-%COMP%]{background:#e0e0e0}.block-else[_ngcontent-%COMP%]{height:90px;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:5px}.btn-all[_ngcontent-%COMP%], .text-else[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.btn-all[_ngcontent-%COMP%]{text-transform:inherit;color:#0eafc0;position:absolute;top:-3px;right:0}.block-avatar-info[_ngcontent-%COMP%], .block-header-info[_ngcontent-%COMP%]{display:flex;align-items:center}@media (max-width:768px){.block-avatar-info[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.heading-text[_ngcontent-%COMP%]{max-width:200px}.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:24px;width:24px}.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:35px}.block-body-status[_ngcontent-%COMP%]{width:90px}}"]}),t}()},YTzd:function(t,n,o){"use strict";o.d(n,"a",function(){return g});var a=o("fXoL"),r=o("3Pt+"),c=o("quSY"),s=o("tyNb"),d=o("gbi4"),l=o("Avyq"),b=o("pMRa"),m=o("ofXK"),h=o("bTqV");function u(t,n){if(1&t){var e=a.Wb();a.Vb(0,"div",1),a.Vb(1,"div",2),a.Vb(2,"div",3),a.Vb(3,"p",4),a.Rc(4," H\u1ecdc sinh "),a.Vb(5,"b"),a.Rc(6),a.Ub(),a.Rc(7),a.Vb(8,"b"),a.Rc(9),a.Ub(),a.Rc(10,". N\u1ebfu b\u1ea1n v\u1eabn ch\u1eafc ch\u1eafn \u0111\xf3 \u0111\xfang l\xe0 t\xean b\u1ea1n, vui l\xf2ng b\u1ea5m n\xfat "),a.Vb(11,"b"),a.Rc(12,'"B\xe1o gi\xe1o vi\xean"'),a.Ub(),a.Rc(13," \u0111\u1ec3 gi\xe1o vi\xean ki\u1ec3m tra l\u1ea1i. "),a.Ub(),a.Ub(),a.Vb(14,"div",5),a.Vb(15,"button",6),a.cc("click",function(){return a.Dc(e),a.gc().sendRequest()}),a.Rc(16," B\xe1o gi\xe1o vi\xean "),a.Ub(),a.Vb(17,"div",7),a.Vb(18,"button",8),a.cc("click",function(){return a.Dc(e),a.gc().btnCloseDialog(!1)}),a.Rc(19," H\u1ee7y "),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub()}if(2&t){var o=a.gc();a.Db(6),a.Sc(o.studentObj.fullName),a.Db(1),a.Tc(" \u0111\xe3 \u0111\u01b0\u1ee3c ch\u1ecdn b\u1edfi T\xe0i kho\u1ea3n v\u1edbi ",""!=o.studentObj.last4DigitPhone?"\u0111u\xf4i s\u1ed1 \u0110T - xxx xxx":"v\u1edbi t\xean Zalo - "," "),a.Db(2),a.Sc(""!=o.studentObj.last4DigitPhone?o.studentObj.last4DigitPhone:o.studentObj.zaloName)}}var g=function(){var t=function(){function t(n,o,i,s,d,l){e(this,t),this.fb=n,this.activeRoute=o,this.router=i,this.commonService=s,this.localize=d,this.apiCommonService=l,this.isMobile=!1,this.closeDialog=new a.o,this.confirmSend=new a.o,this.subscriptions=new c.a,this.formName=new r.k({}),this.status_obj={loading:!1,error:!1,error_obj:{message:""}},this.studentObjs=[],this.studentObj={}}return i(t,[{key:"sendRequest",value:function(){var t=this;this.status_obj={loading:!0,error:!1,error_obj:{message:""}},this.apiCommonService.sendRequestReApprove(this.data.classId,this.data.studentObj.id?this.data.studentObj.id:0).subscribe(function(n){t.confirmSend.emit(1==n.success)})}},{key:"getError",value:function(t){return!(!this.formName.controls[t]||!this.formName.controls[t].errors)&&this.formName.controls[t].errors}},{key:"getErrorType",value:function(t,n){return!!(this.formName.controls[t]&&this.formName.controls[t].errors&&this.formName.controls[t].errors[n])&&this.formName.controls[t].errors[n]}},{key:"getFormObj",value:function(t){var n=t.value;for(var e in n)n[e]=t.get(e).value;return n}},{key:"isEmpty",value:function(t){for(var n in t)if(t.hasOwnProperty(n))return!1;return!0}},{key:"btnCloseDialog",value:function(t){this.closeDialog.emit(t)}},{key:"goToLogin",value:function(){this.commonService.redirectToLoginBackLinkWithFromRegister(""+this.router.url)}},{key:"ngOnChanges",value:function(){this.data.studentObj&&(this.studentObj=this.data.studentObj)}},{key:"ngOnInit",value:function(){this.data.studentObj&&(this.studentObj=this.data.studentObj)}},{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.Pb(r.g),a.Pb(s.a),a.Pb(s.i),a.Pb(d.a),a.Pb(l.e),a.Pb(b.a))},t.\u0275cmp=a.Jb({type:t,selectors:[["app-send-request"]],inputs:{data:"data",isMobile:"isMobile",back_link:"back_link"},outputs:{closeDialog:"closeDialog",confirmSend:"confirmSend"},features:[a.Bb],decls:1,vars:1,consts:[["class","school-info_bg",4,"ngIf"],[1,"school-info_bg"],[1,"school-info","p-4"],[1,"text-center"],[1,"h5","para_respon","font-weight-normal"],[1,"d-flex","justify-content-center","mt-3"],["mat-raised-button","","color","primary",3,"click"],[1,"azt-block-button",2,"margin-left","15px"],["mat-raised-button","",3,"click"]],template:function(t,n){1&t&&a.Pc(0,u,20,3,"div",0),2&t&&a.nc("ngIf",n.data.isShow)},directives:[m.m,h.b],styles:[".school-info_bg[_ngcontent-%COMP%]{z-index:9990;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;background:rgba(0,0,0,.5607843137254902);min-height:100vh}.school-info[_ngcontent-%COMP%]{z-index:9990;top:50%;left:50%;min-width:30%;transform:translate(-50%,-50%);position:fixed;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px rgba(0,0,0,.58)}.close-btn[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-7px;padding:5px 10px;background:#dadada;cursor:pointer;border-radius:20px}.note[_ngcontent-%COMP%]{font-style:italic;font-size:15px;font-weight:600}@media only screen and (max-width:1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:95%}}"]}),t}()},caLj:function(t,n,o){"use strict";o.d(n,"a",function(){return d});var a=o("fXoL"),r=o("ofXK"),c=o("bTqV");function s(t,n){if(1&t){var e=a.Wb();a.Vb(0,"div",1),a.Vb(1,"div",2),a.Vb(2,"div",3),a.Qb(3,"div",4),a.Ub(),a.Vb(4,"div",5),a.Vb(5,"div",6),a.Vb(6,"button",7),a.cc("click",function(){return a.Dc(e),a.gc().btnCloseDialog(!1)}),a.Rc(7," \u0110\xf3ng "),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub()}if(2&t){var o=a.gc();a.Db(3),a.nc("innerHtml",o.data.content,a.Ec)}}var d=function(){var t=function(){function t(){e(this,t),this.closeDialog=new a.o}return i(t,[{key:"btnCloseDialog",value:function(t){t?this.closeDialog.emit(t):this.closeDialog.emit()}},{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Jb({type:t,selectors:[["azt-dialog-warning"]],inputs:{data:"data"},outputs:{closeDialog:"closeDialog"},decls:1,vars:1,consts:[["class","school-info_bg",4,"ngIf"],[1,"school-info_bg"],[1,"school-info","p-4"],[1,"text-left"],[3,"innerHtml"],[1,"d-flex","float-right","mt-3"],[1,"azt-block-button"],["mat-raised-button","",3,"click"]],template:function(t,n){1&t&&a.Pc(0,s,8,1,"div",0),2&t&&a.nc("ngIf",n.data.isShow)},directives:[r.m,c.b],styles:[".school-info_bg[_ngcontent-%COMP%]{z-index:1000;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;min-height:100vh;background-color:rgba(60,60,60,.5)}.school-info[_ngcontent-%COMP%]{z-index:1001;top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;max-width:600px;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px rgba(0,0,0,.58)}@media only screen and (max-width:1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:800px}}@media only screen and (max-width:768px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:700px}}@media only screen and (max-width:576px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:400px}}@media only screen and (max-width:380px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:300px}}@media only screen and (max-width:290px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:250px}}"]}),t}()}}])}();