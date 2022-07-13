"use strict";
(self["webpackChunkBalacoClient"] = self["webpackChunkBalacoClient"] || []).push([["src_app_auth_module_module_ts"],{

/***/ 6274:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/fire/fesm2015/angular-fire-app-check.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppCheck": () => (/* binding */ AppCheck),
/* harmony export */   "AppCheckInstances": () => (/* binding */ AppCheckInstances),
/* harmony export */   "AppCheckModule": () => (/* binding */ AppCheckModule),
/* harmony export */   "CustomProvider": () => (/* reexport safe */ firebase_app_check__WEBPACK_IMPORTED_MODULE_1__.CustomProvider),
/* harmony export */   "ReCaptchaEnterpriseProvider": () => (/* reexport safe */ firebase_app_check__WEBPACK_IMPORTED_MODULE_1__.ReCaptchaEnterpriseProvider),
/* harmony export */   "ReCaptchaV3Provider": () => (/* reexport safe */ firebase_app_check__WEBPACK_IMPORTED_MODULE_1__.ReCaptchaV3Provider),
/* harmony export */   "appCheckInstance$": () => (/* binding */ appCheckInstance$),
/* harmony export */   "getToken": () => (/* binding */ getToken),
/* harmony export */   "initializeAppCheck": () => (/* binding */ initializeAppCheck),
/* harmony export */   "onTokenChanged": () => (/* binding */ onTokenChanged),
/* harmony export */   "provideAppCheck": () => (/* binding */ provideAppCheck),
/* harmony export */   "setTokenAutoRefreshEnabled": () => (/* binding */ setTokenAutoRefreshEnabled)
/* harmony export */ });
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ 19626);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 98723);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 63527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 21406);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 56535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/app */ 43692);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 15867);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var firebase_app_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app-check */ 74766);










const APP_CHECK_PROVIDER_NAME = 'app-check';

class AppCheck {
  constructor(appCheck) {
    return appCheck;
  }

}

class AppCheckInstances {
  constructor() {
    return (0,_angular_fire__WEBPACK_IMPORTED_MODULE_2__["ɵgetAllInstancesOf"])(APP_CHECK_PROVIDER_NAME);
  }

}

const appCheckInstance$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(0, 300).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.concatMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)((0,_angular_fire__WEBPACK_IMPORTED_MODULE_2__["ɵgetAllInstancesOf"])(APP_CHECK_PROVIDER_NAME))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinct)());
const PROVIDED_APP_CHECK_INSTANCES = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.InjectionToken('angularfire2.app-check-instances');
const APP_CHECK_NAMESPACE_SYMBOL = Symbol('angularfire2.app-check.namespace');

function defaultAppCheckInstanceFactory(provided, defaultApp) {
  const defaultAppCheck = (0,_angular_fire__WEBPACK_IMPORTED_MODULE_2__["ɵgetDefaultInstanceOf"])(APP_CHECK_PROVIDER_NAME, provided, defaultApp);
  return defaultAppCheck && new AppCheck(defaultAppCheck);
}

const LOCALHOSTS = ['localhost', '0.0.0.0', '127.0.0.1'];
const isLocalhost = typeof window !== 'undefined' && LOCALHOSTS.includes(window.location.hostname);

function appCheckInstanceFactory(fn) {
  // tslint:disable-next-line:ban-types
  return (zone, injector, platformId) => {
    var _a; // Node should use admin token provider, browser devmode and localhost should use debug token


    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformServer)(platformId) && ((0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.isDevMode)() || isLocalhost)) {
      (_a = globalThis.FIREBASE_APPCHECK_DEBUG_TOKEN) !== null && _a !== void 0 ? _a : globalThis.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }

    const appCheck = zone.runOutsideAngular(() => fn(injector));
    return new AppCheck(appCheck);
  };
}

const APP_CHECK_INSTANCES_PROVIDER = {
  provide: AppCheckInstances,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional(), PROVIDED_APP_CHECK_INSTANCES]]
};
const DEFAULT_APP_CHECK_INSTANCE_PROVIDER = {
  provide: AppCheck,
  useFactory: defaultAppCheckInstanceFactory,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional(), PROVIDED_APP_CHECK_INSTANCES], _angular_fire_app__WEBPACK_IMPORTED_MODULE_9__.FirebaseApp, _angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID]
};

class AppCheckModule {
  constructor() {
    (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)('angularfire', _angular_fire__WEBPACK_IMPORTED_MODULE_2__.VERSION.full, 'app-check');
  }

}

AppCheckModule.ɵfac = function AppCheckModule_Factory(t) {
  return new (t || AppCheckModule)();
};

AppCheckModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppCheckModule
});
AppCheckModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [DEFAULT_APP_CHECK_INSTANCE_PROVIDER, APP_CHECK_INSTANCES_PROVIDER]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AppCheckModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      providers: [DEFAULT_APP_CHECK_INSTANCE_PROVIDER, APP_CHECK_INSTANCES_PROVIDER]
    }]
  }], function () {
    return [];
  }, null);
})();

function provideAppCheck(fn, ...deps) {
  return {
    ngModule: AppCheckModule,
    providers: [{
      provide: PROVIDED_APP_CHECK_INSTANCES,
      useFactory: appCheckInstanceFactory(fn),
      multi: true,
      deps: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector, _angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID, _angular_fire__WEBPACK_IMPORTED_MODULE_2__["ɵAngularFireSchedulers"], _angular_fire_app__WEBPACK_IMPORTED_MODULE_9__.FirebaseApps, ...deps]
    }]
  };
} // DO NOT MODIFY, this file is autogenerated by tools/build.ts


const getToken = (0,_angular_fire__WEBPACK_IMPORTED_MODULE_2__["ɵzoneWrap"])(firebase_app_check__WEBPACK_IMPORTED_MODULE_1__.getToken, true);
const initializeAppCheck = (0,_angular_fire__WEBPACK_IMPORTED_MODULE_2__["ɵzoneWrap"])(firebase_app_check__WEBPACK_IMPORTED_MODULE_1__.initializeAppCheck, true);
const onTokenChanged = (0,_angular_fire__WEBPACK_IMPORTED_MODULE_2__["ɵzoneWrap"])(firebase_app_check__WEBPACK_IMPORTED_MODULE_1__.onTokenChanged, true);
const setTokenAutoRefreshEnabled = (0,_angular_fire__WEBPACK_IMPORTED_MODULE_2__["ɵzoneWrap"])(firebase_app_check__WEBPACK_IMPORTED_MODULE_1__.setTokenAutoRefreshEnabled, true);
/**
 * Generated bundle index. Do not edit.
 */

 //# sourceMappingURL=angular-fire-app-check.js.map

/***/ }),

/***/ 43692:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/fire/fesm2015/angular-fire-app.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseApp": () => (/* binding */ FirebaseApp),
/* harmony export */   "FirebaseAppModule": () => (/* binding */ FirebaseAppModule),
/* harmony export */   "FirebaseApps": () => (/* binding */ FirebaseApps),
/* harmony export */   "FirebaseError": () => (/* reexport safe */ firebase_app__WEBPACK_IMPORTED_MODULE_0__.FirebaseError),
/* harmony export */   "SDK_VERSION": () => (/* reexport safe */ firebase_app__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION),
/* harmony export */   "_DEFAULT_ENTRY_NAME": () => (/* reexport safe */ firebase_app__WEBPACK_IMPORTED_MODULE_0__._DEFAULT_ENTRY_NAME),
/* harmony export */   "_addComponent": () => (/* reexport safe */ firebase_app__WEBPACK_IMPORTED_MODULE_0__._addComponent),
/* harmony export */   "_addOrOverwriteComponent": () => (/* reexport safe */ firebase_app__WEBPACK_IMPORTED_MODULE_0__._addOrOverwriteComponent),
/* harmony export */   "_apps": () => (/* reexport safe */ firebase_app__WEBPACK_IMPORTED_MODULE_0__._apps),
/* harmony export */   "_clearComponents": () => (/* reexport safe */ firebase_app__WEBPACK_IMPORTED_MODULE_0__._clearComponents),
/* harmony export */   "_components": () => (/* reexport safe */ firebase_app__WEBPACK_IMPORTED_MODULE_0__._components),
/* harmony export */   "_getProvider": () => (/* reexport safe */ firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider),
/* harmony export */   "_registerComponent": () => (/* reexport safe */ firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent),
/* harmony export */   "_removeServiceInstance": () => (/* reexport safe */ firebase_app__WEBPACK_IMPORTED_MODULE_0__._removeServiceInstance),
/* harmony export */   "deleteApp": () => (/* binding */ deleteApp),
/* harmony export */   "firebaseApp$": () => (/* binding */ firebaseApp$),
/* harmony export */   "getApp": () => (/* binding */ getApp),
/* harmony export */   "getApps": () => (/* binding */ getApps),
/* harmony export */   "initializeApp": () => (/* binding */ initializeApp),
/* harmony export */   "onLog": () => (/* binding */ onLog),
/* harmony export */   "provideFirebaseApp": () => (/* binding */ provideFirebaseApp),
/* harmony export */   "registerVersion": () => (/* binding */ registerVersion),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 15867);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 98723);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 63527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 21406);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 56535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ 19626);








class FirebaseApp {
  constructor(app) {
    return app;
  }

}

class FirebaseApps {
  constructor() {
    return (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)();
  }

}

const firebaseApp$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(0, 300).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinct)());

function defaultFirebaseAppFactory(provided) {
  // Use the provided app, if there is only one, otherwise fetch the default app
  if (provided && provided.length === 1) {
    return provided[0];
  }

  return new FirebaseApp((0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)());
} // With FIREBASE_APPS I wanted to capture the default app instance, if it is initialized by
// the reserved URL; ɵPROVIDED_FIREBASE_APPS is not for public consumption and serves to ensure that all
// provideFirebaseApp(...) calls are satisfied before FirebaseApp$ or FirebaseApp is resolved


const PROVIDED_FIREBASE_APPS = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('angularfire2._apps'); // Injecting FirebaseApp will now only inject the default Firebase App
// this allows allows beginners to import /__/firebase/init.js to auto initialize Firebase App
// from the reserved URL.

const DEFAULT_FIREBASE_APP_PROVIDER = {
  provide: FirebaseApp,
  useFactory: defaultFirebaseAppFactory,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional(), PROVIDED_FIREBASE_APPS]]
};
const FIREBASE_APPS_PROVIDER = {
  provide: FirebaseApps,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional(), PROVIDED_FIREBASE_APPS]]
};

function firebaseAppFactory(fn) {
  return (zone, injector) => {
    const app = zone.runOutsideAngular(() => fn(injector));
    return new FirebaseApp(app);
  };
}

class FirebaseAppModule {
  // tslint:disable-next-line:ban-types
  constructor(platformId) {
    (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)('angularfire', _angular_fire__WEBPACK_IMPORTED_MODULE_6__.VERSION.full, 'core');
    (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)('angularfire', _angular_fire__WEBPACK_IMPORTED_MODULE_6__.VERSION.full, 'app');
    (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)('angular', _angular_core__WEBPACK_IMPORTED_MODULE_5__.VERSION.full, platformId.toString());
  }

}

FirebaseAppModule.ɵfac = function FirebaseAppModule_Factory(t) {
  return new (t || FirebaseAppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID));
};

FirebaseAppModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: FirebaseAppModule
});
FirebaseAppModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [DEFAULT_FIREBASE_APP_PROVIDER, FIREBASE_APPS_PROVIDER]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](FirebaseAppModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule,
    args: [{
      providers: [DEFAULT_FIREBASE_APP_PROVIDER, FIREBASE_APPS_PROVIDER]
    }]
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID]
      }]
    }];
  }, null);
})(); // Calling initializeApp({ ... }, 'name') multiple times will add more FirebaseApps into the FIREBASE_APPS
// injection scope. This allows developers to more easily work with multiple Firebase Applications. Downside
// is that DI for app name and options doesn't really make sense anymore.


function provideFirebaseApp(fn, ...deps) {
  return {
    ngModule: FirebaseAppModule,
    providers: [{
      provide: PROVIDED_FIREBASE_APPS,
      useFactory: firebaseAppFactory(fn),
      multi: true,
      deps: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector, _angular_fire__WEBPACK_IMPORTED_MODULE_6__["ɵAngularFireSchedulers"], ...deps]
    }]
  };
} // DO NOT MODIFY, this file is autogenerated by tools/build.ts


const deleteApp = (0,_angular_fire__WEBPACK_IMPORTED_MODULE_6__["ɵzoneWrap"])(firebase_app__WEBPACK_IMPORTED_MODULE_0__.deleteApp, true);
const getApp = (0,_angular_fire__WEBPACK_IMPORTED_MODULE_6__["ɵzoneWrap"])(firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp, true);
const getApps = (0,_angular_fire__WEBPACK_IMPORTED_MODULE_6__["ɵzoneWrap"])(firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps, true);
const initializeApp = (0,_angular_fire__WEBPACK_IMPORTED_MODULE_6__["ɵzoneWrap"])(firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp, true);
const onLog = (0,_angular_fire__WEBPACK_IMPORTED_MODULE_6__["ɵzoneWrap"])(firebase_app__WEBPACK_IMPORTED_MODULE_0__.onLog, true);
const registerVersion = (0,_angular_fire__WEBPACK_IMPORTED_MODULE_6__["ɵzoneWrap"])(firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion, true);
const setLogLevel = (0,_angular_fire__WEBPACK_IMPORTED_MODULE_6__["ɵzoneWrap"])(firebase_app__WEBPACK_IMPORTED_MODULE_0__.setLogLevel, true);
/**
 * Generated bundle index. Do not edit.
 */

 //# sourceMappingURL=angular-fire-app.js.map

/***/ }),

/***/ 20948:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/fire/fesm2015/angular-fire-compat-auth.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularFireAuth": () => (/* binding */ AngularFireAuth),
/* harmony export */   "AngularFireAuthModule": () => (/* binding */ AngularFireAuthModule),
/* harmony export */   "LANGUAGE_CODE": () => (/* binding */ LANGUAGE_CODE),
/* harmony export */   "PERSISTENCE": () => (/* binding */ PERSISTENCE),
/* harmony export */   "SETTINGS": () => (/* binding */ SETTINGS),
/* harmony export */   "TENANT_ID": () => (/* binding */ TENANT_ID),
/* harmony export */   "USE_DEVICE_LANGUAGE": () => (/* binding */ USE_DEVICE_LANGUAGE),
/* harmony export */   "USE_EMULATOR": () => (/* binding */ USE_EMULATOR),
/* harmony export */   "ɵauthFactory": () => (/* binding */ ɵauthFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 21086);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 57451);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 63527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 36787);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 57770);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 87545);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5154);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 87224);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 12888);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 92198);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ 19626);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat */ 12011);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_fire_app_check__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/app-check */ 6274);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 70127);









 // DO NOT MODIFY, this file is autogenerated by tools/build.ts
// Export a null object with the same keys as firebase/compat/auth, so Proxy can work with proxy-polyfill in Internet Explorer

const proxyPolyfillCompat = {
  name: null,
  config: null,
  emulatorConfig: null,
  app: null,
  applyActionCode: null,
  checkActionCode: null,
  confirmPasswordReset: null,
  createUserWithEmailAndPassword: null,
  currentUser: null,
  fetchSignInMethodsForEmail: null,
  isSignInWithEmailLink: null,
  getRedirectResult: null,
  languageCode: null,
  settings: null,
  onAuthStateChanged: null,
  onIdTokenChanged: null,
  sendSignInLinkToEmail: null,
  sendPasswordResetEmail: null,
  setPersistence: null,
  signInAndRetrieveDataWithCredential: null,
  signInAnonymously: null,
  signInWithCredential: null,
  signInWithCustomToken: null,
  signInWithEmailAndPassword: null,
  signInWithPhoneNumber: null,
  signInWithEmailLink: null,
  signInWithPopup: null,
  signInWithRedirect: null,
  signOut: null,
  tenantId: null,
  updateCurrentUser: null,
  useDeviceLanguage: null,
  useEmulator: null,
  verifyPasswordResetCode: null
};
const USE_EMULATOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('angularfire2.auth.use-emulator');
const SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('angularfire2.auth.settings');
const TENANT_ID = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('angularfire2.auth.tenant-id');
const LANGUAGE_CODE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('angularfire2.auth.langugage-code');
const USE_DEVICE_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('angularfire2.auth.use-device-language');
const PERSISTENCE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('angularfire.auth.persistence');

const ɵauthFactory = (app, zone, useEmulator, tenantId, languageCode, useDeviceLanguage, settings, persistence) => (0,_angular_fire_compat__WEBPACK_IMPORTED_MODULE_2__["ɵcacheInstance"])(`${app.name}.auth`, 'AngularFireAuth', app.name, () => {
  const auth = zone.runOutsideAngular(() => app.auth());

  if (useEmulator) {
    auth.useEmulator(...useEmulator);
  }

  if (tenantId) {
    auth.tenantId = tenantId;
  }

  auth.languageCode = languageCode;

  if (useDeviceLanguage) {
    auth.useDeviceLanguage();
  }

  if (settings) {
    for (const [k, v] of Object.entries(settings)) {
      auth.settings[k] = v;
    }
  }

  if (persistence) {
    auth.setPersistence(persistence);
  }

  return auth;
}, [useEmulator, tenantId, languageCode, useDeviceLanguage, settings, persistence]);

class AngularFireAuth {
  constructor(options, name, // tslint:disable-next-line:ban-types
  platformId, zone, schedulers, useEmulator, // can't use the tuple here
  settings, // can't use firebase.auth.AuthSettings here
  tenantId, languageCode, useDeviceLanguage, persistence, _appCheckInstances) {
    const logins = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    const auth = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(undefined).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.observeOn)(schedulers.outsideAngular), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => zone.runOutsideAngular(() => __webpack_require__.e(/*! import() */ "node_modules_firebase_compat_auth_dist_index_esm_js").then(__webpack_require__.bind(__webpack_require__, /*! firebase/compat/auth */ 70339)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => (0,_angular_fire_compat__WEBPACK_IMPORTED_MODULE_2__["ɵfirebaseAppFactory"])(options, zone, name)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(app => ɵauthFactory(app, zone, useEmulator, tenantId, languageCode, useDeviceLanguage, settings, persistence)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.shareReplay)({
      bufferSize: 1,
      refCount: false
    }));

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformServer)(platformId)) {
      this.authState = this.user = this.idToken = this.idTokenResult = this.credential = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
    } else {
      // HACK, as we're exporting auth.Auth, rather than auth, developers importing firebase.auth
      //       (e.g, `import { auth } from 'firebase/compat/app'`) are getting an undefined auth object unexpectedly
      //       as we're completely lazy. Let's eagerly load the Auth SDK here.
      //       There could potentially be race conditions still... but this greatly decreases the odds while
      //       we reevaluate the API.
      const _ = auth.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.first)()).subscribe();

      const redirectResult = auth.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(auth => auth.getRedirectResult().then(it => it, () => null)), _angular_fire__WEBPACK_IMPORTED_MODULE_11__.keepUnstableUntilFirst, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.shareReplay)({
        bufferSize: 1,
        refCount: false
      }));
      const authStateChanged = auth.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(auth => new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(sub => ({
        unsubscribe: zone.runOutsideAngular(() => auth.onAuthStateChanged(next => sub.next(next), err => sub.error(err), () => sub.complete()))
      }))));
      const idTokenChanged = auth.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(auth => new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(sub => ({
        unsubscribe: zone.runOutsideAngular(() => auth.onIdTokenChanged(next => sub.next(next), err => sub.error(err), () => sub.complete()))
      }))));
      this.authState = redirectResult.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMapTo)(authStateChanged), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.subscribeOn)(schedulers.outsideAngular), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.observeOn)(schedulers.insideAngular));
      this.user = redirectResult.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMapTo)(idTokenChanged), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.subscribeOn)(schedulers.outsideAngular), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.observeOn)(schedulers.insideAngular));
      this.idToken = this.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => user ? (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.from)(user.getIdToken()) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null)));
      this.idTokenResult = this.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => user ? (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.from)(user.getIdTokenResult()) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null)));
      this.credential = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(redirectResult, logins, // pipe in null authState to make credential zipable, just a weird devexp if
      // authState and user go null to still have a credential
      this.authState.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(it => !it))).pipe( // handle the { user: { } } when a user is already logged in, rather have null
      // TODO handle the type corcersion better
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(credential => (credential === null || credential === void 0 ? void 0 : credential.user) ? credential : null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.subscribeOn)(schedulers.outsideAngular), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.observeOn)(schedulers.insideAngular));
    }

    return (0,_angular_fire_compat__WEBPACK_IMPORTED_MODULE_2__["ɵlazySDKProxy"])(this, auth, zone, {
      spy: {
        apply: (name, _, val) => {
          // If they call a signIn or createUser function listen into the promise
          // this will give us the user credential, push onto the logins Subject
          // to be consumed in .credential
          if (name.startsWith('signIn') || name.startsWith('createUser')) {
            // TODO fix the types, the trouble is UserCredential has everything optional
            val.then(user => logins.next(user));
          }
        }
      }
    });
  }

}

AngularFireAuth.ɵfac = function AngularFireAuth_Factory(t) {
  return new (t || AngularFireAuth)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat__WEBPACK_IMPORTED_MODULE_2__.FIREBASE_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat__WEBPACK_IMPORTED_MODULE_2__.FIREBASE_APP_NAME, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_11__["ɵAngularFireSchedulers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](USE_EMULATOR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TENANT_ID, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LANGUAGE_CODE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](USE_DEVICE_LANGUAGE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](PERSISTENCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_app_check__WEBPACK_IMPORTED_MODULE_18__.AppCheckInstances, 8));
};

AngularFireAuth.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AngularFireAuth,
  factory: AngularFireAuth.ɵfac,
  providedIn: 'any'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngularFireAuth, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'any'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_fire_compat__WEBPACK_IMPORTED_MODULE_2__.FIREBASE_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_fire_compat__WEBPACK_IMPORTED_MODULE_2__.FIREBASE_APP_NAME]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: _angular_fire__WEBPACK_IMPORTED_MODULE_11__["ɵAngularFireSchedulers"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [USE_EMULATOR]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [SETTINGS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [TENANT_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [LANGUAGE_CODE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [USE_DEVICE_LANGUAGE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [PERSISTENCE]
      }]
    }, {
      type: _angular_fire_app_check__WEBPACK_IMPORTED_MODULE_18__.AppCheckInstances,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, null);
})();

(0,_angular_fire_compat__WEBPACK_IMPORTED_MODULE_2__["ɵapplyMixins"])(AngularFireAuth, [proxyPolyfillCompat]);

class AngularFireAuthModule {
  constructor() {
    firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].registerVersion('angularfire', _angular_fire__WEBPACK_IMPORTED_MODULE_11__.VERSION.full, 'auth-compat');
  }

}

AngularFireAuthModule.ɵfac = function AngularFireAuthModule_Factory(t) {
  return new (t || AngularFireAuthModule)();
};

AngularFireAuthModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AngularFireAuthModule
});
AngularFireAuthModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [AngularFireAuth]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngularFireAuthModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      providers: [AngularFireAuth]
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=angular-fire-compat-auth.js.map

/***/ }),

/***/ 12011:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/fire/fesm2015/angular-fire-compat.js ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularFireModule": () => (/* binding */ AngularFireModule),
/* harmony export */   "FIREBASE_APP_NAME": () => (/* binding */ FIREBASE_APP_NAME),
/* harmony export */   "FIREBASE_OPTIONS": () => (/* binding */ FIREBASE_OPTIONS),
/* harmony export */   "FirebaseApp": () => (/* binding */ FirebaseApp),
/* harmony export */   "ɵapplyMixins": () => (/* binding */ ɵapplyMixins),
/* harmony export */   "ɵcacheInstance": () => (/* binding */ ɵcacheInstance),
/* harmony export */   "ɵfirebaseAppFactory": () => (/* binding */ ɵfirebaseAppFactory),
/* harmony export */   "ɵlazySDKProxy": () => (/* binding */ ɵlazySDKProxy)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 70127);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ 19626);
/* module decorator */ module = __webpack_require__.hmd(module);



 // DEBUG quick debugger function for inline logging that typescript doesn't complain about
//       wrote it for debugging the ɵlazySDKProxy, commenting out for now; should consider exposing a
//       verbose mode for AngularFire in a future release that uses something like this in multiple places
//       usage: () => log('something') || returnValue
// const log = (...args: any[]): false => { console.log(...args); return false }
// The problem here are things like ngOnDestroy are missing, then triggering the service
// rather than dig too far; I'm capturing these as I go.

const noopFunctions = ['ngOnDestroy']; // INVESTIGATE should we make the Proxy revokable and do some cleanup?
//             right now it's fairly simple but I'm sure this will grow in complexity

const ɵlazySDKProxy = (klass, observable, zone, options = {}) => {
  return new Proxy(klass, {
    get: (_, name) => zone.runOutsideAngular(() => {
      var _a;

      if (klass[name]) {
        if ((_a = options === null || options === void 0 ? void 0 : options.spy) === null || _a === void 0 ? void 0 : _a.get) {
          options.spy.get(name, klass[name]);
        }

        return klass[name];
      }

      if (noopFunctions.indexOf(name) > -1) {
        return () => {};
      }

      const promise = observable.toPromise().then(mod => {
        const ret = mod && mod[name]; // TODO move to proper type guards

        if (typeof ret === 'function') {
          return ret.bind(mod);
        } else if (ret && ret.then) {
          return ret.then(res => zone.run(() => res));
        } else {
          return zone.run(() => ret);
        }
      }); // recurse the proxy

      return new Proxy(() => {}, {
        get: (_, name) => promise[name],
        // TODO handle callbacks as transparently as I can
        apply: (self, _, args) => promise.then(it => {
          var _a;

          const res = it && it(...args);

          if ((_a = options === null || options === void 0 ? void 0 : options.spy) === null || _a === void 0 ? void 0 : _a.apply) {
            options.spy.apply(name, args, res);
          }

          return res;
        })
      });
    })
  });
};

const ɵapplyMixins = (derivedCtor, constructors) => {
  constructors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype || baseCtor).forEach(name => {
      Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype || baseCtor, name));
    });
  });
};

class FirebaseApp {
  constructor(app) {
    return app;
  }

}

const FIREBASE_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('angularfire2.app.options');
const FIREBASE_APP_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('angularfire2.app.name');

function ɵfirebaseAppFactory(options, zone, nameOrConfig) {
  const name = typeof nameOrConfig === 'string' && nameOrConfig || '[DEFAULT]';
  const config = typeof nameOrConfig === 'object' && nameOrConfig || {};
  config.name = config.name || name; // Added any due to some inconsistency between @firebase/app and firebase types

  const existingApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].apps.filter(app => app && app.name === config.name)[0]; // We support FirebaseConfig, initializeApp's public type only accepts string; need to cast as any
  // Could be solved with https://github.com/firebase/firebase-js-sdk/pull/1206

  const app = existingApp || zone.runOutsideAngular(() => firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(options, config));

  try {
    if (JSON.stringify(options) !== JSON.stringify(app.options)) {
      const hmr = !!module.hot;
      log$1('error', `${app.name} Firebase App already initialized with different options${hmr ? ', you may need to reload as Firebase is not HMR aware.' : '.'}`);
    }
  } catch (e) {}

  return new FirebaseApp(app);
}

const log$1 = (level, ...args) => {
  if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)() && typeof console !== 'undefined') {
    console[level](...args);
  }
};

const FIREBASE_APP_PROVIDER = {
  provide: FirebaseApp,
  useFactory: ɵfirebaseAppFactory,
  deps: [FIREBASE_OPTIONS, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone, [new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional(), FIREBASE_APP_NAME]]
};

class AngularFireModule {
  // tslint:disable-next-line:ban-types
  constructor(platformId) {
    firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].registerVersion('angularfire', _angular_fire__WEBPACK_IMPORTED_MODULE_2__.VERSION.full, 'core');
    firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].registerVersion('angularfire', _angular_fire__WEBPACK_IMPORTED_MODULE_2__.VERSION.full, 'app-compat');
    firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].registerVersion('angular', _angular_core__WEBPACK_IMPORTED_MODULE_1__.VERSION.full, platformId.toString());
  }

  static initializeApp(options, nameOrConfig) {
    return {
      ngModule: AngularFireModule,
      providers: [{
        provide: FIREBASE_OPTIONS,
        useValue: options
      }, {
        provide: FIREBASE_APP_NAME,
        useValue: nameOrConfig
      }]
    };
  }

}

AngularFireModule.ɵfac = function AngularFireModule_Factory(t) {
  return new (t || AngularFireModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};

AngularFireModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AngularFireModule
});
AngularFireModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [FIREBASE_APP_PROVIDER]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngularFireModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      providers: [FIREBASE_APP_PROVIDER]
    }]
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, null);
})();

function ɵcacheInstance(cacheKey, moduleName, appName, fn, deps) {
  const [, instance, cachedDeps] = globalThis.ɵAngularfireInstanceCache.find(it => it[0] === cacheKey) || [];

  if (instance) {
    if (!matchDep(deps, cachedDeps)) {
      log('error', `${moduleName} was already initialized on the ${appName} Firebase App with different settings.${IS_HMR ? ' You may need to reload as Firebase is not HMR aware.' : ''}`);
      log('warn', {
        is: deps,
        was: cachedDeps
      });
    }

    return instance;
  } else {
    const newInstance = fn();
    globalThis.ɵAngularfireInstanceCache.push([cacheKey, newInstance, deps]);
    return newInstance;
  }
}

function matchDep(a, b) {
  try {
    return a.toString() === b.toString();
  } catch (_) {
    return a === b;
  }
}

const IS_HMR = !!module.hot;

const log = (level, ...args) => {
  if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)() && typeof console !== 'undefined') {
    console[level](...args);
  }
};

globalThis.ɵAngularfireInstanceCache || (globalThis.ɵAngularfireInstanceCache = []);
/**
 * Generated bundle index. Do not edit.
 */

 //# sourceMappingURL=angular-fire-compat.js.map

/***/ }),

/***/ 19626:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/fire/fesm2015/angular-fire.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "keepUnstableUntilFirst": () => (/* binding */ keepUnstableUntilFirst),
/* harmony export */   "observeInsideAngular": () => (/* binding */ observeInsideAngular),
/* harmony export */   "observeOutsideAngular": () => (/* binding */ observeOutsideAngular),
/* harmony export */   "ɵAngularFireSchedulers": () => (/* binding */ ɵAngularFireSchedulers),
/* harmony export */   "ɵZoneScheduler": () => (/* binding */ ɵZoneScheduler),
/* harmony export */   "ɵgetAllInstancesOf": () => (/* binding */ ɵgetAllInstancesOf),
/* harmony export */   "ɵgetDefaultInstanceOf": () => (/* binding */ ɵgetDefaultInstanceOf),
/* harmony export */   "ɵisAnalyticsSupportedFactory": () => (/* binding */ ɵisAnalyticsSupportedFactory),
/* harmony export */   "ɵisMessagingSupportedFactory": () => (/* binding */ ɵisMessagingSupportedFactory),
/* harmony export */   "ɵisRemoteConfigSupportedFactory": () => (/* binding */ ɵisRemoteConfigSupportedFactory),
/* harmony export */   "ɵkeepUnstableUntilFirstFactory": () => (/* binding */ ɵkeepUnstableUntilFirstFactory),
/* harmony export */   "ɵzoneWrap": () => (/* binding */ ɵzoneWrap)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 15867);
/* harmony import */ var firebase_remote_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/remote-config */ 47787);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/messaging */ 57663);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/analytics */ 37982);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 16546);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 20353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 57451);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2994);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 57770);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 12888);








const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.Version('7.4.1');
const isAnalyticsSupportedValueSymbol = '__angularfire_symbol__analyticsIsSupportedValue';
const isAnalyticsSupportedPromiseSymbol = '__angularfire_symbol__analyticsIsSupported';
const isRemoteConfigSupportedValueSymbol = '__angularfire_symbol__remoteConfigIsSupportedValue';
const isRemoteConfigSupportedPromiseSymbol = '__angularfire_symbol__remoteConfigIsSupported';
const isMessagingSupportedValueSymbol = '__angularfire_symbol__messagingIsSupportedValue';
const isMessagingSupportedPromiseSymbol = '__angularfire_symbol__messagingIsSupported';
globalThis[isAnalyticsSupportedPromiseSymbol] || (globalThis[isAnalyticsSupportedPromiseSymbol] = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_3__.isSupported)().then(it => globalThis[isAnalyticsSupportedValueSymbol] = it).catch(() => globalThis[isAnalyticsSupportedValueSymbol] = false));
globalThis[isMessagingSupportedPromiseSymbol] || (globalThis[isMessagingSupportedPromiseSymbol] = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_2__.isSupported)().then(it => globalThis[isMessagingSupportedValueSymbol] = it).catch(() => globalThis[isMessagingSupportedValueSymbol] = false));
globalThis[isRemoteConfigSupportedPromiseSymbol] || (globalThis[isRemoteConfigSupportedPromiseSymbol] = (0,firebase_remote_config__WEBPACK_IMPORTED_MODULE_1__.isSupported)().then(it => globalThis[isRemoteConfigSupportedValueSymbol] = it).catch(() => globalThis[isRemoteConfigSupportedValueSymbol] = false));

const isSupportedError = module => `The APP_INITIALIZER that is "making" isSupported() sync for the sake of convenient DI has not resolved in this
context. Rather than injecting ${module} in the constructor, first ensure that ${module} is supported by calling
\`await isSupported()\`, then retrieve the instance from the injector manually \`injector.get(${module})\`.`;

const ɵisMessagingSupportedFactory = {
  async: () => globalThis[isMessagingSupportedPromiseSymbol],
  sync: () => {
    const ret = globalThis[isMessagingSupportedValueSymbol];

    if (ret === undefined) {
      throw new Error(isSupportedError('Messaging'));
    }

    return ret;
  }
};
const ɵisRemoteConfigSupportedFactory = {
  async: () => globalThis[isRemoteConfigSupportedPromiseSymbol],
  sync: () => {
    const ret = globalThis[isRemoteConfigSupportedValueSymbol];

    if (ret === undefined) {
      throw new Error(isSupportedError('RemoteConfig'));
    }

    return ret;
  }
};
const ɵisAnalyticsSupportedFactory = {
  async: () => globalThis[isAnalyticsSupportedPromiseSymbol],
  sync: () => {
    const ret = globalThis[isAnalyticsSupportedValueSymbol];

    if (ret === undefined) {
      throw new Error(isSupportedError('Analytics'));
    }

    return ret;
  }
};

function ɵgetDefaultInstanceOf(identifier, provided, defaultApp) {
  if (provided) {
    // Was provide* only called once? If so grab that
    if (provided.length === 1) {
      return provided[0];
    }

    const providedUsingDefaultApp = provided.filter(it => it.app === defaultApp); // Was provide* only called once, using the default app? If so use that

    if (providedUsingDefaultApp.length === 1) {
      return providedUsingDefaultApp[0];
    }
  } // Grab the default instance from the defaultApp


  const defaultAppWithContainer = defaultApp;
  const provider = defaultAppWithContainer.container.getProvider(identifier);
  return provider.getImmediate({
    optional: true
  });
}

const ɵgetAllInstancesOf = (identifier, app) => {
  const apps = app ? [app] : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)();
  const instances = [];
  apps.forEach(app => {
    const provider = app.container.getProvider(identifier);
    provider.instances.forEach(instance => {
      if (!instances.includes(instance)) {
        instances.push(instance);
      }
    });
  });
  return instances;
};

function noop() {}
/**
 * Schedules tasks so that they are invoked inside the Zone that is passed in the constructor.
 */
// tslint:disable-next-line:class-name


class ɵZoneScheduler {
  constructor(zone, delegate = rxjs__WEBPACK_IMPORTED_MODULE_5__.queueScheduler) {
    this.zone = zone;
    this.delegate = delegate;
  }

  now() {
    return this.delegate.now();
  }

  schedule(work, delay, state) {
    const targetZone = this.zone; // Wrap the specified work function to make sure that if nested scheduling takes place the
    // work is executed in the correct zone

    const workInZone = function (state) {
      targetZone.runGuarded(() => {
        work.apply(this, [state]);
      });
    }; // Scheduling itself needs to be run in zone to ensure setInterval calls for async scheduling are done
    // inside the correct zone. This scheduler needs to schedule asynchronously always to ensure that
    // firebase emissions are never synchronous. Specifying a delay causes issues with the queueScheduler delegate.


    return this.delegate.schedule(workInZone, delay, state);
  }

}

class BlockUntilFirstOperator {
  constructor(zone) {
    this.zone = zone;
    this.task = null;
  }

  call(subscriber, source) {
    const unscheduleTask = this.unscheduleTask.bind(this);
    this.task = this.zone.run(() => Zone.current.scheduleMacroTask('firebaseZoneBlock', noop, {}, noop, noop));
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)({
      next: unscheduleTask,
      complete: unscheduleTask,
      error: unscheduleTask
    })).subscribe(subscriber).add(unscheduleTask);
  }

  unscheduleTask() {
    // maybe this is a race condition, invoke in a timeout
    // hold for 10ms while I try to figure out what is going on
    setTimeout(() => {
      if (this.task != null && this.task.state === 'scheduled') {
        this.task.invoke();
        this.task = null;
      }
    }, 10);
  }

} // tslint:disable-next-line:class-name


class ɵAngularFireSchedulers {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.outsideAngular = ngZone.runOutsideAngular(() => new ɵZoneScheduler(Zone.current));
    this.insideAngular = ngZone.run(() => new ɵZoneScheduler(Zone.current, rxjs__WEBPACK_IMPORTED_MODULE_7__.asyncScheduler));
    globalThis.ɵAngularFireScheduler || (globalThis.ɵAngularFireScheduler = this);
  }

}

ɵAngularFireSchedulers.ɵfac = function ɵAngularFireSchedulers_Factory(t) {
  return new (t || ɵAngularFireSchedulers)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
};

ɵAngularFireSchedulers.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ɵAngularFireSchedulers,
  factory: ɵAngularFireSchedulers.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ɵAngularFireSchedulers, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone
    }];
  }, null);
})();

function getSchedulers() {
  const schedulers = globalThis.ɵAngularFireScheduler;

  if (!schedulers) {
    throw new Error(`Either AngularFireModule has not been provided in your AppModule (this can be done manually or implictly using
provideFirebaseApp) or you're calling an AngularFire method outside of an NgModule (which is not supported).`);
  }

  return schedulers;
}

function runOutsideAngular(fn) {
  return getSchedulers().ngZone.runOutsideAngular(() => fn());
}

function run(fn) {
  return getSchedulers().ngZone.run(() => fn());
}

function observeOutsideAngular(obs$) {
  return obs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.observeOn)(getSchedulers().outsideAngular));
}

function observeInsideAngular(obs$) {
  return obs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.observeOn)(getSchedulers().insideAngular));
}

function keepUnstableUntilFirst(obs$) {
  const scheduler = getSchedulers();
  return ɵkeepUnstableUntilFirstFactory(getSchedulers())(obs$);
}
/**
 * Operator to block the zone until the first value has been emitted or the observable
 * has completed/errored. This is used to make sure that universal waits until the first
 * value from firebase but doesn't block the zone forever since the firebase subscription
 * is still alive.
 */


function ɵkeepUnstableUntilFirstFactory(schedulers) {
  return function keepUnstableUntilFirst(obs$) {
    obs$ = obs$.lift(new BlockUntilFirstOperator(schedulers.ngZone));
    return obs$.pipe( // Run the subscribe body outside of Angular (e.g. calling Firebase SDK to add a listener to a change event)
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.subscribeOn)(schedulers.outsideAngular), // Run operators inside the angular zone (e.g. side effects via tap())
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.observeOn)(schedulers.insideAngular) // INVESTIGATE https://github.com/angular/angularfire/pull/2315
    // share()
    );
  };
}

const zoneWrapFn = (it, macrotask) => {
  const _this = undefined; // function() is needed for the arguments object
  // tslint:disable-next-line:only-arrow-functions


  return function () {
    const _arguments = arguments;

    if (macrotask) {
      setTimeout(() => {
        if (macrotask.state === 'scheduled') {
          macrotask.invoke();
        }
      }, 10);
    }

    return run(() => it.apply(_this, _arguments));
  };
};

const ɵzoneWrap = (it, blockUntilFirst) => {
  // function() is needed for the arguments object
  // tslint:disable-next-line:only-arrow-functions
  return function () {
    let macrotask;
    const _arguments = arguments; // if this is a callback function, e.g, onSnapshot, we should create a microtask and invoke it
    // only once one of the callback functions is tripped.

    for (let i = 0; i < arguments.length; i++) {
      if (typeof _arguments[i] === 'function') {
        if (blockUntilFirst) {
          macrotask || (macrotask = run(() => Zone.current.scheduleMacroTask('firebaseZoneBlock', noop, {}, noop, noop)));
        } // TODO create a microtask to track callback functions


        _arguments[i] = zoneWrapFn(_arguments[i], macrotask);
      }
    }

    const ret = runOutsideAngular(() => it.apply(this, _arguments));

    if (!blockUntilFirst) {
      if (ret instanceof rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable) {
        const schedulers = getSchedulers();
        return ret.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.subscribeOn)(schedulers.outsideAngular), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.observeOn)(schedulers.insideAngular));
      } else {
        return run(() => ret);
      }
    }

    if (ret instanceof rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable) {
      return ret.pipe(keepUnstableUntilFirst);
    } else if (ret instanceof Promise) {
      return run(() => new Promise((resolve, reject) => ret.then(it => run(() => resolve(it)), reason => run(() => reject(reason)))));
    } else if (typeof ret === 'function' && macrotask) {
      // Handle unsubscribe
      // function() is needed for the arguments object
      // tslint:disable-next-line:only-arrow-functions
      return function () {
        setTimeout(() => {
          if (macrotask && macrotask.state === 'scheduled') {
            macrotask.invoke();
          }
        }, 10);
        return ret.apply(this, arguments);
      };
    } else {
      // TODO how do we handle storage uploads in Zone? and other stuff with cancel() etc?
      return run(() => ret);
    }
  };
};
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=angular-fire.js.map

/***/ }),

/***/ 74371:
/*!***********************************************************!*\
  !*** ./src/app/auth/change_email/controller.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeEmailComponent": () => (/* binding */ ChangeEmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_services_window_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/window.service */ 11877);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);












function ChangeEmailComponent_div_13_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Vui l\u00F2ng nh\u1EADp email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChangeEmailComponent_div_13_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Email ph\u1EA3i nh\u1EADp \u0111\u00FAng \u0111\u1ECBnh d\u1EA1ng! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChangeEmailComponent_div_13_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ChangeEmailComponent_div_13_div_10_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ChangeEmailComponent_div_13_div_10_div_2_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.form.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.form.controls.email.errors.email || ctx_r2.form.controls.email.errors.pattern);
} }
function ChangeEmailComponent_div_13_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26)(1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, ctx_r3.statusObj.errorMessage), "");
} }
function ChangeEmailComponent_div_13_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChangeEmailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "form", 14)(2, "div", 2)(3, "div", 15)(4, "div", 16)(5, "div", 17)(6, "span", 18)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "email_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ChangeEmailComponent_div_13_div_10_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ChangeEmailComponent_div_13_div_11_Template, 4, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 2)(13, "div", 15)(14, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChangeEmailComponent_div_13_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.confirmEmail()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ChangeEmailComponent_div_13_span_15_Template, 3, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Ti\u1EBFp t\u1EE5c ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 23)(18, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChangeEmailComponent_div_13_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.backToRedirect()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "B\u1ECF qua");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.email.errors && ctx_r0.form.controls["email"].dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.statusObj.loading || ctx_r0.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading);
} }
function ChangeEmailComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "div", 15)(3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " H\u1EC7 th\u1ED1ng \u0111\u00E3 g\u1EEDi email t\u1EDBi \u0111\u1ECBa ch\u1EC9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, ". Vui l\u00F2ng ki\u1EC3m tra email v\u00E0 \u1EA5n v\u00E0o \u0111\u01B0\u1EDDng link x\u00E1c nh\u1EADn \u0111\u1EC3 vi\u1EC7c \u0111\u1ED5i Email th\u00E0nh c\u00F4ng! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.oldEmail);
} }
class ChangeEmailComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseComponent {
    constructor(baseApiService, commonService, formBuilder, authService) {
        super(commonService);
        this.baseApiService = baseApiService;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({});
        this.step = 1;
        this.oldEmail = '';
    }
    ignoreRequest() {
        this.baseApiService.redirectLoginByRole('');
    }
    confirmEmail() {
        console.log('hllo');
        if (this.form.valid) {
            this.initStatusObj();
            let body = {
                newEmail: this.form.controls.email.value,
            };
            this.subscriptions.add(this.authService.apiAuthChangeEmailPost(body).subscribe((response) => {
                var _a, _b, _c;
                if (response.success == 1) {
                    this.oldEmail = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
                    this.successStatusObj();
                    this.step = 2;
                }
                else {
                    this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : '');
                }
            }));
        }
    }
    handleClickDashboard() {
        this.baseApiService.redirectLoginByRole('');
    }
    backToRedirect() {
        let returnLink = this.getMyQueryParam('return_url');
        if (returnLink) {
            this.myNavigation(returnLink);
        }
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)]),
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_auth_change_mail_title',
            description: 'lang_cms_auth_change_mail_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
}
ChangeEmailComponent.ɵfac = function ChangeEmailComponent_Factory(t) { return new (t || ChangeEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_4__.AuthService)); };
ChangeEmailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ChangeEmailComponent, selectors: [["app-confirm-account"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([src_app_core_services_window_service__WEBPACK_IMPORTED_MODULE_0__.WindowService]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 5, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [2, "margin-top", "4vh"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "text-center", "p-0"], ["alt", "logo", 2, "width", "180px", 3, "src"], [1, "p-0", "m-0"], [1, "card-body"], [4, "ngIf"], [1, "text-center", "mb-3"], [1, "text-normal", "clickable", 3, "click"], [3, "formGroup"], [1, "col-md-12"], [1, "input-group", "mb-3"], [1, "input-group-append"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "text", "placeholder", "Nh\u1EADp email m\u1EDBi", "name", "email", "formControlName", "email", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["mat-raised-button", "", 1, "btn-azt-primary", 2, "width", "100%", 3, "disabled", "click"], [1, "mt-3", "text-center"], [1, "clickable", 3, "click"], [1, "alert", "alert-danger"], [1, "form-group"], [1, "col-sm-12", "control-label", "text-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "text-center"]], template: function ChangeEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "convertCdn");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " \u0110\u1ED5i email m\u1EDBi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ChangeEmailComponent_div_13_Template, 20, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ChangeEmailComponent_div_14_Template, 8, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 12)(17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChangeEmailComponent_Template_a_click_17_listener() { return ctx.handleClickDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Quay l\u1EA1i m\u00E0n h\u00ECnh ch\u00EDnh");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 3, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.step == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading && ctx.step == 2);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.ConvertCdnPipe], styles: ["#recaptcha-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sms-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5a5a5a;\n  white-space: pre-line;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#verify_wrap[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#verify_wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_area[_ngcontent-%COMP%] {\n  transition: margin ease 0.5s;\n  \n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resend-code[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 13px;\n  color: #3C8DBC;\n  white-space: pre-line;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-right: 0;\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n  background-color: rgba(243, 244, 245, 0.1411764706) !important;\n}"] });


/***/ }),

/***/ 19936:
/*!**********************************************************!*\
  !*** ./src/app/auth/change_info/controller.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeInfoComponent": () => (/* binding */ ChangeInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ 70024);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 1729);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 67322);
/* harmony import */ var src_app_core_directives_CustomNgxDatetimeAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/directives/CustomNgxDatetimeAdapter */ 60703);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/validator/whitespace.validator */ 41303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/redirect.service */ 42873);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/user.service */ 88386);
/* harmony import */ var src_app_core_services_mobile_webview_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/mobile.webview.service */ 81760);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 98833);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ 79814);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);
























function ChangeInfoComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 13)(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 1, "lang_cms_common_loading"), "...");
} }
function ChangeInfoComponent_div_14_div_9_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Email ph\u1EA3i nh\u1EADp \u0111\u00FAng \u0111\u1ECBnh d\u1EA1ng! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ChangeInfoComponent_div_14_div_9_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChangeInfoComponent_div_14_div_9_div_8_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.getErrorType("email", "email") || ctx_r11.getErrorType("email", "pattern"));
} }
function ChangeInfoComponent_div_14_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "span", 19)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "email_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ChangeInfoComponent_div_14_div_9_div_8_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["email"].invalid && ctx_r2.form.controls["email"].dirty);
} }
function ChangeInfoComponent_div_14_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 43)(3, "div", 18)(4, "span", 19)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "email_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChangeInfoComponent_div_14_div_10_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.goToConfirmEmail()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Click v\u00E0o \u0111\u00E2y n\u1EBFu b\u1EA1n mu\u1ED1n \u0111\u1ED5i email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("disabled", true);
} }
function ChangeInfoComponent_div_14_div_11_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ch\u1EC9 g\u1ED3m c\u00E1c ch\u1EEF s\u1ED1 v\u00E0 d\u00E0i 10 k\u00FD t\u1EF1! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ChangeInfoComponent_div_14_div_11_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChangeInfoComponent_div_14_div_11_div_8_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.getErrorType("phone", "pattern") || ctx_r15.getErrorType("phone", "minlength") || ctx_r15.getErrorType("phone", "maxlength"));
} }
function ChangeInfoComponent_div_14_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 43)(3, "div", 18)(4, "span", 19)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "phone_enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ChangeInfoComponent_div_14_div_11_div_8_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.form.controls["phone"].invalid && (ctx_r4.form.controls["phone"].dirty || ctx_r4.form.controls["phone"].touched));
} }
function ChangeInfoComponent_div_14_div_12_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ch\u1EC9 g\u1ED3m c\u00E1c ch\u1EEF s\u1ED1 v\u00E0 d\u00E0i 10 k\u00FD t\u1EF1! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ChangeInfoComponent_div_14_div_12_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChangeInfoComponent_div_14_div_12_div_10_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r17.getErrorType("phone", "pattern") || ctx_r17.getErrorType("phone", "minlength") || ctx_r17.getErrorType("phone", "maxlength"));
} }
function ChangeInfoComponent_div_14_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 43)(3, "div", 18)(4, "span", 19)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "phone_enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChangeInfoComponent_div_14_div_12_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.goToConfirm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Click v\u00E0o \u0111\u00E2y n\u1EBFu b\u1EA1n mu\u1ED1n \u0111\u1ED5i s\u1ED1 \u0111i\u1EC7n tho\u1EA1i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, ChangeInfoComponent_div_14_div_12_div_10_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.form.controls["phone"].invalid && (ctx_r5.form.controls["phone"].dirty || ctx_r5.form.controls["phone"].touched));
} }
function ChangeInfoComponent_div_14_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " M\u1EADt kh\u1EA9u ph\u1EA3i d\u00E0i t\u1ED1i thi\u1EC3u l\u00E0 6! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ChangeInfoComponent_div_14_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChangeInfoComponent_div_14_div_21_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.getErrorType("password", "required") || ctx_r6.getErrorType("password", "minlength"));
} }
function ChangeInfoComponent_div_14_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ChangeInfoComponent_div_14_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15)(1, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, ctx_r9.statusObj.errorMessage), "");
} }
function ChangeInfoComponent_div_14_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ChangeInfoComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "div", 18)(5, "span", 19)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "person_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ChangeInfoComponent_div_14_div_9_Template, 9, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, ChangeInfoComponent_div_14_div_10_Template, 10, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, ChangeInfoComponent_div_14_div_11_Template, 9, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, ChangeInfoComponent_div_14_div_12_Template, 11, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 15)(14, "div", 16)(15, "div", 17)(16, "div", 18)(17, "span", 19)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "lock_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ChangeInfoComponent_div_14_div_21_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 15)(23, "div", 16)(24, "div", 24)(25, "mat-radio-group", 25)(26, "div", 26)(27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, " Gi\u1EDBi t\u00EDnh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 28)(30, "mat-radio-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Nam");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "mat-radio-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "N\u1EEF");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 15)(35, "div", 31)(36, "mat-form-field", 32)(37, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChangeInfoComponent_div_14_Template_input_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r7.open()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChangeInfoComponent_div_14_Template_button_click_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42); _r7.open(); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "ngx-mat-datetime-picker", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, ChangeInfoComponent_div_14_ng_template_43_Template, 2, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, ChangeInfoComponent_div_14_div_44_Template, 4, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 15)(46, "div", 37)(47, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChangeInfoComponent_div_14_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.form.invalid || ctx_r25.statusObj.loading || ctx_r25.changeInfo()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, ChangeInfoComponent_div_14_span_48_Template, 3, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "C\u1EADp nh\u1EADt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 39)(51, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChangeInfoComponent_div_14_Template_a_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.goBack()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "Quay l\u1EA1i trang ch\u1EE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.checkEnableChangeEmailOrPhone(ctx_r1.email, "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.checkEnableChangeEmailOrPhone(ctx_r1.email, "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.checkEnableChangeEmailOrPhone(ctx_r1.phone, "phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.checkEnableChangeEmailOrPhone(ctx_r1.phone, "phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["password"].invalid && (ctx_r1.form.controls["password"].dirty || ctx_r1.form.controls["password"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngxMatDatetimePicker", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hideTime", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.statusObj.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r1.form.invalid || ctx_r1.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.statusObj.loading);
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
    constructor(formBuilder, commonService, baseApiService, authService, redirectService, userService, datepipe, mobileWebviewService) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.authService = authService;
        this.redirectService = redirectService;
        this.userService = userService;
        this.datepipe = datepipe;
        this.mobileWebviewService = mobileWebviewService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormGroup({});
        this.startDate = new Date(1990, 1, 1);
        this.gender = 0;
        this.email = '';
        this.phone = '';
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
    goToConfirmEmail() {
        this.returnUrl = '/auth/change-info';
        var queryString = '?return_url=' + encodeURIComponent(this.returnUrl);
        this.commonService.myNavigationWithQueryString('/auth/change-email', queryString);
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
                password: form_object.password,
                phone: form_object.phone
            };
            this.initStatusObj();
            this.subscriptions.add(this.authService.apiAuthUpdateInfoPost(body).subscribe((response) => {
                var _a, _b, _c;
                if (response.success == 1) {
                    this.email = (_a = body.email) !== null && _a !== void 0 ? _a : '';
                    this.phone = (_b = body.phone) !== null && _b !== void 0 ? _b : '';
                    this.successStatusObj('Cập nhật thông tin thành công!', true);
                }
                else {
                    this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : 'Cập nhật thông tin không thành công!', true);
                }
            }));
        }
    }
    goBack() {
        this.baseApiService.redirectLoginByRole('');
    }
    getInfo() {
        var _a, _b, _c;
        var userObj = this.baseApiService.getUserObj();
        var birthDay = userObj.birthday ? (new Date(userObj.birthday)) : (new Date(1990, 1, 1));
        this.startDate = birthDay;
        this.gender = (_a = userObj.gender) !== null && _a !== void 0 ? _a : 0;
        this.email = (_b = userObj.email) !== null && _b !== void 0 ? _b : '';
        this.phone = (_c = userObj.phone) !== null && _c !== void 0 ? _c : '';
        this.form.patchValue({
            fullName: this.userService.isAnonymousName(userObj) ? '' : userObj.fullName,
            email: userObj.email ? userObj.email : '',
            phone: userObj.phone ? userObj.phone : '',
            gender: this.gender != 1 ? '0' : '1',
        });
        this.form.controls.birthday.setValue(birthDay);
    }
    checkEnableChangeEmailOrPhone(changeField, changeType) {
        if (changeType == 'email') {
            var regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!changeField || !changeField.match(regexEmail)) {
                return true;
            }
        }
        else if (changeType == 'phone') {
            if (!changeField || changeField.length > 15) {
                return true;
            }
        }
        return false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_2__.WhiteSpaceValidator.noWhiteSpace]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('^[0-9]{10}$')]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormControl(''),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormControl(''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(6)]),
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
        this.mobileWebviewService.sendComponentLoaded('offline_answer_list');
    }
}
ChangeInfoComponent.ɵfac = function ChangeInfoComponent_Factory(t) { return new (t || ChangeInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_6__.RedirectService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_mobile_webview_service__WEBPACK_IMPORTED_MODULE_8__.MobileWebviewService)); };
ChangeInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ChangeInfoComponent, selectors: [["app-change-info"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe,
            {
                provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_13__.NgxMatDateAdapter,
                useClass: src_app_core_directives_CustomNgxDatetimeAdapter__WEBPACK_IMPORTED_MODULE_0__.CustomNgxDatetimeAdapter,
                deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MAT_DATE_LOCALE, src_app_core_directives_CustomNgxDatetimeAdapter__WEBPACK_IMPORTED_MODULE_0__.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            },
            { provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_13__.NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
            { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'never' } }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 6, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "form-horizontal", 2, "margin-top", "4vh", 3, "formGroup"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "text-center", "p-0"], ["alt", "logo", 2, "width", "180px", 3, "src"], [1, "p-0", "m-0"], [1, "card-body"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "form-group"], [1, "col-sm-12"], [1, "input-group", "mb-3"], [1, "input-group-append"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "text", "placeholder", "H\u1ECD v\u00E0 t\u00EAn", "formControlName", "fullName", 1, "form-control"], ["class", "form-group", 4, "ngIf"], ["type", "password", "placeholder", "M\u1EADt kh\u1EA9u m\u1EDBi", "formControlName", "password", "autocomplete", "new-password", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "input-group", "input-custom"], ["formControlName", "gender", "color", "primary", 2, "width", "100%"], [1, "row", "fsz-16"], [1, "col-5"], [1, "col-7"], ["value", "1", 1, "col-6", "p-0"], ["value", "0"], [1, "col-sm-12", "studentBirthDay"], ["id", "birthday", 1, "myTimePicker", 2, "border", "1px solid #ced4da", "border-radius", "3px", "padding-top", "2px"], ["matInput", "", "placeholder", "Ng\u00E0y sinh", "formControlName", "birthday", "readonly", "", 1, "form-birthday", "bg-white", 3, "ngxMatDatetimePicker", "click"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [3, "hideTime"], ["birthDay", ""], [1, "col-sm-12", "text-center"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "text-center", "mt-3"], [1, "clickable", 3, "click"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control"], [1, "alert", "alert-danger"], [1, "input-group", "mb-1"], [1, "clickable", "text-info", 2, "font-size", "13px", "padding-left", "5px", 3, "click"], ["type", "text", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", "formControlName", "phone", 1, "form-control"], [1, "col-sm-12", "control-label", "text-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function ChangeInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "convertCdn");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "S\u1EEDa th\u00F4ng tin t\u00E0i kho\u1EA3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, ChangeInfoComponent_div_13_Template, 6, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, ChangeInfoComponent_div_14_Template, 53, 10, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 4, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioButton, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_13__.NgxMatDatetimePicker, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_13__.NgxMatDatetimeInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_9__.ConvertCdnPipe], styles: [".mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.28125em;\n}\n\n  .mat-form-field-appearance-legacy .mat-form-field-label {\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n}\n\n.fsz-16[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n\n.form-birthday[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem - 10px);\n  padding: 0.375rem 0.75rem;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n#birthday[_ngcontent-%COMP%]:focus, #birthday[_ngcontent-%COMP%]:active, #birthday[_ngcontent-%COMP%]:target, #birthday[_ngcontent-%COMP%]:visited, #birthday[_ngcontent-%COMP%]:focus-within, #birthday[_ngcontent-%COMP%]:focus-visible {\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.hover-cancel[_ngcontent-%COMP%]:hover {\n  background-color: rgb(235, 233, 233);\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: calc(1.5em + 0.75rem + 5px);\n}\n\n.input-custom[_ngcontent-%COMP%] {\n  border: 1px solid #e2e2e2;\n  border-radius: 3px;\n  padding-left: 12px;\n  padding-top: 10px;\n  padding-bottom: 8px;\n}\n\n  label {\n  margin-bottom: 0 !important;\n}\n\n  .mat-form-field-flex {\n  align-items: center !important;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-right: 0;\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n  background-color: rgba(243, 244, 245, 0.1411764706) !important;\n}"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
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

/***/ 27082:
/*!**********************************************************!*\
  !*** ./src/app/auth/choose-role/controller.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseRoleComponent": () => (/* binding */ ChooseRoleComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);







function ChooseRoleComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 16)(2, "div", 17)(3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, "lang_cms_common_loading"), "...");
} }
class ChooseRoleComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, authService, baseApiService) {
        super(commonService);
        this.commonService = commonService;
        this.authService = authService;
        this.baseApiService = baseApiService;
        this.backLink = '';
    }
    ngOnInit() {
        super.ngOnInit();
    }
    chooseRegisterStudent() {
        this.baseApiService.redirectLoginByRole('');
    }
    chooseRegisterTeacher() {
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
}
ChooseRoleComponent.ɵfac = function ChooseRoleComponent_Factory(t) { return new (t || ChooseRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__.BaseApiService)); };
ChooseRoleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ChooseRoleComponent, selectors: [["app-download-answer-sheet"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 7, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "row", "py-5"], [1, "col-sm-3"], [1, "col-sm-6"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "text-center", "p-0"], ["alt", "logo", 2, "width", "180px", 3, "src"], [1, "p-0", "m-0"], [1, "card-body"], [4, "ngIf"], [1, "row", 2, "justify-content", "space-around"], [1, "col-sm-4", "border-card", "mb-3", 3, "click"], [1, "df-logo"], [1, "fas", "fa-graduation-cap", "pb-3", 2, "font-size", "36px"], ["width", "36px", "height", "45px", 1, "mb-3", 3, "src"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"]], template: function ChooseRoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "convertCdn");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Ch\u1ECDn vai tr\u00F2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ChooseRoleComponent_div_12_Template, 6, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11)(14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChooseRoleComponent_Template_div_click_14_listener() { return ctx.chooseRegisterStudent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "T\u00F4i l\u00E0 h\u1ECDc sinh");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChooseRoleComponent_Template_div_click_19_listener() { return ctx.chooseRegisterTeacher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "convertCdn");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "T\u00F4i l\u00E0 gi\u00E1o vi\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 3, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 5, "azota_assets/images/teacher.png"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.ConvertCdnPipe], styles: [".select-style[_ngcontent-%COMP%] {\n  color: #868686 !important;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-right: 0;\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n  background-color: rgba(243, 244, 245, 0.1411764706) !important;\n}\n\n.select-style[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.select-style[_ngcontent-%COMP%]:hover {\n  color: #2361ae !important;\n}\n\n.select-style-active[_ngcontent-%COMP%] {\n  color: #2361ae !important;\n}\n\n.df-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.register--login[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n}\n\n.two-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 80%;\n  height: 100vh;\n  margin: auto;\n}\n\n.register-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  \n  flex-direction: column;\n  justify-content: center;\n}\n\n.btn-max-width[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  font-size: 1.5rem;\n}\n\n.responsive__text[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #2361ae !important;\n  border-color: #2361ae !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n  border-color: #2361ae !important;\n  background-color: #2361ae !important;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: rgb(11, 129, 142) !important;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  color: #2361ae !important;\n  border-color: #2361ae !important;\n  background-color: rgba(14, 172, 190, 0.15);\n}\n\n.btn-border-fix[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n}\n\n.border-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid hsla(0deg, 0%, 86.3%, 0.8);\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 12px;\n  align-items: center;\n  text-align: center;\n}\n\n.border-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.07), -10px -10px 20px hsla(0deg, 0%, 100%, 0.8);\n}\n\n.button-color[_ngcontent-%COMP%] {\n  background-color: #2361ae !important;\n  color: white !important;\n}"] });


/***/ }),

/***/ 58899:
/*!*******************************************************************!*\
  !*** ./src/app/auth/confirm-change-email/controller.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmChangeEmailComponent": () => (/* binding */ ConfirmChangeEmailComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_helpers/LocalStorageObjetc */ 3279);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);








class ConfirmChangeEmailComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, authService, baseApiService, localStorageObject) {
        super(commonService);
        this.commonService = commonService;
        this.authService = authService;
        this.baseApiService = baseApiService;
        this.localStorageObject = localStorageObject;
    }
    getData(token) {
        let body = {
            secret: token,
        };
        this.subscriptions.add(this.authService.apiAuthConfirmPassFromEmailPost(body).subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.showSuccessSnack('Đổi email thành công');
                this.getInfo();
            }
            else {
                this.errorStatusObj((_a = response.message) !== null && _a !== void 0 ? _a : '', true);
                this.myNavigation('/auth/login');
            }
        }));
    }
    getInfo() {
        this.initStatusObj();
        this.subscriptions.add(this.authService.apiAuthInfoGet().subscribe((response) => {
            var _a, _b;
            if (response.success == 1) {
                let userObj = (_a = response.data) !== null && _a !== void 0 ? _a : {};
                this.baseApiService.saveUserObj(userObj);
                this.successStatusObj();
                this.localStorageObject.clearAllCache();
                this.baseApiService.redirectLoginByRole('');
            }
            else {
                this.errorStatusObj((_b = response.message) !== null && _b !== void 0 ? _b : '');
            }
        }));
    }
    ignoreRequest() {
        this.baseApiService.redirectLoginByRole('');
    }
    confirmChangeEmail() {
        let token = this.commonService.getMyQueryParam('secret');
        if (token) {
            this.getData(token);
        }
        else {
            this.showErrorSnack('Vui lòng truy cập link được gửi đến email của bạn');
        }
    }
}
ConfirmChangeEmailComponent.ɵfac = function ConfirmChangeEmailComponent_Factory(t) { return new (t || ConfirmChangeEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_3__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_4__.LocalStorageObjetct)); };
ConfirmChangeEmailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ConfirmChangeEmailComponent, selectors: [["app-confirm-email"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 9, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [2, "margin-top", "4vh"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "text-center", "p-0"], ["alt", "logo", 2, "width", "180px", 3, "src"], [1, "p-0", "m-0"], [1, "card-body"], [1, "card-text"], [1, "d-flex", "justify-content-around", "mt-3"], ["mat-stroked-button", "", 2, "width", "45%", 3, "click"], ["mat-stroked-button", "", 1, "btn-azt-primary", 2, "width", "45%", "margin-left", "15px", 3, "click"]], template: function ConfirmChangeEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "convertCdn");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " X\u00E1c nh\u1EADn \u0111\u1ED5i email m\u1EDBi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10)(13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " B\u1EA1n v\u1EEBa y\u00EAu c\u1EA7u thay \u0111\u1ED5i email cho t\u00E0i kho\u1EA3n tr\u00EAn Azota. H\u00E3y b\u1EA5m n\u00FAt \"X\u00E1c nh\u1EADn\" b\u00EAn d\u01B0\u1EDBi n\u1EBFu \u0111\u00F3 l\u00E0 b\u1EA1n. N\u1EBFu kh\u00F4ng, vui l\u00F2ng b\u1EA5m n\u00FAt \"H\u1EE7y\" \u0111\u1EC3 h\u1EE7y b\u1ECF y\u00EAu c\u1EA7u n\u00E0y. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 12)(16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConfirmChangeEmailComponent_Template_button_click_16_listener() { return ctx.ignoreRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConfirmChangeEmailComponent_Template_button_click_19_listener() { return ctx.confirmChangeEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "mytranslate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 3, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 5, "lang_cms_common_close_btn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 7, "lang_cms_common_confirm_btn"), " ");
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_5__.ConvertCdnPipe], styles: ["#recaptcha-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sms-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5a5a5a;\n  white-space: pre-line;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#verify_wrap[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#verify_wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_area[_ngcontent-%COMP%] {\n  transition: margin ease 0.5s;\n  \n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resend-code[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 13px;\n  color: #3C8DBC;\n  white-space: pre-line;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-right: 0;\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n  background-color: rgba(243, 244, 245, 0.1411764706) !important;\n}"] });


/***/ }),

/***/ 86229:
/*!****************************************************************************!*\
  !*** ./src/app/auth/confirm-forgot-password-email/controller.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmForgotPasswordEmailComponent": () => (/* binding */ ConfirmForgotPasswordEmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);












function ConfirmForgotPasswordEmailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " B\u1EA1n v\u1EEBa y\u00EAu c\u1EA7u thay \u0111\u1ED5i m\u1EADt kh\u1EA9u cho t\u00E0i kho\u1EA3n tr\u00EAn Azota. H\u00E3y b\u1EA5m n\u00FAt \"X\u00E1c nh\u1EADn\" b\u00EAn d\u01B0\u1EDBi n\u1EBFu \u0111\u00F3 l\u00E0 b\u1EA1n. N\u1EBFu kh\u00F4ng, vui l\u00F2ng b\u1EA5m n\u00FAt \"H\u1EE7y\" \u0111\u1EC3 h\u1EE7y b\u1ECF y\u00EAu c\u1EA7u n\u00E0y. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 15)(4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfirmForgotPasswordEmailComponent_div_13_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.ignoreRequest()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfirmForgotPasswordEmailComponent_div_13_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.confirmPassword()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 2, "lang_cms_common_close_btn"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 4, "lang_cms_common_confirm_btn"), " ");
} }
function ConfirmForgotPasswordEmailComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 18)(2, "div", 19)(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, "lang_cms_common_loading"), "...");
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { user_click: "true" }; };
function ConfirmForgotPasswordEmailComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " M\u1EADt kh\u1EA9u m\u1EDBi c\u1EE7a b\u1EA1n \u0111\u00E3 \u0111\u01B0\u1EE3c k\u00EDch ho\u1EA1t th\u00E0nh c\u00F4ng. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 25)(4, "div", 26)(5, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u0110\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 2, "/auth/login")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1));
} }
function ConfirmForgotPasswordEmailComponent_div_15_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" \u0110\u00E3 c\u00F3 l\u1ED7i trong qu\u00E1 tr\u00ECnh \u0111\u1ED5i m\u1EADt kh\u1EA9u: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r8.hasErrorMessage), ". Vui l\u00F2ng th\u1EED l\u1EA1i sau! ");
} }
function ConfirmForgotPasswordEmailComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ConfirmForgotPasswordEmailComponent_div_15_div_1_Template, 8, 7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ConfirmForgotPasswordEmailComponent_div_15_ng_template_2_Template, 4, 3, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.hasErrorMessage)("ngIfElse", _r7);
} }
class ConfirmForgotPasswordEmailComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(baseApiService, commonService, smsService) {
        super(commonService);
        this.baseApiService = baseApiService;
        this.commonService = commonService;
        this.smsService = smsService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({});
        this.is_mobile = /Android|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        this.is_mobile_ios = /webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
        this.hasErrorMessage = '';
        this.step = 1;
    }
    ignoreRequest() {
        this.baseApiService.redirectLoginByRole('');
    }
    confirmPassword() {
        var _a;
        this.initStatusObj();
        var secretCode = (_a = this.commonService.getMyQueryParam('secret')) !== null && _a !== void 0 ? _a : '';
        var confirmPassForm = {
            secret: secretCode
        };
        this.step = 2;
        this.smsService.apiSmsConfirmPassFromEmailPost(confirmPassForm).subscribe((response) => {
            var _a;
            if (response.success == 1) {
                this.successStatusObj();
            }
            else {
                this.stopStatusObj();
                this.hasErrorMessage = (_a = response.message) !== null && _a !== void 0 ? _a : 'lang_core_invalid_data';
            }
        });
    }
    ngOnInit() {
        this.commonService.translateMetaData({
            title: 'lang_cms_auth_confirm_forgot_password_title',
            description: 'lang_cms_auth_confirm_forgot_password_description',
            image: 'lang_cms_test_image',
        });
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngDestroy();
    }
}
ConfirmForgotPasswordEmailComponent.ɵfac = function ConfirmForgotPasswordEmailComponent_Factory(t) { return new (t || ConfirmForgotPasswordEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_1__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.SmsService)); };
ConfirmForgotPasswordEmailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ConfirmForgotPasswordEmailComponent, selectors: [["app-confirm-forgot-password-email"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 4, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "form-horizontal", 2, "margin-top", "4vh", 3, "formGroup"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "text-center"], ["src", "https://azotacdn.studybymusic.com/storage_public/azota_assets/images/logo.svg", "alt", "logo", 2, "width", "180px"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "h5"], [1, "card-body"], ["class", "col-md-12", 4, "ngIf"], [4, "ngIf"], [1, "col-md-12"], [1, "sms-info", "alert", "alert-warning", "text-justify"], [1, "d-flex", "justify-content-around", "mt-3"], ["mat-raised-button", "", 2, "width", "45%", "margin-right", "15px", 3, "click"], ["mat-raised-button", "", "color", "warn", 2, "width", "45%", 3, "click"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["class", "col-sm-12", 4, "ngIf", "ngIfElse"], ["errorChangePass", ""], [1, "col-sm-12"], [1, "sms-info", "alert", "alert-success"], [1, "text-center", "mt-3"], [1, "mb-1"], [3, "routerLink", "queryParams"], [1, "sms-info", "alert", "alert-danger"]], template: function ConfirmForgotPasswordEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u0110\u1ED5i m\u1EADt kh\u1EA9u m\u1EDBi");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10)(12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ConfirmForgotPasswordEmailComponent_div_13_Template, 10, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ConfirmForgotPasswordEmailComponent_div_14_Template, 6, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ConfirmForgotPasswordEmailComponent_div_15_Template, 4, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.step == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading && ctx.step == 2);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_10__.LocalizeRouterPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe], styles: ["#recaptcha-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sms-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  white-space: pre-line;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#verify_wrap[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#verify_wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_area[_ngcontent-%COMP%] {\n  transition: margin ease 0.5s;\n  \n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resend-code[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 13px;\n  color: #3C8DBC;\n  white-space: pre-line;\n}\n\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.loading[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.wrapper-progressBar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.progressBar[_ngcontent-%COMP%] {\n  counter-reset: step;\n}\n\n.progressBar-li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  float: left;\n  width: 33.3%;\n  position: relative;\n  text-align: center;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:before {\n  cursor: pointer;\n  content: counter(step);\n  counter-increment: step;\n  line-height: 30px;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #ddd;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px;\n  background-color: white;\n}\n\n.pro[_ngcontent-%COMP%]:before {\n  content: \"\\f00c\" !important;\n  font-family: \"Font Awesome 5 Free\" !important;\n  font-weight: 900;\n  background-color: green !important;\n  color: white !important;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: #ddd;\n  top: 15px;\n  left: -50%;\n  z-index: -1;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:first-child:after {\n  content: none;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]:before {\n  border-color: green;\n  background-color: white;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]    + .progressBar-li[_ngcontent-%COMP%]:after {\n  background-color: green;\n}\n\n.link-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 15867);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 88304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_services_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/window.service */ 11877);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/redirect.service */ 42873);
/* harmony import */ var src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/browser.storage.service */ 34782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);



















const _c0 = ["verifyCode"];
function ConfirmAccountComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ph\u1EA3i l\u00E0 s\u1ED1 v\u00E0 10 ky\u0301 t\u01B0\u0323!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ConfirmAccountComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ConfirmAccountComponent_div_27_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.getErrorType("phone", "required") || ctx_r1.getErrorType("phone", "minlength") || ctx_r1.getErrorType("phone", "maxlength") || ctx_r1.getErrorType("phone", "pattern"));
} }
function ConfirmAccountComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 15)(1, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, ctx_r2.statusObj.errorMessage), "");
} }
function ConfirmAccountComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Kh\u00F4ng nh\u1EADn \u0111\u01B0\u1EE3c m\u00E3 x\u00E1c th\u1EF1c? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "b", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ConfirmAccountComponent_div_43_Template_b_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.resendCode()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "G\u1EEDi l\u1EA1i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ConfirmAccountComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "span", 41);
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
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormGroup({});
        this.confirm_type = 'forgot_password';
        this.isVerifying = false;
        this.smsSent = false;
        this.timeOut = TIME_OUT;
        this.captchaWidgetId = '';
        this.isLoading = true;
        this.app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment[`firebaseConfig_${this.firebaseApp}`], 'confirm_account');
        this.getAuthApp().useDeviceLanguage();
    }
    getInitApp() {
        return this.app;
    }
    getAuthApp() {
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(this.app);
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
        var _a;
        var cur_second = Math.round(new Date().getTime() / 1000);
        this.browserStorageService.saveSimpleStorage('skip_verify_phone', cur_second.toString());
        this.baseApiService.redirectLoginByRole('');
        let confirm_type = this.getConfirmType();
        if (confirm_type == 'confirm_phone_register') {
            this.commonService.myNavigation('/admin/student/manage-class/0');
        }
        else {
            let returnLink = (_a = this.getMyQueryParam('return_url')) !== null && _a !== void 0 ? _a : '';
            this.commonService.myNavigation(returnLink);
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
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPhoneNumber)(this.getAuthApp(), phoneNumber, appVerifier)
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
                                        let reloadUrl = this.commonService.getLocalRouter('/auth/confirm_account') +
                                            '?return_url=' + this.returnUrl +
                                            '&confirm_type=' + this.confirm_type +
                                            '&app_name=' + ((_e = configResponse === null || configResponse === void 0 ? void 0 : configResponse.data) === null || _e === void 0 ? void 0 : _e.app) +
                                            '&interval_app=' + intervalApp;
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
        // clear first
        if (this.myCountDown !== undefined)
            clearInterval(this.myCountDown);
        this.myCountDown = window.setInterval(() => {
            if (this.timeOut > 0) {
                this.timeOut--;
            }
        }, 1000);
    }
    initForm() {
        // debugger
        this.form = this.formBuilder.group({
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(/^[0-9]*$/)]]
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
        /*
          @link https://firebase.google.com/docs/reference/js/v8/firebase.auth.RecaptchaVerifier
    
          API mới của firebase, không có hàm reset, firebase sẽ tự reload lại captcha để tiếp tục sử dụng
          sau 30 giây
          this.windowRef.recaptchaVerifier.reset(this.windowRef.recaptchaWidgetId);
        */
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
        let confirm_type = this.getConfirmType();
        this.confirm_type = this.getConfirmType();
        if (confirm_type != 'forgot_password') {
            this.authService.apiAuthInfoGet().subscribe((response) => {
                var _a, _b, _c;
                if (response.success == 1) {
                    if (((_a = response === null || response === void 0 ? void 0 : response.new_user) === null || _a === void 0 ? void 0 : _a.isVerifyPhone) == 1) { // Đã verify
                        if (confirm_type != 'change_phone') { // Đã verify mà không phải hành động change_phone
                            this.baseApiService.redirectLoginByRole('');
                        }
                    }
                    else {
                        if (((_b = response === null || response === void 0 ? void 0 : response.new_user) === null || _b === void 0 ? void 0 : _b.phone) && ((_c = response === null || response === void 0 ? void 0 : response.new_user) === null || _c === void 0 ? void 0 : _c.phone.length) <= 10) {
                            this.form.setValue({
                                phone: ''
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
        this.windowRef = this.window.windowRef;
        this.windowRef.recaptchaVerifier = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.RecaptchaVerifier('recaptcha-container', {
            size: 'invisible',
            callback: () => {
                this.handleConfirmUsage();
            }
        }, this.getAuthApp());
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
ConfirmAccountComponent.ɵfac = function ConfirmAccountComponent_Factory(t) { return new (t || ConfirmAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_window_service__WEBPACK_IMPORTED_MODULE_2__.WindowService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_6__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_8__.RedirectService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_browser_storage_service__WEBPACK_IMPORTED_MODULE_9__.BrowserStorageService)); };
ConfirmAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ConfirmAccountComponent, selectors: [["app-confirm-account"]], viewQuery: function ConfirmAccountComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.verifyCode = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([src_app_core_services_window_service__WEBPACK_IMPORTED_MODULE_2__.WindowService]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 56, vars: 17, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [2, "margin-top", "4vh"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "text-center", "p-0"], ["alt", "logo", 2, "width", "180px", 3, "src"], [1, "p-0", "m-0"], [1, "card-body"], ["id", "verify_wrap"], ["id", "enter_phone_area", 3, "ngStyle"], ["id", "enter_phone_wrap"], [1, "form-horizontal", 3, "formGroup"], [1, "form-group"], [1, "col-sm-12"], [1, "input-group", "mb-3"], [1, "input-group-append"], ["id", "basic-addon3", 1, "input-group-text"], ["id", "phoneInput", "type", "text", "placeholder", "Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i m\u1EDBi", "formControlName", "phone", "name", "phone", "autocomplete", "off", 1, "form-control"], ["phoneInput", ""], ["class", "alert alert-danger", 4, "ngIf"], ["id", "recaptcha-container", "color", "primary", "mat-raised-button", "", 3, "disabled"], [1, "mt-3", "text-center"], [1, "clickable", 3, "click"], ["class", "form-group", 4, "ngIf"], ["id", "verify_area", 1, "form-group"], [1, "sms-info"], [2, "text-align", "right", "font-size", "12px", "margin-bottom", "3px"], ["class", "mb-2 mt-2 resend-code", 4, "ngIf"], ["type", "string", "placeholder", "M\u00E3 x\u00E1c th\u1EF1c", "autocomplete", "off", 1, "form-control"], ["verifyCode", ""], [1, "input-group-append", "ml-1"], ["id", "buttonVerify", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [4, "ngIf"], [1, "text-center", "mt-3"], [1, "text-normal", "clickable", 3, "click"], [1, "alert", "alert-danger"], [1, "col-sm-12", "control-label", "text-danger"], [1, "mb-2", "mt-2", "resend-code"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function ConfirmAccountComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "convertCdn");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 10)(13, "div")(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "form", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "div", 18)(22, "span", 19)(23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "phone_outlined");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](25, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, ConfirmAccountComponent_div_27_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Ti\u1EBFp t\u1EE5c");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 24)(31, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ConfirmAccountComponent_Template_a_click_31_listener() { return ctx.skipVerifyPhone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "B\u1ECF qua");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, ConfirmAccountComponent_div_33_Template, 4, 3, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 27)(35, "div", 16)(36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, " M\u1ED9t tin nh\u1EAFn ch\u1EE9a m\u00E3 x\u00E1c th\u1EF1c v\u1EEBa \u0111\u01B0\u1EE3c g\u1EEDi t\u1EDBi s\u1ED1 \u0111i\u1EC7n tho\u1EA1i ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, ". Vui l\u00F2ng nh\u1EADp m\u00E3 n\u00E0y v\u00E0o \u00F4 d\u01B0\u1EDBi \u0111\u00E2y r\u1ED3i \u1EA5n x\u00E1c th\u1EF1c ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, ConfirmAccountComponent_div_43_Template, 4, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](45, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "div", 33)(48, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ConfirmAccountComponent_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](46); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.verify_code(_r4.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](49, ConfirmAccountComponent_span_49_Template, 3, 0, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "X\u00E1c th\u1EF1c ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 36)(53, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ConfirmAccountComponent_Template_a_click_53_listener() { return ctx.handleClickLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 13, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.confirm_type == "change_phone" ? "\u0110\u1ED5i s\u1ED1 \u0111i\u1EC7n tho\u1EA1i m\u1EDBi" : "X\u00E1c th\u1EF1c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i c\u1EE7a b\u1EA1n", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](15, _c1, ctx.smsSent ? "-100%" : "0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.form.controls["phone"].invalid && (ctx.form.controls["phone"].dirty || ctx.form.controls["phone"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_10__.ConvertCdnPipe], styles: ["#recaptcha-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sms-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5a5a5a;\n  white-space: pre-line;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#verify_wrap[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#verify_wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_area[_ngcontent-%COMP%] {\n  transition: margin ease 0.5s;\n  \n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resend-code[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 13px;\n  color: #3C8DBC;\n  white-space: pre-line;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-right: 0;\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n  background-color: rgba(243, 244, 245, 0.1411764706) !important;\n}"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_mobile_webview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/mobile.webview.service */ 81760);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);













function ConfirmForgotPasswordComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 16)(4, "div", 16)(5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r0.step_by_step == 1 ? "active" : ctx_r0.step_by_step > 1 ? "active pro" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r0.step_by_step == 2 ? "active" : ctx_r0.step_by_step > 2 ? "active pro" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r0.step_by_step == 3 ? "active" : ctx_r0.step_by_step > 3 ? "active pro" : "");
} }
function ConfirmForgotPasswordComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 18)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, "lang_cms_common_loading"), "...");
} }
function ConfirmForgotPasswordComponent_div_14_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Vui l\u00F2ng nh\u1EADp email ho\u1EB7c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ConfirmForgotPasswordComponent_div_14_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ConfirmForgotPasswordComponent_div_14_div_12_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.getErrorType("emailOrPhone", "required"));
} }
function ConfirmForgotPasswordComponent_div_14_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " M\u1EADt kh\u1EA9u ph\u1EA3i d\u00E0i t\u1ED1i thi\u1EC3u l\u00E0 6! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ConfirmForgotPasswordComponent_div_14_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ConfirmForgotPasswordComponent_div_14_div_21_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.getErrorType("password", "required") || ctx_r7.getErrorType("password", "minlength"));
} }
function ConfirmForgotPasswordComponent_div_14_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " M\u1EADt kh\u1EA9u kh\u00F4ng tr\u00F9ng kh\u1EDBp! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ConfirmForgotPasswordComponent_div_14_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ConfirmForgotPasswordComponent_div_14_div_30_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.getErrorType("repassword", "confirm_pass"));
} }
function ConfirmForgotPasswordComponent_div_14_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r9.statusObj.errorMessage), "");
} }
function ConfirmForgotPasswordComponent_div_14_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { user_click: "true" }; };
function ConfirmForgotPasswordComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 20)(2, "div", 21)(3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 24)(6, "span", 25)(7, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ConfirmForgotPasswordComponent_div_14_div_12_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 20)(14, "div", 21)(15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 24)(18, "span", 29)(19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ConfirmForgotPasswordComponent_div_14_div_21_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 20)(23, "div", 21)(24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 24)(27, "span", 29)(28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ConfirmForgotPasswordComponent_div_14_div_30_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ConfirmForgotPasswordComponent_div_14_div_31_Template, 4, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 20)(33, "div", 21)(34, "div", 32)(35, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfirmForgotPasswordComponent_div_14_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.form.invalid || ctx_r14.statusObj.loading || ctx_r14.changePassword()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, ConfirmForgotPasswordComponent_div_14_span_36_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Ti\u1EBFp t\u1EE5c ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 34)(39, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Ho\u1EB7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 5)(42, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](43, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "span", 37)(45, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "center_focus_strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " S\u1EED d\u1EE5ng m\u00E3 QR qu\u00EAn m\u1EADt kh\u1EA9u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 39)(50, "div", 40)(51, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "H\u01B0\u1EDBng d\u1EABn \u0111\u1ED5i m\u1EADt kh\u1EA9u tr\u00EAn Azota");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div")(54, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "\u0110\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["emailOrPhone"].invalid && (ctx_r2.form.controls["emailOrPhone"].dirty || ctx_r2.form.controls["emailOrPhone"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["password"].invalid && ctx_r2.form.controls["password"].dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.getErrorType("repassword", "confirm_pass") && ctx_r2.form.controls["repassword"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.statusObj.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.form.invalid || ctx_r2.statusObj.loading || ctx_r2.getErrorType("repassword", "confirm_pass") != false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](43, 9, "/auth/confirm_forgot_password_qr")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](55, 11, "/auth/login")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c1));
} }
function ConfirmForgotPasswordComponent_div_15_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49)(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "( Click v\u00E0o \u0111\u00E2y \u0111\u1EC3 g\u1EEDi ngay )");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("href", "sms:" + ctx_r16.phone_send + "?body=MK " + ctx_r16.response_change_pass.otp, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function ConfirmForgotPasswordComponent_div_15_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfirmForgotPasswordComponent_div_15_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.changeStepByNext()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ti\u1EBFp t\u1EE5c ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ConfirmForgotPasswordComponent_div_15_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53)(1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r18.currentMessage);
} }
function ConfirmForgotPasswordComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 21)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Th\u00F4ng tin m\u1EADt kh\u1EA9u m\u1EDBi c\u1EE7a b\u1EA1n \u0111\u00E3 \u0111\u01B0\u1EE3c ghi nh\u1EADn. \u0110\u1EC3 k\u00EDch ho\u1EA1t m\u1EADt kh\u1EA9u v\u1EEBa t\u1EA1o vui l\u00F2ng s\u1EED d\u1EE5ng s\u1ED1 \u0111i\u1EC7n tho\u1EA1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " v\u00E0 so\u1EA1n tin nh\u1EAFn: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 47)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " g\u1EEDi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ConfirmForgotPasswordComponent_div_15_div_13_Template, 3, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " \"C\u01B0\u1EDBc ph\u00ED tin nh\u1EAFn \u0111\u01B0\u1EE3c t\u00EDnh theo gi\u00E1 c\u01B0\u1EDBc ph\u00ED th\u00F4ng th\u01B0\u1EDDng c\u1EE7a nh\u00E0 m\u1EA1ng\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Sau khi g\u1EEDi tin nh\u1EAFn vui l\u00F2ng b\u1EA5m n\u00FAt b\u00EAn d\u01B0\u1EDBi \u0111\u1EC3 ti\u1EBFp t\u1EE5c ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ConfirmForgotPasswordComponent_div_15_button_19_Template, 2, 0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ConfirmForgotPasswordComponent_div_15_div_20_Template, 5, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.data_change_pass.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("MK ", ctx_r3.response_change_pass.otp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.phone_send);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.is_mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.step_by_step == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.step_by_step == 3);
} }
function ConfirmForgotPasswordComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 21)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " M\u1EADt kh\u1EA9u m\u1EDBi c\u1EE7a b\u1EA1n \u0111\u00E3 \u0111\u01B0\u1EE3c k\u00EDch ho\u1EA1t th\u00E0nh c\u00F4ng. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 39)(5, "div", 40)(6, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u0110\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div")(10, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "H\u01B0\u1EDBng d\u1EABn \u0111\u1ED5i m\u1EADt kh\u1EA9u tr\u00EAn Azota");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 2, "/auth/login")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1));
} }
function ConfirmForgotPasswordComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 21)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " H\u1EC7 th\u1ED1ng \u0111\u00E3 g\u1EEDi email t\u1EDBi \u0111\u1ECBa ch\u1EC9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, ". Vui l\u00F2ng ki\u1EC3m tra email v\u00E0 \u1EA5n v\u00E0o \u0111\u01B0\u1EDDng link x\u00E1c nh\u1EADn \u0111\u1EC3 vi\u1EC7c thay \u0111\u1ED5i m\u1EADt kh\u1EA9u th\u00E0nh c\u00F4ng! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 39)(8, "div", 40)(9, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u0110\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div")(13, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "H\u01B0\u1EDBng d\u1EABn \u0111\u1ED5i m\u1EADt kh\u1EA9u tr\u00EAn Azota");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.form.controls.emailOrPhone.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 3, "/auth/login")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c1));
} }
class ConfirmForgotPasswordComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(formBuilder, commonService, smsService, mobileWebviewService) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.smsService = smsService;
        this.mobileWebviewService = mobileWebviewService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({});
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
            // use phone
            var body = {
                phone: form_object.emailOrPhone,
                password: form_object.password
            };
            this.smsService.apiSmsChangePassPost(body).subscribe((response) => {
                var _a, _b;
                if (response.success == 1) {
                    this.successStatusObj();
                    if (!form_object.emailOrPhone.includes('@')) {
                        this.step_by_step = 2;
                        this.response_change_pass = (_a = response.data) !== null && _a !== void 0 ? _a : {};
                        this.data_change_pass = body;
                    }
                    else {
                        // is Email
                        this.step_by_step = 5;
                    }
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
            emailOrPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
            repassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
        });
        this.commonService.translateMetaData({
            title: 'lang_cms_auth_confirm_forgot_password_title',
            description: 'lang_cms_auth_confirm_forgot_password_description',
            image: 'lang_cms_test_image',
        });
        this.getPhone();
        super.ngOnInit();
        this.mobileWebviewService.sendComponentLoaded('confirm_forgot_password');
    }
    ngOnDestroy() {
        if (this.loop_check) {
            clearInterval(this.loop_check);
        }
        super.ngDestroy();
    }
}
ConfirmForgotPasswordComponent.ɵfac = function ConfirmForgotPasswordComponent_Factory(t) { return new (t || ConfirmForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__.SmsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_mobile_webview_service__WEBPACK_IMPORTED_MODULE_3__.MobileWebviewService)); };
ConfirmForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ConfirmForgotPasswordComponent, selectors: [["app-confirm-forgot-password"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 7, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "form-horizontal", 2, "margin-top", "4vh", 3, "formGroup"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "text-center"], ["src", "https://azotacdn.studybymusic.com/storage_public/azota_assets/images/logo.svg", "alt", "logo", 2, "width", "180px"], ["class", "row m-0", 4, "ngIf"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "h5"], [1, "card-body"], [4, "ngIf"], [1, "row", "m-0"], [1, "wrapper-progressBar"], [1, "progressBar"], [1, "progressBar-li", 3, "ngClass"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "form-group"], [1, "col-sm-12"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Email ho\u1EB7c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i", "formControlName", "emailOrPhone", "autocomplete", "new-phone", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon3", 1, "input-group-text", 2, "padding-left", "0.35rem", "padding-right", "0.35rem"], [2, "width", "15px", "height", "15px", "font-size", "15px"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "password", "placeholder", "M\u1EADt kh\u1EA9u m\u1EDBi", "formControlName", "password", "autocomplete", "new-password", 1, "form-control"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "password", "placeholder", "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u m\u1EDBi", "formControlName", "repassword", "autocomplete", "new-repassword", 1, "form-control"], ["class", "form-group", 4, "ngIf"], [1, "text-right"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-block", 3, "disabled", "click"], [1, "text-center", "mt-2"], [1, "text-mute"], [1, "btn", "btn-outline-primary", "mt-2", "w-100", 3, "routerLink"], [1, "link-center"], [1, "mr-1"], [1, "text-center", "mt-3"], [1, "mb-1"], ["href", "https://docs.azota.vn/#quen-mat-khau", "target", "blank"], [1, "text-normal", 3, "routerLink", "queryParams"], [1, "alert", "alert-danger"], [1, "col-sm-12", "control-label", "text-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "sms-info"], [2, "text-align", "right", "font-size", "15px", "margin", "10px 0", "text-align", "center"], ["class", "sms-info text-center mb-3", 4, "ngIf"], [1, "sms-info", "text-center", "mb-3"], ["class", "btn btn-block", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-block", 3, "click"], [1, "loading"], [1, "icon"], [1, "text"], [3, "routerLink", "queryParams"], ["href", "https://docs.azota.vn/#quen-mat-khau", "target", "blank", 1, "text-normal"]], template: function ConfirmForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ConfirmForgotPasswordComponent_div_7_Template, 6, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u0110\u1ED5i m\u1EADt kh\u1EA9u m\u1EDBi");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ConfirmForgotPasswordComponent_div_13_Template, 6, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ConfirmForgotPasswordComponent_div_14_Template, 57, 18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ConfirmForgotPasswordComponent_div_15_Template, 21, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ConfirmForgotPasswordComponent_div_16_Template, 12, 7, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ConfirmForgotPasswordComponent_div_17_Template, 15, 8, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusObj.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading && ctx.step_by_step == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusObj.loading != true && (ctx.step_by_step == 2 || ctx.step_by_step == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading && ctx.step_by_step == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.statusObj.loading && ctx.step_by_step == 5);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_11__.LocalizeRouterPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe], styles: ["#recaptcha-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sms-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5a5a5a;\n  white-space: pre-line;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#verify_wrap[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#verify_wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_area[_ngcontent-%COMP%] {\n  transition: margin ease 0.5s;\n  \n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resend-code[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 13px;\n  color: #3C8DBC;\n  white-space: pre-line;\n}\n\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.loading[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.wrapper-progressBar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.progressBar[_ngcontent-%COMP%] {\n  counter-reset: step;\n}\n\n.progressBar-li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  float: left;\n  width: 33.3%;\n  position: relative;\n  text-align: center;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:before {\n  cursor: pointer;\n  content: counter(step);\n  counter-increment: step;\n  line-height: 30px;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #ddd;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px;\n  background-color: white;\n}\n\n.pro[_ngcontent-%COMP%]:before {\n  content: \"\\f00c\" !important;\n  font-family: \"Font Awesome 5 Free\" !important;\n  font-weight: 900;\n  background-color: green !important;\n  color: white !important;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: #ddd;\n  top: 15px;\n  left: -50%;\n  z-index: -1;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:first-child:after {\n  content: none;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]:before {\n  border-color: green;\n  background-color: white;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]    + .progressBar-li[_ngcontent-%COMP%]:after {\n  background-color: green;\n}\n\n.link-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);













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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfirmForgotPasswordComponentOld_div_14_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.form.invalid || ctx_r6.statusObj.loading || ctx_r6.changePassword()); });
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
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({});
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
ConfirmForgotPasswordComponentOld.ɵfac = function ConfirmForgotPasswordComponentOld_Factory(t) { return new (t || ConfirmForgotPasswordComponentOld)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
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
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_11__.LocalizeRouterPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.ConvertCdnPipe], encapsulation: 2 });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 24096);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_helpers/LocalStorageObjetc */ 3279);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _azota_ui_azt_scan_qrcode_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/azt-scan-qrcode/controller.component */ 57646);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);














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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfirmForgotPasswordQrComponent_div_22_div_33_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.reloadProcessForgot()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfirmForgotPasswordQrComponent_div_22_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.form.invalid || ctx_r10.statusObj.loading || ctx_r10.changePassword()); });
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
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({});
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
ConfirmForgotPasswordQrComponent.ɵfac = function ConfirmForgotPasswordQrComponent_Factory(t) { return new (t || ConfirmForgotPasswordQrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_2__.LocalStorageObjetct), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.QrCodeForgotPasswordService)); };
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
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _azota_ui_azt_scan_qrcode_controller_component__WEBPACK_IMPORTED_MODULE_4__.AztScanQrcodeComponent, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_12__.LocalizeRouterPipe], styles: ["#authForm[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  max-width: 550px;\n  margin: 0 auto;\n}\n\n#recaptcha-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sms-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5a5a5a;\n  white-space: pre-line;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#verify_wrap[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#verify_wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_area[_ngcontent-%COMP%] {\n  transition: margin ease 0.5s;\n  \n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resend-code[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 13px;\n  color: #3C8DBC;\n  white-space: pre-line;\n}\n\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.loading[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.wrapper-progressBar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.progressBar[_ngcontent-%COMP%] {\n  counter-reset: step;\n}\n\n.progressBar-li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  float: left;\n  width: 33.3%;\n  position: relative;\n  text-align: center;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:before {\n  cursor: pointer;\n  content: counter(step);\n  counter-increment: step;\n  line-height: 30px;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #ddd;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px;\n  background-color: white;\n}\n\n.pro[_ngcontent-%COMP%]:before {\n  content: \"\\f00c\" !important;\n  font-family: \"Font Awesome 5 Free\" !important;\n  font-weight: 900;\n  background-color: green !important;\n  color: white !important;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: #ddd;\n  top: 15px;\n  left: -50%;\n  z-index: -1;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:first-child:after {\n  content: none;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]:before {\n  border-color: green;\n  background-color: white;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]    + .progressBar-li[_ngcontent-%COMP%]:after {\n  background-color: green;\n}\n\n.link-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 48966);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../azota-ui/header/header-backend/controller.component */ 17852);
/* harmony import */ var _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../azota-ui/header/header-frontend/controller.component */ 58496);
/* harmony import */ var _azota_ui_azt_create_qr_image_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../azota-ui/azt-create-qr-image/controller.component */ 70789);











const _c0 = ["elementCreateQr"];
function CreateQrForgotPassComponent_header_backend_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "header-backend", 13);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headerTitle", "")("back_link", "/admin/dashboard");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateQrForgotPassComponent_div_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.downloadQrCode()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " T\u1EA3i xu\u1ED1ng m\u00E3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function CreateQrForgotPassComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateQrForgotPassComponent_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.openDialog()); });
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _azota_ui_header_header_backend_controller_component__WEBPACK_IMPORTED_MODULE_3__.HeaderBackendComponent, _azota_ui_header_header_frontend_controller_component__WEBPACK_IMPORTED_MODULE_4__.HeaderFrontendComponent, _azota_ui_azt_create_qr_image_controller_component__WEBPACK_IMPORTED_MODULE_5__.AztCreateQrImageComponent], styles: [".card-center-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.qrcode-block[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #e0e0e0;\n  margin-bottom: 20px;\n  max-width: 400px;\n  max-height: 400px;\n  min-width: 300px;\n  min-height: 300px;\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  \n  \n  user-select: none;\n  \n}\n\n.qrcode-block-fake[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.qrcode-block-fake-content[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.qrcode-block-note[_ngcontent-%COMP%] {\n  line-height: 30px;\n}"] });
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
    } }, dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions], encapsulation: 2 });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 69808);



class ForgotPasswordQrSuccessComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor() {
        super(...arguments);
        this.step_by_step = 3;
    }
    redirectToCreateQrCode() {
        this.commonService.myNavigation('/auth/create-qr-forgot-pass/0');
    }
    redirectToHome() {
        this.commonService.myNavigation('/admin/dashboard');
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["#authForm[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  max-width: 550px;\n  margin: 0 auto;\n}\n\n#recaptcha-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sms-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5a5a5a;\n  white-space: pre-line;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#verify_wrap[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#verify_wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_area[_ngcontent-%COMP%] {\n  transition: margin ease 0.5s;\n  \n}\n\n#verify_wrap[_ngcontent-%COMP%]   div#enter_phone_wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resend-code[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 13px;\n  color: #3C8DBC;\n  white-space: pre-line;\n}\n\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.loading[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.wrapper-progressBar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.progressBar[_ngcontent-%COMP%] {\n  counter-reset: step;\n}\n\n.progressBar-li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  float: left;\n  width: 33.3%;\n  position: relative;\n  text-align: center;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:before {\n  cursor: pointer;\n  content: counter(step);\n  counter-increment: step;\n  line-height: 30px;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #ddd;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px;\n  background-color: white;\n}\n\n.pro[_ngcontent-%COMP%]:before {\n  content: \"\\f00c\" !important;\n  font-family: \"Font Awesome 5 Free\" !important;\n  font-weight: 900;\n  background-color: green !important;\n  color: white !important;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: #ddd;\n  top: 15px;\n  left: -50%;\n  z-index: -1;\n}\n\n.progressBar-li[_ngcontent-%COMP%]:first-child:after {\n  content: none;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]:before {\n  border-color: green;\n  background-color: white;\n}\n\n.progressBar-li.active[_ngcontent-%COMP%]    + .progressBar-li[_ngcontent-%COMP%]:after {\n  background-color: green;\n}\n\n.link-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn-block-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_helpers/LocalStorageObjetc */ 3279);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var src_app_core_auto_api_common_api_api_qrCodeLogin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auto_api/common_api/api/qrCodeLogin.service */ 89892);
/* harmony import */ var src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/redirect.service */ 42873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _azota_ui_azt_create_qr_image_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../azota-ui/azt-create-qr-image/controller.component */ 70789);
/* harmony import */ var _azota_ui_azt_scan_qrcode_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../azota-ui/azt-scan-qrcode/controller.component */ 57646);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);














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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_20_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.confContentPendingLogin(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LoginScanQrComponent_div_20_div_7_span_2_Template, 3, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Ch\u1EA5p nh\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_20_div_7_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.confContentPendingLogin(2)); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_20_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r24.backScanActionWithIsLogin()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_21_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.createRequestLoginHashCodeAction()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("expiredAction", function LoginScanQrComponent_div_21_azt_create_qr_image_2_Template_azt_create_qr_image_expiredAction_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.expiredQrcodeAction()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_a_23_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.downloadQrCode()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_25_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r35.switchModeView()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_36_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r41.confContentLogin()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LoginScanQrComponent_div_36_div_8_span_2_Template, 3, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " \u0110\u0103ng nh\u1EADp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_36_div_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r43.reopenScanCamInit()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginScanQrComponent_div_37_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r48.reopenScanCamInit()); });
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
                this.backLink = '/admin/dashboard';
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
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _azota_ui_azt_create_qr_image_controller_component__WEBPACK_IMPORTED_MODULE_6__.AztCreateQrImageComponent, _azota_ui_azt_scan_qrcode_controller_component__WEBPACK_IMPORTED_MODULE_7__.AztScanQrcodeComponent, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_13__.LocalizeRouterPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__.ConvertCdnPipe], styles: [".loginscan__card-header[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.loginscan__card-body[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.loginscan__card-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loginscan__card-video[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.loginscan__card-video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.loginscan__card-control--switch[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(36, 98, 174, 0.431372549);\n  color: white;\n  padding: 5px;\n  border-right: 1px solid #e0e0e0;\n  border-bottom: 1px solid #e0e0e0;\n  cursor: pointer;\n}\n.link-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-create-login-img[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100px;\n  background: #f5f5f5;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #e0e0e0;\n  padding: 10px;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  \n  \n  user-select: none;\n  \n}\n.box-create-login-img[_ngcontent-%COMP%]:hover {\n  background: #eceff1;\n}\n.box-create-login-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.loginscan_scanmode_conf[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #e0f2f1;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n}\n.loginscan_scanmode_conf--box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.loginscan_scanmode_conf--box[_ngcontent-%COMP%]   .boxtext[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 30px;\n  margin-bottom: 20px;\n}\n.block-inline-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.back-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 14px;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}"] });


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
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ 88304);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/validator/whitespace.validator */ 41303);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_helpers/LocalStorageObjetc */ 3279);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/auth */ 20948);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/user.service */ 88386);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-recaptcha */ 73396);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);




















function LoginComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 13)(2, "div", 14)(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 1, "lang_cms_common_loading"), "...");
} }
function LoginComponent_div_0_div_14_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Vui l\u00F2ng nh\u1EADp \u0111\u00FAng S\u0110T ho\u1EB7c email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_0_div_14_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r4.msgError, " ");
} }
function LoginComponent_div_0_div_14_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Vui l\u00F2ng nh\u1EADp m\u1EADt kh\u1EA9u.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_0_div_14_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16)(1, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, ctx_r6.statusObj.errorMessage), "");
} }
function LoginComponent_div_0_div_14_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { return_url: a0, user_click: "true" }; };
function LoginComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 16)(2, "div", 3)(3, "div", 17)(4, "div", 18)(5, "div", 19)(6, "span", 20)(7, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "mail_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "phone_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keydown.enter", function LoginComponent_div_0_div_14_Template_input_keydown_enter_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.login()); })("input", function LoginComponent_div_0_div_14_Template_input_input_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.checkValidateUser(ctx_r10.form.controls.phone.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, LoginComponent_div_0_div_14_div_13_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, LoginComponent_div_0_div_14_div_14_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 16)(16, "div", 3)(17, "div", 17)(18, "div", 18)(19, "div", 19)(20, "span", 24)(21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "lock_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keydown.enter", function LoginComponent_div_0_div_14_Template_input_keydown_enter_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.login()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_div_0_div_14_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.togglePassword()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, LoginComponent_div_0_div_14_div_27_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, LoginComponent_div_0_div_14_div_28_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 16)(30, "div", 3)(31, "div", 28)(32, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_div_0_div_14_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.login()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, LoginComponent_div_0_div_14_span_33_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "\u0110\u0103ng nh\u1EADp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 30)(36, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "- HO\u1EB6C -");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 3)(39, "div", 32)(40, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_div_0_div_14_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.loginZalo()); })("keydown.enter", function LoginComponent_div_0_div_14_Template_button_keydown_enter_40_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](42, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Zalo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 32)(46, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_div_0_div_14_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.googleSignIn()); })("keydown.enter", function LoginComponent_div_0_div_14_Template_button_keydown_enter_46_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](47, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](48, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 32)(52, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_div_0_div_14_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.loginByQrCode()); })("keydown.enter", function LoginComponent_div_0_div_14_Template_button_keydown_enter_52_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "center_focus_strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "Qrcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 38)(58, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](59, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "\u0110\u0103ng k\u00FD th\u00E0nh vi\u00EAn m\u1EDBi");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div", 40)(62, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_div_0_div_14_Template_a_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.forgotPassword()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "Qu\u00EAn m\u1EADt kh\u1EA9u?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["phone"].invalid && (ctx_r2.form.controls["phone"].dirty || ctx_r2.form.controls["phone"].touched) && !ctx_r2.checkValidateUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.checkValidateUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", ctx_r2.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.showPassword ? "visibility_outlined" : "visibility_off_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["password"].invalid && (ctx_r2.form.controls["password"].dirty || ctx_r2.form.controls["password"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.statusObj.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r2.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.statusObj.loading || ctx_r2.checkLoadingLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](42, 12, "azota_assets/images/zalo-icon.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](48, 14, "azota_assets/images/google-icon.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](18, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](59, 16, "/auth/register")))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](20, _c1, ctx_r2.returnUrl));
} }
function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "form", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\u0110\u0103ng nh\u1EADp");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, LoginComponent_div_0_div_13_Template, 6, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, LoginComponent_div_0_div_14_Template, 64, 22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 4, "azota_assets/images/logo.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.statusObj.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.statusObj.loading);
} }
class LoginComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(formBuilder, commonService, baseApiService, localStorageObject, authService, fireAuth, userService, recaptchaV3Service) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.localStorageObject = localStorageObject;
        this.authService = authService;
        this.fireAuth = fireAuth;
        this.userService = userService;
        this.recaptchaV3Service = recaptchaV3Service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormGroup({});
        this.zaloAccessTkn = '';
        this.mAccessTkn = '';
        this.returnUrl = '';
        this.zaloLoginUrl = '';
        this.loginByToken = true;
        this.msgError = '';
        this.checkValidateUsername = false;
        this.checkLoadingLogin = true;
        this.showPassword = false;
        this.initStatusObj();
        fireAuth.authState.subscribe(user => {
            if (!user) {
                this.checkLoadingLogin = false;
                return;
            }
            this.signInWithTokenGoogle(user);
        });
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
                        this.localStorageObject.clearAllCache();
                        this.baseApiService.redirectLoginByRole((_a = this.commonService.getMyQueryParam('return_url')) !== null && _a !== void 0 ? _a : '');
                        this.successStatusObj();
                    }
                    else {
                        this.errorStatusObj((_b = response.message) !== null && _b !== void 0 ? _b : '');
                    }
                }));
            });
        }
        else {
            this.showErrorSnack('Vui lòng nhập đầy đủ thông tin');
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
        var userObj = this.userService.getUserObjFromJwtToken(token);
        if (userObj != undefined) {
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
        var jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
        return this.commonService.parseJson(jsonPayload);
    }
    googleSignIn() {
        // tslint:disable-next-line: new-parens
        this.fireAuth.signInWithRedirect(new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.GoogleAuthProvider).then(() => {
            return this.fireAuth.getRedirectResult().then(result => {
            });
        }).catch(error => {
            console.log(error);
        });
    }
    validateEmail(str) {
        return str.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
    checkValidateUser(value) {
        this.msgError = '';
        if (isNaN(Number(value))) {
            if (this.validateEmail(value)) {
                this.checkValidateUsername = false;
                this.msgError = '';
            }
            else {
                this.msgError = 'Vui lòng nhập đúng định dạng email.';
                this.checkValidateUsername = true;
            }
        }
        else {
            if (value.length == 10) {
                this.msgError = '';
                this.checkValidateUsername = false;
            }
            else {
                this.msgError = 'Số điện thoại phải là số và 10 ký tự.';
                this.checkValidateUsername = true;
            }
        }
    }
    signInWithTokenGoogle(user) {
        this.checkLoadingLogin = true;
        let idToken = user._delegate.accessToken;
        let body = {
            isRegisterForTeacher: 0,
            firebaseToken: idToken,
        };
        this.subscriptions.add(this.authService.apiAuthAuthByFirebasePost(body).subscribe(response => {
            var _a, _b, _c;
            if (response.success == 1) {
                if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.isNewRegister) == 1) {
                    this.myNavigation('/auth/choose-role');
                }
                else {
                    this.baseApiService.redirectLoginByRole((_b = this.commonService.getMyQueryParam('return_url')) !== null && _b !== void 0 ? _b : '');
                }
                this.checkLoadingLogin = false;
            }
            else {
                this.checkLoadingLogin = false;
                this.errorStatusObj((_c = response.message) !== null && _c !== void 0 ? _c : '', true);
            }
        }));
    }
    togglePassword() {
        this.showPassword = !this.showPassword;
    }
    loginByQrCode() {
        this.myNavigation('/auth/login-scan/2');
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
                phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__.WhiteSpaceValidator.noWhiteSpace]],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]
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
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_helpers_LocalStorageObjetc__WEBPACK_IMPORTED_MODULE_5__.LocalStorageObjetct), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__.ReCaptchaV3Service)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "container-fluid component-wrap centerBoth hasBg", 4, "ngIf"], [1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "form-horizontal", 2, "margin-top", "6vh", 3, "formGroup"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "text-center", "p-0"], ["alt", "logo", 2, "width", "180px", 3, "src"], [1, "p-0", "m-0"], [1, "card-body"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "form-group"], [1, "col-sm-12"], [1, "input-group", "mb-3"], [1, "input-group-append"], ["id", "basic-addon3", 1, "input-group-text", 2, "padding-left", "0.35rem", "padding-right", "0.35rem"], [2, "width", "15px", "height", "15px", "font-size", "15px"], ["type", "tel", "placeholder", "Nh\u1EADp S\u0110T ho\u1EB7c email", "formControlName", "phone", 1, "form-control", 3, "keydown.enter", "input"], ["class", "alert alert-danger", 4, "ngIf"], ["id", "basic-addon2", 1, "input-group-text"], ["placeholder", "M\u1EADt kh\u1EA9u", "formControlName", "password", 1, "form-control", "pr-40", 3, "type", "keydown.enter"], [1, "btn-toggle-password", 3, "click"], ["class", "form-group", 4, "ngIf"], [1, "col-md-12"], ["mat-raised-button", "", 1, "btn-azt-primary", 2, "width", "100%", 3, "disabled", "click"], [1, "text-center", "my-3"], [1, "h6", "mute-text"], [1, "col-4"], ["mat-stroked-button", "", 2, "width", "100%", "padding", "3px", 3, "click", "keydown.enter"], ["alt", "Zalo icon", 1, "img-responsive", "zalo-icon", 3, "src"], [1, "d-none", "d-lg-inline-block"], ["alt", "Google icon", 1, "img-responsive", "zalo-icon", 3, "src"], [1, "zalo-icon", "icon-v2"], [1, "text-center", "mt-3"], [3, "routerLink", "queryParams"], [1, "text-center", "mt-1"], [2, "color", "rgb(216, 2, 2)", 3, "click"], [1, "alert", "alert-danger"], [1, "col-sm-12", "control-label", "text-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 16, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loginByToken);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_18__.LocalizeRouterPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_8__.ConvertCdnPipe], styles: [".checkboxInput[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 2;\n}\n\n.zalo-icon[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-right: 10px;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n  margin: 0 10px;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-right: 0;\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n  background-color: rgba(243, 244, 245, 0.1411764706) !important;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.btn-toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 0;\n  border: none;\n  background: transparent;\n  z-index: 99;\n}\n\n.btn-toggle-password[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #757575;\n  transition: all 0.5s;\n}\n\n.btn-toggle-password[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover {\n  color: #434242;\n}\n\n.pr-40[_ngcontent-%COMP%] {\n  padding-right: 40px;\n}\n\n.icon-v2[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n@media (max-width: 992px) {\n  .zalo-icon[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 20948);
/* harmony import */ var src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/redirect.service */ 42873);






class LogoutComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService, baseApiService, fireAuth, redirectService) {
        super(commonService);
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.fireAuth = fireAuth;
        this.redirectService = redirectService;
        this.fireAuth.signOut();
    }
    ngOnInit() {
        this.baseApiService.logout();
        this.fireAuth.signOut();
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
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_redirect_service__WEBPACK_IMPORTED_MODULE_3__.RedirectService)); };
LogoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-register"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function LogoutComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 26283:
/*!*********************************************************!*\
  !*** ./src/app/auth/masterpage/controller.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthMasterPageComponent": () => (/* binding */ AuthMasterPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 74202);




class AuthMasterPageComponent extends src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseComponent {
    constructor(commonService) {
        super(commonService);
        this.commonService = commonService;
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
AuthMasterPageComponent.ɵfac = function AuthMasterPageComponent_Factory(t) { return new (t || AuthMasterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
AuthMasterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthMasterPageComponent, selectors: [["auth-master-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["id", "homework-layout"]], template: function AuthMasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], encapsulation: 2 });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/fire/compat */ 12011);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 51908);
/* harmony import */ var src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/azota-ui/azota-ui.module */ 47470);
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ 75658);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _powerpoint_frontend_powerpoint_detail_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../powerpoint_frontend/powerpoint-detail/controller.component */ 67156);
/* harmony import */ var _change_email_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change_email/controller.component */ 74371);
/* harmony import */ var _change_info_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change_info/controller.component */ 19936);
/* harmony import */ var _checking_service_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checking_service/controller.component */ 34436);
/* harmony import */ var _choose_role_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./choose-role/controller.component */ 27082);
/* harmony import */ var _confirm_change_email_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirm-change-email/controller.component */ 58899);
/* harmony import */ var _confirm_forgot_password_email_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirm-forgot-password-email/controller.component */ 86229);
/* harmony import */ var _confirm_account_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./confirm_account/controller.component */ 24503);
/* harmony import */ var _confirm_forgot_password_controller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./confirm_forgot_password/controller.component */ 79316);
/* harmony import */ var _confirm_forgot_password_old_controller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./confirm_forgot_password_old/controller.component */ 63916);
/* harmony import */ var _confirm_forgot_password_qr_controller_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./confirm_forgot_password_qr/controller.component */ 6347);
/* harmony import */ var _create_qr_forgot_pass_controller_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-qr-forgot-pass/controller.component */ 56885);
/* harmony import */ var _forgot_password_qr_success_controller_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forgot_password_qr_success/controller.component */ 35262);
/* harmony import */ var _login_scan_qr_controller_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login-scan-qr/controller.component */ 13579);
/* harmony import */ var _login_controller_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/controller.component */ 2761);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./masterpage/controller.component */ 26283);
/* harmony import */ var _register_controller_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/controller.component */ 64811);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./routing.module */ 1245);
/* harmony import */ var _set_new_password_controller_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./set_new_password/controller.component */ 51844);
/* harmony import */ var _switch_teacher_student_controller_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./switch-teacher-student/controller.component */ 73013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 5000);































class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_28__.EditorModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_21__.AuthRoutingModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule,
        _angular_fire_compat__WEBPACK_IMPORTED_MODULE_29__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseConfig_app1, 'auth')] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_masterpage_controller_component__WEBPACK_IMPORTED_MODULE_19__.AuthMasterPageComponent,
        _login_controller_component__WEBPACK_IMPORTED_MODULE_18__.LoginComponent,
        _register_controller_component__WEBPACK_IMPORTED_MODULE_20__.RegisterComponent,
        _confirm_forgot_password_controller_component__WEBPACK_IMPORTED_MODULE_12__.ConfirmForgotPasswordComponent,
        _confirm_forgot_password_old_controller_component__WEBPACK_IMPORTED_MODULE_13__.ConfirmForgotPasswordComponentOld,
        _confirm_account_controller_component__WEBPACK_IMPORTED_MODULE_11__.ConfirmAccountComponent,
        _checking_service_controller_component__WEBPACK_IMPORTED_MODULE_7__.CheckingServiceComponent,
        _set_new_password_controller_component__WEBPACK_IMPORTED_MODULE_22__.SetNewPasswordComponent,
        _change_info_controller_component__WEBPACK_IMPORTED_MODULE_6__.ChangeInfoComponent,
        _switch_teacher_student_controller_component__WEBPACK_IMPORTED_MODULE_23__.SwitchTeacherStudentComponent,
        _powerpoint_frontend_powerpoint_detail_controller_component__WEBPACK_IMPORTED_MODULE_4__.DialogOverviewExampleDialog,
        _login_scan_qr_controller_component__WEBPACK_IMPORTED_MODULE_17__.LoginScanQrComponent,
        _create_qr_forgot_pass_controller_component__WEBPACK_IMPORTED_MODULE_15__.CreateQrForgotPassComponent,
        _create_qr_forgot_pass_controller_component__WEBPACK_IMPORTED_MODULE_15__.DialogConfContentQrcodeDialogComponent,
        _confirm_forgot_password_qr_controller_component__WEBPACK_IMPORTED_MODULE_14__.ConfirmForgotPasswordQrComponent,
        _forgot_password_qr_success_controller_component__WEBPACK_IMPORTED_MODULE_16__.ForgotPasswordQrSuccessComponent,
        _confirm_forgot_password_email_controller_component__WEBPACK_IMPORTED_MODULE_10__.ConfirmForgotPasswordEmailComponent,
        _change_email_controller_component__WEBPACK_IMPORTED_MODULE_5__.ChangeEmailComponent,
        _confirm_change_email_controller_component__WEBPACK_IMPORTED_MODULE_9__.ConfirmChangeEmailComponent,
        _choose_role_controller_component__WEBPACK_IMPORTED_MODULE_8__.ChooseRoleComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_28__.EditorModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MyMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
        _routing_module__WEBPACK_IMPORTED_MODULE_21__.AuthRoutingModule,
        src_app_azota_ui_azota_ui_module__WEBPACK_IMPORTED_MODULE_0__.AzotaUiModule,
        src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.MyPipeModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_29__.AngularFireModule] }); })();


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
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ 88304);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/validator/whitespace.validator */ 41303);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-recaptcha */ 73396);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/auth */ 20948);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);


















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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_13_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.changeRegisterType(0)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "T\u00F4i l\u00E0 h\u1ECDc sinh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_13_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.changeRegisterType(1)); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Vui l\u00F2ng nh\u1EADp h\u1ECD v\u00E0 t\u00EAn.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function RegisterComponent_div_14_div_13_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Vui lo\u0300ng nh\u00E2\u0323p s\u00F4\u0301 \u0111i\u00EA\u0323n thoa\u0323i ho\u0103\u0323c email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function RegisterComponent_div_14_div_13_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r10.msgError, " ");
} }
function RegisterComponent_div_14_div_13_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "M\u00E2\u0323t kh\u00E2\u0309u da\u0300i t\u00F4\u0301i thi\u00EA\u0309u 6 ky\u0301 t\u01B0\u0323.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_13_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterComponent_div_14_div_13_div_41_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.getErrorType("password", "required") || ctx_r11.getErrorType("password", "minlength"));
} }
function RegisterComponent_div_14_div_13_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39)(1, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, ctx_r12.statusObj.errorMessage), "");
} }
function RegisterComponent_div_14_div_13_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36)(1, "form", 37)(2, "div", 27)(3, "div", 38)(4, "div", 39)(5, "div", 40)(6, "div", 41)(7, "div", 42)(8, "span", 43)(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "person_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, RegisterComponent_div_14_div_13_div_12_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 27)(14, "div", 38)(15, "div", 39)(16, "div", 40)(17, "div", 41)(18, "div", 42)(19, "span", 46)(20, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "mail_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "phone_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function RegisterComponent_div_14_div_13_Template_input_input_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.checkValidateUser(ctx_r15.form.controls.username.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, RegisterComponent_div_14_div_13_div_26_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, RegisterComponent_div_14_div_13_div_27_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 27)(29, "div", 38)(30, "div", 39)(31, "div", 40)(32, "div", 41)(33, "div", 42)(34, "span", 49)(35, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "lock_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_14_div_13_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.togglePassword()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, RegisterComponent_div_14_div_13_div_41_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, RegisterComponent_div_14_div_13_div_42_Template, 4, 3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 39)(44, "div", 27)(45, "div", 38)(46, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_14_div_13_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.registerForTeacher()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, RegisterComponent_div_14_div_13_span_47_Template, 3, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "\u0110\u0103ng k\u00FD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 54)(50, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "- HO\u1EB6C -");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 27)(53, "div", 28)(54, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_14_div_13_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.googleSignIn()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](56, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r6.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.form.controls["fullName"].invalid && (ctx_r6.form.controls["fullName"].dirty || ctx_r6.form.controls["fullName"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.form.controls["username"].invalid && (ctx_r6.form.controls["username"].dirty || ctx_r6.form.controls["username"].touched) && !ctx_r6.checkValidateUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.checkValidateUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx_r6.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r6.showPassword ? "visibility_outlined" : "visibility_off_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.form.controls["password"].invalid && (ctx_r6.form.controls["password"].dirty || ctx_r6.form.controls["password"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.statusObj.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r6.form.invalid || ctx_r6.statusObj.loading || ctx_r6.checkValidateUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.statusObj.loading || ctx_r6.checkLoadingLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](56, 11, "azota_assets/images/google-icon.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function RegisterComponent_div_14_div_14_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Vui l\u00F2ng nh\u1EADp h\u1ECD v\u00E0 t\u00EAn.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function RegisterComponent_div_14_div_14_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Vui lo\u0300ng nh\u00E2\u0323p s\u00F4\u0301 \u0111i\u00EA\u0323n thoa\u0323i ho\u0103\u0323c email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function RegisterComponent_div_14_div_14_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r22.msgError, " ");
} }
function RegisterComponent_div_14_div_14_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "M\u00E2\u0323t kh\u00E2\u0309u da\u0300i t\u00F4\u0301i thi\u00EA\u0309u 6 ky\u0301 t\u01B0\u0323.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_14_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterComponent_div_14_div_14_div_41_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r23.getErrorForm("studentPassword", "required") || ctx_r23.getErrorForm("studentPassword", "minlength"));
} }
function RegisterComponent_div_14_div_14_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39)(1, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "mytranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("*** ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, ctx_r24.statusObj.errorMessage), "");
} }
function RegisterComponent_div_14_div_14_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 61)(1, "form", 62)(2, "div", 27)(3, "div", 38)(4, "div", 39)(5, "div", 40)(6, "div", 41)(7, "div", 42)(8, "span", 43)(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "person_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, RegisterComponent_div_14_div_14_div_12_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 27)(14, "div", 38)(15, "div", 39)(16, "div", 40)(17, "div", 41)(18, "div", 42)(19, "span", 46)(20, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "mail_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "phone_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function RegisterComponent_div_14_div_14_Template_input_input_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.checkValidateUser(ctx_r27.formRegister.controls.studentUsername.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, RegisterComponent_div_14_div_14_div_26_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, RegisterComponent_div_14_div_14_div_27_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 27)(29, "div", 38)(30, "div", 39)(31, "div", 40)(32, "div", 41)(33, "div", 42)(34, "span", 49)(35, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "lock_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_14_div_14_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.togglePassword()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, RegisterComponent_div_14_div_14_div_41_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, RegisterComponent_div_14_div_14_div_42_Template, 4, 3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_14_div_14_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.registerForStudent()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, RegisterComponent_div_14_div_14_span_44_Template, 3, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, " \u0110\u0103ng K\u00FD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 54)(47, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "- HO\u1EB6C -");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 27)(50, "div", 28)(51, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_14_div_14_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.googleSignIn()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](53, "convertCdn");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r7.formRegister);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.formRegister.controls["studentFullName"].invalid && (ctx_r7.formRegister.controls["studentFullName"].dirty || ctx_r7.formRegister.controls["studentFullName"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.formRegister.controls["studentUsername"].invalid && (ctx_r7.formRegister.controls["studentUsername"].dirty || ctx_r7.formRegister.controls["studentUsername"].touched) && !ctx_r7.checkValidateUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.checkValidateUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx_r7.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.showPassword ? "visibility_outlined" : "visibility_off_outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.formRegister.controls["studentPassword"].invalid && (ctx_r7.formRegister.controls["studentPassword"].dirty || ctx_r7.formRegister.controls["studentPassword"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.statusObj.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r7.formRegister.invalid || ctx_r7.statusObj.loading || ctx_r7.checkValidateUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.statusObj.loading || ctx_r7.checkLoadingLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](53, 11, "azota_assets/images/google-icon.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { return_url: a0, from: "register", user_click: "true" }; };
function RegisterComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_14_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r32.changeRegisterType(0)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00A0 T\u00F4i l\u00E0 h\u1ECDc sinh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 23)(7, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_div_14_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.changeRegisterType(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\u00A0 T\u00F4i l\u00E0 gi\u00E1o vi\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 27)(11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, RegisterComponent_div_14_div_13_Template, 59, 13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, RegisterComponent_div_14_div_14_Template, 56, 13, "div", 30);
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
    constructor(formBuilder, activeRoute, commonService, baseApiService, recaptchaV3Service, fireAuth, authService) {
        super(commonService);
        this.formBuilder = formBuilder;
        this.activeRoute = activeRoute;
        this.commonService = commonService;
        this.baseApiService = baseApiService;
        this.recaptchaV3Service = recaptchaV3Service;
        this.fireAuth = fireAuth;
        this.authService = authService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({});
        this.formRegister = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({});
        this.returnUrl = '';
        this.zaloLoginUrl = '';
        this.isHiddenFormRegister = true;
        this.isTeacher = false;
        this.isStudent = false;
        this.yesterday = new Date();
        this.isShowOption = true;
        this.isShowRegisterForStudent = false;
        this.isShowRegisterForTeacher = false;
        this.checkValidateUsername = false;
        this.msgError = '';
        this.checkLoadingLogin = true;
        this.showPassword = false;
        this.initStatusObj();
        fireAuth.authState.subscribe(user => {
            if (!user) {
                this.checkLoadingLogin = false;
                return;
            }
            this.signInWithTokenGoogle(user);
        });
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
        if (this.returnUrl) {
            this.myNavigationWithQueryString(`/auth/register/${type}`, `?return_url=${encodeURIComponent(this.returnUrl)}&user_click=true`);
        }
        else {
            this.myNavigationWithQueryString(`/auth/register/${type}`, `?user_click=true`);
        }
        if (type == 0) {
            this.commonService.gaEvent('sign_up_switch_to_student');
            this.isTeacher = false;
            this.isStudent = true;
            this.checkValidateUsername = false;
        }
        else {
            this.commonService.gaEvent('sign_up_switch_to_teacher');
            this.isTeacher = true;
            this.isStudent = false;
            this.checkValidateUsername = false;
        }
    }
    loginZalo() {
        this.commonService.gaEvent('sign_up_teacher_by_zalo');
        window.location.href = this.zaloLoginUrl;
    }
    registerForTeacher() {
        if (this.form.valid && !this.checkValidateUsername) {
            this.executeImportantAction().then(token => {
                var form_object = this.commonService.getFormObj(this.form);
                var body = {
                    fullName: form_object.fullName,
                    password: form_object.password,
                    tokenCaptcha: token
                };
                if (this.validateEmail(form_object.username)) {
                    body.email = form_object.username;
                }
                else {
                    body.phone = form_object.username;
                }
                this.initStatusObj();
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
        if (this.formRegister.valid && !this.checkValidateUsername) {
            this.executeImportantAction().then(token => {
                this.commonService.gaEvent('sign_up_student');
                var form_obj_student = this.commonService.getFormObj(this.formRegister);
                this.initStatusObj();
                var body = {
                    fullName: form_obj_student.studentFullName,
                    password: form_obj_student.studentPassword,
                    tokenCaptcha: token
                };
                if (this.validateEmail(form_obj_student.studentUsername)) {
                    body.email = form_obj_student.studentUsername;
                }
                else {
                    body.phone = form_obj_student.studentUsername;
                }
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
    }
    validateEmail(str) {
        return str.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
    checkValidateUser(value) {
        this.msgError = '';
        if (isNaN(Number(value))) {
            if (this.validateEmail(value)) {
                this.checkValidateUsername = false;
                this.msgError = '';
            }
            else {
                this.msgError = 'Vui lòng nhập đúng định dạng email.';
                this.checkValidateUsername = true;
            }
        }
        else {
            if (value.length == 10) {
                this.msgError = '';
                this.checkValidateUsername = false;
            }
            else {
                this.msgError = 'Số điện thoại phải là số và 10 ký tự.';
                this.checkValidateUsername = true;
            }
        }
    }
    googleSignIn() {
        // tslint:disable-next-line: new-parens
        this.fireAuth.signInWithRedirect(new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.GoogleAuthProvider).then(() => {
            return this.fireAuth.getRedirectResult().then(result => { });
        }).catch(error => {
            console.log(error);
        });
    }
    signInWithTokenGoogle(user) {
        this.checkLoadingLogin = true;
        let typeParam = this.commonService.getMyParam(this.activeRoute, 'type');
        let isRegister = parseInt(typeParam !== null && typeParam !== void 0 ? typeParam : '0', 10);
        let idToken = user._delegate.accessToken;
        let body = {
            isRegisterForTeacher: isRegister,
            firebaseToken: idToken,
        };
        this.subscriptions.add(this.authService.apiAuthAuthByFirebasePost(body).subscribe(res => {
            var _a, _b;
            if (res.success == 1) {
                this.baseApiService.redirectLoginByRole((_a = this.commonService.getMyQueryParam('return_url')) !== null && _a !== void 0 ? _a : '');
                this.successStatusObj();
                this.checkLoadingLogin = false;
            }
            else {
                this.errorStatusObj((_b = res.message) !== null && _b !== void 0 ? _b : '', true);
                this.checkLoadingLogin = false;
            }
        }));
    }
    togglePassword() {
        this.showPassword = !this.showPassword;
    }
    ngOnInit() {
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
                username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__.WhiteSpaceValidator.noWhiteSpace]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(6)]],
            });
            this.formRegister = this.formBuilder.group({
                studentFullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__.WhiteSpaceValidator.noWhiteSpace]],
                studentUsername: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, src_app_core_validator_whitespace_validator__WEBPACK_IMPORTED_MODULE_1__.WhiteSpaceValidator.noWhiteSpace]],
                studentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(6)]]
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
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_4__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__.ReCaptchaV3Service), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_5__.AuthService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 6, consts: [[1, "container-fluid", "component-wrap", "centerBoth", "hasBg"], [1, "row", "py-5"], [1, "col-sm-3"], [1, "col-sm-6"], ["id", "authForm", 1, "card"], [1, "text-center", "mt-4"], [1, "text-center", "p-0"], ["alt", "logo", 2, "width", "180px", 3, "src"], [1, "p-0", "m-0"], [1, "card-body"], [4, "ngIf"], ["class", "row", "style", "justify-content: space-around", 4, "ngIf"], [3, "hidden", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "row", 2, "justify-content", "space-around"], [1, "col-sm-4", "border-card", "mb-3", 3, "click"], [1, "df-logo"], [1, "fas", "fa-graduation-cap", "pb-3", 2, "font-size", "36px"], ["width", "36px", "height", "45px", 1, "mb-3", 3, "src"], [3, "hidden"], [1, "row", "justify-content-center", "pt-3"], [1, "col-sm-6", "text-center", "mb-3"], [1, "clickable", "select-style", 3, "click"], [1, "fas", "fa-graduation-cap"], [1, "fas", "fa-user-alt"], [1, "row"], [1, "col-12"], ["id", "teacher", 4, "ngIf"], ["id", "chilren", 4, "ngIf"], [1, "mt-2", 2, "text-align", "justify", "font-size", "13px"], ["href", "/privacy/index.html", "target", "_blank"], [1, "text-center", "mt-3"], [1, "text-normal"], [3, "routerLink", "queryParams"], ["id", "teacher"], [1, "form-horizontal", 3, "formGroup"], [1, "col-sm-12"], [1, "form-group"], [1, "col-sm-12", "p-0"], [1, "input-group", "mb-3"], [1, "input-group-append"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "H\u1ECD t\u00EAn", "formControlName", "fullName", "autocomplete", "new-password", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["id", "basic-addon3", 1, "input-group-text", 2, "padding-left", "0.35rem", "padding-right", "0.35rem"], [2, "width", "15px", "height", "15px", "font-size", "15px"], ["type", "phone", "placeholder", "Nh\u1EADp S\u0110T ho\u1EB7c email", "formControlName", "username", "autocomplete", "new-password", 1, "form-control", 3, "input"], ["id", "basic-addon3", 1, "input-group-text"], ["placeholder", "M\u1EADt kh\u1EA9u", "formControlName", "password", 1, "form-control", "pr-40", 3, "type"], [1, "btn-toggle-password", 3, "click"], ["class", "form-group", 4, "ngIf"], ["mat-raised-button", "", 1, "btn-azt-primary", 2, "width", "100%", 3, "disabled", "click"], [1, "text-center", "my-3"], [1, "h6", "mute-text"], ["mat-stroked-button", "", 2, "width", "100%", "padding", "1px", 3, "click"], ["alt", "Zalo Icon", 1, "img-responsive", "zalo-icon", 3, "src"], [1, "alert", "alert-danger"], [1, "col-sm-12", "control-label", "text-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], ["id", "chilren"], [1, "form-horinzal", 3, "formGroup"], ["type", "text", "placeholder", "H\u1ECD t\u00EAn", "formControlName", "studentFullName", "autocomplete", "new-password", 1, "form-control"], ["type", "phone", "placeholder", "Nh\u1EADp S\u0110T ho\u1EB7c email", "formControlName", "studentUsername", "autocomplete", "new-password", 1, "form-control", 3, "input"], ["placeholder", "M\u1EADt kh\u1EA9u", "formControlName", "studentPassword", 1, "form-control", "pr-40", 3, "type"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "convertCdn");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u0110\u0103ng k\u00FD t\u00E0i kho\u1EA3n");
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
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_16__.LocalizeRouterPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_6__.ConvertCdnPipe], styles: [".zalo-icon[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-right: 10px;\n}\n\n.select-style[_ngcontent-%COMP%] {\n  color: #868686 !important;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-right: 0;\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n  background-color: rgba(243, 244, 245, 0.1411764706) !important;\n}\n\n.select-style[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.select-style[_ngcontent-%COMP%]:hover {\n  color: #2361ae !important;\n}\n\n.select-style-active[_ngcontent-%COMP%] {\n  color: #2361ae !important;\n}\n\n.df-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.register--login[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n}\n\n.two-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 80%;\n  height: 100vh;\n  margin: auto;\n}\n\n.register-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  \n  flex-direction: column;\n  justify-content: center;\n}\n\n.btn-max-width[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  font-size: 1.5rem;\n}\n\n.responsive__text[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #2361ae !important;\n  border-color: #2361ae !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n  border-color: #2361ae !important;\n  background-color: #2361ae !important;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: rgb(11, 129, 142) !important;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  color: #2361ae !important;\n  border-color: #2361ae !important;\n  background-color: rgba(14, 172, 190, 0.15);\n}\n\n.btn-border-fix[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n}\n\n.border-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid hsla(0deg, 0%, 86.3%, 0.8);\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 12px;\n  align-items: center;\n  text-align: center;\n}\n\n.border-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.07), -10px -10px 20px hsla(0deg, 0%, 100%, 0.8);\n}\n\n.button-color[_ngcontent-%COMP%] {\n  background-color: #2361ae !important;\n  color: white !important;\n}\n\n.text-line[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n\n.text-line[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 45%;\n  height: 0.5px;\n  position: absolute;\n  right: 0;\n  background-color: #868686;\n  top: 50%;\n}\n\n.text-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 45%;\n  height: 0.5px;\n  position: absolute;\n  left: 0;\n  background-color: #868686;\n  top: 50%;\n}\n\n.border-select-box[_ngcontent-%COMP%] {\n  border: 1px solid #ccd0d5;\n  border-radius: 4px;\n  padding: 8px 16px;\n}\n\n  .mat-radio-label {\n  margin-bottom: 0 !important;\n}\n\n  .mat-radio-label-content {\n  padding-left: 16px !important;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-inner-circle, .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #2361ae !important;\n}\n\n  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2361ae !important;\n}\n\n  .mat-input-element {\n  font-size: 18px !important;\n  caret-color: #2361ae !important;\n}\n\n  .mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon, .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-datepicker-toggle-default-icon[_ngcontent-%COMP%] {\n  width: 1.5em !important;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(0, 0, 0, 0.12) !important;\n}\n\n.btn-toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 0;\n  border: none;\n  background: transparent;\n  z-index: 99;\n}\n\n.btn-toggle-password[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #757575;\n  transition: all 0.5s;\n}\n\n.btn-toggle-password[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover {\n  color: #434242;\n}\n\n.pr-40[_ngcontent-%COMP%] {\n  padding-right: 40px;\n}\n\n@media only screen and (max-width: 424px) {\n  .btn-max-width[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n@media only screen and (max-width: 364px) {\n  .text-line[_ngcontent-%COMP%]::after, .text-line[_ngcontent-%COMP%]::before {\n    width: 40%;\n  }\n}"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);
/* harmony import */ var _change_email_controller_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change_email/controller.component */ 74371);
/* harmony import */ var _change_info_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change_info/controller.component */ 19936);
/* harmony import */ var _checking_service_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checking_service/controller.component */ 34436);
/* harmony import */ var _choose_role_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-role/controller.component */ 27082);
/* harmony import */ var _confirm_change_email_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm-change-email/controller.component */ 58899);
/* harmony import */ var _confirm_forgot_password_email_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-forgot-password-email/controller.component */ 86229);
/* harmony import */ var _confirm_account_controller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm_account/controller.component */ 24503);
/* harmony import */ var _confirm_forgot_password_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirm_forgot_password/controller.component */ 79316);
/* harmony import */ var _confirm_forgot_password_old_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./confirm_forgot_password_old/controller.component */ 63916);
/* harmony import */ var _confirm_forgot_password_qr_controller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirm_forgot_password_qr/controller.component */ 6347);
/* harmony import */ var _create_qr_forgot_pass_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-qr-forgot-pass/controller.component */ 56885);
/* harmony import */ var _forgot_password_qr_success_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot_password_qr_success/controller.component */ 35262);
/* harmony import */ var _login_scan_qr_controller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login-scan-qr/controller.component */ 13579);
/* harmony import */ var _login_controller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/controller.component */ 2761);
/* harmony import */ var _logout_controller_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logout/controller.component */ 34403);
/* harmony import */ var _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./masterpage/controller.component */ 26283);
/* harmony import */ var _register_controller_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/controller.component */ 64811);
/* harmony import */ var _set_new_password_controller_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./set_new_password/controller.component */ 51844);
/* harmony import */ var _switch_teacher_student_controller_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./switch-teacher-student/controller.component */ 73013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 5000);























const authRoutes = [
    {
        path: '',
        component: _masterpage_controller_component__WEBPACK_IMPORTED_MODULE_15__.AuthMasterPageComponent,
        children: [
            { path: 'login', component: _login_controller_component__WEBPACK_IMPORTED_MODULE_13__.LoginComponent },
            { path: 'login-scan/:role', component: _login_scan_qr_controller_component__WEBPACK_IMPORTED_MODULE_12__.LoginScanQrComponent },
            { path: 'register', component: _register_controller_component__WEBPACK_IMPORTED_MODULE_16__.RegisterComponent },
            { path: 'register/:type', component: _register_controller_component__WEBPACK_IMPORTED_MODULE_16__.RegisterComponent },
            { path: 'logout', component: _logout_controller_component__WEBPACK_IMPORTED_MODULE_14__.LogoutComponent },
            { path: 'confirm_forgot_password', component: _confirm_forgot_password_controller_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmForgotPasswordComponent },
            { path: 'confirm-forgot-password-email', component: _confirm_forgot_password_email_controller_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmForgotPasswordEmailComponent },
            { path: 'forgot_password_susscess', component: _forgot_password_qr_success_controller_component__WEBPACK_IMPORTED_MODULE_11__.ForgotPasswordQrSuccessComponent },
            { path: 'confirm_forgot_password_qr', component: _confirm_forgot_password_qr_controller_component__WEBPACK_IMPORTED_MODULE_9__.ConfirmForgotPasswordQrComponent },
            { path: 'confirm_forgot_password_old', component: _confirm_forgot_password_old_controller_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmForgotPasswordComponentOld },
            { path: 'confirm_account', component: _confirm_account_controller_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmAccountComponent },
            { path: 'checking_service', component: _checking_service_controller_component__WEBPACK_IMPORTED_MODULE_2__.CheckingServiceComponent },
            { path: 'set_new_password', component: _set_new_password_controller_component__WEBPACK_IMPORTED_MODULE_17__.SetNewPasswordComponent },
            { path: 'change-info', component: _change_info_controller_component__WEBPACK_IMPORTED_MODULE_1__.ChangeInfoComponent },
            { path: 'switch-teacher-student', component: _switch_teacher_student_controller_component__WEBPACK_IMPORTED_MODULE_18__.SwitchTeacherStudentComponent },
            { path: 'create-qr-forgot-pass/:role', component: _create_qr_forgot_pass_controller_component__WEBPACK_IMPORTED_MODULE_10__.CreateQrForgotPassComponent },
            { path: 'change-email', component: _change_email_controller_component__WEBPACK_IMPORTED_MODULE_0__.ChangeEmailComponent },
            { path: 'confirm-change-email', component: _confirm_change_email_controller_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmChangeEmailComponent },
            { path: 'choose-role', component: _choose_role_controller_component__WEBPACK_IMPORTED_MODULE_3__.ChooseRoleComponent },
        ]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forChild(authRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_21__.LocalizeRouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_21__.LocalizeRouterModule] }); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var src_app_core_supers_mybase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/supers/mybase.component */ 55330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 25245);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 37389);
/* harmony import */ var _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/common.pipe */ 1033);













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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SetNewPasswordComponent_div_14_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.form.invalid || ctx_r6.statusObj.loading || ctx_r6.changePassword()); });
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
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({});
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
SetNewPasswordComponent.ɵfac = function SetNewPasswordComponent_Factory(t) { return new (t || SetNewPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_2__.BaseApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
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
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_11__.LocalizeRouterPipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.ConvertCdnPipe], encapsulation: 2 });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_api_base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/base.api.service */ 16384);
/* harmony import */ var src_app_core_auto_api_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auto_api/common_api */ 80770);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 47423);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwitchTeacherStudentComponent_div_4_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.statusObj.loading || ctx_r5.becomeTeacher()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SwitchTeacherStudentComponent_div_4_div_10_span_4_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Click v\u00E0o \u0111\u00E2y \u0111\u1EC3 tr\u1EDF th\u00E0nh gi\u00E1o vi\u00EAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 19)(7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwitchTeacherStudentComponent_div_4_div_10_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.goBack()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwitchTeacherStudentComponent_div_5_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.statusObj.loading || ctx_r11.becomeStudent()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SwitchTeacherStudentComponent_div_5_div_10_span_4_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Click v\u00E0o \u0111\u00E2y \u0111\u1EC3 b\u1ECF quy\u1EC1n gi\u00E1o vi\u00EAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 19)(7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwitchTeacherStudentComponent_div_5_div_10_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.goBack()); });
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.MytranslatePipe, _core_pipes_common_pipe__WEBPACK_IMPORTED_MODULE_4__.ConvertCdnPipe] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);

class WindowService {
    get windowRef() {
        return window;
    }
}
WindowService.ɵfac = function WindowService_Factory(t) { return new (t || WindowService)(); };
WindowService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowService, factory: WindowService.ɵfac });


/***/ }),

/***/ 37982:
/*!***********************************************************!*\
  !*** ./node_modules/firebase/analytics/dist/index.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAnalytics": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.getAnalytics),
/* harmony export */   "initializeAnalytics": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.initializeAnalytics),
/* harmony export */   "isSupported": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.isSupported),
/* harmony export */   "logEvent": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.logEvent),
/* harmony export */   "setAnalyticsCollectionEnabled": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setAnalyticsCollectionEnabled),
/* harmony export */   "setCurrentScreen": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setCurrentScreen),
/* harmony export */   "setUserId": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setUserId),
/* harmony export */   "setUserProperties": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setUserProperties),
/* harmony export */   "settings": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.settings)
/* harmony export */ });
/* harmony import */ var _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/analytics */ 70579);
 //# sourceMappingURL=index.esm.js.map

/***/ }),

/***/ 74766:
/*!***********************************************************!*\
  !*** ./node_modules/firebase/app-check/dist/index.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomProvider": () => (/* reexport safe */ _firebase_app_check__WEBPACK_IMPORTED_MODULE_0__.CustomProvider),
/* harmony export */   "ReCaptchaEnterpriseProvider": () => (/* reexport safe */ _firebase_app_check__WEBPACK_IMPORTED_MODULE_0__.ReCaptchaEnterpriseProvider),
/* harmony export */   "ReCaptchaV3Provider": () => (/* reexport safe */ _firebase_app_check__WEBPACK_IMPORTED_MODULE_0__.ReCaptchaV3Provider),
/* harmony export */   "getToken": () => (/* reexport safe */ _firebase_app_check__WEBPACK_IMPORTED_MODULE_0__.getToken),
/* harmony export */   "initializeAppCheck": () => (/* reexport safe */ _firebase_app_check__WEBPACK_IMPORTED_MODULE_0__.initializeAppCheck),
/* harmony export */   "onTokenChanged": () => (/* reexport safe */ _firebase_app_check__WEBPACK_IMPORTED_MODULE_0__.onTokenChanged),
/* harmony export */   "setTokenAutoRefreshEnabled": () => (/* reexport safe */ _firebase_app_check__WEBPACK_IMPORTED_MODULE_0__.setTokenAutoRefreshEnabled)
/* harmony export */ });
/* harmony import */ var _firebase_app_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app-check */ 13197);
 //# sourceMappingURL=index.esm.js.map

/***/ }),

/***/ 70127:
/*!************************************************************!*\
  !*** ./node_modules/firebase/compat/app/dist/index.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _firebase_app_compat__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _firebase_app_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app-compat */ 63942);


var name = "firebase";
var version = "9.8.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

_firebase_app_compat__WEBPACK_IMPORTED_MODULE_0__["default"].registerVersion(name, version, 'app-compat'); //# sourceMappingURL=index.esm.js.map

/***/ }),

/***/ 57663:
/*!***********************************************************!*\
  !*** ./node_modules/firebase/messaging/dist/index.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteToken": () => (/* reexport safe */ _firebase_messaging__WEBPACK_IMPORTED_MODULE_0__.deleteToken),
/* harmony export */   "getMessaging": () => (/* reexport safe */ _firebase_messaging__WEBPACK_IMPORTED_MODULE_0__.getMessaging),
/* harmony export */   "getToken": () => (/* reexport safe */ _firebase_messaging__WEBPACK_IMPORTED_MODULE_0__.getToken),
/* harmony export */   "isSupported": () => (/* reexport safe */ _firebase_messaging__WEBPACK_IMPORTED_MODULE_0__.isSupported),
/* harmony export */   "onMessage": () => (/* reexport safe */ _firebase_messaging__WEBPACK_IMPORTED_MODULE_0__.onMessage)
/* harmony export */ });
/* harmony import */ var _firebase_messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/messaging */ 20908);
 //# sourceMappingURL=index.esm.js.map

/***/ }),

/***/ 47787:
/*!***************************************************************!*\
  !*** ./node_modules/firebase/remote-config/dist/index.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activate": () => (/* reexport safe */ _firebase_remote_config__WEBPACK_IMPORTED_MODULE_0__.activate),
/* harmony export */   "ensureInitialized": () => (/* reexport safe */ _firebase_remote_config__WEBPACK_IMPORTED_MODULE_0__.ensureInitialized),
/* harmony export */   "fetchAndActivate": () => (/* reexport safe */ _firebase_remote_config__WEBPACK_IMPORTED_MODULE_0__.fetchAndActivate),
/* harmony export */   "fetchConfig": () => (/* reexport safe */ _firebase_remote_config__WEBPACK_IMPORTED_MODULE_0__.fetchConfig),
/* harmony export */   "getAll": () => (/* reexport safe */ _firebase_remote_config__WEBPACK_IMPORTED_MODULE_0__.getAll),
/* harmony export */   "getBoolean": () => (/* reexport safe */ _firebase_remote_config__WEBPACK_IMPORTED_MODULE_0__.getBoolean),
/* harmony export */   "getNumber": () => (/* reexport safe */ _firebase_remote_config__WEBPACK_IMPORTED_MODULE_0__.getNumber),
/* harmony export */   "getRemoteConfig": () => (/* reexport safe */ _firebase_remote_config__WEBPACK_IMPORTED_MODULE_0__.getRemoteConfig),
/* harmony export */   "getString": () => (/* reexport safe */ _firebase_remote_config__WEBPACK_IMPORTED_MODULE_0__.getString),
/* harmony export */   "getValue": () => (/* reexport safe */ _firebase_remote_config__WEBPACK_IMPORTED_MODULE_0__.getValue),
/* harmony export */   "isSupported": () => (/* reexport safe */ _firebase_remote_config__WEBPACK_IMPORTED_MODULE_0__.isSupported),
/* harmony export */   "setLogLevel": () => (/* reexport safe */ _firebase_remote_config__WEBPACK_IMPORTED_MODULE_0__.setLogLevel)
/* harmony export */ });
/* harmony import */ var _firebase_remote_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/remote-config */ 41122);
 //# sourceMappingURL=index.esm.js.map

/***/ }),

/***/ 70579:
/*!********************************************************************!*\
  !*** ./node_modules/@firebase/analytics/dist/esm/index.esm2017.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAnalytics": () => (/* binding */ getAnalytics),
/* harmony export */   "initializeAnalytics": () => (/* binding */ initializeAnalytics),
/* harmony export */   "isSupported": () => (/* binding */ isSupported),
/* harmony export */   "logEvent": () => (/* binding */ logEvent),
/* harmony export */   "setAnalyticsCollectionEnabled": () => (/* binding */ setAnalyticsCollectionEnabled),
/* harmony export */   "setCurrentScreen": () => (/* binding */ setCurrentScreen),
/* harmony export */   "setUserId": () => (/* binding */ setUserId),
/* harmony export */   "setUserProperties": () => (/* binding */ setUserProperties),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/app */ 49681);
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/logger */ 41877);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/util */ 42090);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/component */ 34859);
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/installations */ 12833);






/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Type constant for Firebase Analytics.
 */

const ANALYTICS_TYPE = 'analytics'; // Key to attach FID to in gtag params.

const GA_FID_KEY = 'firebase_id';
const ORIGIN_KEY = 'origin';
const FETCH_TIMEOUT_MILLIS = 60 * 1000;
const DYNAMIC_CONFIG_URL = 'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig';
const GTAG_URL = 'https://www.googletagmanager.com/gtag/js';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.Logger('@firebase/analytics');
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Makeshift polyfill for Promise.allSettled(). Resolves when all promises
 * have either resolved or rejected.
 *
 * @param promises Array of promises to wait for.
 */

function promiseAllSettled(promises) {
  return Promise.all(promises.map(promise => promise.catch(e => e)));
}
/**
 * Inserts gtag script tag into the page to asynchronously download gtag.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */


function insertScriptTag(dataLayerName, measurementId) {
  const script = document.createElement('script'); // We are not providing an analyticsId in the URL because it would trigger a `page_view`
  // without fid. We will initialize ga-id using gtag (config) command together with fid.

  script.src = `${GTAG_URL}?l=${dataLayerName}&id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);
}
/**
 * Get reference to, or create, global datalayer.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */


function getOrCreateDataLayer(dataLayerName) {
  // Check for existing dataLayer and create if needed.
  let dataLayer = [];

  if (Array.isArray(window[dataLayerName])) {
    dataLayer = window[dataLayerName];
  } else {
    window[dataLayerName] = dataLayer;
  }

  return dataLayer;
}
/**
 * Wrapped gtag logic when gtag is called with 'config' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param measurementId GA Measurement ID to set config for.
 * @param gtagParams Gtag config params to set.
 */


function gtagOnConfig(_x, _x2, _x3, _x4, _x5, _x6) {
  return _gtagOnConfig.apply(this, arguments);
}
/**
 * Wrapped gtag logic when gtag is called with 'event' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementId GA Measurement ID to log event to.
 * @param gtagParams Params to log with this event.
 */


function _gtagOnConfig() {
  _gtagOnConfig = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams) {
    // If config is already fetched, we know the appId and can use it to look up what FID promise we
    /// are waiting for, and wait only on that one.
    const correspondingAppId = measurementIdToAppId[measurementId];

    try {
      if (correspondingAppId) {
        yield initializationPromisesMap[correspondingAppId];
      } else {
        // If config is not fetched yet, wait for all configs (we don't know which one we need) and
        // find the appId (if any) corresponding to this measurementId. If there is one, wait on
        // that appId's initialization promise. If there is none, promise resolves and gtag
        // call goes through.
        const dynamicConfigResults = yield promiseAllSettled(dynamicConfigPromisesList);
        const foundConfig = dynamicConfigResults.find(config => config.measurementId === measurementId);

        if (foundConfig) {
          yield initializationPromisesMap[foundConfig.appId];
        }
      }
    } catch (e) {
      logger.error(e);
    }

    gtagCore("config"
    /* CONFIG */
    , measurementId, gtagParams);
  });
  return _gtagOnConfig.apply(this, arguments);
}

function gtagOnEvent(_x7, _x8, _x9, _x10, _x11) {
  return _gtagOnEvent.apply(this, arguments);
}
/**
 * Wraps a standard gtag function with extra code to wait for completion of
 * relevant initialization promises before sending requests.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 */


function _gtagOnEvent() {
  _gtagOnEvent = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams) {
    try {
      let initializationPromisesToWaitFor = []; // If there's a 'send_to' param, check if any ID specified matches
      // an initializeIds() promise we are waiting for.

      if (gtagParams && gtagParams['send_to']) {
        let gaSendToList = gtagParams['send_to']; // Make it an array if is isn't, so it can be dealt with the same way.

        if (!Array.isArray(gaSendToList)) {
          gaSendToList = [gaSendToList];
        } // Checking 'send_to' fields requires having all measurement ID results back from
        // the dynamic config fetch.


        const dynamicConfigResults = yield promiseAllSettled(dynamicConfigPromisesList);

        for (const sendToId of gaSendToList) {
          // Any fetched dynamic measurement ID that matches this 'send_to' ID
          const foundConfig = dynamicConfigResults.find(config => config.measurementId === sendToId);
          const initializationPromise = foundConfig && initializationPromisesMap[foundConfig.appId];

          if (initializationPromise) {
            initializationPromisesToWaitFor.push(initializationPromise);
          } else {
            // Found an item in 'send_to' that is not associated
            // directly with an FID, possibly a group.  Empty this array,
            // exit the loop early, and let it get populated below.
            initializationPromisesToWaitFor = [];
            break;
          }
        }
      } // This will be unpopulated if there was no 'send_to' field , or
      // if not all entries in the 'send_to' field could be mapped to
      // a FID. In these cases, wait on all pending initialization promises.


      if (initializationPromisesToWaitFor.length === 0) {
        initializationPromisesToWaitFor = Object.values(initializationPromisesMap);
      } // Run core gtag function with args after all relevant initialization
      // promises have been resolved.


      yield Promise.all(initializationPromisesToWaitFor); // Workaround for http://b/141370449 - third argument cannot be undefined.

      gtagCore("event"
      /* EVENT */
      , measurementId, gtagParams || {});
    } catch (e) {
      logger.error(e);
    }
  });
  return _gtagOnEvent.apply(this, arguments);
}

function wrapGtag(gtagCore,
/**
 * Allows wrapped gtag calls to wait on whichever intialization promises are required,
 * depending on the contents of the gtag params' `send_to` field, if any.
 */
initializationPromisesMap,
/**
 * Wrapped gtag calls sometimes require all dynamic config fetches to have returned
 * before determining what initialization promises (which include FIDs) to wait for.
 */
dynamicConfigPromisesList,
/**
 * Wrapped gtag config calls can narrow down which initialization promise (with FID)
 * to wait for if the measurementId is already fetched, by getting the corresponding appId,
 * which is the key for the initialization promises map.
 */
measurementIdToAppId) {
  /**
   * Wrapper around gtag that ensures FID is sent with gtag calls.
   * @param command Gtag command type.
   * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
   * @param gtagParams Params if event is EVENT/CONFIG.
   */
  function gtagWrapper(_x12, _x13, _x14) {
    return _gtagWrapper.apply(this, arguments);
  }

  function _gtagWrapper() {
    _gtagWrapper = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (command, idOrNameOrParams, gtagParams) {
      try {
        // If event, check that relevant initialization promises have completed.
        if (command === "event"
        /* EVENT */
        ) {
          // If EVENT, second arg must be measurementId.
          yield gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, idOrNameOrParams, gtagParams);
        } else if (command === "config"
        /* CONFIG */
        ) {
          // If CONFIG, second arg must be measurementId.
          yield gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, idOrNameOrParams, gtagParams);
        } else {
          // If SET, second arg must be params.
          gtagCore("set"
          /* SET */
          , idOrNameOrParams);
        }
      } catch (e) {
        logger.error(e);
      }
    });
    return _gtagWrapper.apply(this, arguments);
  }

  return gtagWrapper;
}
/**
 * Creates global gtag function or wraps existing one if found.
 * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
 * 'event' calls that belong to the GAID associated with this Firebase instance.
 *
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param dataLayerName Name of global GA datalayer array.
 * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified).
 */


function wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagFunctionName) {
  // Create a basic core gtag function
  let gtagCore = function (..._args) {
    // Must push IArguments object, not an array.
    window[dataLayerName].push(arguments);
  }; // Replace it with existing one if found


  if (window[gtagFunctionName] && typeof window[gtagFunctionName] === 'function') {
    // @ts-ignore
    gtagCore = window[gtagFunctionName];
  }

  window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId);
  return {
    gtagCore,
    wrappedGtag: window[gtagFunctionName]
  };
}
/**
 * Returns first script tag in DOM matching our gtag url pattern.
 */


function findGtagScriptOnPage() {
  const scriptTags = window.document.getElementsByTagName('script');

  for (const tag of Object.values(scriptTags)) {
    if (tag.src && tag.src.includes(GTAG_URL)) {
      return tag;
    }
  }

  return null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const ERRORS = {
  ["already-exists"
  /* ALREADY_EXISTS */
  ]: 'A Firebase Analytics instance with the appId {$id} ' + ' already exists. ' + 'Only one Firebase Analytics instance can be created for each appId.',
  ["already-initialized"
  /* ALREADY_INITIALIZED */
  ]: 'initializeAnalytics() cannot be called again with different options than those ' + 'it was initially called with. It can be called again with the same options to ' + 'return the existing instance, or getAnalytics() can be used ' + 'to get a reference to the already-intialized instance.',
  ["already-initialized-settings"
  /* ALREADY_INITIALIZED_SETTINGS */
  ]: 'Firebase Analytics has already been initialized.' + 'settings() must be called before initializing any Analytics instance' + 'or it will have no effect.',
  ["interop-component-reg-failed"
  /* INTEROP_COMPONENT_REG_FAILED */
  ]: 'Firebase Analytics Interop Component failed to instantiate: {$reason}',
  ["invalid-analytics-context"
  /* INVALID_ANALYTICS_CONTEXT */
  ]: 'Firebase Analytics is not supported in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}',
  ["indexeddb-unavailable"
  /* INDEXEDDB_UNAVAILABLE */
  ]: 'IndexedDB unavailable or restricted in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}',
  ["fetch-throttle"
  /* FETCH_THROTTLE */
  ]: 'The config fetch request timed out while in an exponential backoff state.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
  ["config-fetch-failed"
  /* CONFIG_FETCH_FAILED */
  ]: 'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}',
  ["no-api-key"
  /* NO_API_KEY */
  ]: 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid API key.',
  ["no-app-id"
  /* NO_APP_ID */
  ]: 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid app ID.'
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__.ErrorFactory('analytics', 'Analytics', ERRORS);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Backoff factor for 503 errors, which we want to be conservative about
 * to avoid overloading servers. Each retry interval will be
 * BASE_INTERVAL_MILLIS * LONG_RETRY_FACTOR ^ retryCount, so the second one
 * will be ~30 seconds (with fuzzing).
 */

const LONG_RETRY_FACTOR = 30;
/**
 * Base wait interval to multiplied by backoffFactor^backoffCount.
 */

const BASE_INTERVAL_MILLIS = 1000;
/**
 * Stubbable retry data storage class.
 */

class RetryData {
  constructor(throttleMetadata = {}, intervalMillis = BASE_INTERVAL_MILLIS) {
    this.throttleMetadata = throttleMetadata;
    this.intervalMillis = intervalMillis;
  }

  getThrottleMetadata(appId) {
    return this.throttleMetadata[appId];
  }

  setThrottleMetadata(appId, metadata) {
    this.throttleMetadata[appId] = metadata;
  }

  deleteThrottleMetadata(appId) {
    delete this.throttleMetadata[appId];
  }

}

const defaultRetryData = new RetryData();
/**
 * Set GET request headers.
 * @param apiKey App API key.
 */

function getHeaders(apiKey) {
  return new Headers({
    Accept: 'application/json',
    'x-goog-api-key': apiKey
  });
}
/**
 * Fetches dynamic config from backend.
 * @param app Firebase app to fetch config for.
 */


function fetchDynamicConfig(_x15) {
  return _fetchDynamicConfig.apply(this, arguments);
}
/**
 * Fetches dynamic config from backend, retrying if failed.
 * @param app Firebase app to fetch config for.
 */


function _fetchDynamicConfig() {
  _fetchDynamicConfig = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (appFields) {
    var _a;

    const {
      appId,
      apiKey
    } = appFields;
    const request = {
      method: 'GET',
      headers: getHeaders(apiKey)
    };
    const appUrl = DYNAMIC_CONFIG_URL.replace('{app-id}', appId);
    const response = yield fetch(appUrl, request);

    if (response.status !== 200 && response.status !== 304) {
      let errorMessage = '';

      try {
        // Try to get any error message text from server response.
        const jsonResponse = yield response.json();

        if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
          errorMessage = jsonResponse.error.message;
        }
      } catch (_ignored) {}

      throw ERROR_FACTORY.create("config-fetch-failed"
      /* CONFIG_FETCH_FAILED */
      , {
        httpStatus: response.status,
        responseMessage: errorMessage
      });
    }

    return response.json();
  });
  return _fetchDynamicConfig.apply(this, arguments);
}

function fetchDynamicConfigWithRetry(_x16) {
  return _fetchDynamicConfigWithRetry.apply(this, arguments);
}
/**
 * Runs one retry attempt.
 * @param appFields Necessary app config fields.
 * @param throttleMetadata Ongoing metadata to determine throttling times.
 * @param signal Abort signal.
 */


function _fetchDynamicConfigWithRetry() {
  _fetchDynamicConfigWithRetry = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (app, // retryData and timeoutMillis are parameterized to allow passing a different value for testing.
  retryData = defaultRetryData, timeoutMillis) {
    const {
      appId,
      apiKey,
      measurementId
    } = app.options;

    if (!appId) {
      throw ERROR_FACTORY.create("no-app-id"
      /* NO_APP_ID */
      );
    }

    if (!apiKey) {
      if (measurementId) {
        return {
          measurementId,
          appId
        };
      }

      throw ERROR_FACTORY.create("no-api-key"
      /* NO_API_KEY */
      );
    }

    const throttleMetadata = retryData.getThrottleMetadata(appId) || {
      backoffCount: 0,
      throttleEndTimeMillis: Date.now()
    };
    const signal = new AnalyticsAbortSignal();
    setTimeout( /*#__PURE__*/(0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
      signal.abort();
    }), timeoutMillis !== undefined ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
    return attemptFetchDynamicConfigWithRetry({
      appId,
      apiKey,
      measurementId
    }, throttleMetadata, signal, retryData);
  });
  return _fetchDynamicConfigWithRetry.apply(this, arguments);
}

function attemptFetchDynamicConfigWithRetry(_x17, _x18, _x19) {
  return _attemptFetchDynamicConfigWithRetry.apply(this, arguments);
}
/**
 * Supports waiting on a backoff by:
 *
 * <ul>
 *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
 *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
 *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
 *       request appear the same.</li>
 * </ul>
 *
 * <p>Visible for testing.
 */


function _attemptFetchDynamicConfigWithRetry() {
  _attemptFetchDynamicConfigWithRetry = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (appFields, {
    throttleEndTimeMillis,
    backoffCount
  }, signal, retryData = defaultRetryData // for testing
  ) {
    var _a, _b;

    const {
      appId,
      measurementId
    } = appFields; // Starts with a (potentially zero) timeout to support resumption from stored state.
    // Ensures the throttle end time is honored if the last attempt timed out.
    // Note the SDK will never make a request if the fetch timeout expires at this point.

    try {
      yield setAbortableTimeout(signal, throttleEndTimeMillis);
    } catch (e) {
      if (measurementId) {
        logger.warn(`Timed out fetching this Firebase app's measurement ID from the server.` + ` Falling back to the measurement ID ${measurementId}` + ` provided in the "measurementId" field in the local Firebase config. [${(_a = e) === null || _a === void 0 ? void 0 : _a.message}]`);
        return {
          appId,
          measurementId
        };
      }

      throw e;
    }

    try {
      const response = yield fetchDynamicConfig(appFields); // Note the SDK only clears throttle state if response is success or non-retriable.

      retryData.deleteThrottleMetadata(appId);
      return response;
    } catch (e) {
      const error = e;

      if (!isRetriableError(error)) {
        retryData.deleteThrottleMetadata(appId);

        if (measurementId) {
          logger.warn(`Failed to fetch this Firebase app's measurement ID from the server.` + ` Falling back to the measurement ID ${measurementId}` + ` provided in the "measurementId" field in the local Firebase config. [${error === null || error === void 0 ? void 0 : error.message}]`);
          return {
            appId,
            measurementId
          };
        } else {
          throw e;
        }
      }

      const backoffMillis = Number((_b = error === null || error === void 0 ? void 0 : error.customData) === null || _b === void 0 ? void 0 : _b.httpStatus) === 503 ? (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.calculateBackoffMillis)(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.calculateBackoffMillis)(backoffCount, retryData.intervalMillis); // Increments backoff state.

      const throttleMetadata = {
        throttleEndTimeMillis: Date.now() + backoffMillis,
        backoffCount: backoffCount + 1
      }; // Persists state.

      retryData.setThrottleMetadata(appId, throttleMetadata);
      logger.debug(`Calling attemptFetch again in ${backoffMillis} millis`);
      return attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData);
    }
  });
  return _attemptFetchDynamicConfigWithRetry.apply(this, arguments);
}

function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise((resolve, reject) => {
    // Derives backoff from given end time, normalizing negative numbers to zero.
    const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    const timeout = setTimeout(resolve, backoffMillis); // Adds listener, rather than sets onabort, because signal is a shared object.

    signal.addEventListener(() => {
      clearTimeout(timeout); // If the request completes before this timeout, the rejection has no effect.

      reject(ERROR_FACTORY.create("fetch-throttle"
      /* FETCH_THROTTLE */
      , {
        throttleEndTimeMillis
      }));
    });
  });
}
/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */


function isRetriableError(e) {
  if (!(e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_3__.FirebaseError) || !e.customData) {
    return false;
  } // Uses string index defined by ErrorData, which FirebaseError implements.


  const httpStatus = Number(e.customData['httpStatus']);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
/**
 * Shims a minimal AbortSignal (copied from Remote Config).
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */


class AnalyticsAbortSignal {
  constructor() {
    this.listeners = [];
  }

  addEventListener(listener) {
    this.listeners.push(listener);
  }

  abort() {
    this.listeners.forEach(listener => listener());
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function validateIndexedDB() {
  return _validateIndexedDB.apply(this, arguments);
}
/**
 * Initialize the analytics instance in gtag.js by calling config command with fid.
 *
 * NOTE: We combine analytics initialization and setting fid together because we want fid to be
 * part of the `page_view` event that's sent during the initialization
 * @param app Firebase app
 * @param gtagCore The gtag function that's not wrapped.
 * @param dynamicConfigPromisesList Array of all dynamic config promises.
 * @param measurementIdToAppId Maps measurementID to appID.
 * @param installations _FirebaseInstallationsInternal instance.
 *
 * @returns Measurement ID.
 */


function _validateIndexedDB() {
  _validateIndexedDB = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    var _a;

    if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.isIndexedDBAvailable)()) {
      logger.warn(ERROR_FACTORY.create("indexeddb-unavailable"
      /* INDEXEDDB_UNAVAILABLE */
      , {
        errorInfo: 'IndexedDB is not available in this environment.'
      }).message);
      return false;
    } else {
      try {
        yield (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.validateIndexedDBOpenable)();
      } catch (e) {
        logger.warn(ERROR_FACTORY.create("indexeddb-unavailable"
        /* INDEXEDDB_UNAVAILABLE */
        , {
          errorInfo: (_a = e) === null || _a === void 0 ? void 0 : _a.toString()
        }).message);
        return false;
      }
    }

    return true;
  });
  return _validateIndexedDB.apply(this, arguments);
}

function _initializeAnalytics(_x20, _x21, _x22, _x23, _x24, _x25, _x26) {
  return _initializeAnalytics2.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Analytics Service class.
 */


function _initializeAnalytics2() {
  _initializeAnalytics2 = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCore, dataLayerName, options) {
    var _a;

    const dynamicConfigPromise = fetchDynamicConfigWithRetry(app); // Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.

    dynamicConfigPromise.then(config => {
      measurementIdToAppId[config.measurementId] = config.appId;

      if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
        logger.warn(`The measurement ID in the local Firebase config (${app.options.measurementId})` + ` does not match the measurement ID fetched from the server (${config.measurementId}).` + ` To ensure analytics events are always sent to the correct Analytics property,` + ` update the` + ` measurement ID field in the local config or remove it from the local config.`);
      }
    }).catch(e => logger.error(e)); // Add to list to track state of all dynamic config promises.

    dynamicConfigPromisesList.push(dynamicConfigPromise);
    const fidPromise = validateIndexedDB().then(envIsValid => {
      if (envIsValid) {
        return installations.getId();
      } else {
        return undefined;
      }
    });
    const [dynamicConfig, fid] = yield Promise.all([dynamicConfigPromise, fidPromise]); // Detect if user has already put the gtag <script> tag on this page.

    if (!findGtagScriptOnPage()) {
      insertScriptTag(dataLayerName, dynamicConfig.measurementId);
    } // This command initializes gtag.js and only needs to be called once for the entire web app,
    // but since it is idempotent, we can call it multiple times.
    // We keep it together with other initialization logic for better code structure.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any


    gtagCore('js', new Date()); // User config added first. We don't want users to accidentally overwrite
    // base Firebase config properties.

    const configProperties = (_a = options === null || options === void 0 ? void 0 : options.config) !== null && _a !== void 0 ? _a : {}; // guard against developers accidentally setting properties with prefix `firebase_`

    configProperties[ORIGIN_KEY] = 'firebase';
    configProperties.update = true;

    if (fid != null) {
      configProperties[GA_FID_KEY] = fid;
    } // It should be the first config command called on this GA-ID
    // Initialize this GA-ID and set FID on it using the gtag config API.
    // Note: This will trigger a page_view event unless 'send_page_view' is set to false in
    // `configProperties`.


    gtagCore("config"
    /* CONFIG */
    , dynamicConfig.measurementId, configProperties);
    return dynamicConfig.measurementId;
  });
  return _initializeAnalytics2.apply(this, arguments);
}

class AnalyticsService {
  constructor(app) {
    this.app = app;
  }

  _delete() {
    delete initializationPromisesMap[this.app.options.appId];
    return Promise.resolve();
  }

}
/**
 * Maps appId to full initialization promise. Wrapped gtag calls must wait on
 * all or some of these, depending on the call's `send_to` param and the status
 * of the dynamic config fetches (see below).
 */


let initializationPromisesMap = {};
/**
 * List of dynamic config fetch promises. In certain cases, wrapped gtag calls
 * wait on all these to be complete in order to determine if it can selectively
 * wait for only certain initialization (FID) promises or if it must wait for all.
 */

let dynamicConfigPromisesList = [];
/**
 * Maps fetched measurementIds to appId. Populated when the app's dynamic config
 * fetch completes. If already populated, gtag config calls can use this to
 * selectively wait for only this app's initialization promise (FID) instead of all
 * initialization promises.
 */

const measurementIdToAppId = {};
/**
 * Name for window global data layer array used by GA: defaults to 'dataLayer'.
 */

let dataLayerName = 'dataLayer';
/**
 * Name for window global gtag function used by GA: defaults to 'gtag'.
 */

let gtagName = 'gtag';
/**
 * Reproduction of standard gtag function or reference to existing
 * gtag function on window object.
 */

let gtagCoreFunction;
/**
 * Wrapper around gtag function that ensures FID is sent with all
 * relevant event and config calls.
 */

let wrappedGtagFunction;
/**
 * Flag to ensure page initialization steps (creation or wrapping of
 * dataLayer and gtag script) are only run once per page load.
 */

let globalInitDone = false;
/**
 * Configures Firebase Analytics to use custom `gtag` or `dataLayer` names.
 * Intended to be used if `gtag.js` script has been installed on
 * this page independently of Firebase Analytics, and is using non-default
 * names for either the `gtag` function or for `dataLayer`.
 * Must be called before calling `getAnalytics()` or it won't
 * have any effect.
 *
 * @public
 *
 * @param options - Custom gtag and dataLayer names.
 */

function settings(options) {
  if (globalInitDone) {
    throw ERROR_FACTORY.create("already-initialized"
    /* ALREADY_INITIALIZED */
    );
  }

  if (options.dataLayerName) {
    dataLayerName = options.dataLayerName;
  }

  if (options.gtagName) {
    gtagName = options.gtagName;
  }
}
/**
 * Returns true if no environment mismatch is found.
 * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
 * error that also lists details for each mismatch found.
 */


function warnOnBrowserContextMismatch() {
  const mismatchedEnvMessages = [];

  if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.isBrowserExtension)()) {
    mismatchedEnvMessages.push('This is a browser extension environment.');
  }

  if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.areCookiesEnabled)()) {
    mismatchedEnvMessages.push('Cookies are not available.');
  }

  if (mismatchedEnvMessages.length > 0) {
    const details = mismatchedEnvMessages.map((message, index) => `(${index + 1}) ${message}`).join(' ');
    const err = ERROR_FACTORY.create("invalid-analytics-context"
    /* INVALID_ANALYTICS_CONTEXT */
    , {
      errorInfo: details
    });
    logger.warn(err.message);
  }
}
/**
 * Analytics instance factory.
 * @internal
 */


function factory(app, installations, options) {
  warnOnBrowserContextMismatch();
  const appId = app.options.appId;

  if (!appId) {
    throw ERROR_FACTORY.create("no-app-id"
    /* NO_APP_ID */
    );
  }

  if (!app.options.apiKey) {
    if (app.options.measurementId) {
      logger.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest` + ` measurement ID for this Firebase app. Falling back to the measurement ID ${app.options.measurementId}` + ` provided in the "measurementId" field in the local Firebase config.`);
    } else {
      throw ERROR_FACTORY.create("no-api-key"
      /* NO_API_KEY */
      );
    }
  }

  if (initializationPromisesMap[appId] != null) {
    throw ERROR_FACTORY.create("already-exists"
    /* ALREADY_EXISTS */
    , {
      id: appId
    });
  }

  if (!globalInitDone) {
    // Steps here should only be done once per page: creation or wrapping
    // of dataLayer and global gtag function.
    getOrCreateDataLayer(dataLayerName);
    const {
      wrappedGtag,
      gtagCore
    } = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName);
    wrappedGtagFunction = wrappedGtag;
    gtagCoreFunction = gtagCore;
    globalInitDone = true;
  } // Async but non-blocking.
  // This map reflects the completion state of all promises for each appId.


  initializationPromisesMap[appId] = _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName, options);
  const analyticsInstance = new AnalyticsService(app);
  return analyticsInstance;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */


function logEvent$1(_x27, _x28, _x29, _x30, _x31) {
  return _logEvent$.apply(this, arguments);
}
/**
 * Set screen_name parameter for this Google Analytics ID.
 *
 * @deprecated Use {@link logEvent} with `eventName` as 'screen_view' and add relevant `eventParams`.
 * See {@link https://firebase.google.com/docs/analytics/screenviews | Track Screenviews}.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param screenName Screen name string to set.
 */


function _logEvent$() {
  _logEvent$ = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (gtagFunction, initializationPromise, eventName, eventParams, options) {
    if (options && options.global) {
      gtagFunction("event"
      /* EVENT */
      , eventName, eventParams);
      return;
    } else {
      const measurementId = yield initializationPromise;
      const params = Object.assign(Object.assign({}, eventParams), {
        'send_to': measurementId
      });
      gtagFunction("event"
      /* EVENT */
      , eventName, params);
    }
  });
  return _logEvent$.apply(this, arguments);
}

function setCurrentScreen$1(_x32, _x33, _x34, _x35) {
  return _setCurrentScreen$.apply(this, arguments);
}
/**
 * Set user_id parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param id User ID string to set
 */


function _setCurrentScreen$() {
  _setCurrentScreen$ = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (gtagFunction, initializationPromise, screenName, options) {
    if (options && options.global) {
      gtagFunction("set"
      /* SET */
      , {
        'screen_name': screenName
      });
      return Promise.resolve();
    } else {
      const measurementId = yield initializationPromise;
      gtagFunction("config"
      /* CONFIG */
      , measurementId, {
        update: true,
        'screen_name': screenName
      });
    }
  });
  return _setCurrentScreen$.apply(this, arguments);
}

function setUserId$1(_x36, _x37, _x38, _x39) {
  return _setUserId$.apply(this, arguments);
}
/**
 * Set all other user properties other than user_id and screen_name.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param properties Map of user properties to set
 */


function _setUserId$() {
  _setUserId$ = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (gtagFunction, initializationPromise, id, options) {
    if (options && options.global) {
      gtagFunction("set"
      /* SET */
      , {
        'user_id': id
      });
      return Promise.resolve();
    } else {
      const measurementId = yield initializationPromise;
      gtagFunction("config"
      /* CONFIG */
      , measurementId, {
        update: true,
        'user_id': id
      });
    }
  });
  return _setUserId$.apply(this, arguments);
}

function setUserProperties$1(_x40, _x41, _x42, _x43) {
  return _setUserProperties$.apply(this, arguments);
}
/**
 * Set whether collection is enabled for this ID.
 *
 * @param enabled If true, collection is enabled for this ID.
 */


function _setUserProperties$() {
  _setUserProperties$ = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (gtagFunction, initializationPromise, properties, options) {
    if (options && options.global) {
      const flatProperties = {};

      for (const key of Object.keys(properties)) {
        // use dot notation for merge behavior in gtag.js
        flatProperties[`user_properties.${key}`] = properties[key];
      }

      gtagFunction("set"
      /* SET */
      , flatProperties);
      return Promise.resolve();
    } else {
      const measurementId = yield initializationPromise;
      gtagFunction("config"
      /* CONFIG */
      , measurementId, {
        update: true,
        'user_properties': properties
      });
    }
  });
  return _setUserProperties$.apply(this, arguments);
}

function setAnalyticsCollectionEnabled$1(_x44, _x45) {
  return _setAnalyticsCollectionEnabled$.apply(this, arguments);
}
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */


function _setAnalyticsCollectionEnabled$() {
  _setAnalyticsCollectionEnabled$ = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (initializationPromise, enabled) {
    const measurementId = yield initializationPromise;
    window[`ga-disable-${measurementId}`] = !enabled;
  });
  return _setAnalyticsCollectionEnabled$.apply(this, arguments);
}

function getAnalytics(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.getApp)()) {
  app = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(app); // Dependencies

  const analyticsProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._getProvider)(app, ANALYTICS_TYPE);

  if (analyticsProvider.isInitialized()) {
    return analyticsProvider.getImmediate();
  }

  return initializeAnalytics(app);
}
/**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */


function initializeAnalytics(app, options = {}) {
  // Dependencies
  const analyticsProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._getProvider)(app, ANALYTICS_TYPE);

  if (analyticsProvider.isInitialized()) {
    const existingInstance = analyticsProvider.getImmediate();

    if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.deepEqual)(options, analyticsProvider.getOptions())) {
      return existingInstance;
    } else {
      throw ERROR_FACTORY.create("already-initialized"
      /* ALREADY_INITIALIZED */
      );
    }
  }

  const analyticsInstance = analyticsProvider.initialize({
    options
  });
  return analyticsInstance;
}
/**
 * This is a public static method provided to users that wraps four different checks:
 *
 * 1. Check if it's not a browser extension environment.
 * 2. Check if cookies are enabled in current browser.
 * 3. Check if IndexedDB is supported by the browser environment.
 * 4. Check if the current browser context is valid for using `IndexedDB.open()`.
 *
 * @public
 *
 */


function isSupported() {
  return _isSupported.apply(this, arguments);
}
/**
 * Use gtag `config` command to set `screen_name`.
 *
 * @public
 *
 * @deprecated Use {@link logEvent} with `eventName` as 'screen_view' and add relevant `eventParams`.
 * See {@link https://firebase.google.com/docs/analytics/screenviews | Track Screenviews}.
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param screenName - Screen name to set.
 */


function _isSupported() {
  _isSupported = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.isBrowserExtension)()) {
      return false;
    }

    if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.areCookiesEnabled)()) {
      return false;
    }

    if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.isIndexedDBAvailable)()) {
      return false;
    }

    try {
      const isDBOpenable = yield (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.validateIndexedDBOpenable)();
      return isDBOpenable;
    } catch (error) {
      return false;
    }
  });
  return _isSupported.apply(this, arguments);
}

function setCurrentScreen(analyticsInstance, screenName, options) {
  analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(analyticsInstance);
  setCurrentScreen$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], screenName, options).catch(e => logger.error(e));
}
/**
 * Use gtag `config` command to set `user_id`.
 *
 * @public
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param id - User ID to set.
 */


function setUserId(analyticsInstance, id, options) {
  analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(analyticsInstance);
  setUserId$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], id, options).catch(e => logger.error(e));
}
/**
 * Use gtag `config` command to set all params specified.
 *
 * @public
 */


function setUserProperties(analyticsInstance, properties, options) {
  analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(analyticsInstance);
  setUserProperties$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], properties, options).catch(e => logger.error(e));
}
/**
 * Sets whether Google Analytics collection is enabled for this app on this device.
 * Sets global `window['ga-disable-analyticsId'] = true;`
 *
 * @public
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param enabled - If true, enables collection, if false, disables it.
 */


function setAnalyticsCollectionEnabled(analyticsInstance, enabled) {
  analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(analyticsInstance);
  setAnalyticsCollectionEnabled$1(initializationPromisesMap[analyticsInstance.app.options.appId], enabled).catch(e => logger.error(e));
}
/**
 * Sends a Google Analytics event with given `eventParams`. This method
 * automatically associates this logged event with this Firebase web
 * app instance on this device.
 * List of official event parameters can be found in the gtag.js
 * reference documentation:
 * {@link https://developers.google.com/gtagjs/reference/ga4-events
 * | the GA4 reference documentation}.
 *
 * @public
 */


function logEvent(analyticsInstance, eventName, eventParams, options) {
  analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(analyticsInstance);
  logEvent$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], eventName, eventParams, options).catch(e => logger.error(e));
}

const name = "@firebase/analytics";
const version = "0.7.11";
/**
 * Firebase Analytics
 *
 * @packageDocumentation
 */

function registerAnalytics() {
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_4__.Component(ANALYTICS_TYPE, (container, {
    options: analyticsOptions
  }) => {
    // getImmediate for FirebaseApp will always succeed
    const app = container.getProvider('app').getImmediate();
    const installations = container.getProvider('installations-internal').getImmediate();
    return factory(app, installations, analyticsOptions);
  }, "PUBLIC"
  /* PUBLIC */
  ));

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_4__.Component('analytics-internal', internalFactory, "PRIVATE"
  /* PRIVATE */
  ));

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.registerVersion)(name, version); // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.registerVersion)(name, version, 'esm2017');

  function internalFactory(container) {
    try {
      const analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
      return {
        logEvent: (eventName, eventParams, options) => logEvent(analytics, eventName, eventParams, options)
      };
    } catch (e) {
      throw ERROR_FACTORY.create("interop-component-reg-failed"
      /* INTEROP_COMPONENT_REG_FAILED */
      , {
        reason: e
      });
    }
  }
}

registerAnalytics();
 //# sourceMappingURL=index.esm2017.js.map

/***/ }),

/***/ 13197:
/*!********************************************************************!*\
  !*** ./node_modules/@firebase/app-check/dist/esm/index.esm2017.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomProvider": () => (/* binding */ CustomProvider),
/* harmony export */   "ReCaptchaEnterpriseProvider": () => (/* binding */ ReCaptchaEnterpriseProvider),
/* harmony export */   "ReCaptchaV3Provider": () => (/* binding */ ReCaptchaV3Provider),
/* harmony export */   "getToken": () => (/* binding */ getToken),
/* harmony export */   "initializeAppCheck": () => (/* binding */ initializeAppCheck),
/* harmony export */   "onTokenChanged": () => (/* binding */ onTokenChanged),
/* harmony export */   "setTokenAutoRefreshEnabled": () => (/* binding */ setTokenAutoRefreshEnabled)
/* harmony export */ });
/* harmony import */ var _usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/app */ 49681);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/component */ 34859);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/util */ 42090);
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/logger */ 41877);





/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const APP_CHECK_STATES = new Map();
const DEFAULT_STATE = {
  activated: false,
  tokenObservers: []
};
const DEBUG_STATE = {
  initialized: false,
  enabled: false
};

function getState(app) {
  return APP_CHECK_STATES.get(app) || DEFAULT_STATE;
}

function setState(app, state) {
  APP_CHECK_STATES.set(app, state);
}

function getDebugState() {
  return DEBUG_STATE;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const BASE_ENDPOINT = 'https://content-firebaseappcheck.googleapis.com/v1';
const EXCHANGE_RECAPTCHA_TOKEN_METHOD = 'exchangeRecaptchaV3Token';
const EXCHANGE_RECAPTCHA_ENTERPRISE_TOKEN_METHOD = 'exchangeRecaptchaEnterpriseToken';
const EXCHANGE_DEBUG_TOKEN_METHOD = 'exchangeDebugToken';
const TOKEN_REFRESH_TIME = {
  /**
   * The offset time before token natural expiration to run the refresh.
   * This is currently 5 minutes.
   */
  OFFSET_DURATION: 5 * 60 * 1000,

  /**
   * This is the first retrial wait after an error. This is currently
   * 30 seconds.
   */
  RETRIAL_MIN_WAIT: 30 * 1000,

  /**
   * This is the maximum retrial wait, currently 16 minutes.
   */
  RETRIAL_MAX_WAIT: 16 * 60 * 1000
};
/**
 * One day in millis, for certain error code backoffs.
 */

const ONE_DAY = 24 * 60 * 60 * 1000;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Port from auth proactiverefresh.js
 *
 */
// TODO: move it to @firebase/util?
// TODO: allow to config whether refresh should happen in the background

class Refresher {
  constructor(operation, retryPolicy, getWaitDuration, lowerBound, upperBound) {
    this.operation = operation;
    this.retryPolicy = retryPolicy;
    this.getWaitDuration = getWaitDuration;
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
    this.pending = null;
    this.nextErrorWaitInterval = lowerBound;

    if (lowerBound > upperBound) {
      throw new Error('Proactive refresh lower bound greater than upper bound!');
    }
  }

  start() {
    this.nextErrorWaitInterval = this.lowerBound;
    this.process(true).catch(() => {
      /* we don't care about the result */
    });
  }

  stop() {
    if (this.pending) {
      this.pending.reject('cancelled');
      this.pending = null;
    }
  }

  isRunning() {
    return !!this.pending;
  }

  process(hasSucceeded) {
    var _this = this;

    return (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.stop();

      try {
        _this.pending = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__.Deferred();
        yield sleep(_this.getNextRun(hasSucceeded)); // Why do we resolve a promise, then immediate wait for it?
        // We do it to make the promise chain cancellable.
        // We can call stop() which rejects the promise before the following line execute, which makes
        // the code jump to the catch block.
        // TODO: unit test this

        _this.pending.resolve();

        yield _this.pending.promise;
        _this.pending = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__.Deferred();
        yield _this.operation();

        _this.pending.resolve();

        yield _this.pending.promise;

        _this.process(true).catch(() => {
          /* we don't care about the result */
        });
      } catch (error) {
        if (_this.retryPolicy(error)) {
          _this.process(false).catch(() => {
            /* we don't care about the result */
          });
        } else {
          _this.stop();
        }
      }
    })();
  }

  getNextRun(hasSucceeded) {
    if (hasSucceeded) {
      // If last operation succeeded, reset next error wait interval and return
      // the default wait duration.
      this.nextErrorWaitInterval = this.lowerBound; // Return typical wait duration interval after a successful operation.

      return this.getWaitDuration();
    } else {
      // Get next error wait interval.
      const currentErrorWaitInterval = this.nextErrorWaitInterval; // Double interval for next consecutive error.

      this.nextErrorWaitInterval *= 2; // Make sure next wait interval does not exceed the maximum upper bound.

      if (this.nextErrorWaitInterval > this.upperBound) {
        this.nextErrorWaitInterval = this.upperBound;
      }

      return currentErrorWaitInterval;
    }
  }

}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const ERRORS = {
  ["already-initialized"
  /* ALREADY_INITIALIZED */
  ]: 'You have already called initializeAppCheck() for FirebaseApp {$appName} with ' + 'different options. To avoid this error, call initializeAppCheck() with the ' + 'same options as when it was originally called. This will return the ' + 'already initialized instance.',
  ["use-before-activation"
  /* USE_BEFORE_ACTIVATION */
  ]: 'App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. ' + 'Call initializeAppCheck() before instantiating other Firebase services.',
  ["fetch-network-error"
  /* FETCH_NETWORK_ERROR */
  ]: 'Fetch failed to connect to a network. Check Internet connection. ' + 'Original error: {$originalErrorMessage}.',
  ["fetch-parse-error"
  /* FETCH_PARSE_ERROR */
  ]: 'Fetch client could not parse response.' + ' Original error: {$originalErrorMessage}.',
  ["fetch-status-error"
  /* FETCH_STATUS_ERROR */
  ]: 'Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.',
  ["storage-open"
  /* STORAGE_OPEN */
  ]: 'Error thrown when opening storage. Original error: {$originalErrorMessage}.',
  ["storage-get"
  /* STORAGE_GET */
  ]: 'Error thrown when reading from storage. Original error: {$originalErrorMessage}.',
  ["storage-set"
  /* STORAGE_WRITE */
  ]: 'Error thrown when writing to storage. Original error: {$originalErrorMessage}.',
  ["recaptcha-error"
  /* RECAPTCHA_ERROR */
  ]: 'ReCAPTCHA error.',
  ["throttled"
  /* THROTTLED */
  ]: `Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}`
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__.ErrorFactory('appCheck', 'AppCheck', ERRORS);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function getRecaptcha(isEnterprise = false) {
  var _a;

  if (isEnterprise) {
    return (_a = self.grecaptcha) === null || _a === void 0 ? void 0 : _a.enterprise;
  }

  return self.grecaptcha;
}

function ensureActivated(app) {
  if (!getState(app).activated) {
    throw ERROR_FACTORY.create("use-before-activation"
    /* USE_BEFORE_ACTIVATION */
    , {
      appName: app.name
    });
  }
}

function getDurationString(durationInMillis) {
  const totalSeconds = Math.round(durationInMillis / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds - days * 3600 * 24) / 3600);
  const minutes = Math.floor((totalSeconds - days * 3600 * 24 - hours * 3600) / 60);
  const seconds = totalSeconds - days * 3600 * 24 - hours * 3600 - minutes * 60;
  let result = '';

  if (days) {
    result += pad(days) + 'd:';
  }

  if (hours) {
    result += pad(hours) + 'h:';
  }

  result += pad(minutes) + 'm:' + pad(seconds) + 's';
  return result;
}

function pad(value) {
  if (value === 0) {
    return '00';
  }

  return value >= 10 ? value.toString() : '0' + value;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function exchangeToken(_x, _x2) {
  return _exchangeToken.apply(this, arguments);
}

function _exchangeToken() {
  _exchangeToken = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    url,
    body
  }, heartbeatServiceProvider) {
    var _a, _b;

    const headers = {
      'Content-Type': 'application/json'
    }; // If heartbeat service exists, add heartbeat header string to the header.

    const heartbeatService = heartbeatServiceProvider.getImmediate({
      optional: true
    });

    if (heartbeatService) {
      const heartbeatsHeader = yield heartbeatService.getHeartbeatsHeader();

      if (heartbeatsHeader) {
        headers['X-Firebase-Client'] = heartbeatsHeader;
      }
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers
    };
    let response;

    try {
      response = yield fetch(url, options);
    } catch (originalError) {
      throw ERROR_FACTORY.create("fetch-network-error"
      /* FETCH_NETWORK_ERROR */
      , {
        originalErrorMessage: (_a = originalError) === null || _a === void 0 ? void 0 : _a.message
      });
    }

    if (response.status !== 200) {
      throw ERROR_FACTORY.create("fetch-status-error"
      /* FETCH_STATUS_ERROR */
      , {
        httpStatus: response.status
      });
    }

    let responseBody;

    try {
      // JSON parsing throws SyntaxError if the response body isn't a JSON string.
      responseBody = yield response.json();
    } catch (originalError) {
      throw ERROR_FACTORY.create("fetch-parse-error"
      /* FETCH_PARSE_ERROR */
      , {
        originalErrorMessage: (_b = originalError) === null || _b === void 0 ? void 0 : _b.message
      });
    } // Protobuf duration format.
    // https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/Duration


    const match = responseBody.ttl.match(/^([\d.]+)(s)$/);

    if (!match || !match[2] || isNaN(Number(match[1]))) {
      throw ERROR_FACTORY.create("fetch-parse-error"
      /* FETCH_PARSE_ERROR */
      , {
        originalErrorMessage: `ttl field (timeToLive) is not in standard Protobuf Duration ` + `format: ${responseBody.ttl}`
      });
    }

    const timeToLiveAsNumber = Number(match[1]) * 1000;
    const now = Date.now();
    return {
      token: responseBody.token,
      expireTimeMillis: now + timeToLiveAsNumber,
      issuedAtTimeMillis: now
    };
  });
  return _exchangeToken.apply(this, arguments);
}

function getExchangeRecaptchaV3TokenRequest(app, reCAPTCHAToken) {
  const {
    projectId,
    appId,
    apiKey
  } = app.options;
  return {
    url: `${BASE_ENDPOINT}/projects/${projectId}/apps/${appId}:${EXCHANGE_RECAPTCHA_TOKEN_METHOD}?key=${apiKey}`,
    body: {
      'recaptcha_v3_token': reCAPTCHAToken
    }
  };
}

function getExchangeRecaptchaEnterpriseTokenRequest(app, reCAPTCHAToken) {
  const {
    projectId,
    appId,
    apiKey
  } = app.options;
  return {
    url: `${BASE_ENDPOINT}/projects/${projectId}/apps/${appId}:${EXCHANGE_RECAPTCHA_ENTERPRISE_TOKEN_METHOD}?key=${apiKey}`,
    body: {
      'recaptcha_enterprise_token': reCAPTCHAToken
    }
  };
}

function getExchangeDebugTokenRequest(app, debugToken) {
  const {
    projectId,
    appId,
    apiKey
  } = app.options;
  return {
    url: `${BASE_ENDPOINT}/projects/${projectId}/apps/${appId}:${EXCHANGE_DEBUG_TOKEN_METHOD}?key=${apiKey}`,
    body: {
      // eslint-disable-next-line
      debug_token: debugToken
    }
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const DB_NAME = 'firebase-app-check-database';
const DB_VERSION = 1;
const STORE_NAME = 'firebase-app-check-store';
const DEBUG_TOKEN_KEY = 'debug-token';
let dbPromise = null;

function getDBPromise() {
  if (dbPromise) {
    return dbPromise;
  }

  dbPromise = new Promise((resolve, reject) => {
    var _a;

    try {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onsuccess = event => {
        resolve(event.target.result);
      };

      request.onerror = event => {
        var _a;

        reject(ERROR_FACTORY.create("storage-open"
        /* STORAGE_OPEN */
        , {
          originalErrorMessage: (_a = event.target.error) === null || _a === void 0 ? void 0 : _a.message
        }));
      };

      request.onupgradeneeded = event => {
        const db = event.target.result; // We don't use 'break' in this switch statement, the fall-through
        // behavior is what we want, because if there are multiple versions between
        // the old version and the current version, we want ALL the migrations
        // that correspond to those versions to run, not only the last one.
        // eslint-disable-next-line default-case

        switch (event.oldVersion) {
          case 0:
            db.createObjectStore(STORE_NAME, {
              keyPath: 'compositeKey'
            });
        }
      };
    } catch (e) {
      reject(ERROR_FACTORY.create("storage-open"
      /* STORAGE_OPEN */
      , {
        originalErrorMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
      }));
    }
  });
  return dbPromise;
}

function readTokenFromIndexedDB(app) {
  return read(computeKey(app));
}

function writeTokenToIndexedDB(app, token) {
  return write(computeKey(app), token);
}

function writeDebugTokenToIndexedDB(token) {
  return write(DEBUG_TOKEN_KEY, token);
}

function readDebugTokenFromIndexedDB() {
  return read(DEBUG_TOKEN_KEY);
}

function write(_x3, _x4) {
  return _write.apply(this, arguments);
}

function _write() {
  _write = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (key, value) {
    const db = yield getDBPromise();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put({
      compositeKey: key,
      value
    });
    return new Promise((resolve, reject) => {
      request.onsuccess = _event => {
        resolve();
      };

      transaction.onerror = event => {
        var _a;

        reject(ERROR_FACTORY.create("storage-set"
        /* STORAGE_WRITE */
        , {
          originalErrorMessage: (_a = event.target.error) === null || _a === void 0 ? void 0 : _a.message
        }));
      };
    });
  });
  return _write.apply(this, arguments);
}

function read(_x5) {
  return _read.apply(this, arguments);
}

function _read() {
  _read = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (key) {
    const db = yield getDBPromise();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(key);
    return new Promise((resolve, reject) => {
      request.onsuccess = event => {
        const result = event.target.result;

        if (result) {
          resolve(result.value);
        } else {
          resolve(undefined);
        }
      };

      transaction.onerror = event => {
        var _a;

        reject(ERROR_FACTORY.create("storage-get"
        /* STORAGE_GET */
        , {
          originalErrorMessage: (_a = event.target.error) === null || _a === void 0 ? void 0 : _a.message
        }));
      };
    });
  });
  return _read.apply(this, arguments);
}

function computeKey(app) {
  return `${app.options.appId}-${app.name}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_4__.Logger('@firebase/app-check');
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Always resolves. In case of an error reading from indexeddb, resolve with undefined
 */

function readTokenFromStorage(_x6) {
  return _readTokenFromStorage.apply(this, arguments);
}
/**
 * Always resolves. In case of an error writing to indexeddb, print a warning and resolve the promise
 */


function _readTokenFromStorage() {
  _readTokenFromStorage = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (app) {
    if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.isIndexedDBAvailable)()) {
      let token = undefined;

      try {
        token = yield readTokenFromIndexedDB(app);
      } catch (e) {
        // swallow the error and return undefined
        logger.warn(`Failed to read token from IndexedDB. Error: ${e}`);
      }

      return token;
    }

    return undefined;
  });
  return _readTokenFromStorage.apply(this, arguments);
}

function writeTokenToStorage(app, token) {
  if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.isIndexedDBAvailable)()) {
    return writeTokenToIndexedDB(app, token).catch(e => {
      // swallow the error and resolve the promise
      logger.warn(`Failed to write token to IndexedDB. Error: ${e}`);
    });
  }

  return Promise.resolve();
}

function readOrCreateDebugTokenFromStorage() {
  return _readOrCreateDebugTokenFromStorage.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _readOrCreateDebugTokenFromStorage() {
  _readOrCreateDebugTokenFromStorage = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    /**
     * Theoretically race condition can happen if we read, then write in 2 separate transactions.
     * But it won't happen here, because this function will be called exactly once.
     */
    let existingDebugToken = undefined;

    try {
      existingDebugToken = yield readDebugTokenFromIndexedDB();
    } catch (_e) {// failed to read from indexeddb. We assume there is no existing debug token, and generate a new one.
    }

    if (!existingDebugToken) {
      // create a new debug token
      const newToken = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.uuidv4)(); // We don't need to block on writing to indexeddb
      // In case persistence failed, a new debug token will be generated everytime the page is refreshed.
      // It renders the debug token useless because you have to manually register(whitelist) the new token in the firebase console again and again.
      // If you see this error trying to use debug token, it probably means you are using a browser that doesn't support indexeddb.
      // You should switch to a different browser that supports indexeddb

      writeDebugTokenToIndexedDB(newToken).catch(e => logger.warn(`Failed to persist debug token to IndexedDB. Error: ${e}`));
      return newToken;
    } else {
      return existingDebugToken;
    }
  });
  return _readOrCreateDebugTokenFromStorage.apply(this, arguments);
}

function isDebugMode() {
  const debugState = getDebugState();
  return debugState.enabled;
}

function getDebugToken() {
  return _getDebugToken.apply(this, arguments);
}

function _getDebugToken() {
  _getDebugToken = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const state = getDebugState();

    if (state.enabled && state.token) {
      return state.token.promise;
    } else {
      // should not happen!
      throw Error(`
            Can't get debug token in production mode.
        `);
    }
  });
  return _getDebugToken.apply(this, arguments);
}

function initializeDebugMode() {
  const globals = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getGlobal)();
  const debugState = getDebugState(); // Set to true if this function has been called, whether or not
  // it enabled debug mode.

  debugState.initialized = true;

  if (typeof globals.FIREBASE_APPCHECK_DEBUG_TOKEN !== 'string' && globals.FIREBASE_APPCHECK_DEBUG_TOKEN !== true) {
    return;
  }

  debugState.enabled = true;
  const deferredToken = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__.Deferred();
  debugState.token = deferredToken;

  if (typeof globals.FIREBASE_APPCHECK_DEBUG_TOKEN === 'string') {
    deferredToken.resolve(globals.FIREBASE_APPCHECK_DEBUG_TOKEN);
  } else {
    deferredToken.resolve(readOrCreateDebugTokenFromStorage());
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Initial hardcoded value agreed upon across platforms for initial launch.
// Format left open for possible dynamic error values and other fields in the future.


const defaultTokenErrorData = {
  error: 'UNKNOWN_ERROR'
};
/**
 * Stringify and base64 encode token error data.
 *
 * @param tokenError Error data, currently hardcoded.
 */

function formatDummyToken(tokenErrorData) {
  return _firebase_util__WEBPACK_IMPORTED_MODULE_3__.base64.encodeString(JSON.stringify(tokenErrorData),
  /* webSafe= */
  false);
}
/**
 * This function always resolves.
 * The result will contain an error field if there is any error.
 * In case there is an error, the token field in the result will be populated with a dummy value
 */


function getToken$2(_x7) {
  return _getToken$.apply(this, arguments);
}

function _getToken$() {
  _getToken$ = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (appCheck, forceRefresh = false) {
    const app = appCheck.app;
    ensureActivated(app);
    const state = getState(app);
    /**
     * First check if there is a token in memory from a previous `getToken()` call.
     */

    let token = state.token;
    let error = undefined;
    /**
     * If there is no token in memory, try to load token from indexedDB.
     */

    if (!token) {
      // cachedTokenPromise contains the token found in IndexedDB or undefined if not found.
      const cachedToken = yield state.cachedTokenPromise;

      if (cachedToken && isValid(cachedToken)) {
        token = cachedToken;
      }
    } // Return the cached token (from either memory or indexedDB) if it's valid


    if (!forceRefresh && token && isValid(token)) {
      return {
        token: token.token
      };
    } // Only set to true if this `getToken()` call is making the actual
    // REST call to the exchange endpoint, versus waiting for an already
    // in-flight call (see debug and regular exchange endpoint paths below)


    let shouldCallListeners = false;
    /**
     * DEBUG MODE
     * If debug mode is set, and there is no cached token, fetch a new App
     * Check token using the debug token, and return it directly.
     */

    if (isDebugMode()) {
      // Avoid making another call to the exchange endpoint if one is in flight.
      if (!state.exchangeTokenPromise) {
        state.exchangeTokenPromise = exchangeToken(getExchangeDebugTokenRequest(app, yield getDebugToken()), appCheck.heartbeatServiceProvider).then(token => {
          state.exchangeTokenPromise = undefined;
          return token;
        });
        shouldCallListeners = true;
      }

      const tokenFromDebugExchange = yield state.exchangeTokenPromise; // Write debug token to indexedDB.

      yield writeTokenToStorage(app, tokenFromDebugExchange); // Write debug token to state.

      setState(app, Object.assign(Object.assign({}, state), {
        token: tokenFromDebugExchange
      }));
      return {
        token: tokenFromDebugExchange.token
      };
    }
    /**
     * request a new token
     */


    try {
      // Avoid making another call to the exchange endpoint if one is in flight.
      if (!state.exchangeTokenPromise) {
        // state.provider is populated in initializeAppCheck()
        // ensureActivated() at the top of this function checks that
        // initializeAppCheck() has been called.
        state.exchangeTokenPromise = state.provider.getToken().then(token => {
          state.exchangeTokenPromise = undefined;
          return token;
        });
        shouldCallListeners = true;
      }

      token = yield state.exchangeTokenPromise;
    } catch (e) {
      if (e.code === `appCheck/${"throttled"
      /* THROTTLED */
      }`) {
        // Warn if throttled, but do not treat it as an error.
        logger.warn(e.message);
      } else {
        // `getToken()` should never throw, but logging error text to console will aid debugging.
        logger.error(e);
      } // Always save error to be added to dummy token.


      error = e;
    }

    let interopTokenResult;

    if (!token) {
      // if token is undefined, there must be an error.
      // we return a dummy token along with the error
      interopTokenResult = makeDummyTokenResult(error);
    } else {
      interopTokenResult = {
        token: token.token
      }; // write the new token to the memory state as well as the persistent storage.
      // Only do it if we got a valid new token

      setState(app, Object.assign(Object.assign({}, state), {
        token
      }));
      yield writeTokenToStorage(app, token);
    }

    if (shouldCallListeners) {
      notifyTokenListeners(app, interopTokenResult);
    }

    return interopTokenResult;
  });
  return _getToken$.apply(this, arguments);
}

function addTokenListener(appCheck, type, listener, onError) {
  const {
    app
  } = appCheck;
  const state = getState(app);
  const tokenObserver = {
    next: listener,
    error: onError,
    type
  };
  setState(app, Object.assign(Object.assign({}, state), {
    tokenObservers: [...state.tokenObservers, tokenObserver]
  })); // Invoke the listener async immediately if there is a valid token
  // in memory.

  if (state.token && isValid(state.token)) {
    const validToken = state.token;
    Promise.resolve().then(() => {
      listener({
        token: validToken.token
      });
      initTokenRefresher(appCheck);
    }).catch(() => {
      /* we don't care about exceptions thrown in listeners */
    });
  }
  /**
   * Wait for any cached token promise to resolve before starting the token
   * refresher. The refresher checks to see if there is an existing token
   * in state and calls the exchange endpoint if not. We should first let the
   * IndexedDB check have a chance to populate state if it can.
   *
   * Listener call isn't needed here because cachedTokenPromise will call any
   * listeners that exist when it resolves.
   */
  // state.cachedTokenPromise is always populated in `activate()`.


  void state.cachedTokenPromise.then(() => initTokenRefresher(appCheck));
}

function removeTokenListener(app, listener) {
  const state = getState(app);
  const newObservers = state.tokenObservers.filter(tokenObserver => tokenObserver.next !== listener);

  if (newObservers.length === 0 && state.tokenRefresher && state.tokenRefresher.isRunning()) {
    state.tokenRefresher.stop();
  }

  setState(app, Object.assign(Object.assign({}, state), {
    tokenObservers: newObservers
  }));
}
/**
 * Logic to create and start refresher as needed.
 */


function initTokenRefresher(appCheck) {
  const {
    app
  } = appCheck;
  const state = getState(app); // Create the refresher but don't start it if `isTokenAutoRefreshEnabled`
  // is not true.

  let refresher = state.tokenRefresher;

  if (!refresher) {
    refresher = createTokenRefresher(appCheck);
    setState(app, Object.assign(Object.assign({}, state), {
      tokenRefresher: refresher
    }));
  }

  if (!refresher.isRunning() && state.isTokenAutoRefreshEnabled) {
    refresher.start();
  }
}

function createTokenRefresher(appCheck) {
  const {
    app
  } = appCheck;
  return new Refresher(
  /*#__PURE__*/
  // Keep in mind when this fails for any reason other than the ones
  // for which we should retry, it will effectively stop the proactive refresh.
  (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const state = getState(app); // If there is no token, we will try to load it from storage and use it
    // If there is a token, we force refresh it because we know it's going to expire soon

    let result;

    if (!state.token) {
      result = yield getToken$2(appCheck);
    } else {
      result = yield getToken$2(appCheck, true);
    } // getToken() always resolves. In case the result has an error field defined, it means the operation failed, and we should retry.


    if (result.error) {
      throw result.error;
    }
  }), () => {
    return true;
  }, () => {
    const state = getState(app);

    if (state.token) {
      // issuedAtTime + (50% * total TTL) + 5 minutes
      let nextRefreshTimeMillis = state.token.issuedAtTimeMillis + (state.token.expireTimeMillis - state.token.issuedAtTimeMillis) * 0.5 + 5 * 60 * 1000; // Do not allow refresh time to be past (expireTime - 5 minutes)

      const latestAllowableRefresh = state.token.expireTimeMillis - 5 * 60 * 1000;
      nextRefreshTimeMillis = Math.min(nextRefreshTimeMillis, latestAllowableRefresh);
      return Math.max(0, nextRefreshTimeMillis - Date.now());
    } else {
      return 0;
    }
  }, TOKEN_REFRESH_TIME.RETRIAL_MIN_WAIT, TOKEN_REFRESH_TIME.RETRIAL_MAX_WAIT);
}

function notifyTokenListeners(app, token) {
  const observers = getState(app).tokenObservers;

  for (const observer of observers) {
    try {
      if (observer.type === "EXTERNAL"
      /* EXTERNAL */
      && token.error != null) {
        // If this listener was added by a 3P call, send any token error to
        // the supplied error handler. A 3P observer always has an error
        // handler.
        observer.error(token.error);
      } else {
        // If the token has no error field, always return the token.
        // If this is a 2P listener, return the token, whether or not it
        // has an error field.
        observer.next(token);
      }
    } catch (e) {// Errors in the listener function itself are always ignored.
    }
  }
}

function isValid(token) {
  return token.expireTimeMillis - Date.now() > 0;
}

function makeDummyTokenResult(error) {
  return {
    token: formatDummyToken(defaultTokenErrorData),
    error
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * AppCheck Service class.
 */


class AppCheckService {
  constructor(app, heartbeatServiceProvider) {
    this.app = app;
    this.heartbeatServiceProvider = heartbeatServiceProvider;
  }

  _delete() {
    const {
      tokenObservers
    } = getState(this.app);

    for (const tokenObserver of tokenObservers) {
      removeTokenListener(this.app, tokenObserver.next);
    }

    return Promise.resolve();
  }

}

function factory(app, heartbeatServiceProvider) {
  return new AppCheckService(app, heartbeatServiceProvider);
}

function internalFactory(appCheck) {
  return {
    getToken: forceRefresh => getToken$2(appCheck, forceRefresh),
    addTokenListener: listener => addTokenListener(appCheck, "INTERNAL"
    /* INTERNAL */
    , listener),
    removeTokenListener: listener => removeTokenListener(appCheck.app, listener)
  };
}

const name = "@firebase/app-check";
const version = "0.5.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const RECAPTCHA_URL = 'https://www.google.com/recaptcha/api.js';
const RECAPTCHA_ENTERPRISE_URL = 'https://www.google.com/recaptcha/enterprise.js';

function initializeV3(app, siteKey) {
  const state = getState(app);
  const initialized = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__.Deferred();
  setState(app, Object.assign(Object.assign({}, state), {
    reCAPTCHAState: {
      initialized
    }
  }));
  const divId = makeDiv(app);
  const grecaptcha = getRecaptcha(false);

  if (!grecaptcha) {
    loadReCAPTCHAV3Script(() => {
      const grecaptcha = getRecaptcha(false);

      if (!grecaptcha) {
        // it shouldn't happen.
        throw new Error('no recaptcha');
      }

      queueWidgetRender(app, siteKey, grecaptcha, divId, initialized);
    });
  } else {
    queueWidgetRender(app, siteKey, grecaptcha, divId, initialized);
  }

  return initialized.promise;
}

function initializeEnterprise(app, siteKey) {
  const state = getState(app);
  const initialized = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__.Deferred();
  setState(app, Object.assign(Object.assign({}, state), {
    reCAPTCHAState: {
      initialized
    }
  }));
  const divId = makeDiv(app);
  const grecaptcha = getRecaptcha(true);

  if (!grecaptcha) {
    loadReCAPTCHAEnterpriseScript(() => {
      const grecaptcha = getRecaptcha(true);

      if (!grecaptcha) {
        // it shouldn't happen.
        throw new Error('no recaptcha');
      }

      queueWidgetRender(app, siteKey, grecaptcha, divId, initialized);
    });
  } else {
    queueWidgetRender(app, siteKey, grecaptcha, divId, initialized);
  }

  return initialized.promise;
}
/**
 * Add listener to render the widget and resolve the promise when
 * the grecaptcha.ready() event fires.
 */


function queueWidgetRender(app, siteKey, grecaptcha, container, initialized) {
  grecaptcha.ready(() => {
    // Invisible widgets allow us to set a different siteKey for each widget,
    // so we use them to support multiple apps
    renderInvisibleWidget(app, siteKey, grecaptcha, container);
    initialized.resolve(grecaptcha);
  });
}
/**
 * Add invisible div to page.
 */


function makeDiv(app) {
  const divId = `fire_app_check_${app.name}`;
  const invisibleDiv = document.createElement('div');
  invisibleDiv.id = divId;
  invisibleDiv.style.display = 'none';
  document.body.appendChild(invisibleDiv);
  return divId;
}

function getToken$1(_x8) {
  return _getToken$2.apply(this, arguments);
}
/**
 *
 * @param app
 * @param container - Id of a HTML element.
 */


function _getToken$2() {
  _getToken$2 = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (app) {
    ensureActivated(app); // ensureActivated() guarantees that reCAPTCHAState is set

    const reCAPTCHAState = getState(app).reCAPTCHAState;
    const recaptcha = yield reCAPTCHAState.initialized.promise;
    return new Promise((resolve, _reject) => {
      // Updated after initialization is complete.
      const reCAPTCHAState = getState(app).reCAPTCHAState;
      recaptcha.ready(() => {
        resolve( // widgetId is guaranteed to be available if reCAPTCHAState.initialized.promise resolved.
        recaptcha.execute(reCAPTCHAState.widgetId, {
          action: 'fire_app_check'
        }));
      });
    });
  });
  return _getToken$2.apply(this, arguments);
}

function renderInvisibleWidget(app, siteKey, grecaptcha, container) {
  const widgetId = grecaptcha.render(container, {
    sitekey: siteKey,
    size: 'invisible'
  });
  const state = getState(app);
  setState(app, Object.assign(Object.assign({}, state), {
    reCAPTCHAState: Object.assign(Object.assign({}, state.reCAPTCHAState), {
      // state.reCAPTCHAState is set in the initialize()
      widgetId
    })
  }));
}

function loadReCAPTCHAV3Script(onload) {
  const script = document.createElement('script');
  script.src = RECAPTCHA_URL;
  script.onload = onload;
  document.head.appendChild(script);
}

function loadReCAPTCHAEnterpriseScript(onload) {
  const script = document.createElement('script');
  script.src = RECAPTCHA_ENTERPRISE_URL;
  script.onload = onload;
  document.head.appendChild(script);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * App Check provider that can obtain a reCAPTCHA V3 token and exchange it
 * for an App Check token.
 *
 * @public
 */


class ReCaptchaV3Provider {
  /**
   * Create a ReCaptchaV3Provider instance.
   * @param siteKey - ReCAPTCHA V3 siteKey.
   */
  constructor(_siteKey) {
    this._siteKey = _siteKey;
    /**
     * Throttle requests on certain error codes to prevent too many retries
     * in a short time.
     */

    this._throttleData = null;
  }
  /**
   * Returns an App Check token.
   * @internal
   */


  getToken() {
    var _this2 = this;

    return (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      throwIfThrottled(_this2._throttleData); // Top-level `getToken()` has already checked that App Check is initialized
      // and therefore this._app and this._heartbeatServiceProvider are available.

      const attestedClaimsToken = yield getToken$1(_this2._app).catch(_e => {
        // reCaptcha.execute() throws null which is not very descriptive.
        throw ERROR_FACTORY.create("recaptcha-error"
        /* RECAPTCHA_ERROR */
        );
      });
      let result;

      try {
        result = yield exchangeToken(getExchangeRecaptchaV3TokenRequest(_this2._app, attestedClaimsToken), _this2._heartbeatServiceProvider);
      } catch (e) {
        if (e.code === "fetch-status-error"
        /* FETCH_STATUS_ERROR */
        ) {
          _this2._throttleData = setBackoff(Number((_a = e.customData) === null || _a === void 0 ? void 0 : _a.httpStatus), _this2._throttleData);
          throw ERROR_FACTORY.create("throttled"
          /* THROTTLED */
          , {
            time: getDurationString(_this2._throttleData.allowRequestsAfter - Date.now()),
            httpStatus: _this2._throttleData.httpStatus
          });
        } else {
          throw e;
        }
      } // If successful, clear throttle data.


      _this2._throttleData = null;
      return result;
    })();
  }
  /**
   * @internal
   */


  initialize(app) {
    this._app = app;
    this._heartbeatServiceProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._getProvider)(app, 'heartbeat');
    initializeV3(app, this._siteKey).catch(() => {
      /* we don't care about the initialization result */
    });
  }
  /**
   * @internal
   */


  isEqual(otherProvider) {
    if (otherProvider instanceof ReCaptchaV3Provider) {
      return this._siteKey === otherProvider._siteKey;
    } else {
      return false;
    }
  }

}
/**
 * App Check provider that can obtain a reCAPTCHA Enterprise token and exchange it
 * for an App Check token.
 *
 * @public
 */


class ReCaptchaEnterpriseProvider {
  /**
   * Create a ReCaptchaEnterpriseProvider instance.
   * @param siteKey - reCAPTCHA Enterprise score-based site key.
   */
  constructor(_siteKey) {
    this._siteKey = _siteKey;
    /**
     * Throttle requests on certain error codes to prevent too many retries
     * in a short time.
     */

    this._throttleData = null;
  }
  /**
   * Returns an App Check token.
   * @internal
   */


  getToken() {
    var _this3 = this;

    return (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      throwIfThrottled(_this3._throttleData); // Top-level `getToken()` has already checked that App Check is initialized
      // and therefore this._app and this._heartbeatServiceProvider are available.

      const attestedClaimsToken = yield getToken$1(_this3._app).catch(_e => {
        // reCaptcha.execute() throws null which is not very descriptive.
        throw ERROR_FACTORY.create("recaptcha-error"
        /* RECAPTCHA_ERROR */
        );
      });
      let result;

      try {
        result = yield exchangeToken(getExchangeRecaptchaEnterpriseTokenRequest(_this3._app, attestedClaimsToken), _this3._heartbeatServiceProvider);
      } catch (e) {
        if (e.code === "fetch-status-error"
        /* FETCH_STATUS_ERROR */
        ) {
          _this3._throttleData = setBackoff(Number((_a = e.customData) === null || _a === void 0 ? void 0 : _a.httpStatus), _this3._throttleData);
          throw ERROR_FACTORY.create("throttled"
          /* THROTTLED */
          , {
            time: getDurationString(_this3._throttleData.allowRequestsAfter - Date.now()),
            httpStatus: _this3._throttleData.httpStatus
          });
        } else {
          throw e;
        }
      } // If successful, clear throttle data.


      _this3._throttleData = null;
      return result;
    })();
  }
  /**
   * @internal
   */


  initialize(app) {
    this._app = app;
    this._heartbeatServiceProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._getProvider)(app, 'heartbeat');
    initializeEnterprise(app, this._siteKey).catch(() => {
      /* we don't care about the initialization result */
    });
  }
  /**
   * @internal
   */


  isEqual(otherProvider) {
    if (otherProvider instanceof ReCaptchaEnterpriseProvider) {
      return this._siteKey === otherProvider._siteKey;
    } else {
      return false;
    }
  }

}
/**
 * Custom provider class.
 * @public
 */


class CustomProvider {
  constructor(_customProviderOptions) {
    this._customProviderOptions = _customProviderOptions;
  }
  /**
   * @internal
   */


  getToken() {
    var _this4 = this;

    return (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // custom provider
      const customToken = yield _this4._customProviderOptions.getToken(); // Try to extract IAT from custom token, in case this token is not
      // being newly issued. JWT timestamps are in seconds since epoch.

      const issuedAtTimeSeconds = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.issuedAtTime)(customToken.token); // Very basic validation, use current timestamp as IAT if JWT
      // has no `iat` field or value is out of bounds.

      const issuedAtTimeMillis = issuedAtTimeSeconds !== null && issuedAtTimeSeconds < Date.now() && issuedAtTimeSeconds > 0 ? issuedAtTimeSeconds * 1000 : Date.now();
      return Object.assign(Object.assign({}, customToken), {
        issuedAtTimeMillis
      });
    })();
  }
  /**
   * @internal
   */


  initialize(app) {
    this._app = app;
  }
  /**
   * @internal
   */


  isEqual(otherProvider) {
    if (otherProvider instanceof CustomProvider) {
      return this._customProviderOptions.getToken.toString() === otherProvider._customProviderOptions.getToken.toString();
    } else {
      return false;
    }
  }

}
/**
 * Set throttle data to block requests until after a certain time
 * depending on the failed request's status code.
 * @param httpStatus - Status code of failed request.
 * @param throttleData - `ThrottleData` object containing previous throttle
 * data state.
 * @returns Data about current throttle state and expiration time.
 */


function setBackoff(httpStatus, throttleData) {
  /**
   * Block retries for 1 day for the following error codes:
   *
   * 404: Likely malformed URL.
   *
   * 403:
   * - Attestation failed
   * - Wrong API key
   * - Project deleted
   */
  if (httpStatus === 404 || httpStatus === 403) {
    return {
      backoffCount: 1,
      allowRequestsAfter: Date.now() + ONE_DAY,
      httpStatus
    };
  } else {
    /**
     * For all other error codes, the time when it is ok to retry again
     * is based on exponential backoff.
     */
    const backoffCount = throttleData ? throttleData.backoffCount : 0;
    const backoffMillis = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.calculateBackoffMillis)(backoffCount, 1000, 2);
    return {
      backoffCount: backoffCount + 1,
      allowRequestsAfter: Date.now() + backoffMillis,
      httpStatus
    };
  }
}

function throwIfThrottled(throttleData) {
  if (throttleData) {
    if (Date.now() - throttleData.allowRequestsAfter <= 0) {
      // If before, throw.
      throw ERROR_FACTORY.create("throttled"
      /* THROTTLED */
      , {
        time: getDurationString(throttleData.allowRequestsAfter - Date.now()),
        httpStatus: throttleData.httpStatus
      });
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Activate App Check for the given app. Can be called only once per app.
 * @param app - the {@link @firebase/app#FirebaseApp} to activate App Check for
 * @param options - App Check initialization options
 * @public
 */


function initializeAppCheck(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.getApp)(), options) {
  app = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(app);

  const provider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._getProvider)(app, 'app-check'); // Ensure initializeDebugMode() is only called once.


  if (!getDebugState().initialized) {
    initializeDebugMode();
  } // Log a message containing the debug token when `initializeAppCheck()`
  // is called in debug mode.


  if (isDebugMode()) {
    // Do not block initialization to get the token for the message.
    void getDebugToken().then(token => // Not using logger because I don't think we ever want this accidentally hidden.
    console.log(`App Check debug token: ${token}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`));
  }

  if (provider.isInitialized()) {
    const existingInstance = provider.getImmediate();
    const initialOptions = provider.getOptions();

    if (initialOptions.isTokenAutoRefreshEnabled === options.isTokenAutoRefreshEnabled && initialOptions.provider.isEqual(options.provider)) {
      return existingInstance;
    } else {
      throw ERROR_FACTORY.create("already-initialized"
      /* ALREADY_INITIALIZED */
      , {
        appName: app.name
      });
    }
  }

  const appCheck = provider.initialize({
    options
  });

  _activate(app, options.provider, options.isTokenAutoRefreshEnabled); // If isTokenAutoRefreshEnabled is false, do not send any requests to the
  // exchange endpoint without an explicit call from the user either directly
  // or through another Firebase library (storage, functions, etc.)


  if (getState(app).isTokenAutoRefreshEnabled) {
    // Adding a listener will start the refresher and fetch a token if needed.
    // This gets a token ready and prevents a delay when an internal library
    // requests the token.
    // Listener function does not need to do anything, its base functionality
    // of calling getToken() already fetches token and writes it to memory/storage.
    addTokenListener(appCheck, "INTERNAL"
    /* INTERNAL */
    , () => {});
  }

  return appCheck;
}
/**
 * Activate App Check
 * @param app - Firebase app to activate App Check for.
 * @param provider - reCAPTCHA v3 provider or
 * custom token provider.
 * @param isTokenAutoRefreshEnabled - If true, the SDK automatically
 * refreshes App Check tokens as needed. If undefined, defaults to the
 * value of `app.automaticDataCollectionEnabled`, which defaults to
 * false and can be set in the app config.
 */


function _activate(app, provider, isTokenAutoRefreshEnabled) {
  const state = getState(app);
  const newState = Object.assign(Object.assign({}, state), {
    activated: true
  });
  newState.provider = provider; // Read cached token from storage if it exists and store it in memory.

  newState.cachedTokenPromise = readTokenFromStorage(app).then(cachedToken => {
    if (cachedToken && isValid(cachedToken)) {
      setState(app, Object.assign(Object.assign({}, getState(app)), {
        token: cachedToken
      })); // notify all listeners with the cached token

      notifyTokenListeners(app, {
        token: cachedToken.token
      });
    }

    return cachedToken;
  }); // Use value of global `automaticDataCollectionEnabled` (which
  // itself defaults to false if not specified in config) if
  // `isTokenAutoRefreshEnabled` param was not provided by user.

  newState.isTokenAutoRefreshEnabled = isTokenAutoRefreshEnabled === undefined ? app.automaticDataCollectionEnabled : isTokenAutoRefreshEnabled;
  setState(app, newState);
  newState.provider.initialize(app);
}
/**
 * Set whether App Check will automatically refresh tokens as needed.
 *
 * @param appCheckInstance - The App Check service instance.
 * @param isTokenAutoRefreshEnabled - If true, the SDK automatically
 * refreshes App Check tokens as needed. This overrides any value set
 * during `initializeAppCheck()`.
 * @public
 */


function setTokenAutoRefreshEnabled(appCheckInstance, isTokenAutoRefreshEnabled) {
  const app = appCheckInstance.app;
  const state = getState(app); // This will exist if any product libraries have called
  // `addTokenListener()`

  if (state.tokenRefresher) {
    if (isTokenAutoRefreshEnabled === true) {
      state.tokenRefresher.start();
    } else {
      state.tokenRefresher.stop();
    }
  }

  setState(app, Object.assign(Object.assign({}, state), {
    isTokenAutoRefreshEnabled
  }));
}
/**
 * Get the current App Check token. Attaches to the most recent
 * in-flight request if one is present. Returns null if no token
 * is present and no token requests are in-flight.
 *
 * @param appCheckInstance - The App Check service instance.
 * @param forceRefresh - If true, will always try to fetch a fresh token.
 * If false, will use a cached token if found in storage.
 * @public
 */


function getToken(_x9, _x10) {
  return _getToken.apply(this, arguments);
}
/**
 * Wraps `addTokenListener`/`removeTokenListener` methods in an `Observer`
 * pattern for public use.
 */


function _getToken() {
  _getToken = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (appCheckInstance, forceRefresh) {
    const result = yield getToken$2(appCheckInstance, forceRefresh);

    if (result.error) {
      throw result.error;
    }

    return {
      token: result.token
    };
  });
  return _getToken.apply(this, arguments);
}

function onTokenChanged(appCheckInstance, onNextOrObserver, onError,
/**
 * NOTE: Although an `onCompletion` callback can be provided, it will
 * never be called because the token stream is never-ending.
 * It is added only for API consistency with the observer pattern, which
 * we follow in JS APIs.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
onCompletion) {
  let nextFn = () => {};

  let errorFn = () => {};

  if (onNextOrObserver.next != null) {
    nextFn = onNextOrObserver.next.bind(onNextOrObserver);
  } else {
    nextFn = onNextOrObserver;
  }

  if (onNextOrObserver.error != null) {
    errorFn = onNextOrObserver.error.bind(onNextOrObserver);
  } else if (onError) {
    errorFn = onError;
  }

  addTokenListener(appCheckInstance, "EXTERNAL"
  /* EXTERNAL */
  , nextFn, errorFn);
  return () => removeTokenListener(appCheckInstance.app, nextFn);
}
/**
 * Firebase App Check
 *
 * @packageDocumentation
 */


const APP_CHECK_NAME = 'app-check';
const APP_CHECK_NAME_INTERNAL = 'app-check-internal';

function registerAppCheck() {
  // The public interface
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__.Component(APP_CHECK_NAME, container => {
    // getImmediate for FirebaseApp will always succeed
    const app = container.getProvider('app').getImmediate();
    const heartbeatServiceProvider = container.getProvider('heartbeat');
    return factory(app, heartbeatServiceProvider);
  }, "PUBLIC"
  /* PUBLIC */
  ).setInstantiationMode("EXPLICIT"
  /* EXPLICIT */
  )
  /**
   * Initialize app-check-internal after app-check is initialized to make AppCheck available to
   * other Firebase SDKs
   */
  .setInstanceCreatedCallback((container, _identifier, _appcheckService) => {
    container.getProvider(APP_CHECK_NAME_INTERNAL).initialize();
  })); // The internal interface used by other Firebase products


  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__.Component(APP_CHECK_NAME_INTERNAL, container => {
    const appCheck = container.getProvider('app-check').getImmediate();
    return internalFactory(appCheck);
  }, "PUBLIC"
  /* PUBLIC */
  ).setInstantiationMode("EXPLICIT"
  /* EXPLICIT */
  ));

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.registerVersion)(name, version);
}

registerAppCheck();
 //# sourceMappingURL=index.esm2017.js.map

/***/ }),

/***/ 63942:
/*!*********************************************************************!*\
  !*** ./node_modules/@firebase/app-compat/dist/esm/index.esm2017.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ firebase)
/* harmony export */ });
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/util */ 42090);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/component */ 34859);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/app */ 49681);
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/logger */ 41877);





/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Global context object for a collection of services using
 * a shared authentication state.
 *
 * marked as internal because it references internal types exported from @firebase/app
 * @internal
 */

class FirebaseAppImpl {
  constructor(_delegate, firebase) {
    this._delegate = _delegate;
    this.firebase = firebase; // add itself to container

    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__._addComponent)(_delegate, new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component('app-compat', () => this, "PUBLIC"
    /* PUBLIC */
    ));

    this.container = _delegate.container;
  }

  get automaticDataCollectionEnabled() {
    return this._delegate.automaticDataCollectionEnabled;
  }

  set automaticDataCollectionEnabled(val) {
    this._delegate.automaticDataCollectionEnabled = val;
  }

  get name() {
    return this._delegate.name;
  }

  get options() {
    return this._delegate.options;
  }

  delete() {
    return new Promise(resolve => {
      this._delegate.checkDestroyed();

      resolve();
    }).then(() => {
      this.firebase.INTERNAL.removeApp(this.name);
      return (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__.deleteApp)(this._delegate);
    });
  }
  /**
   * Return a service instance associated with this app (creating it
   * on demand), identified by the passed instanceIdentifier.
   *
   * NOTE: Currently storage and functions are the only ones that are leveraging this
   * functionality. They invoke it by calling:
   *
   * ```javascript
   * firebase.app().storage('STORAGE BUCKET ID')
   * ```
   *
   * The service name is passed to this already
   * @internal
   */


  _getService(name, instanceIdentifier = _firebase_app__WEBPACK_IMPORTED_MODULE_2__._DEFAULT_ENTRY_NAME) {
    var _a;

    this._delegate.checkDestroyed(); // Initialize instance if InstatiationMode is `EXPLICIT`.


    const provider = this._delegate.container.getProvider(name);

    if (!provider.isInitialized() && ((_a = provider.getComponent()) === null || _a === void 0 ? void 0 : _a.instantiationMode) === "EXPLICIT"
    /* EXPLICIT */
    ) {
      provider.initialize();
    } // getImmediate will always succeed because _getService is only called for registered components.


    return provider.getImmediate({
      identifier: instanceIdentifier
    });
  }
  /**
   * Remove a service instance from the cache, so we will create a new instance for this service
   * when people try to get it again.
   *
   * NOTE: currently only firestore uses this functionality to support firestore shutdown.
   *
   * @param name The service name
   * @param instanceIdentifier instance identifier in case multiple instances are allowed
   * @internal
   */


  _removeServiceInstance(name, instanceIdentifier = _firebase_app__WEBPACK_IMPORTED_MODULE_2__._DEFAULT_ENTRY_NAME) {
    this._delegate.container // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .getProvider(name).clearInstance(instanceIdentifier);
  }
  /**
   * @param component the component being added to this app's container
   * @internal
   */


  _addComponent(component) {
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__._addComponent)(this._delegate, component);
  }

  _addOrOverwriteComponent(component) {
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__._addOrOverwriteComponent)(this._delegate, component);
  }

  toJSON() {
    return {
      name: this.name,
      automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
      options: this.options
    };
  }

} // TODO: investigate why the following needs to be commented out
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
// (FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
//   FirebaseAppImpl.prototype.delete ||
//   console.log('dc');

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const ERRORS = {
  ["no-app"
  /* NO_APP */
  ]: "No Firebase App '{$appName}' has been created - " + 'call Firebase App.initializeApp()',
  ["invalid-app-argument"
  /* INVALID_APP_ARGUMENT */
  ]: 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.'
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.ErrorFactory('app-compat', 'Firebase', ERRORS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */

function createFirebaseNamespaceCore(firebaseAppImpl) {
  const apps = {}; // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const components = new Map<string, Component<any>>();
  // A namespace is a plain JavaScript Object.

  const namespace = {
    // Hack to prevent Babel from modifying the object returned
    // as the firebase namespace.
    // @ts-ignore
    __esModule: true,
    initializeApp: initializeAppCompat,
    // @ts-ignore
    app,
    registerVersion: _firebase_app__WEBPACK_IMPORTED_MODULE_2__.registerVersion,
    setLogLevel: _firebase_app__WEBPACK_IMPORTED_MODULE_2__.setLogLevel,
    onLog: _firebase_app__WEBPACK_IMPORTED_MODULE_2__.onLog,
    // @ts-ignore
    apps: null,
    SDK_VERSION: _firebase_app__WEBPACK_IMPORTED_MODULE_2__.SDK_VERSION,
    INTERNAL: {
      registerComponent: registerComponentCompat,
      removeApp,
      useAsService,
      modularAPIs: _firebase_app__WEBPACK_IMPORTED_MODULE_2__
    }
  }; // Inject a circular default export to allow Babel users who were previously
  // using:
  //
  //   import firebase from 'firebase';
  //   which becomes: var firebase = require('firebase').default;
  //
  // instead of
  //
  //   import * as firebase from 'firebase';
  //   which becomes: var firebase = require('firebase');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  namespace['default'] = namespace; // firebase.apps is a read-only getter.

  Object.defineProperty(namespace, 'apps', {
    get: getApps
  });
  /**
   * Called by App.delete() - but before any services associated with the App
   * are deleted.
   */

  function removeApp(name) {
    delete apps[name];
  }
  /**
   * Get the App object for a given name (or DEFAULT).
   */


  function app(name) {
    name = name || _firebase_app__WEBPACK_IMPORTED_MODULE_2__._DEFAULT_ENTRY_NAME;

    if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.contains)(apps, name)) {
      throw ERROR_FACTORY.create("no-app"
      /* NO_APP */
      , {
        appName: name
      });
    }

    return apps[name];
  } // @ts-ignore


  app['App'] = firebaseAppImpl;
  /**
   * Create a new App instance (name must be unique).
   *
   * This function is idempotent. It can be called more than once and return the same instance using the same options and config.
   */

  function initializeAppCompat(options, rawConfig = {}) {
    const app = _firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp(options, rawConfig);

    if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.contains)(apps, app.name)) {
      return apps[app.name];
    }

    const appCompat = new firebaseAppImpl(app, namespace);
    apps[app.name] = appCompat;
    return appCompat;
  }
  /*
   * Return an array of all the non-deleted FirebaseApps.
   */


  function getApps() {
    // Make a copy so caller cannot mutate the apps list.
    return Object.keys(apps).map(name => apps[name]);
  }

  function registerComponentCompat(component) {
    const componentName = component.name;
    const componentNameWithoutCompat = componentName.replace('-compat', '');

    if (_firebase_app__WEBPACK_IMPORTED_MODULE_2__._registerComponent(component) && component.type === "PUBLIC"
    /* PUBLIC */
    ) {
      // create service namespace for public components
      // The Service namespace is an accessor function ...
      const serviceNamespace = (appArg = app()) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof appArg[componentNameWithoutCompat] !== 'function') {
          // Invalid argument.
          // This happens in the following case: firebase.storage('gs:/')
          throw ERROR_FACTORY.create("invalid-app-argument"
          /* INVALID_APP_ARGUMENT */
          , {
            appName: componentName
          });
        } // Forward service instance lookup to the FirebaseApp.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any


        return appArg[componentNameWithoutCompat]();
      }; // ... and a container for service-level properties.


      if (component.serviceProps !== undefined) {
        (0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend)(serviceNamespace, component.serviceProps);
      } // eslint-disable-next-line @typescript-eslint/no-explicit-any


      namespace[componentNameWithoutCompat] = serviceNamespace; // Patch the FirebaseAppImpl prototype
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      firebaseAppImpl.prototype[componentNameWithoutCompat] = // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
      // option added to the no-explicit-any rule when ESlint releases it.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function (...args) {
        const serviceFxn = this._getService.bind(this, componentName);

        return serviceFxn.apply(this, component.multipleInstances ? args : []);
      };
    }

    return component.type === "PUBLIC"
    /* PUBLIC */
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace[componentNameWithoutCompat] : null;
  } // Map the requested service to a registered service name
  // (used to map auth to serverAuth service when needed).


  function useAsService(app, name) {
    if (name === 'serverAuth') {
      return null;
    }

    const useService = name;
    return useService;
  }

  return namespace;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */


function createFirebaseNamespace() {
  const namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
  namespace.INTERNAL = Object.assign(Object.assign({}, namespace.INTERNAL), {
    createFirebaseNamespace,
    extendNamespace,
    createSubscribe: _firebase_util__WEBPACK_IMPORTED_MODULE_0__.createSubscribe,
    ErrorFactory: _firebase_util__WEBPACK_IMPORTED_MODULE_0__.ErrorFactory,
    deepExtend: _firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend
  });
  /**
   * Patch the top-level firebase namespace with additional properties.
   *
   * firebase.INTERNAL.extendNamespace()
   */

  function extendNamespace(props) {
    (0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend)(namespace, props);
  }

  return namespace;
}

const firebase$1 = createFirebaseNamespace();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_3__.Logger('@firebase/app-compat');
const name = "@firebase/app-compat";
const version = "0.1.28";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function registerCoreComponents(variant) {
  // Register `app` package.
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__.registerVersion)(name, version, variant);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection
// eslint-disable-next-line @typescript-eslint/no-explicit-any


if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.isBrowser)() && self.firebase !== undefined) {
  logger.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `); // eslint-disable-next-line

  const sdkVersion = self.firebase.SDK_VERSION;

  if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
    logger.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `);
  }
}

const firebase = firebase$1;
registerCoreComponents();
 //# sourceMappingURL=index.esm2017.js.map

/***/ }),

/***/ 12833:
/*!************************************************************************!*\
  !*** ./node_modules/@firebase/installations/dist/esm/index.esm2017.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteInstallations": () => (/* binding */ deleteInstallations),
/* harmony export */   "getId": () => (/* binding */ getId),
/* harmony export */   "getInstallations": () => (/* binding */ getInstallations),
/* harmony export */   "getToken": () => (/* binding */ getToken),
/* harmony export */   "onIdChange": () => (/* binding */ onIdChange)
/* harmony export */ });
/* harmony import */ var _usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/app */ 49681);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/component */ 34859);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/util */ 42090);
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! idb */ 34735);





const name = "@firebase/installations";
const version = "0.5.11";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const PENDING_TIMEOUT_MS = 10000;
const PACKAGE_VERSION = `w:${version}`;
const INTERNAL_AUTH_VERSION = 'FIS_v2';
const INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
const TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour

const SERVICE = 'installations';
const SERVICE_NAME = 'Installations';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const ERROR_DESCRIPTION_MAP = {
  ["missing-app-config-values"
  /* MISSING_APP_CONFIG_VALUES */
  ]: 'Missing App configuration value: "{$valueName}"',
  ["not-registered"
  /* NOT_REGISTERED */
  ]: 'Firebase Installation is not registered.',
  ["installation-not-found"
  /* INSTALLATION_NOT_FOUND */
  ]: 'Firebase Installation not found.',
  ["request-failed"
  /* REQUEST_FAILED */
  ]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
  ["app-offline"
  /* APP_OFFLINE */
  ]: 'Could not process request. Application offline.',
  ["delete-pending-registration"
  /* DELETE_PENDING_REGISTRATION */
  ]: "Can't delete installation while there is a pending registration request."
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */

function isServerError(error) {
  return error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_3__.FirebaseError && error.code.includes("request-failed"
  /* REQUEST_FAILED */
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getInstallationsEndpoint({
  projectId
}) {
  return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
}

function extractAuthTokenInfoFromResponse(response) {
  return {
    token: response.token,
    requestStatus: 2
    /* COMPLETED */
    ,
    expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
    creationTime: Date.now()
  };
}

function getErrorFromResponse(_x, _x2) {
  return _getErrorFromResponse.apply(this, arguments);
}

function _getErrorFromResponse() {
  _getErrorFromResponse = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (requestName, response) {
    const responseJson = yield response.json();
    const errorData = responseJson.error;
    return ERROR_FACTORY.create("request-failed"
    /* REQUEST_FAILED */
    , {
      requestName,
      serverCode: errorData.code,
      serverMessage: errorData.message,
      serverStatus: errorData.status
    });
  });
  return _getErrorFromResponse.apply(this, arguments);
}

function getHeaders({
  apiKey
}) {
  return new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-goog-api-key': apiKey
  });
}

function getHeadersWithAuth(appConfig, {
  refreshToken
}) {
  const headers = getHeaders(appConfig);
  headers.append('Authorization', getAuthorizationHeader(refreshToken));
  return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */


function retryIfServerError(_x3) {
  return _retryIfServerError.apply(this, arguments);
}

function _retryIfServerError() {
  _retryIfServerError = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fn) {
    const result = yield fn();

    if (result.status >= 500 && result.status < 600) {
      // Internal Server Error. Retry request.
      return fn();
    }

    return result;
  });
  return _retryIfServerError.apply(this, arguments);
}

function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
  // This works because the server will never respond with fractions of a second.
  return Number(responseExpiresIn.replace('s', '000'));
}

function getAuthorizationHeader(refreshToken) {
  return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function createInstallationRequest(_x4, _x5) {
  return _createInstallationRequest.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Returns a promise that resolves after given time passes. */


function _createInstallationRequest() {
  _createInstallationRequest = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    appConfig,
    heartbeatServiceProvider
  }, {
    fid
  }) {
    const endpoint = getInstallationsEndpoint(appConfig);
    const headers = getHeaders(appConfig); // If heartbeat service exists, add the heartbeat string to the header.

    const heartbeatService = heartbeatServiceProvider.getImmediate({
      optional: true
    });

    if (heartbeatService) {
      const heartbeatsHeader = yield heartbeatService.getHeartbeatsHeader();

      if (heartbeatsHeader) {
        headers.append('x-firebase-client', heartbeatsHeader);
      }
    }

    const body = {
      fid,
      authVersion: INTERNAL_AUTH_VERSION,
      appId: appConfig.appId,
      sdkVersion: PACKAGE_VERSION
    };
    const request = {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    };
    const response = yield retryIfServerError(() => fetch(endpoint, request));

    if (response.ok) {
      const responseValue = yield response.json();
      const registeredInstallationEntry = {
        fid: responseValue.fid || fid,
        registrationStatus: 2
        /* COMPLETED */
        ,
        refreshToken: responseValue.refreshToken,
        authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
      };
      return registeredInstallationEntry;
    } else {
      throw yield getErrorFromResponse('Create Installation', response);
    }
  });
  return _createInstallationRequest.apply(this, arguments);
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function bufferToBase64UrlSafe(array) {
  const b64 = btoa(String.fromCharCode(...array));
  return b64.replace(/\+/g, '-').replace(/\//g, '_');
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
const INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */

function generateFid() {
  try {
    // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
    // bytes. our implementation generates a 17 byte array instead.
    const fidByteArray = new Uint8Array(17);
    const crypto = self.crypto || self.msCrypto;
    crypto.getRandomValues(fidByteArray); // Replace the first 4 random bits with the constant FID header of 0b0111.

    fidByteArray[0] = 0b01110000 + fidByteArray[0] % 0b00010000;
    const fid = encode(fidByteArray);
    return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
  } catch (_a) {
    // FID generation errored
    return INVALID_FID;
  }
}
/** Converts a FID Uint8Array to a base64 string representation. */


function encode(fidByteArray) {
  const b64String = bufferToBase64UrlSafe(fidByteArray); // Remove the 23rd character that was added because of the extra 4 bits at the
  // end of our 17 byte array, and the '=' padding.

  return b64String.substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Returns a string key that can be used to identify the app. */


function getKey(appConfig) {
  return `${appConfig.appName}!${appConfig.appId}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const fidChangeCallbacks = new Map();
/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */

function fidChanged(appConfig, fid) {
  const key = getKey(appConfig);
  callFidChangeCallbacks(key, fid);
  broadcastFidChange(key, fid);
}

function addCallback(appConfig, callback) {
  // Open the broadcast channel if it's not already open,
  // to be able to listen to change events from other tabs.
  getBroadcastChannel();
  const key = getKey(appConfig);
  let callbackSet = fidChangeCallbacks.get(key);

  if (!callbackSet) {
    callbackSet = new Set();
    fidChangeCallbacks.set(key, callbackSet);
  }

  callbackSet.add(callback);
}

function removeCallback(appConfig, callback) {
  const key = getKey(appConfig);
  const callbackSet = fidChangeCallbacks.get(key);

  if (!callbackSet) {
    return;
  }

  callbackSet.delete(callback);

  if (callbackSet.size === 0) {
    fidChangeCallbacks.delete(key);
  } // Close broadcast channel if there are no more callbacks.


  closeBroadcastChannel();
}

function callFidChangeCallbacks(key, fid) {
  const callbacks = fidChangeCallbacks.get(key);

  if (!callbacks) {
    return;
  }

  for (const callback of callbacks) {
    callback(fid);
  }
}

function broadcastFidChange(key, fid) {
  const channel = getBroadcastChannel();

  if (channel) {
    channel.postMessage({
      key,
      fid
    });
  }

  closeBroadcastChannel();
}

let broadcastChannel = null;
/** Opens and returns a BroadcastChannel if it is supported by the browser. */

function getBroadcastChannel() {
  if (!broadcastChannel && 'BroadcastChannel' in self) {
    broadcastChannel = new BroadcastChannel('[Firebase] FID Change');

    broadcastChannel.onmessage = e => {
      callFidChangeCallbacks(e.data.key, e.data.fid);
    };
  }

  return broadcastChannel;
}

function closeBroadcastChannel() {
  if (fidChangeCallbacks.size === 0 && broadcastChannel) {
    broadcastChannel.close();
    broadcastChannel = null;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const DATABASE_NAME = 'firebase-installations-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'firebase-installations-store';
let dbPromise = null;

function getDbPromise() {
  if (!dbPromise) {
    dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_4__.openDB)(DATABASE_NAME, DATABASE_VERSION, {
      upgrade: (db, oldVersion) => {
        // We don't use 'break' in this switch statement, the fall-through
        // behavior is what we want, because if there are multiple versions between
        // the old version and the current version, we want ALL the migrations
        // that correspond to those versions to run, not only the last one.
        // eslint-disable-next-line default-case
        switch (oldVersion) {
          case 0:
            db.createObjectStore(OBJECT_STORE_NAME);
        }
      }
    });
  }

  return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */


function set(_x6, _x7) {
  return _set.apply(this, arguments);
}
/** Removes record(s) from the objectStore that match the given key. */


function _set() {
  _set = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (appConfig, value) {
    const key = getKey(appConfig);
    const db = yield getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const objectStore = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = yield objectStore.get(key);
    yield objectStore.put(value, key);
    yield tx.done;

    if (!oldValue || oldValue.fid !== value.fid) {
      fidChanged(appConfig, value.fid);
    }

    return value;
  });
  return _set.apply(this, arguments);
}

function remove(_x8) {
  return _remove.apply(this, arguments);
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */


function _remove() {
  _remove = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (appConfig) {
    const key = getKey(appConfig);
    const db = yield getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    yield tx.objectStore(OBJECT_STORE_NAME).delete(key);
    yield tx.done;
  });
  return _remove.apply(this, arguments);
}

function update(_x9, _x10) {
  return _update.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */


function _update() {
  _update = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (appConfig, updateFn) {
    const key = getKey(appConfig);
    const db = yield getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = yield store.get(key);
    const newValue = updateFn(oldValue);

    if (newValue === undefined) {
      yield store.delete(key);
    } else {
      yield store.put(newValue, key);
    }

    yield tx.done;

    if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
      fidChanged(appConfig, newValue.fid);
    }

    return newValue;
  });
  return _update.apply(this, arguments);
}

function getInstallationEntry(_x11) {
  return _getInstallationEntry.apply(this, arguments);
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */


function _getInstallationEntry() {
  _getInstallationEntry = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (installations) {
    let registrationPromise;
    const installationEntry = yield update(installations.appConfig, oldEntry => {
      const installationEntry = updateOrCreateInstallationEntry(oldEntry);
      const entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry);
      registrationPromise = entryWithPromise.registrationPromise;
      return entryWithPromise.installationEntry;
    });

    if (installationEntry.fid === INVALID_FID) {
      // FID generation failed. Waiting for the FID from the server.
      return {
        installationEntry: yield registrationPromise
      };
    }

    return {
      installationEntry,
      registrationPromise
    };
  });
  return _getInstallationEntry.apply(this, arguments);
}

function updateOrCreateInstallationEntry(oldEntry) {
  const entry = oldEntry || {
    fid: generateFid(),
    registrationStatus: 0
    /* NOT_STARTED */

  };
  return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */


function triggerRegistrationIfNecessary(installations, installationEntry) {
  if (installationEntry.registrationStatus === 0
  /* NOT_STARTED */
  ) {
    if (!navigator.onLine) {
      // Registration required but app is offline.
      const registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline"
      /* APP_OFFLINE */
      ));
      return {
        installationEntry,
        registrationPromise: registrationPromiseWithError
      };
    } // Try registering. Change status to IN_PROGRESS.


    const inProgressEntry = {
      fid: installationEntry.fid,
      registrationStatus: 1
      /* IN_PROGRESS */
      ,
      registrationTime: Date.now()
    };
    const registrationPromise = registerInstallation(installations, inProgressEntry);
    return {
      installationEntry: inProgressEntry,
      registrationPromise
    };
  } else if (installationEntry.registrationStatus === 1
  /* IN_PROGRESS */
  ) {
    return {
      installationEntry,
      registrationPromise: waitUntilFidRegistration(installations)
    };
  } else {
    return {
      installationEntry
    };
  }
}
/** This will be executed only once for each new Firebase Installation. */


function registerInstallation(_x12, _x13) {
  return _registerInstallation.apply(this, arguments);
}
/** Call if FID registration is pending in another request. */


function _registerInstallation() {
  _registerInstallation = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (installations, installationEntry) {
    try {
      const registeredInstallationEntry = yield createInstallationRequest(installations, installationEntry);
      return set(installations.appConfig, registeredInstallationEntry);
    } catch (e) {
      if (isServerError(e) && e.customData.serverCode === 409) {
        // Server returned a "FID can not be used" error.
        // Generate a new ID next time.
        yield remove(installations.appConfig);
      } else {
        // Registration failed. Set FID as not registered.
        yield set(installations.appConfig, {
          fid: installationEntry.fid,
          registrationStatus: 0
          /* NOT_STARTED */

        });
      }

      throw e;
    }
  });
  return _registerInstallation.apply(this, arguments);
}

function waitUntilFidRegistration(_x14) {
  return _waitUntilFidRegistration.apply(this, arguments);
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */


function _waitUntilFidRegistration() {
  _waitUntilFidRegistration = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (installations) {
    // Unfortunately, there is no way of reliably observing when a value in
    // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
    // so we need to poll.
    let entry = yield updateInstallationRequest(installations.appConfig);

    while (entry.registrationStatus === 1
    /* IN_PROGRESS */
    ) {
      // createInstallation request still in progress.
      yield sleep(100);
      entry = yield updateInstallationRequest(installations.appConfig);
    }

    if (entry.registrationStatus === 0
    /* NOT_STARTED */
    ) {
      // The request timed out or failed in a different call. Try again.
      const {
        installationEntry,
        registrationPromise
      } = yield getInstallationEntry(installations);

      if (registrationPromise) {
        return registrationPromise;
      } else {
        // if there is no registrationPromise, entry is registered.
        return installationEntry;
      }
    }

    return entry;
  });
  return _waitUntilFidRegistration.apply(this, arguments);
}

function updateInstallationRequest(appConfig) {
  return update(appConfig, oldEntry => {
    if (!oldEntry) {
      throw ERROR_FACTORY.create("installation-not-found"
      /* INSTALLATION_NOT_FOUND */
      );
    }

    return clearTimedOutRequest(oldEntry);
  });
}

function clearTimedOutRequest(entry) {
  if (hasInstallationRequestTimedOut(entry)) {
    return {
      fid: entry.fid,
      registrationStatus: 0
      /* NOT_STARTED */

    };
  }

  return entry;
}

function hasInstallationRequestTimedOut(installationEntry) {
  return installationEntry.registrationStatus === 1
  /* IN_PROGRESS */
  && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function generateAuthTokenRequest(_x15, _x16) {
  return _generateAuthTokenRequest.apply(this, arguments);
}

function _generateAuthTokenRequest() {
  _generateAuthTokenRequest = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    appConfig,
    heartbeatServiceProvider
  }, installationEntry) {
    const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry); // If heartbeat service exists, add the heartbeat string to the header.

    const heartbeatService = heartbeatServiceProvider.getImmediate({
      optional: true
    });

    if (heartbeatService) {
      const heartbeatsHeader = yield heartbeatService.getHeartbeatsHeader();

      if (heartbeatsHeader) {
        headers.append('x-firebase-client', heartbeatsHeader);
      }
    }

    const body = {
      installation: {
        sdkVersion: PACKAGE_VERSION,
        appId: appConfig.appId
      }
    };
    const request = {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    };
    const response = yield retryIfServerError(() => fetch(endpoint, request));

    if (response.ok) {
      const responseValue = yield response.json();
      const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
      return completedAuthToken;
    } else {
      throw yield getErrorFromResponse('Generate Auth Token', response);
    }
  });
  return _generateAuthTokenRequest.apply(this, arguments);
}

function getGenerateAuthTokenEndpoint(appConfig, {
  fid
}) {
  return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */


function refreshAuthToken(_x17) {
  return _refreshAuthToken.apply(this, arguments);
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */


function _refreshAuthToken() {
  _refreshAuthToken = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (installations, forceRefresh = false) {
    let tokenPromise;
    const entry = yield update(installations.appConfig, oldEntry => {
      if (!isEntryRegistered(oldEntry)) {
        throw ERROR_FACTORY.create("not-registered"
        /* NOT_REGISTERED */
        );
      }

      const oldAuthToken = oldEntry.authToken;

      if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
        // There is a valid token in the DB.
        return oldEntry;
      } else if (oldAuthToken.requestStatus === 1
      /* IN_PROGRESS */
      ) {
        // There already is a token request in progress.
        tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
        return oldEntry;
      } else {
        // No token or token expired.
        if (!navigator.onLine) {
          throw ERROR_FACTORY.create("app-offline"
          /* APP_OFFLINE */
          );
        }

        const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
        tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
        return inProgressEntry;
      }
    });
    const authToken = tokenPromise ? yield tokenPromise : entry.authToken;
    return authToken;
  });
  return _refreshAuthToken.apply(this, arguments);
}

function waitUntilAuthTokenRequest(_x18, _x19) {
  return _waitUntilAuthTokenRequest.apply(this, arguments);
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */


function _waitUntilAuthTokenRequest() {
  _waitUntilAuthTokenRequest = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (installations, forceRefresh) {
    // Unfortunately, there is no way of reliably observing when a value in
    // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
    // so we need to poll.
    let entry = yield updateAuthTokenRequest(installations.appConfig);

    while (entry.authToken.requestStatus === 1
    /* IN_PROGRESS */
    ) {
      // generateAuthToken still in progress.
      yield sleep(100);
      entry = yield updateAuthTokenRequest(installations.appConfig);
    }

    const authToken = entry.authToken;

    if (authToken.requestStatus === 0
    /* NOT_STARTED */
    ) {
      // The request timed out or failed in a different call. Try again.
      return refreshAuthToken(installations, forceRefresh);
    } else {
      return authToken;
    }
  });
  return _waitUntilAuthTokenRequest.apply(this, arguments);
}

function updateAuthTokenRequest(appConfig) {
  return update(appConfig, oldEntry => {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY.create("not-registered"
      /* NOT_REGISTERED */
      );
    }

    const oldAuthToken = oldEntry.authToken;

    if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
      return Object.assign(Object.assign({}, oldEntry), {
        authToken: {
          requestStatus: 0
          /* NOT_STARTED */

        }
      });
    }

    return oldEntry;
  });
}

function fetchAuthTokenFromServer(_x20, _x21) {
  return _fetchAuthTokenFromServer.apply(this, arguments);
}

function _fetchAuthTokenFromServer() {
  _fetchAuthTokenFromServer = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (installations, installationEntry) {
    try {
      const authToken = yield generateAuthTokenRequest(installations, installationEntry);
      const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
        authToken
      });
      yield set(installations.appConfig, updatedInstallationEntry);
      return authToken;
    } catch (e) {
      if (isServerError(e) && (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
        // Server returned a "FID not found" or a "Invalid authentication" error.
        // Generate a new ID next time.
        yield remove(installations.appConfig);
      } else {
        const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
          authToken: {
            requestStatus: 0
            /* NOT_STARTED */

          }
        });
        yield set(installations.appConfig, updatedInstallationEntry);
      }

      throw e;
    }
  });
  return _fetchAuthTokenFromServer.apply(this, arguments);
}

function isEntryRegistered(installationEntry) {
  return installationEntry !== undefined && installationEntry.registrationStatus === 2
  /* COMPLETED */
  ;
}

function isAuthTokenValid(authToken) {
  return authToken.requestStatus === 2
  /* COMPLETED */
  && !isAuthTokenExpired(authToken);
}

function isAuthTokenExpired(authToken) {
  const now = Date.now();
  return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */


function makeAuthTokenRequestInProgressEntry(oldEntry) {
  const inProgressAuthToken = {
    requestStatus: 1
    /* IN_PROGRESS */
    ,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, oldEntry), {
    authToken: inProgressAuthToken
  });
}

function hasAuthTokenRequestTimedOut(authToken) {
  return authToken.requestStatus === 1
  /* IN_PROGRESS */
  && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Creates a Firebase Installation if there isn't one for the app and
 * returns the Installation ID.
 * @param installations - The `Installations` instance.
 *
 * @public
 */


function getId(_x22) {
  return _getId.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a Firebase Installations auth token, identifying the current
 * Firebase Installation.
 * @param installations - The `Installations` instance.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */


function _getId() {
  _getId = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (installations) {
    const installationsImpl = installations;
    const {
      installationEntry,
      registrationPromise
    } = yield getInstallationEntry(installationsImpl);

    if (registrationPromise) {
      registrationPromise.catch(console.error);
    } else {
      // If the installation is already registered, update the authentication
      // token if needed.
      refreshAuthToken(installationsImpl).catch(console.error);
    }

    return installationEntry.fid;
  });
  return _getId.apply(this, arguments);
}

function getToken(_x23) {
  return _getToken.apply(this, arguments);
}

function _getToken() {
  _getToken = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (installations, forceRefresh = false) {
    const installationsImpl = installations;
    yield completeInstallationRegistration(installationsImpl); // At this point we either have a Registered Installation in the DB, or we've
    // already thrown an error.

    const authToken = yield refreshAuthToken(installationsImpl, forceRefresh);
    return authToken.token;
  });
  return _getToken.apply(this, arguments);
}

function completeInstallationRegistration(_x24) {
  return _completeInstallationRegistration.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _completeInstallationRegistration() {
  _completeInstallationRegistration = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (installations) {
    const {
      registrationPromise
    } = yield getInstallationEntry(installations);

    if (registrationPromise) {
      // A createInstallation request is in progress. Wait until it finishes.
      yield registrationPromise;
    }
  });
  return _completeInstallationRegistration.apply(this, arguments);
}

function deleteInstallationRequest(_x25, _x26) {
  return _deleteInstallationRequest.apply(this, arguments);
}

function _deleteInstallationRequest() {
  _deleteInstallationRequest = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (appConfig, installationEntry) {
    const endpoint = getDeleteEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    const request = {
      method: 'DELETE',
      headers
    };
    const response = yield retryIfServerError(() => fetch(endpoint, request));

    if (!response.ok) {
      throw yield getErrorFromResponse('Delete Installation', response);
    }
  });
  return _deleteInstallationRequest.apply(this, arguments);
}

function getDeleteEndpoint(appConfig, {
  fid
}) {
  return `${getInstallationsEndpoint(appConfig)}/${fid}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Deletes the Firebase Installation and all associated data.
 * @param installations - The `Installations` instance.
 *
 * @public
 */


function deleteInstallations(_x27) {
  return _deleteInstallations.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 * @param installations - The `Installations` instance.
 * @param callback - The callback function that is invoked when FID changes.
 * @returns A function that can be called to unsubscribe.
 *
 * @public
 */


function _deleteInstallations() {
  _deleteInstallations = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (installations) {
    const {
      appConfig
    } = installations;
    const entry = yield update(appConfig, oldEntry => {
      if (oldEntry && oldEntry.registrationStatus === 0
      /* NOT_STARTED */
      ) {
        // Delete the unregistered entry without sending a deleteInstallation request.
        return undefined;
      }

      return oldEntry;
    });

    if (entry) {
      if (entry.registrationStatus === 1
      /* IN_PROGRESS */
      ) {
        // Can't delete while trying to register.
        throw ERROR_FACTORY.create("delete-pending-registration"
        /* DELETE_PENDING_REGISTRATION */
        );
      } else if (entry.registrationStatus === 2
      /* COMPLETED */
      ) {
        if (!navigator.onLine) {
          throw ERROR_FACTORY.create("app-offline"
          /* APP_OFFLINE */
          );
        } else {
          yield deleteInstallationRequest(appConfig, entry);
          yield remove(appConfig);
        }
      }
    }
  });
  return _deleteInstallations.apply(this, arguments);
}

function onIdChange(installations, callback) {
  const {
    appConfig
  } = installations;
  addCallback(appConfig, callback);
  return () => {
    removeCallback(appConfig, callback);
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns an instance of {@link Installations} associated with the given
 * {@link @firebase/app#FirebaseApp} instance.
 * @param app - The {@link @firebase/app#FirebaseApp} instance.
 *
 * @public
 */


function getInstallations(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.getApp)()) {
  const installationsImpl = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._getProvider)(app, 'installations').getImmediate();

  return installationsImpl;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function extractAppConfig(app) {
  if (!app || !app.options) {
    throw getMissingValueError('App Configuration');
  }

  if (!app.name) {
    throw getMissingValueError('App Name');
  } // Required app config keys


  const configKeys = ['projectId', 'apiKey', 'appId'];

  for (const keyName of configKeys) {
    if (!app.options[keyName]) {
      throw getMissingValueError(keyName);
    }
  }

  return {
    appName: app.name,
    projectId: app.options.projectId,
    apiKey: app.options.apiKey,
    appId: app.options.appId
  };
}

function getMissingValueError(valueName) {
  return ERROR_FACTORY.create("missing-app-config-values"
  /* MISSING_APP_CONFIG_VALUES */
  , {
    valueName
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const INSTALLATIONS_NAME = 'installations';
const INSTALLATIONS_NAME_INTERNAL = 'installations-internal';

const publicFactory = container => {
  const app = container.getProvider('app').getImmediate(); // Throws if app isn't configured properly.

  const appConfig = extractAppConfig(app);

  const heartbeatServiceProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._getProvider)(app, 'heartbeat');

  const installationsImpl = {
    app,
    appConfig,
    heartbeatServiceProvider,
    _delete: () => Promise.resolve()
  };
  return installationsImpl;
};

const internalFactory = container => {
  const app = container.getProvider('app').getImmediate(); // Internal FIS instance relies on public FIS instance.

  const installations = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._getProvider)(app, INSTALLATIONS_NAME).getImmediate();

  const installationsInternal = {
    getId: () => getId(installations),
    getToken: forceRefresh => getToken(installations, forceRefresh)
  };
  return installationsInternal;
};

function registerInstallations() {
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__.Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC"
  /* PUBLIC */
  ));

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__.Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE"
  /* PRIVATE */
  ));
}
/**
 * Firebase Installations
 *
 * @packageDocumentation
 */


registerInstallations();
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.registerVersion)(name, version); // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation

(0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.registerVersion)(name, version, 'esm2017');
 //# sourceMappingURL=index.esm2017.js.map

/***/ }),

/***/ 20908:
/*!********************************************************************!*\
  !*** ./node_modules/@firebase/messaging/dist/esm/index.esm2017.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteToken": () => (/* binding */ deleteToken),
/* harmony export */   "getMessaging": () => (/* binding */ getMessagingInWindow),
/* harmony export */   "getToken": () => (/* binding */ getToken),
/* harmony export */   "isSupported": () => (/* binding */ isWindowSupported),
/* harmony export */   "onMessage": () => (/* binding */ onMessage)
/* harmony export */ });
/* harmony import */ var _usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/installations */ 12833);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/component */ 34859);
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb */ 34735);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/util */ 42090);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/app */ 49681);






/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const DEFAULT_SW_PATH = '/firebase-messaging-sw.js';
const DEFAULT_SW_SCOPE = '/firebase-cloud-messaging-push-scope';
const DEFAULT_VAPID_KEY = 'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4';
const ENDPOINT = 'https://fcmregistrations.googleapis.com/v1';
const CONSOLE_CAMPAIGN_ID = 'google.c.a.c_id';
const CONSOLE_CAMPAIGN_NAME = 'google.c.a.c_l';
const CONSOLE_CAMPAIGN_TIME = 'google.c.a.ts';
/** Set to '1' if Analytics is enabled for the campaign */

const CONSOLE_CAMPAIGN_ANALYTICS_ENABLED = 'google.c.a.e';
var MessageType$1;

(function (MessageType) {
  MessageType[MessageType["DATA_MESSAGE"] = 1] = "DATA_MESSAGE";
  MessageType[MessageType["DISPLAY_NOTIFICATION"] = 3] = "DISPLAY_NOTIFICATION";
})(MessageType$1 || (MessageType$1 = {}));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */


var MessageType;

(function (MessageType) {
  MessageType["PUSH_RECEIVED"] = "push-received";
  MessageType["NOTIFICATION_CLICKED"] = "notification-clicked";
})(MessageType || (MessageType = {}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function arrayToBase64(array) {
  const uint8Array = new Uint8Array(array);
  const base64String = btoa(String.fromCharCode(...uint8Array));
  return base64String.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function base64ToArray(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const OLD_DB_NAME = 'fcm_token_details_db';
/**
 * The last DB version of 'fcm_token_details_db' was 4. This is one higher, so that the upgrade
 * callback is called for all versions of the old DB.
 */

const OLD_DB_VERSION = 5;
const OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';

function migrateOldDatabase(_x) {
  return _migrateOldDatabase.apply(this, arguments);
}

function _migrateOldDatabase() {
  _migrateOldDatabase = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (senderId) {
    if ('databases' in indexedDB) {
      // indexedDb.databases() is an IndexedDB v3 API and does not exist in all browsers. TODO: Remove
      // typecast when it lands in TS types.
      const databases = yield indexedDB.databases();
      const dbNames = databases.map(db => db.name);

      if (!dbNames.includes(OLD_DB_NAME)) {
        // old DB didn't exist, no need to open.
        return null;
      }
    }

    let tokenDetails = null;
    const db = yield (0,idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(OLD_DB_NAME, OLD_DB_VERSION, {
      upgrade: function () {
        var _ref = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (db, oldVersion, newVersion, upgradeTransaction) {
          var _a;

          if (oldVersion < 2) {
            // Database too old, skip migration.
            return;
          }

          if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
            // Database did not exist. Nothing to do.
            return;
          }

          const objectStore = upgradeTransaction.objectStore(OLD_OBJECT_STORE_NAME);
          const value = yield objectStore.index('fcmSenderId').get(senderId);
          yield objectStore.clear();

          if (!value) {
            // No entry in the database, nothing to migrate.
            return;
          }

          if (oldVersion === 2) {
            const oldDetails = value;

            if (!oldDetails.auth || !oldDetails.p256dh || !oldDetails.endpoint) {
              return;
            }

            tokenDetails = {
              token: oldDetails.fcmToken,
              createTime: (_a = oldDetails.createTime) !== null && _a !== void 0 ? _a : Date.now(),
              subscriptionOptions: {
                auth: oldDetails.auth,
                p256dh: oldDetails.p256dh,
                endpoint: oldDetails.endpoint,
                swScope: oldDetails.swScope,
                vapidKey: typeof oldDetails.vapidKey === 'string' ? oldDetails.vapidKey : arrayToBase64(oldDetails.vapidKey)
              }
            };
          } else if (oldVersion === 3) {
            const oldDetails = value;
            tokenDetails = {
              token: oldDetails.fcmToken,
              createTime: oldDetails.createTime,
              subscriptionOptions: {
                auth: arrayToBase64(oldDetails.auth),
                p256dh: arrayToBase64(oldDetails.p256dh),
                endpoint: oldDetails.endpoint,
                swScope: oldDetails.swScope,
                vapidKey: arrayToBase64(oldDetails.vapidKey)
              }
            };
          } else if (oldVersion === 4) {
            const oldDetails = value;
            tokenDetails = {
              token: oldDetails.fcmToken,
              createTime: oldDetails.createTime,
              subscriptionOptions: {
                auth: arrayToBase64(oldDetails.auth),
                p256dh: arrayToBase64(oldDetails.p256dh),
                endpoint: oldDetails.endpoint,
                swScope: oldDetails.swScope,
                vapidKey: arrayToBase64(oldDetails.vapidKey)
              }
            };
          }
        });

        return function upgrade(_x36, _x37, _x38, _x39) {
          return _ref.apply(this, arguments);
        };
      }()
    });
    db.close(); // Delete all old databases.

    yield (0,idb__WEBPACK_IMPORTED_MODULE_3__.deleteDB)(OLD_DB_NAME);
    yield (0,idb__WEBPACK_IMPORTED_MODULE_3__.deleteDB)('fcm_vapid_details_db');
    yield (0,idb__WEBPACK_IMPORTED_MODULE_3__.deleteDB)('undefined');
    return checkTokenDetails(tokenDetails) ? tokenDetails : null;
  });
  return _migrateOldDatabase.apply(this, arguments);
}

function checkTokenDetails(tokenDetails) {
  if (!tokenDetails || !tokenDetails.subscriptionOptions) {
    return false;
  }

  const {
    subscriptionOptions
  } = tokenDetails;
  return typeof tokenDetails.createTime === 'number' && tokenDetails.createTime > 0 && typeof tokenDetails.token === 'string' && tokenDetails.token.length > 0 && typeof subscriptionOptions.auth === 'string' && subscriptionOptions.auth.length > 0 && typeof subscriptionOptions.p256dh === 'string' && subscriptionOptions.p256dh.length > 0 && typeof subscriptionOptions.endpoint === 'string' && subscriptionOptions.endpoint.length > 0 && typeof subscriptionOptions.swScope === 'string' && subscriptionOptions.swScope.length > 0 && typeof subscriptionOptions.vapidKey === 'string' && subscriptionOptions.vapidKey.length > 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Exported for tests.


const DATABASE_NAME = 'firebase-messaging-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'firebase-messaging-store';
let dbPromise = null;

function getDbPromise() {
  if (!dbPromise) {
    dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(DATABASE_NAME, DATABASE_VERSION, {
      upgrade: (upgradeDb, oldVersion) => {
        // We don't use 'break' in this switch statement, the fall-through behavior is what we want,
        // because if there are multiple versions between the old version and the current version, we
        // want ALL the migrations that correspond to those versions to run, not only the last one.
        // eslint-disable-next-line default-case
        switch (oldVersion) {
          case 0:
            upgradeDb.createObjectStore(OBJECT_STORE_NAME);
        }
      }
    });
  }

  return dbPromise;
}
/** Gets record(s) from the objectStore that match the given key. */


function dbGet(_x2) {
  return _dbGet.apply(this, arguments);
}
/** Assigns or overwrites the record for the given key with the given value. */


function _dbGet() {
  _dbGet = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (firebaseDependencies) {
    const key = getKey(firebaseDependencies);
    const db = yield getDbPromise();
    const tokenDetails = yield db.transaction(OBJECT_STORE_NAME).objectStore(OBJECT_STORE_NAME).get(key);

    if (tokenDetails) {
      return tokenDetails;
    } else {
      // Check if there is a tokenDetails object in the old DB.
      const oldTokenDetails = yield migrateOldDatabase(firebaseDependencies.appConfig.senderId);

      if (oldTokenDetails) {
        yield dbSet(firebaseDependencies, oldTokenDetails);
        return oldTokenDetails;
      }
    }
  });
  return _dbGet.apply(this, arguments);
}

function dbSet(_x3, _x4) {
  return _dbSet.apply(this, arguments);
}
/** Removes record(s) from the objectStore that match the given key. */


function _dbSet() {
  _dbSet = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (firebaseDependencies, tokenDetails) {
    const key = getKey(firebaseDependencies);
    const db = yield getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    yield tx.objectStore(OBJECT_STORE_NAME).put(tokenDetails, key);
    yield tx.done;
    return tokenDetails;
  });
  return _dbSet.apply(this, arguments);
}

function dbRemove(_x5) {
  return _dbRemove.apply(this, arguments);
}

function _dbRemove() {
  _dbRemove = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (firebaseDependencies) {
    const key = getKey(firebaseDependencies);
    const db = yield getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    yield tx.objectStore(OBJECT_STORE_NAME).delete(key);
    yield tx.done;
  });
  return _dbRemove.apply(this, arguments);
}

function getKey({
  appConfig
}) {
  return appConfig.appId;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const ERROR_MAP = {
  ["missing-app-config-values"
  /* MISSING_APP_CONFIG_VALUES */
  ]: 'Missing App configuration value: "{$valueName}"',
  ["only-available-in-window"
  /* AVAILABLE_IN_WINDOW */
  ]: 'This method is available in a Window context.',
  ["only-available-in-sw"
  /* AVAILABLE_IN_SW */
  ]: 'This method is available in a service worker context.',
  ["permission-default"
  /* PERMISSION_DEFAULT */
  ]: 'The notification permission was not granted and dismissed instead.',
  ["permission-blocked"
  /* PERMISSION_BLOCKED */
  ]: 'The notification permission was not granted and blocked instead.',
  ["unsupported-browser"
  /* UNSUPPORTED_BROWSER */
  ]: "This browser doesn't support the API's required to use the Firebase SDK.",
  ["indexed-db-unsupported"
  /* INDEXED_DB_UNSUPPORTED */
  ]: "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
  ["failed-service-worker-registration"
  /* FAILED_DEFAULT_REGISTRATION */
  ]: 'We are unable to register the default service worker. {$browserErrorMessage}',
  ["token-subscribe-failed"
  /* TOKEN_SUBSCRIBE_FAILED */
  ]: 'A problem occurred while subscribing the user to FCM: {$errorInfo}',
  ["token-subscribe-no-token"
  /* TOKEN_SUBSCRIBE_NO_TOKEN */
  ]: 'FCM returned no token when subscribing the user to push.',
  ["token-unsubscribe-failed"
  /* TOKEN_UNSUBSCRIBE_FAILED */
  ]: 'A problem occurred while unsubscribing the ' + 'user from FCM: {$errorInfo}',
  ["token-update-failed"
  /* TOKEN_UPDATE_FAILED */
  ]: 'A problem occurred while updating the user from FCM: {$errorInfo}',
  ["token-update-no-token"
  /* TOKEN_UPDATE_NO_TOKEN */
  ]: 'FCM returned no token when updating the user to push.',
  ["use-sw-after-get-token"
  /* USE_SW_AFTER_GET_TOKEN */
  ]: 'The useServiceWorker() method may only be called once and must be ' + 'called before calling getToken() to ensure your service worker is used.',
  ["invalid-sw-registration"
  /* INVALID_SW_REGISTRATION */
  ]: 'The input to useServiceWorker() must be a ServiceWorkerRegistration.',
  ["invalid-bg-handler"
  /* INVALID_BG_HANDLER */
  ]: 'The input to setBackgroundMessageHandler() must be a function.',
  ["invalid-vapid-key"
  /* INVALID_VAPID_KEY */
  ]: 'The public VAPID key must be a string.',
  ["use-vapid-key-after-get-token"
  /* USE_VAPID_KEY_AFTER_GET_TOKEN */
  ]: 'The usePublicVapidKey() method may only be called once and must be ' + 'called before calling getToken() to ensure your VAPID key is used.'
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_4__.ErrorFactory('messaging', 'Messaging', ERROR_MAP);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function requestGetToken(_x6, _x7) {
  return _requestGetToken.apply(this, arguments);
}

function _requestGetToken() {
  _requestGetToken = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (firebaseDependencies, subscriptionOptions) {
    var _a;

    const headers = yield getHeaders(firebaseDependencies);
    const body = getBody(subscriptionOptions);
    const subscribeOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    };
    let responseData;

    try {
      const response = yield fetch(getEndpoint(firebaseDependencies.appConfig), subscribeOptions);
      responseData = yield response.json();
    } catch (err) {
      throw ERROR_FACTORY.create("token-subscribe-failed"
      /* TOKEN_SUBSCRIBE_FAILED */
      , {
        errorInfo: (_a = err) === null || _a === void 0 ? void 0 : _a.toString()
      });
    }

    if (responseData.error) {
      const message = responseData.error.message;
      throw ERROR_FACTORY.create("token-subscribe-failed"
      /* TOKEN_SUBSCRIBE_FAILED */
      , {
        errorInfo: message
      });
    }

    if (!responseData.token) {
      throw ERROR_FACTORY.create("token-subscribe-no-token"
      /* TOKEN_SUBSCRIBE_NO_TOKEN */
      );
    }

    return responseData.token;
  });
  return _requestGetToken.apply(this, arguments);
}

function requestUpdateToken(_x8, _x9) {
  return _requestUpdateToken.apply(this, arguments);
}

function _requestUpdateToken() {
  _requestUpdateToken = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (firebaseDependencies, tokenDetails) {
    var _a;

    const headers = yield getHeaders(firebaseDependencies);
    const body = getBody(tokenDetails.subscriptionOptions);
    const updateOptions = {
      method: 'PATCH',
      headers,
      body: JSON.stringify(body)
    };
    let responseData;

    try {
      const response = yield fetch(`${getEndpoint(firebaseDependencies.appConfig)}/${tokenDetails.token}`, updateOptions);
      responseData = yield response.json();
    } catch (err) {
      throw ERROR_FACTORY.create("token-update-failed"
      /* TOKEN_UPDATE_FAILED */
      , {
        errorInfo: (_a = err) === null || _a === void 0 ? void 0 : _a.toString()
      });
    }

    if (responseData.error) {
      const message = responseData.error.message;
      throw ERROR_FACTORY.create("token-update-failed"
      /* TOKEN_UPDATE_FAILED */
      , {
        errorInfo: message
      });
    }

    if (!responseData.token) {
      throw ERROR_FACTORY.create("token-update-no-token"
      /* TOKEN_UPDATE_NO_TOKEN */
      );
    }

    return responseData.token;
  });
  return _requestUpdateToken.apply(this, arguments);
}

function requestDeleteToken(_x10, _x11) {
  return _requestDeleteToken.apply(this, arguments);
}

function _requestDeleteToken() {
  _requestDeleteToken = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (firebaseDependencies, token) {
    var _a;

    const headers = yield getHeaders(firebaseDependencies);
    const unsubscribeOptions = {
      method: 'DELETE',
      headers
    };

    try {
      const response = yield fetch(`${getEndpoint(firebaseDependencies.appConfig)}/${token}`, unsubscribeOptions);
      const responseData = yield response.json();

      if (responseData.error) {
        const message = responseData.error.message;
        throw ERROR_FACTORY.create("token-unsubscribe-failed"
        /* TOKEN_UNSUBSCRIBE_FAILED */
        , {
          errorInfo: message
        });
      }
    } catch (err) {
      throw ERROR_FACTORY.create("token-unsubscribe-failed"
      /* TOKEN_UNSUBSCRIBE_FAILED */
      , {
        errorInfo: (_a = err) === null || _a === void 0 ? void 0 : _a.toString()
      });
    }
  });
  return _requestDeleteToken.apply(this, arguments);
}

function getEndpoint({
  projectId
}) {
  return `${ENDPOINT}/projects/${projectId}/registrations`;
}

function getHeaders(_x12) {
  return _getHeaders.apply(this, arguments);
}

function _getHeaders() {
  _getHeaders = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    appConfig,
    installations
  }) {
    const authToken = yield installations.getToken();
    return new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'x-goog-api-key': appConfig.apiKey,
      'x-goog-firebase-installations-auth': `FIS ${authToken}`
    });
  });
  return _getHeaders.apply(this, arguments);
}

function getBody({
  p256dh,
  auth,
  endpoint,
  vapidKey
}) {
  const body = {
    web: {
      endpoint,
      auth,
      p256dh
    }
  };

  if (vapidKey !== DEFAULT_VAPID_KEY) {
    body.web.applicationPubKey = vapidKey;
  }

  return body;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// UpdateRegistration will be called once every week.


const TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function getTokenInternal(_x13) {
  return _getTokenInternal.apply(this, arguments);
}
/**
 * This method deletes the token from the database, unsubscribes the token from FCM, and unregisters
 * the push subscription if it exists.
 */


function _getTokenInternal() {
  _getTokenInternal = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (messaging) {
    const pushSubscription = yield getPushSubscription(messaging.swRegistration, messaging.vapidKey);
    const subscriptionOptions = {
      vapidKey: messaging.vapidKey,
      swScope: messaging.swRegistration.scope,
      endpoint: pushSubscription.endpoint,
      auth: arrayToBase64(pushSubscription.getKey('auth')),
      p256dh: arrayToBase64(pushSubscription.getKey('p256dh'))
    };
    const tokenDetails = yield dbGet(messaging.firebaseDependencies);

    if (!tokenDetails) {
      // No token, get a new one.
      return getNewToken(messaging.firebaseDependencies, subscriptionOptions);
    } else if (!isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)) {
      // Invalid token, get a new one.
      try {
        yield requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token);
      } catch (e) {
        // Suppress errors because of #2364
        console.warn(e);
      }

      return getNewToken(messaging.firebaseDependencies, subscriptionOptions);
    } else if (Date.now() >= tokenDetails.createTime + TOKEN_EXPIRATION_MS) {
      // Weekly token refresh
      return updateToken(messaging, {
        token: tokenDetails.token,
        createTime: Date.now(),
        subscriptionOptions
      });
    } else {
      // Valid token, nothing to do.
      return tokenDetails.token;
    }
  });
  return _getTokenInternal.apply(this, arguments);
}

function deleteTokenInternal(_x14) {
  return _deleteTokenInternal.apply(this, arguments);
}

function _deleteTokenInternal() {
  _deleteTokenInternal = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (messaging) {
    const tokenDetails = yield dbGet(messaging.firebaseDependencies);

    if (tokenDetails) {
      yield requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token);
      yield dbRemove(messaging.firebaseDependencies);
    } // Unsubscribe from the push subscription.


    const pushSubscription = yield messaging.swRegistration.pushManager.getSubscription();

    if (pushSubscription) {
      return pushSubscription.unsubscribe();
    } // If there's no SW, consider it a success.


    return true;
  });
  return _deleteTokenInternal.apply(this, arguments);
}

function updateToken(_x15, _x16) {
  return _updateToken.apply(this, arguments);
}

function _updateToken() {
  _updateToken = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (messaging, tokenDetails) {
    try {
      const updatedToken = yield requestUpdateToken(messaging.firebaseDependencies, tokenDetails);
      const updatedTokenDetails = Object.assign(Object.assign({}, tokenDetails), {
        token: updatedToken,
        createTime: Date.now()
      });
      yield dbSet(messaging.firebaseDependencies, updatedTokenDetails);
      return updatedToken;
    } catch (e) {
      yield deleteTokenInternal(messaging);
      throw e;
    }
  });
  return _updateToken.apply(this, arguments);
}

function getNewToken(_x17, _x18) {
  return _getNewToken.apply(this, arguments);
}
/**
 * Gets a PushSubscription for the current user.
 */


function _getNewToken() {
  _getNewToken = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (firebaseDependencies, subscriptionOptions) {
    const token = yield requestGetToken(firebaseDependencies, subscriptionOptions);
    const tokenDetails = {
      token,
      createTime: Date.now(),
      subscriptionOptions
    };
    yield dbSet(firebaseDependencies, tokenDetails);
    return tokenDetails.token;
  });
  return _getNewToken.apply(this, arguments);
}

function getPushSubscription(_x19, _x20) {
  return _getPushSubscription.apply(this, arguments);
}
/**
 * Checks if the saved tokenDetails object matches the configuration provided.
 */


function _getPushSubscription() {
  _getPushSubscription = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (swRegistration, vapidKey) {
    const subscription = yield swRegistration.pushManager.getSubscription();

    if (subscription) {
      return subscription;
    }

    return swRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
      // submitted to pushManager#subscribe must be of type Uint8Array.
      applicationServerKey: base64ToArray(vapidKey)
    });
  });
  return _getPushSubscription.apply(this, arguments);
}

function isTokenValid(dbOptions, currentOptions) {
  const isVapidKeyEqual = currentOptions.vapidKey === dbOptions.vapidKey;
  const isEndpointEqual = currentOptions.endpoint === dbOptions.endpoint;
  const isAuthEqual = currentOptions.auth === dbOptions.auth;
  const isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
  return isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function externalizePayload(internalPayload) {
  const payload = {
    from: internalPayload.from,
    // eslint-disable-next-line camelcase
    collapseKey: internalPayload.collapse_key,
    // eslint-disable-next-line camelcase
    messageId: internalPayload.fcmMessageId
  };
  propagateNotificationPayload(payload, internalPayload);
  propagateDataPayload(payload, internalPayload);
  propagateFcmOptions(payload, internalPayload);
  return payload;
}

function propagateNotificationPayload(payload, messagePayloadInternal) {
  if (!messagePayloadInternal.notification) {
    return;
  }

  payload.notification = {};
  const title = messagePayloadInternal.notification.title;

  if (!!title) {
    payload.notification.title = title;
  }

  const body = messagePayloadInternal.notification.body;

  if (!!body) {
    payload.notification.body = body;
  }

  const image = messagePayloadInternal.notification.image;

  if (!!image) {
    payload.notification.image = image;
  }
}

function propagateDataPayload(payload, messagePayloadInternal) {
  if (!messagePayloadInternal.data) {
    return;
  }

  payload.data = messagePayloadInternal.data;
}

function propagateFcmOptions(payload, messagePayloadInternal) {
  var _a, _b, _c, _d, _e; // fcmOptions.link value is written into notification.click_action. see more in b/232072111


  if (!messagePayloadInternal.fcmOptions && !((_a = messagePayloadInternal.notification) === null || _a === void 0 ? void 0 : _a.click_action)) {
    return;
  }

  payload.fcmOptions = {};
  const link = (_c = (_b = messagePayloadInternal.fcmOptions) === null || _b === void 0 ? void 0 : _b.link) !== null && _c !== void 0 ? _c : (_d = messagePayloadInternal.notification) === null || _d === void 0 ? void 0 : _d.click_action;

  if (!!link) {
    payload.fcmOptions.link = link;
  } // eslint-disable-next-line camelcase


  const analyticsLabel = (_e = messagePayloadInternal.fcmOptions) === null || _e === void 0 ? void 0 : _e.analytics_label;

  if (!!analyticsLabel) {
    payload.fcmOptions.analyticsLabel = analyticsLabel;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function isConsoleMessage(data) {
  // This message has a campaign ID, meaning it was sent using the Firebase Console.
  return typeof data === 'object' && !!data && CONSOLE_CAMPAIGN_ID in data;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


_mergeStrings('hts/frbslgigp.ogepscmv/ieo/eaylg', 'tp:/ieaeogn-agolai.o/1frlglgc/o');

_mergeStrings('AzSCbw63g1R0nCw85jG8', 'Iaya3yLKwmgvh7cF0q4');

function _mergeStrings(s1, s2) {
  const resultArray = [];

  for (let i = 0; i < s1.length; i++) {
    resultArray.push(s1.charAt(i));

    if (i < s2.length) {
      resultArray.push(s2.charAt(i));
    }
  }

  return resultArray.join('');
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function extractAppConfig(app) {
  if (!app || !app.options) {
    throw getMissingValueError('App Configuration Object');
  }

  if (!app.name) {
    throw getMissingValueError('App Name');
  } // Required app config keys


  const configKeys = ['projectId', 'apiKey', 'appId', 'messagingSenderId'];
  const {
    options
  } = app;

  for (const keyName of configKeys) {
    if (!options[keyName]) {
      throw getMissingValueError(keyName);
    }
  }

  return {
    appName: app.name,
    projectId: options.projectId,
    apiKey: options.apiKey,
    appId: options.appId,
    senderId: options.messagingSenderId
  };
}

function getMissingValueError(valueName) {
  return ERROR_FACTORY.create("missing-app-config-values"
  /* MISSING_APP_CONFIG_VALUES */
  , {
    valueName
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class MessagingService {
  constructor(app, installations, analyticsProvider) {
    // logging is only done with end user consent. Default to false.
    this.deliveryMetricsExportedToBigQueryEnabled = false;
    this.onBackgroundMessageHandler = null;
    this.onMessageHandler = null;
    this.logEvents = [];
    this.isLogServiceStarted = false;
    const appConfig = extractAppConfig(app);
    this.firebaseDependencies = {
      app,
      appConfig,
      installations,
      analyticsProvider
    };
  }

  _delete() {
    return Promise.resolve();
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function registerDefaultSw(_x21) {
  return _registerDefaultSw.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _registerDefaultSw() {
  _registerDefaultSw = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (messaging) {
    var _a;

    try {
      messaging.swRegistration = yield navigator.serviceWorker.register(DEFAULT_SW_PATH, {
        scope: DEFAULT_SW_SCOPE
      }); // The timing when browser updates sw when sw has an update is unreliable from experiment. It
      // leads to version conflict when the SDK upgrades to a newer version in the main page, but sw
      // is stuck with the old version. For example,
      // https://github.com/firebase/firebase-js-sdk/issues/2590 The following line reliably updates
      // sw if there was an update.

      messaging.swRegistration.update().catch(() => {
        /* it is non blocking and we don't care if it failed */
      });
    } catch (e) {
      throw ERROR_FACTORY.create("failed-service-worker-registration"
      /* FAILED_DEFAULT_REGISTRATION */
      , {
        browserErrorMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
      });
    }
  });
  return _registerDefaultSw.apply(this, arguments);
}

function updateSwReg(_x22, _x23) {
  return _updateSwReg.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _updateSwReg() {
  _updateSwReg = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (messaging, swRegistration) {
    if (!swRegistration && !messaging.swRegistration) {
      yield registerDefaultSw(messaging);
    }

    if (!swRegistration && !!messaging.swRegistration) {
      return;
    }

    if (!(swRegistration instanceof ServiceWorkerRegistration)) {
      throw ERROR_FACTORY.create("invalid-sw-registration"
      /* INVALID_SW_REGISTRATION */
      );
    }

    messaging.swRegistration = swRegistration;
  });
  return _updateSwReg.apply(this, arguments);
}

function updateVapidKey(_x24, _x25) {
  return _updateVapidKey.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _updateVapidKey() {
  _updateVapidKey = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (messaging, vapidKey) {
    if (!!vapidKey) {
      messaging.vapidKey = vapidKey;
    } else if (!messaging.vapidKey) {
      messaging.vapidKey = DEFAULT_VAPID_KEY;
    }
  });
  return _updateVapidKey.apply(this, arguments);
}

function getToken$1(_x26, _x27) {
  return _getToken$.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _getToken$() {
  _getToken$ = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (messaging, options) {
    if (!navigator) {
      throw ERROR_FACTORY.create("only-available-in-window"
      /* AVAILABLE_IN_WINDOW */
      );
    }

    if (Notification.permission === 'default') {
      yield Notification.requestPermission();
    }

    if (Notification.permission !== 'granted') {
      throw ERROR_FACTORY.create("permission-blocked"
      /* PERMISSION_BLOCKED */
      );
    }

    yield updateVapidKey(messaging, options === null || options === void 0 ? void 0 : options.vapidKey);
    yield updateSwReg(messaging, options === null || options === void 0 ? void 0 : options.serviceWorkerRegistration);
    return getTokenInternal(messaging);
  });
  return _getToken$.apply(this, arguments);
}

function logToScion(_x28, _x29, _x30) {
  return _logToScion.apply(this, arguments);
}

function _logToScion() {
  _logToScion = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (messaging, messageType, data) {
    const eventType = getEventType(messageType);
    const analytics = yield messaging.firebaseDependencies.analyticsProvider.get();
    analytics.logEvent(eventType, {
      /* eslint-disable camelcase */
      message_id: data[CONSOLE_CAMPAIGN_ID],
      message_name: data[CONSOLE_CAMPAIGN_NAME],
      message_time: data[CONSOLE_CAMPAIGN_TIME],
      message_device_time: Math.floor(Date.now() / 1000)
      /* eslint-enable camelcase */

    });
  });
  return _logToScion.apply(this, arguments);
}

function getEventType(messageType) {
  switch (messageType) {
    case MessageType.NOTIFICATION_CLICKED:
      return 'notification_open';

    case MessageType.PUSH_RECEIVED:
      return 'notification_foreground';

    default:
      throw new Error();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function messageEventListener(_x31, _x32) {
  return _messageEventListener.apply(this, arguments);
}

function _messageEventListener() {
  _messageEventListener = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (messaging, event) {
    const internalPayload = event.data;

    if (!internalPayload.isFirebaseMessaging) {
      return;
    }

    if (messaging.onMessageHandler && internalPayload.messageType === MessageType.PUSH_RECEIVED) {
      if (typeof messaging.onMessageHandler === 'function') {
        messaging.onMessageHandler(externalizePayload(internalPayload));
      } else {
        messaging.onMessageHandler.next(externalizePayload(internalPayload));
      }
    } // Log to Scion if applicable


    const dataPayload = internalPayload.data;

    if (isConsoleMessage(dataPayload) && dataPayload[CONSOLE_CAMPAIGN_ANALYTICS_ENABLED] === '1') {
      yield logToScion(messaging, internalPayload.messageType, dataPayload);
    }
  });
  return _messageEventListener.apply(this, arguments);
}

const name = "@firebase/messaging";
const version = "0.9.15";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const WindowMessagingFactory = container => {
  const messaging = new MessagingService(container.getProvider('app').getImmediate(), container.getProvider('installations-internal').getImmediate(), container.getProvider('analytics-internal'));
  navigator.serviceWorker.addEventListener('message', e => messageEventListener(messaging, e));
  return messaging;
};

const WindowMessagingInternalFactory = container => {
  const messaging = container.getProvider('messaging').getImmediate();
  const messagingInternal = {
    getToken: options => getToken$1(messaging, options)
  };
  return messagingInternal;
};

function registerMessagingInWindow() {
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_5__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__.Component('messaging', WindowMessagingFactory, "PUBLIC"
  /* PUBLIC */
  ));

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_5__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__.Component('messaging-internal', WindowMessagingInternalFactory, "PRIVATE"
  /* PRIVATE */
  ));

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_5__.registerVersion)(name, version); // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_5__.registerVersion)(name, version, 'esm2017');
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Checks if all required APIs exist in the browser.
 * @returns a Promise that resolves to a boolean.
 *
 * @public
 */


function isWindowSupported() {
  return _isWindowSupported.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _isWindowSupported() {
  _isWindowSupported = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    try {
      // This throws if open() is unsupported, so adding it to the conditional
      // statement below can cause an uncaught error.
      yield (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.validateIndexedDBOpenable)();
    } catch (e) {
      return false;
    } // firebase-js-sdk/issues/2393 reveals that idb#open in Safari iframe and Firefox private browsing
    // might be prohibited to run. In these contexts, an error would be thrown during the messaging
    // instantiating phase, informing the developers to import/call isSupported for special handling.


    return typeof window !== 'undefined' && (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isIndexedDBAvailable)() && (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.areCookiesEnabled)() && 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window && 'fetch' in window && ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') && PushSubscription.prototype.hasOwnProperty('getKey');
  });
  return _isWindowSupported.apply(this, arguments);
}

function deleteToken$1(_x33) {
  return _deleteToken$.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _deleteToken$() {
  _deleteToken$ = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (messaging) {
    if (!navigator) {
      throw ERROR_FACTORY.create("only-available-in-window"
      /* AVAILABLE_IN_WINDOW */
      );
    }

    if (!messaging.swRegistration) {
      yield registerDefaultSw(messaging);
    }

    return deleteTokenInternal(messaging);
  });
  return _deleteToken$.apply(this, arguments);
}

function onMessage$1(messaging, nextOrObserver) {
  if (!navigator) {
    throw ERROR_FACTORY.create("only-available-in-window"
    /* AVAILABLE_IN_WINDOW */
    );
  }

  messaging.onMessageHandler = nextOrObserver;
  return () => {
    messaging.onMessageHandler = null;
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Retrieves a Firebase Cloud Messaging instance.
 *
 * @returns The Firebase Cloud Messaging instance associated with the provided firebase app.
 *
 * @public
 */


function getMessagingInWindow(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_5__.getApp)()) {
  // Conscious decision to make this async check non-blocking during the messaging instance
  // initialization phase for performance consideration. An error would be thrown latter for
  // developer's information. Developers can then choose to import and call `isSupported` for
  // special handling.
  isWindowSupported().then(isSupported => {
    // If `isWindowSupported()` resolved, but returned false.
    if (!isSupported) {
      throw ERROR_FACTORY.create("unsupported-browser"
      /* UNSUPPORTED_BROWSER */
      );
    }
  }, _ => {
    // If `isWindowSupported()` rejected.
    throw ERROR_FACTORY.create("indexed-db-unsupported"
    /* INDEXED_DB_UNSUPPORTED */
    );
  });
  return (0,_firebase_app__WEBPACK_IMPORTED_MODULE_5__._getProvider)((0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.getModularInstance)(app), 'messaging').getImmediate();
}
/**
 * Subscribes the {@link Messaging} instance to push notifications. Returns an Firebase Cloud
 * Messaging registration token that can be used to send push messages to that {@link Messaging}
 * instance.
 *
 * If a notification permission isn't already granted, this method asks the user for permission. The
 * returned promise rejects if the user does not allow the app to show notifications.
 *
 * @param messaging - The {@link Messaging} instance.
 * @param options - Provides an optional vapid key and an optinoal service worker registration
 *
 * @returns The promise resolves with an FCM registration token.
 *
 * @public
 */


function getToken(_x34, _x35) {
  return _getToken.apply(this, arguments);
}
/**
 * Deletes the registration token associated with this {@link Messaging} instance and unsubscribes
 * the {@link Messaging} instance from the push subscription.
 *
 * @param messaging - The {@link Messaging} instance.
 *
 * @returns The promise resolves when the token has been successfully deleted.
 *
 * @public
 */


function _getToken() {
  _getToken = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (messaging, options) {
    messaging = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.getModularInstance)(messaging);
    return getToken$1(messaging, options);
  });
  return _getToken.apply(this, arguments);
}

function deleteToken(messaging) {
  messaging = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.getModularInstance)(messaging);
  return deleteToken$1(messaging);
}
/**
 * When a push message is received and the user is currently on a page for your origin, the
 * message is passed to the page and an `onMessage()` event is dispatched with the payload of
 * the push message.
 *
 *
 * @param messaging - The {@link Messaging} instance.
 * @param nextOrObserver - This function, or observer object with `next` defined,
 *     is called when a message is received and the user is currently viewing your page.
 * @returns To stop listening for messages execute this returned function.
 *
 * @public
 */


function onMessage(messaging, nextOrObserver) {
  messaging = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.getModularInstance)(messaging);
  return onMessage$1(messaging, nextOrObserver);
}
/**
 * Firebase Cloud Messaging
 *
 * @packageDocumentation
 */


registerMessagingInWindow();
 //# sourceMappingURL=index.esm2017.js.map

/***/ }),

/***/ 41122:
/*!************************************************************************!*\
  !*** ./node_modules/@firebase/remote-config/dist/esm/index.esm2017.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activate": () => (/* binding */ activate),
/* harmony export */   "ensureInitialized": () => (/* binding */ ensureInitialized),
/* harmony export */   "fetchAndActivate": () => (/* binding */ fetchAndActivate),
/* harmony export */   "fetchConfig": () => (/* binding */ fetchConfig),
/* harmony export */   "getAll": () => (/* binding */ getAll),
/* harmony export */   "getBoolean": () => (/* binding */ getBoolean),
/* harmony export */   "getNumber": () => (/* binding */ getNumber),
/* harmony export */   "getRemoteConfig": () => (/* binding */ getRemoteConfig),
/* harmony export */   "getString": () => (/* binding */ getString),
/* harmony export */   "getValue": () => (/* binding */ getValue),
/* harmony export */   "isSupported": () => (/* binding */ isSupported),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/app */ 49681);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ 42090);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/component */ 34859);
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/logger */ 41877);
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/installations */ 12833);






const name = "@firebase/remote-config";
const version = "0.3.10";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Shims a minimal AbortSignal.
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */

class RemoteConfigAbortSignal {
  constructor() {
    this.listeners = [];
  }

  addEventListener(listener) {
    this.listeners.push(listener);
  }

  abort() {
    this.listeners.forEach(listener => listener());
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const RC_COMPONENT_NAME = 'remote-config';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const ERROR_DESCRIPTION_MAP = {
  ["registration-window"
  /* REGISTRATION_WINDOW */
  ]: 'Undefined window object. This SDK only supports usage in a browser environment.',
  ["registration-project-id"
  /* REGISTRATION_PROJECT_ID */
  ]: 'Undefined project identifier. Check Firebase app initialization.',
  ["registration-api-key"
  /* REGISTRATION_API_KEY */
  ]: 'Undefined API key. Check Firebase app initialization.',
  ["registration-app-id"
  /* REGISTRATION_APP_ID */
  ]: 'Undefined app identifier. Check Firebase app initialization.',
  ["storage-open"
  /* STORAGE_OPEN */
  ]: 'Error thrown when opening storage. Original error: {$originalErrorMessage}.',
  ["storage-get"
  /* STORAGE_GET */
  ]: 'Error thrown when reading from storage. Original error: {$originalErrorMessage}.',
  ["storage-set"
  /* STORAGE_SET */
  ]: 'Error thrown when writing to storage. Original error: {$originalErrorMessage}.',
  ["storage-delete"
  /* STORAGE_DELETE */
  ]: 'Error thrown when deleting from storage. Original error: {$originalErrorMessage}.',
  ["fetch-client-network"
  /* FETCH_NETWORK */
  ]: 'Fetch client failed to connect to a network. Check Internet connection.' + ' Original error: {$originalErrorMessage}.',
  ["fetch-timeout"
  /* FETCH_TIMEOUT */
  ]: 'The config fetch request timed out. ' + ' Configure timeout using "fetchTimeoutMillis" SDK setting.',
  ["fetch-throttle"
  /* FETCH_THROTTLE */
  ]: 'The config fetch request timed out while in an exponential backoff state.' + ' Configure timeout using "fetchTimeoutMillis" SDK setting.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
  ["fetch-client-parse"
  /* FETCH_PARSE */
  ]: 'Fetch client could not parse response.' + ' Original error: {$originalErrorMessage}.',
  ["fetch-status"
  /* FETCH_STATUS */
  ]: 'Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.',
  ["indexed-db-unavailable"
  /* INDEXED_DB_UNAVAILABLE */
  ]: 'Indexed DB is not supported by current browser'
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory('remoteconfig'
/* service */
, 'Remote Config'
/* service name */
, ERROR_DESCRIPTION_MAP); // Note how this is like typeof/instanceof, but for ErrorCode.

function hasErrorCode(e, errorCode) {
  return e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError && e.code.indexOf(errorCode) !== -1;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const DEFAULT_VALUE_FOR_BOOLEAN = false;
const DEFAULT_VALUE_FOR_STRING = '';
const DEFAULT_VALUE_FOR_NUMBER = 0;
const BOOLEAN_TRUTHY_VALUES = ['1', 'true', 't', 'yes', 'y', 'on'];

class Value {
  constructor(_source, _value = DEFAULT_VALUE_FOR_STRING) {
    this._source = _source;
    this._value = _value;
  }

  asString() {
    return this._value;
  }

  asBoolean() {
    if (this._source === 'static') {
      return DEFAULT_VALUE_FOR_BOOLEAN;
    }

    return BOOLEAN_TRUTHY_VALUES.indexOf(this._value.toLowerCase()) >= 0;
  }

  asNumber() {
    if (this._source === 'static') {
      return DEFAULT_VALUE_FOR_NUMBER;
    }

    let num = Number(this._value);

    if (isNaN(num)) {
      num = DEFAULT_VALUE_FOR_NUMBER;
    }

    return num;
  }

  getSource() {
    return this._source;
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *
 * @param app - The {@link @firebase/app#FirebaseApp} instance.
 * @returns A {@link RemoteConfig} instance.
 *
 * @public
 */


function getRemoteConfig(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.getApp)()) {
  app = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(app);

  const rcProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._getProvider)(app, RC_COMPONENT_NAME);

  return rcProvider.getImmediate();
}
/**
 * Makes the last fetched config available to the getters.
 * @param remoteConfig - The {@link RemoteConfig} instance.
 * @returns A `Promise` which resolves to true if the current call activated the fetched configs.
 * If the fetched configs were already activated, the `Promise` will resolve to false.
 *
 * @public
 */


function activate(_x) {
  return _activate.apply(this, arguments);
}
/**
 * Ensures the last activated config are available to the getters.
 * @param remoteConfig - The {@link RemoteConfig} instance.
 *
 * @returns A `Promise` that resolves when the last activated config is available to the getters.
 * @public
 */


function _activate() {
  _activate = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (remoteConfig) {
    const rc = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(remoteConfig);
    const [lastSuccessfulFetchResponse, activeConfigEtag] = yield Promise.all([rc._storage.getLastSuccessfulFetchResponse(), rc._storage.getActiveConfigEtag()]);

    if (!lastSuccessfulFetchResponse || !lastSuccessfulFetchResponse.config || !lastSuccessfulFetchResponse.eTag || lastSuccessfulFetchResponse.eTag === activeConfigEtag) {
      // Either there is no successful fetched config, or is the same as current active
      // config.
      return false;
    }

    yield Promise.all([rc._storageCache.setActiveConfig(lastSuccessfulFetchResponse.config), rc._storage.setActiveConfigEtag(lastSuccessfulFetchResponse.eTag)]);
    return true;
  });
  return _activate.apply(this, arguments);
}

function ensureInitialized(remoteConfig) {
  const rc = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(remoteConfig);

  if (!rc._initializePromise) {
    rc._initializePromise = rc._storageCache.loadFromStorage().then(() => {
      rc._isInitializationComplete = true;
    });
  }

  return rc._initializePromise;
}
/**
 * Fetches and caches configuration from the Remote Config service.
 * @param remoteConfig - The {@link RemoteConfig} instance.
 * @public
 */


function fetchConfig(_x2) {
  return _fetchConfig.apply(this, arguments);
}
/**
 * Gets all config.
 *
 * @param remoteConfig - The {@link RemoteConfig} instance.
 * @returns All config.
 *
 * @public
 */


function _fetchConfig() {
  _fetchConfig = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (remoteConfig) {
    const rc = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(remoteConfig); // Aborts the request after the given timeout, causing the fetch call to
    // reject with an `AbortError`.
    //
    // <p>Aborting after the request completes is a no-op, so we don't need a
    // corresponding `clearTimeout`.
    //
    // Locating abort logic here because:
    // * it uses a developer setting (timeout)
    // * it applies to all retries (like curl's max-time arg)
    // * it is consistent with the Fetch API's signal input

    const abortSignal = new RemoteConfigAbortSignal();
    setTimeout( /*#__PURE__*/(0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
      abortSignal.abort();
    }), rc.settings.fetchTimeoutMillis); // Catches *all* errors thrown by client so status can be set consistently.

    try {
      yield rc._client.fetch({
        cacheMaxAgeMillis: rc.settings.minimumFetchIntervalMillis,
        signal: abortSignal
      });
      yield rc._storageCache.setLastFetchStatus('success');
    } catch (e) {
      const lastFetchStatus = hasErrorCode(e, "fetch-throttle"
      /* FETCH_THROTTLE */
      ) ? 'throttle' : 'failure';
      yield rc._storageCache.setLastFetchStatus(lastFetchStatus);
      throw e;
    }
  });
  return _fetchConfig.apply(this, arguments);
}

function getAll(remoteConfig) {
  const rc = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(remoteConfig);
  return getAllKeys(rc._storageCache.getActiveConfig(), rc.defaultConfig).reduce((allConfigs, key) => {
    allConfigs[key] = getValue(remoteConfig, key);
    return allConfigs;
  }, {});
}
/**
 * Gets the value for the given key as a boolean.
 *
 * Convenience method for calling <code>remoteConfig.getValue(key).asBoolean()</code>.
 *
 * @param remoteConfig - The {@link RemoteConfig} instance.
 * @param key - The name of the parameter.
 *
 * @returns The value for the given key as a boolean.
 * @public
 */


function getBoolean(remoteConfig, key) {
  return getValue((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(remoteConfig), key).asBoolean();
}
/**
 * Gets the value for the given key as a number.
 *
 * Convenience method for calling <code>remoteConfig.getValue(key).asNumber()</code>.
 *
 * @param remoteConfig - The {@link RemoteConfig} instance.
 * @param key - The name of the parameter.
 *
 * @returns The value for the given key as a number.
 *
 * @public
 */


function getNumber(remoteConfig, key) {
  return getValue((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(remoteConfig), key).asNumber();
}
/**
 * Gets the value for the given key as a string.
 * Convenience method for calling <code>remoteConfig.getValue(key).asString()</code>.
 *
 * @param remoteConfig - The {@link RemoteConfig} instance.
 * @param key - The name of the parameter.
 *
 * @returns The value for the given key as a string.
 *
 * @public
 */


function getString(remoteConfig, key) {
  return getValue((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(remoteConfig), key).asString();
}
/**
 * Gets the {@link Value} for the given key.
 *
 * @param remoteConfig - The {@link RemoteConfig} instance.
 * @param key - The name of the parameter.
 *
 * @returns The value for the given key.
 *
 * @public
 */


function getValue(remoteConfig, key) {
  const rc = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(remoteConfig);

  if (!rc._isInitializationComplete) {
    rc._logger.debug(`A value was requested for key "${key}" before SDK initialization completed.` + ' Await on ensureInitialized if the intent was to get a previously activated value.');
  }

  const activeConfig = rc._storageCache.getActiveConfig();

  if (activeConfig && activeConfig[key] !== undefined) {
    return new Value('remote', activeConfig[key]);
  } else if (rc.defaultConfig && rc.defaultConfig[key] !== undefined) {
    return new Value('default', String(rc.defaultConfig[key]));
  }

  rc._logger.debug(`Returning static value for key "${key}".` + ' Define a default or remote value if this is unintentional.');

  return new Value('static');
}
/**
 * Defines the log level to use.
 *
 * @param remoteConfig - The {@link RemoteConfig} instance.
 * @param logLevel - The log level to set.
 *
 * @public
 */


function setLogLevel(remoteConfig, logLevel) {
  const rc = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(remoteConfig);

  switch (logLevel) {
    case 'debug':
      rc._logger.logLevel = _firebase_logger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.DEBUG;
      break;

    case 'silent':
      rc._logger.logLevel = _firebase_logger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.SILENT;
      break;

    default:
      rc._logger.logLevel = _firebase_logger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.ERROR;
  }
}
/**
 * Dedupes and returns an array of all the keys of the received objects.
 */


function getAllKeys(obj1 = {}, obj2 = {}) {
  return Object.keys(Object.assign(Object.assign({}, obj1), obj2));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Implements the {@link RemoteConfigClient} abstraction with success response caching.
 *
 * <p>Comparable to the browser's Cache API for responses, but the Cache API requires a Service
 * Worker, which requires HTTPS, which would significantly complicate SDK installation. Also, the
 * Cache API doesn't support matching entries by time.
 */


class CachingClient {
  constructor(client, storage, storageCache, logger) {
    this.client = client;
    this.storage = storage;
    this.storageCache = storageCache;
    this.logger = logger;
  }
  /**
   * Returns true if the age of the cached fetched configs is less than or equal to
   * {@link Settings#minimumFetchIntervalInSeconds}.
   *
   * <p>This is comparable to passing `headers = { 'Cache-Control': max-age <maxAge> }` to the
   * native Fetch API.
   *
   * <p>Visible for testing.
   */


  isCachedDataFresh(cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis) {
    // Cache can only be fresh if it's populated.
    if (!lastSuccessfulFetchTimestampMillis) {
      this.logger.debug('Config fetch cache check. Cache unpopulated.');
      return false;
    } // Calculates age of cache entry.


    const cacheAgeMillis = Date.now() - lastSuccessfulFetchTimestampMillis;
    const isCachedDataFresh = cacheAgeMillis <= cacheMaxAgeMillis;
    this.logger.debug('Config fetch cache check.' + ` Cache age millis: ${cacheAgeMillis}.` + ` Cache max age millis (minimumFetchIntervalMillis setting): ${cacheMaxAgeMillis}.` + ` Is cache hit: ${isCachedDataFresh}.`);
    return isCachedDataFresh;
  }

  fetch(request) {
    var _this = this;

    return (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Reads from persisted storage to avoid cache miss if callers don't wait on initialization.
      const [lastSuccessfulFetchTimestampMillis, lastSuccessfulFetchResponse] = yield Promise.all([_this.storage.getLastSuccessfulFetchTimestampMillis(), _this.storage.getLastSuccessfulFetchResponse()]); // Exits early on cache hit.

      if (lastSuccessfulFetchResponse && _this.isCachedDataFresh(request.cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis)) {
        return lastSuccessfulFetchResponse;
      } // Deviates from pure decorator by not honoring a passed ETag since we don't have a public API
      // that allows the caller to pass an ETag.


      request.eTag = lastSuccessfulFetchResponse && lastSuccessfulFetchResponse.eTag; // Falls back to service on cache miss.

      const response = yield _this.client.fetch(request); // Fetch throws for non-success responses, so success is guaranteed here.

      const storageOperations = [// Uses write-through cache for consistency with synchronous public API.
      _this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];

      if (response.status === 200) {
        // Caches response only if it has changed, ie non-304 responses.
        storageOperations.push(_this.storage.setLastSuccessfulFetchResponse(response));
      }

      yield Promise.all(storageOperations);
      return response;
    })();
  }

}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Attempts to get the most accurate browser language setting.
 *
 * <p>Adapted from getUserLanguage in packages/auth/src/utils.js for TypeScript.
 *
 * <p>Defers default language specification to server logic for consistency.
 *
 * @param navigatorLanguage Enables tests to override read-only {@link NavigatorLanguage}.
 */


function getUserLanguage(navigatorLanguage = navigator) {
  return (// Most reliable, but only supported in Chrome/Firefox.
    navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    navigatorLanguage.language // Polyfill otherwise.

  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Implements the Client abstraction for the Remote Config REST API.
 */


class RestClient {
  constructor(firebaseInstallations, sdkVersion, namespace, projectId, apiKey, appId) {
    this.firebaseInstallations = firebaseInstallations;
    this.sdkVersion = sdkVersion;
    this.namespace = namespace;
    this.projectId = projectId;
    this.apiKey = apiKey;
    this.appId = appId;
  }
  /**
   * Fetches from the Remote Config REST API.
   *
   * @throws a {@link ErrorCode.FETCH_NETWORK} error if {@link GlobalFetch#fetch} can't
   * connect to the network.
   * @throws a {@link ErrorCode.FETCH_PARSE} error if {@link Response#json} can't parse the
   * fetch response.
   * @throws a {@link ErrorCode.FETCH_STATUS} error if the service returns an HTTP error status.
   */


  fetch(request) {
    var _this2 = this;

    return (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b, _c;

      const [installationId, installationToken] = yield Promise.all([_this2.firebaseInstallations.getId(), _this2.firebaseInstallations.getToken()]);
      const urlBase = window.FIREBASE_REMOTE_CONFIG_URL_BASE || 'https://firebaseremoteconfig.googleapis.com';
      const url = `${urlBase}/v1/projects/${_this2.projectId}/namespaces/${_this2.namespace}:fetch?key=${_this2.apiKey}`;
      const headers = {
        'Content-Type': 'application/json',
        'Content-Encoding': 'gzip',
        // Deviates from pure decorator by not passing max-age header since we don't currently have
        // service behavior using that header.
        'If-None-Match': request.eTag || '*'
      };
      const requestBody = {
        /* eslint-disable camelcase */
        sdk_version: _this2.sdkVersion,
        app_instance_id: installationId,
        app_instance_id_token: installationToken,
        app_id: _this2.appId,
        language_code: getUserLanguage()
        /* eslint-enable camelcase */

      };
      const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody)
      }; // This logic isn't REST-specific, but shimming abort logic isn't worth another decorator.

      const fetchPromise = fetch(url, options);
      const timeoutPromise = new Promise((_resolve, reject) => {
        // Maps async event listener to Promise API.
        request.signal.addEventListener(() => {
          // Emulates https://heycam.github.io/webidl/#aborterror
          const error = new Error('The operation was aborted.');
          error.name = 'AbortError';
          reject(error);
        });
      });
      let response;

      try {
        yield Promise.race([fetchPromise, timeoutPromise]);
        response = yield fetchPromise;
      } catch (originalError) {
        let errorCode = "fetch-client-network"
        /* FETCH_NETWORK */
        ;

        if (((_a = originalError) === null || _a === void 0 ? void 0 : _a.name) === 'AbortError') {
          errorCode = "fetch-timeout"
          /* FETCH_TIMEOUT */
          ;
        }

        throw ERROR_FACTORY.create(errorCode, {
          originalErrorMessage: (_b = originalError) === null || _b === void 0 ? void 0 : _b.message
        });
      }

      let status = response.status; // Normalizes nullable header to optional.

      const responseEtag = response.headers.get('ETag') || undefined;
      let config;
      let state; // JSON parsing throws SyntaxError if the response body isn't a JSON string.
      // Requesting application/json and checking for a 200 ensures there's JSON data.

      if (response.status === 200) {
        let responseBody;

        try {
          responseBody = yield response.json();
        } catch (originalError) {
          throw ERROR_FACTORY.create("fetch-client-parse"
          /* FETCH_PARSE */
          , {
            originalErrorMessage: (_c = originalError) === null || _c === void 0 ? void 0 : _c.message
          });
        }

        config = responseBody['entries'];
        state = responseBody['state'];
      } // Normalizes based on legacy state.


      if (state === 'INSTANCE_STATE_UNSPECIFIED') {
        status = 500;
      } else if (state === 'NO_CHANGE') {
        status = 304;
      } else if (state === 'NO_TEMPLATE' || state === 'EMPTY_CONFIG') {
        // These cases can be fixed remotely, so normalize to safe value.
        config = {};
      } // Normalize to exception-based control flow for non-success cases.
      // Encapsulates HTTP specifics in this class as much as possible. Status is still the best for
      // differentiating success states (200 from 304; the state body param is undefined in a
      // standard 304).


      if (status !== 304 && status !== 200) {
        throw ERROR_FACTORY.create("fetch-status"
        /* FETCH_STATUS */
        , {
          httpStatus: status
        });
      }

      return {
        status,
        eTag: responseEtag,
        config
      };
    })();
  }

}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Supports waiting on a backoff by:
 *
 * <ul>
 *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
 *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
 *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
 *       request appear the same.</li>
 * </ul>
 *
 * <p>Visible for testing.
 */


function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise((resolve, reject) => {
    // Derives backoff from given end time, normalizing negative numbers to zero.
    const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    const timeout = setTimeout(resolve, backoffMillis); // Adds listener, rather than sets onabort, because signal is a shared object.

    signal.addEventListener(() => {
      clearTimeout(timeout); // If the request completes before this timeout, the rejection has no effect.

      reject(ERROR_FACTORY.create("fetch-throttle"
      /* FETCH_THROTTLE */
      , {
        throttleEndTimeMillis
      }));
    });
  });
}
/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */


function isRetriableError(e) {
  if (!(e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) || !e.customData) {
    return false;
  } // Uses string index defined by ErrorData, which FirebaseError implements.


  const httpStatus = Number(e.customData['httpStatus']);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
/**
 * Decorates a Client with retry logic.
 *
 * <p>Comparable to CachingClient, but uses backoff logic instead of cache max age and doesn't cache
 * responses (because the SDK has no use for error responses).
 */


class RetryingClient {
  constructor(client, storage) {
    this.client = client;
    this.storage = storage;
  }

  fetch(request) {
    var _this3 = this;

    return (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const throttleMetadata = (yield _this3.storage.getThrottleMetadata()) || {
        backoffCount: 0,
        throttleEndTimeMillis: Date.now()
      };
      return _this3.attemptFetch(request, throttleMetadata);
    })();
  }
  /**
   * A recursive helper for attempting a fetch request repeatedly.
   *
   * @throws any non-retriable errors.
   */


  attemptFetch(request, {
    throttleEndTimeMillis,
    backoffCount
  }) {
    var _this4 = this;

    return (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Starts with a (potentially zero) timeout to support resumption from stored state.
      // Ensures the throttle end time is honored if the last attempt timed out.
      // Note the SDK will never make a request if the fetch timeout expires at this point.
      yield setAbortableTimeout(request.signal, throttleEndTimeMillis);

      try {
        const response = yield _this4.client.fetch(request); // Note the SDK only clears throttle state if response is success or non-retriable.

        yield _this4.storage.deleteThrottleMetadata();
        return response;
      } catch (e) {
        if (!isRetriableError(e)) {
          throw e;
        } // Increments backoff state.


        const throttleMetadata = {
          throttleEndTimeMillis: Date.now() + (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.calculateBackoffMillis)(backoffCount),
          backoffCount: backoffCount + 1
        }; // Persists state.

        yield _this4.storage.setThrottleMetadata(throttleMetadata);
        return _this4.attemptFetch(request, throttleMetadata);
      }
    })();
  }

}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const DEFAULT_FETCH_TIMEOUT_MILLIS = 60 * 1000; // One minute

const DEFAULT_CACHE_MAX_AGE_MILLIS = 12 * 60 * 60 * 1000; // Twelve hours.

/**
 * Encapsulates business logic mapping network and storage dependencies to the public SDK API.
 *
 * See {@link https://github.com/FirebasePrivate/firebase-js-sdk/blob/master/packages/firebase/index.d.ts|interface documentation} for method descriptions.
 */

class RemoteConfig {
  constructor( // Required by FirebaseServiceFactory interface.
  app, // JS doesn't support private yet
  // (https://github.com/tc39/proposal-class-fields#private-fields), so we hint using an
  // underscore prefix.

  /**
   * @internal
   */
  _client,
  /**
   * @internal
   */
  _storageCache,
  /**
   * @internal
   */
  _storage,
  /**
   * @internal
   */
  _logger) {
    this.app = app;
    this._client = _client;
    this._storageCache = _storageCache;
    this._storage = _storage;
    this._logger = _logger;
    /**
     * Tracks completion of initialization promise.
     * @internal
     */

    this._isInitializationComplete = false;
    this.settings = {
      fetchTimeoutMillis: DEFAULT_FETCH_TIMEOUT_MILLIS,
      minimumFetchIntervalMillis: DEFAULT_CACHE_MAX_AGE_MILLIS
    };
    this.defaultConfig = {};
  }

  get fetchTimeMillis() {
    return this._storageCache.getLastSuccessfulFetchTimestampMillis() || -1;
  }

  get lastFetchStatus() {
    return this._storageCache.getLastFetchStatus() || 'no-fetch-yet';
  }

}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Converts an error event associated with a {@link IDBRequest} to a {@link FirebaseError}.
 */


function toFirebaseError(event, errorCode) {
  var _a;

  const originalError = event.target.error || undefined;
  return ERROR_FACTORY.create(errorCode, {
    originalErrorMessage: originalError && ((_a = originalError) === null || _a === void 0 ? void 0 : _a.message)
  });
}
/**
 * A general-purpose store keyed by app + namespace + {@link
 * ProjectNamespaceKeyFieldValue}.
 *
 * <p>The Remote Config SDK can be used with multiple app installations, and each app can interact
 * with multiple namespaces, so this store uses app (ID + name) and namespace as common parent keys
 * for a set of key-value pairs. See {@link Storage#createCompositeKey}.
 *
 * <p>Visible for testing.
 */


const APP_NAMESPACE_STORE = 'app_namespace_store';
const DB_NAME = 'firebase_remote_config';
const DB_VERSION = 1; // Visible for testing.

function openDatabase() {
  return new Promise((resolve, reject) => {
    var _a;

    try {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = event => {
        reject(toFirebaseError(event, "storage-open"
        /* STORAGE_OPEN */
        ));
      };

      request.onsuccess = event => {
        resolve(event.target.result);
      };

      request.onupgradeneeded = event => {
        const db = event.target.result; // We don't use 'break' in this switch statement, the fall-through
        // behavior is what we want, because if there are multiple versions between
        // the old version and the current version, we want ALL the migrations
        // that correspond to those versions to run, not only the last one.
        // eslint-disable-next-line default-case

        switch (event.oldVersion) {
          case 0:
            db.createObjectStore(APP_NAMESPACE_STORE, {
              keyPath: 'compositeKey'
            });
        }
      };
    } catch (error) {
      reject(ERROR_FACTORY.create("storage-open"
      /* STORAGE_OPEN */
      , {
        originalErrorMessage: (_a = error) === null || _a === void 0 ? void 0 : _a.message
      }));
    }
  });
}
/**
 * Abstracts data persistence.
 */


class Storage {
  /**
   * @param appId enables storage segmentation by app (ID + name).
   * @param appName enables storage segmentation by app (ID + name).
   * @param namespace enables storage segmentation by namespace.
   */
  constructor(appId, appName, namespace, openDbPromise = openDatabase()) {
    this.appId = appId;
    this.appName = appName;
    this.namespace = namespace;
    this.openDbPromise = openDbPromise;
  }

  getLastFetchStatus() {
    return this.get('last_fetch_status');
  }

  setLastFetchStatus(status) {
    return this.set('last_fetch_status', status);
  } // This is comparable to a cache entry timestamp. If we need to expire other data, we could
  // consider adding timestamp to all storage records and an optional max age arg to getters.


  getLastSuccessfulFetchTimestampMillis() {
    return this.get('last_successful_fetch_timestamp_millis');
  }

  setLastSuccessfulFetchTimestampMillis(timestamp) {
    return this.set('last_successful_fetch_timestamp_millis', timestamp);
  }

  getLastSuccessfulFetchResponse() {
    return this.get('last_successful_fetch_response');
  }

  setLastSuccessfulFetchResponse(response) {
    return this.set('last_successful_fetch_response', response);
  }

  getActiveConfig() {
    return this.get('active_config');
  }

  setActiveConfig(config) {
    return this.set('active_config', config);
  }

  getActiveConfigEtag() {
    return this.get('active_config_etag');
  }

  setActiveConfigEtag(etag) {
    return this.set('active_config_etag', etag);
  }

  getThrottleMetadata() {
    return this.get('throttle_metadata');
  }

  setThrottleMetadata(metadata) {
    return this.set('throttle_metadata', metadata);
  }

  deleteThrottleMetadata() {
    return this.delete('throttle_metadata');
  }

  get(key) {
    var _this5 = this;

    return (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const db = yield _this5.openDbPromise;
      return new Promise((resolve, reject) => {
        var _a;

        const transaction = db.transaction([APP_NAMESPACE_STORE], 'readonly');
        const objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

        const compositeKey = _this5.createCompositeKey(key);

        try {
          const request = objectStore.get(compositeKey);

          request.onerror = event => {
            reject(toFirebaseError(event, "storage-get"
            /* STORAGE_GET */
            ));
          };

          request.onsuccess = event => {
            const result = event.target.result;

            if (result) {
              resolve(result.value);
            } else {
              resolve(undefined);
            }
          };
        } catch (e) {
          reject(ERROR_FACTORY.create("storage-get"
          /* STORAGE_GET */
          , {
            originalErrorMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
          }));
        }
      });
    })();
  }

  set(key, value) {
    var _this6 = this;

    return (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const db = yield _this6.openDbPromise;
      return new Promise((resolve, reject) => {
        var _a;

        const transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
        const objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

        const compositeKey = _this6.createCompositeKey(key);

        try {
          const request = objectStore.put({
            compositeKey,
            value
          });

          request.onerror = event => {
            reject(toFirebaseError(event, "storage-set"
            /* STORAGE_SET */
            ));
          };

          request.onsuccess = () => {
            resolve();
          };
        } catch (e) {
          reject(ERROR_FACTORY.create("storage-set"
          /* STORAGE_SET */
          , {
            originalErrorMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
          }));
        }
      });
    })();
  }

  delete(key) {
    var _this7 = this;

    return (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const db = yield _this7.openDbPromise;
      return new Promise((resolve, reject) => {
        var _a;

        const transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
        const objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

        const compositeKey = _this7.createCompositeKey(key);

        try {
          const request = objectStore.delete(compositeKey);

          request.onerror = event => {
            reject(toFirebaseError(event, "storage-delete"
            /* STORAGE_DELETE */
            ));
          };

          request.onsuccess = () => {
            resolve();
          };
        } catch (e) {
          reject(ERROR_FACTORY.create("storage-delete"
          /* STORAGE_DELETE */
          , {
            originalErrorMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
          }));
        }
      });
    })();
  } // Facilitates composite key functionality (which is unsupported in IE).


  createCompositeKey(key) {
    return [this.appId, this.appName, this.namespace, key].join();
  }

}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A memory cache layer over storage to support the SDK's synchronous read requirements.
 */


class StorageCache {
  constructor(storage) {
    this.storage = storage;
  }
  /**
   * Memory-only getters
   */


  getLastFetchStatus() {
    return this.lastFetchStatus;
  }

  getLastSuccessfulFetchTimestampMillis() {
    return this.lastSuccessfulFetchTimestampMillis;
  }

  getActiveConfig() {
    return this.activeConfig;
  }
  /**
   * Read-ahead getter
   */


  loadFromStorage() {
    var _this8 = this;

    return (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const lastFetchStatusPromise = _this8.storage.getLastFetchStatus();

      const lastSuccessfulFetchTimestampMillisPromise = _this8.storage.getLastSuccessfulFetchTimestampMillis();

      const activeConfigPromise = _this8.storage.getActiveConfig(); // Note:
      // 1. we consistently check for undefined to avoid clobbering defined values
      //   in memory
      // 2. we defer awaiting to improve readability, as opposed to destructuring
      //   a Promise.all result, for example


      const lastFetchStatus = yield lastFetchStatusPromise;

      if (lastFetchStatus) {
        _this8.lastFetchStatus = lastFetchStatus;
      }

      const lastSuccessfulFetchTimestampMillis = yield lastSuccessfulFetchTimestampMillisPromise;

      if (lastSuccessfulFetchTimestampMillis) {
        _this8.lastSuccessfulFetchTimestampMillis = lastSuccessfulFetchTimestampMillis;
      }

      const activeConfig = yield activeConfigPromise;

      if (activeConfig) {
        _this8.activeConfig = activeConfig;
      }
    })();
  }
  /**
   * Write-through setters
   */


  setLastFetchStatus(status) {
    this.lastFetchStatus = status;
    return this.storage.setLastFetchStatus(status);
  }

  setLastSuccessfulFetchTimestampMillis(timestampMillis) {
    this.lastSuccessfulFetchTimestampMillis = timestampMillis;
    return this.storage.setLastSuccessfulFetchTimestampMillis(timestampMillis);
  }

  setActiveConfig(activeConfig) {
    this.activeConfig = activeConfig;
    return this.storage.setActiveConfig(activeConfig);
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function registerRemoteConfig() {
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__.Component(RC_COMPONENT_NAME, remoteConfigFactory, "PUBLIC"
  /* PUBLIC */
  ).setMultipleInstances(true));

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.registerVersion)(name, version); // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.registerVersion)(name, version, 'esm2017');

  function remoteConfigFactory(container, {
    instanceIdentifier: namespace
  }) {
    /* Dependencies */
    // getImmediate for FirebaseApp will always succeed
    const app = container.getProvider('app').getImmediate(); // The following call will always succeed because rc has `import '@firebase/installations'`

    const installations = container.getProvider('installations-internal').getImmediate(); // Guards against the SDK being used in non-browser environments.

    if (typeof window === 'undefined') {
      throw ERROR_FACTORY.create("registration-window"
      /* REGISTRATION_WINDOW */
      );
    } // Guards against the SDK being used when indexedDB is not available.


    if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
      throw ERROR_FACTORY.create("indexed-db-unavailable"
      /* INDEXED_DB_UNAVAILABLE */
      );
    } // Normalizes optional inputs.


    const {
      projectId,
      apiKey,
      appId
    } = app.options;

    if (!projectId) {
      throw ERROR_FACTORY.create("registration-project-id"
      /* REGISTRATION_PROJECT_ID */
      );
    }

    if (!apiKey) {
      throw ERROR_FACTORY.create("registration-api-key"
      /* REGISTRATION_API_KEY */
      );
    }

    if (!appId) {
      throw ERROR_FACTORY.create("registration-app-id"
      /* REGISTRATION_APP_ID */
      );
    }

    namespace = namespace || 'firebase';
    const storage = new Storage(appId, app.name, namespace);
    const storageCache = new StorageCache(storage);
    const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_4__.Logger(name); // Sets ERROR as the default log level.
    // See RemoteConfig#setLogLevel for corresponding normalization to ERROR log level.

    logger.logLevel = _firebase_logger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.ERROR;
    const restClient = new RestClient(installations, // Uses the JS SDK version, by which the RC package version can be deduced, if necessary.
    _firebase_app__WEBPACK_IMPORTED_MODULE_1__.SDK_VERSION, namespace, projectId, apiKey, appId);
    const retryingClient = new RetryingClient(restClient, storage);
    const cachingClient = new CachingClient(retryingClient, storage, storageCache, logger);
    const remoteConfigInstance = new RemoteConfig(app, cachingClient, storageCache, storage, logger); // Starts warming cache.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises

    ensureInitialized(remoteConfigInstance);
    return remoteConfigInstance;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This API is put in a separate file, so we can stub fetchConfig and activate in tests.
// It's not possible to stub standalone functions from the same module.

/**
 *
 * Performs fetch and activate operations, as a convenience.
 *
 * @param remoteConfig - The {@link RemoteConfig} instance.
 *
 * @returns A `Promise` which resolves to true if the current call activated the fetched configs.
 * If the fetched configs were already activated, the `Promise` will resolve to false.
 *
 * @public
 */


function fetchAndActivate(_x3) {
  return _fetchAndActivate.apply(this, arguments);
}
/**
 * This method provides two different checks:
 *
 * 1. Check if IndexedDB exists in the browser environment.
 * 2. Check if the current browser context allows IndexedDB `open()` calls.
 *
 * @returns A `Promise` which resolves to true if a {@link RemoteConfig} instance
 * can be initialized in this environment, or false if it cannot.
 * @public
 */


function _fetchAndActivate() {
  _fetchAndActivate = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (remoteConfig) {
    remoteConfig = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(remoteConfig);
    yield fetchConfig(remoteConfig);
    return activate(remoteConfig);
  });
  return _fetchAndActivate.apply(this, arguments);
}

function isSupported() {
  return _isSupported.apply(this, arguments);
}
/**
 * Firebase Remote Config
 *
 * @packageDocumentation
 */

/** register component and version */


function _isSupported() {
  _isSupported = (0,_usr_local_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
      return false;
    }

    try {
      const isDBOpenable = yield (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)();
      return isDBOpenable;
    } catch (error) {
      return false;
    }
  });
  return _isSupported.apply(this, arguments);
}

registerRemoteConfig();
 //# sourceMappingURL=index.esm2017.js.map

/***/ })

}]);