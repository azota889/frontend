"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_wsuper_admin_module_module_ts"],{

/***/ 24765:
/*!*****************************************************************!*\
  !*** ./src/app/core/interfaces/common/super_admin_interface.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeFeatureParse": () => (/* binding */ NoticeFeatureParse)
/* harmony export */ });
class NoticeFeatureParse {
    constructor() {
        this.showUpdate = false;
    }
}


/***/ }),

/***/ 67641:
/*!*****************************************************************************!*\
  !*** ./src/app/wsuper_admin/add_new_feature_notice/controller.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewFeatureNoticeComponent": () => (/* binding */ AddNewFeatureNoticeComponent),
/* harmony export */   "DeleteFeatureNoticeDialog": () => (/* binding */ DeleteFeatureNoticeDialog)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_interfaces_common_super_admin_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/interfaces/common/super_admin_interface */ 24765);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 9224);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/text-field */ 74533);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);

















function AddNewFeatureNoticeComponent_azt_loading_effect_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "azt-loading-effect");
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function AddNewFeatureNoticeComponent_ng_template_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", 14)(3, "div", 6)(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "textarea", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 18)(8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddNewFeatureNoticeComponent_ng_template_2_ng_container_11_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.addNotice()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "L\u01B0u th\u00F4ng b\u00E1o");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r3.addNewNoticeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r3.addNewNoticeForm.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disalbed", ctx_r3.addNewNoticeForm.invalid);
} }
function AddNewFeatureNoticeComponent_ng_template_2_div_12_mat_card_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 31);
} if (rf & 2) {
    const notice_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", notice_r11.description, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function AddNewFeatureNoticeComponent_ng_template_2_div_12_mat_card_3_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "textarea", 32, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notice_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("formControlName", "notice", notice_r11.id, "");
} }
function AddNewFeatureNoticeComponent_ng_template_2_div_12_mat_card_3_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddNewFeatureNoticeComponent_ng_template_2_div_12_mat_card_3_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const notice_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.saveNotice(notice_r11.id || -1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "L\u01B0u");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notice_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r15.form.controls["notice" + notice_r11.id].invalid);
} }
function AddNewFeatureNoticeComponent_ng_template_2_div_12_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 22)(1, "mat-card-content", 23)(2, "div", 24)(3, "div", 25)(4, "p", 26)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 27)(8, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddNewFeatureNoticeComponent_ng_template_2_div_12_mat_card_3_Template_a_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const notice_r11 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.showUpdateNotice(notice_r11)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddNewFeatureNoticeComponent_ng_template_2_div_12_mat_card_3_Template_a_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const notice_r11 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.openDeleteDialog(notice_r11)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "X\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AddNewFeatureNoticeComponent_ng_template_2_div_12_mat_card_3_div_13_Template, 1, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AddNewFeatureNoticeComponent_ng_template_2_div_12_mat_card_3_div_14_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AddNewFeatureNoticeComponent_ng_template_2_div_12_mat_card_3_button_15_Template, 2, 1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notice_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]("Th\u00F4ng b\u00E1o " + notice_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", notice_r11.showUpdate ? "H\u1EE7y s\u1EEDa" : "S\u1EEDa", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !notice_r11.showUpdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", notice_r11.showUpdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", notice_r11.showUpdate);
} }
function AddNewFeatureNoticeComponent_ng_template_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "div", 5)(2, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AddNewFeatureNoticeComponent_ng_template_2_div_12_mat_card_3_Template, 16, 5, "mat-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.noticeObjs);
} }
function AddNewFeatureNoticeComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ch\u01B0a c\u00F3 th\u00F4ng b\u00E1o n\u00E0o. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddNewFeatureNoticeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "p", 8)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Danh s\u00E1ch th\u00F4ng b\u00E1o");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 9)(9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddNewFeatureNoticeComponent_ng_template_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.showAddNoticeForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AddNewFeatureNoticeComponent_ng_template_2_ng_container_11_Template, 10, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AddNewFeatureNoticeComponent_ng_template_2_div_12_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AddNewFeatureNoticeComponent_ng_template_2_ng_template_13_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.isShowAddNoticeForm ? "H\u1EE7y th\u00EAm m\u1EDBi" : "Th\u00EAm m\u1EDBi");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isShowAddNoticeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.noticeObjs.length > 0)("ngIfElse", _r5);
} }
const _c1 = ".link__color[_ngcontent-%COMP%] {\n  color: #0eafc0 !important;\n}\n\n.link__hover[_ngcontent-%COMP%]:hover {\n  color: #0a8f9e !important;\n}";
class AddNewFeatureNoticeComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(commonService, fb, dialog, globalNotificationService) {
        super(commonService);
        this.commonService = commonService;
        this.fb = fb;
        this.dialog = dialog;
        this.globalNotificationService = globalNotificationService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({});
        this.addNewNoticeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({});
        this.noticeObjs = [];
        this.isShowAddNoticeForm = false;
    }
    autoResizeTextArena(id) {
        if (id) {
            var element = document.getElementById('update_new_notice_' + id);
            if (element) {
                setTimeout(() => {
                    element.style.cssText = 'height:auto;';
                    element.style.cssText = 'height:' + (element.scrollHeight + 30) + 'px';
                }, 0);
            }
        }
        else {
            var el = document.getElementById('add_new_notice');
            if (el) {
                setTimeout(() => {
                    el.style.cssText = 'height:auto;';
                    el.style.cssText = 'height:' + (el.scrollHeight + 30) + 'px';
                }, 0);
            }
        }
    }
    showAddNoticeForm() {
        this.isShowAddNoticeForm = !this.isShowAddNoticeForm;
    }
    showUpdateNotice(notice) {
        notice.showUpdate = !notice.showUpdate;
    }
    openDeleteDialog(notice) {
        const dialogRef = this.dialog.open(DeleteFeatureNoticeDialog, { width: '500px', data: notice });
        dialogRef.afterClosed().subscribe(result => {
            var _a;
            if (result) {
                this.deleteNotice((_a = notice.id) !== null && _a !== void 0 ? _a : -1);
            }
        });
    }
    // callApi
    deleteNotice(idNotice) {
        this.initStatusObj();
        this.subscriptions.add(this.globalNotificationService.apiGlobalnotificationDeleteObjGet(idNotice).subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.getData();
            }
            else {
                this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
            }
        }));
    }
    saveNotice(idNotice) {
        var formObj = this.commonService.getFormObj(this.form);
        if (this.form.valid) {
            this.initStatusObj();
            let dataCallApi = {
                id: idNotice,
                description: formObj['notice' + idNotice]
            };
            this.subscriptions.add(this.globalNotificationService.apiGlobalnotificationUpdateObjPost(dataCallApi).subscribe((response) => {
                var _a;
                if (response.success == 1) {
                    this.getData();
                }
                else {
                    this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                }
            }));
        }
        else {
            this.showErrorSnack('Không được để trống nội dung thông báo!');
        }
    }
    addNotice() {
        var formObj = this.commonService.getFormObj(this.addNewNoticeForm);
        if (this.addNewNoticeForm.valid) {
            this.initStatusObj();
            let dataCallApi = {
                description: formObj.addNoticeForm
            };
            this.subscriptions.add(this.globalNotificationService.apiGlobalnotificationSaveObjPost(dataCallApi).subscribe((response) => {
                var _a;
                if (response.success == 1) {
                    this.getData();
                    this.isShowAddNoticeForm = false;
                    this.addNewNoticeForm.controls.addNoticeForm.setValue('');
                }
                else {
                    this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                }
            }));
        }
        else {
            this.showErrorSnack('Yêu cầu nhập nội dung cho thông báo mới!');
        }
    }
    getData() {
        this.initStatusObj();
        this.subscriptions.add(this.globalNotificationService.apiGlobalnotificationGetObjsGet().subscribe((response) => {
            var _a, _b, _c, _d;
            if (response.success == 1) {
                if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) {
                    var fbKey = {};
                    let noticeObjsCast = this.commonService.castJsonToClassObjs(src_app_core_interfaces_common_super_admin_interface__WEBPACK_IMPORTED_MODULE_0__.NoticeFeatureParse, JSON.stringify((_b = response.data.objs) !== null && _b !== void 0 ? _b : ''));
                    this.noticeObjs = noticeObjsCast !== null && noticeObjsCast !== void 0 ? noticeObjsCast : [];
                    for (let i = 0; i < this.noticeObjs.length; i++) {
                        var keyString = `notice${this.noticeObjs[i].id}`;
                        fbKey[keyString] = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl((_c = this.noticeObjs[i].description) !== null && _c !== void 0 ? _c : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
                    }
                    this.form = this.fb.group(fbKey);
                }
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_d = response.message) !== null && _d !== void 0 ? _d : '', true);
            }
        }));
    }
    ngOnInit() {
        this.addNewNoticeForm = this.fb.group({
            addNoticeForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
        });
        this.getData();
        this.commonService.translateMetaData({
            title: 'lang_cms_auth_add_new_feature_notice',
            description: 'lang_cms_auth_add_new_feature_notice',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
}
AddNewFeatureNoticeComponent.ɵfac = function AddNewFeatureNoticeComponent_Factory(t) { return new (t || AddNewFeatureNoticeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.GlobalnotificationService)); };
AddNewFeatureNoticeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AddNewFeatureNoticeComponent, selectors: [["app-new-feature-notice"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 4, consts: [[3, "headerTitle", "back_link"], [4, "ngIf", "ngIfElse"], ["doneLoad", ""], [1, "container-fluid", "component-wrap", "centerBoth", "hasBg", "mt-3"], [1, "card"], [1, "card-body"], [1, "row", "justify-content-between"], [1, "col-md-3", "align-self-center"], [1, "h4", "mb-0"], [1, "col-md-3"], ["mat-raised-button", "", "color", "primary", 2, "float", "right", 3, "click"], [4, "ngIf"], ["class", "card mt-1", 4, "ngIf", "ngIfElse"], ["NoNoticeYet", ""], [3, "formGroup"], [1, "col-md-10", "align-self-center"], ["cdkTextareaAutosize", "", "cdkAutosizeMinRows", "3", "formControlName", "addNoticeForm", "placeholder", "Nh\u1EADp n\u1ED9i dung v\u00E0o \u0111\u00E2y", 1, "w-100", 3, "ngClass"], ["autosize", "cdkTextareaAutosize"], [1, "col-md-2"], ["mat-raised-button", "", "color", "primary", 2, "float", "right", 3, "disalbed", "click"], [1, "card", "mt-1"], ["class", "mb-1", 4, "ngFor", "ngForOf"], [1, "mb-1"], [2, "overflow-y", "auto"], [1, "row", "pl-0", "pr-0", "ml-0", "mr-0", "justify-content-between"], [1, "col-6", "pl-0", "align-self-center"], [1, "h5"], [1, "col-6", "pr-0", "align-self-center", "text-right"], [1, "link__color", "link__hover", 3, "click"], [3, "innerHTML", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "style", "float: right;", 3, "disabled", "click", 4, "ngIf"], [3, "innerHTML"], ["cdkTextareaAutosize", "", "cdkAutosizeMinRows", "3", 1, "w-100", 3, "formControlName"], ["mat-raised-button", "", "color", "primary", 2, "float", "right", 3, "disabled", "click"], [1, "alert", "alert-danger"]], template: function AddNewFeatureNoticeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddNewFeatureNoticeComponent_azt_loading_effect_1_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddNewFeatureNoticeComponent_ng_template_2_Template, 15, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headerTitle", "Qu\u1EA3n l\u00FD th\u00F4ng b\u00E1o t\u00EDnh n\u0103ng m\u1EDBi")("back_link", "/admin/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statusObj.loading == true)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__.CdkTextareaAutosize, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_4__.AztLoadingEffectComponent, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_5__.HeaderBackendComponent], styles: [_c1] });
class DeleteFeatureNoticeDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close(false); // đóng dialog
    }
    confirmClick() {
        this.dialogRef.close(true); // đóng dialog và xóa
    }
}
DeleteFeatureNoticeDialog.ɵfac = function DeleteFeatureNoticeDialog_Factory(t) { return new (t || DeleteFeatureNoticeDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA)); };
DeleteFeatureNoticeDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DeleteFeatureNoticeDialog, selectors: [["delete-feature-notice-dialog"]], decls: 10, vars: 1, consts: [["mat-dialog-title", "", 1, "text-center"], [1, "h5"], [1, "alert", "alert-danger"], ["align", "end"], ["mat-raised-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function DeleteFeatureNoticeDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "X\u00F3a th\u00F4ng b\u00E1o T\u00EDnh n\u0103ng m\u1EDBi");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-dialog-actions", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeleteFeatureNoticeDialog_Template_button_click_6_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u0110\u00F3ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeleteFeatureNoticeDialog_Template_button_click_8_listener() { return ctx.confirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "X\u00E1c nh\u1EADn");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Ch\u1EAFc ch\u1EAFn mu\u1ED1n x\u00F3a \"Th\u00F4ng b\u00E1o ", ctx.data.id, "\"?\n");
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions], styles: [_c1] });


/***/ }),

/***/ 74492:
/*!*****************************************************************!*\
  !*** ./src/app/wsuper_admin/add_school/controller.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSchoolComponent": () => (/* binding */ AddSchoolComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 22313);
/* harmony import */ var src_app_core_auto_api_common_api_api_schoolInfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api/api/schoolInfo.service */ 85031);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 1729);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 67322);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 74107);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ 53251);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);

















function AddSchoolComponent_azt_loading_effect_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "azt-loading-effect");
} }
function AddSchoolComponent_div_3_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", location_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", location_r26.name, " ");
} }
function AddSchoolComponent_div_3_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_choose_location"), ". ");
} }
function AddSchoolComponent_div_3_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_enter_name_district"), ". ");
} }
function AddSchoolComponent_div_3_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", location_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", location_r27.name, " ");
} }
function AddSchoolComponent_div_3_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_choose_location"), ". ");
} }
function AddSchoolComponent_div_3_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", department_r28.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", department_r28.name, " ");
} }
function AddSchoolComponent_div_3_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_choose_department"), ". ");
} }
function AddSchoolComponent_div_3_mat_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", level_r29.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", level_r29.name, " ");
} }
function AddSchoolComponent_div_3_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_select_level"), ". ");
} }
function AddSchoolComponent_div_3_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_enter_name_school"), ". ");
} }
function AddSchoolComponent_div_3_mat_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", location_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", location_r30.name, " ");
} }
function AddSchoolComponent_div_3_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_choose_location"), ". ");
} }
function AddSchoolComponent_div_3_mat_option_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", department_r31.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", department_r31.name, " ");
} }
function AddSchoolComponent_div_3_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_choose_department"), ". ");
} }
function AddSchoolComponent_div_3_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_enter_name_district"), ". ");
} }
function AddSchoolComponent_div_3_mat_option_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", location_r32.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", location_r32.name, " ");
} }
function AddSchoolComponent_div_3_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_choose_location"), ". ");
} }
function AddSchoolComponent_div_3_mat_option_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", department_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", department_r33.name, " ");
} }
function AddSchoolComponent_div_3_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_choose_department"), ". ");
} }
function AddSchoolComponent_div_3_mat_option_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", level_r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", level_r34.name, " ");
} }
function AddSchoolComponent_div_3_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_select_level"), ". ");
} }
function AddSchoolComponent_div_3_mat_option_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const school_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", school_r35.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", school_r35.name, " ");
} }
function AddSchoolComponent_div_3_div_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_choose_school"), ". ");
} }
function AddSchoolComponent_div_3_div_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "lang_wsuper_admin_add_school_validate_enter_name_school"), ". ");
} }
function AddSchoolComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "mat-tab-group", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectedIndexChange", function AddSchoolComponent_div_3_Template_mat_tab_group_selectedIndexChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r36.selectedIndexChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "form", 8)(7, "div", 9)(8, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-form-field", 11)(12, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, AddSchoolComponent_div_3_mat_option_14_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, AddSchoolComponent_div_3_div_15_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 9)(17, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, AddSchoolComponent_div_3_div_23_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "form", 8)(27, "div", 9)(28, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-form-field", 11)(32, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddSchoolComponent_div_3_Template_mat_select_selectionChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r38.selectLocation($event.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, AddSchoolComponent_div_3_mat_option_34_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, AddSchoolComponent_div_3_div_35_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 9)(37, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-form-field", 11)(41, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function AddSchoolComponent_div_3_Template_mat_select_valueChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r39.department_select = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, AddSchoolComponent_div_3_mat_option_43_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, AddSchoolComponent_div_3_div_44_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 9)(46, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](48, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "mat-form-field", 11)(50, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, AddSchoolComponent_div_3_mat_option_52_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, AddSchoolComponent_div_3_div_53_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 9)(55, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](57, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](59, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](60, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, AddSchoolComponent_div_3_div_61_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](63, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "form", 8)(65, "div", 9)(66, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](68, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "mat-form-field", 11)(70, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddSchoolComponent_div_3_Template_mat_select_selectionChange_70_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r40.selectLocation($event.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](71, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, AddSchoolComponent_div_3_mat_option_72_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, AddSchoolComponent_div_3_div_73_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 9)(75, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](77, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "mat-form-field", 11)(79, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function AddSchoolComponent_div_3_Template_mat_select_valueChange_79_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r41.department_select = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](80, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](81, AddSchoolComponent_div_3_mat_option_81_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](82, AddSchoolComponent_div_3_div_82_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div", 9)(84, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](86, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](88, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](89, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](90, AddSchoolComponent_div_3_div_90_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](92, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "form", 8)(94, "div", 9)(95, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](97, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "mat-form-field", 11)(99, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddSchoolComponent_div_3_Template_mat_select_selectionChange_99_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r42.selectLocation($event.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](100, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](101, AddSchoolComponent_div_3_mat_option_101_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](102, AddSchoolComponent_div_3_div_102_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "div", 9)(104, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](106, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "mat-form-field", 11)(108, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function AddSchoolComponent_div_3_Template_mat_select_valueChange_108_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r43.department_select = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](109, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](110, AddSchoolComponent_div_3_mat_option_110_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](111, AddSchoolComponent_div_3_div_111_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "div", 9)(113, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](115, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "mat-form-field", 11)(117, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function AddSchoolComponent_div_3_Template_mat_select_valueChange_117_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r44.level_select = $event); })("selectionChange", function AddSchoolComponent_div_3_Template_mat_select_selectionChange_117_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r45.selectLevel($event.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](118, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](119, AddSchoolComponent_div_3_mat_option_119_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](120, AddSchoolComponent_div_3_div_120_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "div", 9)(122, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](124, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "mat-form-field", 11)(126, "mat-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function AddSchoolComponent_div_3_Template_mat_select_valueChange_126_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r46.school_select = $event); })("selectionChange", function AddSchoolComponent_div_3_Template_mat_select_selectionChange_126_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r47.selectSchool($event.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](127, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](128, AddSchoolComponent_div_3_mat_option_128_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](129, AddSchoolComponent_div_3_div_129_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "div", 9)(131, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](132);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](133, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](135, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](136, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](137, AddSchoolComponent_div_3_div_137_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "div", 25)(139, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSchoolComponent_div_3_Template_button_click_139_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r48.removeDataOld()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140, "reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSchoolComponent_div_3_Template_button_click_141_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r49.SaveDataApi()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](143, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedIndex", ctx_r1.selected.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 68, "lang_wsuper_admin_add_school_add_district"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 70, "lang_wsuper_admin_add_school_select_location"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 72, "lang_wsuper_admin_add_school_choose_location"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.locations);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["LocationId"].invalid && (ctx_r1.form.controls["LocationId"].dirty || ctx_r1.form.controls["LocationId"].touched || ctx_r1.checkValidateLocationId == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 74, "lang_wsuper_admin_add_school_add_name_district"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 76, "lang_wsuper_admin_add_school_enter_name_district"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["NameDistrict"].invalid && (ctx_r1.form.controls["NameDistrict"].dirty || ctx_r1.form.controls["NameDistrict"].touched || ctx_r1.checkValidateNameDistrict == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 78, "lang_wsuper_admin_add_school_add_school"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 80, "lang_wsuper_admin_add_school_select_location"), "h");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 82, "lang_wsuper_admin_add_school_choose_location"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.locations);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["LocationId"].invalid && (ctx_r1.form.controls["LocationId"].dirty || ctx_r1.form.controls["LocationId"].touched || ctx_r1.checkValidateLocationId == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 84, "lang_wsuper_admin_add_school_choose_department"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](42, 86, "lang_wsuper_admin_add_school_choose_department"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.department_select);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.departments);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["DistrictId"].invalid && (ctx_r1.form.controls["DistrictId"].dirty || ctx_r1.form.controls["DistrictId"].touched || ctx_r1.checkValidateDistrictId == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](48, 88, "lang_wsuper_admin_add_school_select_level"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](51, 90, "lang_wsuper_admin_add_school_select_level"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.levels);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["LevelId"].invalid && (ctx_r1.form.controls["LevelId"].dirty || ctx_r1.form.controls["LevelId"].touched || ctx_r1.checkValidateLevelId == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](57, 92, "lang_wsuper_admin_add_school_add_name_school"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](60, 94, "lang_wsuper_admin_add_school_enter_school"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["NameSchool"].invalid && (ctx_r1.form.controls["NameSchool"].dirty || ctx_r1.form.controls["NameSchool"].touched || ctx_r1.checkValidateNameSchool == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](63, 96, "lang_wsuper_admin_add_school_edit_district"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](68, 98, "lang_wsuper_admin_add_school_select_location"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](71, 100, "lang_wsuper_admin_add_school_choose_location"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.locations);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["LocationId"].invalid && (ctx_r1.form.controls["LocationId"].dirty || ctx_r1.form.controls["LocationId"].touched || ctx_r1.checkValidateLocationId == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](77, 102, "lang_wsuper_admin_add_school_choose_department"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](80, 104, "lang_wsuper_admin_add_school_choose_department"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.department_select);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.departments);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["DistrictId"].invalid && (ctx_r1.form.controls["DistrictId"].dirty || ctx_r1.form.controls["DistrictId"].touched || ctx_r1.checkValidateDistrictId == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](86, 106, "lang_wsuper_admin_add_school_edit_name_district"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](89, 108, "lang_wsuper_admin_add_school_enter_name_district"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["NameDistrict"].invalid && (ctx_r1.form.controls["NameDistrict"].dirty || ctx_r1.form.controls["NameDistrict"].touched || ctx_r1.checkValidateNameDistrict == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](92, 110, "lang_wsuper_admin_add_school_edit_school"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](97, 112, "lang_wsuper_admin_add_school_select_location"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](100, 114, "lang_wsuper_admin_add_school_choose_location"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.locations);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["LocationId"].invalid && (ctx_r1.form.controls["LocationId"].dirty || ctx_r1.form.controls["LocationId"].touched || ctx_r1.checkValidateLocationId == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](106, 116, "lang_wsuper_admin_add_school_choose_department"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](109, 118, "lang_wsuper_admin_add_school_choose_department"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.department_select);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.departments);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["DistrictId"].invalid && (ctx_r1.form.controls["DistrictId"].dirty || ctx_r1.form.controls["DistrictId"].touched || ctx_r1.checkValidateDistrictId == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](115, 120, "lang_wsuper_admin_add_school_select_level"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](118, 122, "lang_wsuper_admin_add_school_select_level"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.level_select);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.levels);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["LevelId"].invalid && (ctx_r1.form.controls["LevelId"].dirty || ctx_r1.form.controls["LevelId"].touched || ctx_r1.checkValidateLevelId == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](124, 124, "lang_wsuper_admin_add_school_choose_school"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](127, 126, "lang_wsuper_admin_add_school_choose_school"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.school_select);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.schools);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["SchoolId"].invalid && (ctx_r1.form.controls["SchoolId"].dirty || ctx_r1.form.controls["SchoolId"].touched || ctx_r1.checkValidateSchoolId == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](133, 128, "lang_wsuper_admin_add_school_edit_name_school"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](136, 130, "lang_wsuper_admin_add_school_enter_school"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["NameSchool"].invalid && (ctx_r1.form.controls["NameSchool"].dirty || ctx_r1.form.controls["NameSchool"].touched || ctx_r1.checkValidateNameSchool == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](143, 132, "lang_buttom_save"));
} }
class AddSchoolComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, dom, sanitizer, schoolInfoService, formBuilder, baseApiService, schoolService) {
        super(commonService);
        this.commonService = commonService;
        this.dom = dom;
        this.sanitizer = sanitizer;
        this.schoolInfoService = schoolInfoService;
        this.formBuilder = formBuilder;
        this.baseApiService = baseApiService;
        this.schoolService = schoolService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormGroup({});
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl(0);
        this.loading = false;
        this.checkValidateNameDistrict = true;
        this.checkValidateLevelId = true;
        this.checkValidateNameSchool = true;
        this.checkValidateLocationId = true;
        this.checkValidateDistrictId = true;
        this.checkValidateSchoolId = true;
    }
    initData() {
        this.GetProvinces();
        this.GetTypeSchool();
    }
    GetTypeSchool() {
        this.schoolInfoService.apiSchoolInfoGetTypeSchoolGet()
            .subscribe((result) => {
            var _a;
            if (result) {
                this.levels = (_a = result.data) === null || _a === void 0 ? void 0 : _a.objs;
            }
        });
    }
    GetProvinces() {
        this.schoolInfoService.apiSchoolInfoGetProvincesGet()
            .subscribe((result) => {
            var _a;
            if (result) {
                this.locations = (_a = result.data) === null || _a === void 0 ? void 0 : _a.objs;
                this.locations = this.sortNameLocations(this.locations);
            }
        });
    }
    sortNameLocations(arr) {
        arr === null || arr === void 0 ? void 0 : arr.sort((a, b) => { var _a, _b, _c, _d; return (_d = (_a = a.name) === null || _a === void 0 ? void 0 : _a.trim().localeCompare((_c = (_b = b.name) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : '')) !== null && _d !== void 0 ? _d : 0; });
        return arr !== null && arr !== void 0 ? arr : [];
    }
    sortNameSchool(arr) {
        arr === null || arr === void 0 ? void 0 : arr.sort((a, b) => { var _a, _b, _c, _d; return (_d = (_a = a.name) === null || _a === void 0 ? void 0 : _a.trim().localeCompare((_c = (_b = b.name) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : '')) !== null && _d !== void 0 ? _d : 0; });
        return arr !== null && arr !== void 0 ? arr : [];
    }
    sortNameDistrict(arr) {
        arr === null || arr === void 0 ? void 0 : arr.sort((a, b) => { var _a, _b, _c, _d; return (_d = (_a = a.name) === null || _a === void 0 ? void 0 : _a.trim().localeCompare((_c = (_b = b.name) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : '')) !== null && _d !== void 0 ? _d : 0; });
        return arr !== null && arr !== void 0 ? arr : [];
    }
    AddSchool() {
        this.loading = true;
        var NameSchool = this.form.value.NameSchool == '' ? {} : { names: this.form.value.NameSchool.split('\n') };
        this.schoolService.apiSchoolAddSchoolPost(NameSchool, this.form.value.LevelId, this.form.value.LocationId, this.form.value.DistrictId).subscribe((response) => {
            if (response.success == 1) {
                this.commonService.snackSuccess('Thêm trường thành công.', '');
                this.removeDataOld();
                this.loading = false;
            }
            else {
                if (this.form.value.LevelId == '' || this.form.value.DistrictId == '' || this.form.value.LocationId == '' || this.form.value.NameSchool == '') {
                    this.checkValidateLocationId = false;
                    this.checkValidateDistrictId = false;
                    this.checkValidateLevelId = false;
                    this.checkValidateNameSchool = false;
                }
                else {
                    this.commonService.snackError('Lỗi: Thêm trường không thành công.', 'Đóng');
                }
                this.loading = false;
            }
        });
    }
    EditSchool() {
        this.loading = true;
        this.schoolService.apiSchoolEditSchoolGet(this.school_select, this.form.value.NameSchool).subscribe((response) => {
            if (response.success == 1) {
                this.commonService.snackSuccess('Sửa trường thành công.', '');
                this.removeDataOld();
                this.loading = false;
            }
            else {
                if (this.form.value.LocationId == '' || this.form.value.DistrictId == '' || this.form.value.LevelId == '' || this.form.value.NameSchool == '' || this.form.value.SchoolId == '') {
                    this.checkValidateLocationId = false;
                    this.checkValidateDistrictId = false;
                    this.checkValidateLevelId = false;
                    this.checkValidateNameSchool = false;
                    this.checkValidateSchoolId = false;
                }
                else {
                    this.commonService.snackError('Lỗi: Sửa trường không thành công.', 'Đóng');
                }
                this.loading = false;
            }
        });
    }
    selectSchool(id) {
        this.school_select = id;
    }
    AddDistrict() {
        var NameDistrict = this.form.value.NameDistrict == '' ? {} : { names: this.form.value.NameDistrict.split('\n') };
        this.loading = true;
        this.schoolService.apiSchoolAddDistrictPost(NameDistrict, this.form.value.LocationId).subscribe((response) => {
            if (response.success == 1) {
                this.commonService.snackSuccess('Thêm huyện thành công.', '');
                this.loading = false;
                this.removeDataOld();
            }
            else {
                if (this.form.value.LocationId == '' || this.form.value.NameDistrict == '') {
                    this.checkValidateNameDistrict = false;
                    this.checkValidateLocationId = false;
                }
                else {
                    this.commonService.snackError('Lỗi: Thêm huyện không thành công.', 'Đóng');
                }
                this.loading = false;
            }
        });
    }
    EditDistrict() {
        this.loading = true;
        this.schoolService.apiSchoolEditDistrictGet(this.department_select, this.form.value.NameDistrict).subscribe((response) => {
            if (response.success == 1) {
                this.removeDataOld();
                this.commonService.snackSuccess('Sửa huyện thành công.', '');
                this.loading = false;
            }
            else {
                if (this.form.value.LocationId == '' || this.form.value.NameDistrict == '' || this.form.value.DistrictId == '') {
                    this.checkValidateNameDistrict = false;
                    this.checkValidateLocationId = false;
                    this.checkValidateDistrictId = false;
                }
                else {
                    this.commonService.snackError('Lỗi: Sửa huyện không thành công.', 'Đóng');
                }
                this.loading = false;
            }
        });
    }
    selectDepartment(id) {
        this.schools = [];
        this.school_select = -1;
        this.department_select = id;
        // this.getListSchool();
    }
    selectLevel(id) {
        this.schools = [];
        this.school_select = -1;
        this.level_select = id;
        this.getListSchool();
    }
    getListSchool(action = () => { }) {
        if (this.department_select != -1 && this.level_select) {
            this.schoolInfoService.apiSchoolInfoGetSchoolsByDistrictGet(this.department_select, this.level_select)
                .subscribe((result) => {
                var _a, _b;
                if (result) {
                    this.schools = (_a = result.data) === null || _a === void 0 ? void 0 : _a.objs;
                    this.schools = this.sortNameSchool(this.schools);
                    (_b = this.schools) === null || _b === void 0 ? void 0 : _b.push({
                        id: -1,
                        name: 'Khác',
                        districtId: this.department_select,
                        typeId: this.level_select
                    });
                    action();
                }
            });
        }
    }
    selectLocation(id) {
        this.location_select = id;
        this.department_select = -1;
        this.departments = [];
        this.GetDistrictsByProvince();
    }
    GetDistrictsByProvince(action = () => { }) {
        this.schoolInfoService.apiSchoolInfoGetDistrictsByProvinceGet(this.location_select)
            .subscribe((result) => {
            var _a;
            if (result) {
                this.departments = (_a = result.data) === null || _a === void 0 ? void 0 : _a.objs;
                this.departments = this.sortNameDistrict(this.departments);
                action();
            }
        });
    }
    removeDataOld() {
        this.form = this.formBuilder.group({
            NameDistrict: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            LevelId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            NameSchool: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            LocationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            DistrictId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            SchoolId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
        });
        this.checkValidateNameDistrict = true;
        this.checkValidateLocationId = true;
        this.checkValidateDistrictId = true;
        this.checkValidateLevelId = true;
        this.checkValidateNameSchool = true;
        this.checkValidateSchoolId = true;
    }
    SaveDataApi() {
        if (this.selected.value == 0) {
            this.AddDistrict();
        }
        else if (this.selected.value == 1) {
            this.AddSchool();
        }
        else if (this.selected.value == 2) {
            this.EditDistrict();
        }
        else if (this.selected.value == 3) {
            this.EditSchool();
        }
    }
    selectedIndexChange(value) {
        this.selected.setValue(value);
        this.removeDataOld();
    }
    ngOnInit() {
        this.removeDataOld();
        this.initData();
        super.ngOnInit();
    }
}
AddSchoolComponent.ɵfac = function AddSchoolComponent_Factory(t) { return new (t || AddSchoolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api_api_schoolInfo_service__WEBPACK_IMPORTED_MODULE_2__.SchoolInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_4__.SchoolService)); };
AddSchoolComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AddSchoolComponent, selectors: [["app-ad-school"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 6, consts: [[3, "headerTitle", "back_link"], [4, "ngIf"], ["class", "container-fluid component-wrap centerBoth hasBg mt-3 mb-3", 4, "ngIf"], [1, "container-fluid", "component-wrap", "centerBoth", "hasBg", "mt-3", "mb-3"], [1, "card"], [1, "card-body"], [3, "selectedIndex", "selectedIndexChange"], [3, "label"], [2, "margin-top", "20px", 3, "formGroup"], [1, "form-group"], [1, "control-label"], ["appearance", "fill"], ["formControlName", "LocationId", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, ""], ["type", "text", "cols", "5", "rows", "5", "formControlName", "NameDistrict", 1, "form-control", 3, "placeholder"], ["formControlName", "LocationId", 3, "placeholder", "selectionChange"], ["name", "DepartmentName", "formControlName", "DistrictId", 3, "value", "placeholder", "valueChange"], ["name", "LevelId", "formControlName", "LevelId", 3, "placeholder"], ["name", "", "id", "", "cols", "5", "rows", "5", "formControlName", "NameSchool", 1, "form-control", 3, "placeholder"], ["formControlName", "NameDistrict", 1, "form-control", 3, "placeholder"], ["name", "LevelId", "formControlName", "LevelId", 3, "value", "placeholder", "valueChange", "selectionChange"], ["name", "SchoolName", "formControlName", "SchoolId", 3, "value", "placeholder", "valueChange", "selectionChange"], ["formControlName", "NameSchool", 1, "form-control", 3, "placeholder"], [2, "float", "right"], ["type", "button", 1, "btn", "btn-danger", "mr-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [3, "value"], [1, "alert", "alert-danger", "mt-3"]], template: function AddSchoolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddSchoolComponent_azt_loading_effect_2_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AddSchoolComponent_div_3_Template, 144, 134, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 4, "lang_wsuper_admin_add_school_add_school"))("back_link", "/admin/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading == false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__.AztLoadingEffectComponent, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_6__.HeaderBackendComponent, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.MytranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 74198:
/*!***********************************************************************!*\
  !*** ./src/app/wsuper_admin/decode-json-tool/controller.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecodeJsonToolComponent": () => (/* binding */ DecodeJsonToolComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_helpers_ResultJsonHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_helpers/ResultJsonHelper */ 83824);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);










class DecodeJsonToolComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(formBuilder, commonService, resultJsonHelper) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.resultJsonHelper = resultJsonHelper;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({});
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            result: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        super.ngOnInit();
    }
    decodeAction() {
        var content = this.form.controls.content.value;
        try {
            this.form.controls.result.setValue(JSON.stringify(this.resultJsonHelper.decode(JSON.parse(content))));
        }
        catch (error) {
            this.form.controls.result.setValue(null);
        }
    }
}
DecodeJsonToolComponent.ɵfac = function DecodeJsonToolComponent_Factory(t) { return new (t || DecodeJsonToolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_helpers_ResultJsonHelper__WEBPACK_IMPORTED_MODULE_2__.ResultJsonHelper)); };
DecodeJsonToolComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DecodeJsonToolComponent, selectors: [["app-decode-json-tool"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 30, vars: 17, consts: [[3, "headerTitle", "back_link"], [1, "container-fluid", "component-wrap", "centerBoth", "hasBg", "mt-3"], [1, "card"], [1, "card-body"], [1, "form-horizontal", 2, "margin-top", "6vh", 3, "formGroup"], [1, "row"], [1, "col-sm-10"], [1, "row", "mb-3"], [1, "col-sm-2", "control-label"], ["type", "text", "formControlName", "content", 1, "form-control"], ["type", "text", "readonly", "", "formControlName", "result", 1, "form-control"], [1, "col-sm-2"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function DecodeJsonToolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3")(6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "form", 4)(11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 5)(20, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 11)(26, "div")(27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DecodeJsonToolComponent_Template_button_click_27_listener() { return ctx.decodeAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 7, "lang_wsuper_admin_decode_json_tool_title"))("back_link", "/admin/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 9, "lang_wsuper_admin_decode_json_tool_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 11, "lang_wsuper_admin_decode_json_tool_title_conten"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 13, "lang_wsuper_admin_decode_json_tool_result"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 15, "lang_wsuper_admin_decode_json_tool_decode"));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__.HeaderBackendComponent, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 46751:
/*!**********************************************************************!*\
  !*** ./src/app/wsuper_admin/error-exception/controller.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorException": () => (/* binding */ ErrorException)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _azota_ui_azt_paging_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/azt-paging/controller.component */ 51176);











function ErrorException_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 14);
} }
function ErrorException_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ErrorException_div_18_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.search(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " view all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ErrorException_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ErrorException_div_19_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.EmptyTrackLog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " X\u00F3a t\u1EA5t c\u1EA3 l\u1ED7i exception ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ErrorException_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Tuy\u1EC7t v\u1EDDi, kh\u00F4ng c\u00F3 l\u1ED7i n\u00E0o.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ErrorException_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Url:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("ID: ", item_r10.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Name: ", item_r10.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("User Id: ", item_r10.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Track Key: ", item_r10.trackKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Ip address: ", item_r10.ipAddress, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Created at: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](14, 11, item_r10.createdAt, "dd/MM/yyyy HH:mm:ss"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", item_r10.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r10.url, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("User agent: ", item_r10.useragent, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Content: ", item_r10.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Error: ", item_r10.error, "");
} }
function ErrorException_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ErrorException_div_20_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ErrorException_div_20_div_2_Template, 25, 14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 20)(4, "azt-paging", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("SendPage", function ErrorException_div_20_Template_azt_paging_SendPage_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.clickPage($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.data.total == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.trackLogs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("screen", "report_error")("linkPage", "/super-role/report_exception")("lengthPage", ctx_r3.lengthPage)("paging", ctx_r3.page);
} }
class ErrorException extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, adminTrackLogService, dialog) {
        super(commonService);
        this.commonService = commonService;
        this.adminTrackLogService = adminTrackLogService;
        this.dialog = dialog;
        this.searchUrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('');
        this.searchContent = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('');
        this.trackKey = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('');
        this.page = 1;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({});
        this.eventSearch = '';
        this.pageSearch = 1;
        this.showAllError = false;
        this.loading = false;
        this.statusShearch = false;
        this.phone_search = '';
        this.url_search = '';
        this.isMobile = false;
        this.track_key = '';
    }
    GetTrackLogObjs() {
        var _a, _b, _c;
        this.loading = true;
        this.adminTrackLogService.apiAdminTrackLogGetObjsGet((_a = this.paramApiSeach) === null || _a === void 0 ? void 0 : _a.track_key, this.page, (_b = this.paramApiSeach) === null || _b === void 0 ? void 0 : _b.url, (_c = this.paramApiSeach) === null || _c === void 0 ? void 0 : _c.content).subscribe((response) => {
            var _a, _b, _c;
            if (response.success == 1) {
                this.trackLogs = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs;
                this.data = response.data;
                this.lengthPage = Math.ceil(((_c = (_b = this.data) === null || _b === void 0 ? void 0 : _b.total) !== null && _c !== void 0 ? _c : 0) / 18);
                this.showAllError = false;
                this.loading = false;
            }
            else {
                this.loading = false;
                // this.showError = false;
                this.commonService.snackError('Lỗi: không lấy được dữ liệu', 'Đóng');
            }
        });
    }
    EmptyTrackLog() {
        this.adminTrackLogService.apiAdminTrackLogEmptyObjsGet().subscribe((response) => {
            if (response.success == 1) {
                this.GetTrackLogObjs();
                this.commonService.snackSuccess('Xóa lỗi exception thành công', 'Đóng');
            }
            else {
                this.commonService.snackError('Lỗi: xóa không thành công', 'Đóng');
            }
        });
    }
    clickPage(event) {
        this.page = event;
        this.GetTrackLogObjs();
    }
    changeParamQuery() {
        var queryString = '?page=' + this.page;
        this.commonService.myNavigationWithQueryString('/super-role/report_exception', queryString);
    }
    search(type) {
        if (type == 0) {
            this.statusShearch = true;
            var valueSearchUrl = this.searchUrl.value == '' ? '' : this.searchUrl.value;
            var valueSearchContent = this.searchContent.value == '' ? '' : this.searchContent.value;
            this.track_key = this.trackKey.value == '' ? '' : this.trackKey.value;
            this.paramApiSeach = { url: valueSearchUrl, content: valueSearchContent, track_key: this.track_key };
            this.GetTrackLogObjs();
        }
        else {
            this.statusShearch = false;
            this.searchUrl.setValue('');
            this.searchContent.setValue('');
            this.paramApiSeach = { url: '', content: '', track_key: '' };
            this.GetTrackLogObjs();
        }
        this.changeParamQuery();
    }
    checkDevice() {
        if (window.innerWidth < 768) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    }
    ngOnInit() {
        var page_search = this.commonService.getMyQueryParam('page');
        this.page = page_search == '' || page_search == undefined ? 1 : Number(page_search);
        this.GetTrackLogObjs();
        this.commonService.translateMetaData({
            title: 'lang_cms_error_management_title',
            description: 'lang_cms_error_management_description',
            image: 'lang_cms_test_image',
        });
        this.checkDevice();
        super.ngOnInit();
    }
}
ErrorException.ɵfac = function ErrorException_Factory(t) { return new (t || ErrorException)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.AdminTrackLogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
ErrorException.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ErrorException, selectors: [["app-error-exception"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 12, consts: [[3, "headerTitle", "back_link"], [1, "content", "fluid-container", "m-3", 2, "padding", "10px"], ["class", "spinner-border spinner-border-sm", "role", "status", "style", "margin: 20px 50%;", 4, "ngIf"], [1, "row", "pb-3", "m-0"], [1, "col-12"], ["type", "text", "placeholder", "Nh\u1EADp n\u1ED9i dung", 1, "input-search", 3, "formControl", "value", "keyup.enter"], ["type", "text", "placeholder", "Nh\u1EADp url", 1, "input-search", 3, "formControl", "value", "keyup.enter"], ["type", "text", "placeholder", "Nh\u1EADp Track Key", 1, "input-search", 3, "formControl", "value", "keyup.enter"], [1, "col-12", "text-right"], [1, "search-icon", "clickable", 2, "position", "unset", 3, "click"], [1, "search-ver", 2, "vertical-align", "middle", "font-size", "27px", "height", "27px", "width", "27px", 3, "click"], ["class", "row pb-3 ml-4 mr-4 clickable", "style", "color: blue;", 3, "click", 4, "ngIf"], ["class", "row pb-3 ml-4 mr-4 clickable", "style", "color: blue; float: right;", 3, "click", 4, "ngIf"], ["class", "ml-3 mr-3", 4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm", 2, "margin", "20px 50%"], [1, "row", "pb-3", "ml-4", "mr-4", "clickable", 2, "color", "blue", 3, "click"], [1, "row", "pb-3", "ml-4", "mr-4", "clickable", 2, "color", "blue", "float", "right", 3, "click"], [1, "ml-3", "mr-3"], ["class", "text-center m-5", 4, "ngIf"], ["class", "view-error", 4, "ngFor", "ngForOf"], [1, "mt-5"], [3, "screen", "linkPage", "lengthPage", "paging", "SendPage"], [1, "text-center", "m-5"], [1, "view-error"], [1, "p-3"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"]], template: function ErrorException_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ErrorException_div_2_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function ErrorException_Template_input_keyup_enter_5_listener() { return ctx.search(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function ErrorException_Template_input_keyup_enter_8_listener() { return ctx.search(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function ErrorException_Template_input_keyup_enter_11_listener() { return ctx.search(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 3)(13, "div", 8)(14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ErrorException_Template_div_click_14_listener() { return ctx.search(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " T\u00ECm ki\u1EBFm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ErrorException_Template_mat_icon_click_16_listener() { return ctx.search(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ErrorException_div_18_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ErrorException_div_19_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ErrorException_div_20_Template, 5, 6, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("headerTitle", ctx.data && ctx.data.total ? "L\u1ED7i exception (" + ctx.data.total + ")" : "L\u1ED7i exception")("back_link", "/admin/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.url_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.searchContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.url_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.searchUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.track_key);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.trackKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusShearch === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusShearch === false && ctx.data && ctx.data.total != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data && ctx.loading === false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__.HeaderBackendComponent, _azota_ui_azt_paging_controller_component__WEBPACK_IMPORTED_MODULE_4__.AztPaging, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".content[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  color: #0EAFC0;\n}\n\n.input-search[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid rgba(204, 201, 201, 0.8901960784);\n  padding: 0.2rem 0.55rem;\n  border-radius: 3px;\n  font-size: 12px;\n}\n\n.input-search[_ngcontent-%COMP%]::placeholder {\n  opacity: 0.7;\n}\n\n.icon_custom[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  color: rgba(51, 51, 51, 0.5803921569);\n  font-size: 16px;\n  height: 20px;\n  width: 16px;\n  margin-right: 3px;\n}\n\n.input-search[_ngcontent-%COMP%]:focus {\n  border: 2px solid #0EAFC0;\n  outline: none;\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  background-color: rgb(236, 235, 235);\n}\n\n.buttom-done[_ngcontent-%COMP%] {\n  float: right;\n  color: white;\n  max-width: 87px;\n  text-align: center;\n  padding: 4px 10px;\n  border-radius: 5px;\n  background-color: rgb(99, 209, 111);\n}\n\n.done[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: rgb(99, 209, 111) !important;\n}\n\n.buttom-slacking[_ngcontent-%COMP%] {\n  float: right;\n  color: white;\n  max-width: 87px;\n  text-align: center;\n  padding: 4px 10px;\n  border-radius: 5px;\n  background-color: rgb(253, 97, 44);\n}\n\n.open[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: rgb(253, 97, 44) !important;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgb(212, 212, 212);\n  overflow-y: hidden;\n  padding: 7px;\n}\n\n.select-dropdown[_ngcontent-%COMP%] {\n  float: right;\n  background-color: #e6e6e6;\n  width: 105px;\n  text-align: center;\n  max-width: 100%;\n  border-radius: 3px;\n  padding: 6px;\n}\n\n.showFullImageScreen[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0px;\n  background-color: rgb(27, 38, 56);\n  z-index: 520;\n  display: none;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.showFullImageScreen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 95%;\n}\n\n.showFullImageScreen[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 30px;\n  width: 30px;\n  margin: 10px;\n  color: aliceblue;\n  font-size: 30px;\n}\n\n.showFullImageScreen[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover {\n  background-color: rgb(204, 204, 204);\n  border-radius: 3px;\n}\n\n.view-error[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e4e4e4;\n  border-radius: 5px;\n  margin-bottom: 8px;\n}\n\n.click-show-image[_ngcontent-%COMP%] {\n  padding: 5px;\n  background: #3636ff;\n  position: absolute;\n  color: white;\n  font-weight: 500;\n}"] });


/***/ }),

/***/ 67983:
/*!***********************************************************************!*\
  !*** ./src/app/wsuper_admin/error-management/controller.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorManagement": () => (/* binding */ ErrorManagement)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _azota_ui_azt_paging_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/azt-paging/controller.component */ 51176);
/* harmony import */ var _azota_ui_azt_create_avatar_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/azt-create-avatar/controller.component */ 64123);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);












function ErrorManagement_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ErrorManagement_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.AllErr()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "All Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ErrorManagement_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 16);
} }
function ErrorManagement_div_26_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Tuy\u1EC7t v\u1EDDi, kh\u00F4ng c\u00F3 l\u1ED7i n\u00E0o.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ErrorManagement_div_26_div_7_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "mycdn");
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, item_r7.avatar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function ErrorManagement_div_26_div_7_azt_create_avatar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "azt-create-avatar", 39);
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nameCreateAvatar", item_r7.fullname)("size", 38);
} }
function ErrorManagement_div_26_div_7_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Url: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", item_r7.url, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r7.url, " ");
} }
function ErrorManagement_div_26_div_7_img_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "mycdn");
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, item_r7.screenshot), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function ErrorManagement_div_26_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ErrorManagement_div_26_div_7_img_3_Template, 2, 3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ErrorManagement_div_26_div_7_azt_create_avatar_4_Template, 1, 2, "azt-create-avatar", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 32)(6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ErrorManagement_div_26_div_7_div_13_Template, 4, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 34)(15, "p")(16, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ErrorManagement_div_26_div_7_img_18_Template, 2, 3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.avatar != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.avatar == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r7.fullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](10, 9, item_r7.createdAt, "dd/MM/yyyy HH:mm:ss"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r7.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.screenshot != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", item_r7.screenshot, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r7.screenshot);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.screenshot != null);
} }
function ErrorManagement_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "L\u1ED7i t\u1EEB ng\u01B0\u1EDDi d\u00F9ng: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ErrorManagement_div_26_div_6_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ErrorManagement_div_26_div_7_Template, 19, 12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 23)(9, "azt-paging", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("SendPage", function ErrorManagement_div_26_Template_azt_paging_SendPage_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.clickPage($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("T\u1ED5ng s\u1ED1 l\u1ED7i: ", ctx_r2.data.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.data.total == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.trackLogs);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("screen", "report_error")("linkPage", "/super-role/report_error")("eventSearch", ctx_r2.sendEventSearchToPaging)("lengthPage", ctx_r2.lengthPage)("paging", ctx_r2.page);
} }
class ErrorManagement extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, adminTrackLogForUserService) {
        super(commonService);
        this.commonService = commonService;
        this.adminTrackLogForUserService = adminTrackLogForUserService;
        this.fondovalor1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('');
        this.fondovalor2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('');
        this.fondovalor3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('');
        this.fondovalor4 = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('');
        this.page = 1;
        this.pageSearch = 1;
        this.showAllError = false;
        this.loading = false;
        this.statusShearch = false;
        this.phone_search = '';
        this.url_search = '';
        this.user_id_search = '';
        this.track_key = '';
        this.isMobile = false;
        this.sendEventSearchToPaging = { userPhone: '', userId: '', urls: '', track_key: '' };
    }
    AllErr() {
        this.commonService.myNavigationWithQueryString('/super-role/report_error', '');
        this.getParamUrl('', '', '', '');
        this.GetTrackLogObjs();
    }
    GetTrackLogObjs() {
        this.statusShearch = false;
        this.loading = true;
        this.adminTrackLogForUserService.apiAdminTrackLogForUserGetObjsGet(this.track_key, Number(this.page)).subscribe((response) => {
            var _a, _b, _c;
            if (response.success == 1) {
                this.trackLogs = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs;
                this.data = response.data;
                this.lengthPage = Math.ceil(((_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.total) !== null && _c !== void 0 ? _c : 0) / 18);
                this.showAllError = false;
                this.loading = false;
            }
            else {
                this.loading = false;
                // this.showError = false;
                this.commonService.snackError('Lỗi: không lấy được dữ liệu', 'Đóng');
            }
        });
    }
    SearchTrackLogObjs() {
        var _a, _b, _c;
        this.loading = true;
        this.adminTrackLogForUserService.apiAdminTrackLogForUserSearchObjsGet(this.track_key, Number(this.page), (_a = this.eventSearch) === null || _a === void 0 ? void 0 : _a.id, (_b = this.eventSearch) === null || _b === void 0 ? void 0 : _b.phone, (_c = this.eventSearch) === null || _c === void 0 ? void 0 : _c.url).subscribe((response) => {
            var _a, _b, _c;
            if (response.success == 1) {
                this.trackLogs = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs;
                this.data = response.data;
                this.lengthPage = Math.ceil(((_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.total) !== null && _c !== void 0 ? _c : 0) / 18);
                this.showAllError = true;
                this.loading = false;
            }
            else {
                this.loading = false;
                // this.showError = false;
                this.commonService.snackError('Lỗi: thông tin bạn tìm không tồn tại', 'Đóng');
            }
        });
    }
    search() {
        this.statusShearch = true;
        this.page = 1;
        this.loading = true;
        var valueSearch1 = this.fondovalor1.value;
        var valueSearch2 = this.fondovalor2.value;
        var valueSearch3 = this.fondovalor3.value;
        var valueSearch4 = this.fondovalor4.value;
        var phone = valueSearch1 == '' ? '' : valueSearch1;
        var id = valueSearch2 == '' ? '' : valueSearch2;
        var url = valueSearch3 == '' ? '' : valueSearch3;
        var track_key = valueSearch4 == '' ? '' : valueSearch4;
        if (valueSearch2 != '' || valueSearch1 != '' || valueSearch3 != '' || valueSearch4 != '') {
            this.eventSearch = { phone, id, url, track_key };
            this.changeLink();
            this.getParamUrl(valueSearch1, valueSearch2, valueSearch3, valueSearch4);
            this.SearchTrackLogObjs();
        }
        else if (valueSearch2 == '' || valueSearch1 == '' || valueSearch3 == '' || valueSearch4 == '') {
            this.eventSearch = { phone, id, url, track_key };
            this.AllErr();
        }
    }
    clickPage(event) {
        this.page = event;
        if (this.statusShearch == false) {
            this.GetTrackLogObjs();
        }
        else if (this.statusShearch == true) {
            this.SearchTrackLogObjs();
        }
        this.changeLink();
    }
    changeLink() {
        var queryString = '?page=' + this.page + '&' + this.eventSearch;
        this.commonService.myNavigationWithQueryString('/super-role/report_error', queryString);
    }
    eventHandling() {
        var _a, _b, _c, _d, _e;
        var page_search = (_a = this.commonService.getMyQueryParam('page')) !== null && _a !== void 0 ? _a : '';
        var phone_search = (_b = this.commonService.getMyQueryParam('userPhone')) !== null && _b !== void 0 ? _b : '';
        var user_id_search = (_c = this.commonService.getMyQueryParam('userId')) !== null && _c !== void 0 ? _c : '';
        var url_search = (_d = this.commonService.getMyQueryParam('url')) !== null && _d !== void 0 ? _d : '';
        var track_key_search = (_e = this.commonService.getMyQueryParam('trackKey')) !== null && _e !== void 0 ? _e : '';
        var phone = phone_search == '' || undefined ? '' : phone_search;
        var id = user_id_search == '' || undefined ? '' : user_id_search;
        var url = url_search == '' || undefined ? '' : url_search;
        var track_key = track_key_search == '' || undefined ? '' : track_key_search;
        var userPhone = phone_search == '' || undefined ? '' : phone_search;
        var userId = user_id_search == '' || undefined ? '' : user_id_search;
        var urls = url_search == '' || undefined ? '' : url_search;
        this.getParamUrl(phone_search, user_id_search, url_search, track_key);
        this.page = Number(page_search == '' || undefined ? 1 : page_search);
        if (phone != '' || id != '' || url != '' || track_key != '') {
            this.statusShearch = true;
            this.eventSearch = { phone, id, url, track_key };
            this.sendEventSearchToPaging = { userPhone, userId, urls, track_key };
            this.SearchTrackLogObjs();
        }
        else {
            this.GetTrackLogObjs();
        }
    }
    checkDevice() {
        if (window.innerWidth < 768) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    }
    getParamUrl(phone, id, url, trackKey) {
        this.phone_search = phone;
        this.user_id_search = id;
        this.url_search = url;
        this.track_key = trackKey;
    }
    ngOnInit() {
        this.eventHandling();
        this.commonService.translateMetaData({
            title: 'lang_cms_error_management_title',
            description: 'lang_cms_error_management_description',
            image: 'lang_cms_test_image',
        });
        this.checkDevice();
        super.ngOnInit();
    }
}
ErrorManagement.ɵfac = function ErrorManagement_Factory(t) { return new (t || ErrorManagement)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.AdminTrackLogForUserService)); };
ErrorManagement.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ErrorManagement, selectors: [["app-error-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 13, consts: [[3, "headerTitle", "back_link"], [1, "content", "fluid-container", "m-3", 2, "padding", "10px"], [1, "row", "pb-3", "m-0"], [1, "col-12"], [3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Nh\u1EADp s\u1ED1 phone", 1, "input-search", 3, "formControl", "value", "keyup.enter"], [1, "search-icon", "clickable"], ["type", "text", "placeholder", "Nh\u1EADp id ng\u01B0\u1EDDi d\u00F9ng", 1, "input-search", 3, "formControl", "value", "keyup.enter"], ["type", "text", "placeholder", "Nh\u1EADp url", 1, "input-search", 3, "formControl", "value", "keyup.enter"], ["type", "text", "placeholder", "Nh\u1EADp Track key", 1, "input-search", 3, "formControl", "value", "keyup.enter"], [1, "col-12", "text-right"], [1, "search-icon", "clickable", 2, "position", "unset"], [1, "search-ver", 2, "vertical-align", "middle", "font-size", "27px", "height", "27px", "width", "27px", 3, "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "style", "margin: 20px 50%;", 4, "ngIf"], ["class", "ml-4 mr-4", 4, "ngIf"], [3, "click"], ["role", "status", 1, "spinner-border", "spinner-border-sm", 2, "margin", "20px 50%"], [1, "ml-4", "mr-4"], [1, "row", "m-0", "pb-3"], [1, "col-6", "p-0", 2, "font-weight", "bold", "font-size", "16px"], [1, "col-6", "p-0", "text-right"], ["class", "text-center m-5", 4, "ngIf"], ["class", "view-error", 4, "ngFor", "ngForOf"], [1, "mt-5"], [3, "screen", "linkPage", "eventSearch", "lengthPage", "paging", "SendPage"], [1, "text-center", "m-5"], ["src", "https://classlive.stume.net/images/emoji/emoji4.gif", "alt", "", "width", "20"], [1, "view-error"], [2, "display", "flex", "padding", "10px", "justify-content", "space-between"], [2, "display", "flex"], ["style", "border-radius: 50%; margin: 0 5px", "width", "38", "height", "38", 3, "src", 4, "ngIf"], [3, "nameCreateAvatar", "size", 4, "ngIf"], [1, "view-name"], [2, "font-weight", "500"], [1, "pl-3", "pr-3", "pb-3"], ["class", "pl-3 pr-3 pb-3", "style", "word-break: break-all;", 4, "ngIf"], ["target", "_blank", 3, "href"], ["class", "pb-3", "style", "width: auto; max-height:300px;", "alt", "", 3, "src", 4, "ngIf"], ["width", "38", "height", "38", 2, "border-radius", "50%", "margin", "0 5px", 3, "src"], [3, "nameCreateAvatar", "size"], [1, "pl-3", "pr-3", "pb-3", 2, "word-break", "break-all"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["alt", "", 1, "pb-3", 2, "width", "auto", "max-height", "300px", 3, "src"]], template: function ErrorManagement_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ErrorManagement_a_4_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function ErrorManagement_Template_input_keyup_enter_7_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 2)(10, "div", 3)(11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function ErrorManagement_Template_input_keyup_enter_11_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 2)(13, "div", 3)(14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function ErrorManagement_Template_input_keyup_enter_14_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 2)(16, "div", 3)(17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function ErrorManagement_Template_input_keyup_enter_17_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 2)(20, "div", 10)(21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " T\u00ECm ki\u1EBFm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ErrorManagement_Template_mat_icon_click_23_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, ErrorManagement_div_25_Template, 1, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ErrorManagement_div_26_Template, 10, 8, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("headerTitle", "L\u1ED7i t\u1EEB ng\u01B0\u1EDDi d\u00F9ng")("back_link", "/admin/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAllError == true && ctx.loading === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx.phone_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.fondovalor1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx.user_id_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.fondovalor2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx.url_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.fondovalor3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx.track_key);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.fondovalor4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data && ctx.loading === false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__.HeaderBackendComponent, _azota_ui_azt_paging_controller_component__WEBPACK_IMPORTED_MODULE_4__.AztPaging, _azota_ui_azt_create_avatar_controller_component__WEBPACK_IMPORTED_MODULE_5__.AztCreaterAvatar, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.MyCdnPipe], styles: [".content[_ngcontent-%COMP%] {\n  background-color: #e0e4eb;\n  border-radius: 5px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  color: #0EAFC0;\n}\n\n.input-search[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid rgba(204, 201, 201, 0.8901960784);\n  padding: 0.2rem 0.55rem;\n  border-radius: 3px;\n  font-size: 12px;\n}\n\n.input-search[_ngcontent-%COMP%]::placeholder {\n  opacity: 0.7;\n}\n\n.icon_custom[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  color: rgba(51, 51, 51, 0.5803921569);\n  font-size: 16px;\n  height: 20px;\n  width: 16px;\n  margin-right: 3px;\n}\n\n.input-search[_ngcontent-%COMP%]:focus {\n  border: 2px solid #0EAFC0;\n  outline: none;\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  background-color: rgb(236, 235, 235);\n}\n\n.buttom-done[_ngcontent-%COMP%] {\n  float: right;\n  color: white;\n  max-width: 87px;\n  text-align: center;\n  padding: 4px 10px;\n  border-radius: 5px;\n  background-color: rgb(99, 209, 111);\n}\n\n.done[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: rgb(99, 209, 111) !important;\n}\n\n.buttom-slacking[_ngcontent-%COMP%] {\n  float: right;\n  color: white;\n  max-width: 87px;\n  text-align: center;\n  padding: 4px 10px;\n  border-radius: 5px;\n  background-color: rgb(253, 97, 44);\n}\n\n.open[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: rgb(253, 97, 44) !important;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgb(212, 212, 212);\n  overflow-y: hidden;\n  padding: 7px;\n}\n\n.select-dropdown[_ngcontent-%COMP%] {\n  float: right;\n  background-color: #e6e6e6;\n  width: 105px;\n  text-align: center;\n  max-width: 100%;\n  border-radius: 3px;\n  padding: 6px;\n}\n\n.showFullImageScreen[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0px;\n  background-color: rgb(27, 38, 56);\n  z-index: 520;\n  display: none;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.showFullImageScreen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 95%;\n}\n\n.showFullImageScreen[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 30px;\n  width: 30px;\n  margin: 10px;\n  color: aliceblue;\n  font-size: 30px;\n}\n\n.showFullImageScreen[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover {\n  background-color: rgb(204, 204, 204);\n  border-radius: 3px;\n}\n\n.view-error[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e4e4e4;\n  border-radius: 5px;\n  margin-bottom: 8px;\n}\n\n.click-show-image[_ngcontent-%COMP%] {\n  padding: 5px;\n  background: #3636ff;\n  position: absolute;\n  color: white;\n  font-weight: 500;\n}"] });


/***/ }),

/***/ 16556:
/*!********************************************************************!*\
  !*** ./src/app/wsuper_admin/exception-log/controller.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExceptionLogComponent": () => (/* binding */ ExceptionLogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _azota_ui_azt_paging_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/azt-paging/controller.component */ 51176);











function ExceptionLogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 13);
} }
function ExceptionLogComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExceptionLogComponent_div_15_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.search(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " view all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ExceptionLogComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExceptionLogComponent_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.EmptyTrackLog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " X\u00F3a t\u1EA5t c\u1EA3 l\u1ED7i exception ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ExceptionLogComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Tuy\u1EC7t v\u1EDDi, kh\u00F4ng c\u00F3 l\u1ED7i n\u00E0o.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ExceptionLogComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("ID: ", item_r10.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("action: ", item_r10.action, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("User Id: ", item_r10.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Created date: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 5, item_r10.createdDate, "dd/MM/yyyy HH:mm:ss"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Content: ", item_r10.content, "");
} }
function ExceptionLogComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ExceptionLogComponent_div_17_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ExceptionLogComponent_div_17_div_2_Template, 13, 8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 19)(4, "azt-paging", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("SendPage", function ExceptionLogComponent_div_17_Template_azt_paging_SendPage_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.clickPage($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.data.total == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.trackLogs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("screen", "report_error")("linkPage", "/super-role/exception_log")("lengthPage", ctx_r3.lengthPage)("paging", ctx_r3.page);
} }
class ExceptionLogComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, adminTrackExceptionLogService, dialog) {
        super(commonService);
        this.commonService = commonService;
        this.adminTrackExceptionLogService = adminTrackExceptionLogService;
        this.dialog = dialog;
        this.searchUrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('');
        this.searchContent = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('');
        this.page = 1;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({});
        this.eventSearch = '';
        this.pageSearch = 1;
        this.showAllError = false;
        this.loading = false;
        this.statusShearch = false;
        this.phone_search = '';
        this.url_search = '';
        this.user_id_search = '';
        this.isMobile = false;
    }
    GetTrackLogObjs() {
        var _a, _b;
        this.loading = true;
        this.adminTrackExceptionLogService.apiAdminTrackExceptionLogGetObjsGet(Number(this.page), (_a = this.paramApiSeach) === null || _a === void 0 ? void 0 : _a.url, (_b = this.paramApiSeach) === null || _b === void 0 ? void 0 : _b.content).subscribe((response) => {
            var _a, _b, _c;
            if (response.success == 1) {
                this.trackLogs = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs;
                this.data = response.data;
                this.lengthPage = Math.ceil(((_c = (_b = this.data) === null || _b === void 0 ? void 0 : _b.total) !== null && _c !== void 0 ? _c : 0) / 18);
                this.showAllError = false;
                this.loading = false;
            }
            else {
                this.loading = false;
                // this.showError = false;
                this.commonService.snackError('Lỗi: không lấy được dữ liệu', 'Đóng');
            }
        });
    }
    EmptyTrackLog() {
        this.adminTrackExceptionLogService.apiAdminTrackExceptionLogEmptyObjsGet().subscribe((response) => {
            if (response.success == 1) {
                this.GetTrackLogObjs();
                this.commonService.snackSuccess('Xóa lỗi exception thành công', 'Đóng');
            }
            else {
                this.commonService.snackError('Lỗi: xóa không thành công', 'Đóng');
            }
        });
    }
    clickPage(event) {
        this.page = event;
        this.GetTrackLogObjs();
    }
    changeParamQuery() {
        var queryString = '?page=' + this.page;
        this.commonService.myNavigationWithQueryString('/super-role/exception_log', queryString);
    }
    search(type) {
        if (type == 0) {
            this.statusShearch = true;
            var valueSearchUrl = this.searchUrl.value == '' ? '' : this.searchUrl.value;
            var valueSearchContent = this.searchContent.value == '' ? '' : this.searchContent.value;
            this.paramApiSeach = { url: valueSearchUrl, content: valueSearchContent };
            this.GetTrackLogObjs();
        }
        else {
            this.statusShearch = false;
            this.searchUrl.setValue('');
            this.searchContent.setValue('');
            this.paramApiSeach = { url: '', content: '' };
            this.GetTrackLogObjs();
        }
        this.changeParamQuery();
    }
    checkDevice() {
        if (window.innerWidth < 768) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    }
    ngOnInit() {
        var page_search = this.commonService.getMyQueryParam('page');
        this.page = page_search == '' || page_search == undefined ? 1 : Number(page_search);
        this.GetTrackLogObjs();
        this.commonService.translateMetaData({
            title: 'lang_cms_error_management_title',
            description: 'lang_cms_error_management_description',
            image: 'lang_cms_test_image',
        });
        this.checkDevice();
        super.ngOnInit();
    }
}
ExceptionLogComponent.ɵfac = function ExceptionLogComponent_Factory(t) { return new (t || ExceptionLogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.AdminTrackExceptionLogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
ExceptionLogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ExceptionLogComponent, selectors: [["app-exception-log"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 10, consts: [[3, "headerTitle", "back_link"], [1, "content", "fluid-container", "m-3", 2, "padding", "10px"], ["class", "spinner-border spinner-border-sm", "role", "status", "style", "margin: 20px 50%;", 4, "ngIf"], [1, "row", "pb-3", "m-0"], [1, "col-12"], ["type", "text", "placeholder", "Nh\u1EADp n\u1ED9i dung", 1, "input-search", 3, "formControl", "value", "keyup.enter"], ["type", "text", "placeholder", "Nh\u1EADp url", 1, "input-search", 3, "formCOntrol", "value", "keyup.enter"], [1, "col-12", "text-right"], [1, "search-icon", "clickable", 2, "position", "unset", 3, "click"], [1, "search-ver", 2, "vertical-align", "middle", "font-size", "27px", "height", "27px", "width", "27px", 3, "click"], ["class", "row pb-3 ml-4 mr-4 clickable", "style", "color: blue;", 3, "click", 4, "ngIf"], ["class", "row pb-3 ml-4 mr-4 clickable", "style", "color: blue; float: right;", 3, "click", 4, "ngIf"], ["class", "ml-3 mr-3", 4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm", 2, "margin", "20px 50%"], [1, "row", "pb-3", "ml-4", "mr-4", "clickable", 2, "color", "blue", 3, "click"], [1, "row", "pb-3", "ml-4", "mr-4", "clickable", 2, "color", "blue", "float", "right", 3, "click"], [1, "ml-3", "mr-3"], ["class", "text-center m-5", 4, "ngIf"], ["class", "view-error", 4, "ngFor", "ngForOf"], [1, "mt-5"], [3, "screen", "linkPage", "lengthPage", "paging", "SendPage"], [1, "text-center", "m-5"], [1, "view-error"], [1, "p-3"]], template: function ExceptionLogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ExceptionLogComponent_div_2_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function ExceptionLogComponent_Template_input_keyup_enter_5_listener() { return ctx.search(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function ExceptionLogComponent_Template_input_keyup_enter_8_listener() { return ctx.search(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExceptionLogComponent_Template_div_click_11_listener() { return ctx.search(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " T\u00ECm ki\u1EBFm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExceptionLogComponent_Template_mat_icon_click_13_listener() { return ctx.search(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ExceptionLogComponent_div_15_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ExceptionLogComponent_div_16_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ExceptionLogComponent_div_17_Template, 5, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("headerTitle", ctx.data && ctx.data.total ? "Server exception (" + ctx.data.total + ")" : "Server exception")("back_link", "/admin/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.url_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.searchContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.url_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formCOntrol", ctx.searchUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusShearch === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusShearch === false && ctx.data && ctx.data.total != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data && ctx.loading === false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__.HeaderBackendComponent, _azota_ui_azt_paging_controller_component__WEBPACK_IMPORTED_MODULE_4__.AztPaging, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".content[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  color: #0EAFC0;\n}\n\n.input-search[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid rgba(204, 201, 201, 0.8901960784);\n  padding: 0.2rem 0.55rem;\n  border-radius: 3px;\n  font-size: 12px;\n}\n\n.input-search[_ngcontent-%COMP%]::placeholder {\n  opacity: 0.7;\n}\n\n.icon_custom[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  color: rgba(51, 51, 51, 0.5803921569);\n  font-size: 16px;\n  height: 20px;\n  width: 16px;\n  margin-right: 3px;\n}\n\n.input-search[_ngcontent-%COMP%]:focus {\n  border: 2px solid #0EAFC0;\n  outline: none;\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  background-color: rgb(236, 235, 235);\n}\n\n.buttom-done[_ngcontent-%COMP%] {\n  float: right;\n  color: white;\n  max-width: 87px;\n  text-align: center;\n  padding: 4px 10px;\n  border-radius: 5px;\n  background-color: rgb(99, 209, 111);\n}\n\n.done[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: rgb(99, 209, 111) !important;\n}\n\n.buttom-slacking[_ngcontent-%COMP%] {\n  float: right;\n  color: white;\n  max-width: 87px;\n  text-align: center;\n  padding: 4px 10px;\n  border-radius: 5px;\n  background-color: rgb(253, 97, 44);\n}\n\n.open[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: rgb(253, 97, 44) !important;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgb(212, 212, 212);\n  overflow-y: hidden;\n  padding: 7px;\n}\n\n.select-dropdown[_ngcontent-%COMP%] {\n  float: right;\n  background-color: #e6e6e6;\n  width: 105px;\n  text-align: center;\n  max-width: 100%;\n  border-radius: 3px;\n  padding: 6px;\n}\n\n.showFullImageScreen[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0px;\n  background-color: rgb(27, 38, 56);\n  z-index: 520;\n  display: none;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.showFullImageScreen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 95%;\n}\n\n.showFullImageScreen[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 30px;\n  width: 30px;\n  margin: 10px;\n  color: aliceblue;\n  font-size: 30px;\n}\n\n.showFullImageScreen[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover {\n  background-color: rgb(204, 204, 204);\n  border-radius: 3px;\n}\n\n.view-error[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e4e4e4;\n  border-radius: 5px;\n  margin-bottom: 8px;\n}\n\n.click-show-image[_ngcontent-%COMP%] {\n  padding: 5px;\n  background: #3636ff;\n  position: absolute;\n  color: white;\n  font-weight: 500;\n}"] });


/***/ }),

/***/ 6499:
/*!****************************************************************!*\
  !*** ./src/app/wsuper_admin/gzip-tool/controller.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GzipToolComponent": () => (/* binding */ GzipToolComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/zipdata.service */ 2366);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);









class GzipToolComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(formBuilder, commonService, zipdataService) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.zipdataService = zipdataService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({});
        this.count_en = 0;
        this.count_de = 0;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            result: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_auth_gzip_tool_title',
            description: 'lang_cms_auth_gzip_tool_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
    encodeAction() {
        var content = this.form.controls.content.value;
        this.form.controls.result.setValue(this.zipdataService.convertContentGzip(content));
        this.count_en = content.length;
        this.count_de = this.form.controls.result.value.length;
    }
    decodeAction() {
        var content = this.form.controls.content.value;
        this.form.controls.result.setValue(this.zipdataService.decodeContentGzip(content));
        this.count_en = content.length;
        this.count_de = this.form.controls.result.value.length;
    }
}
GzipToolComponent.ɵfac = function GzipToolComponent_Factory(t) { return new (t || GzipToolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_2__.ZipdataService)); };
GzipToolComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: GzipToolComponent, selectors: [["app-gzip-tool"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 30, vars: 5, consts: [[3, "headerTitle", "back_link"], [1, "container-fluid", "component-wrap", "centerBoth", "hasBg", "mt-3"], [1, "card"], [1, "card-body"], [1, "form-horizontal", 2, "margin-top", "6vh", 3, "formGroup"], [1, "row"], [1, "col-sm-10"], [1, "row", "mb-3"], [1, "col-sm-2", "control-label"], ["type", "text", "formControlName", "content", 1, "form-control"], ["type", "text", "readonly", "", "formControlName", "result", 1, "form-control"], [1, "col-sm-2"], [1, "mb-3"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mt-3", "text-center"]], template: function GzipToolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3")(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "C\u00F4ng c\u1EE5 m\u00E3 ho\u00E1 - gi\u1EA3i m\u00E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "N\u1ED9i dung");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 5)(17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "K\u1EBFt qu\u1EA3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 11)(22, "div", 12)(23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GzipToolComponent_Template_button_click_23_listener() { return ctx.encodeAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "M\u00E3 ho\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div")(26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GzipToolComponent_Template_button_click_26_listener() { return ctx.decodeAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Gi\u1EA3i m\u00E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headerTitle", "C\u00F4ng c\u1EE5 h\u1ED7 tr\u1EE3 Gzip")("back_link", "/admin/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("K\u1EBFt qu\u1EA3 convert: chi\u1EC1u d\u00E0i ban \u0111\u1EA7u: ", ctx.count_en, " - chi\u1EC1u d\u00E0i sau khi convert: ", ctx.count_de, "");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__.HeaderBackendComponent], encapsulation: 2 });


/***/ }),

/***/ 98488:
/*!***********************************************!*\
  !*** ./src/app/wsuper_admin/module.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperAdminModule": () => (/* binding */ SuperAdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 51908);
/* harmony import */ var src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/azota-ui/azota-ui.module */ 47470);
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ 75658);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _add_new_feature_notice_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add_new_feature_notice/controller.component */ 67641);
/* harmony import */ var _add_school_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add_school/controller.component */ 74492);
/* harmony import */ var _decode_json_tool_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decode-json-tool/controller.component */ 74198);
/* harmony import */ var _error_exception_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-exception/controller.component */ 46751);
/* harmony import */ var _error_management_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-management/controller.component */ 67983);
/* harmony import */ var _exception_log_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exception-log/controller.component */ 16556);
/* harmony import */ var _gzip_tool_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gzip-tool/controller.component */ 6499);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing.module */ 7941);
/* harmony import */ var _support_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/controller.component */ 79939);
/* harmony import */ var _update_config_controller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update-config/controller.component */ 18677);
/* harmony import */ var _upload_file_controller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upload-file/controller.component */ 96740);
/* harmony import */ var _upload_assets_controller_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./upload_assets/controller.component */ 84825);
/* harmony import */ var _upload_mnote_controller_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./upload_mnote/controller.component */ 8970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 5000);





















class SuperAdminModule {
}
SuperAdminModule.ɵfac = function SuperAdminModule_Factory(t) { return new (t || SuperAdminModule)(); };
SuperAdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: SuperAdminModule });
SuperAdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_20__.EditorModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_10__.SuperAdminRoutingModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](SuperAdminModule, { declarations: [_update_config_controller_component__WEBPACK_IMPORTED_MODULE_12__.UpdateConfigComponent,
        _error_management_controller_component__WEBPACK_IMPORTED_MODULE_7__.ErrorManagement,
        _error_exception_controller_component__WEBPACK_IMPORTED_MODULE_6__.ErrorException,
        _support_controller_component__WEBPACK_IMPORTED_MODULE_11__.SupportComponent,
        _upload_assets_controller_component__WEBPACK_IMPORTED_MODULE_14__.UploadAssetsComponent,
        _upload_mnote_controller_component__WEBPACK_IMPORTED_MODULE_15__.UploadMnoteComponent,
        _upload_file_controller_component__WEBPACK_IMPORTED_MODULE_13__.UploadFileComponent,
        _add_school_controller_component__WEBPACK_IMPORTED_MODULE_4__.AddSchoolComponent,
        _gzip_tool_controller_component__WEBPACK_IMPORTED_MODULE_9__.GzipToolComponent,
        _decode_json_tool_controller_component__WEBPACK_IMPORTED_MODULE_5__.DecodeJsonToolComponent,
        _exception_log_controller_component__WEBPACK_IMPORTED_MODULE_8__.ExceptionLogComponent,
        _add_new_feature_notice_controller_component__WEBPACK_IMPORTED_MODULE_3__.AddNewFeatureNoticeComponent,
        _add_new_feature_notice_controller_component__WEBPACK_IMPORTED_MODULE_3__.DeleteFeatureNoticeDialog], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_20__.EditorModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_10__.SuperAdminRoutingModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule] }); })();


/***/ }),

/***/ 7941:
/*!************************************************!*\
  !*** ./src/app/wsuper_admin/routing.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperAdminRoutingModule": () => (/* binding */ SuperAdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);
/* harmony import */ var _add_new_feature_notice_controller_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_new_feature_notice/controller.component */ 67641);
/* harmony import */ var _add_school_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_school/controller.component */ 74492);
/* harmony import */ var _decode_json_tool_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decode-json-tool/controller.component */ 74198);
/* harmony import */ var _error_exception_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-exception/controller.component */ 46751);
/* harmony import */ var _error_management_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-management/controller.component */ 67983);
/* harmony import */ var _exception_log_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exception-log/controller.component */ 16556);
/* harmony import */ var _gzip_tool_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gzip-tool/controller.component */ 6499);
/* harmony import */ var _support_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./support/controller.component */ 79939);
/* harmony import */ var _update_config_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-config/controller.component */ 18677);
/* harmony import */ var _upload_file_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload-file/controller.component */ 96740);
/* harmony import */ var _upload_assets_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./upload_assets/controller.component */ 84825);
/* harmony import */ var _upload_mnote_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./upload_mnote/controller.component */ 8970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 5000);
















const authRoutes = [
    {
        path: '',
        children: [
            { path: 'update-config', component: _update_config_controller_component__WEBPACK_IMPORTED_MODULE_8__.UpdateConfigComponent },
            { path: 'support', component: _support_controller_component__WEBPACK_IMPORTED_MODULE_7__.SupportComponent },
            { path: 'report_error', component: _error_management_controller_component__WEBPACK_IMPORTED_MODULE_4__.ErrorManagement },
            { path: 'report_exception', component: _error_exception_controller_component__WEBPACK_IMPORTED_MODULE_3__.ErrorException },
            { path: 'upload_assets', component: _upload_assets_controller_component__WEBPACK_IMPORTED_MODULE_10__.UploadAssetsComponent },
            { path: 'upload_mnote', component: _upload_mnote_controller_component__WEBPACK_IMPORTED_MODULE_11__.UploadMnoteComponent },
            { path: 'upload-file', component: _upload_file_controller_component__WEBPACK_IMPORTED_MODULE_9__.UploadFileComponent },
            { path: 'add_school', component: _add_school_controller_component__WEBPACK_IMPORTED_MODULE_1__.AddSchoolComponent },
            { path: 'gzip-tool', component: _gzip_tool_controller_component__WEBPACK_IMPORTED_MODULE_6__.GzipToolComponent },
            { path: 'json-tool', component: _decode_json_tool_controller_component__WEBPACK_IMPORTED_MODULE_2__.DecodeJsonToolComponent },
            { path: 'exception_log', component: _exception_log_controller_component__WEBPACK_IMPORTED_MODULE_5__.ExceptionLogComponent },
            { path: 'add_new_feature_notice', component: _add_new_feature_notice_controller_component__WEBPACK_IMPORTED_MODULE_0__.AddNewFeatureNoticeComponent }
        ]
    }
];
class SuperAdminRoutingModule {
}
SuperAdminRoutingModule.ɵfac = function SuperAdminRoutingModule_Factory(t) { return new (t || SuperAdminRoutingModule)(); };
SuperAdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: SuperAdminRoutingModule });
SuperAdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(authRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_14__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SuperAdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_14__.LocalizeRouterModule] }); })();


/***/ }),

/***/ 79939:
/*!**************************************************************!*\
  !*** ./src/app/wsuper_admin/support/controller.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportComponent": () => (/* binding */ SupportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);












function SupportComponent_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SupportComponent_tr_89_span_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SupportComponent_tr_89_span_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.copyExamByHashId(ctx_r8.examObj == null ? null : ctx_r8.examObj.hashId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Copy Exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SupportComponent_tr_89_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "mycdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "T\u1EA3i xu\u1ED1ng file \u0111\u1EC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx_r5.examFileObj.path), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function SupportComponent_tr_89_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SupportComponent_tr_89_span_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const obj_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.redirectToHomeworkAndLogin(obj_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Link xem \u0111i\u1EC3m b\u00E0i t\u1EADp");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SupportComponent_tr_89_span_13_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SupportComponent_tr_89_span_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const obj_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.redirectToExamAndLogin(obj_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Link xem \u0111i\u1EC3m \u0111\u1EC1 thi");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SupportComponent_tr_89_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, SupportComponent_tr_89_span_10_Template, 4, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, SupportComponent_tr_89_a_11_Template, 3, 3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SupportComponent_tr_89_span_12_Template, 4, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, SupportComponent_tr_89_span_13_Template, 4, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SupportComponent_tr_89_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const obj_r2 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.loginToThisAccount(obj_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\u0110\u0103ng nh\u1EADp");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SupportComponent_tr_89_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const obj_r2 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.getForgotPasswordLink(obj_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "L\u1EA5y link qu\u00EAn m\u1EADt kh\u1EA9u");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SupportComponent_tr_89_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const obj_r2 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.blockPhoneAccount(obj_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Kh\u00F3a s\u1ED1 phone n\u00E0y");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const obj_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](obj_r2.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](obj_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](obj_r2.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](obj_r2.zaloId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.examObj == null ? null : ctx_r1.examObj.id) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.examFileObj && ctx_r1.examFileObj.id != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.homeworkObj == null ? null : ctx_r1.homeworkObj.id) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.examObj == null ? null : ctx_r1.examObj.id) != 0);
} }
class SupportComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(formBuilder, commonService, copyExamService, supportService, baseApiService) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.copyExamService = copyExamService;
        this.supportService = supportService;
        this.baseApiService = baseApiService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({});
        this.status_obj = { loading: false, error: false };
        this.checkRedirect = '';
    }
    search() {
        this.status_obj = { loading: true, error: false };
        var form_object = this.commonService.getFormObj(this.form);
        this.subscriptions.add(this.supportService.apiSupportSearchUserGet(form_object.full_name.toString(), form_object.phone.toString(), form_object.email.toString(), Number(form_object.user_id), form_object.homework_hashid.toString(), form_object.exam_hashid.toString(), Number(form_object.homework_id), Number(form_object.exam_id), Number(form_object.homework_answer_id), Number(form_object.test_answer_id), Number(form_object.classroom_id)).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f;
            if (response.success == 1) {
                this.objs = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs;
                this.homeworkObj = ((_b = response.data) === null || _b === void 0 ? void 0 : _b.homeworkObj) ? response.data.homeworkObj : { id: 0 };
                this.examObj = ((_c = response.data) === null || _c === void 0 ? void 0 : _c.examObj) ? response.data.examObj : { id: 0 };
                this.examFileObj = ((_d = response.data) === null || _d === void 0 ? void 0 : _d.examFileObj) ? response.data.examFileObj : { id: -1 };
                this.homeworkAnswerObj = ((_e = response.data) === null || _e === void 0 ? void 0 : _e.homeworkAnswerObj) ? response.data.homeworkAnswerObj : { id: 0 };
                this.status_obj = { loading: false, error: false };
            }
            else {
                this.status_obj = { loading: false, error: true };
                this.showErrorSnack((_f = response.message) !== null && _f !== void 0 ? _f : '');
            }
        }));
    }
    loginToThisAccount(id) {
        this.subscriptions.add(this.supportService.apiSupportGetTokenByUserGet(id).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f;
            if (response.success == 1) {
                this.status_obj = { loading: false, error: false };
                this.baseApiService.redirectLoginByRole('');
                switch (this.checkRedirect) {
                    case 'Homwork':
                        this.commonService.myNavigation(`/admin/homework/score-list/${(_a = this.homeworkObj) === null || _a === void 0 ? void 0 : _a.classroomId}/${(_b = this.homeworkObj) === null || _b === void 0 ? void 0 : _b.id}/${(_c = this.homeworkObj) === null || _c === void 0 ? void 0 : _c.hashId}`);
                        break;
                    case 'Exam':
                        this.commonService.myNavigation(`/admin/testbank/tested-list/${((_d = this.examObj) === null || _d === void 0 ? void 0 : _d.categoryId) != null ? this.examObj.categoryId : 0}/${(_e = this.examObj) === null || _e === void 0 ? void 0 : _e.id}/0`);
                        break;
                }
            }
            else {
                this.status_obj = { loading: false, error: true };
                this.showErrorSnack((_f = response.message) !== null && _f !== void 0 ? _f : '');
            }
        }));
    }
    getForgotPasswordLink(id) {
        this.subscriptions.add(this.supportService.apiSupportGetForgotPasswordCodeGet(id).subscribe((response) => {
            var _a, _b;
            if (response.success == 1) {
                this.status_obj = { loading: false, error: false };
                this.forgotpassword_link = this.commonService.getHostUrl() + this.commonService.getLocalRouter('/auth/confirm_forgot_password_old?token=') + ((_a = response.data) === null || _a === void 0 ? void 0 : _a.encodeStr);
                this.commonService.snackSuccess('Tạo link thành công', '');
            }
            else {
                this.status_obj = { loading: false, error: true };
                this.showErrorSnack((_b = response.message) !== null && _b !== void 0 ? _b : '');
            }
        }));
    }
    blockPhoneAccount(id) {
        this.subscriptions.add(this.supportService.apiSupportDisableAccountGet(id).subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.status_obj = { loading: false, error: false };
                this.commonService.snackSuccess('Khóa số phone thành công', '');
            }
            else {
                this.status_obj = { loading: false, error: true };
                this.showErrorSnack((_a = response.message) !== null && _a !== void 0 ? _a : '');
            }
        }));
    }
    redirectToHomeworkAndLogin(id) {
        this.checkRedirect = 'Homwork';
        this.loginToThisAccount(id);
    }
    redirectToExamAndLogin(id) {
        this.checkRedirect = 'Exam';
        this.loginToThisAccount(id);
    }
    copyExamByHashId(hashId) {
        this.subscriptions.add(this.copyExamService.apiCopyExamCopyExamByHashIdGet(hashId).subscribe((response) => {
            var _a, _b;
            if (response.success == 1) {
                this.status_obj = { loading: false, error: false };
                var curExamObj = (_a = response.data) === null || _a === void 0 ? void 0 : _a.obj;
                this.commonService.myNavigation(`/admin/testbank/tested-list/${(curExamObj === null || curExamObj === void 0 ? void 0 : curExamObj.categoryId) != null ? curExamObj.categoryId : 0}/${curExamObj === null || curExamObj === void 0 ? void 0 : curExamObj.id}/0`);
            }
            else {
                this.status_obj = { loading: false, error: true };
                this.showErrorSnack((_b = response.message) !== null && _b !== void 0 ? _b : '');
            }
        }));
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            full_name: [''],
            phone: [''],
            email: [''],
            user_id: [''],
            classroom_id: [''],
            homework_hashid: [''],
            exam_hashid: [''],
            homework_id: [''],
            exam_id: [''],
            homework_answer_id: [''],
            test_answer_id: ['']
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_auth_support_title',
            description: 'lang_cms_auth_support_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
}
SupportComponent.ɵfac = function SupportComponent_Factory(t) { return new (t || SupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.CopyExamService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.SupportService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__.BaseApiService)); };
SupportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SupportComponent, selectors: [["app-support"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 90, vars: 7, consts: [[3, "headerTitle", "back_link"], [1, "container-fluid", "component-wrap", "centerBoth", "hasBg", "mt-3"], [1, "card"], [1, "card-body"], [1, "form-horizontal", 2, "margin-top", "6vh", 3, "formGroup"], [1, "row"], [1, "col-sm-12"], [1, "form-group"], [1, "col-sm-12", "control-label"], ["type", "text", "formControlName", "phone", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "user_id", 1, "form-control"], ["type", "text", "formControlName", "classroom_id", 1, "form-control"], ["type", "text", "formControlName", "homework_id", 1, "form-control"], ["type", "text", "formControlName", "homework_hashid", 1, "form-control"], ["type", "text", "formControlName", "homework_answer_id", 1, "form-control"], ["type", "text", "formControlName", "exam_id", 1, "form-control"], ["type", "text", "formControlName", "exam_hashid", 1, "form-control"], ["type", "text", "formControlName", "test_answer_id", 1, "form-control"], ["mat-raised-button", "", "color", "primary", 2, "width", "100%", 3, "disabled", "click"], [4, "ngIf"], ["type", "text", 1, "form-control", 3, "value"], [1, "table-responsive"], [1, "table"], ["scope", "col"], ["scope", "col", 1, "text-right"], [4, "ngFor", "ngForOf"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "text-right"], ["mat-raised-button", "", "class", "mx-2 mb-1", "download", "proposed_file_name", "style", "text-transform: uppercase;", "target", "_black", 3, "href", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "download", "proposed_file_name", "target", "_black", 1, "mx-2", "mb-1", 2, "text-transform", "uppercase", 3, "href"]], template: function SupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3")(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "M\u00E0n h\u00ECnh h\u1ED7 tr\u1EE3 vi\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "User: T\u00ECm theo Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 7)(17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "User: T\u00ECm theo Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 7)(22, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "User: T\u00ECm theo ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 7)(27, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Classroom: T\u00ECm theo Id l\u1EDBp h\u1ECDc");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 7)(32, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "B\u00E0i t\u1EADp: T\u00ECm theo Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 7)(37, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "B\u00E0i t\u1EADp: T\u00ECm theo M\u00E3 b\u00E0i t\u1EADp");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 7)(42, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "B\u00E0i t\u1EADp: T\u00ECm theo Id k\u1EBFt qu\u1EA3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 7)(47, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "\u0110\u1EC1 thi: T\u00ECm theo Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 7)(52, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "\u0110\u1EC1 thi: T\u00ECm theo M\u00E3 \u0111\u1EC1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 7)(57, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "\u0110\u1EC1 thi: T\u00ECm theo Id k\u1EBFt qu\u1EA3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 7)(62, "div", 6)(63, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SupportComponent_Template_button_click_63_listener() { return ctx.form.invalid || ctx.status_obj.loading || ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, SupportComponent_span_64_Template, 3, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "T\u00ECm ki\u1EBFm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 7)(68, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Link qu\u00EAn m\u1EADt kh\u1EA9u");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 7)(73, "div", 6)(74, "div", 22)(75, "table", 23)(76, "thead")(77, "tr")(78, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "T\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Zalo ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "H\u00E0nh \u0111\u1ED9ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](89, SupportComponent_tr_89_Template, 22, 8, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headerTitle", "H\u1ED7 tr\u1EE3 kh\u00E1ch h\u00E0ng")("back_link", "/admin/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.status_obj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.status_obj.loading === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", ctx.forgotpassword_link);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.objs);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_4__.HeaderBackendComponent, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.MyCdnPipe], encapsulation: 2 });


/***/ }),

/***/ 18677:
/*!********************************************************************!*\
  !*** ./src/app/wsuper_admin/update-config/controller.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateConfigComponent": () => (/* binding */ UpdateConfigComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);










function UpdateConfigComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p")(7, "small")(8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 13)(11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UpdateConfigComponent_div_11_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const config_obj_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.saveConfig(config_obj_r1.controls["id"].value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "C\u1EADp nh\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const config_obj_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", config_obj_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](config_obj_r1.controls["name"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](config_obj_r1.controls["note"].value);
} }
class UpdateConfigComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(fb, commonService, supportService) {
        super(commonService);
        this.fb = fb;
        this.commonService = commonService;
        this.supportService = supportService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({});
        this.status_obj = { loading: false, error: false };
    }
    ngOnInit() {
        this.form = this.fb.group({
            config_objs: this.fb.array([])
        });
        this.getConfigObjs();
        this.commonService.translateMetaData({
            title: 'lang_cms_auth_update_config_title',
            description: 'lang_cms_auth_update_config_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
    saveConfig(id) {
        var form_object = this.commonService.getFormObj(this.form);
        var foundRecord = false;
        var foundValue = '';
        for (var i = 0; i < form_object.config_objs.length; i++) {
            if (form_object.config_objs[i].id == id) {
                foundRecord = true;
                foundValue = form_object.config_objs[i].value;
                break;
            }
        }
        if (foundRecord) {
            this.status_obj = { loading: true, error: false };
            this.subscriptions.add(this.supportService.apiSupportUpdateConfigObjPost({ id, value: foundValue }).subscribe((response) => {
                var _a;
                if (response.success == 1) {
                    this.status_obj = { loading: false, error: false };
                    this.commonService.snackSuccess('Lưu dữ liệu thành công', '');
                }
                else {
                    this.status_obj = { loading: false, error: true };
                    this.showErrorSnack((_a = response.message) !== null && _a !== void 0 ? _a : '');
                }
            }));
        }
        else {
            this.commonService.snackError('Không tìm thấy dữ liệu', '');
        }
    }
    getConfigObjs() {
        this.status_obj = { loading: true, error: false };
        this.subscriptions.add(this.supportService.apiSupportGetConfigObjsGet().subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g;
            if (response.success == 1) {
                this.objs = response.data;
                var formArrs = this.fb.array([]);
                for (var i = 0; i < ((_b = (_a = this.objs) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0); i++) {
                    var subFormArrs = this.fb.group({
                        id: [(_c = this.objs) === null || _c === void 0 ? void 0 : _c[i].id, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
                        name: [(_d = this.objs) === null || _d === void 0 ? void 0 : _d[i].name, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
                        value: [(_e = this.objs) === null || _e === void 0 ? void 0 : _e[i].value, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
                        note: [(_f = this.objs) === null || _f === void 0 ? void 0 : _f[i].note]
                    });
                    formArrs.push(subFormArrs);
                }
                this.form.setControl('config_objs', formArrs);
                this.status_obj = { loading: false, error: false };
            }
            else {
                this.status_obj = { loading: false, error: true };
                this.showErrorSnack((_g = response.message) !== null && _g !== void 0 ? _g : '');
            }
        }));
    }
}
UpdateConfigComponent.ɵfac = function UpdateConfigComponent_Factory(t) { return new (t || UpdateConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.SupportService)); };
UpdateConfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UpdateConfigComponent, selectors: [["app-update-config"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 4, consts: [[3, "headerTitle", "back_link"], [1, "container-fluid", "component-wrap", "centerBoth", "hasBg", "mt-3"], [1, "card"], [1, "card-body"], [1, "form-horizontal", 2, "margin-top", "6vh", 3, "formGroup"], [1, "row"], [1, "col-sm-12"], ["class", "form-group", 4, "ngFor", "ngForOf"], [1, "form-group"], [1, "row", 3, "formGroup"], [1, "col-sm-2", "control-label"], [1, "col-sm-6"], ["type", "text", "formControlName", "value", 1, "form-control"], [1, "col-sm-3"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function UpdateConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3")(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "C\u1EADp nh\u1EADt c\u1EA5u h\u00ECnh");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 4)(9, "div", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, UpdateConfigComponent_div_11_Template, 14, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headerTitle", "C\u1EADp nh\u1EADt c\u1EA5u h\u00ECnh")("back_link", "/admin/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.form.controls["config_objs"]["controls"]);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__.HeaderBackendComponent], encapsulation: 2 });


/***/ }),

/***/ 96740:
/*!******************************************************************!*\
  !*** ./src/app/wsuper_admin/upload-file/controller.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadFileComponent": () => (/* binding */ UploadFileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 40520);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/upload.api.service */ 29401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);













function UploadFileComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "mycdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "mycdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadFileComponent_div_14_div_1_Template_span_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const curAnswerIndex_r5 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.removeFile(curAnswerIndex_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const answer_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, answer_r4.thumb == null ? null : answer_r4.thumb.url), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, answer_r4.thumb == null ? null : answer_r4.thumb.url));
} }
function UploadFileComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UploadFileComponent_div_14_div_1_Template, 7, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.answerFiles);
} }
function UploadFileComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class UploadFileComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(fb, fileContentService, commonService, apiUploadService) {
        super(commonService);
        this.fb = fb;
        this.fileContentService = fileContentService;
        this.commonService = commonService;
        this.apiUploadService = apiUploadService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({});
        this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
        this.answerFiles = [];
        this.selectFile = (eventObj) => {
            let target = eventObj.target;
            let files = target.files;
            try {
                for (var key in files) {
                    if (key != 'length' && key != 'item') {
                        this.answerFile = files ? files[key] : this.answerFile;
                        if (this.answerFile) {
                            this.status_obj = { loading: true, error: false, error_obj: { message: '' } };
                            this.uploadPPT(this.answerFile);
                        }
                    }
                }
            }
            catch (err) {
                alert('Đã xảy ra lỗi:' + err);
            }
        };
        this.uploadPPT = (file) => {
            this.apiUploadService.uploadPptThumbnail(file).subscribe((thumbResponse) => {
                if (thumbResponse.success == 1) {
                    this.apiUploadService.uploadToCdnForPptFile(file).subscribe((pptResponse) => {
                        if (pptResponse.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpEventType.UploadProgress) {
                            if (pptResponse.success == 1) {
                                if (!Array.isArray(this.answerFiles)) {
                                    this.answerFiles = [];
                                }
                                var curFileData = {
                                    thumb: thumbResponse.data,
                                    ppt: pptResponse.data
                                };
                                this.answerFiles.push(curFileData);
                                this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
                            }
                            else {
                                this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
                                this.commonService.snackError('Không Upload được file PowerPoint! Vui lòng thử lại sau!', '');
                            }
                        }
                    });
                }
                else {
                    this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
                    this.commonService.snackError('Không Upload được file Thumbnail! Vui lòng thử lại sau!', '');
                }
            });
        };
        this.answerFile = null;
    }
    saveObj() {
        this.status_obj = { loading: true, error: false, error_obj: { message: '' } };
        this.fileContentService.apiFileContentSaveObjPost({ files: this.answerFiles.toString() }).subscribe((response) => {
            this.status_obj = { loading: false, error: false, error_obj: { message: '' } };
            if (response.success == 1) {
                this.commonService.snackSuccess('Tạo nội dung thành công', '');
            }
            else {
                this.commonService.snackError('Tạo nội dung bị lỗi!', '');
            }
        });
    }
    removeFile(index) {
        if (this.answerFiles[index]) {
            delete this.answerFiles[index];
        }
    }
    ngOnInit() {
        this.form = this.fb.group({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required)
        });
        super.ngOnInit();
    }
}
UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) { return new (t || UploadFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_1__.FileContentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiUploadService)); };
UploadFileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UploadFileComponent, selectors: [["app-upload-file"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 10, consts: [[1, "container-fluid", "mt-5", "mb-5"], ["enctype", "multipart/form-data", 1, "form-horizontal", "text-center", 3, "formGroup"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "text-center", "v-dragndrop", "dropzone", "dz-started"], ["id", "dropzone-3404", 1, "px-4", "py-3", "rounded", 2, "cursor", "pointer", 3, "click"], [1, "file"], ["id", "select-upload-file", 1, "align-self-center", "select", "dz-clickable"], ["type", "file", "id", "file_select", "multiple", "", "formControlName", "file", 1, "form-control", "file-input", 3, "change"], ["fileSelect", ""], ["class", "row ml-0 mr-0 mt-4 attach-container", 4, "ngIf"], [1, "mt-20"], [1, "col-sm-12"], ["mat-raised-button", "", "color", "primary", 2, "margin-top", "20px", 3, "disabled", "click"], [4, "ngIf"], [1, "row", "ml-0", "mr-0", "mt-4", "attach-container"], ["class", "img-container", 4, "ngFor", "ngForOf"], [1, "img-container"], [1, "img-fluid", "item", 3, "src", "alt"], [1, "notify-badge", 3, "click"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function UploadFileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadFileComponent_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.click()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "a", 5)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UploadFileComponent_Template_input_change_12_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, UploadFileComponent_div_14_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadFileComponent_Template_button_click_17_listener() { return ctx.saveObj(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, UploadFileComponent_span_18_Template, 3, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 6, "lang_wsuper_admin_upload_file_choose_file_upload"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.answerFiles.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.status_obj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.status_obj.loading === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 8, "lang_wsuper_admin_upload_file_save_powerpoint"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MyCdnPipe], styles: [".v-dragndrop[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: rgba(27, 171, 161, 0.05);\n  border: 1px dashed #1baba1;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n  line-height: 1.5;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dz-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #007bff;\n}\n\n@media (max-width: 768px) {\n  .dropzone[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n\n  ._col-left[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}"] });


/***/ }),

/***/ 84825:
/*!********************************************************************!*\
  !*** ./src/app/wsuper_admin/upload_assets/controller.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadAssetsComponent": () => (/* binding */ UploadAssetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 40520);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/upload.api.service */ 29401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 87238);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);












function UploadAssetsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 1, "lang_wsuper_admin_upload_review"), "!");
} }
function UploadAssetsComponent_div_11_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAssetsComponent_div_11_div_1_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const file_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.removeImg(file_r4.url || "")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function UploadAssetsComponent_div_11_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 31)(1, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "check_box_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function UploadAssetsComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "a", 25)(2, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, UploadAssetsComponent_div_11_div_1_span_6_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, UploadAssetsComponent_div_11_div_1_span_7_Template, 3, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", file_r4.name || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](file_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isSuccess != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isSuccess);
} }
function UploadAssetsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UploadAssetsComponent_div_11_div_1_Template, 8, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.uploadFiles);
} }
class UploadAssetsComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(formBuilder, commonService, apiUploadService) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.apiUploadService = apiUploadService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({});
        this.isLoading = false;
        this.isSuccess = false;
        this.uploadCount = 0;
        this.uploadFiles = [];
        this.uploadFile = (file) => {
            var form_object = this.commonService.getFormObj(this.form);
            this.apiUploadService.uploadAssetsToCdnProgress(form_object.folder_name, file).subscribe((cls) => {
                if (cls.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpEventType.UploadProgress) {
                    if ((cls.success == 1)) {
                        if (cls.data) {
                            this.uploadFiles.push(cls.data);
                        }
                        this.successStatusObj();
                    }
                    else {
                        this.errorStatusObj('Không Upload được ảnh! Vui lòng thử lại sau! Lỗi: [SPLIT_LANG]' + cls.message, true);
                    }
                }
            });
        };
        this.answerFile = null;
    }
    selectFile(eventObj) {
        let target = eventObj.target;
        let files = target.files;
        try {
            for (var key in files) {
                if (key != 'length' && key != 'item') {
                    this.answerFile = files ? files[key] : this.answerFile;
                    // add assoc key values, this will be posts values
                    if (this.answerFile) {
                        this.isSuccess = false;
                        this.initStatusObj();
                        this.uploadFile(this.answerFile);
                        this.uploadCount += 1;
                    }
                }
            }
            if (target) {
                target.value = '';
            }
        }
        catch (err) {
            alert('Đã xảy ra lỗi:' + err);
        }
    }
    removeImg(url) {
        var find_file = this.uploadFiles.filter((file) => file.url !== url);
        this.uploadFiles = find_file;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            folder_name: [''],
        });
        super.ngOnInit();
    }
}
UploadAssetsComponent.ɵfac = function UploadAssetsComponent_Factory(t) { return new (t || UploadAssetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiUploadService)); };
UploadAssetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UploadAssetsComponent, selectors: [["app-upload-assets"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 6, consts: [[1, "form-horizontal", 2, "margin-top", "6vh", 3, "formGroup"], [1, "rowr"], [1, "form-group"], [1, "col-sm-12", "control-label"], [1, "col-sm-12"], ["type", "text", "formControlName", "folder_name", 1, "form-control"], ["id", "component-upload-image-mobile"], [1, "card-box"], [1, "description"], ["class", "text-center m-4", 4, "ngIf"], ["class", "row ml-0 mr-0 mt-1 mb-1 pb-3 pt-3 attach-container", 4, "ngIf"], [1, "summitForm", "pt-5", "pb-5"], [1, "row", "pl-3", "pr-3"], [1, "col-12", "text-center", "v-dragndrop"], [1, "px-4", "py-3", "rounded", 2, "cursor", "pointer", 3, "click"], [1, "file"], ["id", "select-upload-file", 1, "align-self-center", "select", "dz-clickable"], ["type", "file", "id", "file_select", "multiple", "", 1, "form-control", "d-none", 3, "change"], ["fileSelect", ""], [1, "text-center", "m-4"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "h5"], [1, "row", "ml-0", "mr-0", "mt-1", "mb-1", "pb-3", "pt-3", "attach-container"], ["class", "col-12 box-file mt-2", 4, "ngFor", "ngForOf"], [1, "col-12", "box-file", "mt-2"], ["target", "_blank", 1, "clickable", 2, "display", "flex", "margin-top", "3px", "font-size", "14px"], [2, "font-size", "20px", "vertical-align", "sub"], [1, "truncate", 2, "line-height", "1.6", "max-width", "75%", 3, "matTooltip"], ["class", "notify-badge", 3, "click", 4, "ngIf"], ["class", "notify-badge", 4, "ngIf"], [1, "notify-badge", 3, "click"], [1, "notify-badge"], [2, "color", "rgb(26,188,0)"]], template: function UploadAssetsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, UploadAssetsComponent_div_10_Template, 7, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, UploadAssetsComponent_div_11_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAssetsComponent_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2.click()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 15)(17, "a", 16)(18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function UploadAssetsComponent_Template_input_change_20_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.uploadFiles.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 4, "lang_wsuper_admin_upload_choose_file"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__.MytranslatePipe], styles: [".card-box[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgb(0, 167, 208);\n}\n\n.top-row[_ngcontent-%COMP%] {\n  background-color: rgb(0, 167, 208);\n  margin: 0;\n  padding: 10px;\n}\n\n.text-white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.text-white[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.description[_ngcontent-%COMP%], .files[_ngcontent-%COMP%] {\n  border-width: 0px;\n  background: inherit;\n  background-color: rgb(242, 242, 242);\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgb(229, 229, 229);\n  border-left: 0px;\n  border-right: 0px;\n  border-radius: 0px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  box-shadow: none;\n  padding: 0 10px;\n}\n\n.description[_ngcontent-%COMP%] {\n  padding: 10px 10px 0;\n}\n\n.files[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  vertical-align: super;\n}\n\n.students[_ngcontent-%COMP%] {\n  border-width: 0px;\n  background: inherit;\n  background-color: rgb(255, 255, 255);\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.062745098);\n}\n\n.list-student[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: inherit;\n  background-color: rgb(250, 250, 250);\n  box-sizing: border-box;\n  border-width: 1px;\n  padding: 10px 15px;\n  border-style: solid;\n  border-color: rgb(224, 224, 224);\n  border-radius: 3px;\n  box-shadow: none;\n  font-weight: 400;\n  font-style: bold;\n  display: block;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: rgba(27, 171, 161, 0.05);\n  border: 1px dashed #1baba1;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n  line-height: 1.5;\n}\n\n.pl-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-left: 1.5rem !important;\n}\n\n.pr-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-right: 1.5rem !important;\n}\n\n.pb-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-bottom: 1rem !important;\n}\n\n.pt-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-top: 1rem !important;\n}\n\n.btn-warm-orange[_ngcontent-%COMP%] {\n  background: #ff7f45;\n  border: 1px solid #ff7f45;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0s;\n}\n\n.text-dark-green[_ngcontent-%COMP%] {\n  color: #1caba0 !important;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.small[_ngcontent-%COMP%], small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.mt-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dz-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #007bff;\n}\n\n.item[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.notify-badge[_ngcontent-%COMP%] {\n  color: rgb(175, 175, 175);\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.flex-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.flex-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgb(0, 167, 208);\n  cursor: pointer;\n  margin-left: 5px;\n}\n\n.flex-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.4;\n  font-weight: 500;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 90px;\n  width: 90px;\n  margin: 0 0 10px 10px;\n  border-radius: 7px;\n}\n\n.img-responsive[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: auto;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.attach-container[_ngcontent-%COMP%] {\n  padding: 10px 0 0 0;\n}\n\n.maxW1200[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n@font-face {\n  font-family: handwriting_font;\n  src: url(\"https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/fonts/HP0015HB.ttf\");\n}\n\n._col-left[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  line-height: 1;\n  padding: 35px;\n}\n\n._col-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  color: #ff0024;\n}\n\n._col-right[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  position: relative;\n  padding: 10px;\n}\n\n._col-right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  left: 20px;\n  background-color: #f1f1f1;\n}\n\n._col-right[_ngcontent-%COMP%]   .content-homework[_ngcontent-%COMP%] {\n  color: red;\n  line-height: 1.4;\n  font-size: 20px;\n}\n\n._col-left_result[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  line-height: 1;\n  padding: 10px;\n}\n\n._col-left_result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #ff0024;\n}\n\n._col-right_result[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  position: relative;\n  padding: 10px;\n}\n\n._col-right_result[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  left: 20px;\n  background-color: #f1f1f1;\n}\n\n._col-right_result[_ngcontent-%COMP%]   .content-homework[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 16px;\n  line-height: 1.4;\n}\n\n.files[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.testbank[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  text-align: left;\n}\n\n.testbank__title[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 500;\n}\n\n.testbank_fileitem[_ngcontent-%COMP%] {\n  display: flex;\n  color: #00a7d0;\n  margin-top: 15px;\n}\n\n.testbank_fileitem_icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.testbank_fileitem_name[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.testbank_fileitem_info_resualt[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 500;\n  font-size: small;\n  margin-right: 15px;\n}\n\n.testbank_fileitem_info_time[_ngcontent-%COMP%] {\n  color: #9D9D9D;\n}\n\n.testbank_fileitem_info_btn_submit[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n@media (max-width: 768px) {\n  .dropzone[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n\n  ._col-left[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  ._col-left_result[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .testbank_fileitem[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 576px) {\n  .flex-title[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .flex-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    margin-left: 0;\n  }\n}\n\n.box-file[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n}"] });


/***/ }),

/***/ 8970:
/*!*******************************************************************!*\
  !*** ./src/app/wsuper_admin/upload_mnote/controller.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadMnoteComponent": () => (/* binding */ UploadMnoteComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 40520);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/upload.api.service */ 29401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 87238);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);












function UploadMnoteComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 1, "lang_wsuper_admin_upload_review"), "!");
} }
function UploadMnoteComponent_div_11_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadMnoteComponent_div_11_div_1_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const file_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.removeImg(file_r4.url || "")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function UploadMnoteComponent_div_11_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 31)(1, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "check_box_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function UploadMnoteComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "a", 25)(2, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, UploadMnoteComponent_div_11_div_1_span_6_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, UploadMnoteComponent_div_11_div_1_span_7_Template, 3, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", file_r4.name || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](file_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isSuccess != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isSuccess);
} }
function UploadMnoteComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UploadMnoteComponent_div_11_div_1_Template, 8, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.uploadFiles);
} }
class UploadMnoteComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(formBuilder, commonService, apiUploadService) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.apiUploadService = apiUploadService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({});
        this.isLoading = false;
        this.isSuccess = false;
        this.uploadCount = 0;
        this.uploadFiles = [];
        this.uploadFile = (file) => {
            var form_object = this.commonService.getFormObj(this.form);
            this.apiUploadService.uploadMnoteToCdnProgress(form_object.folder_name, file).subscribe((cls) => {
                if (cls.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpEventType.UploadProgress) {
                    if ((cls.success == 1)) {
                        if (cls.data) {
                            this.uploadFiles.push(cls.data);
                        }
                        this.successStatusObj();
                    }
                    else {
                        this.errorStatusObj('Không Upload được ảnh! Vui lòng thử lại sau! Lỗi: [SPLIT_LANG]' + cls.message, true);
                    }
                }
            });
        };
        this.answerFile = null;
    }
    selectFile(eventObj) {
        let target = eventObj.target;
        let files = target.files;
        try {
            for (var key in files) {
                if (key != 'length' && key != 'item') {
                    this.answerFile = files ? files[key] : this.answerFile;
                    // add assoc key values, this will be posts values
                    if (this.answerFile) {
                        this.isSuccess = false;
                        this.initStatusObj();
                        this.uploadFile(this.answerFile);
                    }
                }
            }
            if (target) {
                target.value = '';
            }
        }
        catch (err) {
            alert('Đã xảy ra lỗi:' + err);
        }
    }
    removeImg(url) {
        var find_file = this.uploadFiles.filter((file) => file.url !== url);
        this.uploadFiles = find_file;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            folder_name: [''],
        });
        super.ngOnInit();
    }
}
UploadMnoteComponent.ɵfac = function UploadMnoteComponent_Factory(t) { return new (t || UploadMnoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiUploadService)); };
UploadMnoteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UploadMnoteComponent, selectors: [["app-upload-mnote"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 6, consts: [[1, "form-horizontal", 2, "margin-top", "6vh", 3, "formGroup"], [1, "rowr"], [1, "form-group"], [1, "col-sm-12", "control-label"], [1, "col-sm-12"], ["type", "text", "formControlName", "folder_name", 1, "form-control"], ["id", "component-upload-image-mobile"], [1, "card-box"], [1, "description"], ["class", "text-center m-4", 4, "ngIf"], ["class", "row ml-0 mr-0 mt-1 mb-1 pb-3 pt-3 attach-container", 4, "ngIf"], [1, "summitForm", "pt-5", "pb-5"], [1, "row", "pl-3", "pr-3"], [1, "col-12", "text-center", "v-dragndrop"], [1, "px-4", "py-3", "rounded", 2, "cursor", "pointer", 3, "click"], [1, "file"], ["id", "select-upload-file", 1, "align-self-center", "select", "dz-clickable"], ["type", "file", "id", "file_select", "multiple", "", 1, "form-control", "d-none", 3, "change"], ["fileSelect", ""], [1, "text-center", "m-4"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "h5"], [1, "row", "ml-0", "mr-0", "mt-1", "mb-1", "pb-3", "pt-3", "attach-container"], ["class", "col-12 box-file mt-2", 4, "ngFor", "ngForOf"], [1, "col-12", "box-file", "mt-2"], ["target", "_blank", 1, "clickable", 2, "display", "flex", "margin-top", "3px", "font-size", "14px"], [2, "font-size", "20px", "vertical-align", "sub"], [1, "truncate", 2, "line-height", "1.6", "max-width", "75%", 3, "matTooltip"], ["class", "notify-badge", 3, "click", 4, "ngIf"], ["class", "notify-badge", 4, "ngIf"], [1, "notify-badge", 3, "click"], [1, "notify-badge"], [2, "color", "rgb(26,188,0)"]], template: function UploadMnoteComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, UploadMnoteComponent_div_10_Template, 7, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, UploadMnoteComponent_div_11_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadMnoteComponent_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2.click()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 15)(17, "a", 16)(18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function UploadMnoteComponent_Template_input_change_20_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.uploadFiles.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 4, "lang_wsuper_admin_upload_choose_file"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__.MytranslatePipe], styles: [".card-box[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgb(0, 167, 208);\n}\n\n.top-row[_ngcontent-%COMP%] {\n  background-color: rgb(0, 167, 208);\n  margin: 0;\n  padding: 10px;\n}\n\n.text-white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.text-white[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.description[_ngcontent-%COMP%], .files[_ngcontent-%COMP%] {\n  border-width: 0px;\n  background: inherit;\n  background-color: rgb(242, 242, 242);\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgb(229, 229, 229);\n  border-left: 0px;\n  border-right: 0px;\n  border-radius: 0px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  box-shadow: none;\n  padding: 0 10px;\n}\n\n.description[_ngcontent-%COMP%] {\n  padding: 10px 10px 0;\n}\n\n.files[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  vertical-align: super;\n}\n\n.students[_ngcontent-%COMP%] {\n  border-width: 0px;\n  background: inherit;\n  background-color: rgb(255, 255, 255);\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.062745098);\n}\n\n.list-student[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: inherit;\n  background-color: rgb(250, 250, 250);\n  box-sizing: border-box;\n  border-width: 1px;\n  padding: 10px 15px;\n  border-style: solid;\n  border-color: rgb(224, 224, 224);\n  border-radius: 3px;\n  box-shadow: none;\n  font-weight: 400;\n  font-style: bold;\n  display: block;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: rgba(27, 171, 161, 0.05);\n  border: 1px dashed #1baba1;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n  line-height: 1.5;\n}\n\n.pl-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-left: 1.5rem !important;\n}\n\n.pr-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-right: 1.5rem !important;\n}\n\n.pb-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-bottom: 1rem !important;\n}\n\n.pt-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-top: 1rem !important;\n}\n\n.btn-warm-orange[_ngcontent-%COMP%] {\n  background: #ff7f45;\n  border: 1px solid #ff7f45;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0s;\n}\n\n.text-dark-green[_ngcontent-%COMP%] {\n  color: #1caba0 !important;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.small[_ngcontent-%COMP%], small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.mt-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dz-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #007bff;\n}\n\n.item[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.notify-badge[_ngcontent-%COMP%] {\n  color: rgb(175, 175, 175);\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.flex-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.flex-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgb(0, 167, 208);\n  cursor: pointer;\n  margin-left: 5px;\n}\n\n.flex-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.4;\n  font-weight: 500;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 90px;\n  width: 90px;\n  margin: 0 0 10px 10px;\n  border-radius: 7px;\n}\n\n.img-responsive[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: auto;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.attach-container[_ngcontent-%COMP%] {\n  padding: 10px 0 0 0;\n}\n\n.maxW1200[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n._col-left[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  line-height: 1;\n  padding: 35px;\n}\n\n._col-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  color: #ff0024;\n}\n\n._col-right[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  position: relative;\n  padding: 10px;\n}\n\n._col-right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  left: 20px;\n  background-color: #f1f1f1;\n}\n\n._col-right[_ngcontent-%COMP%]   .content-homework[_ngcontent-%COMP%] {\n  color: red;\n  line-height: 1.4;\n  font-size: 20px;\n}\n\n._col-left_result[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  line-height: 1;\n  padding: 10px;\n}\n\n._col-left_result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #ff0024;\n}\n\n._col-right_result[_ngcontent-%COMP%] {\n  border: 1px dashed #d3d5d8;\n  background-color: #f1f1f1;\n  position: relative;\n  padding: 10px;\n}\n\n._col-right_result[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  left: 20px;\n  background-color: #f1f1f1;\n}\n\n._col-right_result[_ngcontent-%COMP%]   .content-homework[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 16px;\n  line-height: 1.4;\n}\n\n.files[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.testbank[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  text-align: left;\n}\n\n.testbank__title[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 500;\n}\n\n.testbank_fileitem[_ngcontent-%COMP%] {\n  display: flex;\n  color: #00a7d0;\n  margin-top: 15px;\n}\n\n.testbank_fileitem_icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.testbank_fileitem_name[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.testbank_fileitem_info_resualt[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 500;\n  font-size: small;\n  margin-right: 15px;\n}\n\n.testbank_fileitem_info_time[_ngcontent-%COMP%] {\n  color: #9D9D9D;\n}\n\n.testbank_fileitem_info_btn_submit[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n@media (max-width: 768px) {\n  .dropzone[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n\n  ._col-left[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  ._col-left_result[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .testbank_fileitem[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 576px) {\n  .flex-title[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .flex-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    margin-left: 0;\n  }\n}\n\n.box-file[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n}"] });


/***/ })

}]);