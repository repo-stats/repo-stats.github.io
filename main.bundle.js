webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-packagist></app-packagist>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'repo-stats';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__packagist_packagist_component__ = __webpack_require__("../../../../../src/app/packagist/packagist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__packagist_packagist_service__ = __webpack_require__("../../../../../src/app/packagist/packagist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__packagist_packagist_component__["a" /* PackagistComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdProgressBarModule */],
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__packagist_packagist_service__["a" /* PackagistService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/packagist/packagist.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Packagist repo stats</h2>\n<form>\n    <md-input-container>\n        <input mdInput placeholder=\"Provide package name\" [(ngModel)]=\"packageName\" name=\"packageName\">\n    </md-input-container>\n\n    <md-input-container>\n        <input mdInput [mdDatepicker]=\"picker_from\" placeholder=\"Choose a start date\" [(ngModel)]=\"fromDate\" name=\"fromDate\">\n        <button mdSuffix [mdDatepickerToggle]=\"picker_from\"></button>\n        <md-datepicker #picker_from></md-datepicker>\n    </md-input-container>\n\n    <md-input-container>\n        <input mdInput [mdDatepicker]=\"picker_to\" placeholder=\"Choose a end date\" [(ngModel)]=\"toDate\" name=\"toDate\">\n        <button mdSuffix [mdDatepickerToggle]=\"picker_to\"></button>\n        <md-datepicker #picker_to></md-datepicker>\n    </md-input-container>\n\n    <md-select placeholder=\"Choose grouping\" [(ngModel)]=\"grouping\" name=\"grouping\">\n        <md-option *ngFor=\"let possibleGrouping of possibleGroupings\" [value]=\"possibleGrouping.value\">\n            {{possibleGrouping.label}}\n        </md-option>\n    </md-select>\n\n    <br>\n\n    <button md-raised-button (click)=\"check()\">Check</button>\n</form>\n\n<div *ngIf=\"poolCounter\" class=\"progress\">\n    <md-progress-bar [value]=\"(100 * poolCounter.step / poolCounter.max)\">aaa</md-progress-bar>\n    {{poolCounter.step}} of {{poolCounter.max}}\n</div>\n\n<table *ngIf=\"versions\">\n    <thead>\n        <tr>\n            <th>version</th>\n            <th>downloads</th>\n            <th>%</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let version of versions\">\n            <td>{{version.version}}</td>\n            <td>{{version.downloads}}</td>\n            <td>{{(100 * version.downloads / totalDownloads) | number:'1.2-2'}}</td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/packagist/packagist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  margin: auto; }\n  table td {\n    padding: 0 20px;\n    text-align: right; }\n\n.progress {\n  margin: 25px auto;\n  width: 250px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/packagist/packagist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__packagist_service__ = __webpack_require__("../../../../../src/app/packagist/packagist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoolCounter = (function () {
    function PoolCounter(_max) {
        this._max = _max;
        this._step = 0;
    }
    Object.defineProperty(PoolCounter.prototype, "step", {
        get: function () {
            return this._step;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolCounter.prototype, "max", {
        get: function () {
            return this._max;
        },
        enumerable: true,
        configurable: true
    });
    PoolCounter.prototype.increase = function () {
        ++this._step;
    };
    return PoolCounter;
}());
var PackagistComponent = (function () {
    function PackagistComponent(packagistService) {
        this.packagistService = packagistService;
        this.packageName = 'friendsofphp/php-cs-fixer';
        this.grouping = 'MINOR';
        this.possibleGroupings = [
            {
                value: 'MAJOR',
                label: 'MAJOR',
            },
            {
                value: 'MINOR',
                label: 'MINOR',
            },
        ];
        this.fromDate = new Date();
        this.fromDate.setMonth(this.fromDate.getMonth() - 1);
        this.fromDate.setDate(this.fromDate.getDate() - 7);
        this.toDate = new Date();
        this.toDate.setDate(this.toDate.getDate() - 7);
    }
    PackagistComponent.prototype.ngOnInit = function () {
    };
    PackagistComponent.prototype.check = function () {
        var _this = this;
        this.versions = undefined;
        this.totalDownloads = undefined;
        this.poolCounter = undefined;
        var fromDate = this.fromDate.toISOString().substring(0, 10);
        var toDate = this.toDate.toISOString().substring(0, 10);
        this.packagistService.getPackageVersions(this.packageName).subscribe(function (versions) {
            _this.poolCounter = new PoolCounter(versions.length);
            var versionsPromises = versions.map(function (version) {
                return _this.packagistService.getPackageVersionDownloads(_this.packageName, version, fromDate, toDate)
                    .map(function (downloads) {
                    return { version: version, downloads: downloads };
                })
                    .do(function (versionDownloads) {
                    if (_this.poolCounter) {
                        _this.poolCounter.increase();
                    }
                })
                    .toPromise();
            });
            Promise.all(versionsPromises)
                .then(function (versionsDownloads) {
                _this.totalDownloads = versionsDownloads.reduce(function (previous, item) { return (previous + item.downloads); }, 0);
                var versionsMap = versionsDownloads.reduce(function (container, item) {
                    var groupVersion = _this.extractGroupedVersion(item.version);
                    if (undefined === container[groupVersion]) {
                        container[groupVersion] = 0;
                    }
                    container[groupVersion] += item.downloads;
                    return container;
                }, {});
                _this.versions = Object.keys(versionsMap)
                    .sort(function (left, right) {
                    var leftParts = left.split('.');
                    var rightParts = right.split('.');
                    if (leftParts.length !== rightParts.length) {
                        return left.localeCompare(right);
                    }
                    var leftPart, rightPart;
                    do {
                        leftPart = leftParts.shift();
                        rightPart = rightParts.shift();
                    } while (leftPart === rightPart);
                    var leftInt = parseInt(leftPart, 10);
                    var rightInt = parseInt(rightPart, 10);
                    return leftInt - rightInt;
                })
                    .reverse()
                    .map(function (version) {
                    return {
                        version: version,
                        downloads: versionsMap[version],
                    };
                });
            });
        }, function (error) {
            alert('error happen');
            alert(JSON.stringify(error));
            console.error('error', error);
        });
    };
    PackagistComponent.prototype.extractGroupedVersion = function (version) {
        var groupedVersion = version.replace(/^v/, '');
        if ('MAJOR' === this.grouping) {
            groupedVersion = groupedVersion.replace(/^(\d+).*$/, '$1.*');
        }
        else {
            groupedVersion = groupedVersion.replace(/^(\d+\.\d+).*$/, '$1.*');
        }
        return groupedVersion;
    };
    return PackagistComponent;
}());
PackagistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-packagist',
        template: __webpack_require__("../../../../../src/app/packagist/packagist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/packagist/packagist.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__packagist_service__["a" /* PackagistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__packagist_service__["a" /* PackagistService */]) === "function" && _a || Object])
], PackagistComponent);

var _a;
//# sourceMappingURL=packagist.component.js.map

/***/ }),

/***/ "../../../../../src/app/packagist/packagist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackagistService = (function () {
    function PackagistService(http) {
        this.http = http;
    }
    PackagistService.prototype.getPackageVersions = function (name) {
        return this.http.get("https://packagist.org/p/" + name + ".json").map(function (data) {
            return Object.keys(data.packages[name]);
        });
    };
    PackagistService.prototype.getPackageVersionDownloads = function (name, version, from, to) {
        return this.http.get("https://packagist.org/packages/" + name + "/stats/" + version + ".json?average=daily&from=" + from + "&to=" + to).map(function (data) {
            return data.values.reduce(function (a, b) { return a + b; }, 0);
        });
    };
    return PackagistService;
}());
PackagistService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], PackagistService);

var _a;
//# sourceMappingURL=packagist.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map