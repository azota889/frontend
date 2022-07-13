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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);
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


/***/ }),

/***/ 81760:
/*!*********************************************************!*\
  !*** ./src/app/core/services/mobile.webview.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileWebviewService": () => (/* binding */ MobileWebviewService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.service */ 50690);
/* harmony import */ var _redirect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redirect.service */ 42873);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ 88386);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);






class MobileWebviewService {
    constructor(commonService, redirectService, userService, baseApiService) {
        this.commonService = commonService;
        this.redirectService = redirectService;
        this.userService = userService;
        this.baseApiService = baseApiService;
        this.webviewMessageSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
        this.webviewMessage = this.webviewMessageSource.asObservable();
        this.listenBroadCastChannel = undefined;
    }
    initBroadCastChannel() {
        if (typeof BroadcastChannel != 'undefined' && BroadcastChannel && this.listenBroadCastChannel == undefined) {
            this.listenBroadCastChannel = new BroadcastChannel('flutterToAngular');
            this._listenBroadChannel();
            this.sendReadyToReceivedMessage();
        }
    }
    // Process message received
    processMessageReceived(data) {
        // Parser string -> get type -> get data -> process data
        var dataObj = this.commonService.castJsonToObj(data);
        if (dataObj && dataObj.data) {
            switch (dataObj.type) {
                case 'REDIRECT':
                    // Redirect to router
                    var mainData = dataObj.data;
                    if (mainData.token) {
                        var userObj = this.userService.getUserObjFromJwtToken(mainData.token);
                        if (userObj != undefined) {
                            this.baseApiService.saveUserObj(userObj);
                        }
                    }
                    this.redirectService.redirectByUrl(mainData.path);
                    break;
            }
        }
    }
    // Send message
    sendExportExcelBase64(fileName, excelBase64) {
        var sendData = {
            type: 'EXPORT_EXCEL',
            status: 1,
            message: 'send_from_angular',
            data: { fileName, excelBase64 }
        };
        this._sendMessage(sendData);
    }
    sendReadyToReceivedMessage() {
        var sendData = {
            type: 'READY',
            status: 1,
            message: 'send_from_angular',
            data: {}
        };
        this._sendMessage(sendData);
    }
    sendComponentLoaded(name) {
        var sendData = {
            type: 'COMPONENT_LOADED',
            status: 1,
            message: 'send_from_angular:' + name,
            data: {}
        };
        this._sendMessage(sendData);
    }
    // Send to fluter
    _sendMessage(object) {
        if (typeof MessageInvoker != 'undefined' && MessageInvoker) {
            MessageInvoker.postMessage(JSON.stringify(object));
        }
    }
    _sendRawMessage(message) {
        if (typeof MessageInvoker != 'undefined' && MessageInvoker) {
            MessageInvoker.postMessage(message);
        }
    }
    // Listen fluter message
    _listenBroadChannel() {
        if (this.listenBroadCastChannel != undefined) {
            this.listenBroadCastChannel.onmessage = (ev) => {
                this._changeWebviewMessage(ev.data);
            };
        }
    }
    _changeWebviewMessage(message) {
        // this.processMessageReceived(message);
        this.webviewMessageSource.next(message);
    }
}
MobileWebviewService.ɵfac = function MobileWebviewService_Factory(t) { return new (t || MobileWebviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_redirect_service__WEBPACK_IMPORTED_MODULE_1__.RedirectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__.BaseApiService)); };
MobileWebviewService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: MobileWebviewService, factory: MobileWebviewService.ɵfac, providedIn: 'root' });


/***/ })

}]);