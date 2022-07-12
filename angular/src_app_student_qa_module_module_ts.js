"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_student_qa_module_module_ts"],{

/***/ 30005:
/*!********************************************************************!*\
  !*** ./src/app/student_qa/create-question/controller.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateQuestionComponent": () => (/* binding */ CreateQuestionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/validator/whitespace.validator */ 41303);
/* harmony import */ var src_app_rxjs_state_student_qa_state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/rxjs_state/student_qa_state/actions */ 10315);
/* harmony import */ var src_app_rxjs_state_testbank_frontend_state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rxjs_state/testbank_frontend_state/actions */ 84847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 55778);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/upload.api.service */ 29401);
/* harmony import */ var src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_helpers/LocalStorageObjetc */ 3279);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 72727);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);

















function CreateQuestionComponent_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18)(1, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, "lang_student_qa_create_question_title_image_question"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", "img-" + ctx_r1.state.tbFront.selectedQuestion.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r1.state.tbFront.selectedQuestion.url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
} }
function CreateQuestionComponent_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18)(1, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, "lang_student_qa_create_question_related_content"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", ctx_r2.state.tbFront.selectedQuestion.docxContent, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
function CreateQuestionComponent_div_4_div_19_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("href", "/vi/de-thi/", ctx_r6.paramValue.hashId, "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r6.state.tbFront.selectTest.name, " ");
} }
function CreateQuestionComponent_div_4_div_19_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("href", "/vi/bai-tap/", ctx_r7.paramValue.hashId, "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r7.state.tbFront.selectTest.name, " ");
} }
function CreateQuestionComponent_div_4_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CreateQuestionComponent_div_4_div_19_a_2_Template, 2, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, CreateQuestionComponent_div_4_div_19_a_3_Template, 2, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.state.tbFront.selectTest);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r3.state.tbFront.selectTest);
} }
function CreateQuestionComponent_div_4_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.state.studentQa.error);
} }
function CreateQuestionComponent_div_4_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c0 = function () { return []; };
const _c1 = "bold italic backcolor | alignleft aligncenter alignright alignjustify";
const _c2 = function (a2) { return { height: 250, menubar: false, plugins: a2, toolbar: _c1 }; };
function CreateQuestionComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 4)(1, "form", 5)(2, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "editor", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, CreateQuestionComponent_div_4_div_11_Template, 6, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, CreateQuestionComponent_div_4_div_12_Template, 5, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 11)(14, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, CreateQuestionComponent_div_4_div_19_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, CreateQuestionComponent_div_4_div_20_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 14)(22, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateQuestionComponent_div_4_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r8.handleClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](24, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateQuestionComponent_div_4_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r10.handleSend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, CreateQuestionComponent_div_4_span_26_Template, 3, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 16, "lang_student_qa_create_question_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 18, "lang_student_qa_create_question_content_question"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r0.isLoading)("init", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](31, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](30, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.state.tbFront.selectedQuestion.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.state.tbFront.selectedQuestion.docxContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r0.state.tbFront.selectTest ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 20, "lang_student_qa_create_question_exam") : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 22, "lang_student_qa_create_question_homework"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 24, "lang_student_qa_create_question_related"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.state.tbFront.selectTest);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.state.studentQa.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](24, 26, "lang_buttom_close"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r0.form.invalid || ctx_r0.state.studentQa.loading || ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.state.studentQa.loading || ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 28, "lang_student_qa_create_question_send_question"), " ");
} }
class CreateQuestionComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(activeRoute, store, commonService, apiUploadService, localStorageObjetct, fb) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.store = store;
        this.commonService = commonService;
        this.apiUploadService = apiUploadService;
        this.localStorageObjetct = localStorageObjetct;
        this.fb = fb;
        this.isLoading = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({});
        this.notContainImage = false;
        this.paramValue = { tenantId: '', cateId: '', hashId: '', resultId: '' };
    }
    addmore() {
        window.history.back();
    }
    redirectToBackLink() {
        let backToLink = '/student-qa/enter-question';
        this.commonService.myNavigationWithQueryString(`/test/answer-test/${this.paramValue.tenantId}/${(this.paramValue.cateId != '' ? this.paramValue.cateId : 0)}/${this.paramValue.hashId}/${this.paramValue.resultId}`, '?backto=' + encodeURIComponent(backToLink));
    }
    handleClose() {
        this.store.dispatch(src_app_rxjs_state_testbank_frontend_state_actions__WEBPACK_IMPORTED_MODULE_3__.toggleQA());
        this.redirectToBackLink();
    }
    cleanContent() {
        let imgTagReg = /<img .*?>/gim;
        let newContent = this.form.controls.content.value.replace(imgTagReg, '');
        this.form.controls.content.setValue(newContent);
    }
    get f() {
        return this.form.controls;
    }
    handleSend() {
        if (this.form.invalid) {
            this.commonService.snackError('Bạn phải nhập tiêu đề và mô tả câu hỏi', '');
            return;
        }
        this.cleanContent();
        let formObj = this.commonService.getFormObj(this.form);
        // Upload ảnh lên cdn
        this.isLoading = true;
        if (this.state.tbFront.selectedQuestion.url) {
            this.apiUploadService.reactiveUploadBase64ToCDN('front_qa_question', this.state.tbFront.selectedQuestion.url).subscribe((res) => {
                var _a;
                if (res.success == 1) {
                    this.isLoading = false;
                    this.store.dispatch(src_app_rxjs_state_student_qa_state_actions__WEBPACK_IMPORTED_MODULE_2__.saveStudentQuestion({
                        question: {
                            assetObjectId: this.state.tbFront.resultId,
                            assetId: 'ex' + this.state.tbFront.selectTest.id,
                            assetGroupId: 'ex' + this.state.tbFront.selectedQuestion.data.id,
                            title: formObj.title,
                            content: formObj.content,
                            datas: '',
                            files: (_a = res.data) !== null && _a !== void 0 ? _a : '',
                        }
                    }));
                    this.localStorageObjetct.removeCacheByValue('StudentQuestion/GetObjs');
                    this.localStorageObjetct.removeCacheByValue('TeacherQuestion/GetObjsInDashboard');
                }
                else {
                    this.isLoading = false;
                    this.commonService.snackError('Lỗi tải ảnh lên CDN', '');
                }
            });
        }
        else {
            this.isLoading = false;
            this.store.dispatch(src_app_rxjs_state_student_qa_state_actions__WEBPACK_IMPORTED_MODULE_2__.saveStudentQuestion({
                question: {
                    assetObjectId: this.state.tbFront.resultId,
                    assetId: 'ex' + this.state.tbFront.selectTest.id,
                    assetGroupId: 'ex' + this.state.tbFront.selectedQuestion.data.id,
                    title: this.form.controls.title.value,
                    // gắn contentDocx vào đây
                    content: this.state.tbFront.selectedQuestion.docxContent + this.form.controls.content.value,
                    datas: '',
                    files: '',
                }
            }));
            this.localStorageObjetct.removeCacheByValue('StudentQuestion/GetObjs');
            this.localStorageObjetct.removeCacheByValue('TeacherQuestion/GetObjsInDashboard');
        }
    }
    ngOnInit() {
        this.form = this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__.WhiteSpaceValidator.noWhiteSpace]),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required])
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([
            this.activeRoute.params,
            this.activeRoute.queryParams,
        ]).subscribe(([]) => {
            var _a, _b, _c, _d;
            this.paramValue.tenantId = (_a = this.activeRoute.snapshot.paramMap.get('tenant_id')) !== null && _a !== void 0 ? _a : '';
            this.paramValue.cateId = (_b = this.activeRoute.snapshot.paramMap.get('cate_id')) !== null && _b !== void 0 ? _b : '';
            this.paramValue.hashId = (_c = this.activeRoute.snapshot.paramMap.get('hash_id')) !== null && _c !== void 0 ? _c : '';
            this.paramValue.resultId = (_d = this.activeRoute.snapshot.paramMap.get('result_id')) !== null && _d !== void 0 ? _d : '';
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_create_question_title',
            description: 'lang_cms_create_question_description',
            image: 'lang_cms_test_image',
        });
        this.subscriptions.add(this.store.subscribe((state) => {
            this.state = state;
            if (!this.state.tbFront.selectedQuestion) {
                // qoay lại màn hỏi đáp
                this.commonService.myNavigation('/student/dashboard/2');
            }
        }));
        super.ngOnInit();
    }
}
CreateQuestionComponent.ɵfac = function CreateQuestionComponent_Factory(t) { return new (t || CreateQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_6__.LocalStorageObjetct), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder)); };
CreateQuestionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CreateQuestionComponent, selectors: [["app-create-question"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 5, consts: [[3, "headerTitle", "checkUrlFunction", "RedirectToLink"], [1, "app", "py-4", "maxW1200"], [1, "container", "pb-5"], ["class", "block-list", 4, "ngIf"], [1, "block-list"], [3, "formGroup"], [1, "block-title", "mb-2"], ["type", "text", "formControlName", "title", "name", "", "id", "titleInput", 1, "mb-3", 3, "disabled"], [1, "block-editor", "mb-3"], ["formControlName", "content", "apiKey", "ldij13v1886vlrnk42g9bvngyqdc6gxpe8l0n9mo8gdjpg9d", 3, "disabled", "init"], ["class", "block-content", 4, "ngIf"], [1, "block-involve", "mt-2"], ["class", "row", 4, "ngIf"], ["class", "alert alert-danger p-3 m-3", 4, "ngIf"], [1, "block-save"], [1, "btn-cannel", 3, "click"], [1, "btn-save", 3, "disabled", "click"], [4, "ngIf"], [1, "block-content"], [1, "selected_img", "mb-1", 3, "id"], ["alt", "", 2, "max-width", "100%", 3, "src"], ["id", "blockContentDocx", 3, "innerHtml"], [1, "row"], [1, "col-md-4", "col-sm-6"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], [1, "alert", "alert-danger", "p-3", "m-3"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function CreateQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "header-frontend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("RedirectToLink", function CreateQuestionComponent_Template_header_frontend_RedirectToLink_0_listener() { return ctx.redirectToBackLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, CreateQuestionComponent_div_4_Template, 29, 33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 3, "lang_student_qa_create_question_header_title"))("checkUrlFunction", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.state.tbFront.selectedQuestion);
    } }, directives: [_azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_7__.HeaderFrontendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__.EditorComponent], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__.MytranslatePipe], styles: [".block-list[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 10px;\n  border-radius: 5px;\n}\n.block-list-bottom[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  border: none;\n  display: flex;\n  align-items: center;\n  color: #707070;\n  background: transparent;\n}\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%] {\n  text-transform: initial;\n  margin-left: 2px;\n}\n.block-editor[_ngcontent-%COMP%] {\n  min-height: 250px;\n  background-color: #fff;\n}\n.block-save[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-add[_ngcontent-%COMP%] {\n  background: transparent;\n  display: flex;\n  align-items: center;\n  border: none;\n  color: #169bd5;\n  text-transform: initial;\n  padding-left: 0;\n}\n.btn-add[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.btn-save[_ngcontent-%COMP%], .btn-cannel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 5px;\n  padding: 5px 25px;\n  transition: all 0.5s;\n}\n.btn-save[_ngcontent-%COMP%] {\n  border: none;\n  background: #169bd5;\n  margin-left: 10px;\n  color: #fff;\n  padding: 6px 25px;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: #066d99;\n}\n.btn-cannel[_ngcontent-%COMP%] {\n  border: 1px solid #797979;\n  color: #797979;\n}\n.btn-cannel[_ngcontent-%COMP%]:hover {\n  background: #a1a1a1;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  background: #e0e0e0 !important;\n}\n#titleInput[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #cccccc;\n  height: 40px;\n  padding-left: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBQ047QUFDTTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUlBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQURGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQ0E7O0VBRUksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUVKO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQ0E7RUFDSSxtQkFBQTtBQUVKO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFFSjtBQUNBO0VBQ0ksbUJBQUE7QUFFSjtBQUFBO0VBQ0ksOEJBQUE7QUFHSjtBQURBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUlGIiwiZmlsZSI6InN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgJi1ib3R0b20ge1xuICAgIG1hcmdpbjogMTBweCAwO1xuXG4gICAgLmJ0bi1hZGQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAmLXRleHQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5ibG9jay1lZGl0b3J7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmJsb2NrLXNhdmV7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uYnRuLWFkZHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMxNjliZDU7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIC5tYXQtaWNvbntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICB9XG59XG4uYnRuLXNhdmUsXG4uYnRuLWNhbm5lbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA1cHggMjVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4uYnRuLXNhdmUge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjMTY5YmQ1O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDZweCAyNXB4O1xufVxuXG4uYnRuLXNhdmU6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDY2ZDk5O1xufVxuXG4uYnRuLWNhbm5lbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc5Nzk3OTtcbiAgICBjb2xvcjogIzc5Nzk3OTtcbn1cblxuLmJ0bi1jYW5uZWw6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNhMWExYTE7XG59XG4uYnRuLXNhdmU6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTAgIWltcG9ydGFudDtcbn1cbiN0aXRsZUlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzO1xufSJdfQ== */"] });


/***/ }),

/***/ 79698:
/*!*******************************************************************!*\
  !*** ./src/app/student_qa/enter-question/controller.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterQuestionComponent": () => (/* binding */ EnterQuestionComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_qa_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/qa_api */ 69496);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_azt_block_exam_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/azt-block-exam/controller.component */ 49674);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _azota_ui_azt_dialog_warning_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/azt-dialog-warning/controller.component */ 35385);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);















function EnterQuestionComponent_azt_loading_effect_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "azt-loading-effect");
} }
function EnterQuestionComponent_ng_template_3_ng_container_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EnterQuestionComponent_ng_template_3_ng_container_14_ng_container_1_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const itemExam_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r11.redirectCreareQuestion(itemExam_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "azt-block-exam", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const itemExam_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", itemExam_r10)("type", 2);
} }
function EnterQuestionComponent_ng_template_3_ng_container_14_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EnterQuestionComponent_ng_template_3_ng_container_14_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r13.loadMoreExam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "lang_buttom_see_more"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r8.checkEndPage.exam);
} }
function EnterQuestionComponent_ng_template_3_ng_container_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "div", 19)(2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} }
function EnterQuestionComponent_ng_template_3_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EnterQuestionComponent_ng_template_3_ng_container_14_ng_container_1_Template, 3, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, EnterQuestionComponent_ng_template_3_ng_container_14_div_2_Template, 5, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, EnterQuestionComponent_ng_template_3_ng_container_14_div_3_Template, 4, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.objsExam);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r4.checkLoading.exam);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.checkLoading.exam);
} }
function EnterQuestionComponent_ng_template_3_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "lang_not_data"));
} }
function EnterQuestionComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 9)(10, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, EnterQuestionComponent_ng_template_3_ng_container_14_Template, 4, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, EnterQuestionComponent_ng_template_3_ng_template_15_Template, 4, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](16);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, "lang_student_qa_enter_question_header_node_one"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 7, "lang_student_qa_enter_question_header_node_two"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 9, "lang_student_qa_enter_question_did_exam"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.objsExam.length > 0)("ngIfElse", _r5);
} }
function EnterQuestionComponent_azt_dialog_warning_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "azt-dialog-warning", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("closeDialog", function EnterQuestionComponent_azt_dialog_warning_5_Template_azt_dialog_warning_closeDialog_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r15.closeAllowWarning(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r3.dataDialogWarning);
} }
class EnterQuestionComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(activeRoute, commonService, studentAssetService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.studentAssetService = studentAssetService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
        this.statusObjs = { isLoading: false, type: 1, error: { message: '' } };
        this.objsExam = [];
        this.objsHomework = [];
        this.pageExam = 1;
        this.pageHomework = 1;
        this.checkLoading = { exam: false, homework: false };
        this.checkEndPage = { exam: false, homework: false };
        this.backToLink = '/student-qa/enter-question';
        this.dataDialogWarning = { isShow: false, content: '' };
    }
    getObjsExam(page) {
        if (page == 1) {
            this.statusObjs = { isLoading: true, type: 1, error: { message: '' } };
        }
        else {
            this.checkLoading.exam = true;
        }
        this.studentAssetService.apiStudentAssetGetExamObjsGet(page).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            if (response.success == 1) {
                if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.isEndPage) == 1) {
                    this.checkEndPage.exam = true;
                }
                if (((_d = (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.objs) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0) {
                    if (page == 1) {
                        this.objsExam = (_f = (_e = response.data) === null || _e === void 0 ? void 0 : _e.objs) !== null && _f !== void 0 ? _f : [];
                    }
                    else {
                        let lengthArrExam = (_j = (_h = (_g = response.data) === null || _g === void 0 ? void 0 : _g.objs) === null || _h === void 0 ? void 0 : _h.length) !== null && _j !== void 0 ? _j : 0;
                        for (let i = 0; i < lengthArrExam; i++) {
                            this.objsExam.push((_m = (_l = (_k = response.data) === null || _k === void 0 ? void 0 : _k.objs) === null || _l === void 0 ? void 0 : _l[i]) !== null && _m !== void 0 ? _m : {});
                        }
                    }
                }
                else {
                }
            }
            else {
            }
            this.statusObjs = { isLoading: false, type: 1, error: { message: '' } };
            this.checkLoading.exam = false;
        });
    }
    getObjsHomework(page) {
        if (page == 1) {
            this.statusObjs = { isLoading: true, type: 1, error: { message: '' } };
        }
        else {
            this.checkLoading.homework = true;
        }
        this.studentAssetService.apiStudentAssetGetHomeworkObjsGet(page).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            if (response.success == 1) {
                if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.isEndPage) == 1) {
                    this.checkEndPage.homework = true;
                }
                if (((_d = (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.objs) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0) {
                    if (page == 1) {
                        this.objsHomework = (_f = (_e = response.data) === null || _e === void 0 ? void 0 : _e.objs) !== null && _f !== void 0 ? _f : [];
                    }
                    else {
                        let lengthArrHomework = (_j = (_h = (_g = response.data) === null || _g === void 0 ? void 0 : _g.objs) === null || _h === void 0 ? void 0 : _h.length) !== null && _j !== void 0 ? _j : 0;
                        for (let i = 0; i < lengthArrHomework; i++) {
                            this.objsHomework.push((_m = (_l = (_k = response.data) === null || _k === void 0 ? void 0 : _k.objs) === null || _l === void 0 ? void 0 : _l[i]) !== null && _m !== void 0 ? _m : {});
                        }
                    }
                }
                else {
                }
            }
            else {
            }
            this.statusObjs = { isLoading: false, type: 1, error: { message: '' } };
            this.checkLoading.homework = false;
        });
    }
    loadMoreExam() {
        this.pageExam++;
        this.getObjsExam(this.pageExam);
    }
    loadMoreHomework() {
        this.pageHomework++;
        this.getObjsHomework(this.pageHomework);
    }
    closeAllowWarning() {
        this.dataDialogWarning.isShow = false;
    }
    redirectCreareQuestion(itemExam) {
        var _a;
        if (itemExam.examType == 1 || itemExam.examType == 11 || itemExam.examType == 21) {
            this.dataDialogWarning.isShow = true;
        }
        else {
            this.commonService.myNavigationWithQueryString(`/test/answer-test/${itemExam.tenantId}/${(itemExam.categoryId != null ? itemExam.categoryId : 0)}/${itemExam.hashId}/${(_a = itemExam.examResult) === null || _a === void 0 ? void 0 : _a.id}`, '?backto=' + encodeURIComponent(this.backToLink));
        }
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([
            this.activeRoute.params,
            this.activeRoute.queryParams,
        ]).subscribe(([]) => {
            this.getObjsExam(this.pageExam);
            // this.getObjsHomework(this.pageHomework);
        });
        this.dataDialogWarning.content = 'Hiện tính năng hỏi đáp chưa hỗ trợ đề thi được tạo từ file docx';
        this.commonService.translateMetaData({
            title: 'lang_cms_enter_question_title',
            description: 'lang_cms_enter_question_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
}
EnterQuestionComponent.ɵfac = function EnterQuestionComponent_Factory(t) { return new (t || EnterQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_auto_api_qa_api__WEBPACK_IMPORTED_MODULE_2__.StudentAssetService)); };
EnterQuestionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: EnterQuestionComponent, selectors: [["app-enter-question"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 7, consts: [[3, "headerTitle", "back_link"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [3, "data", "closeDialog", 4, "ngIf"], [1, "app", "py-4", "maxW1200"], [1, "container"], [1, "app-header"], [1, "header-note"], [1, "header-note", "font-bold"], [1, "app-block", "bock-exam"], [1, "block-title"], [1, "block-list"], ["emptyData", ""], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center mt-3", 4, "ngIf"], [3, "click"], [3, "data", "type"], [1, "d-flex", "justify-content-center", "mt-3"], ["mat-button", "", 1, "btn-all-add", 3, "matTooltip", "disabled", "click"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "sr-only"], [1, "block-else"], [1, "text-else"], [3, "data", "closeDialog"]], template: function EnterQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "header-frontend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, EnterQuestionComponent_azt_loading_effect_2_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, EnterQuestionComponent_ng_template_3_Template, 17, 11, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, EnterQuestionComponent_azt_dialog_warning_5_Template, 1, 1, "azt-dialog-warning", 3);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 5, "lang_student_qa_enter_question_header_title"))("back_link", "/student/dashboard/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.statusObjs.isLoading)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dataDialogWarning.isShow);
    } }, directives: [_azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_3__.HeaderFrontendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_4__.AztLoadingEffectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _azota_ui_azt_block_exam_controller_component__WEBPACK_IMPORTED_MODULE_5__.AztBlockExamQuestionComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _azota_ui_azt_dialog_warning_controller_component__WEBPACK_IMPORTED_MODULE_6__.AztDialogWarningComponent], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.MytranslatePipe], styles: [".header-note[_ngcontent-%COMP%] {\n  color: #717171;\n  font-size: 14px;\n}\n\n.font-bold[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.block-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n\n.block-list[_ngcontent-%COMP%] {\n  background: #ececec;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.14);\n}\n\n.block-list-bottom[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  border: none;\n  display: flex;\n  align-items: center;\n  color: #707070;\n  background: transparent;\n}\n\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%] {\n  text-transform: initial;\n  margin-left: 2px;\n}\n\n.block-else[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n\n.text-else[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.bock-exam[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.btn-all-add[_ngcontent-%COMP%] {\n  color: #0EAFC0;\n}\n\n.school-info_bg[_ngcontent-%COMP%] {\n  z-index: 9998;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background: #0000008f;\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 9999;\n  top: 50%;\n  left: 50%;\n  min-width: 30%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  max-width: 600px;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFJRjs7QUFGRTtFQUNFLGNBQUE7QUFJSjs7QUFGSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFJTjs7QUFGTTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFJUjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQU1GOztBQUhBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0RBQUE7QUFNRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBTUY7O0FBSEE7RUFDRTtJQUNJLFVBQUE7SUFDQSxjQUFBO0VBTUo7QUFDRiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbm90ZXtcbiAgY29sb3I6ICM3MTcxNzE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb250LWJvbGR7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmJsb2NrLXRpdGxle1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmJsb2NrLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYigwIDAgMCAvIDE0JSk7XG5cbiAgJi1ib3R0b20ge1xuICAgIG1hcmdpbjogMTBweCAwO1xuXG4gICAgLmJ0bi1hZGQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAmLXRleHQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5ibG9jay1lbHNle1xuICBoZWlnaHQ6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4udGV4dC1lbHNle1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYm9jay1leGFte1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLmJ0bi1hbGwtYWRke1xuICBjb2xvcjogIzBFQUZDMDtcbn1cbi5zY2hvb2wtaW5mb19iZyB7XG4gIHotaW5kZXg6IDk5OTg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDhmO1xufVxuXG4uc2Nob29sLWluZm8ge1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41OCk7XG59XG5cbi50cnVuY2F0ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogOTAlO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICByaWdodDogLTdweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkYWRhZGE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnNjaG9vbC1pbmZvIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 28305:
/*!***************************************************************!*\
  !*** ./src/app/student_qa/masterpage/controller.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionMasterPageComponent": () => (/* binding */ QuestionMasterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class QuestionMasterPageComponent {
    constructor() { }
    ngOnInit() { }
}
QuestionMasterPageComponent.ɵfac = function QuestionMasterPageComponent_Factory(t) { return new (t || QuestionMasterPageComponent)(); };
QuestionMasterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionMasterPageComponent, selectors: [["question-master-page"]], decls: 2, vars: 0, consts: [["id", "student-layout"]], template: function QuestionMasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9579:
/*!*********************************************!*\
  !*** ./src/app/student_qa/module.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentQAModule": () => (/* binding */ StudentQAModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 72727);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-pdf-viewer */ 42214);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-image-cropper */ 92133);
/* harmony import */ var src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/azota-ui/azota-ui.module */ 47470);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ 75658);
/* harmony import */ var _create_question_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-question/controller.component */ 30005);
/* harmony import */ var _enter_question_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enter-question/controller.component */ 79698);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masterpage/controller.component */ 28305);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routing.module */ 56085);
/* harmony import */ var _view_answer_question_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-answer-question/controller.component */ 66724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
















class StudentQAModule {
}
StudentQAModule.ɵfac = function StudentQAModule_Factory(t) { return new (t || StudentQAModule)(); };
StudentQAModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: StudentQAModule });
StudentQAModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_1__.MyMaterialModule,
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__.EditorModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
            src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.MyPipeModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__.PdfViewerModule,
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_15__.ImageCropperModule,
            _routing_module__WEBPACK_IMPORTED_MODULE_6__.StudentQARoutingModule,
            src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](StudentQAModule, { declarations: [_create_question_controller_component__WEBPACK_IMPORTED_MODULE_3__.CreateQuestionComponent,
        _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_5__.QuestionMasterPageComponent,
        _view_answer_question_controller_component__WEBPACK_IMPORTED_MODULE_7__.ViewAnswerQuestionComponent,
        _enter_question_controller_component__WEBPACK_IMPORTED_MODULE_4__.EnterQuestionComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_1__.MyMaterialModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__.EditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.MyPipeModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__.PdfViewerModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_15__.ImageCropperModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_6__.StudentQARoutingModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule] }); })();


/***/ }),

/***/ 56085:
/*!**********************************************!*\
  !*** ./src/app/student_qa/routing.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentQARoutingModule": () => (/* binding */ StudentQARoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);
/* harmony import */ var src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auth_guards/auth.front.guard */ 45668);
/* harmony import */ var _create_question_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-question/controller.component */ 30005);
/* harmony import */ var _enter_question_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enter-question/controller.component */ 79698);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./masterpage/controller.component */ 28305);
/* harmony import */ var _view_answer_question_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-answer-question/controller.component */ 66724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);









const StudentQARoutes = [
    {
        path: '',
        component: _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_3__.QuestionMasterPageComponent,
        canActivate: [src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__.AuthFrontGuard],
        children: [
            {
                path: '',
                canActivateChild: [src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__.AuthFrontGuard],
                children: [
                    { path: 'create-question/:tenant_id/:cate_id/:hash_id/:result_id', component: _create_question_controller_component__WEBPACK_IMPORTED_MODULE_1__.CreateQuestionComponent },
                    { path: 'view-question/:id', component: _view_answer_question_controller_component__WEBPACK_IMPORTED_MODULE_4__.ViewAnswerQuestionComponent },
                    { path: 'enter-question', component: _enter_question_controller_component__WEBPACK_IMPORTED_MODULE_2__.EnterQuestionComponent },
                    { path: 'create-question', component: _create_question_controller_component__WEBPACK_IMPORTED_MODULE_1__.CreateQuestionComponent },
                ]
            }
        ]
    }
];
class StudentQARoutingModule {
}
StudentQARoutingModule.ɵfac = function StudentQARoutingModule_Factory(t) { return new (t || StudentQARoutingModule)(); };
StudentQARoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: StudentQARoutingModule });
StudentQARoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(StudentQARoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_7__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](StudentQARoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_7__.LocalizeRouterModule] }); })();


/***/ }),

/***/ 66724:
/*!*************************************************************************!*\
  !*** ./src/app/student_qa/view-answer-question/controller.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAnswerQuestionComponent": () => (/* binding */ ViewAnswerQuestionComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_auto_api_qa_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auto_api/qa_api */ 69496);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _azota_ui_azt_view_question_qa_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../azota-ui/azt-view-question-qa/controller.component */ 10280);








class ViewAnswerQuestionComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(activeRoute, commonService, studentQuestionService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.studentQuestionService = studentQuestionService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.isLoading = false;
        this.isEndPage = 0;
    }
    ngOnInit() {
        this.commonService.translateMetaData({
            title: 'lang_cms_view_answer_question_title',
            description: 'lang_cms_view_answer_question_description',
            image: 'lang_cms_test_image',
        });
        this.isLoading = true;
        let id = Number(this.activeRoute.snapshot.paramMap.get('id'));
        this.subscriptions.add(this.studentQuestionService.apiStudentQuestionGetAnswerObjsGet(id).subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (res.success) {
                this.curQuestionObj = (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.curQuestionObj) !== null && _b !== void 0 ? _b : {};
                this.answerObjs = (_d = (_c = res.data) === null || _c === void 0 ? void 0 : _c.answerObjs) !== null && _d !== void 0 ? _d : [];
                this.answerObjs.forEach((a) => {
                    var _a, _b;
                    a.fileObjs = (_b = this.castJsonToObj((_a = a.files) !== null && _a !== void 0 ? _a : '')) !== null && _b !== void 0 ? _b : [];
                });
                this.assetGroupStatisticObj = (_f = (_e = res.data) === null || _e === void 0 ? void 0 : _e.assetGroupStatisticObj) !== null && _f !== void 0 ? _f : {};
                this.assetObjectObj = (_h = (_g = res.data) === null || _g === void 0 ? void 0 : _g.assetObjectObj) !== null && _h !== void 0 ? _h : {};
                this.isEndPage = (_k = (_j = res.data) === null || _j === void 0 ? void 0 : _j.isEndPage) !== null && _k !== void 0 ? _k : 0;
                this.isLoading = false;
            }
            else {
                this.commonService.snackError('Có lỗi khi xem chi tiết câu hỏi', '');
                this.isLoading = false;
            }
        }));
        super.ngOnInit();
    }
}
ViewAnswerQuestionComponent.ɵfac = function ViewAnswerQuestionComponent_Factory(t) { return new (t || ViewAnswerQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_qa_api__WEBPACK_IMPORTED_MODULE_0__.StudentQuestionService)); };
ViewAnswerQuestionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ViewAnswerQuestionComponent, selectors: [["app-student-view-question"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 6, consts: [[3, "curQuestionObj", "answerObjs", "assetGroupStatisticObj", "assetObjectObj", "isEndPage", "isLoading"]], template: function ViewAnswerQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "azt-view-answer-question", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("curQuestionObj", ctx.curQuestionObj)("answerObjs", ctx.answerObjs)("assetGroupStatisticObj", ctx.assetGroupStatisticObj)("assetObjectObj", ctx.assetObjectObj)("isEndPage", ctx.isEndPage)("isLoading", ctx.isLoading);
    } }, directives: [_azota_ui_azt_view_question_qa_controller_component__WEBPACK_IMPORTED_MODULE_3__.AztViewAnswerQuestionComponent], styles: [".block-list[_ngcontent-%COMP%] {\n  background: #ececec;\n  padding: 10px;\n  padding-bottom: 3px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.14);\n}\n.block-list-bottom[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  border: none;\n  display: flex;\n  align-items: center;\n  color: #707070;\n  background: transparent;\n}\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%] {\n  text-transform: initial;\n  margin-left: 2px;\n}\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  text-transform: initial;\n}\n.block-else[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n.text-else[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.question-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.question-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.question-image[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 20px;\n}\n.question-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9A9A9A;\n  margin-right: 10px;\n}\n.question-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n}\n.question-content[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.block-list-answer[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.answer-count[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n}\n.block-answer[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 15px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #d0d0d0;\n}\n.block-answer-left[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.count-view[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #dddddd;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 6px;\n}\n.count-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.true-answer[_ngcontent-%COMP%] {\n  color: #0ca74a;\n}\n.true-answer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.block-answer-right[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  flex: auto;\n}\n.confirm[_ngcontent-%COMP%] {\n  padding: 6px 7px;\n  background: #e8e8e8;\n  border-radius: 5px;\n  font-size: 12px;\n}\n.btn-unconfirm[_ngcontent-%COMP%] {\n  color: #00A7D0;\n  background: transparent;\n  transition: all 0.5s;\n}\n.btn-unconfirm[_ngcontent-%COMP%]:hover {\n  color: #026680;\n  font-weight: bold;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  background: #169bd5;\n  color: #fff;\n  font-size: 13px;\n  transition: all 0.5s;\n  border-radius: 5px;\n  padding: 5px 7px;\n  padding-left: 15px;\n  padding-left: 20px;\n}\n.btn-confirm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 20px;\n}\n.btn-confirm[_ngcontent-%COMP%]:hover {\n  background: #0b6992;\n}\n.block-answer-bottom[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.time-ago[_ngcontent-%COMP%] {\n  color: #868686;\n  font-size: 10px;\n  margin-bottom: 0;\n}\n.btn-all-add[_ngcontent-%COMP%] {\n  color: #00a7d0;\n}\n#formInputAnswer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #dfdfdf;\n  border-radius: 3px;\n  padding: 5px;\n}\n@media screen and (max-width: 500px) {\n  .block-answer-bottom[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    align-items: flex-start;\n  }\n\n  .confirm[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n  .confirm-took[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUNOO0FBQ007RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFJQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQURGO0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFHRjtBQURBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQUlKO0FBRkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBS0Y7QUFKRTtFQUNFLFdBQUE7QUFNSjtBQUhBO0VBQ0UsZ0JBQUE7QUFNRjtBQUpBO0VBQ0UsZ0JBQUE7QUFPRjtBQUxBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFRRjtBQU5BO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQVNGO0FBUEE7RUFDRSxrQkFBQTtBQVVGO0FBUkE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFXRjtBQVZFO0VBQ0UsZUFBQTtBQVlKO0FBVEE7RUFDRSxjQUFBO0FBWUY7QUFYRTtFQUNFLGdCQUFBO0FBYUo7QUFWQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQWFGO0FBWEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBY0Y7QUFaQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBZUY7QUFkRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQWdCSjtBQWJBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFnQkY7QUFmRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQWlCSjtBQWRBO0VBQ0UsbUJBQUE7QUFpQkY7QUFmQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFrQkY7QUFoQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFtQkY7QUFqQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBb0JGO0FBakJBO0VBQ0UsY0FBQTtBQW9CRjtBQWpCQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQW9CRjtBQWpCQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSx1QkFBQTtFQW9CRjs7RUFsQkE7SUFDRSxnQkFBQTtFQXFCRjs7RUFuQkE7SUFDRSxnQkFBQTtFQXNCRjtBQUNGIiwiZmlsZSI6InN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYigwIDAgMCAvIDE0JSk7XG5cbiAgJi1ib3R0b20ge1xuICAgIG1hcmdpbjogMTBweCAwO1xuXG4gICAgLmJ0bi1hZGQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAmLXRleHQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmJ1dHRvbntcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbn1cbi5ibG9jay1lbHNle1xuICBoZWlnaHQ6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4udGV4dC1lbHNle1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucXVlc3Rpb24tdGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucXVlc3Rpb24taW5mb3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWVzdGlvbi1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnF1ZXN0aW9uLXRleHR7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM5QTlBOUE7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgc3BhbntcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxufVxuLnF1ZXN0aW9uLWNvbnRlbnR7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYmxvY2stbGlzdC1hbnN3ZXJ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uYW5zd2VyLWNvdW50e1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmJsb2NrLWFuc3dlcntcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDBkMGQwO1xufVxuLmJsb2NrLWFuc3dlci1sZWZ0e1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY291bnQtdmlld3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4O1xuICBzcGFue1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuLnRydWUtYW5zd2Vye1xuICBjb2xvcjogIzBjYTc0YTtcbiAgbWF0LWljb257XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxufVxuLmJsb2NrLWFuc3dlci1yaWdodHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgZmxleDogYXV0bztcbn1cbi5jb25maXJte1xuICBwYWRkaW5nOiA2cHggN3B4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5idG4tdW5jb25maXJte1xuICBjb2xvcjogIzAwQTdEMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICY6aG92ZXJ7XG4gICAgY29sb3I6ICMwMjY2ODA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cbi5idG4tY29uZmlybXtcbiAgYmFja2dyb3VuZDogIzE2OWJkNTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHggN3B4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgaXtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG4uYnRuLWNvbmZpcm06aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICMwYjY5OTI7XG59XG4uYmxvY2stYW5zd2VyLWJvdHRvbXtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzZXItaW5mb3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aW1lLWFnb3tcbiAgY29sb3I6ICM4Njg2ODY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcblxufVxuLmJ0bi1hbGwtYWRke1xuICBjb2xvcjogIzAwYTdkMDtcbn1cblxuI2Zvcm1JbnB1dEFuc3dlciB0ZXh0YXJlYXtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZmRmZGY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gIC5ibG9jay1hbnN3ZXItYm90dG9te1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAuY29uZmlybXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5jb25maXJtLXRvb2t7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_student_qa_module_module_ts.js.map