"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_teacher_group_module_module_ts"],{

/***/ 86480:
/*!*************************************************************!*\
  !*** ./src/app/teacher_group/group/controller.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupComponent": () => (/* binding */ GroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var src_app_core_services_sort_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/sort.service */ 86317);










const _c0 = ["drawer"];
function GroupComponent_azt_loading_effect_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "azt-loading-effect");
} }
const _c1 = function (a0) { return { "class-active": a0 }; };
function GroupComponent_ng_template_3_div_10_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_div_10_div_2_div_1_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const itemGroup_r16 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.clickGroup(itemGroup_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 31)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-menu", null, 32)(11, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_div_10_div_2_div_1_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const itemGroup_r16 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.deleteGroup(itemGroup_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_div_10_div_2_div_1_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const itemGroup_r16 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.editGroup(itemGroup_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const itemGroup_r16 = ctx.$implicit;
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c1, itemGroup_r16.id == ctx_r15.groupId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "group_id_" + itemGroup_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itemGroup_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 6, "lang_buttom_delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 8, "lang_buttom_edit"));
} }
function GroupComponent_ng_template_3_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GroupComponent_ng_template_3_div_10_div_2_div_1_Template, 23, 12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "appFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r13.teacherGroupObj == null ? null : ctx_r13.teacherGroupObj.groups, ctx_r13.searchKey.value));
} }
function GroupComponent_ng_template_3_div_10_div_3_div_1_azt_create_avatar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "azt-create-avatar", 40);
} if (rf & 2) {
    const itemTeacher_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("matTooltip", "id: ", itemTeacher_r23.teacherId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nameCreateAvatar", itemTeacher_r23.fullName)("size", 30);
} }
function GroupComponent_ng_template_3_div_10_div_3_div_1_azt_create_avatar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "azt-create-avatar", 41);
} if (rf & 2) {
    const itemTeacher_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nameCreateAvatar", itemTeacher_r23.fullName)("size", 30);
} }
function GroupComponent_ng_template_3_div_10_div_3_div_1_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ch\u01B0a \u0111\u0103ng k\u00FD");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GroupComponent_ng_template_3_div_10_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_div_10_div_3_div_1_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const itemTeacher_r23 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.clickUser(itemTeacher_r23)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GroupComponent_ng_template_3_div_10_div_3_div_1_azt_create_avatar_2_Template, 1, 3, "azt-create-avatar", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GroupComponent_ng_template_3_div_10_div_3_div_1_azt_create_avatar_3_Template, 1, 2, "azt-create-avatar", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 36)(5, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, GroupComponent_ng_template_3_div_10_div_3_div_1_p_9_Template, 2, 0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 31)(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-menu", null, 32)(15, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_div_10_div_3_div_1_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const itemTeacher_r23 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.deleteTeacher(itemTeacher_r23)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_div_10_div_3_div_1_Template_button_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const itemTeacher_r23 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.editTeacher(itemTeacher_r23)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const itemTeacher_r23 = ctx.$implicit;
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, itemTeacher_r23.id == ctx_r22.teacherId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "teacher_id_" + itemTeacher_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", itemTeacher_r23.teacherId != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", itemTeacher_r23.teacherId == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itemTeacher_r23.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itemTeacher_r23.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", itemTeacher_r23.teacherId == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 10, "lang_buttom_delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 12, "lang_buttom_edit"));
} }
function GroupComponent_ng_template_3_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GroupComponent_ng_template_3_div_10_div_3_div_1_Template, 27, 16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "appFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r14.teacherGroupObj == null ? null : ctx_r14.teacherGroupObj.teachers, ctx_r14.searchKey.value));
} }
const _c2 = function () { return { suppressScrollX: true }; };
function GroupComponent_ng_template_3_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "perfect-scrollbar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GroupComponent_ng_template_3_div_10_div_2_Template, 3, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GroupComponent_ng_template_3_div_10_div_3_Template, 3, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c2))("scrollIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.teacherGroupObj == null ? null : ctx_r4.teacherGroupObj.groups);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.teacherGroupObj == null ? null : ctx_r4.teacherGroupObj.teachers);
} }
function GroupComponent_ng_template_3_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43)(1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "lang_teacher_group_group_note_not_found_group_and_teacher"));
} }
function GroupComponent_ng_template_3_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
function GroupComponent_ng_template_3_ng_template_23_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_ng_template_23_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r38.toggleDrawer()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " menu_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, "lang_teacher_group_group_open_menu"));
} }
function GroupComponent_ng_template_3_ng_template_23_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_ng_template_23_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.toggleDrawer()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "menu_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, "lang_teacher_group_group_close_menu"));
} }
function GroupComponent_ng_template_3_ng_template_23_div_6_div_42_azt_create_avatar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "azt-create-avatar", 40);
} if (rf & 2) {
    const itemTeacher_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("matTooltip", "id: ", itemTeacher_r48.teacherId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nameCreateAvatar", itemTeacher_r48.fullName)("size", 30);
} }
function GroupComponent_ng_template_3_ng_template_23_div_6_div_42_azt_create_avatar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "azt-create-avatar", 41);
} if (rf & 2) {
    const itemTeacher_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nameCreateAvatar", itemTeacher_r48.fullName)("size", 30);
} }
function GroupComponent_ng_template_3_ng_template_23_div_6_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GroupComponent_ng_template_3_ng_template_23_div_6_div_42_azt_create_avatar_1_Template, 1, 3, "azt-create-avatar", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GroupComponent_ng_template_3_ng_template_23_div_6_div_42_azt_create_avatar_2_Template, 1, 2, "azt-create-avatar", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 36)(4, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_ng_template_23_div_6_div_42_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55); const itemTeacher_r48 = restoredCtx.$implicit; const i_r49 = restoredCtx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r54.deleteDialog(itemTeacher_r48, i_r49)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemTeacher_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", itemTeacher_r48.teacherId != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", itemTeacher_r48.teacherId == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itemTeacher_r48.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 4, "lang_buttom_delete"));
} }
function GroupComponent_ng_template_3_ng_template_23_div_6_div_60_div_1_azt_create_avatar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "azt-create-avatar", 40);
} if (rf & 2) {
    const itemTeacher_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("matTooltip", "id:", itemTeacher_r57.teacherId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nameCreateAvatar", itemTeacher_r57.fullName)("size", 30);
} }
function GroupComponent_ng_template_3_ng_template_23_div_6_div_60_div_1_azt_create_avatar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "azt-create-avatar", 41);
} if (rf & 2) {
    const itemTeacher_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nameCreateAvatar", itemTeacher_r57.fullName)("size", 30);
} }
function GroupComponent_ng_template_3_ng_template_23_div_6_div_60_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 95);
} }
const _c3 = function (a0) { return { "color-disabled": a0 }; };
function GroupComponent_ng_template_3_ng_template_23_div_6_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 92)(2, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_ng_template_23_div_6_div_60_div_1_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65); const itemTeacher_r57 = restoredCtx.$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r64.addMemberInGroup(itemTeacher_r57)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GroupComponent_ng_template_3_ng_template_23_div_6_div_60_div_1_azt_create_avatar_3_Template, 1, 3, "azt-create-avatar", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, GroupComponent_ng_template_3_ng_template_23_div_6_div_60_div_1_azt_create_avatar_4_Template, 1, 2, "azt-create-avatar", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 36)(6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, GroupComponent_ng_template_3_ng_template_23_div_6_div_60_div_1_div_8_Template, 1, 0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemTeacher_r57 = ctx.$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r56.isLoadingMoreMembers == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c3, itemTeacher_r57.inGroup));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", itemTeacher_r57.teacherId != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", itemTeacher_r57.teacherId == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", itemTeacher_r57.fullName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r56.isLoadingMoreMembers == itemTeacher_r57.id);
} }
function GroupComponent_ng_template_3_ng_template_23_div_6_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GroupComponent_ng_template_3_ng_template_23_div_6_div_60_div_1_Template, 9, 8, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "appFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r45.dataTeacherSearch, ctx_r45.searchValue.value));
} }
function GroupComponent_ng_template_3_ng_template_23_div_6_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 96)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "lang_not_data"));
} }
function GroupComponent_ng_template_3_ng_template_23_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60)(1, "div", 61)(2, "div", 62)(3, "h3", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 65)(9, "button", 66)(10, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_ng_template_23_div_6_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r66.deleteAllTeacherGroup()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-menu", null, 70)(23, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_ng_template_23_div_6_Template_div_click_23_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 72)(25, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "form", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "textarea", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 76)(31, "small", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 78)(35, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_ng_template_23_div_6_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r67); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r69.addAllTeacherToGroup()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, GroupComponent_ng_template_3_ng_template_23_div_6_div_42_Template, 9, 6, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 82)(44, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_ng_template_23_div_6_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r67); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r70.addMember()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](49, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-menu", null, 32)(52, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_ng_template_23_div_6_Template_div_click_52_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](55, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 86)(59, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, GroupComponent_ng_template_3_ng_template_23_div_6_div_60_Template, 3, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, GroupComponent_ng_template_3_ng_template_23_div_6_ng_template_61_Template, 4, 3, "ng-template", null, 87, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22);
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](51);
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](62);
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 16, "lang_teacher_group_group_member_in_group"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r36.groupObj == null ? null : ctx_r36.groupObj.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 18, "lang_teacher_group_group_more"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 20, "lang_buttom_delete_all"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 22, "lang_teacher_group_group_list_phone_teacher"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r36.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("* ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 24, "lang_teacher_group_group_note_enter_phone"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 26, "lang_buttom_add"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r36.teachersInGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](49, 28, "lang_teacher_group_group_add_member"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](55, 30, "lang_teacher_group_group_search_name_or_phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r36.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r36.dataTeacherSearch)("ngIfElse", _r46);
} }
function GroupComponent_ng_template_3_ng_template_23_div_7_div_16_ng_container_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 113)(1, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function GroupComponent_ng_template_3_ng_template_23_div_7_div_16_ng_container_2_div_1_div_5_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r85); const j_r82 = restoredCtx.index; const i_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r83.onCheckChange($event, i_r77, j_r82)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemPermission_r81 = ctx.$implicit;
    const j_r82 = ctx.index;
    const i_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "role_" + i_r77 + "_" + j_r82)("checked", itemPermission_r81.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", "role_" + i_r77 + "_" + j_r82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", itemPermission_r81.description, " ");
} }
function GroupComponent_ng_template_3_ng_template_23_div_7_div_16_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 108)(1, "div", 109)(2, "h3", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GroupComponent_ng_template_3_ng_template_23_div_7_div_16_ng_container_2_div_1_div_5_Template, 4, 4, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", item_r76.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r76.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r76.permissionArray);
} }
function GroupComponent_ng_template_3_ng_template_23_div_7_div_16_ng_container_2_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 113)(1, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function GroupComponent_ng_template_3_ng_template_23_div_7_div_16_ng_container_2_div_2_div_5_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r93); const j_r90 = restoredCtx.index; const i_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r91.onCheckChange($event, i_r77, j_r90)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemPermission_r89 = ctx.$implicit;
    const j_r90 = ctx.index;
    const i_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "role_" + i_r77 + "_" + j_r90)("checked", itemPermission_r89.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", "role_" + i_r77 + "_" + j_r90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", itemPermission_r89.description, " ");
} }
function GroupComponent_ng_template_3_ng_template_23_div_7_div_16_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 108)(1, "div", 109)(2, "h3", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GroupComponent_ng_template_3_ng_template_23_div_7_div_16_ng_container_2_div_2_div_5_Template, 4, 4, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", item_r76.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r76.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r76.permissionArray);
} }
function GroupComponent_ng_template_3_ng_template_23_div_7_div_16_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GroupComponent_ng_template_3_ng_template_23_div_7_div_16_ng_container_2_div_1_Template, 6, 3, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GroupComponent_ng_template_3_ng_template_23_div_7_div_16_ng_container_2_div_2_Template, 6, 3, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r76 = ctx.$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r75.hasPermissionClass.value && item_r76.teamPermisions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r75.hasPermissionClass.value);
} }
function GroupComponent_ng_template_3_ng_template_23_div_7_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 105)(1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GroupComponent_ng_template_3_ng_template_23_div_7_div_16_ng_container_2_Template, 3, 2, "ng-container", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r72.classListData);
} }
function GroupComponent_ng_template_3_ng_template_23_div_7_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 116)(1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "lang_not_data"));
} }
function GroupComponent_ng_template_3_ng_template_23_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 97)(1, "div", 61)(2, "div", 62)(3, "h3", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 98)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, GroupComponent_ng_template_3_ng_template_23_div_7_div_16_Template, 3, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, GroupComponent_ng_template_3_ng_template_23_div_7_ng_template_17_Template, 4, 3, "ng-template", null, 104, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 6, "lang_teacher_group_group_decentralization_in_class"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 8, "lang_teacher_group_group_learn_about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r37.hasPermissionClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 10, "lang_teacher_group_group_vew_class_have_permision"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r37.classListData && ctx_r37.classListData.length > 0)("ngIfElse", _r73);
} }
function GroupComponent_ng_template_3_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GroupComponent_ng_template_3_ng_template_23_a_2_Template, 4, 3, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GroupComponent_ng_template_3_ng_template_23_a_3_Template, 4, 3, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 51)(5, "perfect-scrollbar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GroupComponent_ng_template_3_ng_template_23_div_6_Template, 63, 32, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, GroupComponent_ng_template_3_ng_template_23_div_7_Template, 19, 12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 54)(9, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_ng_template_23_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r96.clickCannel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_ng_template_23_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r97); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r98.saveData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r9.isOpenSideNav || ctx_r9.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.isOpenSideNav && !ctx_r9.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c2))("scrollIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.checkGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.checkRoleUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 8, "lang_buttom_cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 10, "lang_buttom_save"), " ");
} }
function GroupComponent_ng_template_3_app_delete_dialog_25_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-delete-dialog", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeDialog", function GroupComponent_ng_template_3_app_delete_dialog_25_Template_app_delete_dialog_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r99.closeDeleteMemberInGroup($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r10.dataDeleteDialog);
} }
function GroupComponent_ng_template_3_app_add_teacher_26_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-add-teacher", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeDialog", function GroupComponent_ng_template_3_app_add_teacher_26_Template_app_add_teacher_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r101.closeAddTeacher($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r11.dataAddTeacherDialog);
} }
function GroupComponent_ng_template_3_app_add_group_27_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-add-group", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeDialog", function GroupComponent_ng_template_3_app_add_group_27_Template_app_add_group_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r103.closeAddGroup($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r12.dataAddGroupDialog);
} }
const _c4 = function (a0, a1) { return { "w-80": a0, "w-33": a1 }; };
function GroupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function GroupComponent_ng_template_3_Template_div_resize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r105.onResize($event)); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-drawer-container", 4)(2, "mat-drawer", 5, 6)(4, "div", 7)(5, "div", 8)(6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, GroupComponent_ng_template_3_div_10_Template, 4, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, GroupComponent_ng_template_3_ng_template_11_Template, 4, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 14)(14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r107.addTeacher()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupComponent_ng_template_3_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r108.addGroup()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-drawer-content", 17)(21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, GroupComponent_ng_template_3_div_22_Template, 4, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, GroupComponent_ng_template_3_ng_template_23_Template, 15, 13, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, GroupComponent_ng_template_3_app_delete_dialog_25_Template, 1, 1, "app-delete-dialog", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, GroupComponent_ng_template_3_app_add_teacher_26_Template, 1, 1, "app-add-teacher", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, GroupComponent_ng_template_3_app_add_group_27_Template, 1, 1, "app-add-group", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](24);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hasBackdrop", ctx_r2.hasBackdrop);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("opened", ctx_r2.isMobile ? "false" : "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", ctx_r2.mode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](18, _c4, ctx_r2.isMobile, !ctx_r2.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r2.searchKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r2.teacherGroupObj == null ? null : ctx_r2.teacherGroupObj.groups == null ? null : ctx_r2.teacherGroupObj.groups.length) || (ctx_r2.teacherGroupObj == null ? null : ctx_r2.teacherGroupObj.teachers == null ? null : ctx_r2.teacherGroupObj.teachers.length))("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("+ ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 14, "lang_teacher_group_group_add_student"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("+ ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 16, "lang_teacher_group_group_add_group_teacher"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLoadingData)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.dataDeleteDialog.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.dataAddTeacherDialog == null ? null : ctx_r2.dataAddTeacherDialog.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.dataAddGroupDialog == null ? null : ctx_r2.dataAddGroupDialog.isShow);
} }
class GroupComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(activeRoute, commonService, fb, vps, teacherGroupService, permisionTeamService, sortService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.fb = fb;
        this.vps = vps;
        this.teacherGroupService = teacherGroupService;
        this.permisionTeamService = permisionTeamService;
        this.sortService = sortService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({});
        this.isLoadingData = false;
        this.type = 2;
        /* drawer sideNav */
        this.hasBackdrop = false;
        this.mode = 'side';
        /* UI check */
        this.isMobile = false;
        this.isShowActions = true;
        this.isOpenSideNav = true;
        this.addMemberDialog = false;
        this.checkGroup = false;
        this.checkRoleUser = false;
        this.dataDeleteDialog = { isShow: false, index: -1 };
        // search
        this.searchValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('');
        this.searchKey = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('');
        this.classListData = [];
        this.hasPermissionClass = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(false);
        this.dataTeacherSearch = [];
    }
    // for window scroll events
    onScroll() {
        const verticalOffset = window.pageYOffset;
        if (this.isMobile) {
            let nav = document.getElementById('toggle-nav');
            if (verticalOffset > 0) {
                nav === null || nav === void 0 ? void 0 : nav.classList.add('fixed-nav');
            }
            else {
                nav === null || nav === void 0 ? void 0 : nav.classList.remove('fixed-nav');
            }
        }
    }
    clickCannel() {
        if (this.checkGroup && this.checkRoleUser) {
            this.getTeacherInGroup(this.groupId);
        }
        else {
            this.getPermissionMyTeacher(this.teacherId);
        }
    }
    addTeacher() {
        this.dataAddTeacherDialog = { isShow: true, type: 'add_teacher' };
    }
    editTeacher(data) {
        this.dataAddTeacherDialog = { teamTeacherObj: data, isShow: true, type: 'edit_teacher' };
    }
    deleteTeacher(data) {
        this.dataDeleteDialog = { teamTeacherObj: data, groupId: this.groupId, isShow: true, index: 0, type: 'delete_teacher' };
    }
    editGroup(data) {
        this.dataAddGroupDialog = { groupWithTeacherData: data, isShow: true, type: 'edit_group' };
    }
    deleteGroup(data) {
        this.dataDeleteDialog = { groupWithTeacherData: data, groupId: this.groupId, isShow: true, index: 0, type: 'delete_group' };
    }
    addGroup() {
        this.dataAddGroupDialog = { isShow: true, type: 'add_group' };
    }
    addMember() {
        this.addMemberDialog = !this.addMemberDialog;
    }
    closeAddTeacher(done) {
        if (done) {
            this.dataAddTeacherDialog = { isShow: false };
            this.getData();
        }
        else {
            this.dataAddTeacherDialog = { isShow: false };
        }
    }
    closeAddGroup(done) {
        if (done) {
            this.dataAddGroupDialog = { isShow: false };
            this.getData();
        }
        else {
            this.dataAddGroupDialog = { isShow: false };
        }
    }
    clickGroup(group) {
        this.checkGroup = true;
        this.checkRoleUser = true;
        this.groupId = group.id;
        this.teacherId = undefined;
        this.getTeacherInGroup(this.groupId);
        if (this.isMobile) {
            this.toggleDrawer();
        }
        this.commonService.myNavigation('/admin/teacher-group/' + 0 + '/' + this.groupId);
    }
    clickUser(teacher) {
        this.checkGroup = false;
        this.checkRoleUser = true;
        this.teacherId = teacher.id;
        this.groupId = undefined;
        this.getPermissionMyTeacher(teacher.id);
        if (this.isMobile) {
            this.toggleDrawer();
        }
        this.commonService.myNavigation('/admin/teacher-group/' + 1 + '/' + this.teacherId);
    }
    closeDeleteMemberInGroup(done) {
        var _a;
        if (done) {
            switch (done.type) {
                case 'delete_member':
                    this.getTeacherInGroup(this.groupId);
                    if (this.dataDeleteDialog.index) {
                        (_a = this.teachersInGroup) === null || _a === void 0 ? void 0 : _a.splice(this.dataDeleteDialog.index, 1);
                    }
                    this.dataDeleteDialog = { isShow: false, index: -1 };
                    break;
                case 'delete_group':
                    this.getData();
                    this.dataDeleteDialog = { isShow: false, index: -1 };
                    this.commonService.myNavigation('/admin/teacher-group/2/0');
                    break;
                case 'delete_teacher':
                    this.getData();
                    this.dataDeleteDialog = { isShow: false, index: -1 };
                    this.commonService.myNavigation('/admin/teacher-group/2/0');
                    break;
                case 'delete_all_teacher_group':
                    this.getTeacherInGroup(this.groupId);
                    this.dataDeleteDialog = { isShow: false, index: -1 };
                    break;
            }
        }
        else {
            this.dataDeleteDialog = { isShow: false, index: -1 };
        }
    }
    deleteDialog(data, index) {
        this.dataDeleteDialog = { teamTeacherObj: data, groupId: this.groupId, isShow: true, index, type: 'delete_member' };
    }
    deleteAllTeacherGroup() {
        var _a;
        let teacherIds = [];
        (_a = this.teachersInGroup) === null || _a === void 0 ? void 0 : _a.forEach((teacher) => {
            if (!this.commonService.filterArray(teacherIds, teacher.id)) {
                if (teacher.id) {
                    teacherIds.push(teacher.id);
                }
            }
        });
        this.dataDeleteDialog = { groupObj: this.groupObj, teacherIds, type: 'delete_all_teacher_group', isShow: true };
    }
    toggleShowActions() {
        this.isShowActions = !this.isShowActions;
    }
    toggleDrawer() {
        var _a;
        (_a = this.drawer) === null || _a === void 0 ? void 0 : _a.toggle();
        this.isOpenSideNav = !this.isOpenSideNav;
    }
    onResize(event) {
        if (event.target.innerWidth < 1200) {
            this.isMobile = true;
            this.mode = 'over';
            this.hasBackdrop = true;
            this.isShowActions = true;
            this.isOpenSideNav = true;
        }
        else {
            this.isMobile = false;
            this.mode = 'side';
            this.hasBackdrop = false;
            this.isShowActions = true;
            this.isOpenSideNav = true;
        }
    }
    checkWidth() {
        if (window.innerWidth < 1200) {
            this.isMobile = true;
            this.mode = 'over';
            this.isShowActions = true;
            this.hasBackdrop = true;
            this.isOpenSideNav = true;
        }
        else {
            this.isMobile = false;
            this.mode = 'side';
            this.isShowActions = true;
            this.hasBackdrop = false;
        }
    }
    // process Data
    getData() {
        this.initStatusObj();
        this.teacherGroupService.apiTeacherGroupGetObjsGet().subscribe((response) => {
            var _a, _b, _c, _d, _e, _f;
            if (response.success === 1) {
                this.teacherGroupObj = response.data;
                if ((_a = this.teacherGroupObj) === null || _a === void 0 ? void 0 : _a.teachers) {
                    this.teacherGroupObj.teachers = this.sortService.sortFirstNameStudents(this.teacherGroupObj.teachers);
                }
                if (((_b = this.teacherGroupObj) === null || _b === void 0 ? void 0 : _b.groups) && ((_d = (_c = this.teacherGroupObj) === null || _c === void 0 ? void 0 : _c.groups) === null || _d === void 0 ? void 0 : _d.length) > 0) {
                    this.checkGroup = true;
                    this.checkRoleUser = true;
                    this.getTeacherInGroup(this.teacherGroupObj.groups[0].id);
                }
                else {
                    this.checkGroup = false;
                    this.checkRoleUser = false;
                }
                if (((_e = this.teacherGroupObj) === null || _e === void 0 ? void 0 : _e.groups) && this.teacherGroupObj.groups.length === 0 && this.teacherGroupObj.teachers && this.teacherGroupObj.teachers.length > 0) {
                    this.checkGroup = false;
                    this.checkRoleUser = true;
                    this.getPermissionMyTeacher(this.teacherGroupObj.teachers[0].id);
                }
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_f = response.message) !== null && _f !== void 0 ? _f : '', true);
            }
        });
    }
    getTeacherInGroup(id) {
        this.isLoadingData = true;
        this.permisionTeamService.apiPermisionTeamGetAllPermisionWithGroupGet(id).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f;
            if (response.success === 1) {
                this.teachersInGroup = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.teacherObjs;
                this.groupId = (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.groupObj) === null || _c === void 0 ? void 0 : _c.id;
                this.teacherId = undefined;
                this.groupObj = (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.groupObj;
                this.processData((_f = (_e = response.data) === null || _e === void 0 ? void 0 : _e.classObjs) !== null && _f !== void 0 ? _f : []);
                // check Teacher in group;
                setTimeout(() => {
                    this.checkTeacherInGroup();
                }, 1000);
            }
            else {
                if (id === 0) {
                    this.isLoadingData = false;
                }
                else {
                    this.commonService.snackError('Tải dữ liệu không thành công', '');
                }
            }
            this.isLoadingData = false;
        });
    }
    checkTeacherInGroup() {
        var _a, _b, _c;
        this.dataTeacherSearch = (_b = this.commonService.myClone((_a = this.teacherGroupObj) === null || _a === void 0 ? void 0 : _a.teachers)) !== null && _b !== void 0 ? _b : [];
        let arrLength = this.teachersInGroup ? this.teachersInGroup.length : 0;
        for (let k = 0; k < arrLength; k++) {
            for (let l = 0; l < this.dataTeacherSearch.length; l++) {
                if (((_c = this.teachersInGroup) === null || _c === void 0 ? void 0 : _c[k].id) === this.dataTeacherSearch[l].id) {
                    this.dataTeacherSearch[l].inGroup = true;
                }
            }
        }
    }
    getPermissionMyTeacher(id) {
        this.isLoadingData = true;
        this.permisionTeamService.apiPermisionTeamGetAllPermisionWithMemberGet(id).subscribe((response) => {
            var _a, _b;
            if (response.success === 1) {
                this.teacherId = id;
                this.processData((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) !== null && _b !== void 0 ? _b : []);
            }
            else {
                this.commonService.snackError('Tải dữ liệu không thành công', '');
            }
            this.isLoadingData = false;
        });
    }
    processData(responseData) {
        var _a, _b, _c, _d, _e, _f, _g;
        let arrLengthClassList = (_a = responseData.length) !== null && _a !== void 0 ? _a : 0;
        // reset
        this.classListData = [];
        for (let x = 0; x < arrLengthClassList; x++) {
            let data = Object.assign(Object.assign({}, responseData[x]), { permissionArray: (_b = this.commonService.myClone(this.permissionData)) !== null && _b !== void 0 ? _b : [], permissionIds: [] });
            (_c = this.classListData) === null || _c === void 0 ? void 0 : _c.push(data);
        }
        for (let i = 0; i < this.classListData.length; i++) {
            if (this.classListData[i].permissionArray) {
                let arrLength = (_e = (_d = this.classListData[i].permissionArray) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0;
                for (let j = 0; j < arrLength; j++) {
                    if (this.classListData[i].teamPermisions && ((_f = this.classListData[i].teamPermisions) === null || _f === void 0 ? void 0 : _f[j])) {
                        switch ((_g = this.classListData[i].teamPermisions) === null || _g === void 0 ? void 0 : _g[j].id) {
                            case 1:
                                this.classListData[i].permissionArray[0].checked = true;
                                break;
                            case 2:
                                this.classListData[i].permissionArray[1].checked = true;
                                break;
                            case 3:
                                this.classListData[i].permissionArray[2].checked = true;
                                break;
                        }
                    }
                }
            }
        }
    }
    getPermissionObjs() {
        let type = 1;
        this.initStatusObj();
        this.permisionTeamService.apiPermisionTeamGetAllPermisionsGet(type).subscribe((response) => {
            var _a;
            if (response.success === 1) {
                this.permissionData = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs;
            }
            else {
                this.showErrorSnack('Tải dữ liệu không thành công');
            }
        });
    }
    addMemberInGroup(teacherObj) {
        this.isLoadingMoreMembers = teacherObj.id;
        let data = {
            groupId: this.groupId,
            teacherTeamId: teacherObj.id
        };
        this.teacherGroupService.apiTeacherGroupAddTeacherWithGroupPost(data).subscribe((reponse) => {
            var _a, _b;
            if (reponse.success === 1) {
                (_a = this.teachersInGroup) === null || _a === void 0 ? void 0 : _a.push(teacherObj);
                this.isLoadingMoreMembers = false;
                this.checkTeacherInGroup();
                this.commonService.snackSuccess('Thêm giáo viên vào nhóm thành công', '');
            }
            else {
                this.showErrorSnack((_b = reponse.message) !== null && _b !== void 0 ? _b : '');
            }
            this.isLoadingMoreMembers = false;
            this.searchValue.setValue('');
        });
    }
    addAllTeacherToGroup() {
        let formObj = this.commonService.getFormObj(this.form);
        let listPhone = formObj.listPhone ? formObj.listPhone.toString() : '';
        let phoneArr = [];
        if (listPhone.includes('\n')) {
            listPhone.split('\n').forEach((phone) => {
                if (!this.commonService.filterArray(phoneArr, phone)) {
                    if (phone.trim() != '') {
                        phoneArr.push(phone.trim());
                    }
                }
            });
        }
        else {
            listPhone.split(' ').forEach((phone) => {
                if (!this.commonService.filterArray(phoneArr, phone)) {
                    if (phone.trim() != '') {
                        phoneArr.push(phone.trim());
                    }
                }
            });
        }
        let data = {
            groupId: this.groupId,
            TeacherPhone: phoneArr
        };
        this.teacherGroupService.apiTeacherGroupAddTeachersWithGroupPost(data).subscribe((response) => {
            var _a, _b, _c;
            if (response.success === 1) {
                this.getTeacherInGroup(this.groupId);
                let successSave = ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.countSave) ? response.data.countSave : 0;
                let totalSave = ((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.totalTeacher) ? response.data.totalTeacher : 0;
                successSave === totalSave ? this.showSuccessSnack('Thêm giáo viên vào nhóm thành công') : this.commonService.snackSuccess('Thêm thành công ' + (successSave) + '/' + (totalSave) + ' giáo viên vào nhóm!', '');
            }
            else {
                this.showErrorSnack((_c = response.message) !== null && _c !== void 0 ? _c : '');
                this.isLoadingData = false;
            }
        });
    }
    onCheckChange(event, indexClass, indexPer) {
        if (event.target.checked) {
            this.classListData[indexClass].permissionArray[indexPer].checked = true;
        }
        else {
            this.classListData[indexClass].permissionArray[indexPer].checked = false;
        }
    }
    saveData() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        let dataGroup = {
            groupId: this.groupId,
            classWithPermissions: []
        };
        let dataTeacher = {
            teacherId: this.teacherId,
            classWithPermissions: []
        };
        let classPer = { classId: -1, permissionIds: [] };
        let arrLength = (_b = (_a = this.classListData) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        for (let i = 0; i < arrLength; i++) {
            if ((_c = this.classListData) === null || _c === void 0 ? void 0 : _c[i]) {
                this.classListData[i].permissionIds = [];
                classPer.classId = this.classListData[i].id;
                let arrLengthPermision = (_e = (_d = this.classListData[i].permissionArray) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0;
                for (let j = 0; j < arrLengthPermision; j++) {
                    if ((_f = this.classListData[i].permissionArray) === null || _f === void 0 ? void 0 : _f[j].checked) {
                        (_g = this.classListData[i].permissionIds) === null || _g === void 0 ? void 0 : _g.push((_h = this.classListData[i].permissionArray[j].id) !== null && _h !== void 0 ? _h : -1);
                        classPer.permissionIds = this.classListData[i].permissionIds;
                    }
                }
                if (this.checkGroup) {
                    (_j = dataGroup.classWithPermissions) === null || _j === void 0 ? void 0 : _j.push(classPer);
                }
                else {
                    (_k = dataTeacher.classWithPermissions) === null || _k === void 0 ? void 0 : _k.push(classPer);
                }
                classPer = { classId: -1, permissionIds: [] };
            }
        }
        this.isLoadingData = true;
        if (this.checkGroup) {
            this.permisionTeamService.apiPermisionTeamUpdateGroupPermissionPost(dataGroup).subscribe((response) => {
                if (response.success === 1) {
                    this.getTeacherInGroup(this.groupId);
                    this.commonService.snackSuccess('Cập nhật quyền thành công', '');
                }
                else {
                    this.commonService.snackError('Cập nhật quyền không thành công', '');
                    this.isLoadingData = false;
                }
            });
        }
        else {
            this.permisionTeamService.apiPermisionTeamUpdateTeacherPermissionPost(dataTeacher).subscribe((response) => {
                if (response.success === 1) {
                    this.getPermissionMyTeacher(this.teacherId);
                    this.commonService.snackSuccess('Cập nhật quyền thành công', '');
                }
                else {
                    this.commonService.snackError('Cập nhật quyền không thành công', '');
                    this.isLoadingData = false;
                }
            });
        }
    }
    ngOnInit() {
        var _a, _b;
        this.form = this.fb.group({
            listPhone: [''],
        });
        this.type = (_a = this.commonService.getMyParam(this.activeRoute, 'type')) !== null && _a !== void 0 ? _a : '';
        let idParam = (_b = this.commonService.getMyParam(this.activeRoute, 'id')) !== null && _b !== void 0 ? _b : '0';
        this.getData();
        this.getPermissionObjs();
        this.checkWidth();
        if (this.type && idParam) {
            let id = Number(idParam);
            switch (this.type) {
                case '0':
                    this.checkGroup = true;
                    this.checkRoleUser = true;
                    this.groupId = id;
                    let idGroup = 'group_id_' + this.groupId;
                    this.vps.scrollToAnchor(idGroup);
                    // this.getTeacherInGroup(this.groupId);
                    break;
                case '1':
                    this.checkGroup = false;
                    this.checkRoleUser = true;
                    this.teacherId = id;
                    let idTeacher = 'teacher_id_' + this.teacherId;
                    this.vps.scrollToAnchor(idTeacher);
                    this.getPermissionMyTeacher(this.teacherId);
                    break;
            }
        }
        // add title
        this.commonService.translateMetaData({
            title: 'lang_cms_teacher_group_title',
            description: 'lang_cms_teacher_group_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
}
GroupComponent.ɵfac = function GroupComponent_Factory(t) { return new (t || GroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__.TeacherGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_0__.PermisionTeamService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_sort_service__WEBPACK_IMPORTED_MODULE_3__.SortService)); };
GroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GroupComponent, selectors: [["app-group-teacher"]], viewQuery: function GroupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, hostBindings: function GroupComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function GroupComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 6, consts: [[3, "headerTitle", "back_link"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], ["id", "teacher-group", 1, "container", "mt-3", "pb-mb-80", 3, "resize"], [1, "group_container", 2, "border-radius", "5px", 3, "hasBackdrop"], [1, "bg-custom", 3, "mode", "opened", "ngClass"], ["drawer", ""], [1, "container-fluid", "pl-0", "p-mbr-0"], [1, "slider-nav"], [1, "search"], ["type", "text", "placeholder", "T\u00ECm t\u00EAn ho\u1EB7c S\u0110T", 1, "search-input", 3, "formControl"], [1, "search-icon"], ["class", "group", 4, "ngIf", "ngIfElse"], ["blockElse", ""], [1, "slider-bottom"], [1, "btn-add", "mr-3", 3, "click"], [1, "btn-add", 3, "click"], [1, "mat-drawer-custom"], [1, "container-fluid", "p-0"], ["class", "slider-content", "style", "display: flex; justify-content: center; align-items: center;", 4, "ngIf", "ngIfElse"], ["doneLoadingData", ""], [3, "data", "closeDialog", 4, "ngIf"], [1, "group"], [3, "config", "scrollIndicators"], ["class", "group-content", 4, "ngIf"], [1, "group-content"], ["class", "group-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "group-item", 3, "ngClass"], [1, "group-btn", 3, "id", "click"], [1, "group-icon"], [1, "group-name", 2, "text-align", "left"], ["mat-icon-button", "", 1, "group-btn-menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [3, "matTooltip", "nameCreateAvatar", "size", 4, "ngIf"], [3, "nameCreateAvatar", "size", 4, "ngIf"], [1, "group-info"], [1, "group-name"], [1, "group-text"], ["style", "margin-top: 1px;", "class", "group-text", 4, "ngIf"], [3, "matTooltip", "nameCreateAvatar", "size"], [3, "nameCreateAvatar", "size"], [1, "group-text", 2, "margin-top", "1px"], [1, "group", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "note-text"], [1, "slider-content", 2, "display", "flex", "justify-content", "center", "align-items", "center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [1, "slider-content"], ["id", "toggle-nav", 1, "toggle-nav"], ["class", "clickable", 3, "matTooltip", "click", 4, "ngIf"], [1, "slider-body-main"], ["class", "slider-content-block mt-2 mb-0", 4, "ngIf"], ["class", "slider-content-block mt-2", 4, "ngIf"], ["id", "slider-content-footer ", 1, "slider-content-footer"], [1, "btn-cannel", 3, "click"], [1, "btn-save", 3, "click"], [1, "clickable", 3, "matTooltip", "click"], [2, "vertical-align", "middle", "color", "#646464", "transform", "rotateY(180deg)"], [2, "vertical-align", "middle", "color", "#646464"], [1, "slider-content-block", "mt-2", "mb-0"], [1, "slider-bar"], [1, "slider-bar-left"], [1, "slider-bar-title"], [2, "font-weight", "bold"], [1, "slider-bar-right", "d-flex", "align-self-center"], [1, "btn-add-member", 3, "matMenuTriggerFor"], [1, "material-icons"], [2, "vertical-align", "middle", "margin-top", "3px"], [1, "btn-del-all-member", 3, "click"], ["menuAddMultiple", "matMenu"], [1, "search-member", 3, "click"], [1, "text-center"], [1, "mb-1", 2, "font-size", "14px", "font-weight", "450"], [1, "form-horizontal", 3, "formGroup"], ["type", "text", "id", "add_all_teacher_phone", "rows", "10", "formControlName", "listPhone", 1, "form-control"], [1, "text-justify"], [1, "pt-1", "text-justify", 2, "color", "#00000066", "line-height", "0"], [1, "d-flex", "justify-content-end"], [1, "btn-add-all-member", 3, "click"], [1, "slider-bar-body"], ["class", "group-body-item", 4, "ngFor", "ngForOf"], [1, "add-member"], [1, "btn-add-member", 3, "matMenuTriggerFor", "click"], [2, "vertical-align", "middle", "margin-top", "2px"], ["type", "text", 1, "search-input", 3, "placeholder", "formControl"], [1, "search-result"], ["dataNull", ""], [1, "group-body-item"], [1, "btn-delete", 3, "click"], [1, "fa", "fa-times", 3, "matTooltip"], [4, "ngFor", "ngForOf"], [1, "group-item", 3, "disabled"], [1, "group-btn", 3, "ngClass", "click"], ["class", "spinner-border spinner-border-sm", "style", "color: silver;", "role", "status", 4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm", 2, "color", "silver"], [2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "slider-content-block", "mt-2"], ["href", "", "target", "_blank", 1, "link-research", "d-none"], [1, "fa", "fa-external-link-alt"], [1, "slider-bar-right"], ["type", "checkbox", "id", "checkbox_role_hiden", 1, "checkbox-input", 3, "formControl"], ["for", "checkbox_role_hiden", 1, "text-checkbox"], ["class", "slider-body", 4, "ngIf", "ngIfElse"], ["templateElse", ""], [1, "slider-body"], [1, "row"], ["class", "col-md-6 col-lg-4 col-xs-12 px-2 mb-3", 4, "ngIf"], [1, "col-md-6", "col-lg-4", "col-xs-12", "px-2", "mb-3"], [1, "role-teacher"], [1, "class-title", 3, "matTooltip"], [1, "role-content"], ["class", "role-item", 4, "ngFor", "ngForOf"], [1, "role-item"], ["type", "checkbox", 1, "checkbox-input", 3, "id", "checked", "change"], [1, "text-checkbox", 3, "for"], [1, "slider-body", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [3, "data", "closeDialog"]], template: function GroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "header-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GroupComponent_azt_loading_effect_2_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GroupComponent_ng_template_3_Template, 28, 21, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, "lang_teacher_group_group_header_title"))("back_link", "/admin/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r1);
    } }, styles: ["*[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  zoom: 0.9;\n  cursor: pointer;\n}\n\nlabel[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.slider[_ngcontent-%COMP%] {\n  height: calc(100vh - 80px);\n}\n\n.slider-nav[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border: 1px solid #e9e9e9;\n  border-radius: 5px;\n  height: calc(100vh - 80px);\n  padding: 15px;\n}\n\n.slider-content[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  height: calc(100vh - 80px);\n  border-radius: 5px;\n  padding: 15px;\n  padding-right: 0;\n  position: relative;\n}\n\n.slider-content-block[_ngcontent-%COMP%] {\n  border: 1px solid #e9e9e9;\n  border-radius: 3px;\n  margin-right: 15px;\n}\n\n.slider-bar[_ngcontent-%COMP%] {\n  background: #fafafa;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 15px;\n  padding-right: 15px;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.slider-bar-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #333;\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-weight: bold;\n  color: #838383;\n  padding-top: 5px;\n}\n\n.group-body-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.add-member[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  position: relative;\n  display: flex;\n}\n\n.search-result[_ngcontent-%COMP%] {\n  height: 166px;\n  overflow-y: auto;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background: #ecf0f5;\n}\n\n.w-33[_ngcontent-%COMP%] {\n  width: 33%;\n}\n\n.w-80[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.mat-drawer-custom[_ngcontent-%COMP%] {\n  background: #ecf0f5;\n  border: none;\n}\n\n.search-member[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  padding: 10px;\n  z-index: 99;\n}\n\n.search-member[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  font-size: 13px;\n  color: #999999;\n}\n\n.btn-add-member[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: inherit;\n  display: flex;\n  align-items: center;\n  border-radius: 3px;\n  border: 1px solid #e9e9e9;\n  padding: 2px 10px;\n}\n\n.btn-add-member[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-right: 5px;\n}\n\n.btn-del-all-member[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: inherit;\n  display: flex;\n  color: #fff;\n  margin-left: 5px;\n  align-items: center;\n  border: 1px solid #f44336;\n  background-color: #f44336;\n  border-radius: 3px;\n  padding: 2px 10px;\n}\n\n.btn-del-all-member[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-right: 5px;\n}\n\n.btn-add-all-member[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: inherit;\n  display: flex;\n  color: #fff;\n  margin-left: 5px;\n  align-items: center;\n  border: 1px solid #169bd5;\n  background-color: #169bd5;\n  border-radius: 3px;\n  padding: 2px 10px;\n}\n\n.btn-add-all-member[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-right: 5px;\n}\n\n.btn-add-member[_ngcontent-%COMP%]:hover {\n  background: #eee;\n}\n\n.btn-del-all-member[_ngcontent-%COMP%]:hover {\n  background: #d3392e;\n}\n\n.btn-add-all-member[_ngcontent-%COMP%]:hover {\n  background: #066d99;\n}\n\n.slider-bar-body[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 15px;\n  padding-bottom: 0;\n  flex-wrap: wrap;\n  overflow-y: auto;\n}\n\n.slider-bar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.link-research[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  font-size: 12px;\n}\n\n.link-research[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.link-research[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #a7a7a7;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n\n.text-checkbox[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-bottom: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  display: inline;\n}\n\n.role-teacher[_ngcontent-%COMP%] {\n  border: 1px solid #e9e9e9;\n  padding: 12px;\n  border-radius: 3px;\n}\n\n.role-item[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.checkbox-input[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n\n.slider-content-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n\n.btn-save[_ngcontent-%COMP%], .btn-cannel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 5px;\n  padding: 5px 25px;\n  transition: all 0.5s;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  border: none;\n  background: #169bd5;\n  margin-left: 10px;\n  color: #fff;\n  padding: 6px 25px;\n}\n\n.btn-save[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: #066d99;\n}\n\n.btn-cannel[_ngcontent-%COMP%] {\n  border: 1px solid #797979;\n  color: #797979;\n}\n\n.btn-cannel[_ngcontent-%COMP%]:hover {\n  background: #eee;\n}\n\n.btn-save[_ngcontent-%COMP%]:disabled {\n  background: #e0e0e0 !important;\n}\n\n.class-title[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 13px;\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.slider-body[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  min-height: 20vh;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.slider-body-main[_ngcontent-%COMP%] {\n  height: calc(100vh - 200px);\n  overflow: hidden;\n}\n\n.h300[_ngcontent-%COMP%] {\n  height: calc(100vh - 260px);\n}\n\n.search[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  width: 88%;\n  font-weight: 400;\n  font-style: normal;\n  margin-right: 25px;\n  border: none;\n}\n\n.search-input[_ngcontent-%COMP%]:focus-visible {\n  border: none !important;\n}\n\n.search-input[_ngcontent-%COMP%]::placeholder {\n  font-size: 13px;\n  color: #999999;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #b8b8b8;\n  position: absolute;\n  top: 5px;\n  right: 0;\n  cursor: pointer;\n}\n\n.note-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.group[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  background: #fff;\n  border-radius: 3px;\n  border: 1px solid #e9e9e9;\n  overflow: hidden;\n  height: calc(100vh - 195px);\n}\n\n.group-block[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.group-content[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding: 0 15px;\n}\n\n.group-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  padding: 3px;\n  position: relative;\n}\n\n.group-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  text-transform: inherit;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  transition: all 0.5s;\n  border-radius: 5px;\n}\n\n.group-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: #eee;\n}\n\n.group-info[_ngcontent-%COMP%] {\n  text-align: left;\n  line-height: 1;\n}\n\n.group-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #169bd5;\n  width: 30px;\n  height: 30px;\n}\n\n.group-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  margin-left: 15px;\n  max-width: 120px;\n}\n\n.group-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #a2a2a2;\n  margin-bottom: 0;\n  margin-left: 15px;\n  margin-top: 5px;\n}\n\n.class-active[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #eee;\n  border-radius: 5px;\n}\n\n.group-btn-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  z-index: 99;\n  transform: translateY(-50%);\n}\n\n.slider-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgb(0, 167, 208);\n  background: transparent;\n  border: none;\n  text-transform: inherit;\n  transition: all 0.3s;\n}\n\n.slider-bottom[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:hover {\n  color: rgb(10, 82, 100);\n}\n\n.color-disabled[_ngcontent-%COMP%] {\n  color: #8b8b8b;\n}\n\n.group-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.group-item[_ngcontent-%COMP%]:hover {\n  background: #eee;\n  border-radius: 5px;\n}\n\n@media screen and (max-width: 1200px) {\n  .p-mbr-0[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n\n  .slider-content[_ngcontent-%COMP%] {\n    height: 86vh;\n  }\n\n  .slider-nav[_ngcontent-%COMP%] {\n    height: 86vh;\n  }\n\n  .slider-body[_ngcontent-%COMP%] {\n    min-height: 20vh;\n  }\n\n  .slider-body-main[_ngcontent-%COMP%] {\n    height: calc(100vh - 220px);\n    overflow: hidden;\n  }\n\n  .group[_ngcontent-%COMP%] {\n    height: calc(100vh - 270px);\n  }\n\n  .group-name[_ngcontent-%COMP%] {\n    max-width: 190px;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .slider-body-main[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n\n  .slider-body[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .fixed-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0px;\n    left: 15px;\n    padding: 5px;\n    background: #ecf0f5;\n    width: 100%;\n    z-index: 99;\n  }\n\n  .slider-content[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 112px);\n    height: auto;\n  }\n\n  .slider-nav[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n\n  .slider-content-block[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n\n  .slider-content[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n\n  .slider-bar-body[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .class-title[_ngcontent-%COMP%] {\n    white-space: normal;\n    overflow: auto;\n  }\n\n  .group[_ngcontent-%COMP%] {\n    height: calc(100vh - 150px);\n  }\n\n  .group-name[_ngcontent-%COMP%] {\n    max-width: 145px;\n  }\n}\n\n@media screen and (max-width: 321px) {\n  .group[_ngcontent-%COMP%] {\n    height: 80%;\n  }\n\n  .group-name[_ngcontent-%COMP%] {\n    max-width: 100px;\n  }\n}"] });


/***/ }),

/***/ 91807:
/*!************************************************!*\
  !*** ./src/app/teacher_group/module.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherGroupModule": () => (/* binding */ TeacherGroupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 51908);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-pdf-viewer */ 53135);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-image-cropper */ 87414);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 91851);
/* harmony import */ var src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/azota-ui/azota-ui.module */ 47470);
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ 75658);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _group_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group/controller.component */ 86480);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing.module */ 83797);
/* harmony import */ var _utils_add_group_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/add_group/controller.component */ 9323);
/* harmony import */ var _utils_add_teacher_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/add_teacher/controller.component */ 41261);
/* harmony import */ var _utils_deleteDialog_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/deleteDialog/controller.component */ 21685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 92181);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ 2638);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 87238);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _azota_ui_azt_create_avatar_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../azota-ui/azt-create-avatar/controller.component */ 64123);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/pipes/common.pipe */ 1033);





























class TeacherGroupModule {
}
TeacherGroupModule.ɵfac = function TeacherGroupModule_Factory(t) { return new (t || TeacherGroupModule)(); };
TeacherGroupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: TeacherGroupModule });
TeacherGroupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__.EditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__.PdfViewerModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_19__.ImageCropperModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_4__.TeacherGroupRoutingModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__.PerfectScrollbarModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](TeacherGroupModule, { declarations: [_group_controller_component__WEBPACK_IMPORTED_MODULE_3__.GroupComponent,
        _utils_add_teacher_controller_component__WEBPACK_IMPORTED_MODULE_6__.AddTeacherComponent,
        _utils_add_group_controller_component__WEBPACK_IMPORTED_MODULE_5__.AddGroupTeacherComponent,
        _utils_deleteDialog_controller_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDeleteComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__.EditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__.PdfViewerModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_19__.ImageCropperModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_4__.TeacherGroupRoutingModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__.PerfectScrollbarModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetComponentScope"](_group_controller_component__WEBPACK_IMPORTED_MODULE_3__.GroupComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuTrigger, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatDrawerContent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__.PerfectScrollbarComponent, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_8__.AztLoadingEffectComponent, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_9__.HeaderBackendComponent, _azota_ui_azt_create_avatar_controller_component__WEBPACK_IMPORTED_MODULE_10__.AztCreaterAvatar, _utils_add_teacher_controller_component__WEBPACK_IMPORTED_MODULE_6__.AddTeacherComponent,
    _utils_add_group_controller_component__WEBPACK_IMPORTED_MODULE_5__.AddGroupTeacherComponent,
    _utils_deleteDialog_controller_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDeleteComponent], [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_11__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_11__.FilterPipe]);


/***/ }),

/***/ 83797:
/*!*************************************************!*\
  !*** ./src/app/teacher_group/routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherGroupRoutingModule": () => (/* binding */ TeacherGroupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);
/* harmony import */ var src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auth_guards/auth.front.guard */ 45668);
/* harmony import */ var _group_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group/controller.component */ 86480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);






const TeacherGroupRoutes = [
    {
        path: '',
        component: _group_controller_component__WEBPACK_IMPORTED_MODULE_1__.GroupComponent,
        canActivate: [src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_0__.AuthFrontGuard],
        children: [
            { path: '', component: _group_controller_component__WEBPACK_IMPORTED_MODULE_1__.GroupComponent }
        ]
    }
];
class TeacherGroupRoutingModule {
}
TeacherGroupRoutingModule.ɵfac = function TeacherGroupRoutingModule_Factory(t) { return new (t || TeacherGroupRoutingModule)(); };
TeacherGroupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TeacherGroupRoutingModule });
TeacherGroupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(TeacherGroupRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TeacherGroupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule] }); })();


/***/ }),

/***/ 9323:
/*!***********************************************************************!*\
  !*** ./src/app/teacher_group/utils/add_group/controller.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddGroupTeacherComponent": () => (/* binding */ AddGroupTeacherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/validator/whitespace.validator */ 41303);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);












function AddGroupTeacherComponent_div_0_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "lang_teacher_group_utilt_add_group_add_group_teacher"));
} }
function AddGroupTeacherComponent_div_0_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "lang_teacher_group_utilt_add_group_edit_group_teacher"));
} }
function AddGroupTeacherComponent_div_0_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "lang_required_enter_name_group"), "!");
} }
function AddGroupTeacherComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddGroupTeacherComponent_div_0_div_17_div_1_Template, 3, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.getErrorType("groupName", "noWhiteSpace"));
} }
function AddGroupTeacherComponent_div_0_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddGroupTeacherComponent_div_0_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "lang_buttom_save"));
} }
function AddGroupTeacherComponent_div_0_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "lang_buttom_update"));
} }
function AddGroupTeacherComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "form", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AddGroupTeacherComponent_div_0_p_4_Template, 3, 3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AddGroupTeacherComponent_div_0_p_5_Template, 3, 3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddGroupTeacherComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.btnCloseDialog(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, AddGroupTeacherComponent_div_0_div_17_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "div", 18)(22, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddGroupTeacherComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.btnCloseDialog(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddGroupTeacherComponent_div_0_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.confirmAction()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, AddGroupTeacherComponent_div_0_span_26_Template, 3, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, AddGroupTeacherComponent_div_0_span_27_Template, 3, 3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, AddGroupTeacherComponent_div_0_span_28_Template, 3, 3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.type) === "add_group");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.type) === "edit_group");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 11, "lang_teacher_group_utilt_add_group_lable_group"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 13, "lang_teacher_group_utilt_add_group_lable_group"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["groupName"].invalid && ctx_r0.form.controls["groupName"].dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 15, "lang_buttom_cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.statusObj.loading || ctx_r0.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.type) === "add_group");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.type) === "edit_group");
} }
class AddGroupTeacherComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(fb, commonService, baseApiService, teacherGroupService) {
        super(commonService);
        this.fb = fb;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.teacherGroupService = teacherGroupService;
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({});
    }
    getErrorType(field, type) {
        var _a;
        if (this.form.controls[field] && this.form.controls[field].errors) {
            if ((_a = this.form.controls[field].errors) === null || _a === void 0 ? void 0 : _a[type]) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    confirmAction() {
        var _a, _b, _c;
        if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.type) === 'add_group') {
            let form_obj = this.commonService.getFormObj(this.form);
            if (this.form.valid) {
                this.initStatusObj();
                let data = {
                    groupName: form_obj.groupName,
                };
                this.subscriptions.add(this.teacherGroupService.apiTeacherGroupSaveGroupWithTeamPost(data).subscribe((response) => {
                    var _a;
                    if (response.success == 1) {
                        this.btnCloseDialog(true);
                        this.showSuccessSnack('Thêm nhóm thành công');
                        this.successStatusObj();
                    }
                    else {
                        this.btnCloseDialog(false);
                        this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                    }
                }));
            }
        }
        else {
            let form_obj = this.commonService.getFormObj(this.form);
            if (this.form.valid) {
                this.initStatusObj();
                let dataValue = {
                    id: (_c = (_b = this.data) === null || _b === void 0 ? void 0 : _b.groupWithTeacherData) === null || _c === void 0 ? void 0 : _c.id,
                    groupName: form_obj.groupName,
                };
                this.subscriptions.add(this.teacherGroupService.apiTeacherGroupUpdateGroupWithTeamPost(dataValue).subscribe((response) => {
                    var _a;
                    if (response.success == 1) {
                        this.btnCloseDialog(true);
                        this.showSuccessSnack('Sửa nhóm thành công');
                        this.successStatusObj();
                    }
                    else {
                        this.btnCloseDialog(false);
                        this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                    }
                }));
            }
        }
    }
    btnCloseDialog(isDone) {
        if (isDone) {
            this.closeDialog.emit(isDone);
        }
        else {
            this.closeDialog.emit();
        }
    }
    ngOnInit() {
        var _a;
        this.form = this.fb.group({
            groupName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__.WhiteSpaceValidator.noWhiteSpace]),
        });
        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.groupWithTeacherData) {
            this.form.controls.groupName.setValue(this.data.groupWithTeacherData.name);
        }
        super.ngOnInit();
    }
}
AddGroupTeacherComponent.ɵfac = function AddGroupTeacherComponent_Factory(t) { return new (t || AddGroupTeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_4__.TeacherGroupService)); };
AddGroupTeacherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AddGroupTeacherComponent, selectors: [["app-add-group"]], inputs: { data: "data" }, outputs: { closeDialog: "closeDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 4, "ngIf"], [1, "school-info_bg"], [1, "school-info"], [1, "form-horizontal", 3, "formGroup"], [1, "heading"], ["class", "heading-title", 4, "ngIf"], [1, "btn-delete", 3, "click"], [1, "fa", "fa-times"], [1, "form-content"], [1, "form-group"], [1, "col-sm-12"], ["for", "full-name", 1, "text-feild"], [1, "input-group", "mb-3"], ["type", "text", "id", "full-name", "formControlName", "groupName", 1, "form-control", 3, "placeholder"], ["class", "alert alert-danger", 4, "ngIf"], [1, "row", "ml-0", "mr-0", "pl-0", "pr-0", "justify-content-between"], [1, "col-12", "text-right"], [1, "d-flex", "float-right"], [1, "azt-block-button"], ["mat-stroked-button", "", 1, "btn-cannel", 3, "click"], ["mat-flat-button", "", 1, "btn-save", 3, "disabled", "click"], [4, "ngIf"], [1, "heading-title"], [1, "alert", "alert-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function AddGroupTeacherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AddGroupTeacherComponent_div_0_Template, 29, 17, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.isShow);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.MytranslatePipe], styles: ["*[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n}\n\n.school-info_bg[_ngcontent-%COMP%] {\n  z-index: 1000;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(60, 60, 60, 0.5);\n}\n\n.school-info[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 5px;\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 600px;\n  position: fixed;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 9px rgba(91, 91, 91, 0.35);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n.file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  vertical-align: super;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: rgba(27, 171, 161, 0.05);\n  border: 1px dashed #1baba1;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dz-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #007bff;\n}\n\n.font-size-1[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.fileinfo[_ngcontent-%COMP%] {\n  width: 200px;\n  border: 1px dashed #1baba1;\n  background: aliceblue;\n}\n\n.fileinfo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.fileinfo[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.fileinfo[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  background: #f71414;\n  color: white;\n  padding: 2px 20px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 5px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.heading-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #838383;\n  position: absolute;\n  right: 10px;\n  top: 15px;\n}\n\n.text-feild[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder {\n  font-size: 13px;\n  color: #a7a7a7;\n}\n\n.btn-save[_ngcontent-%COMP%], .btn-cannel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 5px;\n  transition: all 0.5s;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  border: none;\n  background: #169bd5;\n  margin-left: 10px;\n  color: #fff;\n}\n\n.btn-save[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: #066d99;\n}\n\n.btn-cannel[_ngcontent-%COMP%] {\n  border: 1px solid #797979;\n  color: #797979;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 800px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 700px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 400px;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 300px;\n  }\n}\n\n@media only screen and (max-width: 290px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 250px;\n  }\n}"] });


/***/ }),

/***/ 41261:
/*!*************************************************************************!*\
  !*** ./src/app/teacher_group/utils/add_teacher/controller.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTeacherComponent": () => (/* binding */ AddTeacherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/validator/whitespace.validator */ 41303);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);













function AddTeacherComponent_div_0_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Th\u00EAm gi\u00E1o vi\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddTeacherComponent_div_0_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "S\u1EEDa gi\u00E1o vi\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddTeacherComponent_div_0_div_8_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Ch\u01B0a c\u00F3 file \u0111\u01B0\u1EE3c ch\u1ECDn");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddTeacherComponent_div_0_div_8_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddTeacherComponent_div_0_div_8_ng_template_10_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 38)(8, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddTeacherComponent_div_0_div_8_ng_template_10_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.removeFile($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "X\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 2, "azota_assets/images/excel.png"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r12.file ? ctx_r12.file.name : "");
} }
function AddTeacherComponent_div_0_div_8_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "K\u00E9o th\u1EA3 file Excel ho\u1EB7c Click \u0111\u1EC3 ch\u1ECDn file");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddTeacherComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddTeacherComponent_div_0_div_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r9.click()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 23)(3, "div", 24)(4, "a", 25)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AddTeacherComponent_div_0_div_8_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.onFileSelected($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AddTeacherComponent_div_0_div_8_span_9_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AddTeacherComponent_div_0_div_8_ng_template_10_Template, 10, 4, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AddTeacherComponent_div_0_div_8_span_12_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 31)(14, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "convertLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "T\u1EA3i file bi\u1EC3u m\u1EABu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.file)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("download", ctx_r3.changeNameDownloadFile("excel_add_teacher_exp_v4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 5, "blob/master/azota_assets/medias/excel_add_teacher_exp_v4.xlsx?raw=true"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function AddTeacherComponent_div_0_ng_template_9_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "lang_cms_utils_folder_name_validate_space"), "!");
} }
function AddTeacherComponent_div_0_ng_template_9_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddTeacherComponent_div_0_ng_template_9_div_6_div_1_Template, 3, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r20.getErrorType("fullName", "noWhiteSpace"));
} }
function AddTeacherComponent_div_0_ng_template_9_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " B\u1EA1n ph\u1EA3i nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddTeacherComponent_div_0_ng_template_9_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ph\u1EA3i l\u00E0 10 s\u1ED1. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddTeacherComponent_div_0_ng_template_9_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddTeacherComponent_div_0_ng_template_9_div_13_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddTeacherComponent_div_0_ng_template_9_div_13_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r21.getErrorType("phone", "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r21.getErrorType("phone", "minlength") || ctx_r21.getErrorType("phone", "maxlength"));
} }
function AddTeacherComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "div", 41)(2, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "H\u1ECD v\u00E0 t\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AddTeacherComponent_div_0_ng_template_9_div_6_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 21)(8, "div", 41)(9, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AddTeacherComponent_div_0_ng_template_9_div_13_Template, 3, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.form.controls["fullName"].invalid && ctx_r5.form.controls["fullName"].dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.form.controls["phone"].invalid && ctx_r5.form.controls["phone"].dirty);
} }
function AddTeacherComponent_div_0_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddTeacherComponent_div_0_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "lang_buttom_save"));
} }
function AddTeacherComponent_div_0_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "lang_buttom_update"));
} }
function AddTeacherComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "form", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AddTeacherComponent_div_0_p_4_Template, 2, 0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AddTeacherComponent_div_0_p_5_Template, 2, 0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddTeacherComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.btnCloseDialog(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AddTeacherComponent_div_0_div_8_Template, 20, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AddTeacherComponent_div_0_ng_template_9_Template, 14, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddTeacherComponent_div_0_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.showImportExcel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "div", 16)(19, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddTeacherComponent_div_0_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.btnCloseDialog(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddTeacherComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.confirmAction()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, AddTeacherComponent_div_0_span_23_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, AddTeacherComponent_div_0_span_24_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, AddTeacherComponent_div_0_span_25_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.type) == "add_teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.type) == "edit_teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.importExcel)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.importExcel ? "Quay l\u1EA1i" : "Nh\u1EADp t\u1EEB File Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 11, "lang_buttom_cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.statusObj.loading || ctx_r0.form.invalid && !ctx_r0.importExcel || ctx_r0.importExcel == true && ctx_r0.file == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.type) == "add_teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.type) == "edit_teacher");
} }
class AddTeacherComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(fb, commonService, baseApiService, teacherGroupService) {
        super(commonService);
        this.fb = fb;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.teacherGroupService = teacherGroupService;
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({});
        this.importExcel = false;
        this.file = null;
    }
    getErrorType(field, type) {
        var _a;
        if (this.form.controls[field] && this.form.controls[field].errors) {
            if ((_a = this.form.controls[field].errors) === null || _a === void 0 ? void 0 : _a[type]) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    onFileSelected(event) {
        let eventObj = event;
        let target = eventObj.target;
        let files = target.files;
        this.file = files ? files[0] : this.file;
        // Validate file :
        const typeExcel = [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-excel'
        ];
        if (!(this.file && typeExcel.includes(this.file.type))) {
            this.file = null;
            this.commonService.snackError('Vui lòng chọn đúng tệp tin Excel', '');
        }
    }
    removeFile(event) {
        event.stopPropagation();
        this.file = null;
    }
    confirmAction() {
        var _a, _b, _c;
        let form_obj = this.commonService.getFormObj(this.form);
        this.initStatusObj();
        if (this.importExcel) {
            this.subscriptions.add(this.teacherGroupService.apiTeacherGroupAddTeacherIntoTeamWithExcelPostForm(this.file).subscribe((response) => {
                var _a, _b, _c, _d;
                if (response.success == 1) {
                    this.btnCloseDialog(true);
                    let successSave = ((_a = response.data) === null || _a === void 0 ? void 0 : _a.saveSuccess) ? response.data.saveSuccess : 0;
                    let totalSave = ((_b = response.data) === null || _b === void 0 ? void 0 : _b.totalTeacher) ? response.data.totalTeacher : 0;
                    let notValid = ((_c = response.data) === null || _c === void 0 ? void 0 : _c.notValidPhone) ? response.data.notValidPhone : 0;
                    successSave === totalSave ? this.showSuccessSnack('Thêm giáo viên vào danh bạ thành công') : this.showSuccessSnack('Thêm thành công ' + (successSave) + '/' + (totalSave) + ' giáo viên vào danh bạ! Trong đó có ' + (notValid) + ' SĐT sai định dạng.');
                    this.successStatusObj();
                }
                else {
                    this.btnCloseDialog(false);
                    this.errorStatusObj((_d = response.message) !== null && _d !== void 0 ? _d : '', true);
                }
            }));
        }
        else {
            switch ((_a = this.data) === null || _a === void 0 ? void 0 : _a.type) {
                case 'add_teacher':
                    if (this.form.valid) {
                        let data = {
                            numberphone: form_obj.phone,
                            fullname: form_obj.fullName
                        };
                        this.subscriptions.add(this.teacherGroupService.apiTeacherGroupAddTeacherWithTeamPost(data).subscribe((response) => {
                            var _a;
                            if (response.success === 1) {
                                this.btnCloseDialog(true);
                                this.showSuccessSnack('Thêm giáo viên thành công');
                                this.successStatusObj();
                            }
                            else {
                                this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                            }
                        }));
                    }
                    break;
                case 'edit_teacher':
                    if (this.form.valid) {
                        let dataEdit = {
                            id: (_c = (_b = this.data) === null || _b === void 0 ? void 0 : _b.teamTeacherObj) === null || _c === void 0 ? void 0 : _c.id,
                            numberphone: form_obj.phone,
                            fullname: form_obj.fullName
                        };
                        this.subscriptions.add(this.teacherGroupService.apiTeacherGroupUpdateTeacherWithTeamPost(dataEdit).subscribe((response) => {
                            var _a;
                            if (response.success == 1) {
                                this.btnCloseDialog(true);
                                this.showSuccessSnack('Sửa thông tin giáo viên thành công');
                                this.successStatusObj();
                            }
                            else {
                                this.btnCloseDialog(false);
                                this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                            }
                        }));
                    }
                    break;
                default:
                    break;
            }
        }
    }
    btnCloseDialog(isDone) {
        if (isDone) {
            this.closeDialog.emit(isDone);
        }
        else {
            this.closeDialog.emit();
        }
    }
    showImportExcel() {
        this.importExcel = !this.importExcel;
    }
    changeNameDownloadFile(fileName) {
        return this.commonService.createFileNameExportFile([fileName]) + '.xlsx';
    }
    ngOnInit() {
        var _a, _b, _c;
        this.form = this.fb.group({
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10)]],
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__.WhiteSpaceValidator.noWhiteSpace]),
            File: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(''),
        });
        if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.type) == 'edit_teacher') {
            this.form.controls.phone.setValue((_b = this.data.teamTeacherObj) === null || _b === void 0 ? void 0 : _b.phone);
            this.form.controls.fullName.setValue((_c = this.data.teamTeacherObj) === null || _c === void 0 ? void 0 : _c.fullName);
        }
        super.ngOnInit();
    }
}
AddTeacherComponent.ɵfac = function AddTeacherComponent_Factory(t) { return new (t || AddTeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_4__.TeacherGroupService)); };
AddTeacherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AddTeacherComponent, selectors: [["app-add-teacher"]], inputs: { data: "data" }, outputs: { closeDialog: "closeDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 4, "ngIf"], [1, "school-info_bg"], [1, "school-info"], [1, "form-horizontal", 3, "formGroup"], [1, "heading"], ["class", "heading-title", 4, "ngIf"], [1, "btn-delete", 3, "click"], [1, "fa", "fa-times"], ["class", "form-group", 4, "ngIf", "ngIfElse"], ["NormalForm", ""], [1, "row", "ml-0", "mr-0", "pl-0", "pr-0", "justify-content-between"], [1, "col-12", "col-sm-6", "align-self-center", "my-2"], [1, "clickable", "text-info", "float-left", 3, "click"], [2, "vertical-align", "middle"], [1, "col-12", "col-sm-6", "align-self-center"], [1, "d-flex", "float-right"], [1, "azt-block-button"], ["mat-stroked-button", "", 1, "btn-cannel", 3, "click"], ["mat-flat-button", "", 1, "btn-save", 3, "disabled", "click"], [4, "ngIf"], [1, "heading-title"], [1, "form-group"], [1, "col-sm-12", "text-center", "v-dragndrop", "dropzone", "dz-started", "cur-po", 3, "click"], [1, "px-4", "py-3", "rounded"], [1, "file"], ["id", "select-upload-file", 1, "align-self-center", "select", "dz-clickable"], ["type", "file", "formControlName", "File", "accept", ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel", 1, "form-control", "file-input", 3, "change"], ["fileSelect", ""], [4, "ngIf", "ngIfElse"], ["exitsFile", ""], ["class", "d-block mt-20 text-dark-green mt-3", 4, "ngIf"], [1, "text-center", "file", "mt-2"], ["target", "_self", 1, "dz-clickable", 3, "href", "download"], [1, "d-flex", "align-items-center", "justify-content-center", "m-3"], [1, "fileinfo", "p-3", 3, "click"], [1, "title"], ["alt", "excel icon", 1, "img-fluid", 3, "src"], [1, "file-name"], [1, "action"], [1, "btn-remove", 3, "click"], [1, "d-block", "mt-20", "text-dark-green", "mt-3"], [1, "col-sm-12"], ["for", "full-name", 1, "text-feild"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "H\u1ECD v\u00E0 t\u00EAn", "id", "full-name", "formControlName", "fullName", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "number-phone", 1, "text-feild"], ["type", "text", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", "id", "number-phone", "formControlName", "phone", 1, "form-control"], [1, "alert", "alert-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function AddTeacherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AddTeacherComponent_div_0_Template, 26, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.isShow);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.ConvertCdnPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.ConvertLinkGitHubPipe], styles: ["*[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n}\n\n.school-info_bg[_ngcontent-%COMP%] {\n  z-index: 1000;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(60, 60, 60, 0.5);\n}\n\n.school-info[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 5px;\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 600px;\n  position: fixed;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 9px rgba(91, 91, 91, 0.35);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n.file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  vertical-align: super;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: rgba(27, 171, 161, 0.05);\n  border: 1px dashed #1baba1;\n}\n\n.v-dragndrop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dz-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #007bff;\n}\n\n.font-size-1[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.fileinfo[_ngcontent-%COMP%] {\n  width: 200px;\n  border: 1px dashed #1baba1;\n  background: aliceblue;\n}\n\n.fileinfo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.fileinfo[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.fileinfo[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  background: #f71414;\n  color: white;\n  padding: 2px 20px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 5px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.heading-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #838383;\n  position: absolute;\n  right: 10px;\n  top: 15px;\n}\n\n.text-feild[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder {\n  font-size: 13px;\n  color: #a7a7a7;\n}\n\n.btn-save[_ngcontent-%COMP%], .btn-cannel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 5px;\n  transition: all 0.5s;\n}\n\n.btn-save[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: #066d99;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  border: none;\n  background: #169bd5;\n  margin-left: 10px;\n  color: #fff;\n}\n\n.btn-cannel[_ngcontent-%COMP%] {\n  border: 1px solid #797979;\n  color: #797979;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 800px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 700px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 400px;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 300px;\n  }\n}\n\n@media only screen and (max-width: 290px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 250px;\n  }\n}"] });


/***/ }),

/***/ 21685:
/*!**************************************************************************!*\
  !*** ./src/app/teacher_group/utils/deleteDialog/controller.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDeleteComponent": () => (/* binding */ ConfirmDeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);








function ConfirmDeleteComponent_div_0_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, "lang_teacher_group_utilt_delete_dialog_note_verifile_delete_teacher"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.data == null ? null : ctx_r1.data.teamTeacherObj == null ? null : ctx_r1.data.teamTeacherObj.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, "lang_teacher_group_utilt_delete_dialog_out_group"), "? ");
} }
function ConfirmDeleteComponent_div_0_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "lang_teacher_group_utilt_delete_dialog_note_verifile_delete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.data == null ? null : ctx_r2.data.groupWithTeacherData == null ? null : ctx_r2.data.groupWithTeacherData.name);
} }
function ConfirmDeleteComponent_div_0_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "lang_teacher_group_utilt_delete_dialog_note_verifile_delete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.data == null ? null : ctx_r3.data.teamTeacherObj == null ? null : ctx_r3.data.teamTeacherObj.fullName);
} }
function ConfirmDeleteComponent_div_0_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "lang_teacher_group_utilt_delete_dialog_note_verifile_delete_teacher_in_group"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.data == null ? null : ctx_r4.data.groupObj == null ? null : ctx_r4.data.groupObj.name);
} }
function ConfirmDeleteComponent_div_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ConfirmDeleteComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ConfirmDeleteComponent_div_0_p_3_Template, 7, 7, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ConfirmDeleteComponent_div_0_p_4_Template, 5, 4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ConfirmDeleteComponent_div_0_p_5_Template, 5, 4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ConfirmDeleteComponent_div_0_p_6_Template, 5, 4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfirmDeleteComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.btnCloseDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfirmDeleteComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.confirmDelete()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ConfirmDeleteComponent_div_0_span_13_Template, 3, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.type) == "delete_member");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.type) == "delete_group");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.type) == "delete_teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.type) == "delete_all_teacher_group");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 8, "lang_cms_common_close_btn"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 10, "lang_cms_common_confirm_btn"), " ");
} }
class ConfirmDeleteComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, teacherGroupService) {
        super(commonService);
        this.commonService = commonService;
        this.teacherGroupService = teacherGroupService;
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    confirmDelete() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.initStatusObj();
        switch ((_a = this.data) === null || _a === void 0 ? void 0 : _a.type) {
            case 'delete_member':
                let data = {
                    groupId: this.data.groupId,
                    teacherTeamId: (_c = (_b = this.data) === null || _b === void 0 ? void 0 : _b.teamTeacherObj) === null || _c === void 0 ? void 0 : _c.id
                };
                this.subscriptions.add(this.teacherGroupService.apiTeacherGroupDeleteTeacherWithGroupPost(data).subscribe((response) => {
                    var _a;
                    if (response.success === 1) {
                        this.showSuccessSnack('Xóa giáo viên khỏi nhóm thành công');
                        this.closeDialog.emit(this.data);
                        this.successStatusObj();
                    }
                    else {
                        this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                    }
                }));
                break;
            case 'delete_group':
                this.subscriptions.add(this.teacherGroupService.apiTeacherGroupDeleteGroupWithTeamGet((_e = (_d = this.data) === null || _d === void 0 ? void 0 : _d.groupWithTeacherData) === null || _e === void 0 ? void 0 : _e.id).subscribe((response) => {
                    var _a;
                    if (response.success === 1) {
                        this.commonService.snackSuccess('Xóa nhóm thành công', '');
                        this.closeDialog.emit(this.data);
                        this.successStatusObj();
                    }
                    else {
                        this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                    }
                }));
                break;
            case 'delete_teacher':
                this.subscriptions.add(this.teacherGroupService.apiTeacherGroupDeleteTeacherWithTeamGet((_g = (_f = this.data) === null || _f === void 0 ? void 0 : _f.teamTeacherObj) === null || _g === void 0 ? void 0 : _g.id).subscribe((response) => {
                    var _a;
                    if (response.success == 1) {
                        this.commonService.snackSuccess('Xóa giáo viên thành công', '');
                        this.closeDialog.emit(this.data);
                        this.successStatusObj();
                    }
                    else {
                        this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                    }
                }));
                break;
            case 'delete_all_teacher_group':
                let dataAll = {
                    groupId: (_j = (_h = this.data) === null || _h === void 0 ? void 0 : _h.groupObj) === null || _j === void 0 ? void 0 : _j.id,
                    teamTeacherIds: this.data.teacherIds
                };
                this.subscriptions.add(this.teacherGroupService.apiTeacherGroupDeleteMultipleTeacherWithGroupPost(dataAll).subscribe((response) => {
                    var _a;
                    if (response.success == 1) {
                        this.commonService.snackSuccess('Xóa giáo viên thành công', '');
                        this.closeDialog.emit(this.data);
                        this.successStatusObj();
                    }
                    else {
                        this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                    }
                }));
                break;
        }
    }
    btnCloseDialog() {
        this.closeDialog.emit();
    }
}
ConfirmDeleteComponent.ɵfac = function ConfirmDeleteComponent_Factory(t) { return new (t || ConfirmDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.TeacherGroupService)); };
ConfirmDeleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ConfirmDeleteComponent, selectors: [["app-delete-dialog"]], inputs: { data: "data" }, outputs: { closeDialog: "closeDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 4, "ngIf"], [1, "school-info_bg"], [1, "school-info", "p-4"], [1, "text-center"], ["class", "h5 para_respon font-weight-normal", 4, "ngIf"], [1, "d-flex", "float-right", "mt-3"], [1, "azt-block-button"], ["mat-stroked-button", "", 1, "btn-cannel", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "btn-save", 2, "margin-left", "15px", 3, "disabled", "click"], [4, "ngIf"], [1, "h5", "para_respon", "font-weight-normal"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function ConfirmDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ConfirmDeleteComponent_div_0_Template, 16, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.isShow);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_3__.MytranslatePipe], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  z-index: 9998;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background: rgba(0, 0, 0, 0.5607843137);\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 9999;\n  top: 50%;\n  left: 50%;\n  min-width: 30%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  max-width: 600px;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n.btn-save[_ngcontent-%COMP%], .btn-cannel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 5px;\n  transition: all 0.5s;\n}\n\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #bd2c22;\n}\n\n.btn-cannel[_ngcontent-%COMP%] {\n  border: 1px solid #797979;\n  color: #797979;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 95%;\n  }\n}"] });


/***/ })

}]);