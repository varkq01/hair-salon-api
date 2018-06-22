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
var global_service_1 = require("src/app/core/global.service");
var rxjs_1 = require("rxjs");
var SessionService = /** @class */ (function () {
    function SessionService(global) {
        this.global = global;
        this.userChanged = new rxjs_1.Subject();
    }
    SessionService.prototype.login = function (email, password) {
        return this.global.post('/users/login', { email: email, password: password }, true, {
            observe: 'response'
        });
    };
    SessionService.prototype.logout = function () {
        var _this = this;
        return this.global.delete('/users/logout').pipe(function (response) {
            _this.global.clearSession();
            return response;
        }, function (err) {
            _this.global.clearSession();
            return rxjs_1.Observable.throw(err);
        });
    };
    SessionService.prototype.register = function (user) {
        return this.global.post('/users', user, true, { observe: 'response' });
    };
    SessionService.prototype.resetPassword = function (email) {
        return this.global.post('/users/reset', { email: email });
    };
    SessionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [global_service_1.GlobalService])
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map