function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"vui-example\">\r\n    <h1>Voice Based Date Pickers and Text inputs\r\n        <div style=\"\r\n                display: flex;\r\n                justify-content: center;\r\n                padding: 10px 0;\r\n        \">\r\n            <a href=\"https://www.npmjs.com/package/ng-voice-inputs\">\r\n                <img src=\"https://img.shields.io/npm/v/ng-voice-inputs.svg\" />\r\n            </a>\r\n        </div>\r\n    </h1>\r\n\r\n    <div class=\"main-container container\">\r\n        <form class=\"section left-section\" #form=\"ngForm\" (ngSubmit)=\"submitForm(form)\">\r\n            <ng-voice-input (onValueChange)=\"onResponse($event)\" [style]=\"styleOpts\"></ng-voice-input>\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-6\">\r\n                    <mat-label>Choose from date</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" [vuiInput]=\"optionsDate\" name=\"fromDate\" ngModel>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker ></mat-datepicker>\r\n                </mat-form-field>\r\n                <mat-form-field  class=\"col-6\">\r\n                    <mat-label>Choose to date</mat-label>\r\n                    <input matInput [matDatepicker]=\"pickerT\" [vuiInput]=\"optionsDate\" name=\"toDate\" ngModel>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerT\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerT ></mat-datepicker>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n                <mat-form-field  class=\"col-6\">\r\n                    <mat-label>First Name</mat-label>\r\n                    <input matInput type=\"text\" [vuiInput]=\"optionsText\" name=\"firstName\" ngModel>\r\n                </mat-form-field>\r\n                <mat-form-field  class=\"col-6\">\r\n                    <mat-label>Last Name</mat-label>\r\n                    <input matInput type=\"text\" [vuiInput]=\"optionsText\" name=\"lastName\" ngModel>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <mat-form-field  class=\"col-6\">\r\n                    <mat-label>Age</mat-label>\r\n                    <input matInput type=\"text\" [vuiInput]=\"optionsNumber\" name=\"age\" ngModel>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field  class=\"col-6\">\r\n                    <mat-label>Occupation</mat-label>\r\n                    <input matInput type=\"text\" [vuiInput]=\"optionsText\" name=\"occupation\" ngModel>\r\n                </mat-form-field>\r\n                \r\n            </div>\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-6\">\r\n                    <mat-label>Address line 1</mat-label>\r\n                    <textarea matInput type=\"text\" [vuiInput]=\"optionsAddress\" name=\"address-line1\"></textarea>\r\n                </mat-form-field>  \r\n                <mat-form-field class=\"col-6\">\r\n                    <mat-label>Address line 2</mat-label>\r\n                    <textarea matInput type=\"text\" [vuiInput]=\"optionsAddress\" name=\"address-line2\"></textarea>\r\n                </mat-form-field>    \r\n            </div>\r\n            <button mat-raised-button [vuiInput]=\"\">Submit</button>\r\n            \r\n        </form>\r\n\r\n        <div class=\"section right-section\">\r\n            <h3>Usage</h3>\r\n            <ul>\r\n                <li>Click on <b>Mic (<i class=\"icon icon-small icon-mic-blue\"></i>)</b> button, to begin voice recongnition</li>\r\n                <li>Say something like\r\n                    <ul>\r\n                        <li>'January 21st 2021'</li>\r\n                        <li>'August 15th 1947'</li>\r\n                        <li>'November 27 2021'</li>\r\n                    </ul>\r\n                </li>\r\n                <li>Once datepicker field is filled, you can navigate the focus to next input field by saying <b>'go to next'</b> or <b>'next'</b></li>\r\n                <li>And go back to previous input field by saying <b>'go to previous'</b></li>\r\n                <li>Once finished entering all the fields, navigaten to <b>Submit</b> button by saying <b>'go to last'</b> and say <b>'submit' or 'click'</b> to submit the form</li>\r\n                <li><b>Page Scroll Feature</b>: \r\n                <li>Say <b>Scroll Down</b> to scroll page downwards. And <b>Scroll Up</b> to scroll upwards. Also supports <b>Left</b> & <b>Right</b></li>\r\n                <li>Say <b>Continue Scrolling</b> to scroll continuously downwards / upwards.</li>\r\n                \r\n                <li>You can STOP speech recognition by saying <b>'stop'</b> or by clicking the mic icon again.</li>\r\n            </ul>\r\n\r\n            <div><i>NOTE:</i> For the input type <b>'address'</b>, please use prefixes like <b>'go'</b> or <b>'goto'</b> or <b>'switch to'</b> without fail</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container form-submit-data col-md-6\" *ngIf=\"formData\">\r\n        <h4>Form Submit Details</h4>\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <label>Start Date</label>\r\n                <span>{{formData?.startDate}}</span>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <label>End Date</label>\r\n                <span>{{formData?.endDate}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <label>First Name</label>\r\n                <span>{{formData?.firstName}}</span>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <label>Last Name</label>\r\n                <span>{{formData?.lastName}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container speech-recognition-info col-md-8\">\r\n        <h3>Speech Recognition</h3>\r\n        <p>\r\n            Speech recognition is an interdisciplinary subfield of computer science and computational linguistics that develops methodologies and technologies that enable the recognition and translation of spoken language into text by computers. It is also known as automatic speech recognition (ASR), computer speech recognition or speech to text (STT). It incorporates knowledge and research in the computer science, linguistics and computer engineering fields.\r\n            Some speech recognition systems require \"training\" (also called \"enrollment\") where an individual speaker reads text or isolated vocabulary into the system. The system analyzes the person's specific voice and uses it to fine-tune the recognition of that person's speech, resulting in increased accuracy. Systems that do not use training are called \"speaker independent\"[1] systems. Systems that use training are called \"speaker dependent\".\r\n            Speech recognition applications include voice user interfaces such as voice dialing (e.g. \"call home\"), call routing (e.g. \"I would like to make a collect call\"), domotic appliance control, search key words (e.g. find a podcast where particular words were spoken), simple data entry (e.g., entering a credit card number), preparation of structured documents (e.g. a radiology report), determining speaker characteristics,[2] speech-to-text processing (e.g., word processors or emails), and aircraft (usually termed direct voice input).\r\n            The term voice recognition[3][4][5] or speaker identification[6][7][8] refers to identifying the speaker, rather than what they are saying. Recognizing the speaker can simplify the task of translating speech in systems that have been trained on a specific person's voice or it can be used to authenticate or verify the identity of a speaker as part of a security process.\r\n            From the technology perspective, speech recognition has a long history with several waves of major innovations. Most recently, the field has benefited from advances in deep learning and big data. The advances are evidenced not only by the surge of academic papers published in the field, but more importantly by the worldwide industry adoption of a variety of deep learning methods in designing and deploying speech recognition systems.\r\n        </p>\r\n\r\n        <p>\r\n            The 1980s also saw the introduction of the n-gram language model.\r\n            1987 – The back-off model allowed language models to use multiple length n-grams, and CSELT used HMM to recognize languages (both in software and in hardware specialized processors, e.g. RIPAC).\r\n            Much of the progress in the field is owed to the rapidly increasing capabilities of computers. At the end of the DARPA program in 1976, the best computer available to researchers was the PDP-10 with 4 MB ram.[23] It could take up to 100 minutes to decode just 30 seconds of speech.[26]\r\n            Two practical products were:\r\n\r\n            1987 – a recognizer from Kurzweil Applied Intelligence\r\n            1990 – Dragon Dictate, a consumer product released in 1990[27][28] AT&T deployed the Voice Recognition Call Processing service in 1992 to route telephone calls without the use of a human operator.[29] The technology was developed by Lawrence Rabiner and others at Bell Labs.\r\n            By this point, the vocabulary of the typical commercial speech recognition system was larger than the average human vocabulary.[23] Raj Reddy's former student, Xuedong Huang, developed the Sphinx-II system at CMU. The Sphinx-II system was the first to do speaker-independent, large vocabulary, continuous speech recognition and it had the best performance in DARPA's 1992 evaluation. Handling continuous speech with a large vocabulary was a major milestone in the history of speech recognition. Huang went on to found the speech recognition group at Microsoft in 1993. Raj Reddy's student Kai-Fu Lee joined Apple where, in 1992, he helped develop a speech interface prototype for the Apple computer known as Casper.\r\n\r\n            Lernout & Hauspie, a Belgium-based speech recognition company, acquired several other companies, including Kurzweil Applied Intelligence in 1997 and Dragon Systems in 2000. The L&H speech technology was used in the Windows XP operating system. L&H was an industry leader until an accounting scandal brought an end to the company in 2001. The speech technology from L&H was bought by ScanSoft which became Nuance in 2005. Apple originally licensed software from Nuance to provide speech recognition capability to its digital assistant Siri.[30]\r\n\r\n            2000s\r\n            In the 2000s DARPA sponsored two speech recognition programs: Effective Affordable Reusable Speech-to-Text (EARS) in 2002 and Global Autonomous Language Exploitation (GALE). Four teams participated in the EARS program: IBM, a team led by BBN with LIMSI and Univ. of Pittsburgh, Cambridge University, and a team composed of ICSI, SRI and University of Washington. EARS funded the collection of the Switchboard telephone speech corpus containing 260 hours of recorded conversations from over 500 speakers.[31] The GALE program focused on Arabic and Mandarin broadcast news speech. Google's first effort at speech recognition came in 2007 after hiring some researchers from Nuance.[32] The first product was GOOG-411, a telephone based directory service. The recordings from GOOG-411 produced valuable data that helped Google improve their recognition systems. Google Voice Search is now supported in over 30 languages.\r\n\r\n            In the United States, the National Security Agency has made use of a type of speech recognition for keyword spotting since at least 2006.[33] This technology allows analysts to search through large volumes of recorded conversations and isolate mentions of keywords. Recordings can be indexed and analysts can run queries over the database to find conversations of interest. Some government research programs focused on intelligence applications of speech recognition, e.g. DARPA's EARS's program and IARPA's Babel program.\r\n\r\n            In the early 2000s, speech recognition was still dominated by traditional approaches such as Hidden Markov Models combined with feedforward artificial neural networks.[34] Today, however, many aspects of speech recognition have been taken over by a deep learning method called Long short-term memory (LSTM), a recurrent neural network published by Sepp Hochreiter & Jürgen Schmidhuber in 1997.[35] LSTM RNNs avoid the vanishing gradient problem and can learn \"Very Deep Learning\" tasks[36] that require memories of events that happened thousands of discrete time steps ago, which is important for speech. Around 2007, LSTM trained by Connectionist Temporal Classification (CTC)[37] started to outperform traditional speech recognition in certain applications.[38] In 2015, Google's speech recognition reportedly experienced a dramatic performance jump of 49% through CTC-trained LSTM, which is now available through Google Voice to all smartphone users.[39]\r\n\r\n            The use of deep feedforward (non-recurrent) networks for acoustic modeling was introduced during later part of 2009 by Geoffrey Hinton and his students at University of Toronto and by Li Deng[40] and colleagues at Microsoft Research, initially in the collaborative work between Microsoft and University of Toronto which was subsequently expanded to include IBM and Google (hence \"The shared views of four research groups\" subtitle in their 2012 review paper).[41][42][43] A Microsoft research executive called this innovation \"the most dramatic change in accuracy since 1979\".[44] In contrast to the steady incremental improvements of the past few decades, the application of deep learning decreased word error rate by 30%.[44] This innovation was quickly adopted across the field. Researchers have begun to use deep learning techniques for language modeling as well.\r\n\r\n            In the long history of speech recognition, both shallow form and deep form (e.g. recurrent nets) of artificial neural networks had been explored for many years during 1980s, 1990s and a few years into the 2000s.[45][46][47] But these methods never won over the non-uniform internal-handcrafting Gaussian mixture model/Hidden Markov model (GMM-HMM) technology based on generative models of speech trained discriminatively.[48] A number of key difficulties had been methodologically analyzed in the 1990s, including gradient diminishing[49] and weak temporal correlation structure in the neural predictive models.[50][51] All these difficulties were in addition to the lack of big training data and big computing power in these early days. Most speech recognition researchers who understood such barriers hence subsequently moved away from neural nets to pursue generative modeling approaches until the recent resurgence of deep learning starting around 2009–2010 that had overcome all these difficulties. Hinton et al. and Deng et al. reviewed part of this recent history about how their collaboration with each other and then with colleagues across four groups (University of Toronto, Microsoft, Google, and IBM) ignited a renaissance of applications of deep feedforward neural networks to speech recognition.[42][43][52][53]\r\n\r\n            2010s\r\n            By early 2010s speech recognition, also called voice recognition[54][55][56] was clearly differentiated from speaker recognition, and speaker independence was considered a major breakthrough. Until then, systems required a \"training\" period. A 1987 ad for a doll had carried the tagline \"Finally, the doll that understands you.\" – despite the fact that it was described as \"which children could train to respond to their voice\".[12]\r\n\r\n            In 2017, Microsoft researchers reached a historical human parity milestone of transcribing conversational telephony speech on the widely benchmarked Switchboard task. Multiple deep learning models were used to optimize speech recognition accuracy. The speech recognition word error rate was reported to be as low as 4 professional human transcribers working together on the same benchmark, which was funded by IBM Watson speech team on the same task.[57]\r\n        </p>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vui-example h1 {\n  font-size: 28px;\n  text-align: center;\n  padding: 20px;\n  color: #0a9d9d;\n  margin-bottom: 30px;\n  background: #ecfff9;\n  border-bottom: 3px solid #aaffe4;\n}\n.vui-example .main-container {\n  display: flex;\n  justify-content: space-between;\n}\n.vui-example .main-container .left-section {\n  width: 80%;\n  margin-right: 30px;\n  padding: 0 30px;\n  border-right: 1px solid #EBEBEB;\n}\n.vui-example .main-container .right-section {\n  background: #fdffdc;\n  padding: 20px;\n}\n.vui-example .form-submit-data {\n  background: #ecfff9;\n  padding: 20px;\n  margin-top: 20px;\n}\n.vui-example .speech-recognition-info {\n  padding: 30px 0;\n}\n.vui-example .speech-recognition-info h3 {\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .vui-example .main-container {\n    flex-direction: column;\n  }\n  .vui-example .main-container .left-section {\n    width: 100%;\n    margin: 0 0 20px 0;\n    border: 0;\n  }\n}\n:host ::ng-deep .icon.parse-green::after {\n  opacity: 0;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border: 3px solid #05c54f;\n  border-radius: 100%;\n  -webkit-animation-name: ripple;\n          animation-name: ripple;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n          animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n  z-index: -1;\n}\n:host ::ng-deep .icon.parse-green::before {\n  opacity: 0;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border: 3px solid #00722c;\n  border-radius: 100%;\n  -webkit-animation-name: ripple;\n          animation-name: ripple;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n          animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n  z-index: -1;\n}\n:host ::ng-deep .icon.listen-green::after {\n  opacity: 0;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border: 3px solid #05c54f;\n  border-radius: 100%;\n  -webkit-animation-name: ripple;\n          animation-name: ripple;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n          animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFdvcmtzcGFjZVxcUGVyc29uYWxcXE5nVm9pY2VJbnB1dHMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNBUjtBREVJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDQVI7QURFUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0FaO0FER1E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNEWjtBREtJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBRE1JO0VBQ0ksZUFBQTtBQ0pSO0FETVE7RUFDSSxrQkFBQTtBQ0paO0FEU0E7RUFFUTtJQUNJLHNCQUFBO0VDUFY7RURRVTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7RUNOZDtBQUNGO0FEK0JRO0VBbkJKLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxnQ0FVdUI7VUFWdkIsd0JBVXVCO0VBVHZCLDJCQVM2QjtVQVQ3QixtQkFTNkI7RUFSN0IsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLGlFQUFBO1VBQUEseURBQUE7RUFDQSxXQUFBO0FDVEo7QURpQlE7RUF0QkosVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDhCQWF1QjtVQWJ2QixzQkFhdUI7RUFadkIsNkJBWTJCO1VBWjNCLHFCQVkyQjtFQVgzQiwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsaUVBQUE7VUFBQSx5REFBQTtFQUNBLFdBQUE7QUNRSjtBRE1RO0VBNUJKLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSw4QkFtQnVCO1VBbkJ2QixzQkFtQnVCO0VBbEJ2QiwyQkFrQjJCO1VBbEIzQixtQkFrQjJCO0VBakIzQiwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsaUVBQUE7VUFBQSx5REFBQTtFQUNBLFdBQUE7QUN5QkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudnVpLWV4YW1wbGUge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBjb2xvcjogIzBhOWQ5ZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlY2ZmZjk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNhYWZmZTQ7XHJcbiAgICB9XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAubGVmdC1zZWN0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFQkVCRUI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZGZmZGM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLXN1Ym1pdC1kYXRhIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWNmZmY5O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3BlZWNoLXJlY29nbml0aW9uLWluZm8ge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC52dWktZXhhbXBsZSB7XHJcbiAgICAgICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLmxlZnQtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHJpbmdzKCRkdXJhdGlvbiwgJGRlbGF5LCAkY29sb3IpIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICBsZWZ0OiAtNXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICRjb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcmlwcGxlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XHJcbiAgICBhbmltYXRpb24tZGVsYXk6ICRkZWxheTtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC42NSwwLC4zNCwxKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmljb24ge1xyXG4gICAgJi5wYXJzZS1ncmVlbiB7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSByaW5ncygwLjVzLCAwcywgIzA1YzU0Zik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHJpbmdzKDFzLCAwLjNzLCAjMDA3MjJjKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5saXN0ZW4tZ3JlZW4ge1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgcmluZ3MoNXMsIDBzLCAjMDVjNTRmKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIudnVpLWV4YW1wbGUgaDEge1xuICBmb250LXNpemU6IDI4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICMwYTlkOWQ7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNlY2ZmZjk7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYWFmZmU0O1xufVxuLnZ1aS1leGFtcGxlIC5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi52dWktZXhhbXBsZSAubWFpbi1jb250YWluZXIgLmxlZnQtc2VjdGlvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRUJFQkVCO1xufVxuLnZ1aS1leGFtcGxlIC5tYWluLWNvbnRhaW5lciAucmlnaHQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZGZmZGM7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udnVpLWV4YW1wbGUgLmZvcm0tc3VibWl0LWRhdGEge1xuICBiYWNrZ3JvdW5kOiAjZWNmZmY5O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnZ1aS1leGFtcGxlIC5zcGVlY2gtcmVjb2duaXRpb24taW5mbyB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cbi52dWktZXhhbXBsZSAuc3BlZWNoLXJlY29nbml0aW9uLWluZm8gaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudnVpLWV4YW1wbGUgLm1haW4tY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC52dWktZXhhbXBsZSAubWFpbi1jb250YWluZXIgLmxlZnQtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuOmhvc3QgOjpuZy1kZWVwIC5pY29uLnBhcnNlLWdyZWVuOjphZnRlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAtNXB4O1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDVjNTRmO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBhbmltYXRpb24tbmFtZTogcmlwcGxlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4zNCwgMSk7XG4gIHotaW5kZXg6IC0xO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pY29uLnBhcnNlLWdyZWVuOjpiZWZvcmUge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgbGVmdDogLTVweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwNzIyYztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYW5pbWF0aW9uLW5hbWU6IHJpcHBsZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMzQsIDEpO1xuICB6LWluZGV4OiAtMTtcbn1cbjpob3N0IDo6bmctZGVlcCAuaWNvbi5saXN0ZW4tZ3JlZW46OmFmdGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGxlZnQ6IC01cHg7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwNWM1NGY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGFuaW1hdGlvbi1uYW1lOiByaXBwbGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4zNCwgMSk7XG4gIHotaW5kZXg6IC0xO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(ref) {
        _classCallCheck(this, AppComponent);

        this.ref = ref;
        this.title = 'AngularStarterProject';
        this.optionsText = {
          type: 'text'
        };
        this.optionsDate = {
          type: 'date'
        };
        this.optionsNumber = {
          type: 'number'
        };
        this.optionsAddress = {
          type: 'address'
        };
        this.optionsSelect = {
          type: 'select'
        };
        this.styleOpts = {
          iconParse: 'icon icon-mic-green',
          animationParse: 'parse-green'
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onResponse",
        value: function onResponse(evt) {
          console.log(evt);
        }
      }, {
        key: "submitForm",
        value: function submitForm(form) {
          console.table(form.value);
          this.formData = form.value;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/paginator */
    "./node_modules/primeng/fesm2015/primeng-paginator.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */


    var _ng_voice_inputs_vui_input_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ng-voice-inputs/vui-input.directive */
    "./src/app/ng-voice-inputs/vui-input.directive.ts");
    /* harmony import */


    var _app_ng_voice_inputs_ng_voice_inputs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../app/ng-voice-inputs/ng-voice-inputs.component */
    "./src/app/ng-voice-inputs/ng-voice-inputs.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _ng_voice_inputs_vui_input_directive__WEBPACK_IMPORTED_MODULE_15__["VuiInputDirective"], _app_ng_voice_inputs_ng_voice_inputs_component__WEBPACK_IMPORTED_MODULE_16__["NgVoiceInputsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_13__["PaginatorModule"], primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"]],
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"],
        useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"],
        deps: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"]]
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"],
        useValue: {
          parse: {
            dateInput: ['DD/MM/YYYY']
          },
          display: {
            dateInput: 'DD/MM/YYYY',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY'
          }
        }
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/ng-voice-inputs/ng-voice-inputs.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/ng-voice-inputs/ng-voice-inputs.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNgVoiceInputsNgVoiceInputsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".centered {\n  margin: auto;\n  text-align: center;\n}\n\n.listening {\n  color: red;\n}\n\n.parsing {\n  color: green;\n}\n\n.icon {\n  position: relative;\n  width: 45px;\n  height: 45px;\n  display: inline-block;\n  background-size: 26px 26px;\n  background-position: 7px 7px;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n\n.icon.parsing::after {\n  opacity: 0;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border: 3px solid #42c0fb;\n  border-radius: 100%;\n  -webkit-animation-name: ripple;\n          animation-name: ripple;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n          animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n  z-index: -1;\n}\n\n.icon.parsing::before {\n  opacity: 0;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border: 3px solid #42c0fb;\n  border-radius: 100%;\n  -webkit-animation-name: ripple;\n          animation-name: ripple;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n          animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n  z-index: -1;\n}\n\n.icon.listening::after {\n  opacity: 0;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border: 3px solid #42c0fb44;\n  border-radius: 100%;\n  -webkit-animation-name: ripple;\n          animation-name: ripple;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n          animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n  z-index: -1;\n}\n\n.icon-small {\n  width: 25px;\n  height: 25px;\n  background-size: 15px 15px;\n  background-position: 5px 10px;\n}\n\n.icon-mic {\n  background-image: url(\"data:image/svg+xml;utf8,<svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='853.000000pt' height='1280.000000pt' viewBox='0 0 853.000000 1280.000000' preserveAspectRatio='xMidYMid meet'> <metadata> Created by potrace 1.15, written by Peter Selinger 2001-2017 </metadata> <g transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)' fill='rgb(66,192,251)' > <path d='M4060 12789 c-194 -22 -402 -81 -577 -164 -472 -224 -789 -626 -894 -1135 l-24 -115 0 -2575 c0 -2452 1 -2579 18 -2665 145 -710 755 -1260 1492 -1345 327 -37 671 21 975 166 473 226 789 629 892 1137 l23 112 0 2575 c0 2448 -1 2579 -18 2665 -116 576 -556 1066 -1134 1264 -227 78 -508 108 -753 80z'/><path d='M301 8004 c-158 -42 -262 -156 -292 -319 -7 -38 -9 -312 -6 -839 3 -648 7 -805 21 -921 64 -538 177 -928 391 -1350 184 -361 380 -630 670 -920 529 -528 1216 -906 2020 -1110 116 -29 231 -56 258 -60 l47 -7 0 -854 0 -854 -657 0 c-717 0 -743 -2 -851 -57 -69 -35 -155 -127 -176 -189 -53 -155 36 -357 203 -463 103 -66 -69 -61 2341 -61 2377 0 2235 -3 2349 54 64 33 144 122 173 194 19 49 23 75 23 182 0 120 -1 128 -32 192 -36 76 -100 146 -165 179 -95 48 -100 49 -820 49 l-678 0 0 854 c0 805 1 855 18 860 9 2 33 7 52 11 406 77 934 271 1313 484 1088 609 1778 1567 1971 2736 48 288 51 352 51 1150 l0 760 -23 58 c-63 155 -190 243 -367 254 -147 10 -260 -32 -350 -129 -32 -34 -63 -80 -76 -115 l-24 -58 -6 -785 c-6 -737 -11 -850 -39 -1050 -100 -705 -417 -1330 -913 -1794 -538 -505 -1229 -810 -2052 -908 -146 -17 -674 -17 -820 0 -663 79 -1253 297 -1735 642 -683 489 -1111 1202 -1230 2050 -28 194 -33 327 -39 1060 l-6 785 -24 58 c-44 111 -161 208 -282 236 -62 15 -175 12 -238 -5z'/></g> </svg>\");\n}\n\n.icon-mic-blue {\n  background-image: url('mic-blue-solid.png');\n}\n\n.icon-mic-red {\n  background-image: url('mic-red-solid.png');\n}\n\n.icon-mic-green {\n  background-image: url('mic-green-solid.png');\n}\n\n@-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    transform: scale3d(0.75, 0.75, 1);\n  }\n  to {\n    opacity: 0;\n    transform: scale3d(1.5, 1.5, 1);\n  }\n}\n\n@keyframes ripple {\n  from {\n    opacity: 1;\n    transform: scale3d(0.75, 0.75, 1);\n  }\n  to {\n    opacity: 0;\n    transform: scale3d(1.5, 1.5, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctdm9pY2UtaW5wdXRzL0M6XFxXb3Jrc3BhY2VcXFBlcnNvbmFsXFxOZ1ZvaWNlSW5wdXRzL3NyY1xcYXBwXFxuZy12b2ljZS1pbnB1dHNcXG5nLXZvaWNlLWlucHV0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmctdm9pY2UtaW5wdXRzL25nLXZvaWNlLWlucHV0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNqQko7O0FEb0JBO0VBQ0ksVUFBQTtBQ2pCSjs7QURvQkE7RUFDSSxZQUFBO0FDakJKOztBRG9CQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUNqQko7O0FEb0JRO0VBekNKLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSw4QkFnQ3VCO1VBaEN2QixzQkFnQ3VCO0VBL0J2QiwyQkErQjJCO1VBL0IzQixtQkErQjJCO0VBOUIzQiwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsaUVBQUE7VUFBQSx5REFBQTtFQUNBLFdBQUE7QUN3Qko7O0FET1E7RUE3Q0osVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDhCQW9DdUI7VUFwQ3ZCLHNCQW9DdUI7RUFuQ3ZCLDZCQW1DMkI7VUFuQzNCLHFCQW1DMkI7RUFsQzNCLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxpRUFBQTtVQUFBLHlEQUFBO0VBQ0EsV0FBQTtBQ3lDSjs7QURKUTtFQW5ESixVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsOEJBMEN1QjtVQTFDdkIsc0JBMEN1QjtFQXpDdkIsMkJBeUMyQjtVQXpDM0IsbUJBeUMyQjtFQXhDM0IsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLGlFQUFBO1VBQUEseURBQUE7RUFDQSxXQUFBO0FDMERKOztBRGRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FDaUJKOztBRFhBO0VBRkkscXBEQUFBO0FDaUJKOztBRFZBO0VBQ0ksMkNBQUE7QUNhSjs7QURWQTtFQUNJLDBDQUFBO0FDYUo7O0FEVkE7RUFDSSw0Q0FBQTtBQ2FKOztBRFJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsaUNBQUE7RUNXRjtFRFJBO0lBQ0UsVUFBQTtJQUNBLCtCQUFBO0VDVUY7QUFDRjs7QURuQkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxpQ0FBQTtFQ1dGO0VEUkE7SUFDRSxVQUFBO0lBQ0EsK0JBQUE7RUNVRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmctdm9pY2UtaW5wdXRzL25nLXZvaWNlLWlucHV0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiByaW5ncygkZHVyYXRpb24sICRkZWxheSwgJGNvbG9yKSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gICAgbGVmdDogLTVweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJpcHBsZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJGR1cmF0aW9uO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNjUsMCwuMzQsMSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpc3RlbmluZyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucGFyc2luZyB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNnB4IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3cHggN3B4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmLnBhcnNpbmcge1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgcmluZ3MoMXMsIDBzLCAjNDJjMGZiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgcmluZ3MoMXMsIDAuM3MsICM0MmMwZmIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmxpc3RlbmluZyB7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSByaW5ncygycywgMHMsICM0MmMwZmI0NCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmljb24tc21hbGwge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDVweCAxMHB4O1xyXG59XHJcblxyXG5AbWl4aW4gaWNvbi1taWMoJGNvbG9yKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHZlcnNpb249JzEuMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nODUzLjAwMDAwMHB0JyBoZWlnaHQ9JzEyODAuMDAwMDAwcHQnIHZpZXdCb3g9JzAgMCA4NTMuMDAwMDAwIDEyODAuMDAwMDAwJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0Jz4gPG1ldGFkYXRhPiBDcmVhdGVkIGJ5IHBvdHJhY2UgMS4xNSwgd3JpdHRlbiBieSBQZXRlciBTZWxpbmdlciAyMDAxLTIwMTcgPC9tZXRhZGF0YT4gPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsMTI4MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCknIGZpbGw9J1wiICsgJGNvbG9yICsgXCInID4gPHBhdGggZD0nTTQwNjAgMTI3ODkgYy0xOTQgLTIyIC00MDIgLTgxIC01NzcgLTE2NCAtNDcyIC0yMjQgLTc4OSAtNjI2IC04OTQgLTExMzUgbC0yNCAtMTE1IDAgLTI1NzUgYzAgLTI0NTIgMSAtMjU3OSAxOCAtMjY2NSAxNDUgLTcxMCA3NTUgLTEyNjAgMTQ5MiAtMTM0NSAzMjcgLTM3IDY3MSAyMSA5NzUgMTY2IDQ3MyAyMjYgNzg5IDYyOSA4OTIgMTEzNyBsMjMgMTEyIDAgMjU3NSBjMCAyNDQ4IC0xIDI1NzkgLTE4IDI2NjUgLTExNiA1NzYgLTU1NiAxMDY2IC0xMTM0IDEyNjQgLTIyNyA3OCAtNTA4IDEwOCAtNzUzIDgweicvPjxwYXRoIGQ9J00zMDEgODAwNCBjLTE1OCAtNDIgLTI2MiAtMTU2IC0yOTIgLTMxOSAtNyAtMzggLTkgLTMxMiAtNiAtODM5IDMgLTY0OCA3IC04MDUgMjEgLTkyMSA2NCAtNTM4IDE3NyAtOTI4IDM5MSAtMTM1MCAxODQgLTM2MSAzODAgLTYzMCA2NzAgLTkyMCA1MjkgLTUyOCAxMjE2IC05MDYgMjAyMCAtMTExMCAxMTYgLTI5IDIzMSAtNTYgMjU4IC02MCBsNDcgLTcgMCAtODU0IDAgLTg1NCAtNjU3IDAgYy03MTcgMCAtNzQzIC0yIC04NTEgLTU3IC02OSAtMzUgLTE1NSAtMTI3IC0xNzYgLTE4OSAtNTMgLTE1NSAzNiAtMzU3IDIwMyAtNDYzIDEwMyAtNjYgLTY5IC02MSAyMzQxIC02MSAyMzc3IDAgMjIzNSAtMyAyMzQ5IDU0IDY0IDMzIDE0NCAxMjIgMTczIDE5NCAxOSA0OSAyMyA3NSAyMyAxODIgMCAxMjAgLTEgMTI4IC0zMiAxOTIgLTM2IDc2IC0xMDAgMTQ2IC0xNjUgMTc5IC05NSA0OCAtMTAwIDQ5IC04MjAgNDkgbC02NzggMCAwIDg1NCBjMCA4MDUgMSA4NTUgMTggODYwIDkgMiAzMyA3IDUyIDExIDQwNiA3NyA5MzQgMjcxIDEzMTMgNDg0IDEwODggNjA5IDE3NzggMTU2NyAxOTcxIDI3MzYgNDggMjg4IDUxIDM1MiA1MSAxMTUwIGwwIDc2MCAtMjMgNTggYy02MyAxNTUgLTE5MCAyNDMgLTM2NyAyNTQgLTE0NyAxMCAtMjYwIC0zMiAtMzUwIC0xMjkgLTMyIC0zNCAtNjMgLTgwIC03NiAtMTE1IGwtMjQgLTU4IC02IC03ODUgYy02IC03MzcgLTExIC04NTAgLTM5IC0xMDUwIC0xMDAgLTcwNSAtNDE3IC0xMzMwIC05MTMgLTE3OTQgLTUzOCAtNTA1IC0xMjI5IC04MTAgLTIwNTIgLTkwOCAtMTQ2IC0xNyAtNjc0IC0xNyAtODIwIDAgLTY2MyA3OSAtMTI1MyAyOTcgLTE3MzUgNjQyIC02ODMgNDg5IC0xMTExIDEyMDIgLTEyMzAgMjA1MCAtMjggMTk0IC0zMyAzMjcgLTM5IDEwNjAgbC02IDc4NSAtMjQgNTggYy00NCAxMTEgLTE2MSAyMDggLTI4MiAyMzYgLTYyIDE1IC0xNzUgMTIgLTIzOCAtNXonLz48L2c+IDwvc3ZnPlwiKTtcclxufVxyXG4uaWNvbi1taWMge1xyXG4gICAgQGluY2x1ZGUgaWNvbi1taWMoJ3JnYig2NiwxOTIsMjUxKScpO1xyXG59XHJcblxyXG5cclxuLmljb24tbWljLWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbnMvbWljLWJsdWUtc29saWQucG5nJyk7XHJcbn1cclxuXHJcbi5pY29uLW1pYy1yZWQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbnMvbWljLXJlZC1zb2xpZC5wbmcnKTtcclxufVxyXG5cclxuLmljb24tbWljLWdyZWVuIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29ucy9taWMtZ3JlZW4tc29saWQucG5nJyk7XHJcbn1cclxuXHJcblxyXG5cclxuQGtleWZyYW1lcyByaXBwbGUge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LDAuNzUsMSk7XHJcbiAgfVxyXG4gIFxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS41LDEuNSwxKTtcclxuICB9XHJcbn0iLCIuY2VudGVyZWQge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxpc3RlbmluZyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wYXJzaW5nIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLXNpemU6IDI2cHggMjZweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogN3B4IDdweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmljb24ucGFyc2luZzo6YWZ0ZXIge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgbGVmdDogLTVweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzQyYzBmYjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYW5pbWF0aW9uLW5hbWU6IHJpcHBsZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY1LCAwLCAwLjM0LCAxKTtcbiAgei1pbmRleDogLTE7XG59XG4uaWNvbi5wYXJzaW5nOjpiZWZvcmUge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgbGVmdDogLTVweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzQyYzBmYjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYW5pbWF0aW9uLW5hbWU6IHJpcHBsZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMzQsIDEpO1xuICB6LWluZGV4OiAtMTtcbn1cbi5pY29uLmxpc3RlbmluZzo6YWZ0ZXIge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgbGVmdDogLTVweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzQyYzBmYjQ0O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBhbmltYXRpb24tbmFtZTogcmlwcGxlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMzQsIDEpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmljb24tc21hbGwge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IDEwcHg7XG59XG5cbi5pY29uLW1pYyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgdmVyc2lvbj0nMS4wJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4NTMuMDAwMDAwcHQnIGhlaWdodD0nMTI4MC4wMDAwMDBwdCcgdmlld0JveD0nMCAwIDg1My4wMDAwMDAgMTI4MC4wMDAwMDAnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaWRZTWlkIG1lZXQnPiA8bWV0YWRhdGE+IENyZWF0ZWQgYnkgcG90cmFjZSAxLjE1LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNyA8L21ldGFkYXRhPiA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwxMjgwLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKScgZmlsbD0ncmdiKDY2LDE5MiwyNTEpJyA+IDxwYXRoIGQ9J000MDYwIDEyNzg5IGMtMTk0IC0yMiAtNDAyIC04MSAtNTc3IC0xNjQgLTQ3MiAtMjI0IC03ODkgLTYyNiAtODk0IC0xMTM1IGwtMjQgLTExNSAwIC0yNTc1IGMwIC0yNDUyIDEgLTI1NzkgMTggLTI2NjUgMTQ1IC03MTAgNzU1IC0xMjYwIDE0OTIgLTEzNDUgMzI3IC0zNyA2NzEgMjEgOTc1IDE2NiA0NzMgMjI2IDc4OSA2MjkgODkyIDExMzcgbDIzIDExMiAwIDI1NzUgYzAgMjQ0OCAtMSAyNTc5IC0xOCAyNjY1IC0xMTYgNTc2IC01NTYgMTA2NiAtMTEzNCAxMjY0IC0yMjcgNzggLTUwOCAxMDggLTc1MyA4MHonLz48cGF0aCBkPSdNMzAxIDgwMDQgYy0xNTggLTQyIC0yNjIgLTE1NiAtMjkyIC0zMTkgLTcgLTM4IC05IC0zMTIgLTYgLTgzOSAzIC02NDggNyAtODA1IDIxIC05MjEgNjQgLTUzOCAxNzcgLTkyOCAzOTEgLTEzNTAgMTg0IC0zNjEgMzgwIC02MzAgNjcwIC05MjAgNTI5IC01MjggMTIxNiAtOTA2IDIwMjAgLTExMTAgMTE2IC0yOSAyMzEgLTU2IDI1OCAtNjAgbDQ3IC03IDAgLTg1NCAwIC04NTQgLTY1NyAwIGMtNzE3IDAgLTc0MyAtMiAtODUxIC01NyAtNjkgLTM1IC0xNTUgLTEyNyAtMTc2IC0xODkgLTUzIC0xNTUgMzYgLTM1NyAyMDMgLTQ2MyAxMDMgLTY2IC02OSAtNjEgMjM0MSAtNjEgMjM3NyAwIDIyMzUgLTMgMjM0OSA1NCA2NCAzMyAxNDQgMTIyIDE3MyAxOTQgMTkgNDkgMjMgNzUgMjMgMTgyIDAgMTIwIC0xIDEyOCAtMzIgMTkyIC0zNiA3NiAtMTAwIDE0NiAtMTY1IDE3OSAtOTUgNDggLTEwMCA0OSAtODIwIDQ5IGwtNjc4IDAgMCA4NTQgYzAgODA1IDEgODU1IDE4IDg2MCA5IDIgMzMgNyA1MiAxMSA0MDYgNzcgOTM0IDI3MSAxMzEzIDQ4NCAxMDg4IDYwOSAxNzc4IDE1NjcgMTk3MSAyNzM2IDQ4IDI4OCA1MSAzNTIgNTEgMTE1MCBsMCA3NjAgLTIzIDU4IGMtNjMgMTU1IC0xOTAgMjQzIC0zNjcgMjU0IC0xNDcgMTAgLTI2MCAtMzIgLTM1MCAtMTI5IC0zMiAtMzQgLTYzIC04MCAtNzYgLTExNSBsLTI0IC01OCAtNiAtNzg1IGMtNiAtNzM3IC0xMSAtODUwIC0zOSAtMTA1MCAtMTAwIC03MDUgLTQxNyAtMTMzMCAtOTEzIC0xNzk0IC01MzggLTUwNSAtMTIyOSAtODEwIC0yMDUyIC05MDggLTE0NiAtMTcgLTY3NCAtMTcgLTgyMCAwIC02NjMgNzkgLTEyNTMgMjk3IC0xNzM1IDY0MiAtNjgzIDQ4OSAtMTExMSAxMjAyIC0xMjMwIDIwNTAgLTI4IDE5NCAtMzMgMzI3IC0zOSAxMDYwIGwtNiA3ODUgLTI0IDU4IGMtNDQgMTExIC0xNjEgMjA4IC0yODIgMjM2IC02MiAxNSAtMTc1IDEyIC0yMzggLTV6Jy8+PC9nPiA8L3N2Zz5cIik7XG59XG5cbi5pY29uLW1pYy1ibHVlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ljb25zL21pYy1ibHVlLXNvbGlkLnBuZ1wiKTtcbn1cblxuLmljb24tbWljLXJlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pY29ucy9taWMtcmVkLXNvbGlkLnBuZ1wiKTtcbn1cblxuLmljb24tbWljLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ljb25zL21pYy1ncmVlbi1zb2xpZC5wbmdcIik7XG59XG5cbkBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMC43NSwgMSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuNSwgMS41LCAxKTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ng-voice-inputs/ng-voice-inputs.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ng-voice-inputs/ng-voice-inputs.component.ts ***!
    \**************************************************************/

  /*! exports provided: NgVoiceInputsComponent */

  /***/
  function srcAppNgVoiceInputsNgVoiceInputsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgVoiceInputsComponent", function () {
      return NgVoiceInputsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_voice_inputs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ng-voice-inputs.service */
    "./src/app/ng-voice-inputs/ng-voice-inputs.service.ts");
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment/moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _vui_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./vui-response */
    "./src/app/ng-voice-inputs/vui-response.ts");

    var moment = moment_moment__WEBPACK_IMPORTED_MODULE_3__;
    var DEFAULT_STYLE = {
      containerClass: 'centered',
      iconStart: 'icon icon-mic',
      iconParse: 'icon icon-mic',
      iconStop: 'icon icon-mic',
      animationParse: 'parsing',
      animationListen: 'listening'
    };
    var DEFAULT_SCROLL_OFFSET = 200;
    var DEFAULT_SCROLL_DURATION = 300;
    var DEFAULT_SCROLL_DIRECTION = 'vertical';

    var NgVoiceInputsComponent = /*#__PURE__*/function () {
      function NgVoiceInputsComponent(vuiService, ref) {
        var _this = this;

        _classCallCheck(this, NgVoiceInputsComponent);

        this.vuiService = vuiService;
        this.ref = ref;
        this.onValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Decides direction of scroll movement ( Up or Down ) or ( Left or Right)
         * +ve value indicates Down/Right and -ve value idicates Up/Left
         */

        this.activeDirection = +1;
        /**
         * Decides direction of Scroll ( Vertical or Horizontal )
         */

        this.scrollDirection = DEFAULT_SCROLL_DIRECTION;

        this.scrollToTop = function (duration) {
          var interval = setInterval(function () {
            var pos = Math.abs(Math.round(window.pageYOffset / (duration / 100)));

            if (pos > 0) {
              window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
              clearInterval(interval);
            }
          }, 100);
        };

        this.scrollBy = function (offset, duration, direction) {
          _this.activeDirection = offset / offset;
          _this.scrollDirection = direction || DEFAULT_SCROLL_DIRECTION;

          if (offset == 1) {
            offset = window.outerHeight;
          }

          var val = Math.abs(Math.round(offset / (duration / 100)));
          var totalOffset = 0;
          var interval = setInterval(function () {
            if (totalOffset >= Math.abs(offset)) {
              clearInterval(interval);
            } else {
              var opt = {
                top: offset < 0 ? -1 * val : val,
                left: 0
              };

              if (direction == 'horizontal') {
                opt = {
                  top: 0,
                  left: offset < 0 ? -1 * val : val
                };
              }

              window.scrollBy(Object.assign({}, opt, {
                behavior: 'smooth'
              }));
              totalOffset = totalOffset + val;
            }
          }, 100);
        };

        this.scroll = {
          SCROLLDOWN: function SCROLLDOWN() {
            _this.scrollBy(_this.scrollOffset, _this.scrollDuration);
          },
          SCROLLUP: function SCROLLUP() {
            _this.scrollBy(-1 * _this.scrollOffset, _this.scrollDuration);
          },
          SCROLLRIGHT: function SCROLLRIGHT() {
            _this.scrollBy(_this.scrollOffset, _this.scrollDuration, 'horizontal');
          },
          SCROLLLEFT: function SCROLLLEFT() {
            _this.scrollBy(-1 * _this.scrollOffset, _this.scrollDuration, 'horizontal');
          },
          SCROLLBOTTOM: function SCROLLBOTTOM() {
            _this.scrollBy(1, _this.scrollDuration);
          },
          SCROLLTOP: function SCROLLTOP() {
            _this.scrollToTop(_this.scrollDuration);
          },
          SCROLLCONTINUE: function SCROLLCONTINUE() {
            var factor = Math.ceil(window.outerHeight / _this.scrollDuration);
            console.log(factor * _this.scrollDuration, factor);

            _this.scrollBy(window.outerHeight, factor * 1000);
          }
        };
      }

      _createClass(NgVoiceInputsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.style = Object.assign({}, DEFAULT_STYLE, this.style);
          this.scrollOffset = this.scrollOffset || DEFAULT_SCROLL_OFFSET;
          this.scrollDuration = this.scrollDuration || DEFAULT_SCROLL_DURATION;

          try {
            this.initVoiceRecognition();
          } catch (e) {
            console.error('Failed to initialize or parse');
            this.stopRecognition();
          }

          this.vuiService.response.subscribe(this.vuiResponseSubscription.bind(this));
        }
      }, {
        key: "vuiResponseSubscription",
        value: function vuiResponseSubscription(data) {
          this.transcript = '';
          var currentRef = this.vuiService.currentRef;

          if (data.type == 'COMMAND_NEXT') {
            currentRef = ++this.vuiService.currentRef;
          } else if (data.type == 'COMMAND_PREVIOUS') {
            currentRef = --this.vuiService.currentRef;
          } else if (data.type == 'COMMAND_FIRST') {
            currentRef = 0;
          } else if (data.type == 'COMMAND_LAST') {
            currentRef = this.vuiService.inputRefs.length - 1;
          } else if (data.type == 'COMMAND_CLEAR') {
            this.vuiService.inputRefs[currentRef].nativeElement.value = '';
          } else if (data.type == 'COMMAND_CLICK') {
            this.vuiService.inputRefs[currentRef].nativeElement.click();
          } else if (data.type.includes('COMMAND_SCROLL')) {
            this.scroll[data.type.replace('COMMAND_', '')].call();
          } else if (data.type == 'COMMAND_STOP') {
            this.stopRecognition();
          } else {
            var currentInputObj = this.vuiService.inputRefs[currentRef];
            var currentEl = currentInputObj.nativeElement;
            var opts = currentInputObj['options'];

            if (data.value && data.value[0] instanceof Date) {
              if (currentEl.type == 'date' || currentEl.type == 'datetime') {
                currentEl.value = this.formatDate(data.value[0], 'YYYY-MM-DD');
              } else {
                currentEl.value = this.formatDate(data.value[0], opts && opts.format);
              }
            } else {
              currentEl.value = data.value;
            }

            currentEl.dispatchEvent(new Event('input'));
            this.onValueChange.emit(data);
          }

          this.vuiService.inputRefs[currentRef].nativeElement.focus();
          this.setProcess('listening');
        }
      }, {
        key: "setProcess",
        value: function setProcess(processType) {
          this.process = processType;
          this.ref.detectChanges();
        }
      }, {
        key: "formatDate",
        value: function formatDate(date, format) {
          return moment(date).format(format || 'DD/MM/YYYY');
        }
      }, {
        key: "initVoiceRecognition",
        value: function initVoiceRecognition() {
          var _this2 = this;

          this.recognition = new window['webkitSpeechRecognition']();
          this.recognition.continuous = true;
          this.recognition.interimResults = true;

          this.recognition.onstart = function (event) {
            _this2.setProcess('listening');
          };

          this.recognition.onresult = function (event) {
            var currentInputObj = _this2.vuiService.inputRefs[_this2.vuiService.currentRef];
            var opts = currentInputObj['options'];

            _this2.setProcess('parsing');

            for (var i = event.resultIndex; i < event.results.length; ++i) {
              if (event.results[i].isFinal) {
                _this2.transcript += event.results[i][0].transcript;

                var data = _this2.vuiService.interpretSpeech(_this2.transcript, opts && opts.type);

                var resp = new _vui_response__WEBPACK_IMPORTED_MODULE_4__["default"]('invalid', data);

                if (data) {
                  resp = new _vui_response__WEBPACK_IMPORTED_MODULE_4__["default"]('date-range', data);

                  if (typeof data == 'string') {
                    resp = new _vui_response__WEBPACK_IMPORTED_MODULE_4__["default"](data, data.includes('_') ? '' : data);
                  }
                }

                _this2.vuiService.response.next(resp);
              }
            }
          };

          this.recognition.onerror = function () {
            _this2.setProcess(null);
          };

          this.recognition.onend = function () {
            _this2.setProcess(null);
          };
        }
      }, {
        key: "startRecognition",
        value: function startRecognition() {
          this.transcript = '';
          this.recognition.start();
        }
      }, {
        key: "stopRecognition",
        value: function stopRecognition() {
          this.transcript = '';
          this.recognition.stop();
          this.setProcess(null);
        }
      }]);

      return NgVoiceInputsComponent;
    }();

    NgVoiceInputsComponent.ctorParameters = function () {
      return [{
        type: _ng_voice_inputs_service__WEBPACK_IMPORTED_MODULE_2__["VuiVoiceRecognitionService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NgVoiceInputsComponent.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NgVoiceInputsComponent.prototype, "scrollOffset", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NgVoiceInputsComponent.prototype, "scrollDuration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], NgVoiceInputsComponent.prototype, "onValueChange", void 0);
    NgVoiceInputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ng-voice-input',
      template: "\n              <div [class]=\"style.containerClass\">\n                <i [class]=\"style.iconStart\" mat-raised-button (click)=\"startRecognition()\" *ngIf=\"!process\"></i>\n                <i [ngClass]=\"process == 'parsing' ? style.iconParse + ' ' + style.animationParse : style.iconStop + ' ' + style.animationListen\" (click)=\"stopRecognition()\" *ngIf=\"process\"></i>\n              </div>\n            ",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ng-voice-inputs.component.scss */
      "./src/app/ng-voice-inputs/ng-voice-inputs.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_voice_inputs_service__WEBPACK_IMPORTED_MODULE_2__["VuiVoiceRecognitionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], NgVoiceInputsComponent);

    Date.prototype['isValid'] = function () {
      // If the date object is invalid it 
      // will return 'NaN' on getTime()   
      // and NaN is never equal to itself.   
      return this.getTime() === this.getTime();
    };
    /***/

  },

  /***/
  "./src/app/ng-voice-inputs/ng-voice-inputs.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/ng-voice-inputs/ng-voice-inputs.service.ts ***!
    \************************************************************/

  /*! exports provided: VuiVoiceRecognitionService */

  /***/
  function srcAppNgVoiceInputsNgVoiceInputsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VuiVoiceRecognitionService", function () {
      return VuiVoiceRecognitionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment/moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var moment = moment_moment__WEBPACK_IMPORTED_MODULE_2__;
    var UNIT = {
      zero: 0,
      first: 1,
      one: 1,
      second: 2,
      two: 2,
      third: 3,
      thirteenth: 13,
      thirteen: 13,
      three: 3,
      fourth: 4,
      fourteenth: 14,
      fourteen: 14,
      four: 4,
      fifteenth: 15,
      fifteen: 15,
      fifth: 5,
      five: 5,
      sixth: 6,
      sixteenth: 16,
      sixteen: 16,
      six: 6,
      seventeenth: 17,
      seventeen: 17,
      seventh: 7,
      seven: 7,
      eighteenth: 18,
      eighteen: 18,
      eighth: 8,
      eight: 8,
      nineteenth: 19,
      nineteen: 19,
      ninth: 9,
      nine: 9,
      tenth: 10,
      ten: 10,
      eleventh: 11,
      eleven: 11,
      twelfth: 12,
      twelve: 12,
      a: 1
    };
    var TWOS = {
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19
    };
    var TEN = {
      twenty: 20,
      twentieth: 20,
      thirty: 30,
      thirtieth: 30,
      forty: 40,
      fortieth: 40,
      fifty: 50,
      fiftieth: 50,
      sixty: 60,
      sixtieth: 60,
      seventy: 70,
      seventieth: 70,
      eighty: 80,
      eightieth: 80,
      ninety: 90,
      ninetieth: 90
    };
    var MAGNITUDE = {
      hundred: 100,
      hundredth: 100,
      thousand: 1000,
      million: 1000000,
      billion: 1000000000,
      trillion: 1000000000000,
      quadrillion: 1000000000000000,
      quintillion: 1000000000000000000,
      sextillion: 1000000000000000000000,
      septillion: 1000000000000000000000000,
      octillion: 1000000000000000000000000000,
      nonillion: 1000000000000000000000000000000,
      decillion: 1000000000000000000000000000000000
    };
    var NUMBER = Object.assign({}, UNIT, TEN, MAGNITUDE);
    var SUFFIXES = ['st', 'nd', 'rd', 'th'];
    var MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    var KEY_WORDS_FWD_NAV = ['forward', 'next'];
    var KEY_WORDS_BCK_NAV = ['back', 'backward', 'previous'];
    var KEY_WORDS_CLEAR = ['clear', 'clean', 'delete', 'remove'];
    var KEY_WORDS_CLICK = ['click', 'submit', 'expand', 'open', 'show'];
    var KEY_WORDS_STOP = ['stop', 'end', 'done'];
    var KEY_WORDS_SCROLL_UP = ['scroll up', 'go up', 'up'];
    var KEY_WORDS_SCROLL_DOWN = ['scroll down', 'go down', 'down'];
    var KEY_WORDS_SCROLL_RIGHT = ['scroll right', 'go right', 'right'];
    var KEY_WORDS_SCROLL_LEFT = ['scroll left', 'go left', 'left'];
    var KEY_WORDS_SCROLL_TOP = ['scroll top', 'go top', 'top'];
    var KEY_WORDS_SCROLL_BOTTOM = ['scroll bottom', 'go bottom', 'bottom'];
    var KEY_WORDS_SCROLL_CONTINUE = ['keep scrolling', 'scroll', 'scrolling', 'continue scrolling'];
    var KEY_WORDS_SCROLL = [].concat(KEY_WORDS_SCROLL_UP, KEY_WORDS_SCROLL_DOWN, KEY_WORDS_SCROLL_RIGHT, KEY_WORDS_SCROLL_LEFT, KEY_WORDS_SCROLL_TOP, KEY_WORDS_SCROLL_BOTTOM, KEY_WORDS_SCROLL_CONTINUE);
    var KEY_WORDS_INST = ['goto', 'switch', 'go'].concat(KEY_WORDS_CLEAR, KEY_WORDS_CLICK, _toConsumableArray(KEY_WORDS_SCROLL)); // Instruction types

    var KEY_WORDS_NAV = [].concat(KEY_WORDS_FWD_NAV, KEY_WORDS_BCK_NAV, KEY_WORDS_STOP, _toConsumableArray(KEY_WORDS_SCROLL), ['first', 'last']); // Navigation types

    var KEY_WORDS = [].concat(_toConsumableArray(KEY_WORDS_INST), _toConsumableArray(KEY_WORDS_NAV));
    var INST_MAPPINGS = {
      next: KEY_WORDS_FWD_NAV,
      previous: KEY_WORDS_BCK_NAV,
      first: ['first'],
      last: ['last'],
      clear: KEY_WORDS_CLEAR,
      click: KEY_WORDS_CLICK,
      stop: KEY_WORDS_STOP,
      scrollUp: KEY_WORDS_SCROLL_UP,
      scrollDown: KEY_WORDS_SCROLL_DOWN,
      scrollLeft: KEY_WORDS_SCROLL_LEFT,
      scrollRight: KEY_WORDS_SCROLL_RIGHT,
      scrollTop: KEY_WORDS_SCROLL_TOP,
      scrollBottom: KEY_WORDS_SCROLL_BOTTOM,
      scrollContinue: KEY_WORDS_SCROLL_CONTINUE
    };

    var VuiVoiceRecognitionService = /*#__PURE__*/function () {
      function VuiVoiceRecognitionService() {
        _classCallCheck(this, VuiVoiceRecognitionService);

        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.inputRefs = [];
        this.currentRef = 0;
      }

      _createClass(VuiVoiceRecognitionService, [{
        key: "isInputSwitch",
        value: function isInputSwitch(speechKeys, inputType) {
          if (inputType == 'address' && !speechKeys.some(function (key) {
            return KEY_WORDS_INST.includes(key);
          })) {
            return false;
          }

          if (speechKeys.some(function (key) {
            return KEY_WORDS.includes(key);
          })) {
            return true;
          }

          return false;
        }
      }, {
        key: "findInstructionType",
        value: function findInstructionType(speechText, inputType) {
          var type = '';
          speechText = speechText.trim().toLocaleLowerCase();
          var speechKeys = speechText.trim().toLocaleLowerCase().split(' ');

          if (this.isInputSwitch(speechKeys, inputType)) {
            var foundKey = Object.keys(INST_MAPPINGS).find(function (instType) {
              return speechKeys.some(function (key) {
                return INST_MAPPINGS[instType].includes(key);
              });
            });
            type = foundKey ? "COMMAND_".concat(foundKey.toUpperCase()) : '';
          } else {
            type = 'INPUT';
          }

          return type;
        }
      }, {
        key: "interpretSpeech",
        value: function interpretSpeech(speechText, inputType) {
          var _this3 = this;

          var instType = this.findInstructionType(speechText, inputType);

          if (instType != 'INPUT') {
            return instType;
          }

          if (inputType == 'text' || inputType == 'address') {
            return speechText;
          }

          if (inputType == 'number') {
            return this.wordsToNumber(speechText);
          }

          if (inputType == 'date') {
            speechText = speechText.replace('from', '');
            var dates = speechText.trim().split('to ');
            var parsedDates = [];
            dates.forEach(function (dateStr) {
              parsedDates.push(_this3.dateParser(dateStr));
            });

            if (parsedDates[0].isValid()) {
              return parsedDates;
            }
          }

          return null;
        }
      }, {
        key: "dateParser",
        value: function dateParser(dateStr) {
          var _this4 = this;

          var parsedDate;
          var cleanDateStr = dateStr;
          var dateParts = dateStr.trim().split(' ');
          var datePartObj = {};
          var isPureNumber = false;
          var cleanDateParts = [];

          if (dateParts.length == 3) {
            cleanDateParts = dateParts.map(function (dateStr) {
              return _this4.eliminateString(dateStr);
            });
            isPureNumber = cleanDateParts.every(function (dateStr) {
              return Number.isInteger(dateStr);
            });
          }

          if (isPureNumber) {
            cleanDateStr = cleanDateParts.join('-');
          } else {
            var currentDate = moment();
            dateParts.forEach(function (dateStr) {
              datePartObj = _this4.parseDatePart(dateStr, datePartObj);
            });
            var availableKeys = Object.keys(datePartObj).join('-');

            switch (availableKeys) {
              case 'date':
                datePartObj.month = currentDate.format('MM');

              case 'date-month':
                datePartObj.year = currentDate.format('YYYY');
                break;

              case 'year':
                datePartObj.month = '01';

              case 'month-year':
                datePartObj.date = '01';
                break;

              case 'month':
                datePartObj.year = currentDate.format('YYYY');
                datePartObj.date = '01';
            }

            cleanDateStr = this.dateBuilder(datePartObj);
          }

          parsedDate = moment(cleanDateStr).toDate();
          return parsedDate;
        }
      }, {
        key: "dateBuilder",
        value: function dateBuilder(datePartObj) {
          var dateStr = '';
          dateStr = "".concat(datePartObj.year, "-").concat(datePartObj.month, "-").concat(datePartObj.date);
          return dateStr;
        }
        /**
         *
         * @param datePart Incomplete date part eg, '21st' is the date part for the date '21st July 2020'
         * @param datePartObj // Inherited from caller & updated with parsed object. Can be year, month or date
         */

      }, {
        key: "parseDatePart",
        value: function parseDatePart(datePart, datePartObj) {
          if (this.isYearType(datePart)) {
            var year = this.wordsToNumber(datePart);
            datePartObj.year = year;
          } else if (this.isDateType(datePart)) {
            var date = this.wordsToNumber(datePart);
            datePartObj.date = date;
          } else if (this.isMonthType(datePart)) {
            var month = MONTHS.indexOf(datePart.toUpperCase()) + 1;
            datePartObj.month = month < 10 ? '0' + month : month;
          }

          return datePartObj;
        }
      }, {
        key: "isDateType",
        value: function isDateType(datePart) {
          var isDatePart = false;
          isDatePart = /\d/.test(datePart) && SUFFIXES.includes(datePart.substr(datePart.length - 2));

          if (!isDatePart) {
            var number = this.wordsToNumber(datePart);

            if (number > 0 && number <= 31) {
              isDatePart = true;
            }
          }

          return isDatePart;
        }
      }, {
        key: "parseDateVal",
        value: function parseDateVal(datePart, datePartObj) {
          var isDatePart = false;
          var convertedNum = 0;
          isDatePart = SUFFIXES.some(function (key) {
            return datePart.includes(key);
          });

          if (!isDatePart) {
            convertedNum = this.wordsToNumber(datePart);

            if (convertedNum > 0 && convertedNum <= 31) {
              isDatePart = true;
            }
          }

          if (isDatePart) {
            datePartObj.date = convertedNum;
          }
        }
      }, {
        key: "isMonthType",
        value: function isMonthType(datePart) {
          var month = MONTHS.indexOf(datePart.toUpperCase());
          return month > -1;
        }
      }, {
        key: "parseMonthVal",
        value: function parseMonthVal(datePart, datePartObj) {
          var month = MONTHS.indexOf(datePart.toUpperCase());

          if (month > -1) {
            datePartObj.month = month < 10 ? '0' + month : month;
          }
        }
      }, {
        key: "isYearType",
        value: function isYearType(datePart) {
          var year = this.wordsToNumber(datePart);
          return year > 1000;
        }
      }, {
        key: "parseYearVal",
        value: function parseYearVal(datePart, datePartObj) {
          var year = this.wordsToNumber(datePart);

          if (year > 1000) {
            datePartObj.year = year;
          }
        }
      }, {
        key: "wordsToNumber",
        value: function wordsToNumber(word) {
          var _this5 = this;

          // Returning integer if it is not actual word
          if (!Number.isNaN(parseInt(word))) {
            return parseInt(word);
          }

          word = word.replace(/and/g, ''); // Replace joiners

          var words = word.toLowerCase().trim().split(' ');
          var num = 0;
          var numStr = '';
          var tens = 0;
          words = this.parseColloquialWords(words);
          words.forEach(function (wordStr) {
            wordStr = _this5.eliminateString(wordStr);

            if (typeof wordStr == 'number') {
              num = wordStr;
            } else {
              if (UNIT[wordStr]) {
                num = num + NUMBER[wordStr];
              } else if (TEN[wordStr]) {
                num = num + TEN[wordStr];
              } else if (MAGNITUDE[wordStr]) {
                num = num * MAGNITUDE[wordStr];
              }
            }
          });
          return num;
        }
      }, {
        key: "parseColloquialWords",
        value: function parseColloquialWords(wordsArr) {
          if (wordsArr.length == 2) {
            if (TEN[wordsArr[0]] && (TEN[wordsArr[1]] || TWOS[wordsArr[1]])) {
              wordsArr.splice(1, 0, 'hundred');
            }
          }

          if (MAGNITUDE[wordsArr[0]]) {
            wordsArr.splice(0, 0, 'one');
          }

          return wordsArr;
        }
      }, {
        key: "eliminateString",
        value: function eliminateString(word) {
          if (/\d/.test(word) && SUFFIXES.includes(word.substr(word.length - 2))) {
            word = word.substr(0, word.length - 2); // Remove last suffixes such as 'st', 'th' from 1st, 10th

            word = parseInt(word);
          }

          return word;
        }
      }]);

      return VuiVoiceRecognitionService;
    }();

    VuiVoiceRecognitionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VuiVoiceRecognitionService);
    /***/
  },

  /***/
  "./src/app/ng-voice-inputs/vui-input.directive.ts":
  /*!********************************************************!*\
    !*** ./src/app/ng-voice-inputs/vui-input.directive.ts ***!
    \********************************************************/

  /*! exports provided: VuiInputDirective */

  /***/
  function srcAppNgVoiceInputsVuiInputDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VuiInputDirective", function () {
      return VuiInputDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment/moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ng_voice_inputs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ng-voice-inputs.service */
    "./src/app/ng-voice-inputs/ng-voice-inputs.service.ts");

    var moment = moment_moment__WEBPACK_IMPORTED_MODULE_2__;
    var DEFAULT_OPTS = {
      type: 'text',
      format: 'DD/MM/YYYY'
    };
    /**
     * Options for VuiInput directive
     * @param type Data type for input. Possible values are: 'text', 'address', 'date', 'number'. Default: 'text'
     * @param format (Optional) Date format for datepicker input. eg, 'MM/DD/YYYY'. Default: 'DD/MM/YYYY'.
     */

    var Options = function Options() {
      _classCallCheck(this, Options);
    };

    var VuiInputDirective = /*#__PURE__*/function () {
      function VuiInputDirective(vuiService, el) {
        var _this6 = this;

        _classCallCheck(this, VuiInputDirective);

        this.vuiService = vuiService;
        this.el = el;
        this.el.nativeElement.setAttribute('vui-ref', this.vuiService.inputRefs.length);
        this.vuiService.inputRefs.push(this.el);
        this.el.nativeElement.addEventListener('focus', function (evt) {
          _this6.vuiService.currentRef = parseInt(evt.target.getAttribute('vui-ref'));
        });
      }

      _createClass(VuiInputDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.options = Object.assign({}, DEFAULT_OPTS, this.options);
          this.el['options'] = this.options;
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          return moment(date).format(this.options.format);
        }
      }]);

      return VuiInputDirective;
    }();

    VuiInputDirective.ctorParameters = function () {
      return [{
        type: _ng_voice_inputs_service__WEBPACK_IMPORTED_MODULE_3__["VuiVoiceRecognitionService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('vuiInput'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Options)], VuiInputDirective.prototype, "options", void 0);
    VuiInputDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[vuiInput]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_voice_inputs_service__WEBPACK_IMPORTED_MODULE_3__["VuiVoiceRecognitionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], VuiInputDirective);
    /***/
  },

  /***/
  "./src/app/ng-voice-inputs/vui-response.ts":
  /*!*************************************************!*\
    !*** ./src/app/ng-voice-inputs/vui-response.ts ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNgVoiceInputsVuiResponseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return VuiResponse;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * @param type Type of response
     * Possible values for type are:
     * 'date-range', 'date', 'text', 'number'
     * @param value Response value which can be text, number, date
     *
     */


    var VuiResponse = function VuiResponse(type, value) {
      _classCallCheck(this, VuiResponse);

      this.type = type || 'text';
      this.value = value;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      endPoint: 'http://localhost:8080/api/v1',
      idleTime: 10 * 60
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var src_app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(src_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Workspace\Personal\NgVoiceInputs\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map