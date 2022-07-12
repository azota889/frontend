"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_homework_module_module_ts"],{

/***/ 96223:
/*!****************************************************************!*\
  !*** ./src/app/homework/add-home-work/controller.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewHomeworkComponent": () => (/* binding */ AddNewHomeworkComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ 83277);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_directives_CustomNgxDatetimeAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/directives/CustomNgxDatetimeAdapter */ 90322);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/validator/whitespace.validator */ 41303);
/* harmony import */ var src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_helpers/FileManagers */ 12626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_helpers_MyPdfService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_helpers/MyPdfService */ 58326);
/* harmony import */ var src_app_core_auto_api_common_api_api_homework_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/auto_api/common_api/api/homework.service */ 57521);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/upload.api.service */ 29401);
/* harmony import */ var src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/zipdata.service */ 2366);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/user.service */ 88386);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 72727);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);
/* harmony import */ var _azota_ui_preview_media_controller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../azota-ui/preview-media/controller.component */ 73852);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);



































function AddNewHomeworkComponent_azt_loading_effect_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "azt-loading-effect");
} }
function AddNewHomeworkComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "header-backend", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("MenuEvent", function AddNewHomeworkComponent_ng_template_1_div_0_Template_header_backend_MenuEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r21.callbackMenuEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("menu_objs", ctx_r3.menuObjs)("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, "lang_homework_add_home_work_add_home_work"))("back_link", "/admin/homework/classes/1");
} }
function AddNewHomeworkComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "header-backend", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("MenuEvent", function AddNewHomeworkComponent_ng_template_1_ng_template_1_Template_header_backend_MenuEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r23.callbackMenuEvent($event); })("RedirectToLink", function AddNewHomeworkComponent_ng_template_1_ng_template_1_Template_header_backend_RedirectToLink_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r25.redirectToBackLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("menu_objs", ctx_r5.menuObjs)("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 3, "lang_homework_add_home_work_update_home_work"))("checkUrlFunction", true);
} }
function AddNewHomeworkComponent_ng_template_1_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("** ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "lang_homework_add_home_work_validate_enter_null_name_homework"), ".");
} }
function AddNewHomeworkComponent_ng_template_1_div_15_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("** ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "lang_homework_add_home_work_validate_enter_name_homework"), ".");
} }
function AddNewHomeworkComponent_ng_template_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 58)(1, "div")(2, "div", 59)(3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, AddNewHomeworkComponent_ng_template_1_div_15_div_4_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, AddNewHomeworkComponent_ng_template_1_div_15_div_5_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r6.form.controls.nameExam.errors.required || ctx_r6.form.controls.nameExam.errors.noWhiteSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r6.form.controls.nameExam.errors.maxlength);
} }
function AddNewHomeworkComponent_ng_template_1_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function AddNewHomeworkComponent_ng_template_1_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} }
function AddNewHomeworkComponent_ng_template_1_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Ch\u1EE5p \u1EA3nh b\u00E0i t\u1EADp ho\u1EB7c ch\u1ECDn file word, pdf, audio, video c\u00F3 s\u1EB5n");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function AddNewHomeworkComponent_ng_template_1_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div")(2, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AddNewHomeworkComponent_ng_template_1_div_55_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r31); const index_file_r29 = restoredCtx.index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r30.formHomework.files ? ctx_r30.formHomework.files.splice(index_file_r29, 1) : false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AddNewHomeworkComponent_ng_template_1_div_55_Template_a_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r31); const fileUpload_r28 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r32.onShowFile(fileUpload_r28, -1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const fileUpload_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("title", fileUpload_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](fileUpload_r28.name);
} }
function AddNewHomeworkComponent_ng_template_1_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 2, "lang_homework_add_home_work_edit_homework"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r13.classroomObjByHomework.name, "");
} }
function AddNewHomeworkComponent_ng_template_1_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "lang_homework_add_home_work_select_class"));
} }
function AddNewHomeworkComponent_ng_template_1_div_72_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AddNewHomeworkComponent_ng_template_1_div_72_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return ctx_r36.checkAllCheckBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 1, "lang_homework_add_home_work_select_all"), " ");
} }
function AddNewHomeworkComponent_ng_template_1_div_72_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AddNewHomeworkComponent_ng_template_1_div_72_ng_template_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return ctx_r38.clearAllCheckBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "lang_homework_add_home_work_clear_select_all"), " ");
} }
function AddNewHomeworkComponent_ng_template_1_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, AddNewHomeworkComponent_ng_template_1_div_72_div_1_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, AddNewHomeworkComponent_ng_template_1_div_72_ng_template_2_Template, 3, 3, "ng-template", null, 72, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r15.isCheckAll == false)("ngIfElse", _r34);
} }
function AddNewHomeworkComponent_ng_template_1_div_73_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().index;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r43.classroomObjs[i_r42].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind3"](2, 2, ctx_r43.classroomObjs[i_r42].name, 0, 25) + "..");
} }
function AddNewHomeworkComponent_ng_template_1_div_73_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().index;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r44.classroomObjs[i_r42].name);
} }
function AddNewHomeworkComponent_ng_template_1_div_73_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Chia s\u1EBB");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function AddNewHomeworkComponent_ng_template_1_div_73_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 76)(1, "mat-checkbox", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "createPermission");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, AddNewHomeworkComponent_ng_template_1_div_73_div_1_span_3_Template, 3, 6, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, AddNewHomeworkComponent_ng_template_1_div_73_div_1_span_4_Template, 2, 1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, AddNewHomeworkComponent_ng_template_1_div_73_div_1_span_5_Template, 2, 0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "fullPermission");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r42 = ctx.index;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("value", ctx_r40.classroomObjs[i_r42].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControlName", i_r42)("disabled", ctx_r40.checkPermissionObj(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 6, ctx_r40.classroomObjs[i_r42].permissionObj, "homework")));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r40.getClassroomNameLength(ctx_r40.classroomObjs[i_r42]) > 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r40.getClassroomNameLength(ctx_r40.classroomObjs[i_r42]) <= 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r40.checkPermissionObj(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](6, 9, ctx_r40.classroomObjs[i_r42].permissionObj, "classroom")));
} }
function AddNewHomeworkComponent_ng_template_1_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, AddNewHomeworkComponent_ng_template_1_div_73_div_1_Template, 7, 12, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r16.form.controls["classroomIds"]["controls"]);
} }
function AddNewHomeworkComponent_ng_template_1_div_76_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AddNewHomeworkComponent_ng_template_1_div_76_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r48.redirectClasses(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AddNewHomeworkComponent_ng_template_1_div_76_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r50.saveHomeworkProgress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 3, "lang_buttom_cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r17.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 5, "lang_buttom_save"));
} }
function AddNewHomeworkComponent_ng_template_1_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AddNewHomeworkComponent_ng_template_1_ng_template_77_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r51.redirectBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AddNewHomeworkComponent_ng_template_1_ng_template_77_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r53.updateHomeworkProgress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, "lang_buttom_cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r19.form.controls.nameExam.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 5, "lang_buttom_update"));
} }
function AddNewHomeworkComponent_ng_template_1_div_92_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "azt-preview-media", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("closePreview", function AddNewHomeworkComponent_ng_template_1_div_92_Template_azt_preview_media_closePreview_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r54.onFileClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("fileOption", ctx_r20.previewFile);
} }
const _c0 = function () { return { standalone: true }; };
const _c1 = function () { return []; };
const _c2 = "bold italic backcolor | alignleft aligncenter alignright alignjustify";
const _c3 = function (a2) { return { height: 250, menubar: false, plugins: a2, toolbar: _c2 }; };
function AddNewHomeworkComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, AddNewHomeworkComponent_ng_template_1_div_0_Template, 3, 5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, AddNewHomeworkComponent_ng_template_1_ng_template_1_Template, 2, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "form", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](11, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, AddNewHomeworkComponent_ng_template_1_div_15_Template, 6, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](20, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 14)(22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "mat-form-field", 18)(26, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AddNewHomeworkComponent_ng_template_1_Template_input_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r57); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](31); return _r7.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AddNewHomeworkComponent_ng_template_1_Template_button_click_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r57); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](31); _r7.open(); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "ngx-mat-datetime-picker", null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](32, AddNewHomeworkComponent_ng_template_1_ng_template_32_Template, 2, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "div", 22)(34, "div", 23)(35, "div")(36, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AddNewHomeworkComponent_ng_template_1_Template_a_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r57); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r59.clearTime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](37, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](42, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 27)(44, "div", 28)(45, "div", 12)(46, "div", 29)(47, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function AddNewHomeworkComponent_ng_template_1_Template_input_change_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r57); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r60.onFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AddNewHomeworkComponent_ng_template_1_Template_a_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r57); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](48); return _r9.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](52, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](53, AddNewHomeworkComponent_ng_template_1_div_53_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, AddNewHomeworkComponent_ng_template_1_div_54_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](55, AddNewHomeworkComponent_ng_template_1_div_55_Template, 8, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "div", 36)(57, "editor", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function AddNewHomeworkComponent_ng_template_1_Template_editor_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r57); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r62.formHomework.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "div", 38)(59, "div", 29)(60, "mat-checkbox", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](62, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "div", 40)(64, "mat-checkbox", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](66, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](67, "div", 38)(68, "div", 42)(69, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](70, AddNewHomeworkComponent_ng_template_1_div_70_Template, 5, 4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](71, AddNewHomeworkComponent_ng_template_1_div_71_Template, 3, 3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](72, AddNewHomeworkComponent_ng_template_1_div_72_Template, 4, 2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](73, AddNewHomeworkComponent_ng_template_1_div_73_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](74, "div", 46)(75, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](76, AddNewHomeworkComponent_ng_template_1_div_76_Template, 7, 7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](77, AddNewHomeworkComponent_ng_template_1_ng_template_77_Template, 6, 7, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](79, "div", 49)(80, "div", 50)(81, "div", 51)(82, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](84, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](85, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](87, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](88, "div", 53)(89, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](91, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](92, AddNewHomeworkComponent_ng_template_1_div_92_Template, 2, 1, "div", 55);
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](2);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](31);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](78);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.isCheckUpdate == false)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](11, 29, "lang_homework_add_home_work_name_home_work"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.form.controls.nameExam.errors && (ctx_r2.form.controls.nameExam.touched || ctx_r2.form.controls.nameExam.dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](20, 31, "lang_homework_add_home_work_deadline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngxMatDatetimePicker", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](37, 33, "lang_homework_add_home_work_reset_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("* ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](42, 35, "lang_homework_add_home_work_tutorial_enter_time"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](49, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("+ ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](52, 37, "lang_homework_add_home_work_add_file_homework"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.loadingUpload);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r2.formHomework.files || ctx_r2.formHomework.files.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.formHomework.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r2.formHomework.content)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](50, _c0))("init", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](52, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](51, _c1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](62, 39, "lang_homework_add_home_work_request_login"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](66, 41, "lang_homework_add_home_work_dont_view_point"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.isCheckUpdate == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.isCheckUpdate == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.isCheckUpdate == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.isCheckUpdate == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.isCheckUpdate == false)("ngIfElse", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](84, 43, "lang_homework_add_home_work_library_homework"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](87, 45, "lang_homework_add_home_work_tutorial_upload_file"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](91, 47, "lang_developing"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.isShowPreviewFile);
} }
const CUSTOM_DATE_FORMATS = {
    parse: {
        dateInput: 'l, LTS'
    },
    display: {
        dateInput: 'DD-MM-YYYY HH:mm:00',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};
class AddNewHomeworkComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(activeRoute, commonService, myPdfService, fb, homeworkService, classroomService, apiUploadService, zipdataService, userService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.myPdfService = myPdfService;
        this.fb = fb;
        this.homeworkService = homeworkService;
        this.classroomService = classroomService;
        this.apiUploadService = apiUploadService;
        this.zipdataService = zipdataService;
        this.userService = userService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({});
        this.formHomework = { files: [], content: '' };
        this.isShowPreviewFile = false;
        this.uploadProgress = -1;
        this.LogErrorsRequest = '';
        this.menuObjs = [];
        this.classroomObjs = [];
        this.isCheckAll = false;
        this.homeworkId = 0;
        this.homeworkData = {};
        this.homeworkDatas = [];
        this.prevData = '';
        this.isCheckUpdate = false;
        this.classObj = {};
        this.classId = 0;
        this.backLink = '';
        this.backToLink = '';
        this.listIds = '';
        this.classroomObjByHomework = {};
        this.loadingUpload = false;
        this.contentBase64Count = 0;
        this.homeWorkContent = '';
        this.newListUrls = [];
        this.homeworkHashId = '';
        // Process image base64, blob
        this.convertBlobToBase64 = (url) => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                var img = new Image();
                img.crossOrigin = 'Anonymous';
                img.addEventListener('load', function () {
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');
                    canvas.width = this.width;
                    canvas.height = this.height;
                    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 0, 0);
                    var newImg = canvas.toDataURL('image/png');
                    resolve(newImg);
                }, false);
                img.src = url;
            });
        });
        this.minSelectedCheckboxes = (min = 1) => {
            const validator = (formArray) => {
                const totalSelected = formArray.controls.map(control => control.value).reduce((prev, next) => (next ? prev + next : prev), 0);
                return totalSelected >= min ? null : { required: true };
            };
            return validator;
        };
    }
    // Utils
    disableScroll() {
        let fixedLeft = window.pageYOffset || document.documentElement.scrollLeft;
        let fixedTop = window.pageXOffset || document.documentElement.scrollTop;
        window.onscroll = () => {
            window.scrollTo(fixedLeft, fixedTop);
        };
    }
    enableScroll() {
        window.onscroll = () => { };
    }
    onFileClose() {
        this.enableScroll();
        this.isShowPreviewFile = false;
        this.previewFile = undefined;
    }
    onShowFile(file, indexParam) {
        this.isShowPreviewFile = true;
        this.disableScroll();
        this.previewFile = Object.assign(Object.assign({}, file), { index: indexParam });
    }
    callbackMenuEvent(code) {
        if (code == 'logPoidClass') {
        }
    }
    convertFullNumber(numberParam) {
        if (numberParam >= 10) {
            return numberParam;
        }
        else {
            return `0${numberParam}`;
        }
    }
    // Utils for string
    findAllSubString(stringParam, sub) {
        var startIndex = 0;
        var index = 0;
        var listIndex = [];
        while (stringParam.indexOf(sub, startIndex) > -1) {
            index = stringParam.indexOf(sub, startIndex);
            listIndex.push(index);
            startIndex = index + sub.length;
        }
        return listIndex;
    }
    getTypeFile(base64) {
        var b64Subs = base64.indexOf(';');
        return base64.substring(5, b64Subs);
    }
    getFileName(typeFile) {
        var reverseTypeFile = typeFile.split('').reverse().join('');
        var b64Subs1 = reverseTypeFile.indexOf(';');
        var b64Subs2 = reverseTypeFile.indexOf('/', b64Subs1);
        return reverseTypeFile.substring(b64Subs1, b64Subs2).split('').reverse().join('');
    }
    onFileSelected(event) {
        let eventObj = event;
        let target = eventObj.target;
        let files = target.files;
        let file = files ? files[0] : false;
        if (file != false) {
            if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_3__.isSuportTypeUploadHomework)(file.type)) {
                if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_3__.isNotSupportVideo)(file.type)) {
                    this.showErrorSnack('File gặp lỗi: ' + file.name + '. Kiểu: ' + file.type + '. Chưa hỗ trợ định dạng video .wmv! Vui lòng thử lại.');
                }
                else {
                    this.loadingUpload = true;
                    this.uploadProgress = 0;
                    (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_3__.compressImage)(file).then(dataFile => {
                        this.apiUploadService.uploadToCdnForHomework(dataFile).subscribe(eventRes => {
                            var _a;
                            if (eventRes.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpEventType.UploadProgress) {
                                if (eventRes.success == 1) {
                                    if (this.formHomework.files && !Array.isArray(this.formHomework.files)) {
                                        this.formHomework.files = [];
                                    }
                                    (_a = this.formHomework.files) === null || _a === void 0 ? void 0 : _a.push(Object.assign({}, eventRes.data));
                                    this.loadingUpload = false;
                                    this.uploadProgress = -1;
                                }
                                else {
                                    this.loadingUpload = false;
                                    this.showErrorSnack('Không Upload được ảnh! Vui lòng thử lại sau! Lỗi:  [SPLIT_LANG]' + eventRes.message);
                                }
                            }
                        });
                    });
                }
            }
            else {
                this.showErrorSnack('Vui lòng chỉ tải lên định dạng file ảnh, pdf, audio và video');
            }
        }
        // reset input
        target.files = null;
    }
    redirectBack() {
        this.commonService.myNavigation(this.backLink);
    }
    clearAllCheckBox() {
        let formArray = this.form.get('classroomIds');
        formArray.controls.forEach(e => {
            e.setValue(false);
        });
        this.isCheckAll = false;
    }
    checkAllCheckBox() {
        let formArray = this.form.get('classroomIds');
        formArray.controls.forEach(e => {
            e.setValue(true);
        });
        this.isCheckAll = true;
    }
    checkIsChosen(classObjs, homeWorkObjs) {
        if (homeWorkObjs == null) {
            for (var i = 0; i < classObjs.length; i++) {
                this.addNewCheckBox(false);
            }
        }
        else {
            for (var i = 0; i < classObjs.length; i++) {
                var isCheckBox = false;
                for (var j = 0; j < homeWorkObjs.length; j++) {
                    if (classObjs[i].id == homeWorkObjs[j].classroomId) {
                        isCheckBox = true;
                    }
                }
                this.addNewCheckBox(isCheckBox);
            }
        }
    }
    redirectClasses() {
        this.commonService.myNavigation('/admin/homework/classes/1');
    }
    redirectToSuccess(lstIds) {
        this.commonService.myNavigation('/admin/homework/create-homework-success/' + lstIds);
    }
    addNewCheckBox(value) {
        const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(value);
        this.form.get('classroomIds').push(control);
    }
    clearTime() {
        this.form.controls.deadlineHomework.setValue('');
    }
    startUploadBlobFile(blobObj, blobToBase64) {
        if (blobToBase64 && blobToBase64 != '') {
            var typeFile = this.getTypeFile(blobToBase64);
            var fileConverted = this.myPdfService.b64toFile(blobToBase64, this.getFileName(typeFile), typeFile);
            (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_3__.compressImage)(fileConverted).then(dataFile => {
                this.apiUploadService.uploadToCdnForHomework(dataFile).subscribe(event => {
                    var _a, _b;
                    if (event.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpEventType.UploadProgress) {
                        if (event.success == 1) {
                            var newBase64Obj = Object.assign(Object.assign({}, blobObj), { newUrl: (_b = (_a = event.data) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : '' });
                            this.newListUrls.push(newBase64Obj);
                            this.contentBase64Count -= 1;
                            if (this.contentBase64Count == 0) {
                                this.changeContent();
                            }
                        }
                        else {
                            this.showErrorSnack('Không Upload được ảnh! Vui lòng thử lại sau! Lỗi:  [SPLIT_LANG]' + event.message);
                            this.stopStatusObj();
                        }
                    }
                });
            });
        }
        else {
            this.showErrorSnack('Không Upload được ảnh! Vui lòng thử lại sau!');
            this.stopStatusObj();
        }
    }
    reUploadBlobFile(listBlob) {
        var _a;
        if (listBlob && listBlob.length > 0) {
            this.contentBase64Count = listBlob.length;
            for (var i = 0; i < listBlob.length; i++) {
                var reader = new FileReader();
                const blobObj = listBlob[i];
                const blobData = (_a = blobObj === null || blobObj === void 0 ? void 0 : blobObj.oldUrl) === null || _a === void 0 ? void 0 : _a.substring(0, blobObj.oldUrl.length - 1);
                this.convertBlobToBase64(blobData !== null && blobData !== void 0 ? blobData : '').then(res => {
                    this.startUploadBlobFile(blobObj, res);
                });
            }
        }
        else {
            this.showErrorSnack('Không Upload được ảnh! Vui lòng thử lại sau!');
            this.stopStatusObj();
        }
    }
    reUploadBase64File(listBase64) {
        var _a;
        if (listBase64 && listBase64.length > 0) {
            this.contentBase64Count = listBase64.length;
            for (var i = 0; i < listBase64.length; i++) {
                const base64Obj = listBase64[i];
                const base64Data = (_a = base64Obj.oldUrl) === null || _a === void 0 ? void 0 : _a.substring(0, base64Obj.oldUrl.length - 1);
                var typeFile = this.getTypeFile(base64Data !== null && base64Data !== void 0 ? base64Data : '');
                var fileConverted = this.myPdfService.b64toFile(base64Data !== null && base64Data !== void 0 ? base64Data : '', this.getFileName(typeFile), typeFile);
                (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_3__.compressImage)(fileConverted).then(dataFile => {
                    this.apiUploadService.uploadToCdnForHomework(dataFile).subscribe(event => {
                        var _a, _b;
                        if (event.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpEventType.UploadProgress) {
                            if (event.success == 1) {
                                var newBase64Obj = Object.assign(Object.assign({}, base64Obj), { newUrl: (_b = (_a = event.data) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : '' });
                                this.newListUrls.push(newBase64Obj);
                                this.contentBase64Count -= 1;
                                if (this.contentBase64Count == 0) {
                                    this.changeContent();
                                }
                            }
                            else {
                                this.showErrorSnack('Không Upload được ảnh! Vui lòng thử lại sau! Lỗi:  [SPLIT_LANG]' + event.message);
                                this.stopStatusObj();
                            }
                        }
                    });
                });
            }
        }
        else {
            this.showErrorSnack('Không Upload được ảnh! Vui lòng thử lại sau!');
            this.stopStatusObj();
        }
    }
    foundImgInContent(content) {
        var listIndexImgTag = this.findAllSubString(content, '<img');
        var listBase64 = [];
        var listBlob = [];
        listIndexImgTag.forEach((index) => {
            var startSrcImg = content.indexOf('src=', index);
            var endSrcImg = content.indexOf('"', Number(startSrcImg) + 5);
            var findBase64OrBlob = content.substring(Number(startSrcImg) + 5, Number(endSrcImg) + 1);
            if (findBase64OrBlob.includes(';base64')) {
                listBase64.push({ oldUrl: findBase64OrBlob });
            }
            else if (findBase64OrBlob.includes('blob:')) {
                listBlob.push({ oldUrl: findBase64OrBlob });
            }
        });
        if (listBase64.length > 0) {
            this.reUploadBase64File(listBase64);
        }
        else if (listBlob.length > 0) {
            this.reUploadBlobFile(listBlob);
        }
        else {
            this.changeContent();
        }
    }
    // Call api to save homework
    changeContent() {
        if (this.newListUrls.length > 0) {
            this.newListUrls.forEach((obj) => {
                var _a;
                var newContent = this.homeWorkContent.replace((_a = obj.oldUrl) !== null && _a !== void 0 ? _a : '  ', obj.newUrl + '" class="w-100 img-fluid"');
                this.homeWorkContent = newContent;
            });
        }
        if (this.isCheckUpdate) {
            this.updateHomeWork();
        }
        else {
            this.saveHomework();
        }
    }
    saveHomeworkProgress() {
        this.initStatusObj();
        if (this.formHomework.content == null || this.formHomework.content == undefined) {
            this.homeWorkContent = '';
            this.saveHomework();
        }
        else {
            this.homeWorkContent = this.formHomework.content;
            if (this.homeWorkContent.includes('<img ')) {
                this.foundImgInContent(this.homeWorkContent);
            }
            else {
                this.saveHomework();
            }
        }
    }
    updateHomeworkProgress() {
        this.initStatusObj();
        if (this.formHomework.content == null || this.formHomework.content == undefined) {
            this.homeWorkContent = '';
            this.updateHomeWork();
        }
        else {
            this.homeWorkContent = this.formHomework.content;
            if (this.homeWorkContent.includes('<img ')) {
                this.foundImgInContent(this.formHomework.content);
            }
            else {
                this.updateHomeWork();
            }
        }
    }
    saveHomework() {
        let formObject = this.commonService.getFormObj(this.form);
        formObject.deadlineHomework = formObject.deadlineHomework === '' || formObject.deadlineHomework === null ? null : (0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.formatDate)(formObject.deadlineHomework, 'yyyy-MM-ddTHH:mm:00', 'en_vn');
        formObject.isCheckLogin = formObject.isCheckLogin != true ? 0 : 1;
        formObject.dontShowMark = formObject.dontShowMark != true ? 0 : 1;
        formObject.whenShowAnswer = formObject.whenShowAnswer != true ? 0 : 1;
        const listCheckBox = formObject.classroomIds.map((checked, i) => (checked ? this.classroomObjs[i].id : null)).filter((v) => v !== null);
        this.homeWorkContent = this.zipdataService.convertContentGzip(this.homeWorkContent);
        let userObj = this.userService.getUserObj();
        let objHeader = JSON.stringify({ type: 'homework', id: this.homeworkId, user: userObj.id });
        let homeworkCreateForm = {
            name: formObject.nameExam,
            content: this.homeWorkContent,
            deadline: formObject.deadlineHomework,
            testbankExams: '',
            files: JSON.stringify(this.formHomework.files),
            mustVerified: formObject.isCheckLogin,
            dontShowMark: formObject.dontShowMark,
            whenShowAnswer: formObject.whenShowAnswer,
            globalSetting: 0,
            classroomIds: listCheckBox
        };
        this.subscriptions.add(this.homeworkService.apiHomeworkSaveObjPost(homeworkCreateForm, objHeader).subscribe((response) => {
            var _a, _b, _c;
            if (response.success == 1) {
                this.showSuccessSnack('Tạo bài tập thành công.');
                var listIds = [];
                if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) {
                    for (var i = 0; i < response.data.objs.length; i++) {
                        listIds.push((_b = response.data) === null || _b === void 0 ? void 0 : _b.objs[i].hashId);
                    }
                }
                this.listIds = JSON.stringify(listIds);
                this.redirectToSuccess(this.listIds);
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : '', true);
            }
        }));
    }
    updateHomeWork() {
        let formObject = this.commonService.getFormObj(this.form);
        formObject.deadlineHomework = formObject.deadlineHomework === '' || formObject.deadlineHomework === null ? null : (0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.formatDate)(formObject.deadlineHomework, 'yyyy-MM-ddTHH:mm:00 Z', 'en_vn');
        formObject.isCheckLogin = formObject.isCheckLogin != true ? 0 : 1;
        formObject.dontShowMark = formObject.dontShowMark != true ? 0 : 1;
        formObject.whenShowAnswer = formObject.whenShowAnswer != true ? 0 : 1;
        this.homeWorkContent = this.zipdataService.convertContentGzip(this.homeWorkContent);
        let userObj = this.userService.getUserObj();
        let objHeader = JSON.stringify({ type: 'homework', id: this.homeworkId, user: userObj.id });
        let homeworkUpdateForm = {
            id: this.homeworkId,
            homeworkHashId: this.homeworkHashId,
            name: formObject.nameExam,
            content: this.homeWorkContent,
            deadline: formObject.deadlineHomework,
            testbankExams: '',
            files: JSON.stringify(this.formHomework.files),
            mustVerified: formObject.isCheckLogin,
            dontShowMark: formObject.dontShowMark,
            whenShowAnswer: formObject.whenShowAnswer,
            globalSetting: 0
        };
        this.subscriptions.add(this.homeworkService.apiHomeworkUpdateObjPost(homeworkUpdateForm, objHeader).subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.showSuccessSnack('Cập nhật thành công.');
                this.redirectToBackLink();
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
            }
        }));
    }
    getHomework(id) {
        this.initStatusObj();
        this.isCheckUpdate = id ? true : false;
        this.subscriptions.add(this.homeworkService.apiHomeworkGetObjGet(this.isCheckUpdate ? this.homeworkHashId : 'add_new').subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
            if (response.success == 1) {
                this.classroomObjs = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.classroomObjs) !== null && _b !== void 0 ? _b : new Array();
                this.checkIsChosen(this.classroomObjs, this.homeworkDatas);
                if (this.isCheckUpdate) {
                    this.formHomework.files = ((_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.homeworkObj) === null || _d === void 0 ? void 0 : _d.files) ? this.commonService.parseJson((_f = (_e = response.data) === null || _e === void 0 ? void 0 : _e.homeworkObj) === null || _f === void 0 ? void 0 : _f.files) : [];
                    this.formHomework.content = ((_h = (_g = response.data) === null || _g === void 0 ? void 0 : _g.homeworkObj) === null || _h === void 0 ? void 0 : _h.content) ? this.zipdataService.decodeContentGzip((_k = (_j = response.data) === null || _j === void 0 ? void 0 : _j.homeworkObj) === null || _k === void 0 ? void 0 : _k.content) : '';
                    this.homeworkDatas = ((_l = response === null || response === void 0 ? void 0 : response.data) === null || _l === void 0 ? void 0 : _l.homeworkObj) ? [(_m = response === null || response === void 0 ? void 0 : response.data) === null || _m === void 0 ? void 0 : _m.homeworkObj] : new Array();
                    this.classroomObjByHomework = (_p = (_o = response === null || response === void 0 ? void 0 : response.data) === null || _o === void 0 ? void 0 : _o.classroomObj) !== null && _p !== void 0 ? _p : {};
                    this.homeworkData = (_r = (_q = response === null || response === void 0 ? void 0 : response.data) === null || _q === void 0 ? void 0 : _q.homeworkObj) !== null && _r !== void 0 ? _r : {};
                    this.classId = (_u = (_t = (_s = response === null || response === void 0 ? void 0 : response.data) === null || _s === void 0 ? void 0 : _s.classroomObj) === null || _t === void 0 ? void 0 : _t.id) !== null && _u !== void 0 ? _u : 0;
                    this.backLink = '/admin/homework/score-list/' + this.classId + '/' + this.homeworkId + '/' + this.homeworkData.hashId;
                    this.form.patchValue({
                        nameExam: this.homeworkData.name,
                        deadlineHomework: this.homeworkData.deadline != null ? this.homeworkData.deadline : '',
                        isCheckLogin: this.homeworkData.mustVerified != 0 ? true : false,
                        dontShowMark: this.homeworkData.dontShowMark != 0 ? true : false,
                        whenShowAnswer: this.homeworkData.whenShowAnswer != 0 ? true : false
                    });
                }
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_v = response.message) !== null && _v !== void 0 ? _v : '', true);
            }
        }));
    }
    redirectToBackLink() {
        return this.commonService.myNavigationWithQueryString('/admin/homework/score-list/' + this.classId + '/' + this.homeworkId + '/' + this.homeworkData.hashId, '?backTo=' + encodeURIComponent(this.backToLink));
    }
    checkPermissionObj(event) {
        return event == true ? false : true;
    }
    getClassroomNameLength(classObj) {
        if (classObj && classObj.name) {
            return classObj.name.length;
        }
        else {
            return 0;
        }
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.combineLatest)([this.activeRoute.params, this.activeRoute.queryParams]).subscribe(([]) => {
            var _a, _b, _c;
            this.homeworkId = (_a = Number(this.commonService.getMyParam(this.activeRoute, 'id'))) !== null && _a !== void 0 ? _a : 0;
            this.homeworkHashId = (_b = this.commonService.getMyParam(this.activeRoute, 'hash_id')) !== null && _b !== void 0 ? _b : '';
            this.backToLink = (_c = this.commonService.getMyQueryParam('backTo')) !== null && _c !== void 0 ? _c : '';
            this.getHomework(this.homeworkId);
        });
        this.form = this.fb.group({
            nameExam: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(180), src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_2__.WhiteSpaceValidator.noWhiteSpace]),
            deadlineHomework: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
            isCheckLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
            contentHomework: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(),
            dontShowMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
            whenShowAnswer: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
            classroomIds: this.fb.array([], this.minSelectedCheckboxes(1))
        });
        this.form.valueChanges.subscribe(data => {
            let str = JSON.stringify(data);
            if (str != this.prevData) {
                this.prevData = str;
                this.form.patchValue(data);
            }
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_homework_add_exercise_title',
            description: 'lang_cms_homework_add_exercise_description',
            image: 'lang_cms_test_image'
        });
    }
}
AddNewHomeworkComponent.ɵfac = function AddNewHomeworkComponent_Factory(t) { return new (t || AddNewHomeworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_helpers_MyPdfService__WEBPACK_IMPORTED_MODULE_5__.MyPdfService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api_api_homework_service__WEBPACK_IMPORTED_MODULE_6__.HomeworkService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_7__.ClassroomService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_8__.ApiUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_9__.ZipdataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService)); };
AddNewHomeworkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: AddNewHomeworkComponent, selectors: [["app-add-home-work"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵProvidersFeature"]([
            // {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
            // {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
            {
                provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_22__.NgxMatDateAdapter,
                useClass: src_app_core_directives_CustomNgxDatetimeAdapter__WEBPACK_IMPORTED_MODULE_0__.CustomNgxDatetimeAdapter,
                deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MAT_DATE_LOCALE, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_24__.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            },
            { provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_22__.NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["doneLoading", ""], ["header", ""], [1, "p-3", 3, "formGroup"], [1, "container", "pb-80"], [1, "row", "py-md-4"], [1, "col-md-8", "add-homework--form"], [1, "row", "m-0", "pb-3"], [1, "col-4", "col-md-3", "add-homework--form__label", "text-md-right"], [1, "p-0", "m-0"], [1, "col-8", "col-md-9", "pl-0", "pr-0"], ["type", "text", "formControlName", "nameExam", "placeholder", "", 1, "form-control", "add-homework--form__input"], [1, "row"], ["class", "col-12 pt-1", 4, "ngIf"], [1, "col-8", "col-md-9", "pl-0", "pr-0", "add-homework--form__padding"], [1, "add-homework--form__border", "d-flex", "align-items-center"], [1, "row", "m-0", "p-0", "align-items-center", "justify-content-around", "homework-box", 2, "width", "100%"], [1, "col-9", "col-md-10", "pr-0", "pl-0", 2, "border", "1px solid #ced4da", "border-radius", "3px"], [1, "myTimePicker", "pt-0"], ["matInput", "", "readonly", "", "formControlName", "deadlineHomework", 3, "ngxMatDatetimePicker", "click"], ["mat-icon-button", "", "matSuffix", "", 2, "font-size", "18px", 3, "click"], ["durationTime", ""], [1, "col-2", "col-md-1", "pl-0", "pr-0"], [1, "pl-1", "d-flex", "align-items-center", "justify-content-center", 2, "padding-top", "3px"], [1, "clickable", 2, "color", "#3f51b5", 3, "matTooltip", "click"], [2, "vertical-align", "middle"], [1, "clearfix", "pt-1"], [1, "row", "pt-4", "m-0"], [1, "col-12", "add-homework--form__title", "none-top__border", "none-bottom__border"], [1, "col-md-12"], ["type", "file", "name", "fileHomework", 2, "display", "none", 3, "ngModelOptions", "change"], ["formChoseFile", ""], [1, "d-flex", "align-items-center", 2, "color", "#3c8dbc", 3, "click"], ["class", "d-flex justify-content-center my-2", 4, "ngIf"], ["style", "color: #747373; font-size: 10px", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "col-12", "p-0", "mh-250"], ["apiKey", "ldij13v1886vlrnk42g9bvngyqdc6gxpe8l0n9mo8gdjpg9d", 3, "ngModel", "ngModelOptions", "init", "ngModelChange"], [1, "row", "m-0", "pt-3"], ["color", "primary", "formControlName", "isCheckLogin"], [1, "col-md-6"], ["color", "primary", "formControlName", "whenShowAnswer"], [1, "col-12", "add-homework--form__title", "none-bottom__border"], ["class", "col-9", 4, "ngIf"], ["class", "col-3 text-right", 4, "ngIf"], ["class", "row m-0 p-0 add-homework--form__content none-top__border", "style", "width: 100%", 4, "ngIf"], [1, "row", "m-0", "pt-4", "pb-3"], [1, "col-12", "text-right"], ["button", ""], [1, "col-md-4", "px-00"], [1, "library"], [1, "py-3", "text-center"], [1, "m-0", "font-weight-bold"], [1, "d-flex", "library--content", "align-items-center", "justify-content-center"], [1, "font-weight-bold", "m-0", "p-0"], [4, "ngIf"], [3, "menu_objs", "headerTitle", "back_link", "MenuEvent"], [3, "menu_objs", "headerTitle", "checkUrlFunction", "MenuEvent", "RedirectToLink"], [1, "col-12", "pt-1"], [1, "text-left"], [1, "text-danger"], [1, "d-flex", "justify-content-center", "my-2"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "sr-only"], [2, "color", "#747373", "font-size", "10px"], [1, "btn", "btn-sm", 3, "click"], [2, "font-size", "15px", "padding-top", "5px"], [3, "click"], [2, "color", "gray", "word-wrap", "break-word", 3, "title"], [1, "col-9"], [2, "color", "black", "font-weight", "bold"], [1, "col-3", "text-right"], ["chosen", ""], [1, "clickable", 2, "color", "#3c8dbc", 3, "click"], [1, "row", "m-0", "p-0", "add-homework--form__content", "none-top__border", 2, "width", "100%"], ["class", "col-sm-6 text-left pl-3 pt-2", "formArrayName", "classroomIds", 4, "ngFor", "ngForOf"], ["formArrayName", "classroomIds", 1, "col-sm-6", "text-left", "pl-3", "pt-2"], ["color", "primary", 3, "value", "formControlName", "disabled"], [3, "matTooltip", 4, "ngIf"], ["class", "badge badge-info", "style", "margin-left: 5px", 4, "ngIf"], [3, "matTooltip"], [1, "badge", "badge-info", 2, "margin-left", "5px"], [1, "button-cancel", 3, "click"], [1, "button-save", 3, "disabled", "click"], [3, "fileOption", "closePreview"]], template: function AddNewHomeworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, AddNewHomeworkComponent_azt_loading_effect_0_Template, 1, 0, "azt-loading-effect", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, AddNewHomeworkComponent_ng_template_1_Template, 93, 54, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.statusObj.loading == true)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_11__.AztLoadingEffectComponent, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_12__.HeaderBackendComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInput, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_22__.NgxMatDatetimeInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIcon, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_22__.NgxMatDatetimePicker, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_30__.EditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormArrayName, _azota_ui_preview_media_controller_component__WEBPACK_IMPORTED_MODULE_13__.AztPreviewMediaComponent], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__.CreatePermission, _angular_common__WEBPACK_IMPORTED_MODULE_19__.SlicePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__.FullPermission], styles: ["body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.add-homework--form[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 10px 8px;\n  border: 1px solid #ececec;\n  border-radius: 5px;\n}\n\n.add-homework--form__label[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.75rem;\n  align-self: center;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-size: 1rem;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-bottom-left-radius: 0.25rem;\n  border-top-left-radius: 0.25rem;\n}\n\n.add-homework--form__title[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.75rem;\n  align-self: center;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-size: 1rem;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 5px;\n}\n\n.add-homework--form__input[_ngcontent-%COMP%] {\n  height: 100%;\n  border-left: 0px;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n\n.add-homework--form__border[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  height: 100%;\n  border-left: none;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n\n.add-homework--form__content[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #f4f4f4;\n  border-radius: 3px;\n  padding: 10px;\n}\n\n.pb-80[_ngcontent-%COMP%] {\n  padding-bottom: 80px;\n}\n\n.mh-250[_ngcontent-%COMP%] {\n  min-height: 250px;\n}\n\n.none-top__border[_ngcontent-%COMP%] {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n\n.none-bottom__border[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.button-save[_ngcontent-%COMP%] {\n  background-color: #169bd5;\n  border: none;\n  color: white;\n  padding: 8px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  margin: 4px 16px;\n  cursor: pointer;\n  border-radius: 5px;\n  border: 1px solid #169bd5;\n  text-transform: uppercase;\n}\n\n.button-save[_ngcontent-%COMP%]:hover {\n  background-color: #0069d9;\n  border-color: #0069d9;\n}\n\n.button-cancel[_ngcontent-%COMP%] {\n  background-color: white !important;\n  border: none;\n  color: #333333;\n  padding: 8px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border: 1px solid #797979;\n  border-radius: 5px;\n  text-transform: uppercase;\n}\n\n.button-cancel[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.02) !important;\n}\n\n.files[_ngcontent-%COMP%] {\n  border-width: 0px;\n  background: inherit;\n  background-color: #f2f2f2;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e5e5e5;\n  border-left: 0px;\n  border-right: 0px;\n  border-radius: 0px;\n  box-shadow: none;\n  margin: 0 -24px;\n}\n\n.files[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.files-custom[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(0, 0, 0, 0.12) !important;\n  border-color: rgba(0, 0, 0, 0.12) !important;\n}\n\n.library[_ngcontent-%COMP%] {\n  border-width: 0px;\n  background: inherit;\n  background-color: #f9f9f9;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e9e9e9;\n  border-radius: 5px;\n  box-shadow: none;\n  padding: 10px;\n}\n\n.library--breadcum[_ngcontent-%COMP%] {\n  background: inherit;\n  background-color: #fafafa;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #f1f1f1;\n  border-bottom: 0px;\n  border-radius: 3px;\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  box-shadow: none;\n}\n\n.library--content[_ngcontent-%COMP%] {\n  border-width: 0px;\n  height: 100px;\n  background: inherit;\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #f4f4f4;\n  border-radius: 3px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  box-shadow: none;\n  padding: 10px;\n}\n\n  .mat-checkbox-layout {\n  white-space: normal !important;\n}\n\n@media screen and (max-width: 768px) {\n  .px-00[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n    margin-top: 12px;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .button-save[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n  }\n\n  .button-cancel[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n  }\n}\n\n .mat-checkbox-checked.mat-accent.mat-checkbox-disabled .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #3f51b5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBREk7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7QUFHUjs7QUFESTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFHUjs7QUFESTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFHUjs7QUFESTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBR1I7O0FBREk7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBR1I7O0FBQUE7RUFDSSxvQkFBQTtBQUdKOztBQURBO0VBQ0UsaUJBQUE7QUFJRjs7QUFGQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7QUFLSjs7QUFIQTtFQUNJLDhCQUFBO0VBQ0EsK0JBQUE7QUFNSjs7QUFKQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFPSjs7QUFMQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUFRSjs7QUFMQTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVFKOztBQUxBO0VBQ0ksZ0RBQUE7QUFRSjs7QUFOQTtFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0JBQUE7RUFDQSxlQUFBO0FBU0Q7O0FBUkM7RUFDQyxrQkFBQTtBQVVGOztBQU5DO0VBQ0MsZ0JBQUE7QUFTRjs7QUFOQTtFQUNDLFNBQUE7QUFTRDs7QUFQQTtFQUNJLGdEQUFBO0VBQ0EsNENBQUE7QUFVSjs7QUFSQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtFQUNBLGFBQUE7QUFXSjs7QUFUQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBR0EsZ0JBQUE7QUFZSjs7QUFWQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUdBLGdCQUFBO0VBQ0EsYUFBQTtBQWFKOztBQVhBO0VBQ0ksOEJBQUE7QUFjSjs7QUFYQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFjTjtBQUNGOztBQVpBO0VBQ0k7SUFDSSxpQkFBQTtFQWNOOztFQVpFO0lBQ0ksaUJBQUE7RUFlTjtBQUNGOztBQVhFO0VBQ0Usb0NBQUE7QUFhSiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5hZGQtaG9tZXdvcmstLWZvcm17XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzYsIDIzNiwgMjM2LCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgJl9fbGFiZWx7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMC43NXJlbTtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICAgIH1cbiAgICAmX190aXRsZXtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbSAwLjc1cmVtO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgJl9faW5wdXR7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6MHB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDsgICAgXG4gICAgfVxuICAgICZfX2JvcmRlcntcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7IFxuICAgIH1cbiAgICAmX19jb250ZW50e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NCwgMjQ0LCAyNDQsIDEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxufVxuLnBiLTgwe1xuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuLm1oLTI1MHtcbiAgbWluLWhlaWdodDogMjUwcHg7XG59XG4ubm9uZS10b3BfX2JvcmRlcntcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbn1cbi5ub25lLWJvdHRvbV9fYm9yZGVye1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xufVxuLmJ1dHRvbi1zYXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDE1NSwgMjEzLCAxKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDhweCAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDRweCAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMiwgMTU1LCAyMTMsIDEpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnV0dG9uLXNhdmU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjlkOTtcbiAgICBib3JkZXItY29sb3I6ICMwMDY5ZDk7XG59XG5cbi5idXR0b24tY2FuY2Vse1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgcGFkZGluZzogOHB4IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjEsIDEyMSwgMTIxLCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ1dHRvbi1jYW5jZWw6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKSAhaW1wb3J0YW50O1xufVxuLmZpbGVzIHtcblx0Ym9yZGVyLXdpZHRoOiAwcHg7XG5cdGJhY2tncm91bmQ6IGluaGVyaXQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGJvcmRlci13aWR0aDogMXB4O1xuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRib3JkZXItY29sb3I6IHJnYmEoMjI5LCAyMjksIDIyOSwgMSk7XG5cdGJvcmRlci1sZWZ0OiAwcHg7XG5cdGJvcmRlci1yaWdodDogMHB4O1xuXHRib3JkZXItcmFkaXVzOiAwcHg7XG5cdC1tb3otYm94LXNoYWRvdzogbm9uZTtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRtYXJnaW46IDAgLTI0cHg7XG5cdC5yb3cge1xuXHRcdHBhZGRpbmc6IDEwcHggMjBweDtcblx0fVxufVxuLmZpbGUge1xuXHRzcGFuIHtcblx0XHRtYXJnaW4tbGVmdDogNXB4O1xuXHR9XG59XG4uZmlsZXMtY3VzdG9tIHtcblx0bWFyZ2luOiAwO1xufVxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAgcmdiYSgwLCAwLCAwLCAwLjEyKSAhaW1wb3J0YW50O1xufVxuLmxpYnJhcnl7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDEpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjMzLCAyMzMsIDIzMywgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmxpYnJhcnktLWJyZWFkY3Vte1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAxKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MSwgMjQxLCAyNDEsIDEpO1xuICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuLmxpYnJhcnktLWNvbnRlbnR7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDQsIDI0NCwgMjQ0LCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1sYXlvdXR7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcbiAgICAucHgtMDB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNTc2cHgpIHtcbiAgICAuYnV0dG9uLXNhdmV7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIH1cbiAgICAuYnV0dG9uLWNhbmNlbHtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgfVxufVxuXG5cbiAgOjpuZy1kZWVwLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQubWF0LWNoZWNrYm94LWRpc2FibGVkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 23717:
/*!*************************************************************!*\
  !*** ./src/app/homework/class-list/controller.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassListComponent": () => (/* binding */ ClassListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/browser.storage.service */ 34782);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _azota_ui_home_work_file_home_work_file_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/home-work-file/home-work-file.component */ 38927);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);

















function ClassListComponent_azt_loading_effect_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "azt-loading-effect");
} }
function ClassListComponent_ng_template_3_div_0_div_8_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Chia s\u1EBB");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ClassListComponent_ng_template_3_div_0_div_8_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 23)(2, "div", 24)(3, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "lang_homework_class_list_not_found_homework"));
} }
function ClassListComponent_ng_template_3_div_0_div_8_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "azt-home-work-file", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("redirectId", function ClassListComponent_ng_template_3_div_0_div_8_div_13_div_1_Template_azt_home_work_file_redirectId_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20); const homework_r16 = restoredCtx.$implicit; const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r18.redirectHomework($event, item_r9.id && item_r9.id != "share" ? item_r9.id : homework_r16.classroomId ? homework_r16.classroomId.toString() : "0", homework_r16.hashId ? homework_r16.hashId : ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const homework_r16 = ctx.$implicit;
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("classId", item_r9.id != "share" ? item_r9.id : homework_r16.classroomId == null ? null : homework_r16.classroomId.toString())("name", homework_r16.name ? homework_r16.name : "")("dateCreated", homework_r16.createdAt)("deadLine", homework_r16.deadline)("totalTakeTest", homework_r16.count ? homework_r16.count : 0)("totalStudent", homework_r16.countStudents ? homework_r16.countStudents : 0)("hashId", homework_r16.hashId ? homework_r16.hashId : "")("homeworkId", homework_r16.id ? homework_r16.id : 0)("className", item_r9.id == "share" && homework_r16.className ? homework_r16.className : "")("backLink", ctx_r15.backLink);
} }
function ClassListComponent_ng_template_3_div_0_div_8_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ClassListComponent_ng_template_3_div_0_div_8_div_13_div_1_Template, 2, 10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", item_r9.homeworks);
} }
function ClassListComponent_ng_template_3_div_0_div_8_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 29);
} }
function ClassListComponent_ng_template_3_div_0_div_8_div_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ClassListComponent_ng_template_3_div_0_div_8_div_14_ng_container_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r25.getClassroomHomeworkInArchive(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "lang_homework_class_list_see_more_old"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !item_r9.nextPage);
} }
function ClassListComponent_ng_template_3_div_0_div_8_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ClassListComponent_ng_template_3_div_0_div_8_div_14_div_1_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ClassListComponent_ng_template_3_div_0_div_8_div_14_ng_container_2_Template, 5, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r9.isLoadingPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r9.isLoadingPage);
} }
const _c0 = function (a0) { return { "pb-0": a0 }; };
const _c1 = function (a0) { return [a0]; };
function ClassListComponent_ng_template_3_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16)(4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ClassListComponent_ng_template_3_div_0_div_8_Template_p_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const item_r9 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r30.goToStudentList(item_r9.id ? item_r9.id : "0"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ClassListComponent_ng_template_3_div_0_div_8_span_6_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "fullPermission");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 19)(9, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Xem t\u1EA5t c\u1EA3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ClassListComponent_ng_template_3_div_0_div_8_div_12_Template, 6, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, ClassListComponent_ng_template_3_div_0_div_8_div_13_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, ClassListComponent_ng_template_3_div_0_div_8_div_14_Template, 3, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](13, _c0, (item_r9.homeworks == null ? null : item_r9.homeworks.length) == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", item_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.checkPermissionObj(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 8, item_r9.permissionObj, "classroom")) == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](15, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 11, "/admin/homework/homework-list/" + item_r9.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (item_r9.homeworks == null ? null : item_r9.homeworks.length) == 0 && !item_r9.nextPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r9.homeworks && item_r9.homeworks.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r9.homeworks && item_r9.homeworks.length < 2);
} }
function ClassListComponent_ng_template_3_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 29);
} }
function ClassListComponent_ng_template_3_div_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ClassListComponent_ng_template_3_div_0_ng_container_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r32.seeMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "lang_buttom_see_more"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r8.nextPage);
} }
function ClassListComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ClassListComponent_ng_template_3_div_0_div_8_Template, 15, 17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ClassListComponent_ng_template_3_div_0_div_10_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ClassListComponent_ng_template_3_div_0_ng_container_11_Template, 5, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](9, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 5, "/admin/homework/add-new-homework/0")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("+ ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 7, "lang_homework_class_list_create_homework"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.classObjs);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.loadingMore == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.loadingMore == false);
} }
function ClassListComponent_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ClassListComponent_ng_template_3_ng_template_1_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r34.redirectToClassList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, "lang_homework_class_list_tutorial_header"), " \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, "lang_homework_class_list_tutorial_center"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 7, "lang_homework_class_list_tutorial_end"), ". ");
} }
function ClassListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ClassListComponent_ng_template_3_div_0_Template, 12, 11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ClassListComponent_ng_template_3_ng_template_1_Template, 8, 9, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.classObjs.length && ctx_r2.classObjs.length > 1)("ngIfElse", _r4);
} }
class ClassListComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(activeRoute, commonService, classroomService, homeworkService, browserStorageService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.classroomService = classroomService;
        this.homeworkService = homeworkService;
        this.browserStorageService = browserStorageService;
        //region Modal
        this.classObjs = [];
        this.nextPage = '';
        this.loadingMore = false;
        this.curPage = 1;
        this.backLink = '/admin/homework/classes/' + this.curPage;
    }
    //region Logic
    getAllClass() {
        this.subscriptions.add(this.classroomService.apiClassroomGetInfoForClassroomObjsGet(this.nextPage).subscribe((response) => {
            var _a, _b, _c, _d, _e;
            if (response.success === 1) {
                this.classObjs = this.classObjs.concat((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.classObjs) !== null && _b !== void 0 ? _b : []);
                for (let i = 0; i < this.classObjs.length; i++) {
                    this.classObjs[i].isLoadingPage = false;
                }
                this.nextPage = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.nextPage) !== null && _d !== void 0 ? _d : '';
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_e = response.message) !== null && _e !== void 0 ? _e : '', true);
            }
            this.loadingMore = false;
        }));
    }
    getClassroomHomeworkInArchive(data) {
        var _a, _b;
        data.isLoadingPage = true;
        this.subscriptions.add(this.homeworkService.apiHomeworkGetObjsAndPermissionsByClassroomGet(((_a = data.id) !== null && _a !== void 0 ? _a : '0'), ((_b = data.nextPage) !== null && _b !== void 0 ? _b : '')).subscribe((response) => {
            var _a, _b, _c, _d;
            if (response.success == 1) {
                for (let i = 0; i < this.classObjs.length; i++) {
                    if (this.classObjs[i].id == data.id) {
                        this.classObjs[i].nextPage = (_a = response.data) === null || _a === void 0 ? void 0 : _a.nextPage;
                        this.classObjs[i].homeworks = ((_b = this.classObjs[i].homeworks) !== null && _b !== void 0 ? _b : []).concat((_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.homeworkObjs) !== null && _d !== void 0 ? _d : []);
                    }
                }
            }
            data.isLoadingPage = false;
        }));
    }
    //region utils
    redirectToClassList() {
        this.commonService.myNavigation('/admin/student/manage-class/0');
    }
    redirectHomework(event, classId, homeworkHashId) {
        this.commonService.myNavigation('/admin/homework/score-list/' + classId + '/' + event + '/' + homeworkHashId);
    }
    goToStudentList(classId) {
        if (classId != 'share') {
            this.commonService.myNavigation('/admin/student/class-details/' + classId);
        }
    }
    redirectToStudentList(classId) {
        this.commonService.myNavigation('/admin/student/class-details/' + classId);
    }
    checkPermissionObj(event) {
        return event;
    }
    seeMore() {
        this.loadingMore = true;
        this.curPage = this.curPage + 1;
        this.getAllClass();
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([
            this.activeRoute.params,
            this.activeRoute.queryParams,
        ]).subscribe(([]) => {
            let page = Number(this.commonService.getMyParam(this.activeRoute, 'page'));
            this.backLink = '/admin/homework/classes/' + page;
            this.initStatusObj();
            this.getAllClass();
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_homework_class_list_title',
            description: 'lang_cms_homework_class_list_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
    ngOnDestroy() {
        this.browserStorageService.clearSimpleSessionStorage();
        super.ngDestroy();
    }
}
ClassListComponent.ɵfac = function ClassListComponent_Factory(t) { return new (t || ClassListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__.ClassroomService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__.HomeworkService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_3__.BrowserStorageService)); };
ClassListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ClassListComponent, selectors: [["app-classes"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 6, consts: [[3, "headerTitle", "back_link"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], ["class", "container my-3 pb-80", 4, "ngIf", "ngIfElse"], ["noData", ""], [1, "container", "my-3", "pb-80"], [1, "row"], [1, "col-12", "text-right"], [1, "btn", "btn-success", 3, "routerLink"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-12", "text-center", "mt-2"], ["class", "spinner-border text-secondary", "role", "status", 4, "ngIf"], [4, "ngIf"], [1, "col-md-4"], [1, "classes-remake", "height-default", 3, "ngClass"], [1, "row", "m-0", "p-0", "align-items-center"], [1, "col-8", "text-left", "text-ellipsis"], [1, "m-0", "p-0", "text-ellipsis", "clickable", 2, "vertical-align", "middle", 3, "matTooltip", "click"], ["class", "ml-2 badge badge-info", "style", "vertical-align: middle; margin-bottom: 2px;", 4, "ngIf"], [1, "col-4", "text-right"], [1, "text-right", "m-0", "p-0", 3, "routerLink"], ["class", "clickable center-pos", 4, "ngIf"], [1, "ml-2", "badge", "badge-info", 2, "vertical-align", "middle", "margin-bottom", "2px"], [1, "row", "text-center", "block-null"], [1, "col-12"], [1, "p-0", "m-0"], [4, "ngFor", "ngForOf"], [3, "classId", "name", "dateCreated", "deadLine", "totalTakeTest", "totalStudent", "hashId", "homeworkId", "className", "backLink", "redirectId"], [1, "clickable", "center-pos"], ["role", "status", 1, "spinner-border", "text-secondary"], ["mat-button", "", 3, "matTooltip", "disabled", "click"], ["mat-button", "", 1, "btn-all-add", 3, "matTooltip", "disabled", "click"], [1, "text-center", "p-5"], [2, "color", "#2361ae", "font-weight", "bold", 3, "click"]], template: function ClassListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ClassListComponent_azt_loading_effect_2_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ClassListComponent_ng_template_3_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 4, "lang_homework_class_list_header_title"))("back_link", "/admin/testbank/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.statusObj.loading && ctx.loadingMore == false)("ngIfElse", _r1);
    } }, directives: [_azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_4__.HeaderBackendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__.AztLoadingEffectComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _azota_ui_home_work_file_home_work_file_component__WEBPACK_IMPORTED_MODULE_6__.HomeWorkFileComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.MytranslatePipe, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_15__.LocalizeRouterPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.FullPermission], styles: [".classes-remake[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);\n  border-radius: 5px;\n  background-color: #f3f3f3;\n  padding: 10px;\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n\n.pb-0[_ngcontent-%COMP%] {\n  padding-bottom: 0.5px !important;\n}\n\n.pb-80[_ngcontent-%COMP%] {\n  padding-bottom: 80px;\n}\n\n.block-else[_ngcontent-%COMP%] {\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.center-pos[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.block-null[_ngcontent-%COMP%] {\n  height: 200px;\n  align-items: center;\n}\n\n.height-default[_ngcontent-%COMP%] {\n  min-height: 240px;\n  position: relative;\n}\n\n.block-else-text[_ngcontent-%COMP%] {\n  font-size: 19px;\n  margin-bottom: 25px;\n}\n\n.text-ellipsis[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 70%;\n  white-space: nowrap;\n}\n\n@media screen and (max-width: 768px) {\n  .block-null[_ngcontent-%COMP%] {\n    height: 86px;\n  }\n\n  .height-default[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n.btn-all-add[_ngcontent-%COMP%] {\n  margin: auto;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMkNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGdDQUFBO0FBRUo7O0FBQUE7RUFDSSxvQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUtKOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBTUY7O0FBSkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBT0Y7O0FBTEE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFOQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVNKOztBQVBBO0VBQ0U7SUFDRSxZQUFBO0VBVUY7O0VBUkE7SUFDRSxZQUFBO0VBV0Y7QUFDRjs7QUFUQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQVdGIiwiZmlsZSI6InN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzZXMtcmVtYWtlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3cgOjBweCAwcHggNXB4IHJnYigwIDAgMCAvIDglKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoMCAwIDAgLyA4JSk7XG4gICAgYm9yZGVyLXJhZGl1cyA6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDpyZ2JhKDI0MywgMjQzLCAyNDMsIDEpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnBiLTB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXB4ICFpbXBvcnRhbnQ7IFxufVxuLnBiLTgwe1xuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuLmJsb2NrLWVsc2V7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNlbnRlci1wb3N7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmJsb2NrLW51bGx7XG4gIGhlaWdodDogMjAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVpZ2h0LWRlZmF1bHR7XG4gIG1pbi1oZWlnaHQ6IDI0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmxvY2stZWxzZS10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnRleHQtZWxsaXBzaXN7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcbiAgLmJsb2NrLW51bGx7XG4gICAgaGVpZ2h0OiA4NnB4O1xuICB9XG4gIC5oZWlnaHQtZGVmYXVsdHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbi5idG4tYWxsLWFkZHtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });


/***/ }),

/***/ 82445:
/*!****************************************************************!*\
  !*** ./src/app/homework/content-store/controller.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyContentDialog": () => (/* binding */ BuyContentDialog),
/* harmony export */   "ContentStoreComponent": () => (/* binding */ ContentStoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_auto_api_common_api_api_frontFileContent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api/api/frontFileContent.service */ 43767);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 71412);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/footer/controller.component */ 39858);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
/* harmony import */ var src_app_core_auto_api_common_api_api_payment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/auto_api/common_api/api/payment.service */ 63910);





















function ContentStoreComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cate_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", cate_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", cate_r4.name, " ");
} }
function ContentStoreComponent_azt_loading_effect_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "azt-loading-effect");
} }
function ContentStoreComponent_ng_template_19_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "lang_homework_content_store_not_found_search"), "!");
} }
function ContentStoreComponent_ng_template_19_ng_template_1_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "lang_homework_content_store_free"));
} }
function ContentStoreComponent_ng_template_19_ng_template_1_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, obj_r9.amount), " Azo");
} }
function ContentStoreComponent_ng_template_19_ng_template_1_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "lang_homework_content_store_bought"));
} }
function ContentStoreComponent_ng_template_19_ng_template_1_div_1_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ContentStoreComponent_ng_template_19_ng_template_1_div_1_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19); const obj_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r17.downloadFrontFileContent(obj_r9.id ? obj_r9.id : 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 1, "lang_homework_content_store_download"), " ");
} }
function ContentStoreComponent_ng_template_19_ng_template_1_div_1_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ContentStoreComponent_ng_template_19_ng_template_1_div_1_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const obj_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r20.openBuyContentDialog(obj_r9, ctx_r20.userObj && ctx_r20.userObj.amount ? ctx_r20.userObj.amount : 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 1, "lang_buttom_buy"), " ");
} }
function ContentStoreComponent_ng_template_19_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "mycdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 25)(5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ContentStoreComponent_ng_template_19_ng_template_1_div_1_span_8_Template, 3, 3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ContentStoreComponent_ng_template_19_ng_template_1_div_1_span_9_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ContentStoreComponent_ng_template_19_ng_template_1_div_1_span_10_Template, 3, 3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, ContentStoreComponent_ng_template_19_ng_template_1_div_1_a_11_Template, 5, 3, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ContentStoreComponent_ng_template_19_ng_template_1_div_1_a_12_Template, 5, 3, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const obj_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 7, obj_r9.thumb), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](obj_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", obj_r9.amount == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", obj_r9.amount != 0 && obj_r9.amount != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", obj_r9.amount == -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", obj_r9.amount == 0 || obj_r9.amount == -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (obj_r9 && obj_r9.amount ? obj_r9.amount : 0) > 0);
} }
function ContentStoreComponent_ng_template_19_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ContentStoreComponent_ng_template_19_ng_template_1_div_1_Template, 13, 9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r7.objs);
} }
function ContentStoreComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ContentStoreComponent_ng_template_19_div_0_Template, 4, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ContentStoreComponent_ng_template_19_ng_template_1_Template, 2, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.isNullData)("ngIfElse", _r6);
} }
function BuyContentDialog_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12)(1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p")(5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 5, "lang_homework_content_store_definitely_want_to_buy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.content.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 7, "lang_homework_content_store_with_price"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 9, ctx_r0.content.amount), " Azo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 11, "lang_homework_content_store_not"), "?");
} }
function BuyContentDialog_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12)(1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p")(5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 4, "lang_homework_content_store_not_enough_azo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.content.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 6, "lang_homework_content_store_with_price"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 8, ctx_r1.content.amount), " Azo");
} }
function BuyContentDialog_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 4)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "lang_homework_content_store_please"), "!");
} }
function BuyContentDialog_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BuyContentDialog_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r5.buyContent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 1, "lang_buttom_buy"), " ");
} }
function BuyContentDialog_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BuyContentDialog_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r7.gotoPack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 1, "lang_homework_content_store_recharge"), " ");
} }
class ContentStoreComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(activeRoute, commonService, authService, frontFileContentService, formBuilder, dialog) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.authService = authService;
        this.frontFileContentService = frontFileContentService;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.options = { path: 'https://assets8.lottiefiles.com/packages/lf20_eebdoe5f.json' };
        this.isNullData = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({});
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
        this.objs = [];
        this.categories = [];
        this.userObj = {};
        this.selectedValue = '';
    }
    getData() {
        this.initStatusObj();
        this.subscriptions.add(this.frontFileContentService.apiFrontFileContentGetObjsGet().subscribe((response) => {
            var _a, _b, _c;
            if (response.success == 1) {
                this.objs = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) !== null && _b !== void 0 ? _b : new Array();
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : '');
            }
        }));
    }
    getInfo() {
        this.initStatusObj();
        this.subscriptions.add(this.authService.apiAuthInfoGet().subscribe((response) => {
            var _a, _b;
            if (response.success == 1) {
                this.userObj = (_a = response.data) !== null && _a !== void 0 ? _a : {};
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_b = response.message) !== null && _b !== void 0 ? _b : '');
            }
        }));
    }
    getCategories() {
        this.initStatusObj();
        this.subscriptions.add(this.frontFileContentService.apiFrontFileContentGetCategoriesObjsGet().subscribe((response) => {
            var _a, _b, _c;
            if (response.success == 1) {
                this.categories = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) !== null && _b !== void 0 ? _b : new Array();
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : '');
            }
        }));
    }
    openBuyContentDialog(content, userAmount) {
        if (content.amount && content.amount > userAmount) {
            this.openDialog(false, content, userAmount);
        }
        else {
            this.openDialog(true, content, userAmount);
        }
    }
    openDialog(status, contentFile, userAmountParam) {
        const dialogRef = this.dialog.open(BuyContentDialog, {
            width: '380px',
            panelClass: 'buyContentDialogBox',
            data: { status, content: contentFile, userAmount: userAmountParam }
        });
        dialogRef.afterClosed().subscribe((result) => {
        });
    }
    selectValue(id) {
        this.initStatusObj();
        this.subscriptions.add(this.frontFileContentService.apiFrontFileContentGetObjsGet(undefined, id).subscribe((response) => {
            var _a, _b, _c, _d, _e;
            if (response.success == 1) {
                if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) && ((_b = response.data) === null || _b === void 0 ? void 0 : _b.objs.length) > 0) {
                    this.isNullData = false;
                    this.objs = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.objs) !== null && _d !== void 0 ? _d : new Array();
                    this.successStatusObj();
                }
                else {
                    this.isNullData = true;
                    this.stopStatusObj();
                }
            }
            else {
                this.errorStatusObj((_e = response.message) !== null && _e !== void 0 ? _e : '');
            }
        }));
    }
    onSearch() {
        var formObject = this.commonService.getFormObj(this.form);
        this.initStatusObj();
        if (formObject.searchContent == '') {
            this.isNullData = false;
            this.subscriptions.add(this.frontFileContentService.apiFrontFileContentGetObjsGet().subscribe((response) => {
                var _a, _b, _c;
                if (response.success == 1) {
                    this.objs = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) !== null && _b !== void 0 ? _b : new Array();
                    this.successStatusObj();
                }
                else {
                    this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : '');
                }
            }));
        }
        else {
            this.subscriptions.add(this.frontFileContentService.apiFrontFileContentGetObjsGet(formObject.searchContent).subscribe((response) => {
                var _a, _b, _c, _d, _e;
                if (response.success == 1) {
                    if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) && ((_b = response.data) === null || _b === void 0 ? void 0 : _b.objs.length) == 0) {
                        this.isNullData = true;
                    }
                    else {
                        this.objs = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.objs) !== null && _d !== void 0 ? _d : new Array();
                    }
                    this.successStatusObj();
                }
                else {
                    this.errorStatusObj((_e = response.message) !== null && _e !== void 0 ? _e : '');
                }
            }));
        }
    }
    downloadFrontFileContent(id) {
        this.frontFileContentService.apiFrontFileContentGetFileLinkGet(id).subscribe((response) => {
            var _a, _b;
            if (response.success == 1) {
                var link = document.createElement('a');
                document.body.appendChild(link);
                link.href = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.link) !== null && _b !== void 0 ? _b : '';
                link.click();
            }
            else {
                this.showErrorSnack('Tải về không thành công');
            }
        });
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([
            this.activeRoute.params,
            this.activeRoute.queryParams
        ]).subscribe(([param, queryParam]) => {
            this.getData();
            this.getInfo();
            this.getCategories();
        });
        this.form = this.formBuilder.group({
            searchContent: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_homework_content_store_title',
            description: 'lang_cms_homework_content_store_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        super.ngDestroy();
    }
}
ContentStoreComponent.ɵfac = function ContentStoreComponent_Factory(t) { return new (t || ContentStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api_api_frontFileContent_service__WEBPACK_IMPORTED_MODULE_3__.FrontFileContentService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog)); };
ContentStoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ContentStoreComponent, selectors: [["app-content-store"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 14, consts: [[3, "headerTitle", "back_link"], [1, "container-fluid", "component-wrap", "W1200", "m-auto", "mt-3", "pb-mb-80"], [3, "formGroup"], [1, "row", "justify-content-between"], [1, "col-md-8", "mt-2"], [1, "search-bar", "form-group"], [1, "input-group-append"], ["type", "text", "formControlName", "searchContent", 1, "form-control", 3, "placeholder", "keyup.enter"], ["id", "basic-addon2", 1, "input-group-text", 3, "click"], [1, "col-md-4", "content-store-select"], ["appearance", "fill"], ["name", "category", 3, "placeholder", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [3, "value"], ["class", "text-center mt-3 mb-3", 4, "ngIf", "ngIfElse"], ["HasData", ""], [1, "text-center", "mt-3", "mb-3"], [1, "h3"], [1, "row", "mt-2"], ["class", "col-12 col-sm-4 col-md-4 col-lg-4 mb-2", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-4", "col-md-4", "col-lg-4", "mb-2"], [1, "card"], ["alt", "thumbnail", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "truncate", "card-text"], [1, "d-flex", "justify-content-between", "actionZone"], ["class", "azo-price text-warning", 4, "ngIf"], ["class", "azo-price text-danger", 4, "ngIf"], ["class", "azo-price ", 4, "ngIf"], ["class", "actionBtn clickable", 3, "click", 4, "ngIf"], ["class", "actionBtn", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], [1, "azo-price", "text-warning"], [1, "azo-price", "text-danger"], [1, "azo-price"], [1, "actionBtn", "clickable", 3, "click"], [2, "vertical-align", "sub"], [1, "actionBtn", 2, "cursor", "pointer", 3, "click"]], template: function ContentStoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1)(3, "form", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup.enter", function ContentStoreComponent_Template_input_keyup_enter_8_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ContentStoreComponent_Template_button_click_10_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 9)(14, "mat-form-field", 10)(15, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function ContentStoreComponent_Template_mat_select_selectionChange_15_listener($event) { return ctx.selectValue($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, ContentStoreComponent_mat_option_17_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, ContentStoreComponent_azt_loading_effect_18_Template, 1, 0, "azt-loading-effect", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, ContentStoreComponent_ng_template_19_Template, 3, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "homework-backend-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 8, "lang_homework_content_store_content_bank"))("back_link", "/admin/homework/classes/1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 10, "lang_homework_content_store_search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 12, "lang_homework_content_store_all"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r2);
    } }, directives: [_azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_4__.HeaderBackendComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__.AztLoadingEffectComponent, _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_6__.HomeworkBackendFooterComponent], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.MyCdnPipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe], styles: [".dashboard__header[_ngcontent-%COMP%] {\n  background-color: #0089a7;\n  border-radius: 5px;\n}\n\n.border-test[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  min-height: 50px;\n}\n\n.azo-price[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  font-weight: 500;\n  font-size: 1.2rem;\n}\n\n.content-store-select[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  display: block !important;\n  max-width: 245px !important;\n}\n\n.content-header[_ngcontent-%COMP%] {\n  background: inherit;\n  background-color: #0089a7;\n  padding: 20px 0;\n}\n\n.user_amount[_ngcontent-%COMP%] {\n  background: inherit;\n  background-color: #009cbe;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n  box-shadow: none;\n}\n\n.user_amount[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.mat-card-avatar[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\n\n@media (max-width: 992px) {\n  .dashboard__header[_ngcontent-%COMP%] {\n    background-color: #0089a7;\n    margin-top: -15px;\n    margin-left: -15px;\n    margin-right: -15px;\n    border-radius: 0;\n  }\n}\n\n@media (max-width: 768px) {\n  .azo-price[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    font-weight: 400;\n    font-size: 14px;\n    text-align: center;\n    position: absolute;\n    left: 20px;\n  }\n\n  .actionZone[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center !important;\n  }\n\n  .card-text[_ngcontent-%COMP%] {\n    display: block !important;\n    max-width: 120px;\n  }\n\n  .header-col-center[_ngcontent-%COMP%] {\n    text-align: center !important;\n    display: block !important;\n  }\n\n  .header-col-center[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    margin-bottom: 10px !important;\n    text-align: center !important;\n    display: inline-flex !important;\n  }\n\n  .user_amount[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-bottom: 10px !important;\n  }\n\n  .content-header[_ngcontent-%COMP%] {\n    padding: 20px 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFHQSxnQkFBQTtBQU9KOztBQUxBO0VBQ0kscUJBQUE7QUFRSjs7QUFMQTtFQUNFLFlBRnFCO0VBR3JCLFdBSHFCO0VBSXJCLGtCQUFBO0VBQ0EsY0FBQTtFQUlBLGlCQUFBO0FBS0Y7O0FBRkE7RUFDSTtJQUNJLHlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFLTjtBQUNGOztBQUhBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VBS047O0VBSEU7SUFDSSxlQUFBO0lBQ0Esa0NBQUE7RUFNTjs7RUFKRTtJQUNJLHlCQUFBO0lBQ0EsZ0JBQUE7RUFPTjs7RUFMRTtJQUNJLDZCQUFBO0lBQ0EseUJBQUE7RUFRTjs7RUFORTtJQUNJLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSw4QkFBQTtJQUNBLDZCQUFBO0lBQ0EsK0JBQUE7RUFTTjs7RUFQRTtJQUNJLHlCQUFBO0lBQ0EsOEJBQUE7RUFVTjs7RUFSRTtJQUNJLGlCQUFBO0VBV047QUFDRiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmRfX2hlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OWE3O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5ib3JkZXItdGVzdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG59XG4uYXpvLXByaWNlIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uY29udGVudC1zdG9yZS1zZWxlY3Qge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jYXJkLXRleHQge1xuICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDI0NXB4IWltcG9ydGFudDtcbn1cbi5jb250ZW50LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEzNywgMTY3LCAxKTtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG59XG4udXNlcl9hbW91bnQge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTYsIDE5MCwgMSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi51c2VyX2Ftb3VudDpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuJG1hdC1jYXJkLWhlYWRlci1zaXplOiA1MHB4ICFkZWZhdWx0O1xuLm1hdC1jYXJkLWF2YXRhciB7XG4gIGhlaWdodDogJG1hdC1jYXJkLWhlYWRlci1zaXplO1xuICB3aWR0aDogJG1hdC1jYXJkLWhlYWRlci1zaXplO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIC8vIE1ha2VzIGA8aW1nPmAgdGFncyBiZWhhdmUgbGlrZSBgYmFja2dyb3VuZC1zaXplOiBjb3ZlcmAuIE5vdCBzdXBwb3J0ZWRcbiAgLy8gaW4gSUUsIGJ1dCB3ZSdyZSB1c2luZyBpdCBhcyBhIHByb2dyZXNzaXZlIGVuaGFuY2VtZW50LlxuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLmRhc2hib2FyZF9faGVhZGVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OWE3O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5hem8tcHJpY2Uge1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAyMHB4O1xuICAgIH1cbiAgICAuYWN0aW9uWm9uZSB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2FyZC10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xuICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIH1cbiAgICAuaGVhZGVyLWNvbC1jZW50ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5oZWFkZXItY29sLWNlbnRlciAubmF2e1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0byFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0byFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHghaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC51c2VyX2Ftb3VudCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb250ZW50LWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMCAwO1xuICAgIH1cbn1cbiJdfQ== */"] });
class BuyContentDialog extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(dialogRef, paymentService, commonService, data) {
        super(commonService);
        this.dialogRef = dialogRef;
        this.paymentService = paymentService;
        this.commonService = commonService;
        this.data = data;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
        this.content = {};
    }
    getData() {
        this.initStatusObj();
        if (this.data.content) {
            this.content = this.data.content;
            this.successStatusObj();
        }
        else {
            this.errorStatusObj('Không tải được dữ liệu');
        }
    }
    buyContent() {
        this.initStatusObj();
        this.subscriptions.add(this.paymentService.apiPaymentBuyFileContentByAzoPost(this.content.id).subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.successStatusObj();
                this.showSuccessSnack('Bạn đã mua thành công!');
                this.onNoClick();
                setTimeout(() => {
                    document.location.reload();
                }, 3000);
            }
            else {
                this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                this.showErrorSnack('Thanh toán không thành công!');
                this.onNoClick();
                setTimeout(() => {
                    document.location.reload();
                }, 3000);
            }
        }));
    }
    gotoPack() {
        this.onNoClick();
        this.commonService.myNavigation('/payment/azo-pack');
    }
    ngOnInit() {
        this.getData();
        super.ngOnInit();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        super.ngDestroy();
    }
}
BuyContentDialog.ɵfac = function BuyContentDialog_Factory(t) { return new (t || BuyContentDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api_api_payment_service__WEBPACK_IMPORTED_MODULE_8__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA)); };
BuyContentDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: BuyContentDialog, selectors: [["buy-content-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 16, consts: [[3, "hidden"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "text-center"], [1, "h5"], ["class", "text-left", "style", "border: 1px dashed red; padding: 10px 5px; border-radius: 5px;", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["mat-dialog-actions", "", 1, "float-right"], [1, "azt-block-button"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-secondary", 2, "margin-left", "15px", 3, "click"], [1, "text-left", 2, "border", "1px dashed red", "padding", "10px 5px", "border-radius", "5px"], [1, "h5", "text-danger"], [1, "h5", "mt-1"], [1, "text-danger"], [1, "h6", "mt-2", "mb-1"], [1, "btn", "btn-primary", 3, "click"], [2, "font-size", "23px", "vertical-align", "sub"]], template: function BuyContentDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 0)(6, "div", 4)(7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, BuyContentDialog_div_11_Template, 15, 13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, BuyContentDialog_div_12_Template, 13, 10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, BuyContentDialog_div_13_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 8)(15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, BuyContentDialog_button_16_Template, 5, 3, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, BuyContentDialog_button_17_Template, 5, 3, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BuyContentDialog_Template_button_click_18_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 10, "lang_homework_content_store_having"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 12, ctx.data.userAmount), " Azo");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.data.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.data.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.data.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.data.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.data.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 14, "lang_buttom_cancel"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.MytranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe], encapsulation: 2 });


/***/ }),

/***/ 98883:
/*!***************************************************************************************!*\
  !*** ./src/app/homework/create-homework-success/create-homework-success.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateHomeworkSuccessComponent": () => (/* binding */ CreateHomeworkSuccessComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/clipboard */ 10092);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);












function CreateHomeworkSuccessComponent_span_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r3.className, ", ");
} }
function CreateHomeworkSuccessComponent_span_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r3.className, " ");
} }
function CreateHomeworkSuccessComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateHomeworkSuccessComponent_span_18_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CreateHomeworkSuccessComponent_span_18_span_2_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r4 < ctx_r0.listHomework.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r4 == ctx_r0.listHomework.length - 1);
} }
function CreateHomeworkSuccessComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 19)(5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateHomeworkSuccessComponent_div_21_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r12.showCopySuccess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 21)(7, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " \u00A0Copy link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", item_r10.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, "lang_homework_create_homework_success_class"), " : ", item_r10.className, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r9.copylinkToClipboard(item_r10.hashId ? item_r10.hashId : ""));
} }
function CreateHomeworkSuccessComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateHomeworkSuccessComponent_div_21_div_1_Template, 10, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.listHomework);
} }
function CreateHomeworkSuccessComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24)(1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 19)(5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateHomeworkSuccessComponent_div_22_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r17.showCopySuccess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 21)(7, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " \u00A0Copy link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", item_r15.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, "lang_homework_create_homework_success_class"), " : ", item_r15.className, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r14.copylinkToClipboard(item_r15.hashId ? item_r15.hashId : ""));
} }
function CreateHomeworkSuccessComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateHomeworkSuccessComponent_div_22_div_1_Template, 10, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.listHomework);
} }
class CreateHomeworkSuccessComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(activeRoute, homeworkService, commonService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.homeworkService = homeworkService;
        this.commonService = commonService;
        //#region  Modal
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this.menuObjs = [];
        this.nameExam = '';
        this.lstHashIds = [];
        this.listHomework = [];
    }
    getListHomeWork(lstHashIds) {
        this.initStatusObj();
        let homeworkGetSuccessForm = {
            homeworkHashIds: lstHashIds
        };
        this.subscriptions.add(this.homeworkService.apiHomeworkGetSuccessHomeworkObjsPost(homeworkGetSuccessForm).
            subscribe((response) => {
            var _a, _b, _c, _d;
            if (response.success == 1) {
                this.listHomework = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) !== null && _b !== void 0 ? _b : new Array();
                this.nameExam = (_c = this.listHomework[0].name) !== null && _c !== void 0 ? _c : '';
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_d = response.message) !== null && _d !== void 0 ? _d : '', true);
            }
        }));
    }
    callbackMenuEvent(code) {
        if (code == 'logPoidClass') { }
    }
    showCopySuccess() {
        this.commonService.snackSuccess('Sao chép thành công đường dẫn nộp bài', '');
    }
    copylinkToClipboard(hashId) {
        let domain = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
        return `${domain}/bai-tap/${hashId}`;
    }
    redirectClasses() {
        this.commonService.myNavigation('/admin/homework/classes/1');
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([
            this.activeRoute.params,
            this.activeRoute.queryParams,
        ]).subscribe(([]) => {
            var _a;
            let lstHashIdsParam = (_a = this.commonService.getMyParam(this.activeRoute, 'hash_ids')) !== null && _a !== void 0 ? _a : '';
            this.lstHashIds = this.commonService.parseJson(lstHashIdsParam);
            this.getListHomeWork(this.lstHashIds);
        });
        super.ngOnInit();
    }
}
CreateHomeworkSuccessComponent.ɵfac = function CreateHomeworkSuccessComponent_Factory(t) { return new (t || CreateHomeworkSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_1__.HomeworkService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService)); };
CreateHomeworkSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreateHomeworkSuccessComponent, selectors: [["app-create-homework-success"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 25, consts: [[3, "menu_objs", "headerTitle", "back_link", "MenuEvent"], [1, "container", "py-5"], [1, "row", "p-0", "m-0"], [1, "col-md-2", "p-0", "m-0"], [1, "col-md-8", "p-0", "m-0"], [1, "box--create"], [1, "text-center", "mx-auto"], [1, "font-weight-bold"], ["class", "font-weight-bold", 4, "ngFor", "ngForOf"], ["class", "row p-0 m-0 pt-3", 4, "ngIf"], [1, "row", "p-0", "m-0", "pt-5"], [1, "col-12", "text-center"], [1, "clickable", "text--blue", 3, "click"], ["style", "word-break: break-word;", 4, "ngIf"], [2, "word-break", "break-word"], [1, "row", "p-0", "m-0", "pt-3"], ["class", "col-md-4 text-center pb-3 d-flex flex-col", 4, "ngFor", "ngForOf"], [1, "col-md-4", "text-center", "pb-3", "d-flex", "flex-col"], [1, "text--over", "m-0", "pb-2", 3, "matTooltip"], [1, "width-100"], [1, "button--copy", 3, "cdkCopyToClipboard", "click"], [1, "d-flex", 2, "vertical-align", "middle", "align-items", "center"], [2, "font-size", "24px", "color", "#3c8dbc"], ["class", "col-md-12 text-center pb-3 d-flex flex-col", 4, "ngFor", "ngForOf"], [1, "col-md-12", "text-center", "pb-3", "d-flex", "flex-col"], [1, "m-0", "pb-2", 3, "matTooltip"]], template: function CreateHomeworkSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("MenuEvent", function CreateHomeworkSuccessComponent_Template_header_backend_MenuEvent_0_listener($event) { return ctx.callbackMenuEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, CreateHomeworkSuccessComponent_span_18_Template, 3, 2, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CreateHomeworkSuccessComponent_div_21_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CreateHomeworkSuccessComponent_div_22_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 10)(24, "div", 11)(25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateHomeworkSuccessComponent_Template_div_click_25_listener() { return ctx.redirectClasses(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("menu_objs", ctx.menuObjs)("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 13, "lang_homework_create_homework_success_add_homework_success"))("back_link", "/admin/homework/classes/1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 15, "lang_homework_create_homework_success_create_success"), " ", ctx.nameExam, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 17, "lang_homework_create_homework_success_teacher_create_success"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.nameExam, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 19, "lang_homework_create_homework_success_assigned_class"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listHomework);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](". ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 21, "lang_homework_create_homework_success_tutorial"), ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.listHomework ? ctx.listHomework.length : 0) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.listHomework == null ? null : ctx.listHomework.length) == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 23, "lang_homework_create_homework_success_back_list_homework"));
    } }, directives: [_azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__.HeaderBackendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__.CdkCopyToClipboard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe], styles: [".box--create[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #ececec;\n  border-radius: 5px;\n  padding: 20px;\n}\n\n.button--copy[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e8e8e8;\n  border-radius: 5px;\n  cursor: pointer;\n  padding: 8px 18px;\n  font-size: 13px;\n  text-transform: capitalize;\n  color: #3C8DBC;\n  align-items: center;\n  vertical-align: middle;\n}\n\n.box-class[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.flex-col[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n}\n\n.text--blue[_ngcontent-%COMP%] {\n  color: #3C8DBC;\n}\n\n.text--over[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 99%;\n  white-space: nowrap;\n}\n\n@media screen and (max-width: 767px) {\n  .width-100[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n\n  .button--copy[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1ob21ld29yay1zdWNjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQUE7RUFDSSxzQkFBQTtBQUdKOztBQURBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtBQUtKOztBQUhBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkE7RUFDRztJQUNJLFdBQUE7SUFDQSxlQUFBO0VBT0w7O0VBTEM7SUFDSSxXQUFBO0VBUUw7QUFDRiIsImZpbGUiOiJjcmVhdGUtaG9tZXdvcmstc3VjY2Vzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtLWNyZWF0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM2LCAyMzYsIDIzNiwgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4uYnV0dG9uLS1jb3B5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDcsIDI0NywgMSk7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjMyLCAyMzIsIDIzMiwgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMThweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6ICMzQzhEQkM7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJveC1jbGFzc3tcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsZXgtY29se1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udGV4dC0tYmx1ZXtcbiAgICBjb2xvcjogIzNDOERCQztcbn1cbi50ZXh0LS1vdmVye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC13aWR0aDogOTklO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAud2lkdGgtMTAwe1xuICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgIH1cbiAgIC5idXR0b24tLWNvcHl7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG59Il19 */"] });


/***/ }),

/***/ 18003:
/*!******************************************************************!*\
  !*** ./src/app/homework/export-homework/controller.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportHomeworkComponent": () => (/* binding */ ExportHomeworkComponent),
/* harmony export */   "WhatToExportHomeworkDialog": () => (/* binding */ WhatToExportHomeworkDialog)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jszip */ 41308);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_auto_api_common_api_api_answer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auto_api/common_api/api/answer.service */ 37234);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_export_pdf_export_pdf_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/export_pdf/export-pdf.service */ 21801);
/* harmony import */ var src_app_core_services_export_pdf_export_pdf_new_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/export_pdf/export-pdf-new.service */ 16031);
/* harmony import */ var src_app_core_services_export_pdf_export_pdf_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/export_pdf/export-pdf-utils.service */ 20814);
/* harmony import */ var src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/zipdata.service */ 2366);
/* harmony import */ var src_app_core_services_cdn_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/cdn.service */ 15043);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _azota_ui_azt_check_mark_controller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../azota-ui/azt-check-mark/controller.component */ 37104);
/* harmony import */ var _azota_ui_export_essay_template_controller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../azota-ui/export-essay-template/controller.component */ 1643);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 76246);


























function ExportHomeworkComponent_ng_container_0_azt_loading_effect_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "azt-loading-effect");
} }
function ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "span", 31);
} }
function ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_div_15_span_1_Template, 1, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r9.countDonePdf < ((ctx_r9.curExportArr == null ? null : ctx_r9.curExportArr.length) || -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 4, "lang_homework_export_homework_request"), "", ctx_r9.countDonePdf, " / ", ctx_r9.curExportArr == null ? null : ctx_r9.curExportArr.length, " ");
} }
function ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11)(1, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " check_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 3, "lang_homework_export_homework_complete"), " ", ctx_r10.countDonePdf, " / ", (ctx_r10.curExportArr == null ? null : ctx_r10.curExportArr.length) || 0, " ");
} }
const _c0 = function () { return { "fontFamily": "font_chu_dam" }; };
function ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 33)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "azt-check-mark", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", !ctx_r11.curAnswer.resultParse.hideMark ? "display" : "")("hidden", ctx_r11.curAnswer.resultParse.hideMark);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("mark", ctx_r11.curAnswer.resultParse.point);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 5, "lang_point"));
} }
const _c1 = function (a0) { return { "font-family": a0 }; };
function ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_p_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "parserJson");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "parserJson");
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](6, _c1, ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 2, ctx_r12.curAnswer.resultParse == null ? null : ctx_r12.curAnswer.resultParse.staticTextConfig)) == null ? null : tmp_0_0.txtCommentFont) ? (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 4, ctx_r12.curAnswer.resultParse == null ? null : ctx_r12.curAnswer.resultParse.staticTextConfig)) == null ? null : tmp_0_0.txtCommentFont : "font_chu_dep"))("innerHtml", ctx_r12.curAnswer.resultParse == null ? null : ctx_r12.curAnswer.resultParse.comment, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
} }
function ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_div_41_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "imgEmoji_" + i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("src", ctx_r15.linkCdnGitHub + item_r16, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
} }
function ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_div_41_ng_container_1_Template, 2, 2, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r13.curAnswer.resultParse == null ? null : ctx_r13.curAnswer.resultParse.commentEmoji);
} }
function ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](10, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 11)(12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return ctx_r18.openDialog(ctx_r18.submitedStudents); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](14, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_div_15_Template, 4, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_div_16_Template, 5, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "h2", 16)(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](22, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 17)(24, "div", 18)(25, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](27, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](30, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 20)(32, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](34, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 21)(36, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](37, ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_div_37_Template, 6, 8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 24)(39, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](40, ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_p_40_Template, 3, 8, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](41, ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_div_41_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](44, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](45, "azt-export-essay-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](46, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 21, "lang_homework_export_homework_export_pdf"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](10, 23, "lang_homework_export_homework_number_student_dotted"), ": ", ctx_r6.submitedStudents.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r6.loadingExportBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](14, 25, "lang_homework_export_homework_continue"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r6.isProcessingPdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ((ctx_r6.curExportArr == null ? null : ctx_r6.curExportArr.length) || -1) > 0 && ctx_r6.countDonePdf === ((ctx_r6.curExportArr == null ? null : ctx_r6.curExportArr.length) || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](22, 27, "lang_first_and_last_name"), ": ", ctx_r6.curAnswer == null ? null : ctx_r6.curAnswer.fullName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](27, 29, "lang_homework_export_homework_class"), ": ", ctx_r6.data.classroomObj == null ? null : ctx_r6.data.classroomObj.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](30, 31, "lang_homework_export_homework_home_work"), ": ", ctx_r6.data.homeworkObj == null ? null : ctx_r6.data.homeworkObj.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](34, 33, "lang_homework_export_homework_code"), ": ", ctx_r6.curAnswer == null ? null : ctx_r6.curAnswer.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r6.curAnswer.resultParse);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r6.curAnswer.resultParse == null ? null : ctx_r6.curAnswer.resultParse.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r6.curAnswer.resultParse == null ? null : ctx_r6.curAnswer.resultParse.commentEmoji);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](44, 35, "lang_homework_export_homework_comment_of_teacher"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](46, 37, "lang_homework_export_homework_assignment"))("result", ctx_r6.curAnswer == null ? null : ctx_r6.curAnswer.resultParse);
} }
function ExportHomeworkComponent_ng_container_0_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 40)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 1, "lang_homework_export_homework_request_marking"));
} }
function ExportHomeworkComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, ExportHomeworkComponent_ng_container_0_ng_template_2_div_0_Template, 47, 39, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ExportHomeworkComponent_ng_container_0_ng_template_2_ng_template_1_Template, 4, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](2);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r5.submitedStudents.length > 0)("ngIfElse", _r7);
} }
function ExportHomeworkComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ExportHomeworkComponent_ng_container_0_azt_loading_effect_1_Template, 1, 0, "azt-loading-effect", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ExportHomeworkComponent_ng_container_0_ng_template_2_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading)("ngIfElse", _r4);
} }
function ExportHomeworkComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "lang_homework_export_homework_request_browser"));
} }
function WhatToExportHomeworkDialog_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("checked", ctx_r0.form.value.exports[i_r2])("formControlName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", i_r2 + 1, ". ", ctx_r0.data.resultsArr[i_r2].fullName, " ");
} }
const _c2 = function (a0) { return { "selects": a0 }; };
class ExportHomeworkComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_3__.MyBaseComponent {
    constructor(cdr, answerService, dialog, commonService, activeRoute, exportPdfService, newPdfExportService, exportPdfUtilsService, zipdataService, cdnService) {
        super(commonService);
        this.cdr = cdr;
        this.answerService = answerService;
        this.dialog = dialog;
        this.commonService = commonService;
        this.activeRoute = activeRoute;
        this.exportPdfService = exportPdfService;
        this.newPdfExportService = newPdfExportService;
        this.exportPdfUtilsService = exportPdfUtilsService;
        this.zipdataService = zipdataService;
        this.cdnService = cdnService;
        this.folderName = 'results';
        this.homeworkHashId = '';
        // Status
        this.countDonePdf = 0;
        this.isProcessingPdf = false;
        // Data
        this.data = {};
        this.curAnswer = {};
        this.submitedStudents = [];
        // Zip utils
        this.myZip = new jszip__WEBPACK_IMPORTED_MODULE_1__();
        this.linkCdnGitHub = '';
        this.loadingExportBtn = false;
    }
    get class_id() {
        var _a;
        return (_a = this.activeRoute.snapshot.paramMap.get('class_id')) !== null && _a !== void 0 ? _a : '';
    }
    get homework_id() {
        var _a;
        return (_a = this.activeRoute.snapshot.paramMap.get('id')) !== null && _a !== void 0 ? _a : '';
    }
    askBeforeCloseWindow($event) {
        if (this.isProcessingPdf) {
            return ($event.returnValue = false);
        }
        else {
            return true;
        }
    }
    openDialog(exportData) {
        const dialogRef = this.dialog.open(WhatToExportHomeworkDialog, {
            width: '1100px',
            data: { resultsArr: exportData }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                const selectExportResults = [];
                for (let index = 0; index < result.selects.length; index++) {
                    if (result.selects[index]) {
                        selectExportResults.push(exportData[index]);
                    }
                }
                this.zipAll(selectExportResults);
            }
        });
    }
    // Zip save
    finalSaveAll() {
        this.myZip.generateAsync({ type: 'blob' }).then(blob => {
            var _a, _b, _c, _d;
            this.countDonePdf++; // last item
            let zipFileName = this.commonService.createFileNameExportFile([(_b = (_a = this.data.classroomObj) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '', (_d = (_c = this.data.homeworkObj) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : '']) + '_homework_result.zip';
            (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, zipFileName);
            console.log('after save');
            this.isProcessingPdf = false;
            this.cdr.detectChanges();
        }, error => {
            console.log(error);
        });
    }
    zipAll(expArr) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.isProcessingPdf = true;
            this.loadingExportBtn = true;
            document.body.style.overflow = 'hidden';
            this.countDonePdf = 0;
            this.curExportArr = expArr;
            this.myZip = new jszip__WEBPACK_IMPORTED_MODULE_1__();
            for (const item of expArr) {
                const res = yield this.answerService.apiAnswerGetObjGet(this.homeworkHashId, (_a = item.answer) === null || _a === void 0 ? void 0 : _a.id).toPromise();
                if (res.success == 1) {
                    this.zipdataService.convertSubmittedAnswersObj((_b = res.data) === null || _b === void 0 ? void 0 : _b.answerObj);
                    var parseAnswer = this.castObj((_c = res.data) === null || _c === void 0 ? void 0 : _c.answerObj);
                    this.curAnswer = parseAnswer != null ? parseAnswer : {};
                    this.curAnswer.fullName = (_e = this.commonService.convertVietnameseToEnglish((_d = item.fullName) !== null && _d !== void 0 ? _d : '')) !== null && _e !== void 0 ? _e : '';
                    this.curAnswer.resultParse = (_g = this.commonService.castJsonToObj((_f = this.curAnswer.result) !== null && _f !== void 0 ? _f : '')) !== null && _g !== void 0 ? _g : undefined;
                    if (this.curAnswer.resultParse) {
                        this.curAnswer.resultParse = yield this.exportPdfService.processEssayResultToBase64(this.curAnswer.resultParse);
                        this.linkCdnGitHub = '';
                    }
                    try {
                        yield this.exportPdfUtilsService.asyncTimeout(3000);
                        const pdfContent = yield this.newPdfExportService.homeworkToPdf();
                        this.myZip.file(`${this.folderName}/${this.commonService.convertVietnameseToEnglish(this.curAnswer.fullName)}_${this.curAnswer.id}.pdf`, pdfContent);
                    }
                    catch (error) {
                        console.log(error);
                    }
                    if (this.countDonePdf < expArr.length - 1) {
                        this.countDonePdf++;
                    }
                }
                else {
                    this.errorStatusObj((_h = res.message) !== null && _h !== void 0 ? _h : '', true);
                }
            }
            this.finalSaveAll();
            document.body.style.overflow = 'auto';
            setTimeout(() => {
                this.loadingExportBtn = false;
            }, 2000);
        });
    }
    // Get data
    getData() {
        if (this.class_id && this.homework_id) {
            this.answerService.apiAnswerGetStudentsHomeworkGet(parseInt(this.homework_id, 10), this.homeworkHashId, parseInt(this.class_id, 10)).subscribe((res) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (res.success == 1) {
                    this.zipdataService.convertStudentsHomeworkObj((_a = res.data) === null || _a === void 0 ? void 0 : _a.studentObjs);
                    this.data = (_b = res.data) !== null && _b !== void 0 ? _b : {};
                    if (res.data && Array.isArray((_c = res.data) === null || _c === void 0 ? void 0 : _c.studentObjs)) {
                        this.submitedStudents = (_d = res.data) === null || _d === void 0 ? void 0 : _d.studentObjs.filter((item) => {
                            return item.confirmedAt; // lay nhung thi sinh da nop bai
                        });
                    }
                    else {
                        this.submitedStudents = new Array();
                    }
                    if (this.submitedStudents.length > 0) {
                        // lay hs dau tien de hien thi
                        this.answerService.apiAnswerGetObjGet(this.homeworkHashId, (_g = (_f = (_e = this.submitedStudents[0]) === null || _e === void 0 ? void 0 : _e.answer) === null || _f === void 0 ? void 0 : _f.id) !== null && _g !== void 0 ? _g : 0).subscribe((r) => {
                            var _a, _b, _c, _d;
                            // debugger
                            if (r.success == 1) {
                                this.zipdataService.convertSubmittedAnswersObj((_a = r.data) === null || _a === void 0 ? void 0 : _a.answerObj);
                                var parseAnswer = this.castObj((_b = r.data) === null || _b === void 0 ? void 0 : _b.answerObj);
                                this.curAnswer = parseAnswer != null ? parseAnswer : {};
                                this.curAnswer.fullName = this.submitedStudents[0].fullName;
                                if (this.curAnswer.result) {
                                    this.curAnswer.resultParse = this.commonService.parseJson((_c = this.curAnswer.result) !== null && _c !== void 0 ? _c : '');
                                }
                                this.successStatusObj();
                            }
                            else {
                                this.errorStatusObj((_d = res.message) !== null && _d !== void 0 ? _d : '', true);
                            }
                        });
                    }
                    else {
                        this.stopStatusObj();
                        // console.log('Chưa có học sinh nào nộp bài!');
                    }
                }
                else {
                    this.errorStatusObj((_h = res.message) !== null && _h !== void 0 ? _h : '', true);
                }
            });
        }
        else {
            this.stopStatusObj();
            this.showErrorSnack('Không lấy được thông tin lớp học, bài tập');
        }
    }
    ngOnInit() {
        var _a;
        this.homeworkHashId = (_a = this.commonService.getMyParam(this.activeRoute, 'hash_id')) !== null && _a !== void 0 ? _a : '';
        this.linkCdnGitHub = 'https://azota889.github.io/storage_public/mnote/';
        this.isSupportedBrowswer = this.exportPdfUtilsService.isSupportedBrowswer();
        if (this.isSupportedBrowswer) {
            this.initStatusObj();
            var loadJsObjs = [
                { source: this.cdnService.convertLinkCdn('azota_assets/js/html2pdf.bundle.js?v=28092021'), name: 'html2pdf.bundle.js' }
            ];
            this.commonService.loadScriptPromises(loadJsObjs).then(() => {
                this.commonService.translateMetaData({
                    title: 'Xuất PDF bài tập',
                    description: 'Xuất pdf bài tập',
                    image: 'lang_cms_test_image'
                });
                this.getData();
            });
        }
        super.ngOnInit();
    }
}
ExportHomeworkComponent.ɵfac = function ExportHomeworkComponent_Factory(t) { return new (t || ExportHomeworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api_api_answer_service__WEBPACK_IMPORTED_MODULE_4__.AnswerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_export_pdf_export_pdf_service__WEBPACK_IMPORTED_MODULE_6__.ExportPdfService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_export_pdf_export_pdf_new_service__WEBPACK_IMPORTED_MODULE_7__.ExportPdfNewService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_export_pdf_export_pdf_utils_service__WEBPACK_IMPORTED_MODULE_8__.ExportPdfUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_9__.ZipdataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_cdn_service__WEBPACK_IMPORTED_MODULE_10__.CdnService)); };
ExportHomeworkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: ExportHomeworkComponent, selectors: [["app-export-homework"]], hostBindings: function ExportHomeworkComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("beforeunload", function ExportHomeworkComponent_beforeunload_HostBindingHandler($event) { return ctx.askBeforeCloseWindow($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notBrowserSupport", ""], ["doneLoading", ""], ["id", "test_review_container", "class", "container-fluid mt-2", 4, "ngIf", "ngIfElse"], ["noSubmit", ""], ["id", "test_review_container", 1, "container-fluid", "mt-2"], ["id", "tabRowExam", 1, "row", 2, "margin-bottom", "10px"], ["id", "test_review_area", 1, "col"], ["id", "col_examContent_wrap", 2, "width", "1100px!important", "margin", "0 auto"], ["id", "mbTestContent"], [1, "text-center"], [1, "buttons-area", "mb-3", "text-center"], [1, "btn", "btn-info", 3, "disabled", "click"], ["class", "buttons-area mb-3 text-center", 4, "ngIf"], ["id", "multipleChoiceWrap", 1, "exportPdfModeIndex", 2, "padding", "30px"], ["id", "multipleChoiceWrapHeader"], ["id", "mainTitle", 1, "mb-1", "text-center"], ["id", "detailInfo", 1, "d-flex", "justify-content-between"], ["id", "colLeftInfo"], [1, "mb-0"], ["id", "colRightInfo"], ["id", "teacherMessage", 1, "pt-5"], [1, "contentNote"], ["class", "box-point", 3, "ngClass", "hidden", 4, "ngIf"], [1, "box-msg"], [1, "note"], [3, "ngStyle", "innerHtml", 4, "ngIf"], ["class", "box-emoji", 4, "ngIf"], [1, "cap"], [3, "title", "result"], ["style", "color: darkgrey;", "class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm", 2, "color", "darkgrey"], [2, "color", "green", "vertical-align", "bottom"], [1, "box-point", 3, "ngClass", "hidden"], [1, "point", 3, "ngStyle"], [3, "mark"], [3, "ngStyle", "innerHtml"], [1, "box-emoji"], [4, "ngFor", "ngForOf"], ["alt", "icon-emoji", 1, "comment-emoji", "img-fluid", "mr-2", 3, "id", "src"], [2, "padding", "50px"], [1, "alert", "alert-info"], [1, "p-5", "text-center", "alert", "alert-danger"]], template: function ExportHomeworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, ExportHomeworkComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ExportHomeworkComponent_ng_template_1_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isSupportedBrowswer)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_11__.AztLoadingEffectComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, _azota_ui_azt_check_mark_controller_component__WEBPACK_IMPORTED_MODULE_12__.AztCheckMark, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _azota_ui_export_essay_template_controller_component__WEBPACK_IMPORTED_MODULE_13__.AztExportEssayTemplateComponent], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__.ParserJson], styles: ["#test_review_container[_ngcontent-%COMP%] {\n  background: #ecf0f5;\n  flex: auto;\n  padding-top: 15px;\n}\n\n#tester-info[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 15px;\n  background-color: #fff;\n  margin: 0 auto;\n  position: sticky;\n  top: 10px;\n  max-height: calc(100vh - 10px);\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  border-radius: 3px;\n  border: 1px solid #f1f1f1;\n}\n\n#short_cut_mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#fullPoint[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #f1f1f1;\n  background-color: #fafafa;\n  padding: 10px;\n  margin-top: 15px;\n  align-items: center;\n}\n\n#fullPoint[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 130%;\n}\n\n.tested-times[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.tested-times[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  border: 1px solid #f1f1f1;\n  background-color: #fafafa;\n  padding: 10px;\n}\n\n.tested-times[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  border: 1px solid #f1f1f1;\n  border-top: none;\n  padding-left: 0;\n  margin-bottom: 0;\n  background-color: #fff;\n  padding: 10px;\n}\n\n.tested-times[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.tested-times[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.tested-times[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.select[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.tested-times[_ngcontent-%COMP%]:last-child {\n  flex: auto;\n  overflow: auto;\n}\n\n#multipleChoiceWrapHeader[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.exportPdfModeIndex[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n#unsupportFallback[_ngcontent-%COMP%] {\n  width: 750px;\n  height: 350px;\n  border: 1px solid grey;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#teacherMessage[_ngcontent-%COMP%]   .contentNote[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#teacherMessage[_ngcontent-%COMP%]   .contentNote[_ngcontent-%COMP%]   .cap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -30px;\n  font-family: \"font_chu_dep\";\n  font-weight: bold;\n  font-size: 25px;\n}\n\n#teacherMessage[_ngcontent-%COMP%]   .contentNote[_ngcontent-%COMP%]   .box-point[_ngcontent-%COMP%] {\n  width: 200px;\n  min-width: 200px;\n  min-height: 200px;\n  border: 2px solid #333;\n  border-right: none;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n}\n\n#teacherMessage[_ngcontent-%COMP%]   .contentNote[_ngcontent-%COMP%]   .box-point[_ngcontent-%COMP%]   span.point[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 60px;\n  \n}\n\n#teacherMessage[_ngcontent-%COMP%]   .contentNote[_ngcontent-%COMP%]   .box-msg[_ngcontent-%COMP%] {\n  border: 2px solid #333;\n  padding: 15px;\n  position: relative;\n  flex: auto;\n  min-height: 200px;\n}\n\n#teacherMessage[_ngcontent-%COMP%]   .contentNote[_ngcontent-%COMP%]   .box-msg[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  color: red;\n  font-size: 24px;\n  line-height: 1.5;\n}\n\n#teacherMessage[_ngcontent-%COMP%]   .contentNote[_ngcontent-%COMP%]   .box-msg[_ngcontent-%COMP%]   .cap[_ngcontent-%COMP%] {\n  left: 300px;\n}\n\n.fading_layer[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9;\n  background-color: #ffffffe3;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  padding-top: 200px;\n  text-align: center;\n  color: darkgrey;\n  font-size: 16px;\n}\n\n#filterWrap[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: -4px;\n  z-index: 2;\n}\n\n.viewWrong[_ngcontent-%COMP%]   .correct[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.viewRight[_ngcontent-%COMP%]   .incorrect[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#col_examContent_wrap[_ngcontent-%COMP%] {\n  width: 1100px;\n  margin: 0 auto;\n}\n\n#col_examContent_wrap[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 5px;\n  top: 50%;\n  z-index: 3;\n  font-size: 35px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #c9c9c97a;\n  border-radius: 50%;\n  color: #fff;\n  margin-top: -20px;\n}\n\n#col_examContent_wrap[_ngcontent-%COMP%]    > mat-icon.prev_icon[_ngcontent-%COMP%] {\n  left: 5px;\n}\n\n#mbTestContent[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n#mbTestContent[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 12px;\n  color: #646464;\n  z-index: 100;\n}\n\n#test_review_container.toggleNavInfo[_ngcontent-%COMP%]   #col_std_info[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n#close_button[_ngcontent-%COMP%] {\n  color: red;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n\n@media screen and (max-width: 320px) {\n  #tester-info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  #mbTestContent[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n\n  #test_review_container[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n\n  #col_std_info[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: -100%;\n    z-index: 99999;\n    background: #0000009c;\n    bottom: 0;\n    padding: 0;\n    transition: all 0.5s;\n  }\n\n  #short_cut_mobile[_ngcontent-%COMP%] {\n    display: flex;\n    font-weight: 500;\n    font-size: 18px;\n    justify-content: space-between;\n    color: #4a4a4a;\n  }\n\n  #header-app-component[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n    padding-left: 0 !important;\n  }\n\n  #tester-info[_ngcontent-%COMP%] {\n    margin: 0;\n    position: relative;\n    height: 100%;\n    max-height: unset;\n    top: 0;\n  }\n\n  #multipleChoiceWrap[_ngcontent-%COMP%] {\n    padding-right: 5px;\n    padding-left: 5px;\n    padding-top: 5px;\n  }\n}\n\n.buttons-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-transform: none !important;\n}\n\n.box-emoji[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  padding: 5px;\n  width: 88px;\n  display: flex;\n}\n\n@media screen and (max-width: 1600px) {\n  #col_examContent_wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBRUEsaUJBQUE7QUFBSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNFO0VBQ0UsYUFBQTtBQUVKOztBQUFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBRkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFJTjs7QUFERTtFQUNFLGdCQUFBO0FBSUo7O0FBSEk7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUtOOztBQUhJO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBS047O0FBSk07RUFDRSxtQkFBQTtBQU1SOztBQUxRO0VBQ0UsZ0JBQUE7QUFPVjs7QUFMUTtFQUNFLGdCQUFBO0FBT1Y7O0FBRkU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpFO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBT0o7O0FBTEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVFGOztBQUpFO0VBQ0UsYUFBQTtBQU9KOztBQU5JO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFRTjs7QUFOSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBUU47O0FBUE07RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBU1I7O0FBTkk7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQVFOOztBQVBNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVNSOztBQVBNO0VBQ0UsV0FBQTtBQVNSOztBQUhFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSEU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUpFO0VBQ0UsYUFBQTtBQU9KOztBQUxFO0VBQ0UsYUFBQTtBQVFKOztBQUxFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFRSjs7QUFQSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFTTjs7QUFQSTtFQUNFLFNBQUE7QUFTTjs7QUFMRTtFQUNFLGtCQUFBO0FBUUo7O0FBUEk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFTTjs7QUFKSTtFQUNFLE9BQUE7QUFPTjs7QUFIRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBTUo7O0FBSEU7RUFDRTtJQUNFLFdBQUE7RUFNSjtBQUNGOztBQUhFO0VBRUk7SUFDRSxxQkFBQTtFQUlOOztFQUFFO0lBQ0UsY0FBQTtFQUdKOztFQUFFO0lBQ0UsZUFBQTtJQUNBLE1BQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxvQkFBQTtFQUdKOztFQURFO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0lBRUEsZUFBQTtJQUNBLDhCQUFBO0lBQ0EsY0FBQTtFQUdKOztFQURFO0lBQ0UsMEJBQUE7RUFJSjs7RUFGRTtJQUNFLFNBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLE1BQUE7RUFLSjs7RUFIRTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQU1KO0FBQ0Y7O0FBSEU7RUFDRSwrQkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQU1KOztBQUpFO0VBQ0U7SUFDRSxXQUFBO0VBT0o7QUFDRiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0ZXN0X3Jldmlld19jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZDogI2VjZjBmNTtcbiAgICBmbGV4OiBhdXRvO1xuICAgIC8vIG1hcmdpbi10b3A6IC0xcmVtO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG4gICN0ZXN0ZXItaW5mb3tcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICB9XG4gICNzaG9ydF9jdXRfbW9iaWxle1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI2Z1bGxQb2ludHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5wb2ludHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDEzMCU7XG4gICAgfVxuICB9XG4gIC50ZXN0ZWQtdGltZXN7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAubGFiZWx7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgIHVse1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbGl7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgICYuc2VsZWN0e1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnRlc3RlZC10aW1lczpsYXN0LWNoaWxke1xuICAgIGZsZXg6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgI211bHRpcGxlQ2hvaWNlV3JhcEhlYWRlcntcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cbiAgLmV4cG9ydFBkZk1vZGVJbmRleCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbiN1bnN1cHBvcnRGYWxsYmFja3tcbiAgd2lkdGg6IDc1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jdGVhY2hlck1lc3NhZ2V7XG4gIC5jb250ZW50Tm90ZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5jYXAge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMzBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnZm9udF9jaHVfZGVwJztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbiAgICAuYm94LXBvaW50IHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIHNwYW4ucG9pbnQge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgIC8qIGxldHRlci1zcGFjaW5nOiAtMXB4OyAqL1xuICAgICAgfVxuICAgIH1cbiAgICAuYm94LW1zZyB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZsZXg6IGF1dG87XG4gICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgIC5ub3RlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB9XG4gICAgICAuY2Fwe1xuICAgICAgICBsZWZ0OiAzMDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiAgXG4gIC5mYWRpbmdfbGF5ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZlMztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogZGFya2dyZXk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIFxuICAjZmlsdGVyV3JhcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogLTRweDtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC52aWV3V3JvbmcgLmNvcnJlY3R7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAudmlld1JpZ2h0IC5pbmNvcnJlY3R7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgI2NvbF9leGFtQ29udGVudF93cmFwe1xuICAgIHdpZHRoOiAxMTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgJiA+IG1hdC1pY29ue1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgei1pbmRleDogMztcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWM5Yzk3YTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgfVxuICAgICYgPiBtYXQtaWNvbi5wcmV2X2ljb257XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgfVxuICB9XG4gIFxuICAjbWJUZXN0Q29udGVudHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJiA+IG1hdC1pY29ue1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTJweDtcbiAgICAgIGNvbG9yOiAjNjQ2NDY0O1xuICAgICAgei1pbmRleDogMTAwO1xuICAgIH1cbiAgfVxuICBcbiAgI3Rlc3RfcmV2aWV3X2NvbnRhaW5lci50b2dnbGVOYXZJbmZve1xuICAgICNjb2xfc3RkX2luZm97XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgI2Nsb3NlX2J1dHRvbntcbiAgICBjb2xvcjogcmVkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogNXB4O1xuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgICN0ZXN0ZXItaW5mb3tcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAjbWJUZXN0Q29udGVudHtcbiAgICAgICYgPiBtYXQtaWNvbntcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgI3Rlc3RfcmV2aWV3X2NvbnRhaW5lcntcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgLy8gbWFyZ2luLXRvcDogLTJyZW07XG4gICAgfVxuICAgICNjb2xfc3RkX2luZm97XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAtMTAwJTtcbiAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDljO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIH1cbiAgICAjc2hvcnRfY3V0X21vYmlsZXtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgLy8gcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBjb2xvcjogIzRhNGE0YTtcbiAgICB9XG4gICAgI2hlYWRlci1hcHAtY29tcG9uZW50IGE6bGFzdC1jaGlsZHtcbiAgICAgIHBhZGRpbmctbGVmdDogMCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICN0ZXN0ZXItaW5mb3tcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgICAjbXVsdGlwbGVDaG9pY2VXcmFwe1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIH1cbiAgfVxuICBcbiAgLmJ1dHRvbnMtYXJlYSBidXR0b257XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUhaW1wb3J0YW50O1xuICB9XG4gIC5ib3gtZW1vaml7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogODhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAgICNjb2xfZXhhbUNvbnRlbnRfd3JhcHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICAiXX0= */"] });
class WhatToExportHomeworkDialog extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_3__.MyBaseComponent {
    constructor(dialogRef, commonService, fb, data) {
        super(commonService);
        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.fb = fb;
        this.data = data;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormGroup({});
        this.isSelectAll = new _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormControl(false);
    }
    get exportsFormArray() {
        return this.form.controls.exports;
    }
    get countSelected() {
        return this.exportsFormArray.value.filter((item) => {
            return item === true;
        }).length;
    }
    selectAll() {
        const mySelect = [];
        this.data.resultsArr.forEach(() => {
            mySelect.push(this.isSelectAll.value);
        });
        this.form.controls.exports.setValue(mySelect);
    }
    ngOnInit() {
        this.form = this.fb.group({
            exports: new _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormArray([], minSelectedCheckboxes(1))
        });
        this.data.resultsArr.forEach(() => {
            this.exportsFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormControl(false));
        });
        super.ngOnInit();
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
WhatToExportHomeworkDialog.ɵfac = function WhatToExportHomeworkDialog_Factory(t) { return new (t || WhatToExportHomeworkDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA)); };
WhatToExportHomeworkDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: WhatToExportHomeworkDialog, selectors: [["what-export-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 28, consts: [[1, "text-center", "mb-2"], [1, "h4"], [1, "clickable", "d-flex", "align-items-center", 2, "font-weight", "500"], ["color", "primary", 1, "example-margin", 3, "formControl", "change"], ["mat-dialog-content", "", 1, "mt-3"], [3, "formGroup"], ["formArrayName", "exports", "ngFor", "", 3, "ngForOf"], [1, "text-right"], ["mat-raised-button", "", 1, "mr-2", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "mat-dialog-close"], ["color", "primary", 1, "mr-2", "mb-2", 3, "checked", "formControlName"]], template: function WhatToExportHomeworkDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p")(5, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "span", 2)(10, "mat-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function WhatToExportHomeworkDialog_Template_mat_checkbox_change_10_listener() { return ctx.selectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](13, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 4)(15, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, WhatToExportHomeworkDialog_ng_template_16_Template, 2, 4, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 7)(18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WhatToExportHomeworkDialog_Template_button_click_18_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](20, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](23, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 12, "lang_homework_export_homework_select_students_export_pdf"), "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate3"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 14, "lang_homework_export_homework_tutorial"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 16, "lang_homework_export_homework_choose"), ": ", ctx.countSelected, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx.isSelectAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.isSelectAll.value ? _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](12, 18, "lang_homework_export_homework_clear_select_all") : _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](13, 20, "lang_homework_export_homework_select_all"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.exportsFormArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](20, 22, "lang_buttom_cancel_clear"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx.form.valid)("mat-dialog-close", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](26, _c2, ctx.exportsFormArray.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](23, 24, "lang_buttom_agree"));
    } }, directives: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormControlDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogClose], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__.MytranslatePipe], encapsulation: 2 });
function minSelectedCheckboxes(min = 1) {
    const validator = (formArray) => {
        const totalSelected = formArray.controls.map(control => control.value).reduce((prev, next) => (next ? prev + next : prev), 0);
        return totalSelected >= min ? null : { required: true };
    };
    return validator;
}


/***/ }),

/***/ 20794:
/*!****************************************************************!*\
  !*** ./src/app/homework/homework-list/controller.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeworkListComponent": () => (/* binding */ HomeworkListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ 98810);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/zipdata.service */ 2366);
/* harmony import */ var src_app_core_services_time_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/time.service */ 72491);
/* harmony import */ var src_app_core_services_sort_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/sort.service */ 86317);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _azota_ui_home_work_file_home_work_file_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../azota-ui/home-work-file/home-work-file.component */ 38927);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);




















function HomeworkListComponent_div_1_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 14)(1, "azt-home-work-file", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("redirectId", function HomeworkListComponent_div_1_div_9_div_2_Template_azt_home_work_file_redirectId_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9); const homework_r6 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return ctx_r8.redirectHomework($event, ctx_r8.classroomId != "share" ? ctx_r8.classroomId : homework_r6.classroomId ? homework_r6.classroomId.toString() : "0", homework_r6.hashId ? homework_r6.hashId : ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const homework_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("classId", ctx_r5.classroomId != "share" ? ctx_r5.classroomId : homework_r6.classroomId == null ? null : homework_r6.classroomId.toString())("name", homework_r6.name ? homework_r6.name : "")("dateCreated", homework_r6.createdAt)("deadLine", homework_r6.deadline)("totalTakeTest", homework_r6.count ? homework_r6.count : 0)("totalStudent", homework_r6.countStudents ? homework_r6.countStudents : 0)("homeworkId", homework_r6.id ? homework_r6.id : 0)("isNew", homework_r6.isNew ? homework_r6.isNew : 0)("hashId", homework_r6.hashId ? homework_r6.hashId : "")("className", ctx_r5.classroomId == "share" && homework_r6.className ? homework_r6.className : "")("backLink", ctx_r5.backLink);
} }
function HomeworkListComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, HomeworkListComponent_div_1_div_9_div_2_Template, 2, 11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.homeworkObjs);
} }
function HomeworkListComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 16)(2, "div", 17)(3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](!ctx_r2.checkDataHomeworkObjsSearch ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 1, "lang_homework_homework_list_not_assigned") : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 3, "lang_homework_homework_list_not_found"));
} }
function HomeworkListComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 19);
} }
function HomeworkListComponent_div_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomeworkListComponent_div_1_ng_container_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r10.seeMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_list_see_more"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r4.nextPage);
} }
function HomeworkListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function HomeworkListComponent_div_1_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r12.changeValueSearch(); })("keyup.enter", function HomeworkListComponent_div_1_Template_input_keyup_enter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r14.changeValueSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomeworkListComponent_div_1_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r15.changeValueSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, HomeworkListComponent_div_1_div_9_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, HomeworkListComponent_div_1_div_10_Template, 7, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, HomeworkListComponent_div_1_div_12_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, HomeworkListComponent_div_1_ng_container_13_Template, 5, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 6, "lang_homework_homework_list_search"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx_r0.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.homeworkObjs.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.homeworkObjs.length == 0 && !ctx_r0.loadingMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.loadingMore === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.loadingMore === false && ctx_r0.checkDataHomeworkObjsSearch == false);
} }
class HomeworkListComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(activeRoute, commonService, homeworkService, classroomService, zipdataService, timeService, sortService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.homeworkService = homeworkService;
        this.classroomService = classroomService;
        this.zipdataService = zipdataService;
        this.timeService = timeService;
        this.sortService = sortService;
        this.classroomId = '0';
        this.menuObjs = [];
        this.classroomObj = {};
        this.rawHomeworkObjs = [];
        this.homeworkObjs = [];
        this.checkNew = false;
        this.nextPage = '';
        this.ParamNextPage = '';
        this.checkDataHomeworkObjsSearch = false;
        this.loadingMore = false;
        this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('');
        this.backLink = '';
    }
    changeValueSearch() {
        if (this.searchText.value != '') {
            this.checkDataHomeworkObjsSearch = true;
            let searchArray = this.commonService.searchArray(this.rawHomeworkObjs, this.searchText.value);
            this.homeworkObjs = Array.isArray(searchArray) ? searchArray : [];
        }
        else {
            this.homeworkObjs = this.rawHomeworkObjs;
        }
    }
    getData() {
        this.initStatusObj();
        this.loadingMore = true;
        this.subscriptions.add(this.homeworkService.apiHomeworkGetObjsAndPermissionsByClassroomGet(this.classroomId.toString(), this.ParamNextPage).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (response.success == 1) {
                this.nextPage = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.nextPage) !== null && _b !== void 0 ? _b : '';
                if (((_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.homeworkObjs) === null || _d === void 0 ? void 0 : _d.length) == 0 && this.nextPage) {
                    this.seeMore();
                }
                else {
                    this.classroomObj = (_f = (_e = response.data) === null || _e === void 0 ? void 0 : _e.classroomObj) !== null && _f !== void 0 ? _f : {};
                    this.rawHomeworkObjs = this.rawHomeworkObjs.concat((_h = (_g = response.data) === null || _g === void 0 ? void 0 : _g.homeworkObjs) !== null && _h !== void 0 ? _h : new Array());
                    this.homeworkObjs = this.rawHomeworkObjs;
                    if (this.classroomId != 'share') {
                        this.menuObjs = [{ code: 'logPoidClass', name: 'Xuất bảng điểm lớp học' }];
                    }
                    this.successStatusObj();
                    this.loadingMore = false;
                }
            }
            else {
                this.errorStatusObj((_j = response.message) !== null && _j !== void 0 ? _j : '');
                this.showErrorSnack('Lỗi: không load được dữ liệu lớp học');
                this.loadingMore = false;
            }
        }));
    }
    seeMore() {
        this.ParamNextPage = this.nextPage;
        this.getData();
    }
    redirectHomework(event, classId, homeworkHashId) {
        this.commonService.myNavigation('/admin/homework/score-list/' + classId + '/' + event + '/' + homeworkHashId);
    }
    changePermission() {
        this.getData();
    }
    callbackMenuEvent(code) {
        if (code == 'logPoidClass') {
            var arrayHeaderExcel = ['STT', 'Họ và tên', 'Mã học sinh', 'Giới tính', 'Ngày sinh'];
            this.subscriptions.add(this.classroomService.apiClassroomExportDataGet(Number(this.classroomId)).subscribe((cls) => {
                var _a, _b, _c, _d;
                if (cls.success == 1) {
                    let dataExportPoint = [];
                    let dataExportComment = [];
                    let responseData = this.sortService.sortFirstNameStudents((_b = (_a = cls.data) === null || _a === void 0 ? void 0 : _a.objs) !== null && _b !== void 0 ? _b : []);
                    let STTCounter = 0;
                    responseData.forEach((element) => {
                        var _a;
                        STTCounter += 1;
                        var dataPoint = {};
                        var dataComment = {};
                        (_a = element.dataHomework) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                            var _a, _b, _c;
                            var inputKey = this.timeService.getFormatDate((_a = item.createdAt) !== null && _a !== void 0 ? _a : '') + ` (${item.name})`;
                            var countValue = 1;
                            while (dataPoint[`${inputKey}`]) {
                                countValue++;
                                inputKey = `${this.timeService.getFormatDate((_b = item.createdAt) !== null && _b !== void 0 ? _b : '')} (${item.name}) (${countValue})`;
                            }
                            switch (item.point) {
                                case 1000:
                                    dataPoint[`${inputKey}`] = `Đạt`;
                                    break;
                                case 1001:
                                    dataPoint[`${inputKey}`] = `Chưa Đạt`;
                                    break;
                                case 2000:
                                    dataPoint[`${inputKey}`] = `Hoàn Thành`;
                                    break;
                                case 2001:
                                    dataPoint[`${inputKey}`] = `Chưa Hoàn Thành`;
                                    break;
                                case 3000:
                                    dataPoint[`${inputKey}`] = `Hoàn Thành Tốt`;
                                    break;
                                default:
                                    dataPoint[`${inputKey}`] = `${item.point}`;
                                    break;
                            }
                            let parseJsonResult = this.commonService.parseJson(this.zipdataService.decodeContentGzip((_c = item.result) !== null && _c !== void 0 ? _c : ''));
                            dataComment[`${inputKey}`] = parseJsonResult == null ? '' : parseJsonResult.comment;
                            if (STTCounter === 1) {
                                arrayHeaderExcel.push(inputKey);
                            }
                        });
                        dataExportPoint.push(Object.assign({ STT: STTCounter, 'Họ và tên': element.fullname, 'Mã học sinh': element.code, 'Giới tính': element.gender, 'Ngày sinh': element.birthday != null ? this.timeService.getFormatDate(element.birthday) : '' }, dataPoint));
                        dataExportComment.push(Object.assign({ STT: STTCounter, 'Họ và tên': element.fullname, 'Mã học sinh': element.code, 'Giới tính': element.gender, 'Ngày sinh': element.birthday != null ? this.timeService.getFormatDate(element.birthday) : '' }, dataComment));
                    });
                    let fileName = this.commonService.createFileNameExportFile(['Tổng kết điểm Lớp', (_c = this.classroomObj.name) !== null && _c !== void 0 ? _c : '']);
                    var wsP = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.aoa_to_sheet([
                        [`Danh sách điểm - ${this.classroomObj.name}`],
                        arrayHeaderExcel
                    ]);
                    xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.sheet_add_json(wsP, dataExportPoint, { origin: -1, header: arrayHeaderExcel, skipHeader: true });
                    var wsC = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.aoa_to_sheet([
                        [`Danh sách nhận xét - ${this.classroomObj.name}`],
                        arrayHeaderExcel
                    ]);
                    xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.sheet_add_json(wsC, dataExportComment, { origin: -1, header: arrayHeaderExcel, skipHeader: true });
                    const wb = { Sheets: { 'Bảng điểm': wsP, 'Nhận xét': wsC }, SheetNames: ['Bảng điểm', 'Nhận xét'] };
                    const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__.write(wb, { bookType: 'xlsx', type: 'array' });
                    let fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                    let fileExtension = '.xlsx';
                    const data = new Blob([excelBuffer], { type: fileType });
                    file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs(data, fileName + fileExtension);
                }
                else {
                    this.errorStatusObj((_d = cls.message) !== null && _d !== void 0 ? _d : '', true);
                }
            }));
        }
    }
    ngOnInit() {
        var _a;
        this.ParamNextPage = (_a = this.commonService.getMyQueryParam('nextPage')) !== null && _a !== void 0 ? _a : '';
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([
            this.activeRoute.params,
            this.activeRoute.queryParams,
        ]).subscribe(([]) => {
            var _a;
            this.classroomId = (_a = (this.commonService.getMyParam(this.activeRoute, 'id'))) !== null && _a !== void 0 ? _a : '0';
            this.backLink = '/admin/homework/homework-list/' + this.classroomId;
            this.getData();
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_homework_list_exercise_title',
            description: 'lang_cms_homework_list_exercise_description',
            image: 'lang_cms_test_image',
        });
        this.commonService.gaEvent('teacher_homework_list');
        super.ngOnInit();
    }
}
HomeworkListComponent.ɵfac = function HomeworkListComponent_Factory(t) { return new (t || HomeworkListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_4__.HomeworkService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_4__.ClassroomService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_5__.ZipdataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_time_service__WEBPACK_IMPORTED_MODULE_6__.TimeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_sort_service__WEBPACK_IMPORTED_MODULE_7__.SortService)); };
HomeworkListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: HomeworkListComponent, selectors: [["list-homework"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 4, consts: [[3, "menu_objs", "headerTitle", "back_link", "MenuEvent"], ["class", "mb-2 mt-3 pb-80", "style", "max-width: 1400px; margin: auto;", 4, "ngIf"], [1, "mb-2", "mt-3", "pb-80", 2, "max-width", "1400px", "margin", "auto"], [1, "header-box", "mt-3", "pl-2", "pr-2"], [1, "row"], [1, "col-md-12"], [1, "search-block"], ["type", "text", 1, "search-input", 3, "formControl", "placeholder", "change", "keyup.enter"], [1, "search-icon", 2, "padding-top", "2px", 3, "click"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["class", "spinner-border text-secondary my-3", "role", "status", 4, "ngIf"], [1, "row", 2, "min-height", "80px"], ["class", "col-md-6 col-xl-4 col-12", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-xl-4", "col-12"], [1, "relative", 3, "classId", "name", "dateCreated", "deadLine", "totalTakeTest", "totalStudent", "homeworkId", "isNew", "hashId", "className", "backLink", "redirectId"], [1, "row", "text-center", "py-5"], [1, "col-12"], [1, "p-0", "m-0"], ["role", "status", 1, "spinner-border", "text-secondary", "my-3"], ["mat-button", "", 1, "btn-all-add", 3, "matTooltip", "disabled", "click"]], template: function HomeworkListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("MenuEvent", function HomeworkListComponent_Template_header_backend_MenuEvent_0_listener($event) { return ctx.callbackMenuEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, HomeworkListComponent_div_1_Template, 14, 8, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("menu_objs", ctx.menuObjs)("headerTitle", ctx.classroomObj.name ? "Danh s\u00E1ch b\u00E0i t\u1EADp - " + ctx.classroomObj.name : "")("back_link", "/admin/homework/classes/1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.classroomObj);
    } }, directives: [_azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_8__.HeaderBackendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _azota_ui_home_work_file_home_work_file_component__WEBPACK_IMPORTED_MODULE_9__.HomeWorkFileComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__.MytranslatePipe], styles: [".header-box[_ngcontent-%COMP%] {\n  border: 1px solid #dfdfdf;\n  background-color: #f3f3f3;\n  border-radius: 5px;\n  margin: 0 15px;\n}\n\n.page-item[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n\n.pb-80[_ngcontent-%COMP%] {\n  padding-bottom: 80px;\n}\n\n.btn-pag[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n}\n\n.btn-add-teacher[_ngcontent-%COMP%] {\n  border: 1px solid #ececec;\n}\n\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.content-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.break[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  width: 0;\n}\n\n.block-flex-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 120px;\n  width: 100%;\n  font-weight: 700;\n}\n\n.search-block[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  border: 1px solid #eaeaeae3;\n  padding: 0.1rem 0.55rem;\n  border-radius: 3px;\n  padding: 2px 5px;\n  padding-right: 30px;\n  font-size: 12px;\n}\n\n.search-input[_ngcontent-%COMP%]:focus {\n  border: 1px solid #0EAFC0;\n  outline: none;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  transition: all 0.5s;\n  height: 100%;\n  border-left: none;\n  cursor: pointer !important;\n  color: #0EAFC0;\n}\n\n.search-icon[_ngcontent-%COMP%]:hover {\n  background: #d7d7d7;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n.btn-all-add[_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFBO0VBQ0ksb0JBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFPSjs7QUFMQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQVFKOztBQU5BO0VBQ0ksZ0JBQUE7RUFDQSxRQUFBO0FBU0o7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFQRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVVKOztBQVJFO0VBQ0UsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFVSjs7QUFUSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQVdOOztBQVJFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQVVKOztBQVRJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFXTjs7QUFQQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQVVKIiwiZmlsZSI6InN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1ib3h7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDAgMTVweDtcbn1cbi5wYWdlLWl0ZW17XG4gICAgbWFyZ2luOiAwIDNweDtcbn1cbi5wYi04MHtcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cbi5idG4tcGFne1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG59XG4uYnRuLWFkZC10ZWFjaGVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2VjZWM7XG59XG4ucmVsYXRpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wIDogMDtcbiAgICByaWdodDogMDtcbn1cbi5jb250ZW50LWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJyZWFrIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIHdpZHRoOiAwO1xufVxuLmJsb2NrLWZsZXgtY2VudGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uc2VhcmNoe1xuICAmLWJsb2Nre1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgJi1pbnB1dHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhZTM7XG4gICAgcGFkZGluZzogMC4xcmVtIDAuNTVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgJjpmb2N1c3tcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwRUFGQzA7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxuICAmLWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMEVBRkMwO1xuICAgICY6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuLmJ0bi1hbGwtYWRke1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogMTVweDtcbn0iXX0= */"] });


/***/ }),

/***/ 80263:
/*!**********************************************************************!*\
  !*** ./src/app/homework/homework-score-list/controller.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeworkScoreListComponent": () => (/* binding */ HomeworkScoreListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_auto_api_common_api_api_answer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api/api/answer.service */ 37234);
/* harmony import */ var src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/zipdata.service */ 2366);
/* harmony import */ var src_app_core_services_sort_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/sort.service */ 86317);
/* harmony import */ var src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/browser.storage.service */ 34782);
/* harmony import */ var src_app_core_services_exam_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/exam.filter.service */ 61372);















const _c0 = ["drawer"];
const _c1 = ["boxContent"];
function HomeworkScoreListComponent_azt_loading_effect_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "azt-loading-effect");
} }
function HomeworkScoreListComponent_ng_template_2_div_0_app_delete_homework_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-delete-homework", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("closeDialog", function HomeworkScoreListComponent_ng_template_2_div_0_app_delete_homework_1_Template_app_delete_homework_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r9.closeDeleteHomework($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r4.deleteHomeworkData);
} }
function HomeworkScoreListComponent_ng_template_2_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "azt-preview-media", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("closePreview", function HomeworkScoreListComponent_ng_template_2_div_0_div_2_Template_azt_preview_media_closePreview_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r11.onFileClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fileOption", ctx_r5.previewFile);
} }
function HomeworkScoreListComponent_ng_template_2_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "lang_homework_homework_score_list_not_search_data"), "! ", ctx_r6.errorMessage == "lang_core_not_found_classroom_or_homework" ? "lang_homework_homework_score_list_class_maybe_delete" : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, ""), "");
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_score_list_dealine"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 4, ctx_r14.homeworkObj.deadline, "dd/MM/yyyy HH:mm"), "");
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_homework_homework_score_list_dealine_not_time"));
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 96)(1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_div_0_div_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45); const file_r43 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](6); return ctx_r44.onShowFile(file_r43, -1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " text_snippet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const file_r43 = ctx.$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", ctx_r42.getFileName(file_r43));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r42.getFileName(file_r43));
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_div_0_div_1_Template, 6, 2, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r38.homeworkObj.fileObjs);
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 100);
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r39.homeworkObj.content, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
} }
const _c2 = function (a0) { return [a0]; };
const _c3 = function (a0) { return { backTo: a0 }; };
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 3, "/admin/homework/add-new-homework/" + ctx_r40.homeworkObj.id + "/" + ctx_r40.homeworkHashId)))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](9, _c3, ctx_r40.backLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 5, "lang_buttom_edit"));
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5); return ctx_r46.deleteHomework(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "lang_buttom_delete"));
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_div_0_Template, 2, 1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_div_1_Template, 1, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_a_3_Template, 7, 11, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "editPermission");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_a_5_Template, 6, 3, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "deletePermission");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.homeworkObj.files && ctx_r16.homeworkObj.files.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.homeworkObj.content && ctx_r16.homeworkObj.content != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](4, 4, ctx_r16.homeworkObj.permissionObj, "homework"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 7, ctx_r16.homeworkObj.permissionObj, "homework"));
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_29_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r48.toggleShowActions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_30_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_30_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r50.toggleShowActions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_39_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_39_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r52.openDrawer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " menu_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "lang_homework_homework_score_list_open_menu"));
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_40_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_40_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r54.closeDrawer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "menu_open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "lang_homework_homework_score_list_close_menu"));
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_p_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_score_list_dealine"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 4, ctx_r24.homeworkObj.deadline, "dd/MM/yyyy HH:mm"), "");
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_p_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_homework_homework_score_list_dealine_not_time"));
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 3, "/admin/homework/add-new-homework/" + ctx_r26.homeworkObj.id + "/" + ctx_r26.homeworkHashId)))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](9, _c3, ctx_r26.backLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 5, "lang_buttom_edit"));
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_154_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_154_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r56.deleteHomework(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "lang_buttom_delete"));
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_158_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 96)(1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_158_div_0_div_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r63); const file_r61 = restoredCtx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](6); return ctx_r62.onShowFile(file_r61, -1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " text_snippet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const file_r61 = ctx.$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", ctx_r60.getFileName(file_r61));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r60.getFileName(file_r61));
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_158_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_158_div_0_div_1_Template, 6, 2, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r58.homeworkObj.fileObjs);
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_158_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 116);
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r59.homeworkObj.content, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_158_div_0_Template, 2, 1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_158_div_1_Template, 1, 1, "div", 115);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r28.homeworkObj.files && ctx_r28.homeworkObj.files.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r28.homeworkObj.content && ctx_r28.homeworkObj.content != "");
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_162_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_162_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r64.toggleShowActions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_163_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_163_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r66.toggleShowActions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "expand_less ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 117)(1, "div", 77)(2, "form", 48)(3, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup.enter", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template_input_keyup_enter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r69.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r71.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 118)(9, "div", 53)(10, "button", 119)(11, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "filter_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-menu", 57, 58)(18, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template_a_click_18_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-slide-toggle", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template_mat_slide_toggle_change_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r70); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r73.toggleFilterSubmitted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template_a_click_23_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-slide-toggle", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template_mat_slide_toggle_change_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r70); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r75.toggleFilterNotSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template_a_click_28_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-slide-toggle", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template_mat_slide_toggle_change_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r70); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r77.toggleFilterMarked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template_a_click_33_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-slide-toggle", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template_mat_slide_toggle_change_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r70); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r79.toggleFilterReSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 62)(39, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template_a_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r70); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r80.confirmFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template_a_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r70); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r81.clearFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](46, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17);
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r31.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 14, "lang_homework_homework_score_list_search"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 16, "lang_homework_homework_score_list_sort"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 18, "lang_homework_homework_score_list_sort_student_not_marking"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r31.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 20, "lang_homework_homework_score_list_sort_student_not_yet_paid"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r31.isNotSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 22, "lang_homework_homework_score_list_sort_mark"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r31.isMarked);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 24, "lang_homework_homework_score_list_sort_student_resubmit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r31.mustReSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](42, 26, "lang_buttom_agree"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](46, 28, "lang_buttom_delete"), "");
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 76)(1, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "lang_homework_homework_score_list_list_submit"));
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_167_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 122)(1, "div", 123)(2, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 124)(10, "div", 64)(11, "button", 65)(12, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-menu", 57, 67)(16, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_167_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r83.exportToExcel("homework"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_167_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r84); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r85.exportToPDF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_167_Template_a_click_30_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](34, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-slide-toggle", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_167_Template_mat_slide_toggle_change_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r84); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r87.sortByTimeDESC($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](15);
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 12, "lang_homework_homework_score_list_list_submit_class"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r34.classObj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](32, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 14, "/admin/student/class-details/" + ctx_r34.classId)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r34.classObj.name && ctx_r34.classObj.name.length > 20 ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](8, 16, ctx_r34.classObj.name, 0, 20) + ".." : ctx_r34.classObj.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 20, "lang_homework_homework_score_list_export_excel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 22, "lang_homework_homework_score_list_export_excel"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 24, "lang_homework_homework_score_list_export_pdf"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 26, "lang_homework_homework_score_list_export_pdf"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](34, 28, "lang_homework_homework_score_list_sort_time_submit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 30, "lang_homework_homework_score_list_sort_time_submit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r34.isSortByTimeDESC);
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 34)(1, "div", 125)(2, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, "lang_not_found_search"), "!");
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_azt_loading_effect_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "azt-loading-effect");
} }
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_171_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-student-homework-result", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("goToResult", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_171_Template_app_student_homework_result_goToResult_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r88.goToTestReview($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isSortByTime", ctx_r37.isSortByTimeDESC)("backToLink", ctx_r37.backToLink)("searchKey", ctx_r37.form.controls["searchContent"].value)("studentLists", ctx_r37.dataListStudents)("isNotTestedYet", ctx_r37.isNotTestedYet)("isOpenSideNav", ctx_r37.isOpenSideNav)("obj", ctx_r37.homeworkObj);
} }
const _c4 = function (a0, a1) { return { "w-60": a0, "w-30": a1 }; };
const _c5 = function (a0) { return { "px-0": a0 }; };
const _c6 = function (a0) { return { "justify-content-center": a0 }; };
function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-drawer-container", 12)(1, "mat-drawer", 13, 14)(3, "div", 15)(4, "div", 16)(5, "div", 17)(6, "div", 18)(7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 20)(10, "div", 21)(11, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r90.showCopySuccess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Copy link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "azt-download-qr-code", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 18)(18, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_p_23_Template, 4, 7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_p_24_Template, 3, 3, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "azt-share", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_27_Template, 7, 10, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_29_Template, 3, 0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_30_Template, 3, 0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-drawer-content", 32)(32, "div", 33)(33, "div", 34, 35)(35, "div", 36)(36, "div", 37)(37, "div", 38)(38, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_39_Template, 4, 3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_40_Template, 4, 3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "p", 41)(42, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](43, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](45, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, " chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](50, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 45)(52, "div", 46)(53, "div", 47)(54, "form", 48)(55, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup.enter", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_input_keyup_enter_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r92.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](56, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_div_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r93.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, " search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 52)(61, "div", 53)(62, "button", 54)(63, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](65, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "filter_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "mat-menu", 57, 58)(70, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_a_click_70_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](73, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "mat-slide-toggle", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_mat_slide_toggle_change_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r95.toggleFilterSubmitted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_a_click_75_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](78, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "mat-slide-toggle", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_mat_slide_toggle_change_79_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r97.toggleFilterNotSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_a_click_80_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](83, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "mat-slide-toggle", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_mat_slide_toggle_change_84_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r99.toggleFilterMarked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_a_click_85_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](88, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "mat-slide-toggle", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_mat_slide_toggle_change_89_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r101.toggleFilterReSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "div", 62)(91, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_a_click_91_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r102.clearFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](94, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "div")(96, "div", 64)(97, "button", 65)(98, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "mat-menu", 57, 67)(102, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_a_click_102_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r103.exportToExcel("homework"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](106, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](108, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_a_click_109_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r104.exportToPDF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](111, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](113, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](115, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_a_click_116_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](118, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](120, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](122, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "mat-slide-toggle", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_mat_slide_toggle_change_123_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r106.sortByTimeDESC($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "div", 72)(125, "div", 16)(126, "div", 73)(127, "div", 18)(128, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "div", 74)(131, "div", 21)(132, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template_button_click_132_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r107.showCopySuccess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134, "file_copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](135, " Copy link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](137, "azt-download-qr-code", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "div", 16)(139, "div", 76)(140, "div", 18)(141, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](143, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](144, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "div", 16)(146, "div", 77)(147, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](148, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_p_148_Template, 4, 7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](149, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_p_149_Template, 3, 3, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "div", 78)(151, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](152, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_152_Template, 7, 11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](153, "editPermission");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](154, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_154_Template, 6, 3, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](155, "deletePermission");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](157, "azt-share", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](158, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_158_Template, 2, 2, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "div", 16)(160, "div", 76)(161, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](162, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_162_Template, 3, 0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](163, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_a_163_Template, 3, 0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](164, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_164_Template, 47, 30, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](165, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](166, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_166_Template, 4, 3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](167, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_167_Template, 38, 34, "ng-template", null, 85, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](169, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_div_169_Template, 5, 3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](170, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_azt_loading_effect_170_Template, 1, 0, "azt-loading-effect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](171, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_ng_template_171_Template, 1, 7, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](172, "app-excel-export", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](69);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](101);
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](168);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hasBackdrop", ctx_r7.hasBackdrop);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("opened", ctx_r7.isOpenSideNav ? "true" : "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mode", ctx_r7.mode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](130, _c4, ctx_r7.isMobile, !ctx_r7.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.homeworkObj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r7.copylinkToClipboard(ctx_r7.homeworkObj.hashId ? ctx_r7.homeworkObj.hashId : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fileName", "azota_score_list_qrcode_" + ctx_r7.homeworkObj.hashId)("linkUrl", ctx_r7.copylinkToClipboard(ctx_r7.homeworkObj.hashId ? ctx_r7.homeworkObj.hashId : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 78, "lang_homework_homework_score_list_create_date"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](21, 80, ctx_r7.homeworkObj.createdAt, "dd/MM/yyyy HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.hasDeadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.hasDeadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", 2)("typeObj", "HOMEWORK")("id", ctx_r7.homeworkObj.id)("permissionObj", ctx_r7.homeworkObj.permissionObj);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.isShowActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.isShowActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.isShowActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](133, _c5, ctx_r7.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](135, _c6, ctx_r7.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx_r7.isMobile == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.isOpenSideNav || ctx_r7.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.isOpenSideNav && !ctx_r7.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r7.classObj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](137, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](43, 83, "/admin/student/class-details/" + ctx_r7.classId)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r7.classObj.name && ctx_r7.classObj.name.length > 20 ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](45, 85, ctx_r7.classObj.name, 0, 20) + ".." : ctx_r7.classObj.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r7.homeworkObj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r7.homeworkObj.name && ctx_r7.homeworkObj.name.length > 40 ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](50, 89, ctx_r7.homeworkObj.name, 0, 40) + ".." : ctx_r7.homeworkObj.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r7.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](56, 93, "lang_homework_homework_score_list_search"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](65, 95, "lang_homework_homework_score_list_sort"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](73, 97, "lang_homework_homework_score_list_sort_student_not_marking"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r7.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](78, 99, "lang_homework_homework_score_list_sort_student_not_yet_paid"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r7.isNotSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](83, 101, "lang_homework_homework_score_list_sort_mark"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r7.isMarked);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](88, 103, "lang_homework_homework_score_list_sort_student_resubmit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r7.mustReSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](94, 105, "lang_buttom_delete"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](106, 107, "lang_homework_homework_score_list_export_excel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](108, 109, "lang_homework_homework_score_list_export_excel"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](113, 111, "lang_homework_homework_score_list_export_pdf"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](115, 113, "lang_homework_homework_score_list_export_pdf"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](120, 115, "lang_homework_homework_score_list_sort_time_submit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](122, 117, "lang_homework_homework_score_list_sort_time_submit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r7.isSortByTimeDESC);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx_r7.isMobile == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.homeworkObj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r7.copylinkToClipboard(ctx_r7.homeworkObj.hashId ? ctx_r7.homeworkObj.hashId : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fileName", "azota_score_list_qrcode_" + ctx_r7.homeworkObj.hashId)("linkUrl", ctx_r7.copylinkToClipboard(ctx_r7.homeworkObj.hashId ? ctx_r7.homeworkObj.hashId : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](143, 119, "lang_homework_homework_score_list_create_date"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](144, 121, ctx_r7.homeworkObj.createdAt, "dd/MM/yyyy HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.hasDeadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.hasDeadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](153, 124, ctx_r7.homeworkObj.permissionObj, "homework"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](155, 127, ctx_r7.homeworkObj.permissionObj, "homework"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", 2)("typeObj", "HOMEWORK")("id", ctx_r7.homeworkObj.id)("permissionObj", ctx_r7.homeworkObj.permissionObj);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.isShowActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.isShowActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.isShowActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.isMobile == false)("ngIfElse", _r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.isNullSearchData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.isLoadingSearch == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.isNullSearchData && ctx_r7.isLoadingSearch == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("studentList", ctx_r7.dataListStudents)("homeworkObj", ctx_r7.homeworkObj)("currentDate", ctx_r7.currentDate)("typeTable", "homework");
} }
function HomeworkScoreListComponent_ng_template_2_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 128);
} }
function HomeworkScoreListComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeworkScoreListComponent_ng_template_2_div_0_app_delete_homework_1_Template, 1, 1, "app-delete-homework", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HomeworkScoreListComponent_ng_template_2_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function HomeworkScoreListComponent_ng_template_2_div_0_Template_div_resize_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r108.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HomeworkScoreListComponent_ng_template_2_div_0_div_4_Template, 5, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, HomeworkScoreListComponent_ng_template_2_div_0_mat_drawer_container_5_Template, 173, 139, "mat-drawer-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, HomeworkScoreListComponent_ng_template_2_div_0_div_6_Template, 1, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.deleteHomeworkData.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.isShowPreviewFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.errorMessage != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.errorMessage == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.isMobile == true);
} }
function HomeworkScoreListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HomeworkScoreListComponent_ng_template_2_div_0_Template, 7, 5, "div", 3);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.homeworkObj);
} }
class HomeworkScoreListComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(dialog, commonService, localize, activeRoute, fb, answerService, zipdataService, sortService, browserStorageService, examFilterService) {
        super(commonService);
        this.dialog = dialog;
        this.commonService = commonService;
        this.localize = localize;
        this.activeRoute = activeRoute;
        this.fb = fb;
        this.answerService = answerService;
        this.zipdataService = zipdataService;
        this.sortService = sortService;
        this.browserStorageService = browserStorageService;
        this.examFilterService = examFilterService;
        //region States/Data model
        this.currentDate = new Date();
        this.homeworkId = '';
        this.backLink = '';
        this.classId = 0;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({});
        this.contentHeight = 0;
        this.backUpHeight = 0;
        this.backToLink = '';
        /* drawer sideNav */
        this.hasBackdrop = false;
        this.mode = 'side';
        /* UI check */
        this.isMobile = false;
        this.isShowActions = true;
        this.isOpenSideNav = true;
        this.isHomeworkFlow = true;
        this.isSortByTimeDESC = false;
        this.isSubmitted = false;
        this.isNotSubmit = false;
        this.isMarked = false;
        this.mustReSubmit = false;
        /* Search */
        this.isLoadingSearch = false;
        /* Data dialog*/
        this.deleteHomeworkData = { homeworkObj: {}, isShow: false };
        /* API, process data */
        this.homeworkUserList = [];
        this.studentObjs = [];
        this.homeworkObj = {};
        this.classObj = {};
        this.isNotTestedYet = false;
        this.isNullSearchData = false;
        this.hasDeadline = false;
        this.isShowPreviewFile = false;
        this.previewFile = {};
        this.errorMessage = '';
        this.keyFilter = '';
        this.dataListStudents = [];
        this.homeworkHashId = '';
    }
    getData() {
        this.initStatusObj();
        this.subscriptions.add(this.answerService.apiAnswerGetStudentsHomeworkGet(Number(this.homeworkId), this.homeworkHashId, this.classId).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            if (response.success == 1) {
                this.errorMessage = '';
                this.zipdataService.convertStudentsHomeworkObj((_a = response.data) === null || _a === void 0 ? void 0 : _a.studentObjs);
                this.homeworkUserList = this.checkStatusStudent((_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.studentObjs) !== null && _c !== void 0 ? _c : new Array());
                this.homeworkObj = this.parseHomeworkData((_e = (_d = response.data) === null || _d === void 0 ? void 0 : _d.homeworkObj) !== null && _e !== void 0 ? _e : {});
                this.classObj = (_g = (_f = response.data) === null || _f === void 0 ? void 0 : _f.classroomObj) !== null && _g !== void 0 ? _g : {};
                if (((_h = this.homeworkObj) === null || _h === void 0 ? void 0 : _h.deadline) && this.homeworkObj.deadline != null && (this.homeworkObj.deadline).toString() != '') {
                    this.hasDeadline = true;
                }
                if (this.homeworkUserList.length == 0) {
                    this.isNotTestedYet = true;
                    this.errorStatusObj('NO_TESTED_YET');
                    return;
                }
                // clone to sort
                this.studentObjs = this.commonService.parseJson(JSON.stringify(this.homeworkUserList));
                this.isNullSearchData = false;
                setTimeout(() => {
                    this.checkFilterValue();
                }, 0);
                this.getStatusSideNav();
                var getSortTimeDESCSetting = this.browserStorageService.getSimpleStorage(this.homeworkId + '_azt_setting_sort_desc_submit_by_time');
                if (getSortTimeDESCSetting && getSortTimeDESCSetting == 'true') {
                    this.isSortByTimeDESC = true;
                    this.dataListStudents = this.checkSortListStudent(99, this.studentObjs);
                }
                else {
                    this.isSortByTimeDESC = false;
                    this.dataListStudents = this.checkSortListStudent((_j = this.classObj.sortType) !== null && _j !== void 0 ? _j : 0, this.studentObjs);
                }
                this.successStatusObj();
            }
            else {
                this.errorMessage = (_k = response.message) !== null && _k !== void 0 ? _k : '';
                this.errorStatusObj((_l = response.message) !== null && _l !== void 0 ? _l : '', true);
            }
        }));
    }
    checkStatusStudent(listStudents) {
        var _a, _b;
        var newList = [];
        for (var i = 0; i < listStudents.length; i++) {
            newList.push(Object.assign(Object.assign({}, listStudents === null || listStudents === void 0 ? void 0 : listStudents[i]), { index: i }));
            if (listStudents[i].confirmedAt && listStudents[i].confirmedAt && newList[i].index == i) {
                // Đã nộp và đã chấm => hiện điểm
                newList[i].isMarked = true;
            }
            else if (listStudents[i].answer != null && !listStudents[i].confirmedAt && newList[i].index == i) {
                // đã nộp - chưa listStudents[i]
                newList[i].isSubmitted = true;
            }
            else if (listStudents[i].answer == null && listStudents[i].answerHistory != null && newList[i].index == i) {
                // yêu cầu nộp lại
                newList[i].mustReSubmit = true;
            }
            else {
                // chưa nộp
                newList[i].isNotSubmit = true;
            }
            newList[i].answerFileObjs = this.castJsonToObj((_b = (_a = listStudents[i].answer) === null || _a === void 0 ? void 0 : _a.files) !== null && _b !== void 0 ? _b : '');
        }
        return newList;
    }
    parseHomeworkData(homeworkObj) {
        var newHomeworkObj = this.castObj(homeworkObj);
        if (newHomeworkObj === null || newHomeworkObj === void 0 ? void 0 : newHomeworkObj.files) {
            newHomeworkObj.fileObjs = this.commonService.parseJson(newHomeworkObj.files);
        }
        this.zipdataService.convertHomeworkObj(newHomeworkObj !== null && newHomeworkObj !== void 0 ? newHomeworkObj : {});
        return newHomeworkObj;
    }
    fillerArr(usersList, searchKey) {
        var _a;
        searchKey = this.commonService.convertVietnameseToEnglish(searchKey);
        var filterList = [];
        for (let i = 0; i < usersList.length; i++) {
            var fullName = this.commonService.convertVietnameseToEnglish((_a = usersList[i].fullName) !== null && _a !== void 0 ? _a : '');
            var status = fullName.toLowerCase().indexOf(searchKey.toLowerCase());
            if (status != -1) {
                filterList.push(usersList[i]);
            }
        }
        return filterList;
    }
    search() {
        var _a, _b;
        this.isLoadingSearch = true;
        var formObject = this.commonService.getFormObj(this.form);
        // tìm kiếm theo tên
        if (formObject.searchContent != '') {
            var testedUserList = this.commonService.parseJson(JSON.stringify(this.checkSortListStudent((_a = this.classObj.sortType) !== null && _a !== void 0 ? _a : 0, this.studentObjs)));
            var filler = this.fillerArr(testedUserList, formObject.searchContent);
            this.dataListStudents = filler;
            this.isLoadingSearch = false;
        }
        else {
            this.isLoadingSearch = false;
            this.homeworkUserList = this.studentObjs;
            this.dataListStudents = this.checkSortListStudent((_b = this.classObj.sortType) !== null && _b !== void 0 ? _b : 0, this.studentObjs);
            this.isNullSearchData = false;
            this.errorStatusObj('NO_TESTED_YET');
        }
    }
    //region filter logic
    toggleFilterSubmitted(event) {
        if (event.checked) {
            this.isSubmitted = true;
        }
        else {
            this.isSubmitted = false;
        }
        this.confirmFilter();
    }
    toggleFilterNotSubmit(event) {
        if (event.checked) {
            this.isNotSubmit = true;
        }
        else {
            this.isNotSubmit = false;
        }
        this.confirmFilter();
    }
    toggleFilterMarked(event) {
        if (event.checked) {
            this.isMarked = true;
        }
        else {
            this.isMarked = false;
        }
        this.confirmFilter();
    }
    toggleFilterReSubmit(event) {
        if (event.checked) {
            this.mustReSubmit = true;
        }
        else {
            this.mustReSubmit = false;
        }
        this.confirmFilter();
    }
    confirmFilter() {
        var _a;
        var filterList1 = [];
        var filterList2 = [];
        var filterList3 = [];
        var filterList4 = [];
        this.saveFilterValue();
        if (this.isSubmitted) {
            filterList1 = this.studentObjs.filter(e => e.isSubmitted == true);
        }
        if (this.isNotSubmit) {
            filterList2 = this.studentObjs.filter(e => e.isNotSubmit == true);
        }
        if (this.isMarked) {
            filterList3 = this.studentObjs.filter(e => e.isMarked == true);
        }
        if (this.mustReSubmit) {
            filterList4 = this.studentObjs.filter(e => e.mustReSubmit == true);
        }
        if (!this.isSubmitted && !this.isNotSubmit && !this.isMarked && !this.mustReSubmit) {
            this.clearFilter();
        }
        else {
            this.homeworkUserList = this.sortIndex([...filterList1, ...filterList2, ...filterList3, ...filterList4]);
        }
        let StudentObj = this.homeworkUserList;
        var getSortTimeDESCSetting = this.browserStorageService.getSimpleStorage(this.homeworkId + '_azt_setting_sort_desc_submit_by_time');
        if (getSortTimeDESCSetting && getSortTimeDESCSetting == 'true') {
            this.dataListStudents = this.checkSortListStudent(99, StudentObj);
        }
        else {
            this.dataListStudents = this.checkSortListStudent((_a = this.classObj.sortType) !== null && _a !== void 0 ? _a : 0, StudentObj);
        }
    }
    clearFilter() {
        var _a;
        this.isSubmitted = false;
        this.isNotSubmit = false;
        this.isMarked = false;
        this.mustReSubmit = false;
        this.homeworkUserList = this.studentObjs;
        var getSortTimeDESCSetting = this.browserStorageService.getSimpleStorage(this.homeworkId + '_azt_setting_sort_desc_submit_by_time');
        if (getSortTimeDESCSetting && getSortTimeDESCSetting == 'true') {
            this.dataListStudents = this.checkSortListStudent(99, this.studentObjs);
        }
        else {
            this.dataListStudents = this.checkSortListStudent((_a = this.classObj.sortType) !== null && _a !== void 0 ? _a : 0, this.studentObjs);
        }
        this.removeFilterStore();
    }
    removeFilterStore() {
        this.examFilterService.removeCustomFilter('homework', this.homeworkId);
    }
    //region Excel| PDF logic
    exportToExcel(typeTable) {
        setTimeout(() => {
            var _a;
            (_a = document.getElementById('table_' + typeTable)) === null || _a === void 0 ? void 0 : _a.click();
        }, 1000);
    }
    exportToPDF() {
        this.commonService.gaEvent('go_to_exp_pdf_homework');
        const myUrl = this.localize.translateRoute('/admin/homework/export-homework') + '/' + this.classId + '/' + this.homeworkId + '/' + this.homeworkHashId;
        window.open(myUrl, '_blank');
    }
    //region Test answer logic
    resizeImg(contentId, width, height) {
        var _a;
        var mediaContent = document.getElementById('media_content_' + contentId);
        var contentWidth = (_a = mediaContent === null || mediaContent === void 0 ? void 0 : mediaContent.offsetWidth) !== null && _a !== void 0 ? _a : 0;
        var calcHeight = 0;
        if (mediaContent) {
            if (contentWidth / width <= 1) {
                calcHeight = height * (contentWidth / width);
                return Math.round(calcHeight);
            }
            else {
                return Math.round(height);
            }
        }
        else {
            return 0;
        }
    }
    sortIndex(listSort) {
        return listSort.sort((one, two) => {
            return Number(one) - Number(two);
        });
    }
    sortByName() {
        this.homeworkUserList = this.sortService.sortFirstNameStudents(this.studentObjs);
    }
    onResize(event) {
        var _a;
        if (event.target.innerWidth < 768) {
            this.contentHeight = ((_a = this.boxContent) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight) + 45;
            this.isMobile = true;
            this.mode = 'over';
            this.hasBackdrop = true;
            this.isOpenSideNav = false;
        }
        else {
            this.contentHeight = 166;
            this.isMobile = false;
            this.mode = 'side';
            this.hasBackdrop = false;
            this.isOpenSideNav = true;
        }
    }
    checkWidth() {
        if (window.innerWidth < 768) {
            this.isMobile = true;
            this.mode = 'over';
            this.hasBackdrop = true;
        }
        else {
            this.isMobile = false;
            this.mode = 'side';
            this.hasBackdrop = false;
        }
    }
    getFileName(file) {
        var _a;
        if (typeof file === 'object' && file.hasOwnProperty('name')) {
            return (_a = file.name) !== null && _a !== void 0 ? _a : '';
        }
        else {
            return '';
        }
    }
    //region UI event, redirect, common function
    sortByTimeDESC(event) {
        var _a;
        if (event.checked) {
            this.isSortByTimeDESC = event.checked;
            this.dataListStudents = this.checkSortListStudent(99, this.commonService.myClone(this.studentObjs));
            this.browserStorageService.saveSimpleStorage(this.homeworkId + '_azt_setting_sort_desc_submit_by_time', event.checked.toString());
        }
        else {
            this.isSortByTimeDESC = event.checked;
            this.dataListStudents = this.checkSortListStudent((_a = this.classObj.sortType) !== null && _a !== void 0 ? _a : 0, this.studentObjs);
            this.browserStorageService.saveSimpleStorage(this.homeworkId + '_azt_setting_sort_desc_submit_by_time', event.checked.toString());
        }
    }
    // redirect
    goToTestReview(studentObj) {
        var _a;
        this.backToLink = '/admin/homework/score-list/' + this.classId + '/' + this.homeworkId + '/' + this.homeworkHashId;
        this.commonService.myNavigationWithQueryString('/admin/homework/mark-exercise/' + ((_a = studentObj.answer) === null || _a === void 0 ? void 0 : _a.id) + '/' + this.homeworkHashId, '?backto=' + encodeURIComponent(this.backToLink));
    }
    goToEditHomework() {
        var _a;
        this.commonService.myNavigation('/admin/homework/add-new-homework/' + ((_a = this.homeworkObj) === null || _a === void 0 ? void 0 : _a.id) + '/' + this.homeworkHashId);
    }
    // enable/disable scroll
    disableScroll() {
        let fixedLeft = window.pageYOffset || document.documentElement.scrollLeft;
        let fixedTop = window.pageXOffset || document.documentElement.scrollTop;
        window.onscroll = () => {
            window.scrollTo(fixedLeft, fixedTop);
        };
    }
    enableScroll() {
        window.onscroll = () => { };
    }
    // show Dialog, popup
    deleteHomework() {
        this.deleteHomeworkData = { homeworkObj: this.homeworkObj, isShow: true };
    }
    closeDeleteHomework(eventEmit) {
        if (eventEmit) {
            // close dialog then redirect to class detail screen
            this.deleteHomeworkData = { homeworkObj: {}, isShow: false };
            this.commonService.myNavigation('/admin/homework/homework-list/' + this.classObj.id);
        }
        else {
            this.deleteHomeworkData = { homeworkObj: {}, isShow: false };
        }
    }
    // UI Event
    onFileClose() {
        this.enableScroll();
        this.isShowPreviewFile = false;
        this.previewFile = {};
    }
    onShowFile(fileData, indexParam) {
        this.isShowPreviewFile = true;
        this.disableScroll();
        this.previewFile = Object.assign(Object.assign({}, fileData), { index: indexParam });
    }
    toggleDrawer() {
        var _a;
        (_a = this.drawer) === null || _a === void 0 ? void 0 : _a.toggle();
        this.isOpenSideNav = !this.isOpenSideNav;
    }
    openDrawer() {
        var _a;
        (_a = this.drawer) === null || _a === void 0 ? void 0 : _a.open();
        this.isOpenSideNav = true;
        this.saveStatusSideNav();
    }
    closeDrawer() {
        var _a;
        (_a = this.drawer) === null || _a === void 0 ? void 0 : _a.close();
        this.isOpenSideNav = false;
        this.saveStatusSideNav();
    }
    saveStatusSideNav() {
        this.examFilterService.saveStatusSideNav('homework', this.isOpenSideNav);
    }
    removeStatusSideNav() {
        this.examFilterService.removeStatusSideNav('homework');
    }
    getStatusSideNav() {
        if (window.innerWidth > 768) {
            let status = this.examFilterService.getStatusSideNav('homework');
            if (status && status == 'close') {
                this.isOpenSideNav = false;
            }
            else {
                this.isOpenSideNav = true;
            }
        }
        else {
            this.isOpenSideNav = false;
        }
    }
    toggleShowActions() {
        this.isShowActions = !this.isShowActions;
        if (this.isMobile) {
            if (this.isShowActions == false) {
                this.contentHeight = 200;
            }
            else {
                this.contentHeight = this.backUpHeight;
            }
        }
    }
    // copy link exercise
    showCopySuccess() {
        this.showSuccessSnack('Sao chép thành công đường dẫn nộp bài');
    }
    copylinkToClipboard(hashIdHomework) {
        let domain = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
        return `${domain}/bai-tap/${hashIdHomework}`;
    }
    goToStudentList() {
        this.commonService.myNavigation('/admin/student/manage-class/0');
    }
    checkSortListStudent(sortType, listStudent) {
        if (sortType == 0) {
            return this.sortService.sortFirstNameStudents(this.commonService.myClone(listStudent));
        }
        else if (sortType == 99) {
            return this.sortService.sortTimeDESC(this.commonService.myClone(listStudent));
        }
        else {
            return this.sortService.sortArrayByMultipleObjectKeyAsc(this.commonService.myClone(listStudent), 'pos', 'id');
        }
    }
    saveFilterValue() {
        let objFilter = {};
        if (this.isMarked) {
            objFilter.isMarked = true;
        }
        if (this.isSubmitted) {
            objFilter.isSubmitted = true;
        }
        if (this.isNotSubmit) {
            objFilter.isNotSubmit = true;
        }
        if (this.mustReSubmit) {
            objFilter.mustReSubmit = true;
        }
        this.examFilterService.setCustomFilter(objFilter, 'homework', this.homeworkId);
    }
    checkFilterValue() {
        let valueFilter = this.examFilterService.getCustomFilter('homework', this.homeworkId);
        if (valueFilter != null && valueFilter != '') {
            if (valueFilter.includes('isMarked')) {
                this.isMarked = true;
            }
            if (valueFilter.includes('isSubmitted')) {
                this.isSubmitted = true;
            }
            if (valueFilter.includes('isNotSubmit')) {
                this.isNotSubmit = true;
            }
            if (valueFilter.includes('mustReSubmit')) {
                this.mustReSubmit = true;
            }
            this.confirmFilter();
        }
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([
            this.activeRoute.params,
            this.activeRoute.queryParams,
        ]).subscribe(([]) => {
            var _a, _b, _c, _d;
            this.homeworkId = (_a = this.activeRoute.snapshot.paramMap.get('id')) !== null && _a !== void 0 ? _a : '';
            this.homeworkHashId = (_b = this.commonService.getMyParam(this.activeRoute, 'hash_id')) !== null && _b !== void 0 ? _b : '';
            this.classId = (_c = Number(this.activeRoute.snapshot.paramMap.get('class_id'))) !== null && _c !== void 0 ? _c : 0;
            if (this.commonService.getMyQueryParam('backTo')) {
                this.backLink = (_d = this.commonService.getMyQueryParam('backTo')) !== null && _d !== void 0 ? _d : '';
            }
            else {
                this.backLink = '/admin/homework/classes/1';
            }
            this.backToLink = '/admin/homework/score-list/' + this.classId + '/' + this.homeworkId + '/' + this.homeworkHashId;
            this.form = this.fb.group({
                searchContent: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            });
            this.initStatusObj();
            this.getData();
            this.checkWidth();
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_homework_submit_list_title',
            description: 'lang_cms_homework_submit_list_description',
            image: 'lang_cms_homework_image',
        });
        this.commonService.gaEvent('teacher_homework_score');
        super.ngOnInit();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            var _a, _b;
            if (this.isMobile) {
                this.contentHeight = ((_a = this.boxContent) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight) + 45;
                this.backUpHeight = ((_b = this.boxContent) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetHeight) + 45;
            }
            else {
                this.contentHeight = 166;
            }
        }, 1000);
    }
}
HomeworkScoreListComponent.ɵfac = function HomeworkScoreListComponent_Factory(t) { return new (t || HomeworkScoreListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_13__.LocalizeRouterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api_api_answer_service__WEBPACK_IMPORTED_MODULE_3__.AnswerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_4__.ZipdataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_sort_service__WEBPACK_IMPORTED_MODULE_5__.SortService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_6__.BrowserStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_exam_filter_service__WEBPACK_IMPORTED_MODULE_7__.ExamFilterService)); };
HomeworkScoreListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: HomeworkScoreListComponent, selectors: [["app-homework-submit-list"]], viewQuery: function HomeworkScoreListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.boxContent = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 4, consts: [[3, "headerTitle", "back_link", "removeFilter"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [4, "ngIf"], [3, "data", "closeDialog", 4, "ngIf"], [1, "container-fluid", "py-3", 3, "resize"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "tested_list_container", "style", "border-radius: 5px;", 3, "hasBackdrop", 4, "ngIf"], ["class", "py-4", 4, "ngIf"], [3, "data", "closeDialog"], [3, "fileOption", "closePreview"], [1, "alert", "alert-danger"], [1, "tested_list_container", 2, "border-radius", "5px", 3, "hasBackdrop"], [1, "test", 2, "background-color", "#ecf0f5", "border", "none", 3, "mode", "opened", "ngClass"], ["drawer", ""], [1, "container-fluid", "box-content", "pt-2", "pb-2"], [1, "row"], [1, "col-md-7"], [1, "text-left"], [1, "homework_title", "mt-2", "mb-2"], [1, "col-md-4", "block-btn"], [1, "d-flex", "justify-content-end", "align-self-end"], ["tabindex", "-1", "mat-button", "", 1, "btn", 2, "font-size", "10px", "padding-top", "0", "color", "#0eafc0", 3, "cdkCopyToClipboard", "click"], [2, "font-size", "12px", "padding-top", "5px"], [1, "col-md-1", "p-0", "d-flex"], [1, "m-auto", 3, "fileName", "linkUrl"], [1, "mb-1", 2, "font-size", "14px", "color", "#8E8E8E"], ["class", "mb-1", "style", "font-size: 14px; color: #0EAFC0;", 4, "ngIf"], [3, "type", "typeObj", "id", "permissionObj"], [3, "ngIf"], [1, "text-center"], ["class", "clickable", "style", "user-select: none;", 3, "click", 4, "ngIf"], [2, "background-color", "#ecf0f5", "overflow", "hidden"], [1, "container-fluid", "content-zone", 2, "background-color", "#ecf0f5", 3, "ngClass"], [1, "box-content", "py-2"], ["boxContent", ""], [1, "row", "pl-0", "pr-0", "ml-0", "mr-0", 3, "ngClass"], [1, "col-md-12", "pl-0", "pr-0"], [1, "row", "pl-0", "pr-0", "ml-0", "mr-0", "justify-content-between", 3, "hidden"], [1, "col-sm-6", "d-flex"], ["class", "clickable", 3, "matTooltip", "click", 4, "ngIf"], [1, "mb-0", "ml-3", "align-self-center"], [1, "clickable", "link-stu", 2, "vertical-align", "middle", 3, "routerLink", "matTooltip"], [2, "vertical-align", "middle", "color", "#646464a1", "height", "20px", "font-size", "20px", "width", "20px"], [1, "truncate_custom", 2, "vertical-align", "middle", 3, "matTooltip"], [1, "col-sm-6", "align-self-center"], [1, "d-flex", "justify-content-end"], [1, "col-6", "pl-0", "pr-0", "text-right"], [2, "position", "relative", 3, "formGroup"], ["type", "text", "formControlName", "searchContent", 1, "input-search", 3, "placeholder", "keyup.enter"], [1, "search-icon", "clickable", 3, "click"], [1, "search-ver", 2, "vertical-align", "middle", "font-size", "18px", "height", "16px", "width", "18px"], [1, "ml-2", "mr-2", "text-center"], [1, "filter_btn"], ["mat-button", "", 1, "menu-button", 3, "matMenuTriggerFor"], [2, "vertical-align", "middle", "color", "#828282"], [2, "font-size", "16px", "height", "16px"], ["xPosition", "before"], ["beforeMenu", "matMenu"], ["mat-menu-item", "", 1, "cursorDefault", "mb-2", 2, "height", "30px", "line-height", "30px", 3, "click"], [2, "vertical-align", "middle"], ["color", "primary", 2, "vertical-align", "middle", "margin-left", "5px", 3, "checked", "change"], [1, "d-flex", "justify-content-end", "px-2"], ["mat-menu-item", "", 1, "clickable", 2, "height", "30px", "line-height", "30px", 3, "click"], [1, "filter_btn", "bg-light"], ["mat-button", "", 1, "menu-button", "pl-0", "pr-0", "pb-0", 2, "min-width", "auto", 3, "matMenuTriggerFor"], [2, "vertical-align", "middle", "color", "#333333"], ["menu", "matMenu"], ["mat-menu-item", "", 1, "clickable", "mb-2", 2, "height", "30px", "line-height", "30px", 3, "click"], [1, "menu-icon"], [2, "vertical-align", "middle", "color", "#828282", 3, "matTooltip"], ["color", "primary", 2, "vertical-align", "middle", "margin-left", "10px", 3, "checked", "change"], [1, "col-12", 3, "hidden"], [1, "col-6"], [1, "col-5", "block-btn"], [1, "col-1", "p-0", "d-flex"], [1, "col-12"], [1, "col-8"], [1, "col-4"], [1, "d-flex", "justify-content-end", "align-self-center"], ["class", "clickable d-flex align-items-center", "style", "user-select: none; font-size: 16px;", 3, "routerLink", "queryParams", 4, "ngIf"], ["class", "clickable ml-3 d-flex align-items-center", "style", "user-select: none; font-size: 16px;", 3, "click", 4, "ngIf"], ["class", "row mt-3", 4, "ngIf"], [1, "row", "mt-3", "ml-0", "mr-0", 2, "width", "100%"], ["class", "col-12", 4, "ngIf", "ngIfElse"], ["dd", ""], ["class", "box-content py-2", 4, "ngIf"], [3, "studentList", "homeworkObj", "currentDate", "typeTable"], [1, "mb-1", 2, "font-size", "14px", "color", "#0EAFC0"], ["class", "row ml-0 mr-0 files_zone mt-3", 4, "ngIf"], ["id", "description_content", "class", "description text-left align-self-center py-2 px-3", 3, "innerHTML", 4, "ngIf"], [1, "d-flex", "justify-content-end", "align-self-center", "mt-2"], ["class", "clickable", "style", "user-select: none; font-size: 16px;", 3, "routerLink", "queryParams", 4, "ngIf"], ["class", "clickable ml-3", "style", "user-select: none; font-size: 16px;", 3, "click", 4, "ngIf"], [1, "row", "ml-0", "mr-0", "files_zone", "mt-3"], ["class", "col-12 col-sm-12 col-md-12 align-self-center", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-12", "align-self-center"], [1, "file_obj", "d-flex", "text-left", "py-2", "clickable", 3, "click"], [2, "font-size", "18px", "vertical-align", "middle", "color", "#3C8DBC", "margin-right", "3px", "height", "20px", "width", "20px"], [1, "truncate", 2, "vertical-align", "middle", "color", "#3C8DBC", 3, "matTooltip"], ["id", "description_content", 1, "description", "text-left", "align-self-center", "py-2", "px-3", 3, "innerHTML"], [1, "clickable", 2, "user-select", "none", "font-size", "16px", 3, "routerLink", "queryParams"], [2, "vertical-align", "middle", "color", "#8E8E8E"], [2, "vertical-align", "middle", "color", "#8E8E8E", "font-size", "14px"], [1, "clickable", "ml-3", 2, "user-select", "none", "font-size", "16px", 3, "click"], [1, "clickable", 2, "user-select", "none", 3, "click"], [1, "clickable", 3, "matTooltip", "click"], [2, "vertical-align", "middle", "color", "#646464", "transform", "rotateY(180deg)"], [2, "vertical-align", "middle", "color", "#646464"], [1, "clickable", "d-flex", "align-items-center", 2, "user-select", "none", "font-size", "16px", 3, "routerLink", "queryParams"], [2, "vertical-align", "middle", "color", "#8E8E8E", "font-size", "19px"], [1, "clickable", "ml-3", "d-flex", "align-items-center", 2, "user-select", "none", "font-size", "16px", 3, "click"], [2, "vertical-align", "middle", "color", "#bd3737", "font-size", "19px"], [2, "vertical-align", "middle", "color", "#bd3737", "font-size", "14px"], ["class", "row ml-0 mr-0  files_zone mt-3", 4, "ngIf"], ["class", "description text-left align-self-center py-2 px-3", 3, "innerHTML", 4, "ngIf"], [1, "description", "text-left", "align-self-center", "py-2", "px-3", 3, "innerHTML"], [1, "row", "mt-3"], [1, "col-4", "pl-0"], ["mat-button", "", 1, "menu-button", "menu-button-mb", 3, "matMenuTriggerFor"], [2, "vertical-align", "middle", "color", "#0EAFC0"], [1, "mb-1", "h6", 2, "font-weight", "400", "font-size", "14px"], [1, "row", "align-items-center", "mx-auto", 2, "width", "100%"], [1, "col-10", "p-0", "text-left"], [1, "col-2", "p-0", "pb-2", "d-flex", "justify-content-end"], [1, "text-center", "mt-3"], [1, "h4"], [3, "isSortByTime", "backToLink", "searchKey", "studentLists", "isNotTestedYet", "isOpenSideNav", "obj", "goToResult"], [1, "py-4"]], template: function HomeworkScoreListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("removeFilter", function HomeworkScoreListComponent_Template_header_backend_removeFilter_0_listener() { return ctx.removeFilterStore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeworkScoreListComponent_azt_loading_effect_1_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HomeworkScoreListComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("headerTitle", (ctx.homeworkObj == null ? null : ctx.homeworkObj.name) || "")("back_link", ctx.backLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r1);
    } }, styles: [".tested_list_container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: calc(100vh - 77px - 0.5rem);\n}\n\n  .mat-drawer-inner-container::-webkit-scrollbar {\n  width: 8px;\n  margin: 5px;\n}\n\n  .mat-drawer-inner-container::-webkit-scrollbar-thumb {\n  background: #cfcece;\n  border-radius: 10px;\n}\n\n  .mat-drawer-inner-container {\n  overflow: auto !important;\n}\n\n.link-stu[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.link-stu[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n\n.box-content[_ngcontent-%COMP%] {\n  background: inherit;\n  background-color: #f9f9f9;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e9e9e9;\n  border-radius: 5px;\n  box-shadow: none;\n}\n\n.exam_info[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n}\n\n.exam_title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #646464;\n}\n\n.w-30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.w-60[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n  color: #0EAFC0;\n}\n\n.input-search[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #eaeaeae3;\n  padding: 0.1rem 0.55rem;\n  border-radius: 3px;\n  font-size: 12px;\n}\n\n.input-search[_ngcontent-%COMP%]::placeholder {\n  opacity: 0.7;\n}\n\n.input-search[_ngcontent-%COMP%]:focus {\n  border: 1px solid #0EAFC0;\n  outline: none;\n}\n\n.btn_action[_ngcontent-%COMP%] {\n  background: inherit;\n  background-color: #fafafa;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #f1f1f1;\n  border-radius: 0px;\n  box-shadow: none;\n}\n\n.filter_btn[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: normal !important;\n  border: 1px solid #eaeaeae3;\n  border-radius: 3px;\n  text-transform: none;\n  padding-right: 6px;\n  padding-bottom: 3px;\n  color: #414141;\n  line-height: 20px;\n}\n\n.content-zone[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.scrollable-content[_ngcontent-%COMP%] {\n  height: calc(100vh - 466px);\n  overflow: hidden;\n}\n\n.box-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n\n.student-item[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n}\n\n.student-item[_ngcontent-%COMP%]   .enterClsWrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.student-item[_ngcontent-%COMP%]   .deleteBtn[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.stdimg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: 10px;\n}\n\n.stdinfo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  color: #828282;\n}\n\n.truncate_custom[_ngcontent-%COMP%] {\n  max-width: 80%;\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.homework_title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #646464;\n  word-break: break-word;\n}\n\n.files_zone[_ngcontent-%COMP%], .description[_ngcontent-%COMP%] {\n  background: inherit;\n  background-color: #fafafa;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #f1f1f1;\n  border-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  box-shadow: none;\n  font-size: 13px;\n  word-break: break-word;\n}\n\n.cursorDefault[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n@media (max-width: 756px) {\n  .tested_list_container[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .truncate_custom[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n}\n\n.input-search-mb[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 2px;\n}\n\n.menu-button-mb[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n  .truncate {\n  word-break: break-word !important;\n  white-space: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQ0FBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0FBSUo7O0FBRkE7RUFDRSxXQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0FBTUY7O0FBSkE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUdBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxpQkFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFTSjs7QUFQQTtFQUNJLFVBQUE7QUFVSjs7QUFSQTtFQUNJLFVBQUE7QUFXSjs7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FBWUo7O0FBVEE7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVhJO0VBQ0ksWUFBQTtBQWFSOztBQVRBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FBWUo7O0FBVkE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUdBLGdCQUFBO0FBYUo7O0FBVkk7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBYVI7O0FBVkE7RUFDSSxZQUFBO0FBYUo7O0FBWEE7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0FBY0o7O0FBWkE7RUFDSSxzQkFBQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFlTDs7QUFWQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQWFKOztBQVpNO0VBQ0UsYUFBQTtBQWNSOztBQVhJO0VBQ0UsYUFBQTtBQWFOOztBQVRBO0VBQ0ksYUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFZTjs7QUFWQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFhSjs7QUFYQTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtBQWNKOztBQVpBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZUo7O0FBYkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBZ0JKOztBQWRBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBR0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFpQko7O0FBZkE7RUFDSSxlQUFBO0FBa0JKOztBQWZBO0VBQ0k7SUFDSSxZQUFBO0VBa0JOOztFQWhCTTtJQUNJLGNBQUE7RUFtQlY7QUFDRjs7QUFqQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQW1CUjs7QUFqQkk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFvQlI7O0FBbEJBO0VBQ0ksaUNBQUE7RUFDQSw2QkFBQTtBQXFCSiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0ZWRfbGlzdF9jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzdweCAtIDAuNXJlbSk7XG59XG46Om5nLWRlZXAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDhweDtcbiAgICBtYXJnaW46IDVweDtcbn1cbjo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA3LCAyMDYsIDIwNik7IFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG46Om5nLWRlZXAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVye1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG59XG4ubGluay1zdHV7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmxpbmstc3R1OmhvdmVye1xuICBjb2xvcjogIzAwN2JmZjtcbn1cbi5ib3gtY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDEpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjMzLCAyMzMsIDIzMywgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5leGFtX2luZm8ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuLmV4YW1fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzY0NjQ2NDtcbn1cbi53LTMwIHtcbiAgICB3aWR0aDogMzAlO1xufVxuLnctNjAge1xuICAgIHdpZHRoOiA2MCU7XG59XG4uc2VhcmNoLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIGNvbG9yOiAjMEVBRkMwO1xufVxuXG4uaW5wdXQtc2VhcmNoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhZTM7XG4gICAgcGFkZGluZzogLjFyZW0gLjU1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxufVxuXG4uaW5wdXQtc2VhcmNoOmZvY3VzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMEVBRkMwO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uYnRuX2FjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDEpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjQxLCAyNDEsIDI0MSwgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5maWx0ZXJfYnRuIHtcbiAgICAubWVudS1idXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYWUzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgIGNvbG9yOiAjNDE0MTQxO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB9XG59XG4uY29udGVudC16b25lIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uc2Nyb2xsYWJsZS1jb250ZW50IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0NjZweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ib3gtaXRlbXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgIC8vICY6bGFzdC1jaGlsZHtcbiAgICAgLy8gICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAvLyB9XG4gfVxuLnN0dWRlbnQtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAuZW50ZXJDbHNXcmFwe1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgIFxuICAgIC5kZWxldGVCdG57XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbn1cblxuLnN0ZGltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbi5zdGRpbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogYXV0bztcbn1cbi5tZW51LWljb257XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXG4gICAgY29sb3I6IzgyODI4MjsgXG59XG4udHJ1bmNhdGVfY3VzdG9tIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmhvbWV3b3JrX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM2NDY0NjQ7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cbi5maWxlc196b25lLCAuZGVzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAxKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MSwgMjQxLCAyNDEsIDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG4uY3Vyc29yRGVmYXVsdCB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzU2cHgpIHtcbiAgICAudGVzdGVkX2xpc3RfY29udGFpbmVye1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnRydW5jYXRlX2N1c3RvbSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaW5wdXQtc2VhcmNoLW1iIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICB9XG4gICAgLm1lbnUtYnV0dG9uLW1ie1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbjo6bmctZGVlcCAudHJ1bmNhdGV7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ }),

/***/ 61029:
/*!****************************************************************!*\
  !*** ./src/app/homework/mark-exercise/controller.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkExercise": () => (/* binding */ MarkExercise)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _utils_clean_result_dialog_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/clean-result-dialog/controller.component */ 81714);
/* harmony import */ var _utils_notice_dialog_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/notice-dialog/controller.component */ 85617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_auto_api_common_api_api_answer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api/api/answer.service */ 37234);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_permission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/permission.service */ 15431);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var src_app_core_services_cdn_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/cdn.service */ 15043);
/* harmony import */ var src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/zipdata.service */ 2366);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/api/upload.api.service */ 29401);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 59421);
/* harmony import */ var _azota_ui_azt_create_avatar_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../azota-ui/azt-create-avatar/controller.component */ 64123);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
























function MarkExercise_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 2, "lang_homework_mark_exercise_history_submit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r1);
} }
function MarkExercise_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MarkExercise_ng_container_13_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10); const item_r7 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r9.getDataHistory(item_r7.id ? item_r7.id.toString() : ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 3, "lang_homework_mark_exercise_times"), " ", i_r8 + 1, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](5, 5, item_r7.createdAt, "dd/MM/yyyy HH:mm:ss"), "");
} }
function MarkExercise_h4_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "azt-create-avatar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate2"]("matTooltip", "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 5, "lang_homework_mark_exercise_teacher_mark"), " ", ": " + ctx_r11.markedByObj.fullName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nameCreateAvatar", ctx_r11.markedByObj.fullName)("size", 25)("linkAvatar", ctx_r11.markedByObj.avatar);
} }
function MarkExercise_h4_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, MarkExercise_h4_14_span_1_Template, 3, 7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.isMarked);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", ctx_r3.studentObj.fullName, ", ", ctx_r3.classroomObj.name, " ");
} }
function MarkExercise_azt_loading_effect_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "azt-loading-effect", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "mytranslate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("customText", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 1, "lang_homework_mark_exercise_loading_data_mark"));
} }
function MarkExercise_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 18)(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 1, ctx_r5.errorMessage));
} }
function MarkExercise_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "iframe", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, ctx_r6.iframeSrc), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeResourceUrl"]);
} }
class MarkExercise extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(activeRoute, answerService, baseApiService, commonService, permissionService, dialog, cdnService, zipdataService, envService, apiUploadService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.answerService = answerService;
        this.baseApiService = baseApiService;
        this.commonService = commonService;
        this.permissionService = permissionService;
        this.dialog = dialog;
        this.cdnService = cdnService;
        this.zipdataService = zipdataService;
        this.envService = envService;
        this.apiUploadService = apiUploadService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
        this.result = {};
        this.answerId = 0;
        this.homeworkID = '';
        this.historyId = '';
        this.iframeSrc = '';
        this.isMarked = false;
        this.jsonData = {};
        this.errorMessage = '';
        // files anh bai lam
        this.files = [];
        this.classID = '';
        this.homeworkObj = {};
        this.studentName = '';
        this.markedByObj = {};
        this.studentObj = {};
        this.classroomObj = {};
        // mark tools:
        this.score = 0;
        this.mnoteJsonData = {};
        this.pagesCount = 0;
        this.backtoLink = '';
        this.hasSendDataToIframe = false;
        this.hasLoadedData = false;
        this.historyAnwerObjs = [];
        this.countLoad = 1;
        this.homeworkHashId = '';
        this.handleIframe = (event) => {
            var _a;
            if (event.data.cmd == 'MNoteJson') {
                this.initStatusObj();
                this.mnoteJsonData = event.data.data;
                this.uploadAll((_a = this.mnoteJsonData.pages) !== null && _a !== void 0 ? _a : [], event.data.data.point);
            }
            if (event.data.cmd == 'MNoteReSubmit') {
                console.log('listend res submit');
                this.handleOpenReSubmit();
            }
            if (event.data == 'MNoteLoadComplete') {
                if (this.hasLoadedData) {
                    this.hasSendDataToIframe = true;
                    if (this.historyId == '') {
                        this.sendDataToIframe();
                    }
                    else {
                        this.sendDataToIframeHistory();
                    }
                }
                else {
                    this.hasSendDataToIframe = false;
                }
            }
        };
    }
    onPopState(event) {
        this.goBack();
    }
    uploadDrawBase64ToCDN(base64Data, index, dataPoint) {
        let blob = this.baseApiService.dataURItoBlob(base64Data);
        this.apiUploadService.commonUploadForMarkResult(blob, `essay_note_${index}_${this.answerId}.png`, 'image/png', 10000).subscribe((response) => {
            var _a, _b;
            if (response.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpEventType.UploadProgress) {
                if (response.success == 1) {
                    if ((_a = this.mnoteJsonData.pages) === null || _a === void 0 ? void 0 : _a[index]) {
                        this.mnoteJsonData.pages[index].draw = (_b = response.data) === null || _b === void 0 ? void 0 : _b.url;
                    }
                    this.pagesCount--;
                    if (this.pagesCount == 0) {
                        this.remark(this.answerId, dataPoint, this.mnoteJsonData);
                    }
                }
                else {
                    this.showErrorSnack('Lưu dữ liệu chấm bài không thành công!');
                    this.stopStatusObj();
                }
            }
        });
    }
    uploadAll(arr, dataPoint) {
        this.pagesCount = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].draw) {
                this.pagesCount++;
            }
        }
        if (this.pagesCount == 0) {
            // ALL DONE
            this.remark(this.answerId, dataPoint, this.mnoteJsonData);
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].draw) {
                    this.uploadDrawBase64ToCDN(arr[i].draw, i, dataPoint);
                }
            }
        }
    }
    reloadPage() {
        location.reload();
    }
    sendDataToIframe() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const mNote = document.getElementById('mNote');
        const noteIframe = mNote ? mNote.contentWindow : null;
        if (noteIframe !== null) {
            let curAnswerObj = this.result.hasOwnProperty('answerObj') ? (_a = this.castObj(this.result.answerObj)) !== null && _a !== void 0 ? _a : {} : {};
            // convert Cdn
            if (this.result.hasOwnProperty('answerObj')) {
                let resultAnswer = this.commonService.parseJson((_b = curAnswerObj.result) !== null && _b !== void 0 ? _b : '');
                // check result
                if (resultAnswer != null) {
                    let arrPage = (_d = (_c = resultAnswer.pages) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0;
                    for (let i = 0; i < arrPage; i++) {
                        if ((_e = resultAnswer === null || resultAnswer === void 0 ? void 0 : resultAnswer.pages) === null || _e === void 0 ? void 0 : _e[i].backgroundImage) {
                            resultAnswer.pages[i].backgroundImage = this.cdnService.getMyCdn((_f = resultAnswer.pages[i].backgroundImage) !== null && _f !== void 0 ? _f : '');
                        }
                        if ((_g = resultAnswer.pages) === null || _g === void 0 ? void 0 : _g[i].draw) {
                            resultAnswer.pages[i].draw = this.cdnService.getMyCdn(resultAnswer.pages[i].draw);
                        }
                    }
                    resultAnswer = JSON.stringify(resultAnswer);
                    curAnswerObj.result = resultAnswer;
                }
                let fileAnswer = this.commonService.parseJson((_h = curAnswerObj.files) !== null && _h !== void 0 ? _h : '');
                // check file
                if (fileAnswer != null) {
                    for (let j = 0; j < fileAnswer.length; j++) {
                        if (fileAnswer[j].url) {
                            fileAnswer[j].url = this.cdnService.getMyCdn(fileAnswer[j].url);
                        }
                        if (fileAnswer[j].thumb) {
                            fileAnswer[j].thumb = this.cdnService.getMyCdn(fileAnswer[j].thumb);
                        }
                    }
                    fileAnswer = JSON.stringify(fileAnswer);
                    curAnswerObj.files = fileAnswer;
                }
            }
            let curStudentObj = this.result.hasOwnProperty('studentObj') ? this.result.studentObj : {};
            let curClassroomObj = this.result.hasOwnProperty('classroomObj') ? this.result.classroomObj : {};
            let curHomeworkObj = this.result.hasOwnProperty('homeworkObj') ? this.result.homeworkObj : {};
            let jsonResultObj = this.commonService.parseJson((_j = curAnswerObj.result) !== null && _j !== void 0 ? _j : '');
            if (this.jsonData && this.jsonData.hasOwnProperty('pages')) {
                for (let i = 0; i < ((_l = (_k = this.jsonData.pages) === null || _k === void 0 ? void 0 : _k.length) !== null && _l !== void 0 ? _l : 0); i++) {
                    if ((_m = this.jsonData.pages) === null || _m === void 0 ? void 0 : _m[i].hasOwnProperty('backgroundImage')) {
                        this.jsonData.pages[i].backgroundImage = this.cdnService.getMyCdn((_o = this.jsonData.pages[i].backgroundImage) !== null && _o !== void 0 ? _o : '');
                    }
                    if ((_p = this.jsonData.pages) === null || _p === void 0 ? void 0 : _p[i].hasOwnProperty('draw')) {
                        this.jsonData.pages[i].draw = this.cdnService.getMyCdn((_q = this.jsonData.pages[i].draw) !== null && _q !== void 0 ? _q : '');
                    }
                }
            }
            if (this.isMarked) {
                this.jsonData.cmd = 'initMNote';
                this.jsonData.mode = 'edit';
                this.jsonData.answer_obj = curAnswerObj;
                this.jsonData.student_obj = curStudentObj;
                this.jsonData.classroom_obj = curClassroomObj;
                this.jsonData.homework_obj = curHomeworkObj;
                if (jsonResultObj && jsonResultObj.hasOwnProperty('hideMark')) {
                    this.jsonData.hideMark = jsonResultObj.hideMark;
                }
                noteIframe.postMessage(this.jsonData, '*');
            }
            else {
                let imgArr = [];
                this.files.forEach(file => {
                    imgArr.push({ backgroundImage: file.url });
                });
                let curJson = {
                    cmd: 'initMNote',
                    mode: 'edit',
                    pages: imgArr,
                    answer_obj: curAnswerObj,
                    student_obj: curStudentObj,
                    classroom_obj: curClassroomObj,
                    homework_obj: curHomeworkObj
                };
                if (jsonResultObj && jsonResultObj.hasOwnProperty('hideMark')) {
                    curJson.hideMark = jsonResultObj.hideMark;
                }
                noteIframe.postMessage(curJson, '*');
            }
        }
    }
    sendDataToIframeHistory() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const mNote = document.getElementById('mNote');
        if (mNote && this.countLoad == 1) {
            mNote.src += '';
        }
        const noteIframe = mNote ? mNote.contentWindow : null;
        if (noteIframe !== null) {
            let curAnswerObj = this.result.hasOwnProperty('answerObj') ? (_a = this.castObj(this.result.answerObj)) !== null && _a !== void 0 ? _a : {} : {};
            // convert Cdn
            if (this.result.hasOwnProperty('answerObj')) {
                let resultAnswer = this.commonService.parseJson((_b = curAnswerObj.result) !== null && _b !== void 0 ? _b : '');
                // check result
                if (resultAnswer != null) {
                    for (let i = 0; i < resultAnswer.pages.length; i++) {
                        if (resultAnswer.pages[i].backgroundImage) {
                            resultAnswer.pages[i].backgroundImage = this.cdnService.getMyCdn(resultAnswer.pages[i].backgroundImage);
                        }
                        if (resultAnswer.pages[i].draw) {
                            resultAnswer.pages[i].draw = this.cdnService.getMyCdn(resultAnswer.pages[i].draw);
                        }
                    }
                    resultAnswer = JSON.stringify(resultAnswer);
                    curAnswerObj.result = resultAnswer;
                }
                let fileAnswer = this.commonService.parseJson((_c = curAnswerObj.files) !== null && _c !== void 0 ? _c : '');
                // check file
                if (fileAnswer != null) {
                    for (let j = 0; j < fileAnswer.length; j++) {
                        if (fileAnswer[j].url) {
                            fileAnswer[j].url = this.cdnService.getMyCdn(fileAnswer[j].url);
                        }
                        if (fileAnswer[j].thumb) {
                            fileAnswer[j].thumb = this.cdnService.getMyCdn(fileAnswer[j].thumb);
                        }
                    }
                    fileAnswer = JSON.stringify(fileAnswer);
                    curAnswerObj.files = fileAnswer;
                }
            }
            let curStudentObj = this.studentObj;
            let curClassroomObj = this.classroomObj;
            let curHomeworkObj = this.homeworkObj;
            let jsonResultObj = this.commonService.parseJson((_d = curAnswerObj.result) !== null && _d !== void 0 ? _d : '');
            if (this.jsonData && this.jsonData.hasOwnProperty('pages')) {
                for (let i = 0; i < ((_f = (_e = this.jsonData.pages) === null || _e === void 0 ? void 0 : _e.length) !== null && _f !== void 0 ? _f : 0); i++) {
                    if ((_g = this.jsonData.pages) === null || _g === void 0 ? void 0 : _g[i].hasOwnProperty('backgroundImage')) {
                        this.jsonData.pages[i].backgroundImage = this.cdnService.getMyCdn((_h = this.jsonData.pages[i].backgroundImage) !== null && _h !== void 0 ? _h : '');
                    }
                    if ((_j = this.jsonData.pages) === null || _j === void 0 ? void 0 : _j[i].hasOwnProperty('draw')) {
                        this.jsonData.pages[i].draw = this.cdnService.getMyCdn((_k = this.jsonData.pages[i].draw) !== null && _k !== void 0 ? _k : '');
                    }
                }
            }
            if (this.isMarked) {
                this.jsonData.cmd = 'initMNote';
                this.jsonData.mode = 'view';
                this.jsonData.answer_obj = curAnswerObj;
                this.jsonData.student_obj = curStudentObj;
                this.jsonData.classroom_obj = curClassroomObj;
                this.jsonData.homework_obj = curHomeworkObj;
                if (jsonResultObj && jsonResultObj.hasOwnProperty('hideMark')) {
                    this.jsonData.hideMark = jsonResultObj.hideMark;
                }
                noteIframe.postMessage(this.jsonData, '*');
            }
            else {
                let imgArr = [];
                this.files.forEach(file => {
                    imgArr.push({ backgroundImage: file.url });
                });
                let curJson = {
                    cmd: 'initMNote',
                    mode: 'view',
                    pages: imgArr,
                    answer_obj: curAnswerObj,
                    student_obj: curStudentObj,
                    classroom_obj: curClassroomObj,
                    homework_obj: curHomeworkObj
                };
                if (jsonResultObj && jsonResultObj.hasOwnProperty('hideMark')) {
                    curJson.hideMark = jsonResultObj.hideMark;
                }
                noteIframe.postMessage(curJson, '*');
            }
        }
    }
    goBack() {
        if (this.backtoLink) {
            this.commonService.myNavigation(this.backtoLink);
        }
        else {
            this.commonService.myNavigation('/admin/homework/score-list/' + this.classID + '/' + this.homeworkID + '/' + this.homeworkObj.hashId);
        }
        let body = document.body;
        let html = document.getElementById('azota-app-html');
        // remove style html
        html === null || html === void 0 ? void 0 : html.classList.remove('overflow-hidden');
        html === null || html === void 0 ? void 0 : html.classList.remove('height-100');
        // remove style body
        body.classList.remove('overflow-hidden');
        body.classList.remove('height-100');
    }
    getHistoryObjs(answerId) {
        this.initStatusObj();
        this.answerService.apiAnswerGetHistoryObjsGet(this.homeworkHashId, answerId).subscribe((result) => {
            var _a, _b, _c;
            if (result.success == 1) {
                this.historyAnwerObjs = (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.objs) !== null && _b !== void 0 ? _b : new Array();
            }
            else {
                this.errorMessage = (_c = result.message) !== null && _c !== void 0 ? _c : '';
            }
            this.stopStatusObj();
        });
    }
    getDataHistory(historyId) {
        this.historyId = historyId;
        this.errorMessage = '';
        this.countLoad = 1;
        this.answerService.apiAnswerGetHistoryObjGet(this.homeworkHashId, this.answerId, parseInt(historyId, 10)).subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            if (result.success == 1) {
                this.zipdataService.convertSubmittedAnswersHistoryObj((_a = result.data) === null || _a === void 0 ? void 0 : _a.answerObj);
                this.result = (_b = result.data) !== null && _b !== void 0 ? _b : {};
                this.markedByObj = (_d = (_c = result.data) === null || _c === void 0 ? void 0 : _c.markedByObj) !== null && _d !== void 0 ? _d : {};
                this.score = (_g = (_f = (_e = result.data) === null || _e === void 0 ? void 0 : _e.answerObj) === null || _f === void 0 ? void 0 : _f.point) !== null && _g !== void 0 ? _g : 0;
                this.files = this.commonService.parseJson((_k = (_j = (_h = result.data) === null || _h === void 0 ? void 0 : _h.answerObj) === null || _j === void 0 ? void 0 : _j.files) !== null && _k !== void 0 ? _k : '');
                // convert cdn
                if (this.files != null) {
                    for (let i = 0; i < this.files.length; i++) {
                        this.files[i].url = this.cdnService.getMyCdn((_m = (_l = this.files) === null || _l === void 0 ? void 0 : _l[i].url) !== null && _m !== void 0 ? _m : '');
                        this.files[i].thumb = this.cdnService.getMyCdn((_p = (_o = this.files) === null || _o === void 0 ? void 0 : _o[i].thumb) !== null && _p !== void 0 ? _p : '');
                    }
                }
                this.handleJsonData();
                this.hasLoadedData = true;
                if (this.countLoad == 1) {
                    this.hasSendDataToIframe = false;
                }
                if (this.hasSendDataToIframe == false) {
                    this.hasSendDataToIframe = true;
                    this.sendDataToIframeHistory();
                }
                this.successStatusObj();
                this.countLoad++;
            }
            else {
                this.errorMessage = (_q = result.message) !== null && _q !== void 0 ? _q : '';
                this.stopStatusObj();
            }
        });
    }
    handleJsonData() {
        var _a, _b, _c, _d, _e, _f, _g;
        this.jsonData = {};
        if (!((_b = (_a = this.result) === null || _a === void 0 ? void 0 : _a.answerObj) === null || _b === void 0 ? void 0 : _b.confirmedAt) && !((_d = (_c = this.result) === null || _c === void 0 ? void 0 : _c.answerObj) === null || _d === void 0 ? void 0 : _d.result)) {
            this.isMarked = false;
        }
        if ((_e = this.result.answerObj) === null || _e === void 0 ? void 0 : _e.confirmedAt) {
            // Da dc cham
            this.isMarked = true;
            this.jsonData = this.commonService.parseJson((_g = (_f = this.result.answerObj) === null || _f === void 0 ? void 0 : _f.result) !== null && _g !== void 0 ? _g : '');
            if (this.jsonData == null) {
                this.isMarked = false;
            }
        }
    }
    getData(id) {
        this.initStatusObj();
        this.errorMessage = '';
        this.answerId = id;
        this.answerService.apiAnswerGetObjGet(this.homeworkHashId, id).subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
            if (result.success == 1) {
                this.zipdataService.convertSubmittedAnswersObj((_a = result.data) === null || _a === void 0 ? void 0 : _a.answerObj);
                if (((_b = result.data) === null || _b === void 0 ? void 0 : _b.hasOwnProperty('studentObj')) && ((_c = result.data) === null || _c === void 0 ? void 0 : _c.studentObj) != null) {
                    this.result = result.data;
                    this.markedByObj = (_d = result.data.markedByObj) !== null && _d !== void 0 ? _d : {};
                    this.score = (_g = (_f = (_e = result.data) === null || _e === void 0 ? void 0 : _e.answerObj) === null || _f === void 0 ? void 0 : _f.point) !== null && _g !== void 0 ? _g : 0;
                    this.homeworkID = (_j = (_h = result.data.homeworkObj) === null || _h === void 0 ? void 0 : _h.id) !== null && _j !== void 0 ? _j : 0;
                    this.classID = (_l = (_k = result.data.classroomObj) === null || _k === void 0 ? void 0 : _k.id) !== null && _l !== void 0 ? _l : 0;
                    this.files = this.commonService.parseJson((_o = (_m = result.data.answerObj) === null || _m === void 0 ? void 0 : _m.files) !== null && _o !== void 0 ? _o : '');
                    this.studentObj = result.data.studentObj;
                    this.classroomObj = (_p = result.data.classroomObj) !== null && _p !== void 0 ? _p : {};
                    // convert cdn
                    if (this.files != null) {
                        for (let i = 0; i < this.files.length; i++) {
                            this.files[i].url = this.cdnService.getMyCdn((_r = (_q = this.files) === null || _q === void 0 ? void 0 : _q[i].url) !== null && _r !== void 0 ? _r : '');
                            this.files[i].thumb = this.cdnService.getMyCdn((_t = (_s = this.files) === null || _s === void 0 ? void 0 : _s[i].thumb) !== null && _t !== void 0 ? _t : '');
                        }
                    }
                    this.homeworkObj = (_u = result.data.homeworkObj) !== null && _u !== void 0 ? _u : {};
                    this.studentName = (_v = result.data.studentObj.fullName) !== null && _v !== void 0 ? _v : '';
                    this.handleJsonData();
                    this.hasLoadedData = true;
                    if (this.hasSendDataToIframe == false) {
                        this.hasSendDataToIframe = true;
                        this.sendDataToIframe();
                    }
                    this.successStatusObj();
                }
                else {
                    this.errorMessage = 'lang_core_not_found_student';
                    this.stopStatusObj();
                }
            }
            else {
                this.errorMessage = (_w = result.message) !== null && _w !== void 0 ? _w : '';
                this.stopStatusObj();
            }
        });
    }
    openDialog(status, score) {
        const dialogRef = this.dialog.open(_utils_notice_dialog_controller_component__WEBPACK_IMPORTED_MODULE_2__.NoticeDialog, {
            width: '280px',
            autoFocus: false,
            data: { score, status, homeWorkID: this.homeworkID, homeworkHashId: this.homeworkHashId, classID: this.classID, backtoLink: this.backtoLink }
        });
        dialogRef.afterClosed().subscribe(result => { });
    }
    handleOpenReSubmit() {
        var _a;
        this.openDialogReSubmit(true, (_a = this.homeworkObj.deadline) !== null && _a !== void 0 ? _a : undefined, this.homeworkObj, this.answerId, this.studentName);
    }
    openDialogReSubmit(status, deadlineParam, itemHomeworkParam, ansId, nameParam) {
        const dialogRef = this.dialog.open(_utils_clean_result_dialog_controller_component__WEBPACK_IMPORTED_MODULE_1__.CleanResultDialog, {
            width: '380px',
            panelClass: 'cleanResultDialogBox',
            data: { status, deadline: deadlineParam, itemHomework: itemHomeworkParam, ans_id: ansId, name: nameParam, redirect: true, classID: this.classID }
        });
        dialogRef.afterClosed().subscribe(result => { });
    }
    remark(answerId, point, json) {
        let objHeader = JSON.stringify({ type: 'homework', id: this.homeworkObj.id, user: this.homeworkObj.tenantId });
        if (this.historyId == '') {
            if (this.permissionService.hasMarkPointPermission('homework', this.homeworkObj.permissionObj) == true) {
                let answerResultSaveForm = {
                    id: answerId,
                    comment: json.comment,
                    hideMark: json.hideMark ? 1 : 0,
                    point: point ? parseFloat(point.replace(',', '.')) : 0,
                    result: this.zipdataService.convertContentGzip(JSON.stringify(json)),
                    homeworkHashId: this.homeworkHashId
                };
                this.answerService.apiAnswerSaveResultPost(answerResultSaveForm, objHeader).subscribe((response) => {
                    var _a, _b;
                    if (response.success == 1) {
                        this.openDialog(true, (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.obj) === null || _b === void 0 ? void 0 : _b.point);
                        this.successStatusObj();
                    }
                    else {
                        this.stopStatusObj();
                        this.showErrorSnack('Chấm điểm không thành công, vui lòng thử lại');
                    }
                });
            }
            else {
                this.showErrorSnack('Bạn không có quyền chấm bài tập này!');
                this.stopStatusObj();
            }
        }
        else {
            this.stopStatusObj();
            this.showErrorSnack('Bạn không thể chấm lại lịch sử làm bài của học sinh');
        }
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        let body = document.body;
        let html = document.getElementById('azota-app-html');
        // add style html
        html === null || html === void 0 ? void 0 : html.classList.add('overflow-hidden');
        html === null || html === void 0 ? void 0 : html.classList.add('height-100');
        // add style body
        body.classList.add('overflow-hidden');
        body.classList.add('height-100');
        this.iframeSrc = (_a = this.envService.getEnvValue('classliveUrl')) !== null && _a !== void 0 ? _a : '';
        const id = this.commonService.getMyParam(this.activeRoute, 'id') ? Number(this.commonService.getMyParam(this.activeRoute, 'id')) : 0;
        const historyId = (_b = this.commonService.getMyParam(this.activeRoute, 'historyId')) !== null && _b !== void 0 ? _b : '';
        this.homeworkHashId = (_c = this.commonService.getMyParam(this.activeRoute, 'hash_id')) !== null && _c !== void 0 ? _c : '';
        this.backtoLink = (_d = this.commonService.getMyQueryParam('backto')) !== null && _d !== void 0 ? _d : '';
        this.getData(id);
        this.getHistoryObjs(id);
        if (historyId) {
            this.getDataHistory(historyId);
        }
        this.commonService.translateMetaData({
            title: 'lang_cms_homework_mark_exercise_title',
            description: 'lang_cms_homework_mark_exercise_description',
            image: 'lang_cms_test_image'
        });
        super.ngOnInit();
    }
    ngAfterViewInit() {
        // check change
        window.addEventListener('message', this.handleIframe);
    }
    ngOnDestroy() {
        this.goBack();
        window.removeEventListener('message', this.handleIframe);
        super.ngDestroy();
    }
}
MarkExercise.ɵfac = function MarkExercise_Factory(t) { return new (t || MarkExercise)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api_api_answer_service__WEBPACK_IMPORTED_MODULE_3__.AnswerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_permission_service__WEBPACK_IMPORTED_MODULE_6__.PermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_cdn_service__WEBPACK_IMPORTED_MODULE_7__.CdnService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_8__.ZipdataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_9__.EnvService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_10__.ApiUploadService)); };
MarkExercise.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: MarkExercise, selectors: [["app-mark-exericse"]], hostBindings: function MarkExercise_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("popstate", function MarkExercise_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 13, consts: [["id", "markContainer", 1, "maxW1000"], ["id", "titleRow"], [1, "block-left"], ["mat-button", "", 3, "title", "click"], ["mat-icon-button", "", 3, "matTooltip", "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "studentInfo", "style", "padding-right: 10px; color: #fff", 4, "ngIf"], [3, "customText", 4, "ngIf"], [3, "hidden"], [4, "ngIf"], ["class", "card-box listPhotos", 4, "ngIf"], ["mat-icon-button", "", 3, "matTooltip", "matMenuTriggerFor"], [1, "studentInfo", 2, "padding-right", "10px", "color", "#fff"], [2, "cursor", "pointer", 3, "matTooltip", "nameCreateAvatar", "size", "linkAvatar"], [3, "customText"], [1, "row", "justify-content-center", "py-5"], [1, "col-12", "text-center"], [1, "alert", "alert-danger"], [1, "card-box", "listPhotos"], ["id", "mNote", "frameborder", "0", 2, "width", "100%", "height", "100%", 3, "src"]], template: function MarkExercise_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MarkExercise_Template_mat_icon_click_3_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, MarkExercise_button_6_Template, 4, 4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-menu", null, 5)(9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MarkExercise_Template_button_click_9_listener() { return ctx.reloadPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, MarkExercise_ng_container_13_Template, 6, 8, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, MarkExercise_h4_14_Template, 3, 3, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, MarkExercise_azt_loading_effect_15_Template, 2, 3, "azt-loading-effect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, MarkExercise_div_17_Template, 6, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, MarkExercise_div_18_Template, 3, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 9, "lang_buttom_back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.historyAnwerObjs != null && ctx.historyAnwerObjs.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](12, 11, "lang_homework_mark_exercise_last"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.historyAnwerObjs);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.classroomObj);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.errorMessage != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.errorMessage == "");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuItem, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _azota_ui_azt_create_avatar_controller_component__WEBPACK_IMPORTED_MODULE_11__.AztCreaterAvatar, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_12__.AztLoadingEffectComponent], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_13__.MytranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_13__.SafePipe], styles: ["#markContainer[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n#titleRow[_ngcontent-%COMP%] {\n  background-color: #00a7d0;\n  height: 40px;\n  position: relative;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  color: #fff;\n}\n\n#titleRow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n#titleRow[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 500;\n  font-size: 16px;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n}\n\n#titleRow[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.block-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.listPhotos[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  top: 40px;\n  bottom: 0;\n}\n\n.file[_ngcontent-%COMP%] {\n  border-width: 0px;\n  background: inherit;\n  background-color: #f2f2f2;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e5e5e5;\n  border-left: 0px;\n  border-right: 0px;\n  border-radius: 0px;\n  box-shadow: none;\n}\n\n.file[_ngcontent-%COMP%]:first-child {\n  margin-top: 52px;\n}\n\n.file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.back[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n}\n\n.back-to[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: flex;\n}\n\n.back-to[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.block[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: #fff !important;\n}\n\n.add-click[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.add-icon[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.file-custom[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n\n.description__share[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.description__share[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #666;\n  margin-right: 15px;\n  padding: 0px 10px;\n  padding-top: 5px;\n}\n\n.row-check[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eee;\n  padding: 10px 0;\n}\n\n.col-check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.exercise[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 0;\n  padding-top: 25px;\n  border-bottom: 1px solid #eee;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n  background-color: #f39c12;\n  color: #FFF;\n  border-radius: 5px;\n  padding: 10px 25px;\n}\n\n.files-custom[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.btn-share[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.score-exercise[_ngcontent-%COMP%] {\n  background-color: #ea3d19;\n  border-radius: 50%;\n  padding: 3px 5px;\n  padding-left: 7px;\n  color: #fff;\n  font-weight: 600;\n  margin: 0 10px;\n}\n\n#listNumber[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n#markNumber[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  right: 50%;\n  z-index: 9;\n  margin-right: -60px;\n  color: #fff;\n  text-transform: uppercase;\n  width: 120px;\n}\n\n@media (min-width: 1000px) {\n  .mark-edit[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n\n  .file[_ngcontent-%COMP%]:first-child {\n    margin-top: 0;\n  }\n\n  .listPhotos[_ngcontent-%COMP%] {\n    width: 1000px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRVE7RUFDSSxlQUFBO0FBQVo7O0FBR0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFEUjs7QUFHSTtFQUNJLGlCQUFBO0FBRFI7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0JBQUE7QUFBSjs7QUFDSTtFQUNJLGdCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxXQUFBO0FBQ1I7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJO0lBQ0ksWUFBQTtFQUFOOztFQUVFO0lBQ0ksYUFBQTtFQUNOOztFQUNFO0lBQ0ksYUFBQTtFQUVOO0FBQ0YiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFya0NvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMGE3ZDA7XG59XG5cbiN0aXRsZVJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTdkMDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWF0LWljb24ge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoNCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgfVxuICAgIC5zY29yZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbn1cbi5ibG9jay1sZWZ0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5saXN0UGhvdG9zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA0MHB4O1xuICAgIGJvdHRvbTogMDtcbn1cblxuLmZpbGUge1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIyOSwgMjI5LCAyMjksIDEpO1xuICAgIGJvcmRlci1sZWZ0OiAwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTJweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uYmFjayB7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xufVxuXG4uYmFjay10byB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmJhY2stdG8gc3BhbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJsb2NrIHtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYWRkLWNsaWNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRkLWljb24ge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZpbGUtY3VzdG9tIHtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5kZXNjcmlwdGlvbl9fc2hhcmUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5kZXNjcmlwdGlvbl9fc2hhcmUgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4ucm93LWNoZWNrIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5jb2wtY2hlY2sgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5leGVyY2lzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuXG4uYnRuLWN1c3RvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDE1NiwgMTgsIDEpO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG59XG5cbi5maWxlcy1jdXN0b20ge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmJ0bi1zaGFyZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbn1cblxuLnNjb3JlLWV4ZXJjaXNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0IDYxIDI1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogM3B4IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMCAxMHB4O1xufVxuXG4jbGlzdE51bWJlciB7XG4gICAgZGlzcGxheTogY29udGVudHM7XG59XG5cbiNtYXJrTnVtYmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHB4O1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgei1pbmRleDogOTtcbiAgICBtYXJnaW4tcmlnaHQ6IC02MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgd2lkdGg6IDEyMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gICAgLm1hcmstZWRpdCB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICB9XG4gICAgLmZpbGU6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgICAubGlzdFBob3RvcyB7XG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 81714:
/*!******************************************************************************************!*\
  !*** ./src/app/homework/mark-exercise/utils/clean-result-dialog/controller.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleanResultDialog": () => (/* binding */ CleanResultDialog)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);












class CleanResultDialog extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(dialogRef, answerService, activeRoute, fb, commonService, data) {
        super(commonService);
        this.dialogRef = dialogRef;
        this.answerService = answerService;
        this.activeRoute = activeRoute;
        this.fb = fb;
        this.commonService = commonService;
        this.data = data;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
        this.result = false;
        this.homeworkHashId = '';
    }
    getData() {
        this.initStatusObj();
        if (this.data.status) {
            this.successStatusObj();
        }
        else {
            this.stopStatusObj();
        }
    }
    cleanResult() {
        var form_object = this.commonService.getFormObj(this.form);
        var data_obj = { homeworkHashId: this.data.itemHomework.hashId, id: this.data.ans_id, resendNote: form_object.reason };
        this.initStatusObj();
        this.subscriptions.add(this.answerService.apiAnswerResendAnswerPost(data_obj).subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.showSuccessSnack('Gửi yêu cầu thành công');
                this.result = true;
                var callBackData = { result: this.result, id: this.data.ans_id, itemHomework: this.data.itemHomework };
                this.onSubmit(callBackData);
                if (this.data.redirect) {
                    this.commonService.myNavigation('/admin/homework/score-list/' + this.data.classID + '/' + this.data.itemHomework.id + '/' + this.homeworkHashId);
                }
                this.successStatusObj();
            }
            else {
                this.showErrorSnack('Gửi yêu cầu không thành công');
                this.result = false;
                var callBackData = { result: this.result, id: this.data.ans_id, itemHomework: this.data.itemHomework };
                this.onSubmit(callBackData);
                this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '');
            }
        }));
    }
    ngOnInit() {
        var _a;
        this.homeworkHashId = (_a = this.commonService.getMyParam(this.activeRoute, 'hash_id')) !== null && _a !== void 0 ? _a : '';
        this.getData();
        this.form = this.fb.group({
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
        });
        super.ngOnInit();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onSubmit(result) {
        this.dialogRef.close(result);
    }
}
CleanResultDialog.ɵfac = function CleanResultDialog_Factory(t) { return new (t || CleanResultDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_1__.AnswerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA)); };
CleanResultDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CleanResultDialog, selectors: [["clean-result-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 40, vars: 32, consts: [[3, "hidden"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["enctype", "multipart/form-data", 1, "form-horizontal", "text-center", 3, "formGroup"], [1, "text-center"], [1, "h5"], [1, "text-left", 2, "border", "1px dashed red", "padding", "10px 5px", "border-radius", "5px"], [1, "h5", "text-danger", "text-center"], [1, "h5", "mb-1"], [1, "text-danger"], [1, "h5", "text-danger", "mt-1", "mb-1"], ["type", "text", "id", "reason", "formControlName", "reason", 1, "form-control"], ["mat-dialog-actions", "", 1, "d-flex", "float-right", "mt-3"], [1, "azt-block-button"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 2, "margin-left", "15px", 3, "click"]], template: function CleanResultDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 0)(6, "form", 4)(7, "div", 5)(8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7)(12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 13)(33, "div", 14)(34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CleanResultDialog_Template_button_click_34_listener() { return ctx.cleanResult(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CleanResultDialog_Template_button_click_37_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](39, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 13, "lang_homework_mark_exercise_utils_request_resubmit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(*) ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 15, "lang_homework_mark_exercise_utils_note"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 17, "lang_homework_mark_exercise_utils_request"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 19, "lang_homework_mark_exercise_utils_in_homework"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](24, 21, ctx.data.deadline ? ctx.data.deadline : ctx.data.itemHomework.createdAt, "dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 24, "lang_homework_mark_exercise_utils_will_be_deleted"), "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 26, "lang_homework_mark_exercise_utils_coment_request_resubmit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 28, "lang_buttom_confirm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](39, 30, "lang_buttom_cancel"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__.MytranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 85617:
/*!************************************************************************************!*\
  !*** ./src/app/homework/mark-exercise/utils/notice-dialog/controller.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeDialog": () => (/* binding */ NoticeDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_auto_api_common_api_api_answer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auto_api/common_api/api/answer.service */ 37234);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _azota_ui_azt_check_mark_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../azota-ui/azt-check-mark/controller.component */ 37104);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/pipes/common.pipe */ 1033);










class NoticeDialog extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(dialogRef, answerService, commonService, data) {
        super(commonService);
        this.dialogRef = dialogRef;
        this.answerService = answerService;
        this.commonService = commonService;
        this.data = data;
        this.success = false;
    }
    ngOnInit() {
        this.success = this.data.status;
    }
    checkNextAns() {
        this.answerService.apiAnswerGetNextObjByHomeworkGet(this.data.homeworkHashId)
            .subscribe((response) => {
            var _a, _b;
            if (response.success != 0) {
                this.dialogRef.close();
                this.commonService.myNavigationWithQueryString('/admin/homework/mark-exercise/' + ((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.obj) === null || _b === void 0 ? void 0 : _b.id) + '/' + this.data.homeworkHashId, '?backto=' + encodeURIComponent(this.data.backtoLink));
                setTimeout(() => {
                    document.location.reload();
                }, 500);
            }
            else {
                this.dialogRef.close();
                this.commonService.myNavigation('/admin/homework/score-list/' + this.data.classID + '/' + this.data.homeWorkID + '/' + this.data.homeworkHashId);
            }
        });
    }
    onNoClick() {
        this.dialogRef.close();
        // location.reload();
    }
}
NoticeDialog.ɵfac = function NoticeDialog_Factory(t) { return new (t || NoticeDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api_api_answer_service__WEBPACK_IMPORTED_MODULE_1__.AnswerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA)); };
NoticeDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NoticeDialog, selectors: [["notice-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 10, consts: [["mat-dialog-title", "", 1, "d-flex", "align-items-center", 2, "color", "#6d6d6d"], [1, "mr-1", 2, "color", "green"], ["mat-dialog-content", ""], [2, "color", "red", "font-size", "120%", "font-weight", "500"], [3, "mark"], [1, "d-flex", "float-right", "mt-3"], ["id", "ok", "mat-raised-button", "", 3, "click"], ["id", "next", "mat-raised-button", "", 1, "ml-2", 2, "background-color", "#2361ae", "color", "#fff", 3, "click"]], template: function NoticeDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 0)(1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "azt-check-mark", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5)(11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NoticeDialog_Template_button_click_11_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NoticeDialog_Template_button_click_13_listener() { return ctx.checkNextAns(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "lang_homework_mark_exercise_utils_mark_success"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 6, "lang_homework_mark_exercise_utils_assignment_marking"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mark", ctx.data.score);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 8, "lang_homework_mark_exercise_utils_mark_continue"));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _azota_ui_azt_check_mark_controller_component__WEBPACK_IMPORTED_MODULE_3__.AztCheckMark, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe], styles: ["#ok[_ngcontent-%COMP%]:hover {background-color: rgb(231, 231, 231); } #next[_ngcontent-%COMP%]:hover{background-color: #1e579d!important}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsb0NBQW9DLEVBQUUsRUFBRSxZQUFZLG1DQUFtQyIsImZpbGUiOiJjb250cm9sbGVyLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIiNvazpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpOyB9ICNuZXh0OmhvdmVye2JhY2tncm91bmQtY29sb3I6ICMxZTU3OWQhaW1wb3J0YW50fSJdfQ== */"] });


/***/ }),

/***/ 11315:
/*!*************************************************************!*\
  !*** ./src/app/homework/masterpage/controller.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeworkMasterPageComponent": () => (/* binding */ HomeworkMasterPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




class HomeworkMasterPageComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService) {
        super(commonService);
        this.commonService = commonService;
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
HomeworkMasterPageComponent.ɵfac = function HomeworkMasterPageComponent_Factory(t) { return new (t || HomeworkMasterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
HomeworkMasterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeworkMasterPageComponent, selectors: [["homework-master-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["id", "homework-layout"]], template: function HomeworkMasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 54693:
/*!*******************************************!*\
  !*** ./src/app/homework/module.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeworkModule": () => (/* binding */ HomeworkModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 72727);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng2-pdf-viewer */ 42214);
/* harmony import */ var src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/azota-ui/azota-ui.module */ 47470);
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ 75658);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _add_home_work_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-home-work/controller.component */ 96223);
/* harmony import */ var _class_list_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class-list/controller.component */ 23717);
/* harmony import */ var _content_store_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-store/controller.component */ 82445);
/* harmony import */ var _create_homework_success_create_homework_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-homework-success/create-homework-success.component */ 98883);
/* harmony import */ var _export_homework_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./export-homework/controller.component */ 18003);
/* harmony import */ var _homework_list_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homework-list/controller.component */ 20794);
/* harmony import */ var _homework_score_list_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homework-score-list/controller.component */ 80263);
/* harmony import */ var _mark_exercise_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mark-exercise/controller.component */ 61029);
/* harmony import */ var _mark_exercise_utils_clean_result_dialog_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mark-exercise/utils/clean-result-dialog/controller.component */ 81714);
/* harmony import */ var _mark_exercise_utils_notice_dialog_controller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mark-exercise/utils/notice-dialog/controller.component */ 85617);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./masterpage/controller.component */ 11315);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routing.module */ 6158);
/* harmony import */ var _utils_delete_homework_dialog_controller_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/delete-homework-dialog/controller.component */ 90374);
/* harmony import */ var _utils_excel_table_export_controller_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/excel-table-export/controller.component */ 78913);
/* harmony import */ var _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/footer/controller.component */ 39858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_preview_media_controller_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../azota-ui/preview-media/controller.component */ 73852);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ 15754);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/clipboard */ 10092);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _azota_ui_download_qr_code_controller_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../azota-ui/download-qr-code/controller.component */ 71572);
/* harmony import */ var _azota_ui_azt_share_controller_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../azota-ui/azt-share/controller.component */ 67443);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/menu */ 59421);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/slide-toggle */ 29765);
/* harmony import */ var _azota_ui_student_homework_result_controller_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../azota-ui/student-homework-result/controller.component */ 83467);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../core/pipes/common.pipe */ 1033);










































class HomeworkModule {
}
HomeworkModule.ɵfac = function HomeworkModule_Factory(t) { return new (t || HomeworkModule)(); };
HomeworkModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: HomeworkModule });
HomeworkModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_28__.EditorModule,
            _routing_module__WEBPACK_IMPORTED_MODULE_14__.HomeworkRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialogModule,
            src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_31__.PdfViewerModule,
            src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](HomeworkModule, { declarations: [_masterpage_controller_component__WEBPACK_IMPORTED_MODULE_13__.HomeworkMasterPageComponent,
        _content_store_controller_component__WEBPACK_IMPORTED_MODULE_5__.ContentStoreComponent,
        _content_store_controller_component__WEBPACK_IMPORTED_MODULE_5__.BuyContentDialog,
        _mark_exercise_utils_clean_result_dialog_controller_component__WEBPACK_IMPORTED_MODULE_11__.CleanResultDialog,
        _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_17__.HomeworkBackendFooterComponent,
        _homework_score_list_controller_component__WEBPACK_IMPORTED_MODULE_9__.HomeworkScoreListComponent,
        _export_homework_controller_component__WEBPACK_IMPORTED_MODULE_7__.ExportHomeworkComponent,
        _export_homework_controller_component__WEBPACK_IMPORTED_MODULE_7__.WhatToExportHomeworkDialog,
        _utils_delete_homework_dialog_controller_component__WEBPACK_IMPORTED_MODULE_15__.ConfirmDeleteHomeworkComponent,
        _utils_excel_table_export_controller_component__WEBPACK_IMPORTED_MODULE_16__.ExcelExportComponent,
        _add_home_work_controller_component__WEBPACK_IMPORTED_MODULE_3__.AddNewHomeworkComponent,
        _class_list_controller_component__WEBPACK_IMPORTED_MODULE_4__.ClassListComponent,
        _homework_list_controller_component__WEBPACK_IMPORTED_MODULE_8__.HomeworkListComponent,
        _mark_exercise_controller_component__WEBPACK_IMPORTED_MODULE_10__.MarkExercise,
        _mark_exercise_utils_notice_dialog_controller_component__WEBPACK_IMPORTED_MODULE_12__.NoticeDialog,
        _create_homework_success_create_homework_success_component__WEBPACK_IMPORTED_MODULE_6__.CreateHomeworkSuccessComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_28__.EditorModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_14__.HomeworkRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_31__.PdfViewerModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetComponentScope"](_homework_score_list_controller_component__WEBPACK_IMPORTED_MODULE_9__.HomeworkScoreListComponent, [_azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_18__.HeaderBackendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_19__.AztLoadingEffectComponent, _utils_delete_homework_dialog_controller_component__WEBPACK_IMPORTED_MODULE_15__.ConfirmDeleteHomeworkComponent, _azota_ui_preview_media_controller_component__WEBPACK_IMPORTED_MODULE_20__.AztPreviewMediaComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__.MatDrawer, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButton, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_34__.CdkCopyToClipboard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIcon, _azota_ui_download_qr_code_controller_component__WEBPACK_IMPORTED_MODULE_21__.AztDownloadQrCodeComponent, _azota_ui_azt_share_controller_component__WEBPACK_IMPORTED_MODULE_22__.AztShareComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterLinkWithHref, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__.MatDrawerContent, _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormControlName, _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__.MatMenuItem, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__.MatSlideToggle, _azota_ui_student_homework_result_controller_component__WEBPACK_IMPORTED_MODULE_23__.AztStudentHomeworkResultComponent, _utils_excel_table_export_controller_component__WEBPACK_IMPORTED_MODULE_16__.ExcelExportComponent], [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_24__.MytranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_27__.DatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_24__.MyLocalizePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_24__.EditPermission, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_24__.DeletePermission, _angular_common__WEBPACK_IMPORTED_MODULE_27__.SlicePipe]);


/***/ }),

/***/ 6158:
/*!********************************************!*\
  !*** ./src/app/homework/routing.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeworkRoutingModule": () => (/* binding */ HomeworkRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);
/* harmony import */ var src_app_core_auth_guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auth_guards/auth.admin.guard */ 6834);
/* harmony import */ var _add_home_work_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-home-work/controller.component */ 96223);
/* harmony import */ var _class_list_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-list/controller.component */ 23717);
/* harmony import */ var _content_store_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-store/controller.component */ 82445);
/* harmony import */ var _create_homework_success_create_homework_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-homework-success/create-homework-success.component */ 98883);
/* harmony import */ var _export_homework_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./export-homework/controller.component */ 18003);
/* harmony import */ var _homework_list_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homework-list/controller.component */ 20794);
/* harmony import */ var _homework_score_list_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homework-score-list/controller.component */ 80263);
/* harmony import */ var _mark_exercise_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mark-exercise/controller.component */ 61029);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masterpage/controller.component */ 11315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);














const homeworkRoutes = [
    {
        path: '',
        component: _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_9__.HomeworkMasterPageComponent,
        canActivate: [src_app_core_auth_guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAdminGuard],
        children: [
            {
                path: '',
                canActivateChild: [src_app_core_auth_guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAdminGuard],
                children: [
                    { path: 'classes', component: _class_list_controller_component__WEBPACK_IMPORTED_MODULE_2__.ClassListComponent },
                    { path: 'classes/:page', component: _class_list_controller_component__WEBPACK_IMPORTED_MODULE_2__.ClassListComponent },
                    { path: 'homework-list/:id', component: _homework_list_controller_component__WEBPACK_IMPORTED_MODULE_6__.HomeworkListComponent },
                    { path: 'add-new-homework/:id', component: _add_home_work_controller_component__WEBPACK_IMPORTED_MODULE_1__.AddNewHomeworkComponent },
                    { path: 'add-new-homework/:id/:hash_id', component: _add_home_work_controller_component__WEBPACK_IMPORTED_MODULE_1__.AddNewHomeworkComponent },
                    { path: 'score-list/:class_id/:id/:hash_id', component: _homework_score_list_controller_component__WEBPACK_IMPORTED_MODULE_7__.HomeworkScoreListComponent },
                    { path: 'export-homework/:class_id/:id/:hash_id', component: _export_homework_controller_component__WEBPACK_IMPORTED_MODULE_5__.ExportHomeworkComponent },
                    { path: 'mark-exercise/:id/:hash_id', component: _mark_exercise_controller_component__WEBPACK_IMPORTED_MODULE_8__.MarkExercise },
                    { path: 'create-homework-success/:hash_ids', component: _create_homework_success_create_homework_success_component__WEBPACK_IMPORTED_MODULE_4__.CreateHomeworkSuccessComponent },
                    { path: 'content-store', component: _content_store_controller_component__WEBPACK_IMPORTED_MODULE_3__.ContentStoreComponent },
                    { path: '', component: _class_list_controller_component__WEBPACK_IMPORTED_MODULE_2__.ClassListComponent }
                ]
            }
        ]
    }
];
class HomeworkRoutingModule {
}
HomeworkRoutingModule.ɵfac = function HomeworkRoutingModule_Factory(t) { return new (t || HomeworkRoutingModule)(); };
HomeworkRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: HomeworkRoutingModule });
HomeworkRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(homeworkRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_12__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](HomeworkRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_12__.LocalizeRouterModule] }); })();


/***/ }),

/***/ 90374:
/*!*******************************************************************************!*\
  !*** ./src/app/homework/utils/delete-homework-dialog/controller.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDeleteHomeworkComponent": () => (/* binding */ ConfirmDeleteHomeworkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);











function ConfirmDeleteHomeworkComponent_div_0_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ConfirmDeleteHomeworkComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 5)(7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfirmDeleteHomeworkComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.btnCloseDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfirmDeleteHomeworkComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.confirmDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ConfirmDeleteHomeworkComponent_div_0_span_15_Template, 3, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 7, "lang_homework_utils_delete_homework_dialog_title"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r0.data.homeworkObj ? ctx_r0.data.homeworkObj.name : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.data.homeworkObj ? ctx_r0.data.homeworkObj.name : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 9, "lang_cms_common_close_btn"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 11, "lang_cms_common_confirm_btn"), " ");
} }
class ConfirmDeleteHomeworkComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, homeworkService) {
        super(commonService);
        this.commonService = commonService;
        this.homeworkService = homeworkService;
        this.data = { homeworkObj: {}, isShow: false };
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({});
        this.type = 0;
    }
    confirmDelete() {
        var _a;
        this.initStatusObj();
        this.subscriptions.add(this.homeworkService.apiHomeworkDeleteObjGet((_a = this.data.homeworkObj) === null || _a === void 0 ? void 0 : _a.hashId).subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.closeDialog.emit(true);
                this.successStatusObj();
                this.showSuccessSnack('Xóa bài tập thành công');
            }
            else {
                this.btnCloseDialog();
                this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
            }
        }));
    }
    btnCloseDialog() {
        this.closeDialog.emit(false);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
ConfirmDeleteHomeworkComponent.ɵfac = function ConfirmDeleteHomeworkComponent_Factory(t) { return new (t || ConfirmDeleteHomeworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.HomeworkService)); };
ConfirmDeleteHomeworkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ConfirmDeleteHomeworkComponent, selectors: [["app-delete-homework"]], inputs: { data: "data" }, outputs: { closeDialog: "closeDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 4, "ngIf"], [1, "school-info_bg"], [1, "school-info", "p-4"], [1, "text-center"], [1, "h5", "mb-1"], [1, "h5", "text-danger", 2, "padding-bottom", "21px", "border-bottom", "1px solid #b2b4b7"], [1, "truncate", 3, "matTooltip"], [1, "d-flex", "float-right", "mt-3"], [1, "azt-block-button"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "15px", 3, "disabled", "click"], [4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function ConfirmDeleteHomeworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ConfirmDeleteHomeworkComponent_div_0_Template, 18, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.isShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__.MytranslatePipe], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  z-index: 9998;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background: #0000008f;\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 9999;\n  top: 50%;\n  left: 50%;\n  min-width: 30%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  max-width: 600px;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUdBLGdEQUFBO0FBRUo7O0FBQUU7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQUtKO0FBQ0YiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nob29sLWluZm9fYmcge1xuICAgIHotaW5kZXg6IDk5OTg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA4ZjtcbiAgfVxuICAuc2Nob29sLWluZm8ge1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgfVxuICAudHJ1bmNhdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgLmNsb3NlLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLThweDtcbiAgICByaWdodDogLTdweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGFkYWRhO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLnNjaG9vbC1pbmZvIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICB9XG4gIH1cbiAgIl19 */"] });


/***/ }),

/***/ 78913:
/*!***************************************************************************!*\
  !*** ./src/app/homework/utils/excel-table-export/controller.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelExportComponent": () => (/* binding */ ExcelExportComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ 98810);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);







const _c0 = ["TABLE"];
const _c1 = function () { return {}; };
function ExcelExportComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 6, item_r2.birthday, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.gender == 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 9, "lang_gender_female") : item_r2.gender == 1 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 11, "lang_gender_male") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.isMarked ? ctx_r1.checkPoint(item_r2.point ? item_r2.point : 0) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 13, "lang_homework_utils_excel_table_export_not_point"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.getComment(item_r2.answer ? item_r2.answer : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c1)));
} }
class ExcelExportComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(commonService) {
        super(commonService);
        this.commonService = commonService;
        this.studentList = [];
        this.homeworkObj = {};
        this.currentDate = new Date();
        this.tableType = 'homework';
    }
    ExportTOExcel() {
        var _a, _b;
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.table_to_sheet((_a = this.TABLE) === null || _a === void 0 ? void 0 : _a.nativeElement, { raw: true });
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.book_append_sheet(wb, ws, 'Sheet1');
        if (this.homeworkObj.hasOwnProperty('name')) {
            xlsx__WEBPACK_IMPORTED_MODULE_2__.writeFile(wb, this.commonService.createFileNameExportFile([(_b = this.homeworkObj.name) !== null && _b !== void 0 ? _b : '']) + '-ScoreSheet.xlsx');
        }
        else {
            xlsx__WEBPACK_IMPORTED_MODULE_2__.writeFile(wb, this.commonService.createFileNameExportFile(['ScoreSheet']) + '.xlsx');
        }
    }
    checkPoint(point) {
        switch (point) {
            case 1000:
                return `Đạt`;
            case 1001:
                return `Chưa Đạt`;
            case 2000:
                return `Hoàn Thành`;
            case 2001:
                return `Chưa Hoàn Thành`;
            case 3000:
                return `Hoàn Thành Tốt`;
            default:
                return point;
        }
    }
    getComment(answer) {
        var comment = '';
        if (answer != null && answer.result) {
            comment = this.commonService.parseJson(answer.result).comment;
        }
        return comment;
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
ExcelExportComponent.ɵfac = function ExcelExportComponent_Factory(t) { return new (t || ExcelExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService)); };
ExcelExportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ExcelExportComponent, selectors: [["app-excel-export"]], viewQuery: function ExcelExportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.TABLE = _t.first);
    } }, inputs: { studentList: "studentList", homeworkObj: "homeworkObj", currentDate: "currentDate", tableType: "tableType" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 47, vars: 34, consts: [[1, "table", "table-bordered", "d-none", 3, "id", "click"], ["TABLE", ""], [1, "thead-dark"], ["colspan", "10"], [1, "border-table"], [4, "ngFor", "ngForOf"], ["colspan", "2"]], template: function ExcelExportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExcelExportComponent_Template_table_click_0_listener() { return ctx.ExportTOExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "thead", 2)(3, "tr")(4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "tr")(10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "tr")(17, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, ExcelExportComponent_tr_36_Template, 17, 16, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "td")(40, "td")(41, "td")(42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "table_", ctx.tableType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 13, "lang_homework_utils_excel_table_export_homework"), ": ", ctx.homeworkObj.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 15, "lang_homework_utils_excel_table_export_time_export_result"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 17, ctx.currentDate, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 20, "lang_first_and_last_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 22, "lang_birthday"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 24, "lang_gender"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 26, "lang_number_code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 28, "lang_point"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 30, "lang_homework_utils_excel_table_export_comment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.studentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 32, "lang_homework_utils_excel_table_export_verifil_teacher"), ": ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 39858:
/*!***************************************************************!*\
  !*** ./src/app/homework/utils/footer/controller.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeworkBackendFooterComponent": () => (/* binding */ HomeworkBackendFooterComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global.service */ 54209);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);









function HomeworkBackendFooterComponent_div_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", ctx_r1.user_obj.id, ".", ctx_r1.user_obj.fullName, ".Zalo:", ctx_r1.user_obj.zaloId, " ");
} }
function HomeworkBackendFooterComponent_div_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "anonymousFullName");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "anonymousPhone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", ctx_r2.user_obj.id, ".", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, ctx_r2.user_obj), ".", ctx_r2.user_obj.phone ? ctx_r2.user_obj.phone : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, ""), " ");
} }
const _c0 = function (a0) { return [a0]; };
function HomeworkBackendFooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "p")(2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, HomeworkBackendFooterComponent_div_0_span_9_Template, 2, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, HomeworkBackendFooterComponent_div_0_span_10_Template, 4, 7, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "https://facebook.com/groups/azota.vn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p")(17, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 8, "/student/dashboard/0")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 10, "lang_homework_utils_footer_go_to_student"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 12, "lang_homework_utils_footer_account"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.user_obj.zaloId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.user_obj.zaloId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 14, "lang_homework_utils_footer_join_group"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 16, "https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 18, "azota_assets/images/2928664.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
class HomeworkBackendFooterComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(baseApiService, commonService, globalService) {
        super(commonService);
        this.baseApiService = baseApiService;
        this.commonService = commonService;
        this.globalService = globalService;
        this.user_obj = {};
    }
    ngOnInit() {
        this.user_obj = this.baseApiService.getUserObj();
        this.globalService.loginMessage.subscribe(message => {
            this.user_obj = this.baseApiService.getUserObj();
        });
        super.ngOnInit();
    }
}
HomeworkBackendFooterComponent.ɵfac = function HomeworkBackendFooterComponent_Factory(t) { return new (t || HomeworkBackendFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_1__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService)); };
HomeworkBackendFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomeworkBackendFooterComponent, selectors: [["homework-backend-footer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "text-center mt-3", 4, "ngIf"], [1, "text-center", "mt-3"], [3, "routerLink"], [4, "ngIf"], ["href", "https://www.facebook.com/groups/azota.vn", "target", "_blank"], ["href", "https://play.google.com/store/apps/details?id=azt.azt", "target", "_blank", "rel", "noopener"], ["alt", "Get it on Google Play", "width", "150px", 1, "play-store-badge", 3, "src"], ["href", "https://apps.apple.com/ua/app/azota/id1556025594", "target", "_blank", "rel", "noopener"], ["alt", "Download on the App Store", "width", "130px", 1, "app-store-badge", 3, "src"]], template: function HomeworkBackendFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HomeworkBackendFooterComponent_div_0_Template, 23, 22, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user_obj.id != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref], pipes: [_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_8__.LocalizeRouterPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.AnonymousFullName, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.AnonymousPhone, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.ConvertCdnPipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_homework_module_module_ts.js.map