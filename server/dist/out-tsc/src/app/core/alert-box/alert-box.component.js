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
var alert_service_1 = require("./alert.service");
var AlertBoxComponent = /** @class */ (function () {
    function AlertBoxComponent(alertS) {
        this.alertS = alertS;
        this.alerts = [];
    }
    AlertBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertsSub = this.alertS.alertAdded.subscribe(function (alert) {
            if (_this.alerts.length === 3) {
                _this.alerts.shift();
            }
            _this.alerts.push(alert);
            setTimeout(function () { return _this.closeAlert(alert); }, 10000);
        });
    };
    AlertBoxComponent.prototype.ngOnDestroy = function () {
        this.alertsSub.unsubscribe();
    };
    AlertBoxComponent.prototype.closeAlert = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    AlertBoxComponent = __decorate([
        core_1.Component({
            selector: 'app-alert-box',
            templateUrl: './alert-box.component.html',
            styleUrls: ['./alert-box.component.scss']
        }),
        __metadata("design:paramtypes", [alert_service_1.AlertService])
    ], AlertBoxComponent);
    return AlertBoxComponent;
}());
exports.AlertBoxComponent = AlertBoxComponent;
//# sourceMappingURL=alert-box.component.js.map