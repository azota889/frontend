"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_dashboard_module_module_ts"],{

/***/ 17710:
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-main-v1/controller.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardMainV1Component": () => (/* binding */ DashboardMainV1Component),
/* harmony export */   "NewFeatureNoticeOldDialog": () => (/* binding */ NewFeatureNoticeOldDialog)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_switch_version_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/switch.version.service */ 30592);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _azota_ui_azt_list_questions_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../azota-ui/azt-list-questions/controller.component */ 11956);
/* harmony import */ var _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/footer/controller.component */ 42933);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 77446);





















function DashboardMainV1Component_azt_loading_effect_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "azt-loading-effect");
} }
function DashboardMainV1Component_ng_template_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.global_notice);
} }
const _c0 = function (a0) { return [a0]; };
function DashboardMainV1Component_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, DashboardMainV1Component_ng_template_3_div_3_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 7)(5, "div", 8)(6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardMainV1Component_ng_template_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r4.redirectToExercise()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "path", 12)(11, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 14)(13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 8)(17, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardMainV1Component_ng_template_3_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.redirectToTestBank()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "path", 12)(22, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 14)(24, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 8)(28, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 20)(31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "class");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 14)(34, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](36, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 8)(38, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](39, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 14)(43, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](45, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 8)(47, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardMainV1Component_ng_template_3_Template_a_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.redirectToWebsite()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](48, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "path", 12)(52, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div", 14)(54, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 8)(57, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](58, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "path", 12)(62, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 14)(64, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](66, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 8)(68, "a", 26)(69, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "path", 12)(72, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "div", 14)(74, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](76, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 30)(78, "div", 31)(79, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](80, "azt-list-questions", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "testbank-backend-footer", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("showNewFeatureNotice", function DashboardMainV1Component_ng_template_3_Template_testbank_backend_footer_showNewFeatureNotice_81_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.showNewFeatureNotice($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.global_notice);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](39, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 15, "/admin/homework/classes/1")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 17, "lang_testbank_test_dashboard_homework"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](41, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 19, "/admin/testbank/category/0/0/1")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 21, "lang_testbank_test_dashboard_exam"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](43, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](29, 23, "/admin/student/manage-class/0")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](36, 25, "lang_testbank_test_dashboard_list_class"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](45, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](39, 27, "/admin/teacher-group/2/0")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](45, 29, "lang_testbank_test_dashboard_group_teacher"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](47, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](48, 31, "/admin/testbank/create-website")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](49, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](58, 33, "/admin/trash/0")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](66, 35, "lang_testbank_test_dashboard_trash"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](76, 37, "lang_testbank_test_dashboard_support"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("screen", "dash");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checkNewFeatureNotice", ctx_r2.checFeatureNotice);
} }
const _c1 = ".maxW1200[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.app[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  max-width: 90%;\n  margin: 0 auto;\n}\n\n.box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid rgba(220, 220, 220, 0.8);\n  color: #222;\n  text-align: center;\n  transition: all 0.5s;\n  display: flex;\n  max-width: 154px;\n  height: 135px;\n  padding: 10px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px !important;\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.07), -10px -10px 20px rgba(255, 255, 255, 0.8);\n}\n\n.box-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.box-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n\n.box-icon-upload[_ngcontent-%COMP%] {\n  color: #2361ae;\n}\n\n.box-icon-search[_ngcontent-%COMP%] {\n  color: #f39c12;\n}\n\n.box-icon-people[_ngcontent-%COMP%] {\n  color: #bf3232;\n}\n\n.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n}\n\n.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n\n.box-icon-qa[_ngcontent-%COMP%] {\n  color: #0984e3;\n}\n\n.box-icon-group[_ngcontent-%COMP%] {\n  color: #0984e3;\n  font-size: 45px;\n}\n\n.circle-count[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  background-color: #ff0000;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 20%;\n  z-index: 1000000;\n  position: absolute;\n}\n\n.text-black[_ngcontent-%COMP%] {\n  color: #222;\n}\n\n.block-list-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n.block-list[_ngcontent-%COMP%] {\n  background: #ececec;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.14);\n  width: 100%;\n  max-height: 300px;\n}\n\n.block-list-bottom[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  border: none;\n  display: flex;\n  align-items: center;\n  color: #707070;\n  background: transparent;\n}\n\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%] {\n  text-transform: initial;\n  margin-left: 2px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  text-transform: initial;\n}\n\n.block-else[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n\n.text-else[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n@media (max-width: 1200px) {\n  .app[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n}\n\n@media (max-width: 1024px) {\n  .circle-count[_ngcontent-%COMP%] {\n    right: 14%;\n  }\n}\n\n@media (max-width: 992px) {\n  .circle-count[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n\n@media (max-width: 468px) {\n  .box[_ngcontent-%COMP%] {\n    max-width: 154px;\n    height: 90px;\n  }\n\n  .box-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .box-icon-group[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  .box-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    height: 45px;\n    width: 45px;\n  }\n\n  .box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}";
class DashboardMainV1Component extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, envService, dialog, globalNoticeService, switchVersionService) {
        super(commonService);
        this.commonService = commonService;
        this.envService = envService;
        this.dialog = dialog;
        this.globalNoticeService = globalNoticeService;
        this.switchVersionService = switchVersionService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
        this.current_version = '';
        this.global_notice = '';
        this.back_link = '';
        this.returnUrl = '';
        this.checFeatureNotice = false;
    }
    // Redirect utils
    redirectToWebsite() {
        this.commonService.gaEvent('dashboard_click_to_website');
    }
    redirectToExercise() {
        this.commonService.gaEvent('dashboard_click_to_exercise');
    }
    redirectToTestBank() {
        this.commonService.gaEvent('dashboard_click_to_exam');
    }
    redirectToStudentList() {
        this.commonService.gaEvent('dashboard_click_to_student');
    }
    redirectToStatistic() {
        this.commonService.gaEvent('dashboard_click_to_statistic');
    }
    redirectToFaq() {
        this.commonService.gaEvent('dashboard_click_to_faq');
    }
    goToConfirm() {
        this.returnUrl = this.commonService.getMyQueryParam('return_url') || this.commonService.getCurrentUrl();
        var queryString = '?return_url=' + encodeURIComponent(this.returnUrl) + '&confirm_type=confirm_phone';
        this.commonService.myNavigationWithQueryString('/auth/checking_service', queryString);
    }
    getNewFeatureNotice(getRead) {
        this.initStatusObj();
        this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet().subscribe((response) => {
            var _a, _b, _c;
            if (response.success == 1) {
                if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.obj) {
                    // show dialog tính năng mới
                    this.checFeatureNotice = true;
                    const dialogRef = this.dialog.open(NewFeatureNoticeOldDialog, { width: '750px', data: (_b = response.data) === null || _b === void 0 ? void 0 : _b.obj });
                    dialogRef.afterClosed().subscribe(result => {
                        if (result) {
                            try {
                                this.setMarkAsReadFeaturesNotice();
                            }
                            catch (error) {
                                console.log(error);
                            }
                        }
                    });
                }
                else {
                    this.checFeatureNotice = false;
                }
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : '', true);
            }
        }));
    }
    showNewFeatureNotice(eventEmit) {
        this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet(eventEmit ? 1 : 0).subscribe((response) => {
            var _a, _b, _c;
            if (response.success == 1) {
                if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.obj) {
                    // show dialog tính năng mới
                    const dialogRef = this.dialog.open(NewFeatureNoticeOldDialog, { width: '750px', data: (_b = response.data) === null || _b === void 0 ? void 0 : _b.obj });
                    dialogRef.afterClosed().subscribe((result) => {
                    });
                }
            }
            else {
                this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : '', true);
            }
        }));
    }
    setMarkAsReadFeaturesNotice() {
        this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeMarkAsReadGet().subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
            }
        }));
    }
    ngOnInit() {
        var _a;
        this.initStatusObj();
        this.current_version = this.envService.getCurrentVersion();
        this.global_notice = (_a = this.envService.getGlobalNotice()) !== null && _a !== void 0 ? _a : '';
        this.switchVersionService.switchDashboard().subscribe((switchResponse) => {
            var _a;
            if (switchResponse == undefined || switchResponse.success == 1) {
                this.switchVersionService.getDashboardStatus(true).subscribe((statusResponse) => {
                    var _a;
                    if (statusResponse == undefined || statusResponse.success == 1) {
                        this.getNewFeatureNotice(0);
                    }
                    else {
                        this.showErrorSnack((_a = statusResponse.message) !== null && _a !== void 0 ? _a : '');
                    }
                });
            }
            else {
                this.showErrorSnack((_a = switchResponse.message) !== null && _a !== void 0 ? _a : '');
            }
        });
        this.back_link = '';
        this.commonService.translateMetaData({
            title: 'lang_cms_test_dashboard_title',
            description: 'lang_cms_test_dashboard_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
}
DashboardMainV1Component.ɵfac = function DashboardMainV1Component_Factory(t) { return new (t || DashboardMainV1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_2__.EnvService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.GlobalNoticeService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_switch_version_service__WEBPACK_IMPORTED_MODULE_4__.SwitchVersionService)); };
DashboardMainV1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: DashboardMainV1Component, selectors: [["app-dashboard-main-v1"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 6, consts: [[3, "headerTitle", "switchDashboard"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [1, "mt-3", "app"], [1, "row", "py-4"], [1, "col-12", "col-xl-8"], ["style", "color:red;font-size:16px;", 4, "ngIf"], [1, "row", "py-md-5", "px-1", "mx-0"], [1, "col-sm-4", "col-md-3", "col-4", "py-3", "px-2"], [1, "box", 3, "routerLink", "click"], [1, "box-icon", "box-icon-upload"], ["xmlns", "http://www.w3.org/2000/svg", "height", "48px", "viewBox", "0 0 24 24", "width", "48px", "fill", "#00a7d0"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"], [1, "box-text"], [1, "text-black"], [1, "box-icon", "box-icon-search"], ["xmlns", "http://www.w3.org/2000/svg", "height", "48px", "viewBox", "0 0 24 24", "width", "48px", "fill", "#f39c12"], ["d", "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"], [1, "box", 3, "routerLink"], [1, "box-icon", "box-icon-group"], [1, "fa", "fa-handshake"], [1, "box-icon", "box-icon-people"], ["xmlns", "http://www.w3.org/2000/svg", "height", "48px", "viewBox", "0 0 24 24", "width", "48px", "fill", "#bf3232"], ["d", "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"], ["d", "M19 4h-3.5l-1-1h-5l-1 1H5v2h14zM6 7v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm8 7v4h-4v-4H8l4-4 4 4h-2z"], ["href", "https://docs.azota.vn/", "target", "_blank", 1, "box"], [1, "box-icon", "box-icon-qa"], ["xmlns", "http://www.w3.org/2000/svg", "height", "48px", "viewBox", "0 0 24 24", "width", "48px", "fill", "#0984e3"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"], [1, "col-12", "col-xl-4"], [1, "row", "px-1", "mx-0"], [1, "col-md-12", "px-2"], [3, "screen"], [3, "checkNewFeatureNotice", "showNewFeatureNotice"], [2, "color", "red", "font-size", "16px"]], template: function DashboardMainV1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, DashboardMainV1Component_azt_loading_effect_2_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, DashboardMainV1Component_ng_template_3_Template, 82, 51, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 4, "lang_testbank_test_dashboard_header_title"))("switchDashboard", ctx.statusObj.loading ? false : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r1);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__.AztLoadingEffectComponent, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_6__.HeaderBackendComponent, _azota_ui_azt_list_questions_controller_component__WEBPACK_IMPORTED_MODULE_7__.AztListQuestionsComponent, _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_8__.TestbankBackendFooterComponent, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__.MyLocalizePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__.MytranslatePipe], styles: [_c1] });
class NewFeatureNoticeOldDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.isNotShowAgain = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.UntypedFormControl(false);
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close(this.isNotShowAgain.value); // đóng dialog
    }
}
NewFeatureNoticeOldDialog.ɵfac = function NewFeatureNoticeOldDialog_Factory(t) { return new (t || NewFeatureNoticeOldDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA)); };
NewFeatureNoticeOldDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: NewFeatureNoticeOldDialog, selectors: [["new-feature-notice-dialog"]], decls: 11, vars: 9, consts: [["mat-dialog-title", ""], [3, "innerHTML"], ["align", "end"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "width", "100%"], [1, "dialog-check", "mt-3"], ["color", "primary", 1, "example-margin", 3, "formControl"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "click"]], template: function NewFeatureNoticeOldDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 0)(1, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-dialog-actions", 2)(3, "div", 3)(4, "div", 4)(5, "mat-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewFeatureNoticeOldDialog_Template_button_click_8_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx.data == null ? null : ctx.data.description, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.isNotShowAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 5, "lang_testbank_create_exam_width_file_pdf_not_view"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mat-dialog-close", ctx.isNotShowAgain.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 7, "lang_buttom_close"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlDirective, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__.MytranslatePipe], styles: [_c1] });


/***/ }),

/***/ 43037:
/*!******************************************************************!*\
  !*** ./src/app/dashboard/dashboard-main/controller.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardMainComponent": () => (/* binding */ DashboardMainComponent),
/* harmony export */   "NewFeatureNoticeDialog": () => (/* binding */ NewFeatureNoticeDialog)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_switch_version_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/switch.version.service */ 30592);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _azota_ui_azt_list_questions_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../azota-ui/azt-list-questions/controller.component */ 11956);
/* harmony import */ var _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/footer/controller.component */ 42933);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 77446);





















function DashboardMainComponent_azt_loading_effect_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "azt-loading-effect");
} }
function DashboardMainComponent_ng_template_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.global_notice);
} }
const _c0 = function (a0) { return [a0]; };
function DashboardMainComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, DashboardMainComponent_ng_template_3_div_3_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 7)(5, "div", 8)(6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardMainComponent_ng_template_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r4.redirectToExercise()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "path", 12)(11, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 14)(13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " B\u00E0i t\u1EADp / \u0110\u1EC1 thi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 8)(16, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 17)(19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "class");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 14)(22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 8)(26, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 14)(31, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 8)(35, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardMainComponent_ng_template_3_Template_a_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.redirectToWebsite()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](36, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "path", 12)(40, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 14)(42, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 8)(45, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](46, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "path", 12)(50, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 14)(52, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](54, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 8)(56, "a", 23)(57, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](59, "path", 12)(60, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 14)(62, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](64, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 27)(66, "div", 28)(67, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](68, "azt-list-questions", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "testbank-backend-footer", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("showNewFeatureNotice", function DashboardMainComponent_ng_template_3_Template_testbank_backend_footer_showNewFeatureNotice_69_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.showNewFeatureNotice($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.global_notice);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](30, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 12, "/admin/testbank/document-management/0/0/1")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](32, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 14, "/admin/student/manage-class/0")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 16, "lang_testbank_test_dashboard_list_class"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](34, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](27, 18, "/admin/teacher-group/2/0")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](33, 20, "lang_testbank_test_dashboard_group_teacher"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](36, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](36, 22, "/admin/testbank/create-website")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](38, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](46, 24, "/admin/trash/0")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](54, 26, "lang_testbank_test_dashboard_trash"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](64, 28, "lang_testbank_test_dashboard_support"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("screen", "dash");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checkNewFeatureNotice", ctx_r2.checFeatureNotice);
} }
const _c1 = ".maxW1200[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.app[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  max-width: 90%;\n  margin: 0 auto;\n}\n\n.box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid rgba(220, 220, 220, 0.8);\n  color: #222;\n  text-align: center;\n  transition: all 0.5s;\n  display: flex;\n  max-width: 154px;\n  height: 135px;\n  padding: 10px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px !important;\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.07), -10px -10px 20px rgba(255, 255, 255, 0.8);\n}\n\n.box-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.box-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n\n.box-icon-upload[_ngcontent-%COMP%] {\n  color: #2361ae;\n}\n\n.box-icon-search[_ngcontent-%COMP%] {\n  color: #f39c12;\n}\n\n.box-icon-people[_ngcontent-%COMP%] {\n  color: #bf3232;\n}\n\n.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n}\n\n.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n\n.box-icon-qa[_ngcontent-%COMP%] {\n  color: #0984e3;\n}\n\n.box-icon-group[_ngcontent-%COMP%] {\n  color: #0984e3;\n  font-size: 45px;\n}\n\n.circle-count[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  background-color: #ff0000;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 20%;\n  z-index: 1000000;\n  position: absolute;\n}\n\n.text-black[_ngcontent-%COMP%] {\n  color: #222;\n}\n\n.block-list-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n.block-list[_ngcontent-%COMP%] {\n  background: #ececec;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.14);\n  width: 100%;\n  max-height: 300px;\n}\n\n.block-list-bottom[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  border: none;\n  display: flex;\n  align-items: center;\n  color: #707070;\n  background: transparent;\n}\n\n.block-list-bottom[_ngcontent-%COMP%]   .btn-add-text[_ngcontent-%COMP%] {\n  text-transform: initial;\n  margin-left: 2px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  text-transform: initial;\n}\n\n.block-else[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n\n.text-else[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n@media (max-width: 1200px) {\n  .app[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n}\n\n@media (max-width: 1024px) {\n  .circle-count[_ngcontent-%COMP%] {\n    right: 14%;\n  }\n}\n\n@media (max-width: 992px) {\n  .circle-count[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n\n@media (max-width: 468px) {\n  .box[_ngcontent-%COMP%] {\n    max-width: 154px;\n    height: 90px;\n  }\n\n  .box-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .box-icon-group[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  .box-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    height: 35px;\n    width: 35px;\n  }\n\n  .svg-mobile[_ngcontent-%COMP%] {\n    height: 35px !important;\n    width: 35px !important;\n  }\n\n  .box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}";
class DashboardMainComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, envService, dialog, globalNoticeService, switchVersionService) {
        super(commonService);
        this.commonService = commonService;
        this.envService = envService;
        this.dialog = dialog;
        this.globalNoticeService = globalNoticeService;
        this.switchVersionService = switchVersionService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
        this.current_version = '';
        this.global_notice = '';
        this.back_link = '';
        this.returnUrl = '';
        this.checFeatureNotice = false;
    }
    // Redirect utils
    redirectToWebsite() {
        this.commonService.gaEvent('dashboard_click_to_website');
    }
    redirectToExercise() {
        this.commonService.gaEvent('dashboard_click_to_exercise');
    }
    redirectToTestBank() {
        this.commonService.gaEvent('dashboard_click_to_exam');
    }
    redirectToStudentList() {
        this.commonService.gaEvent('dashboard_click_to_student');
    }
    redirectToStatistic() {
        this.commonService.gaEvent('dashboard_click_to_statistic');
    }
    redirectToFaq() {
        this.commonService.gaEvent('dashboard_click_to_faq');
    }
    goToConfirm() {
        this.returnUrl = this.commonService.getMyQueryParam('return_url') || this.commonService.getCurrentUrl();
        var queryString = '?return_url=' + encodeURIComponent(this.returnUrl) + '&confirm_type=confirm_phone';
        this.commonService.myNavigationWithQueryString('/auth/checking_service', queryString);
    }
    getNewFeatureNotice(getRead) {
        this.initStatusObj();
        this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet().subscribe(response => {
            var _a, _b, _c;
            if (response.success == 1) {
                if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.obj) {
                    // show dialog tính năng mới
                    this.checFeatureNotice = true;
                    const dialogRef = this.dialog.open(NewFeatureNoticeDialog, { width: '750px', data: (_b = response.data) === null || _b === void 0 ? void 0 : _b.obj });
                    dialogRef.afterClosed().subscribe(result => {
                        if (result) {
                            try {
                                this.setMarkAsReadFeaturesNotice();
                            }
                            catch (error) {
                                console.log(error);
                            }
                        }
                    });
                }
                else {
                    this.checFeatureNotice = false;
                }
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : '', true);
            }
        }));
    }
    showNewFeatureNotice(eventEmit) {
        this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet(eventEmit ? 1 : 0).subscribe(response => {
            var _a, _b, _c;
            if (response.success == 1) {
                if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.obj) {
                    // show dialog tính năng mới
                    const dialogRef = this.dialog.open(NewFeatureNoticeDialog, { width: '750px', data: (_b = response.data) === null || _b === void 0 ? void 0 : _b.obj });
                    dialogRef.afterClosed().subscribe((result) => { });
                }
            }
            else {
                this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : '', true);
            }
        }));
    }
    setMarkAsReadFeaturesNotice() {
        this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeMarkAsReadGet().subscribe(response => {
            var _a;
            if (response.success == 1) {
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
            }
        }));
    }
    ngOnInit() {
        var _a;
        this.initStatusObj();
        this.current_version = this.envService.getCurrentVersion();
        this.global_notice = (_a = this.envService.getGlobalNotice()) !== null && _a !== void 0 ? _a : '';
        this.switchVersionService.switchDashboard().subscribe((switchResponse) => {
            var _a;
            if (switchResponse == undefined || switchResponse.success == 1) {
                this.switchVersionService.getDashboardStatus(true).subscribe((statusResponse) => {
                    var _a;
                    if (statusResponse == undefined || statusResponse.success == 1) {
                        this.getNewFeatureNotice(0);
                    }
                    else {
                        this.showErrorSnack((_a = statusResponse.message) !== null && _a !== void 0 ? _a : '');
                    }
                });
            }
            else {
                this.showErrorSnack((_a = switchResponse.message) !== null && _a !== void 0 ? _a : '');
            }
        });
        this.back_link = '';
        this.commonService.translateMetaData({
            title: 'lang_cms_test_dashboard_title',
            description: 'lang_cms_test_dashboard_description',
            image: 'lang_cms_test_image'
        });
        super.ngOnInit();
    }
}
DashboardMainComponent.ɵfac = function DashboardMainComponent_Factory(t) { return new (t || DashboardMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_2__.EnvService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.GlobalNoticeService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_switch_version_service__WEBPACK_IMPORTED_MODULE_4__.SwitchVersionService)); };
DashboardMainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: DashboardMainComponent, selectors: [["app-test-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 6, consts: [[3, "headerTitle", "switchDashboard"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [1, "mt-3", "app"], [1, "row", "py-4"], [1, "col-12", "col-xl-8"], ["style", "color:red;font-size:16px;", 4, "ngIf"], [1, "row", "py-md-5", "px-1", "mx-0"], [1, "col-sm-4", "col-md-3", "col-4", "py-3", "px-2"], [1, "box", 3, "routerLink", "click"], [1, "box-icon", "box-icon-upload"], ["xmlns", "http://www.w3.org/2000/svg", "height", "45px", "viewBox", "0 0 24 24", "width", "45px", "fill", "#00a7d0", 1, "svg-mobile"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"], [1, "box-text"], [1, "text-black"], [1, "box", 3, "routerLink"], [1, "box-icon", "box-icon-group"], [1, "fa", "fa-handshake"], [1, "box-icon", "box-icon-people"], ["xmlns", "http://www.w3.org/2000/svg", "height", "48px", "viewBox", "0 0 24 24", "width", "48px", "fill", "#bf3232"], ["d", "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"], ["d", "M19 4h-3.5l-1-1h-5l-1 1H5v2h14zM6 7v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm8 7v4h-4v-4H8l4-4 4 4h-2z"], ["href", "https://docs.azota.vn/", "target", "_blank", 1, "box"], [1, "box-icon", "box-icon-qa"], ["xmlns", "http://www.w3.org/2000/svg", "height", "48px", "viewBox", "0 0 24 24", "width", "48px", "fill", "#0984e3"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"], [1, "col-12", "col-xl-4"], [1, "row", "px-1", "mx-0"], [1, "col-md-12", "px-2"], [3, "screen"], [3, "checkNewFeatureNotice", "showNewFeatureNotice"], [2, "color", "red", "font-size", "16px"]], template: function DashboardMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, DashboardMainComponent_azt_loading_effect_2_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, DashboardMainComponent_ng_template_3_Template, 70, 40, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 4, "lang_testbank_test_dashboard_header_title"))("switchDashboard", ctx.statusObj.loading ? false : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r1);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__.AztLoadingEffectComponent, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_6__.HeaderBackendComponent, _azota_ui_azt_list_questions_controller_component__WEBPACK_IMPORTED_MODULE_7__.AztListQuestionsComponent, _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_8__.TestbankBackendFooterComponent, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__.MyLocalizePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__.MytranslatePipe], styles: [_c1] });
class NewFeatureNoticeDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.isNotShowAgain = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.UntypedFormControl(false);
    }
    ngOnInit() { }
    onNoClick() {
        this.dialogRef.close(this.isNotShowAgain.value); // đóng dialog
    }
}
NewFeatureNoticeDialog.ɵfac = function NewFeatureNoticeDialog_Factory(t) { return new (t || NewFeatureNoticeDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA)); };
NewFeatureNoticeDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: NewFeatureNoticeDialog, selectors: [["new-feature-notice-dialog"]], decls: 11, vars: 9, consts: [["mat-dialog-title", ""], [3, "innerHTML"], ["align", "end"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "width", "100%"], [1, "dialog-check", "mt-3"], ["color", "primary", 1, "example-margin", 3, "formControl"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "click"]], template: function NewFeatureNoticeDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 0)(1, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-dialog-actions", 2)(3, "div", 3)(4, "div", 4)(5, "mat-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewFeatureNoticeDialog_Template_button_click_8_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx.data == null ? null : ctx.data.description, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.isNotShowAgain);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 5, "lang_testbank_create_exam_width_file_pdf_not_view"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mat-dialog-close", ctx.isNotShowAgain.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 7, "lang_buttom_close"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlDirective, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__.MytranslatePipe], styles: [_c1] });


/***/ }),

/***/ 29234:
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-welcome/controller.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardWelcomeComponent": () => (/* binding */ DashboardWelcomeComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);








const _c0 = function (a0) { return [a0]; };
class DashboardWelcomeComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService) {
        super(commonService);
        this.commonService = commonService;
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
DashboardWelcomeComponent.ɵfac = function DashboardWelcomeComponent_Factory(t) { return new (t || DashboardWelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
DashboardWelcomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardWelcomeComponent, selectors: [["dashboard-welcome"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 8, consts: [[3, "headerTitle"], [1, "app"], [1, "container"], [1, "dashboard"], [1, "dashboard-title"], [1, "dashboard-desc"], ["href", "https://docs.azota.vn", "target", "_blank"], ["mat-raised-button", "", 1, "btn-azt-primary", 3, "routerLink"]], template: function DashboardWelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Ch\u00E0o m\u1EEBng b\u1EA1n \u0111\u1EBFn v\u1EDBi Azota ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " B\u1EA1n c\u00F3 th\u1EC3 t\u1EA1o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "B\u00E0i t\u1EADp");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u0110\u1EC1 thi");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u0110\u1EC1 ki\u1EC3m tra");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " ho\u1EB7c t\u1EA1o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "B\u1EA3ng \u0111\u00E1p \u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " \u0111\u1EC3 t\u1EF1 \u0111\u1ED9ng ch\u1EA5m b\u00E0i l\u00E0m offline c\u1EE7a h\u1ECDc sinh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "T\u00ECm hi\u1EC3u th\u00EAm");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "mylocalize");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " T\u1EA1o m\u1EDBi");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "lang_testbank_test_dashboard_header_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 4, "/admin/testbank/create-new-document/0")));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_2__.HeaderBackendComponent, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__.MyLocalizePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__.MytranslatePipe], styles: [".dashboard[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.dashboard-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n\n.app[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.dashboard-desc[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-bottom: 25px;\n  max-width: 500px;\n}\n\n.btn-azt-primary[_ngcontent-%COMP%] {\n  text-transform: inherit;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 5px 50px;\n}"] });


/***/ }),

/***/ 82877:
/*!**************************************************************!*\
  !*** ./src/app/dashboard/masterpage/controller.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardMasterPageComponent": () => (/* binding */ DashboardMasterPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 74202);



class DashboardMasterPageComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
}
DashboardMasterPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵDashboardMasterPageComponent_BaseFactory; return function DashboardMasterPageComponent_Factory(t) { return (ɵDashboardMasterPageComponent_BaseFactory || (ɵDashboardMasterPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DashboardMasterPageComponent)))(t || DashboardMasterPageComponent); }; }();
DashboardMasterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardMasterPageComponent, selectors: [["app-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["id", "testbank-layout"]], template: function DashboardMasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".header-container[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  box-shadow: rgba(169, 151, 151, 0.24) 0px 1px 7px;\n}\n\n.btn-donate[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  text-transform: inherit;\n  font-size: 14px;\n  color: #3C8DBC;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 15px;\n  transition: all 0.5s;\n}\n\n.btn-donate[_ngcontent-%COMP%]:hover {\n  color: #204e69;\n}\n\n.btn-donate[_ngcontent-%COMP%]:hover   .donate-icon[_ngcontent-%COMP%] {\n  animation: bounce 1.2s 2s 8;\n}\n\n.donate-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  animation: bounce 1.2s 2s 8;\n}\n\n@keyframes bounce {\n  from, 20%, 53%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0);\n  }\n  40%, 43% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -14px, 0) scaleY(1.1) rotate(-15deg);\n  }\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -7px, 0) scaleY(1.05) rotate(15deg);\n  }\n  80% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0) scaleY(0.95) rotate(0);\n  }\n  90% {\n    transform: translate3d(0, -2px, 0) scaleY(1.02) rotate(0);\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .donate-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .btn-donate[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}"] });


/***/ }),

/***/ 2829:
/*!********************************************!*\
  !*** ./src/app/dashboard/module.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 51908);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-pdf-viewer */ 53135);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 43189);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-image-cropper */ 87414);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 91851);
/* harmony import */ var src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/azota-ui/azota-ui.module */ 47470);
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ 75658);
/* harmony import */ var src_app_dashboard_dashboard_main_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dashboard/dashboard-main/controller.component */ 43037);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _dashboard_main_v1_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-main-v1/controller.component */ 17710);
/* harmony import */ var _dashboard_welcome_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-welcome/controller.component */ 29234);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masterpage/controller.component */ 82877);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routing.module */ 80237);
/* harmony import */ var _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/footer/controller.component */ 42933);
/* harmony import */ var _utils_school_info_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/school-info/controller.component */ 78288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 5000);




















class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MyMaterialModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__.EditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.MyPipeModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__.PdfViewerModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_19__.ImageCropperModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_1__.AzotaUiModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_8__.DashboardRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [src_app_dashboard_dashboard_main_controller_component__WEBPACK_IMPORTED_MODULE_3__.DashboardMainComponent,
        _dashboard_welcome_controller_component__WEBPACK_IMPORTED_MODULE_6__.DashboardWelcomeComponent,
        src_app_dashboard_dashboard_main_controller_component__WEBPACK_IMPORTED_MODULE_3__.NewFeatureNoticeDialog,
        _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_7__.DashboardMasterPageComponent,
        _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_9__.TestbankBackendFooterComponent,
        _utils_school_info_controller_component__WEBPACK_IMPORTED_MODULE_10__.SchoolInfoComponent,
        _dashboard_main_v1_controller_component__WEBPACK_IMPORTED_MODULE_5__.DashboardMainV1Component,
        _dashboard_main_v1_controller_component__WEBPACK_IMPORTED_MODULE_5__.NewFeatureNoticeOldDialog], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MyMaterialModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__.EditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.MyPipeModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__.PdfViewerModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_19__.ImageCropperModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_1__.AzotaUiModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_8__.DashboardRoutingModule] }); })();


/***/ }),

/***/ 80237:
/*!*********************************************!*\
  !*** ./src/app/dashboard/routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);
/* harmony import */ var src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auth_guards/auth.front.guard */ 45668);
/* harmony import */ var _dashboard_main_v1_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-main-v1/controller.component */ 17710);
/* harmony import */ var _dashboard_main_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-main/controller.component */ 43037);
/* harmony import */ var _dashboard_welcome_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-welcome/controller.component */ 29234);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masterpage/controller.component */ 82877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);









const DashboardRoutes = [
    {
        path: '',
        component: _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_4__.DashboardMasterPageComponent,
        canActivate: [src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__.AuthFrontGuard],
        children: [
            { path: 'dashboard', component: _dashboard_main_controller_component__WEBPACK_IMPORTED_MODULE_2__.DashboardMainComponent },
            { path: 'dashboard-welcome', component: _dashboard_welcome_controller_component__WEBPACK_IMPORTED_MODULE_3__.DashboardWelcomeComponent },
            { path: 'dashboard-v1', component: _dashboard_main_v1_controller_component__WEBPACK_IMPORTED_MODULE_1__.DashboardMainV1Component }
        ]
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(DashboardRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_7__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_7__.LocalizeRouterModule] }); })();


/***/ }),

/***/ 42933:
/*!****************************************************************!*\
  !*** ./src/app/dashboard/utils/footer/controller.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestbankBackendFooterComponent": () => (/* binding */ TestbankBackendFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var src_app_core_services_time_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/time.service */ 72491);
/* harmony import */ var src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/redirect.service */ 42873);
/* harmony import */ var src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/browser.storage.service */ 34782);
/* harmony import */ var src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/global.service */ 54209);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _school_info_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../school-info/controller.component */ 78288);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);

















function TestbankBackendFooterComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate3"](" ", ctx_r2.user_obj.id, ".", ctx_r2.user_obj.fullName, ".Zalo:", ctx_r2.user_obj.zaloId, ". ");
} }
function TestbankBackendFooterComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Version: ", ctx_r3.current_version, " ");
} }
function TestbankBackendFooterComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "anonymousFullName");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "anonymousPhone");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate3"](" ", ctx_r4.user_obj.id, ".", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 3, ctx_r4.user_obj), ".", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 5, ctx_r4.user_obj.phone || ""), ". ");
} }
function TestbankBackendFooterComponent_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Version: ", ctx_r5.current_version, " ");
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { confirm_type: "forgot_password" }; };
function TestbankBackendFooterComponent_div_0_p_41_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p")(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TestbankBackendFooterComponent_div_0_p_41_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.clickSupport()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TestbankBackendFooterComponent_div_0_p_41_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r9.redirectToError()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TestbankBackendFooterComponent_div_0_p_41_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r10.redirectToErrorexception()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " Js exception ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TestbankBackendFooterComponent_div_0_p_41_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r11.redirectToExceptionLog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, " .Net exception ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TestbankBackendFooterComponent_div_0_p_41_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r12.redirectToUpdateConfig()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TestbankBackendFooterComponent_div_0_p_41_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r13.redirectToGzipTool()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, " Gzip tool ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](25, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](28, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, " Decode Json Tool ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TestbankBackendFooterComponent_div_0_p_41_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r14.redirectToAddSchool()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](33, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TestbankBackendFooterComponent_div_0_p_41_Template_a_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r15.redirectToAddNewFeaturesNotice()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](37, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 9, "lang_testbank_utils_footer_support_customer"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 11, "lang_testbank_utils_footer_customer_error"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 13, "lang_testbank_utils_footer_edit_configuration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](25, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 15, "/auth/checking_service")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](27, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](25, 17, "lang_testbank_utils_footer_forgot_pass_firebase"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](28, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](28, 19, "/super-role/json-tool")));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](33, 21, "lang_testbank_utils_footer_add_school"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](37, 23, "lang_testbank_utils_footer_new_feature"), " ");
} }
function TestbankBackendFooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 2)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, TestbankBackendFooterComponent_div_0_span_4_Template, 2, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, TestbankBackendFooterComponent_div_0_span_5_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, TestbankBackendFooterComponent_div_0_span_6_Template, 4, 7, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, TestbankBackendFooterComponent_div_0_span_7_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "p")(9, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TestbankBackendFooterComponent_div_0_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r16.clickSchoolInfo()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TestbankBackendFooterComponent_div_0_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r18.clickShowNewFeatureNotice()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "p")(22, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](25, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TestbankBackendFooterComponent_div_0_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r19.redirectToCreateQrCode()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](29, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](32, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "https://facebook.com/groups/azota.vn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](37, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "https://www.facebook.com/azotavn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](41, TestbankBackendFooterComponent_div_0_p_41_Template, 38, 30, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 15, "lang_homework_utils_footer_account"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.user_obj.zaloId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.user_obj.zaloId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.user_obj.zaloId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.user_obj.zaloId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](35, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 17, "/student/dashboard/0")));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 19, "lang_testbank_utils_footer_go_to_student"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 21, "lang_testbank_utils_footer_infomation_school"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](20, 23, "lang_testbank_utils_footer_new_feature"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](37, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 25, "/auth/login-scan/0")));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](25, 27, "lang_testbank_utils_footer_qr_login"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](29, 29, "lang_testbank_utils_footer_qr_forgot_password"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](32, 31, "lang_testbank_utils_footer_join_group_support"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](37, 33, "lang_testbank_utils_footer_follow_fanpage"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.user_obj.id == 1);
} }
function TestbankBackendFooterComponent_app_school_info_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-school-info", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("closeDialog", function TestbankBackendFooterComponent_app_school_info_1_Template_app_school_info_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r20.closeSchoolInfo($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isShow", ctx_r1.isShowSchoolInfo)("infoSchool", ctx_r1.infoSchool);
} }
class TestbankBackendFooterComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(authService, baseApiService, commonService, dialog, timeService, redirectService, browserStorageService, globalService, envService, ngZone) {
        super(commonService);
        this.authService = authService;
        this.baseApiService = baseApiService;
        this.commonService = commonService;
        this.dialog = dialog;
        this.timeService = timeService;
        this.redirectService = redirectService;
        this.browserStorageService = browserStorageService;
        this.globalService = globalService;
        this.envService = envService;
        this.ngZone = ngZone;
        this.current_version = '';
        this.user_obj = { id: 0 };
        this.isShowSchoolInfo = false;
        this.infoSchool = false;
        this.isRunningCheckFB = false;
        this.showNewFeatureNotice = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.checkNewFeatureNotice = true;
    }
    clickShowNewFeatureNotice() {
        this.showNewFeatureNotice.emit(true);
    }
    clickSupport() {
        this.redirectService.redirectToSupport();
    }
    redirectToError() {
        this.commonService.myNavigation('/super-role/report_error');
    }
    redirectToExceptionLog() {
        this.commonService.myNavigation('/super-role/exception_log');
    }
    redirectToErrorexception() {
        this.commonService.myNavigation('/super-role/report_exception');
    }
    redirectToAddSchool() {
        this.commonService.myNavigation('/super-role/add_school');
    }
    redirectToAddNewFeaturesNotice() {
        this.commonService.myNavigation('/super-role/add_new_feature_notice');
    }
    redirectToListFaq() {
        this.commonService.myNavigation('/auth/list-faq');
    }
    redirectToUpdateConfig() {
        this.commonService.myNavigation('/super-role/update-config');
    }
    redirectToGzipTool() {
        this.commonService.myNavigation('/super-role/gzip-tool');
    }
    redirectToCreateQrCode() {
        this.commonService.myNavigation('/auth/create-qr-forgot-pass/0');
    }
    clickSchoolInfo() {
        this.isShowSchoolInfo = true;
    }
    closeSchoolInfo(event) {
        if (event !== false) {
            this.infoSchool = event;
        }
        this.isShowSchoolInfo = false;
    }
    checkSchoolInfo() {
        if (!this.checkNewFeatureNotice) {
            this.authService.apiAuthGetSchoolInfoGet().subscribe((result) => {
                var _a, _b, _c, _d;
                if (result && ((_a = result.data) === null || _a === void 0 ? void 0 : _a.obj) == null) {
                    // Check cache show school
                    var timeBtnBack = this.browserStorageService.getSimpleStorage('timeClickBack');
                    if (timeBtnBack) {
                        var timeBtnBackDate = new Date(timeBtnBack);
                        let timeDiff = this.timeService.getDiffDateNow(timeBtnBackDate);
                        if (timeDiff >= 2) {
                            this.isShowSchoolInfo = true;
                        }
                    }
                    else {
                        this.isShowSchoolInfo = true;
                    }
                }
                else if (((_b = result.data) === null || _b === void 0 ? void 0 : _b.obj) !== null) {
                    this.infoSchool = (_d = (_c = result.data) === null || _c === void 0 ? void 0 : _c.obj) !== null && _d !== void 0 ? _d : false;
                }
            });
        }
    }
    waitFacebookLikeButton(again) {
        if (!this.isRunningCheckFB || again) {
            this.isRunningCheckFB = true;
            try {
                if (FB && FB.XFBM) {
                    FB.XFBML.parse();
                    this.isRunningCheckFB = false;
                }
                else {
                    setTimeout(() => {
                        this.waitFacebookLikeButton(true);
                    }, 300);
                }
            }
            catch (ex) {
                setTimeout(() => {
                    this.waitFacebookLikeButton(true);
                }, 300);
            }
        }
    }
    ngOnInit() {
        this.current_version = this.envService.getCurrentVersion();
        this.checkSchoolInfo();
        this.user_obj = this.baseApiService.getUserObj();
        this.globalService.loginMessage.subscribe(message => {
            this.user_obj = this.baseApiService.getUserObj();
        });
        super.ngOnInit();
        this.ngZone.runOutsideAngular(() => {
            this.waitFacebookLikeButton(false);
        });
    }
}
TestbankBackendFooterComponent.ɵfac = function TestbankBackendFooterComponent_Factory(t) { return new (t || TestbankBackendFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_time_service__WEBPACK_IMPORTED_MODULE_4__.TimeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_5__.RedirectService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_6__.BrowserStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_7__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_8__.EnvService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone)); };
TestbankBackendFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: TestbankBackendFooterComponent, selectors: [["testbank-backend-footer"]], inputs: { checkNewFeatureNotice: "checkNewFeatureNotice" }, outputs: { showNewFeatureNotice: "showNewFeatureNotice" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["class", "text-center mt-3 pb-80", 4, "ngIf"], [3, "isShow", "infoSchool", "closeDialog", 4, "ngIf"], [1, "text-center", "mt-3", "pb-80"], [4, "ngIf"], [3, "routerLink"], [2, "color", "#007bff", 3, "click"], [1, "text-center"], ["href", "https://www.facebook.com/groups/azota.vn", "target", "_blank"], ["href", "https://www.facebook.com/azotavn", "target", "_blank"], ["data-href", "https://www.facebook.com/azotavn", "data-width", "", "data-layout", "standard", "data-action", "like", "data-size", "large", "data-share", "true", 1, "text-center", "mb-3", "fb-like"], [2, "color", "#007bff", 3, "routerLink", "queryParams"], [2, "color", "#007bff", 3, "routerLink"], [3, "isShow", "infoSchool", "closeDialog"]], template: function TestbankBackendFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, TestbankBackendFooterComponent_div_0_Template, 42, 39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, TestbankBackendFooterComponent_app_school_info_1_Template, 1, 2, "app-school-info", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.user_obj.id != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isShowSchoolInfo);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _school_info_controller_component__WEBPACK_IMPORTED_MODULE_9__.SchoolInfoComponent, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__.AnonymousPhone, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__.AnonymousFullName, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_15__.LocalizeRouterPipe], encapsulation: 2 });


/***/ }),

/***/ 78288:
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/utils/school-info/controller.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolInfoComponent": () => (/* binding */ SchoolInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 22313);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/browser.storage.service */ 34782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 1729);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 67322);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 74107);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);















function SchoolInfoComponent_div_0_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", location_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", location_r6.name, " ");
} }
function SchoolInfoComponent_div_0_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", level_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", level_r7.name, " ");
} }
function SchoolInfoComponent_div_0_div_20_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", department_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", department_r9.name, " ");
} }
function SchoolInfoComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "mat-form-field", 9)(2, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function SchoolInfoComponent_div_0_div_20_Template_mat_select_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.department_select = $event); })("selectionChange", function SchoolInfoComponent_div_0_div_20_Template_mat_select_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.selectDepartment($event.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SchoolInfoComponent_div_0_div_20_mat_option_4_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "lang_testbank_utils_school_info_select_department"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r3.department_select);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.departments);
} }
function SchoolInfoComponent_div_0_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const school_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", school_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", school_r13.name, " ");
} }
function SchoolInfoComponent_div_0_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SchoolInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SchoolInfoComponent_div_0_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.btnCloseDialog(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 7)(10, "div", 8)(11, "mat-form-field", 9)(12, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function SchoolInfoComponent_div_0_Template_mat_select_valueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.location_select = $event); })("selectionChange", function SchoolInfoComponent_div_0_Template_mat_select_selectionChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.selectLocation($event.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SchoolInfoComponent_div_0_mat_option_14_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 8)(16, "mat-form-field", 9)(17, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function SchoolInfoComponent_div_0_Template_mat_select_valueChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.level_select = $event); })("selectionChange", function SchoolInfoComponent_div_0_Template_mat_select_selectionChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.selectLevel($event.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, SchoolInfoComponent_div_0_mat_option_19_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, SchoolInfoComponent_div_0_div_20_Template, 5, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 8)(22, "mat-form-field", 9)(23, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function SchoolInfoComponent_div_0_Template_mat_select_valueChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.school_select = $event); })("selectionChange", function SchoolInfoComponent_div_0_Template_mat_select_selectionChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.selectSchool($event.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, SchoolInfoComponent_div_0_mat_option_25_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 15)(27, "div", 16)(28, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SchoolInfoComponent_div_0_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.btnCloseDialog(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SchoolInfoComponent_div_0_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.saveInfo()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, SchoolInfoComponent_div_0_span_32_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 16, "lang_testbank_utils_school_info_note_tutorial"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 18, "lang_testbank_utils_school_info_select_province"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r0.location_select);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.locations);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 20, "lang_testbank_utils_school_info_select_level"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r0.level_select);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.levels);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r0.level_select || 0) <= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 22, "lang_testbank_utils_school_info_select_school"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r0.school_select);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.schools);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 24, "lang_testbank_utils_school_info_later"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 26, "lang_buttom_save"), " ");
} }
class SchoolInfoComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, dom, sanitizer, formBuilder, authService, schoolInfoService, browserStorageService) {
        super(commonService);
        this.commonService = commonService;
        this.dom = dom;
        this.sanitizer = sanitizer;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.schoolInfoService = schoolInfoService;
        this.browserStorageService = browserStorageService;
        this.isShow = false;
        this.infoSchool = false;
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({});
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.departments = [];
        this.levels = [];
        this.schools = [];
        this.locations = [];
        this.location_select = null;
        this.department_select = null;
        this.level_select = null;
        this.school_select = null;
    }
    ngOnInit() {
        var _a, _b;
        if (typeof this.infoSchool != 'boolean') {
            this.location_select = this.infoSchool.provinceId;
            this.level_select = this.infoSchool.typeId;
            if (((_a = this.infoSchool.typeId) !== null && _a !== void 0 ? _a : 0) <= 3) {
                this.GetDistrictsByProvince(() => {
                    if (typeof this.infoSchool != 'boolean') {
                        this.department_select = this.infoSchool.districtId;
                        this.getListSchool(() => {
                            if (typeof this.infoSchool != 'boolean') {
                                this.school_select = this.infoSchool.id;
                            }
                        });
                    }
                });
            }
            else if (((_b = this.infoSchool.typeId) !== null && _b !== void 0 ? _b : 0) > 3) {
                this.getListSchoolByProvince(() => {
                    if (typeof this.infoSchool != 'boolean') {
                        this.school_select = this.infoSchool.id;
                    }
                });
            }
        }
        this.initData();
        this.form = this.formBuilder.group({
            LocationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            LevelName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            DepartmentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            SchoolName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
        super.ngOnInit();
    }
    initData() {
        this.GetProvinces();
        this.GetTypeSchool();
    }
    selectLocation(id) {
        this.location_select = id;
        this.department_select = null;
        this.departments = [];
        this.GetDistrictsByProvince();
    }
    selectLevel(id) {
        this.schools = [];
        this.school_select = null;
        this.level_select = id;
        if (id <= 3) {
            this.getListSchool();
            this.GetDistrictsByProvince();
        }
        else if (id > 3) {
            this.getListSchoolByProvince();
        }
    }
    selectDepartment(id) {
        this.schools = [];
        this.school_select = null;
        this.department_select = id;
        this.getListSchool();
    }
    selectSchool(id) {
        this.school_select = id;
    }
    saveInfo() {
        var _a;
        if (this.school_select) {
            if (this.school_select === -1) {
                this.btnCloseDialog(true);
            }
            else {
                let dataCall = { schoolId: (_a = this.school_select) !== null && _a !== void 0 ? _a : 0 };
                this.authService.apiAuthPushSchoolInfoPost(dataCall)
                    .subscribe((result) => {
                    var _a, _b;
                    if (result && result.success == 1) {
                        this.showSuccessSnack('Cập nhật thông tin thành công.');
                        this.btnCloseDialog((_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.obj) !== null && _b !== void 0 ? _b : false);
                    }
                    else {
                        this.showErrorSnack('Cập nhật thông tin không thành công. Vui lòng thao tác lại.');
                    }
                });
            }
        }
        else {
            this.commonService.snackError('Vui lòng chọn trường mình đang giảng dạy', '');
        }
    }
    btnCloseDialog(data) {
        if (data === false) {
            var now_date = new Date();
            this.browserStorageService.saveSimpleStorage('timeClickBack', now_date.toLocaleString());
        }
        if (data === true) {
            var now_date = new Date();
            now_date.setFullYear(now_date.getFullYear() + 1);
            this.browserStorageService.saveSimpleStorage('timeClickBack', now_date.toLocaleString());
            data = false;
        }
        this.closeDialog.emit(data);
    }
    GetProvinces() {
        this.schoolInfoService.apiSchoolInfoGetProvincesGet()
            .subscribe((result) => {
            var _a, _b;
            if (result) {
                this.locations = (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.objs) !== null && _b !== void 0 ? _b : new Array();
                this.locations = this.sortName(this.locations);
            }
        });
    }
    GetTypeSchool() {
        this.schoolInfoService.apiSchoolInfoGetTypeSchoolGet()
            .subscribe((result) => {
            var _a, _b;
            if (result) {
                this.levels = (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.objs) !== null && _b !== void 0 ? _b : new Array();
            }
        });
    }
    GetDistrictsByProvince(action = () => { }) {
        var _a;
        this.schoolInfoService.apiSchoolInfoGetDistrictsByProvinceGet((_a = this.location_select) !== null && _a !== void 0 ? _a : 0)
            .subscribe((result) => {
            var _a, _b;
            if (result) {
                this.departments = (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.objs) !== null && _b !== void 0 ? _b : new Array();
                this.departments = this.sortName(this.departments);
                action();
            }
        });
    }
    getListSchoolByProvince(action = () => { }) {
        if (this.location_select && this.level_select) {
            this.schoolInfoService.apiSchoolInfoGetSchoolsByProvinceGet(this.location_select, this.level_select)
                .subscribe((result) => {
                var _a, _b, _c, _d;
                if (result) {
                    this.schools = (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.objs) !== null && _b !== void 0 ? _b : new Array();
                    this.schools = this.sortName(this.schools);
                    this.schools.push({
                        id: -1,
                        name: 'Khác',
                        districtId: (_c = this.department_select) !== null && _c !== void 0 ? _c : 0,
                        typeId: (_d = this.level_select) !== null && _d !== void 0 ? _d : 0
                    });
                    action();
                }
            });
        }
    }
    getListSchool(action = () => { }) {
        if (this.department_select && this.level_select) {
            this.schoolInfoService.apiSchoolInfoGetSchoolsByDistrictGet(this.department_select, this.level_select)
                .subscribe((result) => {
                var _a, _b, _c, _d;
                if (result) {
                    this.schools = (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.objs) !== null && _b !== void 0 ? _b : new Array();
                    this.schools = this.sortName(this.schools);
                    this.schools.push({
                        id: -1,
                        name: 'Khác',
                        districtId: (_c = this.department_select) !== null && _c !== void 0 ? _c : 0,
                        typeId: (_d = this.level_select) !== null && _d !== void 0 ? _d : 0
                    });
                    action();
                }
            });
        }
    }
    sortName(arr) {
        arr.sort((a, b) => {
            var _a, _b, _c, _d;
            return (_d = (_a = a.name) === null || _a === void 0 ? void 0 : _a.trim().localeCompare((_c = (_b = b.name) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : '')) !== null && _d !== void 0 ? _d : -1;
        });
        return arr;
    }
}
SchoolInfoComponent.ɵfac = function SchoolInfoComponent_Factory(t) { return new (t || SchoolInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.SchoolInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_3__.BrowserStorageService)); };
SchoolInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SchoolInfoComponent, selectors: [["app-school-info"]], inputs: { isShow: "isShow", infoSchool: "infoSchool" }, outputs: { closeDialog: "closeDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg container-fluid ", 4, "ngIf"], [1, "school-info_bg", "container-fluid"], [1, "school-info", "W-600"], [2, "max-height", "80vh", "overflow-y", "auto"], [1, "text-center", 2, "margin-right", "20px"], [1, "h5", "para_respon", "font-weight-normal"], [1, "close-btn", 3, "click"], [2, "margin-right", "20px", 3, "formGroup"], [1, "form-group"], ["appearance", "fill"], ["name", "LocationName", 3, "value", "placeholder", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "LevelName", 3, "value", "placeholder", "valueChange", "selectionChange"], ["class", "form-group", 4, "ngIf"], ["name", "SchoolName", 3, "value", "placeholder", "valueChange", "selectionChange"], [1, "d-flex", "float-right", "mt-3", 2, "margin-right", "20px"], [1, "azt-block-button"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-primary", 2, "margin-left", "15px", 3, "disabled", "click"], [4, "ngIf"], [3, "value"], ["name", "DepartmentName", 3, "value", "placeholder", "valueChange", "selectionChange"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function SchoolInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SchoolInfoComponent_div_0_Template, 35, 28, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShow);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5607843137);\n  z-index: 90;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100vh;\n}\n\n.school-info[_ngcontent-%COMP%] {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n  padding-left: 1.3rem !important;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  background: #FFF;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.W-1200[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\n@media screen and (min-width: 500px) {\n  .W-600[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .W-600[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n\n@keyframes smooth_show {\n  0% {\n    top: 0;\n  }\n  100% {\n    top: 25%;\n  }\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n@media (max-width: 576px) {\n  .para_respon[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n    text-align: justify !important;\n    line-height: 1.4;\n  }\n\n  @keyframes smooth_show {\n    0% {\n      top: 0;\n    }\n    100% {\n      top: 5%;\n    }\n  }\n}"] });


/***/ })

}]);