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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var session_service_1 = require("../session.service");
var global_service_1 = require("../global.service");
var alert_service_1 = require("../alert-box/alert.service");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(modalService, activeModal, fb, sessionService, global, alertService) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.fb = fb;
        this.sessionService = sessionService;
        this.global = global;
        this.alertService = alertService;
        this.isRegistering = false;
        this.createForm();
    }
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "firstName", {
        get: function () {
            return this.form.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "lastName", {
        get: function () {
            return this.form.get('lastName');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            email: this.fb.control('', [forms_1.Validators.email, forms_1.Validators.required]),
            password: this.fb.control('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(6)
            ]),
            firstName: this.fb.control('', forms_1.Validators.required),
            lastName: this.fb.control('', forms_1.Validators.required)
        });
    };
    RegisterComponent.prototype.onClose = function () {
        this.activeModal.dismiss();
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.isRegistering = true;
        this.sessionService.register(this.form.value).subscribe(function (response) {
            sessionStorage.setItem('x-auth', response.headers.get('x-auth'));
            _this.global.setUser(response.body);
            _this.isRegistering = false;
            _this.sessionService.userChanged.next();
            _this.alertService.addSuccessAlert('Konto stworzone pomyślnie!');
            _this.activeModal.close('ok');
        }, function (err) {
            _this.error = err.message;
            _this.isRegistering = false;
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            ng_bootstrap_1.NgbActiveModal,
            forms_1.FormBuilder,
            session_service_1.SessionService,
            global_service_1.GlobalService,
            alert_service_1.AlertService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map