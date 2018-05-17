(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add_form{\r\n    border: 3px solid rgb(86, 151, 86);\r\n    padding: 30px;\r\n}\r\n\r\ninput{\r\n    margin: 5px;\r\n}\r\n\r\n.error{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add_form\">\n  <h3><a href=\"/\">Home</a></h3>\n  <h3>Add a new author: </h3>\n  <div class=\"add_box\">\n    <form (submit)=\"addAuthor()\" #formData=\"ngForm\">\n      <h4>Name : </h4>\n      <input \n        type=\"text\" \n        name=\"author.name\"\n        required\n        minlength=\"4\"\n        [(ngModel)]=\"author.name\"\n        #authName=\"ngModel\"\n      />\n      <br>\n      <div *ngIf=\"authName.touched && authName.invalid && authName.value.length > 0\">\n          <h6 *ngIf=\"authName.errors['required']\" class=\"error\">\n            Author name is required.\n          </h6>\n          <h6 *ngIf=\"authName.errors['minlength']\" class=\"error\">\n            Author name must be at least 4 characters.\n          </h6>\n        \n      </div>\n      <input [disabled]=\"formData.invalid\" type=\"submit\" value=\"Submit\">\n      <button [routerLink]=\"['/']\">Cancel</button>\n    </form>\n    \n    <div *ngIf=\"message\">\n        <h6 class=\"error\" *ngFor=\"let m of message\">{{m}}</h6>\n    </div>\n  </div>  \n</div>\n\n"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddComponent = /** @class */ (function () {
    function AddComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.author = { "name": "" };
        this.message = [];
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.addAuthor = function () {
        var _this = this;
        var observable = this._httpService.addAuthor(this.author);
        observable.subscribe(function (data) {
            if (data['error']) {
                if (data['error'].code === 11000) {
                    _this.message = ["That author already exists"];
                }
                else {
                    _this.message = [];
                    for (var item in data['error'].errors) {
                        _this.message.push(data['error'].errors[item].message);
                    }
                }
                console.log(data['error']);
            }
            else {
                _this._router.navigateByUrl('/');
            }
            console.log("got the add data back", data);
            _this.author = { "name": "" };
        });
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _display_display_component__WEBPACK_IMPORTED_MODULE_2__["DisplayComponent"] },
    { path: 'new', component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"] },
    { path: 'quotes/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] },
    { path: 'write/:id', component: _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__["QuoteComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: '**', component: _display_display_component__WEBPACK_IMPORTED_MODULE_2__["DisplayComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root{\r\n    border: 3px solid rgb(255, 136, 0);\r\n    padding: 30px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"root\" style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n\n\n</div>\n\n<router-outlet></router-outlet>  \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Dojo Quote Ranks';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _display_display_component__WEBPACK_IMPORTED_MODULE_7__["DisplayComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"],
                _quote_quote_component__WEBPACK_IMPORTED_MODULE_10__["QuoteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display/display.component.css":
/*!***********************************************!*\
  !*** ./src/app/display/display.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display{\r\n    border: 3px solid rgb(100, 33, 100);\r\n    padding: 30px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/display/display.component.html":
/*!************************************************!*\
  !*** ./src/app/display/display.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"display\">\n  <h3><a href=\"/new\">Add an author</a></h3>\n  <h3>We have quotes by: </h3>\n  <table class=\"table\" id=\"author_list\">\n    <tr>\n      <th>Author</th>\n      <th>Actions Available</th>\n    </tr>\n    <tr *ngFor=\"let author of authors\">\n      <td>{{author.name}}</td>\n      <td><button [routerLink]=\"['/quotes', author._id]\">View Quotes</button><button (click)=\"deleteAuthor(author)\">Delete</button></td>\n    </tr>\n  </table>  \n</div>\n\n"

/***/ }),

/***/ "./src/app/display/display.component.ts":
/*!**********************************************!*\
  !*** ./src/app/display/display.component.ts ***!
  \**********************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(_httpService) {
        this._httpService = _httpService;
        this.authors = [];
    }
    DisplayComponent.prototype.ngOnInit = function () {
        this.getAllAuthors();
    };
    DisplayComponent.prototype.getAllAuthors = function () {
        var _this = this;
        var observable = this._httpService.getAuthors();
        observable.subscribe(function (data) {
            console.log("Got all author data back", data);
            _this.authors = data['authors'];
        });
    };
    DisplayComponent.prototype.deleteAuthor = function (author) {
        var _this = this;
        console.log("this is the author obj", author);
        var observable = this._httpService.deleteAuthor(author);
        observable.subscribe(function (data) {
            console.log("got delete data back", data);
            _this.getAllAuthors();
        });
    };
    DisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display',
            template: __webpack_require__(/*! ./display.component.html */ "./src/app/display/display.component.html"),
            styles: [__webpack_require__(/*! ./display.component.css */ "./src/app/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quote_list{\r\n    border: 3px solid rgb(240, 144, 160);\r\n    padding: 30px;\r\n}\r\n\r\n.links{\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quote_list\" *ngIf=\"found\">\n  <h4 class=\"links\"><a href=\"/\">Home</a></h4>\n  <h4 class=\"links\"><a [routerLink]=\"['/write', author._id]\">Add a quote</a></h4>\n  <h3>Quotes by {{author.name}}</h3>\n  <table class=\"table\">\n    <tr>\n      <th>Quote</th>\n      <th>Votes</th>\n      <th>Created At</th>\n      <th>Actions Available</th>\n    </tr>\n    <tr *ngFor=\"let quote of author.quotes\">\n      <td>\"{{quote.quote}}\"</td>\n      <td>{{quote.vote}}</td>\n      <td>{{quote.createdAt | date : \"MMMM d yyyy h:mm a\"}}</td>\n      <td>\n        <button (click)=\"updateQuote(quote, 1)\">Vote Up</button>\n        <button (click)=\"updateQuote(quote, -1)\">Vote Down</button>\n        <button (click)=\"deleteQuote(quote)\">Delete</button>\n      </td>\n    </tr>\n  </table>\n</div>\n<div *ngIf=\"found == false\">\n  <h3>We're sorry, that author could not be found in our database. Would you like to add it?</h3>\n  <h3><a href=\"/new\">Add new author</a></h3>\n</div>\n\n  <!-- <div class=\"edit_box\">\n    <form (submit)=\"editAuthor()\" class=\"postForm\">\n      <h3>Name : </h3>\n      <input type=\"text\" name=\"author.name\" [(ngModel)]=\"author.name\" [placeholder]=\"author.name\"/>\n      <button>Cancel</button>\n      <input type=\"submit\" value=\"Submit\">\n    </form>\n    <h4 *ngIf=\"message\">{{message}}</h4>\n  </div> -->"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.author = { "name": "" };
        this.message = "";
        this.vote = { "vote": "" };
        this.found = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
            _this.getOneAuthor(_this.id);
        });
    };
    EditComponent.prototype.getOneAuthor = function (id) {
        var _this = this;
        var observable = this._httpService.getOneAuthor(id);
        observable.subscribe(function (data) {
            if (data['author']) {
                _this.found = true;
                _this.author = data['author'];
            }
            else {
                _this.found = false;
            }
            console.log("got data back from get one author", data);
        });
    };
    EditComponent.prototype.updateQuote = function (quote, val) {
        var _this = this;
        quote.vote += val;
        var observable = this._httpService.updateQuote(quote, this.id);
        observable.subscribe(function (data) {
            console.log("got data back", data);
            _this.quoteSelected = null;
            _this.getOneAuthor(_this.id);
            _this.getOneAuthor(_this.id);
        });
    };
    EditComponent.prototype.deleteQuote = function (quote) {
        var _this = this;
        var observable = this._httpService.deleteQuote(quote, this.id);
        observable.subscribe(function (data) {
            console.log("got delete data back", data);
            _this.getOneAuthor(_this.id);
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAuthors = function () {
        return this._http.get('/authors');
    };
    HttpService.prototype.getOneAuthor = function (id) {
        return this._http.get('/authors/' + id);
    };
    HttpService.prototype.addAuthor = function (newAuthor) {
        return this._http.post('/authors', newAuthor);
    };
    HttpService.prototype.editAuthor = function (updateAuthor) {
        return this._http.put('/authors/' + updateAuthor._id, updateAuthor);
    };
    HttpService.prototype.deleteAuthor = function (author) {
        return this._http.delete('/remove/' + author._id);
    };
    HttpService.prototype.addQuote = function (newQuote, authorId) {
        return this._http.put('/authors/quote/' + authorId, newQuote);
    };
    HttpService.prototype.updateQuote = function (updateQuote, authorId) {
        return this._http.put('quotes/' + authorId, updateQuote);
    };
    HttpService.prototype.deleteQuote = function (deleteQuote, authorId) {
        return this._http.delete('remove/' + authorId + '/' + deleteQuote._id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add_quote{\r\n    border: 3px solid rgb(247, 238, 113);\r\n    padding: 30px;\r\n}\r\n\r\ninput{\r\n    margin: 5px;\r\n}\r\n\r\n.error{\r\n    color: red;\r\n    margin: 5px;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/quote/quote.component.html":
/*!********************************************!*\
  !*** ./src/app/quote/quote.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add_quote\">\n  <h4><a href=\"/\">Home</a></h4>\n  <h3>Provide a quote by {{author.name}} </h3>\n  <div class=\"add_box\">\n    <form class=\"formX\" (submit)=\"addQuote()\" #formData=\"ngForm\">\n      <h3>Quote : </h3>\n      <input \n        type=\"text\" \n        name=\"quote.quote\"\n        required\n        minlength=\"4\"\n        [(ngModel)]=\"quote.quote\"\n        #quoted=\"ngModel\"/>\n      <br>\n      <div *ngIf=\"quoted.touched && quoted.invalid\">\n        <h6 *ngIf=\"quoted.errors['required']\" class=\"error\">\n          Quote is required.\n        </h6>\n        <h6 *ngIf=\"quoted.errors['minlength']\" class=\"error\">\n          Quote must be at least 4 characters.\n        </h6>\n      \n      </div>\n      <button [disabled]=\"formData.invalid\" type=\"submit\">Submit</button>\n      <button [routerLink]=\"['/quotes', author._id]\">Cancel</button>\n      \n    </form>\n    <div *ngIf=\"message\">\n      <h6 class=\"error\" *ngFor=\"let m of message\">{{m}}</h6>\n    </div>\n  </div>  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuoteComponent = /** @class */ (function () {
    function QuoteComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.author = { "name": "" };
        this.quote = { "quote": "" };
        this.message = [];
    }
    QuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getOneAuthor(_this.id);
        });
    };
    QuoteComponent.prototype.getOneAuthor = function (id) {
        var _this = this;
        var observable = this._httpService.getOneAuthor(id);
        observable.subscribe(function (data) {
            _this.author = data['author'];
            console.log("got data back from get one author", data);
        });
    };
    QuoteComponent.prototype.addQuote = function () {
        var _this = this;
        console.log("the quote to send is ", this.quote);
        var observable = this._httpService.addQuote(this.quote, this.id);
        observable.subscribe(function (data) {
            console.log("got add product data back", data);
            _this.quote = { "quote": "" };
            if (data['error']) {
                console.log(data['error'].errors);
                _this.message = [];
                for (var item in data['error'].errors) {
                    console.log("the quote error message is", data['error'].errors[item].message);
                    _this.message.push(data['error'].errors[item].message);
                }
            }
            else {
                _this._router.navigateByUrl('/quotes/' + _this.id);
            }
        });
    };
    QuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eclai\Desktop\DojoAssignments\MEAN\Angular\authors\AngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map