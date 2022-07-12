"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["common"],{

/***/ 45668:
/*!******************************************************!*\
  !*** ./src/app/core/auth_guards/auth.front.guard.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthFrontGuard": () => (/* binding */ AuthFrontGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var _services_redirect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/redirect.service */ 42873);



class AuthFrontGuard {
    constructor(baseApiService, redirectService) {
        this.baseApiService = baseApiService;
        this.redirectService = redirectService;
    }
    canActivate(next, state) {
        if (this.baseApiService.isLogin()) {
            return true;
        }
        else {
            this.redirectService.redirectLoginAnonymous(state.url);
            return false;
        }
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    canLoad(route) {
        const url = `/${route.path}`;
        if (this.baseApiService.isLogin()) {
            return true;
        }
        else {
            this.redirectService.redirectLoginByReturnUrl(url);
            return false;
        }
    }
}
AuthFrontGuard.ɵfac = function AuthFrontGuard_Factory(t) { return new (t || AuthFrontGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_redirect_service__WEBPACK_IMPORTED_MODULE_1__.RedirectService)); };
AuthFrontGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthFrontGuard, factory: AuthFrontGuard.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map