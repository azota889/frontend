"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_student_frontend_module_module_ts"],{

/***/ 38515:
/*!**********************************************************************!*\
  !*** ./src/app/student_frontend/add-teacher/controller.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTeacherComponent": () => (/* binding */ AddTeacherComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_helpers/LocalStorageObjetc */ 3279);








function AddTeacherComponent_div_4_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage());
} }
function AddTeacherComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 7)(5, "mat-form-field", 8)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function AddTeacherComponent_div_4_Template_input_keydown_enter_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.findClassByTeacherPhone(ctx_r3.numberPhone.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AddTeacherComponent_div_4_mat_error_10_Template, 2, 1, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 11)(12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddTeacherComponent_div_4_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.findClassByTeacherPhone(ctx_r5.numberPhone.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Ti\u1EBFp theo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, "lang_student_frontend_add_teacher_enter_phone_teacher"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 6, "lang_number_phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r0.numberPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.numberPhone.invalid);
} }
function AddTeacherComponent_div_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-select-classes", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectClassroom", function AddTeacherComponent_div_5_ng_template_1_Template_app_select_classes_selectClassroom_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.closeChooseStudent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataClass", ctx_r6.chooseChildData == null ? null : ctx_r6.chooseChildData.classObjs)("isSearchTeacher", true);
} }
function AddTeacherComponent_div_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-select-student", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectChild", function AddTeacherComponent_div_5_ng_template_2_Template_app_select_student_selectChild_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.closeChooseStudent($event); })("approvedByName", function AddTeacherComponent_div_5_ng_template_2_Template_app_select_student_approvedByName_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r13.approvedByName($event); })("backToClass", function AddTeacherComponent_div_5_ng_template_2_Template_app_select_student_backToClass_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.backToClassList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r7.chooseChildData)("showAddStudent", ctx_r7.chooseChildData.classObj == null ? null : ctx_r7.chooseChildData.classObj.showAddStudent)("back_link", true)("isSearchTeacher", true);
} }
function AddTeacherComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18)(1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "lang_student_frontend_add_teacher_not_search_class_width_phone"), "!");
} }
function AddTeacherComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddTeacherComponent_div_5_ng_template_1_Template, 1, 2, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AddTeacherComponent_div_5_ng_template_2_Template, 1, 4, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AddTeacherComponent_div_5_div_3_Template, 4, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectStudent);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isNullSearchData);
} }
class AddTeacherComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(commonService, activatedRoute, localStorageObjetct, frontStudentService) {
        super(commonService);
        this.commonService = commonService;
        this.activatedRoute = activatedRoute;
        this.localStorageObjetct = localStorageObjetct;
        this.frontStudentService = frontStudentService;
        this.isSearchClass = false;
        this.isShowAddClassInput = true;
        this.isNullSearchData = false;
        this.selectStudent = false;
        this.selectClass = false;
        this.backtoParam = '/student/dashboard/0';
        this.numberPhone = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(20)]);
        this.chooseChildData = { isPendingApproved: false, isShow: false };
        this.teacherPhone = '';
    }
    approvedByName(dataEmit) {
        let data = {
            fullName: dataEmit.nameEmit,
            phone: this.teacherPhone,
            classroomId: dataEmit.classId ? dataEmit.classId : 0
        };
        this.subscriptions.add(this.frontStudentService.apiFrontStudentSaveStudentByTeacherPhonePost(data).subscribe((response) => {
            var _a, _b;
            if (response.success == 1) {
                this.isShowAddClassInput = false;
                this.chooseChildData.isShow = false;
                this.commonService.snackSuccess('Xin vào lớp thành công', 'Đóng');
                var backtoLink = (_a = this.commonService.getMyQueryParam('backto')) !== null && _a !== void 0 ? _a : '';
                this.commonService.myNavigation(backtoLink);
                // clear cache
                this.localStorageObjetct.removeCacheByValue('FrontPageStudent');
                this.localStorageObjetct.removeCacheByValue('GetExamObjsInDashboard');
                this.localStorageObjetct.removeCacheByValue('GetClassroomInHomeworkObjsInDashboard');
            }
            else {
                this.errorStatusObj((_b = response.message) !== null && _b !== void 0 ? _b : '', true);
            }
        }));
    }
    openChooseStudent(type) {
        if (type == 1) {
            // select class
            this.selectStudent = false;
            this.selectClass = true;
            this.chooseChildData.isPendingApproved = false;
            this.chooseChildData.isShow = true;
        }
        else if (type == 2) {
            // select student
            this.selectStudent = true;
            this.selectClass = false;
            this.chooseChildData.isPendingApproved = false;
            this.chooseChildData.isShow = true;
        }
    }
    closeChooseStudent(dataEmit) {
        var _a, _b;
        if (dataEmit.type == 1) {
            // vừa select class => chọn tiếp student
            var studentObjs = (_a = this.dataProcess) === null || _a === void 0 ? void 0 : _a.studentObjs;
            var filterStudentObjs = [];
            if (studentObjs && studentObjs.length > 0) {
                filterStudentObjs = studentObjs.filter((each) => each.classroomId == dataEmit.classObj.id);
            }
            this.chooseChildData.classObjs = undefined;
            this.chooseChildData.studentObjs = filterStudentObjs;
            this.chooseChildData.classObj = dataEmit.classObj;
            this.openChooseStudent(2);
        }
        else {
            if (dataEmit.studentObj.isVerified == 0 || dataEmit.classObj.freeChooseName == 1) {
                // chọn student => call api saveParent
                this.frontStudentService.apiFrontStudentAddStudentToClassByTeacherPhoneGet(this.teacherPhone, dataEmit.classId, (_b = dataEmit.studentObj.id) !== null && _b !== void 0 ? _b : 0).subscribe((response) => {
                    if (response.success == 1) {
                        this.isShowAddClassInput = false;
                        this.chooseChildData.isShow = false;
                        this.showSuccessSnack('Thêm vào lớp thành công');
                        this.commonService.myNavigation(`/student/dashboard/0`);
                        // clear cache
                        this.localStorageObjetct.removeCacheByValue('FrontPageStudent');
                        this.localStorageObjetct.removeCacheByValue('GetExamObjsInDashboard');
                        this.localStorageObjetct.removeCacheByValue('GetClassroomInHomeworkObjsInDashboard');
                    }
                    else {
                        this.showErrorSnack('Không tải được dữ liệu');
                    }
                });
            }
            else {
                this.showErrorSnack('Học sinh ' + dataEmit.studentObj.fullName + ' đã có người chọn. Bạn hãy đăng nhập đúng tài khoản để nộp bài. Nếu không được hãy liên hệ Giáo viên để "Xác thực lại"');
            }
        }
    }
    backToClassList(dataEmit) {
        var _a;
        this.chooseChildData.studentObjs = undefined;
        this.chooseChildData.classObjs = (_a = this.dataProcess) === null || _a === void 0 ? void 0 : _a.classroomObjs;
        this.selectClass = dataEmit.selectClass;
        this.selectStudent = dataEmit.selectStudent;
        this.openChooseStudent(1);
    }
    handleAddStudentInClass() {
        this.isShowAddClassInput = !this.isShowAddClassInput;
    }
    getErrorMessage() {
        if (this.numberPhone.hasError('required')) {
            return 'Bạn phải nhận số điện thoại giáo viên';
        }
        return this.numberPhone.hasError('Số điện thoại giáo viên') ? 'không đúng' : '';
    }
    findClassByTeacherPhone(phone) {
        if (this.numberPhone.value == '') {
            this.commonService.snackError('Yêu cầu nhập đúng Số điện thoại', 'Đóng');
            return;
        }
        else {
            this.frontStudentService.apiFrontStudentSearchClassroomObjsByTeacherPhoneGet(phone.toString()).subscribe((response) => {
                var _a, _b, _c, _d;
                if (response.success == 1) {
                    if ((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.classroomObjs) === null || _b === void 0 ? void 0 : _b.length) {
                        this.selectClass = true;
                        this.isShowAddClassInput = false;
                        this.isSearchClass = true;
                        this.dataProcess = response.data;
                        this.teacherPhone = phone;
                        this.openChooseStudent(1);
                        this.chooseChildData.studentObjs = undefined;
                        this.chooseChildData.classObjs = (_c = this.dataProcess) === null || _c === void 0 ? void 0 : _c.classroomObjs;
                        this.isNullSearchData = false;
                    }
                    else {
                        this.commonService.snackWarning('Không tìm thấy Lớp nào được khởi tạo bởi giáo viên bạn đang tìm kiếm!', 'Đóng');
                    }
                }
                else {
                    this.isSearchClass = true;
                    this.isNullSearchData = true;
                    this.errorStatusObj((_d = response.message) !== null && _d !== void 0 ? _d : '', true);
                }
            });
        }
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            let backtoParam = params.backto;
            this.backtoParam = backtoParam || this.backtoParam;
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_student_add_teacher_title',
            description: 'lang_cms_student_add_teacher_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
}
AddTeacherComponent.ɵfac = function AddTeacherComponent_Factory(t) { return new (t || AddTeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_3__.LocalStorageObjetct), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__.FrontStudentService)); };
AddTeacherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddTeacherComponent, selectors: [["app-add-teacher"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 6, consts: [[3, "headerTitle", "back_link"], [1, "app", "py-4", "maxW1200"], [1, "app", "py-4"], ["class", "text-center box", 4, "ngIf"], ["class", "mt-3 searchBox card p-3", "style", "background: rgb(217 209 209 / 10%);", 4, "ngIf"], [1, "text-center", "box"], [1, "mb-4"], [1, "box-top"], ["appearance", "outline"], ["type", "text", "matInput", "", "autocomplete", "off", 3, "formControl", "keydown.enter"], [4, "ngIf"], [1, "", 2, "width", "100%"], ["mat-raised-button", "", 2, "background-color", "#169BD5", "color", "white", "width", "100%", 3, "click"], [1, "mt-3", "searchBox", "card", "p-3", 2, "background", "rgb(217 209 209 / 10%)"], [3, "ngIf"], ["class", "text-center mt-2", 4, "ngIf"], [3, "dataClass", "isSearchTeacher", "selectClassroom"], [3, "data", "showAddStudent", "back_link", "isSearchTeacher", "selectChild", "approvedByName", "backToClass"], [1, "text-center", "mt-2"], [1, "h5"]], template: function AddTeacherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "header-frontend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AddTeacherComponent_div_4_Template, 14, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AddTeacherComponent_div_5_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "student-frontend-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, "lang_student_frontend_add_teacher_header_title"))("back_link", ctx.backtoParam);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowAddClassInput === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSearchClass);
    } }, styles: ["a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.box[_ngcontent-%COMP%] {\n  max-width: 350px;\n  color: #222;\n  text-align: center;\n  transition: all 0.5s;\n  display: flex;\n  margin: 0 auto;\n  height: 135px;\n  padding: 10px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px !important;\n}\n\n.box-top[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.box-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: end;\n}\n\n.box-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.box-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.box-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n@media (max-width: 468px) {\n  .box-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .box-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n\n@media (min-width: 1000px) {\n  .truncate[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 280px;\n    vertical-align: middle;\n  }\n}\n\n@media (max-width: 1000px) {\n  .truncate[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 200px;\n    vertical-align: middle;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUJBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUVKOztBQURJO0VBQ0ksV0FBQTtBQUdSOztBQURJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFHUjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSTtJQUNJLGVBQUE7RUFPTjs7RUFMRTtJQUNJLGVBQUE7RUFRTjs7RUFORTtJQUNJLGVBQUE7RUFTTjtBQUNGOztBQU5FO0VBQ0U7SUFDSSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0VBUU47QUFDRjs7QUFMRTtFQUNFO0lBQ0ksbUJBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtFQU9OO0FBQ0YiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmJveHtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OjEzNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICYtdG9we1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgJi1ib3R0b217XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxufVxuLmJveC10aXRsZXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjpyZ2IoMCAwIDAgLyA2MCUpXG59XG4uYm94LWljb257XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmJveC10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5idG4tY3VzdG9te1xuICAgIGNvbG9yOiAjMDAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2OHB4KXtcbiAgICAuYm94LWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgLmJveC10ZXh0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5ib3gtaWNvbiAubWF0ZXJpYWwtaWNvbnN7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB9XG59XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCl7XG4gICAgLnRydW5jYXRlIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xuICAgIC50cnVuY2F0ZSB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 6474:
/*!********************************************************************!*\
  !*** ./src/app/student_frontend/dashboard/controller.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentFrontDashboardComponent": () => (/* binding */ StudentFrontDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_qa_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/qa_api */ 69496);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _utils_dashboard_exam_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/dashboard-exam/controller.component */ 40978);
/* harmony import */ var _utils_dashboard_exercise_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/dashboard-exercise/controller.component */ 6949);
/* harmony import */ var _utils_dashboard_qa_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/dashboard-qa/controller.component */ 48303);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_azt_block_exam_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../azota-ui/azt-block-exam/controller.component */ 49674);
/* harmony import */ var _azota_ui_azt_block_homework_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../azota-ui/azt-block-homework/controller.component */ 83727);
/* harmony import */ var _azota_ui_azt_block_qa_controller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../azota-ui/azt-block-qa/controller.component */ 58);
/* harmony import */ var _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/footer/controller.component */ 99716);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);























function StudentFrontDashboardComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown.enter", function StudentFrontDashboardComponent_div_37_Template_input_keydown_enter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r3.searchDataObjsByName(ctx_r3.searchValue.value, ctx_r3.checkDashboard); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StudentFrontDashboardComponent_div_37_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r5.searchDataObjsByName(ctx_r5.searchValue.value, ctx_r5.checkDashboard); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx_r0.searchValue);
} }
function StudentFrontDashboardComponent_div_38_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-dashboard-exam");
} }
function StudentFrontDashboardComponent_div_38_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-dashboard-exercise");
} }
function StudentFrontDashboardComponent_div_38_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-dashboard-qa");
} }
function StudentFrontDashboardComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, StudentFrontDashboardComponent_div_38_ng_template_1_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, StudentFrontDashboardComponent_div_38_ng_template_2_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, StudentFrontDashboardComponent_div_38_ng_template_3_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.checkDashboard === "exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.checkDashboard === "exercise");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.checkDashboard === "listQuestion");
} }
function StudentFrontDashboardComponent_div_39_azt_loading_effect_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "azt-loading-effect");
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { backto: "/student/dashboard/0" }; };
function StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 31)(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "azt-block-exam", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemExam_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, "/de-thi/" + itemExam_r19.hashId)))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("data", itemExam_r19);
} }
function StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_div_1_div_1_Template, 4, 8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r15.searchData == null ? null : ctx_r15.searchData.examList);
} }
const _c2 = function () { return { backto: "/student/dashboard/1/" }; };
function StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "azt-block-homework", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemHomework_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, "/bai-tap/" + itemHomework_r21.hashId)))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("data", itemHomework_r21);
} }
function StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_div_2_div_1_Template, 4, 8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r16.searchData == null ? null : ctx_r16.searchData.homeworkList);
} }
const _c3 = function () { return { backto: "/student/dashboard/2" }; };
function StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "azt-block-qa", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemQA_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, "/student-qa/view-question/" + itemQA_r23.id)))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](7, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("data", itemQA_r23);
} }
function StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_div_3_div_1_Template, 4, 8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r17.searchData == null ? null : ctx_r17.searchData.QAList);
} }
function StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_div_2_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_div_3_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r12.checkDashboard == "exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r12.checkDashboard == "exercise");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r12.checkDashboard == "listQuestion");
} }
function StudentFrontDashboardComponent_div_39_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 35)(1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 1, "lang_not_data"));
} }
function StudentFrontDashboardComponent_div_39_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, StudentFrontDashboardComponent_div_39_ng_template_11_ng_container_0_Template, 4, 3, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, StudentFrontDashboardComponent_div_39_ng_template_11_ng_template_1_Template, 4, 3, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](2);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r11.searchData)("ngIfElse", _r13);
} }
function StudentFrontDashboardComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StudentFrontDashboardComponent_div_39_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r24.checkDataSearch = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](9, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, StudentFrontDashboardComponent_div_39_azt_loading_effect_10_Template, 1, 0, "azt-loading-effect", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, StudentFrontDashboardComponent_div_39_ng_template_11_Template, 3, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](12);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 4, "lang_student_frontend_dashboard_result_search"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](9, 6, "lang_buttom_back"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.isLoadingSearch)("ngIfElse", _r10);
} }
class StudentFrontDashboardComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(activeRoute, commonService, studentQuestionService, baseApiService, frontPageStudentService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.studentQuestionService = studentQuestionService;
        this.baseApiService = baseApiService;
        this.frontPageStudentService = frontPageStudentService;
        this.checkSearchInput = false;
        this.checkDashboard = 'exam';
        this.id = 0;
        this.searchValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required
        ]);
        this.isLoadingSearch = false;
        this.checkDataSearch = false;
    }
    searchDataObjsByName(name, type) {
        this.isLoadingSearch = true;
        // reset search
        this.searchData = { examList: [], homeworkList: [], QAList: [] };
        if (type === 'exam') {
            this.frontPageStudentService.apiFrontPageStudentSearchExamObjsInDashboardGet(name).subscribe((response) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                // Xử lý dữ liệu
                if (((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.tookObjs) === null || _b === void 0 ? void 0 : _b.length) && ((_c = this.searchData) === null || _c === void 0 ? void 0 : _c.examList)) {
                    this.searchData.examList = (_d = this.searchData) === null || _d === void 0 ? void 0 : _d.examList.concat(response.data.tookObjs);
                }
                if ((_f = (_e = response.data) === null || _e === void 0 ? void 0 : _e.classroomExamObjs) === null || _f === void 0 ? void 0 : _f.length) {
                    for (let i = 0; i < response.data.classroomExamObjs.length; i++) {
                        if (((_g = this.searchData) === null || _g === void 0 ? void 0 : _g.examList) && response.data.classroomExamObjs && response.data.classroomExamObjs[i].objs && ((_h = response.data.classroomExamObjs[i].objs) === null || _h === void 0 ? void 0 : _h.length)) {
                            this.searchData.examList = this.searchData.examList.concat((_j = response.data.classroomExamObjs[i].objs) !== null && _j !== void 0 ? _j : []);
                        }
                    }
                }
                this.isLoadingSearch = false;
            });
        }
        else if (type === 'exercise') {
            this.frontPageStudentService.apiFrontPageStudentSearchHomeworkObjsInDashboardGet(name).subscribe((response) => {
                var _a, _b, _c, _d, _e, _f, _g;
                // Xử lý dữ liệu
                if ((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) === null || _b === void 0 ? void 0 : _b.length) {
                    for (let i = 0; i < response.data.objs.length; i++) {
                        if (response.data.objs[i] && ((_c = response.data.objs[i].homeworkObjs) === null || _c === void 0 ? void 0 : _c.length) && ((_d = this.searchData) === null || _d === void 0 ? void 0 : _d.homeworkList)) {
                            this.searchData.homeworkList = (_f = (_e = this.searchData) === null || _e === void 0 ? void 0 : _e.homeworkList) === null || _f === void 0 ? void 0 : _f.concat((_g = response.data.objs[i].homeworkObjs) !== null && _g !== void 0 ? _g : []);
                        }
                    }
                }
                this.isLoadingSearch = false;
            });
        }
        else if (type === 'listQuestion') {
            this.studentQuestionService.apiStudentQuestionSearchObjsGet(name).subscribe((response) => {
                var _a, _b, _c, _d, _e;
                if (response.success === 1) {
                    if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) && ((_b = this.searchData) === null || _b === void 0 ? void 0 : _b.QAList)) {
                        this.searchData.QAList = (_d = (_c = this.searchData) === null || _c === void 0 ? void 0 : _c.QAList) === null || _d === void 0 ? void 0 : _d.concat((_e = response.data) === null || _e === void 0 ? void 0 : _e.objs);
                    }
                }
                this.isLoadingSearch = false;
            });
        }
        this.checkSearchInput = false;
        this.checkDataSearch = true;
    }
    changeDashboardExam() {
        this.commonService.myNavigation('/student/dashboard/0');
        this.id = 0;
        this.checkDashboard = 'exam';
        this.checkDataSearch = false;
    }
    changeDashboardExercise() {
        this.commonService.myNavigation('/student/dashboard/1');
        this.id = 1;
        this.checkDashboard = 'exercise';
        this.checkDataSearch = false;
    }
    changeListQuestion() {
        this.commonService.myNavigation('/student/dashboard/2');
        this.id = 2;
        this.checkDashboard = 'listQuestion';
        this.checkDataSearch = false;
    }
    ngOnInit() {
        this.commonService.translateMetaData({
            title: 'lang_cms_student_dashboard_title',
            description: 'lang_cms_student_dashboard_description',
            image: 'lang_cms_test_image',
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)([
            this.activeRoute.params,
            this.activeRoute.queryParams,
        ]).subscribe(([]) => {
            var _a;
            let idUrl = (_a = this.commonService.getMyParam(this.activeRoute, 'id')) !== null && _a !== void 0 ? _a : '';
            this.id = parseInt(idUrl, 10);
            if (this.id === 0) {
                this.checkDashboard = 'exam';
            }
            else if (this.id === 2) {
                this.checkDashboard = 'listQuestion';
            }
            else {
                this.checkDashboard = 'exercise';
            }
            let body = document.body;
            body.style.overflowY = 'scroll';
        });
        super.ngOnInit();
    }
}
StudentFrontDashboardComponent.ɵfac = function StudentFrontDashboardComponent_Factory(t) { return new (t || StudentFrontDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_auto_api_qa_api__WEBPACK_IMPORTED_MODULE_2__.StudentQuestionService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_4__.FrontPageStudentService)); };
StudentFrontDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: StudentFrontDashboardComponent, selectors: [["app-student-frontend-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 41, vars: 19, consts: [[3, "headerTitle"], [1, "app", "py-4", "maxW1200"], [1, "container"], [1, "row", "row-custom", "px-1"], [1, "col-sm-5", "col-md-3", "col-lg-2", "col-5", "py-3"], [1, "box", 2, "margin-left", "-6px", 3, "ngClass", "click"], [1, "box-icon", "box-icon-search"], [1, "box-text"], [1, "box", 3, "ngClass", "click"], [1, "box-icon", "box-icon-upload"], [2, "color", "#f39c12"], [1, "block-search", 3, "ngClass"], [1, "col-custom"], ["mat-icon-button", "", 1, "btn-search", 3, "click"], [1, "search-icon"], ["class", "box box-custom box-search", 4, "ngIf"], [4, "ngIf"], [1, "box", "box-custom", "box-search"], [1, "search-box"], ["type", "text", "placeholder", "T\u00ECm ki\u1EBFm..", 1, "search-input", 3, "formControl", "keydown.enter"], [1, "search-button", 3, "click"], [3, "ngIf"], [1, "block-list"], [1, "block-all", "mt-2"], [1, "block-header"], [1, "heading-title"], ["mat-button", "", 1, "btn-all", 3, "click"], [4, "ngIf", "ngIfElse"], ["doneLoadingSearch", ""], ["emptyData", ""], ["class", "mt-3", 4, "ngFor", "ngForOf"], [1, "mt-3"], [1, "link-text", 3, "routerLink", "queryParams"], [3, "data"], [4, "ngFor", "ngForOf"], [1, "block-else"], [1, "text-else"]], template: function StudentFrontDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "header-frontend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StudentFrontDashboardComponent_Template_div_click_6_listener() { return ctx.changeDashboardExam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 6)(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "school");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 7)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](13, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 4)(15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StudentFrontDashboardComponent_Template_div_click_15_listener() { return ctx.changeDashboardExercise(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 9)(17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "event_available");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 7)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](22, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 4)(24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StudentFrontDashboardComponent_Template_div_click_24_listener() { return ctx.changeListQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "div", 9)(26, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 7)(29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](31, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 11)(33, "div", 12)(34, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StudentFrontDashboardComponent_Template_button_click_34_listener() { return ctx.checkSearchInput = !ctx.checkSearchInput; });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](37, StudentFrontDashboardComponent_div_37_Template, 6, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](38, StudentFrontDashboardComponent_div_38_Template, 4, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](39, StudentFrontDashboardComponent_div_39_Template, 13, 8, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](40, "student-frontend-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 11, "lang_student_frontend_dashboard_header_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx.checkDashboard === "exam" ? "box-active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](13, 13, "lang_student_frontend_dashboard_exam"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx.checkDashboard === "exercise" ? "box-active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](22, 15, "lang_student_frontend_dashboard_homework"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx.checkDashboard === "listQuestion" ? "box-active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](31, 17, "lang_student_frontend_dashboard_q&a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx.checkSearchInput ? "large-width" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.checkSearchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.checkDataSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.checkDataSearch);
    } }, directives: [_azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_5__.HeaderFrontendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlDirective, _utils_dashboard_exam_controller_component__WEBPACK_IMPORTED_MODULE_6__.StudentDashboardExamComponent, _utils_dashboard_exercise_controller_component__WEBPACK_IMPORTED_MODULE_7__.StudentDashboardExerciseComponent, _utils_dashboard_qa_controller_component__WEBPACK_IMPORTED_MODULE_8__.DashboardQAComponent, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_9__.AztLoadingEffectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLinkWithHref, _azota_ui_azt_block_exam_controller_component__WEBPACK_IMPORTED_MODULE_10__.AztBlockExamQuestionComponent, _azota_ui_azt_block_homework_controller_component__WEBPACK_IMPORTED_MODULE_11__.AztBlockHomeworkComponent, _azota_ui_azt_block_qa_controller_component__WEBPACK_IMPORTED_MODULE_12__.AztBlockQAQuestionComponent, _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_13__.StudentFrontendFooterComponent], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__.MyLocalizePipe], styles: ["a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.app[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n.box[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  border: 1px solid rgba(220, 220, 220, 0.8);\n  color: #222;\n  text-align: center;\n  transition: all 0.5s;\n  display: flex;\n  padding: 1px;\n  padding-top: 6px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px !important;\n  cursor: pointer;\n}\n\n.box-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 10px;\n}\n\n.box-icon-upload[_ngcontent-%COMP%] {\n  color: #00a7d0;\n}\n\n.box-icon-search[_ngcontent-%COMP%] {\n  color: #bf3232;\n}\n\n.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n}\n\n.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n\n.box-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n\n.box-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.box-active[_ngcontent-%COMP%] {\n  background-color: #fff;\n  font-weight: 500;\n}\n\n.box-search[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.block-list[_ngcontent-%COMP%] {\n  background: #ececec;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.14);\n}\n\n.block-list-bottom[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  border: none;\n  display: flex;\n  align-items: center;\n  color: #707070;\n  background: transparent;\n}\n\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%] {\n  text-transform: initial;\n  margin-left: 2px;\n}\n\n.block-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.no-active[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #2361ae;\n  color: #fff;\n}\n\n.block-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.block-avatar[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  width: 30px;\n  height: 30px;\n  margin-right: 20px;\n}\n\n.image[_ngcontent-%COMP%] {\n  border: 1px solid #007bff;\n  border-radius: 50px !important;\n  width: 100%;\n}\n\n.text-count[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 1px;\n  color: #777;\n}\n\n.text-mark[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 1px;\n  color: #0EAFC0;\n}\n\n.heading-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 500;\n  font-size: 16px;\n  margin-right: 15px;\n}\n\n.heading-text[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n\n.block-avatar[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.block-avatar-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.col-custom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: relative;\n}\n\n.btn-all[_ngcontent-%COMP%] {\n  text-transform: inherit;\n  font-size: 14px;\n  color: #0EAFC0;\n  font-weight: 500;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  color: #00c0ef;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  display: flex;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #999;\n  border-radius: 5px 0 0 5px;\n  outline: none;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.699);\n  background: none;\n  border-right: none;\n}\n\n.search-button[_ngcontent-%COMP%] {\n  text-align: center;\n  outline: none;\n  cursor: pointer;\n  border: 1px solid #999;\n  border-radius: 0 5px 5px 0;\n  background: none;\n  font-size: 20px;\n  border-left: none;\n}\n\n.box-custom[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 12px;\n  flex-direction: column;\n  position: absolute;\n  z-index: 999;\n  top: -8px;\n  right: 8px;\n}\n\n.box-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.box-bottom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px 5px;\n  width: calc(20% - 10px);\n}\n\n.row-custom[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.block-search[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 45px;\n  right: 20px;\n  transform: translateY(-50%);\n  z-index: 999;\n  width: 10%;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n  border: 1px solid #888;\n  border-radius: 5px;\n  font-size: 10px;\n  text-transform: inherit;\n  background: #fff;\n  white-space: nowrap;\n  padding: 5px 10px;\n}\n\n.large-width[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.image[_ngcontent-%COMP%] {\n  border: 1px solid #007bff;\n  border-radius: 50px !important;\n  width: 100%;\n}\n\n.text-count[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 1px;\n  color: #777;\n}\n\n.text-mark[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 1px;\n  color: #0EAFC0;\n}\n\n.heading-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 500;\n  font-size: 16px;\n  margin-right: 15px;\n}\n\n.heading-text[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n\n.block-avatar[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.block-avatar-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.block-else[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n\n.text-else[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.col-custom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: relative;\n}\n\n.box-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.box-bottom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px 5px;\n  width: calc(20% - 10px);\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n  border: 1px solid #888;\n  border-radius: 5px;\n  font-size: 10px;\n  text-transform: inherit;\n  background: #fff;\n  white-space: nowrap;\n  padding: 5px 10px;\n}\n\n.content-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.block-body[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n}\n\n.coin-azo[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n@media (max-width: 468px) {\n  .box-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .box-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .heading-text[_ngcontent-%COMP%] {\n    width: 140px;\n  }\n\n  .box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    height: 24px;\n    width: 24px;\n  }\n\n  .box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  .large-width[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDRSxjQUFBO0FBQ047O0FBRUk7RUFDRSxjQUFBO0FBQU47O0FBR0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUROOztBQUlJO0VBQ0UsZUFBQTtBQUZOOztBQU1FO0VBQ0UsZUFBQTtBQUpKOztBQU1JO0VBQ0UsaUJBQUE7QUFKTjs7QUFRRTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFRRTtFQUNFLHNCQUFBO0FBTko7O0FBVUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FBUEY7O0FBU0U7RUFDRSxjQUFBO0FBUEo7O0FBU0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBUE47O0FBU007RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBUFI7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVRGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFVQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQVBGOztBQVNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFTQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBTkY7O0FBVUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUEY7O0FBV0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBUko7O0FBWUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFWSjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBYUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBWEo7O0FBZUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBWkY7O0FBZUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFaRjs7QUFnQkE7RUFDRSxjQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWJGOztBQWlCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBZEY7O0FBaUJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWRGOztBQWlCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQWRGOztBQWlCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBZEY7O0FBZ0JFO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBQWRKOztBQWtCQTtFQUNFLGtCQUFBO0FBZkY7O0FBa0JBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFmRjs7QUFrQkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsVUFBQTtBQWZGOztBQWtCQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBZkY7O0FBbUJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWhCRjs7QUFtQkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBaEJGOztBQW9CRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFqQko7O0FBcUJFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBbkJKOztBQXVCQTtFQUNFLGtCQUFBO0FBcEJGOztBQXNCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFwQko7O0FBdUJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFwQkY7O0FBc0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBbkJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFsQkY7O0FBb0JBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFqQko7O0FBbUJJO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQWpCUjs7QUFvQkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBakJKOztBQW9CQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBakJKOztBQW9CQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQWpCSjs7QUFvQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBakJKOztBQW9CQTtFQUNJO0lBQ0ksZUFBQTtFQWpCTjs7RUFvQkU7SUFDSSxlQUFBO0VBakJOOztFQW9CRTtJQUNJLFlBQUE7RUFqQk47O0VBb0JFO0lBQ0ksWUFBQTtJQUNBLFdBQUE7RUFqQk47O0VBb0JFO0lBQ0ksZUFBQTtFQWpCTjs7RUFtQkU7SUFDSSxVQUFBO0VBaEJOO0FBQ0YiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYXBwIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjAsIDIyMCwgMjIwLCAwLjgpO1xuICBjb2xvcjogIzIyMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxcHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICYtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgICYtdXBsb2FkIHtcbiAgICAgIGNvbG9yOiAjMDBhN2QwO1xuICAgIH1cblxuICAgICYtc2VhcmNoIHtcbiAgICAgIGNvbG9yOiAjYmYzMjMyO1xuICAgIH1cblxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICB9XG5cbiAgICAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgIH1cbiAgfVxuXG4gICYtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuXG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gIH1cblxuICAmLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gICYtc2VhcmNoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLmJsb2NrLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYigwIDAgMCAvIDE0JSk7XG5cbiAgJi1ib3R0b20ge1xuICAgIG1hcmdpbjogMTBweCAwO1xuXG4gICAgLmJ0bi1hZGQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAmLXRleHQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5ibG9jay1oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5uby1hY3RpdmV7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG59XG4uYWN0aXZle1xuICBiYWNrZ3JvdW5kOiAjMjM2MWFlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ibG9jay1oZWFkZXItbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ibG9jay1hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmltYWdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwN2JmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcblxufVxuXG4udGV4dC1jb3VudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4udGV4dC1tYXJrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgY29sb3I6ICMwRUFGQzA7XG59XG5cbi5oZWFkaW5nIHtcbiAgJi10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cbiAgfVxuXG4gICYtdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICB9XG59XG5cbi5ibG9jay1hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cbiAgJi1pbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuLmNvbC1jdXN0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idG4tYWxsIHtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwRUFGQzA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgY29sb3I6ICMwMGMwZWY7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcblxufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OTkpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5zZWFyY2gtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uYm94LWN1c3RvbSB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxMnB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgdG9wOiAtOHB4O1xuICByaWdodDogOHB4O1xufVxuXG4uYm94LWJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBidXR0b24ge1xuICAgIG1hcmdpbjogMTBweCA1cHg7XG4gICAgd2lkdGg6IGNhbGMoMjAlIC0gMTBweCk7XG4gIH1cbn1cblxuLnJvdy1jdXN0b20ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ibG9jay1zZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDVweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAlO1xufVxuXG4uYnRuLWN1c3RvbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi5sYXJnZS13aWR0aCB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5pbWFnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLnRleHQtY291bnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICBjb2xvcjogIzc3Nztcbn1cblxuLnRleHQtbWFyayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIGNvbG9yOiAjMEVBRkMwO1xufVxuXG4uaGVhZGluZyB7XG4gICYtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuXG4gIH1cblxuICAmLXRleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgfVxufVxuXG4uYmxvY2stYXZhdGFyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuXG4gICYtaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG59XG4uYmxvY2stZWxzZXtcbiAgaGVpZ2h0OiA5MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnRleHQtZWxzZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNvbC1jdXN0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm94LWJvdHRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDEwcHggNXB4O1xuICAgICAgICB3aWR0aDogY2FsYygyMCUgLSAxMHB4KTtcbiAgICB9XG59XG4uYnRuLWN1c3RvbSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLmNvbnRlbnQtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5ibG9jay1ib2R5IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29pbi1hem8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTVweDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjhweCkge1xuICAgIC5ib3gtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG5cbiAgICAuYm94LXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLmhlYWRpbmctdGV4dCB7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICB9XG5cbiAgICAuYm94LWljb24gLm1hdC1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICB9XG5cbiAgICAuYm94LWljb24gLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgIH1cbiAgICAubGFyZ2Utd2lkdGh7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 37186:
/*!*********************************************************************!*\
  !*** ./src/app/student_frontend/masterpage/controller.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentFrontMasterPageComponent": () => (/* binding */ StudentFrontMasterPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



class StudentFrontMasterPageComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
}
StudentFrontMasterPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵStudentFrontMasterPageComponent_BaseFactory; return function StudentFrontMasterPageComponent_Factory(t) { return (ɵStudentFrontMasterPageComponent_BaseFactory || (ɵStudentFrontMasterPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](StudentFrontMasterPageComponent)))(t || StudentFrontMasterPageComponent); }; }();
StudentFrontMasterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StudentFrontMasterPageComponent, selectors: [["homework-front-master-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["id", "student-frontend-layout"]], template: function StudentFrontMasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7081:
/*!***************************************************!*\
  !*** ./src/app/student_frontend/module.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentFrontModule": () => (/* binding */ StudentFrontModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 72727);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-pdf-viewer */ 42214);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-image-cropper */ 92133);
/* harmony import */ var src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/azota-ui/azota-ui.module */ 47470);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ 75658);
/* harmony import */ var _add_teacher_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-teacher/controller.component */ 38515);
/* harmony import */ var _dashboard_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/controller.component */ 6474);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masterpage/controller.component */ 37186);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routing.module */ 15854);
/* harmony import */ var _utils_dashboard_exam_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/dashboard-exam/controller.component */ 40978);
/* harmony import */ var _utils_dashboard_exercise_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/dashboard-exercise/controller.component */ 6949);
/* harmony import */ var _utils_dashboard_qa_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/dashboard-qa/controller.component */ 48303);
/* harmony import */ var _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/footer/controller.component */ 99716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ 26052);
/* harmony import */ var _azota_ui_azt_create_avatar_controller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../azota-ui/azt-create-avatar/controller.component */ 64123);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _azota_ui_azt_block_homework_controller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../azota-ui/azt-block-homework/controller.component */ 83727);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/pipes/common.pipe */ 1033);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _azota_ui_select_classes_controller_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../azota-ui/select_classes/controller.component */ 69692);
/* harmony import */ var _azota_ui_select_student_controller_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../azota-ui/select_student/controller.component */ 81903);



































class StudentFrontModule {
}
StudentFrontModule.ɵfac = function StudentFrontModule_Factory(t) { return new (t || StudentFrontModule)(); };
StudentFrontModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: StudentFrontModule });
StudentFrontModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_1__.MyMaterialModule,
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_21__.EditorModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
            src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.MyPipeModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_24__.PdfViewerModule,
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_25__.ImageCropperModule,
            _routing_module__WEBPACK_IMPORTED_MODULE_6__.StudentFrontRoutingModule,
            src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](StudentFrontModule, { declarations: [_utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_10__.StudentFrontendFooterComponent,
        _dashboard_controller_component__WEBPACK_IMPORTED_MODULE_4__.StudentFrontDashboardComponent,
        _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_5__.StudentFrontMasterPageComponent,
        _utils_dashboard_exam_controller_component__WEBPACK_IMPORTED_MODULE_7__.StudentDashboardExamComponent,
        _utils_dashboard_exercise_controller_component__WEBPACK_IMPORTED_MODULE_8__.StudentDashboardExerciseComponent,
        _add_teacher_controller_component__WEBPACK_IMPORTED_MODULE_3__.AddTeacherComponent,
        _utils_dashboard_qa_controller_component__WEBPACK_IMPORTED_MODULE_9__.DashboardQAComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_1__.MyMaterialModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_21__.EditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.MyPipeModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_24__.PdfViewerModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_25__.ImageCropperModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_6__.StudentFrontRoutingModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetComponentScope"](_utils_dashboard_exercise_controller_component__WEBPACK_IMPORTED_MODULE_8__.StudentDashboardExerciseComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_11__.AztLoadingEffectComponent, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatAccordion, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionPanelHeader, _azota_ui_azt_create_avatar_controller_component__WEBPACK_IMPORTED_MODULE_12__.AztCreaterAvatar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _azota_ui_azt_block_homework_controller_component__WEBPACK_IMPORTED_MODULE_13__.AztBlockHomeworkComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatButton], [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__.MyLocalizePipe]);
_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetComponentScope"](_add_teacher_controller_component__WEBPACK_IMPORTED_MODULE_3__.AddTeacherComponent, [_azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_15__.HeaderFrontendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_31__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatButton, _azota_ui_select_classes_controller_component__WEBPACK_IMPORTED_MODULE_16__.SelectClassesFrontComponent, _azota_ui_select_student_controller_component__WEBPACK_IMPORTED_MODULE_17__.SelectStudentFrontComponent, _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_10__.StudentFrontendFooterComponent], [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_14__.MytranslatePipe]);


/***/ }),

/***/ 15854:
/*!****************************************************!*\
  !*** ./src/app/student_frontend/routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentFrontRoutingModule": () => (/* binding */ StudentFrontRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);
/* harmony import */ var src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auth_guards/auth.front.guard */ 45668);
/* harmony import */ var _add_teacher_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-teacher/controller.component */ 38515);
/* harmony import */ var _dashboard_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/controller.component */ 6474);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./masterpage/controller.component */ 37186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








const studentFrontendRoutes = [
    {
        path: '',
        component: _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_3__.StudentFrontMasterPageComponent,
        canActivate: [src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__.AuthFrontGuard],
        children: [
            {
                path: '',
                canActivateChild: [src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__.AuthFrontGuard],
                children: [
                    { path: '', component: _dashboard_controller_component__WEBPACK_IMPORTED_MODULE_2__.StudentFrontDashboardComponent },
                    { path: 'dashboard', component: _dashboard_controller_component__WEBPACK_IMPORTED_MODULE_2__.StudentFrontDashboardComponent },
                    { path: 'dashboard/:id', component: _dashboard_controller_component__WEBPACK_IMPORTED_MODULE_2__.StudentFrontDashboardComponent },
                    { path: 'dashboard/:id/:classroomId', component: _dashboard_controller_component__WEBPACK_IMPORTED_MODULE_2__.StudentFrontDashboardComponent },
                    { path: 'dashboard/:id/:classroomId/:type', component: _dashboard_controller_component__WEBPACK_IMPORTED_MODULE_2__.StudentFrontDashboardComponent },
                    { path: 'add-teacher', component: _add_teacher_controller_component__WEBPACK_IMPORTED_MODULE_1__.AddTeacherComponent },
                ]
            }
        ]
    }
];
class StudentFrontRoutingModule {
}
StudentFrontRoutingModule.ɵfac = function StudentFrontRoutingModule_Factory(t) { return new (t || StudentFrontRoutingModule)(); };
StudentFrontRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: StudentFrontRoutingModule });
StudentFrontRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(studentFrontendRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](StudentFrontRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterModule] }); })();


/***/ }),

/***/ 40978:
/*!*******************************************************************************!*\
  !*** ./src/app/student_frontend/utils/dashboard-exam/controller.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentDashboardExamComponent": () => (/* binding */ StudentDashboardExamComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ 26052);
/* harmony import */ var _azota_ui_azt_create_avatar_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../azota-ui/azt-create-avatar/controller.component */ 64123);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _azota_ui_azt_block_exam_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../azota-ui/azt-block-exam/controller.component */ 49674);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);















function StudentDashboardExamComponent_azt_loading_effect_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "azt-loading-effect");
} }
function StudentDashboardExamComponent_ng_template_1_ng_container_5_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { backto: a0 }; };
function StudentDashboardExamComponent_ng_template_1_ng_container_5_ng_template_13_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31)(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "azt-block-exam", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemExam_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, "/de-thi/" + itemExam_r18.hashId)))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c1, ctx_r17.backToLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", itemExam_r18);
} }
function StudentDashboardExamComponent_ng_template_1_ng_container_5_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, StudentDashboardExamComponent_ng_template_1_ng_container_5_ng_template_13_div_0_div_1_Template, 4, 9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", item_r7.objs);
} }
function StudentDashboardExamComponent_ng_template_1_ng_container_5_ng_template_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StudentDashboardExamComponent_ng_template_1_ng_container_5_ng_template_13_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r21.loadMoreExam(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "lang_buttom_see_more"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !item_r7.checkLengthPage);
} }
function StudentDashboardExamComponent_ng_template_1_ng_container_5_ng_template_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} }
function StudentDashboardExamComponent_ng_template_1_ng_container_5_ng_template_13_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35)(1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "lang_student_frontend_dashboard_exam_not_exam"));
} }
function StudentDashboardExamComponent_ng_template_1_ng_container_5_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, StudentDashboardExamComponent_ng_template_1_ng_container_5_ng_template_13_div_0_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, StudentDashboardExamComponent_ng_template_1_ng_container_5_ng_template_13_div_1_Template, 5, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, StudentDashboardExamComponent_ng_template_1_ng_container_5_ng_template_13_div_2_Template, 4, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, StudentDashboardExamComponent_ng_template_1_ng_container_5_ng_template_13_ng_template_3_Template, 4, 3, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.objs && item_r7.objs.length > 0)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !item_r7.isLoadingPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.isLoadingPage);
} }
function StudentDashboardExamComponent_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-expansion-panel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("opened", function StudentDashboardExamComponent_ng_template_1_ng_container_5_Template_mat_expansion_panel_opened_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const i_r8 = restoredCtx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r26.getExamObjsById(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-expansion-panel-header")(3, "div", 9)(4, "div", 10)(5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "azt-create-avatar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 11)(8, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, StudentDashboardExamComponent_ng_template_1_ng_container_5_div_12_Template, 4, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, StudentDashboardExamComponent_ng_template_1_ng_container_5_ng_template_13_Template, 5, 4, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", i_r8 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nameCreateAvatar", item_r7.teacherObj == null ? null : item_r7.teacherObj.fullName)("size", 30)("linkAvatar", item_r7.teacherObj == null ? null : item_r7.teacherObj.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", (item_r7.teacherObj == null ? null : item_r7.teacherObj.gender) == 1 ? "Th\u1EA7y " : "C\u00F4 ", " ", item_r7.teacherObj == null ? null : item_r7.teacherObj.fullName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", item_r7.classroomObj == null ? null : item_r7.classroomObj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r7.classroomObj == null ? null : item_r7.classroomObj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.isLoading)("ngIfElse", _r10);
} }
function StudentDashboardExamComponent_ng_template_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 23)(2, "div", 24)(3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function StudentDashboardExamComponent_ng_template_1_ng_template_15_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31)(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "azt-block-exam", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemExam_r34 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, "/de-thi/" + itemExam_r34.hashId)))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c1, ctx_r33.backToLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", itemExam_r34);
} }
function StudentDashboardExamComponent_ng_template_1_ng_template_15_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, StudentDashboardExamComponent_ng_template_1_ng_template_15_div_0_div_1_Template, 4, 9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r28.dataTookObjs.datas);
} }
function StudentDashboardExamComponent_ng_template_1_ng_template_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StudentDashboardExamComponent_ng_template_1_ng_template_15_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r36.loadMoreTookObjs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "lang_buttom_see_more"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r29.dataTookObjs.checkLengthPage);
} }
function StudentDashboardExamComponent_ng_template_1_ng_template_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} }
function StudentDashboardExamComponent_ng_template_1_ng_template_15_ng_template_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "lang_student_frontend_dashboard_exam_not_exam"));
} }
function StudentDashboardExamComponent_ng_template_1_ng_template_15_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "lang_homework_class_list_see_more_old"));
} }
function StudentDashboardExamComponent_ng_template_1_ng_template_15_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, StudentDashboardExamComponent_ng_template_1_ng_template_15_ng_template_3_span_1_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, StudentDashboardExamComponent_ng_template_1_ng_template_15_ng_template_3_span_2_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r32.dataTookObjs.checkLengthPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r32.dataTookObjs.checkLengthPage);
} }
function StudentDashboardExamComponent_ng_template_1_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, StudentDashboardExamComponent_ng_template_1_ng_template_15_div_0_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, StudentDashboardExamComponent_ng_template_1_ng_template_15_div_1_Template, 5, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, StudentDashboardExamComponent_ng_template_1_ng_template_15_div_2_Template, 4, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, StudentDashboardExamComponent_ng_template_1_ng_template_15_ng_template_3_Template, 3, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.dataTookObjs.datas == null ? null : ctx_r6.dataTookObjs.datas.length)("ngIfElse", _r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r6.dataTookObjs.isLoadingPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.dataTookObjs.isLoadingPage);
} }
const _c2 = function () { return { backto: "/student/dashboard/1" }; };
function StudentDashboardExamComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "mat-accordion", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, StudentDashboardExamComponent_ng_template_1_ng_container_5_Template, 15, 10, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-expansion-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("opened", function StudentDashboardExamComponent_ng_template_1_Template_mat_expansion_panel_opened_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r40.getExamDataTook("", []); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-expansion-panel-header")(8, "div", 9)(9, "div", 10)(10, "div", 11)(11, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, StudentDashboardExamComponent_ng_template_1_ng_container_14_Template, 5, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, StudentDashboardExamComponent_ng_template_1_ng_template_15_Template, 5, 4, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 14)(18, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.dataExamObjs);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 7, "lang_student_frontend_dashboard_exam_did_exam"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.dataTookObjs.firstLoading)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 9, "/student/add-teacher")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 11, "lang_student_frontend_dashboard_exam_search_exam"));
} }
class StudentDashboardExamComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(frontPageStudentService, commonService) {
        super(commonService);
        this.frontPageStudentService = frontPageStudentService;
        this.commonService = commonService;
        this.dataTookObjs = {};
        this.backToLink = '/student/dashboard/0';
    }
    getExamObjsById(index) {
        if (this.dataExamObjs) {
            if (!this.dataExamObjs[index].hasOwnProperty('isLoadFirstData') || this.dataExamObjs[index].isLoadFirstData === false) {
                this.dataExamObjs[index].isLoading = true;
                this.dataExamObjs[index].page = '';
                this.dataExamObjs[index].isLoadingPage = false;
                this.getExamObjsByClassId(index, this.dataExamObjs[index].page);
            }
        }
    }
    getExamObjsByClassId(index, page) {
        var _a, _b;
        this.frontPageStudentService.apiFrontPageStudentGetExamObjsByClassIdGet((_b = (_a = this.dataExamObjs) === null || _a === void 0 ? void 0 : _a[index].classroomObj) === null || _b === void 0 ? void 0 : _b.id, page).subscribe((response) => {
            var _a, _b, _c;
            if ((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) === null || _b === void 0 ? void 0 : _b.length) {
                if (this.dataExamObjs) {
                    if (response.data.nextPage) {
                        this.dataExamObjs[index].checkLengthPage = true;
                        this.dataExamObjs[index].page = response.data.nextPage;
                    }
                    else {
                        this.dataExamObjs[index].checkLengthPage = false;
                    }
                    this.dataExamObjs[index].objs = (_c = this.dataExamObjs[index].objs) === null || _c === void 0 ? void 0 : _c.concat(response.data.objs);
                }
            }
            else {
                if (this.dataExamObjs) {
                    this.dataExamObjs[index].checkLengthPage = false;
                }
            }
            if (this.dataExamObjs) {
                this.dataExamObjs[index].isLoading = false;
                this.dataExamObjs[index].isLoadingPage = false;
                this.dataExamObjs[index].isLoadFirstData = true;
            }
        });
    }
    getExamDataTook(page, objs) {
        if (this.dataTookObjs) {
            if (page == '') {
                this.dataTookObjs.firstLoading = true;
            }
            this.dataTookObjs.isLoadingPage = true;
        }
        this.frontPageStudentService.apiFrontPageStudentGetExamObjsTookGet(page).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            if (response.success == 1) {
                if (page == '') {
                    this.dataTookObjs.datas = (_a = this.dataTookObjs.datas) === null || _a === void 0 ? void 0 : _a.concat((_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.objs) !== null && _c !== void 0 ? _c : []);
                    this.dataTookObjs.firstLoading = false;
                    this.dataTookObjs.page = '';
                    this.dataTookObjs.isLoadingPage = false;
                    if ((_d = response.data) === null || _d === void 0 ? void 0 : _d.nextPage) {
                        this.dataTookObjs.checkLengthPage = true;
                        this.dataTookObjs.page = response.data.nextPage;
                    }
                    else {
                        this.dataTookObjs.checkLengthPage = false;
                    }
                }
                else {
                    if ((_e = response.data) === null || _e === void 0 ? void 0 : _e.nextPage) {
                        this.dataTookObjs.checkLengthPage = true;
                        objs = objs === null || objs === void 0 ? void 0 : objs.concat((_f = response.data.objs) !== null && _f !== void 0 ? _f : []);
                        // callback
                        const itemPerPage = 5;
                        let arrLength = ((_g = response.data.objs) === null || _g === void 0 ? void 0 : _g.length) ? (_h = response.data.objs) === null || _h === void 0 ? void 0 : _h.length : 0;
                        if (arrLength < itemPerPage) {
                            let currentPage = (_j = response.data) === null || _j === void 0 ? void 0 : _j.nextPage;
                            setTimeout(() => {
                                this.getExamDataTook(currentPage, objs);
                            }, 100);
                        }
                        else {
                            this.dataTookObjs.datas = (_k = this.dataTookObjs.datas) === null || _k === void 0 ? void 0 : _k.concat(objs !== null && objs !== void 0 ? objs : []);
                            this.dataTookObjs.page = (_l = response.data) === null || _l === void 0 ? void 0 : _l.nextPage;
                            this.dataTookObjs.firstLoading = false;
                            this.dataTookObjs.isLoadingPage = false;
                        }
                    }
                    else {
                        this.dataTookObjs.datas = (_m = this.dataTookObjs.datas) === null || _m === void 0 ? void 0 : _m.concat((_p = (_o = response.data) === null || _o === void 0 ? void 0 : _o.objs) !== null && _p !== void 0 ? _p : []);
                        this.dataTookObjs.checkLengthPage = false;
                        this.dataTookObjs.firstLoading = false;
                        this.dataTookObjs.isLoadingPage = false;
                    }
                }
            }
            else {
                this.commonService.snackError('Không tải được dữ liệu', '');
                this.dataTookObjs.firstLoading = false;
                this.dataTookObjs.isLoadingPage = false;
            }
        });
    }
    getData() {
        this.initStatusObj();
        this.frontPageStudentService.apiFrontPageStudentGetExamObjsInDashboardGet().subscribe((response) => {
            var _a, _b;
            if (response.success === 1) {
                this.dataExamObjs = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs;
                this.dataTookObjs.datas = [];
                this.dataTookObjs.page = '';
                this.successStatusObj();
                this.dataTookObjs.isLoadingPage = true;
                // if (this.dataExamObjs?.length) {
                // this.getExamObjsById(0);
                // }
            }
            else {
                this.errorStatusObj((_b = response.message) !== null && _b !== void 0 ? _b : '', true);
            }
        });
        // google analytics event
        this.commonService.gaEvent('dashboard_student_exam');
    }
    loadMoreTookObjs() {
        this.getExamDataTook(this.dataTookObjs.page, []);
    }
    loadMoreExam(index) {
        if (this.dataExamObjs) {
            this.dataExamObjs[index].isLoadingPage = true;
            this.getExamObjsByClassId(index, this.dataExamObjs[index].page);
        }
    }
    backToDashboard() {
        this.commonService.myNavigation('/student/dashboard/0');
    }
    ngOnInit() {
        this.getData();
        super.ngOnInit();
    }
}
StudentDashboardExamComponent.ɵfac = function StudentDashboardExamComponent_Factory(t) { return new (t || StudentDashboardExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__.FrontPageStudentService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService)); };
StudentDashboardExamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: StudentDashboardExamComponent, selectors: [["app-dashboard-exam"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["doneLoading", ""], ["id", "studentExamList", 1, "component"], [1, "row", "mt-4"], [1, "col-md-12"], [1, "block-list"], ["multi", "", 1, "example-headers-align"], [4, "ngFor", "ngForOf"], [1, "panel-custom", 3, "opened"], [1, "block-header"], [1, "block-header-info"], [1, "heading"], [1, "heading-title"], ["doneFirstLoading", ""], [1, "block-list-bottom"], [1, "btn-add", 3, "routerLink", "queryParams"], [1, "btn-add-text"], [1, "panel-custom", 3, "expanded", "opened"], [1, "block-avatar"], [1, "image", 2, "cursor", "pointer", 3, "nameCreateAvatar", "size", "linkAvatar"], [1, "heading-text", 3, "matTooltip"], ["class", "d-flex justify-content-center mt-3", 4, "ngIf", "ngIfElse"], ["doneLoadingPage", ""], [1, "d-flex", "justify-content-center", "mt-3"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "sr-only"], ["class", "mta-15", 4, "ngIf", "ngIfElse"], ["class", "d-flex justify-content-center mt-3", 4, "ngIf"], ["elseBlockExam", ""], [1, "mta-15"], ["class", "mt-3", 4, "ngFor", "ngForOf"], [1, "mt-3"], [1, "link-text", 3, "routerLink", "queryParams"], [3, "data"], ["mat-button", "", 1, "btn-all-add", 3, "matTooltip", "disabled", "click"], [1, "block-else"], [1, "text-else"], ["class", "text-else", 4, "ngIf"]], template: function StudentDashboardExamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, StudentDashboardExamComponent_azt_loading_effect_0_Template, 1, 0, "azt-loading-effect", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, StudentDashboardExamComponent_ng_template_1_Template, 25, 16, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__.AztLoadingEffectComponent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatAccordion, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelHeader, _azota_ui_azt_create_avatar_controller_component__WEBPACK_IMPORTED_MODULE_4__.AztCreaterAvatar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _azota_ui_azt_block_exam_controller_component__WEBPACK_IMPORTED_MODULE_5__.AztBlockExamQuestionComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.MyLocalizePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.MytranslatePipe], styles: ["a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.app[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n.box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid rgba(220, 220, 220, 0.8);\n  color: #222;\n  text-align: center;\n  transition: all 0.5s;\n  display: flex;\n  padding: 1px;\n  padding-top: 6px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px !important;\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.07), -10px -10px 20px rgba(255, 255, 255, 0.8);\n}\n\n.box-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 10px;\n}\n\n.box-icon-upload[_ngcontent-%COMP%] {\n  color: #00a7d0;\n}\n\n.box-icon-search[_ngcontent-%COMP%] {\n  color: #bf3232;\n}\n\n.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n}\n\n.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n\n.box-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n\n.box-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.box-active[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.07), -10px -10px 20px rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n\n.bg-block-list[_ngcontent-%COMP%] {\n  background: #ececec;\n  padding: 10px 20px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n}\n\n.block-list-bottom[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  border: none;\n  display: flex;\n  align-items: center;\n  color: #707070;\n  background: transparent;\n  transition: all 0.3s;\n}\n\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:hover {\n  color: #222222;\n}\n\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%] {\n  text-transform: initial;\n  margin-left: 2px;\n}\n\n.mta-15[_ngcontent-%COMP%] {\n  margin-top: -15px;\n}\n\n.panel-custom[_ngcontent-%COMP%] {\n  margin: 1rem 0 !important;\n  background: #ececec;\n}\n\n.text-mark[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #0eafc0;\n}\n\n.block[_ngcontent-%COMP%] {\n  margin: 40px 0;\n}\n\n.block[_ngcontent-%COMP%]:first-child {\n  margin-top: 25px;\n}\n\n.block-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n\n.block-body[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  background: #fff;\n  border-radius: 3px;\n  margin-top: 20px;\n  width: 100%;\n  min-height: 95px;\n}\n\n.block-body-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  color: #fff;\n  width: 90px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.block-body-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  max-width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 2px;\n  font-size: 14px;\n  color: #000;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-desc[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #000;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-deadline[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  font-size: 14px;\n  color: #000;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-deadline[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.heading-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 500;\n  font-size: 16px;\n  margin-right: 15px;\n}\n\n.heading-text[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 14px;\n  overflow: hidden;\n  max-width: 90%;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n\n.block-avatar[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  width: 30px;\n  height: 30px;\n}\n\n.block-avatar-share[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n.image[_ngcontent-%COMP%] {\n  border-radius: 50px !important;\n  width: 100%;\n}\n\n.block[_ngcontent-%COMP%]:first-child {\n  margin-top: 20px;\n}\n\n.block-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.class-visible[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.no-active[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n}\n\n.block-else[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 5px;\n}\n\n.text-else[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.btn-all[_ngcontent-%COMP%] {\n  text-transform: inherit;\n  font-size: 14px;\n  color: #0EAFC0;\n  font-weight: 500;\n  position: absolute;\n  top: -3px;\n  right: 0px;\n}\n\n.block-header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.block-avatar-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .block-avatar-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .heading-text[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n\n  .box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    height: 24px;\n    width: 24px;\n  }\n\n  .box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  .block-body-status[_ngcontent-%COMP%] {\n    width: 90px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UscUJBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBRUY7O0FBREU7RUFDSSx5RkFBQTtBQUdOOztBQURFO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBR047O0FBRk07RUFDSSxjQUFBO0FBSVY7O0FBRk07RUFDSSxjQUFBO0FBSVY7O0FBRk07RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUlWOztBQUZNO0VBQ0ksZUFBQTtBQUlWOztBQURFO0VBQ0ksZUFBQTtBQUdOOztBQUZNO0VBQ0ksZ0JBQUE7QUFJVjs7QUFERTtFQUNJLHlCQUFBO0VBQ0EseUZBQUE7RUFDQSxnQkFBQTtBQUdOOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlIQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBRTtFQUNJLGNBQUE7QUFHTjs7QUFGTTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQUlWOztBQUhVO0VBQ0UsY0FBQTtBQUtaOztBQUhVO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtBQUtkOztBQUFBO0VBQ0UsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtBQU1GOztBQUxFO0VBQ0ksZ0JBQUE7QUFPTjs7QUFMRTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFPTjs7QUFMRTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBT047O0FBTk07RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBR0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTVY7O0FBSk07RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBTVY7O0FBTFU7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFPZDs7QUFOYztFQUNJLGdCQUFBO0FBUWxCOztBQUxVO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBT2Q7O0FBTFU7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBT2Q7O0FBTmM7RUFDSSxnQkFBQTtBQVFsQjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUtGOztBQUhFO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUtOOztBQUZFO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFJTjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBSEE7RUFDRSw4QkFBQTtFQUNBLFdBQUE7QUFNRjs7QUFKQTtFQUNFLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQVNGOztBQVBBO0VBQ0UsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFXRjs7QUFUQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVlGOztBQVZBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQWFGOztBQVhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBY0Y7O0FBWkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFlRjs7QUFiQTtFQUNFO0lBQ0ksc0JBQUE7SUFDQSx1QkFBQTtFQWdCSjs7RUFkQTtJQUNJLHNCQUFBO0lBQ0EsdUJBQUE7RUFpQko7O0VBZkE7SUFDSSxnQkFBQTtFQWtCSjs7RUFoQkE7SUFDSSxZQUFBO0lBQ0EsV0FBQTtFQW1CSjs7RUFqQkE7SUFDSSxlQUFBO0VBb0JKOztFQWxCQTtJQUNJLFdBQUE7RUFxQko7QUFDRiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmFwcHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmJveHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjAsIDIyMCwgMjIwLCAwLjgpO1xuICBjb2xvcjogIzIyMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxcHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgJjpob3ZlcntcbiAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHJnYigwIDAgMCAvIDclKSwgLTEwcHggLTEwcHggMjBweCByZ2IoMjU1IDI1NSAyNTUgLyA4MCUpO1xuICB9XG4gICYtaWNvbntcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICYtdXBsb2Fke1xuICAgICAgICAgIGNvbG9yOiAjMDBhN2QwO1xuICAgICAgfVxuICAgICAgJi1zZWFyY2h7XG4gICAgICAgICAgY29sb3I6ICNiZjMyMzI7XG4gICAgICB9XG4gICAgICAubWF0LWljb257XG4gICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgfVxuICAgICAgLm1hdGVyaWFsLWljb25ze1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgIH1cbiAgfVxuICAmLXRleHR7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBzcGFue1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICB9XG4gIH1cbiAgJi1hY3RpdmV7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggcmdiKDAgMCAwIC8gNyUpLCAtMTBweCAtMTBweCAyMHB4IHJnYigyNTUgMjU1IDI1NSAvIDgwJSk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4uYmctYmxvY2stbGlzdCB7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggMnB4IDJweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCA1cHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5ibG9jay1saXN0e1xuICAmLWJvdHRvbXtcbiAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgLmJ0bi1hZGR7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi10ZXh0e1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cbi5tdGEtMTV7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuLnBhbmVsLWN1c3RvbXtcbiAgbWFyZ2luOiAxcmVtIDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcbn1cbi50ZXh0LW1hcmt7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiAjMGVhZmMwO1xufVxuLmJsb2Nre1xuICBtYXJnaW46IDQwcHggMDtcbiAgJjpmaXJzdC1jaGlsZHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbiAgJi1oZWFkZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAmLWJvZHl7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDk1cHg7XG4gICAgICAmLXN0YXR1c3tcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICMyMzYxYWU7XG4gICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUwNyk7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAmLWNvbnRlbnR7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgLmNvbnRlbnQtdGl0bGV7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQtZGVzY3tcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50LWRlYWRsaW5le1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG4uaGVhZGluZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgJi10aXRsZXtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuXG4gIH1cbiAgJi10ZXh0e1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICB9XG59XG4uYmxvY2stYXZhdGFye1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uYmxvY2stYXZhdGFyLXNoYXJle1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLmltYWdle1xuICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJsb2NrOmZpcnN0LWNoaWxke1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJsb2NrLWhlYWRlci1sZWZ0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNsYXNzLXZpc2libGV7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbn1cbi5uby1hY3RpdmV7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG59XG4uYmxvY2stZWxzZXtcbiAgaGVpZ2h0OiA5MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnRleHQtZWxzZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmJ0bi1hbGx7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMEVBRkMwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IDBweDtcbn1cbi5ibG9jay1oZWFkZXItaW5mb3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ibG9jay1hdmF0YXItaW5mb3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG4gIC5oZWFkaW5ne1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5ibG9jay1hdmF0YXItaW5mb3tcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAuaGVhZGluZy10ZXh0e1xuICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgfVxuICAuYm94LWljb24gLm1hdC1pY29ue1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgd2lkdGg6IDI0cHg7XG4gIH1cbiAgLmJveC1pY29uIC5tYXRlcmlhbC1pY29uc3tcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuICAuYmxvY2stYm9keS1zdGF0dXN7XG4gICAgICB3aWR0aDogOTBweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 6949:
/*!***********************************************************************************!*\
  !*** ./src/app/student_frontend/utils/dashboard-exercise/controller.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentDashboardExerciseComponent": () => (/* binding */ StudentDashboardExerciseComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);





function StudentDashboardExerciseComponent_azt_loading_effect_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "azt-loading-effect");
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { backto: "/student/dashboard/1" }; };
function StudentDashboardExerciseComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 9)(7, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, "lang_student_frontend_dashboard_exercise_not_exercise"), "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 6, "/student/add-teacher")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 8, "lang_student_frontend_dashboard_exercise_search_exercise"));
} }
function StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
const _c2 = function (a0) { return { "mt-0": a0 }; };
const _c3 = function () { return { backto: "/student/dashboard/1/" }; };
function StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "azt-block-homework", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemHomework_r18 = ctx.$implicit;
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c2, i_r8 == 0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, "/bai-tap/" + itemHomework_r18.hashId)))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", itemHomework_r18);
} }
function StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_div_0_div_1_Template, 4, 11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r7.homeworkObjs);
} }
function StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r22.loadMoreHomework(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "lang_student_frontend_dashboard_exercise_see_more"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !item_r7.checkLengthPage);
} }
function StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
function StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41)(1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "lang_student_frontend_dashboard_exercise_not_exercise"));
} }
function StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_ng_template_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 43);
} }
function StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_ng_template_3_div_0_Template, 4, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_ng_template_3_div_1_Template, 1, 0, "div", 40);
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r7.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.page);
} }
function StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_div_0_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_div_1_Template, 5, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_div_2_Template, 4, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_ng_template_3_Template, 2, 2, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.homeworkObjs == null ? null : item_r7.homeworkObjs.length)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r7.isLoadingPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.isLoadingPage);
} }
function StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-expansion-panel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("opened", function StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_Template_mat_expansion_panel_opened_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const item_r7 = restoredCtx.$implicit; const i_r8 = restoredCtx.index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r30.getHomeworkObjsById(item_r7.classroomObj == null ? null : item_r7.classroomObj.id, i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-expansion-panel-header")(3, "div", 18)(4, "div", 19)(5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "azt-create-avatar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 22)(8, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_div_12_Template, 4, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_ng_template_13_Template, 5, 4, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("expanded", i_r8 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nameCreateAvatar", item_r7.teacherObj == null ? null : item_r7.teacherObj.fullName)("size", 30)("linkAvatar", item_r7.teacherObj == null ? null : item_r7.teacherObj.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", (item_r7.teacherObj == null ? null : item_r7.teacherObj.gender) == 1 ? "Th\u1EA7y " : "C\u00F4 ", "", item_r7.teacherObj == null ? null : item_r7.teacherObj.fullName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", item_r7.classroomObj == null ? null : item_r7.classroomObj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.classroomObj == null ? null : item_r7.classroomObj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.isLoading)("ngIfElse", _r10);
} }
function StudentDashboardExerciseComponent_ng_template_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 6)(3, "mat-accordion", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, StudentDashboardExerciseComponent_ng_template_1_ng_template_2_ng_container_4_Template, 15, 10, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16)(6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.dataObjs);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 4, "/student/add-teacher")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 6, "lang_student_frontend_dashboard_exercise_search_exercise"));
} }
function StudentDashboardExerciseComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StudentDashboardExerciseComponent_ng_template_1_div_1_Template, 14, 13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StudentDashboardExerciseComponent_ng_template_1_ng_template_2_Template, 13, 11, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r2.dataObjs == null ? null : ctx_r2.dataObjs.length) || ctx_r2.dataObjs == null)("ngIfElse", _r4);
} }
class StudentDashboardExerciseComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(commonService, frontPageStudentService) {
        super(commonService);
        this.commonService = commonService;
        this.frontPageStudentService = frontPageStudentService;
        this.backLink = '';
    }
    getHomeworkObjsById(id, index) {
        if (this.dataObjs) {
            if (this.dataObjs[index].statusGetHomework === false) {
                // Chưa load lần nào :
                this.dataObjs[index].statusGetHomework = true;
                this.dataObjs[index].checkLengthPage = false;
                this.dataObjs[index].isLoading = true;
                this.dataObjs[index].page = '';
                this.dataObjs[index].isLoadingPage = false;
                this.getHomeWorkObjsByClassId(index, id);
            }
        }
    }
    loadMoreHomework(index) {
        var _a, _b;
        this.getHomeWorkObjsByClassId(index, (_b = (_a = this.dataObjs) === null || _a === void 0 ? void 0 : _a[index].classroomObj) === null || _b === void 0 ? void 0 : _b.id);
    }
    getHomeWorkObjsByClassId(index, id) {
        var _a, _b, _c;
        if (((_a = this.dataObjs) === null || _a === void 0 ? void 0 : _a[index].page) === '') {
            this.dataObjs[index].isLoading = true;
        }
        if ((_b = this.dataObjs) === null || _b === void 0 ? void 0 : _b[index]) {
            this.dataObjs[index].isLoadingPage = true;
        }
        this.frontPageStudentService.apiFrontPageStudentGetHomeworkObjsInDashboardByClassIdGet(id, (_c = this.dataObjs) === null || _c === void 0 ? void 0 : _c[index].page).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (response.success === 1) {
                if (this.dataObjs) {
                    if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.nextPage) {
                        if ((_b = this.dataObjs) === null || _b === void 0 ? void 0 : _b[index]) {
                            this.dataObjs[index].checkLengthPage = true;
                            this.dataObjs[index].page = response.data.nextPage;
                        }
                    }
                    else {
                        this.dataObjs[index].checkLengthPage = false;
                    }
                    if (((_c = response.data) === null || _c === void 0 ? void 0 : _c.objs) && response.data.objs[0]) {
                        if (typeof this.dataObjs[index].homeworkObjs !== undefined && ((_d = response.data) === null || _d === void 0 ? void 0 : _d.objs[0].homeworkObjs)) {
                            this.dataObjs[index].homeworkObjs = (_e = this.dataObjs[index].homeworkObjs) === null || _e === void 0 ? void 0 : _e.concat(response.data.objs[0].homeworkObjs);
                        }
                    }
                    let arrLength = (_g = (_f = this.dataObjs[index].homeworkObjs) === null || _f === void 0 ? void 0 : _f.length) !== null && _g !== void 0 ? _g : 0;
                    for (let j = 0; j < arrLength; j++) {
                        let element = (_h = this.dataObjs[index].homeworkObjs) === null || _h === void 0 ? void 0 : _h[j];
                        if ((element === null || element === void 0 ? void 0 : element.answerObj) && element.answerObj.point) {
                            element.hideMark = true;
                        }
                    }
                }
            }
            if (this.dataObjs) {
                this.dataObjs[index].isLoading = false;
                this.dataObjs[index].isLoadingPage = false;
            }
        });
    }
    getData() {
        this.initStatusObj();
        this.frontPageStudentService.apiFrontPageStudentGetClassroomInHomeworkObjsInDashboardGet().subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g;
            if (response.success == 1) {
                this.dataObjs = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs;
                let arrLength = (_c = (_b = this.dataObjs) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0;
                for (let i = 0; i < arrLength; i++) {
                    if (this.dataObjs) {
                        this.dataObjs[i].statusGetHomework = false;
                        let homeworkLength = (_e = (_d = this.dataObjs[i].homeworkObjs) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0;
                        for (let j = 0; j < homeworkLength; j++) {
                            let element = (_f = this.dataObjs[i].homeworkObjs) === null || _f === void 0 ? void 0 : _f[j];
                            if ((element === null || element === void 0 ? void 0 : element.answerObj) && (element === null || element === void 0 ? void 0 : element.answerObj.point)) {
                                element.hideMark = true;
                            }
                        }
                    }
                }
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_g = response.message) !== null && _g !== void 0 ? _g : '', true);
            }
        });
    }
    backToDashboard() {
        this.commonService.myNavigation('/student/dashboard/1');
    }
    ngOnChanges() {
        this.getData();
    }
    ngOnInit() {
        this.getData();
        super.ngOnInit();
    }
}
StudentDashboardExerciseComponent.ɵfac = function StudentDashboardExerciseComponent_Factory(t) { return new (t || StudentDashboardExerciseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__.FrontPageStudentService)); };
StudentDashboardExerciseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StudentDashboardExerciseComponent, selectors: [["app-dashboard-exercise"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["doneLoading", ""], ["id", "dasboard-student", 1, "component"], ["class", "text-center", 4, "ngIf", "ngIfElse"], ["hasData", ""], [1, "text-center"], [1, "block-list"], [1, "block-body", 2, "justify-content", "center", "align-items", "center"], [2, "font-size", "14px", "font-weight", "500"], [1, "block-list-bottom", "bg-block-list"], [1, "btn-add", 3, "routerLink", "queryParams"], [1, "btn-add-text"], [1, "row", "mt-4"], [1, "col-md-12"], ["multi", "", 1, "example-headers-align"], [4, "ngFor", "ngForOf"], [1, "block-list-bottom"], [1, "panel-custom", 3, "expanded", "opened"], [1, "block-header"], [1, "block-header-info"], [1, "block-avatar"], [1, "image", 2, "cursor", "pointer", 3, "nameCreateAvatar", "size", "linkAvatar"], [1, "heading"], [1, "heading-title"], [1, "heading-text", 3, "matTooltip"], ["class", "d-flex justify-content-center mt-3", 4, "ngIf", "ngIfElse"], ["doneLoadingPage", ""], [1, "d-flex", "justify-content-center", "mt-3"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "sr-only"], ["class", "mta-15", 4, "ngIf", "ngIfElse"], ["class", "d-flex justify-content-center mt-3", 4, "ngIf"], ["elseBlockHomework", ""], [1, "mta-15"], ["class", "mt-3", 4, "ngFor", "ngForOf"], [1, "mt-3"], [1, "link-text", 3, "ngClass", "routerLink", "queryParams"], [3, "data"], ["mat-button", "", 1, "btn-all-add", 3, "matTooltip", "disabled", "click"], ["class", "block-else", 4, "ngIf"], ["class", "block-else", "style", "background: transparent;", 4, "ngIf"], [1, "block-else"], [1, "text-else"], [1, "block-else", 2, "background", "transparent"]], template: function StudentDashboardExerciseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, StudentDashboardExerciseComponent_azt_loading_effect_0_Template, 1, 0, "azt-loading-effect", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StudentDashboardExerciseComponent_ng_template_1_Template, 4, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r1);
    } }, styles: ["a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.app[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n.mta-15[_ngcontent-%COMP%] {\n  margin-top: -15px;\n}\n\n.box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid rgba(220, 220, 220, 0.8);\n  color: #222;\n  text-align: center;\n  transition: all 0.5s;\n  display: flex;\n  padding: 1px;\n  padding-top: 6px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px !important;\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.07), -10px -10px 20px rgba(255, 255, 255, 0.8);\n}\n\n.box-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 10px;\n}\n\n.box-icon-upload[_ngcontent-%COMP%] {\n  color: #00a7d0;\n}\n\n.box-icon-search[_ngcontent-%COMP%] {\n  color: #bf3232;\n}\n\n.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n}\n\n.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n\n.box-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n\n.box-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.box-active[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.07), -10px -10px 20px rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n\n.block-list-bottom[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  border: none;\n  display: flex;\n  align-items: center;\n  color: #707070;\n  background: transparent;\n}\n\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%] {\n  text-transform: initial;\n  margin-left: 2px;\n}\n\n.panel-custom[_ngcontent-%COMP%] {\n  margin: 1rem 0 !important;\n  background: #ececec;\n}\n\n.block[_ngcontent-%COMP%] {\n  margin: 40px 0;\n}\n\n.block[_ngcontent-%COMP%]:first-child {\n  margin-top: 25px;\n}\n\n.block-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n\n.block-body[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  background: #fff;\n  border-radius: 3px;\n  margin-top: 20px;\n  width: 100%;\n  min-height: 95px;\n}\n\n.block-body-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  background: #2361ae;\n  color: #fff;\n  width: 100px;\n  font-weight: 500;\n  text-align: center;\n  font-size: 15px;\n}\n\n.block-body-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  max-width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 2px;\n  font-size: 14px;\n  color: #000;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-desc[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #000;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-deadline[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  font-size: 14px;\n  color: #000;\n}\n\n.block-body-content[_ngcontent-%COMP%]   .content-deadline[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.bg-block-list[_ngcontent-%COMP%] {\n  background: #ececec;\n  padding: 10px 20px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.heading-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 500;\n  font-size: 16px;\n  margin-right: 15px;\n}\n\n.heading-text[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 14px;\n  overflow: hidden;\n  max-width: 90%;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n\n.block-avatar[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  width: 30px;\n  height: 30px;\n}\n\n.block-avatar-share[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n.image[_ngcontent-%COMP%] {\n  border-radius: 50px !important;\n  width: 100%;\n}\n\n.block[_ngcontent-%COMP%]:first-child {\n  margin-top: 20px;\n}\n\n.block-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.class-visible[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.no-active[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  color: #666666;\n}\n\n.block-else[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 5px;\n}\n\n.text-else[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.btn-all[_ngcontent-%COMP%] {\n  text-transform: inherit;\n  font-size: 14px;\n  color: #0EAFC0;\n  font-weight: 500;\n  position: absolute;\n  top: -3px;\n  right: 0px;\n}\n\n.block-header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.block-avatar-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .block-avatar-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .heading-text[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n\n  .box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    height: 24px;\n    width: 24px;\n  }\n\n  .box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  .block-body-status[_ngcontent-%COMP%] {\n    width: 90px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UscUJBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUdGOztBQUZFO0VBQ0kseUZBQUE7QUFJTjs7QUFGRTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUlOOztBQUhNO0VBQ0ksY0FBQTtBQUtWOztBQUhNO0VBQ0ksY0FBQTtBQUtWOztBQUhNO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFLVjs7QUFITTtFQUNJLGVBQUE7QUFLVjs7QUFGRTtFQUNJLGVBQUE7QUFJTjs7QUFITTtFQUNJLGdCQUFBO0FBS1Y7O0FBRkU7RUFDSSx5QkFBQTtFQUNBLHlGQUFBO0VBQ0EsZ0JBQUE7QUFJTjs7QUFJRTtFQUNJLGNBQUE7QUFETjs7QUFFTTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFBVjs7QUFDVTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDZDs7QUFJQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFEQTs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFDRTtFQUNJLGdCQUFBO0FBQ047O0FBQ0U7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBQ047O0FBQ0U7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNOOztBQUFNO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNWOztBQUNNO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNWOztBQUFVO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRWQ7O0FBRGM7RUFDSSxnQkFBQTtBQUdsQjs7QUFBVTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUVkOztBQUFVO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUVkOztBQURjO0VBQ0ksZ0JBQUE7QUFHbEI7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUhBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ047O0FBRUU7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUFOOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBS0Y7O0FBSEE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFNRjs7QUFKQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVFGOztBQU5BO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVNGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBVUY7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFXRjs7QUFUQTtFQUNFO0lBQ0ksc0JBQUE7SUFDQSx1QkFBQTtFQVlKOztFQVZBO0lBQ0ksc0JBQUE7SUFDQSx1QkFBQTtFQWFKOztFQVhBO0lBQ0ksZ0JBQUE7RUFjSjs7RUFaQTtJQUNJLFlBQUE7SUFDQSxXQUFBO0VBZUo7O0VBYkE7SUFDSSxlQUFBO0VBZ0JKOztFQWRBO0lBQ0ksV0FBQTtFQWlCSjtBQUNGIiwiZmlsZSI6InN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5hOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYXBwe1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ubXRhLTE1e1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cbi5ib3h7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIwLCAyMjAsIDIyMCwgMC44KTtcbiAgY29sb3I6ICMyMjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICY6aG92ZXJ7XG4gICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCByZ2IoMCAwIDAgLyA3JSksIC0xMHB4IC0xMHB4IDIwcHggcmdiKDI1NSAyNTUgMjU1IC8gODAlKTtcbiAgfVxuICAmLWljb257XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAmLXVwbG9hZHtcbiAgICAgICAgICBjb2xvcjogIzAwYTdkMDtcbiAgICAgIH1cbiAgICAgICYtc2VhcmNoe1xuICAgICAgICAgIGNvbG9yOiAjYmYzMjMyO1xuICAgICAgfVxuICAgICAgLm1hdC1pY29ue1xuICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgIH1cbiAgICAgIC5tYXRlcmlhbC1pY29uc3tcbiAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICB9XG4gIH1cbiAgJi10ZXh0e1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgc3BhbntcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgfVxuICB9XG4gICYtYWN0aXZle1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHJnYigwIDAgMCAvIDclKSwgLTEwcHggLTEwcHggMjBweCByZ2IoMjU1IDI1NSAyNTUgLyA4MCUpO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuLmJsb2NrLWxpc3R7XG4gIC8vIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIC8vIHBhZGRpbmc6IDEwcHg7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiKDAgMCAwIC8gMTQlKTtcbiAgJi1ib3R0b217XG4gICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIC5idG4tYWRke1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgJi10ZXh0e1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cbi5wYW5lbC1jdXN0b217XG5tYXJnaW46IDFyZW0gMCAhaW1wb3J0YW50O1xuYmFja2dyb3VuZDogI2VjZWNlYztcbn1cbi5ibG9ja3tcbiAgbWFyZ2luOiA0MHB4IDA7XG4gICY6Zmlyc3QtY2hpbGR7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICB9XG4gICYtaGVhZGVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgJi1ib2R5e1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiA5NXB4O1xuICAgICAgJi1zdGF0dXN7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjM2MWFlO1xuICAgICAgICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41MDcpO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG4gICAgICAmLWNvbnRlbnR7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgLmNvbnRlbnQtdGl0bGV7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQtZGVzY3tcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50LWRlYWRsaW5le1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG4uYmctYmxvY2stbGlzdCB7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggMnB4IDJweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCA1cHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5oZWFkaW5ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAmLXRpdGxle1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cbiAgfVxuICAmLXRleHR7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIH1cbn1cbi5ibG9jay1hdmF0YXJ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5ibG9jay1hdmF0YXItc2hhcmV7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG4uaW1hZ2V7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmxvY2s6Zmlyc3QtY2hpbGR7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYmxvY2staGVhZGVyLWxlZnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2xhc3MtdmlzaWJsZXtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuLm5vLWFjdGl2ZXtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG4uYmxvY2stZWxzZXtcbiAgaGVpZ2h0OiA5MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnRleHQtZWxzZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmJ0bi1hbGx7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMEVBRkMwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IDBweDtcbn1cbi5ibG9jay1oZWFkZXItaW5mb3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ibG9jay1hdmF0YXItaW5mb3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG4gIC5oZWFkaW5ne1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5ibG9jay1hdmF0YXItaW5mb3tcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAuaGVhZGluZy10ZXh0e1xuICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgfVxuICAuYm94LWljb24gLm1hdC1pY29ue1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgd2lkdGg6IDI0cHg7XG4gIH1cbiAgLmJveC1pY29uIC5tYXRlcmlhbC1pY29uc3tcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuICAuYmxvY2stYm9keS1zdGF0dXN7XG4gICAgICB3aWR0aDogOTBweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 48303:
/*!*****************************************************************************!*\
  !*** ./src/app/student_frontend/utils/dashboard-qa/controller.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardQAComponent": () => (/* binding */ DashboardQAComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_qa_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/qa_api */ 69496);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _azota_ui_azt_block_qa_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../azota-ui/azt-block-qa/controller.component */ 58);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);












function DashboardQAComponent_azt_loading_effect_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "azt-loading-effect");
} }
function DashboardQAComponent_ng_template_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "lang_student_frontend_dashboard_qa_tutorial"), " ");
} }
const _c0 = function (a0) { return [a0]; };
function DashboardQAComponent_ng_template_1_div_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, "/student-qa/enter-question")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, "lang_student_frontend_dashboard_qa_ask_now"), " ");
} }
function DashboardQAComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardQAComponent_ng_template_1_div_1_div_1_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DashboardQAComponent_ng_template_1_div_1_a_2_Template, 4, 8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.listQuestions.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.listQuestions.length == 0);
} }
function DashboardQAComponent_ng_template_1_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardQAComponent_ng_template_1_div_2_div_12_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const itemQuestion_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r11.viewDetail(itemQuestion_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "azt-block-qa", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemQuestion_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", itemQuestion_r10);
} }
function DashboardQAComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, DashboardQAComponent_ng_template_1_div_2_div_12_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, "lang_student_frontend_dashboard_qa_all_question"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 6, "/student-qa/enter-question")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 8, "lang_student_frontend_dashboard_qa_add_question"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.listQuestions);
} }
function DashboardQAComponent_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function DashboardQAComponent_ng_template_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardQAComponent_ng_template_1_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r13.getData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "lang_buttom_see_more"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r6.isEndPage == 1);
} }
function DashboardQAComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardQAComponent_ng_template_1_div_1_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DashboardQAComponent_ng_template_1_div_2_Template, 13, 12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DashboardQAComponent_ng_template_1_div_3_Template, 4, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, DashboardQAComponent_ng_template_1_div_4_Template, 5, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.listQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.listQuestions && ctx_r2.listQuestions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isLoadingPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.isLoadingPage);
} }
class DashboardQAComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, studentQuestionService) {
        super(commonService);
        this.commonService = commonService;
        this.studentQuestionService = studentQuestionService;
        this.isLoadingPage = false;
        this.page = 1;
    }
    viewDetail(id) {
        this.commonService.myNavigation('/student-qa/view-question/' + id);
    }
    getData() {
        if (this.page === 1) {
            this.initStatusObj();
        }
        else {
            this.isLoadingPage = true;
        }
        this.subscriptions.add(this.studentQuestionService.apiStudentQuestionGetObjsGet(this.page).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (response.success === 1) {
                if (this.page === 1) {
                    this.listQuestions = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.objs;
                }
                else {
                    let lengthArr = (_d = (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.objs) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0;
                    if (lengthArr > 0) {
                        for (let i = 0; i < lengthArr; i++) {
                            if (((_e = response.data) === null || _e === void 0 ? void 0 : _e.objs) && ((_f = response.data) === null || _f === void 0 ? void 0 : _f.objs[i])) {
                                (_g = this.listQuestions) === null || _g === void 0 ? void 0 : _g.push((_h = response === null || response === void 0 ? void 0 : response.data) === null || _h === void 0 ? void 0 : _h.objs[i]);
                            }
                        }
                    }
                }
                this.page = this.page + 1;
                this.isEndPage = (_j = response.data) === null || _j === void 0 ? void 0 : _j.isEndPage;
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_k = response.message) !== null && _k !== void 0 ? _k : '', true);
            }
            this.stopStatusObj();
            this.isLoadingPage = false;
        }));
    }
    ngOnInit() {
        var _a;
        if ((_a = this.searchData) === null || _a === void 0 ? void 0 : _a.length) {
            this.listQuestions = this.searchData;
        }
        else {
            this.getData();
        }
    }
}
DashboardQAComponent.ɵfac = function DashboardQAComponent_Factory(t) { return new (t || DashboardQAComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auto_api_qa_api__WEBPACK_IMPORTED_MODULE_2__.StudentQuestionService)); };
DashboardQAComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DashboardQAComponent, selectors: [["app-dashboard-qa"]], inputs: { searchData: "searchData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["doneLoading", ""], [1, "content"], ["class", "content-header", 4, "ngIf"], ["class", "content-list-view", 4, "ngIf"], ["class", "d-flex justify-content-center mt-3", 4, "ngIf"], ["class", "text-center mt-3", 4, "ngIf"], [1, "content-header"], ["style", "font-size: 16px; text-align: center; line-height: 23px;", 4, "ngIf"], ["class", "btn btn-enter mt-2", 3, "routerLink", 4, "ngIf"], [2, "font-size", "16px", "text-align", "center", "line-height", "23px"], [1, "btn", "btn-enter", "mt-2", 3, "routerLink"], [1, "content-list-view"], [1, "header"], [1, "list-title", "mb-0"], ["mat-button", "", 1, "btn", 3, "routerLink"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "data"], [1, "d-flex", "justify-content-center", "mt-3"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "sr-only"], [1, "text-center", "mt-3"], ["mat-button", "", 1, "btn-all-add", 3, "matTooltip", "disabled", "click"]], template: function DashboardQAComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, DashboardQAComponent_azt_loading_effect_0_Template, 1, 0, "azt-loading-effect", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardQAComponent_ng_template_1_Template, 5, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_3__.AztLoadingEffectComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _azota_ui_azt_block_qa_controller_component__WEBPACK_IMPORTED_MODULE_4__.AztBlockQAQuestionComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.MyLocalizePipe], styles: [".content[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin-top: 20px !important;\n  margin: auto;\n  background: inherit;\n  background-color: #ececec;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.14);\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.content-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.btn-enter[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  padding: 8px 10px;\n  background: inherit;\n  background-color: #169bd5;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  font-weight: 500;\n  transition: all 0.5s;\n}\n\n.btn-enter[_ngcontent-%COMP%]:hover {\n  background: #0d719c;\n}\n\n.list-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.content-list-view[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n\n.btn-more[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #0EAFC0;\n  font-size: 14px;\n  border-radius: 5px;\n  transition: all 0.5s;\n}\n\n.btn-more[_ngcontent-%COMP%]:hover {\n  background: #e6e2e2;\n}\n\n.view-single[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background: inherit;\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ececec;\n  border-radius: 5px;\n  box-shadow: none;\n  font-style: normal;\n  font-size: 14px;\n  color: #494949;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFLRjs7QUFIQTtFQUNFLG1CQUFBO0FBTUY7O0FBSkE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0FBUUY7O0FBTkE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQVNGOztBQVBBO0VBQ0UsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFXRiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDIzNiwgMjM2LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoMCAwIDAgLyAxNCUpO1xufVxuYnV0dG9uOmZvY3Vze1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNvbnRlbnQtaGVhZGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYnRuLWVudGVye1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMTU1LCAyMTMsIDEpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuLmJ0bi1lbnRlcjpob3ZlcntcbiAgYmFja2dyb3VuZDogIzBkNzE5Yztcbn1cbi5saXN0LXRpdGxle1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNvbnRlbnQtbGlzdC12aWV3e1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uYnRuLW1vcmV7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMEVBRkMwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cbi5idG4tbW9yZTpob3ZlcntcbiAgYmFja2dyb3VuZDogI2U2ZTJlMjtcbn1cbi52aWV3LXNpbmdsZXtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzNiwgMjM2LCAyMzYsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0OTQ5NDk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 99716:
/*!***********************************************************************!*\
  !*** ./src/app/student_frontend/utils/footer/controller.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentFrontendFooterComponent": () => (/* binding */ StudentFrontendFooterComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global.service */ 54209);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);










function StudentFrontendFooterComponent_div_0_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", ctx_r5.userObj == null ? null : ctx_r5.userObj.id, ".", ctx_r5.userObj == null ? null : ctx_r5.userObj.fullName, ".Zalo:", ctx_r5.userObj == null ? null : ctx_r5.userObj.zaloId, " ");
} }
function StudentFrontendFooterComponent_div_0_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "anonymousFullName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "anonymousPhone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", ctx_r6.userObj == null ? null : ctx_r6.userObj.id, ".", ctx_r6.userObj ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, ctx_r6.userObj) : "", ".", (ctx_r6.userObj == null ? null : ctx_r6.userObj.phone) ? ctx_r6.userObj == null ? null : ctx_r6.userObj.phone : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 5, ""), ". ");
} }
function StudentFrontendFooterComponent_div_0_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Version: ", ctx_r7.currentVersion, " ");
} }
function StudentFrontendFooterComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, StudentFrontendFooterComponent_div_0_div_1_span_3_Template, 2, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, StudentFrontendFooterComponent_div_0_div_1_span_4_Template, 4, 7, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, StudentFrontendFooterComponent_div_0_div_1_span_5_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, "lang_student_frontend_fooder_account"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.userObj == null ? null : ctx_r1.userObj.zaloId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx_r1.userObj == null ? null : ctx_r1.userObj.zaloId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.currentVersion);
} }
const _c0 = function (a0) { return [a0]; };
function StudentFrontendFooterComponent_div_0_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p")(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, "/admin/testbank/dashboard")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 5, "lang_student_frontend_fooder_back_screen_teacher"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 7, "lang_tutorial"), " ");
} }
function StudentFrontendFooterComponent_div_0_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, "lang_student_frontend_fooder_title_tutorial_regester"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 5, "/auth/switch-teacher-student")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 7, "lang_student_frontend_fooder_regester_account_teacher"));
} }
function StudentFrontendFooterComponent_div_0_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, "lang_student_frontend_fooder_title_remove_role_teacher"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 5, "/auth/switch-teacher-student")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 7, "lang_student_frontend_fooder_remove_role_teacher"));
} }
function StudentFrontendFooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, StudentFrontendFooterComponent_div_0_div_1_Template, 6, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, StudentFrontendFooterComponent_div_0_p_2_Template, 9, 11, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p")(4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "https://www.facebook.com/azotavn");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, StudentFrontendFooterComponent_div_0_p_19_Template, 7, 11, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, StudentFrontendFooterComponent_div_0_p_20_Template, 7, 11, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.checkAnonymous());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.checkTeacher());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](19, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 9, "/auth/login-scan/1")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 11, "lang_student_frontend_fooder_qr_code_login"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](21, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 13, "/auth/create-qr-forgot-pass/1")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 15, "lang_student_frontend_fooder_qr_code_forgot_password"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 17, "lang_student_frontend_fooder_follow_fanpage"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.checkTeacher());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.checkTeacher());
} }
class StudentFrontendFooterComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(baseApiService, commonService, globalService, envService) {
        super(commonService);
        this.baseApiService = baseApiService;
        this.commonService = commonService;
        this.globalService = globalService;
        this.envService = envService;
        this.currentVersion = '';
        this.isTeacher = false;
    }
    checkAnonymous() {
        return this.baseApiService.isAnonymousRole();
    }
    checkTeacher() {
        return this.baseApiService.isTeacherRole();
    }
    ngOnInit() {
        this.currentVersion = this.envService.getCurrentVersion();
        this.userObj = this.baseApiService.getUserObj();
        this.globalService.loginMessage.subscribe(message => {
            this.userObj = this.baseApiService.getUserObj();
        });
        super.ngOnInit();
    }
}
StudentFrontendFooterComponent.ɵfac = function StudentFrontendFooterComponent_Factory(t) { return new (t || StudentFrontendFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_1__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_4__.EnvService)); };
StudentFrontendFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: StudentFrontendFooterComponent, selectors: [["student-frontend-footer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "text-center mt-3", 4, "ngIf"], [1, "text-center", "mt-3"], ["style", " margin-bottom: 12px;", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"], [2, "color", "#007bff", 3, "routerLink"], [1, "text-center"], ["href", "https://www.facebook.com/azotavn", "target", "_blank"], ["data-href", "https://www.facebook.com/azotavn", "data-width", "", "data-layout", "standard", "data-action", "like", "data-size", "large", "data-share", "true", 1, "text-center", "mb-3", "fb-like"], [2, "margin-bottom", "12px"], ["href", "https://docs.azota.vn/", "target", "_blank"]], template: function StudentFrontendFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, StudentFrontendFooterComponent_div_0_Template, 21, 23, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.userObj == null ? null : ctx.userObj.id) != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.AnonymousFullName, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.AnonymousPhone, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_9__.LocalizeRouterPipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_student_frontend_module_module_ts.js.map