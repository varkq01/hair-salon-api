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
var password_reset_component_1 = require("../password-reset/password-reset.component");
var register_component_1 = require("../register/register.component");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var global_service_1 = require("../global.service");
var session_service_1 = require("../session.service");
var alert_service_1 = require("../alert-box/alert.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(modalService, activeModal, sessionService, fb, global, alertService) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.sessionService = sessionService;
        this.fb = fb;
        this.global = global;
        this.alertService = alertService;
        this.submitted = false;
        this.isLogging = false;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            email: this.fb.control('', [forms_1.Validators.email, forms_1.Validators.required]),
            password: this.fb.control('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(6)
            ])
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onReset = function () {
        this.activeModal.dismiss();
        this.modalService.open(password_reset_component_1.PasswordResetComponent, {
            centered: true
        });
    };
    LoginComponent.prototype.onClose = function () {
        this.activeModal.dismiss();
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.isLogging = true;
        var email = this.form.value['email'];
        var password = this.form.value['password'];
        this.sessionService.login(email, password).subscribe(function (response) {
            sessionStorage.setItem('x-auth', response.headers.get('x-auth'));
            _this.global.setUser(response.body);
            _this.sessionService.userChanged.next();
            _this.isLogging = false;
            _this.alertService.addSuccessAlert('Zalogowano pomyślnie!');
            _this.activeModal.close('ok');
        }, function (err) {
            _this.loginError = err.error.message;
            _this.isLogging = false;
        });
    };
    LoginComponent.prototype.onRegister = function () {
        this.activeModal.dismiss();
        this.modalService.open(register_component_1.RegisterComponent, {
            centered: true
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            ng_bootstrap_1.NgbActiveModal,
            session_service_1.SessionService,
            forms_1.FormBuilder,
            global_service_1.GlobalService,
            alert_service_1.AlertService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map