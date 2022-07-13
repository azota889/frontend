"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_homework_frontend_module_module_ts"],{

/***/ 34690:
/*!**********************************************************************!*\
  !*** ./src/app/homework_frontend/masterpage/controller.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeworkFrontMasterPageComponent": () => (/* binding */ HomeworkFrontMasterPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 74202);



class HomeworkFrontMasterPageComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
}
HomeworkFrontMasterPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵHomeworkFrontMasterPageComponent_BaseFactory; return function HomeworkFrontMasterPageComponent_Factory(t) { return (ɵHomeworkFrontMasterPageComponent_BaseFactory || (ɵHomeworkFrontMasterPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](HomeworkFrontMasterPageComponent)))(t || HomeworkFrontMasterPageComponent); }; }();
HomeworkFrontMasterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeworkFrontMasterPageComponent, selectors: [["app-test-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["id", "homework-frontend-layout"]], template: function HomeworkFrontMasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 45031:
/*!****************************************************!*\
  !*** ./src/app/homework_frontend/module.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeworkFrontModule": () => (/* binding */ HomeworkFrontModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 51908);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-pdf-viewer */ 53135);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-image-cropper */ 87414);
/* harmony import */ var src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/azota-ui/azota-ui.module */ 47470);
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ 75658);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./masterpage/controller.component */ 34690);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing.module */ 67878);
/* harmony import */ var _submit_homework_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submit-homework/controller.component */ 49289);
/* harmony import */ var _submit_homework_utils_message_dialog_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submit-homework/utils/message-dialog/controller.component */ 47688);
/* harmony import */ var _utils_answer_history_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/answer-history/controller.component */ 19485);
/* harmony import */ var _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/footer/controller.component */ 95667);
/* harmony import */ var _utils_require_login_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/require-login/controller.component */ 64322);
/* harmony import */ var _view_homework_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-homework/controller.component */ 16805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 5000);



















class HomeworkFrontModule {
}
HomeworkFrontModule.ɵfac = function HomeworkFrontModule_Factory(t) { return new (t || HomeworkFrontModule)(); };
HomeworkFrontModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: HomeworkFrontModule });
HomeworkFrontModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_14__.EditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_17__.PdfViewerModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_4__.HomeworkFrontRoutingModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_18__.ImageCropperModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](HomeworkFrontModule, { declarations: [_utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_8__.HomeworkFrontendFooterComponent,
        _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_3__.HomeworkFrontMasterPageComponent,
        _submit_homework_controller_component__WEBPACK_IMPORTED_MODULE_5__.SubmitHomeworkComponent,
        _view_homework_controller_component__WEBPACK_IMPORTED_MODULE_10__.ViewHomeworkComponent,
        _submit_homework_utils_message_dialog_controller_component__WEBPACK_IMPORTED_MODULE_6__.MessageDialogComponent,
        _utils_answer_history_controller_component__WEBPACK_IMPORTED_MODULE_7__.AnswerHistoryComponent,
        _utils_require_login_controller_component__WEBPACK_IMPORTED_MODULE_9__.RequireLoginComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_14__.EditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_17__.PdfViewerModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_4__.HomeworkFrontRoutingModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_18__.ImageCropperModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule] }); })();


/***/ }),

/***/ 67878:
/*!*****************************************************!*\
  !*** ./src/app/homework_frontend/routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeworkFrontRoutingModule": () => (/* binding */ HomeworkFrontRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);
/* harmony import */ var src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auth_guards/auth.front.guard */ 45668);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masterpage/controller.component */ 34690);
/* harmony import */ var _submit_homework_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submit-homework/controller.component */ 49289);
/* harmony import */ var _view_homework_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-homework/controller.component */ 16805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);








const studentFrontendRoutes = [
    {
        path: '',
        component: _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_1__.HomeworkFrontMasterPageComponent,
        canActivate: [src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__.AuthFrontGuard],
        children: [
            { path: ':hash_id', component: _submit_homework_controller_component__WEBPACK_IMPORTED_MODULE_2__.SubmitHomeworkComponent },
            { path: 'view-homework/:id/:hash_id', component: _view_homework_controller_component__WEBPACK_IMPORTED_MODULE_3__.ViewHomeworkComponent },
            { path: 'view-homework/:id/:hash_id/:history_id', component: _view_homework_controller_component__WEBPACK_IMPORTED_MODULE_3__.ViewHomeworkComponent },
        ]
    },
];
class HomeworkFrontRoutingModule {
}
HomeworkFrontRoutingModule.ɵfac = function HomeworkFrontRoutingModule_Factory(t) { return new (t || HomeworkFrontRoutingModule)(); };
HomeworkFrontRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomeworkFrontRoutingModule });
HomeworkFrontRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(studentFrontendRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeworkFrontRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterModule] }); })();


/***/ }),

/***/ 49289:
/*!***************************************************************************!*\
  !*** ./src/app/homework_frontend/submit-homework/controller.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitHomeworkComponent": () => (/* binding */ SubmitHomeworkComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 70655);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ 40520);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 36053);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_helpers/FileManagers */ 12626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_helpers_MyPdfService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_helpers/MyPdfService */ 58326);
/* harmony import */ var src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_helpers/LocalStorageObjetc */ 3279);
/* harmony import */ var src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/upload.api.service */ 29401);
/* harmony import */ var src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/zipdata.service */ 2366);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/user.service */ 88386);
/* harmony import */ var src_app_core_services_homework_exam_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/homework.exam.service */ 61704);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ 87238);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _azota_ui_select_student_controller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../azota-ui/select_student/controller.component */ 81903);
/* harmony import */ var _azota_ui_send_request_reapprove_controller_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../azota-ui/send-request-reapprove/controller.component */ 58410);
/* harmony import */ var _azota_ui_preview_media_controller_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../azota-ui/preview-media/controller.component */ 73852);
/* harmony import */ var _azota_ui_azt_check_mark_controller_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../azota-ui/azt-check-mark/controller.component */ 37104);
/* harmony import */ var _azota_ui_download_qr_code_controller_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../azota-ui/download-qr-code/controller.component */ 71572);
/* harmony import */ var _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/footer/controller.component */ 95667);
/* harmony import */ var _utils_message_dialog_controller_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/message-dialog/controller.component */ 47688);
/* harmony import */ var _utils_answer_history_controller_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/answer-history/controller.component */ 19485);
/* harmony import */ var _utils_require_login_controller_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/require-login/controller.component */ 64322);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);



































function SubmitHomeworkComponent_azt_loading_effect_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "azt-loading-effect");
} }
function SubmitHomeworkComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](5, 1, ctx_r5.statusObj.errorMessage));
} }
function SubmitHomeworkComponent_ng_template_5_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_frontend_submit_homework_name_homework"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](ctx_r12.obj == null ? null : ctx_r12.obj.homeworkObj == null ? null : ctx_r12.obj.homeworkObj.name);
} }
function SubmitHomeworkComponent_ng_template_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_1_div_1_p_1_Template, 5, 4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](7, "azt-download-qr-code", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r9.obj == null ? null : ctx_r9.obj.homeworkObj == null ? null : ctx_r9.obj.homeworkObj.name) && (ctx_r9.obj == null ? null : ctx_r9.obj.homeworkObj == null ? null : ctx_r9.obj.homeworkObj.name) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](4, 5, "lang_homework_homework_frontend_submit_homework_code_homework"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](ctx_r9.obj == null ? null : ctx_r9.obj.homeworkObj == null ? null : ctx_r9.obj.homeworkObj.hashId);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("fileName", "azota_submit_homework_qrcode_" + ctx_r9.homeworkHashId)("linkUrl", ctx_r9.urlLocation);
} }
function SubmitHomeworkComponent_ng_template_5_div_1_app_send_request_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "app-send-request", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("confirmSend", function SubmitHomeworkComponent_ng_template_5_div_1_app_send_request_3_Template_app_send_request_confirmSend_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r13.confirmSendRequest($event)); })("closeDialog", function SubmitHomeworkComponent_ng_template_5_div_1_app_send_request_3_Template_app_send_request_closeDialog_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r15.closeRequestDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("data", ctx_r10.sendRequestData);
} }
function SubmitHomeworkComponent_ng_template_5_div_1_app_require_login_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "app-require-login", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("closeDialog", function SubmitHomeworkComponent_ng_template_5_div_1_app_require_login_4_Template_app_require_login_closeDialog_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r16.closeRequireLogin()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("data", ctx_r11.requireLogin);
} }
function SubmitHomeworkComponent_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_1_div_1_Template, 8, 7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "app-select-student", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("selectChild", function SubmitHomeworkComponent_ng_template_5_div_1_Template_app_select_student_selectChild_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r18.closeChooseStudent($event)); })("approvedByName", function SubmitHomeworkComponent_ng_template_5_div_1_Template_app_select_student_approvedByName_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r20.approvedToClass($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](3, SubmitHomeworkComponent_ng_template_5_div_1_app_send_request_3_Template, 1, 1, "app-send-request", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](4, SubmitHomeworkComponent_ng_template_5_div_1_app_require_login_4_Template, 1, 1, "app-require-login", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r6.obj == null ? null : ctx_r6.obj.homeworkObj) && (ctx_r6.obj == null ? null : ctx_r6.obj.homeworkObj == null ? null : ctx_r6.obj.homeworkObj.hashId) && (ctx_r6.obj == null ? null : ctx_r6.obj.homeworkObj == null ? null : ctx_r6.obj.homeworkObj.hashId) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("homeworkFlow", true)("data", ctx_r6.chooseChildData)("showAddStudent", ctx_r6.chooseChildData.classObj == null ? null : ctx_r6.chooseChildData.classObj.showAddStudent);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r6.sendRequestData == null ? null : ctx_r6.sendRequestData.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r6.requireLogin == null ? null : ctx_r6.requireLogin.isShow);
} }
function SubmitHomeworkComponent_ng_template_5_app_message_dialog_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "app-message-dialog", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("closeDialog", function SubmitHomeworkComponent_ng_template_5_app_message_dialog_2_Template_app_message_dialog_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r21.closeMessageDialog($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("data", ctx_r7.messageDialogData);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div")(1, "azt-preview-media", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("closePreview", function SubmitHomeworkComponent_ng_template_5_div_3_div_1_Template_azt_preview_media_closePreview_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r26.onFileClose()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("fileOption", ctx_r23.previewFile);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 26)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 1, "lang_core_over_time_deadline"));
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_frontend_submit_homework_name_homework"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](ctx_r34.obj == null ? null : ctx_r34.obj.homeworkObj == null ? null : ctx_r34.obj.homeworkObj.name);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_frontend_submit_homework_dealine"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind2"](3, 4, ctx_r35.obj == null ? null : ctx_r35.obj.homeworkObj == null ? null : ctx_r35.obj.homeworkObj.deadline, "dd/MM/yyyy HH:mm:ss"), "");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_frontend_submit_homework_dealine"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 4, "lang_homework_homework_frontend_submit_homework_not_time"), "");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_frontend_submit_homework_dealine"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind2"](3, 4, ctx_r37.obj == null ? null : ctx_r37.obj.homeworkObj == null ? null : ctx_r37.obj.homeworkObj.deadline, "dd/MM/yyyy HH:mm:ss"), "");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_frontend_submit_homework_dealine"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 4, "lang_homework_homework_frontend_submit_homework_not_time"), "");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 2, "lang_homework_homework_frontend_submit_homework_name_student"), ": ", ctx_r39.currentChild.fullName, "");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 47)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 2, "lang_homework_homework_frontend_submit_homework_name_student"), ": ", ctx_r40.currentChild.fullName, "");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_31_div_2_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r49); const file_r47 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](7); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r48.onShowFile(file_r47, -1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4, "text_snippet");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](5, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const file_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("title", file_r47.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](file_r47.name);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_31_div_2_Template, 7, 2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx_r41.files);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_frontend_submit_homework_teacher_request_submit"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](ctx_r50.resendNote);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_2_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r61); const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](_r58.click()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "div", 52)(4, "a", 68)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](6, "add_a_photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](10, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](11, "input", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("change", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_2_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](8); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r62.captureFile($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](13, "div", 66)(14, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_2_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r61); const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](24); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](_r59.click()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](15, "div", 52)(16, "a", 68)(17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](18, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](22, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](23, "input", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("change", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_2_Template_input_change_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r61); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](8); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r64.selectFile($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](10, 2, "lang_homework_homework_frontend_submit_homework_capture"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](22, 4, "lang_homework_homework_frontend_submit_homework_choose_file"));
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 49)(1, "div", 74)(2, "div", 75)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](5, 1, "lang_homework_homework_frontend_submit_homework_note_teacher_mark"), "!");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 76)(1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 1, "lang_homework_homework_frontend_submit_homework_loading_wait_it"), "!");
} }
const _c0 = function (a0) { return { "width.%": a0 }; };
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 79)(1, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const file_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](file_r66.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction1"](2, _c0, file_r66.uploadProgress));
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_5_div_1_Template, 5, 4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx_r55.convertObjToArray(ctx_r55.fileUploadQueue));
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 76)(1, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 1, "lang_homework_homework_frontend_submit_homework_submit_success"), "!");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_span_26_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_span_26_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r75); const answer_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](9); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r73.removeImg(answer_r68.url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](3, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span", 101)(1, "mat-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "check_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} }
const _c1 = function (a0) { return { "padding": a0 }; };
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 85)(1, "a", 86)(2, "div", 87)(3, "div", 88)(4, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_Template_img_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r77); const answer_r68 = restoredCtx.$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](9); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r76.onShowFile(answer_r68, -1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](5, "mycdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "div", 90)(7, "div", 91)(8, "mat-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_Template_mat_icon_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r77); const indexAns_r69 = restoredCtx.index; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](9); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r78.switchAttributeArray(ctx_r78.answerFileList, indexAns_r69, indexAns_r69 - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](9, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](10, " keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](11, "mat-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_Template_mat_icon_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r77); const indexAns_r69 = restoredCtx.index; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](9); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r79.switchAttributeArray(ctx_r79.answerFileList, indexAns_r69, indexAns_r69 - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](12, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](13, "arrow_upward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](14, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](16, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](17, "input", 95, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("keyup.enter", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_Template_input_keyup_enter_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r77); const indexAns_r69 = restoredCtx.index; const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](18); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](9); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r80.switchAttributeArrayInput(indexAns_r69, _r70.value)); })("change", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_Template_input_change_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r77); const indexAns_r69 = restoredCtx.index; const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](18); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](9); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r81.switchAttributeArrayInput(indexAns_r69, _r70.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](19, "div", 97)(20, "mat-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_Template_mat_icon_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r77); const indexAns_r69 = restoredCtx.index; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](9); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r82.switchAttributeArray(ctx_r82.answerFileList, indexAns_r69, indexAns_r69 + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](21, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](22, " keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](23, "mat-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_Template_mat_icon_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r77); const indexAns_r69 = restoredCtx.index; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](9); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r83.switchAttributeArray(ctx_r83.answerFileList, indexAns_r69, indexAns_r69 + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](24, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](25, "arrow_downward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](26, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_span_26_Template, 4, 0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](27, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_span_27_Template, 3, 0, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r68 = ctx.$implicit;
    const indexAns_r69 = ctx.index;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](5, 12, answer_r68.thumb), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](9, 14, "lang_homework_homework_frontend_submit_homework_go_to_front"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](12, 16, "lang_homework_homework_frontend_submit_homework_go_to_top"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction1"](24, _c1,  false ? 0 : "5px 30px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](16, 18, "lang_homework_homework_frontend_submit_homework_page"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate"]("id", "input_page_" + indexAns_r69);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate"]("max", ctx_r67.answerFileList == null ? null : ctx_r67.answerFileList.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate"]("value", indexAns_r69 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](21, 20, "lang_homework_homework_frontend_submit_homework_go_to_backside"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](24, 22, "lang_homework_homework_frontend_submit_homework_go_to_down"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !(ctx_r67.obj == null ? null : ctx_r67.obj.isMarked));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r67.isShowGreenCheckbox(answer_r68.url));
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_div_1_Template, 28, 26, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx_r57.answerFileList);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_2_Template, 25, 6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](3, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_3_Template, 6, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](4, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_4_Template, 4, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](5, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_5_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](6, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_6_Template, 4, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](7, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_div_7_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !(ctx_r51.obj == null ? null : ctx_r51.obj.isMarked));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r51.obj == null ? null : ctx_r51.obj.isMarked);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r51.statusObjData.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r51.convertObjToArray(ctx_r51.fileUploadQueue).length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r51.answerFileList == null ? null : ctx_r51.answerFileList.length) && (ctx_r51.rawAnswerFileList == null ? null : ctx_r51.rawAnswerFileList.length) && ctx_r51.isSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r51.answerFileList == null ? null : ctx_r51.answerFileList.length);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "form", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_p_1_Template, 5, 4, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_div_2_Template, 8, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("formGroup", ctx_r42.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r42.hasResentComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r42.files.length > 0 || ctx_r42.files.length == 0);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_34_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 49)(1, "div", 74)(2, "div", 75)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](5, 1, "lang_homework_homework_frontend_submit_homework_note_teacher_mark"), "!");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_34_ng_template_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 85)(1, "a", 86)(2, "div", 87)(3, "div", 88)(4, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_34_ng_template_0_div_1_div_1_Template_img_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r92); const answer_r89 = restoredCtx.$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](9); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r91.onShowFile(answer_r89, -1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](5, "mycdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const answer_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](5, 1, answer_r89.url), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeUrl"]);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_34_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_34_ng_template_0_div_1_div_1_Template, 6, 3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx_r86.answerFileList);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_34_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 105)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 1, "lang_homework_homework_frontend_submit_homework_end_time_submit"));
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_34_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](0, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_34_ng_template_0_div_0_Template, 6, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_34_ng_template_0_div_1_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_34_ng_template_0_div_2_Template, 4, 3, "div", 103);
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r84.obj == null ? null : ctx_r84.obj.isMarked);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r84.obj == null ? null : ctx_r84.obj.isOverTime) && (ctx_r84.answerFileList == null ? null : ctx_r84.answerFileList.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r84.obj == null ? null : ctx_r84.obj.isOverTime) && !(ctx_r84.obj == null ? null : ctx_r84.obj.isMarked));
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](0, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_34_ng_template_0_Template, 3, 3, "ng-template");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_36_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 106)(1, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_36_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r94.submitHomework()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_36_span_2_Template, 3, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("disabled", ctx_r44.statusObjData.loading || !(ctx_r44.answerFileList == null ? null : ctx_r44.answerFileList.length) || (ctx_r44.obj == null ? null : ctx_r44.obj.isMarked));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r44.statusObjData.loading === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"]("", (ctx_r44.obj == null ? null : ctx_r44.obj.isMarked) ? _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](4, 3, "lang_homework_homework_frontend_submit_homework_submited") : _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](5, 5, "lang_homework_homework_frontend_submit_homework_submit"), " ");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_37_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 106)(1, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_37_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r97.submitHomework()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_37_span_2_Template, 3, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("disabled", ctx_r45.statusObjData.loading || !(ctx_r45.answerFileList == null ? null : ctx_r45.answerFileList.length) || (ctx_r45.obj == null ? null : ctx_r45.obj.isOverTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r45.statusObjData.loading === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"]("", (ctx_r45.obj == null ? null : ctx_r45.obj.isMarked) ? _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](4, 3, "lang_homework_homework_frontend_submit_homework_submited") : _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](5, 5, "lang_homework_homework_frontend_submit_homework_end_dealine_submit"), " ");
} }
const _c2 = function (a0) { return { "pt-2": a0 }; };
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div")(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_p_2_Template, 5, 4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](8, "azt-download-qr-code", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](9, "div", 28)(10, "div", 29)(11, "div", 30)(12, "div", 31)(13, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](15, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](17, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_span_17_Template, 4, 7, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](18, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_span_18_Template, 4, 6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](19, "div", 34)(20, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](22, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](24, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_span_24_Template, 4, 7, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](25, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_span_25_Template, 4, 6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](26, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](27, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_27_Template, 4, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](28, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_28_Template, 4, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](29, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](30, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](31, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_31_Template, 3, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](32, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](33, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_form_33_Template, 3, 3, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](34, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_34_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](35, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](36, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_36_Template, 6, 7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](37, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_div_37_Template, 6, 7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](38, "app-answer-history", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("previewFileEmit", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_Template_app_answer_history_previewFileEmit_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r99.onShowFileTwo($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r31.obj == null ? null : ctx_r31.obj.homeworkObj == null ? null : ctx_r31.obj.homeworkObj.name) && (ctx_r31.obj == null ? null : ctx_r31.obj.homeworkObj == null ? null : ctx_r31.obj.homeworkObj.name) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](5, 24, "lang_homework_homework_frontend_submit_homework_code_homework"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](ctx_r31.obj == null ? null : ctx_r31.obj.homeworkObj == null ? null : ctx_r31.obj.homeworkObj.hashId);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("fileName", "azota_submit_homework_qrcode_" + ctx_r31.homeworkHashId)("linkUrl", ctx_r31.urlLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](15, 26, "lang_homework_homework_frontend_submit_homework_date_homework"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind2"](16, 28, ctx_r31.obj == null ? null : ctx_r31.obj.homeworkObj == null ? null : ctx_r31.obj.homeworkObj.createdAt, "dd/MM/yyyy HH:mm:ss"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r31.obj == null ? null : ctx_r31.obj.homeworkObj == null ? null : ctx_r31.obj.homeworkObj.deadline) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r31.obj == null ? null : ctx_r31.obj.homeworkObj == null ? null : ctx_r31.obj.homeworkObj.deadline) == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](22, 31, "lang_homework_homework_frontend_submit_homework_date_homework"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind2"](23, 33, ctx_r31.obj == null ? null : ctx_r31.obj.homeworkObj == null ? null : ctx_r31.obj.homeworkObj.createdAt, "dd/MM/yyyy HH:mm:ss"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r31.obj == null ? null : ctx_r31.obj.homeworkObj == null ? null : ctx_r31.obj.homeworkObj.deadline) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r31.obj == null ? null : ctx_r31.obj.homeworkObj == null ? null : ctx_r31.obj.homeworkObj.deadline) == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r31.currentChild);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r31.currentChild);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("innerHTML", ctx_r31.obj == null ? null : ctx_r31.obj.homeworkObj == null ? null : ctx_r31.obj.homeworkObj.content, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r31.files.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction1"](36, _c2, ctx_r31.obj == null ? null : ctx_r31.obj.isOverTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !(ctx_r31.obj == null ? null : ctx_r31.obj.isOverTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r31.obj == null ? null : ctx_r31.obj.isOverTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !(ctx_r31.obj == null ? null : ctx_r31.obj.isOverTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r31.obj == null ? null : ctx_r31.obj.isOverTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("dataAnswerHistory", ctx_r31.answerHistory)("dataHomeworkObj", ctx_r31.obj == null ? null : ctx_r31.obj.homeworkObj);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_frontend_submit_homework_name_homework"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](ctx_r101.obj == null ? null : ctx_r101.obj.homeworkObj == null ? null : ctx_r101.obj.homeworkObj.name);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_frontend_submit_homework_dealine"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind2"](3, 4, ctx_r102.obj == null ? null : ctx_r102.obj.homeworkObj == null ? null : ctx_r102.obj.homeworkObj.deadline, "dd/MM/yyyy HH:mm:ss"), "");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_frontend_submit_homework_dealine"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 4, "lang_homework_homework_frontend_submit_homework_not_time"), "");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 2, "lang_homework_homework_frontend_submit_homework_name_student"), ": ", ctx_r104.currentChild.fullName, "");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 47)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 2, "lang_homework_homework_frontend_submit_homework_name_student"), ": ", ctx_r105.currentChild.fullName, "");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_div_24_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r111); const file_r109 = restoredCtx.$implicit; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r110.onShowFile(file_r109, -1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4, "text_snippet");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](5, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const file_r109 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("title", file_r109.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](file_r109.name);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 79)(1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_div_33_div_1_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r115); const answer_r113 = restoredCtx.$implicit; const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](7); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r114.onShowFile(answer_r113, -1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "mat-icon", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](3, "attach_file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const answer_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("title", answer_r113.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](answer_r113.name);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_div_33_div_1_Template, 6, 2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx_r107.answerFileList);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "p", 121);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "azt-check-mark", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("mark", ctx_r117.answerObj.point);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "div", 127);
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("innerHTML", ctx_r121.answerObj.note, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeHtml"]);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "div", 128);
} if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("innerHTML", ctx_r122.answerObj.note, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeHtml"]);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_div_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "div", 129);
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("innerHTML", ctx_r123.answerObj.note, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeHtml"]);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_div_16_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "div", 130);
} if (rf & 2) {
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("innerHTML", ctx_r124.answerObj.note, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeHtml"]);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_div_16_div_1_Template, 1, 1, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_div_16_div_2_Template, 1, 1, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](3, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_div_16_div_3_Template, 1, 1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](4, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_div_16_div_4_Template, 1, 1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r118.answerObj.txtCommentFont == "font_chu_in");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r118.answerObj.txtCommentFont == "font_chu_in_\u0111am");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r118.answerObj.txtCommentFont == "font_chu_dep_z");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r118.answerObj.txtCommentFont == "font_chu_in_nghieng");
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "div", 129);
} if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("innerHTML", ctx_r120.answerObj.note, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeHtml"]);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](3, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r126); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r125.viewDetail()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](7, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](8, "div", 115)(9, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](10, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_p_10_Template, 1, 0, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](11, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_p_11_Template, 2, 1, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](12, "div", 118)(13, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](15, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](16, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_div_16_Template, 5, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](17, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_ng_template_17_Template, 1, 1, "ng-template", null, 120, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](18);
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 7, "lang_homework_homework_frontend_submit_homework_result"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](6, 9, "lang_homework_homework_frontend_submit_homework_view_detail_result"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !ctx_r108.isHideMark && !ctx_r108.answerObj.point);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !ctx_r108.isHideMark && ctx_r108.answerObj.point);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](15, 11, "lang_homework_homework_frontend_submit_homework_comment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r108.answerObj.txtCommentFont != undefined || ctx_r108.answerObj.txtCommentFont != null)("ngIfElse", _r119);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_p_1_Template, 5, 4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](7, "azt-download-qr-code", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](8, "div", 28)(9, "div", 29)(10, "div", 30)(11, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](13, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](15, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_span_15_Template, 4, 7, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](16, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_span_16_Template, 4, 6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](18, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_div_18_Template, 4, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](19, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_div_19_Template, 4, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](21, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](22, "div", 48)(23, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](24, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_div_24_Template, 7, 2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](25, "div", 110)(26, "p")(27, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](29, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](31, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](33, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_div_33_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](34, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_ng_template_34_Template, 19, 13, "ng-template", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](35, "app-answer-history", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("previewFileEmit", function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_Template_app_answer_history_previewFileEmit_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r128); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r127.onShowFileTwo($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r33.obj == null ? null : ctx_r33.obj.homeworkObj == null ? null : ctx_r33.obj.homeworkObj.name) && (ctx_r33.obj == null ? null : ctx_r33.obj.homeworkObj == null ? null : ctx_r33.obj.homeworkObj.name) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](4, 20, "lang_homework_homework_frontend_submit_homework_code_homework"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](ctx_r33.obj == null ? null : ctx_r33.obj.homeworkObj == null ? null : ctx_r33.obj.homeworkObj.hashId);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("fileName", "azota_submit_homework_qrcode_" + ctx_r33.homeworkHashId)("linkUrl", ctx_r33.urlLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](13, 22, "lang_homework_homework_frontend_submit_homework_date_homework"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind2"](14, 24, ctx_r33.obj == null ? null : ctx_r33.obj.homeworkObj == null ? null : ctx_r33.obj.homeworkObj.createdAt, "dd/MM/yyyy HH:mm:ss"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r33.obj == null ? null : ctx_r33.obj.homeworkObj == null ? null : ctx_r33.obj.homeworkObj.deadline) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r33.obj == null ? null : ctx_r33.obj.homeworkObj == null ? null : ctx_r33.obj.homeworkObj.deadline) == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r33.currentChild);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r33.currentChild);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("innerHTML", ctx_r33.obj == null ? null : ctx_r33.obj.homeworkObj == null ? null : ctx_r33.obj.homeworkObj.content, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx_r33.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](29, 27, "lang_homework_homework_frontend_submit_homework_assignment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](31, 29, "lang_homework_homework_frontend_submit_homework_time_submit"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind2"](32, 31, ctx_r33.answerObj == null ? null : ctx_r33.answerObj.createdAt, "dd/MM/yyyy HH:mm:ss"), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r33.answerFileList == null ? null : ctx_r33.answerFileList.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r33.answerObj != null && (ctx_r33.obj == null ? null : ctx_r33.obj.isMarked));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("dataAnswerHistory", ctx_r33.answerHistory)("dataHomeworkObj", ctx_r33.obj == null ? null : ctx_r33.obj.homeworkObj);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](0, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_div_0_Template, 39, 38, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_ng_template_1_Template, 36, 34, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](2);
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r30.answerObj == null || ctx_r30.answerObj != null && ctx_r30.answerObj.confirmedAt == null)("ngIfElse", _r32);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](0, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_div_0_Template, 4, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_ng_template_1_Template, 3, 2, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](2);
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", (ctx_r25.obj == null ? null : ctx_r25.obj.isOverTime) && !(ctx_r25.obj == null ? null : ctx_r25.obj.answerObj == null ? null : ctx_r25.obj.answerObj.createdAt))("ngIfElse", _r29);
} }
function SubmitHomeworkComponent_ng_template_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_3_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, SubmitHomeworkComponent_ng_template_5_div_3_ng_template_2_Template, 3, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](3);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r8.isShowPreviewFile)("ngIfElse", _r24);
} }
function SubmitHomeworkComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](0, SubmitHomeworkComponent_ng_template_5_div_0_Template, 6, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_ng_template_5_div_1_Template, 5, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, SubmitHomeworkComponent_ng_template_5_app_message_dialog_2_Template, 1, 1, "app-message-dialog", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](3, SubmitHomeworkComponent_ng_template_5_div_3_Template, 4, 2, "div", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r2.statusObj.errorMessage != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r2.selectChild);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r2.messageDialogData.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r2.normalFlow);
} }
function SubmitHomeworkComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function SubmitHomeworkComponent_div_7_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r130); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r129.isShowErrorsBox = !ctx_r129.isShowErrorsBox); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](7, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, "lang_homework_homework_frontend_submit_homework_error_exchange_data"), ". ( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](ctx_r3.isShowErrorsBox ? _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](5, 4, "lang_homework_homework_frontend_submit_homework_hide_detail") : _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](6, 6, "lang_homework_homework_frontend_submit_homework_view_detail"));
} }
function SubmitHomeworkComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const log_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](log_r132);
} }
function SubmitHomeworkComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, SubmitHomeworkComponent_div_8_div_1_Template, 3, 1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx_r4.logs);
} }
class SubmitHomeworkComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(fb, activeRoute, commonService, baseApiService, myPdfService, localStorageObjetct, frontHomeworkService, frontAnswerService, frontStudentService, apiUploadService, zipdataService, userService, homeworkExamService) {
        super(commonService);
        this.fb = fb;
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.myPdfService = myPdfService;
        this.localStorageObjetct = localStorageObjetct;
        this.frontHomeworkService = frontHomeworkService;
        this.frontAnswerService = frontAnswerService;
        this.frontStudentService = frontStudentService;
        this.apiUploadService = apiUploadService;
        this.zipdataService = zipdataService;
        this.userService = userService;
        this.homeworkExamService = homeworkExamService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.UntypedFormGroup({});
        this.homeworkHashId = '';
        this.statusObjData = { loading: false, errorStatus: -1, errorMessage: '', loadingMessage: '' };
        this.currentChild = {};
        this.files = [];
        this.hasResentComment = false;
        this.isSubmit = false;
        this.urlLocation = '';
        this.isShowPreviewFile = false;
        this.logs = [];
        this.isShowErrorsBox = false;
        this.isHideMark = false;
        this.fileUploadQueue = [];
        this.uploadCount = 0;
        this.selectChild = false;
        this.isPendingApproved = false;
        this.messageDialogData = { type: '', isShow: false };
        this.normalFlow = false;
        this.chooseChildData = { isPendingApproved: false, isShow: false };
        this.backtoLink = '/student/dashboard/1';
        this.sendRequestData = { studentObj: undefined, classId: -1, isShow: false };
        this.requireLogin = { studentObj: undefined, classId: -1, isShow: false };
        this.countUpload = 1;
        this.selectFile = (event) => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            let eventObj = event;
            let target = eventObj.target;
            let files = target.files;
            // let fileReader = new FileReader();
            try {
                for (let key in files) {
                    if (key != 'length' && key != 'item') {
                        // Validate file item:
                        if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__.isSuportTypeUpload)(files[key].type)) {
                            if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__.getFileSizeMB)(files[key].size) <= 200) {
                                /** check pdf */
                                this.statusObjData = { loading: true, errorStatus: -1, errorMessage: '', loadingMessage: '' };
                                if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__.isPdfDocument)(files[key].type)) {
                                    /** convert pdf to image and save */
                                    let fileImgs = yield this.myPdfService.getImageWithPdf(files[key]);
                                    this.answerFile = files ? files[key] : this.answerFile;
                                    this.uploadFiles(fileImgs, this.uploadCount);
                                    this.uploadCount += 1;
                                }
                                else {
                                    /** Save file */
                                    this.answerFile = files ? files[key] : this.answerFile;
                                    // add assoc key values, this will be posts values
                                    if (this.answerFile) {
                                        this.statusObjData = { loading: true, errorStatus: -1, errorMessage: '', loadingMessage: '' };
                                        // if(isVideo(files[key].type)) {
                                        //   this.countUpload = 0;
                                        //   this.uploadFileVideo(this.answerFile, this.uploadCount);
                                        // } else {
                                        this.uploadFile(this.answerFile, this.uploadCount);
                                        // }
                                        this.uploadCount += 1;
                                    }
                                }
                            }
                            else {
                                this.commonService.snackError('Vui lòng chọn file không quá 200 MB', '');
                            }
                        }
                        else {
                            this.commonService.snackError('Định dạng file không được hỗ trợ. Vui lòng chọn tệp tin Ảnh, Video (chưa hỗ trợ .wmv), Audio hoặc File PDF', '');
                        }
                    }
                }
                event.target.value = '';
                this.isSubmit = false;
            }
            catch (err) {
                alert('Đã xảy ra lỗi:' + err);
            }
        });
        this.uploadFileVideo = (file, uploadCount) => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            var vimeoUploadInfoForm = { qrcode: undefined, homeworkId: (_b = (_a = this.obj) === null || _a === void 0 ? void 0 : _a.homeworkObj) === null || _b === void 0 ? void 0 : _b.id, teacherId: (_d = (_c = this.obj) === null || _c === void 0 ? void 0 : _c.homeworkObj) === null || _d === void 0 ? void 0 : _d.tenantId };
            this.subscriptions.add(this.apiUploadService.uploadToVimeoProgress('front_homework', file, vimeoUploadInfoForm).subscribe((cls) => {
                var _a;
                if (cls.isOnProgress) {
                    if (this.fileUploadQueue.hasOwnProperty(uploadCount)) {
                        this.fileUploadQueue[uploadCount].uploadProgress = Math.round((_a = cls.percentage) !== null && _a !== void 0 ? _a : 0);
                        this.fileUploadQueue[uploadCount].fileName = file.name;
                    }
                    else {
                        this.fileUploadQueue[uploadCount] = { uploadProgress: 0, fileName: file.name };
                    }
                }
                else {
                    if (cls.success == 1) {
                        delete this.fileUploadQueue[uploadCount];
                        if (!Array.isArray(this.answerFileList)) {
                            this.answerFileList = [];
                        }
                        this.addFileWithProsess(Object.assign(Object.assign({}, cls.data), { lastModified: file.lastModified }));
                        this.statusObjData = { loading: false, errorStatus: -1, errorMessage: '', loadingMessage: '' };
                    }
                    else {
                        if (cls.hasOwnProperty('code') && cls.code == 401) {
                            if (this.countUpload <= 3) {
                                setTimeout(() => {
                                    this.countUpload++;
                                    this.uploadFileVideo(file, uploadCount);
                                }, 15000);
                            }
                        }
                        else {
                            this.statusObjData = { loading: false, errorStatus: -1, errorMessage: '', loadingMessage: '' };
                            this.commonService.snackError('Không Upload được tệp tin! Vui lòng thử lại sau! Tên: ' + file.name, '');
                            this.commonService.gaEvent('FrontHomework_UploadError');
                        }
                    }
                }
            }));
        });
        this.uploadFiles = (files, uploadCount) => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                yield (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__.compressImage)(file).then((dataFile) => {
                    this.apiUploadService.uploadToCdnProgressForFrontendHomework(dataFile).subscribe((cls) => {
                        if (cls.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpEventType.UploadProgress) {
                            if (cls.success == 1) {
                                delete this.fileUploadQueue[uploadCount];
                                if (!Array.isArray(this.answerFileList)) {
                                    this.answerFileList = [];
                                }
                                this.addFileWithProsess(Object.assign(Object.assign({}, cls.data), { lastModified: dataFile.lastModified }));
                            }
                            else {
                                this.statusObjData = { loading: false, errorStatus: -1, errorMessage: '', loadingMessage: '' };
                                this.commonService.snackError('Không Upload được tệp tin (Tên:' + file.name + '! Vui lòng thử lại sau!', '');
                            }
                        }
                    });
                });
                if (i === files.length - 1) {
                    this.statusObjData = { loading: false, errorStatus: -1, errorMessage: '', loadingMessage: '' };
                }
            }
        });
        this.uploadFile = (file, uploadCount) => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            /** Xử lý file */
            this.isSubmit = false;
            if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__.isImage)(file.type) || (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__.isVideo)(file.type) || (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__.isAudio)(file.type) || (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__.isPdfDocument)(file.type) || (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__.isOfficeDocument)(file.type)) {
                (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__.compressImage)(file).then((dataFile) => {
                    this.apiUploadService.uploadToCdnProgressForFrontendHomework(dataFile).subscribe((cls) => {
                        var _a, _b;
                        if (cls.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpEventType.UploadProgress) {
                            if (cls.success == 1) {
                                delete this.fileUploadQueue[uploadCount];
                                if (!Array.isArray(this.answerFileList)) {
                                    this.answerFileList = [];
                                }
                                this.addFileWithProsess(Object.assign(Object.assign({}, cls.data), { lastModified: dataFile.lastModified }));
                                this.statusObjData = { loading: false, errorStatus: -1, errorMessage: '', loadingMessage: '' };
                            }
                            else {
                                this.statusObjData = { loading: false, errorStatus: -1, errorMessage: '', loadingMessage: '' };
                                this.commonService.gaEvent('FrontHomework_UploadError');
                                this.showErrorSnack('Không Upload được ảnh (Tên: ' + file.name + ')! Vui lòng thử lại sau! Lỗi: [SPLIT_LANG]' + cls.message);
                            }
                        }
                        else {
                            let percent = Math.round((_a = cls.loaded) !== null && _a !== void 0 ? _a : 0 / ((_b = cls.total) !== null && _b !== void 0 ? _b : 1) * 100);
                            if (this.fileUploadQueue.hasOwnProperty(uploadCount)) {
                                this.fileUploadQueue[uploadCount].uploadProgress = percent;
                                this.fileUploadQueue[uploadCount].fileName = file.name;
                            }
                            else {
                                this.fileUploadQueue[uploadCount] = { uploadProgress: 0, fileName: file.name };
                            }
                        }
                    });
                });
            }
        });
        this.captureFile = (event) => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            let eventObj = event;
            let target = eventObj.target;
            let files = target.files;
            try {
                for (let key in files) {
                    if (key != 'length' && key != 'item') {
                        if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__.isSuportTypeUpload)(files[key].type)) {
                            if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__.getFileSizeMB)(files[key].size) <= 200) {
                                /** check pdf */
                                this.statusObjData = { loading: true, errorStatus: -1, errorMessage: '', loadingMessage: '' };
                                if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_2__.isPdfDocument)(files[key].type)) {
                                    /** convert pdf to image and save */
                                    let fileImgs = yield this.myPdfService.getImageWithPdf(files[key]);
                                    this.answerFile = files ? files[key] : this.answerFile;
                                    this.uploadFiles(fileImgs, this.uploadCount);
                                    this.uploadCount += 1;
                                }
                                else {
                                    /** Save file */
                                    this.answerFile = files ? files[key] : this.answerFile;
                                    // add assoc key values, this will be posts values
                                    if (this.answerFile) {
                                        this.statusObjData = { loading: true, errorStatus: -1, errorMessage: '', loadingMessage: '' };
                                        // if(isVideo(files[key].type)) {
                                        //   this.countUpload = 0;
                                        //   this.uploadFileVideo(this.answerFile, this.uploadCount);
                                        // } else {
                                        this.uploadFile(this.answerFile, this.uploadCount);
                                        // }
                                        this.uploadCount += 1;
                                    }
                                }
                            }
                            else {
                                this.commonService.snackError('Vui lòng chọn file không quá 200 MB', '');
                            }
                        }
                        else {
                            this.commonService.snackError('Định dạng file không được hỗ trợ. Vui lòng chọn tệp tin Ảnh, Video (chưa hỗ trợ .wmv), Audio hoặc File PDF', '');
                        }
                    }
                }
                event.target.value = '';
                this.isSubmit = false;
            }
            catch (err) {
                alert('Đã xảy ra lỗi:' + err);
            }
        });
        this.answerFile = null;
    }
    isShowGreenCheckbox(url) {
        if (this.rawAnswerFileList && this.rawAnswerFileList.length > 0) {
            for (let i = 0; i < this.rawAnswerFileList.length; i++) {
                if (this.rawAnswerFileList[i].url === url) {
                    return true;
                }
            }
        }
        return false;
    }
    onFileClose() {
        this.isShowPreviewFile = false;
        this.previewFile = {};
    }
    onShowFile(file, index) {
        this.isShowPreviewFile = true;
        this.previewFile = Object.assign(Object.assign({}, file), { index });
    }
    onShowFileTwo(event) {
        this.isShowPreviewFile = true;
        this.previewFile = event;
    }
    showAllSubmit() {
        this.commonService.myNavigation('/student/dashboard/1');
    }
    viewDetail() {
        var _a;
        this.commonService.myNavigation('/homework/view-homework/' + ((_a = this.answerObj) === null || _a === void 0 ? void 0 : _a.id) + '/' + this.homeworkHashId);
    }
    viewDetailHistory(historyId) {
        var _a, _b;
        this.commonService.myNavigation('/homework/view-homework/' + ((_b = (_a = this.obj) === null || _a === void 0 ? void 0 : _a.homeworkObj) === null || _b === void 0 ? void 0 : _b.id) + '/' + this.homeworkHashId + '/' + historyId);
    }
    openChooseStudent(type) {
        if (type == 1) {
            // select student
            this.chooseChildData.isPendingApproved = false;
            this.chooseChildData.isShow = true;
        }
        else if (type == 2) {
            // pending approved
            this.chooseChildData.isPendingApproved = true;
            this.chooseChildData.isShow = true;
        }
        else {
            this.chooseChildData.isPendingApproved = true;
            this.chooseChildData.isShow = true;
        }
    }
    closeChooseStudent(dataEmit) {
        var _a, _b, _c, _d, _e;
        if (((_a = dataEmit.studentObj) === null || _a === void 0 ? void 0 : _a.isVerified) == 0 || ((_b = dataEmit.classroomObj) === null || _b === void 0 ? void 0 : _b.freeChooseName) == 1) {
            this.frontStudentService.apiFrontStudentAddStudentToClassForHomeworkGet(this.homeworkHashId, (_d = (_c = this.obj) === null || _c === void 0 ? void 0 : _c.classroomObj) === null || _d === void 0 ? void 0 : _d.id, dataEmit.studentObj ? dataEmit.studentObj.id : 0).subscribe((response) => {
                var _a;
                if (response.success === 1) {
                    this.getData();
                    this.selectChild = false;
                    this.isPendingApproved = false;
                }
                else {
                    this.showErrorSnack((_a = response.message) !== null && _a !== void 0 ? _a : '');
                }
            });
        }
        else {
            if (this.baseApiService.isLogin() && !this.baseApiService.isAnonymousRole()) {
                let userObj = this.userService.getUserObj();
                if (userObj.id == ((_e = dataEmit.studentObj) === null || _e === void 0 ? void 0 : _e.parentId)) {
                    this.urlStudentId = 0;
                    this.getData();
                    this.selectChild = false;
                    this.isPendingApproved = false;
                    this.normalFlow = true;
                }
                else {
                    this.sendRequestData = { studentObj: dataEmit.studentObj, classId: dataEmit.classId, isShow: true };
                }
            }
            else {
                // chưa đăng nhập hoặc anonymous => yêu cầu đăng nhập
                this.requireLogin = { studentObj: dataEmit.studentObj, isShow: true };
            }
        }
    }
    closeRequireLogin() {
        this.requireLogin = { studentObj: undefined, isShow: false };
    }
    confirmSendRequest(event) {
        if (event) {
            this.sendRequestData = { studentObj: undefined, classId: -1, isShow: false };
            this.commonService.snackSuccess('Yêu cầu của bạn đã được gửi tới cho Giáo viên!', '');
        }
        else {
            this.sendRequestData = { studentObj: undefined, classId: -1, isShow: false };
            this.commonService.snackError('Chưa thể gửi yêu cầu! Vui lòng thử lại', '');
        }
    }
    closeRequestDialog() {
        this.sendRequestData = { studentObj: undefined, classId: -1, isShow: false };
    }
    approvedToClass(dataEmit) {
        var _a, _b;
        let data = {
            fullName: dataEmit.nameEmit,
            homeworkHashId: this.homeworkHashId,
            classroomId: (_b = (_a = this.obj) === null || _a === void 0 ? void 0 : _a.classroomObj) === null || _b === void 0 ? void 0 : _b.id
        };
        this.subscriptions.add(this.frontStudentService.apiFrontStudentSaveStudentForHomeworkPost(data).subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.getData();
            }
            else {
                this.showErrorSnack((_a = response.message) !== null && _a !== void 0 ? _a : '');
            }
        }));
    }
    cloneArray(listObjs) {
        let newList = [];
        listObjs === null || listObjs === void 0 ? void 0 : listObjs.forEach((obj) => {
            newList.push(obj);
        });
        return newList;
    }
    fillData() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.files = this.commonService.parseJson((_c = (_b = (_a = this.obj) === null || _a === void 0 ? void 0 : _a.homeworkObj) === null || _b === void 0 ? void 0 : _b.files) !== null && _c !== void 0 ? _c : '');
        if (this.files == null) {
            this.files = new Array();
        }
        if ((_d = this.obj) === null || _d === void 0 ? void 0 : _d.answerObj) {
            if (this.obj.answerObj.files) {
                this.answerFileList = this.commonService.parseJson(this.obj.answerObj.files);
                // this.addFileWithProsess();
                this.rawAnswerFileList = this.cloneArray(this.commonService.parseJson(this.obj.answerObj.files));
            }
        }
        if ((_e = this.obj) === null || _e === void 0 ? void 0 : _e.answerHistoryObjs) {
            for (let i = 0; i < this.obj.answerHistoryObjs.length; i++) {
                this.resendNote = this.obj.answerHistoryObjs[0].resendNote;
                this.hasResentComment = true;
                if (this.obj.answerHistoryObjs[i].result) {
                    this.obj.answerHistoryObjs[i].note = this.commonService.parseJson((_f = this.obj.answerHistoryObjs[i].result) !== null && _f !== void 0 ? _f : '').comment;
                }
            }
            this.answerHistory = this.obj.answerHistoryObjs;
            for (let j = 0; j < this.answerHistory.length; j++) {
                if (this.answerHistory[j].result) {
                    var resultNote = this.commonService.parseJson((_g = this.answerHistory[j].resultNote) !== null && _g !== void 0 ? _g : '');
                    this.answerHistory[j].hideMark = resultNote && resultNote.IsHideMark ? resultNote.IsHideMark : false;
                }
                if (this.answerHistory[j].files) {
                    this.answerHistory[j].fileParse = this.commonService.parseJson((_h = this.answerHistory[j].files) !== null && _h !== void 0 ? _h : '');
                }
            }
        }
        if ((_j = this.obj) === null || _j === void 0 ? void 0 : _j.answerObj) {
            this.answerObj = this.obj.answerObj;
            this.hasResentComment = false;
        }
        if (this.answerObj && this.answerObj.result) {
            this.answerObj.note = this.commonService.parseJson(this.answerObj.result) != null ? this.commonService.parseJson(this.answerObj.result).comment : '';
            this.answerObj.txtCommentFont = this.commonService.parseJson(this.commonService.parseJson(this.answerObj.result).staticTextConfig).txtCommentFont;
            this.isHideMark = this.commonService.parseJson(this.answerObj.result) != null ? this.commonService.parseJson(this.answerObj.result).hideMark : false;
        }
        if (((_k = this.answerObj) === null || _k === void 0 ? void 0 : _k.resultNote) != null && ((_l = this.answerObj) === null || _l === void 0 ? void 0 : _l.note) == null) {
            this.answerObj.note = this.commonService.parseJson(this.answerObj.resultNote) != null ? this.commonService.parseJson(this.answerObj.resultNote).Note : '';
        }
        if (!((_m = this.obj) === null || _m === void 0 ? void 0 : _m.studentObj)) {
            this.currentChild = this.baseApiService.getUserObj();
        }
        else {
            this.currentChild = this.obj.studentObj;
        }
    }
    closeMessageDialog(event) {
        if (event) {
            this.messageDialogData = { type: '', isShow: false };
        }
    }
    getData() {
        this.initStatusObj();
        this.frontHomeworkService.apiFrontHomeworkGetObjGet(this.homeworkHashId).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
            if (response.success == 1) {
                this.zipdataService.convertAnswersHistories(response.data);
                this.zipdataService.convertSubmittedAnswersObj((_a = response.data) === null || _a === void 0 ? void 0 : _a.answerObj);
                this.obj = response.data;
                this.dataProcess = response.data;
                this.zipdataService.convertHomeworkObj((_c = (_b = this.obj) === null || _b === void 0 ? void 0 : _b.homeworkObj) !== null && _c !== void 0 ? _c : {});
                this.commonService.translateMetaData({
                    title: ((_e = (_d = this.obj) === null || _d === void 0 ? void 0 : _d.homeworkObj) === null || _e === void 0 ? void 0 : _e.name) + '- Lớp:' + ((_g = (_f = this.obj) === null || _f === void 0 ? void 0 : _f.classroomObj) === null || _g === void 0 ? void 0 : _g.name),
                    description: (_j = (_h = this.obj) === null || _h === void 0 ? void 0 : _h.homeworkObj) === null || _j === void 0 ? void 0 : _j.content
                });
                // check User Role if(anonymous) => login
                if (((_l = (_k = this.obj) === null || _k === void 0 ? void 0 : _k.homeworkObj) === null || _l === void 0 ? void 0 : _l.mustVerified) == 1) {
                    if (!this.baseApiService.isLogin() || (this.baseApiService.isLogin() && this.baseApiService.isAnonymousRole())) {
                        this.messageDialogData = { type: 'redirect_register', isShow: true };
                        this.openChooseStudent(1);
                        this.chooseChildData.studentObjs = this.obj.studentObjs;
                        this.chooseChildData.classObj = this.obj.classroomObj;
                        this.selectChild = true;
                        this.normalFlow = false;
                    }
                    else {
                        if (((_m = this.obj) === null || _m === void 0 ? void 0 : _m.studentObj) && this.obj.studentObj.isVerified == 1) {
                            if (this.urlStudentId) {
                                let studentObj = (_p = (_o = this.obj) === null || _o === void 0 ? void 0 : _o.studentObjs) === null || _p === void 0 ? void 0 : _p.filter((e) => e.id == this.urlStudentId);
                                this.selectChild = true;
                                this.normalFlow = false;
                                this.openChooseStudent(3);
                                this.chooseChildData = { studentObj: studentObj === null || studentObj === void 0 ? void 0 : studentObj[0], studentObjs: (_q = this.obj) === null || _q === void 0 ? void 0 : _q.studentObjs, classroomObj: this.obj.classroomObj, isPendingApproved: false, isShow: true };
                            }
                            else {
                                this.fillData();
                                this.selectChild = false;
                                this.normalFlow = true;
                            }
                        }
                        else if (((_r = this.obj) === null || _r === void 0 ? void 0 : _r.studentObj) && this.obj.studentObj.isVerified == 0) {
                            if (this.urlStudentId) {
                                let studentObj = (_t = (_s = this.obj) === null || _s === void 0 ? void 0 : _s.studentObjs) === null || _t === void 0 ? void 0 : _t.filter((e) => e.id == this.urlStudentId);
                                this.selectChild = true;
                                this.normalFlow = false;
                                this.openChooseStudent(3);
                                this.chooseChildData = { studentObj: studentObj === null || studentObj === void 0 ? void 0 : studentObj[0], studentObjs: (_u = this.obj) === null || _u === void 0 ? void 0 : _u.studentObjs, classroomObj: this.obj.classroomObj, isPendingApproved: false, isShow: true };
                            }
                            else {
                                this.selectChild = true;
                                this.normalFlow = false;
                                this.openChooseStudent(2);
                                this.chooseChildData.studentObj = (_v = this.dataProcess) === null || _v === void 0 ? void 0 : _v.studentObj;
                            }
                        }
                        else {
                            if (this.urlStudentId) {
                                let studentObj = (_x = (_w = this.obj) === null || _w === void 0 ? void 0 : _w.studentObjs) === null || _x === void 0 ? void 0 : _x.filter((e) => e.id == this.urlStudentId);
                                this.selectChild = true;
                                this.normalFlow = false;
                                this.openChooseStudent(3);
                                this.chooseChildData = { studentObj: studentObj === null || studentObj === void 0 ? void 0 : studentObj[0], studentObjs: (_y = this.obj) === null || _y === void 0 ? void 0 : _y.studentObjs, classroomObj: (_z = this.obj) === null || _z === void 0 ? void 0 : _z.classroomObj, isPendingApproved: false, isShow: true };
                            }
                            else {
                                this.selectChild = true;
                                this.normalFlow = false;
                                this.openChooseStudent(1);
                                this.chooseChildData.studentObjs = (_0 = this.dataProcess) === null || _0 === void 0 ? void 0 : _0.studentObjs;
                                this.chooseChildData.classObj = (_1 = this.dataProcess) === null || _1 === void 0 ? void 0 : _1.classroomObj;
                            }
                        }
                    }
                }
                else {
                    if (((_2 = this.obj) === null || _2 === void 0 ? void 0 : _2.studentObj) == null) {
                        if (this.urlStudentId) {
                            let studentObj = (_4 = (_3 = this.obj) === null || _3 === void 0 ? void 0 : _3.studentObjs) === null || _4 === void 0 ? void 0 : _4.filter((e) => e.id == this.urlStudentId);
                            this.selectChild = true;
                            this.normalFlow = false;
                            this.openChooseStudent(3);
                            this.chooseChildData = { studentObj: studentObj === null || studentObj === void 0 ? void 0 : studentObj[0], studentObjs: (_5 = this.obj) === null || _5 === void 0 ? void 0 : _5.studentObjs, classroomObj: (_6 = this.obj) === null || _6 === void 0 ? void 0 : _6.classroomObj, isPendingApproved: false, isShow: true };
                        }
                        else {
                            this.selectChild = true;
                            this.normalFlow = false;
                            this.openChooseStudent(1);
                            this.chooseChildData.studentObjs = (_7 = this.dataProcess) === null || _7 === void 0 ? void 0 : _7.studentObjs;
                            this.chooseChildData.classObj = (_8 = this.dataProcess) === null || _8 === void 0 ? void 0 : _8.classroomObj;
                        }
                    }
                    else {
                        if (this.urlStudentId) {
                            let studentObj = (_10 = (_9 = this.obj) === null || _9 === void 0 ? void 0 : _9.studentObjs) === null || _10 === void 0 ? void 0 : _10.filter((e) => e.id == this.urlStudentId);
                            this.selectChild = true;
                            this.normalFlow = false;
                            this.openChooseStudent(3);
                            this.chooseChildData = { studentObj: studentObj === null || studentObj === void 0 ? void 0 : studentObj[0], studentObjs: (_11 = this.obj) === null || _11 === void 0 ? void 0 : _11.studentObjs, classroomObj: this.obj.classroomObj, isPendingApproved: false, isShow: true };
                        }
                        else {
                            this.isPendingApproved = false;
                            this.selectChild = false;
                            this.fillData();
                            this.normalFlow = true;
                        }
                    }
                }
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_12 = response.message) !== null && _12 !== void 0 ? _12 : '', true);
            }
        });
        // google analytics event
        this.commonService.gaEvent('FrontHomework_GetObj');
    }
    convertObjToArray(obj) {
        let arrs = [];
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                arrs.push(obj[key]);
            }
        }
        return arrs;
    }
    addFileWithProsess(data) {
        var _a, _b, _c, _d;
        if (data) {
            (_a = this.answerFileList) === null || _a === void 0 ? void 0 : _a.push(data);
        }
        let arrLength = (_c = (_b = this.answerFileList) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0;
        for (let index = 0; index < arrLength; index++) {
            /** Kiểm tra nếu chưa có lastModified thì bổ sung lastModified */
            if (this.answerFileList && !((_d = this.answerFileList) === null || _d === void 0 ? void 0 : _d[index].lastModified)) {
                this.answerFileList[index].lastModified = new Date().getTime();
            }
            /** Kiểm tra đã có thumb chưa. nếu chưa thì set lại thumb */
            if (this.answerFileList && !this.answerFileList[index].thumb) {
                this.answerFileList[index].thumb = this.homeworkExamService.getThumbWithObj(this.answerFileList[index]);
            }
        }
        if (this.answerFileList && this.answerFileList.length > 0) {
            this.answerFileList.sort((a, b) => {
                return a.lastModified && b.lastModified ? a.lastModified - b.lastModified : 0;
            });
        }
    }
    removeImg(url) {
        var _a;
        let findFile = (_a = this.answerFileList) === null || _a === void 0 ? void 0 : _a.filter(answer => answer.url !== url);
        this.answerFileList = findFile;
    }
    submitHomework() {
        var _a, _b, _c, _d, _e, _f;
        let dataObj = {
            homeworkHashId: (_b = (_a = this.obj) === null || _a === void 0 ? void 0 : _a.homeworkObj) === null || _b === void 0 ? void 0 : _b.hashId,
            studentId: this.currentChild.id,
            files: JSON.stringify(this.answerFileList),
        };
        if ((dataObj.files != '[]')) {
            this.isSubmit = false;
            this.statusObjData = { loading: true, errorStatus: -1, errorMessage: '', loadingMessage: '' };
            let objHeader = JSON.stringify({ type: 'homework', id: (_d = (_c = this.obj) === null || _c === void 0 ? void 0 : _c.homeworkObj) === null || _d === void 0 ? void 0 : _d.id, user: (_f = (_e = this.obj) === null || _e === void 0 ? void 0 : _e.homeworkObj) === null || _f === void 0 ? void 0 : _f.tenantId });
            this.frontAnswerService.apiFrontAnswerSaveObjPost(dataObj, objHeader).subscribe((response) => {
                var _a;
                if (response.success == 1) {
                    this.localStorageObjetct.clearAllCache();
                    this.isSubmit = true;
                    this.statusObjData = { loading: false, errorStatus: -1, errorMessage: '', loadingMessage: '' };
                    this.rawAnswerFileList = this.cloneArray(this.answerFileList);
                    this.showSuccessSnack('Bạn đã nộp bài thành công');
                    this.hasResentComment = false;
                }
                else {
                    this.showErrorSnack((_a = response.message) !== null && _a !== void 0 ? _a : '');
                    this.statusObjData = { loading: false, errorStatus: -1, errorMessage: '', loadingMessage: '' };
                    this.isSubmit = false;
                }
            }, (err) => {
                this.logs.push('Err:' + err);
            });
        }
        else {
            this.showErrorSnack('Bài làm chưa đầy đủ. Vui lòng thử lại');
        }
        this.commonService.gaEvent('FrontHomework_SaveObj');
    }
    switchAttributeArray(arrs, indexSource, indexClone) {
        var _a, _b, _c;
        if (this.answerFileList && ((_a = this.answerFileList) === null || _a === void 0 ? void 0 : _a.length)) {
            if (((_b = this.answerFileList) === null || _b === void 0 ? void 0 : _b.length) <= indexSource) {
                return;
            }
            if (this.answerFileList.length <= indexClone) {
                return;
            }
            if (indexSource < 0) {
                return;
            }
            if (indexClone < 0) {
                return;
            }
            let itemClone = this.castObj(this.answerFileList[indexSource]);
            this.answerFileList[indexSource] = (_c = this.castObj(this.answerFileList[indexClone])) !== null && _c !== void 0 ? _c : {};
            this.answerFileList[indexClone] = itemClone !== null && itemClone !== void 0 ? itemClone : {};
        }
    }
    switchAttributeArrayInput(indexSource, event) {
        var _a, _b;
        let indexClone = Number(event) - 1;
        if (indexClone <= 0) {
            indexClone = 0;
        }
        else if (this.answerFileList && indexClone >= ((_a = this.answerFileList) === null || _a === void 0 ? void 0 : _a.length)) {
            indexClone = this.answerFileList.length;
        }
        (_b = this.answerFileList) === null || _b === void 0 ? void 0 : _b.splice(indexClone, 0, this.answerFileList.splice(indexSource, 1)[0]);
    }
    ngOnInit() {
        this.commonService.translateMetaData({
            title: 'lang_cms_student_view_excercise_title',
            description: 'lang_cms_student_view_excercise_description',
            image: 'lang_cms_test_image',
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([
            this.activeRoute.params,
            this.activeRoute.queryParams
        ]).subscribe(([param, queryParam]) => {
            var _a, _b, _c;
            if (this.commonService.getMyQueryParam('backto') != '') {
                this.backtoLink = (_a = this.commonService.getMyQueryParam('backto')) !== null && _a !== void 0 ? _a : '/student/dashboard/1';
            }
            var urlStudentIds = (_b = this.commonService.getMyQueryParam('studentId')) !== null && _b !== void 0 ? _b : '0';
            this.urlStudentId = parseInt(urlStudentIds, 10);
            this.homeworkHashId = (_c = this.commonService.getMyParam(this.activeRoute, 'hash_id')) !== null && _c !== void 0 ? _c : '';
            this.getData();
        });
        this.form = this.fb.group({
            file_data: new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required),
            file_capture: new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required)
        });
        this.urlLocation = window.location.href;
        super.ngOnInit();
    }
}
SubmitHomeworkComponent.ɵfac = function SubmitHomeworkComponent_Factory(t) { return new (t || SubmitHomeworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_24__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](src_app_helpers_MyPdfService__WEBPACK_IMPORTED_MODULE_5__.MyPdfService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_6__.LocalStorageObjetct), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__.FrontHomeworkService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__.FrontAnswerService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__.FrontStudentService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_8__.ZipdataService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](src_app_core_services_homework_exam_service__WEBPACK_IMPORTED_MODULE_10__.HomeworkExamService)); };
SubmitHomeworkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineComponent"]({ type: SubmitHomeworkComponent, selectors: [["app-submit-homework"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 6, consts: [[3, "headerTitle", "back_link"], [1, "mt-3"], [1, "d-block"], [1, "container-fluid", "mb-2", "maxW1200", 2, "min-height", "calc(100vh - 300px)"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], [4, "ngIf"], [3, "data", "closeDialog", 4, "ngIf"], [1, "row", "justify-content-center", "py-5"], [1, "col-12", "text-center"], [1, "alert", "alert-danger"], ["class", "text-center mt-2 mb-2", 4, "ngIf"], [3, "homeworkFlow", "data", "showAddStudent", "selectChild", "approvedByName"], [3, "data", "confirmSend", "closeDialog", 4, "ngIf"], [1, "text-center", "mt-2", "mb-2"], ["class", "h5", 4, "ngIf"], [1, "h5"], [2, "color", "#00a7d0"], [1, "pt-1", "pl-2", 3, "fileName", "linkUrl"], [3, "data", "confirmSend", "closeDialog"], [3, "data", "closeDialog"], ["Main", ""], [3, "fileOption", "closePreview"], ["class", "alert alert-danger mt-3", 4, "ngIf", "ngIfElse"], ["Normal", ""], [1, "alert", "alert-danger", "mt-3"], ["Result", ""], [1, "card-box"], [1, "row", "top-row"], [1, "col-12", "col-sm-6", "text-white"], [1, "d-none", "d-sm-block"], [1, "d-block", "mb-2"], ["class", "d-block mb-2", 4, "ngIf"], [1, "d-sm-none", "mb-2"], ["class", "d-none d-sm-block text-right", 4, "ngIf"], ["class", "d-sm-none", 4, "ngIf"], [1, "description"], [1, "content-homework", "pt-3", 3, "innerHTML"], ["class", "files", 4, "ngIf"], [1, "summitForm", "pt-5", "pb-5", 3, "ngClass"], ["class", "form-horizontal text-center", 3, "formGroup", 4, "ngIf"], [1, "mt-20", "text-center"], ["class", "col-sm-12", 4, "ngIf"], [3, "dataAnswerHistory", "dataHomeworkObj", "previewFileEmit"], [1, "d-none", "d-sm-block", "text-right"], [1, "font-500"], [1, "d-sm-none"], [1, "files"], [1, "row", "ml-0", "mr-0"], ["class", "col-6 col-sm-4 col-md-3 col-lg-2 pl-0", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-4", "col-md-3", "col-lg-2", "pl-0"], [1, "file"], ["target", "_blank", 1, "dz-clickable", 2, "display", "flex", "margin-top", "3px", "font-size", "14px", 3, "click"], [2, "font-size", "20px"], [1, "truncate", 2, "line-height", "1.6", 3, "title"], [1, "form-horizontal", "text-center", 3, "formGroup"], ["class", "h5 mb-3", 4, "ngIf"], [1, "h5", "mb-3"], [1, "text-danger"], ["type", "hidden", "id", "inp_hidden", "formControlName", "file_data", 1, "form-control", "file-input"], ["class", "row pl-3 pr-3", 4, "ngIf"], ["class", "row ml-0 mr-0", 4, "ngIf"], ["class", "text-center m-4", 4, "ngIf"], ["class", "row ml-0 mr-0 mt-1 mb-1 pb-3 pt-3 attach-container", 4, "ngIf"], [1, "row", "pl-3", "pr-3"], [1, "col-6", "col-sm-6", "col-md-6", "col-lg-6", "text-center", "v-dragndrop", "dropzone", "dz-started"], ["id", "dropzone-3404", 1, "px-4", "py-3", "rounded", 2, "cursor", "pointer", 3, "click"], ["id", "select-upload-file", 1, "align-self-center", "select", "dz-clickable"], ["type", "file", "id", "file_capture", "multiple", "", "accept", "image/*;capture=camera", 1, "form-control", "file-input", 3, "change"], ["fileCapture", ""], ["id", "dropzone-3405", 1, "px-4", "py-3", "rounded", 2, "cursor", "pointer", 3, "click"], ["type", "file", "id", "file_select", "multiple", "", 1, "form-control", "file-input", 3, "change"], ["fileSelect", ""], [1, "col-12"], [1, "alert", "alert-danger", "text-center"], [1, "text-center", "m-4"], [1, "row", "ml-0", "mr-0", "mt-1", "mb-1", "pb-3", "pt-3", "attach-container"], ["class", "col-6 col-sm-6 col-md-4 col-xl-2 col-lg-2", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-6", "col-md-4", "col-xl-2", "col-lg-2"], [1, "h5", "truncate"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 3, "ngStyle"], [1, "h5", "text-success"], ["class", "col-12 col-sm-12 col-md-4 col-xl-3 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-4", "col-xl-3", "col-lg-3"], ["target", "_blank", 1, "dz-clickable", 2, "display", "flex", "margin-top", "3px", "font-size", "14px"], [1, "box_image_answer"], [1, "box_image_answer_content"], [2, "image-orientation", "from-image", 3, "src", "click"], [1, "box_image_answer_control"], [1, "icon-prev"], ["matTooltipPosition", "below", 1, "box_image_answer_pc", 3, "matTooltip", "click"], ["matTooltipPosition", "below", 1, "box_image_answer_mobile", 3, "matTooltip", "click"], [1, "page-number", 3, "ngStyle"], ["type", "number", "min", "1", 1, "input-page", "text-center", 3, "id", "max", "value", "keyup.enter", "change"], ["myInput", ""], [1, "icon-next"], ["class", "notify-badge", 3, "click", 4, "ngIf"], ["class", "notify-badge notify-suss", 4, "ngIf"], [1, "notify-badge", 3, "click"], [1, "notify-badge", "notify-suss"], [2, "color", "rgb(26,188,0)"], ["class", "alert alert-danger text-center mt-2 ml-5 mr-5", 4, "ngIf"], [3, "src", "click"], [1, "alert", "alert-danger", "text-center", "mt-2", "ml-5", "mr-5"], [1, "col-sm-12"], ["mat-raised-button", "", "color", "primary", 2, "margin-top", "20px", 3, "disabled", "click"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], ["mat-raised-button", "", "color", "danger", 2, "margin-top", "20px", 3, "disabled", "click"], [1, "summitForm", "pt-3", "pb-3", "pl-2", "pr-2"], [1, "h5", "ml-3", "text-dark"], [3, "ngIf"], [2, "font-size", "20px", "vertical-align", "sub"], [2, "color", "rgba(0, 167, 208, 1)", "cursor", "pointer", 3, "click"], [1, "row", "justify-content-between", "mt-2", 2, "margin", "16px!important"], [1, "col-md-3", "_col-left", "text-center"], ["class", "mb-0", 4, "ngIf"], [1, "col-md-8", "_col-right"], [1, "h5", "title"], ["fontText", ""], [1, "mb-0"], [3, "mark"], ["class", "content-homework pt-3 text-writing", 3, "innerHTML", 4, "ngIf"], ["class", "content-homework pt-3 text-writing-bold", 3, "innerHTML", 4, "ngIf"], ["class", "content-homework pt-3 text-writing-beautiful", 3, "innerHTML", 4, "ngIf"], ["class", "content-homework pt-3 text-writing-italy", 3, "innerHTML", 4, "ngIf"], [1, "content-homework", "pt-3", "text-writing", 3, "innerHTML"], [1, "content-homework", "pt-3", "text-writing-bold", 3, "innerHTML"], [1, "content-homework", "pt-3", "text-writing-beautiful", 3, "innerHTML"], [1, "content-homework", "pt-3", "text-writing-italy", 3, "innerHTML"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"], ["href", "javscript:void(0)", 3, "click"], [4, "ngFor", "ngForOf"]], template: function SubmitHomeworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "header-frontend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](4, SubmitHomeworkComponent_azt_loading_effect_4_Template, 1, 0, "azt-loading-effect", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](5, SubmitHomeworkComponent_ng_template_5_Template, 4, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](7, SubmitHomeworkComponent_div_7_Template, 8, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](8, SubmitHomeworkComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](9, "homework-frontend-footer");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("headerTitle", !ctx.currentChild && !(ctx.obj == null ? null : ctx.obj.classroomObj == null ? null : ctx.obj.classroomObj.name) ? "" : ctx.obj == null ? null : ctx.obj.classroomObj == null ? null : ctx.obj.classroomObj.name)("back_link", ctx.backtoLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.logs.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.isShowErrorsBox);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgStyle, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControlName, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_11__.AztLoadingEffectComponent, _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_12__.HeaderFrontendComponent, _azota_ui_select_student_controller_component__WEBPACK_IMPORTED_MODULE_13__.SelectStudentFrontComponent, _azota_ui_send_request_reapprove_controller_component__WEBPACK_IMPORTED_MODULE_14__.SendRequestReApproveComponent, _azota_ui_preview_media_controller_component__WEBPACK_IMPORTED_MODULE_15__.AztPreviewMediaComponent, _azota_ui_azt_check_mark_controller_component__WEBPACK_IMPORTED_MODULE_16__.AztCheckMark, _azota_ui_download_qr_code_controller_component__WEBPACK_IMPORTED_MODULE_17__.AztDownloadQrCodeComponent, _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_18__.HomeworkFrontendFooterComponent, _utils_message_dialog_controller_component__WEBPACK_IMPORTED_MODULE_19__.MessageDialogComponent, _utils_answer_history_controller_component__WEBPACK_IMPORTED_MODULE_20__.AnswerHistoryComponent, _utils_require_login_controller_component__WEBPACK_IMPORTED_MODULE_21__.RequireLoginComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.DatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_22__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_22__.MyCdnPipe], styles: [".card-box[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgb(0, 167, 208);\n  border-radius: 3px;\n}\n\n.top-row[_ngcontent-%COMP%] {\n  background-color: rgb(0, 167, 208);\n  margin: 0;\n  padding: 10px;\n}\n\n.text-white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.text-white[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.font-500[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.description[_ngcontent-%COMP%], .files[_ngcontent-%COMP%] {\n  border-width: 0px;\n  background: inherit;\n  background-color: rgb(242, 242, 242);\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgb(229, 229, 229);\n  border-left: 0px;\n  border-right: 0px;\n  border-radius: 0px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  box-shadow: none;\n  padding: 0 10px;\n}\n\n.description[_ngcontent-%COMP%] {\n  padding: 10px 10px 0;\n}\n\n.files[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  vertical-align: super;\n}\n\n.students[_ngcontent-%COMP%] {\n  border-width: 0px;\n  background: inherit;\n  background-color: rgb(255, 255, 255);\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.062745098);\n}\n\n.list-student[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: inherit;\n  background-color: rgb(250, 250, 250);\n  box-sizing: border-box;\n  border-width: 1px;\n  padding: 10px 15px;\n  border-style: solid;\n  border-color: rgb(224, 224, 224);\n  border-radius: 3px;\n  box-shadow: none;\n  font-weight: 400;\n  font-style: bold;\n  display: block;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: rgba(27, 171, 161, 0.05);\n  border: 1px dashed #1baba1;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n  line-height: 1.5;\n}\n\n.pl-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-left: 1.5rem !important;\n}\n\n.pr-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-right: 1.5rem !important;\n}\n\n.pb-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-bottom: 1rem !important;\n}\n\n.pt-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-top: 1rem !important;\n}\n\n.btn-warm-orange[_ngcontent-%COMP%] {\n  background: #ff7f45;\n  border: 1px solid #ff7f45;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0s;\n}\n\n.text-dark-green[_ngcontent-%COMP%] {\n  color: #1caba0 !important;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.small[_ngcontent-%COMP%], small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.mt-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dz-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #007bff;\n}\n\n.item[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.notify-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -16px;\n  top: 3px;\n  text-align: center;\n  color: rgb(175, 175, 175);\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.notify-suss[_ngcontent-%COMP%] {\n  right: auto;\n  left: 16px;\n}\n\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.flex-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.flex-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgb(0, 167, 208);\n  cursor: pointer;\n  margin-left: 5px;\n}\n\n.flex-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.4;\n  font-weight: 500;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 90px;\n  width: 90px;\n  margin: 0 0 10px 10px;\n  border-radius: 7px;\n}\n\n.img-responsive[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: auto;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.attach-container[_ngcontent-%COMP%] {\n  margin: 16px !important;\n  background: #f1f1f1;\n  padding: 10px 0 0 0;\n  border-radius: 5px;\n  border: 1px solid #e8e8e8;\n}\n\n.maxW1200[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n@font-face {\n  font-family: font_chu_dep;\n  src: url(\"https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/fonts/HP0015HB.ttf\");\n}\n\n@font-face {\n  font-family: font_chu_in;\n  src: url(\"https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/fonts/Roboto-Thin.ttf\");\n}\n\n@font-face {\n  font-family: font_chu_in_nghieng;\n  src: url(\"https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/fonts/MyriadPro-It.otf\");\n}\n\n@font-face {\n  font-family: font_chu_in_dam;\n  src: url(\"https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/fonts/MyriadPro-BoldIt.otf\");\n}\n\n.text-writing[_ngcontent-%COMP%] {\n  font-family: font_chu_in !important;\n  font-weight: bold;\n}\n\n.text-writing-beautiful[_ngcontent-%COMP%] {\n  font-family: font_chu_dep !important;\n}\n\n.text-writing-italy[_ngcontent-%COMP%] {\n  font-family: font_chu_in_nghieng !important;\n}\n\n.text-writing-bold[_ngcontent-%COMP%] {\n  font-family: font_chu_in_dam !important;\n}\n\n._col-left[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  line-height: 1;\n  padding: 35px;\n}\n\n._col-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  color: #ff0024;\n}\n\n._col-right[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  position: relative;\n  padding: 10px;\n}\n\n._col-right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  left: 20px;\n  background-color: #f1f1f1;\n}\n\n._col-right[_ngcontent-%COMP%]   .content-homework[_ngcontent-%COMP%] {\n  color: red;\n  line-height: 1.4;\n  font-size: 20px;\n}\n\n._col-left_result[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  line-height: 1;\n  padding: 10px;\n}\n\n._col-left_result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #ff0024;\n}\n\n._col-right_result[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  position: relative;\n  padding: 10px;\n}\n\n._col-right_result[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  left: 20px;\n  background-color: #f1f1f1;\n}\n\n._col-right_result[_ngcontent-%COMP%]   .content-homework[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 16px;\n  line-height: 1.4;\n}\n\n.files[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.testbank[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  text-align: left;\n}\n\n.testbank__title[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 500;\n}\n\n.testbank_fileitem[_ngcontent-%COMP%] {\n  display: flex;\n  color: #00a7d0;\n  margin-top: 15px;\n}\n\n.testbank_fileitem_icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.testbank_fileitem_name[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.testbank_fileitem_info_resualt[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 500;\n  font-size: small;\n  margin-right: 15px;\n}\n\n.testbank_fileitem_info_time[_ngcontent-%COMP%] {\n  color: #9D9D9D;\n}\n\n.testbank_fileitem_info_btn_submit[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.student_obj[_ngcontent-%COMP%] {\n  padding: 5px;\n  min-height: 69px;\n}\n\n.margin_question_bar[_ngcontent-%COMP%] {\n  margin-top: calc(2rem + 40px) !important;\n}\n\n.select_class[_ngcontent-%COMP%] {\n  background: inherit;\n  background-color: rgb(60, 141, 188);\n  box-sizing: border-box;\n  border-radius: 5px;\n  box-shadow: none;\n  color: #FFFFFF;\n}\n\n.isSelected[_ngcontent-%COMP%] {\n  border-color: rgb(0, 79, 123);\n  border-width: 2px;\n  border-style: solid;\n}\n\n.isDisabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.input-page[_ngcontent-%COMP%] {\n  border: 1px solid #03a7d0;\n  border-radius: 2px;\n  width: 50px;\n}\n\n\n\n.input-page[_ngcontent-%COMP%]::-webkit-outer-spin-button, .input-page[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n@media (max-width: 768px) {\n  .dropzone[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n\n  ._col-left[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  ._col-left_result[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .testbank_fileitem[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 576px) {\n  .flex-title[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .flex-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    margin-left: 0;\n  }\n}\n\n.box_image_answer[_ngcontent-%COMP%] {\n  transform: all 0.2s;\n}\n\n.box_image_answer_content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #03a7d0;\n}\n\n.box_image_answer_control[_ngcontent-%COMP%] {\n  background: white;\n  width: 100%;\n  border: 1px solid #03a7d0;\n  border-top: none;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  cursor: default;\n}\n\n.box_image_answer_control[_ngcontent-%COMP%]   .icon-prev[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.box_image_answer_control[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%] {\n  border-left: 1px solid #03a7d0;\n  border-right: 1px solid #03a7d0;\n  background: #ecf0f4;\n}\n\n.box_image_answer_control[_ngcontent-%COMP%]   .icon-next[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.box_image_answer_control[_ngcontent-%COMP%]   .box_image_answer_pc[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.box_image_answer_control[_ngcontent-%COMP%]   .box_image_answer_mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 768px) {\n  .box_image_answer_control[_ngcontent-%COMP%]   .box_image_answer_pc[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .box_image_answer_control[_ngcontent-%COMP%]   .box_image_answer_mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n}"] });


/***/ }),

/***/ 47688:
/*!************************************************************************************************!*\
  !*** ./src/app/homework_frontend/submit-homework/utils/message-dialog/controller.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageDialogComponent": () => (/* binding */ MessageDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/redirect.service */ 42873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/pipes/common.pipe */ 1033);









function MessageDialogComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessageDialogComponent_div_0_div_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.redirectToRegister()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessageDialogComponent_div_0_div_1_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.redirectToLogin()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "lang_homework_homework_frontend_submit_homework_register_account_submit"), "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 6, "lang_buttom_register"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 8, "lang_homework_homework_frontend_submit_homework_have_account"), "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 10, "lang_buttom_login"));
} }
function MessageDialogComponent_div_0_div_2_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MessageDialogComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 10)(9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessageDialogComponent_div_0_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.confirmQuit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, MessageDialogComponent_div_0_div_2_span_10_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "lang_homework_homework_frontend_submit_homework_register_account_submit"), "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 6, "lang_buttom_register"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLoading === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 8, "lang_buttom_confirm"), " ");
} }
function MessageDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MessageDialogComponent_div_0_div_1_Template, 14, 12, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MessageDialogComponent_div_0_div_2_Template, 13, 10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.viewType == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.viewType == 1);
} }
class MessageDialogComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, router, redirectService) {
        super(commonService);
        this.commonService = commonService;
        this.router = router;
        this.redirectService = redirectService;
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.isLoading = false;
        this.viewType = 0;
    }
    confirmQuit() {
        this.closeDialog.emit(true);
    }
    checkType(type) {
        if (type == 'redirect_register') {
            this.viewType = 0;
        }
        else if (type == 'submit_name') {
            this.viewType = 1;
        }
    }
    redirectToRegister() {
        this.redirectService.redirectRegisterForStudent();
    }
    redirectToLogin() {
        let returnLink = `${this.router.url}`;
        this.redirectService.redirectToLoginBackLinkWithFromRegister(returnLink);
    }
    ngOnInit() {
        if (this.data) {
            this.checkType(this.data.type);
        }
        super.ngOnInit();
    }
}
MessageDialogComponent.ɵfac = function MessageDialogComponent_Factory(t) { return new (t || MessageDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_2__.RedirectService)); };
MessageDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MessageDialogComponent, selectors: [["app-message-dialog"]], inputs: { data: "data" }, outputs: { closeDialog: "closeDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 4, "ngIf"], [1, "school-info_bg"], ["class", "school-info p-4", 4, "ngIf"], [1, "school-info", "p-4"], [1, "text-center"], [1, "mb-2", "h5"], [1, "mb-0", "h4", "text-info", "clickable", 3, "click"], [1, "mb-2", "h5", "mt-4"], [1, "mb-1", "h5"], [1, "mb-0", "h4", "text-info"], [1, "d-flex", "float-right", "mt-3"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "15px", 3, "click"], [4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function MessageDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MessageDialogComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.isShow);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__.MytranslatePipe], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  z-index: 1000;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(60, 60, 60, 0.5);\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  max-width: 600px;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n.block-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bar-custom[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin: 0 10px;\n  background: #000;\n  width: 2px;\n  display: block;\n  height: 35px;\n  margin-bottom: -18px;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 800px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 700px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 400px;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 300px;\n  }\n}\n\n@media only screen and (max-width: 290px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 250px;\n  }\n}"] });


/***/ }),

/***/ 19485:
/*!********************************************************************************!*\
  !*** ./src/app/homework_frontend/utils/answer-history/controller.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnswerHistoryComponent": () => (/* binding */ AnswerHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_cdn_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/cdn.service */ 15043);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _azota_ui_azt_check_mark_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../azota-ui/azt-check-mark/controller.component */ 37104);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);









function AnswerHistoryComponent_div_0_div_6_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AnswerHistoryComponent_div_0_div_6_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const answer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.viewDetailHistory(answer_r2 == null ? null : answer_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Xem chi ti\u1EBFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AnswerHistoryComponent_div_0_div_6_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AnswerHistoryComponent_div_0_div_6_div_12_div_1_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const answerFile_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.onShowFile(answerFile_r10, -1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const answerFile_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", answerFile_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](answerFile_r10.name);
} }
function AnswerHistoryComponent_div_0_div_6_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AnswerHistoryComponent_div_0_div_6_div_12_div_1_Template, 6, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", answer_r2.fileParse);
} }
function AnswerHistoryComponent_div_0_div_6_div_13_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AnswerHistoryComponent_div_0_div_6_div_13_div_1_div_1_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const answerFile_r17 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.onShowFile(answerFile_r17, -1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const answerFile_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", answerFile_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](answerFile_r17.name);
} }
function AnswerHistoryComponent_div_0_div_6_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AnswerHistoryComponent_div_0_div_6_div_13_div_1_div_1_Template, 6, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", answer_r2.fileParse);
} }
function AnswerHistoryComponent_div_0_div_6_div_13_div_2_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "azt-check-mark", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mark", answer_r2.point);
} }
function AnswerHistoryComponent_div_0_div_6_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AnswerHistoryComponent_div_0_div_6_div_13_div_2_p_2_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 26)(4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const answer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !answer_r2.hideMark);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, "lang_homework_homework_frontend_utils_comment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", answer_r2.note, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function AnswerHistoryComponent_div_0_div_6_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AnswerHistoryComponent_div_0_div_6_div_13_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AnswerHistoryComponent_div_0_div_6_div_13_div_2_Template, 8, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", answer_r2.fileParse && answer_r2.fileParse.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", answer_r2 != null && answer_r2.confirmedAt != null);
} }
function AnswerHistoryComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AnswerHistoryComponent_div_0_div_6_a_5_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 7)(7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AnswerHistoryComponent_div_0_div_6_div_12_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AnswerHistoryComponent_div_0_div_6_div_13_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("N\u1ED9p l\u00FAc: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 6, answer_r2.createdAt, "dd/MM/yyyy hh:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", answer_r2.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 9, "lang_homework_homework_frontend_utils_request_submit"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](answer_r2.resendNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !answer_r2.result && answer_r2.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", answer_r2.result);
} }
function AnswerHistoryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AnswerHistoryComponent_div_0_div_6_Template, 14, 11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, "lang_homework_homework_frontend_utils_history_submit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.dataAnswerHistory);
} }
class AnswerHistoryComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, cdnService) {
        super(commonService);
        this.commonService = commonService;
        this.cdnService = cdnService;
        this.previewFileEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.isShowPreviewFile = false;
        this.answerFile = null;
    }
    viewDetailHistory(historyId) {
        var _a, _b;
        this.commonService.myNavigation('/homework/view-homework/' + ((_a = this.dataHomeworkObj) === null || _a === void 0 ? void 0 : _a.id) + '/' + ((_b = this.dataHomeworkObj) === null || _b === void 0 ? void 0 : _b.hashId) + '/' + historyId);
    }
    onFileClose() {
        this.isShowPreviewFile = false;
    }
    onShowFile(file, index) {
        this.isShowPreviewFile = true;
        let previewFileData = Object.assign(Object.assign({}, file), { index });
        this.previewFileEmit.emit(previewFileData);
    }
}
AnswerHistoryComponent.ɵfac = function AnswerHistoryComponent_Factory(t) { return new (t || AnswerHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_cdn_service__WEBPACK_IMPORTED_MODULE_2__.CdnService)); };
AnswerHistoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AnswerHistoryComponent, selectors: [["app-answer-history"]], inputs: { dataAnswerHistory: "dataAnswerHistory", dataHomeworkObj: "dataHomeworkObj" }, outputs: { previewFileEmit: "previewFileEmit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "card-box mt-3", 4, "ngIf"], [1, "card-box", "mt-3"], [1, "row", "top-row"], [1, "col-12", "text-center"], [1, "h5", "text-white"], ["class", "ml-0 mr-0 mt-4 attach-container p-2", 4, "ngFor", "ngForOf"], [1, "ml-0", "mr-0", "mt-4", "attach-container", "p-2"], [1, "flex-title", "mt-2", "pl-3", "pr-3"], [1, "mb-0"], [3, "click", 4, "ngIf"], [1, "mb-0", 2, "font-weight", "400"], [1, "text-danger", "text-bold"], ["class", "row ml-0 mr-0 mt-1 mb-1 pb-3 pt-3 attach-container", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], [3, "click"], [1, "row", "ml-0", "mr-0", "mt-1", "mb-1", "pb-3", "pt-3", "attach-container"], ["class", "col-6 col-sm-6 col-md-4 col-xl-2 col-lg-2", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-6", "col-md-4", "col-xl-2", "col-lg-2"], ["target", "_blank", 1, "dz-clickable", 2, "display", "flex", "margin-top", "3px", "font-size", "14px", 3, "click"], [2, "font-size", "20px", "vertical-align", "sub"], [1, "truncate", 2, "line-height", "1.6", 3, "title"], [1, "mt-2"], ["class", "row justify-content-between mt-2", "style", "margin: 16px!important;", 4, "ngIf"], [1, "row", "justify-content-between", "mt-2", 2, "margin", "16px!important"], [1, "col-sm-3", "col-md-3", "col-lg-3", "_col-left_result", "text-center"], ["class", "mb-0", 4, "ngIf"], [1, "col-sm-8", "col-md-8", "col-lg-8", "_col-right_result"], [1, "h5", "title"], [1, "content-homework", "pt-3", 3, "innerHTML"], [3, "mark"]], template: function AnswerHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AnswerHistoryComponent_div_0_Template, 7, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataAnswerHistory && ctx.dataAnswerHistory.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _azota_ui_azt_check_mark_controller_component__WEBPACK_IMPORTED_MODULE_3__.AztCheckMark, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe], styles: [".card-box[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgb(0, 167, 208);\n  border-radius: 3px;\n}\n\n.top-row[_ngcontent-%COMP%] {\n  background-color: rgb(0, 167, 208);\n  margin: 0;\n  padding: 10px;\n}\n\n.attach-container[_ngcontent-%COMP%] {\n  margin: 16px !important;\n  background: #f1f1f1;\n  padding: 10px 0 0 0;\n  border-radius: 5px;\n  border: 1px solid #e8e8e8;\n}\n\n@font-face {\n  font-family: handwriting_font;\n  src: url(\"https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/fonts/HP0015HB.ttf\");\n}\n\n._col-left[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  line-height: 1;\n  padding: 35px;\n}\n\n._col-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  color: #ff0024;\n}\n\n._col-right[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  position: relative;\n  padding: 10px;\n}\n\n._col-right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  left: 20px;\n  background-color: #f1f1f1;\n}\n\n._col-right[_ngcontent-%COMP%]   .content-homework[_ngcontent-%COMP%] {\n  color: red;\n  line-height: 1.4;\n  font-size: 20px;\n  font-family: handwriting_font !important;\n}\n\n._col-left_result[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  line-height: 1;\n  padding: 10px;\n}\n\n._col-left_result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #ff0024;\n}\n\n._col-right_result[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  position: relative;\n  padding: 10px;\n}\n\n._col-right_result[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  left: 20px;\n  background-color: #f1f1f1;\n}\n\n._col-right_result[_ngcontent-%COMP%]   .content-homework[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 16px;\n  line-height: 1.4;\n  font-family: handwriting_font !important;\n}\n\n.flex-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.flex-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgb(0, 167, 208);\n  cursor: pointer;\n  margin-left: 5px;\n}\n\n.files[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.testbank[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  text-align: left;\n}\n\n.testbank__title[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 500;\n}\n\n.testbank_fileitem[_ngcontent-%COMP%] {\n  display: flex;\n  color: #00a7d0;\n  margin-top: 15px;\n}\n\n.testbank_fileitem_icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.testbank_fileitem_name[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.testbank_fileitem_info_resualt[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 500;\n  font-size: small;\n  margin-right: 15px;\n}\n\n.testbank_fileitem_info_time[_ngcontent-%COMP%] {\n  color: #9D9D9D;\n}\n\n.testbank_fileitem_info_btn_submit[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.student_obj[_ngcontent-%COMP%] {\n  padding: 5px;\n  min-height: 69px;\n}"] });


/***/ }),

/***/ 95667:
/*!************************************************************************!*\
  !*** ./src/app/homework_frontend/utils/footer/controller.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeworkFrontendFooterComponent": () => (/* binding */ HomeworkFrontendFooterComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global.service */ 54209);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);









const _c0 = function (a0) { return [a0]; };
function HomeworkFrontendFooterComponent_div_0_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p")(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "/admin/dashboard")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "lang_homework_homework_frontend_utils_back_to_teacher"));
} }
function HomeworkFrontendFooterComponent_div_0_p_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", ctx_r5.userObj.id, ".", ctx_r5.userObj.fullName, ".Zalo:", ctx_r5.userObj.zaloId, " ");
} }
function HomeworkFrontendFooterComponent_div_0_p_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "anonymousFullName");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "anonymousPhone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", ctx_r6.userObj.id, ".", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, ctx_r6.userObj), ".", (ctx_r6.userObj == null ? null : ctx_r6.userObj.phone) ? ctx_r6.userObj == null ? null : ctx_r6.userObj.phone : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, ""), " ");
} }
function HomeworkFrontendFooterComponent_div_0_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HomeworkFrontendFooterComponent_div_0_p_2_span_3_Template, 2, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HomeworkFrontendFooterComponent_div_0_p_2_span_4_Template, 4, 7, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, "lang_homework_homework_frontend_utils_account"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.userObj.zaloId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.userObj.zaloId);
} }
const _c1 = function (a0) { return { return_url: a0 }; };
const _c2 = function (a0) { return { return_url: a0, from: "register", user_click: "true" }; };
function HomeworkFrontendFooterComponent_div_0_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 8, "lang_homework_homework_frontend_utils_tutorial"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 10, "/auth/register/1")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c1, ctx_r3.returnUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 12, "lang_buttom_register"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 14, "lang_homework_homework_frontend_utils_or_account"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](24, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 16, "/auth/login")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](26, _c2, ctx_r3.returnUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 18, "lang_buttom_login"));
} }
function HomeworkFrontendFooterComponent_div_0_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, "lang_homework_homework_frontend_utils_tutorial_register"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, "/auth/switch-teacher-student")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 7, "lang_homework_homework_frontend_utils_register_teacher"));
} }
function HomeworkFrontendFooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HomeworkFrontendFooterComponent_div_0_p_1_Template, 5, 8, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HomeworkFrontendFooterComponent_div_0_p_2_Template, 5, 5, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HomeworkFrontendFooterComponent_div_0_p_3_Template, 13, 28, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HomeworkFrontendFooterComponent_div_0_p_4_Template, 7, 11, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p")(6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.checkTeacher());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.checkAnonymous());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.checkAnonymous());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.checkTeacher());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", "https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 6, "azota_assets/images/2928664.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
class HomeworkFrontendFooterComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(baseApiService, commonService, globalService) {
        super(commonService);
        this.baseApiService = baseApiService;
        this.commonService = commonService;
        this.globalService = globalService;
        this.userObj = {};
        this.returnUrl = '';
    }
    checkAnonymous() {
        return this.baseApiService.isAnonymousRole();
    }
    checkTeacher() {
        return this.baseApiService.isTeacherRole();
    }
    ngOnInit() {
        this.returnUrl = this.commonService.getMyQueryParam('return_url') || this.commonService.getCurrentUrl();
        this.userObj = this.baseApiService.getUserObj();
        this.globalService.loginMessage.subscribe(message => {
            this.userObj = this.baseApiService.getUserObj();
        });
        super.ngOnInit();
    }
}
HomeworkFrontendFooterComponent.ɵfac = function HomeworkFrontendFooterComponent_Factory(t) { return new (t || HomeworkFrontendFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_1__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService)); };
HomeworkFrontendFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomeworkFrontendFooterComponent, selectors: [["homework-frontend-footer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "text-center mt-3", 4, "ngIf"], [1, "text-center", "mt-3"], [4, "ngIf"], ["href", "https://play.google.com/store/apps/details?id=azt.azt", "target", "_blank", "rel", "noopener"], ["alt", "Get it on Google Play", "width", "150px", 1, "play-store-badge", 3, "src"], ["href", "https://apps.apple.com/ua/app/azota/id1556025594", "target", "_blank", "rel", "noopener"], ["alt", "Download on the App Store", "width", "130px", 1, "app-store-badge", 3, "src"], [3, "routerLink"], [3, "routerLink", "queryParams"]], template: function HomeworkFrontendFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HomeworkFrontendFooterComponent_div_0_Template, 11, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userObj.id != 0);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.AnonymousPhone, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.AnonymousFullName, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.ConvertCdnPipe, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_8__.LocalizeRouterPipe], encapsulation: 2 });


/***/ }),

/***/ 64322:
/*!*******************************************************************************!*\
  !*** ./src/app/homework_frontend/utils/require-login/controller.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequireLoginComponent": () => (/* binding */ RequireLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/redirect.service */ 42873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);









const _c0 = ["ContentDialog"];
function RequireLoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2, 3)(3, "div", 4)(4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " H\u1ECDc sinh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, ". \u0110\u0103ng nh\u1EADp \u0111\u1EC3 ti\u1EBFp t\u1EE5c! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequireLoginComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.btnCloseDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequireLoginComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.goToLogin()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " \u0110\u0103ng nh\u1EADp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.data == null ? null : ctx_r0.data.studentObj == null ? null : ctx_r0.data.studentObj.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u0111\u00E3 \u0111\u01B0\u1EE3c ch\u1ECDn b\u1EDFi T\u00E0i kho\u1EA3n ", (ctx_r0.data == null ? null : ctx_r0.data.studentObj == null ? null : ctx_r0.data.studentObj.last4DigitPhone) != "" ? " v\u1EDBi S\u0110T c\u00F3 \u0111u\u00F4i - xxx xxx" : "v\u1EDBi t\u00EAn Zalo - ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx_r0.data == null ? null : ctx_r0.data.studentObj == null ? null : ctx_r0.data.studentObj.last4DigitPhone) != "" ? ctx_r0.data == null ? null : ctx_r0.data.studentObj == null ? null : ctx_r0.data.studentObj.last4DigitPhone : ctx_r0.data == null ? null : ctx_r0.data.studentObj == null ? null : ctx_r0.data.studentObj.zaloName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 4, "lang_buttom_close"), " ");
} }
class RequireLoginComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    //region Angular lifecycle
    constructor(commonService, router, redirectService) {
        super(commonService);
        this.commonService = commonService;
        this.router = router;
        this.redirectService = redirectService;
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    onGlobalClick(event) {
        var _a;
        if (!((_a = this.contentDialog) === null || _a === void 0 ? void 0 : _a.nativeElement.contains(event.target))) {
            this.closeDialog.emit(true);
        }
    }
    btnCloseDialog() {
        this.closeDialog.emit(true);
    }
    goToRegister() {
        var _a, _b;
        let returnLink = `${this.router.url}%3FstudentId%3D${(_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.studentObj) === null || _b === void 0 ? void 0 : _b.id}`;
        this.redirectService.redirectRegisterForStudentWithReturnUrl(returnLink);
    }
    goToLogin() {
        var _a, _b, _c, _d;
        let returnLink = `${this.router.url}`;
        if (returnLink.indexOf('?') !== -1) {
            let backLink = returnLink.slice(0, returnLink.indexOf('?'));
            backLink = `${backLink}%3FstudentId%3D${(_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.studentObj) === null || _b === void 0 ? void 0 : _b.id}`;
            this.redirectService.redirectToLoginBackLinkWithFromRegister(backLink);
        }
        else {
            returnLink = `${returnLink}%3FstudentId%3D${(_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.studentObj) === null || _d === void 0 ? void 0 : _d.id}`;
            this.redirectService.redirectToLoginBackLinkWithFromRegister(returnLink);
        }
    }
}
RequireLoginComponent.ɵfac = function RequireLoginComponent_Factory(t) { return new (t || RequireLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_2__.RedirectService)); };
RequireLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RequireLoginComponent, selectors: [["app-require-login"]], viewQuery: function RequireLoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.contentDialog = _t.first);
    } }, hostBindings: function RequireLoginComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function RequireLoginComponent_mousedown_HostBindingHandler($event) { return ctx.onGlobalClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
    } }, inputs: { data: "data" }, outputs: { closeDialog: "closeDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 4, "ngIf"], [1, "school-info_bg"], [1, "school-info", "p-4"], ["ContentDialog", ""], [1, "text-custom"], [1, "mb-2", "h5", "para_respon", "font-weight-normal"], [1, "d-flex", "float-right", "mt-1"], [1, "azt-block-button", "mr-3"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function RequireLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, RequireLoginComponent_div_0_Template, 19, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.isShow);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__.MytranslatePipe], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  z-index: 1000;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(60, 60, 60, 0.5);\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  max-width: 800px;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n.block-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bar-custom[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin: 0 10px;\n  background: #000;\n  width: 2px;\n  display: block;\n  height: 35px;\n  margin-bottom: -18px;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 800px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 700px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 400px;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 300px;\n  }\n}\n\n@media only screen and (max-width: 290px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 250px;\n  }\n}"] });


/***/ }),

/***/ 16805:
/*!*************************************************************************!*\
  !*** ./src/app/homework_frontend/view-homework/controller.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewHomeworkComponent": () => (/* binding */ ViewHomeworkComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_cdn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/cdn.service */ 15043);
/* harmony import */ var src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/zipdata.service */ 2366);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/clipboard */ 69287);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 92181);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);















function ViewHomeworkComponent_h4_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r0.result == null ? null : ctx_r0.result.studentObj == null ? null : ctx_r0.result.studentObj.fullName, ", ", ctx_r0.result == null ? null : ctx_r0.result.classroomObj == null ? null : ctx_r0.result.classroomObj.name, " ");
} }
function ViewHomeworkComponent_azt_loading_effect_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "azt-loading-effect");
} }
function ViewHomeworkComponent_ng_template_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, ctx_r5.errorMessage));
} }
function ViewHomeworkComponent_ng_template_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "iframe", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r6.iframeSrc), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeResourceUrl"]);
} }
function ViewHomeworkComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ViewHomeworkComponent_ng_template_17_div_2_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ViewHomeworkComponent_ng_template_17_div_3_Template, 3, 3, "div", 15);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.errorMessage != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.errorMessage == "");
} }
class ViewHomeworkComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(activeRoute, frontAnswerService, frontAnswerHistoryService, commonService, cdnService, zipdataService, envService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.frontAnswerService = frontAnswerService;
        this.frontAnswerHistoryService = frontAnswerHistoryService;
        this.commonService = commonService;
        this.cdnService = cdnService;
        this.zipdataService = zipdataService;
        this.envService = envService;
        this.homeworkHashId = '';
        this.isMarked = false;
        this.jsonData = {};
        this.iframeSrc = '';
        this.backLink = '';
        this.files = [];
        this.handleIframe = (event) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            if (event.data == 'MNoteLoadComplete') {
                const mNote = document.getElementById('mNote');
                const noteIframe = mNote ? mNote.contentWindow : null;
                if (noteIframe !== null) {
                    let curAnswerObj = ((_a = this.result) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('answerObj')) ? (_b = this.castObj(this.result.answerObj)) !== null && _b !== void 0 ? _b : {} : {};
                    // convert Cdn
                    if ((_c = this.result) === null || _c === void 0 ? void 0 : _c.hasOwnProperty('answerObj')) {
                        let resultAnswer = JSON.parse((_d = curAnswerObj === null || curAnswerObj === void 0 ? void 0 : curAnswerObj.result) !== null && _d !== void 0 ? _d : '');
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
                        let fileAnswer = JSON.parse((_e = curAnswerObj.files) !== null && _e !== void 0 ? _e : '');
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
                    //
                    let curStudentObj = ((_f = this.result) === null || _f === void 0 ? void 0 : _f.hasOwnProperty('studentObj')) ? this.result.studentObj : {};
                    let curClassroomObj = ((_g = this.result) === null || _g === void 0 ? void 0 : _g.hasOwnProperty('classroomObj')) ? this.result.classroomObj : {};
                    let curHomeworkObj = ((_h = this.result) === null || _h === void 0 ? void 0 : _h.hasOwnProperty('homeworkObj')) ? this.result.homeworkObj : {};
                    let jsonResultObj = this.commonService.parseJson((_j = curAnswerObj.result) !== null && _j !== void 0 ? _j : '');
                    let curHideMark = jsonResultObj && jsonResultObj.hasOwnProperty('hideMark') ? jsonResultObj.hideMark : false;
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
                        this.jsonData.mode = 'view';
                        this.jsonData.answer_obj = curAnswerObj;
                        this.jsonData.student_obj = curStudentObj;
                        this.jsonData.classroom_obj = curClassroomObj;
                        this.jsonData.homework_obj = curHomeworkObj;
                        this.jsonData.hideMark = curHideMark;
                        noteIframe.postMessage(this.jsonData, '*');
                    }
                    else {
                        let imgArr = [];
                        this.files.forEach(file => {
                            imgArr.push({ backgroundImage: file.url });
                        });
                        noteIframe.postMessage({
                            cmd: 'initMNote',
                            pages: imgArr,
                            answer_obj: curAnswerObj,
                            student_obj: curStudentObj,
                            classroom_obj: curClassroomObj,
                            homework_obj: curHomeworkObj,
                            mode: 'view',
                            hideMark: curHideMark
                        }, '*');
                    }
                }
            }
        };
    }
    goBack() {
        if (this.backLink != '' && this.backLink != null) {
            this.commonService.myNavigation(this.backLink);
        }
        else {
            this.commonService.myNavigation('/bai-tap/' + this.homeworkHashId);
        }
    }
    fillData(response) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (response) {
            this.zipdataService.convertSubmittedAnswersHistoryObj((_a = response.data) === null || _a === void 0 ? void 0 : _a.answerObj);
            this.result = response.data;
            this.files = ((_b = response.data) === null || _b === void 0 ? void 0 : _b.answerObj) ? this.commonService.parseJson((_c = response.data.answerObj.files) !== null && _c !== void 0 ? _c : '') : [];
            // convert cdn
            if (this.files !== null) {
                for (let i = 0; i < this.files.length; i++) {
                    if (this.files) {
                        this.files[i].url = this.cdnService.getMyCdn((_d = this.files[i].url) !== null && _d !== void 0 ? _d : '');
                        this.files[i].thumb = this.cdnService.getMyCdn((_e = this.files[i].thumb) !== null && _e !== void 0 ? _e : '');
                    }
                }
            }
            if ((_g = (_f = response.data) === null || _f === void 0 ? void 0 : _f.answerObj) === null || _g === void 0 ? void 0 : _g.confirmedAt) {
                // Da dc cham
                this.isMarked = true;
                this.jsonData = this.commonService.parseJson(this.cdnService.getMyCdn((_k = (_j = (_h = response === null || response === void 0 ? void 0 : response.data) === null || _h === void 0 ? void 0 : _h.answerObj) === null || _j === void 0 ? void 0 : _j.result) !== null && _k !== void 0 ? _k : ''));
                if (this.jsonData === null) {
                    this.isMarked = false;
                }
            }
        }
    }
    getData(id, historyId) {
        this.initStatusObj();
        this.errorMessage = '';
        if (historyId) {
            this.frontAnswerHistoryService.apiFrontAnswerHistoryGetObjGet(this.homeworkHashId, historyId).subscribe(response => {
                var _a;
                if (response.success == 1) {
                    this.fillData(response);
                    this.successStatusObj();
                }
                else {
                    this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                    this.errorMessage = response === null || response === void 0 ? void 0 : response.message;
                }
            });
        }
        else {
            this.frontAnswerService.apiFrontAnswerGetObjGet(this.homeworkHashId, id).subscribe(response => {
                var _a;
                if (response.success == 1) {
                    this.fillData(response);
                    this.successStatusObj();
                }
                else {
                    this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                    this.errorMessage = response.message;
                }
            });
        }
    }
    copyLinkToClipboard() {
        const id = this.getMyParam(this.activeRoute, 'id');
        let domain = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
        return `${domain}/en/admin/homework/mark-exercise/${id}/${this.homeworkHashId}`;
    }
    showCopySuccess() {
        this.commonService.snackSuccess('Sao chép thành công', '');
    }
    ngAfterViewInit() {
        window.addEventListener('message', this.handleIframe);
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e;
        this.iframeSrc = (_a = this.envService.getEnvValue('classliveUrl')) !== null && _a !== void 0 ? _a : '';
        let idUrl = (_b = this.commonService.getMyParam(this.activeRoute, 'id')) !== null && _b !== void 0 ? _b : '';
        const id = parseInt(idUrl, 10);
        this.homeworkHashId = (_c = this.commonService.getMyParam(this.activeRoute, 'hash_id')) !== null && _c !== void 0 ? _c : '';
        this.backLink = (_d = this.commonService.getMyQueryParam('backto')) !== null && _d !== void 0 ? _d : '';
        if (this.commonService.getMyParam(this.activeRoute, 'history_id')) {
            let historyIdUrl = (_e = this.commonService.getMyParam(this.activeRoute, 'history_id')) !== null && _e !== void 0 ? _e : '';
            const historyId = parseInt(historyIdUrl, 10);
            this.getData(id, historyId);
        }
        else {
            this.getData(id);
        }
        this.commonService.translateMetaData({
            title: 'lang_cms_student_view_excercise_title',
            description: 'lang_cms_student_view_excercise_description',
            image: 'lang_cms_test_image'
        });
        super.ngOnInit();
    }
    ngOnDestroy() {
        window.removeEventListener('message', this.handleIframe);
        super.ngDestroy();
    }
}
ViewHomeworkComponent.ɵfac = function ViewHomeworkComponent_Factory(t) { return new (t || ViewHomeworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_1__.FrontAnswerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_1__.FrontAnswerHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_cdn_service__WEBPACK_IMPORTED_MODULE_3__.CdnService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_4__.ZipdataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService)); };
ViewHomeworkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ViewHomeworkComponent, selectors: [["app-view-exercise"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 8, consts: [["id", "markContainer", 1, "maxW1000", "pt-3"], [1, "row", "titleRow"], [1, "col", "center-row"], ["mat-button", "", "title", "Quay l\u1EA1i", 3, "click"], [1, "col", "center-row", 2, "justify-content", "center"], ["class", "studentInfo", "style", "padding-right: 10px;", 4, "ngIf"], [1, "col", "center-row", 2, "justify-content", "flex-end"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "cdkCopyToClipboard", "click"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [1, "studentInfo", 2, "padding-right", "10px"], [1, "row", "justify-content-center", "py-5"], ["class", "col-12 text-center", 4, "ngIf"], ["class", "card-box listPhotos", "style", "overflow : hidden", 4, "ngIf"], [1, "col-12", "text-center"], [1, "alert", "alert-danger"], [1, "card-box", "listPhotos", 2, "overflow", "hidden"], ["id", "mNote", "frameborder", "0", 2, "width", "100%", "height", "100%", 3, "src"]], template: function ViewHomeworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewHomeworkComponent_Template_mat_icon_click_3_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ViewHomeworkComponent_h4_6_Template, 2, 2, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6)(8, "button", 7)(9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-menu", null, 8)(13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewHomeworkComponent_Template_button_click_13_listener() { return ctx.showCopySuccess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, ViewHomeworkComponent_azt_loading_effect_16_Template, 1, 0, "azt-loading-effect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, ViewHomeworkComponent_ng_template_17_Template, 4, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.result == null ? null : ctx.result.answerObj);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cdkCopyToClipboard", ctx.copyLinkToClipboard());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 6, "lang_homework_homework_frontend_utils_copy_send_teacher"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r3);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__.CdkCopyToClipboard, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_6__.AztLoadingEffectComponent, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.SafePipe], styles: ["#markContainer[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.center-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.titleRow[_ngcontent-%COMP%] {\n  background-color: #00a7d0;\n  height: 40px;\n  margin: 0;\n  color: #fff;\n}\n\n.titleRow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.titleRow[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 500;\n  font-size: 16px;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n}\n\n.titleRow[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.listPhotos[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  top: 40px;\n  bottom: 0;\n}\n\n.file[_ngcontent-%COMP%] {\n  border-width: 0px;\n  background: inherit;\n  background-color: rgb(242, 242, 242);\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgb(229, 229, 229);\n  border-left: 0px;\n  border-right: 0px;\n  border-radius: 0px;\n  box-shadow: none;\n}\n\n.file[_ngcontent-%COMP%]:first-child {\n  margin-top: 52px;\n}\n\n.file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.back[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n}\n\n.back-to[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: flex;\n}\n\n.back-to[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.block[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: #fff !important;\n}\n\n.add-click[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.add-icon[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.file-custom[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n\n.description__share[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.description__share[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #666;\n  margin-right: 15px;\n  padding: 0px 10px;\n  padding-top: 5px;\n}\n\n.row-check[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eee;\n  padding: 10px 0;\n}\n\n.col-check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.exercise[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 0;\n  padding-top: 25px;\n  border-bottom: 1px solid #eee;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n  background-color: rgb(243, 156, 18);\n  color: #FFF;\n  border-radius: 5px;\n  padding: 10px 25px;\n}\n\n.files-custom[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.btn-share[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.score-exercise[_ngcontent-%COMP%] {\n  background-color: rgb(234, 61, 25);\n  border-radius: 50%;\n  padding: 3px 5px;\n  padding-left: 7px;\n  color: #fff;\n  font-weight: 600;\n  margin: 0 10px;\n}\n\n#listNumber[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n#markNumber[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  right: 50%;\n  z-index: 9;\n  margin-right: -60px;\n  color: #fff;\n  text-transform: uppercase;\n  width: 120px;\n}\n\n@media (min-width: 1000px) {\n  .mark-edit[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n\n  .file[_ngcontent-%COMP%]:first-child {\n    margin-top: 0;\n  }\n\n  .listPhotos[_ngcontent-%COMP%] {\n    width: 1000px;\n  }\n}"] });


/***/ })

}]);