"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_powerpoint_frontend_module_module_ts"],{

/***/ 77144:
/*!*******************************************************************!*\
  !*** ./src/app/powerpoint_frontend/chart/controller.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerpointChartComponent": () => (/* binding */ PowerpointChartComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_services_questionInterface_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/questionInterface.service */ 43191);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_crop_and_view_pdf_docx_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crop_and_view_pdf/docx.service */ 54729);
/* harmony import */ var src_app_core_services_homework_exam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/homework.exam.service */ 61704);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/clipboard */ 10092);
/* harmony import */ var _azota_ui_azt_pp_template_one_azt_pp_template_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/azt-pp-template-one/azt-pp-template-one.component */ 74470);
/* harmony import */ var _azota_ui_azt_template_two_azt_template_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../azota-ui/azt-template-two/azt-template-two.component */ 24698);
/* harmony import */ var _azota_ui_azt_template_three_azt_template_three_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../azota-ui/azt-template-three/azt-template-three.component */ 12623);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ 29765);
/* harmony import */ var _azota_ui_azt_next_back_btn_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../azota-ui/azt-next-back-btn/controller.component */ 13711);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);


















function PowerpointChartComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PowerpointChartComponent_a_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r3.backScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Quay l\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PowerpointChartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 1, "lang_powerpoint_frontend_chart_loading_data"), "\n");
} }
function PowerpointChartComponent_div_2_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PowerpointChartComponent_div_2_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r14.showStatistic(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 3, "lang_powerpoint_frontend_chart_view_result"), " ( ", ctx_r5.numberStatistical == null ? null : ctx_r5.numberStatistical.answered, " / ", ctx_r5.numberStatistical == null ? null : ctx_r5.numberStatistical.total, " )");
} }
function PowerpointChartComponent_div_2_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PowerpointChartComponent_div_2_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r16.showStatistic(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "lang_powerpoint_frontend_chart_back"));
} }
const _c0 = function () { return []; };
const _c1 = function () { return {}; };
const _c2 = function (a0, a1, a2) { return { questionContentParse: a0, answerConfigParse: a1, answerLabelsMockup: a2 }; };
function PowerpointChartComponent_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "azt-template-one", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("indexQuestion", ctx_r7.curQuestionObj == null ? null : ctx_r7.curQuestionObj.index)("questionObj", ctx_r7.curQuestionObj || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](7, _c1)))("isAnswer", true)("isShowAnswer", ctx_r7.isShowAnswer)("studentAnswer", "");
} }
function PowerpointChartComponent_div_2_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "azt-template-two", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("indexQuestion", ctx_r8.curQuestionObj == null ? null : ctx_r8.curQuestionObj.index)("questionObj", ctx_r8.curQuestionObj || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](7, _c1)))("isAnswer", true)("isShowAnswer", ctx_r8.isShowAnswer)("studentAnswer", "");
} }
function PowerpointChartComponent_div_2_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "azt-template-three", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("indexQuestion", ctx_r9.curQuestionObj == null ? null : ctx_r9.curQuestionObj.index)("questionObj", ctx_r9.curQuestionObj || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](7, _c1)))("isAnswer", true)("isShowAnswer", ctx_r9.isShowAnswer)("studentAnswer", "");
} }
function PowerpointChartComponent_div_2_div_23_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const statisticObj_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", statisticObj_r19.countTested, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("(", statisticObj_r19.countPercent + "%", ")");
} }
function PowerpointChartComponent_div_2_div_23_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1, a2, a3) { return { "column-one": a0, "column-two": a1, "column-three": a2, "column-four": a3 }; };
const _c4 = function (a0) { return { "height": a0 }; };
function PowerpointChartComponent_div_2_div_23_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 31)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, PowerpointChartComponent_div_2_div_23_div_4_span_2_Template, 4, 2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, PowerpointChartComponent_div_2_div_23_div_4_div_3_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const statisticObj_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction4"](4, _c3, i_r20 == 0, i_r20 == 1, i_r20 == 2, i_r20 == 3))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](9, _c4, statisticObj_r19.countPercent + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r18.convertNumber(statisticObj_r19 == null ? null : statisticObj_r19.countTested) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (statisticObj_r19 == null ? null : statisticObj_r19.keyLabel) == ctx_r18.answerResultNew());
} }
function PowerpointChartComponent_div_2_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PowerpointChartComponent_div_2_div_23_div_4_Template, 4, 11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 28)(6, "div", 29)(7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 29)(10, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 29)(13, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 29)(16, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx_r10.isShowQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r10.curQuestionObj == null ? null : ctx_r10.curQuestionObj.statistic);
} }
function PowerpointChartComponent_div_2_div_24_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 40)(1, "div", 26)(2, "div", 31)(3, "div", 32)(4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 28)(9, "div", 29)(10, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const items_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction4"](8, _c3, ctx_r24.calcIndex(i_r26) == 0, ctx_r24.calcIndex(i_r26) == 1, ctx_r24.calcIndex(i_r26) == 2, ctx_r24.calcIndex(i_r26) == 3))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](13, _c4, items_r25.countPercent + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", items_r25.countTrue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("(", items_r25.countPercent + "%", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 6, "lang_powerpoint_frontend_chart_question"), " ", i_r26 + 1 <= 9 ? "0" + (i_r26 + 1) : i_r26 + 1, "");
} }
function PowerpointChartComponent_div_2_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, PowerpointChartComponent_div_2_div_24_div_3_Template, 13, 15, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx_r11.isShowQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r11.finalStatisticObjs);
} }
function PowerpointChartComponent_div_2_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 8)(1, "div", 41)(2, "div", 42)(3, "mat-slide-toggle", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function PowerpointChartComponent_div_2_div_25_Template_mat_slide_toggle_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r27.toggleShowAnswer($event.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r12.isShowAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 2, "lang_powerpoint_frontend_chart_view_answer"));
} }
function PowerpointChartComponent_div_2_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 45)(1, "div", 24)(2, "azt-next-back-btn", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("goToPrevEmit", function PowerpointChartComponent_div_2_div_26_Template_azt_next_back_btn_goToPrevEmit_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r29.prevScreenPP($event); })("goToNextEmit", function PowerpointChartComponent_div_2_div_26_Template_azt_next_back_btn_goToNextEmit_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r31.nextScreenPP($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("curIndex", ctx_r13.curIndex)("totalQuestion", ctx_r13.totalQuestion)("disableBackBtn", ctx_r13.disableBackBtn)("disableNextBtn", ctx_r13.disableNextBtn);
} }
function PowerpointChartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PowerpointChartComponent_div_2_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r32.showCopySuccess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 12)(10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, PowerpointChartComponent_div_2_a_16_Template, 3, 5, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, PowerpointChartComponent_div_2_a_17_Template, 3, 3, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 16)(19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, PowerpointChartComponent_div_2_div_20_Template, 2, 12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, PowerpointChartComponent_div_2_div_21_Template, 2, 12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, PowerpointChartComponent_div_2_div_22_Template, 2, 12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, PowerpointChartComponent_div_2_div_23_Template, 18, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, PowerpointChartComponent_div_2_div_24_Template, 4, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, PowerpointChartComponent_div_2_div_25_Template, 7, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, PowerpointChartComponent_div_2_div_26_Template, 3, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r2.copyCodeToClipboard(ctx_r2.linkJoinObj == null ? null : ctx_r2.linkJoinObj.hashCode));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 17, "lang_powerpoint_frontend_chart_code_open_class"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.linkJoinObj == null ? null : ctx_r2.linkJoinObj.hashCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 19, "lang_powerpoint_frontend_chart_student_access"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("href", ctx_r2.domainLink, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.domainLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.isShowQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.isShowQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", !ctx_r2.isShowQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitch", ctx_r2.templateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.statisticForExam);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.statisticForExam);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.isShowQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.isShowQuestion);
} }
class PowerpointChartComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(router, frontPptExamService, commonService, docxService, homeworkExamService) {
        super(commonService);
        this.router = router;
        this.frontPptExamService = frontPptExamService;
        this.commonService = commonService;
        this.docxService = docxService;
        this.homeworkExamService = homeworkExamService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription();
        this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
        this.backLink = '';
        this.statisticForExam = false;
        this.curIndex = 0;
        this.totalQuestion = 0;
        this.disableBackBtn = false;
        this.disableNextBtn = false;
        this.isLoading = false;
        this.numberStatistical = { total: 0, answered: 0 };
        this.isShowQuestion = true;
        this.isShowAnswer = false;
        this.domainLink = '';
        this.templateId = 1;
    }
    backScreen() {
        window.history.back();
    }
    prevScreenPP(event) {
        var _a, _b;
        if (event) {
            var moveToIndex = this.curIndex > 0 ? this.curIndex - 1 : 0;
            this.curQuestionObj = (_a = this.questionObjs) === null || _a === void 0 ? void 0 : _a[moveToIndex];
            if (((_b = this.curQuestionObj) === null || _b === void 0 ? void 0 : _b.isShowAnswer) !== undefined) {
                this.curQuestionObj.isShowAnswer = this.isShowAnswer;
            }
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
        this.isShowQuestion = true;
    }
    nextScreenPP(event) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (event) {
            var moveToIndex = this.curIndex == ((_b = (_a = this.questionObjs) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) - 1 ? (_d = (_c = this.questionObjs) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0 : this.curIndex + 1;
            this.curQuestionObj = (_e = this.questionObjs) === null || _e === void 0 ? void 0 : _e[moveToIndex];
            this.curIndex = moveToIndex;
            if (((_f = this.curQuestionObj) === null || _f === void 0 ? void 0 : _f.isShowAnswer) !== undefined) {
                this.curQuestionObj.isShowAnswer = this.isShowAnswer;
            }
            if (moveToIndex == ((_h = (_g = this.questionObjs) === null || _g === void 0 ? void 0 : _g.length) !== null && _h !== void 0 ? _h : 0) - 1) {
                this.disableNextBtn = true;
                this.disableBackBtn = false;
            }
            else {
                this.disableNextBtn = false;
                this.disableBackBtn = false;
            }
        }
        this.isShowQuestion = true;
    }
    calcIndex(index) {
        var indexCalc = index + 4;
        return indexCalc % 4;
    }
    showStatistic() {
        if (this.isShowQuestion) {
            this.isShowQuestion = false;
        }
        else {
            this.isShowQuestion = true;
        }
    }
    foundTrueAnswer(questionObjs) {
        var newList = [];
        questionObjs.forEach((question) => {
            var _a;
            question = Object.assign(Object.assign({}, question), { isShowAnswer: false });
            var questionAnswer = this.commonService.parseJson((_a = question.answerResult) !== null && _a !== void 0 ? _a : '');
            if (Array.isArray(question.answerConfigParse)) {
                for (var i = 0; i < question.answerConfigParse.length; i++) {
                    if (question.answerConfigParse[i].key == questionAnswer[0]) {
                        question.answerConfigParse[i].isTrue = true;
                        break;
                    }
                }
            }
            newList.push(question);
        });
        return newList;
    }
    toggleShowAnswer(event) {
        var _a;
        this.isShowAnswer = !this.isShowAnswer;
        var newObj = (_a = this.commonService.castJsonToClassObj(src_app_core_services_questionInterface_service__WEBPACK_IMPORTED_MODULE_0__.QuestionDynamicObjParse, JSON.stringify(this.curQuestionObj))) !== null && _a !== void 0 ? _a : { questionContentParse: [], answerConfigParse: [], attachmentsParse: [], answerLabelsMockup: {} };
        newObj.isShowAnswer = event;
        this.curQuestionObj = newObj;
    }
    getData() {
        var _a, _b;
        this.isLoading = true;
        this.subscriptions.add(this.frontPptExamService.apiFrontPptExamGetPPTQuestionResultObjsIdHashCodeTGet((_a = this.linkId) !== null && _a !== void 0 ? _a : 0, (_b = this.hashCode) !== null && _b !== void 0 ? _b : '', '0').subscribe(response => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            if (response.success == 1) {
                let questionObjsCast = this.commonService.castJsonToClassObjs(src_app_core_services_questionInterface_service__WEBPACK_IMPORTED_MODULE_0__.QuestionDynamicObjParse, JSON.stringify((_a = response.data) === null || _a === void 0 ? void 0 : _a.questionObjs));
                this.questionObjs = this.foundTrueAnswer(this.homeworkExamService.changeDataQuestions(questionObjsCast !== null && questionObjsCast !== void 0 ? questionObjsCast : []));
                this.linkJoinObj = (_b = response.data) === null || _b === void 0 ? void 0 : _b.linkJoinObj;
                this.curQuestionObj = (_c = this.questionObjs) === null || _c === void 0 ? void 0 : _c[0];
                this.curQuestionObj.answerResultParse = (_e = this.castJsonToObj((_d = this.curQuestionObj.answerResult) !== null && _d !== void 0 ? _d : '[]')) !== null && _e !== void 0 ? _e : [];
                this.disableBackBtn = true;
                this.totalQuestion = (_g = (_f = this.questionObjs) === null || _f === void 0 ? void 0 : _f.length) !== null && _g !== void 0 ? _g : 0;
                this.templateId = (_k = (_j = (_h = response.data) === null || _h === void 0 ? void 0 : _h.linkObj) === null || _j === void 0 ? void 0 : _j.templateId) !== null && _k !== void 0 ? _k : 1;
                if (((_m = (_l = this.questionObjs) === null || _l === void 0 ? void 0 : _l.length) !== null && _m !== void 0 ? _m : 0) <= 1) {
                    this.disableBackBtn = true;
                    this.disableNextBtn = true;
                }
                if (((_o = response.data) === null || _o === void 0 ? void 0 : _o.finalStatistic) && response.data.finalStatistic.length > 0) {
                    this.finalStatisticObjs = response.data.finalStatistic;
                    this.statisticForExam = true;
                }
                else {
                    this.finalStatisticObjs = new Array();
                    this.statisticForExam = false;
                }
                this.docxService.replaceCanvasBackgroundTS(this.questionObjs);
                this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
            }
            else {
                this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
                this.showErrorSnack((_p = response.message) !== null && _p !== void 0 ? _p : '');
            }
            this.isLoading = false;
        }));
    }
    setupLoopGetStatisticalNumber() {
        this.loopGetStatical = window.setInterval(() => {
            var _a;
            this.frontPptExamService.apiFrontPptExamGetStatisticalLinkEmbedObjIdHashCodeTGet(Number(this.linkId), (_a = this.hashCode) !== null && _a !== void 0 ? _a : '', 't').subscribe(response => {
                if (response.success == 1) {
                    this.numberStatistical = response.data;
                }
            });
        }, 2000);
    }
    convertNumber(countTested) {
        return Number(countTested);
    }
    answerResultNew() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.curQuestionObj) === null || _a === void 0 ? void 0 : _a.answerResultParse) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : '';
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.router.params, this.router.queryParams]).subscribe(([]) => {
            var _a;
            this.domainLink = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/join';
            this.linkId = Number(this.commonService.getMyParam(this.router, 'id'));
            this.hashCode = (_a = this.commonService.getMyParam(this.router, 'hash_code')) === null || _a === void 0 ? void 0 : _a.toString();
            // this.classroomId = this.commonService.getMyParam(this.router, 'id');
            this.status_obj = { loading: true, error: false, error_obj: { message: '' } };
            this.getData();
            this.setupLoopGetStatisticalNumber();
        });
        super.ngOnInit();
    }
    copyCodeToClipboard(code) {
        return code !== null && code !== void 0 ? code : '';
    }
    showCopySuccess() {
        this.commonService.snackSuccess('Sao chép mã vào lớp thành công', '');
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        if (this.loopGetStatical !== 0) {
            clearInterval(this.loopGetStatical);
        }
    }
}
PowerpointChartComponent.ɵfac = function PowerpointChartComponent_Factory(t) { return new (t || PowerpointChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.FrontPptExamService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_crop_and_view_pdf_docx_service__WEBPACK_IMPORTED_MODULE_4__.DocxService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_homework_exam_service__WEBPACK_IMPORTED_MODULE_5__.HomeworkExamService)); };
PowerpointChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: PowerpointChartComponent, selectors: [["app-powerpoint-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [["class", "view-link clickable", 3, "click", 4, "ngIf"], ["class", "app maxW1200 mt-5 text-center", 4, "ngIf"], ["class", "app maxW1200 mt-5", 4, "ngIf"], [1, "view-link", "clickable", 3, "click"], [2, "margin", "10px", "vertical-align", "middle", "font-size", "22px"], [1, "app", "maxW1200", "mt-5", "text-center"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "app", "maxW1200", "mt-5"], [1, "container"], [1, "row"], [1, "col-md-3", "heading-row"], [1, "code-text", 3, "cdkCopyToClipboard", "click"], [1, "col-md-6", "text-center", "heading-row"], [1, "title-link"], ["target", "_blank", 1, "link", 3, "href"], [1, "col-md-3", "text-right", "heading-row"], [3, "hidden"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "row", 3, "hidden", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["class", "row mt-3", 4, "ngIf"], [3, "indexQuestion", "questionObj", "isAnswer", "isShowAnswer", "studentAnswer"], [1, "row", 3, "hidden"], [1, "col-md-12"], [1, "chart"], [1, "chart-column"], ["class", "column-total", 4, "ngFor", "ngForOf"], [1, "chart-fields"], [1, "field"], [1, "text-center"], [1, "column-total"], [1, "column-result", 3, "ngClass", "ngStyle"], ["class", "point-result", 4, "ngIf"], ["class", "answer-true", 4, "ngIf"], [1, "point-result"], [1, "answer-true"], [1, "fa", "fa-check"], [1, "chart", "d-flex", 2, "overflow-x", "scroll", "white-space", "nowrap"], ["class", "col-column", 4, "ngFor", "ngForOf"], [1, "col-column"], [1, "row", "mt-2", "justify-content-end"], [1, "col-md-3", "text-right"], ["color", "primary", 2, "vertical-align", "middle", 3, "checked", "change"], [2, "vertical-align", "middle", "margin-left", "5px"], [1, "row", "mt-3"], [3, "curIndex", "totalQuestion", "disableBackBtn", "disableNextBtn", "goToPrevEmit", "goToNextEmit"]], template: function PowerpointChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, PowerpointChartComponent_a_0_Template, 4, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, PowerpointChartComponent_div_1_Template, 6, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, PowerpointChartComponent_div_2_Template, 27, 21, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isShowQuestion);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_17__.CdkCopyToClipboard, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitchCase, _azota_ui_azt_pp_template_one_azt_pp_template_one_component__WEBPACK_IMPORTED_MODULE_6__.AztPpTemplateOneComponent, _azota_ui_azt_template_two_azt_template_two_component__WEBPACK_IMPORTED_MODULE_7__.AztTemplateTwoComponent, _azota_ui_azt_template_three_azt_template_three_component__WEBPACK_IMPORTED_MODULE_8__.AztTemplateThreeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggle, _azota_ui_azt_next_back_btn_controller_component__WEBPACK_IMPORTED_MODULE_9__.AztNextBackBtnComponent], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__.MytranslatePipe], styles: [".app[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: hidden;\n  padding-bottom: 40px;\n}\n\n.maxW1200[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\n.control[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.control-prev[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n\n.control-next[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n\n.control-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #169bd5;\n  padding: 5px 15px;\n}\n\n.control-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  width: 30px;\n  height: 30px;\n}\n\n.heading-row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.code-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.code-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 23px;\n  color: #00A7D0;\n}\n\n.title-link[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.title-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #42474B;\n}\n\n.col-column[_ngcontent-%COMP%] {\n  display: block;\n  width: 33%;\n}\n\n.col-column[_ngcontent-%COMP%]   .column-total[_ngcontent-%COMP%] {\n  height: 95%;\n  width: 95% !important;\n  display: flex;\n  align-items: flex-end;\n}\n\n.chart[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 500px;\n  background-color: #fff;\n  margin: 0 auto;\n}\n\n.chart-column[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  height: 88%;\n  padding: 0 30px;\n}\n\n.chart-column[_ngcontent-%COMP%]   .column-total[_ngcontent-%COMP%] {\n  height: 95%;\n  width: 17%;\n  display: flex;\n  align-items: flex-end;\n}\n\n.chart-column[_ngcontent-%COMP%]   .column-result[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 500;\n  width: 100%;\n  min-height: 5px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.chart-column[_ngcontent-%COMP%]   .column-one[_ngcontent-%COMP%] {\n  background-color: #66c870;\n}\n\n.chart-column[_ngcontent-%COMP%]   .column-two[_ngcontent-%COMP%] {\n  background-color: #fb708f;\n}\n\n.chart-column[_ngcontent-%COMP%]   .column-three[_ngcontent-%COMP%] {\n  background-color: #2aa4e6;\n}\n\n.chart-column[_ngcontent-%COMP%]   .column-four[_ngcontent-%COMP%] {\n  background-color: #f5bc20;\n}\n\n.chart-column[_ngcontent-%COMP%]   .point-result[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.chart-column[_ngcontent-%COMP%]   .answer-true[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.chart-column[_ngcontent-%COMP%]   .answer-true[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n\n.chart-fields[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 12%;\n  padding: 0 30px;\n  border-top: 1px solid #ddd;\n}\n\n.chart-fields[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  width: 17%;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.view-link[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n@media screen and (max-width: 768px) {\n  .heading-row[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n\n  .chart-fields[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n\n  .chart-column[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .chart-fields[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n\n  .app[_ngcontent-%COMP%] {\n    overflow-y: inherit;\n  }\n\n  .chart-column[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBR0o7O0FBRkk7RUFDSSxjQUFBO0FBSVI7O0FBRkk7RUFDSSxjQUFBO0FBSVI7O0FBRkk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUlSOztBQUhRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFLWjs7QUFEQTtFQUNJLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBS0o7O0FBSkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQU1SOztBQUhBO0VBQ0ksZUFBQTtBQU1KOztBQUxJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBT1I7O0FBSkE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQU9KOztBQU5JO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBUVI7O0FBTEE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQVFKOztBQU5JO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVFSOztBQVBRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFTWjs7QUFQUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFTWjs7QUFQUTtFQUNJLHlCQUFBO0FBU1o7O0FBUFE7RUFDSSx5QkFBQTtBQVNaOztBQVBRO0VBQ0kseUJBQUE7QUFTWjs7QUFQUTtFQUNJLHlCQUFBO0FBU1o7O0FBUFE7RUFDSSxnQkFBQTtBQVNaOztBQVBRO0VBQ0ksbUJBQUE7QUFTWjs7QUFSWTtFQUNJLGVBQUE7QUFVaEI7O0FBTkk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFRUjs7QUFQUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVNaOztBQUpBO0VBQ0UsZUFBQTtBQU9GOztBQUxBO0VBQ0k7SUFDSSwyQkFBQTtFQVFOOztFQU5FO0lBQ0ksZUFBQTtFQVNOOztFQVBFO0lBQ0ksZUFBQTtFQVVOO0FBQ0Y7O0FBUkE7RUFDSTtJQUNJLGVBQUE7RUFVTjs7RUFSRTtJQUNJLG1CQUFBO0VBV047O0VBVEU7SUFDSSxlQUFBO0VBWU47QUFDRiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbi5tYXhXMTIwMHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbn1cbi5jb250cm9se1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgJi1wcmV2e1xuICAgICAgICBtYXJnaW46MCAxNXB4O1xuICAgIH1cbiAgICAmLW5leHR7XG4gICAgICAgIG1hcmdpbjowIDE1cHg7XG4gICAgfVxuICAgICYtYnRue1xuICAgICAgICBjb2xvcjojZmZmIDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2OWJkNTtcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICAgIGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaGVhZGluZy1yb3d7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jb2RlLXRleHR7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgY29sb3I6ICMwMEE3RDA7XG4gICAgfVxufVxuLnRpdGxlLWxpbmt7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGF7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjNDI0NzRCO1xuICAgIH1cbn1cbi5jb2wtY29sdW1uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzMlO1xuICAgIC5jb2x1bW4tdG90YWx7XG4gICAgICAgIGhlaWdodDogOTUlO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNSUpIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIH1cbn1cbi5jaGFydHtcbiAgICB3aWR0aDogODUlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICYtY29sdW1ue1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgaGVpZ2h0OiA4OCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgLmNvbHVtbi10b3RhbHtcbiAgICAgICAgICAgIGhlaWdodDogOTUlO1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS80IC0gOCUpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgICAuY29sdW1uLXJlc3VsdHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbi1vbmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZjODcwO1xuICAgICAgICB9XG4gICAgICAgIC5jb2x1bW4tdHdve1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNzA4ZjtcbiAgICAgICAgfVxuICAgICAgICAuY29sdW1uLXRocmVle1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJhYTRlNjtcbiAgICAgICAgfVxuICAgICAgICAuY29sdW1uLWZvdXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjViYzIwO1xuICAgICAgICB9XG4gICAgICAgIC5wb2ludC1yZXN1bHR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hbnN3ZXItdHJ1ZXtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBpe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLWZpZWxkc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEyJTtcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgLmZpZWxke1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS80IC0gOCUpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnZpZXctbGluayB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDo3NjhweCkge1xuICAgIC5oZWFkaW5nLXJvd3tcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2hhcnQtZmllbGRze1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgfVxuICAgIC5jaGFydC1jb2x1bW57XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6NDgwcHgpIHtcbiAgICAuY2hhcnQtZmllbGRze1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgfVxuICAgIC5hcHB7XG4gICAgICAgIG92ZXJmbG93LXk6IGluaGVyaXQ7XG4gICAgfVxuICAgIC5jaGFydC1jb2x1bW57XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 95396:
/*!************************************************************************!*\
  !*** ./src/app/powerpoint_frontend/masterpage/controller.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerpointFrontendMasterPageComponent": () => (/* binding */ PowerpointFrontendMasterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class PowerpointFrontendMasterPageComponent {
    constructor() { }
    ngOnInit() { }
}
PowerpointFrontendMasterPageComponent.ɵfac = function PowerpointFrontendMasterPageComponent_Factory(t) { return new (t || PowerpointFrontendMasterPageComponent)(); };
PowerpointFrontendMasterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PowerpointFrontendMasterPageComponent, selectors: [["app-test-dashboard"]], decls: 2, vars: 0, consts: [["id", "testbank-frontend-layout"]], template: function PowerpointFrontendMasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".header-container[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  box-shadow: rgba(169, 151, 151, 0.24) 0px 1px 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlEQUFBO0FBQ0oiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lcntcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiByZ2IoMTY5IDE1MSAxNTEgLyAyNCUpIDBweCAxcHggN3B4O1xufSJdfQ== */"] });


/***/ }),

/***/ 43332:
/*!******************************************************!*\
  !*** ./src/app/powerpoint_frontend/module.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerpointFrontModule": () => (/* binding */ PowerpointFrontModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 72727);
/* harmony import */ var src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/azota-ui/azota-ui.module */ 47470);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ 75658);
/* harmony import */ var _chart_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/controller.component */ 77144);
/* harmony import */ var _join_class_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./join-class/controller.component */ 10727);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masterpage/controller.component */ 95396);
/* harmony import */ var _powerpoint_detail_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./powerpoint-detail/controller.component */ 67156);
/* harmony import */ var _result_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result/controller.component */ 82800);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routing.module */ 60458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_azt_pp_template_one_azt_pp_template_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../azota-ui/azt-pp-template-one/azt-pp-template-one.component */ 74470);
/* harmony import */ var _azota_ui_azt_template_two_azt_template_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../azota-ui/azt-template-two/azt-template-two.component */ 24698);
/* harmony import */ var _azota_ui_azt_template_three_azt_template_three_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../azota-ui/azt-template-three/azt-template-three.component */ 12623);
/* harmony import */ var _azota_ui_azt_next_back_btn_controller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../azota-ui/azt-next-back-btn/controller.component */ 13711);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/pipes/common.pipe */ 1033);























class PowerpointFrontModule {
}
PowerpointFrontModule.ɵfac = function PowerpointFrontModule_Factory(t) { return new (t || PowerpointFrontModule)(); };
PowerpointFrontModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: PowerpointFrontModule });
PowerpointFrontModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_1__.MyMaterialModule,
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_18__.EditorModule,
            _routing_module__WEBPACK_IMPORTED_MODULE_8__.PowerpointFrontRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule,
            src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.MyPipeModule,
            src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](PowerpointFrontModule, { declarations: [_masterpage_controller_component__WEBPACK_IMPORTED_MODULE_5__.PowerpointFrontendMasterPageComponent,
        _join_class_controller_component__WEBPACK_IMPORTED_MODULE_4__.PowerpointJoinClassComponent,
        _powerpoint_detail_controller_component__WEBPACK_IMPORTED_MODULE_6__.PowerpointDetailComponent,
        _result_controller_component__WEBPACK_IMPORTED_MODULE_7__.PowerpointResultComponent,
        _chart_controller_component__WEBPACK_IMPORTED_MODULE_3__.PowerpointChartComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_1__.MyMaterialModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_18__.EditorModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_8__.PowerpointFrontRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.MyPipeModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetComponentScope"](_powerpoint_detail_controller_component__WEBPACK_IMPORTED_MODULE_6__.PowerpointDetailComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_9__.AztLoadingEffectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitchCase, _azota_ui_azt_pp_template_one_azt_pp_template_one_component__WEBPACK_IMPORTED_MODULE_10__.AztPpTemplateOneComponent, _azota_ui_azt_template_two_azt_template_two_component__WEBPACK_IMPORTED_MODULE_11__.AztTemplateTwoComponent, _azota_ui_azt_template_three_azt_template_three_component__WEBPACK_IMPORTED_MODULE_12__.AztTemplateThreeComponent, _azota_ui_azt_next_back_btn_controller_component__WEBPACK_IMPORTED_MODULE_13__.AztNextBackBtnComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton], [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__.MytranslatePipe]);


/***/ }),

/***/ 82800:
/*!********************************************************************!*\
  !*** ./src/app/powerpoint_frontend/result/controller.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerpointResultComponent": () => (/* binding */ PowerpointResultComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/browser.storage.service */ 34782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);










function PowerpointResultComponent_azt_loading_effect_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "azt-loading-effect");
} }
function PowerpointResultComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PowerpointResultComponent_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.redirectBackToDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PowerpointResultComponent_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.redirectBackToNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 5, "lang_powerpoint_frontend_result_submit_succes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r1.resultObj == null ? null : ctx_r1.resultObj.totalCorrect, "/", ctx_r1.resultObj == null ? null : ctx_r1.resultObj.totalQuestion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 7, "lang_powerpoint_frontend_result_view_answer"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 9, "lang_powerpoint_frontend_detail_continue"), " ");
} }
class PowerpointResultComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(router, commonService, frontPowerPointLinkService, browserStorageService) {
        super(commonService);
        this.router = router;
        this.commonService = commonService;
        this.frontPowerPointLinkService = frontPowerPointLinkService;
        this.browserStorageService = browserStorageService;
        this.loading = false;
        this.backLink = '';
    }
    GetResultObj() {
        this.loading = true;
        this.frontPowerPointLinkService.apiFrontPowerPointLinkGetResultObjGet(this.JoinLinkId, this.hashCode).subscribe((response) => {
            if (response.success == 1) {
                this.resultObj = response.data;
                this.loading = false;
            }
            else {
                this.loading = false;
                // this.showError = ;
                this.commonService.snackError('Lỗi: Không tìm thấy kết quả', 'Đóng');
            }
        });
    }
    redirectBackToDetail() {
        this.commonService.myNavigation('/powerpoint/detail/' + this.JoinLinkId + '/' + this.hashCode);
    }
    redirectBackToNext() {
        this.browserStorageService.saveStorage('powerpoint_next', 'true');
        this.commonService.myNavigation('/join');
    }
    ngOnInit() {
        var _a;
        this.JoinLinkId = Number(this.commonService.getMyParam(this.router, 'id'));
        this.hashCode = (_a = this.commonService.getMyParam(this.router, 'hash_code')) === null || _a === void 0 ? void 0 : _a.toString();
        this.GetResultObj();
        this.commonService.translateMetaData({
            title: 'lang_cms_powerpoint_result_title',
            description: 'lang_cms_powerpoint_result_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
}
PowerpointResultComponent.ɵfac = function PowerpointResultComponent_Factory(t) { return new (t || PowerpointResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.FrontPowerPointLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_3__.BrowserStorageService)); };
PowerpointResultComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PowerpointResultComponent, selectors: [["app-powerpoint-result"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "content"], ["mat-flat-button", "", 1, "btn-submit", 3, "click"], ["mat-flat-button", "", 1, "btn-next", 3, "click"]], template: function PowerpointResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, PowerpointResultComponent_azt_loading_effect_0_Template, 1, 0, "azt-loading-effect", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PowerpointResultComponent_div_1_Template, 12, 11, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_4__.AztLoadingEffectComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.MytranslatePipe], styles: [".content[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Arial Bold\", Arial;\n  font-weight: 700;\n  font-style: normal;\n  color: #f39c12;\n}\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Arial Bold\", Arial;\n  font-weight: 700;\n  font-style: normal;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  background-color: #f39c12;\n  padding: 5px 25px;\n  color: #fff;\n  transition: all 0.5s;\n}\n.content[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #e09214;\n}\n.content[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%] {\n  background-color: #00a7d0;\n  padding: 5px 25px;\n  color: #fff;\n  transition: all 0.5s;\n  margin-left: 5px;\n}\n.content[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%]:hover {\n  background-color: #0087a8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFDSjtBQUFJO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUVSO0FBQUk7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQUk7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBRVI7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFBSTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUVOO0FBQUk7RUFDSSx5QkFBQTtBQUVSIiwiZmlsZSI6InN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgaDF7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJvbGRcIiwgQXJpYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6IHJnYigyNDMsIDE1NiwgMTgpO1xuICAgIH1cbiAgICBoMntcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWwgQm9sZFwiLCBBcmlhbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5idG4tc3VibWl0e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM5YzEyO1xuICAgICAgICBwYWRkaW5nOiA1cHggMjVweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgfVxuICAgIC5idG4tc3VibWl0OmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA5MjE0O1xuICAgIH1cbiAgICAuYnRuLW5leHQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTdkMDtcbiAgICAgIHBhZGRpbmc6IDVweCAyNXB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gICAgLmJ0bi1uZXh0OmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4N2E4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 60458:
/*!*******************************************************!*\
  !*** ./src/app/powerpoint_frontend/routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerpointFrontRoutingModule": () => (/* binding */ PowerpointFrontRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);
/* harmony import */ var _chart_controller_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart/controller.component */ 77144);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masterpage/controller.component */ 95396);
/* harmony import */ var _powerpoint_detail_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./powerpoint-detail/controller.component */ 67156);
/* harmony import */ var _result_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./result/controller.component */ 82800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








const powerpointFrontRoutes = [
    {
        path: '',
        component: _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_1__.PowerpointFrontendMasterPageComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'detail/:id/:hash_code', component: _powerpoint_detail_controller_component__WEBPACK_IMPORTED_MODULE_2__.PowerpointDetailComponent },
                    { path: 'result/:id/:hash_code', component: _result_controller_component__WEBPACK_IMPORTED_MODULE_3__.PowerpointResultComponent },
                    { path: 'embed/:id/:hash_code', component: _chart_controller_component__WEBPACK_IMPORTED_MODULE_0__.PowerpointChartComponent },
                ]
            }
        ]
    }
];
class PowerpointFrontRoutingModule {
}
PowerpointFrontRoutingModule.ɵfac = function PowerpointFrontRoutingModule_Factory(t) { return new (t || PowerpointFrontRoutingModule)(); };
PowerpointFrontRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PowerpointFrontRoutingModule });
PowerpointFrontRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(powerpointFrontRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PowerpointFrontRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_powerpoint_frontend_module_module_ts.js.map