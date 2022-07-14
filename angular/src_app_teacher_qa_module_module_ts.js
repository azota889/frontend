"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_teacher_qa_module_module_ts"],{

/***/ 39810:
/*!**********************************************************************!*\
  !*** ./src/app/teacher_qa/form-input-answer/controller.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputAnswerTeacher": () => (/* binding */ FormInputAnswerTeacher)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_helpers/FileManagers */ 12626);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_qa_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/qa_api */ 69496);
/* harmony import */ var src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/upload.api.service */ 29401);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 72727);
/* harmony import */ var src_app_core_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/directives/drag-drop.directive */ 25157);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _azota_ui_preview_media_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/preview-media/controller.component */ 73852);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);

















function FormInputAnswerTeacher_ng_container_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FormInputAnswerTeacher_ng_container_21_div_1_Template_span_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const item_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r7.onShowFile(item_r6, -1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FormInputAnswerTeacher_ng_container_21_div_1_Template_i_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const item_r6 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r9.removeAttach(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", (item_r6 == null ? null : item_r6.name) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](".", item_r6.extension, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 4, "lang_teacher_qa_form_input_answer_remove_file"));
} }
function FormInputAnswerTeacher_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FormInputAnswerTeacher_ng_container_21_div_1_Template, 7, 6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.filesUploaded);
} }
function FormInputAnswerTeacher_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 24);
} }
function FormInputAnswerTeacher_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function FormInputAnswerTeacher_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "azt-preview-media", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("closePreview", function FormInputAnswerTeacher_div_32_Template_azt_preview_media_closePreview_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r10.onFileClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fileOption", ctx_r4.previewFile);
} }
const _c0 = function () { return []; };
const _c1 = "bold italic backcolor | alignleft aligncenter alignright alignjustify";
const _c2 = function (a2) { return { height: 250, menubar: false, plugins: a2, toolbar: _c1 }; };
class FormInputAnswerTeacher extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, teacherQuestionService, apiUploadService, fb) {
        super(commonService);
        this.commonService = commonService;
        this.teacherQuestionService = teacherQuestionService;
        this.apiUploadService = apiUploadService;
        this.fb = fb;
        this.closeFormInputAnswer = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.fetchNewData = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.isLoading = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({});
        this.loadingUpload = false;
        this.uploadProgress = -1;
        this.filesUploaded = [];
        this.previewFile = {};
        this.isShowPreviewFile = false;
    }
    cleanContent() {
        let imgTagReg = /<img .*?>/gim;
        let newContent = this.form.controls.content.value.replace(imgTagReg, '');
        this.form.controls.content.setValue(newContent);
    }
    uploadFile(file) {
        if (file) {
            // Cho định dạng file giống y như bài tập
            if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.isSuportTypeUploadHomework)(file.type)) {
                this.loadingUpload = true;
                this.uploadProgress = 0;
                (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.compressImage)(file).then(dataFile => {
                    this.apiUploadService.uploadToCdnForAnswerQA(dataFile).subscribe(event => {
                        if (event.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpEventType.UploadProgress) {
                            if (event.success == 1) {
                                this.loadingUpload = false;
                                this.uploadProgress = -1;
                                if (event.data) {
                                    this.filesUploaded.push(event.data);
                                }
                            }
                            else {
                                this.loadingUpload = false;
                                this.commonService.snackError('Không Upload được ảnh (Tên: ' + file.name + ')! Vui lòng thử lại sau! Lỗi:  [SPLIT_LANG]' + event.message, '');
                            }
                        }
                    });
                });
            }
            else {
                this.commonService.snackError('Định dạng file không được hỗ trợ!', '');
            }
        }
    }
    onFileClose() {
        this.isShowPreviewFile = false;
        this.previewFile = {};
    }
    onShowFile(file, index) {
        this.isShowPreviewFile = true;
        this.previewFile = Object.assign(Object.assign({}, file), { index });
    }
    onFileSelected(fileList) {
        let file = fileList ? fileList[0] : false;
        if (file != false) {
            this.uploadFile(file);
        }
    }
    saveAnswer() {
        let formObj = this.commonService.getFormObj(this.form);
        if (this.form.invalid) {
            this.commonService.snackError('Vui lòng nhập nội dung câu trả lời', '');
        }
        else {
            this.cleanContent();
            this.isLoading = true;
            var body = {
                assetGroupId: this.assetGroupId,
                content: formObj.content,
                files: JSON.stringify(this.filesUploaded)
            };
            this.subscriptions.add(this.teacherQuestionService.apiTeacherQuestionSaveAnswerObjPost(body).subscribe(res => {
                if (res.success) {
                    this.commonService.snackSuccess('Gửi câu trả lời thành công', '');
                    this.fetchNewData.emit();
                    this.isLoading = false;
                    this.cancelAnswer();
                }
                else {
                    this.commonService.snackError('Gửi câu trả lời không thành công', '');
                    this.isLoading = false;
                }
            }));
        }
    }
    removeAttach(fileData) {
        let index = this.filesUploaded.indexOf(fileData);
        this.filesUploaded.splice(index, 1);
    }
    cancelAnswer() {
        this.form.controls.content.setValue('');
        this.file = null;
        this.closeFormInputAnswer.emit();
    }
    ngOnInit() {
        this.form = this.fb.group({
            File: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])
        });
        super.ngOnInit();
    }
}
FormInputAnswerTeacher.ɵfac = function FormInputAnswerTeacher_Factory(t) { return new (t || FormInputAnswerTeacher)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_auto_api_qa_api__WEBPACK_IMPORTED_MODULE_3__.TeacherQuestionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder)); };
FormInputAnswerTeacher.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: FormInputAnswerTeacher, selectors: [["form-input-answer-teacher"]], inputs: { assetGroupId: "assetGroupId" }, outputs: { closeFormInputAnswer: "closeFormInputAnswer", fetchNewData: "fetchNewData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 23, consts: [[1, "form-horizontal", "text-center", 3, "formGroup"], [1, "create-answer"], [1, "answer-editor"], ["formControlName", "content", "apiKey", "ldij13v1886vlrnk42g9bvngyqdc6gxpe8l0n9mo8gdjpg9d", 3, "init"], [1, "answer-upload"], ["id", "dropzoneAreaFrame", 1, "text-center", "v-dragndrop", "dropzone", "dz-started", "cur-po", 3, "click"], ["appDragDrop", "", 1, "px-4", "py-3", "rounded", 3, "filesChangeEmiter"], [1, "file"], ["id", "select-upload-file", 1, "align-self-center", "select", "dz-clickable"], ["type", "file", "formControlName", "File", 1, "form-control", "file-input", 3, "change"], ["fileSelect", ""], [1, "d-block", "text-dark-green"], [1, "answer-save"], [1, "mt-1", "text-left"], [1, "attachs"], [4, "ngIf"], ["class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], [1, "answer-buttons"], [1, "btn-cannel", 3, "click"], [1, "btn-save", 3, "disabled", "click"], ["class", "att-item", 4, "ngFor", "ngForOf"], [1, "att-item"], [1, "image-preview", "truncate", 3, "matTooltip", "click"], [1, "fas", "fa-window-close", 3, "matTooltip", "click"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [3, "fileOption", "closePreview"]], template: function FormInputAnswerTeacher_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "editor", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FormInputAnswerTeacher_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("filesChangeEmiter", function FormInputAnswerTeacher_Template_div_filesChangeEmiter_6_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7)(8, "a", 8)(9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function FormInputAnswerTeacher_Template_input_change_11_listener($event) { return ctx.onFileSelected($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 12)(17, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, FormInputAnswerTeacher_ng_container_21_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, FormInputAnswerTeacher_span_23_Template, 1, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 17)(25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FormInputAnswerTeacher_Template_button_click_25_listener() { return ctx.cancelAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FormInputAnswerTeacher_Template_button_click_28_listener() { return ctx.saveAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, FormInputAnswerTeacher_span_29_Template, 3, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, FormInputAnswerTeacher_div_32_Template, 2, 1, "div", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("init", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](21, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](20, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 12, "lang_teacher_qa_form_input_answer_note_tutorial"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 14, "lang_teacher_qa_form_input_answer_title_file"), " (", ctx.filesUploaded.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.filesUploaded.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loadingUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 16, "lang_buttom_cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 18, "lang_buttom_send"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isShowPreviewFile);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__.EditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, src_app_core_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_5__.DragDropDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _azota_ui_preview_media_controller_component__WEBPACK_IMPORTED_MODULE_6__.AztPreviewMediaComponent], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.MytranslatePipe], styles: ["button[_ngcontent-%COMP%] {\n  border: none;\n  text-transform: initial;\n}\n\n.question-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n.question-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.question-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9A9A9A;\n  margin-right: 10px;\n}\n\n.question-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.question-content[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.block-list-answer[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.answer-count[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n}\n\n.block-answer[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 15px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #d0d0d0;\n}\n\n.block-answer-left[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.count-view[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #dddddd;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 6px;\n}\n\n.count-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.true-answer[_ngcontent-%COMP%] {\n  color: #0ca74a;\n}\n\n.true-answer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.block-answer-right[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n\n.confirm[_ngcontent-%COMP%] {\n  padding: 6px 7px;\n  background: #e8e8e8;\n  border-radius: 5px;\n  font-size: 12px;\n}\n\n.btn-unconfirm[_ngcontent-%COMP%] {\n  color: #00A7D0;\n  background: transparent;\n  transition: all 0.5s;\n}\n\n.btn-unconfirm[_ngcontent-%COMP%]:hover {\n  color: #026680;\n  font-weight: bold;\n}\n\n.btn-confirm[_ngcontent-%COMP%] {\n  background: #169bd5;\n  color: #fff;\n  font-size: 13px;\n  transition: all 0.5s;\n  border-radius: 5px;\n  padding: 5px 7px;\n  padding-left: 15px;\n  padding-left: 20px;\n}\n\n.btn-confirm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 20px;\n}\n\n.btn-confirm[_ngcontent-%COMP%]:hover {\n  background: #0b6992;\n}\n\n.block-answer-bottom[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.time-ago[_ngcontent-%COMP%] {\n  color: #868686;\n  font-size: 10px;\n  margin-bottom: 0;\n}\n\n.btn-all-add[_ngcontent-%COMP%] {\n  color: #00a7d0;\n}\n\n.create-answer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.answer-upload[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.upload-file[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.upload-file-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.image-preview[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.answer-editor[_ngcontent-%COMP%] {\n  min-height: 250px;\n}\n\n.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%] {\n  flex: auto;\n  margin-right: 15px;\n  margin-top: 15px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]   .att-item[_ngcontent-%COMP%] {\n  max-width: 250px;\n  margin-right: 20px;\n  display: flex;\n  align-items: center;\n}\n\n.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]   .att-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-style: italic;\n  display: block;\n  text-decoration: underline;\n}\n\n.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]   .att-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff0000b5;\n  margin-left: 5px;\n}\n\n.answer-save[_ngcontent-%COMP%]   .attachs[_ngcontent-%COMP%]   .att-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: red;\n}\n\n.answer-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.btn-save[_ngcontent-%COMP%], .btn-cannel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 5px;\n  padding: 5px 25px;\n  transition: all 0.5s;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  border: none;\n  background: #169bd5;\n  margin-left: 10px;\n  color: #fff;\n  padding: 6px 25px;\n}\n\n.btn-save[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: #066d99;\n}\n\n.btn-cannel[_ngcontent-%COMP%] {\n  border: 1px solid #797979;\n  color: #797979;\n}\n\n.btn-cannel[_ngcontent-%COMP%]:hover {\n  background: #a1a1a1;\n}\n\n.btn-save[_ngcontent-%COMP%]:disabled {\n  background: #e0e0e0 !important;\n}\n\n.file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  vertical-align: super;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: rgba(27, 171, 161, 0.05);\n  border: 1px dashed #1baba1;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dz-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #007bff;\n}\n\n.font-size-1[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.fileinfo[_ngcontent-%COMP%] {\n  width: 200px;\n  border: 1px dashed #1baba1;\n  background: aliceblue;\n}\n\n.fileinfo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.fileinfo[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.fileinfo[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  background: #f71414;\n  color: white;\n  padding: 2px 20px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 5px;\n}\n\n.is-dragover[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%] {\n  background-color: #c8e6c9;\n}\n/*# sourceMappingURL=data:application/json;base64,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RTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBNEJKOztBQTFCRTtFQUNFLGVBQUE7QUE2Qko7O0FBM0JFO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUE4Qko7O0FBNUJFO0VBQ0UsWUFBQTtBQStCSjs7QUE3QkU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFnQ0o7O0FBOUJFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBaUNKOztBQS9CRTtFQUNFLHlCQUFBO0FBa0NKIiwiZmlsZSI6InN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIH1cbiAgLnF1ZXN0aW9uLXRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAucXVlc3Rpb24taW5mb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnF1ZXN0aW9uLXRleHR7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjOUE5QTlBO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBzcGFue1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICB9XG4gIC5xdWVzdGlvbi1jb250ZW50e1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgLmJsb2NrLWxpc3QtYW5zd2Vye1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgLmFuc3dlci1jb3VudHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgLmJsb2NrLWFuc3dlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7XG4gIH1cbiAgLmJsb2NrLWFuc3dlci1sZWZ0e1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuY291bnQtdmlld3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgc3BhbntcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cbiAgLnRydWUtYW5zd2Vye1xuICAgIGNvbG9yOiAjMGNhNzRhO1xuICAgIG1hdC1pY29ue1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cbiAgLmJsb2NrLWFuc3dlci1yaWdodHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG4gIC5jb25maXJte1xuICAgIHBhZGRpbmc6IDZweCA3cHg7XG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5idG4tdW5jb25maXJte1xuICAgIGNvbG9yOiAjMDBBN0QwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgJjpob3ZlcntcbiAgICAgIGNvbG9yOiAjMDI2NjgwO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG4gIC5idG4tY29uZmlybXtcbiAgICBiYWNrZ3JvdW5kOiAjMTY5YmQ1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgaXtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cbiAgLmJ0bi1jb25maXJtOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMwYjY5OTI7XG4gIH1cbiAgLmJsb2NrLWFuc3dlci1ib3R0b217XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAudXNlci1pbmZve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAudGltZS1hZ297XG4gICAgY29sb3I6ICM4Njg2ODY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIFxuICB9XG4gIC5idG4tYWxsLWFkZHtcbiAgICBjb2xvcjogIzAwYTdkMDtcbiAgfVxuICAuY3JlYXRlLWFuc3dlcntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIC5hbnN3ZXItdXBsb2Fke1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLnVwbG9hZC1maWxle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnVwbG9hZC1maWxlLXRleHR7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5pbWFnZS1wcmV2aWV3e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYW5zd2VyLWVkaXRvcntcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgfVxuICAuYW5zd2VyLXNhdmV7XG4gICAgLmF0dGFjaHN7XG4gICAgICBmbGV4OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAuYXR0LWl0ZW0ge1xuICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICAgIGl7XG4gICAgICAgICAgY29sb3I6ICNmZjAwMDBiNTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYW5zd2VyLWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gIH1cbiAgLmJ0bi1zYXZlLFxuICAuYnRuLWNhbm5lbCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwYWRkaW5nOiA1cHggMjVweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIH1cbiAgXG4gIC5idG4tc2F2ZSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTY5YmQ1O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDZweCAyNXB4O1xuICB9XG4gIFxuICAuYnRuLXNhdmU6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwNjZkOTk7XG4gIH1cbiAgXG4gIC5idG4tY2FubmVsIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3OTc5Nzk7XG4gICAgICBjb2xvcjogIzc5Nzk3OTtcbiAgfVxuICBcbiAgLmJ0bi1jYW5uZWw6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2ExYTFhMTtcbiAgfVxuICBcbiAgLmJ0bi1zYXZlOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTAgIWltcG9ydGFudDtcbiAgfVxuICAuZmlsZSBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbiAgfVxuICAudi1kcmFnbmRyb3A+ZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI3LDE3MSwxNjEsLjA1KTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzFiYWJhMTtcbiAgfVxuICAudi1kcmFnbmRyb3AgcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLmZpbGUtaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmR6LWNsaWNrYWJsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiMwMDdiZmY7XG4gIH1cbiAgLmZvbnQtc2l6ZS0xIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmZpbGVpbmZvIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICMxYmFiYTE7XG4gICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICB9XG4gIC5maWxlaW5mbyAudGl0bGUgaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLmZpbGVpbmZvIC5maWxlLW5hbWUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuZmlsZWluZm8gLmJ0bi1yZW1vdmUge1xuICAgIGJhY2tncm91bmQ6ICNmNzE0MTQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJweCAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIC5pcy1kcmFnb3ZlciAucm91bmRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTZjOTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gIFxuICB9Il19 */"] });


/***/ }),

/***/ 4379:
/*!***************************************************************************!*\
  !*** ./src/app/teacher_qa/list-questions-student/controller.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListQuestionsOfStudentsComponent": () => (/* binding */ ListQuestionsOfStudentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_azt_list_questions_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../azota-ui/azt-list-questions/controller.component */ 11956);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);







function ListQuestionsOfStudentsComponent_azt_loading_effect_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "azt-loading-effect");
} }
function ListQuestionsOfStudentsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "azt-list-questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ListQuestionsOfStudentsComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.commonService.translateMetaData({
            title: 'lang_cms_teacher_group_title',
            description: 'lang_cms_teacher_group_description',
            image: 'lang_cms_test_image',
        });
        this.isLoading = false;
    }
}
ListQuestionsOfStudentsComponent.ɵfac = function ListQuestionsOfStudentsComponent_Factory(t) { return new (t || ListQuestionsOfStudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService)); };
ListQuestionsOfStudentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ListQuestionsOfStudentsComponent, selectors: [["app-list-questions-student"]], decls: 5, vars: 6, consts: [[3, "headerTitle", "back_link"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [1, "pl-2", "pr-2", 2, "max-width", "700px", "margin", "auto"]], template: function ListQuestionsOfStudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ListQuestionsOfStudentsComponent_azt_loading_effect_2_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ListQuestionsOfStudentsComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 4, "lang_teacher_qa_list_questions_student_header_title"))("back_link", "/admin/testbank/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
    } }, directives: [_azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_1__.HeaderBackendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_2__.AztLoadingEffectComponent, _azota_ui_azt_list_questions_controller_component__WEBPACK_IMPORTED_MODULE_3__.AztListQuestionsComponent], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe], styles: [".content[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin-top: 20px !important;\n  margin: auto;\n  max-width: 430px;\n  background: inherit;\n  background-color: #ececec;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.14);\n}\n\n.content-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.content-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  max-width: 270px;\n  height: 40px;\n  background: inherit;\n  background-color: #169bd5;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  font-weight: 500;\n}\n\n.content-list-view[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  max-width: 270px;\n  background: inherit;\n  background-color: #169bd5;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  font-weight: 500;\n}\n\n.view-single[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background: inherit;\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ececec;\n  border-radius: 5px;\n  box-shadow: none;\n  font-style: normal;\n  font-size: 12px;\n  color: #494949;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFDSjs7QUFFQTtFQUNBLGtCQUFBO0FBQ0E7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDQzMHB4O1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDIzNiwgMjM2LCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiKDAgMCAwIC8gMTQlKTtcbn1cblxuLmNvbnRlbnQtaGVhZGVye1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC1oZWFkZXIgYnV0dG9ue1xuICAgIG1heC13aWR0aDogMjcwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMTU1LCAyMTMsIDEpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jb250ZW50LWxpc3QtdmlldyBidXR0b257XG4gICAgbWF4LXdpZHRoOiAyNzBweDtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDE1NSwgMjEzLCAxKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udmlldy1zaW5nbGV7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzNiwgMjM2LCAyMzYsIDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 88874:
/*!***************************************************************!*\
  !*** ./src/app/teacher_qa/masterpage/controller.component.ts ***!
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

/***/ 62889:
/*!*********************************************!*\
  !*** ./src/app/teacher_qa/module.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherQAModule": () => (/* binding */ TeacherQAModule)
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
/* harmony import */ var _form_input_answer_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-input-answer/controller.component */ 39810);
/* harmony import */ var _list_questions_student_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-questions-student/controller.component */ 4379);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masterpage/controller.component */ 88874);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routing.module */ 72322);
/* harmony import */ var _view_question_student_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-question-student/controller.component */ 43339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
















class TeacherQAModule {
}
TeacherQAModule.ɵfac = function TeacherQAModule_Factory(t) { return new (t || TeacherQAModule)(); };
TeacherQAModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: TeacherQAModule });
TeacherQAModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
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
            _routing_module__WEBPACK_IMPORTED_MODULE_6__.TeacherQARoutingModule,
            src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TeacherQAModule, { declarations: [_view_question_student_controller_component__WEBPACK_IMPORTED_MODULE_7__.ViewQuestionStudentComponent,
        _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_5__.QuestionMasterPageComponent,
        _list_questions_student_controller_component__WEBPACK_IMPORTED_MODULE_4__.ListQuestionsOfStudentsComponent,
        _form_input_answer_controller_component__WEBPACK_IMPORTED_MODULE_3__.FormInputAnswerTeacher], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_1__.MyMaterialModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__.EditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.MyPipeModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__.PdfViewerModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_15__.ImageCropperModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_6__.TeacherQARoutingModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule] }); })();


/***/ }),

/***/ 72322:
/*!**********************************************!*\
  !*** ./src/app/teacher_qa/routing.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherQARoutingModule": () => (/* binding */ TeacherQARoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);
/* harmony import */ var src_app_core_auth_guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auth_guards/auth.admin.guard */ 6834);
/* harmony import */ var _list_questions_student_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-questions-student/controller.component */ 4379);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masterpage/controller.component */ 88874);
/* harmony import */ var _view_question_student_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-question-student/controller.component */ 43339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








const TeacherQARoutes = [
    {
        path: '',
        component: _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_2__.QuestionMasterPageComponent,
        canActivate: [src_app_core_auth_guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAdminGuard],
        children: [
            {
                path: '',
                canActivateChild: [src_app_core_auth_guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAdminGuard],
                children: [
                    { path: 'view-question/:id', component: _view_question_student_controller_component__WEBPACK_IMPORTED_MODULE_3__.ViewQuestionStudentComponent },
                    { path: 'list-questions', component: _list_questions_student_controller_component__WEBPACK_IMPORTED_MODULE_1__.ListQuestionsOfStudentsComponent },
                ]
            }
        ]
    }
];
class TeacherQARoutingModule {
}
TeacherQARoutingModule.ɵfac = function TeacherQARoutingModule_Factory(t) { return new (t || TeacherQARoutingModule)(); };
TeacherQARoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TeacherQARoutingModule });
TeacherQARoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(TeacherQARoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TeacherQARoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterModule] }); })();


/***/ }),

/***/ 43339:
/*!**************************************************************************!*\
  !*** ./src/app/teacher_qa/view-question-student/controller.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewQuestionStudentComponent": () => (/* binding */ ViewQuestionStudentComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_auto_api_qa_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auto_api/qa_api */ 69496);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_helpers/LocalStorageObjetc */ 3279);
/* harmony import */ var _azota_ui_azt_view_question_qa_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/azt-view-question-qa/controller.component */ 10280);
/* harmony import */ var _form_input_answer_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-input-answer/controller.component */ 39810);











function ViewQuestionStudentComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewQuestionStudentComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.isShowFormInputAnswer = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "+ Tr\u1EA3 l\u1EDDi");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewQuestionStudentComponent_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewQuestionStudentComponent_div_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r7.clickRelate("prev"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewQuestionStudentComponent_div_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewQuestionStudentComponent_div_2_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r9.clickRelate("next"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ViewQuestionStudentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewQuestionStudentComponent_div_2_button_1_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ViewQuestionStudentComponent_div_2_button_2_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.previousQuestionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.nextQuestionId);
} }
function ViewQuestionStudentComponent_form_input_answer_teacher_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form-input-answer-teacher", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fetchNewData", function ViewQuestionStudentComponent_form_input_answer_teacher_3_Template_form_input_answer_teacher_fetchNewData_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r11.getData(); })("closeFormInputAnswer", function ViewQuestionStudentComponent_form_input_answer_teacher_3_Template_form_input_answer_teacher_closeFormInputAnswer_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.isShowFormInputAnswer = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("assetGroupId", ctx_r2.assetGroupStatisticObj.assetGroupId);
} }
class ViewQuestionStudentComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(activeRoute, commonService, _location, localStorageObjetct, teacherQuestionService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this._location = _location;
        this.localStorageObjetct = localStorageObjetct;
        this.teacherQuestionService = teacherQuestionService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.isLoading = false;
        this.isShowFormInputAnswer = false;
        this.studentAnswerObj = {};
    }
    getData() {
        this.isLoading = true;
        let id = Number(this.activeRoute.snapshot.paramMap.get('id'));
        this.subscriptions.add(this.teacherQuestionService.apiTeacherQuestionGetAnswerObjsGet(id, 1).subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            if (res.success) {
                this.curQuestionObj = (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.curQuestionObj) !== null && _b !== void 0 ? _b : {};
                this.assetGroupStatisticObj = (_d = (_c = res.data) === null || _c === void 0 ? void 0 : _c.assetGroupStatisticObj) !== null && _d !== void 0 ? _d : {};
                this.assetObjectObj = (_f = (_e = res.data) === null || _e === void 0 ? void 0 : _e.assetObjectObj) !== null && _f !== void 0 ? _f : {};
                this.answerObjs = (_h = (_g = res.data) === null || _g === void 0 ? void 0 : _g.answerObjs) !== null && _h !== void 0 ? _h : [];
                this.studentAnswerObj = (_k = (_j = res.data) === null || _j === void 0 ? void 0 : _j.studentAnswerObj) !== null && _k !== void 0 ? _k : {};
                this.answerObjs.forEach((a) => {
                    var _a, _b;
                    if (a.files) {
                        a.fileObjs = (_b = this.castJsonToObj((_a = a.files) !== null && _a !== void 0 ? _a : '')) !== null && _b !== void 0 ? _b : [];
                    }
                });
                // Sắp xếp danh sách câu trả lời, hiển thị câu trả lời đc accept nhiều nhất lên đầu
                this.sortAnswer();
                this.nextQuestionId = (_m = (_l = res.data) === null || _l === void 0 ? void 0 : _l.nextQuestionId) !== null && _m !== void 0 ? _m : 0;
                this.questionIds = (_p = (_o = res.data) === null || _o === void 0 ? void 0 : _o.questionIds) !== null && _p !== void 0 ? _p : [];
                this.previousQuestionId = (_r = (_q = res.data) === null || _q === void 0 ? void 0 : _q.previousQuestionId) !== null && _r !== void 0 ? _r : 0;
                this.isEndPage = (_t = (_s = res.data) === null || _s === void 0 ? void 0 : _s.isEndPage) !== null && _t !== void 0 ? _t : 0;
                this.isLoading = false;
            }
            else {
                this.commonService.snackError('Có lỗi khi xem chi tiết câu hỏi', '');
                this.isLoading = false;
            }
        }));
    }
    sortAnswer() {
        this.answerObjs.sort((a, b) => {
            var _a, _b;
            return ((_a = b.totalAccept) !== null && _a !== void 0 ? _a : 0) - ((_b = a.totalAccept) !== null && _b !== void 0 ? _b : 0);
        });
    }
    clickRelate(type) {
        this.subscriptions.add(this.teacherQuestionService.apiTeacherQuestionGetQuestionObjGet(type == 'next' ? this.nextQuestionId : this.previousQuestionId).subscribe((res) => {
            var _a, _b, _c, _d, _e, _f;
            if (res.success) {
                // Chỉ thay đổi 3 thông tin này
                this.curQuestionObj = (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.curQuestionObj) !== null && _b !== void 0 ? _b : {};
                this.nextQuestionId = (_d = (_c = res.data) === null || _c === void 0 ? void 0 : _c.nextQuestionId) !== null && _d !== void 0 ? _d : 0;
                this.previousQuestionId = (_f = (_e = res.data) === null || _e === void 0 ? void 0 : _e.previousQuestionId) !== null && _f !== void 0 ? _f : 0;
            }
            else {
                this.commonService.snackError('Có lỗi khi xem chi tiết câu hỏi', '');
                // this.isLoading = false;
            }
        }));
    }
    backClicked() {
        this._location.back();
    }
    deleteQuestion(questionId) {
        this.teacherQuestionService.apiTeacherQuestionDeleteObjGet(questionId).subscribe((res) => {
            if (res.success) {
                if (this.nextQuestionId) {
                    this.clickRelate('next');
                }
                else if (this.previousQuestionId && !this.nextQuestionId) {
                    this.clickRelate('prev');
                }
                else if (!this.previousQuestionId && !this.nextQuestionId) {
                    this.commonService.myNavigation('/admin/testbank/dashboard');
                }
                this.localStorageObjetct.removeCacheByValue('TeacherQuestion/GetAnswerObjs');
                this.commonService.snackSuccess('Xóa câu hỏi thành công', '');
            }
            else {
                this.commonService.snackError('Xóa câu hỏi không thành công', '');
            }
        });
    }
    ngOnInit() {
        this.commonService.translateMetaData({
            title: 'lang_cms_view_question_student_title',
            description: 'lang_cms_view_question_student_description',
            image: 'lang_cms_test_image',
        });
        this.getData();
        super.ngOnInit();
    }
}
ViewQuestionStudentComponent.ɵfac = function ViewQuestionStudentComponent_Factory(t) { return new (t || ViewQuestionStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_3__.LocalStorageObjetct), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auto_api_qa_api__WEBPACK_IMPORTED_MODULE_0__.TeacherQuestionService)); };
ViewQuestionStudentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ViewQuestionStudentComponent, selectors: [["app-teacher-view-question"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 12, consts: [[3, "isBackend", "totalQuestion", "studentAnswerObj", "curQuestionObj", "answerObjs", "assetGroupStatisticObj", "assetObjectObj", "isEndPage", "isLoading", "sendEvent"], ["buttonShowFormInput", "", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["nextBack", "", "id", "nextBack", 4, "ngIf"], ["answerInput", "", 3, "assetGroupId", "fetchNewData", "closeFormInputAnswer", 4, "ngIf"], ["buttonShowFormInput", "", 1, "btn", "btn-primary", 3, "click"], ["nextBack", "", "id", "nextBack"], ["id", "buttonPrev", "class", "btn", 3, "click", 4, "ngIf"], ["id", "buttonNext", "class", "btn", 3, "click", 4, "ngIf"], ["id", "buttonPrev", 1, "btn", 3, "click"], [1, "fas", "fa-angle-left", 2, "font-size", "18px"], ["id", "buttonNext", 1, "btn", 3, "click"], [1, "fas", "fa-angle-right", 2, "font-size", "18px"], ["answerInput", "", 3, "assetGroupId", "fetchNewData", "closeFormInputAnswer"]], template: function ViewQuestionStudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "azt-view-answer-question", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("sendEvent", function ViewQuestionStudentComponent_Template_azt_view_answer_question_sendEvent_0_listener($event) { return ctx.deleteQuestion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewQuestionStudentComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ViewQuestionStudentComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ViewQuestionStudentComponent_form_input_answer_teacher_3_Template, 1, 1, "form-input-answer-teacher", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isBackend", true)("totalQuestion", ctx.questionIds == null ? null : ctx.questionIds.length)("studentAnswerObj", ctx.studentAnswerObj)("curQuestionObj", ctx.curQuestionObj)("answerObjs", ctx.answerObjs)("assetGroupStatisticObj", ctx.assetGroupStatisticObj)("assetObjectObj", ctx.assetObjectObj)("isEndPage", ctx.isEndPage)("isLoading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isShowFormInputAnswer);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.previousQuestionId || ctx.nextQuestionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isShowFormInputAnswer);
    } }, directives: [_azota_ui_azt_view_question_qa_controller_component__WEBPACK_IMPORTED_MODULE_4__.AztViewAnswerQuestionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _form_input_answer_controller_component__WEBPACK_IMPORTED_MODULE_5__.FormInputAnswerTeacher], styles: [".block-list[_ngcontent-%COMP%] {\n  background: #ececec;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.14);\n}\n.block-list-bottom[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  border: none;\n  display: flex;\n  align-items: center;\n  color: #707070;\n  background: transparent;\n}\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%] {\n  text-transform: initial;\n  margin-left: 2px;\n}\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  text-transform: initial;\n}\n.block-else[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n.text-else[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.question-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.question-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.question-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9A9A9A;\n  margin-right: 10px;\n}\n.question-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n}\n.question-content[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.block-list-answer[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.answer-count[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n}\n.block-answer[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 15px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #d0d0d0;\n}\n.block-answer-left[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.count-view[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #dddddd;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 6px;\n}\n.count-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.true-answer[_ngcontent-%COMP%] {\n  color: #0ca74a;\n}\n.true-answer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.block-answer-right[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n.confirm[_ngcontent-%COMP%] {\n  padding: 6px 7px;\n  background: #e8e8e8;\n  border-radius: 5px;\n  font-size: 12px;\n}\n.btn-unconfirm[_ngcontent-%COMP%] {\n  color: #00A7D0;\n  background: transparent;\n  transition: all 0.5s;\n}\n.btn-unconfirm[_ngcontent-%COMP%]:hover {\n  color: #026680;\n  font-weight: bold;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  background: #169bd5;\n  color: #fff;\n  font-size: 13px;\n  transition: all 0.5s;\n  border-radius: 5px;\n  padding: 5px 7px;\n  padding-left: 15px;\n  padding-left: 20px;\n}\n.btn-confirm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 20px;\n}\n.btn-confirm[_ngcontent-%COMP%]:hover {\n  background: #0b6992;\n}\n.block-answer-bottom[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.time-ago[_ngcontent-%COMP%] {\n  color: #868686;\n  font-size: 10px;\n  margin-bottom: 0;\n}\n.btn-all-add[_ngcontent-%COMP%] {\n  color: #00a7d0;\n}\n.create-answer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.answer-upload[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.upload-file[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.upload-file-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.answer-editor[_ngcontent-%COMP%] {\n  min-height: 250px;\n}\n.answer-save[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 15px;\n}\n.btn-save[_ngcontent-%COMP%], .btn-cannel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 5px;\n  padding: 5px 25px;\n  transition: all 0.5s;\n}\n.btn-save[_ngcontent-%COMP%] {\n  border: none;\n  background: #169bd5;\n  margin-left: 10px;\n  color: #fff;\n  padding: 6px 25px;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: #066d99;\n}\n.btn-cannel[_ngcontent-%COMP%] {\n  border: 1px solid #797979;\n  color: #797979;\n}\n.btn-cannel[_ngcontent-%COMP%]:hover {\n  background: #eee;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  background: #e0e0e0 !important;\n}\n.file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  vertical-align: super;\n}\n.v-dragndrop[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: rgba(27, 171, 161, 0.05);\n  border: 1px dashed #1baba1;\n}\n.v-dragndrop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.dz-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #007bff;\n}\n.font-size-1[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.fileinfo[_ngcontent-%COMP%] {\n  width: 200px;\n  border: 1px dashed #1baba1;\n  background: aliceblue;\n}\n.fileinfo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.fileinfo[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.fileinfo[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  background: #f71414;\n  color: white;\n  padding: 2px 20px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 5px;\n}\n.is-dragover[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%] {\n  background-color: #c8e6c9;\n}\n#nextBack[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  margin-top: -18px;\n  width: 20px;\n  right: -26px;\n  color: #565656;\n  transition: all 0.5s;\n}\n#nextBack[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n#nextBack[_ngcontent-%COMP%]   button#buttonPrev[_ngcontent-%COMP%] {\n  left: -26px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUE4QkY7QUE1QkE7RUFDRSxlQUFBO0FBK0JGO0FBN0JBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUFnQ0Y7QUE5QkE7RUFDRSxZQUFBO0FBaUNGO0FBL0JBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBa0NGO0FBaENBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBbUNGO0FBakNBO0VBQ0UseUJBQUE7QUFvQ0Y7QUFqQ0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFvQ0o7QUFuQ0k7RUFDRSxXQUFBO0FBcUNOO0FBbkNJO0VBQ0UsV0FBQTtBQXFDTiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jay1saXN0IHtcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoMCAwIDAgLyAxNCUpO1xuXG4gICYtYm90dG9tIHtcbiAgICBtYXJnaW46IDEwcHggMDtcblxuICAgIC5idG4tYWRkIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgJi10ZXh0IHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5idXR0b257XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG59XG4uYmxvY2stZWxzZXtcbiAgaGVpZ2h0OiA5MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnRleHQtZWxzZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnF1ZXN0aW9uLXRpdGxle1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnF1ZXN0aW9uLWluZm97XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucXVlc3Rpb24tdGV4dHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzlBOUE5QTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBzcGFue1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG59XG4ucXVlc3Rpb24tY29udGVudHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5ibG9jay1saXN0LWFuc3dlcntcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5hbnN3ZXItY291bnR7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzMzM7XG59XG4uYmxvY2stYW5zd2Vye1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7XG59XG4uYmxvY2stYW5zd2VyLWxlZnR7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb3VudC12aWV3e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA2cHg7XG4gIHNwYW57XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG4udHJ1ZS1hbnN3ZXJ7XG4gIGNvbG9yOiAjMGNhNzRhO1xuICBtYXQtaWNvbntcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG4uYmxvY2stYW5zd2VyLXJpZ2h0e1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLmNvbmZpcm17XG4gIHBhZGRpbmc6IDZweCA3cHg7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJ0bi11bmNvbmZpcm17XG4gIGNvbG9yOiAjMDBBN0QwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgJjpob3ZlcntcbiAgICBjb2xvcjogIzAyNjY4MDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuLmJ0bi1jb25maXJte1xuICBiYWNrZ3JvdW5kOiAjMTY5YmQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBpe1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbi5idG4tY29uZmlybTpob3ZlcntcbiAgYmFja2dyb3VuZDogIzBiNjk5Mjtcbn1cbi5ibG9jay1hbnN3ZXItYm90dG9te1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzZXItaW5mb3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aW1lLWFnb3tcbiAgY29sb3I6ICM4Njg2ODY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcblxufVxuLmJ0bi1hbGwtYWRke1xuICBjb2xvcjogIzAwYTdkMDtcbn1cbi5jcmVhdGUtYW5zd2Vye1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmFuc3dlci11cGxvYWR7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4udXBsb2FkLWZpbGV7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVwbG9hZC1maWxlLXRleHR7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5hbnN3ZXItZWRpdG9ye1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbn1cbi5hbnN3ZXItc2F2ZXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5idG4tc2F2ZSxcbi5idG4tY2FubmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDVweCAyNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5idG4tc2F2ZSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMxNjliZDU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNnB4IDI1cHg7XG59XG5cbi5idG4tc2F2ZTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQ6ICMwNjZkOTk7XG59XG5cbi5idG4tY2FubmVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzk3OTc5O1xuICAgIGNvbG9yOiAjNzk3OTc5O1xufVxuXG4uYnRuLWNhbm5lbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuLmJ0bi1zYXZlOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwICFpbXBvcnRhbnQ7XG59XG4uZmlsZSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xufVxuLnYtZHJhZ25kcm9wPmRpdiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjcsMTcxLDE2MSwuMDUpO1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzFiYWJhMTtcbn1cbi52LWRyYWduZHJvcCBwIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5maWxlLWlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5kei1jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiMwMDdiZmY7XG59XG4uZm9udC1zaXplLTEge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZmlsZWluZm8ge1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjMWJhYmExO1xuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG59XG4uZmlsZWluZm8gLnRpdGxlIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5maWxlaW5mbyAuZmlsZS1uYW1lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmlsZWluZm8gLmJ0bi1yZW1vdmUge1xuICBiYWNrZ3JvdW5kOiAjZjcxNDE0O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmlzLWRyYWdvdmVyIC5yb3VuZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTZjOTtcbn1cbiNuZXh0QmFja3tcbiAgYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTE4cHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgcmlnaHQ6IC0yNnB4O1xuICAgIGNvbG9yOiByZ2IoODYsIDg2LCA4Nik7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAmOmhvdmVye1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICAgICYjYnV0dG9uUHJldntcbiAgICAgIGxlZnQ6IC0yNnB4O1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_teacher_qa_module_module_ts.js.map