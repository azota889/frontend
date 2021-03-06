"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["default-src_app_powerpoint_frontend_powerpoint-detail_controller_component_ts"],{

/***/ 67156:
/*!*******************************************************************************!*\
  !*** ./src/app/powerpoint_frontend/powerpoint-detail/controller.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogOverviewExampleDialog": () => (/* binding */ DialogOverviewExampleDialog),
/* harmony export */   "PowerpointDetailComponent": () => (/* binding */ PowerpointDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_services_questionInterface_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/questionInterface.service */ 43191);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_crop_and_view_pdf_docx_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crop_and_view_pdf/docx.service */ 54729);
/* harmony import */ var src_app_core_services_homework_exam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/homework.exam.service */ 61704);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);












function PowerpointDetailComponent_azt_loading_effect_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](0, "azt-loading-effect");
} }
const _c0 = function () { return []; };
const _c1 = function () { return {}; };
const _c2 = function (a0, a1, a2) { return { questionContentParse: a0, answerConfigParse: a1, answerLabelsMockup: a2 }; };
function PowerpointDetailComponent_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div")(1, "azt-template-one", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("chooseAnswer", function PowerpointDetailComponent_ng_template_2_div_1_Template_azt_template_one_chooseAnswer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r8.setAnswerObjs($event); })("changeAnswerWithResult", function PowerpointDetailComponent_ng_template_2_div_1_Template_azt_template_one_changeAnswerWithResult_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r10.changeAnswerWithResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("indexQuestion", ctx_r3.curQuestionObj == null ? null : ctx_r3.curQuestionObj.index)("questionObj", ctx_r3.curQuestionObj || _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction3"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](6, _c1)))("isAnswer", !ctx_r3.isResult)("studentAnswer", (ctx_r3.curQuestionObj == null ? null : ctx_r3.curQuestionObj.defaultStudentAnswer) ? (ctx_r3.curQuestionObj == null ? null : ctx_r3.curQuestionObj.defaultStudentAnswer == null ? null : ctx_r3.curQuestionObj.defaultStudentAnswer.answer) || "" : "");
} }
function PowerpointDetailComponent_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div")(1, "azt-template-two", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("chooseAnswer", function PowerpointDetailComponent_ng_template_2_div_2_Template_azt_template_two_chooseAnswer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r11.setAnswerObjs($event); })("changeAnswerWithResult", function PowerpointDetailComponent_ng_template_2_div_2_Template_azt_template_two_changeAnswerWithResult_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r13.changeAnswerWithResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("indexQuestion", ctx_r4.curQuestionObj == null ? null : ctx_r4.curQuestionObj.index)("questionObj", ctx_r4.curQuestionObj || _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction3"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](6, _c1)))("isAnswer", !ctx_r4.isResult)("studentAnswer", (ctx_r4.curQuestionObj == null ? null : ctx_r4.curQuestionObj.defaultStudentAnswer) ? (ctx_r4.curQuestionObj == null ? null : ctx_r4.curQuestionObj.defaultStudentAnswer == null ? null : ctx_r4.curQuestionObj.defaultStudentAnswer.answer) || "" : "");
} }
function PowerpointDetailComponent_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div")(1, "azt-template-three", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("chooseAnswer", function PowerpointDetailComponent_ng_template_2_div_3_Template_azt_template_three_chooseAnswer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r14.setAnswerObjs($event); })("changeAnswerWithResult", function PowerpointDetailComponent_ng_template_2_div_3_Template_azt_template_three_changeAnswerWithResult_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r16.changeAnswerWithResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("indexQuestion", ctx_r5.curQuestionObj == null ? null : ctx_r5.curQuestionObj.index)("questionObj", ctx_r5.curQuestionObj || _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction3"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](6, _c1)))("isAnswer", !ctx_r5.isResult)("studentAnswer", (ctx_r5.curQuestionObj == null ? null : ctx_r5.curQuestionObj.defaultStudentAnswer) ? (ctx_r5.curQuestionObj == null ? null : ctx_r5.curQuestionObj.defaultStudentAnswer == null ? null : ctx_r5.curQuestionObj.defaultStudentAnswer.answer) || "" : "");
} }
function PowerpointDetailComponent_ng_template_2_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function PowerpointDetailComponent_ng_template_2_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r17.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](2, 1, "lang_powerpoint_frontend_detail_submit"), " ");
} }
function PowerpointDetailComponent_ng_template_2_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function PowerpointDetailComponent_ng_template_2_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r19.redirectResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](2, 1, "lang_powerpoint_frontend_detail_view_result"), " ");
} }
function PowerpointDetailComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, PowerpointDetailComponent_ng_template_2_div_1_Template, 2, 11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](2, PowerpointDetailComponent_ng_template_2_div_2_Template, 2, 11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](3, PowerpointDetailComponent_ng_template_2_div_3_Template, 2, 11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "div", 10)(11, "azt-next-back-btn", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("goToPrevEmit", function PowerpointDetailComponent_ng_template_2_Template_azt_next_back_btn_goToPrevEmit_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](); return ctx_r21.prevScreenPP($event); })("goToNextEmit", function PowerpointDetailComponent_ng_template_2_Template_azt_next_back_btn_goToNextEmit_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](); return ctx_r23.nextScreenPP($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](13, PowerpointDetailComponent_ng_template_2_button_13_Template, 3, 3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](14, PowerpointDetailComponent_ng_template_2_button_14_Template, 3, 3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngSwitch", ctx_r2.templateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r2.testName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("curIndex", ctx_r2.curIndex)("totalQuestion", ctx_r2.totalQuestion)("disableBackBtn", ctx_r2.disableBackBtn)("disableNextBtn", ctx_r2.disableNextBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r2.isResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r2.isResult);
} }
const _c3 = ".app[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  padding-bottom: 40px;\n}\n\n.maxW1200[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\n.block[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.block-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.text-align[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.control[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.control-prev[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n\n.control-next[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n\n.control-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #169bd5;\n  padding: 5px 15px;\n}\n\n.control-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  width: 30px;\n  height: 30px;\n}\n\n.block-submit[_ngcontent-%COMP%] {\n  text-align: right;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n\n.block-control[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #f39c12;\n  padding: 5px 25px;\n  color: #fff;\n  transition: all 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #e09214;\n}\n\n.padding-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n@media screen and (max-width: 768px) {\n  .block-submit[_ngcontent-%COMP%] {\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .padding-bottom[_ngcontent-%COMP%] {\n    padding-bottom: 16px;\n  }\n\n  .btn-submit[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  .text-align[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBRkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFJUjs7QUFEQTtFQUNJLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFLSjs7QUFKSTtFQUNJLGNBQUE7QUFNUjs7QUFKSTtFQUNJLGNBQUE7QUFNUjs7QUFKSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBTVI7O0FBTFE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU9aOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQU1KOztBQUpBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBT0o7O0FBTEE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTkE7RUFDSSx5QkFBQTtBQVNKOztBQVBBO0VBQ0ksbUJBQUE7QUFVSjs7QUFSQTtFQUlJO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQVFOOztFQU5FO0lBQ0ksb0JBQUE7RUFTTjs7RUFQRTtJQUNJLFVBQUE7RUFVTjs7RUFSRTtJQUNJLGtCQUFBO0VBV047QUFDRiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuLm1heFcxMjAwe1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xufVxuLmJsb2Nre1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgJi10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbn1cbi50ZXh0LWFsaWdue1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29udHJvbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICYtcHJldntcbiAgICAgICAgbWFyZ2luOjAgMTVweDtcbiAgICB9XG4gICAgJi1uZXh0e1xuICAgICAgICBtYXJnaW46MCAxNXB4O1xuICAgIH1cbiAgICAmLWJ0bntcbiAgICAgICAgY29sb3I6I2ZmZiA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjliZDU7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICBpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmJsb2NrLXN1Ym1pdHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmJsb2NrLWNvbnRyb2x7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idG4tc3VibWl0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzljMTI7XG4gICAgcGFkZGluZzogNXB4IDI1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cbi5idG4tc3VibWl0OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDkyMTQ7XG59XG4ucGFkZGluZy1ib3R0b217XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDo3NjhweCkge1xuICAgIC8vIC5ibG9jay1jb250cm9se1xuICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgLy8gfVxuICAgIC5ibG9jay1zdWJtaXR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5wYWRkaW5nLWJvdHRvbXtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgIC5idG4tc3VibWl0e1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAudGV4dC1hbGlnbntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn0iXX0= */";
class PowerpointDetailComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(dialog, router, frontPowerPointLinkService, commonService, docxService, homeworkExamService) {
        super(commonService);
        this.dialog = dialog;
        this.router = router;
        this.frontPowerPointLinkService = frontPowerPointLinkService;
        this.commonService = commonService;
        this.docxService = docxService;
        this.homeworkExamService = homeworkExamService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
        this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
        this.backLink = '';
        this.testName = 'Nguy???n V??n A';
        this.dataSubmit = {};
        this.answers = [];
        this.curIndex = 0;
        this.totalQuestion = 0;
        this.disableBackBtn = false;
        this.disableNextBtn = false;
        this.isResult = false;
        this.templateId = 1;
    }
    prevScreenPP(event) {
        var _a;
        if (event) {
            var moveToIndex = this.curIndex > 0 ? this.curIndex - 1 : 0;
            this.curQuestionObj = (_a = this.questionObjs) === null || _a === void 0 ? void 0 : _a[moveToIndex];
            this.curIndex = moveToIndex;
            if (moveToIndex == 0) {
                this.disableBackBtn = true;
                this.disableNextBtn = false;
            }
            else {
                this.disableBackBtn = false;
                this.disableNextBtn = false;
            }
        }
    }
    nextScreenPP(event) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (event) {
            var moveToIndex = this.curIndex == ((_b = (_a = this.questionObjs) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) - 1 ? (_d = (_c = this.questionObjs) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0 : this.curIndex + 1;
            this.curQuestionObj = (_e = this.questionObjs) === null || _e === void 0 ? void 0 : _e[moveToIndex];
            this.curIndex = moveToIndex;
            if (moveToIndex == ((_g = (_f = this.questionObjs) === null || _f === void 0 ? void 0 : _f.length) !== null && _g !== void 0 ? _g : 0) - 1) {
                this.disableNextBtn = true;
                this.disableBackBtn = false;
            }
            else {
                this.disableNextBtn = false;
                this.disableBackBtn = false;
            }
        }
    }
    setAnswerObjs(dataEmit) {
        var _a, _b, _c, _d, _e;
        var checkAnswer = (_a = this.answers) === null || _a === void 0 ? void 0 : _a.filter(e => e.questionId == dataEmit.id);
        if (dataEmit.index != null && ((_b = this.curQuestionObj) === null || _b === void 0 ? void 0 : _b.id) == dataEmit.id) {
            // Only one choice
            var answerObjType2 = {
                questionId: dataEmit.id,
                answerContent: [{ index: dataEmit.index, content: (_c = dataEmit.event) === null || _c === void 0 ? void 0 : _c.key }]
            };
            if (checkAnswer && checkAnswer.length > 0) {
                (_d = this.answers) === null || _d === void 0 ? void 0 : _d.forEach((e) => {
                    if (e.questionId == answerObjType2.questionId) {
                        e.answerContent = answerObjType2.answerContent;
                    }
                });
            }
            else {
                (_e = this.answers) === null || _e === void 0 ? void 0 : _e.push(answerObjType2);
            }
            this.changeStatusAnswer(dataEmit.id, dataEmit.index);
        }
    }
    changeStatusAnswer(questionId, index) {
        var _a;
        // thay ?????i m??u hi???n th??? ????p ??n ch???n
        (_a = this.questionObjs) === null || _a === void 0 ? void 0 : _a.forEach((question) => {
            if (question.id == questionId) {
                if (question.answerConfigParse && question.answerConfigParse.length > 0) {
                    for (var i = 0; i < question.answerConfigParse.length; i++) {
                        question.answerConfigParse[i].checked = false;
                        question.answerConfig = JSON.stringify(question.answerConfigParse);
                    }
                    question.answerConfigParse[index !== null && index !== void 0 ? index : -1].checked = true;
                    question.answerConfig = JSON.stringify(question.answerConfigParse);
                    this.curQuestionObj = question;
                }
            }
        });
    }
    changeAnswerWithResult() {
        this.showErrorSnack('Kh??ng th??? thay ?????i ????p ??n sau khi n???p b??i.');
    }
    redirectResult() {
        var _a, _b;
        this.commonService.myNavigation('/powerpoint/result/' + ((_a = this.resultObj) === null || _a === void 0 ? void 0 : _a.id) + '/' + ((_b = this.resultObj) === null || _b === void 0 ? void 0 : _b.hashCode));
    }
    SaveAnswersObjs() {
        this.status_obj = { loading: true, error: false, error_obj: { message: '' } };
        this.frontPowerPointLinkService.apiFrontPowerPointLinkSaveAnswersObjsPost(this.dataSubmit).subscribe(response => {
            var _a, _b;
            if (response.success == 1) {
                var id = (_a = response.data) === null || _a === void 0 ? void 0 : _a.id;
                var hashCode = (_b = response.data) === null || _b === void 0 ? void 0 : _b.hashCode;
                this.commonService.myNavigation('/powerpoint/result/' + id + '/' + hashCode);
                this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
            }
            else {
                if (response.message == 'lang_core_cannot_resend_answer') {
                    this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
                    // this.showError = ;
                    this.commonService.snackError('B???n kh??ng th??? g???i l???i b??i l??m', '????ng');
                }
                else {
                    this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
                    // this.showError = ;
                    this.commonService.snackError('L???i: N???p b??i kh??ng th??nh c??ng', '????ng');
                }
            }
        });
    }
    submitTestPP() {
        this.dataSubmit = { id: this.JoinLinkId, hashCode: this.hashCode, answers: this.answers };
        this.SaveAnswersObjs();
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '450px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'next') {
                this.submitTestPP();
            }
        });
    }
    setupStudentAnswers() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        for (let index = 0; index < ((_b = (_a = this.questionObjs) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0); index++) {
            (_c = this.defaultStudentAnswers) === null || _c === void 0 ? void 0 : _c.push({
                questionId: (_d = this.questionObjs) === null || _d === void 0 ? void 0 : _d[index].id,
                answer: ''
            });
        }
        if (this.isResult === true) {
            var answers = JSON.parse((_f = (_e = this.resultObj) === null || _e === void 0 ? void 0 : _e.answers) !== null && _f !== void 0 ? _f : '');
            (_g = this.defaultStudentAnswers) === null || _g === void 0 ? void 0 : _g.forEach((e) => {
                for (let i = 0; i < answers.length; i++) {
                    if (e.questionId == answers[i].QuestionId) {
                        e.answer = answers[i].AnswerContent[0].Content;
                    }
                }
            });
            for (let index = 0; index < answers.length; index++) {
                (_h = this.questionObjs) === null || _h === void 0 ? void 0 : _h.forEach((e) => {
                    if (answers[index].QuestionId === e.id) {
                        e.defaultStudentAnswer = { questionId: answers[index].QuestionId, answer: answers[index].AnswerContent[0].Content };
                    }
                });
            }
        }
    }
    getData() {
        this.subscriptions.add(this.frontPowerPointLinkService.apiFrontPowerPointLinkGetQuestionObjsGet(this.JoinLinkId, this.hashCode).subscribe(response => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            if (response.success == 1) {
                let questionObjsCast = this.commonService.castJsonToClassObjs(src_app_core_services_questionInterface_service__WEBPACK_IMPORTED_MODULE_0__.QuestionDynamicObjParse, JSON.stringify((_a = response.data) === null || _a === void 0 ? void 0 : _a.questionObjs));
                this.questionObjs = this.homeworkExamService.changeDataQuestions(questionObjsCast !== null && questionObjsCast !== void 0 ? questionObjsCast : []);
                this.resultObj = (_b = response.data) === null || _b === void 0 ? void 0 : _b.resultObj;
                this.testName = (_d = (_c = this.resultObj) === null || _c === void 0 ? void 0 : _c.fullName) !== null && _d !== void 0 ? _d : '';
                this.disableBackBtn = true;
                this.totalQuestion = (_f = (_e = this.questionObjs) === null || _e === void 0 ? void 0 : _e.length) !== null && _f !== void 0 ? _f : 0;
                this.isResult = ((_g = this.resultObj) === null || _g === void 0 ? void 0 : _g.answers) !== null;
                this.templateId = (_j = (_h = response.data) === null || _h === void 0 ? void 0 : _h.templateId) !== null && _j !== void 0 ? _j : -1;
                if (((_l = (_k = this.questionObjs) === null || _k === void 0 ? void 0 : _k.length) !== null && _l !== void 0 ? _l : 0) <= 1) {
                    this.disableBackBtn = true;
                    this.disableNextBtn = true;
                }
                this.docxService.replaceCanvasBackgroundTS((_m = this.questionObjs) !== null && _m !== void 0 ? _m : []);
                this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
                this.setupStudentAnswers();
                this.curQuestionObj = (_o = this.questionObjs) === null || _o === void 0 ? void 0 : _o[0];
            }
            else {
                this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
                this.showErrorSnack((_p = response.message) !== null && _p !== void 0 ? _p : '');
            }
        }));
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.router.params, this.router.queryParams]).subscribe(([]) => {
            var _a;
            this.JoinLinkId = Number(this.commonService.getMyParam(this.router, 'id'));
            this.hashCode = (_a = this.commonService.getMyParam(this.router, 'hash_code')) === null || _a === void 0 ? void 0 : _a.toString();
            // this.classroomId = this.commonService.getMyParam(this.router, 'id');
            this.status_obj = { loading: true, error: false, error_obj: { message: '' } };
            this.getData();
        });
        super.ngOnInit();
    }
}
PowerpointDetailComponent.??fac = function PowerpointDetailComponent_Factory(t) { return new (t || PowerpointDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.FrontPowerPointLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_core_services_crop_and_view_pdf_docx_service__WEBPACK_IMPORTED_MODULE_4__.DocxService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_core_services_homework_exam_service__WEBPACK_IMPORTED_MODULE_5__.HomeworkExamService)); };
PowerpointDetailComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({ type: PowerpointDetailComponent, selectors: [["app-join-class"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["????InheritDefinitionFeature"]], decls: 4, vars: 2, consts: [[1, "app", "maxW1200", "mt-2", "mt-md-3"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "container", "mt-md-3"], [1, "row", "pl-0", "pr-0", "ml-0", "mr-0"], [1, "col-md-4", "px-0", "mt-2", "padding-bottom"], [1, "block", "text-align"], [1, "block-title"], [1, "col-md-4", "px-0", "mt-2", "block-control", "text-center", "padding-bottom"], [3, "curIndex", "totalQuestion", "disableBackBtn", "disableNextBtn", "goToPrevEmit", "goToNextEmit"], [1, "col-md-4", "px-0", "block-submit", "mt-2", "text-center"], ["class", "btn-submit", "mat-flat-button", "", 3, "click", 4, "ngIf"], [3, "indexQuestion", "questionObj", "isAnswer", "studentAnswer", "chooseAnswer", "changeAnswerWithResult"], ["mat-flat-button", "", 1, "btn-submit", 3, "click"]], template: function PowerpointDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, PowerpointDetailComponent_azt_loading_effect_1_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](2, PowerpointDetailComponent_ng_template_2_Template, 15, 11, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????reference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.status_obj.loading)("ngIfElse", _r1);
    } }, styles: [_c3] });
class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() { }
    onNoClick(event) {
        this.dialogRef.close(event);
    }
}
DialogOverviewExampleDialog.??fac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA)); };
DialogOverviewExampleDialog.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 10, vars: 9, consts: [[2, "font-size", "20px", "font-weight", "500", "margin-bottom", "20px"], [2, "float", "right"], ["type", "button", 1, "btn", "btn-danger", "mr-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](2, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function DialogOverviewExampleDialog_Template_button_click_4_listener() { return ctx.onNoClick("cencer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](6, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function DialogOverviewExampleDialog_Template_button_click_7_listener() { return ctx.onNoClick("next"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](9, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](2, 3, "lang_powerpoint_frontend_detail_dialog"), ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](6, 5, "lang_powerpoint_frontend_detail_cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](9, 7, "lang_powerpoint_frontend_detail_continue"));
    } }, pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.MytranslatePipe], styles: [_c3] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_powerpoint_frontend_powerpoint-detail_controller_component_ts.js.map