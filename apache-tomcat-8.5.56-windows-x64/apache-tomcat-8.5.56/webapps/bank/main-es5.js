function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminhome/adminhome.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminhome/adminhome.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminhomeAdminhomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\"></script>\n  <!-- <link rel = \"stylesheet\"\n   type = \"text/css\"\n   href = \"adminhome.component.css\" /> -->\n\n<div class=\"wrapper\">\n <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\" style=\"background:#2f4f4f; \"> >\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n        <!--<i class=\"fa fa-bank\" style=\"font-size:36px\"></i>-->\n          <a class=\"navbar-brand text-uppercase\" href=\"/icin-bank\" style=\"color:white\">ICIN BANK </a>\n        </div>\n        </div>\n        <nav class=\"navbar navbar-expand-sm bg-light navbar-light\" style=\"font-size:20px\">\n  <ul class=\"navbar-nav\">\n   <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink=\"/adminhome\">Home</a>\n    </li>\n  \n  <li class=\"nav-item \">\n      <a class=\"nav-link\" routerLink=\"/userdetails\">User Details</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/chequerequest\">Request Cheque Book</a>\n    </li>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    \n    <li class=\"nav-item\">\n      <button class=\"nav-link\" style=\"border:none; background-color:transparent;color:gray;font-align-bottom:true\"  (click)=\"logout()\">Logout</button>\n    </li>\n  </ul>\n</nav>\n\n  \n<br><br><br>\n<hr>\n<div class=\"card mt-4\">\n<h4 class=\"card-header\">          Welcome Admin!!</h4>\n</div>\n<!-- <img src=\"https://mk0bfsieletsonlt96u6.kinstacdn.com/wp-content/uploads/2020/03/Banks-to-remain-open-in-Punjab-on-March-30-31.jpg\"  class=\"mx-auto d-block\"> -->\n<!-- <h4>Welcome Admin!!</h4> -->\n<!-- <div class=\"card mt-4\">\n    <h4 class=\"card-header\">Current Balance</h4>\n    <div class=\"card-body\">\n        <p>20000</p>\n        \n        \n</div> -->\n\n<div class=\"footer\">\n  <p>Copyright &#169; 2020 ICIN BANK</p>\n</div> ";
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


    __webpack_exports__["default"] = "<!-- <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script> -->\n<!------ Include the above in your HEAD tag ---------->\n\n<!-- Submitted to Feature  March 2, 2014  11:20pm -->\n\n<html><body>\n<div class=\"container\">\n\t<div class=\"row\">\n  \n\t<!-- <a routerLink=\"/login\">\t<h2>Welcome to ICIN BANK</h2></a> -->\n          <router-outlet></router-outlet>\n        <!-- <p>\n        <a href=\"http://bootsnipp.com/iframe/x95Q\" class=\"btn btn-lg btn-success\" target=\"_blank\"><span class=\"glyphicon glyphicon-fullscreen\"></span> Full screen</a>\n        </p>   -->\n    </div>\n</div>\n\n<!-- <div class=\"footer\">\n  <p>Copyright &#169; 2020 ICIN BANK</p>\n</div> -->\n\n</body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chequerequest/chequerequest.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chequerequest/chequerequest.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChequerequestChequerequestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    \n\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\"  href=\"https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css\">\n    <link rel=\"stylesheet\"  href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https:////cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css\">\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n    <script type=\"text/javascript\" src=\"http://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js\"></script>\n    <!-- <link rel = \"stylesheet\"\n   type = \"text/css\"\n   href = \"chequerequest.component.css\" /> -->\n    <br><br>\n  <div class=\"wrapper\">\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\" style=\"background:#2f4f4f; \"> >\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n        <!--<i class=\"fa fa-bank\" style=\"font-size:36px\"></i>-->\n          <a class=\"navbar-brand text-uppercase\" href=\"/icin-bank\" style=\"color:white\">ICIN BANK </a>\n        </div>\n        </div>\n        <nav class=\"navbar navbar-expand-sm bg-light navbar-light\" style=\"font-size:20px\">\n  <ul class=\"navbar-nav\">\n   <li class=\"nav-item \">\n      <a class=\"nav-link\" routerLink=\"/adminhome\">Home</a>\n    </li>\n  \n  <li class=\"nav-item \">\n      <a class=\"nav-link\" routerLink=\"/userdetails\">User Details</a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink=\"/chequerequest\">Request Cheque Book</a>\n    </li>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    \n    <li class=\"nav-item\">\n      <button class=\"nav-link\" style=\"border:none; background-color:transparent;color:gray;font-align-bottom:true\"  (click)=\"logout()\">Logout</button>\n    </li>\n  </ul>\n</nav>\n\n  \n\n\n\n<br><br>\n<br><br><br>\n<h3>User Check Book Request</h3>\n    <div class=\"container mb-3 mt-3\">\n    <table class=\"table table-striped\" id=\"mydataTable\">\n        <thead>\n            <tr>\n                <th>Request ID</th>\n                <th>Date</th>\n                <th>Request Type</th>\n                <th>Request Description</th>\n                <th>User Name</th>\n                <th>Accept/Decline</th>\n                   \n            </tr>\n        </thead>\n        <tbody>\n         <tr *ngFor=\"let adminrequest of adminrequests\">\n            <td>{{adminrequest.requestId}}</td>\n            <td>{{adminrequest.date}}</td>\n            <td>{{adminrequest.requestType}}</td>\n            <td>{{adminrequest.requestDiscription}}</td>\n            <td>{{adminrequest.username}}</td> \n            \n            <td ><div *ngIf=\"adminrequest.accept==false; else elseBlock\">\n                  <button id=\"decline_button\" class=\"btn btn-success badge-pill\" style=\"background:  #2f4f4f\" [disabled]=\"clicked\" (click)=\"decline($event,adminrequest.requestId,accept_button) \">Decline Request</button>\n                    <button id=\"accept_button \" class=\"btn btn-success badge-pill\" style=\"background:  #2f4f4f\" [disabled] =\"clicked\" (click)=\"accept($event,adminrequest.requestId,decline_button) \">Accept Request</button>\n\n                    \n                   </div>\n                   <ng-template #elseBlock>Accepted</ng-template>\n                </td>\n           \n                </tr>\n        </tbody>\n        \n    </table>\n  \n    <div class=\"footer\">\n  <p>Copyright &#169; 2020 ICIN BANK</p>\n</div> \n    \n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\"></script>\n\n\n<div class=\"wrapper\" >\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" >\n      <div class=\"container\" style=\"background:#2f4f4f; \">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\" >\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n         \n          <i class=\"fa fa-bank\" style=\"font-size:36px\"></i>\n          <a class=\"navbar-brand text-uppercase\" href=\"/icin-bank\" style=\"color:white\" >ICIN BANK </a>\n         \n        </div>\n        </div>\n        </nav>\n<nav class=\"navbar navbar-expand-sm bg-light navbar-light\" style=\"font-size:20px\">\n  <ul class=\"navbar-nav\">\n  <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink=\"/home\">Home</a> \n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/transfer\">Transfer</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/transaction\">Transaction</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/saving\">Saving Account Details</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/request\">Request</a>\n    </li>\n    \n    \n    \n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/myprofile\">My Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link\" style=\"border:none; background-color:transparent;color:gray;font-align-bottom:true\"  (click)=\"logout()\">Logout</button>\n    </li>\n  </ul>\n</nav>\n\n\n<div class=\"card mt-4\">\n    <h4 class=\"card-header\">Current Balance</h4>\n    <div class=\"card-body\" >\n        <p>{{accountBalance}}</p>\n        \n        \n</div>\n\n<div class=\"footer\">\n  <p>Copyright &#169; 2020 ICIN BANK</p>\n</div> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/icin-bank/icin-bank.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/icin-bank/icin-bank.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIcinBankIcinBankComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"wrapper\">\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n          <i class=\"fa fa-bank\" style=\"font-size:36px\"></i>\n          <a class=\"navbar-brand text-uppercase\" href=\"/icin-bank\">ICIN BANK </a>\n         \n                                                            \n        </div>\n    \n        \n      </div>\n    </nav>\n    <header class=\"header\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-5 col-md-offset-1\">\n                <div class=\"content\">\n                  <div class=\"pull-middle\">\n                    <h1 class=\"page-header\">Welcome to ICIN BANK</h1>\n                    <p class=\"lead\">Your trusted banking partner!</p>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-body\">\n                            <form action=\"#\" role=\"form\">\n                                <div class=\"input-group\">\n                                    <!-- <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" required> -->\n                                    <h3>Open an account</h3>\n                                    &nbsp;<span class=\"input-group-btn\">\n                                      <button class=\"btn btn-success btn-circle\" type=\"submit\" routerLink=\"/register\">Connect With Us!</button>\n                                    </span>                        \n                                </div>\n                                <div class=\"input-group\">\n                                    <!-- <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" required> -->\n                                    <h3>Login Now</h3>\n                                    &nbsp;<span class=\"input-group-btn\">\n                                      <button class=\"btn btn-success btn-circle\" type=\"submit\" routerLink=\"/login\">Login</button>\n                                    </span>                        \n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                  </div>              \n                </div>\n            </div>\n            <div class=\"col-md-4 col-md-offset-1 text-center mt-100 mb-100\">\n                <div >\n                    <img class=\"img-responsive img-rounded\" src=\"data:image/jpeg;base64,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\">\n                </div>\n            </div>\n          </div>\n        </div>\n    </header>\n    <section class=\"section\">\n        <div class=\"container\">\n            <div class=\"row\">\n               <div class=\"col-md-4 col-md-offset-1 text-center mt-100 mb-100\">\n                    <div >\n                    \n                        <img class=\"img-responsive img-rounded\" src=\"data:image/png;base64,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\">\n                    </div>\n                </div>\n                <div class=\"col-md-5 col-md-offset-1\">\n                    <div class=\"content\">\n                        <div class=\"pull-middle\">\n                            <h2 class=\"h1 page-header\">Discover more about features.</h2>\n                            <ul class=\"media-list\">\n                              <li class=\"media\">\n                                <a class=\"media-left\" href=\"#\">\n                                  <span class=\"glyphicon glyphicon-cloud icon text-success\"></span>\n                                </a>\n                                <div class=\"media-body\">\n                                  <h3 class=\"media-heading\">Online Banking</h3>\n                                  <p>Easy online banking experience.</p>\n                                </div>\n                              </li>\n                              <li class=\"media\">\n                                <a class=\"media-left\" href=\"#\">\n                                  <span class=\"glyphicon glyphicon-lock icon text-success\"></span>\n                                </a>\n                                <div class=\"media-body\">\n                                  <h3 class=\"media-heading\">Ensured Security</h3>\n                                  <p>Your account security our priority.</p>\n                                </div>\n                              </li>\n                              <li class=\"media\">\n                                <a class=\"media-left\" href=\"#\">\n                                  <span class=\"glyphicon glyphicon-user icon text-success\"></span>\n                                </a>\n                                <div class=\"media-body\">\n                                  <h3 class=\"media-heading\">Customer Services</h3>\n                                  <p>Experience the best customer service facilities.</p>\n                                </div>\n                              </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-3 text-right\">\n                    <div class=\"content\">\n                        <div class=\"pull-middle\">\n                            <h4><strong>About Us.</strong></h4>\n                            <p>ICIN Bank was originally promoted in 1994 by ICIN Limited, an Indian financial institution, and was its wholly-owned subsidiary.\n            ICIN Bank offers a wide range of banking products and financial services to corporate and retail customers through a variety of delivery channels and through its group companies.\n            All the latest, in-depth information about ICIN Bank&#39;s financial performance and business initiatives.Explore diverse openings with India&#39;s second-largest private sector bank.</p>\n                            \n                        </div>\n                    </div>\n                </div>\n               <div class=\"col-md-4 col-md-offset-1 mt-100 mb-100\">\n                    <div >\n                        <img class=\"img-responsive img-rounded\" src=\"data:image/jpeg;base64,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\">\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-md-offset-1\">\n                    <div class=\"content\">\n                        <div class=\"pull-middle\">\n                            <h4><strong>Happy Clients</strong></h4>\n                            <p>We have more than 10000 happy clients!.</p>\n                          \n        <h4><strong>Contact Us</strong></h4>\n        \n        <p style=\"text-align:center\"><i class=\"glyphicon glyphicon-envelope\"></i>&nbsp;&nbsp;&nbsp;<a href=\"mailto:icinindia@gmail.com\" target=\"_blank\">icinindia@gmail.com</a></p>\n       \n        \n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <div class=\"footer\">\n  <p>Copyright &#169; 2020 ICIN BANK</p>\n</div> \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n<br><router-outlet></router-outlet>\n<div class=\"wrapper\">\n     <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\" style=\"background:#2f4f4f; \"> >\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n        <!--<i class=\"fa fa-bank\" style=\"font-size:36px\"></i>-->\n          <a class=\"navbar-brand text-uppercase\" href=\"/icin-bank\" style=\"color:white\">ICIN BANK </a>\n        </div>\n        </div>\n<div class=\"container register\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 register-left\">\n                        <img src=\"https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-login-button-icon-login-icon-button-126998514.jpg\"/>\n                        <h3>Welcome</h3>\n                        <input type=\"submit\" name=\"\" value=\"New User\" routerLink=\"/register\"/><br/>\n                      </div>\n                    <div class=\"col-md-9 register-right\">\n                            <div class=\"tab-content\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                                <h3 class=\"register-heading\">Login </h3>\n                                <div class=\"row register-form\">\n                                    <div class=\"col-md-6\">\n                                       <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"User Name *\" value=\"\" required [(ngModel)]=\"login.username\"/>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"password\" class=\"form-control\" placeholder=\"Password *\" value=\"\" required [(ngModel)]=\"login.password\"/>\n                                        </div>\n                                        \n                                        \n                                        <input type=\"submit\" class=\"btnRegister\"  value=\"Login\" (click)=\"onSubmit()\"/>\n                                    </div>\n                                    \n                                    </div>\n                                    \n                                    <div class=\"col-md-6\">\n                                      <br><br><br>  \n                                        <!-- <input type=\"submit\" class=\"btnRegister\"  value=\"Transfer Amount\"/> -->\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"tab-pane fade show\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                                <!-- <h3  class=\"register-heading\">Apply as a Hirer</h3>\n                                <div class=\"row register-form\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"First Name *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Last Name *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"email\" class=\"form-control\" placeholder=\"Email *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" maxlength=\"10\" minlength=\"10\" class=\"form-control\" placeholder=\"Phone *\" value=\"\" />\n                                        </div>\n\n\n                                    </div> -->\n                                    <div class=\"col-md-6\">\n                                                                           \n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n           ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button >Logout</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myprofile/myprofile.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myprofile/myprofile.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyprofileMyprofileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p>profile works!</p> -->\n\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n<div class=\"wrapper\">\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\" style=\"background:#2f4f4f; \"> >\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n        <!--<i class=\"fa fa-bank\" style=\"font-size:36px\"></i>-->\n          <a class=\"navbar-brand text-uppercase\" href=\"/icin-bank\" style=\"color:white\">ICIN BANK </a>\n        </div>\n        </div>\n<nav class=\"navbar navbar-expand-sm bg-light navbar-light\" style=\"font-size:20px\">\n  <ul class=\"navbar-nav\">\n  <li class=\"nav-item \">\n      <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/transfer\">Transfer</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/transaction\">Transaction</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/saving\">Saving Account Details</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/request\">Request</a>\n    </li>\n    \n    \n    \n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" routerLink=\"/myprofile\">My Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link\" style=\"border:none; background-color:transparent;color:gray;font-align-bottom:true\"  (click)=\"logout()\">Logout</button>\n    </li>\n  </ul>\n</nav>\n\n\n<div class=\"container register\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 register-left\">\n                        <!-- <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAyd59Rdb-AVScBP7fCYxvtIpYvqYfsZ1V8Q&usqp=CAU\" alt=\"\"/> -->\n                        <h3>My Profile.</h3>\n                        <hr>\n                        \n                        \n                    </div>\n                    <div class=\"col-md-9 register-right\">\n                       \n                        <div class=\"tab-content\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                               <div class=\"wrapper\">\n                                <div class=\"container\">\n   \n                                <h3 class=\"register-heading\">User Details</h3>\n                                <br><br>\n                                <h3 class=\"register-heading\">Account Number: {{savingsaccount.accountNumber}}</h3>\n                                <br><br>\n                                <h3 class=\"register-heading\">          Name: {{userdetails.firstName}} {{userdetails.lastName}}</h3>\n                                <br><br>\n                                <h3 class=\"register-heading\"> Mobile Number: {{userdetails.mobileNumber}} </h3>\n                                <br><br>\n                                <h3 class=\"register-heading\">       EmailId: {{userdetails.emailId}} </h3>\n                                <br><br>\n                                <h3 class=\"register-heading\">       Address: {{userdetails.address}} </h3>\n                                <br><br><br><br>\n\n                                    \n                                    \n                                </div>\n                            \n                            \n                                                                <div class=\"col-md-6\">\n                                                                        </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n<div class=\"footer\">\n  <p>Copyright &#169; 2020 ICIN BANK</p>\n</div> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p>profile works!</p> -->\n\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n<div class=\"wrapper\">\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n          <i class=\"fa fa-bank\" style=\"font-size:36px\"></i>\n          <a class=\"navbar-brand text-uppercase\" href=\"/icin-bank\">ICIN BANK </a>\n        </div>\n        </div>\n<nav class=\"navbar navbar-expand-sm bg-light navbar-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink=\"/transfer\">Transfer</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/transaction\">Transaction</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/saving\">Saving Account Details</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/request\">Request</a>\n    </li>\n    \n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/profile\">Update Profile</a>\n    </li>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/myprofile\">My Profile</a>\n    </li>\n  </ul>\n</nav>\n\n\n<div class=\"container register\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 register-left\">\n                        <!-- <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAyd59Rdb-AVScBP7fCYxvtIpYvqYfsZ1V8Q&usqp=CAU\" alt=\"\"/> -->\n                        <h3>My Profile</h3>\n                        <hr>\n                        <h3>Account Number:</h3>\n                        <h3>1235678</h3>\n                        \n                    </div>\n                    <div class=\"col-md-9 register-right\">\n                       \n                        <div class=\"tab-content\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                               <div class=\"wrapper\">\n                                <div class=\"container\">\n   \n                                <h3 class=\"register-heading\">User Name</h3>\n                                <div class=\"row register-form\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" value=\"\" />\n                                        </div>\n                                         <div class=\"form-group\">\n                                            <input type=\"email\" class=\"form-control\" placeholder=\"Your Email\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" minlength=\"10\" maxlength=\"10\" name=\"txtEmpPhone\" class=\"form-control\" placeholder=\"Your Phone\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" minlength=\"20\" maxlength=\"30\" name=\"txtEmpAddress\" class=\"form-control\" placeholder=\" Address\" value=\"\" />\n                                        </div>\n                                        \n                                        <input type=\"submit\" class=\"btnRegister\"  value=\"Update Profile\"/>\n                                        \n                                        \n                                    </div>\n                                    \n                                </div>\n                            </div>\n                                                                <div class=\"col-md-6\">\n                                                                        </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n<div class=\"footer\">\n  <p>Copyright &#169; 2020 ICIN BANK</p>\n</div> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- <h2><i><mark>Please check the review of your quiz and if you have missed any questions please go back and submit them</mark></i></h2>\n<div>\n<div class=\"css\" *ngFor=\"let quiz of quizs\">\n<h3>Q.{{quiz.question}}</h3>\n<h3>Your answer:<mark>{{quiz.answer}}</mark></h3>\n</div>\n<button (click)=\"back()\">Back to Quiz</button>\n<button (click)=\"result()\">Submit</button>\n</div> -->\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<br><router-outlet></router-outlet>\n<div class=\"wrapper\">\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\" style=\"background:#2F4F4F; \">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n          <i class=\"fa fa-bank\" style=\"font-size:36px\"></i>\n          <a class=\"navbar-brand text-uppercase\" href=\"/icin-bank\" style=\"color:white\">ICIN BANK </a>\n        </div>\n    </div>    \n\n<div class=\"container register\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 register-left\">\n                        <!-- <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCAn-KwibvdX4cgxVJ99UxLeX9xCmwfMt3zQ&usqp=CAU\" alt=\"\"/> -->\n                        <h3>Welcome    to     ICIN BANK</h3>\n                        \n                        <input type=\"submit\" name=\"\" value=\"Login\" routerLink=\"/login\"/><br/>\n                    </div>\n                    <div class=\"col-md-9 register-right\">\n                        \n                        <div class=\"tab-content\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                                <h3 class=\"register-heading\">New User Registeration</h3>\n                                <div class=\"row register-form\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"First Name *\" value=\"\" [(ngModel)]=\"user.firstName\"/>\n                                \n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Last Name *\" value=\"\" [(ngModel)]=\"user.lastName\"/>\n                                        </div>\n                                        \n                                        <div class=\"form-group\">\n                                            <input type=\"number\" minlength=\"10\" maxlength=\"10\" name=\"txtEmpPhone\" class=\"form-control\" placeholder=\"Your Phone No*\" [(ngModel)]=\"user.mobileNumber\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\"  name=\"txtEmpAddress\" class=\"form-control\" placeholder=\"Your Address *\" [(ngModel)]=\"user.address\" />\n                                        </div>\n                                         <div class=\"form-group\">\n                                            <input type=\"text\"  name=\"txtEmpGender\" class=\"form-control\" placeholder=\"Your Gender\" value=\"\" [(ngModel)]=\"user.gender\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"email\" class=\"form-control\" placeholder=\"Your Email *\" value=\"\" [(ngModel)]=\"user.emailId\" required/>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"User Name *\" value=\"\" [(ngModel)]=\"user.username\" required />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"password\" class=\"form-control\" placeholder=\"Password *\" value=\"\" [(ngModel)]=\"user.password\" required />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"password\" class=\"form-control\"  placeholder=\"Confirm Password *\" value=\"\" required/>\n                                        </div>\n                                         <div class=\"form-group\">\n                                            <!-- <div class=\"maxl\">\n                                                <label class=\"radio inline\"> \n                                                    <input type=\"radio\" name=\"gender\" value=\"male\" >\n                                                    <span> Male </span> \n                                                </label>\n                                                <label class=\"radio inline\"> \n                                                    <input type=\"radio\" name=\"gender\" value=\"female\">\n                                                    <span>Female </span> \n                                                </label>\n                                            </div> -->\n                                            \n                                        \n                                        \n                \n                                        <input type=\"submit\" class=\"btnRegister\"  value=\"Register\" (click)=\"adduser()\"/>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        \n                                    </div>\n                                </div>\n                            </div>\n                            \n                        </div> \n                    </div>\n                </div>\n\n            </div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/results/results.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/results/results.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResultsResultsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <button (click)=\"Score()\">Check Score</button>\n<h1><i><mark>Your Score is  : {{rightAnswer}}/5</mark></i></h1>\n<h1><i><mark>Thank You For Attempting The Quiz!!</mark></i></h1> -->\n <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\"></script>\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"wrapper\">\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\" style=\"background:#2f4f4f; \"> >\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n        <!--<i class=\"fa fa-bank\" style=\"font-size:36px\"></i>-->\n          <a class=\"navbar-brand text-uppercase\" href=\"/icin-bank\" style=\"color:white\">ICIN BANK </a>\n        </div>\n        </div>\n<nav class=\"navbar navbar-expand-sm bg-light navbar-light\" style=\"font-size:20px\">\n  <ul class=\"navbar-nav\">\n  <li class=\"nav-item \">\n      <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/transfer\">Transfer</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" routerLink=\"/transaction\">Transaction</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" routerLink=\"/saving\">Saving Account Details</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/request\">Request</a>\n    </li>\n    \n    \n    \n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" routerLink=\"/myprofile\">My Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link\" style=\"border:none; background-color:transparent;color:gray;font-align-bottom:true\"  (click)=\"logout()\">Logout</button>\n    </li>\n  </ul>\n</nav>\n<br>\n<br>\n<router-outlet></router-outlet>\n\n<div class=\"container register\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 register-left\">\n                        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThFZ_25FDiailkQSSDNlHdso29LOGdr4kfcA&usqp=CAU\" alt=\"\"/>\n                        <h3>Deposit</h3>\n                        \n                    </div>\n                    <div class=\"col-md-9 register-right\">\n                       \n                        <div class=\"tab-content\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                               <div class=\"wrapper\">\n                                <div class=\"container\">\n   \n                                <h3 class=\"register-heading\">Deposit Amount</h3>\n                                <div class=\"row register-form\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter amount *\" value=\"\"[(ngModel)]=\"transaction.depositAmount\" />\n                                        </div>\n                                        \n                                    </div>\n                                    <div class=\"col-md-6\">\n                                      \n                                        <input type=\"submit\" id=\"deposit\"class=\"btnRegister\"  value=\"Deposit\" (click)=\"transac()\"/>\n                                    </div>\n                                </div>\n                            </div>\n                                                                <div class=\"col-md-6\">\n                                                                        </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n</div>\n<br>\n<hr>\n<div class=\"container register\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 register-left\">\n                        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThFZ_25FDiailkQSSDNlHdso29LOGdr4kfcA&usqp=CAU\" alt=\"\"/>\n                        <h3>Withdraw</h3>\n                        \n                    </div>\n                    <div class=\"col-md-9 register-right\">\n                       \n                        <div class=\"tab-content\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                               <div class=\"wrapper\">\n                                <div class=\"container\">\n   \n                                <h3 class=\"register-heading\"> Withdraw Amount</h3>\n                                <div class=\"row register-form\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter amount\" value=\"\"[(ngModel)]=\"transaction.withdrawAmount\"  />\n                                        </div>\n                                        \n                                    </div>\n                                    <div class=\"col-md-6\">\n                                      \n                                        <input type=\"submit\" class=\"btnRegister\"  value=\" Withdraw \" (click)=\"withdrawtransac()\"/>\n                                    </div>\n                                </div>\n                            </div>\n                                                                <div class=\"col-md-6\">\n                                                                        </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n<div class=\"footer\">\n  <p>Copyright &#169; 2020 ICIN BANK</p>\n</div> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReviewReviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <h2><i><mark>Please check the review of your quiz and if you have missed any questions please go back and submit them</mark></i></h2>\n<div>\n<div class=\"css\" *ngFor=\"let quiz of quizs\">\n<h3>Q.{{quiz.question}}</h3>\n<h3>Your answer:<mark>{{quiz.answer}}</mark></h3>\n</div>\n<button (click)=\"back()\">Back to Quiz</button>\n<button (click)=\"result()\">Submit</button>\n</div> -->\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n<div class=\"wrapper\">\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\" style=\"background:#2f4f4f; \"> >\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n        <!--<i class=\"fa fa-bank\" style=\"font-size:36px\"></i>-->\n          <a class=\"navbar-brand text-uppercase\" href=\"/icin-bank\" style=\"color:white\">ICIN BANK </a>\n        </div>\n        </div>\n<nav class=\"navbar navbar-expand-sm bg-light navbar-light\" style=\"font-size:20px;background:#2F4F4F\">\n  <ul class=\"navbar-nav\">\n  <li class=\"nav-item \">\n      <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" routerLink=\"/transfer\">Transfer</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" routerLink=\"/transaction\">Transaction</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" routerLink=\"/saving\">Saving Account Details</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/request\">Request</a>\n    </li>\n    \n    \n    \n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" routerLink=\"/myprofile\">My Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link\" style=\"border:none; background-color:transparent;color:gray;font-align-bottom:true\"  (click)=\"logout()\">Logout</button>\n    </li>\n  </ul>\n</nav>\n<br>\n\n<br><router-outlet></router-outlet>\n\n<div class=\"container register\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 register-left\">\n                        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThFZ_25FDiailkQSSDNlHdso29LOGdr4kfcA&usqp=CAU\" alt=\"\"/>\n                        <h3>Transfer Funds</h3>\n                      </div>\n                    <div class=\"col-md-9 register-right\">\n                            <div class=\"tab-content\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                                <h3 class=\"register-heading\">Transfer Details </h3>\n                                <div class=\"row register-form\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter recepient account number *\" value=\"\"[(ngModel)]=\"transfer.recipientAccountNumber\"  />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter the amount to be transferred*\" value=\"\"[(ngModel)]=\"transfer.transferAmount\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter the recepient *\" value=\"\"[(ngModel)]=\"transfer.recipient\" />\n                                            \n                                        </div>\n                                         <div class=\"form-group\">\n                                         <input type=\"submit\" class=\"btnRegister\"  value=\"Transfer\" (click)=\"transferamt()\"/>\n                                         </div>\n\n                                        \n                                        <!-- <div class=\"form-group\">\n                                            <input type=\"password\" class=\"form-control\"  placeholder=\"Confirm Password *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <div class=\"maxl\">\n                                                <label class=\"radio inline\"> \n                                                    <input type=\"radio\" name=\"gender\" value=\"male\" checked>\n                                                    <span> Male </span> \n                                                </label>\n                                                <label class=\"radio inline\"> \n                                                    <input type=\"radio\" name=\"gender\" value=\"female\">\n                                                    <span>Female </span> \n                                                </label>\n                                            </div>\n                                        </div> -->\n                                    </div>\n                                    \n                                    <div class=\"col-md-6\">\n                                      <br><br><br>  \n                                        \n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"tab-pane fade show\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                                <h3  class=\"register-heading\">Apply as a Hirer</h3>\n                                <div class=\"row register-form\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"First Name *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Last Name *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"email\" class=\"form-control\" placeholder=\"Email *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" maxlength=\"10\" minlength=\"10\" class=\"form-control\" placeholder=\"Phone *\" value=\"\" />\n                                        </div>\n\n\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                                                           \n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"footer\">\n  <p>Copyright &#169; 2020 ICIN BANK</p>\n</div> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/saving/saving.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saving/saving.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSavingSavingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    \n\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\"  href=\"https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css\">\n    <link rel=\"stylesheet\"  href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https:////cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css\">\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n    <script type=\"text/javascript\" src=\"http://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js\"></script>\n    <br><br>\n  <div class=\"wrapper\">\n   <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\" style=\"background:#2f4f4f; \"> >\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n        <!--<i class=\"fa fa-bank\" style=\"font-size:36px\"></i>-->\n          <a class=\"navbar-brand text-uppercase\" href=\"/icin-bank\" style=\"color:white\">ICIN BANK </a>\n        </div>\n        </div>\n<nav class=\"navbar navbar-expand-sm bg-light navbar-light\" style=\"font-size:20px\">\n  <ul class=\"navbar-nav\">\n  <li class=\"nav-item \">\n      <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/transfer\">Transfer</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/transaction\">Transaction</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" routerLink=\"/saving\">Saving Account Details</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/request\">Request</a>\n    </li>\n    \n    \n    \n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" routerLink=\"/myprofile\">My Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link\" style=\"border:none; background-color:transparent;color:gray;font-align-bottom:true\"  (click)=\"logout()\">Logout</button>\n    </li>\n  </ul>\n</nav>\n\n\n\n<br><br>\n<br><br><br>\n<h3>Transfer Details</h3>\n    <div class=\"container mb-3 mt-3\">\n    <table class=\"table table-striped\" id=\"mydataTable\">\n        <thead>\n            <tr>\n                <!--<th>Transfer ID</th>-->\n                <th>Date</th>\n                <th>Recepient</th>\n                <th>Recipient Account Number</th>\n                <th>Transfer Amount </th>\n                <th>Status </th>\n                 <th>Transfer Flow </th>\n               \n                <!-- <th>Actions</th> -->\n                \n            </tr>\n\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let transfer of transfers\">\n               <!--<td>{{transfer.savingsTransfersId}}</td>-->\n            <td>{{transfer.date}}</td>\n            <td>{{transfer.recipient}}</td>\n            <td>{{transfer.recipientAccountNumber}}</td>\n             <td>{{transfer.transferAmount}}</td>\n           <td>{{transfer.status}}</td>\n               <td>{{transfer.tranferflow}}</td>\n\n        </tr>\n \n        </tbody>\n        \n    </table>\n  </div>  \n  <br><br><br><br>\n  <hr>\n<h3>Transaction Details</h3>\n<div class=\"container mb-3 mt-3\">\n    <table class=\"table table-striped\" id=\"mydataTable\">\n        <thead>\n            <tr>\n            <!--<th>Transaction ID</th>-->\n                <th>Date</th>\n                \n                <th>Transaction Amount</th>\n                <th>Deposit/Withdraw</th>\n                <th>Savings Account balance</th>\n                \n                \n                <!-- <th>Actions</th> -->\n                \n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let transaction of transactions\">\n               <!--<td>{{transaction.savingsTransactionId}}</td>-->\n            <td>{{transaction.date}}</td>\n            \n            <td>{{transaction.transactionAmount}}</td>\n             <td>{{transaction.transactionType}}</td>\n             <td>{{transaction.availableBalance}}</td>\n           \n        </tr> \n        </tbody>\n        \n    </table>\n\n\n    <div class=\"footer\">\n  <p>Copyright &#169; 2020 ICIN BANK</p>\n</div> \n    \n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/submitquiz/submitquiz.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/submitquiz/submitquiz.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubmitquizSubmitquizComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<input type=\"text\" placeholder=\"Enter question id\" [(ngModel)]=\"quiz.id\">\n<br><br>\n<input type=\"text\" placeholder=\"Enter question \" [(ngModel)]=\"quiz.question\">\n<br><br>\n<input type=\"text\" placeholder=\"Enter question opt1\" [(ngModel)]=\"quiz.opt1\">\n<br><br>\n<input type=\"text\" placeholder=\"Enter question opt2\" [(ngModel)]=\"quiz.opt2\">\n<br><br>\n<input type=\"text\" placeholder=\"Enter question opt3\" [(ngModel)]=\"quiz.opt3\">\n<br><br>\n<input type=\"text\" placeholder=\"Enter question opt4\" [(ngModel)]=\"quiz.opt4\">\n<br><br>\n<input type=\"text\" placeholder=\"Enter your answer\" [(ngModel)]=\"quiz.answer\">\n<button (click)=\"updateQuiz()\">Submit</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/takequiz/takequiz.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/takequiz/takequiz.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTakequizTakequizComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <h3><u>Attempt Quiz</u></h3>\n<div *ngFor=\"let quiz of quizs\">\n<br>\n<h3><mark>Q.{{quiz.question}}</mark> </h3>\n<h3>{{quiz.opt1}}</h3>\n<h3>{{quiz.opt2}}</h3>\n<h3>{{quiz.opt3}}</h3>\n<h3>{{quiz.opt4}}</h3>\n<button (click)=\"addAnswer()\">Submit</button>\n</div> -->\n\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\" integrity=\"sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh\" crossorigin=\"anonymous\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n<div class=\"wrapper\">\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\" style=\"background:#2f4f4f; \"> >\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n        <!--<i class=\"fa fa-bank\" style=\"font-size:36px\"></i>-->\n          <a class=\"navbar-brand text-uppercase\" href=\"/icin-bank\" style=\"color:white\">ICIN BANK </a>\n        </div>\n        </div>\n<nav class=\"navbar navbar-expand-sm bg-light navbar-light\" style=\"font-size:20px\">\n  <ul class=\"navbar-nav\">\n  <li class=\"nav-item \">\n      <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" routerLink=\"/transfer\">Transfer</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" routerLink=\"/transaction\">Transaction</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" routerLink=\"/saving\">Saving Account Details</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" routerLink=\"/request\">Request</a>\n    </li>\n    \n    \n    \n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" routerLink=\"/myprofile\">My Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"nav-link\" style=\"border:none; background-color:transparent;color:gray;font-align-bottom:true\"  (click)=\"logout()\">Logout</button>\n    </li>\n  </ul>\n</nav><br>\n\n<router-outlet></router-outlet>\n\n<div class=\"container register\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 register-left\">\n                        <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///8AgAAAewCgwqAAfAD2+fYAdQDd7t0AggAAeQAAfgBQo1B8unyoz6iMwYxsrWyfyZ+y1bJZpVmayJqYwphgqmC93L0AhQBssWx9tH3s9uzz+vOy1rKQvZDl8uXG4cZCnULO5c7T6NM1ljUnjyd3tnfg8OBAnEAaihqo0qiJwYnB3cGPwo9irGIylTJKoEpbqlsjkCNnYI3JAAAKGUlEQVR4nO2daWOiPBDHkQWBWK3HChVd8KjWVlvb7//lHsELck44NOnD/912RfJzckwmk8QwTrJ/n4ysdm/t36eVf+WbDj3U+n1CXmd6Agy35qMLU5PMIEot+Go9uiS1CW3DI+Hzb7VgInN47GS8R5eiVnm+8ec3m/BoxD8Noe5qCPVXQ6i/GkL91RDqr4ZQfzWE+qsh1F8Nof5qCPVXQ6i/GkL91RDqr4ZQfzWE+qsh1F8Nof76fxK6ektMaK03jr7aTEwhodkzdNbfhvD4p8mjC1lKjQ0bQvXVtMPkT/tHF7KUIIR/H13IUuo3hA2h8moIG0L11RAyCDfLxSKOB4NZ9/2oUaL9x1VPcK198sspipaLeDdL3nZ8U4/ymuM/R++zOKqIcNlxkellZJbQfCHkC9cBArzr+J/ut1MF4SyocteQhUReobOCx8asYFSeMG5VvK9NMHkJpbZhIfO9LGH4U/nGPW/HI3yRjW4uSxLuqw+nolcOYCz7g5ov5QjDrxr2Xnqc3kZ+J912U4pQ+ieFyPzHBAxfpV9oxaUIu3Xs3bM+mYRLPGYtljeQJeznHrg3ofy3eTkvoitLuKtj3YYTCoq20t+GcrVUmjDc1tHTcHy3sax7gV7DUoTGUw2jRcAGNHxZQvMj97w84SYoRUMtE8/9tg9yiOgnZ8IChMZ71X2Nx/faHCkvEbWwn6sAoTEKqqyoyMR9ZVyLVxPMaG1j7OkihIYzdltmiVnTdSKEUMudi2eI4ccWUV7mUdQhZk+FCI+NcbHzu91uMvHtySidK4+6iXzf38XxwrHJbycVxX53hKt7lX8V+W0FCTVSQ9gQqq+GsCFUXw1h8qcu8ZS98AeDZKjt7xNNLpHnl5u+2fpMP/D0NNn3u4MlpVCValaEcPdlWVbqN2F+lCWhyyMr3JGsWIMChP1KQ8II1ZvrUYDQr3oK7H3Qy/YowiioPuY9YJQOrI1PzCmKE37UEMX4Kcdnf7gmGlNW1goRFojQiuWV6m2mh6TE5hd9HiZNWE/Mu8yQG50X3zz6Kp00YT0x7+figM7XOVKFhtUQjmqJCK8LAw6u8VtrXA3hoA4bFk6GWH5a11bTfqd+RJqwQJRdrLZ4LZ8iZ7/1brFUa0X/lLajRdg/oGyQEbmMEbHAiF/9wgV/lZsmZx3gMVRWULKA17asOlOhzV4fpWsxRHik35yxPlzE8158wWPQQiHTJWdnXMUHj1jJ4MTNixAa4WTb8tq0kLOk2h7aPm9o5WLKGVN+XuvAfqAQ4dFRCqNoGcfxcSJ8Uheq2eWRXRwvnSicSvFF6xZtJQpxGnJBwgepj6gdOZpzlgZ0Ily8MbwN7m4CfQinT4jVvyHe1EQbwt0P09NAX7zGrAthj3MMvsmNguhBOB3z/H3EjGAk0oIwPPB8YcQZDA09CJ0tNxuDm8mhBeHS5fqIaMVfJ1efMOYDCmM8yhOKALEcL1IQwtLx2hLyRdMYYTYOHqJXjHAmyvgSmhBEyJxc1q6ucB7q0cNPGSlNiC9u0kwoTDhSmRAQfLbEZVO4HeIJ2jTAgzhnTF0b9gFppby5/UXKEkIy5rG9I3SpSggBRAFjyTAnRdshaP1HONinUtOGIEBrDvouJQlHbQBgy4Wl4qhYS0egBTxYHVWSELYGa3ZA6dMgwtZ8mNXLM1+TrP5dlWZm949Kwt7xMmSWD2ZBFJw9bnvZ7Y9GxxdMJunrh7gO+E9DIUQ5QdO5eEn6Xrsd7OkhwB6oDaLgtKZqd3/a1yz+9O2IEICwHnmvtJ5iD1xEP/V+4Vj+rs07niqIKJ0hcAvuuZeZzgsU9UhYSz4JTegVr6g92KsvIWBuFJUl748xld+1WVBevxjgOTcFzxyFCR27qN6dqmkLdQpV0XN6kX0oshKd/jzR3YwY2AUs+Hl+yClUTJQuOd/NiGamIcKGiZb5fXnAL2TCU7rutI6dsDShGyFwmLCGdhnCq6MQ36c7RdtrcaFt8Pv2mxSppe3rGgewTZTULZsQ2gYPmWptz6WN6D3dHl/foyleRwtoG8wHnt5ly5iPenxUmBXE0OkGaXgbNDt5D8Gey+2Bzlow0azS3b4UIXMn1wYPuAu0kUmqp+RehWu3TjtagS/ZBskJ14K/dnoTMt1nWthq03tzEWdewhZgitXZSAFac9psyxm2kJXdrUMph2kid/XBWuu3o9loP1k/P3+Ox98duIZjTPi8+eXSyYCrKGONaTnoj3qTpIgvx9cMsXIkL56MZhtgPKAOQavom2gRTVVBh4k3uQQ/dQR0gC1WFVVeQEBzrivgB7ANUntRHVRqmNBBv74NArdt6DtM/Po2CLSgpW8vWtJVU1+wsxD1raIGLISgr6uWSoyo7zBx1lrQmerrql3Ft6LWbfAiHuKvAOQhajxM5MVqi9q6alPiOHH6OZpk2FAThQfvB9+z/USxIh741Ubhm9VCWxyRrKj6AqYnq1+yRG7CuxttAS/Hc6AA3yuYb4u0yLYW2qwu4XcU4Hm92YqqrwUzh/+TVrwh6gv4k11AQcSm1ktFBWfjqabNV36FCLkEoncDjGb7va+XKXFAVkU9VdFBkCwWfQm3wiikzQ+5xkdace2dAPunXEJkPtG+S0nRN4CiFoGYDhO3IKoHTAF+uBzG0WBkRU0smBkbUSB3Xsaj5FCqKAsR82/0uHaRt0eZqKh2/kIZi350l1piWzBFzHc39jDvhAs2oSshR3CNUa6i2kPMBS9zhtudxLcgZsVpB58MP3T7MUiCcwJOiBcHLnzDAa031T04URXNWTEk7h1DW+5hFwqIdNXoSjdVUQDdQmfU3VGRsA2e5CWAEWFu5Eqf4HZnbYCXwaUblSOiwSIXdivi4wStoigBpPVIqgOGK4k26JBX8QG2oD9W0PsKU8AlJUVUdcAIaEGUJLQ65Mkl6NEH/oiUBH5BgImlFqQFH33ej1BTIKCXgFCqKH7HpnKaAi9FTdvggjwmVPkqSvrPdJ2qKNkGla+ixicwESgBpByPhO/WU0/AW189BqD6V4UAc9XSthaTxzxaygOKjzzKAOpYRR3YBhZTW0BgL5MOEz5ZRdVvg0YEutoyraKUezc1AITdbJkC7siBXoMqahgdQCv09G2DR4cbUEkthidjKe/JJFoCQoeM+aD6gdFU4h2rqQU35C7x8hcF3UfC3RPpSbEhGbJ44KmMchJsI0StxFI2Of3XpIoa4o2SKQjpmetSRQ3R4U4nS5FHWWoEaMQcQmSl8U/yVnZL9bhoVpzzUC4RbOI4GaQToGEwj3C4hujxpmqqvjaBieWXInRZRco3VTL3S3UxTnzJLJPl3B71l89IDWiEVubIMnuFMoC13z9agyiZ9+Yqe1TD7UIza6tHOhAuAtEb5tfi9+fz4zxt94uM3MwReMjbEtM+/8tLjhZcq56EwFY42rbPsoYDiqHsxag30rEJ3mRf9eiSsPUf2KQcVvqdGFkAAAAASUVORK5CYII=\" alt=\"\"/>\n                        <h3>Request New Cheque Book</h3>\n                        \n                    </div>\n                    <div class=\"col-md-9 register-right\">\n                        <div class=\"tab-content\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\"><h3 class=\"register-heading\" >Request New Cheque Book</h3>\n                                <div class=\"row register-form\" style=\"padding-left:50px\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter request type*\" value=\"\" [(ngModel)]=\"request.requestType\"/>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter your description *   \" value=\"\"[(ngModel)]=\"request.requestDes\" />\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                     \n                                        <input type=\"submit\" class=\"btnRegister\"  value=\"Submit\" style=\"width:80px\"(click)=\"sendReq()\"/>\n                                    </div>\n                                    </div>\n                                    \n                                </div>\n                            </div>\n                            <div class=\"tab-pane fade show\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                                \n                                <div class=\"row register-form\">\n                                    <div class=\"col-md-6\">\n                                        \n\n\n                                    </div> \n                                    \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"footer\">\n  <p>Copyright &#169; 2020 ICIN BANK</p>\n</div> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/userdetails/userdetails.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userdetails/userdetails.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserdetailsUserdetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    \n\n <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\"  href=\"https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css\">\n    <link rel=\"stylesheet\"  href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https:////cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css\">\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n    <script type=\"text/javascript\" src=\"http://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js\"></script> \n   <!-- <link rel = \"stylesheet\"\n   type = \"text/css\"\n   href = \"userdetails.component.css\" /> -->\n   <!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\"></script>\n  <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width-device-width,initial-scale=1.0\">\n    <title>Tables</title>\n    <link rel=\"stylesheet\"  href=\"css/bootstrap.css\">\n\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n\n    <link rel=\"stylesheet\"  href=\"https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css\">\n    <link rel=\"stylesheet\"  href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n    \n\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https:////cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css\">\n -->\n\n    <br><br>\n  <div class=\"wrapper\">\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\" style=\"background:#2f4f4f; \"> >\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n        <!--<i class=\"fa fa-bank\" style=\"font-size:36px\"></i>-->\n          <a class=\"navbar-brand text-uppercase\" href=\"/icin-bank\" style=\"color:white\">ICIN BANK </a>\n        </div>\n        </div>\n        <nav class=\"navbar navbar-expand-sm bg-light navbar-light\" style=\"font-size:20px\">\n  <ul class=\"navbar-nav\">\n   <li class=\"nav-item \">\n      <a class=\"nav-link\" routerLink=\"/adminhome\">Home</a>\n    </li>\n  \n  <li class=\"nav-item active \">\n      <a class=\"nav-link\" routerLink=\"/userdetails\">User Details</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/chequerequest\">Request Cheque Book</a>\n    </li>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    \n    <li class=\"nav-item\">\n      <button class=\"nav-link\" style=\"border:none; background-color:transparent;color:gray;font-align-bottom:true\"  (click)=\"logout()\">Logout</button>\n    </li>\n  </ul>\n</nav>\n\n\n<br><br>\n<br><br><br>\n<br><br>\n<!-- <h3>      User Details</h3> -->\n    <div class=\"container mb-3 mt-3\">\n    <table class=\"table table-striped\" id=\"mydataTable\">\n        <thead>\n            <tr>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>User Name</th>\n                \n                <th>Savings Account Number</th>\n                <th>Enable/Disable</th>\n                \n            </tr>\n            \n            \n        </thead>\n        <tbody>\n         <tr *ngFor=\"let user of users\">\n               <td>{{user.firstName}}</td>\n            <td>{{user.lastName}}</td>\n            \n            <td>{{user.username}}</td>\n\n           <td ><div  >\n           {{user.savingsAccount.accountNumber}}\n           <!-- {{findSavingsaccount(user.username)}} -->\n           </div>\n           </td>\n            \n        \n        \n            <td><div *ngIf=\"user.enable==false  ; else elseBlock\">\n                    <!--<script type=\"text/typescript\">document.getElementById(\"disable_button\").style.display = \"none\"</script>-->\n                    <button id=\"enable_button\" class=\"btn btn-success badge-pill\" [disabled]=\"clicked\" (click)=\"enable($event,user.username) \" style=\"background:  #2f4f4f\">Enable</button>\n                   \n                    </div>\n\n                     <ng-template #elseBlock> \n                     <!--<script type=\"text/typescript\"> document.getElementById(\"enable_button\").style.display = \"none\"</script>-->\n                     <button id=\"disable_button\" class=\"btn btn-success badge-pill\" [disabled]=\"clicked\" (click)=\"disable($event,user.username) \" style=\"background:  #2f4f4f\">Disable</button>\n                     </ng-template>\n                </td>\n                </tr> \n        </tbody>\n        \n    </table>\n    <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n    <script type=\"text/javascript\" src=\"http://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js\"></script>\n    <script type=\"text/javascript\">\n        $(document).ready( function () {\n            $('#mydataTable').DataTable();\n        } );\n    </script>\n    <div class=\"footer\">\n  <p>Copyright &#169; 2020 ICIN BANK</p>\n</div> \n    \n  ";
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
  "./src/app/admin.service.ts":
  /*!**********************************!*\
    !*** ./src/app/admin.service.ts ***!
    \**********************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./request */
    "./src/app/request.ts");

    var AdminService = /*#__PURE__*/function () {
      function AdminService(http, authService) {
        _classCallCheck(this, AdminService);

        this.http = http;
        this.authService = authService;
        this.getRequestUrl = "http://localhost:8080/bankbackend/admin/requests";
        this.acceptRequestUrl = "http://localhost:8080/bankbackend/admin/request";
        this.getAllUsers = "http://localhost:8080/bankbackend/admin/getallusers";
        this.disableUsers = "http://localhost:8080/bankbackend/admin/disable";
        this.enableUsers = "http://localhost:8080/bankbackend/admin/enable";
        this.deleteRequestUrl = "http://localhost:8080/bankbackend/admin/delete/request";
        this.getSavingsAccountUrl = "http://localhost:8080/bankbackend/getSavingsAccount/accountNumber";
        this.req = new _request__WEBPACK_IMPORTED_MODULE_4__["Request"]();
      }

      _createClass(AdminService, [{
        key: "getRequests",
        value: function getRequests() {
          return this.http.get(this.getRequestUrl);
        }
      }, {
        key: "acceptUserRequest",
        value: function acceptUserRequest(requestId) {
          var currentUser = this.authService.currentUserValue;
          console.log(currentUser); //const requestId = reqId + "";
          //this.req.requestId = reqId.toString();
          //console.log(this.req.requestId);
          //const opts = new HttpParams().set("requestId",this.req.requestId);

          return this.http.put(this.acceptRequestUrl + '/' + requestId, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "responseType": "text"
          }));
        }
      }, {
        key: "deleteUserRequest",
        value: function deleteUserRequest(requestId) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            }),
            observe: 'response',
            'responseType': 'text'
          };
          var opts = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("requestId", requestId + "")
          };
          return this.http["delete"](this.deleteRequestUrl + '/' + requestId, httpOptions);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.getAllUsers);
        }
      }, {
        key: "enableUserAccount",
        value: function enableUserAccount(uId) {
          return this.http.put(this.enableUsers + '/' + uId, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "responseType": "text"
          }));
        }
      }, {
        key: "disableUserAccount",
        value: function disableUserAccount(uId) {
          return this.http.put(this.disableUsers + '/' + uId, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "responseType": "text"
          }));
        }
      }, {
        key: "getSavingsAccount",
        value: function getSavingsAccount(username) {
          var opts = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("username", username);
          return this.http.get(this.getSavingsAccountUrl, {
            params: opts
          });
        }
      }]);

      return AdminService;
    }();

    AdminService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminService);
    /***/
  },

  /***/
  "./src/app/adminhome/adminhome.component.css":
  /*!***************************************************!*\
    !*** ./src/app/adminhome/adminhome.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminhomeAdminhomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar-brand { position: relative; z-index: 2; }\n\n.navbar-nav.navbar-right .btn { position: relative; z-index: 2; padding: 4px 20px; margin: 10px auto; transition: transform 0.3s; }\n\n.navbar .navbar-collapse { position: relative; overflow: hidden !important; }\n\n.navbar .navbar-collapse .navbar-right > li:last-child { padding-left: 22px; }\n\n.navbar .nav-collapse { position: absolute; z-index: 1; top: 0; left: 0; right: 0; bottom: 0; margin: 0; padding-right: 120px; padding-left: 80px; width: 100%; }\n\n.navbar.navbar-default .nav-collapse { background-color: #f8f8f8; }\n\n.navbar.navbar-inverse .nav-collapse { background-color: #222; }\n\n.navbar .nav-collapse .navbar-form { border-width: 0; box-shadow: none; }\n\n.nav-collapse>li { float: right; }\n\n.btn.btn-circle { border-radius: 50px; }\n\n.btn.btn-outline { background-color: transparent; }\n\n.navbar-nav.navbar-right .btn:not(.collapsed) {\n    background-color: rgb(111, 84, 153);\n    border-color: rgb(111, 84, 153);\n    color: rgb(255, 255, 255);\n}\n\n.navbar.navbar-default .nav-collapse,\n.navbar.navbar-inverse .nav-collapse {\n    height: auto !important;\n    transition: transform 0.3s;\n    transform: translate(0px,-50px);\n}\n\n.navbar.navbar-default .nav-collapse.in,\n.navbar.navbar-inverse .nav-collapse.in {\n    transform: translate(0px,0px);\n}\n\n@media screen and (max-width: 767px) {\n    .navbar .navbar-collapse .navbar-right > li:last-child { padding-left: 15px; padding-right: 15px; } \n    \n    .navbar .nav-collapse { margin: 7.5px auto; padding: 0; }\n    .navbar .nav-collapse .navbar-form { margin: 0; }\n    .nav-collapse>li { float: none; }\n   \n    .navbar.navbar-default .nav-collapse,\n    .navbar.navbar-inverse .nav-collapse {\n        transform: translate(-100%,0px);\n    }\n    .navbar.navbar-default .nav-collapse.in,\n    .navbar.navbar-inverse .nav-collapse.in {\n        transform: translate(0px,0px);\n    }\n    \n    .navbar.navbar-default .nav-collapse.slide-down,\n    .navbar.navbar-inverse .nav-collapse.slide-down {\n        transform: translate(0px,-100%);\n    }\n    .navbar.navbar-default .nav-collapse.in.slide-down,\n    .navbar.navbar-inverse .nav-collapse.in.slide-down {\n        transform: translate(0px,0px);\n    } \n}\n\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n}  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5ob21lL2FkbWluaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixrQkFBa0IsRUFBRSxVQUFVLEVBQUU7O0FBRWhELGdDQUFnQyxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsMEJBQTBCLEVBQUU7O0FBRWxJLDJCQUEyQixrQkFBa0IsRUFBRSwyQkFBMkIsRUFBRTs7QUFDNUUseURBQXlELGtCQUFrQixFQUFFOztBQUU3RSx3QkFBd0Isa0JBQWtCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFOztBQUNoSyx1Q0FBdUMseUJBQXlCLEVBQUU7O0FBQ2xFLHVDQUF1QyxzQkFBc0IsRUFBRTs7QUFDL0QscUNBQXFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRTs7QUFDeEUsbUJBQW1CLFlBQVksRUFBRTs7QUFFakMsa0JBQWtCLG1CQUFtQixFQUFFOztBQUN2QyxtQkFBbUIsNkJBQTZCLEVBQUU7O0FBRWxEO0lBQ0ksbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiwrQkFBK0I7QUFDbkM7O0FBQ0E7O0lBRUksNkJBQTZCO0FBQ2pDOztBQUdBO0lBQ0kseURBQXlELGtCQUFrQixFQUFFLG1CQUFtQixFQUFFOztJQUVsRyx3QkFBd0Isa0JBQWtCLEVBQUUsVUFBVSxFQUFFO0lBQ3hELHFDQUFxQyxTQUFTLEVBQUU7SUFDaEQsbUJBQW1CLFdBQVcsRUFBRTs7SUFFaEM7O1FBRUksK0JBQStCO0lBQ25DO0lBQ0E7O1FBRUksNkJBQTZCO0lBQ2pDOztJQUVBOztRQUVJLCtCQUErQjtJQUNuQztJQUNBOztRQUVJLDZCQUE2QjtJQUNqQztBQUNKOztBQUNBO0dBQ0csZUFBZTtHQUNmLE9BQU87R0FDUCxTQUFTO0dBQ1QsV0FBVztHQUNYLFNBQVM7R0FDVCx1QkFBdUI7R0FDdkIsWUFBWTtHQUNaLGdCQUFnQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaG9tZS9hZG1pbmhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDI7IH1cblxuLm5hdmJhci1uYXYubmF2YmFyLXJpZ2h0IC5idG4geyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDI7IHBhZGRpbmc6IDRweCAyMHB4OyBtYXJnaW46IDEwcHggYXV0bzsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7IH1cblxuLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHsgcG9zaXRpb246IHJlbGF0aXZlOyBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7IH1cbi5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLXJpZ2h0ID4gbGk6bGFzdC1jaGlsZCB7IHBhZGRpbmctbGVmdDogMjJweDsgfVxuXG4ubmF2YmFyIC5uYXYtY29sbGFwc2UgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDE7IHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgbWFyZ2luOiAwOyBwYWRkaW5nLXJpZ2h0OiAxMjBweDsgcGFkZGluZy1sZWZ0OiA4MHB4OyB3aWR0aDogMTAwJTsgfVxuLm5hdmJhci5uYXZiYXItZGVmYXVsdCAubmF2LWNvbGxhcHNlIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODsgfVxuLm5hdmJhci5uYXZiYXItaW52ZXJzZSAubmF2LWNvbGxhcHNlIHsgYmFja2dyb3VuZC1jb2xvcjogIzIyMjsgfVxuLm5hdmJhciAubmF2LWNvbGxhcHNlIC5uYXZiYXItZm9ybSB7IGJvcmRlci13aWR0aDogMDsgYm94LXNoYWRvdzogbm9uZTsgfVxuLm5hdi1jb2xsYXBzZT5saSB7IGZsb2F0OiByaWdodDsgfVxuXG4uYnRuLmJ0bi1jaXJjbGUgeyBib3JkZXItcmFkaXVzOiA1MHB4OyB9XG4uYnRuLmJ0bi1vdXRsaW5lIHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLm5hdmJhci1uYXYubmF2YmFyLXJpZ2h0IC5idG46bm90KC5jb2xsYXBzZWQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCA4NCwgMTUzKTtcbiAgICBib3JkZXItY29sb3I6IHJnYigxMTEsIDg0LCAxNTMpO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLm5hdi1jb2xsYXBzZSxcbi5uYXZiYXIubmF2YmFyLWludmVyc2UgLm5hdi1jb2xsYXBzZSB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LC01MHB4KTtcbn1cbi5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLm5hdi1jb2xsYXBzZS5pbixcbi5uYXZiYXIubmF2YmFyLWludmVyc2UgLm5hdi1jb2xsYXBzZS5pbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1yaWdodCA+IGxpOmxhc3QtY2hpbGQgeyBwYWRkaW5nLWxlZnQ6IDE1cHg7IHBhZGRpbmctcmlnaHQ6IDE1cHg7IH0gXG4gICAgXG4gICAgLm5hdmJhciAubmF2LWNvbGxhcHNlIHsgbWFyZ2luOiA3LjVweCBhdXRvOyBwYWRkaW5nOiAwOyB9XG4gICAgLm5hdmJhciAubmF2LWNvbGxhcHNlIC5uYXZiYXItZm9ybSB7IG1hcmdpbjogMDsgfVxuICAgIC5uYXYtY29sbGFwc2U+bGkgeyBmbG9hdDogbm9uZTsgfVxuICAgXG4gICAgLm5hdmJhci5uYXZiYXItZGVmYXVsdCAubmF2LWNvbGxhcHNlLFxuICAgIC5uYXZiYXIubmF2YmFyLWludmVyc2UgLm5hdi1jb2xsYXBzZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLDBweCk7XG4gICAgfVxuICAgIC5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLm5hdi1jb2xsYXBzZS5pbixcbiAgICAubmF2YmFyLm5hdmJhci1pbnZlcnNlIC5uYXYtY29sbGFwc2UuaW4ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTtcbiAgICB9XG4gICAgXG4gICAgLm5hdmJhci5uYXZiYXItZGVmYXVsdCAubmF2LWNvbGxhcHNlLnNsaWRlLWRvd24sXG4gICAgLm5hdmJhci5uYXZiYXItaW52ZXJzZSAubmF2LWNvbGxhcHNlLnNsaWRlLWRvd24ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsLTEwMCUpO1xuICAgIH1cbiAgICAubmF2YmFyLm5hdmJhci1kZWZhdWx0IC5uYXYtY29sbGFwc2UuaW4uc2xpZGUtZG93bixcbiAgICAubmF2YmFyLm5hdmJhci1pbnZlcnNlIC5uYXYtY29sbGFwc2UuaW4uc2xpZGUtZG93biB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpO1xuICAgIH0gXG59XG4uZm9vdGVyIHtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGxlZnQ6IDA7XG4gICBib3R0b206IDA7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDozJTtcbiAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgY29sb3I6IHdoaXRlO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbn0gIFxuIl19 */";
    /***/
  },

  /***/
  "./src/app/adminhome/adminhome.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/adminhome/adminhome.component.ts ***!
    \**************************************************/

  /*! exports provided: AdminhomeComponent */

  /***/
  function srcAppAdminhomeAdminhomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminhomeComponent", function () {
      return AdminhomeComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/authentication.service */
    "./src/app/authentication.service.ts");

    var AdminhomeComponent = /*#__PURE__*/function () {
      function AdminhomeComponent(authenticationService, router) {
        _classCallCheck(this, AdminhomeComponent);

        this.authenticationService = authenticationService;
        this.router = router;
      }

      _createClass(AdminhomeComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/icin-bank']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminhomeComponent;
    }();

    AdminhomeComponent.ctorParameters = function () {
      return [{
        type: _app_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdminhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adminhome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adminhome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminhome/adminhome.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adminhome.component.css */
      "./src/app/adminhome/adminhome.component.css"))["default"]]
    })], AdminhomeComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _takequiz_takequiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./takequiz/takequiz.component */
    "./src/app/takequiz/takequiz.component.ts");
    /* harmony import */


    var _review_review_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./review/review.component */
    "./src/app/review/review.component.ts");
    /* harmony import */


    var _results_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./results/results.component */
    "./src/app/results/results.component.ts");
    /* harmony import */


    var _submitquiz_submitquiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./submitquiz/submitquiz.component */
    "./src/app/submitquiz/submitquiz.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _saving_saving_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./saving/saving.component */
    "./src/app/saving/saving.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _icin_bank_icin_bank_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./icin-bank/icin-bank.component */
    "./src/app/icin-bank/icin-bank.component.ts");
    /* harmony import */


    var _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./myprofile/myprofile.component */
    "./src/app/myprofile/myprofile.component.ts");
    /* harmony import */


    var _adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./adminhome/adminhome.component */
    "./src/app/adminhome/adminhome.component.ts");
    /* harmony import */


    var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./userdetails/userdetails.component */
    "./src/app/userdetails/userdetails.component.ts");
    /* harmony import */


    var _chequerequest_chequerequest_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./chequerequest/chequerequest.component */
    "./src/app/chequerequest/chequerequest.component.ts");
    /* harmony import */


    var _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./logout/logout.component */
    "./src/app/logout/logout.component.ts");

    var routes = [{
      path: 'request',
      component: _takequiz_takequiz_component__WEBPACK_IMPORTED_MODULE_3__["TakequizComponent"]
    }, {
      path: 'transfer',
      component: _review_review_component__WEBPACK_IMPORTED_MODULE_4__["ReviewComponent"]
    }, {
      path: 'transaction',
      component: _results_results_component__WEBPACK_IMPORTED_MODULE_5__["ResultsComponent"]
    }, {
      path: 'submit',
      component: _submitquiz_submitquiz_component__WEBPACK_IMPORTED_MODULE_6__["SubmitquizComponent"]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
    }, {
      path: 'saving',
      component: _saving_saving_component__WEBPACK_IMPORTED_MODULE_8__["SavingComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"]
    }, {
      path: 'icin-bank',
      component: _icin_bank_icin_bank_component__WEBPACK_IMPORTED_MODULE_12__["IcinBankComponent"]
    }, {
      path: 'myprofile',
      component: _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_13__["MyprofileComponent"]
    }, {
      path: 'adminhome',
      component: _adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_14__["AdminhomeComponent"]
    }, {
      path: 'userdetails',
      component: _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_15__["UserdetailsComponent"]
    }, {
      path: 'chequerequest',
      component: _chequerequest_chequerequest_component__WEBPACK_IMPORTED_MODULE_16__["ChequerequestComponent"]
    }, // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {
      path: 'logout',
      component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"]
    }, {
      path: '',
      component: _icin_bank_icin_bank_component__WEBPACK_IMPORTED_MODULE_12__["IcinBankComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\nbody{ \n  background-image: url(\"http://www.publicdomainpictures.net/pictures/50000/velka/flower-meadow.jpg\") no-repeat center center fixed;\n  background-size: cover;\n}\n\n.container{\npadding: 25px;   \n}\n\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n}  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUlBQWlJO0VBSWpJLHNCQUFzQjtBQUN4Qjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFDQTtHQUNHLGVBQWU7R0FDZixPQUFPO0dBQ1AsU0FBUztHQUNULFdBQVc7R0FDWCxTQUFTO0dBQ1QsdUJBQXVCO0dBQ3ZCLFlBQVk7R0FDWixnQkFBZ0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYm9keXsgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly93d3cucHVibGljZG9tYWlucGljdHVyZXMubmV0L3BpY3R1cmVzLzUwMDAwL3ZlbGthL2Zsb3dlci1tZWFkb3cuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jb250YWluZXJ7XG5wYWRkaW5nOiAyNXB4OyAgIFxufSAgXG4uZm9vdGVyIHtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGxlZnQ6IDA7XG4gICBib3R0b206IDA7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDozJTtcbiAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgY29sb3I6IHdoaXRlO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbn0gIFxuIl19 */";
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'quizz';
      }

      _createClass(AppComponent, [{
        key: "reg",
        value: function reg() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _takequiz_takequiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./takequiz/takequiz.component */
    "./src/app/takequiz/takequiz.component.ts");
    /* harmony import */


    var _review_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./review/review.component */
    "./src/app/review/review.component.ts");
    /* harmony import */


    var _results_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./results/results.component */
    "./src/app/results/results.component.ts");
    /* harmony import */


    var _submitquiz_submitquiz_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./submitquiz/submitquiz.component */
    "./src/app/submitquiz/submitquiz.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _saving_saving_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./saving/saving.component */
    "./src/app/saving/saving.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _icin_bank_icin_bank_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./icin-bank/icin-bank.component */
    "./src/app/icin-bank/icin-bank.component.ts");
    /* harmony import */


    var _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./myprofile/myprofile.component */
    "./src/app/myprofile/myprofile.component.ts");
    /* harmony import */


    var _adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./adminhome/adminhome.component */
    "./src/app/adminhome/adminhome.component.ts");
    /* harmony import */


    var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./userdetails/userdetails.component */
    "./src/app/userdetails/userdetails.component.ts");
    /* harmony import */


    var _chequerequest_chequerequest_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./chequerequest/chequerequest.component */
    "./src/app/chequerequest/chequerequest.component.ts");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _logout_logout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./logout/logout.component */
    "./src/app/logout/logout.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _takequiz_takequiz_component__WEBPACK_IMPORTED_MODULE_6__["TakequizComponent"], _review_review_component__WEBPACK_IMPORTED_MODULE_7__["ReviewComponent"], _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"], _submitquiz_submitquiz_component__WEBPACK_IMPORTED_MODULE_9__["SubmitquizComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], _saving_saving_component__WEBPACK_IMPORTED_MODULE_14__["SavingComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"], _icin_bank_icin_bank_component__WEBPACK_IMPORTED_MODULE_17__["IcinBankComponent"], _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_18__["MyprofileComponent"], _adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_19__["AdminhomeComponent"], _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_20__["UserdetailsComponent"], _chequerequest_chequerequest_component__WEBPACK_IMPORTED_MODULE_21__["ChequerequestComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_23__["LogoutComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]],
      providers: [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _authentication_service__WEBPACK_IMPORTED_MODULE_22__["AuthenticationService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/authentication.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/authentication.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(username, password) {
          var _this = this;

          // const header=new HttpParams().set("username",username).set("password",password);
          return this.http.post("http://localhost:8080/bankbackend/login", {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            console.log(user); // store user details and basic auth credentials in local storage to keep user logged in between page refreshes

            user.authdata = window.btoa(username + ':' + password);
            localStorage.setItem('currentUser', JSON.stringify(user));

            _this.currentUserSubject.next(user);

            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/chequerequest/chequerequest.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/chequerequest/chequerequest.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChequerequestChequerequestComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table.dataTable thead .sorting:after,\ntable.dataTable thead .sorting:before,\ntable.dataTable thead .sorting_asc:after,\ntable.dataTable thead .sorting_asc:before,\ntable.dataTable thead .sorting_asc_disabled:after,\ntable.dataTable thead .sorting_asc_disabled:before,\ntable.dataTable thead .sorting_desc:after,\ntable.dataTable thead .sorting_desc:before,\ntable.dataTable thead .sorting_desc_disabled:after,\ntable.dataTable thead .sorting_desc_disabled:before {\nbottom: .5em;\n}\n\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlcXVlcmVxdWVzdC9jaGVxdWVyZXF1ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFVQSxZQUFZO0FBQ1o7O0FBRUE7R0FDRyxlQUFlO0dBQ2YsT0FBTztHQUNQLFNBQVM7R0FDVCxXQUFXO0dBQ1gsU0FBUztHQUNULHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osZ0JBQWdCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2hlcXVlcmVxdWVzdC9jaGVxdWVyZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmc6YWZ0ZXIsXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmc6YmVmb3JlLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYzphZnRlcixcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2M6YmVmb3JlLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzY19kaXNhYmxlZDphZnRlcixcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2NfZGlzYWJsZWQ6YmVmb3JlLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2M6YWZ0ZXIsXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzpiZWZvcmUsXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZDphZnRlcixcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjX2Rpc2FibGVkOmJlZm9yZSB7XG5ib3R0b206IC41ZW07XG59XG5cbi5mb290ZXIge1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgbGVmdDogMDtcbiAgIGJvdHRvbTogMDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0OjMlO1xuICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICBjb2xvcjogd2hpdGU7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xufSAiXX0= */";
    /***/
  },

  /***/
  "./src/app/chequerequest/chequerequest.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/chequerequest/chequerequest.component.ts ***!
    \**********************************************************/

  /*! exports provided: ChequerequestComponent */

  /***/
  function srcAppChequerequestChequerequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChequerequestComponent", function () {
      return ChequerequestComponent;
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


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/authentication.service */
    "./src/app/authentication.service.ts");

    var ChequerequestComponent = /*#__PURE__*/function () {
      function ChequerequestComponent(authenticationService, adminService, router) {
        _classCallCheck(this, ChequerequestComponent);

        this.authenticationService = authenticationService;
        this.adminService = adminService;
        this.router = router;
      }

      _createClass(ChequerequestComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/icin-bank']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.adminService.getRequests().subscribe(function (res) {
            _this2.adminrequests = res;
          });
        }
      }, {
        key: "accept",
        value: function accept($event, requestId) {
          var _this3 = this;

          $event.target.disabled = true;
          var button = document.getElementById("decline_button");
          console.log(button.disabled);
          button.disabled = true;
          this.adminService.acceptUserRequest(requestId).subscribe(function (res) {
            _this3.gotoHome;
          });
        }
      }, {
        key: "decline",
        value: function decline($event, requestId) {
          var _this4 = this;

          $event.target.disabled = true;
          var button = document.getElementById("accept_button ");
          console.log(button.disabled);
          button.disabled = true;
          this.adminService.deleteUserRequest(requestId).subscribe(function (res) {
            return _this4.gotoHome();
          });
        }
      }, {
        key: "gotoHome",
        value: function gotoHome() {
          this.router.navigate(['/chequerequest']);
        }
      }]);

      return ChequerequestComponent;
    }();

    ChequerequestComponent.ctorParameters = function () {
      return [{
        type: _app_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ChequerequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chequerequest',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chequerequest.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chequerequest/chequerequest.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chequerequest.component.css */
      "./src/app/chequerequest/chequerequest.component.css"))["default"]]
    })], ChequerequestComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar-brand { position: relative; z-index: 2; }\n\n.navbar-nav.navbar-right .btn { position: relative; z-index: 2; padding: 4px 20px; margin: 10px auto; transition: transform 0.3s; }\n\n.navbar .navbar-collapse { position: relative; overflow: hidden !important; }\n\n.navbar .navbar-collapse .navbar-right > li:last-child { padding-left: 21px; }\n\n.navbar .nav-collapse { position: absolute; z-index: 1; top: 0; left: 0; right: 0; bottom: 0; margin: 0; padding-right: 120px; padding-left: 80px; width: 100%; }\n\n.navbar.navbar-default .nav-collapse { background-color: #f8f8f8; }\n\n.navbar.navbar-inverse .nav-collapse { background-color: #222; }\n\n.navbar .nav-collapse .navbar-form { border-width: 0; box-shadow: none; }\n\n.nav-collapse>li { float: right; }\n\n.btn.btn-circle { border-radius: 50px; }\n\n.btn.btn-outline { background-color: transparent; }\n\n.navbar-nav.navbar-right .btn:not(.collapsed) {\n    background-color: rgb(111, 84, 153);\n    border-color: rgb(111, 84, 153);\n    color: rgb(255, 255, 255);\n}\n\n.navbar.navbar-default .nav-collapse,\n.navbar.navbar-inverse .nav-collapse {\n    height: auto !important;\n    transition: transform 0.3s;\n    transform: translate(0px,-50px);\n}\n\n.navbar.navbar-default .nav-collapse.in,\n.navbar.navbar-inverse .nav-collapse.in {\n    transform: translate(0px,0px);\n}\n\n@media screen and (max-width: 767px) {\n    .navbar .navbar-collapse .navbar-right > li:last-child { padding-left: 15px; padding-right: 15px; } \n    \n    .navbar .nav-collapse { margin: 7.5px auto; padding: 0; }\n    .navbar .nav-collapse .navbar-form { margin: 0; }\n    .nav-collapse>li { float: none; }\n   \n    .navbar.navbar-default .nav-collapse,\n    .navbar.navbar-inverse .nav-collapse {\n        transform: translate(-100%,0px);\n    }\n    .navbar.navbar-default .nav-collapse.in,\n    .navbar.navbar-inverse .nav-collapse.in {\n        transform: translate(0px,0px);\n    }\n    \n    .navbar.navbar-default .nav-collapse.slide-down,\n    .navbar.navbar-inverse .nav-collapse.slide-down {\n        transform: translate(0px,-100%);\n    }\n    .navbar.navbar-default .nav-collapse.in.slide-down,\n    .navbar.navbar-inverse .nav-collapse.in.slide-down {\n        transform: translate(0px,0px);\n    } \n}\n\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n}\n\n.logout{\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLGtCQUFrQixFQUFFLFVBQVUsRUFBRTs7QUFFaEQsZ0NBQWdDLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSwwQkFBMEIsRUFBRTs7QUFFbEksMkJBQTJCLGtCQUFrQixFQUFFLDJCQUEyQixFQUFFOztBQUM1RSx5REFBeUQsa0JBQWtCLEVBQUU7O0FBRTdFLHdCQUF3QixrQkFBa0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUU7O0FBQ2hLLHVDQUF1Qyx5QkFBeUIsRUFBRTs7QUFDbEUsdUNBQXVDLHNCQUFzQixFQUFFOztBQUMvRCxxQ0FBcUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFOztBQUN4RSxtQkFBbUIsWUFBWSxFQUFFOztBQUVqQyxrQkFBa0IsbUJBQW1CLEVBQUU7O0FBQ3ZDLG1CQUFtQiw2QkFBNkIsRUFBRTs7QUFFbEQ7SUFDSSxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLCtCQUErQjtBQUNuQzs7QUFDQTs7SUFFSSw2QkFBNkI7QUFDakM7O0FBR0E7SUFDSSx5REFBeUQsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUU7O0lBRWxHLHdCQUF3QixrQkFBa0IsRUFBRSxVQUFVLEVBQUU7SUFDeEQscUNBQXFDLFNBQVMsRUFBRTtJQUNoRCxtQkFBbUIsV0FBVyxFQUFFOztJQUVoQzs7UUFFSSwrQkFBK0I7SUFDbkM7SUFDQTs7UUFFSSw2QkFBNkI7SUFDakM7O0lBRUE7O1FBRUksK0JBQStCO0lBQ25DO0lBQ0E7O1FBRUksNkJBQTZCO0lBQ2pDO0FBQ0o7O0FBQ0E7R0FDRyxlQUFlO0dBQ2YsT0FBTztHQUNQLFNBQVM7R0FDVCxXQUFXO0dBQ1gsU0FBUztHQUNULHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osZ0JBQWdCO0FBQ25COztBQUNBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5kIHsgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAyOyB9XG5cbi5uYXZiYXItbmF2Lm5hdmJhci1yaWdodCAuYnRuIHsgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAyOyBwYWRkaW5nOiA0cHggMjBweDsgbWFyZ2luOiAxMHB4IGF1dG87IHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzOyB9XG5cbi5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50OyB9XG4ubmF2YmFyIC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1yaWdodCA+IGxpOmxhc3QtY2hpbGQgeyBwYWRkaW5nLWxlZnQ6IDIxcHg7IH1cblxuLm5hdmJhciAubmF2LWNvbGxhcHNlIHsgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiAxOyB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IG1hcmdpbjogMDsgcGFkZGluZy1yaWdodDogMTIwcHg7IHBhZGRpbmctbGVmdDogODBweDsgd2lkdGg6IDEwMCU7IH1cbi5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLm5hdi1jb2xsYXBzZSB7IGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7IH1cbi5uYXZiYXIubmF2YmFyLWludmVyc2UgLm5hdi1jb2xsYXBzZSB7IGJhY2tncm91bmQtY29sb3I6ICMyMjI7IH1cbi5uYXZiYXIgLm5hdi1jb2xsYXBzZSAubmF2YmFyLWZvcm0geyBib3JkZXItd2lkdGg6IDA7IGJveC1zaGFkb3c6IG5vbmU7IH1cbi5uYXYtY29sbGFwc2U+bGkgeyBmbG9hdDogcmlnaHQ7IH1cblxuLmJ0bi5idG4tY2lyY2xlIHsgYm9yZGVyLXJhZGl1czogNTBweDsgfVxuLmJ0bi5idG4tb3V0bGluZSB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG5cbi5uYXZiYXItbmF2Lm5hdmJhci1yaWdodCAuYnRuOm5vdCguY29sbGFwc2VkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgODQsIDE1Myk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTExLCA4NCwgMTUzKTtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4ubmF2YmFyLm5hdmJhci1kZWZhdWx0IC5uYXYtY29sbGFwc2UsXG4ubmF2YmFyLm5hdmJhci1pbnZlcnNlIC5uYXYtY29sbGFwc2Uge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwtNTBweCk7XG59XG4ubmF2YmFyLm5hdmJhci1kZWZhdWx0IC5uYXYtY29sbGFwc2UuaW4sXG4ubmF2YmFyLm5hdmJhci1pbnZlcnNlIC5uYXYtY29sbGFwc2UuaW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIC5uYXZiYXItcmlnaHQgPiBsaTpsYXN0LWNoaWxkIHsgcGFkZGluZy1sZWZ0OiAxNXB4OyBwYWRkaW5nLXJpZ2h0OiAxNXB4OyB9IFxuICAgIFxuICAgIC5uYXZiYXIgLm5hdi1jb2xsYXBzZSB7IG1hcmdpbjogNy41cHggYXV0bzsgcGFkZGluZzogMDsgfVxuICAgIC5uYXZiYXIgLm5hdi1jb2xsYXBzZSAubmF2YmFyLWZvcm0geyBtYXJnaW46IDA7IH1cbiAgICAubmF2LWNvbGxhcHNlPmxpIHsgZmxvYXQ6IG5vbmU7IH1cbiAgIFxuICAgIC5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLm5hdi1jb2xsYXBzZSxcbiAgICAubmF2YmFyLm5hdmJhci1pbnZlcnNlIC5uYXYtY29sbGFwc2Uge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwwcHgpO1xuICAgIH1cbiAgICAubmF2YmFyLm5hdmJhci1kZWZhdWx0IC5uYXYtY29sbGFwc2UuaW4sXG4gICAgLm5hdmJhci5uYXZiYXItaW52ZXJzZSAubmF2LWNvbGxhcHNlLmluIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7XG4gICAgfVxuICAgIFxuICAgIC5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLm5hdi1jb2xsYXBzZS5zbGlkZS1kb3duLFxuICAgIC5uYXZiYXIubmF2YmFyLWludmVyc2UgLm5hdi1jb2xsYXBzZS5zbGlkZS1kb3duIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LC0xMDAlKTtcbiAgICB9XG4gICAgLm5hdmJhci5uYXZiYXItZGVmYXVsdCAubmF2LWNvbGxhcHNlLmluLnNsaWRlLWRvd24sXG4gICAgLm5hdmJhci5uYXZiYXItaW52ZXJzZSAubmF2LWNvbGxhcHNlLmluLnNsaWRlLWRvd24ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTtcbiAgICB9IFxufVxuLmZvb3RlciB7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICBsZWZ0OiAwO1xuICAgYm90dG9tOiAwO1xuICAgd2lkdGg6IDEwMCU7XG4gICBoZWlnaHQ6MyU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG59ICBcbi5sb2dvdXR7XG4gICAgXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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


    var _app_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/user.service */
    "./src/app/user.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(authenticationService, router, service) {
        _classCallCheck(this, HomeComponent);

        this.authenticationService = authenticationService;
        this.router = router;
        this.service = service;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.service.getAccountBalance().subscribe(function (res) {
            _this5.accountBalance = res;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/icin-bank']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _app_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/icin-bank/icin-bank.component.css":
  /*!***************************************************!*\
    !*** ./src/app/icin-bank/icin-bank.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIcinBankIcinBankComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\nFree App template for Bootstrap 3\nCode snippet by maridlcrmn for Bootsnipp.com\nFollow me on Twitter @maridlcrmn\nImage credits: unsplash.com\nImage placeholders: placemi.com\n*/\n\n\n.mt-100 {\n    margin-top: 100px; \n}\n\n\n.mb-100 {\n    margin-bottom: 100px;\n}\n\n\n.icon {\n    width: 32px;\n    height: 32px;\n    text-align: center;\n    padding: 7px 8px;\n    border: 2px solid;\n    border-radius: 50%;\n}\n\n\n.header {\n    padding-top: 50px;\n    background-color: #eee;\n    overflow: hidden;\n}\n\n\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n}\n\n\n.content {\n    position: relative;\n    display: table;\n    width: 100%;\n    min-height: 100vh;\n}\n\n\n.pull-middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n\n.btn {\n    padding-left: 25px;\n    padding-right: 25px;\n    background:  #2f4f4f;\n}\n\n\n.btn-circle {\n    border-radius: 20px;\n}\n\n\n.input-group input {\n    border: 0;\n    box-shadow: none;\n    padding-right: 30px;\n}\n\n\n.input-group input:focus,\n.input-group input:active {\n    outline: 0;\n    box-shadow: none;\n}\n\n\n.input-group-btn:last-child>.btn {\n    z-index: 2;\n    margin-left: -18px;   \n    border-radius: 20px;\n}\n\n\n.phone {\n    position: relative;\n    max-width: 263px;\n    margin: 0 auto;\n    padding: 65px 15px 55px;\n    border: 2px solid #ddd;\n    border-radius: 20px;\n    background-color: #222;\n    box-shadow: 20px 20px 40px #887;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWNpbi1iYW5rL2ljaW4tYmFuay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Q0FNQzs7O0FBR0Q7SUFDSSxpQkFBaUI7QUFDckI7OztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOzs7QUFDQTtHQUNHLGVBQWU7R0FDZixPQUFPO0dBQ1AsU0FBUztHQUNULFdBQVc7R0FDWCxTQUFTO0dBQ1QsdUJBQXVCO0dBQ3ZCLFlBQVk7R0FDWixnQkFBZ0I7QUFDbkI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7OztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOzs7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QiwrQkFBK0I7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9pY2luLWJhbmsvaWNpbi1iYW5rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuRnJlZSBBcHAgdGVtcGxhdGUgZm9yIEJvb3RzdHJhcCAzXG5Db2RlIHNuaXBwZXQgYnkgbWFyaWRsY3JtbiBmb3IgQm9vdHNuaXBwLmNvbVxuRm9sbG93IG1lIG9uIFR3aXR0ZXIgQG1hcmlkbGNybW5cbkltYWdlIGNyZWRpdHM6IHVuc3BsYXNoLmNvbVxuSW1hZ2UgcGxhY2Vob2xkZXJzOiBwbGFjZW1pLmNvbVxuKi9cblxuXG4ubXQtMTAwIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDsgXG59XG4ubWItMTAwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLmljb24ge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogN3B4IDhweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mb290ZXIge1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgbGVmdDogMDtcbiAgIGJvdHRvbTogMDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0OjMlO1xuICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICBjb2xvcjogd2hpdGU7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xufSBcblxuLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5wdWxsLW1pZGRsZSB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uYnRuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiAgIzJmNGY0Zjtcbn1cbi5idG4tY2lyY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uaW5wdXQtZ3JvdXAgaW5wdXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4uaW5wdXQtZ3JvdXAgaW5wdXQ6Zm9jdXMsXG4uaW5wdXQtZ3JvdXAgaW5wdXQ6YWN0aXZlIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQ+LmJ0biB7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW4tbGVmdDogLTE4cHg7ICAgXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnBob25lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiAyNjNweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiA2NXB4IDE1cHggNTVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICBib3gtc2hhZG93OiAyMHB4IDIwcHggNDBweCAjODg3O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/icin-bank/icin-bank.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/icin-bank/icin-bank.component.ts ***!
    \**************************************************/

  /*! exports provided: IcinBankComponent */

  /***/
  function srcAppIcinBankIcinBankComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IcinBankComponent", function () {
      return IcinBankComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IcinBankComponent = /*#__PURE__*/function () {
      function IcinBankComponent() {
        _classCallCheck(this, IcinBankComponent);
      }

      _createClass(IcinBankComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IcinBankComponent;
    }();

    IcinBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-icin-bank',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./icin-bank.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/icin-bank/icin-bank.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./icin-bank.component.css */
      "./src/app/icin-bank/icin-bank.component.css"))["default"]]
    })], IcinBankComponent);
    /***/
  },

  /***/
  "./src/app/login.ts":
  /*!**************************!*\
    !*** ./src/app/login.ts ***!
    \**************************/

  /*! exports provided: Login */

  /***/
  function srcAppLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Login", function () {
      return Login;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Login = function Login() {
      _classCallCheck(this, Login);
    };
    /***/

  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* button{\n  border-radius: 4px;\n  background-color: black;\n  border: none;\n  color: white;\n  text-align: center;\n  font-size: 13px;\n  padding: 7px;\n  width: 100px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\ndiv.css{\ntext-align:center;\n\n} */\n.register{\n      background: -webkit-linear-gradient(left, #2a8080, #2f4f4f);\n    margin-top: 3%;\n    padding: 3%;\n}\n.register-left{\n    text-align: center;\n    color: #fff;\n    margin-top: 4%;\n}\n.register-left input{\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    width: 60%;\n    background: #f8f9fa;\n    font-weight: bold;\n    color: #383d41;\n    margin-top: 30%;\n    margin-bottom: 3%;\n    cursor: pointer;\n}\n.register-right{\n    background: #f8f9fa;\n    border-top-left-radius: 10% 50%;\n    border-bottom-left-radius: 10% 50%;\n}\n.register-left img{\n    margin-top: 15%;\n    margin-bottom: 5%;\n    width: 25%;\n    -webkit-animation: mover 2s infinite  alternate;\n    animation: mover 1s infinite  alternate;\n}\n@-webkit-keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n@keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n.register-left p{\n    font-weight: lighter;\n    padding: 12%;\n    margin-top: -9%;\n}\n.register .register-form{\n    padding: 10%;\n    margin-top: 10%;\n}\n.btnRegister{\n    float: right;\n    margin-top: 10%;\n    border: none;\n    border-radius: 1.5rem;\n    padding: 5%;\n    background:  #2f4f4f;\n    color: #fff;\n    font-weight: 600;\n    width: 50%;\n    cursor: pointer;\n    size:10px\n    \n}\n.register .nav-tabs{\n    margin-top: 3%;\n    border: none;\n    background: #0062cc;\n    border-radius: 1.5rem;\n    width: 28%;\n    float: right;\n}\n.register .nav-tabs .nav-link{\n    padding: 2%;\n    height: 34px;\n    font-weight: 600;\n    color: #fff;\n    border-top-right-radius: 1.5rem;\n    border-bottom-right-radius: 1.5rem;\n}\n.register .nav-tabs .nav-link:hover{\n    border: none;\n}\n.register .nav-tabs .nav-link.active{\n    width: 100px;\n    color: #0062cc;\n    border: 2px solid #0062cc;\n    border-top-left-radius: 1.5rem;\n    border-bottom-left-radius: 1.5rem;\n}\n.register-heading{\n    text-align: center;\n    margin-top: 8%;\n    margin-bottom: -15%;\n    color: #495057;\n}\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUNIO01BQ00sMkRBQTJEO0lBQzdELGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLCtDQUErQztJQUMvQyx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLEtBQUssd0JBQXdCLEVBQUU7SUFDL0IsT0FBTyw0QkFBNEIsRUFBRTtBQUN6QztBQUNBO0lBQ0ksS0FBSyx3QkFBd0IsRUFBRTtJQUMvQixPQUFPLDRCQUE0QixFQUFFO0FBQ3pDO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0lBQ2Y7O0FBRUo7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtHQUNHLGVBQWU7R0FDZixPQUFPO0dBQ1AsU0FBUztHQUNULFdBQVc7R0FDWCxTQUFTO0dBQ1QsdUJBQXVCO0dBQ3ZCLFlBQVk7R0FDWixnQkFBZ0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYnV0dG9ue1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDdweDtcbiAgd2lkdGg6IDEwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbn1cbmRpdi5jc3N7XG50ZXh0LWFsaWduOmNlbnRlcjtcblxufSAqL1xuLnJlZ2lzdGVye1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzJhODA4MCwgIzJmNGY0Zik7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgcGFkZGluZzogMyU7XG59XG4ucmVnaXN0ZXItbGVmdHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogNCU7XG59XG4ucmVnaXN0ZXItbGVmdCBpbnB1dHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzM4M2Q0MTtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlZ2lzdGVyLXJpZ2h0e1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlIDUwJTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xufVxuLnJlZ2lzdGVyLWxlZnQgaW1ne1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICB3aWR0aDogMjUlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAycyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxufVxuQGtleWZyYW1lcyBtb3ZlciB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxufVxuLnJlZ2lzdGVyLWxlZnQgcHtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBwYWRkaW5nOiAxMiU7XG4gICAgbWFyZ2luLXRvcDogLTklO1xufVxuLnJlZ2lzdGVyIC5yZWdpc3Rlci1mb3Jte1xuICAgIHBhZGRpbmc6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG4uYnRuUmVnaXN0ZXJ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIGJhY2tncm91bmQ6ICAjMmY0ZjRmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgc2l6ZToxMHB4XG4gICAgXG59XG4ucmVnaXN0ZXIgLm5hdi10YWJze1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjMDA2MmNjO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICB3aWR0aDogMjglO1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5yZWdpc3RlciAubmF2LXRhYnMgLm5hdi1saW5re1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGhlaWdodDogMzRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXJlbTtcbn1cbi5yZWdpc3RlciAubmF2LXRhYnMgLm5hdi1saW5rOmhvdmVye1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5yZWdpc3RlciAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgY29sb3I6ICMwMDYyY2M7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNjJjYztcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS41cmVtO1xufVxuLnJlZ2lzdGVyLWhlYWRpbmd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIG1hcmdpbi1ib3R0b206IC0xNSU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG59XG4uZm9vdGVyIHtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGxlZnQ6IDA7XG4gICBib3R0b206IDA7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDozJTtcbiAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgY29sb3I6IHdoaXRlO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbn0gIl19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/login */
    "./src/app/login.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, route, router, authenticationService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.login = new _app_login__WEBPACK_IMPORTED_MODULE_6__["Login"](); // redirect to home if already logged in

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/home']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;

          this.submitted = true; // stop here if form is invalid
          // if (this.loginForm.invalid) {
          //     return;
          // }

          this.loading = true;

          if (this.login.username == "admin1" && this.login.password == "admin1") {
            this.router.navigate(['/adminhome']);
          } else {
            this.authenticationService.login(this.login.username, this.login.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
              console.log(data);

              _this6.router.navigate(['/home']);
            }, function (error) {
              _this6.error = error;
              _this6.loading = false;
            });
          }
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigate(['/adminhome']);
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _app_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/logout/logout.component.css":
  /*!*********************************************!*\
    !*** ./src/app/logout/logout.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLogoutLogoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/logout/logout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/logout/logout.component.ts ***!
    \********************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LogoutComponent = /*#__PURE__*/function () {
      function LogoutComponent() {
        _classCallCheck(this, LogoutComponent);
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoutComponent;
    }();

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.css */
      "./src/app/logout/logout.component.css"))["default"]]
    })], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/myprofile/myprofile.component.css":
  /*!***************************************************!*\
    !*** ./src/app/myprofile/myprofile.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyprofileMyprofileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* button{\n  border-radius: 4px;\n  background-color: black;\n  border: none;\n  color: white;\n  text-align: center;\n  font-size: 13px;\n  padding: 7px;\n  width: 100px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\ndiv.css{\ntext-align:center;\n\n} */\n.register{\n      background: -webkit-linear-gradient(left, #2a8080, #2f4f4f);\n    margin-top: 3%;\n    padding: 3%;\n}\n.register-left{\n    text-align: center;\n    color: #fff;\n    margin-top: 4%;\n}\n.register-left input{\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    width: 60%;\n    background: #f8f9fa;\n    font-weight: bold;\n    color: #383d41;\n    margin-top: 30%;\n    margin-bottom: 3%;\n    cursor: pointer;\n}\n.register-right{\n    background: #f8f9fa;\n    border-top-left-radius: 10% 50%;\n    border-bottom-left-radius: 10% 50%;\n}\n.register-left img{\n    margin-top: 15%;\n    margin-bottom: 5%;\n    width: 25%;\n    -webkit-animation: mover 2s infinite  alternate;\n    animation: mover 1s infinite  alternate;\n}\n@-webkit-keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n@keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n.register-left p{\n    font-weight: lighter;\n    padding: 12%;\n    margin-top: -9%;\n}\n.register .register-form{\n    padding: 10%;\n    margin-top: 10%;\n}\n.btnRegister{\n    float: right;\n    margin-top: 10%;\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    background:  #2f4f4f;\n    color: #fff;\n    font-weight: 600;\n    width: 50%;\n    cursor: pointer;\n}\n.register .nav-tabs{\n    margin-top: 3%;\n    border: none;\n    background: #0062cc;\n    border-radius: 1.5rem;\n    width: 28%;\n    float: right;\n}\n.register .nav-tabs .nav-link{\n    padding: 2%;\n    height: 34px;\n    font-weight: 600;\n    color: #fff;\n    border-top-right-radius: 1.5rem;\n    border-bottom-right-radius: 1.5rem;\n}\n.register .nav-tabs .nav-link:hover{\n    border: none;\n}\n.register .nav-tabs .nav-link.active{\n    width: 100px;\n    color: #0062cc;\n    border: 2px solid #0062cc;\n    border-top-left-radius: 1.5rem;\n    border-bottom-left-radius: 1.5rem;\n}\n.register-heading{\n    text-align: center;\n    margin-top: 8%;\n    margin-bottom: -15%;\n    color: #495057;\n}\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL215cHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBQ0g7TUFDTSwyREFBMkQ7SUFDN0QsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsK0NBQStDO0lBQy9DLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksS0FBSyx3QkFBd0IsRUFBRTtJQUMvQixPQUFPLDRCQUE0QixFQUFFO0FBQ3pDO0FBQ0E7SUFDSSxLQUFLLHdCQUF3QixFQUFFO0lBQy9CLE9BQU8sNEJBQTRCLEVBQUU7QUFDekM7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtHQUNHLGVBQWU7R0FDZixPQUFPO0dBQ1AsU0FBUztHQUNULFdBQVc7R0FDWCxTQUFTO0dBQ1QsdUJBQXVCO0dBQ3ZCLFlBQVk7R0FDWixnQkFBZ0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9teXByb2ZpbGUvbXlwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBidXR0b257XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogN3B4O1xuICB3aWR0aDogMTAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xufVxuZGl2LmNzc3tcbnRleHQtYWxpZ246Y2VudGVyO1xuXG59ICovXG4ucmVnaXN0ZXJ7XG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmE4MDgwLCAjMmY0ZjRmKTtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBwYWRkaW5nOiAzJTtcbn1cbi5yZWdpc3Rlci1sZWZ0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbn1cbi5yZWdpc3Rlci1sZWZ0IGlucHV0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgcGFkZGluZzogMiU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMzgzZDQxO1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVnaXN0ZXItcmlnaHR7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG59XG4ucmVnaXN0ZXItbGVmdCBpbWd7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDJzIGluZmluaXRlICBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XG59XG4ucmVnaXN0ZXItbGVmdCBwe1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIHBhZGRpbmc6IDEyJTtcbiAgICBtYXJnaW4tdG9wOiAtOSU7XG59XG4ucmVnaXN0ZXIgLnJlZ2lzdGVyLWZvcm17XG4gICAgcGFkZGluZzogMTAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5idG5SZWdpc3RlcntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgcGFkZGluZzogMiU7XG4gICAgYmFja2dyb3VuZDogICMyZjRmNGY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZWdpc3RlciAubmF2LXRhYnN7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMwMDYyY2M7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHdpZHRoOiAyOCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLnJlZ2lzdGVyIC5uYXYtdGFicyAubmF2LWxpbmt7XG4gICAgcGFkZGluZzogMiU7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS41cmVtO1xufVxuLnJlZ2lzdGVyIC5uYXYtdGFicyAubmF2LWxpbms6aG92ZXJ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLnJlZ2lzdGVyIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBjb2xvcjogIzAwNjJjYztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA2MmNjO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjVyZW07XG59XG4ucmVnaXN0ZXItaGVhZGluZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogOCU7XG4gICAgbWFyZ2luLWJvdHRvbTogLTE1JTtcbiAgICBjb2xvcjogIzQ5NTA1Nztcbn1cbi5mb290ZXIge1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgbGVmdDogMDtcbiAgIGJvdHRvbTogMDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0OjMlO1xuICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICBjb2xvcjogd2hpdGU7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xufSAiXX0= */";
    /***/
  },

  /***/
  "./src/app/myprofile/myprofile.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/myprofile/myprofile.component.ts ***!
    \**************************************************/

  /*! exports provided: MyprofileComponent */

  /***/
  function srcAppMyprofileMyprofileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function () {
      return MyprofileComponent;
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


    var _app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _userdetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../userdetails */
    "./src/app/userdetails.ts");
    /* harmony import */


    var _savings_account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../savings-account */
    "./src/app/savings-account.ts");
    /* harmony import */


    var _app_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/authentication.service */
    "./src/app/authentication.service.ts");

    var MyprofileComponent = /*#__PURE__*/function () {
      function MyprofileComponent(authenticationService, router, service) {
        _classCallCheck(this, MyprofileComponent);

        this.authenticationService = authenticationService;
        this.router = router;
        this.service = service;
        this.userdetails = new _userdetails__WEBPACK_IMPORTED_MODULE_4__["Userdetails"]();
        this.savingsaccount = new _savings_account__WEBPACK_IMPORTED_MODULE_5__["SavingsAccount"]();
      }

      _createClass(MyprofileComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/icin-bank']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.service.getUser().subscribe(function (res) {
            _this7.userdetails = res;
          });
          this.service.getSavingsAccount().subscribe(function (res) {
            _this7.savingsaccount = res;
          });
        }
      }]);

      return MyprofileComponent;
    }();

    MyprofileComponent.ctorParameters = function () {
      return [{
        type: _app_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    MyprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myprofile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myprofile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myprofile/myprofile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myprofile.component.css */
      "./src/app/myprofile/myprofile.component.css"))["default"]]
    })], MyprofileComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".register{\n         background: -webkit-linear-gradient(left, #A2D240, #1B8B00\n);\n    margin-top: 3%;\n    padding: 3%;\n}\n.register-left{\n    text-align: center;\n    color: #fff;\n    margin-top: 4%;\n}\n.register-left input{\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    width: 60%;\n    background: #f8f9fa;\n    font-weight: bold;\n    color: #383d41;\n    margin-top: 30%;\n    margin-bottom: 3%;\n    cursor: pointer;\n}\n.register-right{\n    background: #f8f9fa;\n    border-top-left-radius: 10% 50%;\n    border-bottom-left-radius: 10% 50%;\n}\n.register-left img{\n    margin-top: 15%;\n    margin-bottom: 5%;\n    width: 25%;\n    -webkit-animation: mover 2s infinite  alternate;\n    animation: mover 1s infinite  alternate;\n}\n@-webkit-keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n@keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n.register-left p{\n    font-weight: lighter;\n    padding: 12%;\n    margin-top: -9%;\n}\n.register .register-form{\n    padding: 10%;\n    margin-top: 10%;\n}\n.btnRegister{\n    float: right;\n    margin-top: 10%;\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    background: #1B8B00;\n    color: #fff;\n    font-weight: 600;\n    width: 50%;\n    cursor: pointer;\n}\n.register .nav-tabs{\n    margin-top: 3%;\n    border: none;\n    background: #0062cc;\n    border-radius: 1.5rem;\n    width: 28%;\n    float: right;\n}\n.register .nav-tabs .nav-link{\n    padding: 2%;\n    height: 34px;\n    font-weight: 600;\n    color: #fff;\n    border-top-right-radius: 1.5rem;\n    border-bottom-right-radius: 1.5rem;\n}\n.register .nav-tabs .nav-link:hover{\n    border: none;\n}\n.register .nav-tabs .nav-link.active{\n    width: 100px;\n    color: #0062cc;\n    border: 2px solid #0062cc;\n    border-top-left-radius: 1.5rem;\n    border-bottom-left-radius: 1.5rem;\n}\n.register-heading{\n    text-align: center;\n    margin-top: 8%;\n    margin-bottom: -15%;\n    color: #495057;\n}\n/*Profile Pic Start*/\n/*Profile Pic End*/\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7U0FDUztDQUNSO0lBQ0csY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsK0NBQStDO0lBQy9DLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksS0FBSyx3QkFBd0IsRUFBRTtJQUMvQixPQUFPLDRCQUE0QixFQUFFO0FBQ3pDO0FBQ0E7SUFDSSxLQUFLLHdCQUF3QixFQUFFO0lBQy9CLE9BQU8sNEJBQTRCLEVBQUU7QUFDekM7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQSxvQkFBb0I7QUFFcEIsa0JBQWtCO0FBRWxCO0dBQ0csZUFBZTtHQUNmLE9BQU87R0FDUCxTQUFTO0dBQ1QsV0FBVztHQUNYLFNBQVM7R0FDVCx1QkFBdUI7R0FDdkIsWUFBWTtHQUNaLGdCQUFnQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVye1xuICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI0EyRDI0MCwgIzFCOEIwMFxuKTtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBwYWRkaW5nOiAzJTtcbn1cbi5yZWdpc3Rlci1sZWZ0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbn1cbi5yZWdpc3Rlci1sZWZ0IGlucHV0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgcGFkZGluZzogMiU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMzgzZDQxO1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVnaXN0ZXItcmlnaHR7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG59XG4ucmVnaXN0ZXItbGVmdCBpbWd7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDJzIGluZmluaXRlICBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XG59XG4ucmVnaXN0ZXItbGVmdCBwe1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIHBhZGRpbmc6IDEyJTtcbiAgICBtYXJnaW4tdG9wOiAtOSU7XG59XG4ucmVnaXN0ZXIgLnJlZ2lzdGVyLWZvcm17XG4gICAgcGFkZGluZzogMTAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5idG5SZWdpc3RlcntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgcGFkZGluZzogMiU7XG4gICAgYmFja2dyb3VuZDogIzFCOEIwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlZ2lzdGVyIC5uYXYtdGFic3tcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzAwNjJjYztcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgd2lkdGg6IDI4JTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGlua3tcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxLjVyZW07XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlcntcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGNvbG9yOiAjMDA2MmNjO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDYyY2M7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcbn1cbi5yZWdpc3Rlci1oZWFkaW5ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTUlO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xufVxuLypQcm9maWxlIFBpYyBTdGFydCovXG5cbi8qUHJvZmlsZSBQaWMgRW5kKi9cblxuLmZvb3RlciB7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICBsZWZ0OiAwO1xuICAgYm90dG9tOiAwO1xuICAgd2lkdGg6IDEwMCU7XG4gICBoZWlnaHQ6MyU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG59ICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/quiz.service.ts":
  /*!*********************************!*\
    !*** ./src/app/quiz.service.ts ***!
    \*********************************/

  /*! exports provided: QuizService */

  /***/
  function srcAppQuizServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizService", function () {
      return QuizService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var QuizService = /*#__PURE__*/function () {
      function QuizService(http) {
        _classCallCheck(this, QuizService);

        this.http = http;
        this.url = "http://localhost:9090/quiz";
      }

      _createClass(QuizService, [{
        key: "getAllQuiz",
        value: function getAllQuiz() {
          return this.http.get(this.url + "s");
        }
      }, {
        key: "updateQuiz",
        value: function updateQuiz(quiz) {
          return this.http.put(this.url, quiz);
        }
      }]);

      return QuizService;
    }();

    QuizService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuizService);
    /***/
  },

  /***/
  "./src/app/quiz.ts":
  /*!*************************!*\
    !*** ./src/app/quiz.ts ***!
    \*************************/

  /*! exports provided: Quiz */

  /***/
  function srcAppQuizTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Quiz", function () {
      return Quiz;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Quiz = function Quiz() {
      _classCallCheck(this, Quiz);
    };
    /***/

  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* button{\n  border-radius: 4px;\n  background-color: black;\n  border: none;\n  color: white;\n  text-align: center;\n  font-size: 13px;\n  padding: 7px;\n  width: 100px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\ndiv.css{\ntext-align:center;\n\n} */\n.register{\n      background: -webkit-linear-gradient(left, #2a8080, #2f4f4f);\n    margin-top: 3%;\n    padding: 3%;\n}\n.register-left{\n    text-align: center;\n    color: #fff;\n    margin-top: 4%;\n}\n.register-left input{\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    width: 60%;\n    background: #f8f9fa;\n    font-weight: bold;\n    color: #383d41;\n    margin-top: 30%;\n    margin-bottom: 3%;\n    cursor: pointer;\n}\n.register-right{\n    background: #f8f9fa;\n    border-top-left-radius: 10% 50%;\n    border-bottom-left-radius: 10% 50%;\n}\n.register-left img{\n    margin-top: 15%;\n    margin-bottom: 5%;\n    width: 25%;\n    -webkit-animation: mover 2s infinite  alternate;\n    animation: mover 1s infinite  alternate;\n}\n@-webkit-keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n@keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n.register-left p{\n    font-weight: lighter;\n    padding: 12%;\n    margin-top: -9%;\n}\n.register .register-form{\n    padding: 10%;\n    margin-top: 10%;\n}\n.btnRegister{\n    float: right;\n    margin-top: 10%;\n    border: none;\n    border-radius: 1.5rem;\n    padding: 5%;\n    background:  #2f4f4f;\n    color: #fff;\n    font-weight: 600;\n    width: 50%;\n    cursor: pointer;\n    size:10px\n    \n}\n.register .nav-tabs{\n    margin-top: 3%;\n    border: none;\n    background: #0062cc;\n    border-radius: 1.5rem;\n    width: 28%;\n    float: right;\n}\n.register .nav-tabs .nav-link{\n    padding: 2%;\n    height: 34px;\n    font-weight: 600;\n    color: #fff;\n    border-top-right-radius: 1.5rem;\n    border-bottom-right-radius: 1.5rem;\n}\n.register .nav-tabs .nav-link:hover{\n    border: none;\n}\n.register .nav-tabs .nav-link.active{\n    width: 100px;\n    color: #0062cc;\n    border: 2px solid #0062cc;\n    border-top-left-radius: 1.5rem;\n    border-bottom-left-radius: 1.5rem;\n}\n.register-heading{\n    text-align: center;\n    margin-top: 8%;\n    margin-bottom: -15%;\n    color: #495057;\n}\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUNIO01BQ00sMkRBQTJEO0lBQzdELGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLCtDQUErQztJQUMvQyx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLEtBQUssd0JBQXdCLEVBQUU7SUFDL0IsT0FBTyw0QkFBNEIsRUFBRTtBQUN6QztBQUNBO0lBQ0ksS0FBSyx3QkFBd0IsRUFBRTtJQUMvQixPQUFPLDRCQUE0QixFQUFFO0FBQ3pDO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0lBQ2Y7O0FBRUo7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtHQUNHLGVBQWU7R0FDZixPQUFPO0dBQ1AsU0FBUztHQUNULFdBQVc7R0FDWCxTQUFTO0dBQ1QsdUJBQXVCO0dBQ3ZCLFlBQVk7R0FDWixnQkFBZ0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYnV0dG9ue1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDdweDtcbiAgd2lkdGg6IDEwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbn1cbmRpdi5jc3N7XG50ZXh0LWFsaWduOmNlbnRlcjtcblxufSAqL1xuLnJlZ2lzdGVye1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzJhODA4MCwgIzJmNGY0Zik7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgcGFkZGluZzogMyU7XG59XG4ucmVnaXN0ZXItbGVmdHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogNCU7XG59XG4ucmVnaXN0ZXItbGVmdCBpbnB1dHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzM4M2Q0MTtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlZ2lzdGVyLXJpZ2h0e1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlIDUwJTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xufVxuLnJlZ2lzdGVyLWxlZnQgaW1ne1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICB3aWR0aDogMjUlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAycyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxufVxuQGtleWZyYW1lcyBtb3ZlciB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxufVxuLnJlZ2lzdGVyLWxlZnQgcHtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBwYWRkaW5nOiAxMiU7XG4gICAgbWFyZ2luLXRvcDogLTklO1xufVxuLnJlZ2lzdGVyIC5yZWdpc3Rlci1mb3Jte1xuICAgIHBhZGRpbmc6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG4uYnRuUmVnaXN0ZXJ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIGJhY2tncm91bmQ6ICAjMmY0ZjRmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgc2l6ZToxMHB4XG4gICAgXG59XG4ucmVnaXN0ZXIgLm5hdi10YWJze1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjMDA2MmNjO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICB3aWR0aDogMjglO1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5yZWdpc3RlciAubmF2LXRhYnMgLm5hdi1saW5re1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGhlaWdodDogMzRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXJlbTtcbn1cbi5yZWdpc3RlciAubmF2LXRhYnMgLm5hdi1saW5rOmhvdmVye1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5yZWdpc3RlciAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgY29sb3I6ICMwMDYyY2M7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNjJjYztcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS41cmVtO1xufVxuLnJlZ2lzdGVyLWhlYWRpbmd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIG1hcmdpbi1ib3R0b206IC0xNSU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG59XG4uZm9vdGVyIHtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGxlZnQ6IDA7XG4gICBib3R0b206IDA7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDozJTtcbiAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgY29sb3I6IHdoaXRlO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbn0gIl19 */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
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


    var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user */
    "./src/app/user.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(service, router) {
        _classCallCheck(this, RegisterComponent);

        this.service = service;
        this.router = router;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]();
      }

      _createClass(RegisterComponent, [{
        key: "adduser",
        value: function adduser() {
          var _this8 = this;

          this.service.adduser(this.user).subscribe(function (res) {
            return _this8.gotoLogin();
          });
        }
      }, {
        key: "gotoLogin",
        value: function gotoLogin() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/request.ts":
  /*!****************************!*\
    !*** ./src/app/request.ts ***!
    \****************************/

  /*! exports provided: Request */

  /***/
  function srcAppRequestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Request", function () {
      return Request;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Request = function Request() {
      _classCallCheck(this, Request);
    };
    /***/

  },

  /***/
  "./src/app/results/results.component.css":
  /*!***********************************************!*\
    !*** ./src/app/results/results.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppResultsResultsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* button{\n  border-radius: 4px;\n  background-color: black;\n  border: none;\n  color: white;\n  text-align: center;\n  font-size: 13px;\n  padding: 7px;\n  width: 100px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\ndiv.css{\ntext-align:center;\n\n} */\n.register{\n      background: -webkit-linear-gradient(left, #2a8080, #2f4f4f);\n    margin-top: 3%;\n    padding: 3%;\n}\n.register-left{\n    text-align: center;\n    color: #fff;\n    margin-top: 4%;\n}\n.register-left input{\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    width: 60%;\n    background: #f8f9fa;\n    font-weight: bold;\n    color: #383d41;\n    margin-top: 30%;\n    margin-bottom: 3%;\n    cursor: pointer;\n}\n.register-right{\n    background: #f8f9fa;\n    border-top-left-radius: 10% 50%;\n    border-bottom-left-radius: 10% 50%;\n}\n.register-left img{\n    margin-top: 15%;\n    margin-bottom: 5%;\n    width: 25%;\n    -webkit-animation: mover 2s infinite  alternate;\n    animation: mover 1s infinite  alternate;\n}\n@-webkit-keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n@keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n.register-left p{\n    font-weight: lighter;\n    padding: 12%;\n    margin-top: -9%;\n}\n.register .register-form{\n    padding: 10%;\n    margin-top: 10%;\n}\n.btnRegister{\n    float: right;\n    margin-top: 10%;\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    background:  #2f4f4f;\n    color: #fff;\n    font-weight: 600;\n    width: 50%;\n    cursor: pointer;\n    size:10px\n}\n.register .nav-tabs{\n    margin-top: 3%;\n    border: none;\n    background: #0062cc;\n    border-radius: 1.5rem;\n    width: 28%;\n    float: right;\n}\n.register .nav-tabs .nav-link{\n    padding: 2%;\n    height: 34px;\n    font-weight: 600;\n    color: #fff;\n    border-top-right-radius: 1.5rem;\n    border-bottom-right-radius: 1.5rem;\n}\n.register .nav-tabs .nav-link:hover{\n    border: none;\n}\n.register .nav-tabs .nav-link.active{\n    width: 100px;\n    color: #0062cc;\n    border: 2px solid #0062cc;\n    border-top-left-radius: 1.5rem;\n    border-bottom-left-radius: 1.5rem;\n}\n.register-heading{\n    text-align: center;\n    margin-top: 8%;\n    margin-bottom: -15%;\n    color: #495057;\n}\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSDtNQUNNLDJEQUEyRDtJQUM3RCxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDViwrQ0FBK0M7SUFDL0MsdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxLQUFLLHdCQUF3QixFQUFFO0lBQy9CLE9BQU8sNEJBQTRCLEVBQUU7QUFDekM7QUFDQTtJQUNJLEtBQUssd0JBQXdCLEVBQUU7SUFDL0IsT0FBTyw0QkFBNEIsRUFBRTtBQUN6QztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtJQUNmO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtHQUNHLGVBQWU7R0FDZixPQUFPO0dBQ1AsU0FBUztHQUNULFdBQVc7R0FDWCxTQUFTO0dBQ1QsdUJBQXVCO0dBQ3ZCLFlBQVk7R0FDWixnQkFBZ0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJ1dHRvbntcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA3cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG59XG5kaXYuY3Nze1xudGV4dC1hbGlnbjpjZW50ZXI7XG5cbn0gKi9cbi5yZWdpc3RlcntcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMyYTgwODAsICMyZjRmNGYpO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIHBhZGRpbmc6IDMlO1xufVxuLnJlZ2lzdGVyLWxlZnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDQlO1xufVxuLnJlZ2lzdGVyLWxlZnQgaW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMzODNkNDE7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZWdpc3Rlci1yaWdodHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAlIDUwJTtcbn1cbi5yZWdpc3Rlci1sZWZ0IGltZ3tcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgd2lkdGg6IDI1JTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgMnMgaW5maW5pdGUgIGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlICBhbHRlcm5hdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZXIge1xuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cbn1cbkBrZXlmcmFtZXMgbW92ZXIge1xuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cbn1cbi5yZWdpc3Rlci1sZWZ0IHB7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgcGFkZGluZzogMTIlO1xuICAgIG1hcmdpbi10b3A6IC05JTtcbn1cbi5yZWdpc3RlciAucmVnaXN0ZXItZm9ybXtcbiAgICBwYWRkaW5nOiAxMCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuLmJ0blJlZ2lzdGVye1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kOiAgIzJmNGY0ZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHNpemU6MTBweFxufVxuLnJlZ2lzdGVyIC5uYXYtdGFic3tcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzAwNjJjYztcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgd2lkdGg6IDI4JTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGlua3tcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxLjVyZW07XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlcntcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGNvbG9yOiAjMDA2MmNjO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDYyY2M7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcbn1cbi5yZWdpc3Rlci1oZWFkaW5ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTUlO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xufVxuLmZvb3RlciB7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICBsZWZ0OiAwO1xuICAgYm90dG9tOiAwO1xuICAgd2lkdGg6IDEwMCU7XG4gICBoZWlnaHQ6MyU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG59ICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/results/results.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/results/results.component.ts ***!
    \**********************************************/

  /*! exports provided: ResultsComponent */

  /***/
  function srcAppResultsResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultsComponent", function () {
      return ResultsComponent;
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


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../transaction */
    "./src/app/transaction.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/authentication.service */
    "./src/app/authentication.service.ts");

    var ResultsComponent = /*#__PURE__*/function () {
      function ResultsComponent(authenticationService, service, router) {
        _classCallCheck(this, ResultsComponent);

        this.authenticationService = authenticationService;
        this.service = service;
        this.router = router;
        this.transaction = new _transaction__WEBPACK_IMPORTED_MODULE_3__["Transaction"]();
      }

      _createClass(ResultsComponent, [{
        key: "transac",
        value: function transac() {
          var _this9 = this;

          this.service.depotransaction(this.transaction).subscribe(function (res) {
            return _this9.gotoHome();
          });
        }
      }, {
        key: "withdrawtransac",
        value: function withdrawtransac() {
          var _this10 = this;

          this.service.withdrawtransaction(this.transaction).subscribe(function (res) {
            return _this10.gotoHome();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/icin-bank']);
        }
      }, {
        key: "gotoHome",
        value: function gotoHome() {
          this.transaction = new _transaction__WEBPACK_IMPORTED_MODULE_3__["Transaction"]();
          this.router.navigate(['/home']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResultsComponent;
    }();

    ResultsComponent.ctorParameters = function () {
      return [{
        type: _app_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-results',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./results.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/results/results.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./results.component.css */
      "./src/app/results/results.component.css"))["default"]]
    })], ResultsComponent);
    /***/
  },

  /***/
  "./src/app/review/review.component.css":
  /*!*********************************************!*\
    !*** ./src/app/review/review.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppReviewReviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* button{\n  border-radius: 4px;\n  background-color: black;\n  border: none;\n  color: white;\n  text-align: center;\n  font-size: 13px;\n  padding: 7px;\n  width: 100px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\ndiv.css{\ntext-align:center;\n\n} */\n.register{\n      background: -webkit-linear-gradient(left, #2a8080, #2f4f4f);\n    margin-top: 3%;\n    padding: 3%;\n}\n.register-left{\n    text-align: center;\n    color: #fff;\n    margin-top: 4%;\n}\n.register-left input{\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    width: 60%;\n    background: #f8f9fa;\n    font-weight: bold;\n    color: #383d41;\n    margin-top: 30%;\n    margin-bottom: 3%;\n    cursor: pointer;\n}\n.register-right{\n    background: #f8f9fa;\n    border-top-left-radius: 10% 50%;\n    border-bottom-left-radius: 10% 50%;\n}\n.register-left img{\n    margin-top: 15%;\n    margin-bottom: 5%;\n    width: 25%;\n    -webkit-animation: mover 2s infinite  alternate;\n    animation: mover 1s infinite  alternate;\n}\n@-webkit-keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n@keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n.register-left p{\n    font-weight: lighter;\n    padding: 12%;\n    margin-top: -9%;\n}\n.register .register-form{\n    padding: 10%;\n    margin-top: 10%;\n}\n.btnRegister{\n    float: right;\n    margin-top: 10%;\n    border: none;\n    border-radius: 1.5rem;\n    padding: 5%;\n    background:  #2f4f4f;\n    color: #fff;\n    font-weight: 600;\n    width: 50%;\n    cursor: pointer;\n    size:10px\n    \n}\n.register .nav-tabs{\n    margin-top: 3%;\n    border: none;\n    background: #0062cc;\n    border-radius: 1.5rem;\n    width: 28%;\n    float: right;\n}\n.register .nav-tabs .nav-link{\n    padding: 2%;\n    height: 34px;\n    font-weight: 600;\n    color: #fff;\n    border-top-right-radius: 1.5rem;\n    border-bottom-right-radius: 1.5rem;\n}\n.register .nav-tabs .nav-link:hover{\n    border: none;\n}\n.register .nav-tabs .nav-link.active{\n    width: 100px;\n    color: #0062cc;\n    border: 2px solid #0062cc;\n    border-top-left-radius: 1.5rem;\n    border-bottom-left-radius: 1.5rem;\n}\n.register-heading{\n    text-align: center;\n    margin-top: 8%;\n    margin-bottom: -15%;\n    color: #495057;\n}\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBQ0g7TUFDTSwyREFBMkQ7SUFDN0QsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsK0NBQStDO0lBQy9DLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksS0FBSyx3QkFBd0IsRUFBRTtJQUMvQixPQUFPLDRCQUE0QixFQUFFO0FBQ3pDO0FBQ0E7SUFDSSxLQUFLLHdCQUF3QixFQUFFO0lBQy9CLE9BQU8sNEJBQTRCLEVBQUU7QUFDekM7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7SUFDZjs7QUFFSjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0dBQ0csZUFBZTtHQUNmLE9BQU87R0FDUCxTQUFTO0dBQ1QsV0FBVztHQUNYLFNBQVM7R0FDVCx1QkFBdUI7R0FDdkIsWUFBWTtHQUNaLGdCQUFnQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJ1dHRvbntcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA3cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG59XG5kaXYuY3Nze1xudGV4dC1hbGlnbjpjZW50ZXI7XG5cbn0gKi9cbi5yZWdpc3RlcntcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMyYTgwODAsICMyZjRmNGYpO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIHBhZGRpbmc6IDMlO1xufVxuLnJlZ2lzdGVyLWxlZnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDQlO1xufVxuLnJlZ2lzdGVyLWxlZnQgaW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMzODNkNDE7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZWdpc3Rlci1yaWdodHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAlIDUwJTtcbn1cbi5yZWdpc3Rlci1sZWZ0IGltZ3tcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgd2lkdGg6IDI1JTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgMnMgaW5maW5pdGUgIGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlICBhbHRlcm5hdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZXIge1xuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cbn1cbkBrZXlmcmFtZXMgbW92ZXIge1xuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cbn1cbi5yZWdpc3Rlci1sZWZ0IHB7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgcGFkZGluZzogMTIlO1xuICAgIG1hcmdpbi10b3A6IC05JTtcbn1cbi5yZWdpc3RlciAucmVnaXN0ZXItZm9ybXtcbiAgICBwYWRkaW5nOiAxMCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuLmJ0blJlZ2lzdGVye1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBiYWNrZ3JvdW5kOiAgIzJmNGY0ZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHNpemU6MTBweFxuICAgIFxufVxuLnJlZ2lzdGVyIC5uYXYtdGFic3tcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzAwNjJjYztcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgd2lkdGg6IDI4JTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGlua3tcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxLjVyZW07XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlcntcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGNvbG9yOiAjMDA2MmNjO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDYyY2M7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcbn1cbi5yZWdpc3Rlci1oZWFkaW5ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTUlO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xufVxuLmZvb3RlciB7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICBsZWZ0OiAwO1xuICAgYm90dG9tOiAwO1xuICAgd2lkdGg6IDEwMCU7XG4gICBoZWlnaHQ6MyU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG59ICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/review/review.component.ts":
  /*!********************************************!*\
    !*** ./src/app/review/review.component.ts ***!
    \********************************************/

  /*! exports provided: ReviewComponent */

  /***/
  function srcAppReviewReviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewComponent", function () {
      return ReviewComponent;
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


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _transfer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../transfer */
    "./src/app/transfer.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/authentication.service */
    "./src/app/authentication.service.ts");

    var ReviewComponent = /*#__PURE__*/function () {
      function ReviewComponent(authenticationService, service, router) {
        _classCallCheck(this, ReviewComponent);

        this.authenticationService = authenticationService;
        this.service = service;
        this.router = router;
        this.transfer = new _transfer__WEBPACK_IMPORTED_MODULE_3__["Transfer"]();
      }

      _createClass(ReviewComponent, [{
        key: "transferamt",
        value: function transferamt() {
          var _this11 = this;

          this.service.transfer(this.transfer).subscribe(function (res) {
            return _this11.gotoHome();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/icin-bank']);
        }
      }, {
        key: "gotoHome",
        value: function gotoHome() {
          this.transfer = new _transfer__WEBPACK_IMPORTED_MODULE_3__["Transfer"]();
          this.router.navigate(['/home']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReviewComponent;
    }();

    ReviewComponent.ctorParameters = function () {
      return [{
        type: _app_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-review',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review.component.css */
      "./src/app/review/review.component.css"))["default"]]
    })], ReviewComponent);
    /***/
  },

  /***/
  "./src/app/saving/saving.component.css":
  /*!*********************************************!*\
    !*** ./src/app/saving/saving.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSavingSavingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table.dataTable thead .sorting:after,\ntable.dataTable thead .sorting:before,\ntable.dataTable thead .sorting_asc:after,\ntable.dataTable thead .sorting_asc:before,\ntable.dataTable thead .sorting_asc_disabled:after,\ntable.dataTable thead .sorting_asc_disabled:before,\ntable.dataTable thead .sorting_desc:after,\ntable.dataTable thead .sorting_desc:before,\ntable.dataTable thead .sorting_desc_disabled:after,\ntable.dataTable thead .sorting_desc_disabled:before {\nbottom: .5em;\n}\n\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F2aW5nL3NhdmluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBVUEsWUFBWTtBQUNaOztBQUVBO0dBQ0csZUFBZTtHQUNmLE9BQU87R0FDUCxTQUFTO0dBQ1QsV0FBVztHQUNYLFNBQVM7R0FDVCx1QkFBdUI7R0FDdkIsWUFBWTtHQUNaLGdCQUFnQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NhdmluZy9zYXZpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZzphZnRlcixcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZzpiZWZvcmUsXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjOmFmdGVyLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYzpiZWZvcmUsXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjX2Rpc2FibGVkOmFmdGVyLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzY19kaXNhYmxlZDpiZWZvcmUsXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzphZnRlcixcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjOmJlZm9yZSxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjX2Rpc2FibGVkOmFmdGVyLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQ6YmVmb3JlIHtcbmJvdHRvbTogLjVlbTtcbn1cblxuLmZvb3RlciB7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICBsZWZ0OiAwO1xuICAgYm90dG9tOiAwO1xuICAgd2lkdGg6IDEwMCU7XG4gICBoZWlnaHQ6MyU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG59ICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/saving/saving.component.ts":
  /*!********************************************!*\
    !*** ./src/app/saving/saving.component.ts ***!
    \********************************************/

  /*! exports provided: SavingComponent */

  /***/
  function srcAppSavingSavingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavingComponent", function () {
      return SavingComponent;
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


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _app_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SavingComponent = /*#__PURE__*/function () {
      function SavingComponent(authenticationService, router, service) {
        _classCallCheck(this, SavingComponent);

        this.authenticationService = authenticationService;
        this.router = router;
        this.service = service;
      }

      _createClass(SavingComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/icin-bank']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.service.getTransfers().subscribe(function (res) {
            _this12.transfers = res;
          });
          this.service.getTransactions().subscribe(function (res) {
            _this12.transactions = res;
          });
        }
      }]);

      return SavingComponent;
    }();

    SavingComponent.ctorParameters = function () {
      return [{
        type: _app_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    SavingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-saving',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./saving.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/saving/saving.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./saving.component.css */
      "./src/app/saving/saving.component.css"))["default"]]
    })], SavingComponent);
    /***/
  },

  /***/
  "./src/app/savings-account.ts":
  /*!************************************!*\
    !*** ./src/app/savings-account.ts ***!
    \************************************/

  /*! exports provided: SavingsAccount */

  /***/
  function srcAppSavingsAccountTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavingsAccount", function () {
      return SavingsAccount;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SavingsAccount = function SavingsAccount() {
      _classCallCheck(this, SavingsAccount);
    };
    /***/

  },

  /***/
  "./src/app/submitquiz/submitquiz.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/submitquiz/submitquiz.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSubmitquizSubmitquizComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Ym1pdHF1aXovc3VibWl0cXVpei5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/submitquiz/submitquiz.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/submitquiz/submitquiz.component.ts ***!
    \****************************************************/

  /*! exports provided: SubmitquizComponent */

  /***/
  function srcAppSubmitquizSubmitquizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitquizComponent", function () {
      return SubmitquizComponent;
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


    var _quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../quiz */
    "./src/app/quiz.ts");
    /* harmony import */


    var _quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../quiz.service */
    "./src/app/quiz.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SubmitquizComponent = /*#__PURE__*/function () {
      function SubmitquizComponent(service, router) {
        _classCallCheck(this, SubmitquizComponent);

        this.service = service;
        this.router = router;
        this.quiz = new _quiz__WEBPACK_IMPORTED_MODULE_2__["Quiz"]();
      }

      _createClass(SubmitquizComponent, [{
        key: "updateQuiz",
        value: function updateQuiz() {
          var _this13 = this;

          this.service.updateQuiz(this.quiz).subscribe(function (res) {
            return _this13.gotoList();
          });
        }
      }, {
        key: "gotoList",
        value: function gotoList() {
          this.router.navigate(['/takequiz']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubmitquizComponent;
    }();

    SubmitquizComponent.ctorParameters = function () {
      return [{
        type: _quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SubmitquizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-submitquiz',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./submitquiz.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/submitquiz/submitquiz.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./submitquiz.component.css */
      "./src/app/submitquiz/submitquiz.component.css"))["default"]]
    })], SubmitquizComponent);
    /***/
  },

  /***/
  "./src/app/takequiz/takequiz.component.css":
  /*!*************************************************!*\
    !*** ./src/app/takequiz/takequiz.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTakequizTakequizComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* button{\n  border-radius: 4px;\n  background-color: black;\n  border: none;\n  color: white;\n  text-align: center;\n  font-size: 13px;\n  padding: 7px;\n  width: 100px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\ndiv.css{\ntext-align:center;\n\n} */\n.register{\n      background: -webkit-linear-gradient(left, #2a8080, #2f4f4f);\n    margin-top: 3%;\n    padding: 3%;\n}\n.register-left{\n    text-align: center;\n    color: #fff;\n    margin-top: 4%;\n}\n.register-left input{\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    width: 60%;\n    background: #f8f9fa;\n    font-weight: bold;\n    color: #383d41;\n    margin-top: 30%;\n    margin-bottom: 3%;\n    cursor: pointer;\n}\n.register-right{\n    background: #f8f9fa;\n    border-top-left-radius: 10% 50%;\n    border-bottom-left-radius: 10% 50%;\n}\n.register-left img{\n    margin-top: 15%;\n    margin-bottom: 5%;\n    width: 25%;\n    -webkit-animation: mover 2s infinite  alternate;\n    animation: mover 1s infinite  alternate;\n}\n@-webkit-keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n@keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n.register-left p{\n    font-weight: lighter;\n    padding: 12%;\n    margin-top: -9%;\n}\n.register .register-form{\n    padding: 10%;\n    margin-top: 10%;\n}\n.btnRegister{\n    float: right;\n    margin-top: 10%;\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    background:  #2f4f4f;\n    color: #fff;\n    font-weight: 600;\n    width: 50%;\n    cursor: pointer;\n}\n.register .nav-tabs{\n    margin-top: 3%;\n    border: none;\n    background: #0062cc;\n    border-radius: 1.5rem;\n    width: 28%;\n    float: right;\n}\n.register .nav-tabs .nav-link{\n    padding: 2%;\n    height: 34px;\n    font-weight: 600;\n    color: #fff;\n    border-top-right-radius: 1.5rem;\n    border-bottom-right-radius: 1.5rem;\n}\n.register .nav-tabs .nav-link:hover{\n    border: none;\n}\n.register .nav-tabs .nav-link.active{\n    width: 100px;\n    color: #0062cc;\n    border: 2px solid #0062cc;\n    border-top-left-radius: 1.5rem;\n    border-bottom-left-radius: 1.5rem;\n}\n.register-heading{\n    text-align: center;\n    margin-top: 8%;\n    margin-bottom: -15%;\n    color: #495057;\n}\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFrZXF1aXovdGFrZXF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUNIO01BQ00sMkRBQTJEO0lBQzdELGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLCtDQUErQztJQUMvQyx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLEtBQUssd0JBQXdCLEVBQUU7SUFDL0IsT0FBTyw0QkFBNEIsRUFBRTtBQUN6QztBQUNBO0lBQ0ksS0FBSyx3QkFBd0IsRUFBRTtJQUMvQixPQUFPLDRCQUE0QixFQUFFO0FBQ3pDO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7R0FDRyxlQUFlO0dBQ2YsT0FBTztHQUNQLFNBQVM7R0FDVCxXQUFXO0dBQ1gsU0FBUztHQUNULHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osZ0JBQWdCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdGFrZXF1aXovdGFrZXF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJ1dHRvbntcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA3cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG59XG5kaXYuY3Nze1xudGV4dC1hbGlnbjpjZW50ZXI7XG5cbn0gKi9cbi5yZWdpc3RlcntcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMyYTgwODAsICMyZjRmNGYpO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIHBhZGRpbmc6IDMlO1xufVxuLnJlZ2lzdGVyLWxlZnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDQlO1xufVxuLnJlZ2lzdGVyLWxlZnQgaW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMzODNkNDE7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZWdpc3Rlci1yaWdodHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAlIDUwJTtcbn1cbi5yZWdpc3Rlci1sZWZ0IGltZ3tcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgd2lkdGg6IDI1JTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgMnMgaW5maW5pdGUgIGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlICBhbHRlcm5hdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZXIge1xuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cbn1cbkBrZXlmcmFtZXMgbW92ZXIge1xuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cbn1cbi5yZWdpc3Rlci1sZWZ0IHB7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgcGFkZGluZzogMTIlO1xuICAgIG1hcmdpbi10b3A6IC05JTtcbn1cbi5yZWdpc3RlciAucmVnaXN0ZXItZm9ybXtcbiAgICBwYWRkaW5nOiAxMCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuLmJ0blJlZ2lzdGVye1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kOiAgIzJmNGY0ZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlZ2lzdGVyIC5uYXYtdGFic3tcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzAwNjJjYztcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgd2lkdGg6IDI4JTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGlua3tcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxLjVyZW07XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlcntcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGNvbG9yOiAjMDA2MmNjO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDYyY2M7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcbn1cbi5yZWdpc3Rlci1oZWFkaW5ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTUlO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xufVxuLmZvb3RlciB7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICBsZWZ0OiAwO1xuICAgYm90dG9tOiAwO1xuICAgd2lkdGg6IDEwMCU7XG4gICBoZWlnaHQ6MyU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG59ICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/takequiz/takequiz.component.ts":
  /*!************************************************!*\
    !*** ./src/app/takequiz/takequiz.component.ts ***!
    \************************************************/

  /*! exports provided: TakequizComponent */

  /***/
  function srcAppTakequizTakequizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TakequizComponent", function () {
      return TakequizComponent;
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


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../request */
    "./src/app/request.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/authentication.service */
    "./src/app/authentication.service.ts");

    var TakequizComponent = /*#__PURE__*/function () {
      function TakequizComponent(authenticationService, service, router) {
        _classCallCheck(this, TakequizComponent);

        this.authenticationService = authenticationService;
        this.service = service;
        this.router = router;
        this.request = new _request__WEBPACK_IMPORTED_MODULE_3__["Request"]();
      }

      _createClass(TakequizComponent, [{
        key: "sendReq",
        value: function sendReq() {
          var _this14 = this;

          this.service.requestT(this.request).subscribe(function (res) {
            return _this14.gotoHome();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/icin-bank']);
        }
      }, {
        key: "gotoHome",
        value: function gotoHome() {
          this.router.navigate(['/home']);
          this.request = new _request__WEBPACK_IMPORTED_MODULE_3__["Request"]();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TakequizComponent;
    }();

    TakequizComponent.ctorParameters = function () {
      return [{
        type: _app_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    TakequizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-takequiz',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./takequiz.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/takequiz/takequiz.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./takequiz.component.css */
      "./src/app/takequiz/takequiz.component.css"))["default"]]
    })], TakequizComponent);
    /***/
  },

  /***/
  "./src/app/transaction.ts":
  /*!********************************!*\
    !*** ./src/app/transaction.ts ***!
    \********************************/

  /*! exports provided: Transaction */

  /***/
  function srcAppTransactionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Transaction", function () {
      return Transaction;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Transaction = function Transaction() {
      _classCallCheck(this, Transaction);
    };
    /***/

  },

  /***/
  "./src/app/transfer.ts":
  /*!*****************************!*\
    !*** ./src/app/transfer.ts ***!
    \*****************************/

  /*! exports provided: Transfer */

  /***/
  function srcAppTransferTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Transfer", function () {
      return Transfer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Transfer = function Transfer() {
      _classCallCheck(this, Transfer);
    };
    /***/

  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(http, authService) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.authService = authService;
        this.url = "http://localhost:8080/bankbackend/registration";
        this.getallusersurl = "http://localhost:8080/bankbackend/getallusers";
        this.transferUrl = "http://localhost:8080/bankbackend/toSomeoneElse";
        this.depositUrl = "http://localhost:8080/bankbackend/deposit";
        this.withdrawUrl = "http://localhost:8080/bankbackend/withdraw";
        this.requestUrl = "http://localhost:8080/bankbackend/request";
        this.getAllTransfers = "http://localhost:8080/bankbackend/getalltransfers";
        this.getAllTransactions = "http://localhost:8080/bankbackend/getalltransaction";
        this.balanceUrl = "http://localhost:8080/bankbackend/savingsAccount/accountBalance";
        this.getUserProfile = "http://localhost:8080/bankbackend/userdetails";
        this.getSavingsAccountUrl = "http://localhost:8080/bankbackend/getSavingsAccount";
      }

      _createClass(UserService, [{
        key: "adduser",
        value: function adduser(user) {
          return this.http.post(this.url, user);
        }
      }, {
        key: "transfer",
        value: function transfer(_transfer) {
          var currentUser = this.authService.currentUserValue;
          console.log(currentUser);
          var opts = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("recipientAccountNumber", _transfer.recipientAccountNumber).set("transferAmount", _transfer.transferAmount).set("recipient", _transfer.recipient).set("username", currentUser.username);
          return this.http.post(this.transferUrl, opts, {
            responseType: "text"
          });
        }
      }, {
        key: "depotransaction",
        value: function depotransaction(transaction) {
          var currentUser = this.authService.currentUserValue;
          console.log(currentUser);
          var opts = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("amount", transaction.depositAmount).set("username", currentUser.username);
          return this.http.post(this.depositUrl, opts, {
            responseType: "text"
          });
        }
      }, {
        key: "withdrawtransaction",
        value: function withdrawtransaction(transaction) {
          var currentUser = this.authService.currentUserValue;
          console.log(currentUser);
          var opts = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("amount", transaction.withdrawAmount).set("username", currentUser.username);
          return this.http.post(this.withdrawUrl, opts, {
            responseType: "text"
          });
        }
      }, {
        key: "requestT",
        value: function requestT(request) {
          var currentUser = this.authService.currentUserValue;
          console.log(currentUser);
          var opts = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("requestType", request.requestType).set("requestDescription", request.requestDes).set("username", currentUser.username);
          return this.http.post(this.requestUrl, opts, {
            responseType: "text"
          });
        }
      }, {
        key: "getTransfers",
        value: function getTransfers() {
          var currentUser = this.authService.currentUserValue;
          console.log(currentUser);
          var opts = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("username", currentUser.username);
          return this.http.get(this.getAllTransfers, {
            params: opts
          });
        }
      }, {
        key: "getTransactions",
        value: function getTransactions() {
          var currentUser = this.authService.currentUserValue;
          console.log(currentUser);
          var opts = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("username", currentUser.username);
          return this.http.get(this.getAllTransactions, {
            params: opts
          });
        }
      }, {
        key: "getAccountBalance",
        value: function getAccountBalance() {
          var currentUser = this.authService.currentUserValue;
          var opts = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("username", currentUser.username);
          return this.http.get(this.balanceUrl, {
            params: opts
          });
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var currentUser = this.authService.currentUserValue;
          var opts = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("username", currentUser.username);
          return this.http.get(this.getUserProfile, {
            params: opts
          }); // console.log(this.userdetails)
          // return this.userdetails;
        }
      }, {
        key: "getSavingsAccount",
        value: function getSavingsAccount() {
          var currentUser = this.authService.currentUserValue;
          var opts = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("username", currentUser.username);
          return this.http.get(this.getSavingsAccountUrl, {
            params: opts
          });
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.getallusersurl);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/user.ts":
  /*!*************************!*\
    !*** ./src/app/user.ts ***!
    \*************************/

  /*! exports provided: User */

  /***/
  function srcAppUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/userdetails.ts":
  /*!********************************!*\
    !*** ./src/app/userdetails.ts ***!
    \********************************/

  /*! exports provided: Userdetails */

  /***/
  function srcAppUserdetailsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Userdetails", function () {
      return Userdetails;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Userdetails = function Userdetails() {
      _classCallCheck(this, Userdetails);
    };
    /***/

  },

  /***/
  "./src/app/userdetails/userdetails.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/userdetails/userdetails.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserdetailsUserdetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table.dataTable thead .sorting:after,\ntable.dataTable thead .sorting:before,\ntable.dataTable thead .sorting_asc:after,\ntable.dataTable thead .sorting_asc:before,\ntable.dataTable thead .sorting_asc_disabled:after,\ntable.dataTable thead .sorting_asc_disabled:before,\ntable.dataTable thead .sorting_desc:after,\ntable.dataTable thead .sorting_desc:before,\ntable.dataTable thead .sorting_desc_disabled:after,\ntable.dataTable thead .sorting_desc_disabled:before {\nbottom: .5em;\n}\n\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height:3%;\n   background-color: black;\n   color: white;\n   text-align: left;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVVBLFlBQVk7QUFDWjs7QUFFQTtHQUNHLGVBQWU7R0FDZixPQUFPO0dBQ1AsU0FBUztHQUNULFdBQVc7R0FDWCxTQUFTO0dBQ1QsdUJBQXVCO0dBQ3ZCLFlBQVk7R0FDWixnQkFBZ0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyZGV0YWlscy91c2VyZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmFmdGVyLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmJlZm9yZSxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2M6YWZ0ZXIsXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjOmJlZm9yZSxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2NfZGlzYWJsZWQ6YWZ0ZXIsXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjX2Rpc2FibGVkOmJlZm9yZSxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjOmFmdGVyLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2M6YmVmb3JlLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQ6YWZ0ZXIsXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZDpiZWZvcmUge1xuYm90dG9tOiAuNWVtO1xufVxuXG4uZm9vdGVyIHtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGxlZnQ6IDA7XG4gICBib3R0b206IDA7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDozJTtcbiAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgY29sb3I6IHdoaXRlO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbn0gIl19 */";
    /***/
  },

  /***/
  "./src/app/userdetails/userdetails.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/userdetails/userdetails.component.ts ***!
    \******************************************************/

  /*! exports provided: UserdetailsComponent */

  /***/
  function srcAppUserdetailsUserdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsComponent", function () {
      return UserdetailsComponent;
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


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/authentication.service */
    "./src/app/authentication.service.ts");

    var UserdetailsComponent = /*#__PURE__*/function () {
      function UserdetailsComponent(authenticationService, adminService, router, service) {
        _classCallCheck(this, UserdetailsComponent);

        this.authenticationService = authenticationService;
        this.adminService = adminService;
        this.router = router;
        this.service = service;
      }

      _createClass(UserdetailsComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/icin-bank']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.adminService.getAll().subscribe(function (res) {
            _this15.users = res;
          });
        }
      }, {
        key: "enable",
        value: function enable($event, uId) {
          var _this16 = this;

          $event.target.disabled = true;
          this.adminService.enableUserAccount(uId).subscribe(function (res) {
            _this16.goToHome;
          });
        }
      }, {
        key: "disable",
        value: function disable($event, uId) {
          var _this17 = this;

          $event.target.disabled = true;
          this.adminService.disableUserAccount(uId).subscribe(function (res) {
            _this17.goToHome;
          });
        }
      }, {
        key: "findSavingsaccount",
        value: function findSavingsaccount(username) {
          var _this18 = this;

          return this.adminService.getSavingsAccount(username).subscribe(function (res) {
            _this18.savingsaccount = res;
          });
        }
      }, {
        key: "goToHome",
        value: function goToHome() {
          this.router.navigate(['/userdetails']);
        }
      }]);

      return UserdetailsComponent;
    }();

    UserdetailsComponent.ctorParameters = function () {
      return [{
        type: _app_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    UserdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userdetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userdetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/userdetails/userdetails.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userdetails.component.css */
      "./src/app/userdetails/userdetails.component.css"))["default"]]
    })], UserdetailsComponent);
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
      production: false
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\HP-PC\Downloads\OnlineBank-master\OnlineBank-master\quizz\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map