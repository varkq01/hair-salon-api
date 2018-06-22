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
var alert_service_1 = require("../alert-box/alert.service");
var session_service_1 = require("../session.service");
var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent(modalService, activeModal, fb, alertService, sessionService) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.fb = fb;
        this.alertService = alertService;
        this.sessionService = sessionService;
        this.isResetting = false;
        this.createForm();
    }
    PasswordResetComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(PasswordResetComponent.prototype, "email", {
        get: function () {
            return this.form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    PasswordResetComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            email: this.fb.control('', [forms_1.Validators.required, forms_1.Validators.email])
        });
    };
    PasswordResetComponent.prototype.onClose = function () {
        this.activeModal.dismiss();
    };
    PasswordResetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isResetting = true;
        this.sessionService.resetPassword(this.form.value['email']).subscribe(function (response) {
            _this.isResetting = false;
            _this.alertService.addSuccessAlert('Hasło zresetowano pomyślnie! Za chwilę otrzymasz maila z nowym hasłem.');
            _this.activeModal.close('ok');
        }, function (err) {
            _this.isResetting = false;
            console.error('Error during resetting pass');
        });
    };
    PasswordResetComponent = __decorate([
        core_1.Component({
            selector: 'app-password-reset',
            templateUrl: './password-reset.component.html',
            styleUrls: ['./password-reset.component.scss']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            ng_bootstrap_1.NgbActiveModal,
            forms_1.FormBuilder,
            alert_service_1.AlertService,
            session_service_1.SessionService])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());
exports.PasswordResetComponent = PasswordResetComponent;
//# sourceMappingURL=password-reset.component.js.map