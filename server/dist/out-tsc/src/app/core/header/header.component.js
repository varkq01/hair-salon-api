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
var login_component_1 = require("../login/login.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var global_service_1 = require("../global.service");
var session_service_1 = require("../session.service");
var alert_service_1 = require("../alert-box/alert.service");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, globalService, sessionService, alertService) {
        this.modalService = modalService;
        this.globalService = globalService;
        this.sessionService = sessionService;
        this.alertService = alertService;
        this.isLoggedIn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkIfLoggedIn();
        this.userChanged = this.sessionService.userChanged.subscribe(function (usr) {
            _this.checkIfLoggedIn();
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.userChanged.unsubscribe();
    };
    HeaderComponent.prototype.onLogin = function () {
        this.modalRef = this.modalService.open(login_component_1.LoginComponent, {
            centered: true
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        var _this = this;
        this.sessionService.logout().subscribe(function (resp) {
            _this.isLoggedIn = false;
            _this.alertService.addSuccessAlert('Wylogowano pomyślnie!');
            // todo emit event that user has been logged out
        });
    };
    HeaderComponent.prototype.checkIfLoggedIn = function () {
        this.user = this.globalService.getUser();
        var token = this.globalService.getAuthToken();
        if (this.user && token) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            global_service_1.GlobalService,
            session_service_1.SessionService,
            alert_service_1.AlertService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map