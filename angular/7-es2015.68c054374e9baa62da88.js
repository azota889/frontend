(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{JXIY:function(n,t,e){"use strict";e.d(t,"a",function(){return p});var o=e("fXoL"),i=e("gbi4"),c=e("ofXK");function s(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",15),o.bc("click",function(){o.Cc(n);const t=o.fc(),e=t.$implicit,i=t.index,c=o.fc(2);return c.handleChooseAnswer(c.questionObj.id,e,i)}),o.Ub(1,"div",16),o.Pc(2),o.Tb(),o.Pb(3,"div",17),o.Tb()}if(2&n){const n=o.fc().$implicit,t=o.fc(2);o.nc("id","question__"+t.index+"__"+n.key),o.Cb(2),o.Qc(n.key),o.Cb(1),o.mc("innerHtml",n.content,o.Dc)}}function r(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",18),o.bc("click",function(){o.Cc(n);const t=o.fc(),e=t.$implicit,i=t.index,c=o.fc(2);return c.handleChooseAnswer(c.questionObj.id,e,i)}),o.Ub(1,"div",16),o.Pc(2),o.Tb(),o.Pb(3,"div",17),o.Tb()}if(2&n){const n=o.fc().$implicit,t=o.fc(2);o.nc("id","question__"+t.index+"__"+n.key),o.Cb(2),o.Qc(n.key),o.Cb(1),o.mc("innerHtml",n.content,o.Dc)}}function l(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",19),o.bc("click",function(){o.Cc(n);const t=o.fc(),e=t.$implicit,i=t.index,c=o.fc(2);return c.handleChooseAnswer(c.questionObj.id,e,i)}),o.Ub(1,"div",16),o.Pc(2),o.Tb(),o.Pb(3,"div",17),o.Tb()}if(2&n){const n=o.fc().$implicit,t=o.fc(2);o.nc("id","question__"+t.index+"__"+n.key),o.Cb(2),o.Qc(n.key),o.Cb(1),o.mc("innerHtml",n.content,o.Dc)}}function d(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",18),o.bc("click",function(){o.Cc(n);const t=o.fc(),e=t.$implicit,i=t.index,c=o.fc(2);return c.handleChooseAnswer(c.questionObj.id,e,i)}),o.Ub(1,"div",16),o.Pc(2),o.Tb(),o.Pb(3,"div",17),o.Tb()}if(2&n){const n=o.fc().$implicit,t=o.fc(2);o.nc("id","question__"+t.index+"__"+n.key),o.Cb(2),o.Qc(n.key),o.Cb(1),o.mc("innerHtml",n.content,o.Dc)}}function a(n,t){if(1&n&&(o.Ub(0,"div",11),o.Nc(1,s,4,3,"div",12),o.Nc(2,r,4,3,"div",13),o.Nc(3,l,4,3,"div",14),o.Nc(4,d,4,3,"div",13),o.Tb()),2&n){const n=t.$implicit,e=o.fc(2);o.Cb(1),o.mc("ngIf",1==n.checked&&!n.isAnswer),o.Cb(1),o.mc("ngIf",0==n.checked&&!n.isAnswer),o.Cb(1),o.mc("ngIf",0==n.checked&&n.isAnswer&&e.questionObj.isShowAnswer),o.Cb(1),o.mc("ngIf",0==n.checked&&n.isAnswer&&!e.questionObj.isShowAnswer)}}function g(n,t){if(1&n&&(o.Ub(0,"div"),o.Ub(1,"div",9),o.Nc(2,a,5,4,"div",10),o.Tb(),o.Tb()),2&n){const n=o.fc();o.Cb(2),o.mc("ngForOf",n.questionObj.answerConfig)}}const b=function(n,t){return{"choose-answer":n,"true-answer":t}};function u(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",11),o.Ub(1,"div",20),o.bc("click",function(){o.Cc(n);const e=t.$implicit;return o.fc(2).handleChooseAnswerResult(e)}),o.Ub(2,"div",16),o.Pc(3),o.Tb(),o.Pb(4,"div",17),o.Tb(),o.Tb()}if(2&n){const n=t.$implicit,e=o.fc(2);o.Cb(1),o.nc("id","question__"+e.index+"__"+n.key),o.mc("ngClass",o.sc(4,b,e.studentAnswer==n.key,e.studentAnswer==n.key&&e.questionObj.answerResult==e.studentAnswer)),o.Cb(2),o.Qc(n.key),o.Cb(1),o.mc("innerHtml",n.content,o.Dc)}}function f(n,t){if(1&n&&(o.Ub(0,"div",9),o.Nc(1,u,5,7,"div",10),o.Tb()),2&n){const n=o.fc();o.Cb(1),o.mc("ngForOf",n.questionObj.answerConfig)}}let p=(()=>{class n{constructor(n){this.commonService=n,this.chooseAnswer=new o.o,this.changeAnswerWithResult=new o.o}handleChooseAnswer(n,t,e){this.chooseAnswer.emit({id:n,event:t,index:e})}handleChooseAnswerResult(n){this.changeAnswerWithResult.emit(n)}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(o.Ob(i.a))},n.\u0275cmp=o.Ib({type:n,selectors:[["azt-template-one"]],inputs:{index:["indexQuestion","index"],questionObj:"questionObj",isAnswer:"isAnswer",studentAnswer:"studentAnswer"},outputs:{chooseAnswer:"chooseAnswer",changeAnswerWithResult:"changeAnswerWithResult"},decls:12,vars:4,consts:[[1,"container"],["id","bg"],[1,"row","p-0","m-0"],[1,"col-md-12"],[1,"quiz-title","text-center"],[1,"quiz-body",3,"innerHtml"],[1,"quiz-option-selector","clearfix"],[4,"ngIf","ngIfElse"],["template",""],[1,"row","m-0","pb-3"],["class","col-md-6 pb-3 d-flex","style","align-items: stretch;",4,"ngFor","ngForOf"],[1,"col-md-6","pb-3","d-flex",2,"align-items","stretch"],["class"," choose-answer d-flex align-items-center flex--stretch quiz--border",3,"id","click",4,"ngIf"],["class"," d-flex align-items-center flex--stretch quiz--border",3,"id","click",4,"ngIf"],["class"," true-answer d-flex align-items-center flex--stretch quiz--border",3,"id","click",4,"ngIf"],[1,"choose-answer","d-flex","align-items-center","flex--stretch","quiz--border",3,"id","click"],[1,"quiz--text","text-uppercase"],[1,"quiz--content",3,"innerHtml"],[1,"d-flex","align-items-center","flex--stretch","quiz--border",3,"id","click"],[1,"true-answer","d-flex","align-items-center","flex--stretch","quiz--border",3,"id","click"],[1,"d-flex","align-items-center","flex--stretch","quiz--border",3,"ngClass","id","click"]],template:function(n,t){if(1&n&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"div",2),o.Ub(3,"div",3),o.Ub(4,"div",4),o.Ub(5,"span"),o.Pc(6),o.Tb(),o.Pb(7,"p",5),o.Tb(),o.Ub(8,"div",6),o.Nc(9,g,3,1,"div",7),o.Nc(10,f,2,1,"ng-template",null,8,o.Oc),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&n){const n=o.yc(11);o.Cb(6),o.Rc("C\xe2u h\u1ecfi ",t.index+1<=9?"0"+(t.index+1):t.index+1,""),o.Cb(1),o.mc("innerHtml",t.questionObj.questionContent[0].content,o.Dc),o.Cb(2),o.mc("ngIf",1==t.isAnswer)("ngIfElse",n)}},directives:[c.m,c.l,c.k],styles:['@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,531;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,531;1,600;1,700;1,800;1,900&display=swap");@import url("https://fonts.googleapis.com/css?family=Poppins:400,600,500,700|Roboto:100,300,400,500,700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");#bg[_ngcontent-%COMP%]{font-size:15px;font-weight:400;line-height:1.5;background:#f9f9f9;color:#2f3146;background-size:cover;background-image:url(https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/images/qbg.jpeg);border-radius:5px}.quiz-body[_ngcontent-%COMP%]{overflow-x:auto}ul[_ngcontent-%COMP%]{margin:0;padding:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none;transition:all .3s ease-in-out}a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover{text-decoration:none}img[_ngcontent-%COMP%]{max-width:100%;height:auto}button[_ngcontent-%COMP%]{cursor:pointer}.form-control[_ngcontent-%COMP%]:focus, a.active[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:visited, button.active[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:visited, input.active[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:hover, input[_ngcontent-%COMP%]:visited, select[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:hover, select[_ngcontent-%COMP%]:visited, textarea[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:hover{outline:none;box-shadow:none;text-decoration:none;color:inherit}.form-control[_ngcontent-%COMP%]{box-shadow:none}label[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0;font-family:Jost,sans-serif}.pt150[_ngcontent-%COMP%]{padding-top:150px}.actions[_ngcontent-%COMP%]{width:100%;border-radius:4px;padding:20px 30px;background-color:#3c3c3c}.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#3c3c3c;height:65px;width:430px;font-size:18px;font-weight:700;cursor:pointer;text-align:center;line-height:65px;border-radius:3px;display:inline-block;background-color:#fff;text-transform:uppercase;transition:all .3s ease-in-out}.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#fff;background-color:#eb3252}.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;background-color:#eb3252;font-weight:700}.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{float:left}.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){float:right}.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;display:block;border:none}.quiz-title[_ngcontent-%COMP%]{margin:0 auto;max-width:800px;padding-top:40px}.quiz-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:25px;color:#ed1b34;font-weight:700}.quiz-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#151515;font-size:43px;font-weight:700;padding-bottom:20px;font-family:Poppins}.quiz-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#151515;font-size:24px;font-weight:500}.quiz-option-selector[_ngcontent-%COMP%]{margin:0 auto;max-width:1135px;padding-top:40px;padding-bottom:40px}.quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:50%;float:left;padding:7px}.quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{z-index:2;width:100%;padding:10px;cursor:pointer;border-radius:4px;background-color:#fff;transition:all .5s;border:2px solid #e7e7e7}.quiz--border[_ngcontent-%COMP%]:hover{background:#f3f2f2}.quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .exp-number[_ngcontent-%COMP%]{padding:1px 20px;display:block;color:#446d76;font-size:30px;font-weight:700;line-height:68px;margin-right:45px;text-align:center;background-color:#fff;border:2px solid #e7e7e7}.quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .exp-label[_ngcontent-%COMP%]{z-index:2;color:#010101;font-size:24px;font-weight:500}.quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .checkmark-border[_ngcontent-%COMP%]{height:100%;width:100%;left:0;top:0;z-index:1;position:absolute}.quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .checkmark-border[_ngcontent-%COMP%]:after, .quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .checkmark-border[_ngcontent-%COMP%]:before{top:0;left:0;z-index:-1;content:"";width:100%;height:100%;display:none;border-radius:4px;position:absolute;background-image:linear-gradient(14deg,#eb3252,#f82c28)}.quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .checkmark-border[_ngcontent-%COMP%]:after{background-image:inherit;box-shadow:0 1px 38px 0 rgba(2,2,2,.27)}.quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .exp-option-box[_ngcontent-%COMP%]{display:none}.quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .exp-option-box[_ngcontent-%COMP%]:checked ~ .checkmark-border[_ngcontent-%COMP%]:after, .quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .exp-option-box[_ngcontent-%COMP%]:checked ~ .checkmark-border[_ngcontent-%COMP%]:before{display:block}.quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .exp-option-box[_ngcontent-%COMP%]:checked ~ .exp-label[_ngcontent-%COMP%]{color:#fff}.quiz--border[_ngcontent-%COMP%]{width:100%;padding:10px;cursor:pointer;border-radius:4px}.quiz--border[_ngcontent-%COMP%], .quiz--text[_ngcontent-%COMP%]{background-color:#fff;border:2px solid #e7e7e7}.quiz--text[_ngcontent-%COMP%]{padding:3px 23px;display:block;color:#446d76;font-size:30px;font-weight:700;line-height:68px;margin-right:45px;text-align:center}.quiz--content[_ngcontent-%COMP%]{color:#446d76;font-size:23px;font-weight:600;overflow-x:auto}.quiz-option-selector-2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:15px}.quiz-option-selector-2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{height:85px}.quiz-option-selector-2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .exp-number[_ngcontent-%COMP%]{border:none;margin-right:0;line-height:60px}.quiz-option-selector-2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .checkmark-border[_ngcontent-%COMP%]:before{top:23px;left:auto;right:23px;width:35px;height:35px;display:block;border:2px solid #e3e3e3;background-image:none}.choose-answer[_ngcontent-%COMP%]{background-image:linear-gradient(14deg,#eb3252,#f82c28)!important}.choose-answer[_ngcontent-%COMP%], .true-answer[_ngcontent-%COMP%]{transform:translateY(-8px);transition:all .5s}.true-answer[_ngcontent-%COMP%]{background-image:linear-gradient(14deg,#42f542,#3f3)!important}.quiz-option-selector-2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .exp-option-box[_ngcontent-%COMP%]:checked ~ .exp-label[_ngcontent-%COMP%]{color:#446d76}.quiz-option-selector-2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .exp-option-box[_ngcontent-%COMP%]:checked ~ .checkmark-border[_ngcontent-%COMP%]:before{background-image:linear-gradient(14deg,#eb3252,#f82c28)}.quiz-option-selector-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{float:right;font-size:17px;font-weight:700;color:#ed1b34;font-family:Poppins;border-bottom:2px solid #ed1b34}.quiz-details-option[_ngcontent-%COMP%]   .exp-option-box[_ngcontent-%COMP%]{display:none}.flex--stretch[_ngcontent-%COMP%]{align-self:stretch}.exp-option-box[_ngcontent-%COMP%]:checked ~ .select-area[_ngcontent-%COMP%]{border:2px solid #ed1b34}.exp-option-box[_ngcontent-%COMP%]:checked ~ .select-area[_ngcontent-%COMP%]:before{box-shadow:none;background-color:#ed1b34}.exp-option-box[_ngcontent-%COMP%]:checked ~ .select-area[_ngcontent-%COMP%]:after{display:block}@media screen and (max-width:1440px){.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:255px}}@media screen and (max-width:991px){.quiz-top-area[_ngcontent-%COMP%]   .quiz-countdown[_ngcontent-%COMP%]{position:static;margin-top:30px}.quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width:580px){.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child, .actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){float:none;margin:0 auto;width:250px;height:50px;font-size:16px;font-weight:500;line-height:50px}.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{margin-bottom:20px}.actions[_ngcontent-%COMP%]{text-align:center}}@media screen and (max-width:480px){.quiz-progress-area[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}.quiz-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}.quiz--text[_ngcontent-%COMP%]{margin-right:15px}.quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .exp-label[_ngcontent-%COMP%], .quiz-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .quiz-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px}.quiz-option-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .exp-number[_ngcontent-%COMP%]{margin-right:15px}.quiz-option-selector-2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .exp-number[_ngcontent-%COMP%]{width:35px}}.disable-select[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}']}),n})()},Td3n:function(n,t,e){"use strict";e.d(t,"a",function(){return p});var o=e("fXoL"),i=e("gbi4"),c=e("ofXK");function s(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",20),o.bc("click",function(){o.Cc(n);const t=o.fc(),e=t.$implicit,i=t.index,c=o.fc(2);return c.handleChooseAnswer(c.questionObj.id,e,i)}),o.Tb()}if(2&n){const n=o.fc().$implicit,t=o.fc(2);o.nc("id","question__"+t.index+"__"+n.key),o.mc("innerHtml",n.content,o.Dc)}}function r(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",21),o.bc("click",function(){o.Cc(n);const t=o.fc(),e=t.$implicit,i=t.index,c=o.fc(2);return c.handleChooseAnswer(c.questionObj.id,e,i)}),o.Tb()}if(2&n){const n=o.fc().$implicit,t=o.fc(2);o.nc("id","question__"+t.index+"__"+n.key),o.mc("innerHtml",n.content,o.Dc)}}function l(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",22),o.bc("click",function(){o.Cc(n);const t=o.fc(),e=t.$implicit,i=t.index,c=o.fc(2);return c.handleChooseAnswer(c.questionObj.id,e,i)}),o.Tb()}if(2&n){const n=o.fc().$implicit,t=o.fc(2);o.nc("id","question__"+t.index+"__"+n.key),o.mc("innerHtml",n.content,o.Dc)}}function d(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",21),o.bc("click",function(){o.Cc(n);const t=o.fc(),e=t.$implicit,i=t.index,c=o.fc(2);return c.handleChooseAnswer(c.questionObj.id,e,i)}),o.Tb()}if(2&n){const n=o.fc().$implicit,t=o.fc(2);o.nc("id","question__"+t.index+"__"+n.key),o.mc("innerHtml",n.content,o.Dc)}}function a(n,t){if(1&n&&(o.Ub(0,"div",16),o.Nc(1,s,1,2,"div",17),o.Nc(2,r,1,2,"div",18),o.Nc(3,l,1,2,"div",19),o.Nc(4,d,1,2,"div",18),o.Tb()),2&n){const n=t.$implicit,e=o.fc(2);o.Cb(1),o.mc("ngIf",1==n.checked&&!n.isAnswer),o.Cb(1),o.mc("ngIf",0==n.checked&&!n.isAnswer),o.Cb(1),o.mc("ngIf",0==n.checked&&n.isAnswer&&e.questionObj.isShowAnswer),o.Cb(1),o.mc("ngIf",0==n.checked&&n.isAnswer&&!e.questionObj.isShowAnswer)}}function g(n,t){if(1&n&&(o.Ub(0,"div"),o.Ub(1,"div",14),o.Nc(2,a,5,4,"div",15),o.Tb(),o.Tb()),2&n){const n=o.fc();o.Cb(2),o.mc("ngForOf",n.questionObj.answerConfig)}}const b=function(n,t,e){return{"question--button":n,"choose--button":t,"true--button":e}};function u(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",16),o.Ub(1,"div",23),o.bc("click",function(){o.Cc(n);const e=t.$implicit;return o.fc(2).handleChooseAnswerResult(e)}),o.Tb(),o.Tb()}if(2&n){const n=t.$implicit,e=o.fc(2);o.Cb(1),o.nc("id","question__"+e.index+"__"+n.key),o.mc("innerHtml",n.content,o.Dc)("ngClass",o.tc(3,b,e.studentAnswer!=n.key,e.studentAnswer==n.key,e.studentAnswer==n.key&&e.questionObj.answerResult==e.studentAnswer))}}function f(n,t){if(1&n&&(o.Ub(0,"div",14),o.Nc(1,u,2,7,"div",15),o.Tb()),2&n){const n=o.fc();o.Cb(1),o.mc("ngForOf",n.questionObj.answerConfig)}}let p=(()=>{class n{constructor(n){this.commonService=n,this.chooseAnswer=new o.o,this.changeAnswerWithResult=new o.o}handleChooseAnswer(n,t,e){this.chooseAnswer.emit({id:n,event:t,index:e})}handleChooseAnswerResult(n){this.changeAnswerWithResult.emit(n)}maxArr(n){let t=n[0];for(let e=0;e<n.length;e++)t<n[e]&&(t=n[e]);return t}ngOnInit(){}ngAfterViewInit(){}}return n.\u0275fac=function(t){return new(t||n)(o.Ob(i.a))},n.\u0275cmp=o.Ib({type:n,selectors:[["azt-template-two"]],inputs:{index:["indexQuestion","index"],countQuestion:"countQuestion",questionObj:"questionObj",isAnswer:"isAnswer",studentAnswer:"studentAnswer"},outputs:{chooseAnswer:"chooseAnswer",changeAnswerWithResult:"changeAnswerWithResult"},decls:18,vars:4,consts:[[1,"background"],[1,"container","py-5"],[1,"slide"],[1,"row","pb-3","m-0","justify-content-center"],[1,"col-md-12","text-center"],["src","https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/images/countdown.gif","alt","countdown","width","48","height","48"],[1,"row","m-0","justify-content-center"],[1,"question--title"],[1,"pt-3","line","m-0"],[1,"row","m-0","justify-content-center","py-4"],[1,"question--description",3,"innerHtml"],[4,"ngIf","ngIfElse"],["template",""],["src","https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/images/template_two_bg.png","alt","footer",1,"img-fluid","img-position"],[1,"row","m-0","pb-3"],["class","col-md-3 flex--stretch text-align-center pb-3",4,"ngFor","ngForOf"],[1,"col-md-3","flex--stretch","text-align-center","pb-3"],["class","choose--button",3,"innerHtml","id","click",4,"ngIf"],["class","question--button",3,"innerHtml","id","click",4,"ngIf"],["class","true--button",3,"innerHtml","id","click",4,"ngIf"],[1,"choose--button",3,"innerHtml","id","click"],[1,"question--button",3,"innerHtml","id","click"],[1,"true--button",3,"innerHtml","id","click"],[3,"innerHtml","ngClass","id","click"]],template:function(n,t){if(1&n&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"div",2),o.Ub(3,"div",3),o.Ub(4,"div",4),o.Pb(5,"img",5),o.Tb(),o.Tb(),o.Ub(6,"div",6),o.Ub(7,"div",4),o.Ub(8,"span",7),o.Pc(9),o.Tb(),o.Tb(),o.Pb(10,"hr",8),o.Tb(),o.Ub(11,"div",9),o.Ub(12,"div",4),o.Pb(13,"span",10),o.Tb(),o.Tb(),o.Nc(14,g,3,1,"div",11),o.Nc(15,f,2,1,"ng-template",null,12,o.Oc),o.Pb(17,"img",13),o.Tb(),o.Tb(),o.Tb()),2&n){const n=o.yc(16);o.Cb(9),o.Rc("C\xe2u h\u1ecfi ",t.index+1<=9?"0"+(t.index+1):t.index+1,""),o.Cb(4),o.mc("innerHtml",t.questionObj.questionContent[0].content,o.Dc),o.Cb(1),o.mc("ngIf",1==t.isAnswer)("ngIfElse",n)}},directives:[c.m,c.l,c.k],styles:['@import url("https://fonts.googleapis.com/css2?family=Play&display=swap");.background[_ngcontent-%COMP%]{background-image:url(https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/images/template_2_bg.jpeg)}.background[_ngcontent-%COMP%], .slide[_ngcontent-%COMP%]{background-size:cover}.slide[_ngcontent-%COMP%]{background-color:#fff;padding:24px;position:relative;border-radius:12px}.question--title[_ngcontent-%COMP%]{font-size:24px;color:#383eba;transform:rotate(0deg);opacity:1;line-height:1.33;overflow-wrap:break-word;text-transform:uppercase;font-family:Play,sans-serif}.line[_ngcontent-%COMP%]{border-bottom:6px solid #383eba;width:15%;border-top:none}.question--description[_ngcontent-%COMP%]{font-size:40px;color:#232323;transform:rotate(0deg);line-height:1.23;overflow-wrap:break-word;font-family:Play,sans-serif}.question--button[_ngcontent-%COMP%]{color:#fff!important;background-color:#00a6d4;text-align:center;border-radius:4px;font-size:18px;padding:16px;font-family:Play,sans-serif;cursor:pointer;display:flex;align-items:center;justify-content:center;width:100%}.flex--stretch[_ngcontent-%COMP%]{display:flex;align-self:stretch;flex:1}.true--button[_ngcontent-%COMP%]{color:#fff!important;background-color:#f28749;border-radius:4px;font-size:18px;padding:16px;font-family:Play,sans-serif}.choose--button[_ngcontent-%COMP%], .true--button[_ngcontent-%COMP%]{text-align:center;cursor:pointer;display:flex;align-items:center;justify-content:center;width:100%}.choose--button[_ngcontent-%COMP%]{color:#00a6d4!important;background-color:#fff;border:1px solid #00a6d4;flex:1}.question--button[_ngcontent-%COMP%]:hover{color:#fff!important;background-color:#0554f2;text-align:center;border-radius:4px;font-size:18px;font-family:Play,sans-serif}.img-position[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;width:10%}']}),n})()},jPUe:function(n,t,e){"use strict";e.d(t,"a",function(){return p});var o=e("fXoL"),i=e("gbi4"),c=e("ofXK");function s(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",16),o.bc("click",function(){o.Cc(n);const t=o.fc(),e=t.$implicit,i=t.index,c=o.fc(2);return c.handleChooseAnswer(c.questionObj.id,e,i)}),o.Tb()}if(2&n){const n=o.fc().$implicit,t=o.fc(2);o.nc("id","question__"+t.index+"__"+n.key),o.mc("innerHtml",n.content,o.Dc)}}function r(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",17),o.bc("click",function(){o.Cc(n);const t=o.fc(),e=t.$implicit,i=t.index,c=o.fc(2);return c.handleChooseAnswer(c.questionObj.id,e,i)}),o.Tb()}if(2&n){const n=o.fc().$implicit,t=o.fc(2);o.nc("id","question__"+t.index+"__"+n.key),o.mc("innerHtml",n.content,o.Dc)}}function l(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",18),o.bc("click",function(){o.Cc(n);const t=o.fc(),e=t.$implicit,i=t.index,c=o.fc(2);return c.handleChooseAnswer(c.questionObj.id,e,i)}),o.Tb()}if(2&n){const n=o.fc().$implicit,t=o.fc(2);o.nc("id","question__"+t.index+"__"+n.key),o.mc("innerHtml",n.content,o.Dc)}}function d(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",17),o.bc("click",function(){o.Cc(n);const t=o.fc(),e=t.$implicit,i=t.index,c=o.fc(2);return c.handleChooseAnswer(c.questionObj.id,e,i)}),o.Tb()}if(2&n){const n=o.fc().$implicit,t=o.fc(2);o.nc("id","question__"+t.index+"__"+n.key),o.mc("innerHtml",n.content,o.Dc)}}function a(n,t){if(1&n&&(o.Ub(0,"div",12),o.Nc(1,s,1,2,"div",13),o.Nc(2,r,1,2,"div",14),o.Nc(3,l,1,2,"div",15),o.Nc(4,d,1,2,"div",14),o.Tb()),2&n){const n=t.$implicit,e=o.fc(2);o.Cb(1),o.mc("ngIf",1==n.checked&&!n.isAnswer),o.Cb(1),o.mc("ngIf",0==n.checked&&!n.isAnswer),o.Cb(1),o.mc("ngIf",0==n.checked&&n.isAnswer&&e.questionObj.isShowAnswer),o.Cb(1),o.mc("ngIf",0==n.checked&&n.isAnswer&&!e.questionObj.isShowAnswer)}}function g(n,t){if(1&n&&(o.Ub(0,"div"),o.Ub(1,"div",10),o.Nc(2,a,5,4,"div",11),o.Tb(),o.Tb()),2&n){const n=o.fc();o.Cb(2),o.mc("ngForOf",n.questionObj.answerConfig)}}const b=function(n,t,e){return{"question--button":n,"choose--button":t,"true--button":e}};function u(n,t){if(1&n){const n=o.Vb();o.Ub(0,"div",20),o.Ub(1,"div",21),o.bc("click",function(){o.Cc(n);const e=t.$implicit;return o.fc(2).handleChooseAnswerResult(e)}),o.Tb(),o.Tb()}if(2&n){const n=t.$implicit,e=o.fc(2);o.Cb(1),o.nc("id","question__"+e.index+"__"+n.key),o.mc("innerHtml",n.content,o.Dc)("ngClass",o.tc(3,b,e.studentAnswer!=n.key,e.studentAnswer==n.key,e.studentAnswer==n.key&&e.questionObj.answerResult==e.studentAnswer))}}function f(n,t){if(1&n&&(o.Ub(0,"div",10),o.Nc(1,u,2,7,"div",19),o.Tb()),2&n){const n=o.fc();o.Cb(1),o.mc("ngForOf",n.questionObj.answerConfig)}}let p=(()=>{class n{constructor(n){this.commonService=n,this.chooseAnswer=new o.o,this.changeAnswerWithResult=new o.o}handleChooseAnswer(n,t,e){this.chooseAnswer.emit({id:n,event:t,index:e})}handleChooseAnswerResult(n){this.changeAnswerWithResult.emit(n)}maxArr(n){let t=n[0];for(let e=0;e<n.length;e++)t<n[e]&&(t=n[e]);return t}ngOnInit(){}ngAfterViewInit(){}}return n.\u0275fac=function(t){return new(t||n)(o.Ob(i.a))},n.\u0275cmp=o.Ib({type:n,selectors:[["azt-template-three"]],inputs:{index:["indexQuestion","index"],countQuestion:"countQuestion",questionObj:"questionObj",isAnswer:"isAnswer",studentAnswer:"studentAnswer",nameExam:"nameExam"},outputs:{chooseAnswer:"chooseAnswer",changeAnswerWithResult:"changeAnswerWithResult"},decls:13,vars:4,consts:[[1,"container"],[1,"content"],[1,"content-width","py-5"],[1,"row","p-0","m-0","pb-4"],[1,"col-md-12","text-center"],[1,"question--title","p-0","m-0"],[1,"row","m-0","py-5"],[1,"question--content","p-0","m-0",3,"innerHtml"],[4,"ngIf","ngIfElse"],["template",""],[1,"row","m-0","pb-3"],["class","col-md-3 flex--stretch text-align-center pb-3",4,"ngFor","ngForOf"],[1,"col-md-3","flex--stretch","text-align-center","pb-3"],["class","choose--button",3,"innerHtml","id","click",4,"ngIf"],["class","question--button",3,"innerHtml","id","click",4,"ngIf"],["class","true--button",3,"innerHtml","id","click",4,"ngIf"],[1,"choose--button",3,"innerHtml","id","click"],[1,"question--button",3,"innerHtml","id","click"],[1,"true--button",3,"innerHtml","id","click"],["class","col-md- flex--stretch text-align-center pb-3",4,"ngFor","ngForOf"],[1,"col-md-","flex--stretch","text-align-center","pb-3"],[3,"innerHtml","ngClass","id","click"]],template:function(n,t){if(1&n&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"div",2),o.Ub(3,"div",3),o.Ub(4,"div",4),o.Ub(5,"p",5),o.Pc(6),o.Tb(),o.Tb(),o.Tb(),o.Ub(7,"div",6),o.Ub(8,"div",4),o.Pb(9,"p",7),o.Tb(),o.Tb(),o.Nc(10,g,3,1,"div",8),o.Nc(11,f,2,1,"ng-template",null,9,o.Oc),o.Tb(),o.Tb(),o.Tb()),2&n){const n=o.yc(12);o.Cb(6),o.Rc(" C\xe2u h\u1ecfi ",t.index+1<=9?"0"+(t.index+1):t.index+1," "),o.Cb(3),o.mc("innerHtml",t.questionObj.questionContent[0].content,o.Dc),o.Cb(1),o.mc("ngIf",1==t.isAnswer)("ngIfElse",n)}},directives:[c.m,c.l,c.k],styles:[".header[_ngcontent-%COMP%]{background-image:url(https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/images/a1.png);background-size:cover;width:100%}.quiz--title[_ngcontent-%COMP%]{font-size:20px;color:#5f6470}.content[_ngcontent-%COMP%]{background-image:url(https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/images/bg_three.jpeg);background-size:cover;width:100%}.content-width[_ngcontent-%COMP%]{width:90%;margin:auto}.question--title[_ngcontent-%COMP%]{font-size:22px;color:#7cbadd;font-weight:700}.question--content[_ngcontent-%COMP%]{font-size:36px;color:#fff;line-height:1.32}.question--button[_ngcontent-%COMP%]{background-color:#f2d888;padding:16px;color:#5f6470;cursor:pointer;text-align:center;display:flex;align-items:center;justify-content:center;border-radius:4px;font-size:18px;width:100%}.flex--stretch[_ngcontent-%COMP%]{display:flex;align-self:stretch;flex:1}.true--button[_ngcontent-%COMP%]{background-color:#d90404}.choose--button[_ngcontent-%COMP%], .true--button[_ngcontent-%COMP%]{padding:16px;color:#5f6470;cursor:pointer;text-align:center;display:flex;align-items:center;justify-content:center;border-radius:4px;font-size:18px;width:100%}.choose--button[_ngcontent-%COMP%]{background-color:#f28241}.question--button[_ngcontent-%COMP%]:hover{background-color:#f28241;padding:16px;color:#5f6470;cursor:pointer;text-align:center;border-radius:4px;font-size:18px}@media screen and (max-width:768px){.content-width[_ngcontent-%COMP%]{width:100%;margin:auto}}"]}),n})()}}]);