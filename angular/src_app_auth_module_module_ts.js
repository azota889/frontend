"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_auth_module_module_ts"],{

/***/ 19936:
/*!**********************************************************!*\
  !*** ./src/app/auth/change_info/controller.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeInfoComponent": () => (/* binding */ ChangeInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ 83277);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var src_app_core_directives_CustomNgxDatetimeAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/directives/CustomNgxDatetimeAdapter */ 90322);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/validator/whitespace.validator */ 41303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/redirect.service */ 42873);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/user.service */ 88386);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 46287);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);























function ChangeInfoComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 13)(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 1, "lang_cms_common_loading"), "...");
} }
function ChangeInfoComponent_div_14_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " M\u1EADt kh\u1EA9u ph\u1EA3i d\u00E0i t\u1ED1i thi\u1EC3u l\u00E0 6! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ChangeInfoComponent_div_14_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ChangeInfoComponent_div_14_div_17_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.getErrorType("password", "required") || ctx_r2.getErrorType("password", "minlength"));
} }
function ChangeInfoComponent_div_14_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ch\u1EC9 g\u1ED3m c\u00E1c ch\u1EEF s\u1ED1 v\u00E0 d\u00E0i 10 k\u00FD t\u1EF1! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ChangeInfoComponent_div_14_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ChangeInfoComponent_div_14_div_28_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.getErrorType("phone", "pattern") || ctx_r3.getErrorType("phone", "minlength") || ctx_r3.getErrorType("phone", "maxlength"));
} }
function ChangeInfoComponent_div_14_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ChangeInfoComponent_div_14_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 15)(1, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, ctx_r6.statusObj.errorMessage), "");
} }
function ChangeInfoComponent_div_14_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ChangeInfoComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 15)(2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 19)(6, "span", 20)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "account_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 15)(10, "div", 16)(11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 19)(14, "span", 20)(15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, ChangeInfoComponent_div_14_div_17_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 15)(19, "div", 16)(20, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 19)(23, "span", 20)(24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "phone_enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChangeInfoComponent_div_14_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r10.goToConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Click v\u00E0o \u0111\u00E2y n\u1EBFu b\u1EA1n mu\u1ED1n \u0111\u1ED5i s\u1ED1 \u0111i\u1EC7n tho\u1EA1i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, ChangeInfoComponent_div_14_div_28_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 15)(30, "div", 16)(31, "div", 26)(32, "mat-radio-group", 27)(33, "div", 2)(34, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, " Gi\u1EDBi t\u00EDnh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 29)(37, "mat-radio-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Nam");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "mat-radio-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "N\u1EEF");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 15)(42, "div", 32)(43, "mat-form-field", 33)(44, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChangeInfoComponent_div_14_Template_input_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](49); return _r4.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChangeInfoComponent_div_14_Template_button_click_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](49); _r4.open(); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "ngx-mat-datetime-picker", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, ChangeInfoComponent_div_14_ng_template_50_Template, 2, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, ChangeInfoComponent_div_14_div_51_Template, 4, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 15)(53, "div", 39)(54, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChangeInfoComponent_div_14_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r14.form.invalid || ctx_r14.statusObj.loading || ctx_r14.changeInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, ChangeInfoComponent_div_14_span_55_Template, 3, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "C\u1EADp nh\u1EADt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 41)(58, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChangeInfoComponent_div_14_Template_a_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r15.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Quay l\u1EA1i trang ch\u1EE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](49);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["password"].invalid && (ctx_r1.form.controls["password"].dirty || ctx_r1.form.controls["password"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["phone"].invalid && (ctx_r1.form.controls["phone"].dirty || ctx_r1.form.controls["phone"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngxMatDatetimePicker", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hideTime", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.statusObj.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.form.invalid || ctx_r1.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.statusObj.loading);
} }
const CUSTOM_DATE_FORMATS = {
    parse: {
        dateInput: 'l, LTS'
    },
    display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    }
};
class ChangeInfoComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(formBuilder, commonService, baseApiService, authService, redirectService, userService, datepipe) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.authService = authService;
        this.redirectService = redirectService;
        this.userService = userService;
        this.datepipe = datepipe;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({});
        this.startDate = new Date(1990, 1, 1);
        this.gender = 0;
        this.prevData = '';
        this.returnUrl = '';
    }
    getErrorType(field, type) {
        var _a, _b, _c, _d, _e, _f;
        if ((_c = (_b = (_a = this.form.controls) === null || _a === void 0 ? void 0 : _a[field]) === null || _b === void 0 ? void 0 : _b.errors) === null || _c === void 0 ? void 0 : _c[type]) {
            return (_f = (_e = (_d = this.form.controls) === null || _d === void 0 ? void 0 : _d[field]) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f[type];
        }
        else {
            return false;
        }
    }
    goToConfirm() {
        this.returnUrl = '/auth/change-info';
        var queryString = '?return_url=' + encodeURIComponent(this.returnUrl) + '&confirm_type=change_phone';
        this.commonService.myNavigationWithQueryString('/auth/checking_service', queryString);
    }
    allowChangePhone() {
        var userObj = this.baseApiService.getUserObj();
        var curPhone = userObj.phone ? userObj.phone : '';
        var zaloId = userObj.zaloId ? userObj.zaloId : '';
        if (zaloId != '' && zaloId == curPhone) {
            return true;
        }
        else {
            return false;
        }
    }
    changeInfo() {
        var _a;
        if (this.form.valid) {
            var form_object = this.commonService.getFormObj(this.form);
            var birthDay = form_object.birthday ? (new Date(Date.parse(form_object.birthday))) : this.startDate;
            var body = {
                fullName: form_object.fullName,
                birthday: (_a = this.datepipe.transform(birthDay, 'yyyy-MM-ddTHH:mm:ss')) !== null && _a !== void 0 ? _a : '',
                email: form_object.email,
                gender: form_object.gender,
                password: form_object.password
            };
            this.initStatusObj();
            this.subscriptions.add(this.authService.apiAuthUpdateInfoPost(body).subscribe((response) => {
                if (response.success == 1) {
                    this.successStatusObj('Cập nhật thông tin thành công!', true);
                }
                else {
                    this.errorStatusObj('Cập nhật thông tin không thành công!', true);
                }
            }));
        }
    }
    goBack() {
        this.baseApiService.redirectLoginByRole('');
    }
    getInfo() {
        var _a;
        var userObj = this.baseApiService.getUserObj();
        var birthDay = userObj.birthday ? (new Date(userObj.birthday)) : (new Date(1990, 1, 1));
        this.startDate = birthDay;
        this.gender = (_a = userObj.gender) !== null && _a !== void 0 ? _a : 0;
        this.form.patchValue({
            fullName: this.userService.isAnonymousName(userObj) ? '' : userObj.fullName,
            phone: userObj.phone ? userObj.phone : '',
            gender: this.gender != 1 ? '0' : '1',
        });
        this.form.controls.birthday.setValue(birthDay);
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_2__.WhiteSpaceValidator.noWhiteSpace]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern('^[0-9]*$')]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(6)]),
        });
        if (this.baseApiService.isAnonymousRole()) {
            this.redirectService.redirectSimpleRegister();
        }
        else {
            this.getInfo();
            this.form.valueChanges.subscribe((data) => {
                let str = JSON.stringify(data);
                if (str != this.prevData) {
                    this.prevData = str;
                    this.form.patchValue(data);
                }
            });
            this.commonService.translateMetaData({
                title: 'lang_cms_auth_change_info_title',
                description: 'lang_cms_auth_change_info_description',
                image: 'lang_cms_test_image',
            });
            super.ngOnInit();
        }
    }
}
ChangeInfoComponent.ɵfac = function ChangeInfoComponent_Factory(t) { return new (t || ChangeInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_6__.RedirectService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe)); };
ChangeInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ChangeInfoComponent, selectors: [["app-change-info"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe,
            {
                provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_12__.NgxMatDateAdapter,
                useClass: src_app_core_directives_CustomNgxDatetimeAdapter__WEBPACK_IMPORTED_MODULE_0__.CustomNgxDatetimeAdapter,
                deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_LOCALE, src_app_core_directives_CustomNgxDatetimeAdapter__WEBPACK_IMPORTED_MODULE_0__.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            },
            { provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_12__.NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
            { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'never' } }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 6, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "form-horizontal", 2, "margin-top", "4vh", 3, "formGroup"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "text-center"], ["alt", "logo", 2, "width", "180px", 3, "src"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "h5"], [1, "card-body"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "form-group"], [1, "col-sm-12"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "H\u1ECD v\u00E0 t\u00EAn", "formControlName", "fullName", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "password", "placeholder", "M\u1EADt kh\u1EA9u m\u1EDBi", "formControlName", "password", "autocomplete", "new-password", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "input-group", "mb-1"], ["type", "text", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", "formControlName", "phone", 1, "form-control"], [1, "clickable", "text-info", 2, "font-size", "13px", "padding-left", "5px", 3, "click"], [1, "input-group", "input-custom"], ["formControlName", "gender", "color", "primary", 2, "width", "100%"], [1, "col-5"], [1, "col-7"], ["value", "1", 1, "col-6", "p-0"], ["value", "0"], [1, "col-sm-12", "studentBirthDay"], ["id", "birthday", 1, "myTimePicker", 2, "border", "1px solid #ced4da", "border-radius", "3px", "padding-top", "2px"], ["matInput", "", "placeholder", "Ng\u00E0y sinh", "formControlName", "birthday", "readonly", "", 1, "form-birthday", "bg-white", 3, "ngxMatDatetimePicker", "click"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [3, "hideTime"], ["birthDay", ""], ["class", "form-group", 4, "ngIf"], [1, "col-sm-12", "text-center"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "text-center", "mt-3"], [1, "clickable", 3, "click"], [1, "alert", "alert-danger"], [1, "col-sm-12", "control-label", "text-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function ChangeInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "convertCdn");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "S\u1EEDa th\u00F4ng tin t\u00E0i kho\u1EA3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, ChangeInfoComponent_div_13_Template, 6, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ChangeInfoComponent_div_14_Template, 60, 8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 4, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_12__.NgxMatDatetimeInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_12__.NgxMatDatetimePicker], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__.ConvertCdnPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__.MytranslatePipe], styles: [".mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.28125em;\n}\n\n  .mat-form-field-appearance-legacy .mat-form-field-label {\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n}\n\n.form-birthday[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n#birthday[_ngcontent-%COMP%]:focus, #birthday[_ngcontent-%COMP%]:active, #birthday[_ngcontent-%COMP%]:target, #birthday[_ngcontent-%COMP%]:visited, #birthday[_ngcontent-%COMP%]:focus-within, #birthday[_ngcontent-%COMP%]:focus-visible {\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.hover-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #ebe9e9;\n}\n\n.input-custom[_ngcontent-%COMP%] {\n  border: 1px solid #e2e2e2;\n  border-radius: 3px;\n  padding-left: 12px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFFQTs7QUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0FBR0o7O0FBREE7Ozs7OztFQU9JLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0RBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUtKIiwiZmlsZSI6InN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7XG4gICAgdG9wIDogMS4yODEyNWVtO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7XG5mb250LXdlaWdodDogNDAwO1xuY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG5mb250LXNpemU6IDE2cHg7XG59XG4uZm9ybS1iaXJ0aGRheXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG4jYmlydGhkYXk6Zm9jdXMsXG4jYmlydGhkYXk6YWN0aXZlLFxuI2JpcnRoZGF5OnRhcmdldCxcbiNiaXJ0aGRheTp2aXNpdGVkLFxuI2JpcnRoZGF5OmZvY3VzLXdpdGhpbixcbiNiaXJ0aGRheTpmb2N1cy12aXNpYmxlXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICM4MGJkZmY7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiKDAgMTIzIDI1NSAvIDI1JSk7XG59XG4uaG92ZXItY2FuY2VsOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzMywgMjMzKTtcbn1cbi5pbnB1dC1jdXN0b217XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 34436:
/*!***************************************************************!*\
  !*** ./src/app/auth/checking_service/controller.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckingServiceComponent": () => (/* binding */ CheckingServiceComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);




class CheckingServiceComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, authService) {
        super(commonService);
        this.commonService = commonService;
        this.authService = authService;
    }
    get returnUrl() {
        var _a;
        return (_a = this.commonService.getMyQueryParam('return_url')) !== null && _a !== void 0 ? _a : '';
    }
    get confirm_type() {
        var _a;
        return (_a = this.commonService.getMyQueryParam('confirm_type')) !== null && _a !== void 0 ? _a : '';
    }
    ngOnInit() {
        this.authService.apiAuthGetFirebaseConfigGet().subscribe((response) => {
            var _a;
            if (response.success == 1) {
                let reloadUrl = this.commonService.getLocalRouter('/auth/confirm_account') + '?return_url=' + this.returnUrl + '&confirm_type=' + this.confirm_type + '&app_name=' + ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.app);
                window.location.href = reloadUrl.toString();
            }
            else {
                this.commonService.snackError('Có lỗi khi kiểm tra dịch vụ', '');
            }
        });
    }
}
CheckingServiceComponent.ɵfac = function CheckingServiceComponent_Factory(t) { return new (t || CheckingServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
CheckingServiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CheckingServiceComponent, selectors: [["app-checking-service"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 0, consts: [[1, "mt-5", "text-center"], ["role", "status", 1, "spinner-border", "spinner-border-md", 2, "color", "#2361ae"]], template: function CheckingServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u00A0 \u0110ang ki\u1EC3m tra d\u1ECBch v\u1EE5...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 24503:
/*!**************************************************************!*\
  !*** ./src/app/auth/confirm_account/controller.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmAccountComponent": () => (/* binding */ ConfirmAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 66369);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_services_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/window.service */ 11877);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/redirect.service */ 42873);
/* harmony import */ var src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/browser.storage.service */ 34782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);


















const _c0 = ["verifyCode"];
function ConfirmAccountComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ph\u1EA3i d\u00E0i t\u1ED1i thi\u1EC3u l\u00E0 10 k\u00FD t\u1EF1! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ConfirmAccountComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ConfirmAccountComponent_div_22_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.getErrorType("phone", "required") || ctx_r1.getErrorType("phone", "minlength"));
} }
function ConfirmAccountComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 13)(1, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, ctx_r2.statusObj.errorMessage), "");
} }
function ConfirmAccountComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Kh\u00F4ng nh\u1EADn \u0111\u01B0\u1EE3c m\u00E3 x\u00E1c th\u1EF1c? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "b", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ConfirmAccountComponent_div_38_Template_b_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r7.resendCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "G\u1EEDi l\u1EA1i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ConfirmAccountComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "margin-left": a0 }; };
const TIME_OUT = 60; // Time to display resend SMS (in seconds)
class ConfirmAccountComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_3__.MyBaseComponent {
    constructor(formBuilder, commonService, window, baseApiService, authService, redirectService, browserStorageService) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.window = window;
        this.baseApiService = baseApiService;
        this.authService = authService;
        this.redirectService = redirectService;
        this.browserStorageService = browserStorageService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({});
        this.confirm_type = 'forgot_password';
        this.isVerifying = false;
        this.smsSent = false;
        this.timeOut = TIME_OUT;
        this.captchaWidgetId = '';
        this.isLoading = true;
    }
    getError(field) {
        if (this.form.controls[field].errors) {
            return this.form.controls[field].errors;
        }
        else {
            return false;
        }
    }
    getErrorType(field, type) {
        var _a, _b;
        if ((_a = this.form.controls[field].errors) === null || _a === void 0 ? void 0 : _a[type]) {
            return (_b = this.form.controls[field].errors) === null || _b === void 0 ? void 0 : _b[type];
        }
        else {
            return false;
        }
    }
    get firebaseApp() {
        var _a;
        return (_a = this.commonService.getMyQueryParam('app_name')) !== null && _a !== void 0 ? _a : '';
    }
    get returnUrl() {
        var _a;
        return (_a = this.commonService.getMyQueryParam('return_url')) !== null && _a !== void 0 ? _a : '';
    }
    getConfirmType() {
        var _a;
        return (_a = this.commonService.getMyQueryParam('confirm_type')) !== null && _a !== void 0 ? _a : '';
    }
    skipVerifyPhone() {
        var cur_second = Math.round(new Date().getTime() / 1000);
        this.browserStorageService.saveSimpleStorage('skip_verify_phone', cur_second.toString());
        this.baseApiService.redirectLoginByRole('');
        let confirm_type = this.getConfirmType();
        if (confirm_type == 'confirm_phone_register') {
            this.commonService.myNavigation('/admin/student/manage-class/0');
        }
        else {
            this.commonService.myNavigation('/admin/testbank/dashboard');
        }
    }
    handleConfirmUsage() {
        const phone = this.form.value.phone;
        let confirm_type = this.getConfirmType();
        if (phone != '') {
            switch (confirm_type) {
                case 'forgot_password':
                    this.commonService.gaEvent('confirm_event_forgot_password');
                    this.authService.apiAuthCheckPhoneExistsGet(phone).subscribe((response) => {
                        if (response.success == 1) {
                            this.sendLoginCode('+84' + phone.slice(1));
                        }
                        else {
                            this.commonService.snackError('Số điện thoại chưa tồn tại trên hệ thống', '');
                            this.reRenderCaptcha();
                        }
                    });
                    break;
                case 'change_phone':
                    this.commonService.gaEvent('confirm_event_change_phone');
                    this.authService.apiAuthCheckPhoneExistsGet(phone).subscribe((response) => {
                        if (response.success != 1) {
                            this.sendLoginCode('+84' + phone.slice(1));
                        }
                        else {
                            this.commonService.snackError('Số điện thoại đã tồn tại trên hệ thống', '');
                            this.reRenderCaptcha();
                        }
                    });
                    break;
                default: // Confirm ( verify existing || add new phone )
                    this.commonService.gaEvent('confirm_event_confirm_phone');
                    this.authService.apiAuthCheckUpdatePhoneExistsGet(phone).subscribe((response) => {
                        if (response.success != 1) {
                            this.sendLoginCode('+84' + phone.slice(1));
                        }
                        else {
                            this.commonService.snackError('Số điện thoại đã tồn tại trên hệ thống', '');
                            this.reRenderCaptcha();
                        }
                    });
                    break;
            }
        }
        else {
            this.commonService.snackError('Vui lòng nhập số điện thoại!', '');
            this.reRenderCaptcha();
        }
    }
    sendLoginCode(phoneNumber) {
        const appVerifier = this.windowRef.recaptchaVerifier;
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPhoneNumber)(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
            this.windowRef.confirmationResult = confirmationResult;
            this.smsSent = true;
            this.timeOut = TIME_OUT;
            this.countDownTime();
        }).catch((error) => {
            console.log(error);
            if (error.code == 'auth/quota-exceeded') {
                // notifify server that the current app is exceed quota
                this.authService.apiAuthFirebaseOverQuotaGet(this.firebaseApp).subscribe((overQuotaResponse) => {
                    if (overQuotaResponse.success == 1) {
                        this.authService.apiAuthGetFirebaseConfigGet().subscribe((configResponse) => {
                            var _a, _b, _c, _d, _e;
                            if (configResponse.success == 1) {
                                if (((_a = configResponse === null || configResponse === void 0 ? void 0 : configResponse.data) === null || _a === void 0 ? void 0 : _a.app) !== this.firebaseApp) {
                                    var intervalApp = this.commonService.getMyQueryParam('interval_app');
                                    if (intervalApp && intervalApp != ((_b = configResponse === null || configResponse === void 0 ? void 0 : configResponse.data) === null || _b === void 0 ? void 0 : _b.app)) {
                                        intervalApp = intervalApp ? intervalApp : ((_d = (_c = configResponse === null || configResponse === void 0 ? void 0 : configResponse.data) === null || _c === void 0 ? void 0 : _c.app) !== null && _d !== void 0 ? _d : '');
                                        let reloadUrl = this.commonService.getLocalRouter('/auth/confirm_account')
                                            + '?return_url=' + this.returnUrl
                                            + '&confirm_type=' + this.confirm_type
                                            + '&app_name=' + ((_e = configResponse === null || configResponse === void 0 ? void 0 : configResponse.data) === null || _e === void 0 ? void 0 : _e.app)
                                            + '&interval_app=' + intervalApp;
                                        window.location.href = reloadUrl.toString();
                                    }
                                    else {
                                        this.commonService.snackError('OUT OF QUOTA FIREBASE, CONTACT ADMIN', '');
                                    }
                                }
                                else {
                                    this.commonService.snackError('OUT OF QUOTA FIREBASE, CONTACT ADMIN', '');
                                }
                            }
                            else {
                                this.commonService.snackError('Không lấy được thông tin FirebaseApp', '');
                            }
                        });
                    }
                    else {
                        this.commonService.snackError('Không đánh dấu được firebase hết quoata', '');
                    }
                });
            }
            else {
                this.commonService.gaEvent('confirm_event_error_send_code');
                this.smsSent = false;
                this.showErrorSnack('Có lỗi xảy ra: [SPLIT_LANG]' + error.code);
            }
        });
    }
    verify_code(code) {
        if (this.windowRef.confirmationResult) {
            this.isVerifying = true;
            this.windowRef.confirmationResult.confirm(code).then((result) => {
                this.isVerifying = false;
                const user = result.user;
                let confirm_type = this.getConfirmType();
                switch (confirm_type) {
                    case 'forgot_password': // GOTO Nhập mật khẩu mới
                        this.commonService.myNavigationWithQueryString('/auth/set_new_password', '?app_name=' + this.firebaseApp + '&token=' + encodeURIComponent(user.accessToken));
                        break;
                    default: // Confirm phone
                        var body = {
                            firebaseToken: user.accessToken,
                            password: '',
                            appName: this.firebaseApp
                        };
                        this.authService.apiAuthUpdatePhoneOrPasswordByFirebasePost(body).subscribe((response) => {
                            if (response.success == 1) {
                                this.showSuccessSnack('Cập nhật số điện thoại thành công!');
                                if (confirm_type == 'confirm_phone_register') {
                                    this.commonService.myNavigation('/admin/student/manage-class/0');
                                }
                                else {
                                    this.baseApiService.redirectLoginByRole('');
                                }
                            }
                            else {
                                this.showErrorSnack('Có lỗi xảy ra: [SPLIT_LANG]' + response.message);
                            }
                        });
                        break;
                }
            }).catch((error) => {
                console.log(error);
                this.isVerifying = false;
                this.commonService.gaEvent('confirm_event_error_verify_code');
                this.showErrorSnack('Có lỗi xảy ra: [SPLIT_LANG]' + error.code);
            });
        }
        else {
            this.isVerifying = false;
            this.showErrorSnack('Mã xác thực không đúng, vui lòng kiểm tra lại');
        }
    }
    resendCode() {
        var _a;
        this.reRenderCaptcha();
        (_a = document.getElementById('recaptcha-container')) === null || _a === void 0 ? void 0 : _a.click();
    }
    countDownTime() {
        this.myCountDown = window.setInterval(() => {
            if (this.timeOut > 0) {
                this.timeOut--;
            }
        }, 1000);
    }
    initForm() {
        // debugger
        this.form = this.formBuilder.group({
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(10)]]
        });
    }
    handleClickLogout() {
        if (this.confirm_type == 'forgot_password' || this.confirm_type == 'change_phone') {
            this.baseApiService.redirectLoginByRole('');
        }
        else {
            this.baseApiService.logout();
            this.redirectService.redirectSimpleLogin();
        }
    }
    reRenderCaptcha() {
        this.windowRef.recaptchaVerifier.reset(this.windowRef.recaptchaWidgetId);
    }
    handleEnterVerify(e, c) {
        if (e.key == 'Enter') {
            this.commonService.gaEvent('confirm_event_verify_code_by_press_enter');
            this.verify_code(c);
        }
    }
    ngOnInit() {
        // 1. Init form
        this.initForm();
        (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment[`firebaseConfig_${this.firebaseApp}`]);
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)().useDeviceLanguage();
        let confirm_type = this.getConfirmType();
        this.confirm_type = this.getConfirmType();
        if (confirm_type != 'forgot_password') {
            this.authService.apiAuthInfoGet().subscribe((response) => {
                var _a, _b, _c, _d;
                if (response.success == 1) {
                    if (((_a = response === null || response === void 0 ? void 0 : response.new_user) === null || _a === void 0 ? void 0 : _a.isVerifyPhone) == 1) { // Đã verify
                        if (confirm_type != 'change_phone') { // Đã verify mà không phải hành động change_phone
                            this.baseApiService.redirectLoginByRole('');
                        }
                    }
                    else {
                        if (((_b = response === null || response === void 0 ? void 0 : response.new_user) === null || _b === void 0 ? void 0 : _b.phone) && ((_c = response === null || response === void 0 ? void 0 : response.new_user) === null || _c === void 0 ? void 0 : _c.phone.length) <= 10) {
                            this.form.setValue({
                                phone: (_d = response === null || response === void 0 ? void 0 : response.new_user) === null || _d === void 0 ? void 0 : _d.phone
                            });
                        }
                        else {
                            this.form.setValue({
                                phone: ''
                            });
                            console.log('enter phone plz');
                        }
                    }
                }
                else {
                    this.showErrorSnack(response.message ? ('Có lỗi xảy ra: [SPLIT_LANG]' + response.message) : '');
                }
            });
        }
        switch (confirm_type) {
            case 'forgot_password':
                this.commonService.translateMetaData({
                    title: 'lang_cms_auth_confirm_forgot_password_title',
                    description: 'lang_cms_auth_confirm_forgot_password_description',
                    image: 'lang_cms_test_image',
                });
                break;
            case 'change_phone':
                this.commonService.translateMetaData({
                    title: 'lang_cms_auth_confirm_change_phone_title',
                    description: 'lang_cms_auth_confirm_change_phone_description',
                    image: 'lang_cms_test_image',
                });
                break;
            default:
                this.commonService.translateMetaData({
                    title: 'lang_cms_auth_confirm_confirm_phone_title',
                    description: 'lang_cms_auth_confirm_confirm_phone_description',
                    image: 'lang_cms_test_image',
                });
                break;
        }
        super.ngOnInit();
    }
    ngAfterViewInit() {
        this.countDownTime();
        this.windowRef = this.window.windowRef;
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
        this.windowRef.recaptchaVerifier = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.RecaptchaVerifier('recaptcha-container', {
            size: 'invisible',
            callback: () => {
                this.handleConfirmUsage();
            }
        }, auth);
        this.windowRef.recaptchaVerifier.render().then((widgetId) => {
            this.windowRef.recaptchaWidgetId = widgetId;
        });
        if (this.verifyCode && this.verifyCode.nativeElement.value != '') {
            let code = this.verifyCode.nativeElement.value;
            this.verifyCode.nativeElement.addEventListener('keyup', (e) => this.handleEnterVerify(e, code));
        }
    }
    ngOnDestroy() {
        clearInterval(this.myCountDown);
        // remove event listener;
        if (this.verifyCode) {
            let code = this.verifyCode.nativeElement.value;
            this.verifyCode.nativeElement.removeEventListener('keyup', (e) => this.handleEnterVerify(e, code));
        }
        super.ngDestroy();
    }
}
ConfirmAccountComponent.ɵfac = function ConfirmAccountComponent_Factory(t) { return new (t || ConfirmAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_window_service__WEBPACK_IMPORTED_MODULE_2__.WindowService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_6__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_8__.RedirectService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_9__.BrowserStorageService)); };
ConfirmAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ConfirmAccountComponent, selectors: [["app-confirm-account"]], viewQuery: function ConfirmAccountComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.verifyCode = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([src_app_core_services_window_service__WEBPACK_IMPORTED_MODULE_2__.WindowService]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 51, vars: 16, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [2, "margin-top", "4vh"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "text-center"], ["alt", "logo", 2, "width", "180px", 3, "src"], ["id", "authForm", 1, "card"], [1, "card-body"], ["id", "verify_wrap"], ["id", "enter_phone_area", 3, "ngStyle"], ["id", "enter_phone_wrap"], [1, "form-horizontal", 3, "formGroup"], [1, "form-group"], [1, "col-sm-12"], [1, "input-group", "mb-3"], ["id", "phoneInput", "type", "text", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", "formControlName", "phone", "autocomplete", "off", 1, "form-control"], ["phoneInput", ""], ["class", "alert alert-danger", 4, "ngIf"], ["id", "recaptcha-container", "color", "primary", "mat-raised-button", ""], [1, "mt-3", "text-center"], [1, "clickable", 3, "click"], ["class", "form-group", 4, "ngIf"], ["id", "verify_area", 1, "form-group"], [1, "sms-info"], [2, "text-align", "right", "font-size", "12px", "margin-bottom", "3px"], ["class", "mb-2 mt-2 resend-code", 4, "ngIf"], ["type", "string", "placeholder", "M\u00E3 x\u00E1c th\u1EF1c", "autocomplete", "off", 1, "form-control"], ["verifyCode", ""], [1, "input-group-append", "ml-1"], ["id", "buttonVerify", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [4, "ngIf"], [1, "text-center", "mt-3"], [1, "text-normal", "clickable", 3, "click"], [1, "alert", "alert-danger"], [1, "col-sm-12", "control-label", "text-danger"], [1, "mb-2", "mt-2", "resend-code"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function ConfirmAccountComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "convertCdn");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div")(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "form", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, ConfirmAccountComponent_div_22_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "Ti\u1EBFp t\u1EE5c");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 20)(26, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ConfirmAccountComponent_Template_a_click_26_listener() { return ctx.skipVerifyPhone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "B\u1ECF qua");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, ConfirmAccountComponent_div_28_Template, 4, 3, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 23)(30, "div", 14)(31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, " M\u1ED9t tin nh\u1EAFn ch\u1EE9a m\u00E3 x\u00E1c th\u1EF1c v\u1EEBa \u0111\u01B0\u1EE3c g\u1EEDi t\u1EDBi s\u1ED1 \u0111i\u1EC7n tho\u1EA1i ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, ". Vui l\u00F2ng nh\u1EADp m\u00E3 n\u00E0y v\u00E0o \u00F4 d\u01B0\u1EDBi \u0111\u00E2y r\u1ED3i \u1EA5n x\u00E1c th\u1EF1c ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, ConfirmAccountComponent_div_38_Template, 4, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "div", 29)(43, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ConfirmAccountComponent_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](41); return ctx.verify_code(_r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, ConfirmAccountComponent_span_44_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45, "X\u00E1c th\u1EF1c ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "div", 32)(48, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ConfirmAccountComponent_Template_a_click_48_listener() { return ctx.handleClickLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 12, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.confirm_type == "change_phone" ? "Nh\u1EADp v\u00E0o s\u1ED1 \u0111i\u1EC7n tho\u1EA1i m\u1EDBi" : "X\u00E1c th\u1EF1c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i c\u1EE7a b\u1EA1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](14, _c1, ctx.smsSent ? "-100%" : "0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.form.controls["phone"].invalid && (ctx.form.controls["phone"].dirty || ctx.form.controls["phone"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.statusObj.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.form.value.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx.timeOut, " s");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.timeOut == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", _r4.value == "" || ctx.isVerifying);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.confirm_type == "forgot_password" ? "\u0110\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n" : ctx.confirm_type == "change_phone" ? "Quay l\u1EA1i m\u00E0n h\u00ECnh ch\u00EDnh" : "\u0110\u0103ng xu\u1EA5t");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__.ConvertCdnPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__.MytranslatePipe], styles: ["#recaptcha-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sms-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5a5a5a;\n  white-space: pre-line;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#verify_wrap[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#verify_wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_area[_ngcontent-%COMP%] {\n  transition: margin ease 0.5s;\n  \n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resend-code[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 13px;\n  color: #3C8DBC;\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFERTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQUdKOztBQUFFO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtBQUVKOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRUYiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVjYXB0Y2hhLWNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmgye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc21zLWluZm97XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM1YTVhNWE7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuI3ZlcmlmeV93cmFwIHtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmID4gZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgZGl2I2VudGVyX3Bob25lX2FyZWEge1xuICAgIHRyYW5zaXRpb246IG1hcmdpbiBlYXNlIDAuNXM7XG4gICAgLyogbWFyZ2luLWxlZnQ6IC0xMDAlOyAqL1xuICB9XG4gIGRpdiNlbnRlcl9waG9uZV93cmFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnJlc2VuZC1jb2RlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMzQzhEQkM7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 79316:
/*!**********************************************************************!*\
  !*** ./src/app/auth/confirm_forgot_password/controller.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmForgotPasswordComponent": () => (/* binding */ ConfirmForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);












function ConfirmForgotPasswordComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 16)(4, "div", 16)(5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.step_by_step == 1 ? "active" : ctx_r0.step_by_step > 1 ? "active pro" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.step_by_step == 2 ? "active" : ctx_r0.step_by_step > 2 ? "active pro" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.step_by_step == 3 ? "active" : ctx_r0.step_by_step > 3 ? "active pro" : "");
} }
function ConfirmForgotPasswordComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 18)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 1, "lang_cms_common_loading"), "...");
} }
function ConfirmForgotPasswordComponent_div_14_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\u00F4ng \u0111\u01B0\u1EE3c b\u1ECF tr\u1ED1ng! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ConfirmForgotPasswordComponent_div_14_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ConfirmForgotPasswordComponent_div_14_div_9_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.getErrorType("phone", "required"));
} }
function ConfirmForgotPasswordComponent_div_14_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " M\u1EADt kh\u1EA9u ph\u1EA3i d\u00E0i t\u1ED1i thi\u1EC3u l\u00E0 6! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ConfirmForgotPasswordComponent_div_14_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ConfirmForgotPasswordComponent_div_14_div_18_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.getErrorType("password", "required") || ctx_r6.getErrorType("password", "minlength"));
} }
function ConfirmForgotPasswordComponent_div_14_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " M\u1EADt kh\u1EA9u kh\u00F4ng tr\u00F9ng kh\u1EDBp! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ConfirmForgotPasswordComponent_div_14_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ConfirmForgotPasswordComponent_div_14_div_27_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.getErrorType("repassword", "confirm_pass"));
} }
function ConfirmForgotPasswordComponent_div_14_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx_r8.statusObj.errorMessage), "");
} }
function ConfirmForgotPasswordComponent_div_14_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { user_click: "true" }; };
function ConfirmForgotPasswordComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 20)(2, "div", 21)(3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 24)(6, "span", 25)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ConfirmForgotPasswordComponent_div_14_div_9_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 20)(11, "div", 21)(12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 24)(15, "span", 25)(16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ConfirmForgotPasswordComponent_div_14_div_18_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 20)(20, "div", 21)(21, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 24)(24, "span", 25)(25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ConfirmForgotPasswordComponent_div_14_div_27_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ConfirmForgotPasswordComponent_div_14_div_28_Template, 4, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 20)(30, "div", 21)(31, "div", 30)(32, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfirmForgotPasswordComponent_div_14_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.form.invalid || ctx_r13.statusObj.loading || ctx_r13.changePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ConfirmForgotPasswordComponent_div_14_span_33_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Ti\u1EBFp t\u1EE5c ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 32)(36, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Ho\u1EB7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 5)(39, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 35)(42, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "center_focus_strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " S\u1EED d\u1EE5ng m\u00E3 QR qu\u00EAn m\u1EADt kh\u1EA9u");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 37)(47, "div", 38)(48, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "H\u01B0\u1EDBng d\u1EABn \u0111\u1ED5i m\u1EADt kh\u1EA9u tr\u00EAn Azota");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div")(51, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "\u0110\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["phone"].invalid && (ctx_r2.form.controls["phone"].dirty || ctx_r2.form.controls["phone"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["password"].invalid && ctx_r2.form.controls["password"].dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.getErrorType("repassword", "confirm_pass") && ctx_r2.form.controls["repassword"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.statusObj.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r2.form.invalid || ctx_r2.statusObj.loading || ctx_r2.getErrorType("repassword", "confirm_pass") != false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 9, "/auth/confirm_forgot_password_qr")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 11, "/auth/login")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c1));
} }
function ConfirmForgotPasswordComponent_div_15_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47)(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "( Click v\u00E0o \u0111\u00E2y \u0111\u1EC3 g\u1EEDi ngay )");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("href", "sms:" + ctx_r15.phone_send + "?body=MK " + ctx_r15.response_change_pass.otp, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ConfirmForgotPasswordComponent_div_15_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfirmForgotPasswordComponent_div_15_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r18.changeStepByNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ti\u1EBFp t\u1EE5c ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ConfirmForgotPasswordComponent_div_15_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r17.currentMessage);
} }
function ConfirmForgotPasswordComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 21)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Th\u00F4ng tin m\u1EADt kh\u1EA9u m\u1EDBi c\u1EE7a b\u1EA1n \u0111\u00E3 \u0111\u01B0\u1EE3c ghi nh\u1EADn. \u0110\u1EC3 k\u00EDch ho\u1EA1t m\u1EADt kh\u1EA9u v\u1EEBa t\u1EA1o vui l\u00F2ng s\u1EED d\u1EE5ng s\u1ED1 \u0111i\u1EC7n tho\u1EA1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " v\u00E0 so\u1EA1n tin nh\u1EAFn: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 45)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " g\u1EEDi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ConfirmForgotPasswordComponent_div_15_div_13_Template, 3, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " \"C\u01B0\u1EDBc ph\u00ED tin nh\u1EAFn \u0111\u01B0\u1EE3c t\u00EDnh theo gi\u00E1 c\u01B0\u1EDBc ph\u00ED th\u00F4ng th\u01B0\u1EDDng c\u1EE7a nh\u00E0 m\u1EA1ng\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Sau khi g\u1EEDi tin nh\u1EAFn vui l\u00F2ng b\u1EA5m n\u00FAt b\u00EAn d\u01B0\u1EDBi \u0111\u1EC3 ti\u1EBFp t\u1EE5c ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ConfirmForgotPasswordComponent_div_15_button_19_Template, 2, 0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ConfirmForgotPasswordComponent_div_15_div_20_Template, 5, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.data_change_pass.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("MK ", ctx_r3.response_change_pass.otp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.phone_send);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.is_mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.step_by_step == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.step_by_step == 3);
} }
function ConfirmForgotPasswordComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 21)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " M\u1EADt kh\u1EA9u m\u1EDBi c\u1EE7a b\u1EA1n \u0111\u00E3 \u0111\u01B0\u1EE3c k\u00EDch ho\u1EA1t th\u00E0nh c\u00F4ng. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 37)(5, "div", 38)(6, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u0110\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div")(10, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "H\u01B0\u1EDBng d\u1EABn \u0111\u1ED5i m\u1EADt kh\u1EA9u tr\u00EAn Azota");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 2, "/auth/login")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1));
} }
class ConfirmForgotPasswordComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(formBuilder, commonService, smsService) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.smsService = smsService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
        this.step_by_step = 1;
        this.currentMessage = '';
        this.phone_send = '';
        this.is_mobile = /Android|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        this.is_mobile_ios = /webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
        this.response_change_pass = {};
        this.data_change_pass = {};
    }
    getError(field) {
        if (this.form.controls[field].errors) {
            return this.form.controls[field].errors;
        }
        else {
            return false;
        }
    }
    getErrorType(field, type) {
        var _a, _b;
        if (field === 'repassword' && type === 'confirm_pass') {
            return this.form.controls.repassword.value != this.form.controls.password.value;
        }
        if ((_a = this.form.controls[field].errors) === null || _a === void 0 ? void 0 : _a[type]) {
            return (_b = this.form.controls[field].errors) === null || _b === void 0 ? void 0 : _b[type];
        }
        else {
            return false;
        }
    }
    randomPhone(phoneString) {
        if (phoneString.includes(',')) {
            let arrPhone = phoneString.split(',');
            let ramdomNumber = this.commonService.getRandomNumber(0, arrPhone.length - 1);
            return arrPhone[ramdomNumber];
        }
        else {
            return phoneString;
        }
    }
    changePassword() {
        if (this.form.valid) {
            this.initStatusObj();
            var form_object = this.commonService.getFormObj(this.form);
            var body = {
                phone: form_object.phone,
                password: form_object.password
            };
            this.smsService.apiSmsChangePassPost(body).subscribe((response) => {
                var _a, _b;
                if (response.success == 1) {
                    this.successStatusObj();
                    this.step_by_step = 2;
                    this.response_change_pass = (_a = response.data) !== null && _a !== void 0 ? _a : {};
                    this.data_change_pass = body;
                }
                else {
                    this.errorStatusObj((_b = response.message) !== null && _b !== void 0 ? _b : '');
                }
            });
        }
    }
    getPhone() {
        this.initStatusObj();
        this.smsService.apiSmsGetPhoneGet().subscribe((response) => {
            var _a, _b, _c;
            if (response.success == 1) {
                this.successStatusObj();
                this.phone_send = this.randomPhone((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.phone) !== null && _b !== void 0 ? _b : '');
            }
            else {
                this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : '', true);
            }
        });
    }
    changeStepByNext() {
        this.initStatusObj();
        this.currentMessage = 'Đang xử lý dữ liệu';
        this.step_by_step = 3;
        this.loop_check = window.setInterval(() => {
            this.smsService.apiSmsCheckStatusGet(this.data_change_pass.phone).subscribe((response) => {
                var _a, _b;
                if (response.success == 1) {
                    this.successStatusObj();
                    if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.status) == 1) {
                        this.step_by_step = 4;
                        clearInterval(this.loop_check);
                    }
                }
                else {
                    this.errorStatusObj((_b = response.message) !== null && _b !== void 0 ? _b : '');
                    this.currentMessage = 'Hệ thống tạm thời không thể xử lý, vui lòng thử lại sau.';
                    clearInterval(this.loop_check);
                }
            });
        }, 1000);
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]],
            repassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]],
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_auth_confirm_forgot_password_title',
            description: 'lang_cms_auth_confirm_forgot_password_description',
            image: 'lang_cms_test_image',
        });
        this.getPhone();
        super.ngOnInit();
    }
    ngOnDestroy() {
        if (this.loop_check) {
            clearInterval(this.loop_check);
        }
        super.ngDestroy();
    }
}
ConfirmForgotPasswordComponent.ɵfac = function ConfirmForgotPasswordComponent_Factory(t) { return new (t || ConfirmForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.SmsService)); };
ConfirmForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ConfirmForgotPasswordComponent, selectors: [["app-confirm-forgot-password"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 6, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "form-horizontal", 2, "margin-top", "4vh", 3, "formGroup"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "text-center"], ["src", "https://azotacdn.studybymusic.com/storage_public/azota_assets/images/logo.svg", "alt", "logo", 2, "width", "180px"], ["class", "row m-0", 4, "ngIf"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "h5"], [1, "card-body"], [4, "ngIf"], [1, "row", "m-0"], [1, "wrapper-progressBar"], [1, "progressBar"], [1, "progressBar-li", 3, "ngClass"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "form-group"], [1, "col-sm-12"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", "formControlName", "phone", "autocomplete", "new-phone", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon3", 1, "input-group-text"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "password", "placeholder", "M\u1EADt kh\u1EA9u m\u1EDBi", "formControlName", "password", "autocomplete", "new-password", 1, "form-control"], ["type", "password", "placeholder", "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u m\u1EDBi", "formControlName", "repassword", "autocomplete", "new-repassword", 1, "form-control"], ["class", "form-group", 4, "ngIf"], [1, "text-right"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-block", 3, "disabled", "click"], [1, "text-center", "mt-2"], [1, "text-mute"], [1, "btn", "btn-outline-primary", "mt-2", "w-100", 3, "routerLink"], [1, "link-center"], [1, "mr-1"], [1, "text-center", "mt-3"], [1, "mb-1"], ["href", "https://docs.azota.vn/#quen-mat-khau", "target", "blank"], [1, "text-normal", 3, "routerLink", "queryParams"], [1, "alert", "alert-danger"], [1, "col-sm-12", "control-label", "text-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "sms-info"], [2, "text-align", "right", "font-size", "15px", "margin", "10px 0", "text-align", "center"], ["class", "sms-info text-center mb-3", 4, "ngIf"], [1, "sms-info", "text-center", "mb-3"], ["class", "btn btn-block", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-block", 3, "click"], [1, "loading"], [1, "icon"], [1, "text"], [3, "routerLink", "queryParams"], ["href", "https://docs.azota.vn/#quen-mat-khau", "target", "blank", 1, "text-normal"]], template: function ConfirmForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ConfirmForgotPasswordComponent_div_7_Template, 6, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u0110\u1ED5i m\u1EADt kh\u1EA9u m\u1EDBi");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ConfirmForgotPasswordComponent_div_13_Template, 6, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ConfirmForgotPasswordComponent_div_14_Template, 54, 18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ConfirmForgotPasswordComponent_div_15_Template, 21, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ConfirmForgotPasswordComponent_div_16_Template, 12, 7, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading && ctx.step_by_step == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.statusObj.loading != true && (ctx.step_by_step == 2 || ctx.step_by_step == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading && ctx.step_by_step == 4);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__.MytranslatePipe, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_10__.LocalizeRouterPipe], styles: ["#recaptcha-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sms-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5a5a5a;\n  white-space: pre-line;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#verify_wrap[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#verify_wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_area[_ngcontent-%COMP%] {\n  transition: margin ease 0.5s;\n  \n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resend-code[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 13px;\n  color: #3C8DBC;\n  white-space: pre-line;\n}\n\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.loading[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.wrapper-progressBar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.progressBar[_ngcontent-%COMP%] {\n  counter-reset: step;\n}\n\n.progressBar-li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  float: left;\n  width: 33.3%;\n  position: relative;\n  text-align: center;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:before {\n  cursor: pointer;\n  content: counter(step);\n  counter-increment: step;\n  line-height: 30px;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #ddd;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px;\n  background-color: white;\n}\n\n.pro[_ngcontent-%COMP%]:before {\n  content: \"\\f00c\" !important;\n  font-family: \"Font Awesome 5 Free\" !important;\n  font-weight: 900;\n  background-color: green !important;\n  color: white !important;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: #ddd;\n  top: 15px;\n  left: -50%;\n  z-index: -1;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:first-child:after {\n  content: none;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]:before {\n  border-color: green;\n  background-color: white;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]    + .progressBar-li[_ngcontent-%COMP%]:after {\n  background-color: green;\n}\n\n.link-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFERTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQUdKOztBQUFFO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtBQUVKOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFERTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0EsbUJBQUE7QUFFQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsMkJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtBQUlGOztBQURBO0VBQ0UsWUFBQTtBQUlGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUlGOztBQURBO0VBQ0UsdUJBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSUYiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVjYXB0Y2hhLWNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmgye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc21zLWluZm97XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM1YTVhNWE7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuI3ZlcmlmeV93cmFwIHtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmID4gZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgZGl2I2VudGVyX3Bob25lX2FyZWEge1xuICAgIHRyYW5zaXRpb246IG1hcmdpbiBlYXNlIDAuNXM7XG4gICAgLyogbWFyZ2luLWxlZnQ6IC0xMDAlOyAqL1xuICB9XG4gIGRpdiNlbnRlcl9waG9uZV93cmFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnJlc2VuZC1jb2RlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMzQzhEQkM7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuLmxvYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuLndyYXBwZXItcHJvZ3Jlc3NCYXIge1xuICB3aWR0aDogMTAwJVxufVxuXG4ucHJvZ3Jlc3NCYXIge1xuY291bnRlci1yZXNldDogc3RlcDtcbn1cblxuLnByb2dyZXNzQmFyLWxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMzLjMlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2dyZXNzQmFyLWxpOmJlZm9yZSB7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBjb250ZW50OiBjb3VudGVyKHN0ZXApO1xuICBjb3VudGVyLWluY3JlbWVudDogc3RlcDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcbn1cbi5wcm86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMGNcIiAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucHJvZ3Jlc3NCYXItbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAtNTAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnByb2dyZXNzQmFyLWxpOmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cblxuLnByb2dyZXNzQmFyLWxpLmFjdGl2ZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnByb2dyZXNzQmFyLWxpLmFjdGl2ZTpiZWZvcmUge1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2dyZXNzQmFyLWxpLmFjdGl2ZSArIC5wcm9ncmVzc0Jhci1saTphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4ubGluay1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 63916:
/*!**************************************************************************!*\
  !*** ./src/app/auth/confirm_forgot_password_old/controller.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmForgotPasswordComponentOld": () => (/* binding */ ConfirmForgotPasswordComponentOld)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);













function ConfirmForgotPasswordComponentOld_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 13)(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, "lang_cms_common_loading"), "...");
} }
function ConfirmForgotPasswordComponentOld_div_14_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " M\u1EADt kh\u1EA9u ph\u1EA3i d\u00E0i t\u1ED1i thi\u1EC3u l\u00E0 6! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ConfirmForgotPasswordComponentOld_div_14_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ConfirmForgotPasswordComponentOld_div_14_div_9_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.getErrorType("password", "required") || ctx_r2.getErrorType("password", "minlength"));
} }
function ConfirmForgotPasswordComponentOld_div_14_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r3.statusObj.errorMessage), "");
} }
function ConfirmForgotPasswordComponentOld_div_14_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { user_click: "true" }; };
function ConfirmForgotPasswordComponentOld_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 15)(2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 19)(6, "span", 20)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ConfirmForgotPasswordComponentOld_div_14_div_9_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ConfirmForgotPasswordComponentOld_div_14_div_10_Template, 4, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 15)(12, "div", 16)(13, "div", 23)(14, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfirmForgotPasswordComponentOld_div_14_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.form.invalid || ctx_r6.statusObj.loading || ctx_r6.changePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ConfirmForgotPasswordComponentOld_div_14_span_15_Template, 3, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u0110\u1ED5i m\u1EADt kh\u1EA9u ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 25)(19, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "\u0110\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["password"].invalid && (ctx_r1.form.controls["password"].dirty || ctx_r1.form.controls["password"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.statusObj.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.form.invalid || ctx_r1.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 6, "/auth/login")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c1));
} }
class ConfirmForgotPasswordComponentOld extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(formBuilder, commonService, baseApiService, authService) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.authService = authService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({});
    }
    getError(field) {
        if (this.form.controls[field].errors) {
            return this.form.controls[field].errors;
        }
        else {
            return false;
        }
    }
    getErrorType(field, type) {
        var _a, _b;
        if ((_a = this.form.controls[field].errors) === null || _a === void 0 ? void 0 : _a[type]) {
            return (_b = this.form.controls[field].errors) === null || _b === void 0 ? void 0 : _b[type];
        }
        else {
            return false;
        }
    }
    changePassword() {
        if (this.form.valid) {
            var form_object = this.commonService.getFormObj(this.form);
            var token = this.commonService.getMyQueryParam('token');
            this.initStatusObj();
            this.subscriptions.add(this.authService.apiAuthConfirmForgotPasswordGet(token, form_object.password).subscribe((response) => {
                var _a;
                if (response.success == 1) {
                    this.successStatusObj();
                    this.baseApiService.redirectLoginByRole('');
                }
                else {
                    this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '');
                }
            }));
        }
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_auth_confirm_forgot_password_title',
            description: 'lang_cms_auth_confirm_forgot_password_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
}
ConfirmForgotPasswordComponentOld.ɵfac = function ConfirmForgotPasswordComponentOld_Factory(t) { return new (t || ConfirmForgotPasswordComponentOld)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
ConfirmForgotPasswordComponentOld.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ConfirmForgotPasswordComponentOld, selectors: [["app-confirm-forgot-password-admin"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 6, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "form-horizontal", 2, "margin-top", "4vh", 3, "formGroup"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "text-center"], ["alt", "logo", 2, "width", "180px", 3, "src"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "h5"], [1, "card-body"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "form-group"], [1, "col-sm-12"], [1, "input-group", "mb-3"], ["type", "password", "placeholder", "M\u1EADt kh\u1EA9u m\u1EDBi", "formControlName", "password", "autocomplete", "new-password", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon3", 1, "input-group-text"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], [1, "text-right"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "text-center", "mt-3"], [1, "text-normal", 3, "routerLink", "queryParams"], [1, "alert", "alert-danger"], [1, "col-sm-12", "control-label", "text-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function ConfirmForgotPasswordComponentOld_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "convertCdn");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u0110\u1ED5i m\u1EADt kh\u1EA9u m\u1EDBi");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ConfirmForgotPasswordComponentOld_div_13_Template, 6, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ConfirmForgotPasswordComponentOld_div_14_Template, 22, 11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.ConvertCdnPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_11__.LocalizeRouterPipe], encapsulation: 2 });


/***/ }),

/***/ 6347:
/*!*************************************************************************!*\
  !*** ./src/app/auth/confirm_forgot_password_qr/controller.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmForgotPasswordQrComponent": () => (/* binding */ ConfirmForgotPasswordQrComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_helpers/LocalStorageObjetc */ 3279);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_azt_scan_qrcode_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/azt-scan-qrcode/controller.component */ 57646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);














const _c0 = ["aztScanQrcode"];
function ConfirmForgotPasswordQrComponent_div_22_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " M\u1EADt kh\u1EA9u ph\u1EA3i d\u00E0i t\u1ED1i thi\u1EC3u l\u00E0 6! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ConfirmForgotPasswordQrComponent_div_22_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ConfirmForgotPasswordQrComponent_div_22_div_17_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.getErrorType("password", "required") || ctx_r2.getErrorType("password", "minlength"));
} }
function ConfirmForgotPasswordQrComponent_div_22_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " M\u1EADt kh\u1EA9u kh\u00F4ng tr\u00F9ng kh\u1EDBp! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ConfirmForgotPasswordQrComponent_div_22_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ConfirmForgotPasswordQrComponent_div_22_div_26_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.getErrorType("repassword", "confirm_pass"));
} }
function ConfirmForgotPasswordQrComponent_div_22_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ConfirmForgotPasswordQrComponent_div_22_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38)(1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Kh\u00F4ng th\u1EC3 x\u00E1c nh\u1EADn y\u00EAu c\u1EA7u \u0111\u1ED5i m\u1EADt kh\u1EA9u. M\u00E3 Qrcode v\u00E0 s\u1ED1 \u0111i\u1EC7n tho\u1EA1i \u0111\u0103ng nh\u1EADp kh\u00F4ng tr\u00F9ng kh\u1EDBp. Vui l\u00F2ng th\u1EED l\u1EA1i.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfirmForgotPasswordQrComponent_div_22_div_33_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r8.reloadProcessForgot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Th\u1EED l\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function ConfirmForgotPasswordQrComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 27)(6, "span", 28)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "qr_code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 23)(10, "div", 24)(11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 27)(14, "span", 28)(15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ConfirmForgotPasswordQrComponent_div_22_div_17_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 23)(19, "div", 24)(20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 27)(23, "span", 28)(24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ConfirmForgotPasswordQrComponent_div_22_div_26_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 23)(28, "div", 24)(29, "div", 32)(30, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfirmForgotPasswordQrComponent_div_22_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.form.invalid || ctx_r10.statusObj.loading || ctx_r10.changePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ConfirmForgotPasswordQrComponent_div_22_span_31_Template, 3, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Ti\u1EBFp t\u1EE5c ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, ConfirmForgotPasswordQrComponent_div_22_div_33_Template, 5, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["password"].invalid && ctx_r1.form.controls["password"].dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getErrorType("repassword", "confirm_pass") != false && ctx_r1.form.controls["repassword"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.statusObj.errorMessage || ctx_r1.form.invalid || ctx_r1.statusObj.loading || ctx_r1.getErrorType("repassword", "confirm_pass") != false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.statusObj.loading === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.statusObj.errorMessage);
} }
const _c1 = function (a0) { return { "d-none": a0 }; };
const _c2 = function (a0) { return [a0]; };
const _c3 = function () { return { user_click: "true" }; };
class ConfirmForgotPasswordQrComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, localStorageObjetct, formBuilder, qrCodeForgotPasswordService) {
        super(commonService);
        this.commonService = commonService;
        this.localStorageObjetct = localStorageObjetct;
        this.formBuilder = formBuilder;
        this.qrCodeForgotPasswordService = qrCodeForgotPasswordService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
        this.stepByStep = 0;
        this.sussScanNextConf = false;
    }
    getError(field) {
        if (this.form.controls[field].errors) {
            return this.form.controls[field].errors;
        }
        else {
            return false;
        }
    }
    getErrorType(field, type) {
        var _a, _b;
        if (field === 'repassword' && type === 'confirm_pass') {
            return this.form.controls.repassword.value != this.form.controls.password.value;
        }
        if ((_a = this.form.controls[field].errors) === null || _a === void 0 ? void 0 : _a[type]) {
            return (_b = this.form.controls[field].errors) === null || _b === void 0 ? void 0 : _b[type];
        }
        else {
            return false;
        }
    }
    reloadProcessForgot() {
        if (this.elementaztScanQrcode) {
            this.elementaztScanQrcode.initScanCam();
        }
        this.stepByStep = 0;
        this.form.reset();
        this.initStatusObj();
        this.sussScanNextConf = false;
    }
    outContentScan(event) {
        if (event !== null) {
            var body = { hash: event };
            this.qrCodeForgotPasswordService.apiQrCodeForgotPasswordAnonymousCheckForgotPasswordQrCodePost(body).subscribe((response) => {
                var _a;
                if (response.success == 1 && ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.status) == 1) {
                    this.stepByStep = 1;
                    this.form.controls.hash.setValue(event);
                    this.sussScanNextConf = true;
                }
                else {
                    this.showErrorSnack('Phân tích mã qrcode thất bại. Vui lòng thử lại');
                    this.reloadProcessForgot();
                }
            });
        }
        else {
            this.showErrorSnack('Phân tích mã qrcode thất bại. Vui lòng thử lại');
            this.reloadProcessForgot();
        }
    }
    changePassword() {
        this.initStatusObj();
        var formObj = this.commonService.getFormObj(this.form);
        var body = {
            hash: formObj.hash,
            password: formObj.password
        };
        this.qrCodeForgotPasswordService.apiQrCodeForgotPasswordChangePasswordByQrcodePost(body).subscribe((response) => {
            if (response.success != 0) {
                this.localStorageObjetct.clearAllCache();
                this.successStatusObj('Đặt lại mật khẩu thành công.', true);
                this.commonService.myNavigation('/auth/forgot_password_susscess');
            }
            else {
                this.errorStatusObj('Yêu cầu đổi mật khẩu thất bại.', true);
                this.successStatusObj();
            }
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.elementaztScanQrcode) {
                this.elementaztScanQrcode.initScanCam();
            }
        }, 0);
    }
    ngOnInit() {
        this.commonService.translateMetaData({
            title: 'lang_cms_auth_confirm_forgot_password_title',
            description: 'lang_cms_auth_confirm_forgot_password_description',
            image: 'lang_cms_test_image',
        });
        this.form = this.formBuilder.group({
            hash: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6)]],
            repassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6)]],
        });
        super.ngOnInit();
    }
}
ConfirmForgotPasswordQrComponent.ɵfac = function ConfirmForgotPasswordQrComponent_Factory(t) { return new (t || ConfirmForgotPasswordQrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_2__.LocalStorageObjetct), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.QrCodeForgotPasswordService)); };
ConfirmForgotPasswordQrComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ConfirmForgotPasswordQrComponent, selectors: [["app-confirm-forgot-password"]], viewQuery: function ConfirmForgotPasswordQrComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.elementaztScanQrcode = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 15, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "form-horizontal", 2, "margin-top", "4vh", 3, "formGroup"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "text-center"], ["src", "https://azotacdn.studybymusic.com/storage_public/azota_assets/images/logo.svg", "alt", "logo", 2, "width", "180px"], [1, "wrapper-progressBar"], [1, "progressBar"], [1, "progressBar-li", 3, "ngClass"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "h5"], [1, "card-body"], [1, "loginscan_scanmode_cam", 3, "ngClass"], [1, "text-center", "mb-3"], [3, "outContentScan"], ["aztScanQrcode", ""], ["class", "loginscan_scanmode_conf", 4, "ngIf"], [1, "mb-1"], ["href", "https://docs.azota.vn/#quen-mat-khau", "target", "blank"], [1, "text-normal", "mt-1", 3, "routerLink", "queryParams"], [1, "loginscan_scanmode_conf"], [1, "form-group"], [1, "col-sm-12"], [1, "input-group", "mb-3"], ["type", "password", "placeholder", "M\u00E3 x\u00E1c th\u1EF1c", "formControlName", "hash", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "password", "placeholder", "M\u1EADt kh\u1EA9u m\u1EDBi", "formControlName", "password", "autocomplete", "new-password", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "password", "placeholder", "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u m\u1EDBi", "formControlName", "repassword", "autocomplete", "new-repassword", 1, "form-control"], [1, "text-right"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-block", 3, "disabled", "click"], [4, "ngIf"], ["class", "col-sm-12 mt-2", 4, "ngIf"], [1, "alert", "alert-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "col-sm-12", "mt-2"], [1, "text-danger"], [1, "btn", "btn-outline-primary", "w-100", 3, "click"]], template: function ConfirmForgotPasswordQrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 9)(10, "div", 9)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\u0110\u1ED5i m\u1EADt kh\u1EA9u m\u1EDBi b\u1EB1ng m\u00E3 QRCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13)(17, "div", 14)(18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Di chuy\u1EC3n camera t\u1EDBi m\u00E3 qrcode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "azt-scan-qrcode", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("outContentScan", function ConfirmForgotPasswordQrComponent_Template_azt_scan_qrcode_outContentScan_20_listener($event) { return ctx.outContentScan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ConfirmForgotPasswordQrComponent_div_22_Template, 34, 6, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 15)(25, "div", 19)(26, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "H\u01B0\u1EDBng d\u1EABn \u0111\u1ED5i m\u1EADt kh\u1EA9u tr\u00EAn Azota");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div")(29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "\u0110\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.stepByStep + 2 == 1 ? "active" : ctx.stepByStep + 2 > 1 ? "active pro" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.stepByStep + 2 == 2 ? "active" : ctx.stepByStep + 2 > 2 ? "active pro" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.stepByStep + 2 == 3 ? "active" : ctx.stepByStep + 2 > 3 ? "active pro" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c1, ctx.sussScanNextConf));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sussScanNextConf);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 8, "/auth/login")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c3));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _azota_ui_azt_scan_qrcode_controller_component__WEBPACK_IMPORTED_MODULE_4__.AztScanQrcodeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref], pipes: [_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_12__.LocalizeRouterPipe], styles: ["#authForm[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  max-width: 550px;\n  margin: 0 auto;\n}\n\n#recaptcha-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sms-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5a5a5a;\n  white-space: pre-line;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#verify_wrap[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#verify_wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_area[_ngcontent-%COMP%] {\n  transition: margin ease 0.5s;\n  \n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resend-code[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 13px;\n  color: #3C8DBC;\n  white-space: pre-line;\n}\n\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.loading[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.wrapper-progressBar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.progressBar[_ngcontent-%COMP%] {\n  counter-reset: step;\n}\n\n.progressBar-li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  float: left;\n  width: 33.3%;\n  position: relative;\n  text-align: center;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:before {\n  cursor: pointer;\n  content: counter(step);\n  counter-increment: step;\n  line-height: 30px;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #ddd;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px;\n  background-color: white;\n}\n\n.pro[_ngcontent-%COMP%]:before {\n  content: \"\\f00c\" !important;\n  font-family: \"Font Awesome 5 Free\" !important;\n  font-weight: 900;\n  background-color: green !important;\n  color: white !important;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: #ddd;\n  top: 15px;\n  left: -50%;\n  z-index: -1;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:first-child:after {\n  content: none;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]:before {\n  border-color: green;\n  background-color: white;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]    + .progressBar-li[_ngcontent-%COMP%]:after {\n  background-color: green;\n}\n\n.link-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFERTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQUdKOztBQUFFO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtBQUVKOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFERTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0EsbUJBQUE7QUFFQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsMkJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtBQUlGOztBQURBO0VBQ0UsWUFBQTtBQUlGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUlGOztBQURBO0VBQ0UsdUJBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSUYiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXV0aEZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgbWF4LXdpZHRoOiA1NTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbiNyZWNhcHRjaGEtY29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zbXMtaW5mb3tcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzVhNWE1YTtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4jdmVyaWZ5X3dyYXAge1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICYgPiBkaXZ7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBkaXYjZW50ZXJfcGhvbmVfYXJlYSB7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIGVhc2UgMC41cztcbiAgICAvKiBtYXJnaW4tbGVmdDogLTEwMCU7ICovXG4gIH1cbiAgZGl2I2VudGVyX3Bob25lX3dyYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ucmVzZW5kLWNvZGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzNDOERCQztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuXG4ubG9hZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIC5pY29uIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuXG4ud3JhcHBlci1wcm9ncmVzc0JhciB7XG4gIHdpZHRoOiAxMDAlXG59XG5cbi5wcm9ncmVzc0JhciB7XG5jb3VudGVyLXJlc2V0OiBzdGVwO1xufVxuXG4ucHJvZ3Jlc3NCYXItbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzMuMyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZ3Jlc3NCYXItbGk6YmVmb3JlIHtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcCk7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBzdGVwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxufVxuLnBybzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwY1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogOTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5wcm9ncmVzc0Jhci1saTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IC01MCU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ucHJvZ3Jlc3NCYXItbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG4ucHJvZ3Jlc3NCYXItbGkuYWN0aXZlIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucHJvZ3Jlc3NCYXItbGkuYWN0aXZlOmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvZ3Jlc3NCYXItbGkuYWN0aXZlICsgLnByb2dyZXNzQmFyLWxpOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5saW5rLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ 56885:
/*!********************************************************************!*\
  !*** ./src/app/auth/create-qr-forgot-pass/controller.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateQrForgotPassComponent": () => (/* binding */ CreateQrForgotPassComponent),
/* harmony export */   "DialogConfContentQrcodeDialogComponent": () => (/* binding */ DialogConfContentQrcodeDialogComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _azota_ui_azt_create_qr_image_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/azt-create-qr-image/controller.component */ 70789);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 62544);











const _c0 = ["elementCreateQr"];
function CreateQrForgotPassComponent_header_backend_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "header-backend", 13);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headerTitle", "")("back_link", "/admin/testbank/dashboard");
} }
function CreateQrForgotPassComponent_header_frontend_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "header-frontend", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headerTitle", "")("back_link", "/student/dashboard/0");
} }
function CreateQrForgotPassComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "azt-create-qr-image", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("content", ctx_r2.contentQrcodeHash)("width", 350)("height", 350)("expired", 0);
} }
function CreateQrForgotPassComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.notiContentString, " ");
} }
function CreateQrForgotPassComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateQrForgotPassComponent_div_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.downloadQrCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " T\u1EA3i xu\u1ED1ng m\u00E3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function CreateQrForgotPassComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateQrForgotPassComponent_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "add_photo_alternate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " T\u1EA1o m\u00E3 qu\u00EAn m\u1EADt kh\u1EA9u m\u1EDBi");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
class CreateQrForgotPassComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, dialog, activeRoute, qrCodeForgotPasswordService) {
        super(commonService);
        this.commonService = commonService;
        this.dialog = dialog;
        this.activeRoute = activeRoute;
        this.qrCodeForgotPasswordService = qrCodeForgotPasswordService;
        this.notiContentString = '';
        this.contentQrcodeHash = '';
        this.role = 0;
    }
    checkQrThisMe() {
        this.qrCodeForgotPasswordService.apiQrCodeForgotPasswordCheckForgotPasswordQrCodeGet().subscribe((response) => {
            var _a;
            if (response.success == 1) {
                if (((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.status) != 0) {
                    this.notiContentString = 'Mã Qrcode đã tồn tại. Bạn không thể xem mã hiện tại. Tạo mã mới trong trường hợp bạn đã mất mã Qrcode.';
                }
                else {
                    this.notiContentString = 'Bạn chưa tạo mã Qrcode dùng trong trường hợp quên mật khẩu. Vui lòng tạo mã Qrcode mới.';
                }
            }
            else {
                this.showErrorSnack('Không có kết quả phản hồi.');
            }
        });
    }
    createQrcodeForgot() {
        this.qrCodeForgotPasswordService.apiQrCodeForgotPasswordCreateForgotPasswordQrCodeGet().subscribe((response) => {
            var _a, _b;
            if (response.success == 1) {
                this.contentQrcodeHash = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.qrCode) !== null && _b !== void 0 ? _b : '';
            }
            else {
                this.showErrorSnack('Không có kết quả phản hồi.');
            }
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogConfContentQrcodeDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                this.createQrcodeForgot();
            }
        });
    }
    downloadQrCode() {
        if (this.elementCreateQr) {
            this.elementCreateQr.downloadQrcode('azota-forgot');
        }
    }
    ngOnInit() {
        var _a;
        var roleParam = (_a = this.commonService.getMyParam(this.activeRoute, 'role')) !== null && _a !== void 0 ? _a : '0';
        this.role = parseInt(roleParam, 10);
        this.checkQrThisMe();
        super.ngOnInit();
    }
}
CreateQrForgotPassComponent.ɵfac = function CreateQrForgotPassComponent_Factory(t) { return new (t || CreateQrForgotPassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.QrCodeForgotPasswordService)); };
CreateQrForgotPassComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CreateQrForgotPassComponent, selectors: [["app-gzip-tool"]], viewQuery: function CreateQrForgotPassComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.elementCreateQr = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 6, consts: [["class", "mb-3", 3, "headerTitle", "back_link", 4, "ngIf"], [3, "headerTitle", "back_link", 4, "ngIf"], [1, "container", "component-wrap", "centerBoth", "hasBg", "mt-3"], [1, "card", "mb-5"], [1, "card-body"], [1, "text-center"], [1, "card-content", "mt-3", "text-center"], [1, "card-center-row"], [1, "qrcode-block", "card-center-row"], [1, "qrcode-block-fake", "card-center-row"], ["class", "qrcode-block-real", 4, "ngIf"], ["class", "qrcode-block-fake-content", 4, "ngIf"], ["class", "card-center-row", 4, "ngIf"], [1, "mb-3", 3, "headerTitle", "back_link"], [3, "headerTitle", "back_link"], [1, "qrcode-block-real"], [3, "content", "width", "height", "expired"], ["elementCreateQr", ""], [1, "qrcode-block-fake-content"], [1, "qrcode-block-icon"], [1, "qrcode-block-note"], [1, "card-center-row", "btn", "btn-outline-primary", 3, "click"], [2, "margin-right", "10px"]], template: function CreateQrForgotPassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateQrForgotPassComponent_header_backend_0_Template, 1, 2, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateQrForgotPassComponent_header_frontend_1_Template, 1, 2, "header-frontend", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5)(6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Tr\u00ECnh t\u1EA1o m\u00E3 QRCode Qu\u00EAn m\u1EADt kh\u1EA9u");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CreateQrForgotPassComponent_div_12_Template, 3, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CreateQrForgotPassComponent_div_13_Template, 6, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, CreateQrForgotPassComponent_div_14_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, CreateQrForgotPassComponent_div_15_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.role == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.role == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.contentQrcodeHash);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.contentQrcodeHash);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.contentQrcodeHash);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.contentQrcodeHash);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__.HeaderBackendComponent, _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_4__.HeaderFrontendComponent, _azota_ui_azt_create_qr_image_controller_component__WEBPACK_IMPORTED_MODULE_5__.AztCreateQrImageComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon], styles: [".card-center-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.qrcode-block[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #e0e0e0;\n  margin-bottom: 20px;\n  max-width: 400px;\n  max-height: 400px;\n  min-width: 300px;\n  min-height: 300px;\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  \n  \n  user-select: none;\n  \n}\n\n.qrcode-block-fake[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.qrcode-block-fake-content[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.qrcode-block-note[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUE2QixlQUFBO0VBQzdCLHlCQUFBO0VBQTJCLFdBQUE7RUFDRCxtQkFBQTtFQUNGLDRCQUFBO0VBQ0QsMkJBQUE7RUFDdkIsaUJBQUE7RUFBbUIsaUZBQUE7QUFPckI7O0FBSkE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUhBO0VBQ0UsYUFBQTtBQU1GOztBQUhBO0VBQ0UsaUJBQUE7QUFNRiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNlbnRlci1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnFyY29kZS1ibG9jayB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xufVxuXG4ucXJjb2RlLWJsb2NrLWZha2Uge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5xcmNvZGUtYmxvY2stZmFrZS1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnFyY29kZS1ibG9jay1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG5cbn1cbiJdfQ== */"] });
class DialogConfContentQrcodeDialogComponent {
}
DialogConfContentQrcodeDialogComponent.ɵfac = function DialogConfContentQrcodeDialogComponent_Factory(t) { return new (t || DialogConfContentQrcodeDialogComponent)(); };
DialogConfContentQrcodeDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DialogConfContentQrcodeDialogComponent, selectors: [["dialog-conf-content-qrcode-dialog"]], decls: 16, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-dialog-close", "", 1, "btn", "btn-default", "mr-3"], ["cdkFocusInitial", "", 1, "btn", "btn-outline-primary", 3, "mat-dialog-close"]], template: function DialogConfContentQrcodeDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Tr\u00ECnh t\u1EA1o m\u00E3 QRCode Qu\u00EAn m\u1EADt kh\u1EA9u");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "B\u1EA5m \"X\u00E1c nh\u1EADn\" \u0111\u1ED3ng ngh\u0129a v\u1EDBi vi\u1EC7c b\u1EA1n \u0111\u00E3 hi\u1EC3u v\u1EC1 c\u00E1c \u0111i\u1EC1u sau");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "1. M\u00E3 Qrcode qu\u00EAn m\u1EADt kh\u1EA9u l\u00E0 duy nh\u1EA5t. Khi b\u1EA1n t\u1EA1o m\u1EDBi m\u00E3, m\u00E3 c\u0169 s\u1EBD kh\u00F4ng c\u00F2n gi\u00E1 tr\u1ECB s\u1EED d\u1EE5ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "2. M\u00E3 Qrcode qu\u00EAn m\u1EADt kh\u1EA9u l\u00E0 ch\u00ECa kho\u00E1. Vui l\u00F2ng kh\u00F4ng chia s\u1EBB hay \u0111\u1EC3 ng\u01B0\u1EDDi kh\u00E1c c\u00F3 \u0111\u01B0\u1EE3c m\u00E3 qrcode c\u1EE7a b\u1EA1n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Sau khi t\u1EA1o th\u00E0nh c\u00F4ng, vui l\u00F2ng t\u1EA3i xu\u1ED1ng m\u00E3 Qrcode \u0111\u1EC3 s\u1EED d\u1EE5ng cho m\u1EE5c \u0111\u00EDch qu\u00EAn m\u1EADt kh\u1EA9u sau n\u00E0y.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-dialog-actions", 2)(12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Hu\u1EF7");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "X\u00E1c nh\u1EADn");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose], encapsulation: 2 });


/***/ }),

/***/ 35262:
/*!*************************************************************************!*\
  !*** ./src/app/auth/forgot_password_qr_success/controller.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordQrSuccessComponent": () => (/* binding */ ForgotPasswordQrSuccessComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



class ForgotPasswordQrSuccessComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor() {
        super(...arguments);
        this.step_by_step = 3;
    }
    redirectToCreateQrCode() {
        this.commonService.myNavigation('/auth/create-qr-forgot-pass/0');
    }
    redirectToHome() {
        this.commonService.myNavigation('/admin/testbank/dashboard');
    }
}
ForgotPasswordQrSuccessComponent.ɵfac = /*@__PURE__*/ function () { let ɵForgotPasswordQrSuccessComponent_BaseFactory; return function ForgotPasswordQrSuccessComponent_Factory(t) { return (ɵForgotPasswordQrSuccessComponent_BaseFactory || (ɵForgotPasswordQrSuccessComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ForgotPasswordQrSuccessComponent)))(t || ForgotPasswordQrSuccessComponent); }; }();
ForgotPasswordQrSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgotPasswordQrSuccessComponent, selectors: [["app-confirm-forgot-password"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 3, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "form-horizontal", 2, "margin-top", "4vh"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "text-center"], ["src", "https://azotacdn.studybymusic.com/storage_public/azota_assets/images/logo.svg", "alt", "logo", 2, "width", "180px"], [1, "wrapper-progressBar"], [1, "progressBar"], [1, "progressBar-li", 3, "ngClass"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "h5"], [1, "card-body"], [1, "btn-block-center"], [1, "btn", "btn-outline-info", "w-100", "mr-3", 3, "click"], [1, "btn", "btn-outline-primary", "w-100", 3, "click"]], template: function ForgotPasswordQrSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 9)(10, "div", 9)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0110\u1ED5i m\u1EADt kh\u1EA9u m\u1EDBi th\u00E0nh c\u00F4ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13)(17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "B\u1EA1n \u0111\u00E3 \u0111\u1ED5i m\u1EADt kh\u1EA9u m\u1EDBi th\u00E0nh c\u00F4ng. M\u00E3 Qrcode \u0111\u00E3 s\u1EED d\u1EE5ng c\u00F3 th\u1EC3 s\u1EED d\u1EE5ng l\u1EA1i. \u0110\u1EC3 \u0111\u1EA3m b\u1EA3o an to\u00E0n, b\u1EA1n n\u00EAn t\u1EA1o l\u1EA1i m\u00E3 Qrcode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14)(20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordQrSuccessComponent_Template_a_click_20_listener() { return ctx.redirectToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "B\u1ECF qua v\u00E0 v\u1EC1 trang ch\u1EE7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordQrSuccessComponent_Template_a_click_22_listener() { return ctx.redirectToCreateQrCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "T\u1EA1o l\u1EA1i m\u00E3 Qrcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.step_by_step + 2 == 1 ? "active" : ctx.step_by_step + 2 > 1 ? "active pro" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.step_by_step + 2 == 2 ? "active" : ctx.step_by_step + 2 > 2 ? "active pro" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.step_by_step + 2 == 3 ? "active" : ctx.step_by_step + 2 > 3 ? "active pro" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["#authForm[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  max-width: 550px;\n  margin: 0 auto;\n}\n\n#recaptcha-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sms-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5a5a5a;\n  white-space: pre-line;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#verify_wrap[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#verify_wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_area[_ngcontent-%COMP%] {\n  transition: margin ease 0.5s;\n  \n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resend-code[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 13px;\n  color: #3C8DBC;\n  white-space: pre-line;\n}\n\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.loading[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.wrapper-progressBar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.progressBar[_ngcontent-%COMP%] {\n  counter-reset: step;\n}\n\n.progressBar-li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  float: left;\n  width: 33.3%;\n  position: relative;\n  text-align: center;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:before {\n  cursor: pointer;\n  content: counter(step);\n  counter-increment: step;\n  line-height: 30px;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #ddd;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px;\n  background-color: white;\n}\n\n.pro[_ngcontent-%COMP%]:before {\n  content: \"\\f00c\" !important;\n  font-family: \"Font Awesome 5 Free\" !important;\n  font-weight: 900;\n  background-color: green !important;\n  color: white !important;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: #ddd;\n  top: 15px;\n  left: -50%;\n  z-index: -1;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:first-child:after {\n  content: none;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]:before {\n  border-color: green;\n  background-color: white;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]    + .progressBar-li[_ngcontent-%COMP%]:after {\n  background-color: green;\n}\n\n.link-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn-block-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFERTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQUdKOztBQUFFO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtBQUVKOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFERTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0EsbUJBQUE7QUFFQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsMkJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtBQUlGOztBQURBO0VBQ0UsWUFBQTtBQUlGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUlGOztBQURBO0VBQ0UsdUJBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUlGIiwiZmlsZSI6InN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1dGhGb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIG1heC13aWR0aDogNTUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4jcmVjYXB0Y2hhLWNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmgye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc21zLWluZm97XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM1YTVhNWE7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuI3ZlcmlmeV93cmFwIHtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmID4gZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgZGl2I2VudGVyX3Bob25lX2FyZWEge1xuICAgIHRyYW5zaXRpb246IG1hcmdpbiBlYXNlIDAuNXM7XG4gICAgLyogbWFyZ2luLWxlZnQ6IC0xMDAlOyAqL1xuICB9XG4gIGRpdiNlbnRlcl9waG9uZV93cmFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnJlc2VuZC1jb2RlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMzQzhEQkM7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuLmxvYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuLndyYXBwZXItcHJvZ3Jlc3NCYXIge1xuICB3aWR0aDogMTAwJVxufVxuXG4ucHJvZ3Jlc3NCYXIge1xuY291bnRlci1yZXNldDogc3RlcDtcbn1cblxuLnByb2dyZXNzQmFyLWxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMzLjMlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2dyZXNzQmFyLWxpOmJlZm9yZSB7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBjb250ZW50OiBjb3VudGVyKHN0ZXApO1xuICBjb3VudGVyLWluY3JlbWVudDogc3RlcDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcbn1cbi5wcm86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMGNcIiAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucHJvZ3Jlc3NCYXItbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAtNTAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnByb2dyZXNzQmFyLWxpOmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cblxuLnByb2dyZXNzQmFyLWxpLmFjdGl2ZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnByb2dyZXNzQmFyLWxpLmFjdGl2ZTpiZWZvcmUge1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2dyZXNzQmFyLWxpLmFjdGl2ZSArIC5wcm9ncmVzc0Jhci1saTphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4ubGluay1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bi1ibG9jay1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 13579:
/*!************************************************************!*\
  !*** ./src/app/auth/login-scan-qr/controller.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginScanQrComponent": () => (/* binding */ LoginScanQrComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_helpers/LocalStorageObjetc */ 3279);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_auto_api_common_api_api_qrCodeLogin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auto_api/common_api/api/qrCodeLogin.service */ 89892);
/* harmony import */ var src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/redirect.service */ 42873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _azota_ui_azt_create_qr_image_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/azt-create-qr-image/controller.component */ 70789);
/* harmony import */ var _azota_ui_azt_scan_qrcode_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../azota-ui/azt-scan-qrcode/controller.component */ 57646);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);














const _c0 = ["elementCreateQr"];
const _c1 = ["aztScanQrcode"];
function LoginScanQrComponent_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
} }
function LoginScanQrComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\u0110\u1EC3 \u0111\u0103ng nh\u1EADp l\u00EAn thi\u1EBFt b\u1ECB n\u00E0y, vui l\u00F2ng t\u1EA1o m\u00E3 \u0111\u1EC3 thi\u1EBFt b\u1ECB \u0111\u00E3 \u0111\u0103ng nh\u1EADp qu\u00E9t.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LoginScanQrComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "D\u00F9ng thi\u1EBFt b\u1ECB c\u1EA7n \u0111\u0103ng nh\u1EADp qu\u00E9t m\u00E3 b\u00EAn d\u01B0\u1EDBi");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LoginScanQrComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0 \u0110ang ch\u1EDD qu\u00E9t m\u00E3 Qrcode: ", ctx_r3.nameSessionConfirm, "");
} }
function LoginScanQrComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0 \u0110ang ch\u1EDD qu\u00E9t m\u00E3 Qrcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LoginScanQrComponent_div_20_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "X\u00E1c nh\u1EADn \u0111\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("v\u1EDBi m\u00E3 QR \u0111\u00E3 ph\u00E1t hi\u1EC7n: ", ctx_r13.nameSessionConfirm, "");
} }
function LoginScanQrComponent_div_20_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u0110ang ch\u1EDD x\u1EED l\u00FD");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function LoginScanQrComponent_div_20_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r15.textResultErr);
} }
function LoginScanQrComponent_div_20_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r16.textResultSuss);
} }
function LoginScanQrComponent_div_20_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LoginScanQrComponent_div_20_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LoginScanQrComponent_div_20_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_20_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r21.confContentPendingLogin(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LoginScanQrComponent_div_20_div_7_span_2_Template, 3, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Ch\u1EA5p nh\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_20_div_7_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r23.confContentPendingLogin(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, LoginScanQrComponent_div_20_div_7_span_5_Template, 3, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " T\u1EEB ch\u1ED1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r17.isLoadingBtn || ctx_r17.textResultErr);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r17.isLoadingBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r17.isLoadingBtn || ctx_r17.textResultErr);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r17.isLoadingBtn);
} }
function LoginScanQrComponent_div_20_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_20_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r24.backScanActionWithIsLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Quay l\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function LoginScanQrComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, LoginScanQrComponent_div_20_span_3_Template, 4, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, LoginScanQrComponent_div_20_div_4_Template, 5, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, LoginScanQrComponent_div_20_div_5_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, LoginScanQrComponent_div_20_div_6_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, LoginScanQrComponent_div_20_div_7_Template, 7, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, LoginScanQrComponent_div_20_div_8_Template, 3, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.nameSessionConfirm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.isLoadingBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.textResultErr);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.textResultSuss);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r5.textResultSuss || !ctx_r5.isConfirmBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.isLogin && ctx_r5.isLoadingBtn === false && ctx_r5.isConfirmBtn === true);
} }
function LoginScanQrComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_21_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r28.createRequestLoginHashCodeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 47)(2, "div")(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "sync");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "T\u1EA1o m\u1EDBi m\u00E3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} }
function LoginScanQrComponent_div_21_azt_create_qr_image_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "azt-create-qr-image", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("expiredAction", function LoginScanQrComponent_div_21_azt_create_qr_image_2_Template_azt_create_qr_image_expiredAction_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r31.expiredQrcodeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("content", ctx_r27.contentCreateQrcode)("width", 350)("height", 350)("expired", ctx_r27.durationQrcodeExpire);
} }
function LoginScanQrComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LoginScanQrComponent_div_21_div_1_Template, 7, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LoginScanQrComponent_div_21_azt_create_qr_image_2_Template, 2, 4, "azt-create-qr-image", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.isLogin === false && !ctx_r6.contentCreateQrcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.contentCreateQrcode);
} }
function LoginScanQrComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_a_23_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r33.downloadQrCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " T\u1EA3i xu\u1ED1ng m\u00E3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LoginScanQrComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "- HO\u1EB6C B\u1EA0N C\u00D3 TH\u1EC2 -");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function LoginScanQrComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16)(1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_25_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r35.switchModeView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 52)(3, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "center_focus_strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Qu\u00E9t m\u00E3 QR c\u00F3 s\u1EB5n");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} }
function LoginScanQrComponent_div_36_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r37.textResultErr);
} }
function LoginScanQrComponent_div_36_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r38.textResultSuss);
} }
function LoginScanQrComponent_div_36_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LoginScanQrComponent_div_36_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_36_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r41.confContentLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LoginScanQrComponent_div_36_div_8_span_2_Template, 3, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " \u0110\u0103ng nh\u1EADp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_36_div_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r43.reopenScanCamInit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Th\u1EED l\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r39.isLoadingBtn || ctx_r39.textResultErr);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r39.isLoadingBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r39.isLoadingBtn);
} }
function LoginScanQrComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "X\u00E1c nh\u1EADn \u0111\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "v\u1EDBi m\u00E3 QR \u0111\u00E3 ph\u00E1t hi\u1EC7n");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, LoginScanQrComponent_div_36_div_6_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, LoginScanQrComponent_div_36_div_7_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, LoginScanQrComponent_div_36_div_8_Template, 6, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.textResultErr);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.textResultSuss);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r11.textResultSuss);
} }
function LoginScanQrComponent_div_37_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u0110ang ch\u1EDD x\u1EED l\u00FD");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function LoginScanQrComponent_div_37_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 56);
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r45.textResultErr, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
function LoginScanQrComponent_div_37_button_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LoginScanQrComponent_div_37_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LoginScanQrComponent_div_37_button_10_span_1_Template, 3, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r46.textResultSuss);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r46.isLoadingBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r46.textResultSuss, " ");
} }
function LoginScanQrComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u0110\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, LoginScanQrComponent_div_37_div_7_Template, 5, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, LoginScanQrComponent_div_37_div_8_Template, 1, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, LoginScanQrComponent_div_37_button_10_Template, 3, 3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_37_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r48.reopenScanCamInit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Th\u1EED l\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("v\u1EDBi m\u00E3 QR \u0111\u00E3 ph\u00E1t hi\u1EC7n: ", ctx_r12.nameSessionConfirm, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.isLoadingBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.textResultErr);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r12.textResultSuss && ctx_r12.isLoadingBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r12.isLoadingBtn);
} }
const _c2 = function (a0) { return [a0]; };
const _c3 = function (a0) { return { return_url: a0, user_click: "true" }; };
const _c4 = function (a0) { return { "d-none": a0 }; };
const _c5 = function (a0) { return { return_url: a0 }; };
class LoginScanQrComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, baseApiService, localStorageObjetct, activeRoute, qrCodeLoginService, redirectService) {
        super(commonService);
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.localStorageObjetct = localStorageObjetct;
        this.activeRoute = activeRoute;
        this.qrCodeLoginService = qrCodeLoginService;
        this.redirectService = redirectService;
        this.returnUrl = '';
        this.isLogin = false;
        this.modeShowInit = 'create';
        this.contentCreateQrcode = '';
        this.sussScanNextConf = false;
        this.scanQrContentConfirm = '';
        this.isLoadingBtn = false;
        this.isConfirmBtn = false;
        this.textResultSuss = '';
        this.textResultErr = '';
        this.nameSessionConfirm = '';
        this.durationQrcodeExpire = 0;
        this.pendingDuration = false;
        this.role = 0;
        this.backLink = '';
    }
    // utils or redirect link
    forgotPassword() {
        this.commonService.gaEvent('sign_in_forgot_password');
        this.commonService.myNavigation('/auth/confirm_forgot_password');
    }
    reloadLogin() {
        if (this.isLogin) {
            this.redirectService.redirectToDashboard();
        }
    }
    downloadQrCode() {
        if (this.elementCreateQr) {
            this.elementCreateQr.downloadQrcode('azota-login');
        }
    }
    switchModeView() {
        this.modeShowInit = this.modeShowInit === 'create' ? 'scan' : 'create';
        if (this.elementaztScanQrcode) {
            if (this.modeShowInit === 'scan') {
                this.elementaztScanQrcode.initScanCam();
                this.clearLoopRefLogin();
                this.clearLoopPendingLogin();
            }
            else {
                this.elementaztScanQrcode.unInitSscanCam();
                this.initLoopRefLogin();
                this.initPendingLoadingConfirm();
            }
        }
    }
    clearLoopPendingLogin() {
        if (this.loopPendingLogin) {
            clearInterval(this.loopPendingLogin);
        }
    }
    clearLoopRefLogin() {
        if (this.loopRefCheckQrcodeLogin) {
            clearInterval(this.loopRefCheckQrcodeLogin);
        }
    }
    // Logic
    reopenScanCamInit() {
        this.textResultErr = '';
        this.textResultSuss = '';
        if (this.elementaztScanQrcode) {
            this.elementaztScanQrcode.initScanCam();
            this.sussScanNextConf = false;
        }
    }
    backScanActionWithIsLogin() {
        if (this.isLogin) {
            this.clearLoopRefLogin();
            this.clearLoopPendingLogin();
            this.initStatusObj();
            this.contentCreateQrcode = '';
            this.sussScanNextConf = false;
            this.scanQrContent = undefined;
            this.scanQrContentConfirm = '';
            this.isLoadingBtn = false;
            this.isConfirmBtn = false;
            this.textResultSuss = '';
            this.textResultErr = '';
            this.nameSessionConfirm = '';
            this.durationQrcodeExpire = 0;
            this.createQrCodeWithUser();
        }
    }
    expiredQrcodeAction() {
        if (!this.pendingDuration) {
            this.clearLoopRefLogin();
            this.clearLoopPendingLogin();
            this.initStatusObj();
            this.contentCreateQrcode = '';
            this.sussScanNextConf = false;
            this.scanQrContent = undefined;
            this.scanQrContentConfirm = '';
            this.isLoadingBtn = false;
            this.isConfirmBtn = false;
            this.textResultSuss = '';
            this.textResultErr = '';
            this.nameSessionConfirm = '';
            this.durationQrcodeExpire = 0;
            if (this.isLogin) {
                this.createQrCodeWithUser();
                this.commonService.snackError('Mã Qrcode đã hết hạn, đã tạo mã qrcode mới. Vui lòng thao tác lại.');
            }
            else {
                this.commonService.snackError('Mã Qrcode đã hết hạn, vui lòng tạo mới và thao tác lại.');
            }
        }
    }
    // Call api
    createQrCodeWithUser() {
        this.initStatusObj();
        this.subscriptions.add(this.qrCodeLoginService.apiQrCodeLoginCreateLoginQrCodeGet().subscribe((response) => {
            var _a, _b, _c, _d;
            if (response.success == 1) {
                this.successStatusObj();
                this.contentCreateQrcode = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.qrCode) !== null && _b !== void 0 ? _b : '';
                this.durationQrcodeExpire = (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.duration) !== null && _d !== void 0 ? _d : 0;
                this.initPendingLoadingConfirm();
            }
            else {
                this.errorStatusObj('Không tải được dữ liệu', true);
            }
        }));
    }
    outContentScan(event) {
        var _a;
        if (event !== null) {
            this.scanQrContent = event;
            this.sussScanNextConf = true;
            if (!this.isLogin) {
                (_a = this.elementaztScanQrcode) === null || _a === void 0 ? void 0 : _a.pauseScanQrcode();
                // yêu cầu đăng nhập:
                this.isLoadingBtn = true;
                this.textResultSuss = '';
                var body = {
                    qrCode: this.scanQrContent
                };
                this.qrCodeLoginService.apiQrCodeLoginCreateLoginQrCodeRequestPost(body).subscribe((response) => {
                    var _a, _b, _c, _d;
                    this.isLoadingBtn = false;
                    console.log(response);
                    if (response.success == 1) {
                        this.isLoadingBtn = true;
                        this.scanQrContentConfirm = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.qrCode) !== null && _b !== void 0 ? _b : '';
                        this.nameSessionConfirm = (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : '';
                        this.textResultSuss = '';
                        this.initLoopPendingLogin();
                    }
                    else {
                        this.textResultSuss = '';
                        this.textResultErr = 'Mã Qrcode đã hết hạn hoặc mã Qrcode không được tạo bởi tài khoản đã đăng nhập. Vui lòng tạo lại mã mới và thử lại.';
                    }
                });
            }
        }
        else {
            this.sussScanNextConf = true;
            this.textResultErr = 'Mã Qrcode đã hết hạn hoặc mã Qrcode không được tạo bởi tài khoản đã đăng nhập. Vui lòng tạo lại mã mới và thử lại.';
            this.commonService.snackError('Mã Qrcode đã hết hạn hoặc không đúng. Vui lòng tạo lại mã mới và thử lại.', '');
        }
    }
    initLoopPendingLogin() {
        this.loopPendingLogin = window.setInterval(() => {
            var body = {
                qrCode: this.scanQrContentConfirm
            };
            this.qrCodeLoginService.apiQrCodeLoginCheckLoginQrCodeRequestConfirmedPost(body).subscribe((response) => {
                var _a, _b;
                if (response.success == 1) {
                    if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.status) == 1) {
                        this.clearLoopPendingLogin();
                        this.commonService.gaEvent('sign_in_login_in');
                        this.isLoadingBtn = false;
                        this.textResultSuss = '';
                        this.localStorageObjetct.clearAllCache();
                        this.successStatusObj('Đăng nhập thành công.', true);
                        this.baseApiService.redirectLoginByRole((_b = this.commonService.getMyQueryParam('return_url')) !== null && _b !== void 0 ? _b : '');
                    }
                    else {
                        if (response.data && response.data.status === 2) {
                            this.clearLoopPendingLogin();
                            this.isLoadingBtn = false;
                            this.errorStatusObj('Xác nhận đăng nhập thất bại', true);
                            this.textResultErr = 'Xác nhận đăng nhập thất bại.<br/> Mã Qr không còn hoạt động.<br/> Vui lòng tạo mã Qrcode mới để đăng nhập lại.';
                            this.textResultSuss = '';
                        }
                    }
                }
            });
        }, 3000);
    }
    initPendingLoadingConfirm() {
        if (this.isLogin) {
            this.loopPendingLogin = window.setInterval(() => {
                this.qrCodeLoginService.apiQrCodeLoginGetFirstQrCodeLoginRequestGet().subscribe((response) => {
                    var _a, _b, _c, _d;
                    if (response.success == 1 && response.data && response.data.qrCode !== '') {
                        this.pendingDuration = true;
                        this.scanQrContentConfirm = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.qrCode) !== null && _b !== void 0 ? _b : '';
                        this.nameSessionConfirm = (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : '';
                        this.clearLoopPendingLogin();
                    }
                });
            }, 3000);
        }
    }
    confContentPendingLogin(status) {
        if (this.isLogin) {
            this.isLoadingBtn = true;
            var body = {
                qrCode: this.scanQrContentConfirm,
                status
            };
            this.qrCodeLoginService.apiQrCodeLoginConfirmLoginQrCodeRequestPost(body).subscribe((response) => {
                if (response.success == 1) {
                    this.textResultSuss = status == 1 ? 'Xác nhận thành công' : 'Từ chối thành công';
                }
                else {
                    this.textResultErr = 'Hệ thống không phản hồi. Vui lòng tải lại trang để thử lại.';
                }
                this.isConfirmBtn = true;
                this.isLoadingBtn = false;
            });
        }
    }
    createRequestLoginHashCodeAction() {
        if (!this.isLogin) {
            this.qrCodeLoginService.apiQrCodeLoginAnonymousCreateLoginQrCodePost().subscribe((response) => {
                var _a, _b, _c, _d, _e, _f;
                if (response.success == 1) {
                    this.contentCreateQrcode = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.qrCode) !== null && _b !== void 0 ? _b : '';
                    this.nameSessionConfirm = (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : '';
                    this.durationQrcodeExpire = (_f = (_e = response === null || response === void 0 ? void 0 : response.data) === null || _e === void 0 ? void 0 : _e.duration) !== null && _f !== void 0 ? _f : 0;
                    this.initLoopRefLogin();
                }
                else {
                }
            });
        }
    }
    initLoopRefLogin() {
        if (this.isLogin == false) {
            this.loopRefCheckQrcodeLogin = window.setInterval(() => {
                var body = {
                    qrCode: this.contentCreateQrcode,
                    status: 0
                };
                this.qrCodeLoginService.apiQrCodeLoginAnonymousCheckLoginQrCodeRequestConfimedPost(body).subscribe((response) => {
                    var _a, _b;
                    if (response.success === 1 && ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.status) != 404) {
                        this.commonService.gaEvent('sign_in_login_in');
                        this.commonService.snackSuccess('Đăng nhập thành công.');
                        this.baseApiService.redirectLoginByRole((_b = this.commonService.getMyQueryParam('return_url')) !== null && _b !== void 0 ? _b : '');
                    }
                });
            }, 3000);
        }
    }
    confContentLogin() {
        this.isLoadingBtn = true;
        if (this.isLogin) {
            var body = {
                qrCode: this.scanQrContent,
                status: 1
            };
            this.qrCodeLoginService.apiQrCodeLoginAnonymousConfirmLoginQrCodeRequestPost(body).subscribe((response) => {
                this.isLoadingBtn = false;
                if (response.success === 1) {
                    this.textResultSuss = 'Xác nhận thành công. Phiên đăng nhập đã được phê duyệt';
                }
                else {
                    this.textResultErr = 'Thiết bị đã đăng nhập hoặc mã đăng nhập không hợp lệ. Vui lòng kiểm tra và thao tác lại';
                }
            });
        }
    }
    ngOnInit() {
        var _a;
        var roleParam = (_a = this.commonService.getMyParam(this.activeRoute, 'role')) !== null && _a !== void 0 ? _a : '0';
        this.role = parseInt(roleParam, 10);
        switch (this.role) {
            case 0:
                this.backLink = '/admin/testbank/dashboard';
                break;
            case 1:
                this.backLink = '/student/dashboard/0';
                break;
            case 2:
                this.backLink = '/auth/login';
                break;
        }
        this.isLogin = this.baseApiService.isLogin();
        if (this.isLogin) {
            this.createQrCodeWithUser();
        }
        this.commonService.translateMetaData({
            title: 'lang_cms_auth_login_title',
            description: 'lang_cms_auth_login_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
    ngOnDestroy() {
        this.clearLoopRefLogin();
        this.clearLoopPendingLogin();
        super.ngDestroy();
    }
}
LoginScanQrComponent.ɵfac = function LoginScanQrComponent_Factory(t) { return new (t || LoginScanQrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_3__.LocalStorageObjetct), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api_api_qrCodeLogin_service__WEBPACK_IMPORTED_MODULE_4__.QrCodeLoginService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_5__.RedirectService)); };
LoginScanQrComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: LoginScanQrComponent, selectors: [["app-login"]], viewQuery: function LoginScanQrComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.elementCreateQr = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.elementaztScanQrcode = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 39, vars: 37, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "form-horizontal", 2, "margin-top", "6vh"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6", "mb-5"], ["class", "text-center", 4, "ngIf"], [1, "card"], [1, "text-center", "loginscan__card-header"], [1, "back-btn", 2, "font-size", "16px", "color", "#6d6d6d", 3, "routerLink", "queryParams"], [2, "font-size", "16px", "color", "#6d6d6d", "font-weight", "500"], [1, "loginscan__card-body"], [1, "loginscan_createmode", 3, "ngClass"], ["class", "text-center mb-3", 4, "ngIf"], ["class", "text-center mb-3 block-inline-center", 4, "ngIf"], ["class", "loginscan_scanmode_conf", 4, "ngIf"], ["class", "loginscan__card-img", 4, "ngIf"], [1, "text-center", "mt-3"], ["class", "link-center", 3, "click", 4, "ngIf"], ["class", "text-center mt-3", 4, "ngIf"], [1, "loginscan_scanmode", 3, "ngClass"], [1, "text-center", "mb-3"], [3, "routerLink", "queryParams"], [1, "loginscan_scanmode_cam", 3, "ngClass"], [3, "outContentScan"], ["aztScanQrcode", ""], [1, "text-center"], ["alt", "logo", 2, "width", "180px", 3, "src"], [1, "text-center", "mb-3", "block-inline-center"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "loginscan_scanmode_conf"], [1, "loginscan_scanmode_conf--box"], [1, "boxtext"], [4, "ngIf"], ["class", "boxtext-err", "style", "font-size: 20px; margin-bottom: 20px; color: #f44336", 4, "ngIf"], ["class", "boxtext-suss", "style", "font-size: 20px; margin-bottom: 20px; color: #009688", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [2, "font-size", "18px"], [1, "boxtext-err", 2, "font-size", "20px", "margin-bottom", "20px", "color", "#f44336"], [1, "boxtext-suss", 2, "font-size", "20px", "margin-bottom", "20px", "color", "#009688"], [1, "mt-3"], ["type", "button", 1, "btn", "btn-primary", "mr-3", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-warning", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "mr-3", 3, "click"], [1, "loginscan__card-img"], ["class", "box-create-login-img", 3, "click", 4, "ngIf"], [3, "content", "width", "height", "expired", "expiredAction", 4, "ngIf"], [1, "box-create-login-img", 3, "click"], [1, "box-create-login-content"], [3, "content", "width", "height", "expired", "expiredAction"], ["elementCreateQr", ""], [1, "link-center", 3, "click"], [1, "btn", "btn-outline-primary", "mt-2", 3, "click"], [1, "link-center"], [1, "mr-1"], ["class", "boxtext-err", "style", "font-size: 20px; margin-bottom: 20px; color: #f44336; line-height: 30px", 3, "innerHTML", 4, "ngIf"], ["type", "button", "class", "btn btn-primary mr-3", 3, "disabled", 4, "ngIf"], [1, "boxtext-err", 2, "font-size", "20px", "margin-bottom", "20px", "color", "#f44336", "line-height", "30px", 3, "innerHTML"], ["type", "button", 1, "btn", "btn-primary", "mr-3", 3, "disabled"]], template: function LoginScanQrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, LoginScanQrComponent_h2_5_Template, 3, 3, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "\u0110\u0103ng nh\u1EADp v\u1EDBi m\u00E3 qr code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 10)(15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, LoginScanQrComponent_div_16_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, LoginScanQrComponent_div_17_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, LoginScanQrComponent_div_18_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, LoginScanQrComponent_div_19_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, LoginScanQrComponent_div_20_Template, 9, 6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, LoginScanQrComponent_div_21_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, LoginScanQrComponent_a_23_Template, 4, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, LoginScanQrComponent_div_24_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, LoginScanQrComponent_div_25_Template, 6, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 19)(27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Di chuy\u1EC3n camera t\u1EDBi m\u00E3 qrcode \u0111\u0103ng nh\u1EADp ( ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](30, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "H\u01B0\u1EDBng d\u1EABn");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " )");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 22)(34, "azt-scan-qrcode", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("outContentScan", function LoginScanQrComponent_Template_azt_scan_qrcode_outContentScan_34_listener($event) { return ctx.outContentScan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, LoginScanQrComponent_div_36_Template, 9, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, LoginScanQrComponent_div_37_Template, 13, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](23, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 19, ctx.backLink)))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](25, _c3, ctx.returnUrl));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](27, _c4, ctx.modeShowInit !== "create"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLogin && ctx.contentCreateQrcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLogin && ctx.contentCreateQrcode && !ctx.scanQrContentConfirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.scanQrContentConfirm && ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.scanQrContentConfirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.contentCreateQrcode && !ctx.scanQrContentConfirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.scanQrContentConfirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.scanQrContentConfirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](29, _c4, ctx.modeShowInit !== "scan"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](31, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](30, 21, "/auth/register")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](33, _c5, ctx.returnUrl));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](35, _c4, ctx.sussScanNextConf !== false));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.sussScanNextConf === true && ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.sussScanNextConf === true && !ctx.isLogin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _azota_ui_azt_create_qr_image_controller_component__WEBPACK_IMPORTED_MODULE_6__.AztCreateQrImageComponent, _azota_ui_azt_scan_qrcode_controller_component__WEBPACK_IMPORTED_MODULE_7__.AztScanQrcodeComponent], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__.ConvertCdnPipe, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_13__.LocalizeRouterPipe], styles: [".loginscan__card-header[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.loginscan__card-body[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.loginscan__card-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loginscan__card-video[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.loginscan__card-video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.loginscan__card-control--switch[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #2462ae6e;\n  color: white;\n  padding: 5px;\n  border-right: 1px solid #e0e0e0;\n  border-bottom: 1px solid #e0e0e0;\n  cursor: pointer;\n}\n.link-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-create-login-img[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100px;\n  background: #f5f5f5;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #e0e0e0;\n  padding: 10px;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  \n  \n  user-select: none;\n  \n}\n.box-create-login-img[_ngcontent-%COMP%]:hover {\n  background: #eceff1;\n}\n.box-create-login-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.loginscan_scanmode_conf[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #e0f2f1;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n}\n.loginscan_scanmode_conf--box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.loginscan_scanmode_conf--box[_ngcontent-%COMP%]   .boxtext[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 30px;\n  margin-bottom: 20px;\n}\n.block-inline-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.back-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 14px;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUROO0FBR0k7RUFDRSxhQUFBO0FBRE47QUFHSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRE47QUFHSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUVNO0VBQ0UsV0FBQTtBQUFSO0FBSU07RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBRlI7QUFRQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTEY7QUFRQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQTZCLGVBQUE7RUFDN0IseUJBQUE7RUFBMkIsV0FBQTtFQUNELG1CQUFBO0VBQ0YsNEJBQUE7RUFDRCwyQkFBQTtFQUN2QixpQkFBQTtFQUFtQixpRkFBQTtBQUNyQjtBQUVBO0VBQ0UsbUJBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtBQUVKO0FBREk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUdOO0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRUY7QUFBQTtFQUNFLGVBQUE7QUFHRiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbnNjYW4ge1xuICAmX19jYXJkIHtcbiAgICAmLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgICYtYm9keSB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgICAmLWltZyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAmLXZpZGVvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB2aWRlbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgICAmLWNvbnRyb2wge1xuICAgICAgJi0tc3dpdGNoIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNDYyYWU2ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5saW5rLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm94LWNyZWF0ZS1sb2dpbi1pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5IHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXG59XG5cbi5ib3gtY3JlYXRlLWxvZ2luLWltZzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlY2VmZjE7XG59XG5cbi5ib3gtY3JlYXRlLWxvZ2luLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbnNjYW5fc2Nhbm1vZGVfY29uZiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZTBmMmYxO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgJi0tYm94IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLmJveHRleHQge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uYmxvY2staW5saW5lLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJhY2stYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDE0cHg7XG59XG4uYmFjay1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ 2761:
/*!****************************************************!*\
  !*** ./src/app/auth/login/controller.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/validator/whitespace.validator */ 41303);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_helpers/LocalStorageObjetc */ 3279);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-recaptcha */ 67227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);

















function LoginComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 13)(2, "div", 14)(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "lang_cms_common_loading"), "...");
} }
function LoginComponent_div_0_div_14_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Vui l\u00F2ng nh\u1EADp \u0111\u00FAng S\u0110T.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_0_div_14_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Vui l\u00F2ng nh\u1EADp m\u1EADt kh\u1EA9u.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_0_div_14_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20)(1, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, ctx_r5.statusObj.errorMessage), "");
} }
function LoginComponent_div_0_div_14_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { return_url: a0, user_click: "true" }; };
function LoginComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 16)(2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginComponent_div_0_div_14_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r7.loginZalo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "\u0110\u0103ng nh\u1EADp b\u1EB1ng Zalo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "br")(8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 6)(10, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "- HO\u1EB6C -");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 20)(14, "div", 21)(15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 24)(18, "span", 25)(19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "phone_enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, LoginComponent_div_0_div_14_div_21_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 20)(23, "div", 21)(24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 24)(27, "span", 25)(28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, LoginComponent_div_0_div_14_div_30_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, LoginComponent_div_0_div_14_div_31_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 20)(33, "div", 29)(34, "div", 16)(35, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginComponent_div_0_div_14_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r9.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, LoginComponent_div_0_div_14_span_36_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "\u0110\u0103ng nh\u1EADp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "center_focus_strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "\u0110\u0103ng nh\u1EADp b\u1EB1ng m\u00E3 Qrcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 33)(45, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](46, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "\u0110\u0103ng k\u00FD th\u00E0nh vi\u00EAn m\u1EDBi");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 35)(49, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginComponent_div_0_div_14_Template_a_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r10.forgotPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Qu\u00EAn m\u1EADt kh\u1EA9u?");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 9, "azota_assets/images/zaloicon.png"), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["phone"].invalid && (ctx_r2.form.controls["phone"].dirty || ctx_r2.form.controls["phone"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["password"].invalid && (ctx_r2.form.controls["password"].dirty || ctx_r2.form.controls["password"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.statusObj.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r2.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](15, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 11, "/auth/login-scan/2")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](17, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](46, 13, "/auth/register")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](19, _c1, ctx_r2.returnUrl));
} }
function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "form", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 5)(5, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "\u0110\u0103ng nh\u1EADp");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, LoginComponent_div_0_div_13_Template, 6, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, LoginComponent_div_0_div_14_Template, 51, 21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 4, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.statusObj.loading);
} }
class LoginComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(formBuilder, commonService, baseApiService, localStorageObjetct, authService, recaptchaV3Service) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.localStorageObjetct = localStorageObjetct;
        this.authService = authService;
        this.recaptchaV3Service = recaptchaV3Service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({});
        this.zaloAccessTkn = '';
        this.mAccessTkn = '';
        this.returnUrl = '';
        this.zaloLoginUrl = '';
        this.loginByToken = true;
        this.initStatusObj();
    }
    executeImportantAction() {
        return new Promise(resolve => {
            this.recaptchaV3Service.execute('importantAction').subscribe(token => {
                resolve(token);
            });
        });
    }
    getError(field) {
        if (this.form.controls[field] && this.form.controls[field].errors) {
            return this.form.controls[field].errors;
        }
        else {
            return false;
        }
    }
    loginZalo() {
        this.commonService.gaEvent('sign_in_click_sign_in_by_zalo');
        window.location.href = this.zaloLoginUrl;
    }
    forgotPassword() {
        this.commonService.gaEvent('sign_in_forgot_password');
        this.commonService.myNavigation('/auth/confirm_forgot_password');
    }
    login() {
        if (this.form.valid) {
            this.initStatusObj();
            this.commonService.gaEvent('sign_in_login_in');
            this.executeImportantAction().then(token => {
                var form_object = this.commonService.getFormObj(this.form);
                var body = {
                    phone: form_object.phone,
                    password: form_object.password,
                    tokenCaptcha: token
                };
                this.subscriptions.add(this.authService.apiAuthLoginWebPost(body).subscribe((response) => {
                    var _a, _b;
                    if (response.success == 1) {
                        this.localStorageObjetct.clearAllCache();
                        this.baseApiService.redirectLoginByRole((_a = this.commonService.getMyQueryParam('return_url')) !== null && _a !== void 0 ? _a : '');
                        this.successStatusObj();
                    }
                    else {
                        this.errorStatusObj((_b = response.message) !== null && _b !== void 0 ? _b : '');
                    }
                }));
            });
        }
    }
    loginAnonymous() {
        this.initStatusObj();
        this.commonService.gaEvent('sign_in_login_anonymous');
        this.executeImportantAction().then(token => {
            var body = {
                tokenCaptcha: token
            };
            this.subscriptions.add(this.authService.apiAuthLoginAnonymousFromWebV2Post(body).subscribe((response) => {
                var _a, _b;
                if (response.success == 1) {
                    this.baseApiService.redirectLoginByRole((_a = this.commonService.getMyQueryParam('return_url')) !== null && _a !== void 0 ? _a : '');
                    this.successStatusObj();
                }
                else {
                    this.errorStatusObj((_b = response.message) !== null && _b !== void 0 ? _b : '');
                }
            }));
        });
    }
    loginWithZaloAccessToken(token) {
        var _a;
        var jwtObj = this.parseJwt(token);
        if (jwtObj) {
            var userObj = this.baseApiService.getUserObj();
            userObj.id = jwtObj.hasOwnProperty('id') ? jwtObj.id : userObj.id;
            userObj.avatar = jwtObj.hasOwnProperty('avatar') ? jwtObj.avatar : userObj.avatar;
            userObj.email = jwtObj.hasOwnProperty('email') ? jwtObj.email : userObj.email;
            userObj.fullName = jwtObj.hasOwnProperty('full_name') ? jwtObj.full_name : userObj.fullName;
            userObj.password = jwtObj.hasOwnProperty('password') ? jwtObj.password : userObj.password;
            userObj.phone = jwtObj.hasOwnProperty('phone') ? jwtObj.phone : userObj.phone;
            userObj.roles = jwtObj.hasOwnProperty('roles') ? jwtObj.roles : userObj.roles;
            userObj.zaloId = jwtObj.hasOwnProperty('zalo_id') ? jwtObj.zalo_id : userObj.zaloId;
            userObj.birthday = jwtObj.hasOwnProperty('birthday') ? jwtObj.birthday : userObj.birthday;
            userObj.gender = jwtObj.hasOwnProperty('gender') ? jwtObj.gender : userObj.gender;
            userObj.amount = jwtObj.hasOwnProperty('amount') ? jwtObj.amount : userObj.amount;
            userObj.rememberToken = token;
            this.baseApiService.saveUserObj(userObj);
            this.baseApiService.redirectLoginByRole((_a = this.commonService.getMyQueryParam('return_url')) !== null && _a !== void 0 ? _a : '');
        }
        else {
            this.errorStatusObj('lang_core_invalid_login_token');
            this.loginByToken = false;
        }
    }
    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return this.commonService.parseJson(jsonPayload);
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        this.zaloAccessTkn = (_a = this.commonService.getMyQueryParam('zaccess_token')) !== null && _a !== void 0 ? _a : '';
        this.mAccessTkn = (_b = this.commonService.getMyQueryParam('access_token')) !== null && _b !== void 0 ? _b : '';
        if (!this.commonService.getMyQueryParam('not_register') && this.zaloAccessTkn) {
            this.loginByToken = true;
            this.loginWithZaloAccessToken(this.zaloAccessTkn);
        }
        else if (!this.commonService.getMyQueryParam('not_register') && this.mAccessTkn) {
            this.loginByToken = true;
            this.loginWithZaloAccessToken(this.mAccessTkn);
        }
        else {
            this.loginByToken = false;
            this.initStatusObj();
            var notRedirect = false;
            this.form = this.formBuilder.group({
                phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__.WhiteSpaceValidator.noWhiteSpace]],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
            });
            if (this.commonService.getMyQueryParam('not_register')) {
                this.commonService.myNavigation('/auth/register');
            }
            else {
                if (this.baseApiService.isLogin() && !this.baseApiService.isAnonymousRole()) {
                    this.baseApiService.redirectLoginByRole((_c = this.commonService.getMyQueryParam('return_url')) !== null && _c !== void 0 ? _c : '');
                }
                else {
                    this.returnUrl = this.commonService.getMyQueryParam('return_url') || '';
                    if (this.returnUrl.indexOf('/test/') !== -1 || this.returnUrl.indexOf('/de-thi/') !== -1 || this.returnUrl.indexOf('/bai-tap/') !== -1) {
                        if (this.commonService.getMyQueryParam('from') != 'register') {
                            if (this.baseApiService.isLogin()) {
                                this.baseApiService.redirectLoginByRole((_d = this.commonService.getMyQueryParam('return_url')) !== null && _d !== void 0 ? _d : '');
                            }
                            else {
                                this.loginAnonymous();
                            }
                        }
                        else {
                            this.zaloLoginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.main_api + 'Auth/LoginZalo?callback_uri=' + encodeURIComponent(this.commonService.getLocalRouter('/auth/login') + '?return_url=' + this.returnUrl + '&is_login=1');
                            notRedirect = true;
                        }
                    }
                    else {
                        this.zaloLoginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.main_api + 'Auth/LoginZalo?callback_uri=' + encodeURIComponent(this.commonService.getLocalRouter('/auth/login') + '?return_url=' + this.returnUrl + '&is_login=1');
                        notRedirect = true;
                    }
                }
            }
            if (notRedirect) {
                if (!this.commonService.getMyQueryParam('user_click') && this.baseApiService.isAnonymousRole()) {
                    this.myNavigation('/student/dashboard/0');
                }
                else {
                    this.commonService.translateMetaData({
                        title: 'lang_cms_auth_login_title',
                        description: 'lang_cms_auth_login_description',
                        image: 'lang_cms_test_image'
                    });
                    this.stopStatusObj();
                    super.ngOnInit();
                }
            }
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_5__.LocalStorageObjetct), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__.ReCaptchaV3Service)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "container-fluid component-wrap centerBoth hasBg", 4, "ngIf"], [1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "form-horizontal", 2, "margin-top", "6vh", 3, "formGroup"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "text-center"], ["alt", "logo", 2, "width", "180px", 3, "src"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "h5"], [1, "card-body"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "col-md-12"], [1, "btn", "btn-outline-primary", "mt-2", 2, "width", "100%", 3, "click"], ["alt", "Zalo Icon", 1, "img-responsive", "zalo-icon", 3, "src"], [1, "h6", "mute-text"], [1, "form-group"], [1, "col-sm-12"], [1, "input-group", "mb-3"], ["type", "tel", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", "formControlName", "phone", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "password", "placeholder", "M\u1EADt kh\u1EA9u", "formControlName", "password", 1, "form-control"], ["class", "form-group", 4, "ngIf"], [2, "display", "flex"], ["mat-raised-button", "", "color", "primary", 2, "width", "100%", 3, "disabled", "click"], [1, "btn", "btn-outline-primary", "mt-3", 2, "width", "100%", "display", "flex", "align-items", "center", "justify-content", "center", 3, "routerLink"], [2, "margin-right", "10px"], [1, "text-center", "mt-3"], [3, "routerLink", "queryParams"], [1, "text-center", "mt-1"], [2, "color", "rgb(216, 2, 2)", 3, "click"], [1, "alert", "alert-danger"], [1, "col-sm-12", "control-label", "text-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 16, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loginByToken);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.ConvertCdnPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.MyLocalizePipe, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_15__.LocalizeRouterPipe], styles: [".checkboxInput[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 2;\n}\n\n.zalo-icon[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFFRiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveElucHV0IHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4uemFsby1pY29uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 34403:
/*!*****************************************************!*\
  !*** ./src/app/auth/logout/controller.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutComponent": () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/redirect.service */ 42873);





class LogoutComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, baseApiService, redirectService) {
        super(commonService);
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.redirectService = redirectService;
    }
    ngOnInit() {
        this.baseApiService.logout();
        var returnUrl = this.commonService.getMyQueryParam('return_url') || null;
        if (returnUrl) {
            this.redirectService.redirectSimpleLoginWithReturnUrl(returnUrl);
        }
        else {
            this.redirectService.redirectSimpleLogin();
        }
        super.ngOnInit();
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_3__.RedirectService)); };
LogoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-register"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function LogoutComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 57039:
/*!***************************************!*\
  !*** ./src/app/auth/module.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 72727);
/* harmony import */ var src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/azota-ui/azota-ui.module */ 47470);
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ 75658);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _powerpoint_frontend_powerpoint_detail_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../powerpoint_frontend/powerpoint-detail/controller.component */ 67156);
/* harmony import */ var _change_info_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change_info/controller.component */ 19936);
/* harmony import */ var _checking_service_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checking_service/controller.component */ 34436);
/* harmony import */ var _confirm_account_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm_account/controller.component */ 24503);
/* harmony import */ var _confirm_forgot_password_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirm_forgot_password/controller.component */ 79316);
/* harmony import */ var _confirm_forgot_password_old_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./confirm_forgot_password_old/controller.component */ 63916);
/* harmony import */ var _confirm_forgot_password_qr_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirm_forgot_password_qr/controller.component */ 6347);
/* harmony import */ var _create_qr_forgot_pass_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-qr-forgot-pass/controller.component */ 56885);
/* harmony import */ var _forgot_password_qr_success_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot_password_qr_success/controller.component */ 35262);
/* harmony import */ var _login_scan_qr_controller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login-scan-qr/controller.component */ 13579);
/* harmony import */ var _login_controller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/controller.component */ 2761);
/* harmony import */ var _register_controller_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/controller.component */ 64811);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routing.module */ 1245);
/* harmony import */ var _set_new_password_controller_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./set_new_password/controller.component */ 51844);
/* harmony import */ var _switch_teacher_student_controller_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./switch-teacher-student/controller.component */ 73013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);























class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_22__.EditorModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
            _routing_module__WEBPACK_IMPORTED_MODULE_15__.AuthRoutingModule,
            src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule,
            src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_controller_component__WEBPACK_IMPORTED_MODULE_13__.LoginComponent,
        _register_controller_component__WEBPACK_IMPORTED_MODULE_14__.RegisterComponent,
        _confirm_forgot_password_controller_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmForgotPasswordComponent,
        _confirm_forgot_password_old_controller_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmForgotPasswordComponentOld,
        _confirm_account_controller_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmAccountComponent,
        _checking_service_controller_component__WEBPACK_IMPORTED_MODULE_5__.CheckingServiceComponent,
        _set_new_password_controller_component__WEBPACK_IMPORTED_MODULE_16__.SetNewPasswordComponent,
        _change_info_controller_component__WEBPACK_IMPORTED_MODULE_4__.ChangeInfoComponent,
        _switch_teacher_student_controller_component__WEBPACK_IMPORTED_MODULE_17__.SwitchTeacherStudentComponent,
        _powerpoint_frontend_powerpoint_detail_controller_component__WEBPACK_IMPORTED_MODULE_3__.DialogOverviewExampleDialog,
        _login_scan_qr_controller_component__WEBPACK_IMPORTED_MODULE_12__.LoginScanQrComponent,
        _create_qr_forgot_pass_controller_component__WEBPACK_IMPORTED_MODULE_10__.CreateQrForgotPassComponent,
        _create_qr_forgot_pass_controller_component__WEBPACK_IMPORTED_MODULE_10__.DialogConfContentQrcodeDialogComponent,
        _confirm_forgot_password_qr_controller_component__WEBPACK_IMPORTED_MODULE_9__.ConfirmForgotPasswordQrComponent,
        _forgot_password_qr_success_controller_component__WEBPACK_IMPORTED_MODULE_11__.ForgotPasswordQrSuccessComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_22__.EditorModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_15__.AuthRoutingModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule] }); })();


/***/ }),

/***/ 64811:
/*!*******************************************************!*\
  !*** ./src/app/auth/register/controller.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MY_FORMATS": () => (/* binding */ MY_FORMATS),
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/validator/whitespace.validator */ 41303);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-recaptcha */ 67227);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);



















function RegisterComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 13)(2, "div", 14)(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 1, "lang_cms_common_loading"), "...");
} }
function RegisterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_13_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.changeRegisterType(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "T\u00F4i l\u00E0 h\u1ECDc sinh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_13_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.changeRegisterType(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "T\u00F4i l\u00E0 gi\u00E1o vi\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 1, "azota_assets/images/teacher.png"), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function RegisterComponent_div_14_div_13_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Vui l\u00F2ng nh\u1EADp h\u1ECD v\u00E0 t\u00EAn.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function RegisterComponent_div_14_div_13_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Y\u00EAu c\u1EA7u nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_13_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ch\u1EC9 g\u1ED3m c\u00E1c ch\u1EEF s\u1ED1 v\u00E0 d\u00E0i 10 k\u00FD t\u1EF1!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_13_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterComponent_div_14_div_13_div_23_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegisterComponent_div_14_div_13_div_23_div_2_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.getErrorType("phone", "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.getErrorType("phone", "pattern") || ctx_r9.getErrorType("phone", "minlength") || ctx_r9.getErrorType("phone", "maxlength"));
} }
function RegisterComponent_div_14_div_13_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "M\u1EADt kh\u1EA9u ph\u1EA3i d\u00E0i t\u1ED1i thi\u1EC3u l\u00E0 6!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_13_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterComponent_div_14_div_13_div_34_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.getErrorType("password", "required") || ctx_r10.getErrorType("password", "minlength"));
} }
function RegisterComponent_div_14_div_13_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39)(1, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, ctx_r11.statusObj.errorMessage), "");
} }
function RegisterComponent_div_14_div_13_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36)(1, "form", 37)(2, "div", 27)(3, "div", 38)(4, "div", 39)(5, "div", 40)(6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 43)(9, "span", 44)(10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "account_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, RegisterComponent_div_14_div_13_div_12_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 27)(14, "div", 38)(15, "div", 39)(16, "div", 40)(17, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 43)(20, "span", 47)(21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "phone_enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, RegisterComponent_div_14_div_13_div_23_Template, 3, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 27)(25, "div", 38)(26, "div", 39)(27, "div", 40)(28, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 43)(31, "span", 49)(32, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, RegisterComponent_div_14_div_13_div_34_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, RegisterComponent_div_14_div_13_div_35_Template, 4, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 39)(37, "div", 27)(38, "div", 38)(39, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_14_div_13_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r16.form.invalid || ctx_r16.statusObj.loading || ctx_r16.registerForTeacher(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, RegisterComponent_div_14_div_13_span_40_Template, 3, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "\u0110\u0103ng k\u00FD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r6.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.form.controls["fullName"].invalid && (ctx_r6.form.controls["fullName"].dirty || ctx_r6.form.controls["fullName"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.form.controls["phone"].invalid && (ctx_r6.form.controls["phone"].dirty || ctx_r6.form.controls["phone"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.form.controls["password"].invalid && (ctx_r6.form.controls["password"].dirty || ctx_r6.form.controls["password"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.statusObj.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r6.form.invalid || ctx_r6.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.statusObj.loading);
} }
function RegisterComponent_div_14_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Vui l\u00F2ng nh\u1EADp h\u1ECD v\u00E0 t\u00EAn.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_14_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "B\u1EA1n ph\u1EA3i nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_14_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ph\u1EA3i l\u00E0 10 s\u1ED1.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_14_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterComponent_div_14_div_14_div_7_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegisterComponent_div_14_div_14_div_7_div_2_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r19.getErrorForm("studentPhone", "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r19.getErrorForm("studentPhone", "minlength") || ctx_r19.getErrorForm("studentPhone", "maxlength"));
} }
function RegisterComponent_div_14_div_14_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "B\u1EA1n ph\u1EA3i nh\u1EADp m\u1EADt kh\u1EA9u.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_14_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "M\u1EADt kh\u1EA9u bao g\u1ED3m 6 k\u00FD t\u1EF1.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_14_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterComponent_div_14_div_14_div_10_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegisterComponent_div_14_div_14_div_10_div_2_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r20.getErrorForm("passWord", "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r20.getErrorForm("passWord", "minlength"));
} }
function RegisterComponent_div_14_div_14_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39)(1, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, ctx_r21.statusObj.errorMessage), "");
} }
function RegisterComponent_div_14_div_14_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55)(1, "form", 56)(2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, RegisterComponent_div_14_div_14_div_4_Template, 2, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, RegisterComponent_div_14_div_14_div_7_Template, 3, 2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, RegisterComponent_div_14_div_14_div_10_Template, 3, 2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, RegisterComponent_div_14_div_14_div_11_Template, 4, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_14_div_14_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r27.formRegister.invalid || ctx_r27.statusObj.loading || ctx_r27.registerForStudent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, RegisterComponent_div_14_div_14_span_14_Template, 3, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Ho\u00E0n Th\u00E0nh \u0110\u0103ng K\u00FD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r7.formRegister);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.formRegister.controls["studentFullName"].invalid && (ctx_r7.formRegister.controls["studentFullName"].dirty || ctx_r7.formRegister.controls["studentFullName"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.formRegister.controls["studentPhone"].invalid && (ctx_r7.formRegister.controls["studentPhone"].dirty || ctx_r7.formRegister.controls["studentPhone"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.formRegister.controls["passWord"].invalid && (ctx_r7.formRegister.controls["passWord"].dirty || ctx_r7.formRegister.controls["passWord"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.statusObj.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r7.formRegister.invalid || ctx_r7.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.statusObj.loading);
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { return_url: a0, from: "register", user_click: "true" }; };
function RegisterComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_14_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r29.changeRegisterType(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00A0 T\u00F4i l\u00E0 h\u1ECDc sinh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 23)(7, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_14_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r31.changeRegisterType(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\u00A0 T\u00F4i l\u00E0 gi\u00E1o vi\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 27)(11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, RegisterComponent_div_14_div_13_Template, 42, 7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, RegisterComponent_div_14_div_14_Template, 16, 7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "B\u1EB1ng c\u00E1ch \u1EA5n v\u00E0o n\u00FAt \"\u0110\u0102NG K\u00DD\", t\u00F4i \u0111\u1ED3ng \u00FD v\u1EDBi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " \u0110i\u1EC1u Kho\u1EA3n S\u1EED D\u1EE5ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " v\u00E0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Ch\u00EDnh S\u00E1ch B\u1EA3o M\u1EADt c\u1EE7a AZOTA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 33)(23, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "B\u1EA1n \u0111\u00E3 c\u00F3 t\u00E0i kho\u1EA3n?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "p")(26, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "\u0110\u0103ng nh\u1EADp");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r2.isShowOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("select-style-active", ctx_r2.isStudent);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("select-style-active", ctx_r2.isTeacher);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.isTeacher == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.isStudent == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 9, "/auth/login")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r2.returnUrl));
} }
const MY_FORMATS = {
    parse: {
        dateInput: 'LL'
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY'
    }
};
class RegisterComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(formBuilder, activeRoute, titleCasePipe, commonService, baseApiService, recaptchaV3Service, authService) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.activeRoute = activeRoute;
        this.titleCasePipe = titleCasePipe;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.recaptchaV3Service = recaptchaV3Service;
        this.authService = authService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({});
        this.formRegister = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({});
        this.returnUrl = '';
        this.zaloLoginUrl = '';
        this.isHiddenFormRegister = true;
        this.isTeacher = false;
        this.isStudent = false;
        this.yesterday = new Date();
        this.isShowOption = true;
        this.isShowRegisterForStudent = false;
        this.isShowRegisterForTeacher = false;
        this.initStatusObj();
    }
    executeImportantAction() {
        return new Promise(resolve => {
            this.recaptchaV3Service.execute('importantAction').subscribe(token => {
                resolve(token);
            });
        });
    }
    getError(field) {
        if (this.form.controls[field].errors) {
            return this.form.controls[field].errors;
        }
        else {
            return false;
        }
    }
    getErrorType(field, type) {
        var _a, _b;
        if ((_a = this.form.controls[field].errors) === null || _a === void 0 ? void 0 : _a[type]) {
            return (_b = this.form.controls[field].errors) === null || _b === void 0 ? void 0 : _b[type];
        }
        else {
            return false;
        }
    }
    getErrorForm(field, type) {
        var _a, _b;
        if ((_a = this.formRegister.controls[field].errors) === null || _a === void 0 ? void 0 : _a[type]) {
            return (_b = this.formRegister.controls[field].errors) === null || _b === void 0 ? void 0 : _b[type];
        }
        else {
            return false;
        }
    }
    goToConfirm() {
        var _a;
        this.returnUrl = (_a = this.commonService.getMyQueryParam('return_url')) !== null && _a !== void 0 ? _a : '';
        var queryString = '?return_url=' + encodeURIComponent(this.returnUrl) + '&confirm_type=confirm_phone_register';
        this.commonService.myNavigationWithQueryString('/auth/checking_service', queryString);
    }
    changeRegisterType(type) {
        this.isShowOption = false;
        if (type == 1) {
            this.commonService.gaEvent('sign_up_switch_to_student');
            this.isTeacher = false;
            this.isStudent = true;
        }
        else {
            this.commonService.gaEvent('sign_up_switch_to_teacher');
            this.isTeacher = true;
            this.isStudent = false;
        }
    }
    loginZalo() {
        this.commonService.gaEvent('sign_up_teacher_by_zalo');
        window.location.href = this.zaloLoginUrl;
    }
    registerForTeacher() {
        if (this.form.valid) {
            this.executeImportantAction().then(token => {
                var form_object = this.commonService.getFormObj(this.form);
                this.initStatusObj();
                var body = {
                    fullName: form_object.fullName,
                    phone: form_object.phone,
                    email: form_object.email,
                    password: form_object.password,
                    tokenCaptcha: token
                };
                this.subscriptions.add(this.authService.apiAuthRegisterPost(body).subscribe(response => {
                    var _a, _b;
                    if (response.success == 1) {
                        this.commonService.gaEvent('sign_up_teacher');
                        this.successStatusObj();
                        this.baseApiService.redirectLoginByRoleForRegister((_a = this.commonService.getMyQueryParam('return_url')) !== null && _a !== void 0 ? _a : '');
                    }
                    else {
                        this.errorStatusObj((_b = response.message) !== null && _b !== void 0 ? _b : '');
                    }
                }));
            });
        }
    }
    registerForStudent() {
        this.executeImportantAction().then(token => {
            this.commonService.gaEvent('sign_up_student');
            var form_obj_student = this.commonService.getFormObj(this.formRegister);
            this.initStatusObj();
            var body = {
                phone: form_obj_student.studentPhone,
                fullName: form_obj_student.studentFullName,
                password: form_obj_student.passWord,
                tokenCaptcha: token
            };
            this.subscriptions.add(this.authService.apiAuthRegisterForStudentPost(body).subscribe(response => {
                var _a, _b;
                if (response.success == 1) {
                    this.successStatusObj();
                    this.baseApiService.redirectLoginByRole((_a = this.commonService.getMyQueryParam('return_url')) !== null && _a !== void 0 ? _a : '');
                }
                else {
                    this.errorStatusObj((_b = response.message) !== null && _b !== void 0 ? _b : '');
                }
            }));
        });
    }
    ngOnInit() {
        var _a;
        if (this.baseApiService.isLogin() && !this.baseApiService.isAnonymousRole()) {
            this.baseApiService.redirectLoginByRole('');
        }
        else {
            var typeParam = this.commonService.getMyParam(this.activeRoute, 'type');
            if (typeParam != null) {
                var typeParamNumber = parseInt(typeParam === null || typeParam === void 0 ? void 0 : typeParam.toString(), 10);
                if (typeParamNumber == 0) {
                    this.changeRegisterType(0);
                }
                else {
                    this.changeRegisterType(1);
                }
            }
            this.yesterday.setDate(this.yesterday.getDate() - 1);
            this.form = this.formBuilder.group({
                fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__.WhiteSpaceValidator.noWhiteSpace]],
                phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(10)]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(6)]]
            });
            this.formRegister = this.formBuilder.group({
                studentPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(10)]],
                studentFullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__.WhiteSpaceValidator.noWhiteSpace]],
                passWord: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(6)]]
            });
            (_a = this.form.get('fullName')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(value => {
                var newValue = this.titleCasePipe.transform(value);
                if (value != newValue) {
                    this.form.controls.fullName.setValue(newValue);
                }
            });
            this.returnUrl = this.commonService.getMyQueryParam('return_url') || this.commonService.getLocalRouter('/admin/testbank/dashboard');
            this.zaloLoginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.main_api + 'Auth/LoginZalo?callback_uri=' + encodeURIComponent(this.commonService.getLocalRouter('/auth/login') + '?return_url=' + this.returnUrl + '&is_register=1');
            let checkUseLogin = this.commonService.getMyQueryParam('user_click');
            if (!checkUseLogin && this.baseApiService.isAnonymousRole()) {
                this.myNavigation('/student/dashboard/0');
            }
            this.commonService.translateMetaData({
                title: 'lang_cms_auth_register_title',
                description: 'lang_cms_auth_register_description',
                image: 'lang_cms_test_image'
            });
            this.stopStatusObj();
        }
        super.ngOnInit();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__.ReCaptchaV3Service), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_5__.AuthService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe, { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_LOCALE] }, { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS, useValue: MY_FORMATS }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 6, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "row", "py-5"], [1, "col-sm-3"], [1, "col-sm-6"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "text-center", "p-0"], ["alt", "logo", 2, "width", "180px", 3, "src"], [1, "p-0", "m-0"], [1, "card-body"], [4, "ngIf"], ["class", "row", "style", "justify-content: space-around", 4, "ngIf"], [3, "hidden", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "row", 2, "justify-content", "space-around"], [1, "col-sm-4", "border-card", "mb-3", 3, "click"], [1, "df-logo"], [1, "fas", "fa-graduation-cap", "pb-3", 2, "font-size", "36px"], ["width", "36px", "height", "45px", 1, "mb-3", 3, "src"], [3, "hidden"], [1, "row", "justify-content-center", "pt-3"], [1, "col-sm-6", "text-center", "mb-3"], [1, "clickable", "select-style", 3, "click"], [1, "fas", "fa-graduation-cap"], [1, "fas", "fa-user-alt"], [1, "row"], [1, "col-12"], ["id", "teacher", 4, "ngIf"], ["id", "chilren", 4, "ngIf"], [1, "mt-2", 2, "text-align", "justify", "font-size", "13px"], ["href", "/privacy/index.html", "target", "_blank"], [1, "text-center", "mt-3"], [1, "text-normal"], [3, "routerLink", "queryParams"], ["id", "teacher"], [1, "form-horizontal", 3, "formGroup"], [1, "col-sm-12"], [1, "form-group"], [1, "col-sm-12", "p-0"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "H\u1ECD t\u00EAn", "formControlName", "fullName", "autocomplete", "new-password", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon1", 1, "input-group-text"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "phone", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", "formControlName", "phone", "autocomplete", "new-password", 1, "form-control"], ["id", "basic-addon2", 1, "input-group-text"], ["type", "password", "placeholder", "M\u1EADt kh\u1EA9u", "formControlName", "password", "autocomplete", "new-password", 1, "form-control"], ["id", "basic-addon3", 1, "input-group-text"], ["class", "form-group", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 2, "width", "100%", 3, "disabled", "click"], [1, "alert", "alert-danger"], [1, "col-sm-12", "control-label", "text-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], ["id", "chilren"], ["autocomplete", "off", 1, "form-horinzal", 3, "formGroup"], ["type", "text", "placeholder", "H\u1ECD v\u00E0 t\u00EAn", "formControlName", "studentFullName", "autocomplete", "new-password", 1, "form-control"], ["class", "alert alert-danger mt-3", 4, "ngIf"], ["type", "text", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", "formControlName", "studentPhone", "autocomplete", "new-password", 1, "form-control"], ["type", "password", "placeholder", "M\u1EADt Kh\u1EA9u", "formControlName", "passWord", "autocomplete", "new-password", 1, "form-control"], ["mat-raised-button", "", 1, "button-color", "text-uppercase", 2, "width", "100%", 3, "disabled", "click"], [1, "alert", "alert-danger", "mt-3"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "convertCdn");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "N\u1EC1n t\u1EA3ng gi\u00E1o d\u1EE5c s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, RegisterComponent_div_12_Template, 6, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 12, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, RegisterComponent_div_14_Template, 29, 15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 4, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShowOption == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.ConvertCdnPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.MytranslatePipe, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_16__.LocalizeRouterPipe], styles: [".zalo-icon[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-right: 10px;\n}\n\n.select-style[_ngcontent-%COMP%] {\n  color: #868686 !important;\n}\n\n.select-style[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.select-style[_ngcontent-%COMP%]:hover {\n  color: #0eafc0 !important;\n}\n\n.select-style-active[_ngcontent-%COMP%] {\n  color: #0eafc0 !important;\n}\n\n.df-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.register--login[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n}\n\n.two-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 80%;\n  height: 100vh;\n  margin: auto;\n}\n\n.register-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  \n  flex-direction: column;\n  justify-content: center;\n}\n\n.btn-max-width[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  font-size: 1.5rem;\n}\n\n.responsive__text[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #0eafc0 !important;\n  border-color: #0eafc0 !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n  border-color: #0eafc0 !important;\n  background-color: #0eafc0 !important;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0b818e !important;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  color: #0eafc0 !important;\n  border-color: #0eafc0 !important;\n  background-color: rgba(14, 172, 190, 0.15);\n}\n\n.btn-border-fix[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n}\n\n.border-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid rgba(220, 220, 220, 0.8);\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 12px;\n  align-items: center;\n  text-align: center;\n}\n\n.border-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.07), -10px -10px 20px rgba(255, 255, 255, 0.8);\n}\n\n.button-color[_ngcontent-%COMP%] {\n  background-color: #0eafc0 !important;\n  color: white !important;\n}\n\n.text-line[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n\n.text-line[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 45%;\n  height: 0.5px;\n  position: absolute;\n  right: 0;\n  background-color: #868686;\n  top: 50%;\n}\n\n.text-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 45%;\n  height: 0.5px;\n  position: absolute;\n  left: 0;\n  background-color: #868686;\n  top: 50%;\n}\n\n.border-select-box[_ngcontent-%COMP%] {\n  border: 1px solid #ccd0d5;\n  border-radius: 4px;\n  padding: 8px 16px;\n}\n\n  .mat-radio-label {\n  margin-bottom: 0 !important;\n}\n\n  .mat-radio-label-content {\n  padding-left: 16px !important;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-inner-circle, .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #0eafc0 !important;\n}\n\n  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #0eafc0 !important;\n}\n\n  .mat-input-element {\n  font-size: 18px !important;\n  caret-color: #0eafc0 !important;\n}\n\n  .mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon, .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-datepicker-toggle-default-icon[_ngcontent-%COMP%] {\n  width: 1.5em !important;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(0, 0, 0, 0.12) !important;\n}\n\n@media only screen and (max-width: 424px) {\n  .btn-max-width[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n@media only screen and (max-width: 364px) {\n  .text-line[_ngcontent-%COMP%]::after, .text-line[_ngcontent-%COMP%]::before {\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0UseUJBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0FBS0Y7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFPRjs7QUFMQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVFGOztBQU5BO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQVNGOztBQVBBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFVRjs7QUFSQTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUFXRjs7QUFUQTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtBQVlGOztBQVZBO0VBQ0Usb0NBQUE7QUFhRjs7QUFYQTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQ0FBQTtBQWNGOztBQVpBO0VBQ0UsOEJBQUE7QUFlRjs7QUFiQTtFQUNFLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWdCRjs7QUFkQTtFQUNFLHlGQUFBO0FBaUJGOztBQWZBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtBQWtCRjs7QUFoQkE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0FBa0JGOztBQWZBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtBQWtCRjs7QUFmQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7QUFrQkY7O0FBaEJBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBbUJGOztBQWhCQTtFQUNFLDJCQUFBO0FBbUJGOztBQWpCQTtFQUNFLDZCQUFBO0FBb0JGOztBQWxCQTs7OztFQU1FLG9DQUFBO0FBbUJGOztBQWpCQTtFQUdFLGdDQUFBO0FBa0JGOztBQWhCQTtFQUNFLDBCQUFBO0VBQ0EsK0JBQUE7QUFtQkY7O0FBakJBOztFQU9FLHVCQUFBO0FBZUY7O0FBYkE7RUFDRSxnREFBQTtBQWdCRjs7QUFkQTtFQUNFO0lBQ0UsZUFBQTtFQWlCRjtBQUNGOztBQWZBO0VBQ0U7O0lBRUUsVUFBQTtFQWlCRjtBQUNGIiwiZmlsZSI6InN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnphbG8taWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNlbGVjdC1zdHlsZSB7XG4gIGNvbG9yOiAjODY4Njg2ICFpbXBvcnRhbnQ7XG59XG4uc2VsZWN0LXN0eWxlIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uc2VsZWN0LXN0eWxlOmhvdmVyIHtcbiAgY29sb3I6ICMwZWFmYzAgIWltcG9ydGFudDtcbn1cbi5zZWxlY3Qtc3R5bGUtYWN0aXZlIHtcbiAgY29sb3I6ICMwZWFmYzAgIWltcG9ydGFudDtcbn1cblxuLmRmLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5yZWdpc3Rlci0tbG9naW4ge1xuICB3aWR0aDogODhweDtcbiAgaGVpZ2h0OiA4OHB4O1xufVxuLnR3by1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnJlZ2lzdGVyLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idG4tbWF4LXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ucmVzcG9uc2l2ZV9fdGV4dCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gIGNvbG9yOiAjMGVhZmMwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzBlYWZjMCAhaW1wb3J0YW50O1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMGVhZmMwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWFmYzAgIWltcG9ydGFudDtcbn1cbi5idG4tcHJpbWFyeTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwgMTI5LCAxNDIsIDEpIWltcG9ydGFudDtcbn1cbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICMwZWFmYzAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMGVhZmMwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE3MiwgMTkwLCAwLjE1KSA7XG59XG4uYnRuLWJvcmRlci1maXgge1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uYm9yZGVyLWNhcmR7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6ICAxcHggc29saWQgaHNsYSgwLDAlLDg2LjMlLC44KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib3JkZXItY2FyZDpob3ZlcntcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggcmdiKDAgMCAwIC8gNyUpLCAtMTBweCAtMTBweCAyMHB4IGhzbCgwZGVnIDAlIDEwMCUgLyA4MCUpO1xufVxuLmJ1dHRvbi1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWFmYzAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4udGV4dC1saW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtbGluZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0NSU7XG4gIGhlaWdodDogMC41cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4Njg2ODY7XG4gIHRvcDogNTAlO1xufVxuXG4udGV4dC1saW5lOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDAuNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4Njg2ODY7XG4gIHRvcDogNTAlO1xufVxuLmJvcmRlci1zZWxlY3QtYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjZDBkNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cbi8vIDo6bmctZGVlcCAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQgLm1hdC1yYWRpby1sYWJlbFxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnRcbiAgLm1hdC1yYWRpby1yaXBwbGVcbiAgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlYWZjMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwXG4gIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWRcbiAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICMwZWFmYzAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgY2FyZXQtY29sb3I6ICMwZWFmYzAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcFxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3lcbiAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeFxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWRlZmF1bHQtaWNvbixcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeVxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4XG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtZGVmYXVsdC1pY29uIHtcbiAgd2lkdGg6IDEuNWVtICFpbXBvcnRhbnQ7XG59XG5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNHB4KSB7XG4gIC5idG4tbWF4LXdpZHRoIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzY0cHgpIHtcbiAgLnRleHQtbGluZTo6YWZ0ZXIsXG4gIC50ZXh0LWxpbmU6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 1245:
/*!****************************************!*\
  !*** ./src/app/auth/routing.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);
/* harmony import */ var _change_info_controller_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change_info/controller.component */ 19936);
/* harmony import */ var _checking_service_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checking_service/controller.component */ 34436);
/* harmony import */ var _confirm_account_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm_account/controller.component */ 24503);
/* harmony import */ var _confirm_forgot_password_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm_forgot_password/controller.component */ 79316);
/* harmony import */ var _confirm_forgot_password_old_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm_forgot_password_old/controller.component */ 63916);
/* harmony import */ var _confirm_forgot_password_qr_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm_forgot_password_qr/controller.component */ 6347);
/* harmony import */ var _create_qr_forgot_pass_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-qr-forgot-pass/controller.component */ 56885);
/* harmony import */ var _forgot_password_qr_success_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot_password_qr_success/controller.component */ 35262);
/* harmony import */ var _login_scan_qr_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-scan-qr/controller.component */ 13579);
/* harmony import */ var _login_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/controller.component */ 2761);
/* harmony import */ var _logout_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logout/controller.component */ 34403);
/* harmony import */ var _register_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/controller.component */ 64811);
/* harmony import */ var _set_new_password_controller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./set_new_password/controller.component */ 51844);
/* harmony import */ var _switch_teacher_student_controller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./switch-teacher-student/controller.component */ 73013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);


















const authRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                children: [
                    { path: 'login', component: _login_controller_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent },
                    { path: 'login-scan/:role', component: _login_scan_qr_controller_component__WEBPACK_IMPORTED_MODULE_8__.LoginScanQrComponent },
                    { path: 'register', component: _register_controller_component__WEBPACK_IMPORTED_MODULE_11__.RegisterComponent },
                    { path: 'register/:type', component: _register_controller_component__WEBPACK_IMPORTED_MODULE_11__.RegisterComponent },
                    { path: 'logout', component: _logout_controller_component__WEBPACK_IMPORTED_MODULE_10__.LogoutComponent },
                    { path: 'confirm_forgot_password', component: _confirm_forgot_password_controller_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmForgotPasswordComponent },
                    { path: 'forgot_password_susscess', component: _forgot_password_qr_success_controller_component__WEBPACK_IMPORTED_MODULE_7__.ForgotPasswordQrSuccessComponent },
                    { path: 'confirm_forgot_password_qr', component: _confirm_forgot_password_qr_controller_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmForgotPasswordQrComponent },
                    { path: 'confirm_forgot_password_old', component: _confirm_forgot_password_old_controller_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmForgotPasswordComponentOld },
                    { path: 'confirm_account', component: _confirm_account_controller_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmAccountComponent },
                    { path: 'checking_service', component: _checking_service_controller_component__WEBPACK_IMPORTED_MODULE_1__.CheckingServiceComponent },
                    { path: 'set_new_password', component: _set_new_password_controller_component__WEBPACK_IMPORTED_MODULE_12__.SetNewPasswordComponent },
                    { path: 'change-info', component: _change_info_controller_component__WEBPACK_IMPORTED_MODULE_0__.ChangeInfoComponent },
                    { path: 'switch-teacher-student', component: _switch_teacher_student_controller_component__WEBPACK_IMPORTED_MODULE_13__.SwitchTeacherStudentComponent },
                    { path: 'create-qr-forgot-pass/:role', component: _create_qr_forgot_pass_controller_component__WEBPACK_IMPORTED_MODULE_6__.CreateQrForgotPassComponent },
                ]
            }
        ]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(authRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_16__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_16__.LocalizeRouterModule] }); })();


/***/ }),

/***/ 51844:
/*!***************************************************************!*\
  !*** ./src/app/auth/set_new_password/controller.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetNewPasswordComponent": () => (/* binding */ SetNewPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);













function SetNewPasswordComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 13)(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, "lang_cms_common_loading"), "...");
} }
function SetNewPasswordComponent_div_14_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " M\u1EADt kh\u1EA9u ph\u1EA3i d\u00E0i t\u1ED1i thi\u1EC3u l\u00E0 6! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SetNewPasswordComponent_div_14_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SetNewPasswordComponent_div_14_div_15_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.getErrorType("password", "required") || ctx_r2.getErrorType("password", "minlength"));
} }
function SetNewPasswordComponent_div_14_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r3.statusObj.errorMessage), "");
} }
function SetNewPasswordComponent_div_14_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { user_click: "true" }; };
function SetNewPasswordComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 15)(2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 19)(6, "span", 20)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 19)(12, "span", 20)(13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, SetNewPasswordComponent_div_14_div_15_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, SetNewPasswordComponent_div_14_div_16_Template, 4, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15)(18, "div", 16)(19, "div", 24)(20, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SetNewPasswordComponent_div_14_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.form.invalid || ctx_r6.statusObj.loading || ctx_r6.changePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, SetNewPasswordComponent_div_14_span_21_Template, 3, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\u0110\u1ED5i m\u1EADt kh\u1EA9u ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 26)(25, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "\u0110\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["password"].invalid && (ctx_r1.form.controls["password"].dirty || ctx_r1.form.controls["password"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.statusObj.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.form.invalid || ctx_r1.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 6, "/auth/login")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c1));
} }
class SetNewPasswordComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(formBuilder, commonService, baseApiService, authService) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.authService = authService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({});
    }
    getError(field) {
        if (this.form.controls[field].errors) {
            return this.form.controls[field].errors;
        }
        else {
            return false;
        }
    }
    getErrorType(field, type) {
        var _a, _b;
        if ((_a = this.form.controls[field].errors) === null || _a === void 0 ? void 0 : _a[type]) {
            return (_b = this.form.controls[field].errors) === null || _b === void 0 ? void 0 : _b[type];
        }
        else {
            return false;
        }
    }
    changePassword() {
        if (this.form.valid) {
            if (this.form.value.password != this.form.value.confirm_password) {
                this.showErrorSnack('Xác nhận mật khẩu không khớp');
            }
            else {
                this.initStatusObj();
                var form_object = this.commonService.getFormObj(this.form);
                var token = this.commonService.getMyQueryParam('token');
                var appName = this.commonService.getMyQueryParam('app_name');
                var body = {
                    firebaseToken: token,
                    newPassword: form_object.password,
                    appName
                };
                this.subscriptions.add(this.authService.apiAuthChangePasswordByFirebasePost(body).subscribe((response) => {
                    var _a;
                    if (response.success == 1) {
                        this.successStatusObj();
                        this.baseApiService.redirectLoginByRole('');
                    }
                    else {
                        this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '');
                    }
                }));
            }
        }
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
            confirm_password: '',
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_auth_confirm_forgot_password_title',
            description: 'lang_cms_auth_confirm_forgot_password_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
}
SetNewPasswordComponent.ɵfac = function SetNewPasswordComponent_Factory(t) { return new (t || SetNewPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
SetNewPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SetNewPasswordComponent, selectors: [["app-confirm-forgot-password"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 6, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "form-horizontal", 2, "margin-top", "4vh", 3, "formGroup"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "text-center"], ["alt", "logo", 2, "width", "180px", 3, "src"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "h5"], [1, "card-body"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "form-group"], [1, "col-sm-12"], [1, "input-group", "mb-3"], ["type", "password", "placeholder", "M\u1EADt kh\u1EA9u m\u1EDBi", "formControlName", "password", "autocomplete", "off", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "password", "placeholder", "X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u", "formControlName", "confirm_password", "autocomplete", "off", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], [1, "text-right"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "text-center", "mt-3"], [1, "text-normal", 3, "routerLink", "queryParams"], [1, "alert", "alert-danger"], [1, "col-sm-12", "control-label", "text-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function SetNewPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "convertCdn");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u0110\u1ED5i m\u1EADt kh\u1EA9u m\u1EDBi");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, SetNewPasswordComponent_div_13_Template, 6, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SetNewPasswordComponent_div_14_Template, 28, 11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.ConvertCdnPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_11__.LocalizeRouterPipe], encapsulation: 2 });


/***/ }),

/***/ 73013:
/*!*********************************************************************!*\
  !*** ./src/app/auth/switch-teacher-student/controller.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchTeacherStudentComponent": () => (/* binding */ SwitchTeacherStudentComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);








function SwitchTeacherStudentComponent_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 13)(2, "div", 14)(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, "lang_cms_common_loading"), "...");
} }
function SwitchTeacherStudentComponent_div_4_div_10_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SwitchTeacherStudentComponent_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 16)(2, "div", 17)(3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwitchTeacherStudentComponent_div_4_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r5.statusObj.loading || ctx_r5.becomeTeacher(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SwitchTeacherStudentComponent_div_4_div_10_span_4_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Click v\u00E0o \u0111\u00E2y \u0111\u1EC3 tr\u1EDF th\u00E0nh gi\u00E1o vi\u00EAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 19)(7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwitchTeacherStudentComponent_div_4_div_10_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r7.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Quay l\u1EA1i trang ch\u1EE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r3.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.statusObj.loading);
} }
function SwitchTeacherStudentComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 8)(5, "div", 9)(6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "T\u00F4i mu\u1ED1n th\u00E0nh gi\u00E1o vi\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SwitchTeacherStudentComponent_div_4_div_9_Template, 6, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SwitchTeacherStudentComponent_div_4_div_10_Template, 9, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.statusObj.loading);
} }
function SwitchTeacherStudentComponent_div_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 13)(2, "div", 14)(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, "lang_cms_common_loading"), "...");
} }
function SwitchTeacherStudentComponent_div_5_div_10_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SwitchTeacherStudentComponent_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 16)(2, "div", 17)(3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwitchTeacherStudentComponent_div_5_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r11.statusObj.loading || ctx_r11.becomeStudent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SwitchTeacherStudentComponent_div_5_div_10_span_4_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Click v\u00E0o \u0111\u00E2y \u0111\u1EC3 b\u1ECF quy\u1EC1n gi\u00E1o vi\u00EAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 19)(7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwitchTeacherStudentComponent_div_5_div_10_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r13.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Quay l\u1EA1i trang ch\u1EE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r9.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.statusObj.loading);
} }
function SwitchTeacherStudentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 8)(5, "div", 9)(6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "T\u00F4i mu\u1ED1n b\u1ECF quy\u1EC1n gi\u00E1o vi\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SwitchTeacherStudentComponent_div_5_div_9_Template, 6, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SwitchTeacherStudentComponent_div_5_div_10_Template, 9, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.statusObj.loading);
} }
class SwitchTeacherStudentComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(baseApiService, authService, commonService) {
        super(commonService);
        this.baseApiService = baseApiService;
        this.authService = authService;
        this.commonService = commonService;
        this.isTeacher = false;
        this.isStudent = false;
    }
    goBack() {
        this.baseApiService.redirectLoginByRole('');
    }
    becomeTeacher() {
        this.initStatusObj();
        this.subscriptions.add(this.authService.apiAuthConvertToTeacherGet().subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.baseApiService.redirectLoginByRole('');
            }
            else {
                this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
            }
        }));
    }
    becomeStudent() {
        this.initStatusObj();
        this.subscriptions.add(this.authService.apiAuthRemoveTeacherRoleGet().subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.baseApiService.redirectLoginByRole(this.commonService.getLocalRouter('/student/dashboard/0'));
            }
            else {
                this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
            }
        }));
    }
    ngOnInit() {
        this.commonService.translateMetaData({
            title: 'Đổi Vai Trò',
            description: 'Đổi Vai Trò',
            image: 'lang_cms_test_image',
        });
        this.isTeacher = this.baseApiService.isTeacherRole();
        super.ngOnInit();
    }
}
SwitchTeacherStudentComponent.ɵfac = function SwitchTeacherStudentComponent_Factory(t) { return new (t || SwitchTeacherStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_1__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService)); };
SwitchTeacherStudentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SwitchTeacherStudentComponent, selectors: [["app-switch-teacher-student"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 2, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [2, "margin-top", "6vh"], [1, "row"], [1, "col-sm-3"], ["class", "col-sm-6", 4, "ngIf"], [1, "col-sm-6"], [1, "text-center"], ["alt", "logo", 2, "width", "180px", 3, "src"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "h5"], [1, "card-body"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "form-group"], [1, "col-md-12", "text-center"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "text-center", "mt-3"], [1, "clickable", 3, "click"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function SwitchTeacherStudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SwitchTeacherStudentComponent_div_4_Template, 11, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SwitchTeacherStudentComponent_div_5_Template, 11, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isTeacher == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isTeacher == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.ConvertCdnPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 11877:
/*!*************************************************!*\
  !*** ./src/app/core/services/window.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WindowService": () => (/* binding */ WindowService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class WindowService {
    get windowRef() {
        return window;
    }
}
WindowService.ɵfac = function WindowService_Factory(t) { return new (t || WindowService)(); };
WindowService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowService, factory: WindowService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_auth_module_module_ts.js.map