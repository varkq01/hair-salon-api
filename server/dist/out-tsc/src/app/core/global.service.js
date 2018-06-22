"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var GlobalService = /** @class */ (function () {
    function GlobalService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000/api';
        this.pendingRequests = [];
        this.loadingData = new rxjs_1.Subject();
    }
    GlobalService.prototype.get = function (url, options) {
        this.pendingRequests.push(url);
        return this.http.get("" + this.apiUrl + url, options || { headers: this.getHeaders() });
    };
    GlobalService.prototype.post = function (url, body, useOptions, options) {
        if (useOptions === void 0) { useOptions = false; }
        this.pendingRequests.push(url);
        var opt;
        if (useOptions) {
            opt = options || { headers: this.getHeaders() };
        }
        return this.http.post("" + this.apiUrl + url, body, opt);
    };
    GlobalService.prototype.put = function (url, body, options) {
        this.pendingRequests.push(url);
        return this.http.put("" + this.apiUrl + url, options || { headers: this.getHeaders() });
    };
    GlobalService.prototype.delete = function (url, options) {
        this.pendingRequests.push(url);
        return this.http.delete("" + this.apiUrl + url, options || { headers: this.getHeaders() });
    };
    GlobalService.prototype.getHeaders = function () {
        var token = this.getAuthToken();
        var headers = new http_1.HttpHeaders({
            'x-auth': token
        });
        return headers;
    };
    GlobalService.prototype.setUser = function (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
    };
    GlobalService.prototype.getUser = function () {
        var userString = sessionStorage.getItem('user');
        try {
            return JSON.parse(userString);
        }
        catch (e) {
            return undefined;
        }
    };
    GlobalService.prototype.getAuthToken = function () {
        return sessionStorage.getItem('x-auth');
    };
    GlobalService.prototype.clearSession = function () {
        sessionStorage.removeItem('x-auth');
        sessionStorage.removeItem('user');
    };
    GlobalService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GlobalService);
    return GlobalService;
}());
exports.GlobalService = GlobalService;
//# sourceMappingURL=global.service.js.map