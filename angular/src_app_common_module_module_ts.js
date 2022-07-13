"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_common_module_module_ts"],{

/***/ 64355:
/*!*****************************************!*\
  !*** ./src/app/common/module.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrashModule": () => (/* binding */ TrashModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 51908);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-pdf-viewer */ 53135);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-image-cropper */ 87414);
/* harmony import */ var src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/azota-ui/azota-ui.module */ 47470);
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ 75658);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing.module */ 58235);
/* harmony import */ var _trash_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trash/controller.component */ 24699);
/* harmony import */ var _utils_remove_dialog_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/remove-dialog/controller.component */ 51761);
/* harmony import */ var _utils_revert_dialog_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/revert-dialog/controller.component */ 73033);
/* harmony import */ var _utils_trash_class_tab_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/trash-class-tab/controller.component */ 86293);
/* harmony import */ var _utils_trash_exam_category_tab_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/trash-exam-category-tab/controller.component */ 46334);
/* harmony import */ var _utils_trash_exam_tab_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/trash-exam-tab/controller.component */ 11206);
/* harmony import */ var _utils_trash_homework_tab_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/trash-homework-tab/controller.component */ 2228);
/* harmony import */ var _utils_trash_student_tab_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/trash-student-tab/controller.component */ 94246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 5000);




















class TrashModule {
}
TrashModule.ɵfac = function TrashModule_Factory(t) { return new (t || TrashModule)(); };
TrashModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: TrashModule });
TrashModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__.EditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__.PdfViewerModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_19__.ImageCropperModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_3__.TrashRoutingModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](TrashModule, { declarations: [_trash_controller_component__WEBPACK_IMPORTED_MODULE_4__.TrashComponent,
        _utils_revert_dialog_controller_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmRevertComponent,
        _utils_trash_class_tab_controller_component__WEBPACK_IMPORTED_MODULE_7__.TrashClassTabComponent,
        _utils_remove_dialog_controller_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmRemoveComponent,
        _utils_trash_student_tab_controller_component__WEBPACK_IMPORTED_MODULE_11__.TrashStudentTabComponent,
        _utils_trash_homework_tab_controller_component__WEBPACK_IMPORTED_MODULE_10__.TrashHomeworkTabComponent,
        _utils_trash_exam_tab_controller_component__WEBPACK_IMPORTED_MODULE_9__.TrashExamTabComponent,
        _utils_trash_exam_category_tab_controller_component__WEBPACK_IMPORTED_MODULE_8__.TrashExamCategoryTabComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__.EditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__.PdfViewerModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_19__.ImageCropperModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_3__.TrashRoutingModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule] }); })();


/***/ }),

/***/ 58235:
/*!******************************************!*\
  !*** ./src/app/common/routing.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrashRoutingModule": () => (/* binding */ TrashRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);
/* harmony import */ var src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auth_guards/auth.front.guard */ 45668);
/* harmony import */ var _trash_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trash/controller.component */ 24699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);






const TrashRoutes = [
    {
        path: '',
        component: _trash_controller_component__WEBPACK_IMPORTED_MODULE_1__.TrashComponent,
        canActivate: [src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__.AuthFrontGuard],
        children: [
            { path: '', component: _trash_controller_component__WEBPACK_IMPORTED_MODULE_1__.TrashComponent }
        ]
    }
];
class TrashRoutingModule {
}
TrashRoutingModule.ɵfac = function TrashRoutingModule_Factory(t) { return new (t || TrashRoutingModule)(); };
TrashRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TrashRoutingModule });
TrashRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(TrashRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TrashRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule] }); })();


/***/ }),

/***/ 24699:
/*!******************************************************!*\
  !*** ./src/app/common/trash/controller.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrashComponent": () => (/* binding */ TrashComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 53251);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _utils_trash_class_tab_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/trash-class-tab/controller.component */ 86293);
/* harmony import */ var _utils_trash_student_tab_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/trash-student-tab/controller.component */ 94246);
/* harmony import */ var _utils_trash_homework_tab_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/trash-homework-tab/controller.component */ 2228);
/* harmony import */ var _utils_trash_exam_tab_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/trash-exam-tab/controller.component */ 11206);
/* harmony import */ var _utils_trash_exam_category_tab_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/trash-exam-category-tab/controller.component */ 46334);













function TrashComponent_div_5_app_trash_class_tab_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-trash-class-tab", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("SeeMore", function TrashComponent_div_5_app_trash_class_tab_1_Template_app_trash_class_tab_SeeMore_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.SeeMore($event)); })("DataRevert", function TrashComponent_div_5_app_trash_class_tab_1_Template_app_trash_class_tab_DataRevert_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.revertDataForTypeTab($event)); })("DataRemove", function TrashComponent_div_5_app_trash_class_tab_1_Template_app_trash_class_tab_DataRemove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.removeDataForTypeTab($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx_r6.allDataTrash == null ? null : ctx_r6.allDataTrash.classRooms)("nextPage", ctx_r6.nextPage)("type", 0);
} }
function TrashComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TrashComponent_div_5_app_trash_class_tab_1_Template, 1, 3, "app-trash-class-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.typeTab === 0);
} }
function TrashComponent_div_7_app_trash_student_tab_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-trash-student-tab", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("SeeMore", function TrashComponent_div_7_app_trash_student_tab_1_Template_app_trash_student_tab_SeeMore_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.SeeMore($event)); })("DataRevert", function TrashComponent_div_7_app_trash_student_tab_1_Template_app_trash_student_tab_DataRevert_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.revertDataForTypeTab($event)); })("DataRemove", function TrashComponent_div_7_app_trash_student_tab_1_Template_app_trash_student_tab_DataRemove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.removeDataForTypeTab($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx_r11.allDataTrash == null ? null : ctx_r11.allDataTrash.students)("nextPage", ctx_r11.nextPage)("type", 1);
} }
function TrashComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TrashComponent_div_7_app_trash_student_tab_1_Template, 1, 3, "app-trash-student-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.typeTab === 1);
} }
function TrashComponent_div_9_app_trash_homework_tab_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-trash-homework-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("SeeMore", function TrashComponent_div_9_app_trash_homework_tab_1_Template_app_trash_homework_tab_SeeMore_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r17.SeeMore($event)); })("DataRevert", function TrashComponent_div_9_app_trash_homework_tab_1_Template_app_trash_homework_tab_DataRevert_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.revertDataForTypeTab($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " (DataRemove)=\"removeDataForTypeTab($event)\"> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx_r16.allDataTrash == null ? null : ctx_r16.allDataTrash.homeworks)("nextPage", ctx_r16.nextPage)("type", 2);
} }
function TrashComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TrashComponent_div_9_app_trash_homework_tab_1_Template, 2, 3, "app-trash-homework-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.typeTab === 2);
} }
function TrashComponent_div_11_app_trash_exam_tab_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-trash-exam-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("SeeMore", function TrashComponent_div_11_app_trash_exam_tab_1_Template_app_trash_exam_tab_SeeMore_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.SeeMore($event)); })("DataRevert", function TrashComponent_div_11_app_trash_exam_tab_1_Template_app_trash_exam_tab_DataRevert_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.revertDataForTypeTab($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " (DataRemove)=\"removeDataForTypeTab($event)\"> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx_r20.allDataTrash == null ? null : ctx_r20.allDataTrash.exams)("nextPage", ctx_r20.nextPage)("type", 3);
} }
function TrashComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TrashComponent_div_11_app_trash_exam_tab_1_Template, 2, 3, "app-trash-exam-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.typeTab === 3);
} }
function TrashComponent_div_13_app_trash_exam_category_tab_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-trash-exam-category-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("SeeMore", function TrashComponent_div_13_app_trash_exam_category_tab_1_Template_app_trash_exam_category_tab_SeeMore_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.SeeMore($event)); })("DataRevert", function TrashComponent_div_13_app_trash_exam_category_tab_1_Template_app_trash_exam_category_tab_DataRevert_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r27.revertDataForTypeTab($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " (DataRemove)=\"removeDataForTypeTab($event)\"> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx_r24.allDataTrash == null ? null : ctx_r24.allDataTrash.categories)("nextPage", ctx_r24.nextPage)("type", 4);
} }
function TrashComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TrashComponent_div_13_app_trash_exam_category_tab_1_Template, 2, 3, "app-trash-exam-category-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.typeTab === 4);
} }
function TrashComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 16);
} }
class TrashComponent {
    constructor(router, trashService, commonService, baseApiService) {
        this.router = router;
        this.trashService = trashService;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.isLoading = false;
        this.typeTab = 0;
        this.nextPage = '';
    }
    getDataStudent() {
        this.trashService.apiTrashGetStudentObjsGet(this.nextPage.toString()).subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (result.success == 1) {
                this.nextPage = (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.nextPage) !== null && _b !== void 0 ? _b : '';
                var data = [];
                for (let i = 0; i < ((_e = (_d = (_c = result.data) === null || _c === void 0 ? void 0 : _c.objs) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0); i++) {
                    data.push(Object.assign(Object.assign({}, (_g = (_f = result.data) === null || _f === void 0 ? void 0 : _f.objs) === null || _g === void 0 ? void 0 : _g[i]), { nextPage: this.nextPage }));
                }
                var dataTrashNew = (_k = (_j = (_h = this.allDataTrash) === null || _h === void 0 ? void 0 : _h.students) === null || _j === void 0 ? void 0 : _j.concat(data)) !== null && _k !== void 0 ? _k : data;
                this.allDataTrash = Object.assign(Object.assign({}, this.allDataTrash), { students: dataTrashNew });
            }
            this.isLoading = false;
        });
    }
    getDataHomework() {
        this.trashService.apiTrashGetHomeworkObjsGet(this.nextPage.toString()).subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (result.success == 1) {
                var data = [];
                for (let i = 0; i < ((_c = (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.objs) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0); i++) {
                    data.push(Object.assign(Object.assign({}, (_e = (_d = result.data) === null || _d === void 0 ? void 0 : _d.objs) === null || _e === void 0 ? void 0 : _e[i]), { nextPage: this.nextPage }));
                }
                this.nextPage = (_g = (_f = result.data) === null || _f === void 0 ? void 0 : _f.nextPage) !== null && _g !== void 0 ? _g : '';
                var dataTrashNew = (_k = (_j = (_h = this.allDataTrash) === null || _h === void 0 ? void 0 : _h.homeworks) === null || _j === void 0 ? void 0 : _j.concat(data)) !== null && _k !== void 0 ? _k : data;
                this.allDataTrash = Object.assign(Object.assign({}, this.allDataTrash), { homeworks: dataTrashNew });
            }
            this.isLoading = false;
        });
    }
    getDataCategory() {
        this.trashService.apiTrashGetExamCategoryObjsGet(this.nextPage.toString()).subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (result.success == 1) {
                var data = [];
                this.nextPage = (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.nextPage) !== null && _b !== void 0 ? _b : '';
                for (let i = 0; i < ((_e = (_d = (_c = result.data) === null || _c === void 0 ? void 0 : _c.objs) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0); i++) {
                    data.push(Object.assign(Object.assign({}, (_g = (_f = result.data) === null || _f === void 0 ? void 0 : _f.objs) === null || _g === void 0 ? void 0 : _g[i]), { nextPage: this.nextPage }));
                }
                var dataTrashNew = (_k = (_j = (_h = this.allDataTrash) === null || _h === void 0 ? void 0 : _h.categories) === null || _j === void 0 ? void 0 : _j.concat(data)) !== null && _k !== void 0 ? _k : data;
                this.allDataTrash = Object.assign(Object.assign({}, this.allDataTrash), { categories: dataTrashNew });
            }
            this.isLoading = false;
        });
    }
    getDataExam() {
        this.trashService.apiTrashGetExamObjsGet(this.nextPage).subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (result.success == 1) {
                var data = [];
                this.nextPage = (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.nextPage) !== null && _b !== void 0 ? _b : '';
                for (let i = 0; i < ((_e = (_d = (_c = result.data) === null || _c === void 0 ? void 0 : _c.objs) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0); i++) {
                    data.push(Object.assign(Object.assign({}, (_g = (_f = result.data) === null || _f === void 0 ? void 0 : _f.objs) === null || _g === void 0 ? void 0 : _g[i]), { nextPage: this.nextPage }));
                }
                var dataTrashNew = (_k = (_j = (_h = this.allDataTrash) === null || _h === void 0 ? void 0 : _h.exams) === null || _j === void 0 ? void 0 : _j.concat(data)) !== null && _k !== void 0 ? _k : data;
                this.allDataTrash = Object.assign(Object.assign({}, this.allDataTrash), { exams: dataTrashNew });
            }
            this.isLoading = false;
        });
    }
    getDataClassroom() {
        this.trashService.apiTrashGetClassroomObjsGet(this.nextPage).subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (result.success == 1) {
                this.nextPage = (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.nextPage) !== null && _b !== void 0 ? _b : '';
                var data = [];
                for (let i = 0; i < ((_e = (_d = (_c = result.data) === null || _c === void 0 ? void 0 : _c.objs) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0); i++) {
                    data.push(Object.assign(Object.assign({}, (_g = (_f = result.data) === null || _f === void 0 ? void 0 : _f.objs) === null || _g === void 0 ? void 0 : _g[i]), { nextPage: this.nextPage }));
                }
                var dataTrashNew = (_k = (_j = (_h = this.allDataTrash) === null || _h === void 0 ? void 0 : _h.classRooms) === null || _j === void 0 ? void 0 : _j.concat(data)) !== null && _k !== void 0 ? _k : data;
                this.allDataTrash = Object.assign(Object.assign({}, this.allDataTrash), { classRooms: dataTrashNew });
            }
            this.isLoading = false;
        });
    }
    calculateNextPage(skipObj) {
        var parseNextPage = this.commonService.parseJson(this.nextPage);
        if (parseNextPage.isArchive == 1) {
            parseNextPage.skip = skipObj === null || skipObj === void 0 ? void 0 : skipObj.skipArchive;
        }
        else {
            parseNextPage.skip = skipObj === null || skipObj === void 0 ? void 0 : skipObj.skipLive;
        }
        this.nextPage = JSON.stringify(parseNextPage);
    }
    SelectedTabChange(indexSelectTab) {
        this.isLoading = true;
        this.nextPage = '';
        this.allDataTrash = {};
        if (indexSelectTab != null && indexSelectTab >= 0) {
            this.typeTab = indexSelectTab;
            this.commonService.myNavigation('/admin/trash/' + indexSelectTab);
        }
        this.getData();
    }
    SeeMore(event) {
        this.calculateNextPage(event.skipObj);
        this.getData();
    }
    CheckDataForGetObj() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (((_b = (_a = this.allDataTrash) === null || _a === void 0 ? void 0 : _a.classRooms) === null || _b === void 0 ? void 0 : _b.length) == 0) {
            this.SelectedTabChange(-1);
        }
        if (((_d = (_c = this.allDataTrash) === null || _c === void 0 ? void 0 : _c.students) === null || _d === void 0 ? void 0 : _d.length) == 0) {
            this.SelectedTabChange(-1);
        }
        if (((_f = (_e = this.allDataTrash) === null || _e === void 0 ? void 0 : _e.homeworks) === null || _f === void 0 ? void 0 : _f.length) == 0) {
            this.SelectedTabChange(-1);
        }
        if (((_h = (_g = this.allDataTrash) === null || _g === void 0 ? void 0 : _g.exams) === null || _h === void 0 ? void 0 : _h.length) == 0) {
            this.SelectedTabChange(-1);
        }
        if (((_k = (_j = this.allDataTrash) === null || _j === void 0 ? void 0 : _j.categories) === null || _k === void 0 ? void 0 : _k.length) == 0) {
            this.SelectedTabChange(-1);
        }
    }
    getData() {
        switch (this.typeTab) {
            case 0:
                this.getDataClassroom();
                break;
            case 1:
                this.getDataStudent();
                break;
            case 2:
                this.getDataHomework();
                break;
            case 3:
                this.getDataExam();
                break;
            case 4:
                this.getDataCategory();
                break;
        }
    }
    revertDataForTypeTab(idDataRevart) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35;
        if (this.typeTab == 0) {
            for (let iData = 0; iData < ((_c = (_b = (_a = this.allDataTrash) === null || _a === void 0 ? void 0 : _a.classRooms) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0); iData++) {
                if (idDataRevart === ((_e = (_d = this.allDataTrash) === null || _d === void 0 ? void 0 : _d.classRooms) === null || _e === void 0 ? void 0 : _e[iData].id)) {
                    const index = (_g = (_f = this.allDataTrash) === null || _f === void 0 ? void 0 : _f.classRooms) === null || _g === void 0 ? void 0 : _g.indexOf((_j = (_h = this.allDataTrash) === null || _h === void 0 ? void 0 : _h.classRooms) === null || _j === void 0 ? void 0 : _j[iData]);
                    if (index > -1) {
                        (_l = (_k = this.allDataTrash) === null || _k === void 0 ? void 0 : _k.classRooms) === null || _l === void 0 ? void 0 : _l.splice(index, 1);
                        this.allDataTrash = Object.assign(Object.assign({}, this.allDataTrash), { classRooms: (_m = this.allDataTrash) === null || _m === void 0 ? void 0 : _m.classRooms });
                    }
                }
            }
        }
        if (this.typeTab == 1) {
            for (let iData = 0; iData < ((_q = (_p = (_o = this.allDataTrash) === null || _o === void 0 ? void 0 : _o.students) === null || _p === void 0 ? void 0 : _p.length) !== null && _q !== void 0 ? _q : 0); iData++) {
                if (idDataRevart === ((_s = (_r = this.allDataTrash) === null || _r === void 0 ? void 0 : _r.students) === null || _s === void 0 ? void 0 : _s[iData].id)) {
                    const index = (_u = (_t = this.allDataTrash) === null || _t === void 0 ? void 0 : _t.students) === null || _u === void 0 ? void 0 : _u.indexOf((_w = (_v = this.allDataTrash) === null || _v === void 0 ? void 0 : _v.students) === null || _w === void 0 ? void 0 : _w[iData]);
                    if (index > -1) {
                        (_y = (_x = this.allDataTrash) === null || _x === void 0 ? void 0 : _x.students) === null || _y === void 0 ? void 0 : _y.splice(index, 1);
                        this.allDataTrash = Object.assign(Object.assign({}, this.allDataTrash), { students: (_z = this.allDataTrash) === null || _z === void 0 ? void 0 : _z.students });
                    }
                }
            }
        }
        if (this.typeTab == 2) {
            for (let iData = 0; iData < ((_2 = (_1 = (_0 = this.allDataTrash) === null || _0 === void 0 ? void 0 : _0.homeworks) === null || _1 === void 0 ? void 0 : _1.length) !== null && _2 !== void 0 ? _2 : 0); iData++) {
                if (idDataRevart === ((_4 = (_3 = this.allDataTrash) === null || _3 === void 0 ? void 0 : _3.homeworks) === null || _4 === void 0 ? void 0 : _4[iData].id)) {
                    const index = (_6 = (_5 = this.allDataTrash) === null || _5 === void 0 ? void 0 : _5.homeworks) === null || _6 === void 0 ? void 0 : _6.indexOf((_8 = (_7 = this.allDataTrash) === null || _7 === void 0 ? void 0 : _7.homeworks) === null || _8 === void 0 ? void 0 : _8[iData]);
                    if (index > -1) {
                        (_10 = (_9 = this.allDataTrash) === null || _9 === void 0 ? void 0 : _9.homeworks) === null || _10 === void 0 ? void 0 : _10.splice(index, 1);
                        this.allDataTrash = Object.assign(Object.assign({}, this.allDataTrash), { homeworks: (_11 = this.allDataTrash) === null || _11 === void 0 ? void 0 : _11.homeworks });
                    }
                }
            }
        }
        if (this.typeTab == 3) {
            for (let iData = 0; iData < ((_14 = (_13 = (_12 = this.allDataTrash) === null || _12 === void 0 ? void 0 : _12.exams) === null || _13 === void 0 ? void 0 : _13.length) !== null && _14 !== void 0 ? _14 : 0); iData++) {
                if (idDataRevart === ((_16 = (_15 = this.allDataTrash) === null || _15 === void 0 ? void 0 : _15.exams) === null || _16 === void 0 ? void 0 : _16[iData].id)) {
                    const index = (_18 = (_17 = this.allDataTrash) === null || _17 === void 0 ? void 0 : _17.exams) === null || _18 === void 0 ? void 0 : _18.indexOf((_20 = (_19 = this.allDataTrash) === null || _19 === void 0 ? void 0 : _19.exams) === null || _20 === void 0 ? void 0 : _20[iData]);
                    if (index > -1) {
                        (_22 = (_21 = this.allDataTrash) === null || _21 === void 0 ? void 0 : _21.exams) === null || _22 === void 0 ? void 0 : _22.splice(index, 1);
                        this.allDataTrash = Object.assign(Object.assign({}, this.allDataTrash), { exams: (_23 = this.allDataTrash) === null || _23 === void 0 ? void 0 : _23.exams });
                    }
                }
            }
        }
        if (this.typeTab == 4) {
            for (let iData = 0; iData < ((_26 = (_25 = (_24 = this.allDataTrash) === null || _24 === void 0 ? void 0 : _24.categories) === null || _25 === void 0 ? void 0 : _25.length) !== null && _26 !== void 0 ? _26 : 0); iData++) {
                if (idDataRevart === ((_28 = (_27 = this.allDataTrash) === null || _27 === void 0 ? void 0 : _27.categories) === null || _28 === void 0 ? void 0 : _28[iData].id)) {
                    const index = (_30 = (_29 = this.allDataTrash) === null || _29 === void 0 ? void 0 : _29.categories) === null || _30 === void 0 ? void 0 : _30.indexOf((_32 = (_31 = this.allDataTrash) === null || _31 === void 0 ? void 0 : _31.categories) === null || _32 === void 0 ? void 0 : _32[iData]);
                    if (index > -1) {
                        (_34 = (_33 = this.allDataTrash) === null || _33 === void 0 ? void 0 : _33.categories) === null || _34 === void 0 ? void 0 : _34.splice(index, 1);
                        this.allDataTrash = Object.assign(Object.assign({}, this.allDataTrash), { categories: (_35 = this.allDataTrash) === null || _35 === void 0 ? void 0 : _35.categories });
                    }
                }
            }
        }
        this.CheckDataForGetObj();
    }
    removeDataForTypeTab(dataRemove) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10;
        for (let i = 0; i < dataRemove.length; i++) {
            if (this.typeTab == 0) {
                for (let index = 0; index < ((_c = (_b = (_a = this.allDataTrash) === null || _a === void 0 ? void 0 : _a.classRooms) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0); index++) {
                    if (dataRemove[i] == ((_e = (_d = this.allDataTrash) === null || _d === void 0 ? void 0 : _d.classRooms) === null || _e === void 0 ? void 0 : _e[index].id)) {
                        (_g = (_f = this.allDataTrash) === null || _f === void 0 ? void 0 : _f.classRooms) === null || _g === void 0 ? void 0 : _g.splice(index, 1);
                    }
                }
            }
            if (this.typeTab == 1) {
                for (let index = 0; index < ((_k = (_j = (_h = this.allDataTrash) === null || _h === void 0 ? void 0 : _h.students) === null || _j === void 0 ? void 0 : _j.length) !== null && _k !== void 0 ? _k : 0); index++) {
                    if (dataRemove[i] == ((_m = (_l = this.allDataTrash) === null || _l === void 0 ? void 0 : _l.students) === null || _m === void 0 ? void 0 : _m[index].id)) {
                        (_p = (_o = this.allDataTrash) === null || _o === void 0 ? void 0 : _o.students) === null || _p === void 0 ? void 0 : _p.splice(index, 1);
                    }
                }
            }
            if (this.typeTab == 2) {
                for (let index = 0; index < ((_s = (_r = (_q = this.allDataTrash) === null || _q === void 0 ? void 0 : _q.homeworks) === null || _r === void 0 ? void 0 : _r.length) !== null && _s !== void 0 ? _s : 0); index++) {
                    if (dataRemove[i] == ((_u = (_t = this.allDataTrash) === null || _t === void 0 ? void 0 : _t.homeworks) === null || _u === void 0 ? void 0 : _u[index].id)) {
                        (_w = (_v = this.allDataTrash) === null || _v === void 0 ? void 0 : _v.homeworks) === null || _w === void 0 ? void 0 : _w.splice(index, 1);
                    }
                }
            }
            if (this.typeTab == 3) {
                for (let index = 0; index < ((_z = (_y = (_x = this.allDataTrash) === null || _x === void 0 ? void 0 : _x.exams) === null || _y === void 0 ? void 0 : _y.length) !== null && _z !== void 0 ? _z : 0); index++) {
                    if (dataRemove[i] == ((_1 = (_0 = this.allDataTrash) === null || _0 === void 0 ? void 0 : _0.exams) === null || _1 === void 0 ? void 0 : _1[index].id)) {
                        (_3 = (_2 = this.allDataTrash) === null || _2 === void 0 ? void 0 : _2.exams) === null || _3 === void 0 ? void 0 : _3.splice(index, 1);
                    }
                }
            }
            if (this.typeTab == 4) {
                for (let index = 0; index < ((_6 = (_5 = (_4 = this.allDataTrash) === null || _4 === void 0 ? void 0 : _4.categories) === null || _5 === void 0 ? void 0 : _5.length) !== null && _6 !== void 0 ? _6 : 0); index++) {
                    if (dataRemove[i] == ((_8 = (_7 = this.allDataTrash) === null || _7 === void 0 ? void 0 : _7.categories) === null || _8 === void 0 ? void 0 : _8[index].id)) {
                        (_10 = (_9 = this.allDataTrash) === null || _9 === void 0 ? void 0 : _9.categories) === null || _10 === void 0 ? void 0 : _10.splice(index, 1);
                    }
                }
            }
        }
        this.CheckDataForGetObj();
    }
    ngOnInit() {
        this.isLoading = true;
        var getTypeTab = this.router.snapshot.paramMap.get('type');
        this.typeTab = parseInt(getTypeTab ? getTypeTab : '0', 10);
        this.getData();
        this.commonService.translateMetaData({
            title: 'lang_cms_trash_title',
            description: 'lang_cms_trash_description',
            image: 'lang_cms_test_image',
        });
    }
}
TrashComponent.ɵfac = function TrashComponent_Factory(t) { return new (t || TrashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__.TrashService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__.BaseApiService)); };
TrashComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: TrashComponent, selectors: [["app-trash"]], decls: 15, vars: 9, consts: [[3, "headerTitle", "back_link"], [1, "container"], [1, "app", "py-4", "maxW1200"], [3, "selectedIndex", "selectedTabChange"], ["label", "L\u1EDBp h\u1ECDc"], ["class", "wrapper", 4, "ngIf"], ["label", "H\u1ECDc sinh"], ["label", "B\u00E0i t\u1EADp"], ["label", "\u0110\u1EC1 thi"], ["label", "Th\u01B0 m\u1EE5c \u0111\u1EC1 thi"], ["class", "spinner-border spinner-border-sm", "role", "status", "style", "display: flex; margin: 20% auto;", 4, "ngIf"], [1, "wrapper"], [3, "data", "nextPage", "type", "SeeMore", "DataRevert", "DataRemove", 4, "ngIf"], [3, "data", "nextPage", "type", "SeeMore", "DataRevert", "DataRemove"], [3, "data", "nextPage", "type", "SeeMore", "DataRevert", 4, "ngIf"], [3, "data", "nextPage", "type", "SeeMore", "DataRevert"], ["role", "status", 1, "spinner-border", "spinner-border-sm", 2, "display", "flex", "margin", "20% auto"]], template: function TrashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "mat-tab-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectedTabChange", function TrashComponent_Template_mat_tab_group_selectedTabChange_3_listener($event) { return ctx.SelectedTabChange($event.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, TrashComponent_div_5_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, TrashComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, TrashComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, TrashComponent_div_11_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, TrashComponent_div_13_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, TrashComponent_div_14_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("headerTitle", "Th\u00F9ng R\u00E1c")("back_link", "/admin/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("selectedIndex", ctx.typeTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading === true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTab, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__.HeaderBackendComponent, _utils_trash_class_tab_controller_component__WEBPACK_IMPORTED_MODULE_4__.TrashClassTabComponent, _utils_trash_student_tab_controller_component__WEBPACK_IMPORTED_MODULE_5__.TrashStudentTabComponent, _utils_trash_homework_tab_controller_component__WEBPACK_IMPORTED_MODULE_6__.TrashHomeworkTabComponent, _utils_trash_exam_tab_controller_component__WEBPACK_IMPORTED_MODULE_7__.TrashExamTabComponent, _utils_trash_exam_category_tab_controller_component__WEBPACK_IMPORTED_MODULE_8__.TrashExamCategoryTabComponent], styles: [".wrapper[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}"] });


/***/ }),

/***/ 51761:
/*!********************************************************************!*\
  !*** ./src/app/common/utils/remove-dialog/controller.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmRemoveComponent": () => (/* binding */ ConfirmRemoveComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);





class ConfirmRemoveComponent {
    constructor(trashService, commonService, dialogRef, data) {
        this.trashService = trashService;
        this.commonService = commonService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    postRemoveExam(data) {
        this.trashService.apiTrashRemoveExamPost(data).subscribe((response) => {
            if (response.success == 1) {
                this.onNoClick('remove');
                this.commonService.snackSuccess('Xóa đề thi thành công', '');
            }
            else {
                this.onNoClick('cancel');
                this.commonService.snackError('Lỗi: xóa đề thi không thành công', '');
            }
        });
    }
    postRemoveExamCategory(data) {
        this.trashService.apiTrashRemoveExamCategoryPost(data).subscribe((response) => {
            if (response.success == 1) {
                this.onNoClick('remove');
                this.commonService.snackSuccess('Xóa thư mục đề thi thành công', '');
            }
            else {
                this.onNoClick('cancel');
                this.commonService.snackError('Lỗi: xóa thư mục đề thi không thành công', '');
            }
        });
    }
    postRemoveHomework(data) {
        this.trashService.apiTrashRemoveHomeworkPost(data).subscribe((response) => {
            if (response.success == 1) {
                this.onNoClick('remove');
                this.commonService.snackSuccess('Xóa bài tập thành công', '');
            }
            else {
                this.onNoClick('cancel');
                this.commonService.snackError('Lỗi: xóa bài tập không thành công', '');
            }
        });
    }
    postRemoveClassroom(data) {
        this.trashService.apiTrashRemoveClassroomPost(data).subscribe((response) => {
            if (response.success == 1) {
                this.onNoClick('remove');
                this.commonService.snackSuccess('Xóa lớp học thành công', '');
            }
            else {
                this.onNoClick('cancel');
                this.commonService.snackError('Lỗi: xóa lớp học không thành công', '');
            }
        });
    }
    postRemoveStudent(data) {
        console.log(data);
        this.trashService.apiTrashRemoveStudentPost(data).subscribe((response) => {
            if (response.success == 1) {
                this.onNoClick('remove');
                this.commonService.snackSuccess('Xóa học sinh thành công', '');
            }
            else {
                this.onNoClick('cancel');
                this.commonService.snackError('Lỗi: xóa học sinh không thành công', '');
            }
        });
    }
    changeRemove(data) {
        var arr = data.data;
        if (data.type == 0) {
            this.postRemoveClassroom(arr);
        }
        else if (data.type == 1) {
            this.postRemoveStudent(arr);
        }
        else if (data.type == 2) {
            this.postRemoveHomework(arr);
        }
        else if (data.type == 3) {
            this.postRemoveExam(arr);
        }
        else if (data.type == 4) {
            this.postRemoveExamCategory(arr);
        }
    }
    ngOnInit() {
    }
    onNoClick(event) {
        this.dialogRef.close(event);
    }
}
ConfirmRemoveComponent.ɵfac = function ConfirmRemoveComponent_Factory(t) { return new (t || ConfirmRemoveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__.TrashService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
ConfirmRemoveComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConfirmRemoveComponent, selectors: [["app-remove-dialog"]], decls: 12, vars: 2, consts: [[2, "border-bottom", "1px solid", "margin-bottom", "20px", "padding-bottom", "10px"], [2, "color", "#6d6d6d", "font-weight", "400!important", "text-align", "center", "font-size", "18px"], [2, "color", "#dc3545!important"], [2, "float", "right"], ["type", "button", 1, "btn", "btn-danger", "mr-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ConfirmRemoveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\u00F3a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u0111\u00E3 \u0111\u00E1nh d\u1EA5u ra kh\u1ECFi th\u00F9ng r\u00E1c? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3)(8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfirmRemoveComponent_Template_button_click_8_listener() { return ctx.onNoClick("cancal"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "H\u1EE7y");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfirmRemoveComponent_Template_button_click_10_listener() { return ctx.changeRemove(ctx.data); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Ti\u1EBFp t\u1EE5c");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.data.data == null ? null : ctx.data.data.length, " ", ctx.data.type == 0 ? " l\u1EDBp h\u1ECDc " : ctx.data.type == 1 ? " h\u1ECDc sinh " : ctx.data.type == 2 ? " b\u00E0i t\u1EADp " : ctx.data.type == 3 ? " \u0111\u1EC1 thi " : ctx.data.type == 4 ? " th\u01B0 m\u1EE5c \u0111\u1EC1 thi " : "", " ");
    } }, encapsulation: 2 });


/***/ }),

/***/ 73033:
/*!********************************************************************!*\
  !*** ./src/app/common/utils/revert-dialog/controller.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmRevertComponent": () => (/* binding */ ConfirmRevertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 87238);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);










function ConfirmRevertComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " B\u1EA1n mu\u1ED1n kh\u00F4i ph\u1EE5c l\u1EDBp h\u1ECDc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ConfirmRevertComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " B\u1EA1n mu\u1ED1n kh\u00F4i ph\u1EE5c \u0111\u1EC1 thi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ConfirmRevertComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " B\u1EA1n mu\u1ED1n kh\u00F4i ph\u1EE5c danh m\u1EE5c ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ConfirmRevertComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " B\u1EA1n mu\u1ED1n kh\u00F4i ph\u1EE5c b\u00E0i t\u1EADp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ConfirmRevertComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " B\u1EA1n mu\u1ED1n kh\u00F4i ph\u1EE5c h\u1ECDc sinh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ConfirmRevertComponent_div_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r6.data == null ? null : ctx_r6.data.obj == null ? null : ctx_r6.data.obj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r6.data == null ? null : ctx_r6.data.obj == null ? null : ctx_r6.data.obj.name, " ?");
} }
function ConfirmRevertComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ConfirmRevertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ConfirmRevertComponent_div_0_div_3_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ConfirmRevertComponent_div_0_div_4_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ConfirmRevertComponent_div_0_div_5_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ConfirmRevertComponent_div_0_div_6_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ConfirmRevertComponent_div_0_div_7_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ConfirmRevertComponent_div_0_span_9_Template, 2, 2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfirmRevertComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.btnCloseDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfirmRevertComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.confirmRevert()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ConfirmRevertComponent_div_0_span_16_Template, 3, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.typeString === "classroom");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.typeString === "exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.typeString === "category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.typeString === "homework");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.typeString === "student");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.data == null ? null : ctx_r0.data.obj == null ? null : ctx_r0.data.obj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 10, "lang_cms_common_close_btn"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isLoading === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 12, "lang_cms_common_confirm_btn"), " ");
} }
class ConfirmRevertComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, trashService) {
        super(commonService);
        this.commonService = commonService;
        this.trashService = trashService;
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.isLoading = false;
        this.typeString = '';
    }
    confirmRevert() {
        var _a;
        switch ((_a = this.data) === null || _a === void 0 ? void 0 : _a.type) {
            case 0:
                this.subscriptions.add(this.trashService.apiTrashRevertClassroomGet(this.data.obj.curPage.toString(), Number(this.data.obj.id)).subscribe((response) => {
                    var _a, _b;
                    if (response.success == 1) {
                        this.closeDialog.emit((_a = this.data) === null || _a === void 0 ? void 0 : _a.obj);
                        this.showSuccessSnack('Khôi phục dữ liệu lớp học thành công');
                    }
                    else {
                        this.btnCloseDialog();
                        this.showErrorSnack((_b = response.message) !== null && _b !== void 0 ? _b : '');
                    }
                }));
                break;
            case 1:
                this.subscriptions.add(this.trashService.apiTrashRevertStudentGet(this.data.obj.curPage.toString(), Number(this.data.obj.id)).subscribe((response) => {
                    var _a, _b;
                    if (response.success == 1) {
                        this.closeDialog.emit((_a = this.data) === null || _a === void 0 ? void 0 : _a.obj);
                        this.showSuccessSnack('Khôi phục dữ liệu thành công');
                    }
                    else {
                        this.btnCloseDialog();
                        this.showErrorSnack((_b = response.message) !== null && _b !== void 0 ? _b : '');
                    }
                }));
                break;
            case 2:
                this.subscriptions.add(this.trashService.apiTrashRevertHomeworkGet(this.data.obj.curPage.toString(), Number(this.data.obj.id)).subscribe((response) => {
                    var _a, _b;
                    if (response.success == 1) {
                        this.closeDialog.emit((_a = this.data) === null || _a === void 0 ? void 0 : _a.obj);
                        this.showSuccessSnack('Khôi phục dữ liệu thành công');
                    }
                    else {
                        this.btnCloseDialog();
                        this.showErrorSnack((_b = response.message) !== null && _b !== void 0 ? _b : '');
                    }
                }));
                break;
            case 3:
                this.subscriptions.add(this.trashService.apiTrashRevertExamGet(this.data.obj.curPage.toString(), Number(this.data.obj.id)).subscribe((response) => {
                    var _a, _b;
                    if (response.success == 1) {
                        this.closeDialog.emit((_a = this.data) === null || _a === void 0 ? void 0 : _a.obj);
                        this.showSuccessSnack('Khôi phục dữ liệu thành công');
                    }
                    else {
                        this.btnCloseDialog();
                        this.showErrorSnack((_b = response.message) !== null && _b !== void 0 ? _b : '');
                    }
                }));
                break;
            case 4:
                this.subscriptions.add(this.trashService.apiTrashRevertExamCategoryGet(this.data.obj.curPage.toString(), Number(this.data.obj.id)).subscribe((response) => {
                    var _a, _b;
                    if (response.success == 1) {
                        this.closeDialog.emit((_a = this.data) === null || _a === void 0 ? void 0 : _a.obj);
                        this.showSuccessSnack('Khôi phục dữ liệu thành công');
                    }
                    else {
                        this.btnCloseDialog();
                        this.showErrorSnack((_b = response.message) !== null && _b !== void 0 ? _b : '');
                    }
                }));
                break;
        }
    }
    checkType() {
        if (this.data) {
            switch (this.data.type) {
                case 0:
                    this.typeString = 'classroom';
                    break;
                case 1:
                    this.typeString = 'student';
                    break;
                case 2:
                    this.typeString = 'homework';
                    break;
                case 3:
                    this.typeString = 'exam';
                    break;
                case 4:
                    this.typeString = 'category';
                    break;
            }
        }
        return this.typeString;
    }
    btnCloseDialog() {
        this.closeDialog.emit();
    }
    ngOnInit() {
        this.checkType();
        super.ngOnInit();
    }
}
ConfirmRevertComponent.ɵfac = function ConfirmRevertComponent_Factory(t) { return new (t || ConfirmRevertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.TrashService)); };
ConfirmRevertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ConfirmRevertComponent, selectors: [["app-revert-dialog"]], inputs: { data: "data" }, outputs: { closeDialog: "closeDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 4, "ngIf"], [1, "school-info_bg"], [1, "school-info", "p-4"], [1, "text-center"], [4, "ngIf"], [1, "h5", "text-danger", 2, "padding-bottom", "21px", "border-bottom", "1px solid #b2b4b7"], ["class", "truncate", 3, "matTooltip", 4, "ngIf"], [1, "d-flex", "float-right", "mt-3"], [1, "azt-block-button"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "15px", 3, "disabled", "click"], [1, "h5", "para_respon", "font-weight-normal"], [1, "truncate", 3, "matTooltip"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function ConfirmRevertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ConfirmRevertComponent_div_0_Template, 19, 14, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.isShow);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__.MytranslatePipe], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  z-index: 9998;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background: rgba(0, 0, 0, 0.5607843137);\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 9999;\n  top: 50%;\n  left: 50%;\n  min-width: 30%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  max-width: 600px;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 95%;\n  }\n}"] });


/***/ }),

/***/ 86293:
/*!**********************************************************************!*\
  !*** ./src/app/common/utils/trash-class-tab/controller.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrashClassTabComponent": () => (/* binding */ TrashClassTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _remove_dialog_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remove-dialog/controller.component */ 51761);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 77446);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 87238);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _revert_dialog_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../revert-dialog/controller.component */ 73033);













function TrashClassTabComponent_azt_loading_effect_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "azt-loading-effect");
} }
function TrashClassTabComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TrashClassTabComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " B\u1EA5m v\u00E0o n\u00FAt b\u00EAn d\u01B0\u1EDBi \u0111\u1EC3n xem b\u1EA3n ghi c\u0169 h\u01A1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TrashClassTabComponent_ng_template_1_div_2_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashClassTabComponent_ng_template_1_div_2_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.clickRemoveAllData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "x\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TrashClassTabComponent_ng_template_1_div_2_div_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", item_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r13.name);
} }
function TrashClassTabComponent_ng_template_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TrashClassTabComponent_ng_template_1_div_2_div_4_Template_mat_checkbox_change_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const i_r14 = restoredCtx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.updateAllComplete($event.checked, i_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 16)(6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TrashClassTabComponent_ng_template_1_div_2_div_4_span_7_Template, 2, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Th\u1EDDi gian x\u00F3a: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashClassTabComponent_ng_template_1_div_2_div_4_Template_div_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const item_r13 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.clickRevertData(item_r13.nextPage, item_r13.id, item_r13.name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 22)(16, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Kh\u00F4i ph\u1EE5c");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", item_r13.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 4, item_r13.deletedAt, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 7, item_r13.deletedAt, "dd/MM/yyyy HH:mm"));
} }
function TrashClassTabComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "mat-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TrashClassTabComponent_ng_template_1_div_2_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.setAll($event.checked)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Ch\u1ECDn t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TrashClassTabComponent_ng_template_1_div_2_a_3_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TrashClassTabComponent_ng_template_1_div_2_div_4_Template, 18, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r5.allComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.someComplete() == true || ctx_r5.allComplete == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.task == null ? null : ctx_r5.task.subtasks);
} }
function TrashClassTabComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 25);
} }
function TrashClassTabComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashClassTabComponent_ng_template_1_ng_container_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.seeMore()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r7.nextPage);
} }
function TrashClassTabComponent_ng_template_1_app_revert_dialog_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-revert-dialog", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closeDialog", function TrashClassTabComponent_ng_template_1_app_revert_dialog_7_Template_app_revert_dialog_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.closeRevertDialog($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r8.dataRevertDialog);
} }
function TrashClassTabComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TrashClassTabComponent_ng_template_1_div_0_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TrashClassTabComponent_ng_template_1_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TrashClassTabComponent_ng_template_1_div_2_Template, 5, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TrashClassTabComponent_ng_template_1_div_5_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TrashClassTabComponent_ng_template_1_ng_container_6_Template, 4, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TrashClassTabComponent_ng_template_1_app_revert_dialog_7_Template, 1, 1, "app-revert-dialog", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == true && !ctx_r2.nextPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == true && ctx_r2.nextPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loadingMore == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loadingMore == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.dataRevertDialog == null ? null : ctx_r2.dataRevertDialog.isShow);
} }
class TrashClassTabComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(dialog, commonService) {
        super(commonService);
        this.dialog = dialog;
        this.commonService = commonService;
        this.nextPage = '';
        this.type = 0;
        this.pageReset = 0;
        this.DataRevert = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.DataRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.SeeMore = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.isLoading = false;
        this.allComplete = false;
        this.isCheckData = false;
        this.loadingMore = false;
        this.skipObj = { skipLive: 0, skipArchive: 0 };
    }
    dataProcessing() {
        var _a, _b, _c, _d;
        var data = [];
        if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.length) != 0) {
            for (var i = 0; i < ((_c = (_b = this.data) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0); i++) {
                data.push(Object.assign(Object.assign({}, (_d = this.data) === null || _d === void 0 ? void 0 : _d[i]), { completed: false }));
            }
        }
        this.task = {
            completed: false,
            subtasks: data
        };
    }
    setAll(completed) {
        var _a;
        if (((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks) == null) {
            return;
        }
        this.task.subtasks.forEach((t) => t.completed = completed);
        if (completed == true) {
            this.allComplete = true;
        }
        else {
            this.allComplete = false;
        }
    }
    updateAllComplete(checked, index) {
        var _a, _b;
        if ((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks[index])
            this.task.subtasks[index].completed = checked;
        this.allComplete = ((_b = this.task) === null || _b === void 0 ? void 0 : _b.subtasks) != null && this.task.subtasks.every((t) => t.completed);
    }
    someComplete() {
        var _a;
        if (((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks) == null) {
            return false;
        }
        return this.task.subtasks.filter((t) => t.completed).length > 0 && !this.allComplete;
    }
    clickRemoveAllData() {
        var _a, _b, _c, _d, _e;
        var data = [];
        var dataId = [];
        for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
            if (((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].completed) == true) {
                data.push({ id: Number(this.task.subtasks[index].id), curPage: (_d = this.task.subtasks[index].nextPage) !== null && _d !== void 0 ? _d : '', name: (_e = this.task.subtasks[index].name) !== null && _e !== void 0 ? _e : '' });
                dataId.push(Number(this.task.subtasks[index].id));
            }
        }
        const dialogRef = this.dialog.open(_remove_dialog_controller_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmRemoveComponent, {
            width: '750px',
            data: { type: this.type, data }
        });
        dialogRef.afterClosed().subscribe(result => {
            var _a, _b, _c;
            this.isLoading = false;
            if (result == 'remove') {
                for (let i = 0; i < data.length; i++) {
                    for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
                        if (data[i].id == ((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].id)) {
                            this.task.subtasks.splice(index, 1);
                        }
                    }
                }
                this.CalculateSkip(data);
                this.DataRemove.emit(dataId);
                this.allComplete = false;
            }
            this.isLoading = false;
        });
    }
    closeRevertDialog(RequeestDataRevart) {
        var _a, _b, _c;
        if (RequeestDataRevart) {
            for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
                if (RequeestDataRevart.id == ((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].id)) {
                    this.task.subtasks.splice(index, 1);
                }
            }
            this.CalculateSkip([RequeestDataRevart]);
            this.DataRevert.emit(RequeestDataRevart.id);
        }
        this.dataRevertDialog = { obj: { id: -1, curPage: '', name: '' }, type: 0, isShow: false };
    }
    CalculateSkip(objs) {
        for (var i = 0; i < objs.length; i++) {
            var nextpageParse = this.commonService.parseJson(objs[i].curPage);
            if (nextpageParse && nextpageParse.isArchive == 1) {
                this.skipObj.skipArchive++;
            }
            else {
                this.skipObj.skipLive++;
            }
        }
    }
    clickRevertData(nextPage, idDataRevart, name) {
        this.dataRevertDialog = { obj: { curPage: nextPage !== null && nextPage !== void 0 ? nextPage : '', id: Number(idDataRevart), name: name !== null && name !== void 0 ? name : '' }, type: this.type, isShow: true };
    }
    seeMore() {
        this.loadingMore = true;
        let requestObj = { type: this.type, skipObj: this.skipObj };
        this.SeeMore.emit(requestObj);
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnChanges() {
        var _a, _b;
        this.loadingMore = false;
        this.allComplete = false;
        this.dataProcessing();
        if (((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
            this.isCheckData = false;
        }
        else {
            this.isCheckData = true;
        }
    }
}
TrashClassTabComponent.ɵfac = function TrashClassTabComponent_Factory(t) { return new (t || TrashClassTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService)); };
TrashClassTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TrashClassTabComponent, selectors: [["app-trash-class-tab"]], inputs: { data: "data", nextPage: "nextPage", type: "type", pageReset: "pageReset" }, outputs: { DataRevert: "DataRevert", DataRemove: "DataRemove", SeeMore: "SeeMore" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["doneLoading", ""], [4, "ngIf"], [1, "mt-5", "mb-3"], [1, "d-flex", "justify-content-center"], ["class", "spinner-border spinner-border-sm", "role", "status", "style", "display: flex;", 4, "ngIf"], [3, "data", "closeDialog", 4, "ngIf"], [1, "block_none", "py-5"], ["color", "primary", 1, "check-all", 3, "checked", "change"], ["class", "buttom-delete", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "buttom-delete", 3, "click"], [1, "block-body"], [1, "block-body-main"], [1, "check-item"], ["color", "primary", 3, "checked", "change"], [1, "block-body-content"], [1, "notify__active"], ["class", "truncate mr-2 text-student", 3, "matTooltip", 4, "ngIf"], [1, "notify__time", "truncate"], [3, "matTooltip"], [1, "block-body-status", 3, "click"], [1, "text-center", "text-white", "class-info", "pt-2", "pb-2"], [1, "text-azo"], [1, "truncate", "mr-2", "text-student", 3, "matTooltip"], ["role", "status", 1, "spinner-border", "spinner-border-sm", 2, "display", "flex"], ["matTooltip", "Hi\u1EC7n b\u1EA3n ghi c\u0169 h\u01A1n", "mat-button", "", 1, "btn-all-add", 3, "disabled", "click"], [3, "data", "closeDialog"]], template: function TrashClassTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TrashClassTabComponent_azt_loading_effect_0_Template, 1, 0, "azt-loading-effect", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TrashClassTabComponent_ng_template_1_Template, 8, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__.AztLoadingEffectComponent, _revert_dialog_controller_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmRevertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".check-all[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  margin-top: 20px;\n}\n\n.check-item[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  margin-top: 8px;\n}\n\n.block-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.block-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background: #fff;\n  border-radius: 3px;\n  margin-top: 20px;\n  width: 100%;\n}\n\n.block-body-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: 70%;\n}\n\n.block-body-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  background: #00c0ef;\n  cursor: pointer;\n  color: #fff;\n  width: 100px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.block-body-status[_ngcontent-%COMP%]:hover {\n  background-color: #00a2ca;\n}\n\n.block-body-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  max-width: 85%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 2px;\n  font-size: 14px;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-desc[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.block_none[_ngcontent-%COMP%] {\n  border-width: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: hsl(0deg, 0%, 100%);\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1215686275);\n  margin-top: 15px;\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.text-student[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n@media only screen and (max-width: 768px) {\n  .block-body[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .block_none[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n.buttom-delete[_ngcontent-%COMP%] {\n  float: right;\n  margin: 14px;\n  padding: 6px 15px;\n  background: #f44336;\n  color: white;\n  border-radius: 5px;\n}\n\n.buttom-delete[_ngcontent-%COMP%]:hover {\n  background: #ff1100;\n}"] });


/***/ }),

/***/ 46334:
/*!******************************************************************************!*\
  !*** ./src/app/common/utils/trash-exam-category-tab/controller.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrashExamCategoryTabComponent": () => (/* binding */ TrashExamCategoryTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _remove_dialog_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remove-dialog/controller.component */ 51761);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 77446);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 87238);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _revert_dialog_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../revert-dialog/controller.component */ 73033);













function TrashExamCategoryTabComponent_azt_loading_effect_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "azt-loading-effect");
} }
function TrashExamCategoryTabComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TrashExamCategoryTabComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " B\u1EA5m v\u00E0o n\u00FAt b\u00EAn d\u01B0\u1EDBi \u0111\u1EC3n xem b\u1EA3n ghi c\u0169 h\u01A1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TrashExamCategoryTabComponent_ng_template_1_div_2_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashExamCategoryTabComponent_ng_template_1_div_2_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.clickRemoveAllData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "x\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TrashExamCategoryTabComponent_ng_template_1_div_2_div_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", item_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r13.name);
} }
function TrashExamCategoryTabComponent_ng_template_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TrashExamCategoryTabComponent_ng_template_1_div_2_div_4_Template_mat_checkbox_change_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const i_r14 = restoredCtx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.updateAllComplete($event.checked, i_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 16)(6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TrashExamCategoryTabComponent_ng_template_1_div_2_div_4_span_7_Template, 2, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Th\u1EDDi gian x\u00F3a: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashExamCategoryTabComponent_ng_template_1_div_2_div_4_Template_div_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const item_r13 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.clickRevertData(item_r13.nextPage, item_r13.id, item_r13.name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 22)(16, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Kh\u00F4i ph\u1EE5c");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", item_r13.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 4, item_r13.deletedAt, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 7, item_r13.deletedAt, "dd/MM/yyyy HH:mm"));
} }
function TrashExamCategoryTabComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "mat-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TrashExamCategoryTabComponent_ng_template_1_div_2_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.setAll($event.checked)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Ch\u1ECDn t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TrashExamCategoryTabComponent_ng_template_1_div_2_a_3_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TrashExamCategoryTabComponent_ng_template_1_div_2_div_4_Template, 18, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r5.allComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.someComplete() == true || ctx_r5.allComplete == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.task == null ? null : ctx_r5.task.subtasks);
} }
function TrashExamCategoryTabComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 25);
} }
function TrashExamCategoryTabComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashExamCategoryTabComponent_ng_template_1_ng_container_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.seeMore()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r7.nextPage);
} }
function TrashExamCategoryTabComponent_ng_template_1_app_revert_dialog_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-revert-dialog", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closeDialog", function TrashExamCategoryTabComponent_ng_template_1_app_revert_dialog_7_Template_app_revert_dialog_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.closeRevertDialog($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r8.dataRevertDialog);
} }
function TrashExamCategoryTabComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TrashExamCategoryTabComponent_ng_template_1_div_0_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TrashExamCategoryTabComponent_ng_template_1_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TrashExamCategoryTabComponent_ng_template_1_div_2_Template, 5, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TrashExamCategoryTabComponent_ng_template_1_div_5_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TrashExamCategoryTabComponent_ng_template_1_ng_container_6_Template, 4, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TrashExamCategoryTabComponent_ng_template_1_app_revert_dialog_7_Template, 1, 1, "app-revert-dialog", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == true && !ctx_r2.nextPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == true && ctx_r2.nextPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loadingMore == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loadingMore == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.dataRevertDialog == null ? null : ctx_r2.dataRevertDialog.isShow);
} }
class TrashExamCategoryTabComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(dialog, commonService) {
        super(commonService);
        this.dialog = dialog;
        this.commonService = commonService;
        this.nextPage = '';
        this.type = 0;
        this.pageReset = 0;
        this.DataRevert = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.DataRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.SeeMore = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.isLoading = false;
        this.dataRevertDialog = { obj: { id: -1, curPage: '', name: '' }, type: 0, isShow: false };
        this.allComplete = false;
        this.isCheckData = false;
        this.loadingMore = false;
        this.skipObj = { skipLive: 0, skipArchive: 0 };
    }
    dataProcessing() {
        var _a, _b, _c, _d;
        var data = [];
        if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.length) != 0) {
            for (var i = 0; i < ((_c = (_b = this.data) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0); i++) {
                data.push(Object.assign(Object.assign({}, (_d = this.data) === null || _d === void 0 ? void 0 : _d[i]), { completed: false }));
            }
        }
        this.task = {
            completed: false,
            subtasks: data
        };
    }
    setAll(completed) {
        var _a;
        if (((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks) == null) {
            return;
        }
        this.task.subtasks.forEach((t) => t.completed = completed);
        if (completed == true) {
            this.allComplete = true;
        }
        else {
            this.allComplete = false;
        }
    }
    updateAllComplete(checked, index) {
        var _a, _b;
        if ((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks[index])
            this.task.subtasks[index].completed = checked;
        this.allComplete = ((_b = this.task) === null || _b === void 0 ? void 0 : _b.subtasks) != null && this.task.subtasks.every((t) => t.completed);
    }
    someComplete() {
        var _a;
        if (((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks) == null) {
            return false;
        }
        return this.task.subtasks.filter((t) => t.completed).length > 0 && !this.allComplete;
    }
    clickRemoveAllData() {
        var _a, _b, _c, _d, _e;
        var data = [];
        var dataId = [];
        for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
            if (((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].completed) == true) {
                data.push({ id: Number(this.task.subtasks[index].id), curPage: (_d = this.task.subtasks[index].nextPage) !== null && _d !== void 0 ? _d : '', name: (_e = this.task.subtasks[index].name) !== null && _e !== void 0 ? _e : '' });
                dataId.push(Number(this.task.subtasks[index].id));
            }
        }
        const dialogRef = this.dialog.open(_remove_dialog_controller_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmRemoveComponent, {
            width: '750px',
            data: { type: this.type, data }
        });
        dialogRef.afterClosed().subscribe(result => {
            var _a, _b, _c;
            this.isLoading = false;
            if (result == 'remove') {
                for (let i = 0; i < data.length; i++) {
                    for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
                        if (data[i].id == ((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].id)) {
                            this.task.subtasks.splice(index, 1);
                        }
                    }
                }
                this.CalculateSkip(data);
                this.DataRemove.emit(dataId);
                this.allComplete = false;
            }
            this.isLoading = false;
        });
    }
    closeRevertDialog(RequeestDataRevart) {
        var _a, _b, _c;
        if (RequeestDataRevart) {
            for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
                if (RequeestDataRevart.id == ((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].id)) {
                    this.task.subtasks.splice(index, 1);
                }
            }
            this.CalculateSkip([RequeestDataRevart]);
            this.DataRevert.emit(RequeestDataRevart.id);
        }
        this.dataRevertDialog = { obj: { id: -1, curPage: '', name: '' }, type: 0, isShow: false };
    }
    CalculateSkip(objs) {
        for (var i = 0; i < objs.length; i++) {
            var nextpageParse = this.commonService.parseJson(objs[i].curPage);
            if (nextpageParse && nextpageParse.isArchive == 1) {
                this.skipObj.skipArchive++;
            }
            else {
                this.skipObj.skipLive++;
            }
        }
    }
    clickRevertData(nextPage, idDataRevart, name) {
        this.dataRevertDialog = { obj: { curPage: nextPage !== null && nextPage !== void 0 ? nextPage : '', id: Number(idDataRevart), name: name !== null && name !== void 0 ? name : '' }, type: this.type, isShow: true };
    }
    seeMore() {
        this.loadingMore = true;
        let requestObj = { type: this.type, skipObj: this.skipObj };
        this.SeeMore.emit(requestObj);
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnChanges() {
        var _a, _b;
        this.loadingMore = false;
        this.allComplete = false;
        this.dataProcessing();
        if (((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) >= 1) {
            this.isCheckData = false;
        }
        else {
            this.isCheckData = true;
        }
    }
}
TrashExamCategoryTabComponent.ɵfac = function TrashExamCategoryTabComponent_Factory(t) { return new (t || TrashExamCategoryTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService)); };
TrashExamCategoryTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TrashExamCategoryTabComponent, selectors: [["app-trash-exam-category-tab"]], inputs: { data: "data", nextPage: "nextPage", type: "type", pageReset: "pageReset" }, outputs: { DataRevert: "DataRevert", DataRemove: "DataRemove", SeeMore: "SeeMore" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["doneLoading", ""], [4, "ngIf"], [1, "mt-5", "mb-3"], [1, "d-flex", "justify-content-center"], ["class", "spinner-border spinner-border-sm", "role", "status", "style", "display: flex;", 4, "ngIf"], [3, "data", "closeDialog", 4, "ngIf"], [1, "block_none", "py-5"], ["color", "primary", 1, "check-all", 3, "checked", "change"], ["class", "buttom-delete", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "buttom-delete", 3, "click"], [1, "block-body"], [1, "block-body-main"], [1, "check-item"], ["color", "primary", 3, "checked", "change"], [1, "block-body-content"], [1, "notify__active"], ["class", "truncate mr-2 text-student", 3, "matTooltip", 4, "ngIf"], [1, "notify__time", "truncate"], [3, "matTooltip"], [1, "block-body-status", 3, "click"], [1, "text-center", "text-white", "class-info", "pt-2", "pb-2"], [1, "text-azo"], [1, "truncate", "mr-2", "text-student", 3, "matTooltip"], ["role", "status", 1, "spinner-border", "spinner-border-sm", 2, "display", "flex"], ["matTooltip", "Hi\u1EC7n b\u1EA3n ghi c\u0169 h\u01A1n", "mat-button", "", 1, "btn-all-add", 3, "disabled", "click"], [3, "data", "closeDialog"]], template: function TrashExamCategoryTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TrashExamCategoryTabComponent_azt_loading_effect_0_Template, 1, 0, "azt-loading-effect", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TrashExamCategoryTabComponent_ng_template_1_Template, 8, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__.AztLoadingEffectComponent, _revert_dialog_controller_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmRevertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".check-all[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  margin-top: 20px;\n}\n\n.check-item[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  margin-top: 8px;\n}\n\n.block-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.block-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background: #fff;\n  border-radius: 3px;\n  margin-top: 20px;\n  width: 100%;\n}\n\n.block-body-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: 70%;\n}\n\n.block-body-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  background: #00c0ef;\n  cursor: pointer;\n  color: #fff;\n  width: 100px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.block-body-status[_ngcontent-%COMP%]:hover {\n  background-color: #00a2ca;\n}\n\n.block-body-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  max-width: 85%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 2px;\n  font-size: 14px;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-desc[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.block_none[_ngcontent-%COMP%] {\n  border-width: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: hsl(0deg, 0%, 100%);\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1215686275);\n  margin-top: 15px;\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.text-student[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n@media only screen and (max-width: 768px) {\n  .block-body[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .block_none[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n.buttom-delete[_ngcontent-%COMP%] {\n  float: right;\n  margin: 14px;\n  padding: 6px 15px;\n  background: #f44336;\n  color: white;\n  border-radius: 5px;\n}\n\n.buttom-delete[_ngcontent-%COMP%]:hover {\n  background: #ff1100;\n}"] });


/***/ }),

/***/ 11206:
/*!*********************************************************************!*\
  !*** ./src/app/common/utils/trash-exam-tab/controller.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrashExamTabComponent": () => (/* binding */ TrashExamTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _remove_dialog_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remove-dialog/controller.component */ 51761);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 77446);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 87238);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _revert_dialog_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../revert-dialog/controller.component */ 73033);













function TrashExamTabComponent_azt_loading_effect_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "azt-loading-effect");
} }
function TrashExamTabComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TrashExamTabComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " B\u1EA5m v\u00E0o n\u00FAt b\u00EAn d\u01B0\u1EDBi \u0111\u1EC3n xem b\u1EA3n ghi c\u0169 h\u01A1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TrashExamTabComponent_ng_template_1_div_2_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashExamTabComponent_ng_template_1_div_2_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.clickRemoveAllData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "x\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TrashExamTabComponent_ng_template_1_div_2_div_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", item_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r13.name);
} }
function TrashExamTabComponent_ng_template_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TrashExamTabComponent_ng_template_1_div_2_div_4_Template_mat_checkbox_change_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const i_r14 = restoredCtx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.updateAllComplete($event.checked, i_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 16)(6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TrashExamTabComponent_ng_template_1_div_2_div_4_span_7_Template, 2, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Th\u1EDDi gian x\u00F3a: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashExamTabComponent_ng_template_1_div_2_div_4_Template_div_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const item_r13 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.clickRevertData(item_r13.nextPage, item_r13.id, item_r13.name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 22)(16, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Kh\u00F4i ph\u1EE5c");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", item_r13.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 4, item_r13.deletedAt, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 7, item_r13.deletedAt, "dd/MM/yyyy HH:mm"));
} }
function TrashExamTabComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "mat-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TrashExamTabComponent_ng_template_1_div_2_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.setAll($event.checked)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Ch\u1ECDn t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TrashExamTabComponent_ng_template_1_div_2_a_3_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TrashExamTabComponent_ng_template_1_div_2_div_4_Template, 18, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r5.allComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.someComplete() == true || ctx_r5.allComplete == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.task == null ? null : ctx_r5.task.subtasks);
} }
function TrashExamTabComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 25);
} }
function TrashExamTabComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashExamTabComponent_ng_template_1_ng_container_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.seeMore()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r7.nextPage);
} }
function TrashExamTabComponent_ng_template_1_app_revert_dialog_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-revert-dialog", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closeDialog", function TrashExamTabComponent_ng_template_1_app_revert_dialog_7_Template_app_revert_dialog_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.closeRevertDialog($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r8.dataRevertDialog);
} }
function TrashExamTabComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TrashExamTabComponent_ng_template_1_div_0_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TrashExamTabComponent_ng_template_1_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TrashExamTabComponent_ng_template_1_div_2_Template, 5, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TrashExamTabComponent_ng_template_1_div_5_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TrashExamTabComponent_ng_template_1_ng_container_6_Template, 4, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TrashExamTabComponent_ng_template_1_app_revert_dialog_7_Template, 1, 1, "app-revert-dialog", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == true && !ctx_r2.nextPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == true && ctx_r2.nextPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loadingMore == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loadingMore == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.dataRevertDialog == null ? null : ctx_r2.dataRevertDialog.isShow);
} }
class TrashExamTabComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(dialog, commonService) {
        super(commonService);
        this.dialog = dialog;
        this.commonService = commonService;
        this.nextPage = '';
        this.type = 0;
        this.pageReset = 0;
        this.DataRevert = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.DataRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.SeeMore = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.isLoading = false;
        this.dataRevertDialog = { obj: { id: -1, curPage: '', name: '' }, type: 0, isShow: false };
        this.allComplete = false;
        this.isCheckData = false;
        this.loadingMore = false;
        this.skipObj = { skipLive: 0, skipArchive: 0 };
    }
    dataProcessing() {
        var _a, _b, _c, _d;
        var data = [];
        if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.length) != 0) {
            for (var i = 0; i < ((_c = (_b = this.data) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0); i++) {
                data.push(Object.assign(Object.assign({}, (_d = this.data) === null || _d === void 0 ? void 0 : _d[i]), { completed: false }));
            }
        }
        this.task = {
            completed: false,
            subtasks: data
        };
    }
    setAll(completed) {
        var _a;
        if (((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks) == null) {
            return;
        }
        this.task.subtasks.forEach((t) => t.completed = completed);
        if (completed == true) {
            this.allComplete = true;
        }
        else {
            this.allComplete = false;
        }
    }
    updateAllComplete(checked, index) {
        var _a, _b;
        if ((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks[index])
            this.task.subtasks[index].completed = checked;
        this.allComplete = ((_b = this.task) === null || _b === void 0 ? void 0 : _b.subtasks) != null && this.task.subtasks.every((t) => t.completed);
    }
    someComplete() {
        var _a;
        if (((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks) == null) {
            return false;
        }
        return this.task.subtasks.filter((t) => t.completed).length > 0 && !this.allComplete;
    }
    clickRemoveAllData() {
        var _a, _b, _c, _d, _e;
        var data = [];
        var dataId = [];
        for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
            if (((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].completed) == true) {
                data.push({ id: Number(this.task.subtasks[index].id), curPage: (_d = this.task.subtasks[index].nextPage) !== null && _d !== void 0 ? _d : '', name: (_e = this.task.subtasks[index].name) !== null && _e !== void 0 ? _e : '' });
                dataId.push(Number(this.task.subtasks[index].id));
            }
        }
        const dialogRef = this.dialog.open(_remove_dialog_controller_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmRemoveComponent, {
            width: '750px',
            data: { type: this.type, data }
        });
        dialogRef.afterClosed().subscribe(result => {
            var _a, _b, _c;
            this.isLoading = false;
            if (result == 'remove') {
                for (let i = 0; i < data.length; i++) {
                    for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
                        if (data[i].id == ((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].id)) {
                            this.task.subtasks.splice(index, 1);
                        }
                    }
                }
                this.CalculateSkip(data);
                this.DataRemove.emit(dataId);
                this.allComplete = false;
            }
            this.isLoading = false;
        });
    }
    closeRevertDialog(RequeestDataRevart) {
        var _a, _b, _c;
        if (RequeestDataRevart) {
            for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
                if (RequeestDataRevart.id == ((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].id)) {
                    this.task.subtasks.splice(index, 1);
                }
            }
            this.CalculateSkip([RequeestDataRevart]);
            this.DataRevert.emit(RequeestDataRevart.id);
        }
        this.dataRevertDialog = { obj: { id: -1, curPage: '', name: '' }, type: 0, isShow: false };
    }
    CalculateSkip(objs) {
        for (var i = 0; i < objs.length; i++) {
            var nextpageParse = this.commonService.parseJson(objs[i].curPage);
            if (nextpageParse && nextpageParse.isArchive == 1) {
                this.skipObj.skipArchive++;
            }
            else {
                this.skipObj.skipLive++;
            }
        }
    }
    clickRevertData(nextPage, idDataRevart, name) {
        this.dataRevertDialog = { obj: { curPage: nextPage !== null && nextPage !== void 0 ? nextPage : '', id: Number(idDataRevart), name: name !== null && name !== void 0 ? name : '' }, type: this.type, isShow: true };
    }
    seeMore() {
        this.loadingMore = true;
        let requestObj = { type: this.type, skipObj: this.skipObj };
        this.SeeMore.emit(requestObj);
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnChanges() {
        var _a, _b;
        this.loadingMore = false;
        this.allComplete = false;
        this.dataProcessing();
        if (((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) >= 1) {
            this.isCheckData = false;
        }
        else {
            this.isCheckData = true;
        }
    }
}
TrashExamTabComponent.ɵfac = function TrashExamTabComponent_Factory(t) { return new (t || TrashExamTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService)); };
TrashExamTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TrashExamTabComponent, selectors: [["app-trash-exam-tab"]], inputs: { data: "data", nextPage: "nextPage", type: "type", pageReset: "pageReset" }, outputs: { DataRevert: "DataRevert", DataRemove: "DataRemove", SeeMore: "SeeMore" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["doneLoading", ""], [4, "ngIf"], [1, "mt-5", "mb-3"], [1, "d-flex", "justify-content-center"], ["class", "spinner-border spinner-border-sm", "role", "status", "style", "display: flex;", 4, "ngIf"], [3, "data", "closeDialog", 4, "ngIf"], [1, "block_none", "py-5"], ["color", "primary", 1, "check-all", 3, "checked", "change"], ["class", "buttom-delete", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "buttom-delete", 3, "click"], [1, "block-body"], [1, "block-body-main"], [1, "check-item"], ["color", "primary", 3, "checked", "change"], [1, "block-body-content"], [1, "notify__active"], ["class", "truncate mr-2 text-student", 3, "matTooltip", 4, "ngIf"], [1, "notify__time", "truncate"], [3, "matTooltip"], [1, "block-body-status", 3, "click"], [1, "text-center", "text-white", "class-info", "pt-2", "pb-2"], [1, "text-azo"], [1, "truncate", "mr-2", "text-student", 3, "matTooltip"], ["role", "status", 1, "spinner-border", "spinner-border-sm", 2, "display", "flex"], ["matTooltip", "Hi\u1EC7n b\u1EA3n ghi c\u0169 h\u01A1n", "mat-button", "", 1, "btn-all-add", 3, "disabled", "click"], [3, "data", "closeDialog"]], template: function TrashExamTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TrashExamTabComponent_azt_loading_effect_0_Template, 1, 0, "azt-loading-effect", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TrashExamTabComponent_ng_template_1_Template, 8, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__.AztLoadingEffectComponent, _revert_dialog_controller_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmRevertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".check-all[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  margin-top: 20px;\n}\n\n.check-item[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  margin-top: 8px;\n}\n\n.block-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.block-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background: #fff;\n  border-radius: 3px;\n  margin-top: 20px;\n  width: 100%;\n}\n\n.block-body-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: 70%;\n}\n\n.block-body-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  background: #00c0ef;\n  cursor: pointer;\n  color: #fff;\n  width: 100px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.block-body-status[_ngcontent-%COMP%]:hover {\n  background-color: #00a2ca;\n}\n\n.block-body-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  max-width: 85%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 2px;\n  font-size: 14px;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-desc[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.block_none[_ngcontent-%COMP%] {\n  border-width: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: hsl(0deg, 0%, 100%);\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1215686275);\n  margin-top: 15px;\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.text-student[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n@media only screen and (max-width: 768px) {\n  .block-body[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .block_none[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n.buttom-delete[_ngcontent-%COMP%] {\n  float: right;\n  margin: 14px;\n  padding: 6px 15px;\n  background: #f44336;\n  color: white;\n  border-radius: 5px;\n}\n\n.buttom-delete[_ngcontent-%COMP%]:hover {\n  background: #ff1100;\n}"] });


/***/ }),

/***/ 2228:
/*!*************************************************************************!*\
  !*** ./src/app/common/utils/trash-homework-tab/controller.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrashHomeworkTabComponent": () => (/* binding */ TrashHomeworkTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _remove_dialog_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remove-dialog/controller.component */ 51761);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 77446);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 87238);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _revert_dialog_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../revert-dialog/controller.component */ 73033);













function TrashHomeworkTabComponent_azt_loading_effect_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "azt-loading-effect");
} }
function TrashHomeworkTabComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TrashHomeworkTabComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " B\u1EA5m v\u00E0o n\u00FAt b\u00EAn d\u01B0\u1EDBi \u0111\u1EC3n xem b\u1EA3n ghi c\u0169 h\u01A1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TrashHomeworkTabComponent_ng_template_1_div_2_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashHomeworkTabComponent_ng_template_1_div_2_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.clickRemoveAllData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "x\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TrashHomeworkTabComponent_ng_template_1_div_2_div_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", item_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r13.name);
} }
function TrashHomeworkTabComponent_ng_template_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TrashHomeworkTabComponent_ng_template_1_div_2_div_4_Template_mat_checkbox_change_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const i_r14 = restoredCtx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.updateAllComplete($event.checked, i_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 16)(6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TrashHomeworkTabComponent_ng_template_1_div_2_div_4_span_7_Template, 2, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Th\u1EDDi gian x\u00F3a: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashHomeworkTabComponent_ng_template_1_div_2_div_4_Template_div_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const item_r13 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.clickRevertData(item_r13.nextPage, item_r13.id, item_r13.name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 22)(16, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Kh\u00F4i ph\u1EE5c");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", item_r13.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 4, item_r13.deletedAt, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 7, item_r13.deletedAt, "dd/MM/yyyy HH:mm"));
} }
function TrashHomeworkTabComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "mat-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TrashHomeworkTabComponent_ng_template_1_div_2_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.setAll($event.checked)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Ch\u1ECDn t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TrashHomeworkTabComponent_ng_template_1_div_2_a_3_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TrashHomeworkTabComponent_ng_template_1_div_2_div_4_Template, 18, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r5.allComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.someComplete() == true || ctx_r5.allComplete == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.task == null ? null : ctx_r5.task.subtasks);
} }
function TrashHomeworkTabComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 25);
} }
function TrashHomeworkTabComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashHomeworkTabComponent_ng_template_1_ng_container_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.seeMore()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r7.nextPage);
} }
function TrashHomeworkTabComponent_ng_template_1_app_revert_dialog_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-revert-dialog", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closeDialog", function TrashHomeworkTabComponent_ng_template_1_app_revert_dialog_7_Template_app_revert_dialog_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.closeRevertDialog($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r8.dataRevertDialog);
} }
function TrashHomeworkTabComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TrashHomeworkTabComponent_ng_template_1_div_0_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TrashHomeworkTabComponent_ng_template_1_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TrashHomeworkTabComponent_ng_template_1_div_2_Template, 5, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TrashHomeworkTabComponent_ng_template_1_div_5_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TrashHomeworkTabComponent_ng_template_1_ng_container_6_Template, 4, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TrashHomeworkTabComponent_ng_template_1_app_revert_dialog_7_Template, 1, 1, "app-revert-dialog", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == true && !ctx_r2.nextPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == true && ctx_r2.nextPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loadingMore == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loadingMore == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.dataRevertDialog == null ? null : ctx_r2.dataRevertDialog.isShow);
} }
class TrashHomeworkTabComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(dialog, commonService) {
        super(commonService);
        this.dialog = dialog;
        this.commonService = commonService;
        this.nextPage = '';
        this.type = 0;
        this.pageReset = 0;
        this.DataRevert = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.DataRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.SeeMore = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.isLoading = false;
        this.dataRevertDialog = { obj: { id: -1, curPage: '', name: '' }, type: 0, isShow: false };
        this.allComplete = false;
        this.isCheckData = false;
        this.loadingMore = false;
        this.skipObj = { skipLive: 0, skipArchive: 0 };
    }
    dataProcessing() {
        var _a, _b, _c, _d;
        var data = [];
        if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.length) != 0) {
            for (var i = 0; i < ((_c = (_b = this.data) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0); i++) {
                data.push(Object.assign(Object.assign({}, (_d = this.data) === null || _d === void 0 ? void 0 : _d[i]), { completed: false }));
            }
        }
        this.task = {
            completed: false,
            subtasks: data
        };
    }
    setAll(completed) {
        var _a;
        if (((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks) == null) {
            return;
        }
        this.task.subtasks.forEach((t) => t.completed = completed);
        if (completed == true) {
            this.allComplete = true;
        }
        else {
            this.allComplete = false;
        }
    }
    updateAllComplete(checked, index) {
        var _a, _b;
        if ((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks[index])
            this.task.subtasks[index].completed = checked;
        this.allComplete = ((_b = this.task) === null || _b === void 0 ? void 0 : _b.subtasks) != null && this.task.subtasks.every((t) => t.completed);
    }
    someComplete() {
        var _a;
        if (((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks) == null) {
            return false;
        }
        return this.task.subtasks.filter((t) => t.completed).length > 0 && !this.allComplete;
    }
    clickRemoveAllData() {
        var _a, _b, _c, _d, _e;
        var data = [];
        var dataId = [];
        for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
            if (((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].completed) == true) {
                data.push({ id: Number(this.task.subtasks[index].id), curPage: (_d = this.task.subtasks[index].nextPage) !== null && _d !== void 0 ? _d : '', name: (_e = this.task.subtasks[index].name) !== null && _e !== void 0 ? _e : '' });
                dataId.push(Number(this.task.subtasks[index].id));
            }
        }
        const dialogRef = this.dialog.open(_remove_dialog_controller_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmRemoveComponent, {
            width: '750px',
            data: { type: this.type, data }
        });
        dialogRef.afterClosed().subscribe(result => {
            var _a, _b, _c;
            this.isLoading = false;
            if (result == 'remove') {
                for (let i = 0; i < data.length; i++) {
                    for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
                        if (data[i].id == ((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].id)) {
                            this.task.subtasks.splice(index, 1);
                        }
                    }
                }
                this.CalculateSkip(data);
                this.DataRemove.emit(dataId);
                this.allComplete = false;
            }
            this.isLoading = false;
        });
    }
    closeRevertDialog(RequeestDataRevart) {
        var _a, _b, _c;
        if (RequeestDataRevart) {
            for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
                if (RequeestDataRevart.id == ((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].id)) {
                    this.task.subtasks.splice(index, 1);
                }
            }
            this.CalculateSkip([RequeestDataRevart]);
            this.DataRevert.emit(RequeestDataRevart.id);
        }
        this.dataRevertDialog = { obj: { id: -1, curPage: '', name: '' }, type: 0, isShow: false };
    }
    CalculateSkip(objs) {
        for (var i = 0; i < objs.length; i++) {
            var nextpageParse = this.commonService.parseJson(objs[i].curPage);
            if (nextpageParse && nextpageParse.isArchive == 1) {
                this.skipObj.skipArchive++;
            }
            else {
                this.skipObj.skipLive++;
            }
        }
    }
    clickRevertData(nextPage, idDataRevart, name) {
        this.dataRevertDialog = { obj: { curPage: nextPage !== null && nextPage !== void 0 ? nextPage : '', id: Number(idDataRevart), name: name !== null && name !== void 0 ? name : '' }, type: this.type, isShow: true };
    }
    seeMore() {
        this.loadingMore = true;
        let requestObj = { type: this.type, skipObj: this.skipObj };
        this.SeeMore.emit(requestObj);
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnChanges() {
        var _a, _b;
        this.loadingMore = false;
        this.allComplete = false;
        this.dataProcessing();
        if (((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) >= 1) {
            this.isCheckData = false;
        }
        else {
            this.isCheckData = true;
        }
    }
}
TrashHomeworkTabComponent.ɵfac = function TrashHomeworkTabComponent_Factory(t) { return new (t || TrashHomeworkTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService)); };
TrashHomeworkTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TrashHomeworkTabComponent, selectors: [["app-trash-homework-tab"]], inputs: { data: "data", nextPage: "nextPage", type: "type", pageReset: "pageReset" }, outputs: { DataRevert: "DataRevert", DataRemove: "DataRemove", SeeMore: "SeeMore" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["doneLoading", ""], [4, "ngIf"], [1, "mt-5", "mb-3"], [1, "d-flex", "justify-content-center"], ["class", "spinner-border spinner-border-sm", "role", "status", "style", "display: flex;", 4, "ngIf"], [3, "data", "closeDialog", 4, "ngIf"], [1, "block_none", "py-5"], ["color", "primary", 1, "check-all", 3, "checked", "change"], ["class", "buttom-delete", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "buttom-delete", 3, "click"], [1, "block-body"], [1, "block-body-main"], [1, "check-item"], ["color", "primary", 3, "checked", "change"], [1, "block-body-content"], [1, "notify__active"], ["class", "truncate mr-2 text-student", 3, "matTooltip", 4, "ngIf"], [1, "notify__time", "truncate"], [3, "matTooltip"], [1, "block-body-status", 3, "click"], [1, "text-center", "text-white", "class-info", "pt-2", "pb-2"], [1, "text-azo"], [1, "truncate", "mr-2", "text-student", 3, "matTooltip"], ["role", "status", 1, "spinner-border", "spinner-border-sm", 2, "display", "flex"], ["matTooltip", "Hi\u1EC7n b\u1EA3n ghi c\u0169 h\u01A1n", "mat-button", "", 1, "btn-all-add", 3, "disabled", "click"], [3, "data", "closeDialog"]], template: function TrashHomeworkTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TrashHomeworkTabComponent_azt_loading_effect_0_Template, 1, 0, "azt-loading-effect", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TrashHomeworkTabComponent_ng_template_1_Template, 8, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__.AztLoadingEffectComponent, _revert_dialog_controller_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmRevertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".check-all[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  margin-top: 20px;\n}\n\n.check-item[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  margin-top: 8px;\n}\n\n.block-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.block-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background: #fff;\n  border-radius: 3px;\n  margin-top: 20px;\n  width: 100%;\n}\n\n.block-body-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: 70%;\n}\n\n.block-body-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  background: #00c0ef;\n  cursor: pointer;\n  color: #fff;\n  width: 100px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.block-body-status[_ngcontent-%COMP%]:hover {\n  background-color: #00a2ca;\n}\n\n.block-body-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  max-width: 85%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 2px;\n  font-size: 14px;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-desc[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.block_none[_ngcontent-%COMP%] {\n  border-width: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: hsl(0deg, 0%, 100%);\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1215686275);\n  margin-top: 15px;\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.text-student[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n@media only screen and (max-width: 768px) {\n  .block-body[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .block_none[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n.buttom-delete[_ngcontent-%COMP%] {\n  float: right;\n  margin: 14px;\n  padding: 6px 15px;\n  background: #f44336;\n  color: white;\n  border-radius: 5px;\n}\n\n.buttom-delete[_ngcontent-%COMP%]:hover {\n  background: #ff1100;\n}"] });


/***/ }),

/***/ 94246:
/*!************************************************************************!*\
  !*** ./src/app/common/utils/trash-student-tab/controller.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrashStudentTabComponent": () => (/* binding */ TrashStudentTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _remove_dialog_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remove-dialog/controller.component */ 51761);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 77446);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 87238);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _revert_dialog_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../revert-dialog/controller.component */ 73033);













function TrashStudentTabComponent_azt_loading_effect_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "azt-loading-effect");
} }
function TrashStudentTabComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TrashStudentTabComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " B\u1EA5m v\u00E0o n\u00FAt b\u00EAn d\u01B0\u1EDBi \u0111\u1EC3n xem b\u1EA3n ghi c\u0169 h\u01A1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TrashStudentTabComponent_ng_template_1_div_2_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashStudentTabComponent_ng_template_1_div_2_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.clickRemoveAllData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "x\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TrashStudentTabComponent_ng_template_1_div_2_div_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", item_r13.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r13.fullName);
} }
function TrashStudentTabComponent_ng_template_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TrashStudentTabComponent_ng_template_1_div_2_div_4_Template_mat_checkbox_change_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const i_r14 = restoredCtx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.updateAllComplete($event.checked, i_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 16)(6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TrashStudentTabComponent_ng_template_1_div_2_div_4_span_7_Template, 2, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Th\u1EDDi gian x\u00F3a: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashStudentTabComponent_ng_template_1_div_2_div_4_Template_div_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const item_r13 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.clickRevertData(item_r13.nextPage, item_r13.id, item_r13.fullName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 22)(16, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Kh\u00F4i ph\u1EE5c");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", item_r13.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r13.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 4, item_r13.deletedAt, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 7, item_r13.deletedAt, "dd/MM/yyyy HH:mm"));
} }
function TrashStudentTabComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "mat-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TrashStudentTabComponent_ng_template_1_div_2_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.setAll($event.checked)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Ch\u1ECDn t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TrashStudentTabComponent_ng_template_1_div_2_a_3_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TrashStudentTabComponent_ng_template_1_div_2_div_4_Template, 18, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r5.allComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.someComplete() == true || ctx_r5.allComplete == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.task == null ? null : ctx_r5.task.subtasks);
} }
function TrashStudentTabComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 25);
} }
function TrashStudentTabComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrashStudentTabComponent_ng_template_1_ng_container_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.seeMore()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r7.nextPage);
} }
function TrashStudentTabComponent_ng_template_1_app_revert_dialog_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-revert-dialog", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closeDialog", function TrashStudentTabComponent_ng_template_1_app_revert_dialog_7_Template_app_revert_dialog_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.closeRevertDialog($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r8.dataRevertDialog);
} }
function TrashStudentTabComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TrashStudentTabComponent_ng_template_1_div_0_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TrashStudentTabComponent_ng_template_1_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TrashStudentTabComponent_ng_template_1_div_2_Template, 5, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TrashStudentTabComponent_ng_template_1_div_5_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TrashStudentTabComponent_ng_template_1_ng_container_6_Template, 4, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TrashStudentTabComponent_ng_template_1_app_revert_dialog_7_Template, 1, 1, "app-revert-dialog", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == true && !ctx_r2.nextPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == true && ctx_r2.nextPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isCheckData == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loadingMore == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loadingMore == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.dataRevertDialog == null ? null : ctx_r2.dataRevertDialog.isShow);
} }
class TrashStudentTabComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(dialog, commonService) {
        super(commonService);
        this.dialog = dialog;
        this.commonService = commonService;
        this.nextPage = '';
        this.type = 0;
        this.pageReset = 0;
        this.DataRevert = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.DataRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.SeeMore = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.isLoading = false;
        this.dataRevertDialog = { obj: { id: -1, curPage: '', name: '' }, type: 0, isShow: false };
        this.allComplete = false;
        this.isCheckData = false;
        this.loadingMore = false;
        this.skipObj = { skipLive: 0, skipArchive: 0 };
    }
    dataProcessing() {
        var _a, _b, _c, _d;
        var data = [];
        if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.length) != 0) {
            for (var i = 0; i < ((_c = (_b = this.data) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0); i++) {
                data.push(Object.assign(Object.assign({}, (_d = this.data) === null || _d === void 0 ? void 0 : _d[i]), { completed: false }));
            }
        }
        this.task = {
            completed: false,
            subtasks: data
        };
    }
    setAll(completed) {
        var _a;
        if (((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks) == null) {
            return;
        }
        this.task.subtasks.forEach((t) => t.completed = completed);
        if (completed == true) {
            this.allComplete = true;
        }
        else {
            this.allComplete = false;
        }
    }
    updateAllComplete(checked, index) {
        var _a, _b;
        if ((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks[index])
            this.task.subtasks[index].completed = checked;
        this.allComplete = ((_b = this.task) === null || _b === void 0 ? void 0 : _b.subtasks) != null && this.task.subtasks.every((t) => t.completed);
    }
    someComplete() {
        var _a;
        if (((_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks) == null) {
            return false;
        }
        return this.task.subtasks.filter((t) => t.completed).length > 0 && !this.allComplete;
    }
    clickRemoveAllData() {
        var _a, _b, _c, _d, _e;
        var data = [];
        var dataId = [];
        for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
            if (((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].completed) == true) {
                data.push({ id: Number(this.task.subtasks[index].id), curPage: (_d = this.task.subtasks[index].nextPage) !== null && _d !== void 0 ? _d : '', name: (_e = this.task.subtasks[index].fullName) !== null && _e !== void 0 ? _e : '' });
                dataId.push(Number(this.task.subtasks[index].id));
            }
        }
        const dialogRef = this.dialog.open(_remove_dialog_controller_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmRemoveComponent, {
            width: '750px',
            data: { type: this.type, data }
        });
        dialogRef.afterClosed().subscribe(result => {
            var _a, _b, _c;
            this.isLoading = false;
            if (result == 'remove') {
                for (let i = 0; i < data.length; i++) {
                    for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
                        if (data[i].id == ((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].id)) {
                            this.task.subtasks.splice(index, 1);
                        }
                    }
                }
                this.CalculateSkip(data);
                this.DataRemove.emit(dataId);
                this.allComplete = false;
            }
            this.isLoading = false;
        });
    }
    closeRevertDialog(RequeestDataRevart) {
        var _a, _b, _c;
        if (RequeestDataRevart) {
            for (let index = 0; index < ((_b = (_a = this.task) === null || _a === void 0 ? void 0 : _a.subtasks.length) !== null && _b !== void 0 ? _b : 0); index++) {
                if (RequeestDataRevart.id == ((_c = this.task) === null || _c === void 0 ? void 0 : _c.subtasks[index].id)) {
                    this.task.subtasks.splice(index, 1);
                }
            }
            this.CalculateSkip([RequeestDataRevart]);
            this.DataRevert.emit(RequeestDataRevart.id);
        }
        this.dataRevertDialog = { obj: { id: -1, curPage: '', name: '' }, type: 0, isShow: false };
    }
    CalculateSkip(objs) {
        for (var i = 0; i < objs.length; i++) {
            var nextpageParse = this.commonService.parseJson(objs[i].curPage);
            if (nextpageParse && nextpageParse.isArchive == 1) {
                this.skipObj.skipArchive++;
            }
            else {
                this.skipObj.skipLive++;
            }
        }
    }
    clickRevertData(nextPage, idDataRevart, name) {
        this.dataRevertDialog = { obj: { curPage: nextPage !== null && nextPage !== void 0 ? nextPage : '', id: Number(idDataRevart), name: name !== null && name !== void 0 ? name : '' }, type: this.type, isShow: true };
    }
    seeMore() {
        this.loadingMore = true;
        let requestObj = { type: this.type, skipObj: this.skipObj };
        this.SeeMore.emit(requestObj);
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnChanges() {
        var _a, _b;
        this.loadingMore = false;
        this.allComplete = false;
        this.dataProcessing();
        if (((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) >= 1) {
            this.isCheckData = false;
        }
        else {
            this.isCheckData = true;
        }
    }
}
TrashStudentTabComponent.ɵfac = function TrashStudentTabComponent_Factory(t) { return new (t || TrashStudentTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService)); };
TrashStudentTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TrashStudentTabComponent, selectors: [["app-trash-student-tab"]], inputs: { data: "data", nextPage: "nextPage", type: "type", pageReset: "pageReset" }, outputs: { DataRevert: "DataRevert", DataRemove: "DataRemove", SeeMore: "SeeMore" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["doneLoading", ""], [4, "ngIf"], [1, "mt-5", "mb-3"], [1, "d-flex", "justify-content-center"], ["class", "spinner-border spinner-border-sm", "role", "status", "style", "display: flex;", 4, "ngIf"], [3, "data", "closeDialog", 4, "ngIf"], [1, "block_none", "py-5"], ["color", "primary", 1, "check-all", 3, "checked", "change"], ["class", "buttom-delete", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "buttom-delete", 3, "click"], [1, "block-body"], [1, "block-body-main"], [1, "check-item"], ["color", "primary", 3, "checked", "change"], [1, "block-body-content"], [1, "notify__active"], ["class", "truncate mr-2 text-student", 3, "matTooltip", 4, "ngIf"], [1, "notify__time", "truncate"], [3, "matTooltip"], [1, "block-body-status", 3, "click"], [1, "text-center", "text-white", "class-info", "pt-2", "pb-2"], [1, "text-azo"], [1, "truncate", "mr-2", "text-student", 3, "matTooltip"], ["role", "status", 1, "spinner-border", "spinner-border-sm", 2, "display", "flex"], ["matTooltip", "Hi\u1EC7n b\u1EA3n ghi c\u0169 h\u01A1n", "mat-button", "", 1, "btn-all-add", 3, "disabled", "click"], [3, "data", "closeDialog"]], template: function TrashStudentTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TrashStudentTabComponent_azt_loading_effect_0_Template, 1, 0, "azt-loading-effect", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TrashStudentTabComponent_ng_template_1_Template, 8, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__.AztLoadingEffectComponent, _revert_dialog_controller_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmRevertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".check-all[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  margin-top: 20px;\n}\n\n.check-item[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  margin-top: 8px;\n}\n\n.block-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.block-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background: #fff;\n  border-radius: 3px;\n  margin-top: 20px;\n  width: 100%;\n}\n\n.block-body-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: 70%;\n}\n\n.block-body-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  background: #00c0ef;\n  cursor: pointer;\n  color: #fff;\n  width: 100px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.block-body-status[_ngcontent-%COMP%]:hover {\n  background-color: #00a2ca;\n}\n\n.block-body-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  max-width: 85%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 2px;\n  font-size: 14px;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-desc[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.block_none[_ngcontent-%COMP%] {\n  border-width: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: hsl(0deg, 0%, 100%);\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1215686275);\n  margin-top: 15px;\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.text-student[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n@media only screen and (max-width: 768px) {\n  .block-body[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .block_none[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n.buttom-delete[_ngcontent-%COMP%] {\n  float: right;\n  margin: 14px;\n  padding: 6px 15px;\n  background: #f44336;\n  color: white;\n  border-radius: 5px;\n}\n\n.buttom-delete[_ngcontent-%COMP%]:hover {\n  background: #ff1100;\n}"] });


/***/ })

}]);