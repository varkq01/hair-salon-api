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
var rxjs_1 = require("rxjs");
var AlertService = /** @class */ (function () {
    function AlertService() {
        this.alertAdded = new rxjs_1.Subject();
    }
    AlertService.prototype.addAlert = function (message, type) {
        this.alertAdded.next({ message: message, type: type });
    };
    AlertService.prototype.addSuccessAlert = function (message) {
        this.alertAdded.next({ message: message, type: 'success' });
    };
    AlertService.prototype.addWarningAlert = function (message) {
        this.alertAdded.next({ message: message, type: 'warning' });
    };
    AlertService.prototype.addDangerAlert = function (message) {
        this.alertAdded.next({ message: message, type: 'danger' });
    };
    AlertService.prototype.addInfoAlert = function (message) {
        this.alertAdded.next({ message: message, type: 'info' });
    };
    AlertService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;
//# sourceMappingURL=alert.service.js.map