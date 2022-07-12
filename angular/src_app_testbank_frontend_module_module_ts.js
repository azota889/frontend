"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_testbank_frontend_module_module_ts"],{

/***/ 83414:
/*!***********************************************************!*\
  !*** ./src/app/auth/pageredirect/controller.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageRedirectComponent": () => (/* binding */ PageRedirectComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);




class PageRedirectComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(activeRoute, commonService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.commonService = commonService;
    }
    ngOnInit() {
        var hashId = this.commonService.getMyParam(this.activeRoute, 'hash_id');
        this.commonService.myNavigation('/de-thi/' + hashId);
    }
}
PageRedirectComponent.ɵfac = function PageRedirectComponent_Factory(t) { return new (t || PageRedirectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
PageRedirectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageRedirectComponent, selectors: [["page-redirect-support"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function PageRedirectComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 22868:
/*!*************************************************!*\
  !*** ./src/app/core/services/iframe.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IFrameService": () => (/* binding */ IFrameService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class IFrameService {
    isInIframe() {
        try {
            return window.self !== window.top;
        }
        catch (e) {
            return true;
        }
    }
    sendMessageToParentIframe(data) {
        try {
            window.parent.postMessage(data, '*');
        }
        catch (e) { }
    }
    sendMessageToIFrame(iframeId, data) {
        const mNote = document.getElementById(iframeId);
        const noteIframe = mNote ? mNote.contentWindow : null;
        if (noteIframe != null) {
            noteIframe.postMessage(data, '*');
        }
    }
}
IFrameService.ɵfac = function IFrameService_Factory(t) { return new (t || IFrameService)(); };
IFrameService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IFrameService, factory: IFrameService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 55753:
/*!***********************************************************************!*\
  !*** ./src/app/testbank_frontend/answer-test/controller.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnswerTestComponent": () => (/* binding */ AnswerTestComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var _core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/browser.storage.service */ 34782);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_test_review_screen_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/test-review-screen/controller.component */ 15935);











function AnswerTestComponent_azt_loading_effect_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "azt-loading-effect");
} }
function AnswerTestComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "azt-test-review", 3);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("initDataAnswer", ctx_r2.initDataAnswerTest)("isBackEnd", false);
} }
class AnswerTestComponent extends _core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, activeRoute, browserStorageService, frontExamResultService) {
        super(commonService);
        this.commonService = commonService;
        this.activeRoute = activeRoute;
        this.browserStorageService = browserStorageService;
        this.frontExamResultService = frontExamResultService;
        this.headerTitle = '';
        this.initDataAnswerTest = {};
    }
    redirectToBackLink() {
        var _a;
        let backtoLink = (_a = this.commonService.getMyQueryParam('backto')) !== null && _a !== void 0 ? _a : '';
        let hashId = this.activeRoute.snapshot.paramMap.get('hash_id');
        let offline = this.commonService.getMyQueryParam('offline');
        if (offline) {
            return this.myNavigationBySpecialQueryString(backtoLink !== null && backtoLink !== void 0 ? backtoLink : `/student/dashboard/0`);
        }
        else {
            if (backtoLink.includes('enter-question')) {
                return this.commonService.myNavigation(backtoLink);
            }
            else {
                return this.commonService.myNavigationWithQueryString('/de-thi/' + hashId, '?backto=' + encodeURIComponent(backtoLink));
            }
        }
    }
    translateMetaTitle(examName) {
        let prefix = 'Kết quả: ';
        this.commonService.translateMetaData({
            title: prefix + examName,
            description: prefix + examName,
            image: 'lang_cms_test_image'
        });
    }
    getAndProcessDataForStudent() {
        this.initStatusObj();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.activeRoute.params, this.activeRoute.queryParams]).subscribe(([]) => {
            var _a, _b;
            var hashId = (_a = this.commonService.getMyParam(this.activeRoute, 'hash_id')) === null || _a === void 0 ? void 0 : _a.toString();
            let curResult = Number(this.commonService.getMyParam(this.activeRoute, 'result_id'));
            let shareOfflineHashId = (_b = this.commonService.getMyQueryParam('offline')) !== null && _b !== void 0 ? _b : '';
            var responseParse = this.browserStorageService.getSimpleSessionStorageWithExpired('test_result_v2_' + hashId + '_' + curResult);
            if (responseParse) {
                this.initDataAnswerTest.data = responseParse;
                this.headerTitle = `Kết quả: ${responseParse.examObj.name}`;
                this.translateMetaTitle(responseParse.examObj.name);
                this.successStatusObj();
            }
            else {
                this.frontExamResultService.apiFrontExamResultGetExamWithExamAnswerV2Get(hashId, curResult, shareOfflineHashId).subscribe(response => {
                    var _a, _b, _c, _d, _e;
                    if (response.success == 1) {
                        this.initDataAnswerTest = response;
                        this.headerTitle = `Kết quả: ${(_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.examObj) === null || _b === void 0 ? void 0 : _b.name}`;
                        this.translateMetaTitle((_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.examObj) === null || _d === void 0 ? void 0 : _d.name);
                        this.successStatusObj();
                    }
                    else {
                        this.errorStatusObj((_e = response.message) !== null && _e !== void 0 ? _e : '', true);
                    }
                });
            }
        });
    }
    ngOnInit() {
        this.commonService.gaEvent('FrontExam_ViewFullResult');
        this.getAndProcessDataForStudent();
        super.ngOnInit();
    }
}
AnswerTestComponent.ɵfac = function AnswerTestComponent_Factory(t) { return new (t || AnswerTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_2__.BrowserStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.FrontExamResultService)); };
AnswerTestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AnswerTestComponent, selectors: [["app-student-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 4, consts: [[3, "headerTitle", "checkUrlFunction", "RedirectToLink"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [3, "initDataAnswer", "isBackEnd"]], template: function AnswerTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "header-frontend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("RedirectToLink", function AnswerTestComponent_Template_header_frontend_RedirectToLink_0_listener() { return ctx.redirectToBackLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AnswerTestComponent_azt_loading_effect_1_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AnswerTestComponent_ng_template_2_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("headerTitle", ctx.headerTitle)("checkUrlFunction", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r1);
    } }, directives: [_azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_4__.HeaderFrontendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__.AztLoadingEffectComponent, _azota_ui_test_review_screen_controller_component__WEBPACK_IMPORTED_MODULE_6__.AztTestReviewComponent], encapsulation: 2 });


/***/ }),

/***/ 25950:
/*!********************************************************************!*\
  !*** ./src/app/testbank_frontend/category/controller.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryComponent": () => (/* binding */ CategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _core_auto_api_common_api_api_frontExamCategory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/auto_api/common_api/api/frontExamCategory.service */ 95197);
/* harmony import */ var _core_auto_api_common_api_api_frontExamPage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/auto_api/common_api/api/frontExamPage.service */ 66468);
/* harmony import */ var src_app_core_services_iframe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/iframe.service */ 22868);
/* harmony import */ var src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/global.service */ 54209);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _azota_ui_azt_paging_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../azota-ui/azt-paging/controller.component */ 51176);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);


















function CategoryComponent_header_frontend_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "header-frontend", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("headerTitle", "Danh s\u00E1ch \u0111\u1EC1 thi")("back_link", ctx_r0.back_link);
} }
function CategoryComponent_azt_loading_effect_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "azt-loading-effect");
} }
const _c0 = function (a0, a1) { return { "active": a0, "text-primary": a1 }; };
const _c1 = function (a0) { return { "clickable": a0 }; };
const _c2 = function (a0) { return { "truncate-bread": a0 }; };
function CategoryComponent_ng_template_3_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 17)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CategoryComponent_ng_template_3_li_6_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10); const bread_r7 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r9.goBackParent(bread_r7.id ? bread_r7.id : 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const bread_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](5, _c0, bread_r7.id != ctx_r4.cur_cateId, bread_r7.id != ctx_r4.cur_cateId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](8, _c1, bread_r7.id != ctx_r4.cur_cateId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", bread_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](10, _c2, bread_r7.id != ctx_r4.cur_cateId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](bread_r7.name);
} }
function CategoryComponent_ng_template_3_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CategoryComponent_ng_template_3_div_10_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13); const cate_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r12.cateDetail(cate_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-card", 21)(2, "div", 22)(3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 25)(7, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const cate_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 2, "azota_assets/images/folder_img.png"), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", cate_r11.name && cate_r11.name.length > 100 ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](9, 4, cate_r11.name, 0, 99) + ".." : cate_r11.name, "");
} }
function CategoryComponent_ng_template_3_div_11_a_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35)(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " \u0110\u1ED9 kh\u00F3: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const exam_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](exam_r14.hardLevel);
} }
function CategoryComponent_ng_template_3_div_11_a_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " \u0110i\u1EC3m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const exam_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](exam_r14.mark);
} }
function CategoryComponent_ng_template_3_div_11_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CategoryComponent_ng_template_3_div_11_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24); const exam_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r22.redirectToExamDetail(exam_r14.hashId ? exam_r14.hashId : ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-card", 21)(2, "div", 32)(3, "div", 22)(4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 35)(8, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, CategoryComponent_ng_template_3_div_11_a_1_div_11_Template, 5, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 35)(13, "span", 38)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " l\u01B0\u1EE3t l\u00E0m \u0111\u1EC1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, CategoryComponent_ng_template_3_div_11_a_1_div_17_Template, 5, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const exam_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("target", ctx_r15.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 7, "azota_assets/images/u205.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", exam_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", exam_r14.name && exam_r14.name.length > 100 ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](10, 9, exam_r14.name, 0, 99) + ".." : exam_r14.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", exam_r14.hardLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](exam_r14.attended);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", exam_r14.mark != null);
} }
function CategoryComponent_ng_template_3_div_11_a_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35)(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " \u0110\u1ED9 kh\u00F3: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const exam_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](exam_r14.hardLevel);
} }
function CategoryComponent_ng_template_3_div_11_a_2_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " \u0110i\u1EC3m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const exam_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](exam_r14.mark);
} }
function CategoryComponent_ng_template_3_div_11_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 40)(1, "mat-card", 21)(2, "div", 32)(3, "div", 22)(4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 35)(8, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, CategoryComponent_ng_template_3_div_11_a_2_div_11_Template, 5, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 35)(13, "span", 38)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " l\u01B0\u1EE3t l\u00E0m \u0111\u1EC1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, CategoryComponent_ng_template_3_div_11_a_2_div_17_Template, 5, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const exam_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("target", ctx_r16.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", "/de-thi/" + exam_r14.hashId, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 8, "azota_assets/images/u205.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", exam_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", exam_r14.name && exam_r14.name.length > 100 ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](10, 10, exam_r14.name, 0, 99) + ".." : exam_r14.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", exam_r14.hardLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](exam_r14.attended);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", exam_r14.mark != null);
} }
function CategoryComponent_ng_template_3_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Gi\u00E1 \u0111\u1EC1 thi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Azo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exam_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", exam_r14.price != null ? exam_r14.price : 0, " ");
} }
function CategoryComponent_ng_template_3_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CategoryComponent_ng_template_3_div_11_a_1_Template, 18, 13, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, CategoryComponent_ng_template_3_div_11_a_2_Template, 18, 14, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, CategoryComponent_ng_template_3_div_11_div_3_Template, 5, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exam_r14 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.target != "_blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.target == "_blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", exam_r14.price != null && exam_r14.price != 0);
} }
function CategoryComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "ol", 7)(3, "li", 8)(4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CategoryComponent_ng_template_3_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r32.backToAllCate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, CategoryComponent_ng_template_3_li_6_Template, 4, 12, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div")(8, "div", 11)(9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, CategoryComponent_ng_template_3_div_10_Template, 10, 8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, CategoryComponent_ng_template_3_div_11_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 15)(13, "azt-paging", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("SendPage", function CategoryComponent_ng_template_3_Template_azt_paging_SendPage_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r34.goToPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.listBreadcrumb);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.cateObjs);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.examObjs);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("lengthPage", ctx_r3.total_page)("paging", ctx_r3.cur_page);
} }
class CategoryComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(fb, activeRoute, commonService, frontExamCategoryService, frontExamPageService, iframeService, globalService) {
        super(commonService);
        this.fb = fb;
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.frontExamCategoryService = frontExamCategoryService;
        this.frontExamPageService = frontExamPageService;
        this.iframeService = iframeService;
        this.globalService = globalService;
        //region Model
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({});
        this.cur_page = 1;
        this.start_page = 1;
        this.end_page = 1;
        this.show_pages = [];
        this.total_page = 1;
        this.item_per_page = 18;
        this.limit_page = 5;
        this.cur_cateId = 0;
        this.tenantId = 1;
        this.totalExam = 0;
        this.totalObjs = 1;
        this.cateObjs = [];
        this.examObjs = [];
        this.listBreadcrumb = [];
        this.back_link = '';
        this.isInIframe = false;
        this.target = '';
        this.contentHeight = 0;
        this.backToLink = '';
    }
    //endregion
    //region Logic
    getListParentCate() {
        this.subscriptions.add(this.frontExamCategoryService.apiFrontExamCategoryGetBreadcrumbsGet(this.tenantId, this.cur_cateId).subscribe((response) => {
            var _a, _b, _c;
            if (response.success == 1) {
                this.listBreadcrumb = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) !== null && _b !== void 0 ? _b : new Array();
            }
            else {
                this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : '', true);
            }
        }));
    }
    getData() {
        if (this.cur_cateId != 0) {
            this.back_link = '/test/category/' + this.tenantId + '/0/' + this.cur_page;
        }
        else {
            this.back_link = '/student/dashboard/0';
        }
        var page = Number(this.commonService.getMyParam(this.activeRoute, 'id'));
        this.cur_page = page = page > 0 ? page : 1;
        this.initStatusObj();
        this.subscriptions.add(this.frontExamPageService.apiFrontExamPageGetObjsGet(this.tenantId, this.cur_cateId > 0 ? this.cur_cateId : 0, this.cur_page).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (response.success == 1) {
                this.cateObjs = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.categoryObjs) !== null && _b !== void 0 ? _b : new Array();
                this.examObjs = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.examObjs) !== null && _d !== void 0 ? _d : new Array();
                this.totalObjs = (_f = (_e = response.data) === null || _e === void 0 ? void 0 : _e.total) !== null && _f !== void 0 ? _f : 0;
                this.totalExam = (_h = (_g = response.data) === null || _g === void 0 ? void 0 : _g.totalExam) !== null && _h !== void 0 ? _h : 0;
                this.total_page =
                    this.totalObjs % this.item_per_page > 0
                        ? (this.totalObjs - (this.totalObjs % this.item_per_page)) /
                            this.item_per_page +
                            1
                        : this.totalObjs > 0
                            ? this.totalObjs / this.item_per_page
                            : 1;
                this.start_page =
                    this.cur_page - this.limit_page >= 1
                        ? this.cur_page - this.limit_page
                        : 1;
                this.end_page =
                    this.start_page + this.limit_page * 2 > this.total_page
                        ? this.total_page
                        : this.start_page + this.limit_page * 2;
                var cur_show_page = [];
                for (var i = this.start_page; i <= this.end_page; i++) {
                    cur_show_page.push(i);
                }
                this.show_pages = cur_show_page;
                this.getListParentCate();
                this.successStatusObj();
                setTimeout(() => {
                    this.checkHeight();
                }, 0);
            }
            else {
                this.errorStatusObj((_j = response.message) !== null && _j !== void 0 ? _j : '', true);
            }
        }));
    }
    //endregion
    //region Common utils
    goToPage(page) {
        this.commonService.myNavigation('/test/category/' + this.tenantId + '/' + this.cur_cateId + '/' + page);
    }
    backToAllCate() {
        this.commonService.myNavigation('/test/category/' + this.tenantId + '/0/1');
    }
    cateDetail(cate) {
        this.commonService.myNavigation('/test/category/' + this.tenantId + '/' + cate.id + '/1');
    }
    goBackParent(parentId) {
        this.commonService.myNavigation('/test/category/' + this.tenantId + '/' + parentId + '/' + 1);
    }
    redirectToExamDetail(hashId) {
        this.commonService.myNavigationWithQueryString(`/de-thi/${hashId}`, '?backto=' + encodeURIComponent(this.backToLink));
    }
    //region post message
    checkHeight() {
        var body = document.body;
        var html = document.documentElement;
        var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        this.contentHeight = height;
        this.iframeService.sendMessageToParentIframe({ height: this.contentHeight });
    }
    resizeHeight() {
        var body = document.body;
        var html = document.documentElement;
        var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        this.contentHeight = height;
        this.iframeService.sendMessageToParentIframe({ height: this.contentHeight });
    }
    changeLogin() {
        this.iframeService.sendMessageToParentIframe({ changeLogin: true });
    }
    //region Angular lifecycle
    ngOnInit() {
        this.isInIframe = this.iframeService.isInIframe();
        if (this.isInIframe) {
            this.target = '_blank';
        }
        this.form = this.fb.group({
            searchContent: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([
            this.activeRoute.params,
            this.activeRoute.queryParams,
        ]).subscribe(([]) => {
            this.cur_cateId = Number(this.commonService.getMyParam(this.activeRoute, 'cate_id'));
            this.tenantId = Number(this.commonService.getMyParam(this.activeRoute, 'tenant_id'));
            let page = this.commonService.getMyParam(this.activeRoute, 'page');
            this.backToLink = `/test/category/${this.tenantId}/${this.cur_cateId}/${page}`;
            this.getData();
            this.globalService.loginMessage.subscribe(message => {
                this.changeLogin();
            });
            this.commonService.translateMetaData({
                title: 'Danh sách đề thi',
                description: 'Danh sách đề thi'
            });
        });
        this.commonService.gaEvent('FrontExam_ViewExamCategory');
        super.ngOnInit();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        super.ngDestroy();
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_auto_api_common_api_api_frontExamCategory_service__WEBPACK_IMPORTED_MODULE_2__.FrontExamCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_auto_api_common_api_api_frontExamPage_service__WEBPACK_IMPORTED_MODULE_3__.FrontExamPageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_iframe_service__WEBPACK_IMPORTED_MODULE_4__.IFrameService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService)); };
CategoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-student-index"]], hostBindings: function CategoryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("resize", function CategoryComponent_resize_HostBindingHandler($event) { return ctx.resizeHeight($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[3, "headerTitle", "back_link", 4, "ngIf"], [1, "top-bar", "mt-3"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [3, "headerTitle", "back_link"], [1, "row", "pl-0", "pr-0", "justify-content-between"], [1, "col-sm-12", "text-left"], [1, "breadcrumb", "custom-breadcrumb", 2, "margin-top", "2px"], [1, "breadcrumb-item", "text-primary"], [1, "clickable", 2, "color", "#989494", 3, "click"], ["class", "breadcrumb-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "content-zone", "mt-3", "pt-2", "pb-2"], [1, "row"], ["class", "col-12 col-sm-6 col-md-3 my-3 clickable", 3, "click", 4, "ngFor", "ngForOf"], ["class", "col-12 col-sm-6 col-md-3 my-3 clickable", 4, "ngFor", "ngForOf"], [1, "pt-2"], [3, "lengthPage", "paging", "SendPage"], [1, "breadcrumb-item", 3, "ngClass"], [1, "hidden__text", 3, "ngClass", "click"], [3, "ngClass", "matTooltip"], [1, "col-12", "col-sm-6", "col-md-3", "my-3", "clickable", 3, "click"], [1, "card-custom", "box-flex"], [1, "box-title", "text-center"], [1, "test", "p-3"], ["alt", "", 1, "img-fluid", "folder-img", 3, "src"], [1, "test-desc", "text-center"], [1, "test-title", "mb-0", 2, "word-break", "break-word"], [1, "col-12", "col-sm-6", "col-md-3", "my-3", "clickable"], [3, "target", "click", 4, "ngIf"], [3, "href", "target", 4, "ngIf"], ["style", "float: right; margin-top: -20px; position: relative; margin-right: 10px; font-weight: bold;", 4, "ngIf"], [3, "target", "click"], [1, "box"], [1, "test", "p-2", "pl-3", "pr-3"], ["alt", "", 1, "test-img", 3, "src"], [1, "test-desc"], [1, "test-title", "mb-0", "exam_name", 2, "word-break", "break-word", 3, "matTooltip"], ["class", "test-desc", 4, "ngIf"], [1, "test-text"], [1, "test-text", "text-info"], [3, "href", "target"], [2, "float", "right", "margin-top", "-20px", "position", "relative", "margin-right", "10px", "font-weight", "bold"], [2, "color", "#ee4d2d"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, CategoryComponent_header_frontend_0_Template, 1, 2, "header-frontend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, CategoryComponent_azt_loading_effect_2_Template, 1, 0, "azt-loading-effect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, CategoryComponent_ng_template_3_Template, 14, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isInIframe);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_6__.HeaderFrontendComponent, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_7__.AztLoadingEffectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _azota_ui_azt_paging_controller_component__WEBPACK_IMPORTED_MODULE_8__.AztPaging], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__.ConvertCdnPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.SlicePipe], styles: [".top-bar[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  overflow-x: hidden;\n  padding: 15px;\n}\n\n.folder-img[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n}\n\n.custom-breadcrumb[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.card-custom[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  height: 230px;\n}\n\n.box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.box-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.test-img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-bottom: 10px;\n}\n\n.test-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.test-desc[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  text-align: justify;\n}\n\n.test-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.truncate-bread[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 120px;\n  white-space: nowrap;\n}\n\n.hidden__text[_ngcontent-%COMP%] {\n  max-width: 100px;\n  overflow: hidden;\n  text-align: left;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0csY0FBQTtFQUNBLGFBQUE7QUFJSDs7QUFGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFKQTtFQUNJLGVBQUE7QUFPSjs7QUFMQTtFQUNJLFVBQUE7QUFRSjs7QUFOQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFQQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFVSiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYmFye1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLmZvbGRlci1pbWd7IFxuICAgIHdpZHRoOiA5NnB4O1xuICAgIGhlaWdodDogOTZweDtcbn1cbi5jdXN0b20tYnJlYWRjcnVtYntcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuLmNhcmQtY3VzdG9te1xuICAgbWFyZ2luOiAwIGF1dG87XG4gICBoZWlnaHQ6IDIzMHB4O1xufVxuLmJveC10aXRsZSBoM3tcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ib3gtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGVzdC1pbWd7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi50ZXN0LXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLnRlc3QtZGVzY3tcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi8vIC5leGFtX25hbWUge1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyB9XG4udGVzdC10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYXQtY2FyZHtcbiAgICBwYWRkaW5nOiAwO1xufVxuLnRydW5jYXRlLWJyZWFkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaGlkZGVuX190ZXh0IHtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */"] });


/***/ }),

/***/ 23256:
/*!************************************************************************!*\
  !*** ./src/app/testbank_frontend/exam-details/controller.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamDetailsComponent": () => (/* binding */ ExamDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/firestore.service */ 86253);
/* harmony import */ var src_app_core_services_monitor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/monitor.service */ 88974);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _utils_buy_exam_dialog_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/buy-exam-dialog/controller.component */ 26757);
/* harmony import */ var _azota_ui_download_qr_code_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../azota-ui/download-qr-code/controller.component */ 71572);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _utils_exam_history_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/exam-history/controller.component */ 24222);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);




















function ExamDetailsComponent_azt_loading_effect_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "azt-loading-effect");
} }
function ExamDetailsComponent_ng_template_2_app_buy_exam_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-buy-exam", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeDialog", function ExamDetailsComponent_ng_template_2_app_buy_exam_0_Template_app_buy_exam_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r6.closeBuyExamDialog($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("data", ctx_r3.dataBuyExamDialog);
} }
function ExamDetailsComponent_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, ctx_r4.hasErrorMessage), " ");
} }
const _c0 = function (a0, a1) { return { "monitor-height": a0, "mobile-monitor": a1 }; };
function ExamDetailsComponent_ng_template_2_div_3_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "div", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](1, _c0, !ctx_r8.isMobile, ctx_r8.isMobile));
} }
function ExamDetailsComponent_ng_template_2_div_3_button_55_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExamDetailsComponent_ng_template_2_div_3_button_55_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r13.redirectToTakeTest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "B\u1EAFt \u0111\u1EA7u l\u00E0m b\u00E0i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function ExamDetailsComponent_ng_template_2_div_3_button_56_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExamDetailsComponent_ng_template_2_div_3_button_56_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r15.openBuyExam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Mua \u0111\u1EC1 - ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, ctx_r10.examObj.price), " Azo");
} }
function ExamDetailsComponent_ng_template_2_div_3_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 33)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "(*)");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " H\u1EC7 th\u1ED1ng ch\u1EC9 g\u1EEDi h\u00ECnh \u1EA3nh v\u00E0 \u00E2m thanh \u0111\u1EBFn gi\u00E1o vi\u00EAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "trong qu\u00E1 tr\u00ECnh l\u00E0m b\u00E0i thi");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, ". Ngay sau khi k\u1EBFt th\u00FAc b\u00E0i l\u00E0m, h\u1EC7 th\u1ED1ng ng\u1EEBng g\u1EEDi d\u1EEF li\u1EC7u. D\u1EEF li\u1EC7u thu th\u1EADp ch\u1EC9 s\u1EED d\u1EE5ng ph\u1EE5c v\u1EE5 cho c\u00F4ng t\u00E1c ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "t\u1ED5 ch\u1EE9c k\u1EF3 thi");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} }
function ExamDetailsComponent_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "div", 10)(3, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 9)(6, "div", 10)(7, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "M\u00E3 \u0111\u1EC1 thi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "azt-download-qr-code", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 9)(13, "div", 15)(14, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, ExamDetailsComponent_ng_template_2_div_3_div_15_Template, 3, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 18)(17, "div", 19)(18, "div", 20)(19, "div", 21)(20, "span", 22)(21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, " Th\u1EDDi gian l\u00E0m b\u00E0i: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "div", 21)(28, "span", 22)(29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, " S\u1ED1 l\u01B0\u1EE3t l\u00E0m \u0111\u1EC1: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 24)(36, "div", 21)(37, "span", 22)(38, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "help_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, " S\u1ED1 l\u01B0\u1EE3ng c\u00E2u h\u1ECFi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "div", 21)(45, "span", 22)(46, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "monetization_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, " Gi\u00E1 \u0111\u1EC1 thi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52, " Azo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "div", 25)(54, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](55, ExamDetailsComponent_ng_template_2_div_3_button_55_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](56, ExamDetailsComponent_ng_template_2_div_3_button_56_Template, 3, 3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](57, ExamDetailsComponent_ng_template_2_div_3_div_57_Template, 9, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](58, "app-exam-history", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r5.examObj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r5.examObj.hashId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("fileName", "azota_exam_qrcode_" + ctx_r5.examObj.hashId)("linkUrl", ctx_r5.urlLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r5.examObj.autoMonitor && ctx_r5.examObj.autoMonitor != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r5.examObj.minutes && ctx_r5.examObj.minutes > 0 ? ctx_r5.examObj.minutes + " ph\u00FAt" : "Kh\u00F4ng gi\u1EDBi h\u1EA1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r5.totalAttended == null ? 0 : ctx_r5.totalAttended);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r5.examObj.mixQuestion == 2 ? ctx_r5.examObj.limitMixQuestion : ctx_r5.examObj.countQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r5.examObj.price != null ? ctx_r5.examObj.price : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r5.isNeedBuyExam);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r5.isNeedBuyExam);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r5.examObj.autoMonitor && ctx_r5.examObj.autoMonitor == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("examObj", ctx_r5.examObj)("tenant_id", ctx_r5.tenant_id)("cur_cateId", ctx_r5.cur_cateId)("hashId", ctx_r5.hashId)("back_link", ctx_r5.back_link);
} }
function ExamDetailsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, ExamDetailsComponent_ng_template_2_app_buy_exam_0_Template, 1, 1, "app-buy-exam", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("resize", function ExamDetailsComponent_ng_template_2_Template_div_resize_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r17.checkMobile(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ExamDetailsComponent_ng_template_2_div_2_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ExamDetailsComponent_ng_template_2_div_3_Template, 59, 17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.dataBuyExamDialog.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.hasErrorMessage != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.hasErrorMessage == "");
} }
class ExamDetailsComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(activeRoute, commonService, frontExamResultHistoryService, baseApiService, fireStoreService, monitorService, frontOfflineShareService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.frontExamResultHistoryService = frontExamResultHistoryService;
        this.baseApiService = baseApiService;
        this.fireStoreService = fireStoreService;
        this.monitorService = monitorService;
        this.frontOfflineShareService = frontOfflineShareService;
        //region Model
        this.hashId = ''; // Mã đề thi
        this.examObj = {}; // Thông tin đề thi
        this.totalAttended = 0; // tổng số lượt làm đề
        this.tenant_id = 0; // ID người tạo đề
        this.cur_cateId = 0; // mã danh mục hiện tại
        this.hasErrorMessage = ''; // Hiển thị thông báo lỗi
        this.back_link = '/student/dashboard/0'; // URL back lại
        this.password = '';
        this.isNeedBuyExam = false;
        this.dataBuyExamDialog = { examObj: {}, isShow: false };
        this.innerMonitor = '';
        this.isMobile = false;
        this.urlLocation = '';
    }
    //region Logic
    fillData(response) {
        var _a, _b;
        if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('errorMessage')) && ((_b = response.data) === null || _b === void 0 ? void 0 : _b.errorMessage)) {
            if (response.data.errorMessage == 'lang_core_doest_not_owner_exam') {
                this.hasErrorMessage = '';
                this.isNeedBuyExam = true;
            }
            else {
                this.hasErrorMessage = response.data.errorMessage;
                this.isNeedBuyExam = false;
            }
            this.successStatusObj();
        }
        else {
            this.hasErrorMessage = '';
            this.isNeedBuyExam = false;
        }
    }
    getExamByHashId() {
        this.initStatusObj();
        this.subscriptions.add(this.frontExamResultHistoryService.apiFrontExamResultHistoryGetExamObjGet(this.hashId).subscribe(response => {
            var _a, _b, _c, _d, _e, _f, _g;
            if (response.success == 1) {
                this.fillData(response);
                this.examObj = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.examObj) !== null && _b !== void 0 ? _b : {};
                this.totalAttended = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.totalAttended) !== null && _d !== void 0 ? _d : 0;
                if (this.examObj != null) {
                    this.cur_cateId = (_e = this.examObj.categoryId) !== null && _e !== void 0 ? _e : 0;
                    this.tenant_id = (_f = this.examObj.tenantId) !== null && _f !== void 0 ? _f : 0;
                    this.commonService.translateMetaData({
                        title: 'Bắt đầu thi: ' + this.examObj.name,
                        description: this.examObj.name
                    });
                }
                if (this.examObj.autoMonitor && this.examObj.autoMonitor == 3) {
                    this.openVideoMonitor();
                }
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_g = response.message) !== null && _g !== void 0 ? _g : '', true);
            }
        }));
        // event google analytics
        this.commonService.gaEvent('FrontExam_GetExamWithHistoryObjs');
    }
    //region UI - Event
    openBuyExam() {
        if (this.baseApiService.isLogin() && !this.baseApiService.isAnonymousRole()) {
            this.commonService.gaEvent('payment_click_open_dialog_buy_exam');
            this.dataBuyExamDialog = { examObj: this.examObj, isShow: true };
        }
        else {
            this.dataBuyExamDialog = { examObj: {}, needLogin: true, isShow: true };
        }
    }
    closeBuyExamDialog(event) {
        if (event) {
            this.commonService.gaEvent('payment_click_confirm_buy_exam');
            this.dataBuyExamDialog = { examObj: {}, isShow: false };
            this.commonService.snackSuccess('Mua đề thi thành công!', '');
            this.redirectToTakeTest();
        }
        else {
            this.commonService.gaEvent('payment_click_cancel_buy_exam');
            this.dataBuyExamDialog = { examObj: {}, isShow: false };
        }
    }
    openVideoMonitor() {
        var userObj = this.baseApiService.getUserObj();
        if (typeof aztExam != 'undefined' && aztExam) {
            // get ver to load
            aztExam.ver = this.monitorService.getMNoteVer();
            aztExam.loadMonitor(() => {
                if (aztExam.MonitorStudent) {
                    var options = {
                        user: {
                            token: userObj.rememberToken,
                            userid: userObj.id,
                            username: userObj.fullName
                        },
                        config: {
                            domainApi: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_api,
                            urlGetPublicForLive: 's3space/get_public_upload_url_for_live',
                            urlGetListFileForLive: 'S3space/get_list_files_for_live',
                            urlGetTokenForLive: 's3space/get_token_for_live'
                        },
                        roomid: this.hashId,
                        element: 'monitorScreen',
                        examconfig: this.examObj,
                        firebaseApp: this.fireStoreService,
                        isStarted: false
                    };
                    var monitor = aztExam.MonitorStudent.getInstance();
                    monitor.prepairSession(options);
                    this.innerMonitor = monitor.preview;
                    // var monitorScreen = document.getElementById('monitorScreen');
                    // monitorScreen?.appendChild(this.innerMonitor);
                    // this.monitorScreen.nativeElement.insertAdjacentHTML('beforeend', monitor.preview)
                }
            });
        }
    }
    //region Common utils
    redirectToTakeTest() {
        if (this.cur_cateId != null) {
            this.commonService.myNavigationWithQueryString('/test/take-test/' + this.tenant_id + '/' + this.cur_cateId + '/' + this.hashId, this.password != '' && this.password != null ? '?password=' + encodeURIComponent(this.password) + '?backto=' + encodeURIComponent(this.back_link) : '?backto=' + encodeURIComponent(this.back_link));
        }
        else {
            this.commonService.myNavigationWithQueryString('/test/take-test/' + this.tenant_id + '/' + 0 + '/' + this.hashId, this.password != '' && this.password != null ? '?password=' + encodeURIComponent(this.password) + '?backto=' + encodeURIComponent(this.back_link) : '?backto=' + encodeURIComponent(this.back_link));
        }
    }
    checkMobile() {
        this.isMobile = this.commonService.checkMobile();
    }
    //region Angular lifecycle
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.activeRoute.params, this.activeRoute.queryParams]).subscribe(([]) => {
            var _a, _b, _c;
            this.password = (_a = this.commonService.getMyQueryParam('password')) !== null && _a !== void 0 ? _a : '';
            var hashId = (_b = this.commonService.getMyParam(this.activeRoute, 'hash_id')) === null || _b === void 0 ? void 0 : _b.toString();
            this.hashId = hashId ? hashId : '';
            this.cur_cateId = Number(this.commonService.getMyParam(this.activeRoute, 'cate_id'));
            this.back_link = (_c = this.commonService.getMyQueryParam('backto')) !== null && _c !== void 0 ? _c : '/student/dashboard/0';
            let offlineCodeId = this.commonService.getMyQueryParam('offline');
            if (offlineCodeId) {
                let redirectLink = `/test/share-offline-result/${hashId}/${offlineCodeId}/0`;
                this.myNavigation(redirectLink);
            }
            else {
                this.checkMobile();
                this.getExamByHashId();
            }
        });
        this.urlLocation = window.location.href;
        super.ngOnInit();
    }
    ngOnDestroy() {
        if (typeof aztExam != 'undefined' && aztExam) {
            if (aztExam.MonitorStudent) {
                var monitor = aztExam.MonitorStudent.getInstance();
                monitor.stopSession();
            }
        }
        // var monitorScreen = document.getElementById('monitorScreen');
        // if(monitorScreen != null && this.innerMonitor && this.innerMonitor != '' && this.innerMonitor.parent == null ) {
        //   monitorScreen?.removeChild(this.innerMonitor);
        // }
        this.subscriptions.unsubscribe();
        super.ngDestroy();
    }
}
ExamDetailsComponent.ɵfac = function ExamDetailsComponent_Factory(t) { return new (t || ExamDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.FrontExamResultHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_5__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_core_services_monitor_service__WEBPACK_IMPORTED_MODULE_6__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.FrontOfflineShareService)); };
ExamDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: ExamDetailsComponent, selectors: [["app-student-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 4, consts: [[3, "headerTitle", "back_link"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [3, "data", "closeDialog", 4, "ngIf"], [1, "mw-640", "app", "mt-4", 3, "resize"], ["class", "alert alert-danger mt-2", 4, "ngIf"], [4, "ngIf"], [3, "data", "closeDialog"], [1, "alert", "alert-danger", "mt-2"], [1, "row", "m-0"], [1, "col-md-12", "text-center"], [1, "text-title", 2, "word-break", "break-word"], [1, "text-title", 2, "word-break", "break-word", "font-size", "16px"], [2, "color", "#00a7d0"], [1, "pl-2", 3, "fileName", "linkUrl"], [1, "col-md-12", 2, "margin", "0 auto"], [1, "text-center"], ["class", "row my-2", 4, "ngIf"], [1, "card-info", "text-center"], [1, "row", "my-2"], [1, "col-12", "col-sm-6"], [1, "box"], [1, "mr-2", "box-icon"], [1, "box-text"], [1, "col-12", "col-sm-6", "pl-md-5"], [1, "row", "my-2", "mt-4"], [1, "col-md-12"], ["mat-raised-button", "", "class", "btn-custom", 3, "click", 4, "ngIf"], ["class", "note-exam mt-1", 4, "ngIf"], [3, "examObj", "tenant_id", "cur_cateId", "hashId", "back_link"], ["id", "monitorScreen", 1, "align-self-center", "text-center", 2, "margin", "auto", 3, "ngClass"], ["monitorScreen", ""], ["mat-raised-button", "", 1, "btn-custom", 3, "click"], [1, "note-exam", "mt-1"]], template: function ExamDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "header-frontend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ExamDetailsComponent_azt_loading_effect_1_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ExamDetailsComponent_ng_template_2_Template, 4, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("headerTitle", "B\u1EAFt \u0111\u1EA7u thi")("back_link", ctx.back_link);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r1);
    } }, directives: [_azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_7__.HeaderFrontendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_8__.AztLoadingEffectComponent, _utils_buy_exam_dialog_controller_component__WEBPACK_IMPORTED_MODULE_9__.ExamPaymentComponent, _azota_ui_download_qr_code_controller_component__WEBPACK_IMPORTED_MODULE_10__.AztDownloadQrCodeComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _utils_exam_history_controller_component__WEBPACK_IMPORTED_MODULE_11__.ExamHistoryComponent], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_12__.MytranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DecimalPipe], styles: [".mw-640[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n}\n\n.box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 200px;\n  height: 50px;\n  margin: auto;\n}\n\n.history[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n  background-color: #f39c12;\n  color: #fff;\n  font-weight: normal;\n}\n\n.box-icon[_ngcontent-%COMP%] {\n  color: #3c8dbc;\n}\n\n.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n\n.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.card-info[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto;\n}\n\n.score-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-right: 15px;\n}\n\n.score[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 600;\n  color: #FF0000;\n  margin-right: 25px;\n}\n\n.text-time[_ngcontent-%COMP%] {\n  color: #A0A0A0;\n}\n\n.btn-redirect[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.monitor-height[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 0px;\n  position: relative;\n  max-width: 100%;\n}\n\n.mobile-monitor[_ngcontent-%COMP%] {\n  height: 40px;\n  position: relative;\n  margin-left: 20px;\n}\n\n@media screen and (max-width: 480px) {\n  .card-info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .btn-redirect[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    display: block;\n  }\n\n  .score[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n\n.note-exam[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 15px;\n  padding: 20px 10px;\n}\n\n.note-exam[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7QUFPSjs7QUFMQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBVUo7O0FBUkE7RUFDSSxjQUFBO0FBV0o7O0FBVEE7RUFDSSxXQUFBO0FBWUo7O0FBVkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWFKOztBQVhBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFjSjs7QUFaQTtFQUNJO0lBQ0ksV0FBQTtFQWVOOztFQWJFO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0VBZ0JOOztFQWRFO0lBQ0ksZUFBQTtFQWlCTjtBQUNGOztBQWRBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxVQUFBO0FBaUJGIiwiZmlsZSI6InN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm13LTY0MHtcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmJveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5oaXN0b3J5e1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmJ0bi1jdXN0b217XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmJveC1pY29ue1xuICAgIGNvbG9yOiAjM2M4ZGJjO1xufVxuLmJveC1pY29uIC5tYXQtaWNvbntcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG59XG4uYm94LWljb24gLm1hdGVyaWFsLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5jYXJkLWluZm97XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5zY29yZS10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5zY29yZXtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI0ZGMDAwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG4udGV4dC10aW1le1xuICAgIGNvbG9yOiAjQTBBMEEwO1xufVxuLmJ0bi1yZWRpcmVjdHtcbiAgICBjb2xvcjogIzAwMDtcbn1cbi5tb25pdG9yLWhlaWdodCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ubW9iaWxlLW1vbml0b3Ige1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ4MHB4KXtcbiAgICAuY2FyZC1pbmZve1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmJ0bi1yZWRpcmVjdHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5zY29yZXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLm5vdGUtZXhhbSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuLm5vdGUtZXhhbSBzdHJvbmd7XG4gIGNvbG9yOiByZWQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 24222:
/*!*******************************************************************************************!*\
  !*** ./src/app/testbank_frontend/exam-details/utils/exam-history/controller.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamHistoryComponent": () => (/* binding */ ExamHistoryComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/time.service */ 72491);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _azota_ui_azt_check_mark_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../azota-ui/azt-check-mark/controller.component */ 37104);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/pipes/common.pipe */ 1033);














function ExamHistoryComponent_div_5_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "S\u1ED1 l\u01B0\u1EE3ng \u0111\u00FAng: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", item_r3.rightAnswer, "/", item_r3.totalQuestion, "");
} }
function ExamHistoryComponent_div_5_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("S\u1ED1 l\u01B0\u1EE3ng c\u00E2u h\u1ECFi: ", item_r3.totalQuestion, "");
} }
function ExamHistoryComponent_div_5_div_22_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "azt-check-mark", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mark", item_r3.mark);
} }
function ExamHistoryComponent_div_5_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25)(1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " \u0110i\u1EC3m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamHistoryComponent_div_5_div_22_div_1_span_3_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.mark != null);
} }
function ExamHistoryComponent_div_5_div_22_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u0110i\u1EC3m tr\u1EAFc nghi\u1EC7m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ExamHistoryComponent_div_5_div_22_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u0110i\u1EC3m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ExamHistoryComponent_div_5_div_22_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r3.mark);
} }
function ExamHistoryComponent_div_5_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamHistoryComponent_div_5_div_22_div_2_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamHistoryComponent_div_5_div_22_div_2_span_2_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamHistoryComponent_div_5_div_22_div_2_span_3_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.essayMark == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.essayMark != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.mark != null);
} }
function ExamHistoryComponent_div_5_div_22_div_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u0110i\u1EC3m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ExamHistoryComponent_div_5_div_22_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r3.mark);
} }
function ExamHistoryComponent_div_5_div_22_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Ch\u01B0a c\u00F3 \u0111i\u1EC3m");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ExamHistoryComponent_div_5_div_22_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamHistoryComponent_div_5_div_22_div_3_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamHistoryComponent_div_5_div_22_div_3_span_2_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamHistoryComponent_div_5_div_22_div_3_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.essayMark != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.mark != null && item_r3.essayMark != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.essayMark == null);
} }
function ExamHistoryComponent_div_5_div_22_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Ch\u01B0a c\u00F3 \u0111i\u1EC3m");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { backto: a0 }; };
function ExamHistoryComponent_div_5_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamHistoryComponent_div_5_div_22_div_1_Template, 4, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamHistoryComponent_div_5_div_22_div_2_Template, 4, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamHistoryComponent_div_5_div_22_div_3_Template, 4, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamHistoryComponent_div_5_div_22_span_4_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Xem chi ti\u1EBFt b\u00E0i l\u00E0m");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.examObj.examType == 1 || ctx_r6.examObj.examType == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.examObj.examType == 11 || ctx_r6.examObj.examType == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.examObj.examType == 21 || ctx_r6.examObj.examType == 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.mark == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 6, "/test/answer-test/" + ctx_r6.tenant_id + "/" + (ctx_r6.cur_cateId != null ? ctx_r6.cur_cateId : 0) + "/" + ctx_r6.hashId + "/" + item_r3.id)))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c1, ctx_r6.back_link));
} }
function ExamHistoryComponent_div_5_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5)(1, "div", 25)(2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " \u0110i\u1EC3m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Ch\u01B0a \u0111\u01B0\u1EE3c xem \u0111i\u1EC3m");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "mylocalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Xem chi ti\u1EBFt b\u00E0i l\u00E0m");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 2, "/test/answer-test/" + ctx_r7.tenant_id + "/" + (ctx_r7.cur_cateId != null ? ctx_r7.cur_cateId : 0) + "/" + ctx_r7.hashId + "/" + item_r3.id)))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c1, ctx_r7.back_link));
} }
function ExamHistoryComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "mat-card", 9)(2, "div", 10)(3, "div", 11)(4, "div", 12)(5, "div", 13)(6, "span", 14)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Th\u1EDDi gian l\u00E0m b\u00E0i: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "span", 14)(16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "help_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ExamHistoryComponent_div_5_span_19_Template, 4, 2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ExamHistoryComponent_div_5_span_20_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ExamHistoryComponent_div_5_div_22_Template, 8, 12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ExamHistoryComponent_div_5_div_23_Template, 9, 8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 19)(25, "div", 20)(26, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.calculateTime(item_r3.startedTest, item_r3.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.rightAnswer != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.rightAnswer == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.examObj.whenShowResult != 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.examObj.whenShowResult == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](28, 6, item_r3.createdAt, "dd/MM/yyyy HH:mm"));
} }
function ExamHistoryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function ExamHistoryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamHistoryComponent_div_8_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.pagingData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.disableBtn);
} }
class ExamHistoryComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, frontExamResultHistoryService, timeService) {
        super(commonService);
        this.commonService = commonService;
        this.frontExamResultHistoryService = frontExamResultHistoryService;
        this.timeService = timeService;
        //region Model
        this.hashId = '';
        this.back_link = '';
        this.examObj = {};
        this.tenant_id = 0;
        this.cur_cateId = 0;
        this.historyObjs = [];
        this.page = '';
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.checkClick = false;
        this.disableBtn = false;
    }
    getExamHistoryByHashId() {
        this.initStatusObj();
        this.subscriptions.add(this.frontExamResultHistoryService.apiFrontExamResultHistoryGetHistoryObjsGet(this.hashId, this.page).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (response.success == 1) {
                let lenghtArray = ((_a = response.data) === null || _a === void 0 ? void 0 : _a.objs) ? (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.objs) === null || _c === void 0 ? void 0 : _c.length : 0;
                if ((_d = response.data) === null || _d === void 0 ? void 0 : _d.objs) {
                    for (let i = 0; i < lenghtArray; i++) {
                        this.historyObjs.push((_e = response.data.objs[i]) !== null && _e !== void 0 ? _e : {});
                    }
                }
                this.checkClick = true;
                this.page = (_g = (_f = response.data) === null || _f === void 0 ? void 0 : _f.nextPage) !== null && _g !== void 0 ? _g : '';
                if (!((_h = response.data) === null || _h === void 0 ? void 0 : _h.nextPage)) {
                    this.disableBtn = true;
                }
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_j = response.message) !== null && _j !== void 0 ? _j : '');
            }
        }));
        // event google analytics
        this.commonService.gaEvent('FrontExam_GetExamWithHistoryObjs');
    }
    pagingData() {
        this.getExamHistoryByHashId();
    }
    calculateTime(s, e) {
        return s ? this.timeService.calculationTestedTime(s, e) : '';
    }
    //region Angular lifecycle
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        super.ngDestroy();
    }
}
ExamHistoryComponent.ɵfac = function ExamHistoryComponent_Factory(t) { return new (t || ExamHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.FrontExamResultHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_time_service__WEBPACK_IMPORTED_MODULE_3__.TimeService)); };
ExamHistoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ExamHistoryComponent, selectors: [["app-exam-history"]], inputs: { hashId: "hashId", back_link: "back_link", examObj: "examObj", tenant_id: "tenant_id", cur_cateId: "cur_cateId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 3, consts: [[1, "row", "my-3", "m-2"], [1, "col-md-12", "text-center"], [1, "history"], [1, "row", "m-0"], ["class", "col-md-12", "style", "margin: 0 auto; padding-top: 10px; padding-bottom: 5px", 4, "ngFor", "ngForOf"], [1, "col-md-12"], ["class", "d-flex justify-content-center mt-3", 4, "ngIf"], ["class", "row my-3 m-2", 4, "ngIf"], [1, "col-md-12", 2, "margin", "0 auto", "padding-top", "10px", "padding-bottom", "5px"], [1, "text-center"], [1, "card-info"], [1, "row", "my-2"], [1, "col-12", "col-sm-6"], [1, "box"], [1, "mr-2", "box-icon"], [1, "box-text"], [4, "ngIf"], [1, "row", "my-2", "mt-4"], ["class", "col-md-12", 4, "ngIf"], [1, "row"], [1, "col-md-12", "text-right"], [1, "text-time"], ["style", "display: inline-block", 4, "ngIf"], ["class", "text-danger mr-3", 4, "ngIf"], [1, "btn-redirect", 2, "color", "#007bff", 3, "routerLink", "queryParams"], [2, "display", "inline-block"], [1, "score-text"], ["class", "score", 4, "ngIf"], [1, "score"], [3, "mark"], ["class", "score-text", 4, "ngIf"], [1, "text-danger", "mr-3"], [1, "d-flex", "justify-content-center", "mt-3"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "sr-only"], ["matTooltip", "Xem th\u00EAm", "mat-button", "", 1, "btn-all-add", 3, "disabled", "click"]], template: function ExamHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "L\u1ECBch s\u1EED l\u00E0m b\u00E0i c\u1EE7a b\u1EA1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamHistoryComponent_div_5_Template, 29, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamHistoryComponent_div_7_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamHistoryComponent_div_8_Template, 5, 1, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.historyObjs);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _azota_ui_azt_check_mark_controller_component__WEBPACK_IMPORTED_MODULE_4__.AztCheckMark, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.MyLocalizePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".mw-640[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n}\n\n.box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 200px;\n  height: 50px;\n  margin: auto;\n}\n\n.history[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n\n.btn-all-add[_ngcontent-%COMP%] {\n  text-transform: inherit;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n  background-color: #f39c12;\n  color: #fff;\n  font-weight: normal;\n}\n\n.box-icon[_ngcontent-%COMP%] {\n  color: #3c8dbc;\n}\n\n.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n\n.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.card-info[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto;\n}\n\n.score-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-right: 15px;\n}\n\n.score[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 600;\n  color: #FF0000;\n  margin-right: 25px;\n}\n\n.text-time[_ngcontent-%COMP%] {\n  color: #A0A0A0;\n}\n\n.btn-redirect[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n@media screen and (max-width: 480px) {\n  .card-info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .btn-redirect[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    display: block;\n  }\n\n  .score[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDRSx1QkFBQTtBQUlGOztBQUZBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtBQVlKOztBQVZBO0VBQ0ksV0FBQTtBQWFKOztBQVhBO0VBQ0k7SUFDSSxXQUFBO0VBY047O0VBWkU7SUFDSSxnQkFBQTtJQUNBLGNBQUE7RUFlTjs7RUFiRTtJQUNJLGVBQUE7RUFnQk47QUFDRiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdy02NDB7XG4gICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICBtYXJnaW46IDAgYXV0bzsgXG59XG4uYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmhpc3Rvcnl7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYnRuLWFsbC1hZGR7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xufVxuLmJ0bi1jdXN0b217XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmJveC1pY29ue1xuICAgIGNvbG9yOiAjM2M4ZGJjO1xufVxuLmJveC1pY29uIC5tYXQtaWNvbntcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG59XG4uYm94LWljb24gLm1hdGVyaWFsLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5jYXJkLWluZm97XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDAgYXV0bzsgXG59XG4uc2NvcmUtdGV4dHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uc2NvcmV7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNGRjAwMDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuLnRleHQtdGltZXtcbiAgICBjb2xvcjogI0EwQTBBMDtcbn1cbi5idG4tcmVkaXJlY3R7XG4gICAgY29sb3I6ICMwMDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ4MHB4KXtcbiAgICAuY2FyZC1pbmZve1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmJ0bi1yZWRpcmVjdHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5zY29yZXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 26971:
/*!**********************************************************************!*\
  !*** ./src/app/testbank_frontend/masterpage/controller.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestbankFrontendMasterPageComponent": () => (/* binding */ TestbankFrontendMasterPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




class TestbankFrontendMasterPageComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService) {
        super(commonService);
        this.commonService = commonService;
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
TestbankFrontendMasterPageComponent.ɵfac = function TestbankFrontendMasterPageComponent_Factory(t) { return new (t || TestbankFrontendMasterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
TestbankFrontendMasterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TestbankFrontendMasterPageComponent, selectors: [["app-test-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["id", "testbank-frontend-layout"]], template: function TestbankFrontendMasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: [".header-container[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  box-shadow: rgba(169, 151, 151, 0.24) 0px 1px 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlEQUFBO0FBQ0oiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lcntcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiByZ2IoMTY5IDE1MSAxNTEgLyAyNCUpIDBweCAxcHggN3B4O1xufSJdfQ== */"] });


/***/ }),

/***/ 5381:
/*!****************************************************!*\
  !*** ./src/app/testbank_frontend/module.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestFrontModule": () => (/* binding */ TestFrontModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 72727);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng2-pdf-viewer */ 42214);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-image-cropper */ 92133);
/* harmony import */ var src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/azota-ui/azota-ui.module */ 47470);
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ 75658);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var src_app_testbank_frontend_answer_test_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/testbank_frontend/answer-test/controller.component */ 55753);
/* harmony import */ var src_app_testbank_frontend_submit_test_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/testbank_frontend/submit-test/controller.component */ 9084);
/* harmony import */ var src_app_testbank_frontend_take_test_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/testbank_frontend/take-test/controller.component */ 61127);
/* harmony import */ var _category_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category/controller.component */ 25950);
/* harmony import */ var _exam_details_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exam-details/controller.component */ 23256);
/* harmony import */ var _exam_details_utils_exam_history_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exam-details/utils/exam-history/controller.component */ 24222);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masterpage/controller.component */ 26971);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing.module */ 75536);
/* harmony import */ var _share_offline_result_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./share-offline-result/controller.component */ 32779);
/* harmony import */ var _take_test_mark_chosen_controller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./take-test/mark-chosen/controller.component */ 76669);
/* harmony import */ var _take_test_test_audio_ui_controller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./take-test/test-audio-ui/controller.component */ 71098);
/* harmony import */ var _take_test_test_question_ui_controller_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./take-test/test-question-ui/controller.component */ 29400);
/* harmony import */ var _take_test_ultities_check_essay_controller_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./take-test/ultities/check-essay/controller.component */ 87283);
/* harmony import */ var _take_test_ultities_comfirm_exam_comfirm_exam_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./take-test/ultities/comfirm-exam/comfirm-exam.component */ 93871);
/* harmony import */ var _take_test_ultities_exit_exam_exit_exam_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./take-test/ultities/exit-exam/exit-exam.component */ 44697);
/* harmony import */ var _take_test_ultities_monitoring_dialog_controller_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./take-test/ultities/monitoring-dialog/controller.component */ 63735);
/* harmony import */ var _take_test_ultities_submit_info_controller_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./take-test/ultities/submit-info/controller.component */ 8361);
/* harmony import */ var _take_test_ultities_submit_name_controller_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./take-test/ultities/submit-name/controller.component */ 14376);
/* harmony import */ var _take_test_ultities_upload_image_controller_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./take-test/ultities/upload-image/controller.component */ 98296);
/* harmony import */ var _test_result_tracking_controller_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./test-result-tracking/controller.component */ 28111);
/* harmony import */ var _utils_buy_exam_dialog_controller_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utils/buy-exam-dialog/controller.component */ 26757);
/* harmony import */ var _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils/footer/controller.component */ 73491);
/* harmony import */ var _utils_took_exam_dialog_controller_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utils/took-exam-dialog/controller.component */ 20189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 3184);


































class TestFrontModule {
}
TestFrontModule.ɵfac = function TestFrontModule_Factory(t) { return new (t || TestFrontModule)(); };
TestFrontModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: TestFrontModule });
TestFrontModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_29__.EditorModule, _routing_module__WEBPACK_IMPORTED_MODULE_10__.TestFrontRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule, src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_32__.PdfViewerModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_33__.ImageCropperModule, src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](TestFrontModule, { declarations: [src_app_testbank_frontend_take_test_controller_component__WEBPACK_IMPORTED_MODULE_5__.TakeTestComponent,
        src_app_testbank_frontend_answer_test_controller_component__WEBPACK_IMPORTED_MODULE_3__.AnswerTestComponent,
        src_app_testbank_frontend_submit_test_controller_component__WEBPACK_IMPORTED_MODULE_4__.SubmitTestComponent,
        _category_controller_component__WEBPACK_IMPORTED_MODULE_6__.CategoryComponent,
        _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_9__.TestbankFrontendMasterPageComponent,
        _exam_details_controller_component__WEBPACK_IMPORTED_MODULE_7__.ExamDetailsComponent,
        _take_test_ultities_comfirm_exam_comfirm_exam_component__WEBPACK_IMPORTED_MODULE_16__.ComfirmExamComponent,
        _take_test_ultities_exit_exam_exit_exam_component__WEBPACK_IMPORTED_MODULE_17__.ExitExamComponent,
        _take_test_ultities_submit_name_controller_component__WEBPACK_IMPORTED_MODULE_20__.SubmitNameComponent,
        _take_test_ultities_upload_image_controller_component__WEBPACK_IMPORTED_MODULE_21__.UploadImageComponent,
        _take_test_ultities_submit_info_controller_component__WEBPACK_IMPORTED_MODULE_19__.SubmitInfoComponent,
        _take_test_ultities_monitoring_dialog_controller_component__WEBPACK_IMPORTED_MODULE_18__.MonitorScreenComponent,
        _take_test_ultities_check_essay_controller_component__WEBPACK_IMPORTED_MODULE_15__.CheckEssayComponent,
        _utils_footer_controller_component__WEBPACK_IMPORTED_MODULE_24__.TestbankFrontendFooterComponent,
        _utils_buy_exam_dialog_controller_component__WEBPACK_IMPORTED_MODULE_23__.ExamPaymentComponent,
        _take_test_test_question_ui_controller_component__WEBPACK_IMPORTED_MODULE_14__.TestQuestionComponent,
        _take_test_mark_chosen_controller_component__WEBPACK_IMPORTED_MODULE_12__.MarkChosenComponent,
        _exam_details_utils_exam_history_controller_component__WEBPACK_IMPORTED_MODULE_8__.ExamHistoryComponent,
        _utils_took_exam_dialog_controller_component__WEBPACK_IMPORTED_MODULE_25__.TookExamDialogComponent,
        _take_test_test_audio_ui_controller_component__WEBPACK_IMPORTED_MODULE_13__.TestAudioComponent,
        _test_result_tracking_controller_component__WEBPACK_IMPORTED_MODULE_22__.TestFrontResultTrackingComponent,
        _share_offline_result_controller_component__WEBPACK_IMPORTED_MODULE_11__.ShareOfflineResultComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_29__.EditorModule, _routing_module__WEBPACK_IMPORTED_MODULE_10__.TestFrontRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule, src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_32__.PdfViewerModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_33__.ImageCropperModule, src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule] }); })();


/***/ }),

/***/ 75536:
/*!*****************************************************!*\
  !*** ./src/app/testbank_frontend/routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestFrontRoutingModule": () => (/* binding */ TestFrontRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);
/* harmony import */ var src_app_auth_pageredirect_controller_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/pageredirect/controller.component */ 83414);
/* harmony import */ var src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auth_guards/auth.front.guard */ 45668);
/* harmony import */ var src_app_testbank_frontend_answer_test_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/testbank_frontend/answer-test/controller.component */ 55753);
/* harmony import */ var src_app_testbank_frontend_submit_test_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/testbank_frontend/submit-test/controller.component */ 9084);
/* harmony import */ var src_app_testbank_frontend_take_test_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/testbank_frontend/take-test/controller.component */ 61127);
/* harmony import */ var _category_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category/controller.component */ 25950);
/* harmony import */ var _exam_details_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exam-details/controller.component */ 23256);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masterpage/controller.component */ 26971);
/* harmony import */ var _share_offline_result_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./share-offline-result/controller.component */ 32779);
/* harmony import */ var _test_result_tracking_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./test-result-tracking/controller.component */ 28111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);














const testFrontRoutes = [
    {
        path: '',
        component: _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_7__.TestbankFrontendMasterPageComponent,
        canActivate: [src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_1__.AuthFrontGuard],
        children: [
            {
                path: '',
                canActivateChild: [src_app_core_auth_guards_auth_front_guard__WEBPACK_IMPORTED_MODULE_1__.AuthFrontGuard],
                children: [
                    { path: ':hash_id', component: _exam_details_controller_component__WEBPACK_IMPORTED_MODULE_6__.ExamDetailsComponent },
                    { path: 'category/:tenant_id/:cate_id/:page', component: _category_controller_component__WEBPACK_IMPORTED_MODULE_5__.CategoryComponent },
                    { path: 'submit-test/:tenant_id/:cate_id/:hash_id/:result_id', component: src_app_testbank_frontend_submit_test_controller_component__WEBPACK_IMPORTED_MODULE_3__.SubmitTestComponent },
                    { path: 'student-view/:tenant_id/:cate_id/:hash_id', component: src_app_auth_pageredirect_controller_component__WEBPACK_IMPORTED_MODULE_0__.PageRedirectComponent },
                    { path: 'take-test/:tenant_id/:cate_id/:hash_id', component: src_app_testbank_frontend_take_test_controller_component__WEBPACK_IMPORTED_MODULE_4__.TakeTestComponent },
                    { path: 'answer-test/:tenant_id/:cate_id/:hash_id/:result_id', component: src_app_testbank_frontend_answer_test_controller_component__WEBPACK_IMPORTED_MODULE_2__.AnswerTestComponent },
                    { path: 'test-result-tracking/:result_id/:hash_id', component: _test_result_tracking_controller_component__WEBPACK_IMPORTED_MODULE_9__.TestFrontResultTrackingComponent },
                    { path: 'share-offline-result/:hash_id/:offline_code', component: _share_offline_result_controller_component__WEBPACK_IMPORTED_MODULE_8__.ShareOfflineResultComponent },
                    { path: 'share-offline-result/:hash_id/:offline_code/:index', component: _share_offline_result_controller_component__WEBPACK_IMPORTED_MODULE_8__.ShareOfflineResultComponent },
                ]
            }
        ]
    }
];
class TestFrontRoutingModule {
}
TestFrontRoutingModule.ɵfac = function TestFrontRoutingModule_Factory(t) { return new (t || TestFrontRoutingModule)(); };
TestFrontRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: TestFrontRoutingModule });
TestFrontRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(testFrontRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_12__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](TestFrontRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_12__.LocalizeRouterModule] }); })();


/***/ }),

/***/ 32779:
/*!********************************************************************************!*\
  !*** ./src/app/testbank_frontend/share-offline-result/controller.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareOfflineResultComponent": () => (/* binding */ ShareOfflineResultComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _azota_ui_azt_create_avatar_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/azt-create-avatar/controller.component */ 64123);
/* harmony import */ var _core_directives_draw_name_image_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/directives/draw-name-image.directive */ 13953);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);













function ShareOfflineResultComponent_azt_loading_effect_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "azt-loading-effect");
} }
function ShareOfflineResultComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 1, ctx_r3.dataProcess.errorMessage));
} }
const _c0 = function (a0) { return { "active": a0 }; };
function ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_5_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const i_r12 = restoredCtx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4); return ctx_r13.selectClassroom(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 18)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const class_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](17, _c0, ctx_r9.indexClassroom == i_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", class_r11.name && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 3, class_r11.name).length > 25 ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 5, class_r11.name) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", class_r11.name && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 7, class_r11.name).length > 25 ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 13, class_r11.name), 0, 25) + ".." : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 15, class_r11.name), "");
} }
function ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_10_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "mycdn");
} if (rf & 2) {
    const student_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, student_r15.avatar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
} }
function ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_10_azt_create_avatar_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "azt-create-avatar", 34);
} if (rf & 2) {
    const student_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nameCreateAvatar", student_r15.fullName)("size", 30);
} }
function ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_10_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 35);
} if (rf & 2) {
    const student_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nameImages", student_r15.nameImages);
} }
function ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_10_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Ng\u00E0y sinh: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const student_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](4, 1, student_r15.birthday, "dd-MM-yyyy"));
} }
function ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_10_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const student_r15 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4); return ctx_r24.selectStudentObj(student_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 21)(3, "div", 22)(4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_10_img_5_Template, 2, 3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_10_azt_create_avatar_6_Template, 1, 2, "azt-create-avatar", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 26)(8, "div", 27)(9, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_10_img_13_Template, 1, 1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_10_p_14_Template, 5, 4, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const student_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !student_r15.examResultId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", student_r15.avatar && student_r15.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !student_r15.avatar || student_r15.avatar == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", student_r15.fullName && student_r15.fullName.length > 25 ? student_r15.fullName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", student_r15.fullName && student_r15.fullName.length > 25 ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](11, 8, student_r15.fullName, 0, 25) + ".." : student_r15.fullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", student_r15.nameImages && (student_r15.studentId || 0) <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", student_r15.birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", student_r15.examResultId ? "\u0110i\u1EC3m: " + student_r15.mark : "Ch\u01B0a c\u00F3 \u0111i\u1EC3m", " ");
} }
function ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Danh s\u00E1ch l\u1EDBp");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_5_Template, 11, 19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 15)(7, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Danh s\u00E1ch h\u1ECDc sinh");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_div_10_Template, 17, 12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.dataProcess.classroomObjs);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.studentInClassroom);
} }
function ShareOfflineResultComponent_ng_template_2_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Gi\u00E1o vi\u00EAn ch\u01B0a cho xem k\u1EBFt qu\u1EA3 thi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function ShareOfflineResultComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ShareOfflineResultComponent_ng_template_2_ng_template_1_div_0_Template, 11, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ShareOfflineResultComponent_ng_template_2_ng_template_1_ng_template_1_Template, 3, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.dataProcess.classroomObjs == null ? null : ctx_r5.dataProcess.classroomObjs.length)("ngIfElse", _r7);
} }
function ShareOfflineResultComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ShareOfflineResultComponent_ng_template_2_div_0_Template, 6, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ShareOfflineResultComponent_ng_template_2_ng_template_1_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.dataProcess.errorMessage && ctx_r2.dataProcess.errorMessage !== "")("ngIfElse", _r4);
} }
class ShareOfflineResultComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, frontOfflineShareService, activeRoute, baseApiService) {
        super(commonService);
        this.commonService = commonService;
        this.frontOfflineShareService = frontOfflineShareService;
        this.activeRoute = activeRoute;
        this.baseApiService = baseApiService;
        this.backLink = '';
        this.dataProcess = {};
        this.returnLink = '';
        this.studentInClassroom = [];
        this.offlineCodeId = '';
        this.indexClassroom = 0;
    }
    ngOnInit() {
        var _a, _b;
        let hashId = this.commonService.getMyParam(this.activeRoute, 'hash_id');
        this.offlineCodeId = (_a = this.commonService.getMyParam(this.activeRoute, 'offline_code')) !== null && _a !== void 0 ? _a : '';
        this.returnLink = '/test/share-offline-result/' + hashId + '/' + this.offlineCodeId + '/' + this.indexClassroom;
        this.backLink = `/student/dashboard/0`;
        this.indexClassroom = Number((_b = this.commonService.getMyParam(this.activeRoute, 'index')) !== null && _b !== void 0 ? _b : '0');
        this.getData();
        super.ngOnInit();
    }
    getData() {
        let hashId = this.commonService.getMyParam(this.activeRoute, 'hash_id');
        if (hashId && this.offlineCodeId) {
            this.initStatusObj();
            this.subscriptions.add(this.frontOfflineShareService.apiFrontOfflineShareGetExamClassroomObjsGet(hashId, this.offlineCodeId).subscribe((response) => {
                var _a, _b, _c, _d;
                if (response.success == 1) {
                    this.dataProcess = (_a = response.data) !== null && _a !== void 0 ? _a : {};
                    if (((_b = this.dataProcess.classroomObjs) === null || _b === void 0 ? void 0 : _b.length) && this.dataProcess.classroomObjs.length > 0) {
                        this.studentInClassroom = (_c = this.dataProcess.classroomObjs[this.indexClassroom].studentObjs) !== null && _c !== void 0 ? _c : [];
                    }
                    this.successStatusObj();
                }
                else {
                    this.errorStatusObj((_d = response.message) !== null && _d !== void 0 ? _d : '', true);
                }
            }));
        }
    }
    selectClassroom(index) {
        var _a, _b;
        this.studentInClassroom = (_b = (_a = this.dataProcess.classroomObjs) === null || _a === void 0 ? void 0 : _a[index].studentObjs) !== null && _b !== void 0 ? _b : [];
        this.indexClassroom = index;
    }
    selectStudentObj(student) {
        var _a, _b, _c, _d, _e;
        let hashId = this.commonService.getMyParam(this.activeRoute, 'hash_id');
        this.returnLink = '/test/share-offline-result/' + hashId + '/' + this.offlineCodeId + '/' + this.indexClassroom;
        this.myNavigationWithQueryString(`/test/answer-test/${(_b = (_a = this.dataProcess.examObj) === null || _a === void 0 ? void 0 : _a.tenantId) !== null && _b !== void 0 ? _b : 0}/${(_d = (_c = this.dataProcess.examObj) === null || _c === void 0 ? void 0 : _c.categoryId) !== null && _d !== void 0 ? _d : 0}/${(_e = this.dataProcess.examObj) === null || _e === void 0 ? void 0 : _e.hashId}/${student.examResultId}`, `?offline=${this.offlineCodeId}&backto=${this.returnLink}`);
    }
}
ShareOfflineResultComponent.ɵfac = function ShareOfflineResultComponent_Factory(t) { return new (t || ShareOfflineResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.FrontOfflineShareService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__.BaseApiService)); };
ShareOfflineResultComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ShareOfflineResultComponent, selectors: [["app-share-offline-result"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 4, consts: [[3, "headerTitle", "back_link"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], ["class", "container", 4, "ngIf", "ngIfElse"], ["noErrorMessage", ""], [1, "container"], [1, "block-empty", "mt-5"], ["role", "alert", 1, "alert", "alert-danger", "text-center"], ["class", "container mt-5", 4, "ngIf", "ngIfElse"], ["noClassroom", ""], [1, "container", "mt-5"], [1, "block-main"], [1, "title"], [1, "row"], ["class", "col-12 col-sm-12 col-md-4 col-lg-3 mb-2", 4, "ngFor", "ngForOf"], [1, "block-main", "mt-3"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-3", "mb-2"], [1, "card-custom", "card-custom-two", 3, "ngClass", "click"], [1, "text-center"], [1, "card-custom-title", 3, "matTooltip"], [1, "card-custom", "student_obj", 3, "disabled", "click"], [1, "row", "ml-0", "mr-0", "justify-content-between", 2, "width", "100%"], [1, "col-3"], [1, "d-flex", "align-items-center", 2, "height", "100%"], ["style", "vertical-align: middle; margin-top: 2px; border-radius: 50%", "width", "30", "height", "30", 3, "src", 4, "ngIf"], [3, "nameCreateAvatar", "size", 4, "ngIf"], [1, "col-9", "pl-0"], [1, "text-left"], [1, "h5", "mb-1", "card-custom-title", "font-bold", 3, "matTooltip"], [1, "block-img"], ["class", "stdinfo-fullname mb-1 img-fluid", "appDrawNameImage", "", "loading", "lazy", 3, "nameImages", 4, "ngIf"], ["class", "h6 mb-0", 4, "ngIf"], [1, "h6", "mb-0"], ["width", "30", "height", "30", 2, "vertical-align", "middle", "margin-top", "2px", "border-radius", "50%", 3, "src"], [3, "nameCreateAvatar", "size"], ["appDrawNameImage", "", "loading", "lazy", 1, "stdinfo-fullname", "mb-1", "img-fluid", 3, "nameImages"]], template: function ShareOfflineResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "header-frontend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ShareOfflineResultComponent_azt_loading_effect_1_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ShareOfflineResultComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("headerTitle", "K\u1EBFt qu\u1EA3 thi Offline")("back_link", ctx.backLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r1);
    } }, directives: [_azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_4__.HeaderFrontendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__.AztLoadingEffectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _azota_ui_azt_create_avatar_controller_component__WEBPACK_IMPORTED_MODULE_6__.AztCreaterAvatar, _core_directives_draw_name_image_directive__WEBPACK_IMPORTED_MODULE_7__.DrawNameImageDirective], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__.MytranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.SlicePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__.MyCdnPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".content-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card-custom[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 15px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  min-height: 65px;\n  position: relative;\n  transition: all 0.3s;\n  width: 100%;\n  text-transform: inherit;\n}\n\n.card-custom[_ngcontent-%COMP%]:hover:not([disabled]) {\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.07), -10px -10px 20px rgba(255, 255, 255, 0.8);\n  background: #f2f2f2;\n}\n\n.card-custom-title[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 500;\n}\n\n.card-custom-two[_ngcontent-%COMP%] {\n  min-height: 35px;\n  text-align: center;\n  justify-content: center;\n}\n\n.content-link[_ngcontent-%COMP%] {\n  color: #000;\n  display: flex;\n  align-items: center;\n}\n\n.margin_question_bar_40[_ngcontent-%COMP%] {\n  margin-top: calc(2rem + 40px) !important;\n}\n\n.margin_question_bar_60[_ngcontent-%COMP%] {\n  margin-top: calc(2rem + 60px) !important;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #2361ae;\n  color: #fff;\n  transition: all 0.3s;\n}\n\n.active[_ngcontent-%COMP%]:hover {\n  background: #10498d !important;\n}\n\n.active[_ngcontent-%COMP%]   .card-custom-title[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 500;\n  font-size: 16px;\n  margin-bottom: 15px;\n}\n\n.margin_question_bar_40[_ngcontent-%COMP%] {\n  margin-top: calc(2rem + 40px) !important;\n}\n\n.margin_question_bar[_ngcontent-%COMP%] {\n  margin-top: 2rem !important;\n}\n\n.margin_question_bar_60[_ngcontent-%COMP%] {\n  margin-top: calc(2rem + 60px) !important;\n}\n\n.student_obj[_ngcontent-%COMP%] {\n  padding: 5px;\n  min-height: 69px;\n}\n\n.isSelected[_ngcontent-%COMP%] {\n  border-color: #004f7b;\n  border-width: 2px;\n  border-style: solid;\n}\n\n.isDisabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 95%;\n  }\n\n  .col-3[_ngcontent-%COMP%] {\n    flex: 0 0 30%;\n    max-width: 30%;\n  }\n\n  .col-9[_ngcontent-%COMP%] {\n    flex: 0 0 70%;\n    max-width: 70%;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .col-3[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-9[_ngcontent-%COMP%] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUFJO0VBQ0kseUZBQUE7RUFDQSxtQkFBQTtBQUVSOztBQUFJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBRVI7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFBQTtFQUNJLHdDQUFBO0FBR0o7O0FBQUE7RUFDSSx3Q0FBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFJSjs7QUFISTtFQUNJLDhCQUFBO0FBS1I7O0FBSEk7RUFDSSxXQUFBO0FBS1I7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFGQTtFQUNJLHdDQUFBO0FBS0o7O0FBRkE7RUFDSSwyQkFBQTtBQUtKOztBQUZBO0VBQ0ksd0NBQUE7QUFLSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSEE7RUFDSSxZQUFBO0FBTUo7O0FBSkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxjQUFBO0VBT047O0VBSkU7SUFDSSxhQUFBO0lBQ0EsY0FBQTtFQU9OOztFQUpFO0lBQ0ksYUFBQTtJQUNBLGNBQUE7RUFPTjtBQUNGOztBQUpBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsY0FBQTtFQU1OOztFQUhFO0lBQ0ksYUFBQTtJQUNBLGNBQUE7RUFNTjtBQUNGIiwiZmlsZSI6InN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jYXJkLWN1c3RvbXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKXtcbiAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggcmdiKDAgMCAwIC8gNyUpLCAtMTBweCAtMTBweCAyMHB4IHJnYigyNTUgMjU1IDI1NSAvIDgwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDIsIDI0MiwgMjQyKTtcbiAgICB9XG4gICAgJi10aXRsZXtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxufVxuLmNhcmQtY3VzdG9tLXR3b3tcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250ZW50LWxpbmsge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1hcmdpbl9xdWVzdGlvbl9iYXJfNDAge1xuICAgIG1hcmdpbi10b3A6IGNhbGMoMnJlbSArIDQwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW5fcXVlc3Rpb25fYmFyXzYwIHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDJyZW0gKyA2MHB4KSAhaW1wb3J0YW50O1xufVxuLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMjM2MWFlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgJjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZDogIzEwNDk4ZCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2FyZC1jdXN0b20tdGl0bGV7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbn1cbi50aXRsZSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm1hcmdpbl9xdWVzdGlvbl9iYXJfNDAge1xuICAgIG1hcmdpbi10b3A6IGNhbGMoMnJlbSArIDQwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW5fcXVlc3Rpb25fYmFyIHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDJyZW0pICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW5fcXVlc3Rpb25fYmFyXzYwIHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDJyZW0gKyA2MHB4KSAhaW1wb3J0YW50O1xufVxuXG4uc3R1ZGVudF9vYmoge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtaW4taGVpZ2h0OiA2OXB4O1xufVxuLmlzU2VsZWN0ZWQge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCA3OSwgMTIzLCAxKTtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uaXNEaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC42O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICB9XG5cbiAgICAuY29sLTMge1xuICAgICAgICBmbGV4OiAwIDAgMzAlO1xuICAgICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICB9XG5cbiAgICAuY29sLTkge1xuICAgICAgICBmbGV4OiAwIDAgNzAlO1xuICAgICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XG4gICAgLmNvbC0zIHtcbiAgICAgICAgZmxleDogMCAwIDI1JTtcbiAgICAgICAgbWF4LXdpZHRoOiAyNSU7XG4gICAgfVxuXG4gICAgLmNvbC05IHtcbiAgICAgICAgZmxleDogMCAwIDc1JTtcbiAgICAgICAgbWF4LXdpZHRoOiA3NSU7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 9084:
/*!***********************************************************************!*\
  !*** ./src/app/testbank_frontend/submit-test/controller.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitTestComponent": () => (/* binding */ SubmitTestComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_auto_api_common_api_api_frontExamResult_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/auto_api/common_api/api/frontExamResult.service */ 67102);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/browser.storage.service */ 34782);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);














function SubmitTestComponent_azt_loading_effect_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "azt-loading-effect");
} }
function SubmitTestComponent_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 6)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "C\u00F3 l\u1ED7i khi t\u1EA3i k\u1EBFt qu\u1EA3. Vui l\u00F2ng t\u1EA3i l\u1EA1i trang ho\u1EB7c th\u1EED l\u1EA1i sau!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} }
function SubmitTestComponent_ng_template_2_ng_template_3_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Th\u00ED sinh: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r6.studentObj.fullName ? ctx_r6.studentObj.fullName : ctx_r6.userObj.fullName);
} }
function SubmitTestComponent_ng_template_2_ng_template_3_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "S\u1ED1 l\u01B0\u1EE3ng \u0111\u00FAng: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r7.examResultObj.rightAnswer, " / ", ctx_r7.examResultObj.totalQuestion, "");
} }
function SubmitTestComponent_ng_template_2_ng_template_3_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("S\u1ED1 c\u00E2u h\u1ECFi: ", ctx_r8.examResultObj.totalQuestion, "");
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_1_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r17.examResultObj.mark);
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26)(1, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " \u0110i\u1EC3m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_1_h2_4_Template, 2, 1, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r13.examResultObj.mark != null);
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_3_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u0110i\u1EC3m tr\u1EAFc nghi\u1EC7m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_3_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u0110i\u1EC3m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_3_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r20.examResultObj.mark);
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_3_h2_1_Template, 2, 0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_3_h2_2_Template, 2, 0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_3_h2_4_Template, 2, 1, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.examResultObj.essayMark == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.examResultObj.essayMark != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.examResultObj.mark != null);
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_5_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u0110i\u1EC3m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_5_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r22.examResultObj.mark, "");
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_5_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Ch\u01B0a c\u00F3 \u0111i\u1EC3m");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_5_h2_1_Template, 2, 0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_5_h2_3_Template, 2, 1, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_5_h2_4_Template, 2, 0, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r15.examResultObj.essayMark != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r15.examResultObj.mark != null && ctx_r15.examResultObj.essayMark != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r15.examResultObj.essayMark == null);
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_28_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Ch\u01B0a c\u00F3 \u0111i\u1EC3m");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_1_Template, 5, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "isOnlyTrueFalse");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_3_Template, 5, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "isMixTrueFalseAndEssay");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, SubmitTestComponent_ng_template_2_ng_template_3_div_28_div_5_Template, 5, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "isOnlyEssay");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SubmitTestComponent_ng_template_2_ng_template_3_div_28_h2_8_Template, 2, 0, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 4, (tmp_0_0 = ctx_r9.examObj.examType) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 6, (tmp_1_0 = ctx_r9.examObj.examType) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 8, (tmp_2_0 = ctx_r9.examObj.examType) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.examResultObj.mark == null);
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_29_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u0110i\u1EC3m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SubmitTestComponent_ng_template_2_ng_template_3_div_29_h2_2_Template, 2, 0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 24)(4, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Ch\u01B0a \u0111\u01B0\u1EE3c xem \u0111i\u1EC3m");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.examResultObj.essayMark == null);
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SubmitTestComponent_ng_template_2_ng_template_3_div_30_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r25.redirectToAnswerTest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "xem \u0111\u00E1p \u00E1n chi ti\u1EBFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function SubmitTestComponent_ng_template_2_ng_template_3_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SubmitTestComponent_ng_template_2_ng_template_3_div_31_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r27.redirectToAnswerTest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "xem b\u00E0i l\u00E0m chi ti\u1EBFt");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function SubmitTestComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7)(1, "b")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "B\u00E0i l\u00E0m c\u1EE7a b\u1EA1n \u0111\u00E3 \u0111\u01B0\u1EE3c g\u1EEDi \u0111i");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 8)(5, "div", 9)(6, "mat-card", 10)(7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SubmitTestComponent_ng_template_2_ng_template_3_p_8_Template, 4, 1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 13)(10, "div", 14)(11, "div", 15)(12, "span", 16)(13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Th\u1EDDi gian l\u00E0m b\u00E0i: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "span", 16)(22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "help_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, SubmitTestComponent_ng_template_2_ng_template_3_span_25_Template, 4, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, SubmitTestComponent_ng_template_2_ng_template_3_span_26_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, SubmitTestComponent_ng_template_2_ng_template_3_div_28_Template, 9, 10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, SubmitTestComponent_ng_template_2_ng_template_3_div_29_Template, 6, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, SubmitTestComponent_ng_template_2_ng_template_3_div_30_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, SubmitTestComponent_ng_template_2_ng_template_3_div_31_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.studentObj.fullName || ctx_r5.userObj.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate4"]("", ctx_r5.days, " ", ctx_r5.hours, " ", ctx_r5.minutes, " ", ctx_r5.seconds, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.examResultObj.rightAnswer != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.examResultObj.rightAnswer == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.examObj.whenShowResult != 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.examObj.whenShowResult == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.examObj.whenShowAnswer != 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.examObj.whenShowAnswer == 2);
} }
function SubmitTestComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SubmitTestComponent_ng_template_2_div_2_Template, 4, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SubmitTestComponent_ng_template_2_ng_template_3_Template, 32, 11, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.statusObj.errorMessage != "")("ngIfElse", _r4);
} }
class SubmitTestComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(activeRoute, frontExamResultService, commonService, baseApiService, browserStorageService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.frontExamResultService = frontExamResultService;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.browserStorageService = browserStorageService;
        // region Model
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
        this.hashId = '';
        this.resultId = 0;
        this.tenantId = 0;
        this.cur_cateId = 0;
        this.examObj = {};
        this.examResultObj = {};
        this.studentObj = {};
        this.userObj = {};
        this.seconds = '';
        this.minutes = '';
        this.hours = '';
        this.days = '';
        this.hasErrorMessage = '';
        this.back_link = '';
        this.backtoLink = '';
    }
    // region Logic
    getExamResult() {
        var _a, _b, _c, _d, _e;
        this.initStatusObj();
        var responseCache = this.browserStorageService.getSimpleSessionStorage('test_result_v2_' + this.hashId + '_' + this.resultId);
        if (responseCache) {
            var responseParse = this.commonService.parseJson(responseCache);
            var parseDataResponse = this.commonService.parseJson((_a = responseParse.data) !== null && _a !== void 0 ? _a : '');
            this.examObj = (_b = parseDataResponse.examObj) !== null && _b !== void 0 ? _b : {};
            this.examResultObj = (_c = parseDataResponse.examResultObj) !== null && _c !== void 0 ? _c : {};
            this.studentObj = parseDataResponse.studentObj;
            var startDate = new Date((_d = this.examResultObj.startedTest) !== null && _d !== void 0 ? _d : '');
            var endDate = new Date((_e = this.examResultObj.createdAt) !== null && _e !== void 0 ? _e : '');
            var diff = endDate.getTime() - startDate.getTime();
            var days = Math.floor(diff / (60 * 60 * 24 * 1000));
            var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
            var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
            var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
            if (days != 0) {
                this.days = days + ' ngày ';
            }
            if (hours != 0) {
                this.hours = hours + ' giờ ';
            }
            if (minutes != 0) {
                this.minutes = minutes + ' phút ';
            }
            if (seconds != 0) {
                this.seconds = seconds + ' giây';
            }
            this.commonService.translateMetaData({
                title: 'Nộp bài: ' + this.examObj.name,
                description: this.examObj.name
            });
            this.stopStatusObj();
        }
        else {
            this.subscriptions.add(this.frontExamResultService.apiFrontExamResultGetObjGet(this.hashId, this.resultId).subscribe((response) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                if (response.success == 1) {
                    this.hasErrorMessage = (response === null || response === void 0 ? void 0 : response.hasOwnProperty('message')) && response.message ? response.message : '';
                    this.examObj = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.examObj) !== null && _b !== void 0 ? _b : {};
                    this.examResultObj = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.examResultObj) !== null && _d !== void 0 ? _d : {};
                    var startTestDate = new Date((_g = (_f = (_e = response.data) === null || _e === void 0 ? void 0 : _e.examResultObj) === null || _f === void 0 ? void 0 : _f.startedTest) !== null && _g !== void 0 ? _g : '');
                    var endTestDate = new Date((_k = (_j = (_h = response.data) === null || _h === void 0 ? void 0 : _h.examResultObj) === null || _j === void 0 ? void 0 : _j.createdAt) !== null && _k !== void 0 ? _k : '');
                    var diffDate = endTestDate.getTime() - startTestDate.getTime();
                    var daysDate = Math.floor(diffDate / (60 * 60 * 24 * 1000));
                    var hoursDate = Math.floor(diffDate / (60 * 60 * 1000)) - (daysDate * 24);
                    var minutesDate = Math.floor(diffDate / (60 * 1000)) - ((daysDate * 24 * 60) + (hoursDate * 60));
                    var secondsDate = Math.floor(diffDate / 1000) - ((daysDate * 24 * 60 * 60) + (hoursDate * 60 * 60) + (minutesDate * 60));
                    if (daysDate != 0) {
                        this.days = daysDate + ' ngày ';
                    }
                    if (hours != 0) {
                        this.hours = hoursDate + ' giờ ';
                    }
                    if (minutes != 0) {
                        this.minutes = minutesDate + ' phút ';
                    }
                    if (seconds != 0) {
                        this.seconds = secondsDate + ' giây';
                    }
                    this.commonService.translateMetaData({
                        title: 'Nộp bài: ' + this.examObj.name,
                        description: this.examObj.name
                    });
                    this.successStatusObj();
                }
                else {
                    this.errorStatusObj((_l = response.message) !== null && _l !== void 0 ? _l : '', true);
                }
            }));
        }
    }
    // region Common utils
    redirectToAnswerTest() {
        this.commonService.myNavigationWithQueryString('/test/answer-test/' + this.tenantId + '/' + this.cur_cateId + '/' + this.hashId + '/' + this.resultId, '?backto=' + encodeURIComponent(this.backtoLink));
    }
    checkValidPhone() {
        var regexPhone = /^[0-9]{10}$/;
        if (this.studentObj.phone && this.studentObj.phone.match(regexPhone)) {
            return true;
        }
        if (this.userObj.phone && this.userObj.phone.match(regexPhone)) {
            return true;
        }
        return false;
    }
    // region Angular lifecycle
    ngOnInit() {
        var _a;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([
            this.activeRoute.params,
            this.activeRoute.queryParams,
        ]).subscribe(([]) => {
            var _a;
            var hashId = (_a = this.commonService.getMyParam(this.activeRoute, 'hash_id')) === null || _a === void 0 ? void 0 : _a.toString();
            this.tenantId = Number(this.commonService.getMyParam(this.activeRoute, 'tenant_id'));
            this.cur_cateId = Number(this.commonService.getMyParam(this.activeRoute, 'cate_id'));
            this.resultId = Number(this.commonService.getMyParam(this.activeRoute, 'result_id'));
            this.hashId = hashId ? hashId : '';
            this.userObj = this.baseApiService.getUserObj();
            this.getExamResult();
        });
        this.back_link = '/student/dashboard/0';
        this.backtoLink = (_a = this.commonService.getMyQueryParam('backto')) !== null && _a !== void 0 ? _a : '';
        if (this.commonService.getMyQueryParam('backto')) {
            this.back_link = this.backtoLink;
        }
        this.commonService.gaEvent('FrontExam_ViewShortResult');
        super.ngOnInit();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        super.ngDestroy();
    }
}
SubmitTestComponent.ɵfac = function SubmitTestComponent_Factory(t) { return new (t || SubmitTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_auto_api_common_api_api_frontExamResult_service__WEBPACK_IMPORTED_MODULE_1__.FrontExamResultService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_4__.BrowserStorageService)); };
SubmitTestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: SubmitTestComponent, selectors: [["app-student-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 4, consts: [[3, "headerTitle", "back_link"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [1, "mw-640", "app", "mt-3"], [1, "view-full-screen"], ["Normal", ""], [1, "alert", "alert-danger"], [1, "title-header"], [1, "row", "m-0"], [1, "col-md-12", 2, "margin", "0 auto", "padding-top", "10px", "padding-bottom", "5px"], [1, "text-center"], [1, "card-info"], ["class", "mt-1", "style", "font-size: 14px;", 4, "ngIf"], [1, "row", "mt-1", "mb-2"], [1, "col-12", "col-sm-6"], [1, "box"], [1, "mr-2", "box-icon"], [1, "box-text"], [4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], ["class", "point-view", 4, "ngIf"], [1, "mt-1", 2, "font-size", "14px"], [1, "col-md-12"], ["style", "display: inline-block;", 4, "ngIf"], [1, "point-view-score"], ["class", "text-danger mr-3", 4, "ngIf"], [2, "display", "inline-block"], [1, "score-text"], ["class", "score", 4, "ngIf"], [1, "score"], ["class", "score-text", 4, "ngIf"], [1, "text-danger", "mr-3"], [1, "point-view"], [1, "btn", "btn-warning", 2, "color", "white", "font-size", "14px", 3, "click"]], template: function SubmitTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "header-frontend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SubmitTestComponent_azt_loading_effect_1_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SubmitTestComponent_ng_template_2_Template, 5, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("headerTitle", "N\u1ED9p b\u00E0i")("back_link", ctx.back_link);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r1);
    } }, directives: [_azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_5__.HeaderFrontendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_6__.AztLoadingEffectComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.IsOnlyTrueFalse, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.IsMixTrueFalseAndEssay, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.IsOnlyEssay], styles: [".mw-640[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n}\n\n.view-full-screen[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.title-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 30px;\n}\n\n.title-content[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 30px 0 0 0;\n}\n\n.point-view[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n.point-view[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: red;\n  font-weight: bold;\n  padding-bottom: 20px;\n}\n\n.score-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.point-view-score[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: red;\n  font-weight: bold;\n}\n\n.box-slide-show[_ngcontent-%COMP%] {\n  width: 100%;\n  background: inherit;\n  background-color: white;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e7e7e7;\n  border-radius: 5px;\n}\n\n.box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n  width: 200px;\n  height: 50px;\n  margin: auto;\n}\n\n.history[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n  background-color: #f39c12;\n  color: #fff;\n  font-weight: normal;\n}\n\n.box-icon[_ngcontent-%COMP%] {\n  color: #3c8dbc;\n}\n\n.box-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n\n.box-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.card-info[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 576px) {\n  .box[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBSEE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxjQUFBO0FBUUY7O0FBTkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVNGOztBQVBBO0VBQ0UsZUFBQTtBQVVGOztBQVJBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFXRjs7QUFUQTtFQUNFO0lBQ0UsMkJBQUE7RUFZRjtBQUNGIiwiZmlsZSI6InN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm13LTY0MHtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi52aWV3LWZ1bGwtc2NyZWVue1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGl0bGUtaGVhZGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4udGl0bGUtY29udGVudHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMCAwIDA7XG59XG5cbi5wb2ludC12aWV3e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4ucG9pbnQtdmlldyBoMXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uc2NvcmUtdGV4dHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wb2ludC12aWV3LXNjb3JlIGgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJveC1zbGlkZS1zaG93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmJveHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uaGlzdG9yeXtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmJ0bi1jdXN0b217XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzljMTI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmJveC1pY29ue1xuICBjb2xvcjogIzNjOGRiYztcbn1cbi5ib3gtaWNvbiAubWF0LWljb257XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG59XG4uYm94LWljb24gLm1hdGVyaWFsLWljb25ze1xuICBmb250LXNpemU6IDI2cHg7XG59XG4uY2FyZC1pbmZve1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDAgYXV0bzsgXG59XG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6NTc2cHgpIHtcbiAgLmJveHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 61127:
/*!*********************************************************************!*\
  !*** ./src/app/testbank_frontend/take-test/controller.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TakeTestComponent": () => (/* binding */ TakeTestComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var src_app_core_services_questionInterface_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/questionInterface.service */ 43191);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _ultities_upload_image_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ultities/upload-image/controller.component */ 98296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_services_crop_and_view_pdf_mix_question_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/crop_and_view_pdf/mix-question.service */ 54569);
/* harmony import */ var src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_helpers/LocalStorageObjetc */ 3279);
/* harmony import */ var src_app_core_services_crop_and_view_pdf_mix_question_2_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/crop_and_view_pdf/mix-question-2.service */ 61828);
/* harmony import */ var src_app_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/firestore.service */ 86253);
/* harmony import */ var src_app_core_services_cdn_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/cdn.service */ 15043);
/* harmony import */ var _core_services_encrypt_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../core/services/encrypt.service */ 56308);
/* harmony import */ var src_app_core_services_crop_and_view_pdf_docx_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/crop_and_view_pdf/docx.service */ 54729);
/* harmony import */ var src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/zipdata.service */ 2366);
/* harmony import */ var src_app_core_services_time_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/time.service */ 72491);
/* harmony import */ var src_app_core_services_monitor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/monitor.service */ 88974);
/* harmony import */ var src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/browser.storage.service */ 34782);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/user.service */ 88386);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/services/global.service */ 54209);
/* harmony import */ var _takeTestInterface_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./takeTestInterface.service */ 53582);
/* harmony import */ var src_app_core_services_answertype_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/services/answertype.service */ 24782);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _ultities_submit_info_controller_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ultities/submit-info/controller.component */ 8361);
/* harmony import */ var _ultities_monitoring_dialog_controller_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ultities/monitoring-dialog/controller.component */ 63735);
/* harmony import */ var _ultities_check_essay_controller_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ultities/check-essay/controller.component */ 87283);
/* harmony import */ var _azota_ui_preview_media_controller_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../azota-ui/preview-media/controller.component */ 73852);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var _azota_ui_azt_loaded_img_azt_loaded_img_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../azota-ui/azt-loaded-img/azt-loaded-img.component */ 47865);
/* harmony import */ var _azota_ui_azt_upload_ui_controller_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../azota-ui/azt-upload-ui/controller.component */ 68415);
/* harmony import */ var _ultities_exit_exam_exit_exam_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ultities/exit-exam/exit-exam.component */ 44697);
/* harmony import */ var _ultities_comfirm_exam_comfirm_exam_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ultities/comfirm-exam/comfirm-exam.component */ 93871);
/* harmony import */ var _ultities_submit_name_controller_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ultities/submit-name/controller.component */ 14376);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _azota_ui_select_classes_controller_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../azota-ui/select_classes/controller.component */ 69692);
/* harmony import */ var _azota_ui_select_student_controller_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../azota-ui/select_student/controller.component */ 81903);
/* harmony import */ var _azota_ui_send_request_reapprove_controller_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../azota-ui/send-request-reapprove/controller.component */ 58410);
/* harmony import */ var _test_question_ui_controller_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./test-question-ui/controller.component */ 29400);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 10214);



















































const _c0 = ["modalSaveImageUpload"];
function TakeTestComponent_azt_loading_effect_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "azt-loading-effect");
} }
function TakeTestComponent_app_submit_info_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "app-submit-info", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("closeDialog", function TakeTestComponent_app_submit_info_3_Template_app_submit_info_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](); return ctx_r6.closeShowInfo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("data", ctx_r1.showFormInfo);
} }
function TakeTestComponent_app_monitor_screen_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "app-monitor-screen", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("closeDialog", function TakeTestComponent_app_monitor_screen_4_Template_app_monitor_screen_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](); return ctx_r8.closeAutoMonitor($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("data", ctx_r2.dataMonitorAuto);
} }
function TakeTestComponent_app_check_essay_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "app-check-essay", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("closeEssayDialog", function TakeTestComponent_app_check_essay_5_Template_app_check_essay_closeEssayDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](); return ctx_r10.closeEssayDialog($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("data", ctx_r3.dataEssayPopup);
} }
function TakeTestComponent_ng_template_6_azt_preview_media_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "azt-preview-media", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("closePreview", function TakeTestComponent_ng_template_6_azt_preview_media_0_Template_azt_preview_media_closePreview_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2); return ctx_r18.onFileClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("fileOption", ctx_r12.previewFile);
} }
function TakeTestComponent_ng_template_6_app_upload_image_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "app-upload-image", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("closeDialog", function TakeTestComponent_ng_template_6_app_upload_image_1_Template_app_upload_image_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2); return ctx_r20.conFirmUpload($event); })("addFileMobile", function TakeTestComponent_ng_template_6_app_upload_image_1_Template_app_upload_image_addFileMobile_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2); return ctx_r22.addFileMobileUpload($event); })("isOnSelectFile", function TakeTestComponent_ng_template_6_app_upload_image_1_Template_app_upload_image_isOnSelectFile_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2); return ctx_r23.onSelectFileEmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("hashCode", ctx_r13.hashIdUpdate)("data", ctx_r13.uploadImageData);
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "p", 24)(1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate2"](" Th\u1EDDi gian \u0111\u01B0\u1EE3c ph\u00E9p v\u00E0o thi: ", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind2"](4, 2, ctx_r27.exam_obj.startTime, "dd/MM/yy HH:mm"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind2"](5, 5, ctx_r27.exam_obj.endTime, "dd/MM/yy HH:mm"), "");
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1, " H\u00E3y ki\u1EC3m tra l\u1EA1i b\u00E0i l\u00E0m c\u1EE7a b\u1EA1n. H\u1EC7 th\u1ED1ng s\u1EBD t\u1EF1 \u0111\u1ED9ng n\u1ED9p b\u00E0i sau: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](4, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](7, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](10, " ho\u1EB7c b\u1EA1n c\u00F3 th\u1EC3 n\u1ED9p b\u00E0i ngay b\u1EB1ng c\u00E1ch \u1EA5n n\u00FAt b\u00EAn d\u01B0\u1EDBi. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", (ctx_r28.timeCount.hour || 0) > 9 ? ctx_r28.timeCount.hour : "0" + ctx_r28.timeCount.hour, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", (ctx_r28.timeCount.minute || 0) > 9 ? ctx_r28.timeCount.minute : "0" + ctx_r28.timeCount.minute, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", (ctx_r28.timeCount.second || 0) > 9 ? ctx_r28.timeCount.second : "0" + ctx_r28.timeCount.second, " ");
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 39)(1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2, "timer_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](3, " B\u1EA1n \u0111\u00E3 h\u1EBFt gi\u1EDD l\u00E0m b\u00E0i thi! H\u00E3y \u1EA5n n\u00FAt \"N\u1ED9p b\u00E0i\" b\u00EAn d\u01B0\u1EDBi \u0111\u1EC3 g\u1EEDi b\u00E0i l\u00EAn h\u1EC7 th\u1ED1ng. N\u1EBFu n\u1ED9p mu\u1ED9n, b\u00E0i l\u00E0m c\u1EE7a b\u1EA1n c\u00F3 th\u1EC3 kh\u00F4ng \u0111\u01B0\u1EE3c ch\u1EA5m \u0111i\u1EC3m, vui l\u00F2ng li\u00EAn h\u1EC7 gi\u00E1o vi\u00EAn \u0111\u1EC3 ph\u00FAc kh\u1EA3o! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 39)(1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2, "timer_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](3, " B\u1EA1n \u0111\u00E3 qu\u00E1 gi\u1EDD n\u1ED9p b\u00E0i thi! H\u00E3y \u1EA5n n\u00FAt \"N\u1ED9p b\u00E0i mu\u1ED9n\" b\u00EAn d\u01B0\u1EDBi \u0111\u1EC3 g\u1EEDi b\u00E0i l\u00EAn h\u1EC7 th\u1ED1ng. B\u00E0i l\u00E0m c\u1EE7a b\u1EA1n c\u00F3 th\u1EC3 kh\u00F4ng \u0111\u01B0\u1EE3c ch\u1EA5m \u0111i\u1EC3m, vui l\u00F2ng li\u00EAn h\u1EC7 gi\u00E1o vi\u00EAn \u0111\u1EC3 ph\u00FAc kh\u1EA3o! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](1, "azt-loaded-img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("imgSrc", item_r34.questionContentParse[0].groupUrl);
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_4_azt_loaded_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "azt-loaded-img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](1, "mycdn");
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("imgSrc", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind1"](1, 1, item_r34.questionContentParse[0].url));
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_4_azt_loaded_img_1_Template, 2, 3, "azt-loaded-img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", item_r34.questionContentParse[0].extension == "png" || item_r34.questionContentParse[0].extension == "jpg");
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](1, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpropertyInterpolate"]("src", item_r34.mixDataImg, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsanitizeUrl"]);
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 63)(1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"]("", config_r48.alpha ? config_r48.alpha : config_r48.key, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("innerHtml", config_r48.content, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsanitizeHtml"]);
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 57)(1, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_6_div_6_Template, 5, 2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"]("C\u00E2u\u00A0", (item_r34.index || 0) < 9 ? "0" + ((item_r34.index || 0) + 1) : (item_r34.index || 0) + 1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("innerHtml", item_r34.questionContentParse[0].content, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", item_r34.answerConfigParse);
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", item_r34.choseAnswer, " ");
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_8_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span")(1, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2, "Ch\u01B0a tr\u1EA3 l\u1EDDi");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 65)(1, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](3, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_8_span_3_Template, 2, 1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](4, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_8_span_4_Template, 3, 0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", item_r34.choseAnswer && item_r34.choseAnswer != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !item_r34.choseAnswer || item_r34.choseAnswer == "");
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_10_textarea_5_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "textarea", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("focus", function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_10_textarea_5_Template_textarea_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r58); const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2).$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5); return ctx_r56.autoResizeEssayAnswer({ id: item_r34.id || 0, type: 4 }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpropertyInterpolate"]("id", "answer-0-all-" + item_r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵattribute"]("question_id", item_r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"]("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", item_r34.choseAnswer, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t");
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_10_textarea_6_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "textarea", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("focus", function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_10_textarea_6_Template_textarea_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r62); const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2).$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5); return ctx_r60.autoResizeEssayAnswer({ id: item_r34.id || 0, type: 4 }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1, "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTh\u00ED sinh ch\u01B0a nh\u1EADp th\u00F4ng tin\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpropertyInterpolate"]("id", "answer-0-all-" + item_r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵattribute"]("question_id", item_r34.id);
} }
const _c1 = function (a0) { return { "w-100": a0 }; };
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 65)(1, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "div", 71)(4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_10_textarea_5_Template, 2, 3, "textarea", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_10_textarea_6_Template, 2, 2, "textarea", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](3, _c1, ctx_r41.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", item_r34.choseAnswer && item_r34.choseAnswer != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !item_r34.choseAnswer || item_r34.choseAnswer == "");
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](3, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_3_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](4, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_4_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_5_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_6_Template, 7, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](8, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_8_Template, 5, 2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](9, "isOneChoiceAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](10, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_div_10_Template, 7, 5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](11, "isEssayAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](12, "isFillAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", item_r34.questionContentParse[0].groupUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", item_r34.isImage == 1 && !(item_r34.name == null ? null : item_r34.name.startsWith("[PDFv2]")));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", item_r34.isImage == 1 && (item_r34.name == null ? null : item_r34.name.startsWith("[PDFv2]")));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", item_r34.isImage == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind1"](9, 6, item_r34.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind1"](11, 8, item_r34.answerType) || _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind1"](12, 10, item_r34.answerType));
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_mat_tab_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 79)(1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_mat_tab_4_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6); return ctx_r67.openUploadImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](4, "(H\u1ED7 tr\u1EE3 \u1EA2nh, Video, Audio ho\u1EB7c File PDF)");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate"](ctx_r65.files.length > 0 ? "N\u1ED9p th\u00EAm" : "N\u1ED9p t\u1EF1 lu\u1EADn");
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_mat_tab_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1, "B\u1EA1n ch\u01B0a n\u1ED9p File n\u00E0o l\u00EAn h\u1EC7 th\u1ED1ng, h\u00E3y \u1EA5n n\u00FAt \"N\u1ED9p t\u1EF1 lu\u1EADn\" \u0111\u1EC3 g\u1EEDi File l\u00EAn h\u1EC7 th\u1ED1ng.");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_mat_tab_4_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "mat-tab", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_mat_tab_4_div_1_Template, 5, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](2, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_mat_tab_4_div_2_Template, 2, 0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "app-upload-ui", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("changesPosImg", function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_mat_tab_4_Template_app_upload_ui_changesPosImg_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5); return ctx_r69.changesPosImg($event); })("previewFile", function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_mat_tab_4_Template_app_upload_ui_previewFile_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5); return ctx_r71.onShowFile($event); })("removeFile", function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_mat_tab_4_Template_app_upload_ui_removeFile_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r70); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5); return ctx_r72.removeImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpropertyInterpolate"]("label", "T\u1EF1 lu\u1EADn (" + (ctx_r33.files && ctx_r33.files.length > 0 ? ctx_r33.files.length : 0) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r33.totalTime > -200);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r33.files.length == 0 && ctx_r33.totalTime > -200);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("answerFiles", ctx_r33.files);
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "mat-card", 40)(1, "mat-tab-group")(2, "mat-tab", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](3, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_div_3_Template, 13, 12, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](4, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_mat_tab_4_Template, 4, 4, "mat-tab", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx_r31.questionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r31.hasEssayQuestion);
} }
function TakeTestComponent_ng_template_6_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 20)(1, "mat-card", 21)(2, "mat-card-content")(3, "div", 22)(4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](6, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](8, "div", 25)(9, "p", 26)(10, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](11, "timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](13, "p", 24)(14, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](15, "help_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](17, TakeTestComponent_ng_template_6_ng_template_2_div_0_p_17_Template, 6, 8, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](18, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](21, TakeTestComponent_ng_template_6_ng_template_2_div_0_div_21_Template, 11, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](22, TakeTestComponent_ng_template_6_ng_template_2_div_0_div_22_Template, 4, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](23, TakeTestComponent_ng_template_6_ng_template_2_div_0_div_23_Template, 4, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](24, "div", 32)(25, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_div_0_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](3); return ctx_r73.endTimeBackBtn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](26, "Tho\u00E1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](27, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_div_0_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](3); return ctx_r75.endTimeSubmitBtn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](29, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](30, TakeTestComponent_ng_template_6_ng_template_2_div_0_mat_card_30_Template, 5, 2, "mat-card", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](31, "div", 35)(32, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_div_0_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r74); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](3); return ctx_r76.endTimeBackBtn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](33, "Tho\u00E1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](34, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_div_0_Template_a_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r74); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](3); return ctx_r77.endTimeSubmitBtn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate"](ctx_r24.exam_obj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"]("M\u00E3 \u0111\u1EC1: ", ctx_r24.exam_obj.hashId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" Th\u1EDDi gian: ", ctx_r24.exam_obj.minutes, " ph\u00FAt");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" S\u1ED1 c\u00E2u: ", ctx_r24.countQuestion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r24.exam_obj.startTime && ctx_r24.exam_obj.endTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate2"]("Th\u00ED sinh: ", ctx_r24.userObj.fullName, " - V\u00E0o thi l\u00FAc: ", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind2"](20, 13, ctx_r24.testingResultObj.startedTest, "dd/MM/yy HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r24.totalTime >= -90 && ctx_r24.totalTime <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r24.totalTime >= -300);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r24.totalTime < -300);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate"](ctx_r24.totalTime < -300 ? "N\u1ED9p mu\u1ED9n" : "N\u1ED9p b\u00E0i");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r24.questionList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate"](ctx_r24.totalTime < -300 ? "N\u1ED9p mu\u1ED9n" : "N\u1ED9p b\u00E0i");
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_app_exit_exam_1_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "app-exit-exam", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("closeDialog", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_app_exit_exam_1_Template_app_exit_exam_closeDialog_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5); return ctx_r85.closeQuitDialog(); })("redirectToHomepage", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_app_exit_exam_1_Template_app_exit_exam_redirectToHomepage_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5); return ctx_r87.redirectToHomepage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("data", ctx_r79.quitTestData);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_app_comfirm_exam_2_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "app-comfirm-exam", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("closeDialog", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_app_comfirm_exam_2_Template_app_comfirm_exam_closeDialog_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5); return ctx_r88.closeSubmitDialog(); })("redirectToHomepage", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_app_comfirm_exam_2_Template_app_comfirm_exam_redirectToHomepage_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r89); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5); return ctx_r90.confirmSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("data", ctx_r80.submitData);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_app_submit_name_3_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "app-submit-name", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("closeDialog", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_app_submit_name_3_Template_app_submit_name_closeDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5); return ctx_r91.closeSubmitName($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("data", ctx_r81.submitNameData);
} }
const _c2 = function (a0) { return { "time-almost-end": a0 }; };
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 97)(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](3, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](6, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](4, _c2, ctx_r97.timeCount.almostEnd));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", (ctx_r97.timeCount.hour || 0) > 9 ? ctx_r97.timeCount.hour : "0" + ctx_r97.timeCount.hour, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", (ctx_r97.timeCount.minute || 0) > 9 ? ctx_r97.timeCount.minute : "0" + ctx_r97.timeCount.minute, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", (ctx_r97.timeCount.second || 0) > 9 ? ctx_r97.timeCount.second : "0" + ctx_r97.timeCount.second, " ");
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 98)(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2, " Kh\u00F4ng gi\u1EDBi h\u1EA1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "mat-icon", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](3, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](4, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_2_div_4_Template, 9, 6, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_2_div_5_Template, 3, 0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r93.unLimitTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r93.unLimitTime);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6); return ctx_r99.routerBackSelectStudent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](1, "div", 93)(2, "mat-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](4, "div", 101)(5, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](6, "Quay l\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"]("Th\u00ED sinh: ", ctx_r101.userObj.fullName, "");
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_4_p_1_Template, 2, 1, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r95.isEmpty(ctx_r95.userObj) && ctx_r95.userObj);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_5_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_5_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r104.goBackFullScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1, "To\u00E0n m\u00E0n h\u00ECnh");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_5_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "a", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_5_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r106.openUploadImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1, "\u0110\u00EDnh k\u00E8m b\u00E0i T\u1EF1 lu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 106)(1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](2, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_5_a_2_Template, 2, 0, "a", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "div", 109)(4, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_5_Template_p_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6); return ctx_r108.changeShowType(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](5, "mat-icon", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](6, "format_list_bulleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](7, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_5_Template_p_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r109); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6); return ctx_r110.changeShowType(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](8, "mat-icon", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](9, "view_compact");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](10, "div")(11, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_5_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r109); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6); return ctx_r111.openQuitDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](12, "Tho\u00E1t ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](13, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_5_a_13_Template, 2, 0, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](14, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_5_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r109); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6); return ctx_r112.openSubmitExam(true, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](15, "N\u1ED9p b\u00E0i");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r96.hasMonitorScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r96.hasEssayQuestion);
} }
const _c3 = function (a0) { return { "d-none": a0 }; };
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 86)(1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](2, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_2_Template, 6, 2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](3, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_3_Template, 7, 0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](4, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_4_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_div_5_Template, 16, 2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](5, _c3, ctx_r82.isMobile && !ctx_r82.chooseChildData.isShow));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r82.chooseChildData.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r82.chooseChildData.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r82.chooseChildData.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r82.chooseChildData.isShow);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "app-select-classes", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("selectClassroom", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_ng_template_0_Template_app_select_classes_selectClassroom_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6); return ctx_r115.closeChooseStudent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("dataClass", ctx_r113.chooseChildData.classObjs)("isSearchTeacher", false)("isMobile", ctx_r113.isMobile);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_ng_template_1_app_send_request_1_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "app-send-request", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("confirmSend", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_ng_template_1_app_send_request_1_Template_app_send_request_confirmSend_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r118.confirmSendRequest($event); })("closeDialog", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_ng_template_1_app_send_request_1_Template_app_send_request_closeDialog_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r119); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r120.closeRequestDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("data", ctx_r117.sendRequestData);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "app-select-student", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("selectChild", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_ng_template_1_Template_app_select_student_selectChild_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r122); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6); return ctx_r121.closeChooseStudent($event); })("approvedByName", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_ng_template_1_Template_app_select_student_approvedByName_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r122); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6); return ctx_r123.approvedByName($event); })("backToClass", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_ng_template_1_Template_app_select_student_backToClass_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r122); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6); return ctx_r124.backToClassList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_ng_template_1_app_send_request_1_Template, 1, 1, "app-send-request", 120);
} if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("data", ctx_r114.chooseChildData)("showAddStudent", ctx_r114.chooseChildData.classObj == null ? null : ctx_r114.chooseChildData.classObj.showAddStudent)("isSearchTeacher", false)("back_link", true)("isMobile", ctx_r114.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r114.sendRequestData.isShow);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](0, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_ng_template_0_Template, 1, 3, "ng-template", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_ng_template_1_Template, 2, 6, "ng-template", 84);
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r83.selectClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r83.selectStudent);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" Vui l\u00F2ng quay l\u1EA1i v\u00E0o l\u00FAc: ", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind2"](2, 1, ctx_r127.exam_obj.startTime, "dd/MM/yyyy, HH:mm:ss"), " ");
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_0_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r130); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r129.goToBuyExam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](1, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2, "\u0110i mua");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "mat-icon", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](4, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} }
const _c4 = function (a0) { return [a0]; };
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 123)(1, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](4, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_0_span_4_Template, 3, 4, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_0_span_5_Template, 5, 0, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](6, "div", 126)(7, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](8, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](9, " Quay l\u1EA1i trang ch\u1EE7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind1"](3, 4, ctx_r125.hasErrorMessage), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r125.hasErrorMessage == "lang_core_time_smaller_than_start_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r125.hasErrorMessage == "lang_core_doest_not_owner_exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](8, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind1"](8, 6, ctx_r125.homeLink)));
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_div_1_li_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate2"](" ", 9 > k_r137 ? "0" : "", "", k_r137 + 1, " ");
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_div_1_li_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate2"](" ", 9 > k_r137 ? "0" : "", "", k_r137 + 1, " ");
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "li", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_div_1_li_6_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r143); const k_r137 = restoredCtx.index; const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](9); return ctx_r142.goToQuestion(k_r137); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_div_1_li_6_span_1_Template, 2, 2, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](2, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_div_1_li_6_span_2_Template, 2, 2, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r136 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", item_r136.status == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", item_r136.status == true);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 137)(1, "div", 138)(2, "div", 139)(3, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](4, "Danh s\u00E1ch c\u00E2u h\u1ECFi");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](5, "ul", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_div_1_li_6_Template, 3, 2, "li", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("hidden", ctx_r134.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx_r134.questionList);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "azt-test-question-ui", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("setAnswerEmitter", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_Template_azt_test_question_ui_setAnswerEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r145); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r144.setAnswerTrueFalse($event); })("setAnswerEssayEmitter", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_Template_azt_test_question_ui_setAnswerEssayEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r145); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r146.setAnswerEssay($event); })("setResultTracking", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_Template_azt_test_question_ui_setResultTracking_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r145); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r147.setResultTracking($event); })("removeImgEmitter", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_Template_azt_test_question_ui_removeImgEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r145); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r148.removeImg($event); })("openSubmitExamEmitter", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_Template_azt_test_question_ui_openSubmitExamEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r145); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r149.openSubmitExam($event); })("nextQuestionEmitter", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_Template_azt_test_question_ui_nextQuestionEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r145); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r150.nextQuestion($event); })("prevQuestionEmitter", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_Template_azt_test_question_ui_prevQuestionEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r145); const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r151.prevQuestion($event); })("autoResizeEssayAnswerEmitter", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_Template_azt_test_question_ui_autoResizeEssayAnswerEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r145); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r152.autoResizeEssayAnswer($event); })("goToQuestionEmitter", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_Template_azt_test_question_ui_goToQuestionEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r145); const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r153.goToQuestion($event); })("goToQuestionAllEmitter", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_Template_azt_test_question_ui_goToQuestionAllEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r145); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r154.goToQuestionAll($event); })("sendAudioEmitToParent", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_Template_azt_test_question_ui_sendAudioEmitToParent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r145); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r155.sendAudioForQuestion($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_div_1_Template, 7, 2, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("hasErrorMessage", ctx_r132.hasErrorMessage)("hasEssayQuestion", ctx_r132.hasEssayQuestion)("exam_obj", ctx_r132.exam_obj)("firstInGroupIndexes", ctx_r132.firstInGroupIndexes)("timeCount", ctx_r132.timeCount)("questionList", ctx_r132.questionList)("homeLink", ctx_r132.homeLink)("files", ctx_r132.files)("showUnit", ctx_r132.showUnit)("isMobile", ctx_r132.isMobile)("showList", ctx_r132.showList)("unLimitTime", ctx_r132.unLimitTime)("isShowSheet", ctx_r132.isShowSheet)("countQuestion", ctx_r132.countQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r132.submitNameData.isShow);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 172)(1, "a", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_div_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r162); const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](8); return ctx_r161.openUploadImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](2, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](3, "\u0110\u00EDnh k\u00E8m t\u1EF1 lu\u1EADn");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_li_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate2"](" ", 9 > k_r164 ? "0" : "", "", k_r164 + 1, " ");
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_li_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate2"](" ", 9 > k_r164 ? "0" : "", "", k_r164 + 1, " ");
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "li", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_li_20_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r170); const k_r164 = restoredCtx.index; const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](8); return ctx_r169.showList ? ctx_r169.goToQuestionAll(k_r164) : ctx_r169.goToQuestion(k_r164); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_li_20_span_1_Template, 2, 2, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](2, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_li_20_span_2_Template, 2, 2, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r163 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", item_r163.status == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", item_r163.status == true);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate"](ctx_r158.userObj.fullName);
} }
const _c5 = function (a0) { return { "time-almost-end-mobile": a0 }; };
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 176)(1, "mat-icon", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2, "av_timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](5, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](8, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](9, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](4, _c5, ctx_r159.timeCount.almostEnd));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", (ctx_r159.timeCount.hour || 0) > 9 ? ctx_r159.timeCount.hour : "0" + ctx_r159.timeCount.hour, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", (ctx_r159.timeCount.minute || 0) > 9 ? ctx_r159.timeCount.minute : "0" + ctx_r159.timeCount.minute, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", (ctx_r159.timeCount.second || 0) > 9 ? ctx_r159.timeCount.second : "0" + ctx_r159.timeCount.second, " ");
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 178)(1, "mat-icon", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2, "av_timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](4, " Kh\u00F4ng gi\u1EDBi h\u1EA1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} }
const _c6 = function (a0) { return { "col-6": a0 }; };
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div")(1, "div", 148)(2, "div", 149)(3, "div", 150)(4, "a", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r172); const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r171.openQuitDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](6, "power_settings_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](7, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_div_7_Template, 4, 0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](8, "div", 153)(9, "a", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r172); const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r173.openSubmitExam(true, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](10, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](11, "N\u1ED9p b\u00E0i");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](13, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](14, "div", 155)(15, "div", 156)(16, "div", 157)(17, "div", 158)(18, "div", 159)(19, "ul", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](20, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_li_20_Template, 3, 2, "li", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](21, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r172); const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r174.showSheet(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](22, "div", 163)(23, "p", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_Template_p_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r172); const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r175.showSheet(true, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](24, "mat-icon", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](25, "format_list_bulleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](26, "p", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_Template_p_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r172); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7); return ctx_r176.showSheet(true, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](27, "mat-icon", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](28, "view_compact");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](29, "div", 167)(30, "p", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](31, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_span_31_Template, 2, 1, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](32, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_div_32_Template, 11, 6, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](33, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_div_33_Template, 5, 0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r133.hasEssayQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](7, _c6, !ctx_r133.hasEssayQuestion));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("hidden", !ctx_r133.isShowSheet);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx_r133.questionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r133.isEmpty(ctx_r133.userObj) && ctx_r133.userObj);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r133.unLimitTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r133.unLimitTime);
} }
const _c7 = function (a0, a1) { return { "monitor-screen": a0, "monitor-screen-mobile": a1 }; };
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 123)(1, "app-upload-ui", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("changesPosImg", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_Template_app_upload_ui_changesPosImg_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r178); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6); return ctx_r177.changesPosImg($event); })("previewFile", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_Template_app_upload_ui_previewFile_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r178); const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6); return ctx_r179.onShowFile($event); })("removeFile", function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_Template_app_upload_ui_removeFile_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r178); const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6); return ctx_r180.removeImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](2, "div", 132, 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](4, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_azt_test_question_ui_4_Template, 2, 15, "azt-test-question-ui", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_div_5_Template, 34, 9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("answerFiles", ctx_r126.files)("isTesting", true)("onMobile", ctx_r126.isMobile)("showList", ctx_r126.showList);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction2"](7, _c7, !ctx_r126.isMobile, ctx_r126.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r126.submitNameData.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r126.isMobile);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](0, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_0_Template, 10, 10, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_div_1_Template, 6, 10, "div", 122);
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r84.hasErrorMessage != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r84.hasErrorMessage == "");
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_app_exit_exam_1_Template, 1, 1, "app-exit-exam", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](2, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_app_comfirm_exam_2_Template, 1, 1, "app-comfirm-exam", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](3, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_app_submit_name_3_Template, 1, 1, "app-submit-name", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](4, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_div_4_Template, 6, 7, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_5_Template, 2, 2, "ng-template", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_ng_template_6_Template, 2, 2, "ng-template", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r78.quitTestData.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r78.submitData.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r78.submitNameData.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r78.hasErrorMessage == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r78.chooseChildData.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r78.chooseChildData.isShow);
} }
function TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](0, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_ng_container_0_Template, 7, 6, "ng-container", 68);
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r26.errorLoadMixedAssets && ctx_r26.validForTakeTest);
} }
const _c8 = function (a0, a1, a2) { return { "time-client-pc": a0, "time-client-mobile": a1, "time-client-notValid": a2 }; };
function TakeTestComponent_ng_template_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](0, TakeTestComponent_ng_template_6_ng_template_2_div_0_Template, 36, 16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, TakeTestComponent_ng_template_6_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "div", 17)(4, "p", 18)(5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](2);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r15.validForTakeTest)("ngIfElse", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction3"](7, _c8, !ctx_r15.isMobile && ctx_r15.validForTakeTest, ctx_r15.isMobile && ctx_r15.validForTakeTest, !ctx_r15.validForTakeTest));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind2"](7, 4, ctx_r15.timeClient, "dd/MM/yy HH:mm"));
} }
function TakeTestComponent_ng_template_6_azt_loading_effect_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "azt-loading-effect", 181);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("customText", "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u \u0111\u1EC1 thi: " + ctx_r16.loadMixedExamProgress + "%");
} }
function TakeTestComponent_ng_template_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 182)(1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](3, " C\u00F3 l\u1ED7i khi t\u1EA3i d\u1EEF li\u1EC7u \u0111\u1EC1 thi, h\u00E3y th\u1EED l\u1EA1i b\u1EB1ng c\u00E1ch t\u1EA3i l\u1EA1i trang web!");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function TakeTestComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](0, TakeTestComponent_ng_template_6_azt_preview_media_0_Template, 1, 1, "azt-preview-media", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, TakeTestComponent_ng_template_6_app_upload_image_1_Template, 1, 2, "app-upload-image", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](2, TakeTestComponent_ng_template_6_ng_template_2_Template, 8, 11, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](4, TakeTestComponent_ng_template_6_azt_loading_effect_4_Template, 1, 1, "azt-loading-effect", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, TakeTestComponent_ng_template_6_div_5_Template, 4, 0, "div", 12);
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r5.isShowPreviewFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r5.uploadImageData.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r5.isMixedService2 && !ctx_r5.doneLoadMixedExamAssets && !ctx_r5.errorLoadMixedAssets)("ngIfElse", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r5.errorLoadMixedAssets);
} }
const _c9 = function (a0) { return { "pb-5 pl-0 pr-0": a0 }; };
class TakeTestComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(fb, activeRoute, commonService, baseApiService, mixService, localStorageObjetct, mixService2, fireStoreService, cdnService, encryptService, docxService, zipdataService, timeService, monitorService, browserStorageService, userService, frontExamTrackService, frontStudentService, globalService, frontExamResultService, frontExamService, frontExamResultUploadService, customQuestionAnswerConfig, takeTestInterfaceService, answerTypeService) {
        super(commonService);
        this.fb = fb;
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.mixService = mixService;
        this.localStorageObjetct = localStorageObjetct;
        this.mixService2 = mixService2;
        this.fireStoreService = fireStoreService;
        this.cdnService = cdnService;
        this.encryptService = encryptService;
        this.docxService = docxService;
        this.zipdataService = zipdataService;
        this.timeService = timeService;
        this.monitorService = monitorService;
        this.browserStorageService = browserStorageService;
        this.userService = userService;
        this.frontExamTrackService = frontExamTrackService;
        this.frontStudentService = frontStudentService;
        this.globalService = globalService;
        this.frontExamResultService = frontExamResultService;
        this.frontExamService = frontExamService;
        this.frontExamResultUploadService = frontExamResultUploadService;
        this.customQuestionAnswerConfig = customQuestionAnswerConfig;
        this.takeTestInterfaceService = takeTestInterfaceService;
        this.answerTypeService = answerTypeService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_38__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormGroup({}); // Form group
        this.homeLink = ''; // Link về dashboard
        this.tenantId = 1; // ID của ng tạo ra đề thi
        this.curCateId = 0; // ID danh mục chứa đề thi
        this.hashId = ''; // Mã đề thi
        this.userAgent = ''; // Thông tin Agent người dùng
        this.backLink = ''; // url khi back lại trang trước
        this.intervalSync = 0;
        this.intervalExamTimeout = 0;
        this.intervalGetTimeServer = 0;
        this.intervalAutoSubmit = 0; // 2 biến để set or clear interval
        this.intervalTimeClient = 0;
        //region Get Data, Parse Data and Bind Data
        this.totalTime = 0; // Tổng thời gian làm bài (second)
        this.unLimitTime = false; // Có giới hạn time làm bài hay k
        this.startedTimeSecond = 0;
        this.startTestTime = 0;
        this.exam_obj = {}; // Thông tin đề thi
        this.firstInGroupIndexes = [];
        this.testingResultObj = {};
        this.userObj = {}; // Thông tin người dùng
        this.timeCount = { hour: 0, minute: 0, second: 0, almostEnd: false }; // Bộ đếm thời gian
        this.answerList = []; // List câu trả lời
        this.noteList = []; // List ghi chú(Đang tạm tắt note)
        this.questionList = []; // List câu hỏi
        this.startedTest = (0,_angular_common__WEBPACK_IMPORTED_MODULE_40__.formatDate)(new Date(), 'yyyy-MM-ddTHH:mm:ss Z', 'en_vn'); // Thời gian bắt đầu làm bài
        this.countQuestion = 0; // Tổng số câu hỏi
        this.hasErrorMessage = ''; // Hiển thị lỗi do server trả về
        this.hasEssayQuestion = false; // Kiểm tra xem đề có tự luận không
        this.files = []; // Danh sách file tự luận đc up lên
        this.syncData = { datas: '' }; // Dữ liệu đồng bộ được trả về từ server
        this.hasMonitorScreen = false; // Kiểm tra có giám sát không
        this.onTypingAnswer = false;
        this.chooseChildData = { studentObjs: undefined, classObj: undefined, isPendingApproved: false, isShow: false }; // Dữ liệu gửi cho screen Chọn học sinh
        this.dataProcess = {}; // Dữ liệu lấy về từ serve
        this.password = '';
        this.backtoLink = '';
        this.tempStorageInfo = '';
        this.startTimeCountDownSecond = -1;
        this.resultTracks = [];
        this.validForTakeTest = true;
        this.sendingData = false;
        this.acceptSendTrack = true;
        this.isMixedService2 = false;
        this.doneLoadMixedExamAssets = false;
        this.errorLoadMixedAssets = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_38__.Subscription();
        this.countLoadedMixedAssets = 0;
        this.totalMixedExamAssets = 0; // số lượng ảnh ghép của một đề đảo
        this.checkSubmit = false;
        this.isAfterChooseStudent = false;
        this.clickedFromIframe = false;
        this.isShowPreviewFile = false;
        this.previewFile = {};
        this.oldScroll = 0;
        this.checkTimeOutExam = false;
        this.deviceId = '';
        // 20s được lưu log scroll 1 lần
        this.timeClient = Date.now();
        this.customDocument = Object.assign({}, document);
        this.browserName = '';
        this.submitData = { id: 0, time: 0, isShow: false };
        this.quitTestData = { id: 0, time: 0, isShow: false };
        //region select student
        this.selectStudent = false;
        this.selectClass = false;
        this.sendRequestData = { studentObj: undefined, classId: 0, isShow: false };
        //region Support(Check and calc logic) then return function
        this.isMobile = false; // check mobile or web
        this.checkEssayPopup = true; // kiểm tra essayPopup hiển thị hay chưa (đảm bảo chỉ hiển thị 1 lần)
        //region open modal dialog
        this.submitNameData = { isShow: false };
        this.showFormInfo = { infoFields: [], isShow: false };
        this.dataMonitorAuto = { isShow: false };
        this.dataEssayPopup = { isShow: false };
        //region Upload file dialog flow
        this.uploadImageData = { id: 0, isShow: false }; // data truyền vào uploadDialog
        this.onShowUpload = false; // cho biết đang mở popup Upload hay k
        //region Upload File mobile (QR code or link)
        this.hashIdUpdate = '';
        //region UI change
        this.curQuestion = 0; // lấy index câu hỏi đang hiển thị
        this.showList = true; // hiển thị danh sách câu hỏi dạng list
        this.showUnit = false; // Hiển thị từng câu
        this.isShowSheet = false; // hiển thị bảng danh sách câu hỏi đánh số
    }
    get loadMixedExamProgress() {
        return Math.round((this.countLoadedMixedAssets / this.totalMixedExamAssets) * 100);
    }
    timeOut(event) {
        if (event == 'done') {
            location.reload();
        }
    }
    // call Api get data
    getData() {
        var password = this.browserStorageService.getSimpleStorage('password_' + this.hashId);
        var hasInfo = this.browserStorageService.getSimpleStorage('userInfoV3_' + this.hashId);
        if (password) {
            this.password = password;
        }
        else {
            this.password = '';
        }
        this.subscriptions.add(this.frontExamService.apiFrontExamGetObjV2Get(this.hashId, this.password, hasInfo || this.tempStorageInfo != '' ? 1 : 0, this.deviceId).subscribe(response => {
            var _a, _b;
            if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('errorMessage')) && ((_b = response.data) === null || _b === void 0 ? void 0 : _b.errorMessage) == 'lang_core_exam_password_invalid') {
                if (this.password == '') {
                    this.openSubmitName(false, this.hashId, true);
                    this.hasErrorMessage = 'lang_core_exam_password_needed';
                    this.stopStatusObj();
                }
                else {
                    this.browserStorageService.removeSimpleStorage('password_' + this.hashId);
                    this.openSubmitName(false, this.hashId, true, 'lang_core_exam_password_invalid');
                    this.stopStatusObj();
                }
            }
            else {
                this.processData(response);
            }
        }));
        // event google analytics
        this.commonService.gaEvent('FrontExam_GetObj');
    }
    // Parse Data - preparing Data
    processData(response) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10;
        if (response.success == 1) {
            this.exam_obj = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.examObj) !== null && _b !== void 0 ? _b : {};
            this.testingResultObj = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.testingExamResultObj) !== null && _d !== void 0 ? _d : {};
            if ((this.exam_obj && this.exam_obj.mixQuestion == 2) || ((_e = this.testingResultObj.mixquestionId) !== null && _e !== void 0 ? _e : -1) > 0) {
                this.firstInGroupIndexes = this.mixService2.refindFirstInGroupIndexes(this.firstInGroupIndexes, (_g = (_f = response.data) === null || _f === void 0 ? void 0 : _f.questionObjs) !== null && _g !== void 0 ? _g : []);
            }
            else {
                this.firstInGroupIndexes = this.commonService.parseJson((_h = this.exam_obj.firstInGroupIndexes) !== null && _h !== void 0 ? _h : '');
            }
            this.userObj = (_k = (_j = response.data) === null || _j === void 0 ? void 0 : _j.studentObj) !== null && _k !== void 0 ? _k : {};
            this.commonService.translateMetaData({
                title: 'Làm bài: ' + (((_m = (_l = response.data) === null || _l === void 0 ? void 0 : _l.examObj) === null || _m === void 0 ? void 0 : _m.name) ? response.data.examObj.name : ''),
                description: ((_p = (_o = response.data) === null || _o === void 0 ? void 0 : _o.examObj) === null || _p === void 0 ? void 0 : _p.name) ? response.data.examObj.name : ''
            });
            this.dataProcess = (_q = response.data) !== null && _q !== void 0 ? _q : {};
            if (this.baseApiService.isLogin() && this.baseApiService.isAnonymousRole()) {
                if (((_s = (_r = this.dataProcess) === null || _r === void 0 ? void 0 : _r.examObj) === null || _s === void 0 ? void 0 : _s.whoAllow) == 0) {
                    // accept anonymous
                    var userObj = this.baseApiService.getUserObj();
                    // check user.name == user.phone
                    if (this.userService.isAnonymousName(userObj)) {
                        // if equal -> show popup submit name, else accept test
                        this.stopStatusObj();
                        this.openSubmitName(false);
                    }
                    else {
                        if (((_u = (_t = response.data) === null || _t === void 0 ? void 0 : _t.examObj) === null || _u === void 0 ? void 0 : _u.enterInfo) == 1 && this.browserStorageService.getSimpleStorage('userInfoV3_' + this.exam_obj.hashId) == null && this.tempStorageInfo == '') {
                            var infoFields = this.commonService.parseJson((_x = (_w = (_v = response.data) === null || _v === void 0 ? void 0 : _v.examObj) === null || _w === void 0 ? void 0 : _w.infoFieldsV2) !== null && _x !== void 0 ? _x : '');
                            if (infoFields && infoFields.length > 0 && infoFields != '') {
                                this.openShowInfo(infoFields);
                                this.hasErrorMessage = 'lang_cms_test_must_submit_info';
                            }
                            else {
                                this.initStatusObj();
                                this.getData();
                            }
                        }
                        else {
                            this.fillData(response);
                        }
                        this.stopStatusObj();
                    }
                }
                else {
                    // non anonymous (whoAllow == 1 or 2) -> redirect to login for parent.
                    this.stopStatusObj();
                    this.openSubmitName(true);
                }
            }
            else {
                if (((_z = (_y = this.dataProcess) === null || _y === void 0 ? void 0 : _y.examObj) === null || _z === void 0 ? void 0 : _z.whoAllow) == 2) {
                    // show select child
                    if (this.dataProcess.hasOwnProperty('studentObj') && !this.isEmpty((_1 = (_0 = this.dataProcess) === null || _0 === void 0 ? void 0 : _0.studentObj) !== null && _1 !== void 0 ? _1 : {})) {
                        var studentObj = this.dataProcess.studentObj;
                        if ((studentObj === null || studentObj === void 0 ? void 0 : studentObj.isVerified) == 1) {
                            // Đã chọn student và đã được vào lớp
                            if (((_3 = (_2 = response.data) === null || _2 === void 0 ? void 0 : _2.examObj) === null || _3 === void 0 ? void 0 : _3.enterInfo) == 1 && this.browserStorageService.getSimpleStorage('userInfoV3_' + this.exam_obj.hashId) == null && this.tempStorageInfo == '') {
                                var infoFields = this.commonService.parseJson((_4 = response.data.examObj.infoFieldsV2) !== null && _4 !== void 0 ? _4 : '');
                                if (infoFields && infoFields.length > 0 && infoFields != '') {
                                    this.openShowInfo(infoFields);
                                    this.hasErrorMessage = 'lang_cms_test_must_submit_info';
                                }
                                else {
                                    this.initStatusObj();
                                    this.getData();
                                }
                            }
                            else {
                                this.fillData(response);
                            }
                            this.stopStatusObj();
                        }
                        else {
                            // Đã chọn student nhưng chưa được vào lớp
                            this.stopStatusObj();
                            this.openChooseStudent({ student: studentObj !== null && studentObj !== void 0 ? studentObj : null, chooseStudentData: null, responseFrontExam: null }, 3);
                        }
                    }
                    else {
                        // Chưa chọn student (response trả ra studentObj = null) => chọn lớp trước
                        if (this.dataProcess.hasOwnProperty('classroomObj') && this.isEmpty((_6 = (_5 = this.dataProcess) === null || _5 === void 0 ? void 0 : _5.classroomObj) !== null && _6 !== void 0 ? _6 : {})) {
                            // chưa có lớp
                            this.stopStatusObj();
                            this.openChooseStudent({ responseFrontExam: this.dataProcess, student: null, chooseStudentData: null }, 1);
                        }
                        else {
                            // đã có lớp
                            this.stopStatusObj();
                            var filterStudentObjs = [];
                            if (this.dataProcess.studentObjs && this.dataProcess.studentObjs.length > 0) {
                                filterStudentObjs = this.dataProcess.studentObjs.filter((each) => { var _a, _b; return each.classroomId == ((_b = (_a = this.dataProcess.classroomObj) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : 0); });
                            }
                            var data = { studentObjs: filterStudentObjs, classroomObj: this.dataProcess.classroomObj, onlyOneClass: true };
                            this.openChooseStudent({ chooseStudentData: data, student: null, responseFrontExam: null }, 2);
                        }
                    }
                }
                else {
                    if (((_8 = (_7 = response.data) === null || _7 === void 0 ? void 0 : _7.examObj) === null || _8 === void 0 ? void 0 : _8.enterInfo) == 1 && this.browserStorageService.getSimpleStorage('userInfoV3_' + this.exam_obj.hashId) == null && this.tempStorageInfo == '') {
                        var infoFields = this.commonService.parseJson((_9 = response.data.examObj.infoFieldsV2) !== null && _9 !== void 0 ? _9 : '');
                        if (infoFields && infoFields.length > 0 && infoFields != '') {
                            this.openShowInfo(infoFields);
                            this.hasErrorMessage = 'lang_cms_test_must_submit_info';
                        }
                        else {
                            this.initStatusObj();
                            this.getData();
                        }
                    }
                    else {
                        this.fillData(response);
                    }
                    this.stopStatusObj();
                }
            }
        }
        else {
            this.showErrorSnack((_10 = response.message) !== null && _10 !== void 0 ? _10 : '');
        }
    }
    /*
    Update thêm phần render câu hỏi pdf được đảo lộn
    ********************************************************
  */
    changeQuestionContent(questions) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        var newQuestion = [];
        var limitAudioStorage = this.commonService.parseJson((_a = this.browserStorageService.getSimpleStorage('limitAudioV5_' + this.exam_obj.id + '_' + this.testingResultObj.id)) !== null && _a !== void 0 ? _a : '');
        for (var i = 0; i < questions.length; i++) {
            let questionObj = questions[i];
            if (questionObj) {
                if (questions[i].answerConfig) {
                    if (this.customQuestionAnswerConfig.isPDFVer2Question((_b = questionObj.name) !== null && _b !== void 0 ? _b : '', (_c = questionObj.isImage) !== null && _c !== void 0 ? _c : -1) || this.customQuestionAnswerConfig.isDocxQuestion((_d = questionObj.isImage) !== null && _d !== void 0 ? _d : -1)) {
                        questionObj.answerConfigParse = this.customQuestionAnswerConfig.changeAnswerConfigVer2((_f = this.commonService.castJsonToClassObjs(src_app_core_services_questionInterface_service__WEBPACK_IMPORTED_MODULE_0__.QuestionAnswerConfig, (_e = questions[i].answerConfig) !== null && _e !== void 0 ? _e : '')) !== null && _f !== void 0 ? _f : [], questionObj, false);
                    }
                    else {
                        questionObj.answerConfigParseVer1 = this.customQuestionAnswerConfig.changeAnswerConfigVer1((_h = this.commonService.castJsonToClassObj(src_app_core_services_questionInterface_service__WEBPACK_IMPORTED_MODULE_0__.QuestionAnswerConfigVer1, (_g = questions[i].answerConfig) !== null && _g !== void 0 ? _g : '')) !== null && _h !== void 0 ? _h : {}, questionObj, false);
                    }
                }
                if (questions[i].questionContent) {
                    questionObj.questionContentParse = this.commonService.parseJson((_j = questions[i].questionContent) !== null && _j !== void 0 ? _j : '');
                    if (questionObj.questionContentParse) {
                        questionObj.questionContentParse[0].firstInGroupIndexesParse = this.commonService.parseJson((_l = (_k = questionObj.questionContentParse) === null || _k === void 0 ? void 0 : _k[0].firstInGroupIndexes) !== null && _l !== void 0 ? _l : '');
                    }
                }
                if (questions[i].attachments) {
                    questionObj.attachmentsParse = this.commonService.parseJson((_m = questions[i].attachments) !== null && _m !== void 0 ? _m : '');
                }
                if (this.answerTypeService.isEssayAnswer(questions[i].answerType)) {
                    questionObj.essayText = '';
                }
                if (this.answerTypeService.isFillAnswer(questions[i].answerType)) {
                    questionObj.essayText = '';
                }
                if (((_o = this.exam_obj.limitAudio) !== null && _o !== void 0 ? _o : -1) > 0) {
                    if (limitAudioStorage) {
                        var foundLimitAudioQuestion = limitAudioStorage.filter((audio) => audio.questionId == questions[i].id);
                        if (foundLimitAudioQuestion && foundLimitAudioQuestion.length > 0) {
                            questionObj.limitAudio = foundLimitAudioQuestion[0].limitTimes + foundLimitAudioQuestion[0].limitPlay;
                            questionObj.limitPlay = 0;
                        }
                    }
                    else {
                        if (questionObj.attachmentsParse && questionObj.attachmentsParse.length > 0) {
                            questionObj.limitAudio = 0;
                            questionObj.limitPlay = 0;
                        }
                    }
                }
                questionObj = Object.assign(Object.assign({}, questionObj), { index: i, status: false });
                newQuestion.push(questionObj);
            }
        }
        // Loai v2 la auto ve lai cau
        if (newQuestion != null && newQuestion.length > 0 && ((_p = newQuestion[0].name) === null || _p === void 0 ? void 0 : _p.startsWith('[PDFv2]'))) {
            // PDF có đảo câu
            if (this.exam_obj.labelsUrl && this.exam_obj.labelsUrl.startsWith('[')) {
                // Kiểu gộp ảnh
                this.isMixedService2 = true;
                let labelsUrls = this.commonService.parseJson(this.exam_obj.labelsUrl);
                this.totalMixedExamAssets = labelsUrls.length;
                let loadItemStatuses = labelsUrls.map(url => true); // default mọi ảnh đều load ok
                // load ảnh label
                let labelsMap = {};
                let labelsImgs = [];
                let countLoaded = 0;
                for (let index = 0; index < labelsUrls.length; index++) {
                    labelsMap[`index_${index}`] = this.cdnService.getMyCdn(labelsUrls[index]);
                }
                // debugger
                for (const key in labelsMap) {
                    if (labelsMap.hasOwnProperty(key)) {
                        let image = new Image();
                        image.crossOrigin = 'anonymous';
                        let url = labelsMap[key];
                        let countTryLoad = 0;
                        image.onload = () => {
                            this.countLoadedMixedAssets++;
                            countLoaded++;
                            labelsImgs[parseInt(key.split('_')[1], 10)] = image;
                            if (countLoaded == labelsUrls.length) {
                                // load đủ ảnh
                                this.mixService2.drawMixQuestionTS(labelsImgs, newQuestion, this.exam_obj);
                                setTimeout(() => {
                                    this.doneLoadMixedExamAssets = true;
                                }, 1000);
                            }
                        };
                        image.onerror = () => {
                            if (countTryLoad < 2) {
                                setTimeout(() => {
                                    let retryUrl = '';
                                    switch (countTryLoad) {
                                        case 0:
                                            if (this.cdnService.isViettelCDN(retryUrl)) {
                                                retryUrl = this.cdnService.getRawCdnLink(url) + '?t=' + Date.now();
                                            }
                                            else {
                                                retryUrl = this.cdnService.getRawCdnLink(url);
                                            }
                                            break;
                                        default:
                                            retryUrl = this.cdnService.getRawCdnLink(url) + '?t=' + Date.now();
                                            break;
                                    }
                                    image.src = retryUrl;
                                    countTryLoad++;
                                }, 3000);
                            }
                            else {
                                loadItemStatuses[parseInt(key.split('_')[1], 10)] = false;
                                // Chỉ cần 1 ảnh load không thành cong, sẽ hiện thông báo load lại trang
                                // if( loadItemStatuses.filter(item => !item).length == loadItemStatuses.length ){}
                                this.errorLoadMixedAssets = true;
                                this.mixService2.trackPdfV2Error(url);
                            }
                        };
                        image.src = url;
                    }
                }
            }
            else {
                // Kiểu cũ
                this.mixService.drawMixQuestionTS((_q = this.exam_obj.labelsUrl) !== null && _q !== void 0 ? _q : '', newQuestion, this.exam_obj);
            }
        }
        if (((_r = this.exam_obj.limitAudio) !== null && _r !== void 0 ? _r : -1) > 0) {
            return this.removeNullContent(this.addAudioObjsToQuestion(newQuestion));
        }
        else {
            return this.removeNullContent(newQuestion);
        }
    }
    addAudioObjsToQuestion(questionObjs) {
        var returnArr = [];
        questionObjs.forEach((question) => {
            var _a, _b;
            if (question.attachmentsParse && question.attachmentsParse.length > 0) {
                question.audioLimitObjs = [];
                let forLength = ((_a = this.exam_obj.limitAudio) !== null && _a !== void 0 ? _a : 0) - ((_b = question.limitAudio) !== null && _b !== void 0 ? _b : 0);
                if (forLength > 0) {
                    for (var i = 0; i < forLength; i++) {
                        question.audioLimitObjs.push({ index: i, status: true });
                    }
                }
            }
            returnArr.push(question);
        });
        return returnArr;
    }
    sendAudioForQuestion(questionData) {
        var _a, _b, _c, _d, _e;
        for (var i = 0; i < this.questionList.length; i++) {
            if (this.questionList[i].id == ((_a = questionData.obj) === null || _a === void 0 ? void 0 : _a.id)) {
                if (questionData.play == 1) {
                    this.questionList[i].limitPlay = ((_b = this.questionList[i].limitPlay) !== null && _b !== void 0 ? _b : 0) + 1;
                }
                else {
                    this.questionList[i].limitPlay = ((_c = this.questionList[i].limitPlay) !== null && _c !== void 0 ? _c : 0) - 1;
                    this.questionList[i].limitAudio = ((_d = this.questionList[i].limitAudio) !== null && _d !== void 0 ? _d : 0) + 1;
                    (_e = this.questionList[i].audioLimitObjs) === null || _e === void 0 ? void 0 : _e.forEach((item) => {
                        if (item.index == questionData.index) {
                            item.status = false;
                        }
                    });
                }
            }
        }
        this.saveAudioLimitStorage();
    }
    saveAudioLimitStorage() {
        var _a, _b;
        var dataSave = [];
        this.questionList.forEach((question) => {
            if (question.attachmentsParse && question.attachmentsParse.length > 0) {
                dataSave.push({ questionId: question.id, limitTimes: question.limitAudio, limitPlay: question.limitPlay });
            }
        });
        if (dataSave.length > 0) {
            if (this.browserStorageService.getSizeOfStorage() > 4.5) {
                this.browserStorageService.removeExceptSimpleStorage((_b = (_a = this.exam_obj.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '', this.hashId);
            }
            this.browserStorageService.saveSimpleStorage('limitAudioV5_' + this.exam_obj.id + '_' + this.testingResultObj.id, JSON.stringify(dataSave));
        }
    }
    compareContent(answerConfig, answerObj) {
        if (answerConfig.key == answerObj.content) {
            return true;
        }
        else {
            return false;
        }
    }
    compareContentPDF(answerConfig, answerObj) {
        if (answerConfig.content == answerObj.content) {
            return true;
        }
        else {
            return false;
        }
    }
    // Fill data to model - re-binding Data
    fillData(response) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        this.checkResultTracking();
        this.userObj = this.exam_obj.whoAllow == 2 ? (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.studentObj) !== null && _b !== void 0 ? _b : this.baseApiService.getUserObj() : this.baseApiService.getUserObj();
        this.totalTime = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.countDownSecond) !== null && _d !== void 0 ? _d : 0;
        this.startTestTime = (_f = (_e = response.data) === null || _e === void 0 ? void 0 : _e.startServerSecond) !== null && _f !== void 0 ? _f : 0;
        // if(this.totalTime > 0) {
        //   this.browserStorageService.saveSimpleStorage("timeSubmitV2_"+ this.exam_obj.hashId + "_" + this.testingResultObj.id, JSON.stringify({totalTime: 90}));
        // } else {
        //   var timeCount = this.totalTime + 90;
        //   this.browserStorageService.saveSimpleStorage("timeSubmitV2_"+ this.exam_obj.hashId + "_" + this.testingResultObj.id, JSON.stringify({totalTime: timeCount}));
        // }
        var saveData = this.commonService.parseJson((_g = this.browserStorageService.getSimpleStorage('saveDataV4_' + this.exam_obj.id + '_' + this.testingResultObj.id)) !== null && _g !== void 0 ? _g : '');
        this.hashIdUpdate = (_j = (_h = response.data) === null || _h === void 0 ? void 0 : _h.hashCodeUpload) !== null && _j !== void 0 ? _j : '';
        this.sendHashIdUpdate(this.hashIdUpdate);
        if (((_k = response.data) === null || _k === void 0 ? void 0 : _k.hasOwnProperty('errorMessage')) && response.data.errorMessage) {
            this.hasErrorMessage = response.data.errorMessage;
            if (this.hasErrorMessage == 'lang_core_exam_password_invalid') {
                this.openSubmitName(false, this.hashId, true, 'lang_core_exam_password_invalid');
            }
            else if (this.hasErrorMessage == 'lang_core_exam_password_invalid' && this.password == '') {
                this.hasErrorMessage = 'lang_core_exam_password_needed';
                this.openSubmitName(false, this.hashId, true);
            }
            this.stopStatusObj();
        }
        else {
            this.hasErrorMessage = '';
            if (((_o = (_m = (_l = response.data) === null || _l === void 0 ? void 0 : _l.examObj) === null || _m === void 0 ? void 0 : _m.minutes) !== null && _o !== void 0 ? _o : -1) > 0) {
                this.unLimitTime = false;
            }
            else {
                this.unLimitTime = true;
                this.totalTime = 1;
            }
            if (((_q = (_p = response.data) === null || _p === void 0 ? void 0 : _p.countDownSecond) !== null && _q !== void 0 ? _q : 1) <= 0 && !this.unLimitTime) {
                // countDownTIme < 0 = hiển thị box lỗi => cho ấn nộp
                this.validForTakeTest = false;
            }
            else {
                this.validForTakeTest = true;
            }
            let questionObjsCast = this.commonService.castJsonToClassObjs(src_app_core_services_questionInterface_service__WEBPACK_IMPORTED_MODULE_0__.QuestionDynamicObjParse, JSON.stringify((_r = response.data) === null || _r === void 0 ? void 0 : _r.questionObjs));
            this.questionList = this.changeQuestionContent(questionObjsCast !== null && questionObjsCast !== void 0 ? questionObjsCast : []);
            if (this.exam_obj.autoMonitor && this.exam_obj.autoMonitor != 0) {
                this.openAutoMonitor();
                this.hasMonitorScreen = true;
            }
            this.docxService.replaceCanvasBackgroundTS(this.questionList);
            this.countQuestion = this.questionList.length;
            this.hasEssayQuestion = this.checkEssay();
            if (this.syncData && this.syncData.hasOwnProperty('datas') && this.syncData.datas != '') {
                var parseSyncData = this.commonService.parseJson(this.syncData.datas);
                if (saveData == null) {
                    // Nếu có syncData nhưng k có local
                    this.answerList = parseSyncData.answers != null ? parseSyncData.answers : [];
                    this.noteList = parseSyncData.notes != null ? parseSyncData.notes : [];
                    this.files = parseSyncData.files != null ? this.commonService.parseJson(parseSyncData.files) : [];
                    this.questionList = this.reBindDataQuestion(this.answerList);
                }
                else {
                    // co ca syncData ca local
                    if (parseSyncData.saveTime < saveData.saveTime) {
                        this.answerList = saveData.answers;
                        this.noteList = saveData.notes;
                        this.files = this.commonService.parseJson(saveData.files);
                        this.questionList = this.reBindDataQuestion(this.answerList);
                    }
                    else {
                        this.answerList = parseSyncData.answers;
                        this.noteList = parseSyncData.notes;
                        this.files = this.commonService.parseJson(parseSyncData.files);
                        this.questionList = this.reBindDataQuestion(this.answerList);
                    }
                }
            }
            else {
                if (saveData) {
                    this.answerList = saveData.answers;
                    this.noteList = saveData.notes;
                    this.files = this.commonService.parseJson(saveData.files);
                    this.questionList = this.reBindDataQuestion(this.answerList);
                }
            }
            this.saveAudioLimitStorage();
            if (this.validForTakeTest) {
                if (!this.unLimitTime) {
                    this.setTimeExam();
                    this.getTimeServer();
                }
            }
            else {
                this.takeAnswerForQuestion(this.answerList, this.questionList);
                if (this.totalTime >= -90 && this.totalTime <= 0) {
                    this.setTimeAutoSubmit((_s = this.globalService.plusGlobalInterval('exam')) !== null && _s !== void 0 ? _s : 0, 'exam');
                }
            }
            this.saveToStorage(this.answerList, this.noteList, this.files);
            this.setTimeClient();
        }
    }
    takeAnswerForQuestion(answerList, questionList) {
        questionList.forEach((question) => {
            answerList.forEach((answer) => {
                var _a, _b, _c;
                if (answer.questionId == question.id) {
                    if (this.answerTypeService.isFillAnswer(question.answerType) || this.answerTypeService.isEssayAnswer(question.answerType)) {
                        question.choseAnswer = answer.answerContent[0].content;
                    }
                    else if ((this.answerTypeService.isOneChoiceAnswer(question.answerType) || this.answerTypeService.isMultipleChoiceAnswer(question.answerType)) && question.answerConfigParse) {
                        var indexConfig = answer.answerContent[0].index;
                        if (question.isImage == 1) {
                            if ((_a = question.name) === null || _a === void 0 ? void 0 : _a.startsWith('[PDFv2]')) {
                                question.choseAnswer = question.answerConfigParse[indexConfig].alpha ? question.answerConfigParse[indexConfig].alpha : question.answerConfigParse[indexConfig].key;
                            }
                            else {
                                question.choseAnswer = (_c = (_b = question.answerConfigParseVer1) === null || _b === void 0 ? void 0 : _b[0].answerConfigV2) === null || _c === void 0 ? void 0 : _c[indexConfig].content;
                            }
                        }
                        else {
                            question.choseAnswer = question.answerConfigParse[indexConfig].alpha ? question.answerConfigParse[indexConfig].alpha : question.answerConfigParse[indexConfig].key;
                        }
                    }
                }
            });
        });
    }
    checkHiddenGroup(jsonInQuestion, index) {
        return jsonInQuestion ? !jsonInQuestion.includes(index !== null && index !== void 0 ? index : 0) : !this.firstInGroupIndexes.includes(index !== null && index !== void 0 ? index : 0);
    }
    reBindDataQuestion(answerList) {
        var newQuestionList = [];
        this.questionList.forEach((question) => {
            answerList.forEach((answer) => {
                var _a;
                if (answer.questionId == question.id) {
                    if (question.isImage == 0) {
                        if (this.answerTypeService.isEssayAnswer(question.answerType)) {
                            var contentAnswer = answer.answerContent && answer.answerContent.length > 0 ? answer.answerContent[0].content : '';
                            if (contentAnswer) {
                                question.essayText = contentAnswer;
                            }
                        }
                        else if (this.answerTypeService.isEssayAnswer(question.answerType)) {
                            var contentAnswer = answer.answerContent && answer.answerContent.length > 0 ? answer.answerContent[0].content : '';
                            if (contentAnswer) {
                                question.essayText = contentAnswer;
                            }
                        }
                        else {
                            if (question.answerConfigParse) {
                                for (var i = 0; i < question.answerConfigParse.length; i++) {
                                    if (this.compareContent(question.answerConfigParse[i], answer.answerContent && answer.answerContent.length > 0 ? answer.answerContent[0] : { index: 0, content: '' })) {
                                        question.answerConfigParse[i].checked = true;
                                        break;
                                    }
                                    else {
                                        question.answerConfigParse[i].checked = false;
                                    }
                                }
                            }
                        }
                    }
                    else if (question.isImage == 1 && ((_a = question.name) === null || _a === void 0 ? void 0 : _a.startsWith('[PDFv2]'))) {
                        if (this.answerTypeService.isEssayAnswer(question.answerType)) {
                            var contentAnswer = answer.answerContent && answer.answerContent.length > 0 ? answer.answerContent[0].content : '';
                            if (contentAnswer) {
                                question.essayText = contentAnswer;
                            }
                        }
                        else if (this.answerTypeService.isFillAnswer(question.answerType)) {
                            var contentAnswer = answer.answerContent && answer.answerContent.length > 0 ? answer.answerContent[0].content : '';
                            if (contentAnswer) {
                                question.essayText = contentAnswer;
                            }
                        }
                        else {
                            if (question.answerConfigParse) {
                                for (var i = 0; i < question.answerConfigParse.length; i++) {
                                    if (this.compareContent(question.answerConfigParse[i], answer.answerContent && answer.answerContent.length > 0 ? answer.answerContent[0] : { index: 0, content: '' })) {
                                        question.answerConfigParse[i].checked = true;
                                        break;
                                    }
                                    else {
                                        question.answerConfigParse[i].checked = false;
                                    }
                                }
                            }
                        }
                    }
                    else {
                        if (this.answerTypeService.isEssayAnswer(question.answerType)) {
                            var contentAnswer = answer.answerContent[0].content;
                            if (contentAnswer) {
                                question.essayText = contentAnswer;
                            }
                        }
                        else if (this.answerTypeService.isFillAnswer(question.answerType)) {
                            var contentAnswer = answer.answerContent[0].content;
                            if (contentAnswer) {
                                question.essayText = contentAnswer;
                            }
                        }
                        else {
                            if (question.answerConfigParse) {
                                for (var i = 0; i < question.answerConfigParse.length; i++) {
                                    if (this.compareContentPDF(question.answerConfigParse[i], answer.answerContent ? answer.answerContent[0] : { index: 0, content: '' })) {
                                        question.answerConfigParse[i].checked = true;
                                        break;
                                    }
                                    else {
                                        question.answerConfigParse[i].checked = false;
                                    }
                                }
                            }
                        }
                    }
                    question.status = true;
                }
            });
            newQuestionList.push(question);
        });
        return newQuestionList;
    }
    reBindNote() {
        this.noteList.forEach((note) => {
            if (Array.isArray(note.noteContent)) {
                var noteValue = note.noteContent[0].content;
                jQuery('#note_box_' + note.questionId).val(noteValue);
                jQuery('#note_box_all_' + note.questionId).val(noteValue);
            }
        });
    }
    // select student when whoAllow == 2
    approvedByName(dataEmit) {
        var _a;
        var data = {
            fullName: dataEmit.nameEmit,
            examHashId: (_a = this.dataProcess.examObj) === null || _a === void 0 ? void 0 : _a.hashId,
            classroomId: dataEmit.classId ? dataEmit.classId : 0
        };
        this.subscriptions.add(this.frontStudentService.apiFrontStudentSaveStudentForExamPost(data).subscribe(response => {
            var _a;
            if (response.success == 1) {
                this.getData();
                this.chooseChildData = { isPendingApproved: false, isShow: false };
            }
            else {
                this.showErrorSnack((_a = response.message) !== null && _a !== void 0 ? _a : '');
            }
        }));
    }
    openChooseStudent(data, type) {
        var _a, _b, _c;
        if ((data.responseFrontExam) && type == 1) {
            // select class
            this.selectStudent = false;
            this.selectClass = true;
            this.chooseChildData = { studentObjs: undefined, classObjs: data.responseFrontExam.classroomObjs, isPendingApproved: false, isShow: true };
            if (data.responseFrontExam.classroomObjs && ((_a = data.responseFrontExam.classroomObjs) === null || _a === void 0 ? void 0 : _a.length) == 1) {
                this.closeChooseStudent({ classObj: (_c = (_b = data.responseFrontExam.classroomObjs) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : {}, studentObj: {}, type: 1, onlyOneClass: true });
            }
        }
        else if ((data.chooseStudentData) && type == 2) {
            // select student
            this.selectClass = false;
            this.selectStudent = true;
            this.chooseChildData = { studentObjs: data.chooseStudentData.studentObjs, classObj: data.chooseStudentData.classroomObj, onlyOneClass: data.chooseStudentData.onlyOneClass, isPendingApproved: false, isShow: true };
        }
        else if (data.student) {
            // pending approved
            this.selectClass = false;
            this.selectStudent = true;
            this.chooseChildData = { studentObj: data.student, isPendingApproved: true, isShow: true };
        }
    }
    closeChooseStudent(dataEmit) {
        var _a, _b;
        if (dataEmit.type == 1) {
            // vừa select class => chọn tiếp student
            var studentObjs = this.dataProcess.studentObjs;
            var filterStudentObjs = [];
            if (studentObjs && studentObjs.length > 0) {
                filterStudentObjs = studentObjs.filter((each) => { var _a, _b; return each.classroomId == ((_b = (_a = dataEmit.classObj) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : 0); });
            }
            var data = { studentObjs: filterStudentObjs, classroomObj: dataEmit.classObj, onlyOneClass: dataEmit.onlyOneClass };
            this.openChooseStudent({ chooseStudentData: data, student: null, responseFrontExam: null }, 2);
        }
        else {
            var userObj = (_a = this.userService) === null || _a === void 0 ? void 0 : _a.getUserObj();
            if (dataEmit.studentObj.isVerified == 0 || dataEmit.classObj.freeChooseName == 1) {
                // chọn student => call api saveParent
                this.frontStudentService.apiFrontStudentAddStudentToClassForExamGet((_b = this.dataProcess.examObj) === null || _b === void 0 ? void 0 : _b.hashId, dataEmit.classId, dataEmit.studentObj.id ? dataEmit.studentObj.id : 0).subscribe(result => {
                    if (result.success == 1) {
                        this.getData();
                        this.isAfterChooseStudent = true;
                        this.chooseChildData = { isPendingApproved: false, isShow: false };
                    }
                    else {
                        this.isAfterChooseStudent = false;
                        this.showErrorSnack('Không tải được dữ liệu');
                    }
                });
            }
            else {
                if (userObj.id == dataEmit.studentObj.parentId) {
                    this.getData();
                    this.chooseChildData = { isPendingApproved: false, isShow: false };
                }
                else {
                    this.sendRequestData = { studentObj: dataEmit.studentObj, classId: dataEmit.classId, isShow: true };
                }
                // this.showErrorSnack('Học sinh '+ dataEmit.studentObj.fullName + ' đã có người chọn. Liên hệ Giáo viên để "Xác thực lại"');
            }
        }
    }
    confirmSendRequest(event) {
        if (event) {
            this.sendRequestData = { studentObj: undefined, classId: undefined, isShow: false };
            this.showSuccessSnack('Yêu cầu của bạn đã được gửi tới cho Giáo viên!');
        }
        else {
            this.sendRequestData = { studentObj: undefined, classId: undefined, isShow: false };
            this.showErrorSnack('Chưa thể gửi yêu cầu! Vui lòng thử lại');
        }
    }
    closeRequestDialog() {
        this.sendRequestData = { studentObj: undefined, classId: undefined, isShow: false };
    }
    backToClassList() {
        this.openChooseStudent({ responseFrontExam: this.dataProcess, student: null, chooseStudentData: null }, 1);
    }
    //region set time and set interval
    setTimeExam() {
        var _a;
        if (((_a = this.exam_obj.minutes) !== null && _a !== void 0 ? _a : -1) > 0) {
            var curIntervalName = 'exam';
            var curIntervalId = this.globalService.plusGlobalInterval(curIntervalName);
            this.intervalExamTimeout = window.setInterval(() => {
                try {
                    if (curIntervalId == this.globalService.getGlobalInterval(curIntervalName)) {
                        const a = Math.floor(this.totalTime / 3600); // hours
                        const x = this.totalTime % 3600;
                        const b = Math.floor(x / 60); // minutes
                        const c = this.totalTime % 60; // seconds
                        if (this.totalTime <= 0) {
                            if (this.sendingData == false) {
                                this.sendingData = true;
                                this.timeCount = { hour: 0, minute: 0, second: 0, almostEnd: true };
                                // this.openSubmitExam(true, true);
                                this.validForTakeTest = false;
                                this.takeAnswerForQuestion(this.answerList, this.questionList);
                                this.setTimeAutoSubmit(curIntervalId !== null && curIntervalId !== void 0 ? curIntervalId : 0, curIntervalName); // hết h tự clear interval
                            }
                            clearInterval(this.intervalExamTimeout);
                        }
                        else {
                            if (a == 0 && b == 0) {
                                this.timeCount = { hour: a, minute: b, second: c, almostEnd: true };
                            }
                            else {
                                this.timeCount = { hour: a, minute: b, second: c, almostEnd: false };
                            }
                        }
                        this.totalTime -= 1;
                    }
                    else {
                        clearInterval(this.intervalExamTimeout);
                    }
                }
                catch (err) {
                    console.log(err);
                }
            }, 1000);
            this.globalService.pushIntervalObjs(this.intervalExamTimeout);
        }
    }
    getTimeServer() {
        var curIntervalName = 'examServerTime';
        var curIntervalId = this.globalService.plusGlobalInterval(curIntervalName);
        this.intervalGetTimeServer = window.setInterval(() => {
            try {
                if (curIntervalId == this.globalService.getGlobalInterval(curIntervalName)) {
                    this.subscriptions.add(this.frontExamService.apiFrontExamGetTimeExamObjGet().subscribe(response => {
                        var _a, _b, _c;
                        if (response.success == 1) {
                            var examSeconds = ((_a = this.exam_obj.minutes) !== null && _a !== void 0 ? _a : 0) * 60;
                            var currentServerTime = (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.curServerTime) !== null && _c !== void 0 ? _c : 0;
                            var newCountDownTime = this.startTestTime + examSeconds - currentServerTime;
                            this.totalTime = newCountDownTime;
                            const a = Math.floor(this.totalTime / 3600); // hours
                            const x = this.totalTime % 3600;
                            const b = Math.floor(x / 60); // minutes
                            const c = this.totalTime % 60; // seconds
                            if (this.totalTime <= 0) {
                                if (this.sendingData == false) {
                                    this.sendingData = true;
                                    this.timeCount = { hour: 0, minute: 0, second: 0 };
                                    // this.openSubmitExam(true, true);
                                    this.validForTakeTest = false;
                                    this.takeAnswerForQuestion(this.answerList, this.questionList);
                                    this.setTimeAutoSubmit(curIntervalId !== null && curIntervalId !== void 0 ? curIntervalId : 0, curIntervalName);
                                }
                                clearInterval(this.intervalGetTimeServer); // hết h tự clear interval
                            }
                        }
                    }));
                }
                else {
                    clearInterval(this.intervalGetTimeServer);
                }
            }
            catch (err) {
                console.log(err);
            }
        }, this.randomIntFromInterval(200, 300) * 1000);
        this.globalService.pushIntervalObjs(this.intervalGetTimeServer);
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    setTimeAutoSubmit(oldIntervalId, oldIntervalName) {
        var totalTimeSubmit = this.totalTime + 90;
        var curIntervalName = 'autoSubmitTimeCount';
        var curIntervalId = this.globalService.plusGlobalInterval(curIntervalName);
        this.intervalAutoSubmit = window.setInterval(() => {
            try {
                if (curIntervalId == this.globalService.getGlobalInterval(curIntervalName) && !this.validForTakeTest) {
                    const a = Math.floor(totalTimeSubmit / 3600); // hours
                    const x = totalTimeSubmit % 3600;
                    const b = Math.floor(x / 60); // minutes
                    const c = totalTimeSubmit % 60; // seconds
                    if (totalTimeSubmit <= 0) {
                        this.timeCount = { hour: 0, minute: 0, second: 0 };
                        if ((curIntervalId == this.globalService.getGlobalInterval(curIntervalName) || oldIntervalId == this.globalService.getGlobalInterval(oldIntervalName)) && !this.checkSubmit) {
                            this.submitTest(true);
                        }
                        clearInterval(this.intervalAutoSubmit); // hết h tự clear interval
                    }
                    else {
                        this.timeCount = { hour: a, minute: b, second: c };
                    }
                    totalTimeSubmit -= 1;
                    // if(totalTimeSubmit > 0) {
                    //   this.browserStorageService.saveSimpleStorage("timeSubmitV2_"+ this.exam_obj.hashId + "_" + this.testingResultObj.id, JSON.stringify({totalTime: totalTimeSubmit}));
                    // }
                }
                else {
                    clearInterval(this.intervalAutoSubmit);
                }
            }
            catch (err) {
                console.log(err);
            }
        }, 1000);
        this.globalService.pushIntervalObjs(this.intervalAutoSubmit);
    }
    setTimeClient() {
        var curIntervalName = 'getTimeClient';
        var curIntervalId = this.globalService.plusGlobalInterval(curIntervalName);
        this.intervalTimeClient = window.setInterval(() => {
            try {
                if (curIntervalId == this.globalService.getGlobalInterval(curIntervalName)) {
                    this.timeClient = Date.now();
                }
                else {
                    clearInterval(this.intervalTimeClient);
                }
            }
            catch (err) {
                console.log(err);
            }
        }, this.randomIntFromInterval(60, 70) * 1000);
        this.globalService.pushIntervalObjs(this.intervalTimeClient);
    }
    //region Select answer
    // lưu ghi chú
    setNote(id, event, indexParam, type) {
        var noteObj = {
            questionId: id,
            noteContent: [{ index: indexParam, content: event.target.value }]
        };
        for (var i = 0; i < this.noteList.length; i++) {
            if (noteObj.questionId == this.noteList[i].questionId) {
                this.noteList[i].noteContent = noteObj.noteContent;
            }
            else {
                this.noteList.push(noteObj);
            }
        }
        if (type == 1) {
            jQuery('#note_box_' + id).val(event.target.value);
        }
        else {
            jQuery('#note_box_all_' + id).val(event.target.value);
        }
        this.saveToStorage(this.answerList, this.noteList, this.files);
    }
    setAnswerTrueFalse(dataEmit) {
        var _a, _b, _c, _d;
        // chọn câu trả lời
        var checkAnswer = this.answerList.filter((e) => e.questionId == dataEmit.id);
        if (dataEmit.answerConfig && dataEmit.index != null && dataEmit.type == 1) {
            // Multiple choice
            var answerObjType1 = {
                questionId: dataEmit.id,
                answerContent: [{ index: dataEmit.index, content: dataEmit.isImage ? (_a = dataEmit.answerConfig.content) !== null && _a !== void 0 ? _a : '' : (_b = dataEmit.answerConfig.key) !== null && _b !== void 0 ? _b : '' }]
            };
            if (checkAnswer && checkAnswer.length > 0) {
                for (var i = 0; i < this.answerList.length; i++) {
                    if (this.answerList[i].questionId == answerObjType1.questionId) {
                        this.answerList[i].answerContent.push(answerObjType1.answerContent[0]);
                    }
                }
            }
            else {
                this.answerList.push(answerObjType1);
            }
            this.changeStatusAnswer(answerObjType1, dataEmit.index, true, dataEmit.isImage, dataEmit);
        }
        else if (dataEmit.answerConfig && dataEmit.index != null && dataEmit.type == 2) {
            // Only one choice
            var answerObjType2 = {
                questionId: dataEmit.id,
                answerContent: [{ index: dataEmit.index, content: dataEmit.isImage ? (_c = dataEmit.answerConfig.content) !== null && _c !== void 0 ? _c : '' : (_d = dataEmit.answerConfig.key) !== null && _d !== void 0 ? _d : '' }]
            };
            if (checkAnswer && checkAnswer.length > 0) {
                for (var i = 0; i < this.answerList.length; i++) {
                    if (this.answerList[i].questionId == answerObjType2.questionId) {
                        this.answerList[i].answerContent = answerObjType2.answerContent;
                    }
                }
            }
            else {
                this.answerList.push(answerObjType2);
            }
            this.changeStatusAnswer(answerObjType2, dataEmit.index, false, dataEmit.isImage, dataEmit);
        }
        this.changeStatusQuestion(dataEmit.id);
    }
    setAnswerEssay(dataEmit) {
        var validAnswer = true;
        var checkAnswer = this.answerList.filter((e) => e.questionId == dataEmit.id);
        if (dataEmit.event && dataEmit.index != null && dataEmit.type == 3) {
            this.onTypingAnswer = true;
            if (dataEmit.event.target.value != null) {
                var answerObjType3 = {
                    questionId: dataEmit.id,
                    answerContent: [{ index: dataEmit.index, content: dataEmit.event.target.value.trim() }]
                };
                if (checkAnswer && checkAnswer.length > 0) {
                    for (var i = 0; i < this.answerList.length; i++) {
                        if (this.answerList[i].questionId == answerObjType3.questionId) {
                            for (var j = 0; j < this.answerList[i].answerContent.length; j++) {
                                if (this.answerList[i].answerContent[j].index == answerObjType3.answerContent[0].index) {
                                    this.answerList[i].answerContent[j].content = answerObjType3.answerContent[0].content;
                                }
                            }
                            var checkIndex = this.answerList[i].answerContent.filter((e) => e.index == answerObjType3.answerContent[0].index);
                            if (checkIndex && checkIndex.length == 0) {
                                this.answerList[i].answerContent.push(answerObjType3.answerContent[0]);
                            }
                        }
                    }
                    this.onTypingAnswer = false;
                }
                else {
                    this.answerList.push(answerObjType3);
                    this.onTypingAnswer = false;
                }
                if (dataEmit.event.target.value.trim() == '') {
                    validAnswer = false;
                    var foundAnswer = this.answerList.filter((ans) => ans.questionId == dataEmit.id);
                    if (foundAnswer && foundAnswer.length == 1) {
                        var indexOfAnswer = this.answerList.indexOf(foundAnswer[0]);
                        this.answerList.splice(indexOfAnswer, 1);
                        this.saveToStorage(this.answerList, this.noteList, this.files);
                    }
                }
            }
            else {
                validAnswer = false;
            }
        }
        if (validAnswer) {
            this.changeStatusQuestion(dataEmit.id);
        }
    }
    setResultTracking(data) {
        /*
      Tracking quá trình làm bài của thí sinh, lưu lại 3 thông tin sau:
      - Thời điểm: phút thứ bao nhiêu trong quá trình làm bài
      - Câu số
      - Đáp án của câu đó thay đổi
    */
        var _a, _b;
        this.resultTracks.push([...data, this.timeService.getCurrentSecond().toString()]);
        if (this.browserStorageService.getSizeOfStorage() > 4.5) {
            this.browserStorageService.removeExceptSimpleStorage((_b = (_a = this.exam_obj.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '', this.hashId);
        }
        this.browserStorageService.saveSimpleStorage('saveResultTrack_' + this.hashId + '_' + this.testingResultObj.id, JSON.stringify(this.resultTracks));
    }
    changeStatusQuestion(id) {
        // thay đổi màu hiển thị trong bảng danh sách câu hỏi
        for (var i = 0; i < this.questionList.length; i++) {
            if (this.questionList[i].id == id) {
                this.questionList[i].status = true;
            }
        }
        this.saveToStorage(this.answerList, this.noteList, this.files);
    }
    changeStatusAnswer(answerObj, index, isMultiple, isImage, dataEmit) {
        // thay đổi màu hiển thị đáp án chọn
        if (isMultiple) {
        }
        else {
            try {
                this.questionList.forEach((question) => {
                    var _a;
                    if (question.id == answerObj.questionId) {
                        if (isImage) {
                            if (((_a = question.answerConfigParseVer1) === null || _a === void 0 ? void 0 : _a[0].answerConfigV2) && question.answerConfigParseVer1[0].answerConfigV2.length > 0) {
                                for (var i = 0; i < question.answerConfigParseVer1[0].answerConfigV2.length; i++) {
                                    question.answerConfigParseVer1[0].answerConfigV2[i].checked = false;
                                }
                                question.answerConfigParseVer1[0].answerConfigV2[index].checked = true;
                                if (this.isMobile && dataEmit.answerConfig) {
                                    this.commonService.snackChoiceAnswer('Câu ' + ((question.index || 0) + 1) + ' - Chọn ' + (dataEmit.answerConfig.alpha ? dataEmit.answerConfig.alpha : dataEmit.answerConfig.key), '');
                                }
                            }
                        }
                        else {
                            if (question.answerConfigParse && question.answerConfigParse.length > 0) {
                                for (var i = 0; i < question.answerConfigParse.length; i++) {
                                    question.answerConfigParse[i].checked = false;
                                }
                                question.answerConfigParse[index].checked = true;
                                if (this.isMobile && (dataEmit.answerConfig)) {
                                    this.commonService.snackChoiceAnswer('Câu ' + ((question.index || 0) + 1) + ' - Chọn ' + (dataEmit.answerConfig.alpha ? dataEmit.answerConfig.alpha : dataEmit.answerConfig.key) + '', '');
                                }
                            }
                        }
                    }
                });
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    saveToStorage(answerList, noteList, files) {
        var _a, _b;
        // lưu dáp án vừa chọn vào storage
        try {
            var trackInfos = { autoSubmit: undefined, serverCountDown: this.totalTime, examMinutes: this.exam_obj.minutes, saveStudentId: this.userObj.id, saveDeviceId: this.deviceId, deviceType: this.commonService.deviceType() };
            var userInfoV3 = this.browserStorageService.getSimpleStorage('userInfoV3_' + this.exam_obj.hashId);
            var data = {
                answers: answerList,
                notes: noteList,
                files: JSON.stringify(files),
                infors: userInfoV3,
                trackInfos: JSON.stringify(trackInfos),
                saveTime: new Date().getTime()
            };
            if (this.browserStorageService.getSizeOfStorage() > 4.5) {
                this.browserStorageService.removeExceptSimpleStorage((_b = (_a = this.exam_obj.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '', this.hashId);
            }
            this.browserStorageService.saveSimpleStorage('saveDataV4_' + this.exam_obj.id + '_' + this.testingResultObj.id, JSON.stringify(data));
        }
        catch (err) { }
    }
    // Region handle event fullscreen
    checkFullScreen() {
        switch (this.browserName) {
            case 'chrome':
                return document.fullscreenElement;
            case 'edge':
                return this.customDocument.webkitFullscreenElement;
            case 'opera':
                return this.customDocument.webkitFullscreenElement;
            case 'firefox':
                return document.fullscreenElement;
            case 'safari':
                return this.customDocument.webkitFullscreenElement;
            case 'trident':
                return this.customDocument.webkitFullscreenElement;
            default:
                return this.customDocument.webkitFullscreenElement;
        }
    }
    handleFullscreenEvent(event) {
        // exitFullScreen
        if (!this.isMobile && !this.onShowUpload) {
            if (this.exam_obj.autoMonitor && this.exam_obj.autoMonitor != 0) {
                if (this.startedTimeSecond > 0 && !this.onTypingAnswer) {
                    if (!this.clickedFromIframe) {
                        let checkStatusFullScreen = this.checkFullScreen();
                        if (!checkStatusFullScreen && this.acceptSendTrack) {
                            var data1 = {
                                examId: this.exam_obj.id,
                                name: 'exit_full_screen',
                                examResultId: this.testingResultObj.id
                            };
                            this.acceptSendTrack = false;
                            this.subscriptions.add(this.frontExamTrackService.apiFrontExamTrackSaveObjPost(data1).subscribe(response => {
                                if (response.success == 1) {
                                    this.commonService.snackWarning('Bạn đang bị giám sát. Hãy trở lại chế độ toàn màn hình!', '');
                                    this.acceptSendTrack = true;
                                }
                                else {
                                    setTimeout(() => {
                                        if (!this.acceptSendTrack) {
                                            this.acceptSendTrack = true;
                                        }
                                    }, 1000);
                                }
                            }));
                        }
                    }
                    else {
                        this.clickedFromIframe = false;
                    }
                }
            }
        }
    }
    detectBrowserName() {
        const agent = navigator.userAgent.toLowerCase();
        if (agent.match(/chrome|chromium|crios/i)) {
            return 'chrome';
        }
        else if (agent.match(/firefox|fxios/i)) {
            return 'firefox';
        }
        else if (agent.match(/safari/i)) {
            return 'safari';
        }
        else if (agent.match(/opr\//i)) {
            return 'opera';
        }
        else if (agent.match(/edg/i)) {
            return 'edge';
        }
        else {
            return 'other';
        }
    }
    clickFromIframe() {
        if (!this.clickedFromIframe) {
            this.clickedFromIframe = true;
        }
    }
    goBackFullScreen() {
        // goBackFullScreen
        const elem = document.documentElement;
        let methodToBeInvoked = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.mozRequestFullscreen || elem.msRequestFullscreen;
        if (methodToBeInvoked) {
            methodToBeInvoked.call(elem);
        }
    }
    exitFullscreen() {
        const elem = document;
        if (window.innerHeight == screen.height) {
            let methodToBeInvoked = elem.exitFullscreen || elem.webkitExitFullscreen || elem.msExitFullscreen;
            if (methodToBeInvoked) {
                methodToBeInvoked.call(elem);
            }
        }
    }
    removeNullContent(list) {
        // loại bỏ các câu hỏi content = null (lỗi question)
        var new_list = [];
        list.forEach((each) => {
            if (each.questionContent && each.questionContent.length > 0) {
                new_list.push(each);
            }
        });
        return new_list;
    }
    removeImg(url) {
        // Xóa file đã upload
        var find_file = this.files.filter((file) => file.url !== url);
        this.files = find_file;
        this.updateFileUploadMobile().then(() => {
            this.showSuccessSnack('Cập nhật thành công đính kèm file tự luận');
        });
    }
    updateFileUploadMobile() {
        return new Promise(resolve => {
            let dataCallApi = {
                hashCode: this.hashIdUpdate,
                files: JSON.stringify(this.files)
            };
            this.frontExamResultUploadService.apiFrontExamResultUploadUpdateImageToTmpPost(dataCallApi).subscribe(response => {
                if (response.success == 1) {
                    resolve(true);
                }
            });
        });
    }
    calcRight() {
        var _a;
        // trả ra style right: của thẻ html
        var right = 0;
        var windowWidth = window.outerWidth;
        var containerContent = (_a = document.getElementById('container-content')) === null || _a === void 0 ? void 0 : _a.offsetWidth;
        if (containerContent) {
            right = (windowWidth - containerContent) / 2;
        }
        return right;
    }
    checkWitdh() {
        // kiểm tra độ rộng màn hình để hiển thị theo dạng mobile hay web
        if (window.innerWidth < 1200) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    }
    onResize(event) {
        // handle event resize của window
        if (event.target.innerWidth < 1200) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
        this.calcRight();
    }
    resizeImg(content_id, width, height) {
        var _a;
        // căn chỉnh lại kích thước ảnh
        var mediaContent = document.getElementById('media_content_' + content_id);
        var contentWidth = (_a = mediaContent === null || mediaContent === void 0 ? void 0 : mediaContent.offsetWidth) !== null && _a !== void 0 ? _a : 0;
        var calc_height = 0;
        if (mediaContent) {
            if (contentWidth / width <= 1) {
                calc_height = height * (contentWidth / width);
                return Math.round(calc_height);
            }
            else {
                return Math.round(height);
            }
        }
        else {
            return 0;
        }
    }
    resizeImgAll(content_id, width, height) {
        var _a;
        // căn chỉnh lại kích thước ảnh
        var mediaContent = document.getElementById('media_content_all_' + content_id);
        var contentWidth = (_a = mediaContent === null || mediaContent === void 0 ? void 0 : mediaContent.offsetWidth) !== null && _a !== void 0 ? _a : 0;
        var calc_height = 0;
        if (mediaContent) {
            if (contentWidth / width <= 1) {
                calc_height = height * (contentWidth / width);
                return Math.round(calc_height);
            }
            else {
                return Math.round(height);
            }
        }
        else {
            return 0;
        }
    }
    returnFalse() {
        // disable contextmenu
        return false;
    }
    autoResize(id, type) {
        // auto resize textarea
        if (type == 1) {
            var el = document.getElementById('note_box_' + id);
            if (el) {
                setTimeout(() => {
                    el.style.cssText = 'height:auto;';
                    // for box-sizing other than "content-box" use:
                    // el.style.cssText = '-moz-box-sizing:content-box';
                    el.style.cssText = 'height:' + (el.scrollHeight + 30) + 'px';
                    el.style.maxHeight = '350px';
                }, 0);
            }
        }
        else {
            var el = document.getElementById('note_box_all_' + id);
            if (el) {
                setTimeout(() => {
                    el.style.cssText = 'height:auto;';
                    // for box-sizing other than "content-box" use:
                    // el.style.cssText = '-moz-box-sizing:content-box';
                    el.style.cssText = 'height:' + (el.scrollHeight + 30) + 'px';
                    el.style.maxHeight = '350px';
                }, 0);
            }
        }
    }
    autoResizeEssayAnswer(dataEmit) {
        if (dataEmit.type == 1) {
            var el = document.getElementById('answer-1-unit-' + dataEmit.id);
            if (el) {
                setTimeout(() => {
                    el.style.cssText = 'height:auto;';
                    // for box-sizing other than "content-box" use:
                    // el.style.cssText = '-moz-box-sizing:content-box';
                    el.style.cssText = 'height:' + (el.scrollHeight + 30) + 'px';
                }, 0);
            }
        }
        else if (dataEmit.type == 2) {
            var el = document.getElementById('answer-0-unit-' + dataEmit.id);
            if (el) {
                setTimeout(() => {
                    el.style.cssText = 'height:auto;';
                    // for box-sizing other than "content-box" use:
                    // el.style.cssText = '-moz-box-sizing:content-box';
                    el.style.cssText = 'height:' + (el.scrollHeight + 30) + 'px';
                }, 0);
            }
        }
        else if (dataEmit.type == 3) {
            var el = document.getElementById('answer-1-all-' + dataEmit.id);
            if (el) {
                setTimeout(() => {
                    el.style.cssText = 'height:auto;';
                    // for box-sizing other than "content-box" use:
                    // el.style.cssText = '-moz-box-sizing:content-box';
                    el.style.cssText = 'height:' + (el.scrollHeight + 30) + 'px';
                }, 0);
            }
        }
        else {
            var el = document.getElementById('answer-0-all-' + dataEmit.id);
            if (el) {
                setTimeout(() => {
                    el.style.cssText = 'height:' + (el.scrollHeight - 50) + 'px';
                    el.style.cssText = 'height:' + (el.scrollHeight + 30) + 'px';
                }, 0);
            }
        }
    }
    checkEssay() {
        // kiểm tra xem đề có câu tự luận không để hiển thị popup
        var filter = this.questionList.filter((question) => this.answerTypeService.isEssayAnswer(question.answerType));
        if (filter && filter.length > 0) {
            if (this.checkEssayPopup) {
                this.openEssayDialog();
            }
            return true;
        }
        else {
            return false;
        }
    }
    isEmpty(obj) {
        // check empty object
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    //region Redirect Url
    routerBackSelectStudent() {
        this.commonService.myNavigation('/de-thi/' + this.hashId);
    }
    redirectToHomepage(isConfirm) {
        this.quitTestData = { id: 0, time: 0, isShow: false };
        if (isConfirm) {
            this.commonService.myNavigationWithQueryString('/de-thi/' + this.exam_obj.hashId, '?backto=' + encodeURIComponent(this.backtoLink));
        }
    }
    goToBuyExam() {
        this.commonService.myNavigation('/de-thi/' + this.exam_obj.hashId);
    }
    // Form nhập tên học sinh
    openSubmitName(notAnonymous, hashId, needPassword, errorMessage) {
        if (!notAnonymous && hashId && needPassword) {
            this.submitNameData = { needPassword, isShow: true, examId: this.exam_obj.id, hashId, errorMessage: errorMessage ? errorMessage : '' };
        }
        else {
            this.submitNameData = { notAnonymous, isShow: true };
        }
    }
    closeSubmitName(event) {
        if (event) {
            this.getData();
            this.submitNameData = { isShow: false };
        }
    }
    // Form nhập thông tin thêm của học sinh
    openShowInfo(infoFieldParams) {
        this.showFormInfo = { infoFields: infoFieldParams, examId: this.exam_obj.id, hashId: this.exam_obj.hashId, isShow: true };
    }
    closeShowInfo(event) {
        if (event.success) {
            this.initStatusObj();
            this.tempStorageInfo = event.info;
            this.hasErrorMessage = '';
            this.getData();
            this.showFormInfo = { infoFields: [], isShow: false };
        }
    }
    // Hiển thị thông báo có giám sát
    openAutoMonitor() {
        this.dataMonitorAuto = { isShow: true };
    }
    closeAutoMonitor(event) {
        var _a, _b, _c, _d, _e;
        if (event) {
            this.dataMonitorAuto = { isShow: false };
            const elem = document.documentElement;
            let methodToBeInvoked = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.mozRequestFullscreen || elem.msRequestFullscreen;
            if (methodToBeInvoked) {
                methodToBeInvoked.call(elem);
            }
            this.startedTimeSecond = Math.floor(Date.now() / 1000);
            if (this.exam_obj.autoMonitor && this.exam_obj.autoMonitor == 3) {
                if (this.isAfterChooseStudent) {
                    var userObj = this.baseApiService.getUserObj();
                    var studentObj = this.userObj;
                    var dataObj = {};
                    dataObj[(_a = studentObj.id) !== null && _a !== void 0 ? _a : 0] = ((_b = userObj === null || userObj === void 0 ? void 0 : userObj.id) === null || _b === void 0 ? void 0 : _b.toString()) + '_' + this.encryptService.createMd5(((_c = studentObj.id) !== null && _c !== void 0 ? _c : 0).toString() + ((_d = userObj === null || userObj === void 0 ? void 0 : userObj.id) === null || _d === void 0 ? void 0 : _d.toString())).substring(6, 9);
                    this.fireStoreService.examSessions_writeUserMap((_e = this.exam_obj.hashId) !== null && _e !== void 0 ? _e : '', dataObj).subscribe(response => {
                        console.log('writeFirestore - success' + JSON.stringify(response));
                    });
                }
                this.openVideoMonitor();
            }
        }
    }
    // Hiển thị thông báo hướng dẫn làm câu tự luận
    openEssayDialog() {
        this.dataEssayPopup = { isShow: true };
    }
    closeEssayDialog(event) {
        if (event) {
            this.dataEssayPopup = { isShow: false };
            this.checkEssayPopup = false;
        }
    }
    //region open modal submit test or quit test
    // Thoát bài thi
    openQuitDialog() {
        if (!this.submitData.isShow) {
            this.quitTestData = { id: 0, time: this.totalTime, unLimitTime: this.unLimitTime, isShow: true };
        }
    }
    closeQuitDialog() {
        this.quitTestData = { id: 0, time: 0, isShow: false };
    }
    // Nộp bài thi
    openSubmitExam(event, autoSubmit, saveFalse) {
        if (!this.quitTestData.isShow) {
            if (this.hasEssayQuestion && this.files.length == 0) {
                this.submitData = {
                    id: 0,
                    time: this.totalTime,
                    unLimitTime: this.unLimitTime,
                    notHasFiles: true,
                    isShow: true,
                    autoSubmit,
                    saveFalse
                };
            }
            else {
                this.submitData = {
                    id: 0,
                    time: this.totalTime,
                    unLimitTime: this.unLimitTime,
                    isShow: true,
                    autoSubmit,
                    saveFalse
                };
            }
        }
    }
    closeSubmitDialog() {
        this.submitData = { id: 0, time: 0, isShow: false };
    }
    confirmSubmit(data) {
        var _a;
        if (!data.isSaveFalse) {
            this.submitData = { id: 0, time: 0, isShow: false };
        }
        if (data.isConfirm && !this.checkSubmit) {
            this.submitTest((_a = data.isAutoSubmit) !== null && _a !== void 0 ? _a : false);
        }
    }
    endTimeBackBtn() {
        this.commonService.myNavigationWithQueryString('/de-thi/' + this.exam_obj.hashId, '?backto=' + encodeURIComponent(this.backtoLink));
    }
    endTimeSubmitBtn() {
        this.submitTest(true);
    }
    openUploadImage() {
        // Open dialog
        var monitorScreenVideo = document.getElementById('monitorScreenTakeTest');
        if (this.uploadImageData.isShow) {
            this.uploadImageData = { id: 0, isShow: false };
            this.onShowUpload = false;
        }
        else {
            if (this.files.length > 0) {
                this.uploadImageData = {
                    id: this.exam_obj.id,
                    files: this.files,
                    isMonitor: this.hasMonitorScreen,
                    isMobile: this.commonService.checkMobile(),
                    isShow: true
                };
            }
            else {
                this.uploadImageData = {
                    id: this.exam_obj.id,
                    files: [],
                    isMonitor: this.hasMonitorScreen,
                    isMobile: this.commonService.checkMobile(),
                    isShow: true
                };
            }
            if (monitorScreenVideo) {
                monitorScreenVideo.style.display = 'none';
            }
        }
        if (this.isShowSheet) {
            this.isShowSheet = false;
        }
    }
    conFirmUpload(data) {
        var _a;
        // close dialog and send tracklog
        var monitorScreenVideo = document.getElementById('monitorScreenTakeTest');
        if (typeof data != 'boolean' && data.isConfirm) {
            this.files = (_a = data.uploadFiles) !== null && _a !== void 0 ? _a : [];
            window.scrollTo({ top: 0 });
            this.uploadImageData = { id: 0, isShow: false };
            if (this.exam_obj.autoMonitor && this.exam_obj.autoMonitor != 0) {
                this.closeAutoMonitor(true);
            }
            this.saveToStorage(this.answerList, this.noteList, this.files);
            this.onShowUpload = false;
        }
        else {
            this.uploadImageData = { id: 0, isShow: false };
            if (this.exam_obj.autoMonitor && this.exam_obj.autoMonitor != 0) {
                this.closeAutoMonitor(true);
            }
            this.onShowUpload = false;
        }
        if (monitorScreenVideo) {
            monitorScreenVideo.style.display = 'block';
        }
    }
    onSelectFileEmit(event) {
        this.onShowUpload = event;
    }
    // file preview + azt-upload-ui func
    onFileClose() {
        this.isShowPreviewFile = false;
        this.previewFile = {};
    }
    onShowFile(dataEmit) {
        this.isShowPreviewFile = true;
        this.previewFile = Object.assign(Object.assign({}, dataEmit.file), { index: dataEmit.index });
    }
    changesPosImg(dataEmit) {
        if (dataEmit) {
            this.files = dataEmit;
            this.updateFileUploadMobile().then(() => {
                this.showSuccessSnack('Cập nhật thành công đính kèm file tự luận');
            });
        }
    }
    // Gủi hashId lên server để lấy file người dùng đã nộp = mobile
    sendHashIdUpdate(hashIdUpdate) {
        if (hashIdUpdate) {
            this.frontExamResultUploadService.apiFrontExamResultUploadGetTmpUploadObjGet(hashIdUpdate).subscribe(response => {
                var _a, _b, _c, _d, _e, _f;
                if (response.success == 1 && this.commonService.isJson((_c = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.tmpObj) === null || _b === void 0 ? void 0 : _b.files) !== null && _c !== void 0 ? _c : '')) {
                    var files = JSON.parse((_f = (_e = (_d = response.data) === null || _d === void 0 ? void 0 : _d.tmpObj) === null || _e === void 0 ? void 0 : _e.files) !== null && _f !== void 0 ? _f : '');
                    files.isNotNoti = true;
                    this.addFileMobileUpload({ files });
                }
            });
            // event google analytics
            this.commonService.gaEvent('FrontExam_GetTmpExamObj');
        }
    }
    // add File vào bài làm sau khi lấy file về
    addFileMobileUpload(dataEmit) {
        var _a;
        this.files = (_a = dataEmit.files) !== null && _a !== void 0 ? _a : [];
        this.uploadImageData = {
            id: this.exam_obj.id,
            files: this.files,
            isMonitor: this.hasMonitorScreen,
            isMobile: this.commonService.checkMobile(),
            isShow: dataEmit.keepOpen ? true : false
        };
    }
    submitTest(isAutoSubmit) {
        // gửi bài làm lên server
        this.initStatusObj();
        var userInfoV3 = this.browserStorageService.getSimpleStorage('userInfoV3_' + this.exam_obj.hashId);
        var cloneResultTracks = this.commonService.myClone(this.resultTracks);
        let objHeader = JSON.stringify({ type: 'exam', id: this.exam_obj.id, user: this.exam_obj.tenantId });
        var trackInfos = { autoSubmit: isAutoSubmit, serverCountDown: this.totalTime, examMinutes: this.exam_obj.minutes, saveStudentId: this.userObj.id, saveDeviceId: this.deviceId, deviceType: this.commonService.deviceType() };
        this.checkSubmit = true;
        let DataSaveResult = {
            answers: this.answerList,
            notes: this.noteList == null ? [] : this.noteList,
            files: JSON.stringify(this.files),
            infors: userInfoV3,
            trackInfos: JSON.stringify(trackInfos),
            resultTrack: this.zipdataService.convertContentGzip(JSON.stringify(cloneResultTracks))
        };
        this.subscriptions.add(this.frontExamResultService.apiFrontExamResultSaveObjV2Post(DataSaveResult, objHeader, this.hashId).subscribe(response => {
            var _a, _b, _c;
            if (response.success == 1) {
                this.browserStorageService.removeSimpleStorage('saveResultTrack_' + this.exam_obj.hashId + '_' + this.testingResultObj.id);
                this.browserStorageService.removeSimpleStorage('saveScrollTrack_' + this.exam_obj.hashId + '_' + this.testingResultObj.id);
                this.browserStorageService.removeSimpleStorage('saveDataV4_' + this.exam_obj.id + '_' + this.testingResultObj.id);
                this.browserStorageService.removeSimpleStorage('limitAudioV5_' + this.exam_obj.id + '_' + this.testingResultObj.id);
                this.browserStorageService.removeSimpleStorage('userInfoV3_' + this.exam_obj.hashId);
                this.browserStorageService.removeSimpleStorage('passWord_' + this.exam_obj.hashId);
                this.browserStorageService.saveSimpleSessionStorageWithExpired('test_result_v2_' + this.exam_obj.hashId + '_' + ((_a = response.data) === null || _a === void 0 ? void 0 : _a.id), JSON.stringify(response.data));
                try {
                    this.localStorageObjetct.clearAllCache();
                    this.exitFullscreen();
                    if (typeof aztExam != 'undefined' && aztExam && aztExam.MonitorStudent) {
                        var monitor = aztExam.MonitorStudent.getInstance();
                        monitor.stopSession();
                    }
                }
                catch (ex) { }
                this.clearAllInterval();
                this.successStatusObj();
                this.commonService.myNavigationWithQueryString('/test/submit-test/' + this.tenantId + '/' + this.curCateId + '/' + this.hashId + '/' + ((_b = response.data) === null || _b === void 0 ? void 0 : _b.id), '?backto=' + encodeURIComponent(this.backtoLink));
            }
            else {
                this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : '', true);
                // autosave - save false thì hiển thị nút để save lại
                if (isAutoSubmit) {
                    this.uploadImageData.isShow = false;
                    this.checkTimeOutExam = true;
                    this.openSubmitExam(true, isAutoSubmit, true);
                }
                this.submitData.messageError = response.message;
                setTimeout(() => {
                    this.checkSubmit = false;
                }, 5000);
            }
            // this.firestoreService.examSessions_delete(this.hashId)
        }));
        // event google analytics
        this.commonService.gaEvent('FrontExam_SaveObj');
    }
    clearAllInterval() {
        var objs = this.globalService.getIntervalObjs();
        for (var i = 0; i < objs.length; i++) {
            clearInterval(objs[i]);
        }
        this.globalService.emptyIntervalObjs();
    }
    changeShowType(type) {
        // thay đổi cách hiển thị câu hỏi
        if (type == 1) {
            this.showUnit = false;
            this.showList = true;
        }
        else {
            this.showUnit = true;
            this.showList = false;
        }
    }
    showSheet(isChangeShow, type) {
        if (isChangeShow) {
            if (type == 1) {
                this.changeShowType(1);
            }
            else {
                this.changeShowType(2);
            }
        }
        else {
            this.isShowSheet = !this.isShowSheet;
        }
    }
    askBeforeCloseWindow($event) {
        return ($event.returnValue = false);
    }
    // bật-tắt mục ghi chú
    toggleNoteBox(id) {
        if (jQuery('#note_box_' + id).hasClass('d-block')) {
            jQuery('#note_box_' + id).removeClass('d-block');
        }
        else {
            jQuery('#note_box_' + id).addClass('d-block');
        }
    }
    toggleNoteBoxAll(id) {
        if (jQuery('#note_box_all_' + id).hasClass('d-block')) {
            jQuery('#note_box_all_' + id).removeClass('d-block');
        }
        else {
            jQuery('#note_box_all_' + id).addClass('d-block');
        }
    }
    prevQuestion(index) {
        // quay về câu trước (show câu hỏi dạng đơn)
        var cur_question = jQuery('#question_' + String(index));
        var prev_question = jQuery('#question_' + String(index - 1));
        if (typeof prev_question.attr('hidden') !== 'undefined' && prev_question.attr('hidden') !== false) {
            cur_question.attr('hidden', true);
            prev_question.removeAttr('hidden');
            this.curQuestion = index == 0 ? 0 : index - 1;
        }
    }
    nextQuestion(index) {
        // tiến tới về câu tiếp (show câu hỏi dạng đơn)
        var cur_question = jQuery('#question_' + String(index));
        var next_question = jQuery('#question_' + String(index + 1));
        if (typeof next_question.attr('hidden') !== 'undefined' && next_question.attr('hidden') !== false) {
            cur_question.attr('hidden', true);
            next_question.removeAttr('hidden');
            this.curQuestion = index == this.questionList.length - 1 ? index : index + 1;
        }
    }
    goToQuestion(index) {
        // nhảy đến câu hỏi
        var cur_question = jQuery('#question_' + String(this.curQuestion));
        var next_question = jQuery('#question_' + String(index));
        if (typeof next_question.attr('hidden') !== 'undefined' && next_question.attr('hidden') !== false) {
            cur_question.attr('hidden', true);
            next_question.removeAttr('hidden');
            this.curQuestion = index;
        }
    }
    goToQuestionAll(index) {
        var location = document.getElementById('question_all_' + index);
        var questionUi = document.getElementById('question_ui');
        if (this.files && this.files.length > 0) {
            window.scrollTo({
                top: Number(location === null || location === void 0 ? void 0 : location.offsetTop) + Number(questionUi === null || questionUi === void 0 ? void 0 : questionUi.offsetTop) - 5
            });
        }
        else {
            window.scrollTo({
                top: Number(location === null || location === void 0 ? void 0 : location.offsetTop) - 5
            });
        }
    }
    //region Angular func & constructor
    checkResultTracking() {
        let resultTrack = this.browserStorageService.getSimpleStorage('saveResultTrack_' + this.hashId + '_' + this.testingResultObj.id);
        if (resultTrack) {
            this.resultTracks = this.commonService.parseJson(resultTrack);
        }
    }
    openVideoMonitor() {
        var userObj = this.baseApiService.getUserObj();
        var studentObj = this.userObj;
        if (typeof aztExam != 'undefined' && aztExam) {
            aztExam.ver = this.monitorService.getMNoteVer();
            aztExam.loadMonitor(() => {
                if (aztExam.MonitorStudent) {
                    var options = {
                        user: {
                            token: userObj.rememberToken,
                            userid: userObj.id,
                            username: userObj.fullName,
                            studentid: studentObj ? studentObj.id : 0,
                            studentname: studentObj ? studentObj.fullName : null
                        },
                        config: {
                            domainApi: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.base_api,
                            urlGetPublicForLive: 's3space/get_public_upload_url_for_live',
                            urlGetListFileForLive: 'S3space/get_list_files_for_live',
                            urlGetTokenForLive: 's3space/get_token_for_live'
                        },
                        roomid: this.hashId,
                        element: 'monitorScreenTakeTest',
                        examconfig: this.exam_obj,
                        examid: this.exam_obj.id,
                        firebaseApp: this.fireStoreService,
                        resultid: this.testingResultObj.id,
                        isStarted: true,
                        clickFromIframeFunc: this.clickFromIframe,
                        clickFromIframeFuncCaller: this
                    };
                    var monitor = aztExam.MonitorStudent.getInstance();
                    monitor.startSession(options);
                }
            });
        }
    }
    makeDeviceId(length = 10) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    getDeviceId() {
        var getDeviceId = this.browserStorageService.getSimpleStorage('device_session');
        if (getDeviceId) {
            this.deviceId = getDeviceId;
        }
        else {
            this.deviceId = this.makeDeviceId(20);
            this.browserStorageService.saveSimpleStorage('device_session', this.deviceId);
        }
    }
    ngOnInit() {
        jQuery('#azota-app-html').addClass('azotaHtml');
        this.form = this.fb.group({
            searchContent: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_39__.Validators.required)
        });
        this.checkWitdh();
        this.browserName = this.detectBrowserName();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_41__.combineLatest)([this.activeRoute.params, this.activeRoute.queryParams]).subscribe(([]) => {
            var _a, _b;
            var curCateId = Number(this.commonService.getMyParam(this.activeRoute, 'cate_id'));
            var hashId = (_a = this.commonService.getMyParam(this.activeRoute, 'hash_id')) === null || _a === void 0 ? void 0 : _a.toString();
            var tenantId = Number(this.commonService.getMyParam(this.activeRoute, 'tenant_id'));
            var homeLink = '/student/dashboard/0';
            this.backtoLink = (_b = this.commonService.getMyQueryParam('backto')) !== null && _b !== void 0 ? _b : '';
            this.curCateId = curCateId;
            this.hashId = hashId ? hashId : '';
            this.tenantId = tenantId;
            this.homeLink = homeLink;
            this.getDeviceId();
            this.initStatusObj();
            this.getData();
            if (this.isMobile) {
                // Lấy thông tin user
                this.userAgent = navigator.userAgent;
            }
            this.backLink = '';
        });
        super.ngOnInit();
    }
    ngOnDestroy() {
        this.mixService.cancelSubscription();
        jQuery('#azota-app-html').removeClass('azotaHtml');
        if (this.intervalSync) {
            clearInterval(this.intervalSync);
        }
        if (this.intervalExamTimeout) {
            clearInterval(this.intervalExamTimeout);
        }
        if (this.intervalGetTimeServer) {
            clearInterval(this.intervalGetTimeServer);
        }
        if (this.intervalAutoSubmit) {
            clearInterval(this.intervalAutoSubmit);
        }
        if (this.intervalTimeClient) {
            clearInterval(this.intervalTimeClient);
        }
        var objs = this.globalService.getIntervalObjs();
        for (var i = 0; i < objs.length; i++) {
            clearInterval(objs[i]);
        }
        this.globalService.emptyIntervalObjs();
        if (typeof aztExam != 'undefined' && aztExam && aztExam.MonitorStudent) {
            var monitor = aztExam.MonitorStudent.getInstance();
            monitor.stopSession();
        }
        super.ngDestroy();
    }
}
TakeTestComponent.ɵfac = function TakeTestComponent_Factory(t) { return new (t || TakeTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_42__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_5__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_crop_and_view_pdf_mix_question_service__WEBPACK_IMPORTED_MODULE_6__.MixQuestionService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_7__.LocalStorageObjetct), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_crop_and_view_pdf_mix_question_2_service__WEBPACK_IMPORTED_MODULE_8__.MixQuestionService2), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_9__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_cdn_service__WEBPACK_IMPORTED_MODULE_10__.CdnService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_core_services_encrypt_service__WEBPACK_IMPORTED_MODULE_11__.EncryptService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_crop_and_view_pdf_docx_service__WEBPACK_IMPORTED_MODULE_12__.DocxService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_13__.ZipdataService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_time_service__WEBPACK_IMPORTED_MODULE_14__.TimeService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_monitor_service__WEBPACK_IMPORTED_MODULE_15__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_16__.BrowserStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_17__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_18__.FrontExamTrackService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_18__.FrontStudentService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_global_service__WEBPACK_IMPORTED_MODULE_19__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_18__.FrontExamResultService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_18__.FrontExamService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_18__.FrontExamResultUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_questionInterface_service__WEBPACK_IMPORTED_MODULE_0__.ICustomQuestionAnswerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_takeTestInterface_service__WEBPACK_IMPORTED_MODULE_20__.TakeTestInterfaceService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_core_services_answertype_service__WEBPACK_IMPORTED_MODULE_21__.AnswerTypeService)); };
TakeTestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineComponent"]({ type: TakeTestComponent, selectors: [["app-student-list"]], viewQuery: function TakeTestComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵviewQuery"](_c0, 5, _ultities_upload_image_controller_component__WEBPACK_IMPORTED_MODULE_3__.UploadImageComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵloadQuery"]()) && (ctx.modalSaveImageUpload = _t.first);
    } }, hostBindings: function TakeTestComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("beforeunload", function TakeTestComponent_beforeunload_HostBindingHandler($event) { return ctx.askBeforeCloseWindow($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 8, consts: [[3, "resize", "contextmenu"], ["id", "container-content", 1, "container-fluid", "MW-1400", "pb-5", 2, "position", "relative", 3, "ngClass", "resize"], [4, "ngIf", "ngIfElse"], [3, "data", "closeDialog", 4, "ngIf"], [3, "data", "closeEssayDialog", 4, "ngIf"], ["doneLoading", ""], [3, "data", "closeDialog"], [3, "data", "closeEssayDialog"], [3, "fileOption", "closePreview", 4, "ngIf"], [3, "hashCode", "data", "closeDialog", "addFileMobile", "isOnSelectFile", 4, "ngIf"], ["myContent", ""], [3, "customText", 4, "ngIf", "ngIfElse"], ["class", "p-5 m-5 text-center alert alert-danger", 4, "ngIf"], [3, "fileOption", "closePreview"], [3, "hashCode", "data", "closeDialog", "addFileMobile", "isOnSelectFile"], ["style", "padding-bottom: 50px", 4, "ngIf", "ngIfElse"], ["NormalContent", ""], [1, "time-client", 3, "ngClass"], [1, "mb-0", "text-center"], ["matTooltip", "\u0110\u00E2y l\u00E0 th\u1EDDi gian hi\u1EC7n t\u1EA1i tr\u00EAn thi\u1EBFt b\u1ECB c\u1EE7a b\u1EA1n!", 2, "vertical-align", "middle", "font-weight", "450", "color", "grey"], [2, "padding-bottom", "50px"], [1, "text-center", "margin_question_bar", "ml-3", "mr-3", "mb-3", "pb-4"], [1, "text-center"], [1, "h4", 2, "color", "#111"], [1, "h5"], [1, "d-flex", "justify-content-center"], [1, "h5", "mr-3"], [2, "vertical-align", "bottom"], ["class", "h5", 4, "ngIf"], [2, "color", "#111", "font-size", "14px", "font-weight", "450", "margin-top", "10px"], ["class", "p-3 m-2 text-center alert alert-warning", 4, "ngIf"], ["class", "p-3 m-3 alert alert-danger", 4, "ngIf"], [1, "text-center", "mt-2"], [1, "btn", "btn-light", "mr-4", 2, "color", "#111", "font-size", "14px", 3, "click"], [1, "btn", "btn-warning", 2, "color", "white", "font-size", "14px", 3, "click"], [1, "text-center", "mt-3"], ["class", "mt-1 ml-3 mr-3", 4, "ngIf"], [1, "p-3", "m-2", "text-center", "alert", "alert-warning"], [1, "ng-binding"], [1, "p-3", "m-3", "alert", "alert-danger"], [1, "mt-1", "ml-3", "mr-3"], ["label", "Tr\u1EAFc nghi\u1EC7m"], ["class", "mb-3 mt-2", 4, "ngFor", "ngForOf"], [3, "label", 4, "ngIf"], [1, "mb-3", "mt-2"], [1, "question-content"], [1, "box-slide-show", "pt-2"], ["class", "image_group mb-3", 4, "ngIf"], ["class", "game-bar text-center pt-2", 4, "ngIf"], ["class", "game-bar pt-2", 4, "ngIf"], [1, "answer-box", "ml-auto", "mr-auto"], ["class", "answer-content", 4, "ngIf"], [1, "image_group", "mb-3"], [3, "imgSrc"], [1, "game-bar", "text-center", "pt-2"], [3, "imgSrc", 4, "ngIf"], ["alt", "question media", 1, "img-fluid", "img_respon", 3, "src"], [1, "game-bar", "pt-2"], [2, "font-weight", "450", "font-size", "24px", "text-align", "left"], [1, "contentDocx", "text-justify"], [2, "font-size", "21px", "align-self", "center", "vertical-align", "middle", "line-height", "1.4", 3, "innerHtml"], [1, "row", "mt-1", "justify-content-around"], ["class", "col-sm-6 col-md-6 d-flex", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-6", "d-flex"], [2, "vertical-align", "middle", "font-size", "22px", "font-weight", "500", "align-self", "center"], [1, "answer-content"], [1, "h5", "mb-0", "mr-2", "text-white", 2, "align-self", "center"], ["class", "answer-review", "style", "background-color: rgba(243, 156, 18, 1); color: rgb(255, 255, 255)", 4, "ngIf"], [4, "ngIf"], [1, "answer-review", 2, "background-color", "rgba(243, 156, 18, 1)", "color", "rgb(255, 255, 255)"], [2, "color", "#cd1324", "font-weight", "450"], [1, "row", 2, "width", "80%", 3, "ngClass"], [1, "col-sm-12", "mb-1"], ["class", "form-control mt-1", "readonly", "", 3, "id", "focus", 4, "ngIf"], ["readonly", "", 1, "form-control", "mt-1", 3, "id", "focus"], [3, "label"], ["class", "text-center mt-1 mb-1", 4, "ngIf"], ["class", "p-3 m-2 alert alert-danger", 4, "ngIf"], [3, "answerFiles", "changesPosImg", "previewFile", "removeFile"], [1, "text-center", "mt-1", "mb-1"], [1, "h6", "mb-1", "mt-1"], [1, "p-3", "m-2", "alert", "alert-danger"], [3, "data", "closeDialog", "redirectToHomepage", 4, "ngIf"], ["class", "row pl-0 pr-0 top_toolBar pt-2", 3, "ngClass", 4, "ngIf"], [3, "ngIf"], [3, "data", "closeDialog", "redirectToHomepage"], [1, "row", "pl-0", "pr-0", "top_toolBar", "pt-2", 3, "ngClass"], [1, "col-12", "col-md-3", "col-lg-3", "mb-1"], ["class", "row", 4, "ngIf"], ["class", "row clickable", 3, "click", 4, "ngIf"], ["class", "col-12 col-md-3 col-lg-3 mb-1 text-center align-self-center", 4, "ngIf"], ["class", "col-12 col-md-6 col-lg-6 mb-1", 4, "ngIf"], [1, "row"], [2, "padding", "6px 0px 5px 15px"], [2, "font-size", "25px", "color", "rgba(0, 167, 208, 1)"], ["style", "padding: 10px", 3, "ngClass", 4, "ngIf"], ["style", "padding: 10px", 4, "ngIf"], [2, "padding", "10px", 3, "ngClass"], [2, "padding", "10px"], [1, "row", "clickable", 3, "click"], [2, "color", "rgba(0, 167, 208, 1)"], [2, "align-self", "center", "margin-bottom", "2px"], [2, "color", "#347da5"], [1, "col-12", "col-md-3", "col-lg-3", "mb-1", "text-center", "align-self-center"], ["style", "vertical-align: middle; margin: auto", 4, "ngIf"], [2, "vertical-align", "middle", "margin", "auto"], [1, "col-12", "col-md-6", "col-lg-6", "mb-1"], [1, "d-flex", "justify-content-end", "toolBar"], ["class", "btn btn-info mr-2", "style", "font-size: 13px", 3, "click", 4, "ngIf"], [1, "mr-2", "d-flex"], ["matTooltip", "Xem t\u1EA5t c\u1EA3 c\u00E2u h\u1ECFi", 1, "mb-auto", "mt-auto", "clickable", 3, "click"], [2, "vertical-align", "middle"], ["matTooltip", "Xem t\u1EEBng c\u00E2u \u0111\u01A1n", 1, "ml-1", "mb-auto", "mt-auto", "clickable", 3, "click"], [1, "btn", "btn-light", "mr-1", 2, "font-size", "13px", 3, "click"], ["class", "btn btn-info mr-1", "style", "font-size: 13px", 3, "click", 4, "ngIf"], [1, "btn", "btn-warning", 2, "color", "white", "font-size", "13px", 3, "click"], [1, "btn", "btn-info", "mr-2", 2, "font-size", "13px", 3, "click"], [1, "btn", "btn-info", "mr-1", 2, "font-size", "13px", 3, "click"], [3, "dataClass", "isSearchTeacher", "isMobile", "selectClassroom"], [3, "data", "showAddStudent", "isSearchTeacher", "back_link", "isMobile", "selectChild", "approvedByName", "backToClass"], [3, "data", "confirmSend", "closeDialog", 4, "ngIf"], [3, "data", "confirmSend", "closeDialog"], ["class", "margin_question_bar pb-4", 4, "ngIf"], [1, "margin_question_bar", "pb-4"], [1, "alert", "alert-danger"], [3, "click", 4, "ngIf"], [1, "text-center", "clickable", "mt-2"], [3, "routerLink"], [3, "click"], [2, "color", "#347da5", "margin-left", "10px", "cursor", "pointer"], [2, "vertical-align", "middle", "color", "#347da5", "margin-left", "5px", "cursor", "pointer", "font-size", "16px", "height", "18px", "width", "16px"], [3, "answerFiles", "isTesting", "onMobile", "showList", "changesPosImg", "previewFile", "removeFile"], ["id", "monitorScreenTakeTest", 1, "align-self-center", "text-center", 3, "ngClass"], ["monitorScreenTakeTest", ""], [3, "hasErrorMessage", "hasEssayQuestion", "exam_obj", "firstInGroupIndexes", "timeCount", "questionList", "homeLink", "files", "showUnit", "isMobile", "showList", "unLimitTime", "isShowSheet", "countQuestion", "setAnswerEmitter", "setAnswerEssayEmitter", "setResultTracking", "removeImgEmitter", "openSubmitExamEmitter", "nextQuestionEmitter", "prevQuestionEmitter", "autoResizeEssayAnswerEmitter", "goToQuestionEmitter", "goToQuestionAllEmitter", "sendAudioEmitToParent", 4, "ngIf"], [3, "hasErrorMessage", "hasEssayQuestion", "exam_obj", "firstInGroupIndexes", "timeCount", "questionList", "homeLink", "files", "showUnit", "isMobile", "showList", "unLimitTime", "isShowSheet", "countQuestion", "setAnswerEmitter", "setAnswerEssayEmitter", "setResultTracking", "removeImgEmitter", "openSubmitExamEmitter", "nextQuestionEmitter", "prevQuestionEmitter", "autoResizeEssayAnswerEmitter", "goToQuestionEmitter", "goToQuestionAllEmitter", "sendAudioEmitToParent"], ["class", "box-show-sheet", 3, "hidden", 4, "ngIf"], [1, "box-show-sheet", 3, "hidden"], [1, "show-sheet"], [1, "sheet_content", "text-center", "mt-3"], [1, "h5", "mb-0", "disable-select"], [1, "listda", 2, "padding-left", "5px", "margin-top", "15px"], ["class", "listli", "style", "margin-bottom: 5px", 3, "click", 4, "ngFor", "ngForOf"], [1, "listli", 2, "margin-bottom", "5px", 3, "click"], ["class", "no-answered", "style", "background: #fff; color: #111", 4, "ngIf"], ["class", "no-answered", "style", "background-color: rgba(60, 141, 188, 1); color: rgb(255, 255, 255)", 4, "ngIf"], [1, "no-answered", 2, "background", "#fff", "color", "#111"], [1, "no-answered", 2, "background-color", "rgba(60, 141, 188, 1)", "color", "rgb(255, 255, 255)"], [1, "top_action"], [1, "row", "justify-content-between", "ml-0", "mr-0"], [1, "col-2", "align-self-center"], [1, "clickable", 2, "color", "#fff", 3, "click"], ["class", "col-6 text-center align-self-center pl-0 pr-0", 4, "ngIf"], [1, "col-4", "pl-0", "pr-1", "text-right", "align-self-center", 3, "ngClass"], [2, "vertical-align", "top", "line-height", "1.8"], [1, "bottom_action"], [1, "collapse", 3, "hidden"], [1, "card", "card-body", "mb-2", 2, "padding", "5px 0px"], ["id", "scroll-bottom-sheet", 1, "show-sheet", "scrollSheetMobile"], [1, "sheet_content", "text-center", "mt-1"], [1, "listda", "mt-1", "pl-1"], ["class", "listli mb-1", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-between", "clickable", 3, "click"], [1, "col-3", "d-flex", "pr-1", "menu-control"], ["matTooltip", "Xem t\u1EA5t c\u1EA3 c\u00E2u h\u1ECFi", 1, "mb-auto", "mt-auto", "mr-1", "clickable", 3, "click"], [2, "vertical-align", "middle", "color", "#fff"], ["matTooltip", "Xem t\u1EEBng c\u00E2u \u0111\u01A1n", 1, "ml-2", "mb-auto", "mt-auto", "clickable", 3, "click"], [1, "col-5", "pl-0", "pr-0", "text-center", "align-self-center"], [1, "mb-0", "clickable"], ["style", "vertical-align: middle; color: #fff", 4, "ngIf"], ["class", "col-4 text-right pl-0 align-self-center", 3, "ngClass", 4, "ngIf"], ["class", "col-6 text-center pl-0 pr-1 align-self-center", 4, "ngIf"], [1, "col-6", "text-center", "align-self-center", "pl-0", "pr-0"], [1, "clickable", 2, "color", "#fff", "border", "3px solid #fff", "padding", "3px 5px", 3, "click"], [2, "vertical-align", "top"], [1, "listli", "mb-1", 3, "click"], [1, "col-4", "text-right", "pl-0", "align-self-center", 3, "ngClass"], [1, "text-white", "mr-1", "clickable", 2, "vertical-align", "middle", "width", "16px", "font-size", "20px", "font-weight", "500", "margin-right", "5px"], [1, "col-6", "text-center", "pl-0", "pr-1", "align-self-center"], [1, "text-white", "clickable", 2, "vertical-align", "middle", "font-size", "20px", "font-weight", "500", "margin-right", "2px"], [1, "ng-binding", 2, "font-size", "12px"], [3, "customText"], [1, "p-5", "m-5", "text-center", "alert", "alert-danger"]], template: function TakeTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("resize", function TakeTestComponent_Template_div_resize_0_listener($event) { return ctx.handleFullscreenEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵresolveWindow"])("contextmenu", function TakeTestComponent_Template_div_contextmenu_0_listener() { return ctx.returnFalse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("resize", function TakeTestComponent_Template_div_resize_1_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](2, TakeTestComponent_azt_loading_effect_2_Template, 1, 0, "azt-loading-effect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](3, TakeTestComponent_app_submit_info_3_Template, 1, 1, "app-submit-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](4, TakeTestComponent_app_monitor_screen_4_Template, 1, 1, "app-monitor-screen", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, TakeTestComponent_app_check_essay_5_Template, 1, 1, "app-check-essay", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, TakeTestComponent_ng_template_6_Template, 6, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](6, _c9, ctx.isMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.showFormInfo.isShow && ctx.validForTakeTest);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.dataMonitorAuto.isShow && ctx.validForTakeTest);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.dataEssayPopup.isShow && ctx.validForTakeTest);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_40__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_40__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_22__.AztLoadingEffectComponent, _ultities_submit_info_controller_component__WEBPACK_IMPORTED_MODULE_23__.SubmitInfoComponent, _ultities_monitoring_dialog_controller_component__WEBPACK_IMPORTED_MODULE_24__.MonitorScreenComponent, _ultities_check_essay_controller_component__WEBPACK_IMPORTED_MODULE_25__.CheckEssayComponent, _azota_ui_preview_media_controller_component__WEBPACK_IMPORTED_MODULE_26__.AztPreviewMediaComponent, _ultities_upload_image_controller_component__WEBPACK_IMPORTED_MODULE_3__.UploadImageComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_43__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_43__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_44__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__.MatTab, _angular_common__WEBPACK_IMPORTED_MODULE_40__.NgForOf, _azota_ui_azt_loaded_img_azt_loaded_img_component__WEBPACK_IMPORTED_MODULE_27__.AztLoadedImgComponent, _azota_ui_azt_upload_ui_controller_component__WEBPACK_IMPORTED_MODULE_28__.AztUploadUiComponent, _ultities_exit_exam_exit_exam_component__WEBPACK_IMPORTED_MODULE_29__.ExitExamComponent, _ultities_comfirm_exam_comfirm_exam_component__WEBPACK_IMPORTED_MODULE_30__.ComfirmExamComponent, _ultities_submit_name_controller_component__WEBPACK_IMPORTED_MODULE_31__.SubmitNameComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__.MatTooltip, _azota_ui_select_classes_controller_component__WEBPACK_IMPORTED_MODULE_32__.SelectClassesFrontComponent, _azota_ui_select_student_controller_component__WEBPACK_IMPORTED_MODULE_33__.SelectStudentFrontComponent, _azota_ui_send_request_reapprove_controller_component__WEBPACK_IMPORTED_MODULE_34__.SendRequestReApproveComponent, _angular_router__WEBPACK_IMPORTED_MODULE_42__.RouterLinkWithHref, _test_question_ui_controller_component__WEBPACK_IMPORTED_MODULE_35__.TestQuestionComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_40__.DatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_36__.MyCdnPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_36__.IsOneChoiceAnswer, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_36__.IsEssayAnswer, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_36__.IsFillAnswer, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_36__.MytranslatePipe, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_47__.LocalizeRouterPipe], styles: [".MW-1400[_ngcontent-%COMP%] {\n  max-width: 1400px;\n}\n\n.box-slide-show[_ngcontent-%COMP%] {\n  background: inherit;\n  background-color: white;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e7e7e7;\n  border-radius: 3px 3px 0 0;\n  padding-bottom: 20px;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-bottom: none;\n}\n\n.top_toolBar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0px;\n  margin-left: 0px;\n  margin-right: 0px;\n  right: 0px;\n  width: 100%;\n  background-color: #fff;\n  z-index: 3;\n}\n\n.margin_question_bar[_ngcontent-%COMP%] {\n  margin-top: calc(2rem + 40px) !important;\n}\n\n.col-game-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: calc(2rem + 30px);\n  right: 10vw;\n  max-width: 180px;\n}\n\n.sheet-Screen[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 220px);\n  overflow-y: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.sheet-Screen[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.box-show-sheet[_ngcontent-%COMP%] {\n  margin-top: 14px !important;\n  width: 75%;\n  margin: auto;\n  background: inherit;\n  background-color: white;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e7e7e7;\n  border-radius: 5px;\n}\n\n.disable-select[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  \n  \n  user-select: none;\n  \n}\n\n.question-content[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.next_question_btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 35%;\n  padding: 0.35rem 0.45rem;\n  background-color: #a3a5a670;\n  border-radius: 50%;\n}\n\n.prev_question_btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 35%;\n  padding: 0.35rem 0.45rem;\n  background-color: #a3a5a670;\n  border-radius: 50%;\n}\n\n.arrow_btn[_ngcontent-%COMP%] {\n  font-size: 20px;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  color: #fff;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  -webkit-user-select: none;\n  \n  \n  user-select: none;\n  \n}\n\n.button-note[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  -webkit-user-select: none;\n  \n  \n  user-select: none;\n  \n}\n\n.show-sheet[_ngcontent-%COMP%]   .sheet_content[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .sheet_content[_ngcontent-%COMP%] {\n  animation: revealFromLeft 0.5s 0s ease both 1;\n}\n\n.show-sheet[_ngcontent-%COMP%]   .sheet_content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .sheet_content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.show-sheet[_ngcontent-%COMP%]   .listda[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .listda[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding-left: 20px;\n}\n\n.show-sheet[_ngcontent-%COMP%]   .ng-binding[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .ng-binding[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 400;\n}\n\n.show-sheet[_ngcontent-%COMP%]   .listli[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .listli[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-right: 5px;\n  display: inline-block;\n}\n\n.show-sheet[_ngcontent-%COMP%]   .listli[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .listli[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 1px solid #347da5;\n  display: flex;\n  align-items: center;\n  color: #fff;\n  justify-content: center;\n  font-size: 15px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  \n  \n  user-select: none;\n}\n\n.show-sheet[_ngcontent-%COMP%]   .no-answered[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .no-answered[_ngcontent-%COMP%] {\n  background: #273044;\n}\n\n.note-box[_ngcontent-%COMP%] {\n  display: none;\n  background-color: #f7f3cf;\n  margin-bottom: 5px;\n  min-height: 30px;\n}\n\n.answer-content[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-wrap: wrap;\n}\n\n.answer-box[_ngcontent-%COMP%] {\n  background: #00a7d0;\n  border-radius: 0 0 3px 3px;\n  color: #fff;\n  padding: 8px 20px;\n}\n\n.btn-ans-result[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #f39c12;\n}\n\n.bottom_action[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 15px;\n  bottom: 0;\n  left: 0;\n  background: #312e2e;\n  color: #fff;\n  width: 100%;\n}\n\n.bottom_action[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.show-list[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\n.show-list[_ngcontent-%COMP%]   .show-sheet[_ngcontent-%COMP%]   .listli[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  border: 1px solid #347da5;\n  display: flex;\n  align-items: center;\n  color: #fff;\n  justify-content: center;\n  font-size: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.top_action[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 10px;\n  top: 0;\n  left: 0;\n  background: #312e2e;\n  color: #fff;\n  width: 100%;\n}\n\n.scrollSheetMobile[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.scrollSheetMobile[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.notify-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3px;\n  top: 3px;\n  text-align: center;\n  color: #afafaf;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.attach-container[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 10px 0 0 0;\n  border-radius: 5px;\n  width: 83.33%;\n  border: 1px solid #e8e8e8;\n}\n\n.monitor-screen[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999;\n  transform-origin: 100% 100%;\n  bottom: 5px;\n  right: 5px;\n}\n\n.monitor-screen-mobile[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999;\n  width: 36px;\n  height: 48px;\n  bottom: 60px;\n  right: 5px;\n}\n\n.time-almost-end[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n  animation: timeCount 1s;\n}\n\n.time-almost-end-mobile[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n  animation: timeCount 1s;\n}\n\n.answer-review[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 1px solid #347da5;\n  display: flex;\n  align-items: center;\n  color: #fff;\n  justify-content: center;\n  font-size: 15px;\n  -webkit-user-select: none;\n  \n  \n  user-select: none;\n}\n\n.time-client[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffffff57;\n  font-size: 15px;\n  padding: 2px 3px;\n  max-width: 200px;\n  position: fixed;\n}\n\n.time-client-pc[_ngcontent-%COMP%] {\n  bottom: 10px;\n  left: 75px;\n}\n\n.time-client-mobile[_ngcontent-%COMP%] {\n  bottom: 54px;\n  left: 2px;\n}\n\n.time-client-notValid[_ngcontent-%COMP%] {\n  z-index: 990;\n  bottom: 10px;\n  left: 75px;\n}\n\n@keyframes timeCount {\n  50% {\n    font-size: 20px !important;\n  }\n}\n\n.max-width-col[_ngcontent-%COMP%] {\n  max-width: 250px !important;\n}\n\n.max-width-col-mobile[_ngcontent-%COMP%] {\n  max-width: 200px !important;\n}\n\n@media (max-width: 1200px) {\n  #container-content[_ngcontent-%COMP%] {\n    padding-bottom: 400px !important;\n  }\n}\n\n@media (max-width: 768px) {\n  .answer-content[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .btn-ans-result[_ngcontent-%COMP%] {\n    margin-right: auto !important;\n  }\n\n  .list-answer[_ngcontent-%COMP%] {\n    margin-bottom: 14px !important;\n  }\n\n  .list-answer-mobile[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFHRjs7QUFEQTtFQUNFLHdDQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FBTUY7O0FBTEU7RUFDSSxRQUFBO0VBQ0EsU0FBQTtBQU9OOztBQUpBO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQU9GOztBQUxBO0VBQ0UseUJBQUE7RUFBMkIsV0FBQTtFQUNKLG9CQUFBO0VBQ3ZCLGlCQUFBO0VBQW1CLG9CQUFBO0FBV3JCOztBQVRBO0VBQ0Usa0JBQUE7QUFZRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFhRjs7QUFYQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFjRjs7QUFaQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUEyQixXQUFBO0VBQ0osb0JBQUE7RUFDdkIsaUJBQUE7RUFBbUIsb0JBQUE7QUFrQnJCOztBQWhCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQTJCLFdBQUE7RUFDSixvQkFBQTtFQUN2QixpQkFBQTtFQUFtQixvQkFBQTtBQXNCckI7O0FBbEJFOztFQUNFLDZDQUFBO0FBc0JKOztBQXBCRTs7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBdUJKOztBQXBCRTs7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBdUJKOztBQXJCRTs7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUF3Qko7O0FBdEJFOztFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBeUJKOztBQXZCRTs7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQTJCLFdBQUE7RUFDSixvQkFBQTtFQUN2QixpQkFBQTtBQTRCSjs7QUExQkU7O0VBQ0UsbUJBQUE7QUE2Qko7O0FBMUJBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTZCRjs7QUEzQkE7RUFDRSx3QkFBQTtFQUNBLGVBQUE7QUE4QkY7O0FBNUJBO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQStCRjs7QUE3QkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFnQ0Y7O0FBOUJBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLFdBQUE7QUFnQ0Y7O0FBL0JFO0VBQ0ksY0FBQTtBQWlDTjs7QUE5QkE7RUFDSSxnQkFBQTtBQWlDSjs7QUFoQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFrQ047O0FBL0JBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFrQ0Y7O0FBaENBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7QUFtQ0o7O0FBbENJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7QUFvQ1I7O0FBakNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQW9DRjs7QUFsQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFxQ0Y7O0FBbkNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBc0NGOztBQXBDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQXVDRjs7QUFyQ0E7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0FBd0NKOztBQXRDQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUF5Q0o7O0FBdkNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQTJCLFdBQUE7RUFDSixvQkFBQTtFQUN2QixpQkFBQTtBQTRDRjs7QUExQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTZDRjs7QUExQ0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQTZDRjs7QUEzQ0E7RUFDRSxZQUFBO0VBQ0EsU0FBQTtBQThDRjs7QUE1Q0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUErQ0Y7O0FBN0NBO0VBQ0U7SUFBTSwwQkFBQTtFQWlETjtBQUNGOztBQWhEQTtFQUNFLDJCQUFBO0FBa0RGOztBQWhEQTtFQUNFLDJCQUFBO0FBbURGOztBQWpEQTtFQUlFO0lBQ0UsZ0NBQUE7RUFpREY7QUFDRjs7QUEvQ0E7RUFDRTtJQUNFLHVCQUFBO0VBaURGOztFQS9DQTtJQUNFLDZCQUFBO0VBa0RGOztFQWhEQTtJQUFhLDhCQUFBO0VBb0RiOztFQW5EQTtJQUNFLDJCQUFBO0VBc0RGO0FBQ0YiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTVctMTQwMCB7XG4gIG1heC13aWR0aDogMTQwMHB4O1xufVxuLmJveC1zbGlkZS1zaG93IHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNlN2U3ZTc7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLnRvcF90b29sQmFye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDowO1xuICBsZWZ0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICByaWdodDowcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAzO1xufVxuLm1hcmdpbl9xdWVzdGlvbl9iYXIge1xuICBtYXJnaW4tdG9wOiBjYWxjKDJyZW0gKyA0MHB4KSFpbXBvcnRhbnQ7XG59XG4uY29sLWdhbWUtYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IGNhbGMoMnJlbSArIDMwcHgpO1xuICByaWdodDogY2FsYygxMDB2dyAtIDkwdncpO1xuICBtYXgtd2lkdGg6IDE4MHB4O1xufVxuLnNoZWV0LVNjcmVlbntcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIyMHB4KTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cbi5ib3gtc2hvdy1zaGVldCB7XG4gIG1hcmdpbi10b3A6IDE0cHghaW1wb3J0YW50O1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmRpc2FibGUtc2VsZWN0IHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgYW5kIElFIDExICovXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cbn1cbi5xdWVzdGlvbi1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5leHRfcXVlc3Rpb25fYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAzNSU7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC40NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzYTVhNjcwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucHJldl9xdWVzdGlvbl9idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMzUlO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuNDVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNhM2E1YTY3MDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmFycm93X2J0biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xufVxuLmJ1dHRvbi1ub3RlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xufVxuLnNob3ctc2hlZXQsXG4ubGlzdC1hbnN3ZXIge1xuICAuc2hlZXRfY29udGVudCB7XG4gICAgYW5pbWF0aW9uOiByZXZlYWxGcm9tTGVmdCAwLjVzIDBzIGVhc2UgYm90aCAxO1xuICB9XG4gIC5zaGVldF9jb250ZW50IGgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmxpc3RkYSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbiAgLm5nLWJpbmRpbmcge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5saXN0bGkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5saXN0bGkgc3BhbiB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDUyLCAxMjUsIDE2NSwgMSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgXG4gIH1cbiAgLm5vLWFuc3dlcmVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjczMDQ0O1xuICB9XG59XG4ubm90ZS1ib3gge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDMsIDIwNyk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWluLWhlaWdodDogMzBweDtcbn1cbi5hbnN3ZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmFuc3dlci1ib3gge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE2NywgMjA4LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbn1cbi5idG4tYW5zLXJlc3VsdCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMTU2LCAxOCwgMSk7XG59XG4uYm90dG9tX2FjdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjMzEyZTJlO1xuICBjb2xvcjogI2ZmZjtcblxuICB3aWR0aDogMTAwJTtcbiAgLmNvbGxhcHNlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uc2hvdy1saXN0IHsgXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAuc2hvdy1zaGVldCAubGlzdGxpIHNwYW57XG4gICAgICB3aWR0aDogMjdweDtcbiAgICAgIGhlaWdodDogMjdweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNDdkYTU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxufVxuLnRvcF9hY3Rpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogIzMxMmUyZTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNjcm9sbFNoZWV0TW9iaWxlIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG4ubm90aWZ5LWJhZGdle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzcHg7XG4gIHRvcDozcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6cmdiKDE3NSwgMTc1LCAxNzUpO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6MjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmF0dGFjaC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA4My4zMyU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XG59XG4ubW9uaXRvci1zY3JlZW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICBib3R0b206IDVweDtcbiAgcmlnaHQ6IDVweDtcbn1cbi5tb25pdG9yLXNjcmVlbi1tb2JpbGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm90dG9tOiA2MHB4O1xuICByaWdodDogNXB4O1xufVxuLnRpbWUtYWxtb3N0LWVuZCB7XG4gICAgY29sb3I6ICNkYzM1NDUhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbjogdGltZUNvdW50IDFzO1xufVxuLnRpbWUtYWxtb3N0LWVuZC1tb2JpbGUge1xuICAgIGNvbG9yOiAjZmZjMTA3IWltcG9ydGFudDtcbiAgICBhbmltYXRpb246IHRpbWVDb3VudCAxcztcbn1cbi5hbnN3ZXItcmV2aWV3IHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDUyLCAxMjUsIDE2NSwgMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4udGltZS1jbGllbnQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTc7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDNweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBcbn1cbi50aW1lLWNsaWVudC1wYyB7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogNzVweDtcbn1cbi50aW1lLWNsaWVudC1tb2JpbGUge1xuICBib3R0b206IDU0cHg7XG4gIGxlZnQ6IDJweDtcbn1cbi50aW1lLWNsaWVudC1ub3RWYWxpZCB7XG4gIHotaW5kZXg6IDk5MDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiA3NXB4O1xufVxuQGtleWZyYW1lcyB0aW1lQ291bnQge1xuICA1MCUgIHtmb250LXNpemU6IDIwcHghaW1wb3J0YW50O31cbn1cbi5tYXgtd2lkdGgtY29sIHtcbiAgbWF4LXdpZHRoOiAyNTBweCFpbXBvcnRhbnQ7XG59XG4ubWF4LXdpZHRoLWNvbC1tb2JpbGUge1xuICBtYXgtd2lkdGg6IDIwMHB4IWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLy8gLm1lbnUtY29udHJvbHtcbiAgLy8gICAvLyBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIC8vIH1cbiAgI2NvbnRhaW5lci1jb250ZW50e1xuICAgIHBhZGRpbmctYm90dG9tOiA0MDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFuc3dlci1jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuYnRuLWFucy1yZXN1bHQge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5saXN0LWFuc3dlcnttYXJnaW4tYm90dG9tOiAxNHB4ICFpbXBvcnRhbnQ7fVxuICAubGlzdC1hbnN3ZXItbW9iaWxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 76669:
/*!*********************************************************************************!*\
  !*** ./src/app/testbank_frontend/take-test/mark-chosen/controller.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkChosenComponent": () => (/* binding */ MarkChosenComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_interfaces_common_mixdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/interfaces/common/mixdata */ 59425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





const _c0 = function (a0, a1, a2, a3) { return { "width.%": a0, "height.%": a1, "left.%": a2, "top.%": a3 }; };
function MarkChosenComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 2);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("v2-label label-", item_r1.alpha ? item_r1.alpha : item_r1.key, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](4, _c0, item_r1.alpha ? ctx_r2.question.answerLabelsMockup["label-" + item_r1.alpha].width / ctx_r2.realQuestionWidth * 100 : ctx_r2.question.answerLabelsMockup["label-" + item_r1.key].width / ctx_r2.realQuestionWidth * 100, item_r1.alpha ? ctx_r2.question.answerLabelsMockup["label-" + item_r1.alpha].height / ctx_r2.questionHeight * 100 : ctx_r2.question.answerLabelsMockup["label-" + item_r1.key].height / ctx_r2.questionHeight * 100, item_r1.alpha ? ctx_r2.question.answerLabelsMockup["label-" + item_r1.alpha].left / ctx_r2.realQuestionWidth * 100 : ctx_r2.question.answerLabelsMockup["label-" + item_r1.key].left / ctx_r2.realQuestionWidth * 100, item_r1.alpha ? ctx_r2.question.answerLabelsMockup["label-" + item_r1.alpha].top / ctx_r2.questionHeight * 100 : ctx_r2.question.answerLabelsMockup["label-" + item_r1.key].top / ctx_r2.questionHeight * 100));
} }
function MarkChosenComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MarkChosenComponent_ng_container_0_div_1_Template, 1, 9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.checked);
} }
class MarkChosenComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(commonService) {
        super(commonService);
        this.commonService = commonService;
    }
    get realQuestionWidth() {
        var _a, _b, _c, _d;
        return ((_b = (_a = this.content.metaData) === null || _a === void 0 ? void 0 : _a.question) === null || _b === void 0 ? void 0 : _b.width) !== undefined ? ((_d = (_c = this.content.metaData) === null || _c === void 0 ? void 0 : _c.question) === null || _d === void 0 ? void 0 : _d.width) + src_app_core_interfaces_common_mixdata__WEBPACK_IMPORTED_MODULE_0__.EXTRA_SPACE : 1;
    }
    get questionHeight() {
        var _a, _b;
        return ((_b = (_a = this.content.metaData) === null || _a === void 0 ? void 0 : _a.question) === null || _b === void 0 ? void 0 : _b.height) || 1;
    }
    ngOnInit() {
        this.content = this.question.questionContentParse[0];
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngDestroy();
    }
}
MarkChosenComponent.ɵfac = function MarkChosenComponent_Factory(t) { return new (t || MarkChosenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService)); };
MarkChosenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MarkChosenComponent, selectors: [["azt-mark-chosen"]], inputs: { question: "question" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["style", "position: absolute; border-bottom: 2px solid #f39c12;", 3, "class", "ngStyle", 4, "ngIf"], [2, "position", "absolute", "border-bottom", "2px solid #f39c12", 3, "ngStyle"]], template: function MarkChosenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MarkChosenComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.question.answerConfigParse);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle], encapsulation: 2 });


/***/ }),

/***/ 53582:
/*!**************************************************************************!*\
  !*** ./src/app/testbank_frontend/take-test/takeTestInterface.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TakeTestInterfaceService": () => (/* binding */ TakeTestInterfaceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_answertype_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/answertype.service */ 24782);


class TakeTestInterfaceService {
    constructor(answerTypeService) {
        this.answerTypeService = answerTypeService;
    }
    changeAnswerConfigVer2(answers, question) {
        var newAnswer = [];
        if (!this.answerTypeService.isFillAnswer(question.answerType) && !this.answerTypeService.isEssayAnswer(question.answerType)) {
            answers.forEach((answer) => {
                answer = Object.assign(Object.assign({}, answer), { questionId: question.id, checked: false });
                newAnswer.push(answer);
            });
        }
        else {
            newAnswer = answers;
        }
        return newAnswer;
    }
    changeAnswerConfigVer1(answers, question) {
        var _a, _b, _c;
        var newAnswer = [];
        if (!this.answerTypeService.isFillAnswer(question.answerType) && !this.answerTypeService.isEssayAnswer(question.answerType)) {
            if (!Array.isArray(answers) && answers.answer) { // pdf ver 1
                let answerConfigV2 = (_a = answers.answerConfigV2) !== null && _a !== void 0 ? _a : [];
                for (var i = 0; i < answers.answer.length; i++) {
                    if (typeof answers.answer[i] == 'string') {
                        answerConfigV2[i] = { questionId: question.id, key: (_b = answers.answer[i]) !== null && _b !== void 0 ? _b : '', content: (_c = answers.answer[i]) !== null && _c !== void 0 ? _c : '', checked: false };
                    }
                }
                answers.answerConfigV2 = answerConfigV2;
                question.answerConfigParse = answerConfigV2;
                newAnswer.push(answers);
            }
            else {
                newAnswer.push(answers);
            }
        }
        else {
            newAnswer.push(answers);
        }
        return newAnswer;
    }
}
TakeTestInterfaceService.ɵfac = function TakeTestInterfaceService_Factory(t) { return new (t || TakeTestInterfaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_core_services_answertype_service__WEBPACK_IMPORTED_MODULE_0__.AnswerTypeService)); };
TakeTestInterfaceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TakeTestInterfaceService, factory: TakeTestInterfaceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 71098:
/*!***********************************************************************************!*\
  !*** ./src/app/testbank_frontend/take-test/test-audio-ui/controller.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestAudioComponent": () => (/* binding */ TestAudioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);










function TestAudioComponent_div_0_div_1_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0H\u1EBFt l\u01B0\u1EE3t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TestAudioComponent_div_0_div_1_div_1_ng_template_4_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TestAudioComponent_div_0_div_1_div_1_ng_template_4_mat_icon_1_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r10.playAudio(ctx_r10.questionObj.id || -1, item_r7.index || 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TestAudioComponent_div_0_div_1_div_1_ng_template_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TestAudioComponent_div_0_div_1_div_1_ng_template_4_mat_icon_2_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r13.stopAudio(ctx_r13.questionObj.id || -1, item_r7.index || 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TestAudioComponent_div_0_div_1_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TestAudioComponent_div_0_div_1_div_1_ng_template_4_mat_icon_1_Template, 2, 0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TestAudioComponent_div_0_div_1_div_1_ng_template_4_mat_icon_2_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "audio", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "source", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "mycdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !item_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.checkAudioPlay(ctx_r6.questionObj.id || -1, item_r7.index || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.checkAudioPlay(ctx_r6.questionObj.id || -1, item_r7.index || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", ctx_r6.isShowList ? "audio_list_" + ctx_r6.questionObj.id + "_" + item_r7.index : "audio_unit_" + ctx_r6.questionObj.id + "_" + item_r7.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, ctx_r6.questionObj.attachmentsParse[0].url)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function TestAudioComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "S\u1ED1 l\u01B0\u1EE3t nghe: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TestAudioComponent_div_0_div_1_div_1_span_3_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TestAudioComponent_div_0_div_1_div_1_ng_template_4_Template, 7, 9, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.questionObj.limitAudio == ctx_r4.totalLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.questionObj.audioLimitObjs);
} }
function TestAudioComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TestAudioComponent_div_0_div_1_div_1_Template, 5, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r3.questionObj.limitAudio != undefined ? ctx_r3.questionObj.limitAudio : ctx_r3.totalLimit + 1) <= ctx_r3.totalLimit);
} }
function TestAudioComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TestAudioComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.questionObj.attachmentsParse && ctx_r0.questionObj.attachmentsParse.length > 0);
} }
function TestAudioComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "audio", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "source", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "mycdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", "audio_" + ctx_r16.questionObj.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx_r16.questionObj.attachmentsParse[0].url)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function TestAudioComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TestAudioComponent_ng_template_1_div_0_Template, 5, 6, "div", 17);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.questionObj.attachmentsParse && ctx_r2.questionObj.attachmentsParse.length > 0);
} }
class TestAudioComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService) {
        super(commonService);
        this.commonService = commonService;
        //region Angular func & constructor
        this.questionObj = { questionContentParse: [], answerConfigParse: [], attachmentsParse: [], answerLabelsMockup: {} };
        this.totalLimit = 0;
        this.isShowList = true;
        this.sendAudioEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({}); // Form group
    }
    detectAllAudioPlaying() {
        var boolReturn = false;
        let audioElements = document.getElementsByTagName('audio');
        for (let i = 0; i < audioElements.length; i++) {
            if (audioElements[i].duration > 0 && !audioElements[i].paused) {
                boolReturn = true;
                break;
            }
        }
        return boolReturn;
    }
    playAudio(questionId, index) {
        var audioQuestion = this.isShowList ? document.getElementById('audio_list_' + questionId + '_' + index) : document.getElementById('audio_unit_' + questionId + '_' + index);
        if (audioQuestion) {
            if (!this.detectAllAudioPlaying()) {
                this.sendAudioEmitter.emit({ obj: this.questionObj, play: 1, index });
                audioQuestion.play();
            }
            else {
                this.commonService.snackWarning('File nghe đang được phát!', '');
            }
        }
    }
    stopAudio(questionId, index) {
        // remove luôn k cho nghe lại
        var audioQuestion = this.isShowList ? document.getElementById('audio_list_' + questionId + '_' + index) : document.getElementById('audio_unit_' + questionId + '_' + index);
        if (audioQuestion) {
            if (audioQuestion.duration > 0 && !audioQuestion.paused) {
                audioQuestion.pause();
                audioQuestion.currentTime = 0;
                // emit ra this.questionObj.limitAudio + 1;
                audioQuestion.setAttribute('src', '');
                this.sendAudioEmitter.emit({ obj: this.questionObj, play: 0, index });
            }
        }
    }
    checkAudioPlay(questionId, index) {
        var audioQuestion = this.isShowList ? document.getElementById('audio_list_' + questionId + '_' + index) : document.getElementById('audio_unit_' + questionId + '_' + index);
        if (audioQuestion) {
            if (audioQuestion.duration > 0 && !audioQuestion.paused) {
                return true;
            }
            else {
                if (audioQuestion.ended || (audioQuestion.currentTime > 0 && audioQuestion.paused)) {
                    // end audio
                    audioQuestion.currentTime = 0;
                    // emit ra this.questionObj.limitAudio + 1;
                    audioQuestion.setAttribute('src', '');
                    this.sendAudioEmitter.emit({ obj: this.questionObj, play: 0, index });
                }
                return false;
            }
        }
        else {
            return false;
        }
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
TestAudioComponent.ɵfac = function TestAudioComponent_Factory(t) { return new (t || TestAudioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
TestAudioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TestAudioComponent, selectors: [["azt-test-audio-ui"]], inputs: { questionObj: "questionObj", totalLimit: "totalLimit", isShowList: "isShowList" }, outputs: { sendAudioEmitter: "sendAudioEmitter" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["NormalAudio", ""], ["class", "text-left ml-auto mr-auto", 4, "ngIf"], [1, "text-left", "ml-auto", "mr-auto"], ["class", "limit_audio", 4, "ngIf"], [1, "limit_audio"], [1, "mb-0", 2, "font-size", "14px", "font-weight", "400"], ["class", "mb-0", "style", "font-size: 14px; font-weight: 450;color: #da0522 ", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "mb-0", 2, "font-size", "14px", "font-weight", "450", "color", "#da0522"], [1, "audio-control", 3, "hidden"], ["style", "vertical-align: middle; line-height: 1; color: #000", "matTooltip", "B\u1EAFt \u0111\u1EA7u", 3, "click", 4, "ngIf"], ["style", "vertical-align: middle; line-height: 1; color: #da0522", "matTooltip", "K\u1EBFt th\u00FAc", 3, "click", 4, "ngIf"], ["preload", "true", 3, "id"], [3, "src"], ["matTooltip", "B\u1EAFt \u0111\u1EA7u", 2, "vertical-align", "middle", "line-height", "1", "color", "#000", 3, "click"], ["matTooltip", "K\u1EBFt th\u00FAc", 2, "vertical-align", "middle", "line-height", "1", "color", "#da0522", 3, "click"], ["class", "text-center ml-auto mr-auto", 4, "ngIf"], [1, "text-center", "ml-auto", "mr-auto"], ["controls", "", "preload", "true", 2, "margin-left", "10px", "margin-right", "10px", "max-width", "70%", 3, "id"]], template: function TestAudioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TestAudioComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TestAudioComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.totalLimit > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_2__.MyCdnPipe], styles: [".limit_audio[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n\n.audio-control[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #f0f3f4;\n  color: black;\n  padding: 5px;\n  height: 35px;\n  width: 35px;\n  margin-left: 5px;\n  cursor: pointer;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFRiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW1pdF9hdWRpbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmF1ZGlvLWNvbnRyb2x7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmNDtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 29400:
/*!**************************************************************************************!*\
  !*** ./src/app/testbank_frontend/take-test/test-question-ui/controller.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestQuestionComponent": () => (/* binding */ TestQuestionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_interfaces_common_mixdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/interfaces/common/mixdata */ 59425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _test_audio_ui_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-audio-ui/controller.component */ 71098);
/* harmony import */ var _azota_ui_azt_loaded_img_azt_loaded_img_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../azota-ui/azt-loaded-img/azt-loaded-img.component */ 47865);
/* harmony import */ var _mark_chosen_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mark-chosen/controller.component */ 76669);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);













function TestQuestionComponent_div_0_div_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10)(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 12)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "A.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "B.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "C.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("C\u00E2u ", index_r4 + 1, ": C\u00E2u h\u1ECFi \u0111\u1EC1 thi Offline");
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_div_2_li_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r22.content, " ");
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_div_2_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r22.content, " ");
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_div_2_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_div_2_li_2_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const answer_r22 = restoredCtx.$implicit; const k_r23 = restoredCtx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6); const question_r3 = ctx_r29.$implicit; const index_r4 = ctx_r29.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r28.setAnswer(question_r3.id || -1, answer_r22, 2, true, k_r23, answer_r22.alpha, answer_r22.key, index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_div_2_li_2_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_div_2_li_2_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r22.checked == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r22.checked == true);
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23)(1, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_div_2_li_2_Template, 3, 2, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r3.answerConfigParse);
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " arrow_forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_p_1_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_div_2_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4); const last_r5 = ctx_r33.last; const index_r4 = ctx_r33.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return last_r5 ? ctx_r32.openSubmitExam() : ctx_r32.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_mat_icon_6_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const eachConfig_r17 = ctx.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    const last_r5 = ctx_r35.last;
    const index_r4 = ctx_r35.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r16.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", eachConfig_r17.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", last_r5 ? "N\u1ED9p b\u00E0i" : "C\u00E2u ti\u1EBFp", "\u00A0(", index_r4 + 1, "/", ctx_r16.countQuestion, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !last_r5);
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_div_1_Template, 7, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r3.answerConfigParseVer1);
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "B\u00E0i l\u00E0m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "justify-content-between": a0, "justify-content-center": a1 }; };
const _c1 = function (a0) { return { "w-100": a0 }; };
const _c2 = function (a0) { return { "disabled": a0 }; };
function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_3_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_3_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r38.autoResizeEssayAnswer(question_r3.id || -1, 1); })("keyup", function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_3_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r41.autoResizeEssayAnswer(question_r3.id || -1, 1); })("change", function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_3_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r43.setAnswerType3(question_r3.id || -1, $event, 3, true, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 38)(7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_3_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40); const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r45.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " arrow_forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    const question_r3 = ctx_r47.$implicit;
    const last_r5 = ctx_r47.last;
    const index_r4 = ctx_r47.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](10, _c0, !ctx_r14.isMobile, ctx_r14.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r14.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r14.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-1-unit-" + question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r3.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", true)("question_id", question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](15, _c2, last_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("C\u00E2u ti\u1EBFp (", index_r4 + 1, "/", ctx_r14.countQuestion, ")");
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_5_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_5_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_5_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r49.autoResizeEssayAnswer(question_r3.id || -1, 1); })("keyup", function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_5_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r52.autoResizeEssayAnswer(question_r3.id || -1, 1); })("change", function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_5_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r54.setAnswerType3(question_r3.id || -1, $event, 3, true, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 38)(7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_5_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r56.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " arrow_forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    const question_r3 = ctx_r58.$implicit;
    const last_r5 = ctx_r58.last;
    const index_r4 = ctx_r58.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](10, _c0, !ctx_r15.isMobile, ctx_r15.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r15.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r15.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-1-unit-" + question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r3.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", true)("question_id", question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](15, _c2, last_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("C\u00E2u ti\u1EBFp (", index_r4 + 1, "/", ctx_r15.countQuestion, ")");
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_1_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "isOneChoiceAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_3_Template, 12, 17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "isEssayAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_0_div_1_ng_container_1_div_3_div_5_Template, 12, 17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "isFillAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, question_r3.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 5, question_r3.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 7, question_r3.answerType));
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_li_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r66.alpha ? answer_r66.alpha : answer_r66.key, " ");
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_li_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r66.alpha ? answer_r66.alpha : answer_r66.key, " ");
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_li_5_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74); const answer_r66 = restoredCtx.$implicit; const k_r67 = restoredCtx.index; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4); const question_r3 = ctx_r73.$implicit; const index_r4 = ctx_r73.index; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r72.setAnswer(question_r3.id || -1, answer_r66, 2, false, k_r67, answer_r66.alpha, answer_r66.key, index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_li_5_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_li_5_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r66.checked == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r66.checked == true);
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " arrow_forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_p_2_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 23)(4, "ul", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_li_5_Template, 3, 2, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); const last_r5 = ctx_r76.last; const index_r4 = ctx_r76.index; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return last_r5 ? ctx_r75.openSubmitExam() : ctx_r75.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_mat_icon_9_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    const question_r3 = ctx_r78.$implicit;
    const last_r5 = ctx_r78.last;
    const index_r4 = ctx_r78.index;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r60.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r3.answerConfigParse);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", last_r5 ? "N\u1ED9p b\u00E0i" : "C\u00E2u ti\u1EBFp", "\u00A0(", index_r4 + 1, "/", ctx_r60.countQuestion, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !last_r5);
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "B\u00E0i l\u00E0m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_3_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_3_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r82); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r80.autoResizeEssayAnswer(question_r3.id || -1, 2); })("keyup", function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_3_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r82); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r83.autoResizeEssayAnswer(question_r3.id || -1, 2); })("change", function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_3_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r82); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r85.setAnswerType3(question_r3.id || -1, $event, 3, false, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 38)(7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_3_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r82); const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r87.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " arrow_forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    const question_r3 = ctx_r89.$implicit;
    const last_r5 = ctx_r89.last;
    const index_r4 = ctx_r89.index;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](10, _c0, !ctx_r61.isMobile, ctx_r61.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r61.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r61.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-0-unit-" + question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r3.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", false)("question_id", question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](15, _c2, last_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("C\u00E2u ti\u1EBFp (", index_r4 + 1, "/", ctx_r61.countQuestion, ")");
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_5_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_5_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_5_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r91.autoResizeEssayAnswer(question_r3.id || -1, 2); })("keyup", function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_5_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r94.autoResizeEssayAnswer(question_r3.id || -1, 2); })("change", function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_5_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r96.setAnswerType3(question_r3.id || -1, $event, 3, false, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 38)(7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_5_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93); const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r98.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " arrow_forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    const question_r3 = ctx_r100.$implicit;
    const last_r5 = ctx_r100.last;
    const index_r4 = ctx_r100.index;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](10, _c0, !ctx_r62.isMobile, ctx_r62.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r62.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r62.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-0-unit-" + question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r3.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", false)("question_id", question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](15, _c2, last_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("C\u00E2u ti\u1EBFp (", index_r4 + 1, "/", ctx_r62.countQuestion, ")");
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_1_Template, 10, 6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "isOneChoiceAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_3_Template, 12, 17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "isEssayAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_0_div_1_ng_container_1_div_4_div_5_Template, 12, 17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "isFillAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, question_r3.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 5, question_r3.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 7, question_r3.answerType));
} }
function TestQuestionComponent_div_0_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_container_1_div_2_Template, 12, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_0_div_1_ng_container_1_div_3_Template, 7, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TestQuestionComponent_div_0_div_1_ng_container_1_div_4_Template, 7, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_container_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r104); const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r102.prevQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "arrow_back_ios_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_container_1_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r104); const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r105.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "arrow_forward_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const index_r4 = ctx_r107.index;
    const question_r3 = ctx_r107.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "question_" + index_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", index_r4 > 0 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r3.isImage == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r3.isImage == 1 && !(question_r3.name == null ? null : question_r3.name.startsWith("[PDFv2]")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r3.isImage == 0 || (question_r3.name == null ? null : question_r3.name.startsWith("[PDFv2]")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", index_r4 == 0 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", index_r4 == ctx_r6.questionList.length - 1 ? true : false);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_2_div_1_azt_test_audio_ui_1_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "azt-test-audio-ui", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sendAudioEmitter", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_2_div_1_azt_test_audio_ui_1_Template_azt_test_audio_ui_sendAudioEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r118.sendAudioEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5).$implicit;
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("questionObj", question_r3)("isShowList", false)("totalLimit", (ctx_r116.exam_obj.limitAudio || -1) > 0 ? ctx_r116.exam_obj.limitAudio || -1 : 0);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_2_div_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "iframe", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, content_r115.url), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeResourceUrl"]);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_2_div_1_div_2_azt_loaded_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "azt-loaded-img", 57);
} if (rf & 2) {
    const content_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("imgSrc", content_r115.url);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_2_div_1_div_2_div_1_Template, 3, 3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_2_div_1_div_2_azt_loaded_img_2_Template, 1, 1, "azt-loaded-img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", content_r115.extension == "mp4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", content_r115.extension == "png" || content_r115.extension == "jpg");
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_2_div_1_azt_test_audio_ui_1_Template, 1, 3, "azt-test-audio-ui", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_2_div_1_div_2_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r115 = ctx.$implicit;
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "media_content_" + question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r3.attachmentsParse && question_r3.attachmentsParse.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", content_r115.url && content_r115.url != "");
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_2_div_1_Template, 3, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r3.questionContentParse);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_3_azt_test_audio_ui_4_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "azt-test-audio-ui", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sendAudioEmitter", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_3_azt_test_audio_ui_4_Template_azt_test_audio_ui_sendAudioEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6); return ctx_r130.sendAudioEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("questionObj", question_r3)("isShowList", false)("totalLimit", (ctx_r128.exam_obj.limitAudio || -1) > 0 ? ctx_r128.exam_obj.limitAudio || -1 : 0);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 65)(1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r133 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", config_r133.alpha ? config_r133.alpha : config_r133.key, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", config_r133.content, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_3_azt_test_audio_ui_4_Template, 1, 3, "azt-test-audio-ui", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_3_div_8_Template, 5, 2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("C\u00E2u\u00A0", (question_r3.index || 0) < 9 ? "0" + ((question_r3.index || 0) + 1) : (question_r3.index || 0) + 1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r3.attachmentsParse && question_r3.attachmentsParse.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", question_r3.questionContentParse[0].content, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r3.answerConfigParse);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "azt-loaded-img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("imgSrc", content_r136.groupUrl);
} }
const _c3 = function () { return []; };
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_ng_container_1_div_1_Template, 2, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const content_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).index;
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r137.checkHiddenGroup(content_r136.firstInGroupIndexesParse || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c3), index_r4));
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "iframe", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, content_r136.url), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeResourceUrl"]);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_div_3_ng_template_2_azt_loaded_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "azt-loaded-img", 57);
} if (rf & 2) {
    const content_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("imgSrc", content_r136.url);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_div_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_div_3_ng_template_2_azt_loaded_img_0_Template, 1, 1, "azt-loaded-img", 54);
} if (rf & 2) {
    const content_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", content_r136.extension == "png" || content_r136.extension == "jpg");
} }
const _c4 = function (a0) { return { "maxWidth.px": a0 }; };
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "azt-mark-chosen", 72)(3, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const content_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    const question_r3 = ctx_r151.$implicit;
    const index_r4 = ctx_r151.index;
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "v2_wrapper_question_", question_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c4, (content_r136.metaData == null ? null : content_r136.metaData.question == null ? null : content_r136.metaData.question.width) !== undefined ? (content_r136.metaData == null ? null : content_r136.metaData.question == null ? null : content_r136.metaData.question.width) + ctx_r146.extraSpace : 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("question", question_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "questionPlaceholder_", index_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", question_r3.mixDataImg, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_div_3_div_1_Template, 3, 3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_div_3_ng_template_2_Template, 1, 1, "ng-template", null, 70, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_div_3_ng_container_4_Template, 4, 7, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const content_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", content_r136.extension == "mp4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r3.name == null ? null : question_r3.name.startsWith("[PDFv2]"))("ngIfElse", _r144);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_ng_container_1_Template, 2, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "azt-test-audio-ui", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sendAudioEmitter", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_Template_azt_test_audio_ui_sendAudioEmitter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r156); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6); return ctx_r155.sendAudioEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_div_3_Template, 5, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r136 = ctx.$implicit;
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "media_content_" + question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", content_r136.groupUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("questionObj", question_r3)("isShowList", false)("totalLimit", (ctx_r135.exam_obj.limitAudio || -1) > 0 ? ctx_r135.exam_obj.limitAudio || -1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", content_r136.url && content_r136.url != "");
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_div_1_Template, 4, 6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r3.questionContentParse);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_div_2_li_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r168.content, " ");
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_div_2_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r168.content, " ");
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_div_2_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_div_2_li_2_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r176); const answer_r168 = restoredCtx.$implicit; const k_r169 = restoredCtx.index; const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); const question_r3 = ctx_r175.$implicit; const index_r4 = ctx_r175.index; const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r174.setAnswer(question_r3.id || -1, answer_r168, 2, true, k_r169, answer_r168.alpha, answer_r168.key, index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_div_2_li_2_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_div_2_li_2_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r168 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r168.checked == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r168.checked == true);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23)(1, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_div_2_li_2_Template, 3, 2, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r3.answerConfigParse);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " arrow_forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_p_1_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_div_2_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r180); const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); const last_r5 = ctx_r179.last; const index_r4 = ctx_r179.index; const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return last_r5 ? ctx_r178.openSubmitExam() : ctx_r178.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_mat_icon_6_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const eachConfig_r163 = ctx.$implicit;
    const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
    const last_r5 = ctx_r181.last;
    const index_r4 = ctx_r181.index;
    const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r162.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", eachConfig_r163.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", last_r5 ? "N\u1ED9p b\u00E0i" : "C\u00E2u ti\u1EBFp", "\u00A0(", index_r4 + 1, "/", ctx_r162.countQuestion, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !last_r5);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_div_1_Template, 7, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r3.answerConfigParseVer1);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "B\u00E0i l\u00E0m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_3_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_3_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r186); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r184.autoResizeEssayAnswer(question_r3.id || -1, 1); })("keyup", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_3_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r186); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r187.autoResizeEssayAnswer(question_r3.id || -1, 1); })("change", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_3_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r186); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r189.setAnswerType3(question_r3.id || -1, $event, 3, true, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 38)(7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_3_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r186); const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).index; const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r191.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " arrow_forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    const question_r3 = ctx_r193.$implicit;
    const last_r5 = ctx_r193.last;
    const index_r4 = ctx_r193.index;
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](10, _c0, !ctx_r160.isMobile, ctx_r160.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r160.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r160.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-1-unit-" + question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r3.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", true)("question_id", question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](15, _c2, last_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("C\u00E2u ti\u1EBFp (", index_r4 + 1, "/", ctx_r160.countQuestion, ")");
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_5_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_5_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_5_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r197); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r195.autoResizeEssayAnswer(question_r3.id || -1, 1); })("keyup", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_5_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r197); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r198.autoResizeEssayAnswer(question_r3.id || -1, 1); })("change", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_5_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r197); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r200.setAnswerType3(question_r3.id || -1, $event, 3, true, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 38)(7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_5_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r197); const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).index; const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r202.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " arrow_forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    const question_r3 = ctx_r204.$implicit;
    const last_r5 = ctx_r204.last;
    const index_r4 = ctx_r204.index;
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](10, _c0, !ctx_r161.isMobile, ctx_r161.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r161.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r161.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-1-unit-" + question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r3.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", true)("question_id", question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](15, _c2, last_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("C\u00E2u ti\u1EBFp (", index_r4 + 1, "/", ctx_r161.countQuestion, ")");
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_1_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "isOneChoiceAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_3_Template, 12, 17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "isEssayAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_div_5_Template, 12, 17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "isFillAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, question_r3.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 5, question_r3.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 7, question_r3.answerType));
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_li_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r212.alpha ? answer_r212.alpha : answer_r212.key, " ");
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_li_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r212.alpha ? answer_r212.alpha : answer_r212.key, " ");
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_li_5_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r220); const answer_r212 = restoredCtx.$implicit; const k_r213 = restoredCtx.index; const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); const question_r3 = ctx_r219.$implicit; const index_r4 = ctx_r219.index; const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r218.setAnswer(question_r3.id || -1, answer_r212, 2, false, k_r213, answer_r212.alpha, answer_r212.key, index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_li_5_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_li_5_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r212 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r212.checked == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r212.checked == true);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " arrow_forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_p_2_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 23)(4, "ul", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_li_5_Template, 3, 2, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r223); const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4); const last_r5 = ctx_r222.last; const index_r4 = ctx_r222.index; const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return last_r5 ? ctx_r221.openSubmitExam() : ctx_r221.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_mat_icon_9_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    const question_r3 = ctx_r224.$implicit;
    const last_r5 = ctx_r224.last;
    const index_r4 = ctx_r224.index;
    const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r206.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r3.answerConfigParse);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", last_r5 ? "N\u1ED9p b\u00E0i" : "C\u00E2u ti\u1EBFp", "\u00A0(", index_r4 + 1, "/", ctx_r206.countQuestion, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !last_r5);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "B\u00E0i l\u00E0m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_3_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_3_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r228); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r226.autoResizeEssayAnswer(question_r3.id || -1, 2); })("keyup", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_3_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r228); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r229.autoResizeEssayAnswer(question_r3.id || -1, 2); })("change", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_3_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r228); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r231.setAnswerType3(question_r3.id || -1, $event, 3, false, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 38)(7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_3_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r228); const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).index; const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r233.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " arrow_forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    const question_r3 = ctx_r235.$implicit;
    const last_r5 = ctx_r235.last;
    const index_r4 = ctx_r235.index;
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](10, _c0, !ctx_r207.isMobile, ctx_r207.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r207.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r207.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-0-unit-" + question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r3.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", false)("question_id", question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](15, _c2, last_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("C\u00E2u ti\u1EBFp (", index_r4 + 1, "/", ctx_r207.countQuestion, ")");
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_5_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_5_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_5_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r239); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r237.autoResizeEssayAnswer(question_r3.id || -1, 2); })("keyup", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_5_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r239); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r240.autoResizeEssayAnswer(question_r3.id || -1, 2); })("change", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_5_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r239); const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r242.setAnswerType3(question_r3.id || -1, $event, 3, false, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 38)(7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_5_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r239); const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).index; const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r244.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " arrow_forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    const question_r3 = ctx_r246.$implicit;
    const last_r5 = ctx_r246.last;
    const index_r4 = ctx_r246.index;
    const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](10, _c0, !ctx_r208.isMobile, ctx_r208.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r208.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r208.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-0-unit-" + question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r3.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", false)("question_id", question_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](15, _c2, last_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("C\u00E2u ti\u1EBFp (", index_r4 + 1, "/", ctx_r208.countQuestion, ")");
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_1_Template, 10, 6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "isOneChoiceAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_3_Template, 12, 17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "isEssayAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_div_5_Template, 12, 17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "isFillAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, question_r3.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 5, question_r3.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 7, question_r3.answerType));
} }
const _c5 = function (a0) { return { "pb-2": a0 }; };
function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 44)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_2_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_3_Template, 9, 4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_4_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_5_Template, 7, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_div_6_Template, 7, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r250); const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index; const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r248.prevQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "arrow_back_ios_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_0_div_1_ng_template_3_div_0_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r250); const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index; const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r251.nextQuestion(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "arrow_forward_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    const index_r4 = ctx_r253.index;
    const question_r3 = ctx_r253.$implicit;
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "question_" + index_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", index_r4 > 0 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c5, question_r3.attachmentsParse && question_r3.attachmentsParse.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r3.isImage == 1 && !(question_r3.name == null ? null : question_r3.name.startsWith("[PDFv2]")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r3.isImage == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r3.isImage == 1 && (question_r3.name == null ? null : question_r3.name.startsWith("[PDFv2]")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r3.isImage == 1 && !(question_r3.name == null ? null : question_r3.name.startsWith("[PDFv2]")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r3.isImage == 0 || (question_r3.name == null ? null : question_r3.name.startsWith("[PDFv2]")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", index_r4 == 0 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", index_r4 == ctx_r108.questionList.length - 1 ? true : false);
} }
function TestQuestionComponent_div_0_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TestQuestionComponent_div_0_div_1_ng_template_3_div_0_Template, 13, 12, "div", 43);
} if (rf & 2) {
    const question_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r3.questionContentParse != null && question_r3.questionContentParse.length > 0);
} }
function TestQuestionComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_ng_container_1_Template, 11, 7, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "isOfflineExam");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_0_div_1_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx_r2.exam_obj == null ? null : ctx_r2.exam_obj.orcLogId))("ngIfElse", _r7);
} }
function TestQuestionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_0_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.questionList);
} }
function TestQuestionComponent_div_1_azt_loaded_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "azt-loaded-img", 78);
} if (rf & 2) {
    const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("imgSrc", ctx_r255.exam_obj.examHeader);
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10)(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 12)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "A.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "B.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "C.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const index_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("C\u00E2u ", index_r259 + 1, ": C\u00E2u h\u1ECFi \u0111\u1EC1 thi Offline");
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_div_1_div_2_li_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r276.content, " ");
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_div_1_div_2_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r276.content, " ");
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_div_1_div_2_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_div_1_div_2_li_2_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r284); const answer_r276 = restoredCtx.$implicit; const k_r277 = restoredCtx.index; const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6); const question_r258 = ctx_r283.$implicit; const index_r259 = ctx_r283.index; const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r282.setAnswer(question_r258.id || -1, answer_r276, 2, true, k_r277, answer_r276.alpha, answer_r276.key, index_r259); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_div_1_div_2_li_2_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_div_1_div_2_li_2_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r276 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r276.checked == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r276.checked == true);
} }
const _c6 = function (a0) { return { "list-answer-mobile": a0 }; };
function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 81)(1, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_div_1_div_2_li_2_Template, 3, 2, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5).$implicit;
    const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c6, ctx_r274.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r258.answerConfigParse);
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_div_1_p_1_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_div_1_div_2_Template, 3, 4, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachConfig_r272 = ctx.$implicit;
    const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r271.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", eachConfig_r272.type == 1);
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_div_1_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r258.answerConfigParseVer1);
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "B\u00E0i l\u00E0m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r290 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_3_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_3_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r290); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r288.autoResizeEssayAnswer(question_r258.id || -1, 3); })("keyup", function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_3_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r290); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r291.autoResizeEssayAnswer(question_r258.id || -1, 3); })("change", function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_3_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r290); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r293.setAnswerType3(question_r258.id || -1, $event, 3, true, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c0, !ctx_r269.isMobile, ctx_r269.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c6, ctx_r269.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r269.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r269.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-1-all-" + question_r258.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r258.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", true)("question_id", question_r258.id);
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_5_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r299 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_5_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_5_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r299); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r297.autoResizeEssayAnswer(question_r258.id || -1, 3); })("keyup", function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_5_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r299); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r300.autoResizeEssayAnswer(question_r258.id || -1, 3); })("change", function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_5_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r299); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r302.setAnswerType3(question_r258.id || -1, $event, 3, true, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c0, !ctx_r270.isMobile, ctx_r270.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c6, ctx_r270.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r270.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r270.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-1-all-" + question_r258.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r258.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", true)("question_id", question_r258.id);
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_1_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "isOneChoiceAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_3_Template, 6, 15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "isEssayAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_1_div_4_ng_container_1_div_3_div_5_Template, 6, 15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "isFillAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, question_r258.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 5, question_r258.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 7, question_r258.answerType));
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_1_li_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r311.alpha ? answer_r311.alpha : answer_r311.key, " ");
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_1_li_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r311.alpha ? answer_r311.alpha : answer_r311.key, " ");
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r319 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_1_li_5_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r319); const answer_r311 = restoredCtx.$implicit; const k_r312 = restoredCtx.index; const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4); const question_r258 = ctx_r318.$implicit; const index_r259 = ctx_r318.index; const ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r317.setAnswer(question_r258.id || -1, answer_r311, 2, false, k_r312, answer_r311.alpha, answer_r311.key, index_r259); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_1_li_5_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_1_li_5_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r311 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r311.checked == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r311.checked == true);
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_1_p_2_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 81)(4, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_1_li_5_Template, 3, 2, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    const ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r306.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c6, ctx_r306.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r258.answerConfigParse);
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "B\u00E0i l\u00E0m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r324 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_3_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_3_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r324); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r322.autoResizeEssayAnswer(question_r258.id || -1, 4); })("keyup", function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_3_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r324); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r325.autoResizeEssayAnswer(question_r258.id || -1, 4); })("change", function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_3_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r324); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r327.setAnswerType3(question_r258.id || -1, $event, 3, false, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c0, !ctx_r307.isMobile, ctx_r307.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c6, ctx_r307.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r307.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r307.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-0-all-" + question_r258.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r258.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", false)("question_id", question_r258.id);
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_5_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r333 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_5_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_5_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r333); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r331.autoResizeEssayAnswer(question_r258.id || -1, 4); })("keyup", function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_5_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r333); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r334.autoResizeEssayAnswer(question_r258.id || -1, 4); })("change", function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_5_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r333); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; const ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r336.setAnswerType3(question_r258.id || -1, $event, 3, false, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    const ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c0, !ctx_r308.isMobile, ctx_r308.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c6, ctx_r308.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r308.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r308.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-0-all-" + question_r258.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r258.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", false)("question_id", question_r258.id);
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_1_Template, 6, 5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "isOneChoiceAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_3_Template, 6, 15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "isEssayAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_1_div_4_ng_container_1_div_4_div_5_Template, 6, 15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "isFillAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, question_r258.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 5, question_r258.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 7, question_r258.answerType));
} }
function TestQuestionComponent_div_1_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_container_1_div_2_Template, 12, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_1_div_4_ng_container_1_div_3_Template, 7, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TestQuestionComponent_div_1_div_4_ng_container_1_div_4_Template, 7, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const index_r259 = ctx_r340.index;
    const question_r258 = ctx_r340.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "question_all_" + index_r259);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r258.isImage == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r258.isImage == 1 && !(question_r258.name == null ? null : question_r258.name.startsWith("[PDFv2]")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r258.isImage == 0 || (question_r258.name == null ? null : question_r258.name.startsWith("[PDFv2]")));
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "azt-loaded-img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("imgSrc", content_r347.groupUrl);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_ng_container_1_div_1_Template, 2, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const content_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const index_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).index;
    const ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r348.checkHiddenGroup(content_r347.firstInGroupIndexesParse || null, index_r259));
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_azt_test_audio_ui_2_Template(rf, ctx) { if (rf & 1) {
    const _r356 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "azt-test-audio-ui", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sendAudioEmitter", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_azt_test_audio_ui_2_Template_azt_test_audio_ui_sendAudioEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r356); const ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r355.sendAudioEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5).$implicit;
    const ctx_r349 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("questionObj", question_r258)("isShowList", true)("totalLimit", (ctx_r349.exam_obj.limitAudio || -1) > 0 ? ctx_r349.exam_obj.limitAudio || -1 : 0);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "iframe", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, content_r347.url), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeResourceUrl"]);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_div_3_ng_template_2_azt_loaded_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "azt-loaded-img", 57);
} if (rf & 2) {
    const content_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("imgSrc", content_r347.url);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_div_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_div_3_ng_template_2_azt_loaded_img_0_Template, 1, 1, "azt-loaded-img", 54);
} if (rf & 2) {
    const content_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", content_r347.extension == "png" || content_r347.extension == "jpg");
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "azt-mark-chosen", 72)(3, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const content_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    const question_r258 = ctx_r366.$implicit;
    const index_r259 = ctx_r366.index;
    const ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "v2_wrapper_question_", question_r258.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c4, (content_r347.metaData == null ? null : content_r347.metaData.question == null ? null : content_r347.metaData.question.width) !== undefined ? (content_r347.metaData == null ? null : content_r347.metaData.question == null ? null : content_r347.metaData.question.width) + ctx_r361.extraSpace : 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("question", question_r258);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "questionPlaceholder_", index_r259, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", question_r258.mixDataImg, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_div_3_div_1_Template, 3, 3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_div_3_ng_template_2_Template, 1, 1, "ng-template", null, 70, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_div_3_ng_container_4_Template, 4, 7, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r359 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const content_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", content_r347.extension == "mp4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r258.name == null ? null : question_r258.name.startsWith("[PDFv2]"))("ngIfElse", _r359);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_azt_test_audio_ui_2_Template, 1, 3, "azt-test-audio-ui", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_div_3_Template, 5, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r347 = ctx.$implicit;
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "media_content_all_" + question_r258.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", content_r347.groupUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r258.attachmentsParse && question_r258.attachmentsParse.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", content_r347.url && content_r347.url != "");
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_div_1_Template, 4, 4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r258.questionContentParse);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_3_azt_test_audio_ui_4_Template(rf, ctx) { if (rf & 1) {
    const _r375 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "azt-test-audio-ui", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sendAudioEmitter", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_3_azt_test_audio_ui_4_Template_azt_test_audio_ui_sendAudioEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r375); const ctx_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6); return ctx_r374.sendAudioEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    const ctx_r372 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("questionObj", question_r258)("isShowList", true)("totalLimit", (ctx_r372.exam_obj.limitAudio || -1) > 0 ? ctx_r372.exam_obj.limitAudio || -1 : 0);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 86)(1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r377 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", config_r377.alpha ? config_r377.alpha : config_r377.key, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", config_r377.content, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_3_azt_test_audio_ui_4_Template, 1, 3, "azt-test-audio-ui", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_3_div_8_Template, 5, 2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("C\u00E2u\u00A0", (question_r258.index || 0) < 9 ? "0" + ((question_r258.index || 0) + 1) : (question_r258.index || 0) + 1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r258.attachmentsParse && question_r258.attachmentsParse.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", question_r258.questionContentParse[0].content, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r258.answerConfigParse);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_div_1_div_2_li_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r387.content, " ");
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_div_1_div_2_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r387.content, " ");
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_div_1_div_2_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r395 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_div_1_div_2_li_2_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r395); const answer_r387 = restoredCtx.$implicit; const k_r388 = restoredCtx.index; const ctx_r394 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); const question_r258 = ctx_r394.$implicit; const index_r259 = ctx_r394.index; const ctx_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r393.setAnswer(question_r258.id || -1, answer_r387, 2, true, k_r388, answer_r387.alpha, answer_r387.key, index_r259); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_div_1_div_2_li_2_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_div_1_div_2_li_2_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r387 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r387.checked == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r387.checked == true);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 81)(1, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_div_1_div_2_li_2_Template, 3, 2, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6).$implicit;
    const ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c6, ctx_r385.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r258.answerConfigParse);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_div_1_p_1_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_div_1_div_2_Template, 3, 4, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachConfig_r383 = ctx.$implicit;
    const ctx_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r382.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", eachConfig_r383.type == 1);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_div_1_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r258.answerConfigParseVer1);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "B\u00E0i l\u00E0m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r401 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_3_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_3_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r401); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r399.autoResizeEssayAnswer(question_r258.id || -1, 3); })("keyup", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_3_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r401); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r402.autoResizeEssayAnswer(question_r258.id || -1, 3); })("change", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_3_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r401); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r404.setAnswerType3(question_r258.id || -1, $event, 3, true, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    const ctx_r380 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c0, !ctx_r380.isMobile, ctx_r380.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c6, ctx_r380.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r380.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r380.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-1-all-" + question_r258.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r258.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", true)("question_id", question_r258.id);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_5_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r410 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_5_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_5_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r410); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r408.autoResizeEssayAnswer(question_r258.id || -1, 3); })("keyup", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_5_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r410); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r411.autoResizeEssayAnswer(question_r258.id || -1, 3); })("change", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_5_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r410); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r413.setAnswerType3(question_r258.id || -1, $event, 3, true, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    const ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c0, !ctx_r381.isMobile, ctx_r381.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c6, ctx_r381.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r381.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r381.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-1-all-" + question_r258.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r258.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", true)("question_id", question_r258.id);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_1_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "isOneChoiceAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_3_Template, 6, 15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "isEssayAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_div_5_Template, 6, 15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "isFillAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, question_r258.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 5, question_r258.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 7, question_r258.answerType));
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_1_li_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r422.alpha ? answer_r422.alpha : answer_r422.key, " ");
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_1_li_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", answer_r422.alpha ? answer_r422.alpha : answer_r422.key, " ");
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r430 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_1_li_5_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r430); const answer_r422 = restoredCtx.$implicit; const k_r423 = restoredCtx.index; const ctx_r429 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); const question_r258 = ctx_r429.$implicit; const index_r259 = ctx_r429.index; const ctx_r428 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r428.setAnswer(question_r258.id || -1, answer_r422, 2, false, k_r423, answer_r422.alpha, answer_r422.key, index_r259); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_1_li_5_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_1_li_5_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r422 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r422.checked == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", answer_r422.checked == true);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_1_p_2_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 81)(4, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_1_li_5_Template, 3, 2, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    const ctx_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r417.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c6, ctx_r417.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", question_r258.answerConfigParse);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "B\u00E0i l\u00E0m c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r435 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_3_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_3_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r435); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r433.autoResizeEssayAnswer(question_r258.id || -1, 4); })("keyup", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_3_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r435); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r436.autoResizeEssayAnswer(question_r258.id || -1, 4); })("change", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_3_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r435); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r438 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r438.setAnswerType3(question_r258.id || -1, $event, 3, false, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    const ctx_r418 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c0, !ctx_r418.isMobile, ctx_r418.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c6, ctx_r418.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r418.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r418.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-0-all-" + question_r258.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r258.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", false)("question_id", question_r258.id);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_5_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0110\u00E1p \u00E1n c\u1EE7a b\u1EA1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r444 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_5_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35)(4, "div", 36)(5, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_5_Template_textarea_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r444); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r442 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r442.autoResizeEssayAnswer(question_r258.id || -1, 4); })("keyup", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_5_Template_textarea_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r444); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r445 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r445.autoResizeEssayAnswer(question_r258.id || -1, 4); })("change", function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_5_Template_textarea_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r444); const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; const ctx_r447 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r447.setAnswerType3(question_r258.id || -1, $event, 3, false, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    const ctx_r419 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c0, !ctx_r419.isMobile, ctx_r419.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c6, ctx_r419.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r419.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx_r419.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "answer-0-all-" + question_r258.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r258.essayText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("isImage", false)("question_id", question_r258.id);
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_1_Template, 6, 5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "isOneChoiceAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_3_Template, 6, 15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "isEssayAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_div_5_Template, 6, 15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "isFillAnswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, question_r258.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 5, question_r258.answerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 7, question_r258.answerType));
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 84)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_2_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_3_Template, 9, 4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_4_Template, 7, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_div_5_Template, 7, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r451 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    const index_r259 = ctx_r451.index;
    const question_r258 = ctx_r451.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", "question_all_" + index_r259);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c5, question_r258.attachmentsParse && question_r258.attachmentsParse.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r258.isImage == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r258.isImage == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r258.isImage == 1 && !(question_r258.name == null ? null : question_r258.name.startsWith("[PDFv2]")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r258.isImage == 0 || (question_r258.name == null ? null : question_r258.name.startsWith("[PDFv2]")));
} }
function TestQuestionComponent_div_1_div_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TestQuestionComponent_div_1_div_4_ng_template_3_div_0_Template, 6, 8, "div", 83);
} if (rf & 2) {
    const question_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", question_r258.questionContentParse != null && question_r258.questionContentParse.length > 0);
} }
function TestQuestionComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_4_ng_container_1_Template, 5, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "isOfflineExam");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_1_div_4_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
    const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx_r256.exam_obj == null ? null : ctx_r256.exam_obj.orcLogId))("ngIfElse", _r262);
} }
function TestQuestionComponent_div_1_div_5_li_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", 9 > k_r455 ? "0" : "", "", k_r455 + 1, " ");
} }
function TestQuestionComponent_div_1_div_5_li_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", 9 > k_r455 ? "0" : "", "", k_r455 + 1, " ");
} }
function TestQuestionComponent_div_1_div_5_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r461 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestQuestionComponent_div_1_div_5_li_7_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r461); const k_r455 = restoredCtx.index; const ctx_r460 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r460.goToQuestionAll(k_r455); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_div_5_li_7_span_1_Template, 2, 2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestQuestionComponent_div_1_div_5_li_7_span_2_Template, 2, 2, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r454 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r454.status == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r454.status == true);
} }
const _c7 = function () { return { "right.px": 20 }; };
function TestQuestionComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 87)(1, "div", 88)(2, "div", 89)(3, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Danh s\u00E1ch c\u00E2u h\u1ECFi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 91)(6, "ul", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, TestQuestionComponent_div_1_div_5_li_7_Template, 3, 2, "li", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r257.questionList);
} }
function TestQuestionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 74)(2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TestQuestionComponent_div_1_azt_loaded_img_3_Template, 1, 1, "azt-loaded-img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TestQuestionComponent_div_1_div_4_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TestQuestionComponent_div_1_div_5_Template, 8, 3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.exam_obj.examHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.questionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isMobile);
} }
const _c8 = ["*"];
class TestQuestionComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(commonService) {
        super(commonService);
        this.commonService = commonService;
        //region Angular func & constructor
        this.hasErrorMessage = '';
        this.hasEssayQuestion = false;
        this.exam_obj = {};
        this.firstInGroupIndexes = [];
        this.timeCount = {};
        this.questionList = [];
        this.homeLink = '';
        this.files = [];
        this.showUnit = false;
        this.isMobile = false;
        this.showList = false;
        this.unLimitTime = false;
        this.isShowSheet = false;
        this.countQuestion = 0;
        this.setAnswerEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.setAnswerEssayEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.setResultTracking = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.removeImgEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.openSubmitExamEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.nextQuestionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.prevQuestionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.autoResizeEssayAnswerEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.goToQuestionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.goToQuestionAllEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.sendAudioEmitToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({}); // Form group
    }
    sendAudioEvent(questionIdEmit) {
        if (questionIdEmit) {
            this.sendAudioEmitToParent.emit(questionIdEmit);
        }
    }
    goToQuestion(index) {
        this.goToQuestionEmitter.emit(index);
    }
    goToQuestionAll(index) {
        this.goToQuestionAllEmitter.emit(index);
    }
    autoResizeEssayAnswer(id, type) {
        var data = { id, type };
        this.autoResizeEssayAnswerEmitter.emit(data);
    }
    removeImg(url) {
        this.removeImgEmitter.emit(url);
    }
    checkHiddenGroup(jsonInQuestion, index) {
        return jsonInQuestion ? !jsonInQuestion.includes(index) : !this.firstInGroupIndexes.includes(index);
    }
    calcRight() {
        var _a;
        var right = 0;
        var windowWidth = window.outerWidth;
        var containerContent = (_a = document.getElementById('container-content')) === null || _a === void 0 ? void 0 : _a.offsetWidth;
        if (containerContent) {
            right = (windowWidth - containerContent) / 2;
        }
        return right;
    }
    resizeImg(content_id, width, height) {
        var _a;
        var mediaContent = document.getElementById('media_content_' + content_id);
        var contentWidth = (_a = mediaContent === null || mediaContent === void 0 ? void 0 : mediaContent.offsetWidth) !== null && _a !== void 0 ? _a : 0;
        var calc_height = 0;
        if (mediaContent) {
            if (contentWidth / width <= 1) {
                calc_height = height * (contentWidth / width);
                return Math.round(calc_height);
            }
            else {
                return Math.round(height);
            }
        }
        else {
            return 0;
        }
    }
    nextQuestion(index) {
        this.nextQuestionEmitter.emit(index);
    }
    prevQuestion(index) {
        this.prevQuestionEmitter.emit(index);
    }
    openSubmitExam() {
        this.openSubmitExamEmitter.emit(true);
    }
    setAnswer(id, answerConfigParam, type, isImage, index, alpha, key, questionIndex) {
        var _a;
        var data = { id, answerConfig: answerConfigParam, event: null, type, isImage, index };
        var answerContent = (_a = answerConfigParam.content) !== null && _a !== void 0 ? _a : '';
        var dataTracking;
        if ((alpha || key) && questionIndex !== undefined) {
            dataTracking = [
                questionIndex.toString(),
                alpha !== null && alpha !== void 0 ? alpha : '',
                key !== null && key !== void 0 ? key : '',
                id.toString()
            ]; // lưu ý đúng thứ tự thông tin
            this.setResultTracking.emit(dataTracking);
        }
        else if (!alpha && !key && answerContent && questionIndex !== undefined) {
            alpha = answerContent;
            key = answerContent;
            dataTracking = [
                questionIndex.toString(),
                alpha !== null && alpha !== void 0 ? alpha : '',
                key !== null && key !== void 0 ? key : '',
                id.toString()
            ]; // lưu ý đúng thứ tự thông tin
            this.setResultTracking.emit(dataTracking);
        }
        this.setAnswerEmitter.emit(data);
    }
    setAnswerType3(id, event, type, isImage, index) {
        var data = { id, answerConfig: null, event, type, isImage, index };
        if (this.showList) {
            if (type == 3) {
                if (isImage) {
                    var findText = document.getElementById('answer-1-unit-' + id);
                    if (findText) {
                        findText.value = event.target.value.trim();
                    }
                }
                else {
                    var findText = document.getElementById('answer-0-unit-' + id);
                    if (findText) {
                        findText.value = event.target.value.trim();
                    }
                }
            }
        }
        else {
            if (type == 3) {
                if (isImage) {
                    var findText = document.getElementById('answer-1-all-' + id);
                    if (findText) {
                        findText.value = event.target.value.trim();
                    }
                }
                else {
                    var findText = document.getElementById('answer-0-all-' + id);
                    if (findText) {
                        findText.value = event.target.value.trim();
                    }
                }
            }
        }
        this.setAnswerEssayEmitter.emit(data);
    }
    get extraSpace() {
        return src_app_core_interfaces_common_mixdata__WEBPACK_IMPORTED_MODULE_0__.EXTRA_SPACE;
    }
    ngOnInit() {
        // set function oninput
        window.setInputValueTextarea = (e) => {
            var question_id = Number(e.target.getAttribute('question_id'));
            var isImage = Boolean(e.target.getAttribute('isImage'));
            this.setAnswerType3(question_id, e, 3, isImage, 0);
        };
        super.ngOnInit();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        window.setInputValueTextarea = null;
        super.ngDestroy();
    }
}
TestQuestionComponent.ɵfac = function TestQuestionComponent_Factory(t) { return new (t || TestQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService)); };
TestQuestionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TestQuestionComponent, selectors: [["azt-test-question-ui"]], inputs: { hasErrorMessage: "hasErrorMessage", hasEssayQuestion: "hasEssayQuestion", exam_obj: "exam_obj", firstInGroupIndexes: "firstInGroupIndexes", timeCount: "timeCount", questionList: "questionList", homeLink: "homeLink", files: "files", showUnit: "showUnit", isMobile: "isMobile", showList: "showList", unLimitTime: "unLimitTime", isShowSheet: "isShowSheet", countQuestion: "countQuestion" }, outputs: { setAnswerEmitter: "setAnswerEmitter", setAnswerEssayEmitter: "setAnswerEssayEmitter", setResultTracking: "setResultTracking", removeImgEmitter: "removeImgEmitter", openSubmitExamEmitter: "openSubmitExamEmitter", nextQuestionEmitter: "nextQuestionEmitter", prevQuestionEmitter: "prevQuestionEmitter", autoResizeEssayAnswerEmitter: "autoResizeEssayAnswerEmitter", goToQuestionEmitter: "goToQuestionEmitter", goToQuestionAllEmitter: "goToQuestionAllEmitter", sendAudioEmitToParent: "sendAudioEmitToParent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c8, decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "question-unit-id", 3, "id", "hidden"], ["class", "bg-question", 4, "ngIf"], ["class", "answer-box ml-auto mr-auto", 4, "ngIf"], [1, "prev_question_btn", "clickable", 3, "hidden", "click"], [1, "arrow_btn"], [1, "next_question_btn", "clickable", 3, "hidden", "click"], [1, "bg-question"], [1, "question-offline-title"], [1, "question-offline-answer"], [1, "answer-box", "ml-auto", "mr-auto"], ["class", "answer-content", 3, "ngClass", 4, "ngIf"], ["class", "answer-content", 4, "ngFor", "ngForOf"], [1, "answer-content"], ["class", "h5 mb-0 mr-2 text-white", "style", "align-self: center;", 4, "ngIf"], ["class", "list-answer mt-auto mb-auto", 4, "ngIf"], [1, "btn", "btn-ans-result", "ml-auto", 3, "click"], [2, "vertical-align", "middle", "color", "#fff"], ["style", "vertical-align: middle; color: #fff; font-weight: bold;", 4, "ngIf"], [1, "h5", "mb-0", "mr-2", "text-white", 2, "align-self", "center"], [1, "list-answer", "mt-auto", "mb-auto"], [1, "listda", "mt-0", "mb-0", "pl-0"], ["class", "listli", 3, "click", 4, "ngFor", "ngForOf"], [1, "listli", 3, "click"], ["class", "no-answered", "style", "background: #fff; color: #111;", 4, "ngIf"], ["class", "no-answered", "style", "background-color: rgba(243, 156, 18, 1);color: rgb(255, 255, 255);", 4, "ngIf"], [1, "no-answered", 2, "background", "#fff", "color", "#111"], [1, "no-answered", 2, "background-color", "rgba(243, 156, 18, 1)", "color", "rgb(255, 255, 255)"], [2, "vertical-align", "middle", "color", "#fff", "font-weight", "bold"], [1, "answer-content", 3, "ngClass"], [1, "list-answer", "d-flex", 2, "width", "100%"], ["class", "h5 mb-1 mr-2 text-white", "style", "align-self: center;", 4, "ngIf"], [1, "row", 2, "width", "75%", 3, "ngClass"], [1, "col-sm-12", "mb-1"], ["oninput", "setInputValueTextarea($event)", 1, "form-control", "ml-2", "mt-1", "mr-2", 3, "id", "value", "focus", "keyup", "change"], [1, "text-right"], [1, "btn", "btn-ans-result", "ml-auto", 3, "ngClass", "click"], [1, "h5", "mb-1", "mr-2", "text-white", 2, "align-self", "center"], [1, "listda", "mt-0", "pl-0", "mb-0"], ["class", "listli ", 3, "click", 4, "ngFor", "ngForOf"], ["class", "question-content mt-1 pl-0 pr-0", 3, "id", "hidden", 4, "ngIf"], [1, "question-content", "mt-1", "pl-0", "pr-0", 3, "id", "hidden"], [1, "box-slide-show", 3, "ngClass"], ["class", "game-bar text-center pt-2", 4, "ngIf"], ["class", "game-bar pt-2", 4, "ngIf"], [1, "game-bar", "text-center", "pt-2"], ["class", "question-media", 3, "id", 4, "ngFor", "ngForOf"], [1, "question-media", 3, "id"], [3, "questionObj", "isShowList", "totalLimit", "sendAudioEmitter", 4, "ngIf"], [3, "questionObj", "isShowList", "totalLimit", "sendAudioEmitter"], ["class", "embed-responsive embed-responsive-21by9", 4, "ngIf"], [3, "imgSrc", 4, "ngIf"], [1, "embed-responsive", "embed-responsive-21by9"], [1, "embed-responsive-item", 3, "src"], [3, "imgSrc"], [1, "game-bar", "pt-2"], [2, "padding", "5px 15px"], [2, "font-weight", "450", "font-size", "24px"], [1, "contentDocx"], [1, "content-img", 2, "font-size", "21px", "align-self", "center", "vertical-align", "middle", "line-height", "2.2", 3, "innerHtml"], [1, "row", "mt-1", "justify-content-around"], ["class", "col-sm-6 col-md-6 d-flex", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-6", "d-flex"], [2, "vertical-align", "middle", "font-size", "22px", "font-weight", "500", "align-self", "center"], [2, "font-size", "21px", "align-self", "center", "vertical-align", "middle", "line-height", "1.4", 3, "innerHtml"], ["class", "image_group mb-3", 4, "ngIf"], [1, "image_group", "mb-3"], ["originalRender", ""], [2, "position", "relative", "margin", "0 auto", 3, "ngStyle", "id"], [3, "question"], ["alt", "question media", 1, "img-fluid", "img_respon", 3, "id", "src"], ["id", "question_ui", 1, "row", "justify-content-between", "ml-0", "mr-0", "pl-0", "pr-0", "pb-3"], [1, "col-xl-10", "pl-0", "pr-0"], ["id", "examHeader", "class", "mb-1", 3, "imgSrc", 4, "ngIf"], ["class", "col-xl-2 col-game-bar show-list", 3, "ngStyle", 4, "ngIf"], ["id", "examHeader", 1, "mb-1", 3, "imgSrc"], [3, "id"], ["class", "list-answer mt-auto mb-auto", 3, "ngClass", 4, "ngIf"], [1, "list-answer", "mt-auto", "mb-auto", 3, "ngClass"], [1, "list-answer", "d-flex", 2, "width", "100%", 3, "ngClass"], ["class", "question-content mt-1 pl-0 pr-0", 3, "id", 4, "ngIf"], [1, "question-content", "mt-1", "pl-0", "pr-0", 3, "id"], ["class", "col-sm-12 col-md-6 d-flex", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-6", "d-flex"], [1, "col-xl-2", "col-game-bar", "show-list", 3, "ngStyle"], [1, "box-show-sheet", "w-auto", "mt-0"], [1, "show-sheet", "text-center"], [1, "h5", "mb-0", "mt-3", "disable-select"], [1, "sheet_content", "sheet-Screen", "mt-1"], [1, "listda", 2, "padding-left", "5px", "margin-top", "15px"], ["class", "listli", "style", "margin-bottom: 5px;", 3, "click", 4, "ngFor", "ngForOf"], [1, "listli", 2, "margin-bottom", "5px", 3, "click"], ["class", "no-answered", "style", "\n\t\t\t\t\t\t\t\t\t\tbackground-color: rgba(60, 141, 188, 1);\n\t\t\t\t\t\t\t\t\t\tcolor: rgb(255, 255, 255);\n\t\t\t\t\t\t\t\t\t", 4, "ngIf"], [1, "no-answered", 2, "background-color", "rgba(60, 141, 188, 1)", "color", "rgb(255, 255, 255)"]], template: function TestQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TestQuestionComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestQuestionComponent_div_1_Template, 6, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _test_audio_ui_controller_component__WEBPACK_IMPORTED_MODULE_3__.TestAudioComponent, _azota_ui_azt_loaded_img_azt_loaded_img_component__WEBPACK_IMPORTED_MODULE_4__.AztLoadedImgComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _mark_chosen_controller_component__WEBPACK_IMPORTED_MODULE_5__.MarkChosenComponent], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.IsOfflineExam, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.IsOneChoiceAnswer, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.IsEssayAnswer, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.IsFillAnswer, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.SafePipe], styles: [".box-slide-show[_ngcontent-%COMP%] {\n  background: inherit;\n  background-color: white;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e7e7e7;\n  border-radius: 3px 3px 0 0;\n  padding-bottom: 20px;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-bottom: none;\n}\n\n.margin_question_bar[_ngcontent-%COMP%] {\n  margin-top: calc(2rem + 40px) !important;\n}\n\n.col-game-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: calc(2rem + 30px);\n  right: 10vw;\n  max-width: 180px;\n}\n\n.sheet-Screen[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 140px);\n  overflow-y: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.sheet-Screen[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.box-show-sheet[_ngcontent-%COMP%] {\n  margin-top: 14px !important;\n  width: 75%;\n  margin: auto;\n  background: inherit;\n  background-color: white;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e7e7e7;\n  border-radius: 5px;\n}\n\n.disable-select[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  \n  \n  user-select: none;\n  \n}\n\n.question-content[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.next_question_btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 35%;\n  padding: 0.35rem 0.45rem;\n  background-color: #a3a5a670;\n  border-radius: 50%;\n}\n\n.prev_question_btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 35%;\n  padding: 0.35rem 0.45rem;\n  background-color: #a3a5a670;\n  border-radius: 50%;\n}\n\n.arrow_btn[_ngcontent-%COMP%] {\n  font-size: 20px;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  color: #fff;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  -webkit-user-select: none;\n  \n  \n  user-select: none;\n  \n}\n\n.button-note[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  -webkit-user-select: none;\n  \n  \n  user-select: none;\n  \n}\n\n.show-sheet[_ngcontent-%COMP%]   .sheet_content[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .sheet_content[_ngcontent-%COMP%] {\n  animation: revealFromLeft 0.5s 0s ease both 1;\n}\n\n.show-sheet[_ngcontent-%COMP%]   .sheet_content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .sheet_content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.show-sheet[_ngcontent-%COMP%]   .listda[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .listda[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding-left: 20px;\n}\n\n.show-sheet[_ngcontent-%COMP%]   .ng-binding[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .ng-binding[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 400;\n}\n\n.show-sheet[_ngcontent-%COMP%]   .listli[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .listli[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-right: 5px;\n  display: inline-block;\n}\n\n.show-sheet[_ngcontent-%COMP%]   .listli[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .listli[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 1px solid #347da5;\n  display: flex;\n  align-items: center;\n  color: #fff;\n  justify-content: center;\n  font-size: 15px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  \n  \n  user-select: none;\n}\n\n.show-sheet[_ngcontent-%COMP%]   .no-answered[_ngcontent-%COMP%], .list-answer[_ngcontent-%COMP%]   .no-answered[_ngcontent-%COMP%] {\n  background: #273044;\n}\n\n.note-box[_ngcontent-%COMP%] {\n  display: none;\n  background-color: #f7f3cf;\n  margin-bottom: 5px;\n  min-height: 30px;\n}\n\n.answer-content[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-wrap: wrap;\n}\n\n.answer-box[_ngcontent-%COMP%] {\n  background: #00a7d0;\n  border-radius: 0 0 3px 3px;\n  color: #fff;\n  padding: 8px 20px;\n}\n\n.btn-ans-result[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #f39c12;\n}\n\n.bottom_action[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 15px;\n  bottom: 0;\n  left: 0;\n  background: #312e2e;\n  color: #fff;\n  width: 100%;\n}\n\n.bottom_action[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.show-list[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\n.show-list[_ngcontent-%COMP%]   .show-sheet[_ngcontent-%COMP%]   .listli[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  border: 1px solid #347da5;\n  display: flex;\n  align-items: center;\n  color: #fff;\n  justify-content: center;\n  font-size: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.top_action[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 10px;\n  top: 0;\n  left: 0;\n  background: #312e2e;\n  color: #fff;\n  width: 100%;\n}\n\n.scrollSheetMobile[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.scrollSheetMobile[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.notify-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3px;\n  top: 3px;\n  text-align: center;\n  color: #afafaf;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.attach-container[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 10px 0 0 0;\n  border-radius: 5px;\n  width: 83.33%;\n  border: 1px solid #e8e8e8;\n}\n\n#examHeader[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid #e7e7e7;\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n@media (max-width: 768px) {\n  .answer-content[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .btn-ans-result[_ngcontent-%COMP%] {\n    margin-right: auto !important;\n  }\n\n  .list-answer[_ngcontent-%COMP%] {\n    margin-bottom: 14px !important;\n  }\n\n  .list-answer-mobile[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n  }\n}\n\n.bg-question[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding: 15px 10px;\n  background: #fff;\n}\n\n.question-offline-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 15px;\n}\n\n.question-offline-answer[_ngcontent-%COMP%] {\n  max-width: 300px;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: 500;\n}\n\n.question-offline-answer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNJLHdDQUFBO0FBRUo7O0FBQUU7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFERTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FBSUo7O0FBSEk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtBQUtSOztBQUZFO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhFO0VBQ0UseUJBQUE7RUFBMkIsV0FBQTtFQUNKLG9CQUFBO0VBQ3ZCLGlCQUFBO0VBQW1CLG9CQUFBO0FBU3ZCOztBQVBFO0VBQ0Usa0JBQUE7QUFVSjs7QUFSRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFXSjs7QUFURTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFZSjs7QUFWRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUEyQixXQUFBO0VBQ0osb0JBQUE7RUFDdkIsaUJBQUE7RUFBbUIsb0JBQUE7QUFnQnZCOztBQWRFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFBMkIsV0FBQTtFQUNKLG9CQUFBO0VBQ3ZCLGlCQUFBO0VBQW1CLG9CQUFBO0FBb0J2Qjs7QUFoQkk7O0VBQ0UsNkNBQUE7QUFvQk47O0FBbEJJOztFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFxQk47O0FBbEJJOztFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFxQk47O0FBbkJJOztFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXNCTjs7QUFwQkk7O0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUF1Qk47O0FBckJJOztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFBMkIsV0FBQTtFQUNKLG9CQUFBO0VBQ3ZCLGlCQUFBO0FBMEJOOztBQXhCSTs7RUFDRSxtQkFBQTtBQTJCTjs7QUF4QkU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBMkJKOztBQXpCRTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQTRCSjs7QUExQkU7RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBNkJKOztBQTNCRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQThCSjs7QUF2QkU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtBQXlCSjs7QUF4Qkk7RUFDSSxjQUFBO0FBMEJSOztBQXZCRTtFQUNJLGdCQUFBO0FBMEJOOztBQXpCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQTJCUjs7QUF4QkU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQTJCSjs7QUF6QkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtBQTRCTjs7QUEzQk07RUFDSSxRQUFBO0VBQ0EsU0FBQTtBQTZCVjs7QUExQkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBNkJKOztBQTNCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQThCSjs7QUE1QkU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBK0JKOztBQTdCRTtFQUNFO0lBQ0UsdUJBQUE7RUFnQ0o7O0VBOUJFO0lBQ0UsNkJBQUE7RUFpQ0o7O0VBL0JFO0lBQWEsOEJBQUE7RUFtQ2Y7O0VBbENFO0lBQ0UsMkJBQUE7RUFxQ0o7QUFDRjs7QUFuQ0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFxQ0o7O0FBbkNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQXNDSjs7QUFwQ0U7RUFDRSxnQkFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQXVDTjs7QUF0Q0k7RUFDRSxnQkFBQTtBQXdDTiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtc2xpZGUtc2hvdyB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjZTdlN2U3O1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5tYXJnaW5fcXVlc3Rpb25fYmFyIHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDJyZW0gKyA0MHB4KSFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbC1nYW1lLWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogY2FsYygycmVtICsgMzBweCk7XG4gICAgcmlnaHQ6IGNhbGMoMTAwdncgLSA5MHZ3KTtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICB9XG4gIC5zaGVldC1TY3JlZW57XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE0MHB4KTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICB9XG4gIC5ib3gtc2hvdy1zaGVldCB7XG4gICAgbWFyZ2luLXRvcDogMTRweCFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5kaXNhYmxlLXNlbGVjdCB7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgc3ludGF4ICovXG4gIH1cbiAgLnF1ZXN0aW9uLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubmV4dF9xdWVzdGlvbl9idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDM1JTtcbiAgICBwYWRkaW5nOiAwLjM1cmVtIDAuNDVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzYTVhNjcwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAucHJldl9xdWVzdGlvbl9idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRvcDogMzUlO1xuICAgIHBhZGRpbmc6IDAuMzVyZW0gMC40NXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNhNWE2NzA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIC5hcnJvd19idG4ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgYW5kIElFIDExICovXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xuICB9XG4gIC5idXR0b24tbm90ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgc3ludGF4ICovXG4gIH1cbiAgLnNob3ctc2hlZXQsXG4gIC5saXN0LWFuc3dlciB7XG4gICAgLnNoZWV0X2NvbnRlbnQge1xuICAgICAgYW5pbWF0aW9uOiByZXZlYWxGcm9tTGVmdCAwLjVzIDBzIGVhc2UgYm90aCAxO1xuICAgIH1cbiAgICAuc2hlZXRfY29udGVudCBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAubGlzdGRhIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxuICAgIC5uZy1iaW5kaW5nIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC5saXN0bGkge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAubGlzdGxpIHNwYW4ge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDUyLCAxMjUsIDE2NSwgMSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgYW5kIElFIDExICovXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG4gICAgLm5vLWFuc3dlcmVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyNzMwNDQ7XG4gICAgfVxuICB9XG4gIC5ub3RlLWJveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDMsIDIwNyk7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIH1cbiAgLmFuc3dlci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5hbnN3ZXItYm94IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE2NywgMjA4LCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgfVxuICAuYnRuLWFucy1yZXN1bHQge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAxNTYsIDE4LCAxKTtcbiAgfVxuICAvLyAuY29udGVudC1pbWd7XG4gIC8vICAgZGlzcGxheTogZmxleDtcbiAgLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgIGZsZXgtd3JhcDogd3JhcDtcbiAgLy8gfVxuICAuYm90dG9tX2FjdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogIzMxMmUyZTtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5jb2xsYXBzZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuICAuc2hvdy1saXN0IHtcbiAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAuc2hvdy1zaGVldCAubGlzdGxpIHNwYW57XG4gICAgICAgIHdpZHRoOiAyN3B4O1xuICAgICAgICBoZWlnaHQ6IDI3cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM0N2RhNTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG4gIH1cbiAgLnRvcF9hY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6ICMzMTJlMmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNjcm9sbFNoZWV0TW9iaWxlIHtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgfVxuICB9XG4gIC5ub3RpZnktYmFkZ2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzcHg7XG4gICAgdG9wOjNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6cmdiKDE3NSwgMTc1LCAxNzUpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5hdHRhY2gtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA4My4zMyU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcbiAgfVxuICAjZXhhbUhlYWRlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5hbnN3ZXItY29udGVudCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmJ0bi1hbnMtcmVzdWx0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubGlzdC1hbnN3ZXJ7bWFyZ2luLWJvdHRvbTogMTRweCAhaW1wb3J0YW50O31cbiAgICAubGlzdC1hbnN3ZXItbW9iaWxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLmJnLXF1ZXN0aW9ue1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbiAgLnF1ZXN0aW9uLW9mZmxpbmUtdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5xdWVzdGlvbi1vZmZsaW5lLWFuc3dlcntcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHNwYW57XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfSJdfQ== */"] });


/***/ }),

/***/ 87283:
/*!******************************************************************************************!*\
  !*** ./src/app/testbank_frontend/take-test/ultities/check-essay/controller.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckEssayComponent": () => (/* binding */ CheckEssayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 76246);








const _c0 = ["myDialogCheckEssay"];
function CheckEssayComponent_div_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckEssayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckEssayComponent_div_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.closeDialog($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2, 3)(3, "div", 4)(4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0110\u00E2y l\u00E0 b\u00E0i thi h\u1ED7n h\u1EE3p c\u00F3 T\u1EF1 lu\u1EADn. \u0110\u1EC3 tr\u1EA3 l\u1EDDi c\u00E2u h\u1ECFi t\u1EF1 lu\u1EADn: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "B\u1EA1n c\u00F3 th\u1EC3 l\u00E0m tr\u1EF1c ti\u1EBFp tr\u00EAn h\u1EC7 th\u1ED1ng ho\u1EB7c l\u00E0m ra gi\u1EA5y, ch\u1EE5p \u1EA3nh r\u1ED3i g\u1EEDi qua \"File \u0110\u00EDnh K\u00E8m\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckEssayComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.confirmQuit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CheckEssayComponent_div_0_span_10_Template, 3, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " T\u00F4i \u0111\u00E3 hi\u1EC3u ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading === true);
} }
class CheckEssayComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService) {
        super(commonService);
        this.commonService = commonService;
        this.data = { isShow: false };
        this.closeEssayDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
    }
    closeDialog(event) {
        var _a;
        if (!((_a = this.myDialog) === null || _a === void 0 ? void 0 : _a.nativeElement.contains(event.target))) {
            // clicked outside => close dialog
            this.closeEssayDialog.emit(true);
        }
    }
    confirmQuit() {
        this.closeEssayDialog.emit(true);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
CheckEssayComponent.ɵfac = function CheckEssayComponent_Factory(t) { return new (t || CheckEssayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
CheckEssayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CheckEssayComponent, selectors: [["app-check-essay"]], viewQuery: function CheckEssayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.myDialog = _t.first);
    } }, inputs: { data: "data" }, outputs: { closeEssayDialog: "closeEssayDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 3, "click", 4, "ngIf"], [1, "school-info_bg", 3, "click"], [1, "school-info", "p-4"], ["myDialogCheckEssay", ""], [1, "text-center"], [1, "mb-2", "h5"], [1, "mb-0", "h5", "text-info"], [1, "d-flex", "float-right", "mt-3"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "15px", 3, "click"], [4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function CheckEssayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CheckEssayComponent_div_0_Template, 12, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.isShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  z-index: 1000;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(60, 60, 60, 0.5);\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  max-width: 600px;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 800px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 700px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 400px;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 300px;\n  }\n}\n\n@media only screen and (max-width: 290px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0RBQUE7QUFFSjs7QUFBRTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQUtKO0FBQ0Y7O0FBSEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQUtKO0FBQ0Y7O0FBSEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQUtKO0FBQ0Y7O0FBSEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQUtKO0FBQ0Y7O0FBSEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQUtKO0FBQ0YiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nob29sLWluZm9fYmcge1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwLCAwLjUpO1xuICB9XG4gIC5zY2hvb2wtaW5mbyB7XG4gICAgei1pbmRleDogMTAwMTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICB9XG4gIC50cnVuY2F0ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAuY2xvc2UtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOHB4O1xuICAgIHJpZ2h0OiAtN3B4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNkYWRhZGE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjkwcHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgfVxuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 93871:
/*!*********************************************************************************************!*\
  !*** ./src/app/testbank_frontend/take-test/ultities/comfirm-exam/comfirm-exam.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComfirmExamComponent": () => (/* binding */ ComfirmExamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/pipes/common.pipe */ 1033);









const _c0 = ["myDialogConfirmExam"];
function ComfirmExamComponent_div_0_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ComfirmExamComponent_div_0_div_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("L\u1ED7i: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r7.data.messageError), "");
} }
function ComfirmExamComponent_div_0_div_3_div_6_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ComfirmExamComponent_div_0_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComfirmExamComponent_div_0_div_3_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r10.btnCloseDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u0110\u00F3ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComfirmExamComponent_div_0_div_3_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r12.confirmFinish(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ComfirmExamComponent_div_0_div_3_div_6_span_5_Template, 3, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " G\u1EEDi l\u1EA1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r8.countTimeEnable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.statusObj.loading);
} }
function ComfirmExamComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " B\u00E0i l\u00E0m c\u1EE7a b\u1EA1n \u0111ang \u0111\u01B0\u1EE3c t\u1EF1 \u0111\u1ED9ng n\u1ED9p l\u00EAn h\u1EC7 th\u1ED1ng. Vui l\u00F2ng \u0111\u1EE3i trong gi\u00E2y l\u00E1t! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ComfirmExamComponent_div_0_div_3_span_3_Template, 3, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ComfirmExamComponent_div_0_div_3_span_4_Template, 3, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ComfirmExamComponent_div_0_div_3_div_6_Template, 7, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.data.saveFalse);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.data.saveFalse && ctx_r2.data.messageError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.data.autoSubmit && ctx_r2.data.saveFalse);
} }
function ComfirmExamComponent_div_0_ng_template_4_div_0_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " B\u1EA1n ch\u01B0a n\u1ED9p File t\u1EF1 lu\u1EADn n\u00E0o. B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n k\u1EBFt th\u00FAc b\u00E0i thi? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ComfirmExamComponent_div_0_ng_template_4_div_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n k\u1EBFt th\u00FAc b\u00E0i thi? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ComfirmExamComponent_div_0_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Th\u1EDDi gian l\u00E0m b\u00E0i c\u1EE7a b\u1EA1n c\u00F2n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 8)(4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ComfirmExamComponent_div_0_ng_template_4_div_0_p_12_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ComfirmExamComponent_div_0_ng_template_4_div_0_ng_template_13_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r13.timeCount.hour || 0) > 9 ? ctx_r13.timeCount.hour : "0" + ctx_r13.timeCount.hour, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r13.timeCount.minute || 0) > 9 ? ctx_r13.timeCount.minute : "0" + ctx_r13.timeCount.minute, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r13.timeCount.second || 0) > 9 ? ctx_r13.timeCount.second : "0" + ctx_r13.timeCount.second, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.data.notHasFiles)("ngIfElse", _r18);
} }
function ComfirmExamComponent_div_0_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " H\u1EBFt gi\u1EDD! Nh\u1EA5n v\u00E0o 'Ho\u00E0n th\u00E0nh' \u0111\u1EC3 g\u1EEDi b\u00E0i thi c\u1EE7a b\u1EA1n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function ComfirmExamComponent_div_0_ng_template_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n k\u1EBFt th\u00FAc b\u00E0i thi? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function ComfirmExamComponent_div_0_ng_template_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " B\u00E0i thi n\u00E0y ch\u1EC9 \u0111\u01B0\u1EE3c thi m\u1ED9t l\u1EA7n! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function ComfirmExamComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ComfirmExamComponent_div_0_ng_template_4_div_0_Template, 15, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ComfirmExamComponent_div_0_ng_template_4_div_1_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ComfirmExamComponent_div_0_ng_template_4_div_2_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ComfirmExamComponent_div_0_ng_template_4_div_3_Template, 3, 0, "div", 17);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r4.data.time || -1) > 0 && !ctx_r4.data.unLimitTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r4.data.time || 1) <= 0 && !ctx_r4.data.unLimitTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.data.time && ctx_r4.data.unLimitTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.data.time == undefined);
} }
function ComfirmExamComponent_div_0_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComfirmExamComponent_div_0_div_6_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r22.btnCloseDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " H\u1EE7y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function ComfirmExamComponent_div_0_div_6_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ComfirmExamComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ComfirmExamComponent_div_0_div_6_div_1_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComfirmExamComponent_div_0_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r24.confirmFinish(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ComfirmExamComponent_div_0_div_6_span_3_Template, 3, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Ho\u00E0n Th\u00E0nh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r5.data.time || -1) > 0 || ctx_r5.data.unLimitTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r5.countTimeEnable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.statusObj.loading || ctx_r5.data.notHasFiles && ctx_r5.countTimeEnable);
} }
function ComfirmExamComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComfirmExamComponent_div_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.onGlobalClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ComfirmExamComponent_div_0_div_3_Template, 7, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ComfirmExamComponent_div_0_ng_template_4_Template, 4, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ComfirmExamComponent_div_0_div_6_Template, 5, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.data.autoSubmit)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.data.autoSubmit);
} }
class ComfirmExamComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService) {
        super(commonService);
        this.commonService = commonService;
        this.data = {};
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.redirectToHomepage = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
        this.timeCount = { hour: 0, minute: 0, second: 0 };
        this.countTimeEnable = true;
    }
    onGlobalClick(event) {
        var _a;
        if (!((_a = this.myDialog) === null || _a === void 0 ? void 0 : _a.nativeElement.contains(event.target))) {
            if (!this.data.autoSubmit) {
                this.closeDialog.emit();
            }
        }
    }
    confirmFinish() {
        var Data = { isConfirm: true, isAutoSubmit: this.data.autoSubmit, isSaveFalse: this.data.saveFalse };
        this.redirectToHomepage.emit(Data);
    }
    setTimeExam(time) {
        const a = Math.floor(time / 3600); // hours
        const x = time % 3600;
        const b = Math.floor(x / 60); // minutes
        const c = time % 60; // seconds
        this.timeCount = {
            hour: a,
            minute: b,
            second: c,
        };
    }
    btnCloseDialog() {
        this.closeDialog.emit();
    }
    ngOnInit() {
        var _a;
        if (!this.data.unLimitTime) {
            this.setTimeExam((_a = this.data.time) !== null && _a !== void 0 ? _a : 0);
            if (this.data.time == 0 && !this.data.autoSubmit) {
                setTimeout(() => {
                    this.confirmFinish();
                }, 5 * 1000);
            }
        }
        if (this.data.notHasFiles) {
            setTimeout(() => {
                this.countTimeEnable = false;
            }, 3000);
        }
        else {
            this.countTimeEnable = false;
        }
        if (this.data.saveFalse) {
            setTimeout(() => {
                this.countTimeEnable = false;
            }, 2000);
        }
        super.ngOnInit();
    }
}
ComfirmExamComponent.ɵfac = function ComfirmExamComponent_Factory(t) { return new (t || ComfirmExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
ComfirmExamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ComfirmExamComponent, selectors: [["app-comfirm-exam"]], viewQuery: function ComfirmExamComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.myDialog = _t.first);
    } }, inputs: { data: "data" }, outputs: { closeDialog: "closeDialog", redirectToHomepage: "redirectToHomepage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 3, "click", 4, "ngIf"], [1, "school-info_bg", 3, "click"], [1, "school-info", "p-4"], ["myDialogConfirmExam", ""], ["class", "text-center", 4, "ngIf", "ngIfElse"], ["Normal", ""], ["class", "d-flex float-right mt-3", 4, "ngIf"], [1, "text-center"], [1, "h5", "text-danger", 2, "padding-bottom", "10px", "border-bottom", "1px solid #b2b4b7"], [4, "ngIf"], ["class", "h5 text-danger", 4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "h5", "text-danger"], [1, "d-flex", "float-right", "mt-3"], [1, "azt-block-button"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "15px", 3, "disabled", "click"], ["class", "text-center", 4, "ngIf"], [1, "h5", "para_respon", "font-weight-normal"], [1, "ng-binding"], ["class", "h5 text-danger", "style", " padding-bottom: 10px;", 4, "ngIf", "ngIfElse"], ["normalConfirm", ""], [1, "h5", "text-danger", 2, "padding-bottom", "10px"], [1, "h5", "text-info", 2, "padding-bottom", "10px"], ["class", "azt-block-button", 4, "ngIf"]], template: function ComfirmExamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ComfirmExamComponent_div_0_Template, 7, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.isShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_2__.MytranslatePipe], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  z-index: 98;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(60, 60, 60, 0.5);\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  max-width: 600px;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 800px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 700px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 400px;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 300px;\n  }\n}\n\n@media only screen and (max-width: 290px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWZpcm0tZXhhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUdBLGdEQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGIiwiZmlsZSI6ImNvbWZpcm0tZXhhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2hvb2wtaW5mb19iZyB7XG4gIHotaW5kZXg6IDk4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwLCAwLjUpO1xufVxuLnNjaG9vbC1pbmZvIHtcbiAgei1pbmRleDogOTk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xufVxuLnRydW5jYXRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDVweCAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICByaWdodDogLTdweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkYWRhZGE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5zY2hvb2wtaW5mbyB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zY2hvb2wtaW5mbyB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zY2hvb2wtaW5mbyB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gIC5zY2hvb2wtaW5mbyB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI5MHB4KSB7XG4gIC5zY2hvb2wtaW5mbyB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 44697:
/*!***************************************************************************************!*\
  !*** ./src/app/testbank_frontend/take-test/ultities/exit-exam/exit-exam.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExitExamComponent": () => (/* binding */ ExitExamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 76246);








const _c0 = ["myDialogExitExam"];
function ExitExamComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Th\u1EDDi gian l\u00E0m b\u00E0i c\u1EE7a b\u1EA1n c\u00F2n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 12)(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " B\u00E0i l\u00E0m c\u1EE7a b\u1EA1n c\u00F3 th\u1EC3 s\u1EBD kh\u00F4ng \u0111\u01B0\u1EE3c ghi nh\u1EADn. B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n tho\u00E1t b\u00E0i thi? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r2.timeCount.hour || 0) > 9 ? ctx_r2.timeCount.hour : "0" + ctx_r2.timeCount.hour, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r2.timeCount.minute || 0) > 9 ? ctx_r2.timeCount.minute : "0" + ctx_r2.timeCount.minute, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r2.timeCount.second || 0) > 9 ? ctx_r2.timeCount.second : "0" + ctx_r2.timeCount.second, " ");
} }
function ExitExamComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " H\u1EBFt gi\u1EDD! Nh\u1EA5n v\u00E0o 'Ho\u00E0n th\u00E0nh' \u0111\u1EC3 g\u1EEDi b\u00E0i thi c\u1EE7a b\u1EA1n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function ExitExamComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n k\u1EBFt th\u00FAc b\u00E0i thi? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function ExitExamComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " B\u00E0i thi n\u00E0y ch\u1EC9 \u0111\u01B0\u1EE3c thi m\u1ED9t l\u1EA7n! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function ExitExamComponent_div_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " B\u00E0i l\u00E0m c\u1EE7a b\u1EA1n c\u00F3 th\u1EC3 s\u1EBD kh\u00F4ng \u0111\u01B0\u1EE3c ghi nh\u1EADn. B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n tho\u00E1t b\u00E0i thi? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExitExamComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExitExamComponent_div_0_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.btnCloseDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " H\u1EE7y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function ExitExamComponent_div_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExitExamComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExitExamComponent_div_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.onGlobalClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ExitExamComponent_div_0_div_3_Template, 14, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ExitExamComponent_div_0_div_4_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ExitExamComponent_div_0_div_5_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ExitExamComponent_div_0_div_6_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ExitExamComponent_div_0_ng_template_7_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ExitExamComponent_div_0_div_10_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExitExamComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.confirmQuit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ExitExamComponent_div_0_span_12_Template, 3, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " X\u00E1c Nh\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.data.time || -1) > 0 && !ctx_r0.data.unLimitTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.data.time || 1) <= 0 && !ctx_r0.data.unLimitTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data.time && ctx_r0.data.unLimitTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data.time == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.data.time || -1) > 0 || ctx_r0.data.unLimitTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading === true);
} }
class ExitExamComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService) {
        super(commonService);
        this.commonService = commonService;
        this.data = {};
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.redirectToHomepage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
        this.timeCount = { hour: 0, minute: 0, second: 0 };
    }
    onGlobalClick(event) {
        var _a;
        if (!((_a = this.myDialog) === null || _a === void 0 ? void 0 : _a.nativeElement.contains(event.target))) {
            // clicked outside => close dialog
            this.closeDialog.emit();
        }
    }
    confirmQuit() {
        this.redirectToHomepage.emit(true);
    }
    setTimeExam(time) {
        const a = Math.floor(time / 3600); // hours
        const x = time % 3600;
        const b = Math.floor(x / 60); // minutes
        const c = time % 60; // seconds
        this.timeCount = {
            hour: a,
            minute: b,
            second: c,
        };
    }
    btnCloseDialog() {
        this.closeDialog.emit();
    }
    ngOnInit() {
        var _a;
        this.setTimeExam((_a = this.data.time) !== null && _a !== void 0 ? _a : 0);
        super.ngOnInit();
    }
}
ExitExamComponent.ɵfac = function ExitExamComponent_Factory(t) { return new (t || ExitExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
ExitExamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ExitExamComponent, selectors: [["app-exit-exam"]], viewQuery: function ExitExamComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.myDialog = _t.first);
    } }, inputs: { data: "data" }, outputs: { closeDialog: "closeDialog", redirectToHomepage: "redirectToHomepage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 3, "click", 4, "ngIf"], [1, "school-info_bg", 3, "click"], [1, "school-info", "p-4"], ["myDialogExitExam", ""], ["class", "text-center", 4, "ngIf"], ["unLimit", ""], [1, "d-flex", "float-right", "mt-3"], ["class", "azt-block-button", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "15px", 3, "click"], [4, "ngIf"], [1, "text-center"], [1, "h5", "para_respon", "font-weight-normal"], [1, "h5", "text-danger", 2, "padding-bottom", "10px", "border-bottom", "1px solid #b2b4b7"], [1, "ng-binding"], [1, "h5", "text-info", 2, "padding-bottom", "10px"], [1, "h5", "text-danger", 2, "padding-bottom", "10px"], [1, "azt-block-button"], ["mat-raised-button", "", 3, "click"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function ExitExamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ExitExamComponent_div_0_Template, 14, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.isShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  z-index: 1000;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(60, 60, 60, 0.5);\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  max-width: 600px;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 800px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 700px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 400px;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 300px;\n  }\n}\n\n@media only screen and (max-width: 290px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4aXQtZXhhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUdBLGdEQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGIiwiZmlsZSI6ImV4aXQtZXhhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2hvb2wtaW5mb19iZyB7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjAsIDAuNSk7XG59XG4uc2Nob29sLWluZm8ge1xuICB6LWluZGV4OiAxMDAxO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbn1cbi50cnVuY2F0ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogOTAlO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5jbG9zZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IC03cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGFkYWRhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuc2Nob29sLWluZm8ge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2Nob29sLWluZm8ge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2Nob29sLWluZm8ge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuICAuc2Nob29sLWluZm8ge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyOTBweCkge1xuICAuc2Nob29sLWluZm8ge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 63735:
/*!************************************************************************************************!*\
  !*** ./src/app/testbank_frontend/take-test/ultities/monitoring-dialog/controller.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorScreenComponent": () => (/* binding */ MonitorScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 76246);








const _c0 = ["myDialogMonitor"];
function MonitorScreenComponent_div_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MonitorScreenComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MonitorScreenComponent_div_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.closeOutsideDialog($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2, 3)(3, "div", 4)(4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0110\u00E2y l\u00E0 b\u00E0i thi \u0111\u01B0\u1EE3c \"Gi\u00E1m S\u00E1t\". Vui l\u00F2ng b\u1EA5m \"X\u00E1c nh\u1EADn\" \u0111\u1EC3 ti\u1EBFp t\u1EE5c b\u00E0i thi!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MonitorScreenComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.confirmQuit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MonitorScreenComponent_div_0_span_8_Template, 3, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " X\u00E1c Nh\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading === true);
} }
class MonitorScreenComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService) {
        super(commonService);
        this.commonService = commonService;
        this.data = { isShow: false };
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
    }
    closeOutsideDialog(event) {
        var _a;
        if (!((_a = this.myDialog) === null || _a === void 0 ? void 0 : _a.nativeElement.contains(event.target))) {
            // clicked outside => close dialog
            this.closeDialog.emit(true);
        }
    }
    confirmQuit() {
        this.closeDialog.emit(true);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
MonitorScreenComponent.ɵfac = function MonitorScreenComponent_Factory(t) { return new (t || MonitorScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
MonitorScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MonitorScreenComponent, selectors: [["app-monitor-screen"]], viewQuery: function MonitorScreenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.myDialog = _t.first);
    } }, inputs: { data: "data" }, outputs: { closeDialog: "closeDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 3, "click", 4, "ngIf"], [1, "school-info_bg", 3, "click"], [1, "school-info", "p-4"], ["myDialogMonitor", ""], [1, "text-center"], [1, "mb-0", "h5"], [1, "d-flex", "float-right", "mt-3"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "15px", 3, "click"], [4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function MonitorScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MonitorScreenComponent_div_0_Template, 10, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.isShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  z-index: 1000;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(60, 60, 60, 0.5);\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  max-width: 600px;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 800px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 700px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 400px;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 300px;\n  }\n}\n\n@media only screen and (max-width: 290px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0RBQUE7QUFFSjs7QUFBRTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQUtKO0FBQ0Y7O0FBSEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQUtKO0FBQ0Y7O0FBSEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQUtKO0FBQ0Y7O0FBSEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQUtKO0FBQ0Y7O0FBSEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQUtKO0FBQ0YiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nob29sLWluZm9fYmcge1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwLCAwLjUpO1xuICB9XG4gIC5zY2hvb2wtaW5mbyB7XG4gICAgei1pbmRleDogMTAwMTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICB9XG4gIC50cnVuY2F0ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAuY2xvc2UtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOHB4O1xuICAgIHJpZ2h0OiAtN3B4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNkYWRhZGE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjkwcHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgfVxuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 8361:
/*!******************************************************************************************!*\
  !*** ./src/app/testbank_frontend/take-test/ultities/submit-info/controller.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitInfoComponent": () => (/* binding */ SubmitInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/browser.storage.service */ 34782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ 46287);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 71412);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 76246);
















const _c0 = ["myDialogSubmitInfo"];
function SubmitInfoComponent_div_0_ng_container_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 13)(2, "div", 14)(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const item_r4 = ctx_r10.$implicit;
    const i_r5 = ctx_r10.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("formControlName", "infoType_0_field_", i_r5, "");
} }
function SubmitInfoComponent_div_0_ng_container_10_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "mat-checkbox", 23)(2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const chbx_r12 = ctx.$implicit;
    const k_r13 = ctx.index;
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("formArrayName", "infoType_1_field_", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r11.form.value["infoType_1_field_" + i_r5][k_r13])("formControlName", k_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", chbx_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](chbx_r12);
} }
function SubmitInfoComponent_div_0_ng_container_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 18)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SubmitInfoComponent_div_0_ng_container_10_div_2_div_6_Template, 4, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r4.contents);
} }
function SubmitInfoComponent_div_0_ng_container_10_div_3_mat_radio_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 27)(1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const rd_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", rd_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", rd_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](rd_r17);
} }
function SubmitInfoComponent_div_0_ng_container_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 18)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-radio-group", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SubmitInfoComponent_div_0_ng_container_10_div_3_mat_radio_button_6_Template, 3, 3, "mat-radio-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const item_r4 = ctx_r18.$implicit;
    const i_r5 = ctx_r18.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("formControlName", "infoType_2_field_", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r4.contents);
} }
function SubmitInfoComponent_div_0_ng_container_10_div_4_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mn_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", mn_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](mn_r20);
} }
function SubmitInfoComponent_div_0_ng_container_10_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 18)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 28)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Ch\u1ECDn m\u1ED9t th\u00F4ng tin");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SubmitInfoComponent_div_0_ng_container_10_div_4_mat_option_9_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const item_r4 = ctx_r21.$implicit;
    const i_r5 = ctx_r21.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("formControlName", "infoType_3_field_", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r4.contents);
} }
function SubmitInfoComponent_div_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubmitInfoComponent_div_0_ng_container_10_div_1_Template, 6, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubmitInfoComponent_div_0_ng_container_10_div_2_Template, 7, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SubmitInfoComponent_div_0_ng_container_10_div_3_Template, 7, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SubmitInfoComponent_div_0_ng_container_10_div_4_Template, 10, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r4.type == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r4.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r4.type == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r4.type == 3);
} }
function SubmitInfoComponent_div_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubmitInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubmitInfoComponent_div_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.onGlobalClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 2)(2, "div", 3, 4)(4, "div", 5)(5, "div", 6)(6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Vui l\u00F2ng nh\u1EADp th\u00EAm th\u00F4ng tin \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u b\u00E0i thi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Nh\u1EEFng th\u00F4ng tin n\u00E0y s\u1EBD gi\u00FAp gi\u00E1o vi\u00EAn \u0111\u1ECBnh danh v\u00E0 ch\u1EA5m \u0111i\u1EC3m cho b\u1EA1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SubmitInfoComponent_div_0_ng_container_10_Template, 5, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10)(12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubmitInfoComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.handleConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SubmitInfoComponent_div_0_span_13_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " X\u00E1c nh\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.data.infoFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.form.valid || ctx_r0.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading);
} }
class SubmitInfoComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(fb, commonService, browserStorageService) {
        super(commonService);
        this.fb = fb;
        this.commonService = commonService;
        this.browserStorageService = browserStorageService;
        this.data = {};
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
        this.infoSubmit = [];
    }
    onGlobalClick(event) {
        var _a;
        if (!((_a = this.myDialog) === null || _a === void 0 ? void 0 : _a.nativeElement.contains(event.target))) {
            // clicked outside => close dialog
            if (this.form.valid) {
                this.handleConfirm();
            }
        }
    }
    handleConfirm() {
        var _a, _b, _c;
        this.initStatusObj();
        this.mapData();
        if (this.browserStorageService.getSizeOfStorage() > 4.5) {
            this.browserStorageService.removeExceptSimpleStorage((_b = (_a = this.data.examId) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '', (_c = this.data.hashId) !== null && _c !== void 0 ? _c : '');
        }
        this.browserStorageService.saveSimpleStorage('userInfoV3_' + this.data.hashId, JSON.stringify(this.infoSubmit));
        var data = { success: true, info: JSON.stringify(this.infoSubmit) };
        this.closeDialog.emit(data);
        this.successStatusObj();
    }
    mapData() {
        this.infoSubmit = [];
        if (Array.isArray(this.data.infoFields)) {
            for (let index = 0; index < this.data.infoFields.length; index++) {
                let infoItem = { contents: [] };
                infoItem.index = index;
                infoItem.type = this.data.infoFields[index].type;
                infoItem.title = this.data.infoFields[index].title;
                infoItem.contents = [];
                switch (this.data.infoFields[index].type) {
                    case 1: // checkbox
                        for (let k = 0; k < this.form.value[`infoType_${this.data.infoFields[index].type}_field_${index}`].length; k++) {
                            if (this.form.value[`infoType_${this.data.infoFields[index].type}_field_${index}`][k]) {
                                infoItem.contents.push(this.data.infoFields[index].contents[k]);
                            }
                        }
                        break;
                    default: // case: 0,2,3, just push from form.
                        infoItem.contents.push(this.form.value[`infoType_${this.data.infoFields[index].type}_field_${index}`]);
                        break;
                }
                this.infoSubmit.push(infoItem);
            }
        }
    }
    ngOnInit() {
        let groups = {};
        if (Array.isArray(this.data.infoFields)) {
            for (let index = 0; index < this.data.infoFields.length; index++) {
                switch (this.data.infoFields[index].type) {
                    case 1: // checkbox
                        var fcArr = [];
                        this.data.infoFields[index].contents.forEach((item) => {
                            fcArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false));
                        });
                        groups[`infoType_1_field_${index}`] = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArray(fcArr, minSelectedCheckboxes(1));
                        break;
                    case 2: // radio box
                        groups[`infoType_2_field_${index}`] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required];
                        break;
                    case 3: // menu dropdown
                        groups[`infoType_3_field_${index}`] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required];
                        break;
                    default: // case: 0, short text
                        groups[`infoType_0_field_${index}`] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required];
                        break;
                }
            }
            this.form = this.fb.group(groups);
        }
        super.ngOnInit();
    }
}
SubmitInfoComponent.ɵfac = function SubmitInfoComponent_Factory(t) { return new (t || SubmitInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_2__.BrowserStorageService)); };
SubmitInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubmitInfoComponent, selectors: [["app-submit-info"]], viewQuery: function SubmitInfoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.myDialog = _t.first);
    } }, inputs: { data: "data" }, outputs: { closeDialog: "closeDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 3, "click", 4, "ngIf"], [1, "school-info_bg", 3, "click"], ["id", "test-info-form", 3, "formGroup"], [1, "school-info", "p-4", "scrollable-form"], ["myDialogSubmitInfo", ""], [1, "form-horizontal", "text-center"], [1, "text-center"], [1, "h5", "para_respon", "font-weight-normal"], [1, "h6", "para_respon", "text-info", "font-weight-normal"], [4, "ngFor", "ngForOf"], [1, "float-right", "mt-3", "pb-3"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "15px", 3, "disabled", "click"], [4, "ngIf"], [1, "input-group", "my-3"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", 1, "form-control", 3, "formControlName"], [1, "input-group", "mt-3"], [1, "input-group-prepend", "w-100", "text-center"], [1, "input-group-text", "w-100", "d-inline-block", 2, "border-bottom-left-radius", "0", "border-top-right-radius", "0.25rem", "white-space", "normal"], [1, "row", "pt-2", "pl-0", "pr-0", "ml-0", "mr-0", "border-row"], ["class", "col-12 col-sm-12 col-md-4 text-left mb-1", 3, "formArrayName", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-4", "text-left", "mb-1", 3, "formArrayName"], ["color", "primary", 3, "checked", "formControlName"], [1, "truncate", 3, "matTooltip"], [1, "row", "w-100", "pt-3", "pl-0", "pr-0", "ml-0", "mr-0", "border-row", 3, "formControlName"], ["color", "primary", "class", "col-12 col-sm-12 col-md-4 text-left mb-1", 3, "value", 4, "ngFor", "ngForOf"], ["color", "primary", 1, "col-12", "col-sm-12", "col-md-4", "text-left", "mb-1", 3, "value"], ["appearance", "fill"], [3, "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function SubmitInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SubmitInfoComponent_div_0_Template, 15, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.isShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  z-index: 1000;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(60, 60, 60, 0.5);\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  width: 800px;\n  max-width: 800px;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 150px;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n.content-form[_ngcontent-%COMP%] {\n  border: 1px solid #bebaba;\n  border-radius: 5px;\n}\n\n.scrollable-form[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 10%);\n  overflow-y: auto;\n}\n\n.form-field-custom[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.04);\n  border: 1px solid #ced4dab2;\n  border-radius: 0.25rem;\n  padding: 5px 8px;\n}\n\n.border-row[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-top: none;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 800px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 700px;\n  }\n\n  .truncate[_ngcontent-%COMP%] {\n    max-width: 350px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 400px;\n  }\n\n  .truncate[_ngcontent-%COMP%] {\n    max-width: 180px;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 300px;\n  }\n}\n\n@media only screen and (max-width: 290px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUdBLGdEQUFBO0FBRUo7O0FBQUU7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIRTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKRTtFQUNFLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQVFKOztBQU5FO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFTSjtBQUNGOztBQVBFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFTSjs7RUFQRTtJQUNFLGdCQUFBO0VBVUo7QUFDRjs7QUFSRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VBVUo7O0VBUkU7SUFDRSxnQkFBQTtFQVdKO0FBQ0Y7O0FBVEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQVdKO0FBQ0Y7O0FBVEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQVdKO0FBQ0YiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nob29sLWluZm9fYmcge1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwLCAwLjUpO1xuICB9XG4gIC5zY2hvb2wtaW5mbyB7XG4gICAgei1pbmRleDogMTAwMTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgfVxuICAudHJ1bmNhdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAuY2xvc2UtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOHB4O1xuICAgIHJpZ2h0OiAtN3B4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNkYWRhZGE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgLmNvbnRlbnQtZm9ybSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JlYmFiYTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgLnNjcm9sbGFibGUtZm9ybSB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEwJSk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICAuZm9ybS1maWVsZC1jdXN0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYWIyO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgfVxuICAuYm9yZGVyLXJvdyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgfVxuICAgIC50cnVuY2F0ZXtcbiAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgfVxuICAgIC50cnVuY2F0ZXtcbiAgICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjkwcHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgfVxuICB9XG4iXX0= */"] });
function minSelectedCheckboxes(min = 1) {
    const validator = (formArray) => {
        const totalSelected = formArray.controls
            .map(control => control.value)
            .reduce((prev, next) => next ? prev + next : prev, 0);
        return totalSelected >= min ? null : { required: true };
    };
    return validator;
}


/***/ }),

/***/ 14376:
/*!******************************************************************************************!*\
  !*** ./src/app/testbank_frontend/take-test/ultities/submit-name/controller.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitNameComponent": () => (/* binding */ SubmitNameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/validator/whitespace.validator */ 41303);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/redirect.service */ 42873);
/* harmony import */ var _core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../core/services/browser.storage.service */ 34782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/pipes/common.pipe */ 1033);















const _c0 = ["myDialogSubmitName"];
function SubmitNameComponent_div_0_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "B\u1EA1n c\u1EA7n ph\u1EA3i \u0111\u0103ng k\u00FD t\u00E0i kho\u1EA3n \u0111\u1EC3 l\u00E0m b\u00E0i thi!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SubmitNameComponent_div_0_div_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "B\u1EA1n c\u1EA7n ph\u1EA3i \u0111\u0103ng k\u00FD t\u00E0i kho\u1EA3n \u0111\u1EC3 xem k\u1EBFt qu\u1EA3 thi offline!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SubmitNameComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubmitNameComponent_div_0_div_3_p_1_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SubmitNameComponent_div_0_div_3_p_2_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubmitNameComponent_div_0_div_3_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r7.goToRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\u0110\u0103ng k\u00FD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "B\u1EA1n \u0111\u00E3 c\u00F3 t\u00E0i kho\u1EA3n?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubmitNameComponent_div_0_div_3_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r9.goToLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\u0110\u0103ng nh\u1EADp");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.type == 2);
} }
function SubmitNameComponent_div_0_ng_template_4_form_0_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Y\u00EAu c\u1EA7u nh\u1EADp H\u1ECD t\u00EAn! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SubmitNameComponent_div_0_ng_template_4_form_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubmitNameComponent_div_0_ng_template_4_form_0_div_8_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.getErrorType("fullName", "required"));
} }
function SubmitNameComponent_div_0_ng_template_4_form_0_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SubmitNameComponent_div_0_ng_template_4_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 12)(1, "div", 6)(2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Vui l\u00F2ng nh\u1EADp t\u00EAn \u0111\u1EC3 ti\u1EBFp t\u1EE5c b\u00E0i thi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 14)(5, "div", 15)(6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, SubmitNameComponent_div_0_ng_template_4_form_0_div_8_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 6)(10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Ho\u1EB7c click v\u00E0o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubmitNameComponent_div_0_ng_template_4_form_0_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r15.registerAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\"\u0110\u0103ng k\u00FD\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " \u0111\u1EC3 l\u01B0u l\u1EA1i l\u1ECBch s\u1EED l\u00E0m \u0111\u1EC1 c\u1EE7a b\u1EA1n.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubmitNameComponent_div_0_ng_template_4_form_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r17.submitName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, SubmitNameComponent_div_0_ng_template_4_form_0_span_18_Template, 3, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " X\u00E1c nh\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r10.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.form.controls["fullName"].invalid && ctx_r10.form.controls["fullName"].dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r10.statusObj.loading || ctx_r10.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.statusObj.loading);
} }
function SubmitNameComponent_div_0_ng_template_4_form_1_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Y\u00EAu c\u1EA7u nh\u1EADp M\u1EADt kh\u1EA9u! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SubmitNameComponent_div_0_ng_template_4_form_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubmitNameComponent_div_0_ng_template_4_form_1_div_10_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r18.getErrorType("password", "required"));
} }
function SubmitNameComponent_div_0_ng_template_4_form_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31)(1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, ctx_r19.data.errorMessage), " ");
} }
function SubmitNameComponent_div_0_ng_template_4_form_1_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SubmitNameComponent_div_0_ng_template_4_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 12)(1, "div", 6)(2, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Y\u00EAu c\u1EA7u 'M\u1EADt kh\u1EA9u' \u0111\u1EC3 ti\u1EBFp t\u1EE5c b\u00E0i thi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "N\u1EBFu b\u1EA1n ch\u01B0a c\u00F3 M\u1EADt kh\u1EA9u c\u1EE7a b\u00E0i thi. Vui l\u00F2ng li\u00EAn h\u1EC7 gi\u00E1o vi\u00EAn c\u1EE7a b\u1EA1n! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 14)(7, "div", 15)(8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, SubmitNameComponent_div_0_ng_template_4_form_1_div_10_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, SubmitNameComponent_div_0_ng_template_4_form_1_div_11_Template, 4, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubmitNameComponent_div_0_ng_template_4_form_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r22.submitName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, SubmitNameComponent_div_0_ng_template_4_form_1_span_15_Template, 3, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " X\u00E1c nh\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r11.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.form.controls["password"].invalid && ctx_r11.form.controls["password"].dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.data.errorMessage != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r11.statusObj.loading || ctx_r11.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.statusObj.loading);
} }
function SubmitNameComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, SubmitNameComponent_div_0_ng_template_4_form_0_Template, 20, 4, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubmitNameComponent_div_0_ng_template_4_form_1_Template, 17, 5, "form", 11);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r4.data.needPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.data.needPassword);
} }
function SubmitNameComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubmitNameComponent_div_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r24.onGlobalClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SubmitNameComponent_div_0_div_3_Template, 9, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, SubmitNameComponent_div_0_ng_template_4_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.data.notAnonymous)("ngIfElse", _r3);
} }
class SubmitNameComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(authService, fb, commonService, router, redirectService, browserStorageService) {
        super(commonService);
        this.authService = authService;
        this.fb = fb;
        this.commonService = commonService;
        this.router = router;
        this.redirectService = redirectService;
        this.browserStorageService = browserStorageService;
        this.data = {};
        this.type = 1;
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
        //region Model
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({});
        this.password = '';
    }
    onGlobalClick(event) {
        var _a;
        if (!((_a = this.myDialog) === null || _a === void 0 ? void 0 : _a.nativeElement.contains(event.target))) {
            // clicked outside => close dialog
            if (this.form.valid) {
                this.submitName();
            }
        }
    }
    //region UI - Event
    submitName() {
        var _a, _b, _c;
        var form_obj = this.commonService.getFormObj(this.form);
        if (this.data.needPassword) {
            if (this.browserStorageService.getSizeOfStorage() > 4.5) {
                this.browserStorageService.removeExceptSimpleStorage((_b = (_a = this.data.examId) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '', (_c = this.data.hashId) !== null && _c !== void 0 ? _c : '');
            }
            this.browserStorageService.saveSimpleStorage('password_' + this.data.hashId, form_obj.password.trim());
            this.closeDialog.emit(true);
        }
        else {
            var data = {
                id: 0,
                name: form_obj.fullName
            };
            this.initStatusObj();
            this.subscriptions.add(this.authService.apiAuthChangeNamePost(data).subscribe((response) => {
                var _a;
                if (response.success == 1) {
                    this.closeDialog.emit(true);
                    this.successStatusObj();
                }
                else {
                    this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '');
                }
            }));
        }
    }
    //region Common utils
    getErrorType(field, type) {
        var _a, _b;
        if (this.form.controls[field] && this.form.controls[field].errors && ((_a = this.form.controls[field].errors) === null || _a === void 0 ? void 0 : _a[type])) {
            return (_b = this.form.controls[field].errors) === null || _b === void 0 ? void 0 : _b[type];
        }
        else {
            return false;
        }
    }
    goToRegister() {
        this.redirectService.redirectRegisterForStudent();
    }
    goToLogin() {
        let returnLink = `${this.router.url}`;
        if (returnLink.indexOf('?') !== -1) {
            let backLink = returnLink.slice(0, returnLink.indexOf('?'));
            this.redirectService.redirectToLoginBackLinkWithFromRegister(backLink);
        }
        else {
            this.redirectService.redirectToLoginBackLinkWithFromRegister(returnLink);
        }
    }
    registerAccount() {
        this.redirectService.redirectRegisterForStudent();
    }
    //region Angular lifecycle
    ngOnInit() {
        if (this.data.needPassword) {
            this.form = this.fb.group({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__.WhiteSpaceValidator.noWhiteSpace])
            });
        }
        else {
            this.form = this.fb.group({
                fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__.WhiteSpaceValidator.noWhiteSpace])
            });
        }
        super.ngOnInit();
    }
}
SubmitNameComponent.ɵfac = function SubmitNameComponent_Factory(t) { return new (t || SubmitNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_4__.RedirectService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_5__.BrowserStorageService)); };
SubmitNameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SubmitNameComponent, selectors: [["app-submit-name"]], viewQuery: function SubmitNameComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.myDialog = _t.first);
    } }, inputs: { data: "data", type: "type" }, outputs: { closeDialog: "closeDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 3, "click", 4, "ngIf"], [1, "school-info_bg", 3, "click"], [1, "school-info", "p-4"], ["myDialogSubmitName", ""], ["class", "text-center", 4, "ngIf", "ngIfElse"], ["allowAnonymous", ""], [1, "text-center"], ["class", "mb-2 h5", 4, "ngIf"], [1, "mb-0", "h4", "text-info", "clickable", 3, "click"], [1, "mb-2", "h5", "mt-4"], [1, "mb-2", "h5"], ["class", "form-horizontal text-center", 3, "formGroup", 4, "ngIf"], [1, "form-horizontal", "text-center", 3, "formGroup"], [1, "h5", "para_respon"], [1, "form-group"], [1, "col-sm-12"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "H\u1ECD v\u00E0 t\u00EAn", "formControlName", "fullName", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "h6", "mb-0", "mt-1", "font-weight-normal"], [1, "clickable", "text-primary", 3, "click"], [1, "d-flex", "float-right", "mt-3"], [1, "azt-block-button"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "15px", 3, "disabled", "click"], [4, "ngIf"], [1, "alert", "alert-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "h5", "para_respon", "font-weight-normal"], [1, "h6", "para_respon", "font-weight-normal", "text-danger"], ["type", "text", "placeholder", "M\u1EADt kh\u1EA9u b\u00E0i thi", "formControlName", "password", 1, "form-control"], ["class", "text-center mb-1", 4, "ngIf"], [1, "text-center", "mb-1"], [1, "h5", "text-danger"]], template: function SubmitNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, SubmitNameComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.isShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.MytranslatePipe], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  z-index: 1000;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(60, 60, 60, 0.5);\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  max-width: 600px;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n.block-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bar-custom[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin: 0 10px;\n  background: #000;\n  width: 2px;\n  display: block;\n  height: 35px;\n  margin-bottom: -18px;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 800px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 700px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 400px;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 300px;\n  }\n}\n\n@media only screen and (max-width: 290px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0RBQUE7QUFFSjs7QUFBRTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBTUo7O0FBSkU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQU9KO0FBQ0Y7O0FBTEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQU9KO0FBQ0Y7O0FBTEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQU9KO0FBQ0Y7O0FBTEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQU9KO0FBQ0Y7O0FBTEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQU9KO0FBQ0YiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nob29sLWluZm9fYmcge1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwLCAwLjUpO1xuICB9XG4gIC5zY2hvb2wtaW5mbyB7XG4gICAgei1pbmRleDogMTAwMTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICB9XG4gIC50cnVuY2F0ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAuY2xvc2UtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOHB4O1xuICAgIHJpZ2h0OiAtN3B4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNkYWRhZGE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgLmJsb2NrLWJ0bntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmJhci1jdXN0b217XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgd2lkdGg6IDJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTE4cHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjkwcHgpIHtcbiAgICAuc2Nob29sLWluZm8ge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgfVxuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 98296:
/*!*******************************************************************************************!*\
  !*** ./src/app/testbank_frontend/take-test/ultities/upload-image/controller.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadImageComponent": () => (/* binding */ UploadImageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_helpers/FileManagers */ 12626);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var src_app_helpers_MyPdfService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_helpers/MyPdfService */ 58326);
/* harmony import */ var src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/upload.api.service */ 29401);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_homework_exam_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/homework.exam.service */ 61704);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/clipboard */ 10092);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/pipes/common.pipe */ 1033);






















const _c0 = ["customCard"];
const _c1 = ["fileSelect"];
function UploadImageComponent_div_0_div_6_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "B\u00E0i l\u00E0m \u0111ang \u0111\u01B0\u1EE3c t\u1EA3i l\u00EAn. Vui l\u00F2ng \u0111\u1EE3i trong gi\u00E2y l\u00E1t!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UploadImageComponent_div_0_div_6_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u0110ang \u0111\u1ED3ng b\u1ED9 d\u1EEF li\u1EC7u. Vui l\u00F2ng \u0111\u1EE3i trong gi\u00E2y l\u00E1t!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UploadImageComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, UploadImageComponent_div_0_div_6_p_4_Template, 2, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, UploadImageComponent_div_0_div_6_p_5_Template, 2, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.Tmploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.Tmploading);
} }
const _c2 = function (a0) { return { "width.%": a0 }; };
function UploadImageComponent_div_0_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const file_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](file_r11.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c2, file_r11.uploadProgress));
} }
function UploadImageComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UploadImageComponent_div_0_div_7_div_1_Template, 5, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.convertObjToArray(ctx_r3.fileUploadQueue));
} }
function UploadImageComponent_div_0_div_8_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, file_r13.url || ""), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
} }
function UploadImageComponent_div_0_div_8_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "safe");
} if (rf & 2) {
    const file_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, file_r13.thumb || ""), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
} }
function UploadImageComponent_div_0_div_8_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UploadImageComponent_div_0_div_8_div_1_span_9_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23); const file_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r21.removeImg(file_r13.url || ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function UploadImageComponent_div_0_div_8_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 35)(1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "check_box_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function UploadImageComponent_div_0_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UploadImageComponent_div_0_div_8_div_1_div_1_Template, 3, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UploadImageComponent_div_0_div_8_div_1_ng_template_2_Template, 2, 3, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "a", 28)(5, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, UploadImageComponent_div_0_div_8_div_1_span_9_Template, 3, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, UploadImageComponent_div_0_div_8_div_1_span_10_Template, 3, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r13 = ctx.$implicit;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.isVideo(file_r13.mimes || "") == false)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", file_r13.name || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](file_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.isSuccess != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.isSuccess);
} }
function UploadImageComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UploadImageComponent_div_0_div_8_div_1_Template, 11, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.uploadFiles);
} }
function UploadImageComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UploadImageComponent_div_0_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r25.openSelectFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 38)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "upload_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Upload file b\u00E0i l\u00E0m c\u1EE7a b\u1EA1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "(H\u1ED7 tr\u1EE3 \u1EA2nh, Video, Audio ho\u1EB7c File PDF)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "form", 39)(11, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UploadImageComponent_div_0_div_9_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r27.selectFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r5.form);
} }
function UploadImageComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 43)(3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Ho\u1EB7c n\u1ED9p b\u1EB1ng \u0111i\u1EC7n tho\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " **(Vui l\u00F2ng kh\u00F4ng t\u1EAFt b\u1EA3ng n\u00E0y khi n\u1ED9p b\u1EB1ng \u0111i\u1EC7n tho\u1EA1i)** ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 46)(8, "div", 47)(9, "p", 48)(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "C\u00E1ch 1:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " S\u1EED d\u1EE5ng \u0111i\u1EC7n tho\u1EA1i qu\u00E9t m\u00E3 QRcode d\u01B0\u1EDBi \u0111\u00E2y \u0111\u1EC3 t\u1EA3i b\u00E0i thi t\u1EF1 lu\u1EADn l\u00EAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 50)(15, "p", 48)(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "C\u00E1ch 2:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " V\u00E0o tr\u00ECnh duy\u1EC7t b\u1EB1ng \u0111i\u1EC7n tho\u1EA1i. Truy c\u1EADp \u0111\u01B0\u1EDDng d\u1EABn sau \u0111\u1EC3 t\u1EA3i b\u00E0i thi t\u1EF1 lu\u1EADn l\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p", 51)(20, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UploadImageComponent_div_0_div_10_Template_mat_icon_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r28.clickCopyLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r6.urlUploadImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r6.copylinkToClipboard(ctx_r6.urlUploadImage));
} }
function UploadImageComponent_div_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UploadImageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", null, 2)(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UploadImageComponent_div_0_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r30.saveFileConf(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-card", 4)(5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, UploadImageComponent_div_0_div_6_Template, 6, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, UploadImageComponent_div_0_div_7_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, UploadImageComponent_div_0_div_8_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, UploadImageComponent_div_0_div_9_Template, 13, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, UploadImageComponent_div_0_div_10_Template, 24, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 10)(12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UploadImageComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r32.saveFileConf(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, UploadImageComponent_div_0_span_13_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " X\u00C1C NH\u1EACN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.convertObjToArray(ctx_r0.fileUploadQueue).length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.uploadFiles.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.data.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.statusObj.loading || ctx_r0.convertObjToArray(ctx_r0.fileUploadQueue).length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading);
} }
class UploadImageComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(fb, commonService, translate, myPdfService, apiUploadService, frontExamService, frontExamResultUploadService, homeworkExamService) {
        super(commonService);
        this.fb = fb;
        this.commonService = commonService;
        this.translate = translate;
        this.myPdfService = myPdfService;
        this.apiUploadService = apiUploadService;
        this.frontExamService = frontExamService;
        this.frontExamResultUploadService = frontExamResultUploadService;
        this.homeworkExamService = homeworkExamService;
        this.data = {};
        this.hashCode = '';
        this.isOnSelectFile = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.addFileMobile = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
        //region Model
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({});
        this.uploadFiles = [];
        this.files = [];
        this.timeCount = 0;
        this.isSubmit = false;
        this.isSuccess = false;
        this.onSelectFile = false;
        this.isCallFullScreenOnce = false;
        this.fileUploadQueue = {};
        this.uploadCount = 0;
        this.urlUploadImage = '';
        this.userAgent = '';
        this.cur_language = this.translate.currentLang;
        this.intervalGetInfoUpload = 0;
        this.isUploadedPdf = false;
        this.isOnSync = false;
        this.Tmploading = false;
        //region Logic
        this.uploadFile = (file, uploadCount) => {
            this.isSubmit = false;
            if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.isImage)(file.type) || (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.isVideo)(file.type) || (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.isAudio)(file.type) || (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.isPdfDocument)(file.type) || (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.isOfficeDocument)(file.type)) {
                (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.compressImage)(file).then((dataFile) => {
                    this.apiUploadService.uploadToCdnProgressForFrontendExam(dataFile).subscribe((cls) => {
                        var _a, _b;
                        if (cls.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.UploadProgress) {
                            if (cls.success == 1) {
                                delete this.fileUploadQueue[uploadCount];
                                if (!Array.isArray(this.uploadFiles)) {
                                    this.uploadFiles = [];
                                }
                                this.uploadFiles.push(Object.assign({}, cls.data));
                                this.stopStatusObj();
                                this.updateFileUploadMobile(false);
                            }
                            else {
                                this.stopStatusObj();
                                this.showErrorSnack('Không Upload được ảnh (Tên: ' + file.name + ')! Vui lòng thử lại sau! Lỗi:  [SPLIT_LANG]' + cls.message);
                                this.commonService.gaEvent('FrontExam_UploadError');
                            }
                        }
                        else {
                            var percent = Math.round((_a = cls.loaded) !== null && _a !== void 0 ? _a : 0 / ((_b = cls.total) !== null && _b !== void 0 ? _b : 1) * 100);
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
        };
        this.selectFile = (event) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let eventObj = event;
            let target = eventObj.target;
            let files = target.files;
            try {
                for (var key in files) {
                    if (key != 'length' && key != 'item') {
                        // Validate file item:
                        if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.isSupportTypeUpload)(files[key].type)) {
                            if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.getFileSizeMB)(files[key].size) <= 200) {
                                this.answerFile = files ? files[key] : this.answerFile;
                                // add assoc key values, this will be posts values
                                if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.isPdfDocument)(files[key].type)) {
                                    /** convert pdf to image and save */
                                    this.isUploadedPdf = true;
                                    this.initStatusObj();
                                    var file_imgs = yield this.myPdfService.getImageWithPdf(files[key]);
                                    this.answerFile = files ? files[key] : this.answerFile;
                                    this.uploadFilesFunc(file_imgs, this.uploadCount);
                                    this.uploadCount += 1;
                                }
                                else {
                                    if (this.answerFile) {
                                        this.isSuccess = false;
                                        this.initStatusObj();
                                        if ((0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.isVideo)(files[key].type)) {
                                            this.uploadFileVideo(this.answerFile, this.uploadCount);
                                        }
                                        else {
                                            this.uploadFile(this.answerFile, this.uploadCount);
                                        }
                                        this.uploadCount += 1;
                                    }
                                }
                            }
                            else {
                                this.showErrorSnack('File gặp lỗi: ' + files[key].name + '. Size: ' + (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.getFileSizeMB)(files[key].size) + ' MB. Vui lòng chọn file không quá 200 MB');
                            }
                        }
                        else {
                            this.showErrorSnack('File gặp lỗi: ' + files[key].name + '. Kiểu: ' + files[key].type + '. Vui lòng chọn tệp tin Ảnh, Video (chưa hỗ trợ .wmv), Audio hoặc File PDF');
                        }
                    }
                }
                event.target.setAttribute('value', '');
                this.goBackFullScreen();
                this.onSelectFile = false;
                this.isOnSelectFileEmit(false);
            }
            catch (err) {
                alert('Đã xảy ra lỗi:' + err);
                this.goBackFullScreen();
                this.onSelectFile = false;
                this.isOnSelectFileEmit(false);
            }
        });
        this.uploadFileVideo = (file, uploadCount) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.subscriptions.add(this.apiUploadService.uploadToVimeoProgress('front_exam', file, undefined).subscribe((cls) => {
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
                        if (!Array.isArray(this.uploadFiles)) {
                            this.uploadFiles = [];
                        }
                        this.addFileWithProsess(Object.assign(Object.assign({}, cls.data), { lastModified: file.lastModified }));
                        this.updateFileUploadMobile(false);
                    }
                    else {
                        this.stopStatusObj();
                        this.showErrorSnack('Không Upload được tệp tin! Vui lòng thử lại sau!');
                    }
                }
            }));
        });
        this.uploadFilesFunc = (files, uploadCount) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                yield (0,src_app_helpers_FileManagers__WEBPACK_IMPORTED_MODULE_1__.compressImage)(file).then((dataFile) => {
                    this.apiUploadService.uploadToCdnProgressForFrontendExam(dataFile).subscribe((cls) => {
                        if (cls.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.UploadProgress) {
                            if (cls.success == 1) {
                                delete this.fileUploadQueue[uploadCount];
                                if (!Array.isArray(this.uploadFiles)) {
                                    this.uploadFiles = [];
                                }
                                this.uploadFiles.push(Object.assign({}, cls.data));
                                if (i === files.length - 1) {
                                    this.updateFileUploadMobile(false).then(() => {
                                        this.successStatusObj();
                                        this.isUploadedPdf = false;
                                    });
                                }
                            }
                            else {
                                this.stopStatusObj();
                                this.showErrorSnack('Không Upload được tệp tin! Vui lòng thử lại sau!');
                            }
                        }
                    });
                });
            }
        });
        this.answerFile = null;
    }
    copylinkToClipboard(link) {
        return link;
    }
    clickCopyLink() {
        this.showSuccessSnack('Copy link thành công');
    }
    isOnSelectFileEmit(event) {
        this.isOnSelectFile.emit(event);
    }
    goBackFullScreen() {
        const elem = document.documentElement;
        let methodToBeInvoked = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.mozRequestFullscreen || elem.msRequestFullscreen;
        if (methodToBeInvoked) {
            if (!this.isCallFullScreenOnce && this.data.isMonitor) {
                methodToBeInvoked.call(elem);
                this.isCallFullScreenOnce = true;
            }
        }
    }
    saveFile() {
        var dataEmit = { isConfirm: true, uploadFiles: this.uploadFiles };
        this.closeDialog.emit(dataEmit);
    }
    saveFileConf() {
        if (this.statusObj.loading === true || this.convertObjToArray(this.fileUploadQueue).length > 0) {
            // không cho tắt popup lúc đang upload
            this.commonService.snackWarning('Đang đồng bộ bài làm tự luận lên hệ thống! Vui lòng đợi trong giây lát!', '');
        }
        else {
            this.saveFile();
        }
    }
    replaceRequestGetInfoUpload(firstSync) {
        var that = this;
        var firstSyncData = firstSync;
        this.intervalGetInfoUpload = window.setInterval(() => {
            if (that.isUploadedPdf === false) {
                that.frontExamResultUploadService.apiFrontExamResultUploadGetTmpUploadObjGet(that.hashCode)
                    .subscribe((response) => {
                    var _a, _b, _c, _d, _e, _f;
                    if (response.success == 1) {
                        var files = that.commonService.parseJson((_c = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.tmpObj) === null || _b === void 0 ? void 0 : _b.files) !== null && _c !== void 0 ? _c : '') != null ? that.commonService.parseJson((_f = (_e = (_d = response.data) === null || _d === void 0 ? void 0 : _d.tmpObj) === null || _e === void 0 ? void 0 : _e.files) !== null && _f !== void 0 ? _f : '') : new Array();
                        var isChange = false;
                        if (files.length != that.uploadFiles.length) {
                            isChange = true;
                        }
                        else if (files.length > 0) {
                            files.forEach((element) => {
                                if (that.uploadFiles.findIndex((item) => item.path == element.path) === -1) {
                                    isChange = true;
                                }
                            });
                        }
                        if (isChange === true) {
                            if (that.isOnSync == false || firstSyncData) {
                                that.addFileMobile.emit({ files, keepOpen: true });
                            }
                        }
                        if (firstSyncData) {
                            that.uploadFiles = files;
                            that.updateFileUploadMobile(true);
                            firstSyncData = false;
                        }
                        that.Tmploading = false;
                        that.stopStatusObj();
                    }
                    else {
                        that.showErrorSnack('Đồng bộ dữ liệu không thành công. Vui lòng ấn F5 hoặc tải lại trang!');
                        that.Tmploading = false;
                        that.stopStatusObj();
                    }
                });
            }
        }, 3 * 1000);
        // event google analytics
        this.commonService.gaEvent('FrontExam_GetTmpUploadObj');
    }
    updateFileUploadMobile(onlyTmpLoading) {
        return new Promise((resolve) => {
            this.initStatusObj();
            this.Tmploading = onlyTmpLoading !== null && onlyTmpLoading !== void 0 ? onlyTmpLoading : false;
            this.isOnSync = true;
            this.frontExamResultUploadService.apiFrontExamResultUploadUpdateImageToTmpPost({
                hashCode: this.hashCode,
                files: JSON.stringify(this.uploadFiles)
            })
                .subscribe((response) => {
                if (response.success == 1) {
                    this.stopStatusObj();
                    this.Tmploading = false;
                    this.isOnSync = false;
                    resolve(true);
                }
                else {
                    this.stopStatusObj();
                    this.Tmploading = false;
                }
            });
        });
    }
    openSelectFile() {
        var _a;
        if (!this.Tmploading) {
            this.isOnSelectFileEmit(true);
            this.isCallFullScreenOnce = false;
            this.onSelectFile = true;
            (_a = this.fileSelect) === null || _a === void 0 ? void 0 : _a.nativeElement.click();
        }
    }
    onFocus(event) {
        if (this.onSelectFile) {
            if (this.answerFile == null || this.uploadFiles.length == 0) {
                this.goBackFullScreen();
                this.isCallFullScreenOnce = false;
                this.onSelectFile = false;
                this.isOnSelectFileEmit(false);
            }
        }
    }
    addFileWithProsess(data) {
        if (data) {
            this.uploadFiles.push(data);
        }
        for (let index = 0; index < this.uploadFiles.length; index++) {
            /** Kiểm tra nếu chưa có lastModified thì bổ sung lastModified */
            if (!this.uploadFiles[index].lastModified) {
                this.uploadFiles[index].lastModified = new Date().getTime();
            }
            /** Kiểm tra đã có thumb chưa. nếu chưa thì set lại thumb */
            if (!this.uploadFiles[index].thumb) {
                this.uploadFiles[index].thumb = this.homeworkExamService.getThumbWithObj(this.uploadFiles[index]);
            }
        }
        this.uploadFiles.sort((a, b) => {
            var _a, _b;
            return ((_a = a.lastModified) !== null && _a !== void 0 ? _a : 0) - ((_b = b.lastModified) !== null && _b !== void 0 ? _b : 0);
        });
    }
    bindUrlToQrCode(hash) {
        var domain = location.protocol + '//' + location.host;
        var url = `${domain}/n/${hash}`;
        this.urlUploadImage = url;
        var qrcode = this.commonService.createObjectQrcode(url, 128, 128, 'url', false, 'qrcode_making');
    }
    onGlobalClick(event) {
        var _a;
        if (!((_a = this.customCard) === null || _a === void 0 ? void 0 : _a.nativeElement.contains(event.target))) {
            // clicked outside => close dropdown list
            this.closeDialog.emit(false);
        }
    }
    isVideo(type) {
        var filterType = /^(?:video)/i;
        return filterType.test(type);
    }
    //region Common utils
    convertObjToArray(obj) {
        var arrs = [];
        for (var key in obj) {
            arrs.push(obj[key]);
        }
        return arrs;
    }
    removeImg(url) {
        var find_file = this.uploadFiles.filter((file) => file.url !== url);
        this.uploadFiles = find_file;
        this.updateFileUploadMobile(true);
    }
    //region Angular lifecycle
    ngOnChanges() {
        if (this.data.files && this.data.files.length > 0) {
            this.uploadFiles = this.data.files;
        }
    }
    ngOnInit() {
        setTimeout(() => {
            if (!this.data.isMobile) {
                this.bindUrlToQrCode(this.hashCode);
            }
            this.initStatusObj();
            this.Tmploading = true;
            this.replaceRequestGetInfoUpload(true);
        }, 100);
        this.form = this.fb.group({
            file_data: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required)
        });
        if (this.data.files && this.data.files.length > 0) {
            this.uploadFiles = this.data.files;
        }
        if (this.data.isMobile) {
            this.userAgent = navigator.userAgent;
        }
        super.ngOnInit();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        if (this.intervalGetInfoUpload) {
            clearInterval(this.intervalGetInfoUpload);
        }
        super.ngDestroy();
    }
}
UploadImageComponent.ɵfac = function UploadImageComponent_Factory(t) { return new (t || UploadImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_MyPdfService__WEBPACK_IMPORTED_MODULE_3__.MyPdfService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_api_upload_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_5__.FrontExamService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_5__.FrontExamResultUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_homework_exam_service__WEBPACK_IMPORTED_MODULE_6__.HomeworkExamService)); };
UploadImageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: UploadImageComponent, selectors: [["app-upload-image"]], viewQuery: function UploadImageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.customCard = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.fileSelect = _t.first);
    } }, hostBindings: function UploadImageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function UploadImageComponent_focus_HostBindingHandler($event) { return ctx.onFocus($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"])("mousedown", function UploadImageComponent_mousedown_HostBindingHandler($event) { return ctx.onGlobalClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveDocument"]);
    } }, inputs: { data: "data", hashCode: "hashCode" }, outputs: { isOnSelectFile: "isOnSelectFile", closeDialog: "closeDialog", addFileMobile: "addFileMobile" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "uploadDialog", 4, "ngIf"], [1, "uploadDialog"], ["customCard", ""], [1, "bg-overbackground", 3, "click"], [1, "customCard"], ["class", "text-center m-4", 4, "ngIf"], ["class", "row ml-0 mr-0 mt-1 mb-1 pb-3 pt-3 attach-container", 4, "ngIf"], ["class", "row ml-0 mr-0 mt-1 mb-1 pb-3 pt-3 attach-container", "style", "padding-left: 15px;padding-right: 15px;", 4, "ngIf"], ["class", "upload-box ml-auto mr-auto text-center clickable p-3 no-select", 3, "click", 4, "ngIf"], ["class", "upload-qr-box", 4, "ngIf"], [1, "btn-conFirm", "mt-2", "text-center"], ["mat-raised-button", "", 1, "save_btn", 3, "disabled", "click"], [4, "ngIf"], [1, "text-center", "m-4"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], ["class", "h5", 4, "ngIf"], [1, "h5"], [1, "row", "ml-0", "mr-0", "mt-1", "mb-1", "pb-3", "pt-3", "attach-container"], ["class", "col-6 col-sm-6 col-md-4 col-xl-2 col-lg-2", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-6", "col-md-4", "col-xl-2", "col-lg-2"], [1, "h5", "truncate"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 3, "ngStyle"], [1, "row", "ml-0", "mr-0", "mt-1", "mb-1", "pb-3", "pt-3", "attach-container", 2, "padding-left", "15px", "padding-right", "15px"], ["class", "col-6 col-sm-6 col-md-4", "style", "border: 1px solid #e0e0e0;", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-6", "col-md-4", 2, "border", "1px solid #e0e0e0"], [4, "ngIf", "ngIfElse"], ["video", ""], ["target", "_blank", 1, "clickable", 2, "display", "flex", "margin-top", "3px", "font-size", "14px"], [2, "font-size", "20px", "vertical-align", "sub"], [1, "truncate", 2, "line-height", "1.6", "max-width", "75%", 3, "matTooltip"], ["class", "notify-badge", 3, "click", 4, "ngIf"], ["class", "notify-badge", 4, "ngIf"], [2, "width", "80%", 3, "src"], [1, "notify-badge", 3, "click"], [1, "notify-badge"], [2, "color", "rgb(26,188,0)"], [1, "upload-box", "ml-auto", "mr-auto", "text-center", "clickable", "p-3", "no-select", 3, "click"], ["id", "select-upload-file", 1, "align-self-center", "select", "clickable"], [3, "formGroup"], ["type", "file", "id", "file_select", "multiple", "", 1, "form-control", "d-none", 3, "change"], ["fileSelect", ""], [1, "upload-qr-box"], [2, "display", "flex", "justify-content", "center", "align-items", "center"], [2, "background", "#eeeeee", "margin-top", "-33px", "padding", "0 10px", "color", "#44beb5", "text-transform", "uppercase", "font-size", "16px"], [1, "mb-0", "pb-0", 2, "font-size", "14px", "text-align", "center", "color", "#ff0022d2"], [1, "upload-qr-box-item"], [1, "upload-qr-box-item-content"], [2, "font-size", "14px"], ["id", "qrcode_making", 1, "upload-qr-box-item-content-qr"], [1, "upload-qr-box-url"], [1, "upload-qr-box-url-link"], [2, "vertical-align", "middle"], ["matTooltip", "COPY LINK", 1, "clickable", 2, "vertical-align", "middle", "float", "right", "height", "20px", "font-size", "20px", 3, "cdkCopyToClipboard", "click"]], template: function UploadImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, UploadImageComponent_div_0_Template, 15, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.data.isShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__.CdkCopyToClipboard, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_7__.SafePipe], styles: [".uploadDialog[_ngcontent-%COMP%] {\n  width: 40%;\n  position: fixed;\n  z-index: 89;\n  right: 10px;\n  top: 10px;\n}\n\n.customCard[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, white 0%, #f2f2f2 0%, #e4e4e4 100%, white 100%);\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6e6e6;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);\n  height: 97vh;\n  overflow: auto;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.upload-box[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6e6e6;\n  border-radius: 5px;\n  background-color: #fff;\n  max-width: 70%;\n  margin-bottom: 1rem;\n}\n\n.notify-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3px;\n  top: 3px;\n  text-align: center;\n  color: #afafaf;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.attach-container[_ngcontent-%COMP%] {\n  margin: 16px !important;\n  background: #fff;\n  padding: 10px 0 0 0;\n  border-radius: 5px;\n  border: 1px solid #e8e8e8;\n  height: 200px;\n  overflow-y: auto;\n}\n\n.save_btn[_ngcontent-%COMP%] {\n  background: inherit;\n  background-color: #169bd5;\n  border: none;\n  border-radius: 5px;\n  box-shadow: none;\n  color: #fff;\n}\n\n@media (max-width: 1200px) {\n  .uploadDialog[_ngcontent-%COMP%] {\n    z-index: 1001;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    position: fixed;\n    width: 80%;\n    margin-left: auto;\n    border-radius: 5px;\n    margin-right: auto;\n    box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n  }\n}\n\n.upload-qr-box[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.upload-qr-box-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.upload-qr-box-item-content[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 10px;\n  width: 100%;\n}\n\n.upload-qr-box-item-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n}\n\n.upload-qr-box-item-content-qr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.upload-qr-box-url[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.upload-qr-box-url-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-align: center;\n  color: #42aba2;\n  font-size: larger;\n  background: white;\n  padding: 5px;\n  border-radius: 5px;\n}\n\n@media (max-width: 1200px) {\n  .bg-overbackground[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.bg-overbackground[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000000a3;\n}\n\n.no-select[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFDQTtFQUdJLG1GQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUdBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBS0o7O0FBSEE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsYUFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBR0EsZ0JBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkE7RUFDSTtJQUNJLGFBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGdDQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFHQSxnREFBQTtFQU9OO0FBQ0Y7O0FBSkE7RUFDSSxnQkFBQTtBQU1KOztBQUxJO0VBQ0ksYUFBQTtBQU9SOztBQU5RO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQVFaOztBQVBZO0VBQ0ksOEJBQUE7QUFTaEI7O0FBUFk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFTaEI7O0FBTEk7RUFDSSxnQkFBQTtBQU9SOztBQU5RO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUVo7O0FBSEE7RUFDSTtJQUNJLGFBQUE7RUFNTjtBQUNGOztBQUhBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQUtKOztBQUhBO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtFQUlBLGlCQUFBO0FBTUoiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkRGlhbG9nIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA4OTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG59XG4uY3VzdG9tQ2FyZCB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDAlLCByZ2JhKDI0MiwgMjQyLCAyNDIsIDEpIDAlLCByZ2JhKDIyOCwgMjI4LCAyMjgsIDEpIDEwMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDAlLCByZ2JhKDI0MiwgMjQyLCAyNDIsIDEpIDAlLCByZ2JhKDIyOCwgMjI4LCAyMjgsIDEpIDEwMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAwJSwgcmdiYSgyNDIsIDI0MiwgMjQyLCAxKSAwJSwgcmdiYSgyMjgsIDIyOCwgMjI4LCAxKSAxMDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjM0OTAxOTYwNzg0MzEzNyk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2IoMCAwIDAgLyAzNSUpO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYigwIDAgMCAvIDM1JSk7XG4gICAgaGVpZ2h0OiA5N3ZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLmZpbGUtaW5wdXQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi51cGxvYWQtYm94IHtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyMzAsIDIzMCwgMjMwLCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLm5vdGlmeS1iYWRnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDNweDtcbiAgICB0b3A6M3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjpyZ2IoMTc1LCAxNzUsIDE3NSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXR0YWNoLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgIC8vIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MDBweCk7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnNhdmVfYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDE1NSwgMjEzLCAxKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAudXBsb2FkRGlhbG9nIHtcbiAgICAgICAgei1pbmRleDogMTAwMTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgICB9XG59XG5cbi51cGxvYWQtcXItYm94IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICYtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICYtY29udGVudCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi1xciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLXVybCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICYtbGluayB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICM0MmFiYTI7XG4gICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmJnLW92ZXJiYWNrZ3JvdW5kIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5iZy1vdmVyYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhMztcbn1cbi5uby1zZWxlY3Qge1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyBcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyBcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAgIHVzZXItc2VsZWN0OiBub25lOyBcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 28111:
/*!********************************************************************************!*\
  !*** ./src/app/testbank_frontend/test-result-tracking/controller.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestFrontResultTrackingComponent": () => (/* binding */ TestFrontResultTrackingComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_auto_api_common_api_api_frontExamResult_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/auto_api/common_api/api/frontExamResult.service */ 67102);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/zipdata.service */ 2366);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/loading-effect/loading-effect.component */ 47691);
/* harmony import */ var _azota_ui_azt_test_result_tracking_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/azt-test-result-tracking/controller.component */ 73828);










function TestFrontResultTrackingComponent_azt_loading_effect_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "azt-loading-effect");
} }
function TestFrontResultTrackingComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "azt-test-result-tracking", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataResultObjs", ctx_r2.dataResultObjs)("dataScrollObjs", ctx_r2.dataScrollObjs);
} }
class TestFrontResultTrackingComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(activeRoute, frontExamResultService, commonService, zipdataService) {
        super(commonService);
        this.activeRoute = activeRoute;
        this.frontExamResultService = frontExamResultService;
        this.commonService = commonService;
        this.zipdataService = zipdataService;
        this.dataResultObjs = [];
        this.dataScrollObjs = [];
        this.back_link = '';
        this.examHasdId = '';
    }
    processData(trackDatas) {
        if (trackDatas) {
            for (var i = 0; i < trackDatas.length; i++) {
                if (trackDatas[i][0] != 'scroll') {
                    var curResultItem = {
                        index: trackDatas[i][0],
                        alpha: trackDatas[i][1],
                        key: trackDatas[i][2],
                        questionId: Number(trackDatas[i][3]),
                        second: Number(trackDatas[i][4])
                    };
                    this.dataResultObjs.push(curResultItem);
                }
                else {
                    var curScrollItem = {
                        scrollPos: Number(trackDatas[i][1]),
                        second: Number(trackDatas[i][2])
                    };
                    this.dataScrollObjs.push(curScrollItem);
                }
            }
        }
    }
    getData(resultId) {
        this.initStatusObj();
        this.frontExamResultService.apiFrontExamResultGetExamWithExamAnswerGet(this.examHasdId, resultId).subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (res.success == 1) {
                var trackDatas = this.castJsonToObj(this.zipdataService.decodeContentGzip((_c = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.resultTrack) === null || _b === void 0 ? void 0 : _b.trackData) !== null && _c !== void 0 ? _c : ''));
                if (trackDatas) {
                    this.processData(trackDatas);
                }
                this.back_link = '/admin/testbank/tested-list/' + (((_e = (_d = res === null || res === void 0 ? void 0 : res.data) === null || _d === void 0 ? void 0 : _d.examObj) === null || _e === void 0 ? void 0 : _e.categoryId) ? res.data.examObj.categoryId : 0) + '/' + ((_g = (_f = res === null || res === void 0 ? void 0 : res.data) === null || _f === void 0 ? void 0 : _f.examObj) === null || _g === void 0 ? void 0 : _g.id) + '/0';
                this.successStatusObj();
            }
            else {
                this.errorStatusObj((_h = res.message) !== null && _h !== void 0 ? _h : '', true);
            }
        });
    }
    ngOnInit() {
        var _a;
        this.commonService.translateMetaData({
            title: 'Chi tiết quá trình làm trắc nghiệm',
            description: 'Azota - Chi tiết quá trình làm trắc nghiệm',
            image: 'lang_cms_test_image',
        });
        let result_id = Number(this.activeRoute.snapshot.paramMap.get('result_id'));
        this.examHasdId = (_a = this.activeRoute.snapshot.paramMap.get('hash_id')) !== null && _a !== void 0 ? _a : '';
        this.getData(result_id);
        super.ngOnInit();
    }
}
TestFrontResultTrackingComponent.ɵfac = function TestFrontResultTrackingComponent_Factory(t) { return new (t || TestFrontResultTrackingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_auto_api_common_api_api_frontExamResult_service__WEBPACK_IMPORTED_MODULE_1__.FrontExamResultService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_zipdata_service__WEBPACK_IMPORTED_MODULE_3__.ZipdataService)); };
TestFrontResultTrackingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TestFrontResultTrackingComponent, selectors: [["app-test-front-result-tracking"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [[3, "headerTitle"], [4, "ngIf", "ngIfElse"], ["doneLoading", ""], [1, "container-fluid", "mt-3", "mb-5"], [3, "dataResultObjs", "dataScrollObjs"]], template: function TestFrontResultTrackingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "header-frontend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TestFrontResultTrackingComponent_azt_loading_effect_1_Template, 1, 0, "azt-loading-effect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TestFrontResultTrackingComponent_ng_template_2_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("headerTitle", "Qu\u00E1 tr\u00ECnh l\u00E0m b\u00E0i c\u1EE7a th\u00ED sinh");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.statusObj.loading)("ngIfElse", _r1);
    } }, directives: [_azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_4__.HeaderFrontendComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _azota_ui_loading_effect_loading_effect_component__WEBPACK_IMPORTED_MODULE_5__.AztLoadingEffectComponent, _azota_ui_azt_test_result_tracking_controller_component__WEBPACK_IMPORTED_MODULE_6__.AztTestResultTrackingComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 26757:
/*!*********************************************************************************!*\
  !*** ./src/app/testbank_frontend/utils/buy-exam-dialog/controller.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamPaymentComponent": () => (/* binding */ ExamPaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api_api_payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api/api/payment.service */ 63910);
/* harmony import */ var src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/redirect.service */ 42873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/pipes/common.pipe */ 1033);











function ExamPaymentComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " B\u1EA1n c\u1EA7n ph\u1EA3i \u0111\u0103ng k\u00FD t\u00E0i kho\u1EA3n \u0111\u1EC3 mua \u0111\u1EC1 thi. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExamPaymentComponent_div_0_ng_template_2_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r4.goToRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " \u0110\u0103ng k\u00FD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function ExamPaymentComponent_div_0_ng_template_3_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExamPaymentComponent_div_0_ng_template_3_div_8_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r7.goToAddMoreAzo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " N\u1EA1p th\u00EAm Azo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r6.hasErrorMessage), " ");
} }
function ExamPaymentComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " B\u1EA1n mu\u1ED1n mua B\u00E0i thi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 11)(6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ExamPaymentComponent_div_0_ng_template_3_div_8_Template, 6, 3, "div", 13);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.data.examObj == null ? null : ctx_r2.data.examObj.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Gi\u00E1: ", ctx_r2.data.examObj == null ? null : ctx_r2.data.examObj.price, " Azo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.hasErrorMessage != "");
} }
function ExamPaymentComponent_div_0_div_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ExamPaymentComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExamPaymentComponent_div_0_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r10.cancelPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " H\u1EE7y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExamPaymentComponent_div_0_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r12.confirmBuy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ExamPaymentComponent_div_0_div_4_span_4_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " X\u00E1c nh\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r3.statusObj.loading || ctx_r3.hasErrorMessage != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.statusObj.loading);
} }
function ExamPaymentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ExamPaymentComponent_div_0_ng_template_2_Template, 5, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ExamPaymentComponent_div_0_ng_template_3_Template, 9, 3, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ExamPaymentComponent_div_0_div_4_Template, 6, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.data.needLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.data.needLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.data.needLogin);
} }
class ExamPaymentComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, paymentService, redirectService) {
        super(commonService);
        this.commonService = commonService;
        this.paymentService = paymentService;
        this.redirectService = redirectService;
        this.data = { examObj: {}, needLogin: false, isShow: false };
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
        this.hasErrorMessage = '';
    }
    confirmBuy() {
        var _a;
        this.initStatusObj();
        this.subscriptions.add(this.paymentService.apiPaymentBuyExamByAzoGet((_a = this.data.examObj) === null || _a === void 0 ? void 0 : _a.hashId).subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.hasErrorMessage = '';
                this.successStatusObj();
                this.closeDialog.emit(true);
            }
            else {
                if (response.hasOwnProperty('message') && response.message) {
                    if (response.message == 'lang_core_doest_not_enough_azo') {
                        this.hasErrorMessage = response.message;
                        this.stopStatusObj();
                    }
                    else {
                        this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                    }
                }
            }
        }));
    }
    cancelPayment() {
        this.closeDialog.emit(false);
    }
    goToRegister() {
        this.redirectService.redirectRegisterForStudent();
    }
    goToAddMoreAzo() {
        this.commonService.gaEvent('payment_exam_detail_click_to_payment_pack');
        this.redirectService.redirectToBuyMoreAzo();
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        super.ngDestroy();
    }
}
ExamPaymentComponent.ɵfac = function ExamPaymentComponent_Factory(t) { return new (t || ExamPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api_api_payment_service__WEBPACK_IMPORTED_MODULE_2__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_3__.RedirectService)); };
ExamPaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ExamPaymentComponent, selectors: [["app-buy-exam"]], inputs: { data: "data" }, outputs: { closeDialog: "closeDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 4, "ngIf"], [1, "school-info_bg"], [1, "school-info", "p-4"], [3, "ngIf"], ["class", "d-flex float-right mt-3", 4, "ngIf"], [1, "text-center"], [1, "h5", "mb-2"], [1, "clickable", "h5", "text-info", 3, "click"], [1, "text-center", "mb-1"], [1, "h5", "mb-1", 2, "font-size", "14px"], [1, "h5", "mb-1", "text-info"], [1, "amount-zone", "text-center"], [1, "mb-0", "h4"], ["class", "text-center mt-2", 4, "ngIf"], [1, "text-center", "mt-2"], [1, "h6", "mb-1", 2, "font-size", "14px"], [1, "d-flex", "float-right", "mt-3"], ["mat-raised-button", "", 2, "margin-right", "15px", 3, "click"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "15px", 3, "disabled", "click"], [4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function ExamPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ExamPaymentComponent_div_0_Template, 5, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.isShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], pipes: [_core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  z-index: 1000;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(60, 60, 60, 0.5);\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  width: 400px;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n.amount-zone[_ngcontent-%COMP%] {\n  border: 1px dashed #ff0024;\n  padding: 15px;\n  border-radius: 3px;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 800px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 700px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 400px;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 300px;\n  }\n}\n\n@media only screen and (max-width: 290px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnREFBQTtBQUVKOztBQUFFO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGRTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQU1KO0FBQ0Y7O0FBSkU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQU1KO0FBQ0Y7O0FBSkU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQU1KO0FBQ0Y7O0FBSkU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQU1KO0FBQ0Y7O0FBSkU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQU1KO0FBQ0YiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nob29sLWluZm9fYmcge1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwLCAwLjUpO1xuICB9XG4gIC5zY2hvb2wtaW5mbyB7XG4gICAgei1pbmRleDogMTAwMTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gIH1cbiAgLnRydW5jYXRlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC5jbG9zZS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC04cHg7XG4gICAgcmlnaHQ6IC03cHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2RhZGFkYTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICAuYW1vdW50LXpvbmUge1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZmYwMDI0O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLnNjaG9vbC1pbmZvIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnNjaG9vbC1pbmZvIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgLnNjaG9vbC1pbmZvIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gICAgLnNjaG9vbC1pbmZvIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI5MHB4KSB7XG4gICAgLnNjaG9vbC1pbmZvIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIH1cbiAgfVxuICAiXX0= */"] });


/***/ }),

/***/ 73491:
/*!************************************************************************!*\
  !*** ./src/app/testbank_frontend/utils/footer/controller.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestbankFrontendFooterComponent": () => (/* binding */ TestbankFrontendFooterComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);



class TestbankFrontendFooterComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService) {
        super(commonService);
        this.commonService = commonService;
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
TestbankFrontendFooterComponent.ɵfac = function TestbankFrontendFooterComponent_Factory(t) { return new (t || TestbankFrontendFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
TestbankFrontendFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TestbankFrontendFooterComponent, selectors: [["testbank-frontend-footer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function TestbankFrontendFooterComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 20189:
/*!**********************************************************************************!*\
  !*** ./src/app/testbank_frontend/utils/took-exam-dialog/controller.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TookExamDialogComponent": () => (/* binding */ TookExamDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/firestore.service */ 86253);
/* harmony import */ var src_app_core_services_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/time.service */ 72491);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 76246);









function TookExamDialogComponent_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TookExamDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " B\u1EA1n \u0111ang thi tr\u00EAn m\u1ED9t Tab kh\u00E1c ho\u1EB7c kh\u00F4ng s\u1EED d\u1EE5ng hai hay nhi\u1EC1u thi\u1EBFt b\u1ECB khi thi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TookExamDialogComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.btnCloseDialog(ctx_r2.data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TookExamDialogComponent_div_0_span_7_Template, 3, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " K\u00EDch ho\u1EA1t ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading === true);
} }
class TookExamDialogComponent extends _core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, firestoreService, timeService) {
        super(commonService);
        this.commonService = commonService;
        this.firestoreService = firestoreService;
        this.timeService = timeService;
        this.data = { isShow: false, hashId: '' };
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.curMsecond = '0';
    }
    btnCloseDialog(event) {
        this.saveExamSession(false);
        this.closeDialog.emit(event);
    }
    saveExamSession(firstTime) {
        var _a;
        this.curMsecond = this.timeService.getCurrentMilisecond().toString();
        this.firestoreService.examSessions_write((_a = this.data.hashId) !== null && _a !== void 0 ? _a : '', { msecond: this.curMsecond }).subscribe((result) => {
            if (result.success == 1 && firstTime) {
                this.listenChange();
            }
        });
    }
    listenChange() {
        var _a;
        this.firestoreService.examSessions_subscribe((_a = this.data.hashId) !== null && _a !== void 0 ? _a : '').subscribe((result) => {
            var _a;
            if (result && result.success == 1) {
                if (((_a = result.data) === null || _a === void 0 ? void 0 : _a.msecond) != this.curMsecond) {
                    this.data.isShow = true;
                }
                else {
                    this.data.isShow = false;
                }
            }
        });
    }
    ngOnInit() {
        this.saveExamSession(true);
        super.ngOnInit();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        super.ngDestroy();
    }
}
TookExamDialogComponent.ɵfac = function TookExamDialogComponent_Factory(t) { return new (t || TookExamDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_time_service__WEBPACK_IMPORTED_MODULE_3__.TimeService)); };
TookExamDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TookExamDialogComponent, selectors: [["app-took-exam"]], inputs: { data: "data" }, outputs: { closeDialog: "closeDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "school-info_bg", 4, "ngIf"], [1, "school-info_bg"], [1, "school-info", "p-4"], [1, "text-center"], [2, "font-weight", "450", "font-size", "14px"], [1, "d-flex", "float-right", "mt-3"], ["mat-raised-button", "", "color", "primary", 1, "btn-primary", 2, "margin-right", "15px", 3, "disabled", "click"], [4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function TookExamDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TookExamDialogComponent_div_0_Template, 9, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.isShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], styles: [".school-info_bg[_ngcontent-%COMP%] {\n  z-index: 901;\n  width: 100%;\n  display: flex;\n  left: 0;\n  top: 0;\n  position: fixed;\n  height: 100%;\n  min-height: 100vh;\n  background: #eee;\n}\n\n.school-info[_ngcontent-%COMP%] {\n  z-index: 902;\n  top: 50%;\n  left: 50%;\n  min-width: 30%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.58);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 90%;\n  padding: 5px 0;\n  white-space: nowrap;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0e2399;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -7px;\n  padding: 5px 10px;\n  background: #dadada;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n@media only screen and (max-width: 1024px) {\n  .school-info[_ngcontent-%COMP%] {\n    width: 95%;\n    max-width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnREFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUdGOztBQURBO0VBQ0Usb0JBQUE7QUFJRjs7QUFIRTtFQUNFLG1CQUFBO0FBS0o7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUtGOztBQUZBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQUtGO0FBQ0YiLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nob29sLWluZm9fYmcge1xuICB6LWluZGV4OiA5MDE7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cbi5zY2hvb2wtaW5mbyB7XG4gIHotaW5kZXg6IDkwMjtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWluLXdpZHRoOiAzMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xufVxuLnRydW5jYXRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDVweCAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJ0bi1wcmltYXJ5e1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAmOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMwZTIzOTk7XG4gIH1cbn1cbi5jbG9zZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IC03cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGFkYWRhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5zY2hvb2wtaW5mbyB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXgtd2lkdGg6IDk1JTtcbiAgfVxufVxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_testbank_frontend_module_module_ts.js.map