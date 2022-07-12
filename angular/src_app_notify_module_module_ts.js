"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_notify_module_module_ts"],{

/***/ 50816:
/*!*****************************************!*\
  !*** ./src/app/notify/module.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifyModule": () => (/* binding */ NotifyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 72727);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-pdf-viewer */ 42214);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-image-cropper */ 92133);
/* harmony import */ var src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/azota-ui/azota-ui.module */ 47470);
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ 75658);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _notify_list_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify-list/controller.component */ 64901);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing.module */ 93552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);













class NotifyModule {
}
NotifyModule.ɵfac = function NotifyModule_Factory(t) { return new (t || NotifyModule)(); };
NotifyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: NotifyModule });
NotifyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__.EditorModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
            src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__.PdfViewerModule,
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__.ImageCropperModule,
            _routing_module__WEBPACK_IMPORTED_MODULE_4__.NotifyRoutingModule,
            src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NotifyModule, { declarations: [_notify_list_controller_component__WEBPACK_IMPORTED_MODULE_3__.NotifyListComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__.EditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__.PdfViewerModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__.ImageCropperModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_4__.NotifyRoutingModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule] }); })();


/***/ }),

/***/ 64901:
/*!************************************************************!*\
  !*** ./src/app/notify/notify-list/controller.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifyListComponent": () => (/* binding */ NotifyListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global.service */ 54209);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_azt_paging_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../azota-ui/azt-paging/controller.component */ 51176);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);














function NotifyListComponent_header_backend_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "header-backend", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "mytranslate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, "lang_notify_list_header_title"))("back_link", "/admin/testbank/dashboard");
} }
function NotifyListComponent_header_frontend_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "header-frontend", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "mytranslate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, "lang_notify_list_header_title"))("back_link", "/student/dashboard/0");
} }
function NotifyListComponent_azt_loading_effect_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "azt-loading-effect");
} }
function NotifyListComponent_ng_template_4_div_2_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "lang_notify_list_new_decentralization_for_class"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", notify_r6.classroomName, " ");
} }
function NotifyListComponent_ng_template_4_div_2_a_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 5, "lang_notify_list_scored_homework"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.homeworkName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 7, "lang_notify_list_in_date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 9, notify_r6.createdAt ? notify_r6.createdAt : notify_r6.createdAt, "dd/MM/yyyy"));
} }
function NotifyListComponent_ng_template_4_div_2_a_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 5, "lang_notify_list_submitted"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.homeworkName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 7, "lang_notify_list_in_date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 9, notify_r6.createdAt ? notify_r6.createdAt : notify_r6.createdAt, "dd/MM/yyyy"));
} }
function NotifyListComponent_ng_template_4_div_2_a_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 5, "lang_notify_list_there_are_exercises"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.homeworkName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 7, "lang_notify_list_delivered"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 9, notify_r6.createdAt ? notify_r6.createdAt : notify_r6.createdAt, "dd/MM/yyyy"));
} }
function NotifyListComponent_ng_template_4_div_2_a_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 5, "lang_notify_list_submit_assignments"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.homeworkName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 7, "lang_notify_list_in_date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 9, notify_r6.createdAt ? notify_r6.createdAt : notify_r6.createdAt, "dd/MM/yyyy"));
} }
function NotifyListComponent_ng_template_4_div_2_a_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 5, "lang_notify_list_submit_succes"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 7, "lang_notify_list_in_date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 9, notify_r6.createdAt ? notify_r6.createdAt : notify_r6.createdAt, "dd/MM/yyyy"));
} }
function NotifyListComponent_ng_template_4_div_2_a_1_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 5, "lang_notify_list_new_tested"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 7, "lang_notify_list_in_date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 9, notify_r6.createdAt ? notify_r6.createdAt : notify_r6.createdAt, "dd/MM/yyyy"));
} }
function NotifyListComponent_ng_template_4_div_2_a_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 5, "lang_notify_list_tested"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 7, "lang_notify_list_has_been_graded"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 9, notify_r6.createdAt ? notify_r6.createdAt : notify_r6.createdAt, "dd/MM/yyyy"));
} }
function NotifyListComponent_ng_template_4_div_2_a_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 4, "lang_notify_list_new_decentralization"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r16.getTypeObjNotice(notify_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 6, "lang_notify_list_in_date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](9, 8, notify_r6.createdAt ? notify_r6.createdAt : notify_r6.createdAt, "dd/MM/yyyy"));
} }
function NotifyListComponent_ng_template_4_div_2_a_1_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 4, "lang_notify_list_new_qa_exam_ask"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 6, "lang_notify_list_in_date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](9, 8, notify_r6.createdAt ? notify_r6.createdAt : notify_r6.createdAt, "dd/MM/yyyy"));
} }
function NotifyListComponent_ng_template_4_div_2_a_1_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 4, "lang_notify_list_new_qa_homework_ask"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.homeworkName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 6, "lang_notify_list_in_date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](9, 8, notify_r6.createdAt ? notify_r6.createdAt : notify_r6.createdAt, "dd/MM/yyyy"));
} }
function NotifyListComponent_ng_template_4_div_2_a_1_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 4, "lang_notify_list_new_qa_exam_answer"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 6, "lang_notify_list_in_date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](9, 8, notify_r6.createdAt ? notify_r6.createdAt : notify_r6.createdAt, "dd/MM/yyyy"));
} }
function NotifyListComponent_ng_template_4_div_2_a_1_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 4, "lang_notify_list_new_qa_homework_answer"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.homeworkName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 6, "lang_notify_list_in_date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](9, 8, notify_r6.createdAt ? notify_r6.createdAt : notify_r6.createdAt, "dd/MM/yyyy"));
} }
function NotifyListComponent_ng_template_4_div_2_a_1_div_18_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "lang_notify_list_number_phone_accuracy"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.datas);
} }
function NotifyListComponent_ng_template_4_div_2_a_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, NotifyListComponent_ng_template_4_div_2_a_1_div_18_span_13_Template, 5, 4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 26)(15, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NotifyListComponent_ng_template_4_div_2_a_1_div_18_Template_span_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r37.delRequestNotice(notify_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NotifyListComponent_ng_template_4_div_2_a_1_div_18_Template_span_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r40.reApproveStudent(notify_r6.studentId, notify_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 8, "lang_notify_list_students"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](notify_r6.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 10, "lang_notify_list_class"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", notify_r6.classroomName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 12, "lang_notify_list_dont_choose_name"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.datas != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 14, "lang_notify_list_del_request"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 16, "lang_notify_list_re_approve"));
} }
function NotifyListComponent_ng_template_4_div_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NotifyListComponent_ng_template_4_div_2_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r45); const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r43.redirectToPage(notify_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, NotifyListComponent_ng_template_4_div_2_a_1_span_5_Template, 5, 4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, NotifyListComponent_ng_template_4_div_2_a_1_span_6_Template, 12, 12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, NotifyListComponent_ng_template_4_div_2_a_1_span_7_Template, 12, 12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, NotifyListComponent_ng_template_4_div_2_a_1_span_8_Template, 12, 12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, NotifyListComponent_ng_template_4_div_2_a_1_span_9_Template, 12, 12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, NotifyListComponent_ng_template_4_div_2_a_1_span_10_Template, 12, 12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, NotifyListComponent_ng_template_4_div_2_a_1_span_11_Template, 12, 12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, NotifyListComponent_ng_template_4_div_2_a_1_span_12_Template, 12, 12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, NotifyListComponent_ng_template_4_div_2_a_1_span_13_Template, 10, 11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, NotifyListComponent_ng_template_4_div_2_a_1_span_14_Template, 10, 11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, NotifyListComponent_ng_template_4_div_2_a_1_span_15_Template, 10, 11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, NotifyListComponent_ng_template_4_div_2_a_1_span_16_Template, 10, 11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, NotifyListComponent_ng_template_4_div_2_a_1_span_17_Template, 10, 11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, NotifyListComponent_ng_template_4_div_2_a_1_div_18_Template, 21, 18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const notify_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", notify_r6.classroomName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "NEW_ASSIGN");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "HAS_MARK");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "NEW_ANSWER");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "NEW_HOMEWORK");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "RESEND_ANSWER");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "NEW_EXAM_SUBMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "NEW_EXAM");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "EXAM_HAS_MARK");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "NEW_SHARE_CLASS_PERMISSION" || notify_r6.type == "NEW_SHARE_HOMEWORK_PERMISSION" || notify_r6.type == "NEW_SHARE_EXAM_PERMISSION");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "NEW_QA_EXAM_ASK");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "NEW_QA_HOMEWORK_ASK");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "NEW_QA_EXAM_ANSWER");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "NEW_QA_HOMEWORK_ANSWER");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type == "NEW_REQUEST_REAPPROVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](21, 16, notify_r6.createdAt, "dd/MM/yyyy HH:mm:ss"), " ");
} }
function NotifyListComponent_ng_template_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NotifyListComponent_ng_template_4_div_2_a_1_Template, 22, 19, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notify_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notify_r6.type != "NEW_SHARE_PERMISSION");
} }
function NotifyListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, NotifyListComponent_ng_template_4_div_2_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 10)(4, "azt-paging", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("SendPage", function NotifyListComponent_ng_template_4_Template_azt_paging_SendPage_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r47.clickPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r4.dataNotify.objs);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("lengthPage", ctx_r4.lengthPage)("paging", ctx_r4.page);
} }
class NotifyListComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(activeRoute, commonService, baseApiService, noticeService, studentService, globalService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.noticeService = noticeService;
        this.studentService = studentService;
        this.globalService = globalService;
        this.isLoading = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
        this.dataNotify = {};
        this.arrayPag = [];
        this.lengthPage = 0;
        this.totalNotify = 0;
        this.page = 1;
        this.textNotify = '';
        this.role = 1;
    }
    getTypeObjNotice(notice) {
        if (notice.type == 'NEW_SHARE_CLASS_PERMISSION') {
            return 'Lớp: ' + notice.classroomName;
        }
        else if (notice.type == 'NEW_SHARE_HOMEWORK_PERMISSION') {
            return 'Bài tập: ' + notice.homeworkName;
        }
        else if (notice.type == 'NEW_SHARE_EXAM_PERMISSION') {
            return 'Đề thi: ' + notice.examName;
        }
        else {
            return '';
        }
    }
    getDataNotifyByRole(role, page) {
        this.isLoading = true;
        this.noticeService.apiNoticeGetObjsByRoleGet(role, page).subscribe((result) => {
            var _a, _b, _c;
            if (result) {
                this.isLoading = false;
                if (result.success == 1) {
                    this.dataNotify = (_a = result.data) !== null && _a !== void 0 ? _a : {};
                    this.lengthPage = Math.ceil(((_b = this.dataNotify.total) !== null && _b !== void 0 ? _b : 0) / 18);
                    this.createPag();
                }
                else {
                    this.showErrorSnack((_c = result.message) !== null && _c !== void 0 ? _c : '');
                }
            }
        });
    }
    redirectToPage(notify) {
        switch (notify.type) {
            case 'NEW_ANSWER':
                this.commonService.myNavigation(`/admin/homework/score-list/${notify.classroomId}/${notify.homeworkId}/${notify.homeworkHashId}`);
                break;
            case 'HAS_MARK':
            case 'NEW_HOMEWORK':
            case 'RESEND_ANSWER':
                this.commonService.myNavigation(`/bai-tap/${notify.homeworkHashId}`);
                break;
            case 'NEW_EXAM_SUBMIT':
                this.commonService.myNavigation(`/admin/testbank/test-review/${notify.examId}/${notify.parentId}/${notify.studentId}/${notify.examResultId}`);
                break;
            case 'NEW_EXAM':
                this.commonService.myNavigation(`/de-thi/${notify.examHashId}`);
                break;
            case 'EXAM_HAS_MARK':
                this.commonService.myNavigation(`/test/answer-test/${notify.parentId}/0/${notify.examHashId}/${notify.examResultId}`);
                break;
            case 'NEW_QA_EXAM_ASK':
            case 'NEW_QA_HOMEWORK_ASK':
                this.commonService.myNavigation('/admin/teacher-qa/view-question/' + Number(notify.datas));
                break;
            case 'NEW_QA_EXAM_ANSWER':
            case 'NEW_QA_HOMEWORK_ANSWER':
                this.commonService.myNavigation('/student-qa/view-question/' + Number(notify.datas));
                break;
            case 'NEW_SHARE_CLASS_PERMISSION':
                this.commonService.myNavigation('/admin/student/class-details/' + (notify.classroomId));
                break;
            case 'NEW_SHARE_HOMEWORK_PERMISSION':
                this.commonService.myNavigation(`/admin/homework/score-list/${notify.classroomId}/${notify.homeworkId}/${notify.homeworkHashId}`);
                break;
            case 'NEW_SHARE_EXAM_PERMISSION':
                this.commonService.myNavigation(`/admin/testbank/tested-list/0/${notify.examId}/0`);
                break;
            case 'NEW_REQUEST_REAPPROVE':
                break;
        }
        if (notify.homeworkId === null && notify.homeworkHashId === null && notify.examHashId === null && notify.examId === null) {
            if (notify.type == 'NEW_ASSIGN') {
                this.commonService.myNavigation('/admin/student/manage-class/0');
            }
            else if (notify.type == 'NEW_REQUEST_REAPPROVE') {
                // ko chuyen trang
            }
            else {
                this.commonService.myNavigation('/student/dashboard/1');
            }
        }
    }
    reApproveStudent(studentId, noticeId) {
        this.subscriptions.add(this.studentService.apiStudentRemoveMappingObjGet(studentId).subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.delRequestNotice(noticeId);
                this.getDataNotifyByRole(this.role, this.page);
                this.commonService.snackSuccess('Mở khóa cho học sinh thành công', '');
            }
            else {
                this.showErrorSnack((_a = response.message) !== null && _a !== void 0 ? _a : '');
            }
        }));
    }
    delRequestNotice(noticeId) {
        this.subscriptions.add(this.noticeService.apiNoticeDeleteObjGet(noticeId).subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.reGetNotifice();
                this.getDataNotifyByRole(this.role, this.page);
            }
            else {
                this.showErrorSnack((_a = response.message) !== null && _a !== void 0 ? _a : '');
            }
        }));
    }
    reGetNotifice() {
        var headerKey = 'back_header_infors_' + this.baseApiService.getUserObj().id;
        this.globalService.removeGlobalData(headerKey);
    }
    createPag() {
        for (let index = 1; index <= this.lengthPage; index++) {
            this.arrayPag.push(index);
        }
    }
    clickPage(page) {
        this.isLoading = true;
        this.page = page;
        this.arrayPag = [];
        this.commonService.myNavigation(`/notify/${this.role}/${this.page}`);
        this.getDataNotifyByRole(this.role, this.page);
        window.scrollTo(0, 0);
    }
    ngOnInit() {
        this.role = +this.commonService.getMyParam(this.activeRoute, 'role');
        this.page = +this.commonService.getMyParam(this.activeRoute, 'page');
        this.getDataNotifyByRole(this.role, this.page);
        this.commonService.translateMetaData({
            title: 'lang_cms_homework_notify_title',
            description: 'lang_cms_homework_notify_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
}
NotifyListComponent.ɵfac = function NotifyListComponent_Factory(t) { return new (t || NotifyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.NoticeService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService)); };
NotifyListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: NotifyListComponent, selectors: [["app-notify"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 4, consts: [["class", "mb-3", 3, "headerTitle", "back_link", 4, "ngIf"], [3, "headerTitle", "back_link", 4, "ngIf"], [1, "container-fluid", "component-wrap", "content", "maxW1000", "m-auto", "mt-3"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [1, "mb-3", 3, "headerTitle", "back_link"], [3, "headerTitle", "back_link"], [1, "dashboard"], [1, "content__notifi"], ["class", "block", 4, "ngFor", "ngForOf"], [1, "my-4"], [3, "lengthPage", "paging", "SendPage"], [1, "block"], ["class", "notify__block", 3, "click", 4, "ngIf"], [1, "notify__block", 3, "click"], [1, "col-3", "left-col", "d-flex", "justify-content-center", "align-items-center", "ng-star-inserted", "notify__class"], [1, "content-center", "text-white", "class-info", "pt-2", "pb-2"], [1, "notify__content"], [4, "ngIf"], ["class", "pt-1 pb-1 clickable", 4, "ngIf"], [1, "time__ago"], [1, "notify__name"], [1, "notify__time"], [1, "pt-1", "pb-1", "clickable"], [1, "notify__content", "p-0"], ["class", "d-block", 4, "ngIf"], [1, "d-flex", "justify-content-end", "mt-2", 2, "flex-wrap", "wrap"], [1, "notify__btn", 3, "click"], [1, "notify__btn", "bg-info", "ml-2", 3, "click"], [1, "d-block"]], template: function NotifyListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, NotifyListComponent_header_backend_0_Template, 2, 4, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NotifyListComponent_header_frontend_1_Template, 2, 4, "header-frontend", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, NotifyListComponent_azt_loading_effect_3_Template, 1, 0, "azt-loading-effect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, NotifyListComponent_ng_template_4_Template, 5, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "homework-backend-footer");
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.role == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.role == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_5__.HeaderBackendComponent, _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_6__.HeaderFrontendComponent, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_7__.AztLoadingEffectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _azota_ui_azt_paging_controller_component__WEBPACK_IMPORTED_MODULE_8__.AztPaging], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__.MytranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  box-sizing: border-box;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.white[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  padding-bottom: -5px;\n  background-color: #fff;\n  height: 50px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.text-white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n.back-to[_ngcontent-%COMP%] {\n  color: #969696;\n  display: flex;\n  text-decoration: none;\n}\n\n.block[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.dashboard__header[_ngcontent-%COMP%] {\n  background-color: #0089a7;\n  margin-top: -15px;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.header__top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.header__coin[_ngcontent-%COMP%] {\n  background-color: #009cbe;\n  width: 90px;\n  height: 36px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: none;\n  text-align: center;\n  padding-top: 8px;\n}\n\n.notify__btn[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 5px;\n  color: #000;\n  font-size: 12px;\n  border: 1px solid #979696;\n}\n\n.bg-info[_ngcontent-%COMP%] {\n  color: #fff !important;\n  border: none !important;\n  background-color: #00a7d0;\n}\n\n.coin__link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.coin__text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 4px;\n  font-size: 18px;\n}\n\n.header__work[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.header__gift[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 24px;\n  margin-top: 8px;\n}\n\n.gift__link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.girt__count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -10px;\n  background-color: #fe4531;\n  border-radius: 50%;\n  padding: 3px;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  color: #fff;\n  padding: 0;\n  text-align: center;\n  font-weight: 700;\n  font-size: 9px;\n}\n\n.header__work[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.header__user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  margin-top: 4px;\n}\n\n.header__body[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  text-align: center;\n  color: #fff;\n}\n\n.header__body[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n\n.content__notifi[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.content__title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.notify__block[_ngcontent-%COMP%] {\n  display: flex;\n  border-width: 0px;\n  background-color: white;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1215686275);\n  margin-top: 15px;\n}\n\n.notify__class[_ngcontent-%COMP%] {\n  background-color: #00c0f0;\n  border-radius: 3px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.notify__content[_ngcontent-%COMP%] {\n  color: #000;\n  padding: 10px;\n}\n\n.class__text[_ngcontent-%COMP%] {\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.notify__name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.notify__time[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.time__ago[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-top: 5px;\n  color: #909090;\n}\n\n.col-pag[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  text-align: right;\n}\n\n.btn-pag[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n}\n\n.page-item[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxxQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFPSjs7QUFMQTtFQUNJLGdCQUFBO0FBUUo7O0FBTkE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVNKOztBQVBBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQVVKOztBQVJBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVdKOztBQVRBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVlGOztBQVZBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBYUY7O0FBWEE7RUFDSSxXQUFBO0FBY0o7O0FBWkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWVKOztBQWJBO0VBQ0ksYUFBQTtBQWdCSjs7QUFkQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBaUJKOztBQWZBO0VBQ0ksV0FBQTtBQWtCSjs7QUFoQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQW1CSjs7QUFqQkE7RUFDSSxlQUFBO0FBb0JKOztBQWxCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBcUJKOztBQWxCQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBcUJKOztBQW5CQTtFQUNJLGVBQUE7QUFzQko7O0FBcEJBO0VBQ0ksZ0JBQUE7QUF1Qko7O0FBckJBO0VBQ0kseUJBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFHQSxtREFBQTtFQUNBLGdCQUFBO0FBeUJKOztBQXZCQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBMEJKOztBQXhCQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBMkJKOztBQXpCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksaUJBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksaUJBQUE7QUE4Qko7O0FBNUJBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBK0JKOztBQTdCQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBZ0NKOztBQTlCQTtFQUNJLGdCQUFBO0FBaUNKOztBQS9CQTtFQUNJLGFBQUE7QUFrQ0oiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ud2hpdGV7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAtNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiA1MHB4XG59XG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udGV4dC13aGl0ZSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uY29udGVudHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uYmFjay10b3tcbiAgICBjb2xvcjogaHNsKDBkZWcgMCUgNTklKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5ibG9ja3tcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLmRhc2hib2FyZF9faGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg5YTc7XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG59XG4uaGVhZGVyX190b3B7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi5oZWFkZXJfX2NvaW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWNiZTtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLm5vdGlmeV9fYnRue1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgICM5Nzk2OTY7XG59XG4uYmctaW5mb3tcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTdkMDtcbn1cbi5jb2luX19saW5re1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmNvaW5fX3RleHR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLmhlYWRlcl9fd29ya3tcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmhlYWRlcl9fZ2lmdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn1cbi5naWZ0X19saW5re1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmdpcnRfX2NvdW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01cHg7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTQ1MzE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiA5cHg7XG59XG4uaGVhZGVyX193b3JrIC5tYXRlcmlhbC1pY29uc3tcbiAgICBmb250LXNpemU6IDMycHg7XG59XG4uaGVhZGVyX191c2VyIGltZ3tcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi10b3A6IDRweDtcblxufVxuLmhlYWRlcl9fYm9keXtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyX19ib2R5IC5tYXRlcmlhbC1pY29uc3tcbiAgICBmb250LXNpemU6IDQ1cHg7XG59XG4uY29udGVudF9fbm90aWZpe1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29udGVudF9fdGl0bGV7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5ub3RpZnlfX2Jsb2Nre1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcgMCUgMTAwJSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMjE1Njg2Mjc0NTA5OCk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIxNTY4NjI3NDUwOTgpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMjE1Njg2Mjc0NTA5OCk7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5ub3RpZnlfX2NsYXNze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGMwZjA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbn1cbi5ub3RpZnlfX2NvbnRlbnR7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5jbGFzc19fdGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG4ubm90aWZ5X19uYW1le1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5vdGlmeV9fdGltZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50aW1lX19hZ297XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBjb2xvcjogIzkwOTA5MDtcbn1cbi5jb2wtcGFne1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5idG4tcGFne1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG59XG4ucGFnZS1pdGVte1xuICAgIG1hcmdpbjogMCAzcHg7XG59Il19 */"] });


/***/ }),

/***/ 93552:
/*!******************************************!*\
  !*** ./src/app/notify/routing.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifyRoutingModule": () => (/* binding */ NotifyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);
/* harmony import */ var src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auth_guards/auth.front.guard */ 45668);
/* harmony import */ var _notify_list_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify-list/controller.component */ 64901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






const NotifyRoutes = [
    {
        path: '',
        component: _notify_list_controller_component__WEBPACK_IMPORTED_MODULE_1__.NotifyListComponent,
        canActivate: [src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__.AuthFrontGuard],
        children: [
            {
                path: '',
                canActivateChild: [src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__.AuthFrontGuard],
                children: [
                    { path: '', component: _notify_list_controller_component__WEBPACK_IMPORTED_MODULE_1__.NotifyListComponent },
                ]
            }
        ]
    }
];
class NotifyRoutingModule {
}
NotifyRoutingModule.ɵfac = function NotifyRoutingModule_Factory(t) { return new (t || NotifyRoutingModule)(); };
NotifyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NotifyRoutingModule });
NotifyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(NotifyRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotifyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_notify_module_module_ts.js.map