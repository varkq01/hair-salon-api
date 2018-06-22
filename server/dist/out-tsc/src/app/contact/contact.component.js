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
var alert_service_1 = require("../core/alert-box/alert.service");
var forms_1 = require("@angular/forms");
var contact_service_1 = require("./contact.service");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, contactService, alertService) {
        this.fb = fb;
        this.contactService = contactService;
        this.alertService = alertService;
        this.isSending = false;
        this.createForm();
    }
    Object.defineProperty(ContactComponent.prototype, "email", {
        get: function () {
            return this.form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactComponent.prototype, "message", {
        get: function () {
            return this.form.get('message');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactComponent.prototype, "firstName", {
        get: function () {
            return this.form.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactComponent.prototype, "lastName", {
        get: function () {
            return this.form.get('lastName');
        },
        enumerable: true,
        configurable: true
    });
    ContactComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            email: this.fb.control('', [forms_1.Validators.email, forms_1.Validators.required]),
            message: this.fb.control('', [forms_1.Validators.required]),
            firstName: this.fb.control('', forms_1.Validators.required),
            lastName: this.fb.control('', forms_1.Validators.required)
        });
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSending = true;
        this.contactService.sendMessage(this.form.value).subscribe(function (response) {
            _this.isSending = false;
            _this.alertService.addSuccessAlert('Wiadomość została wysłana');
            _this.form.reset();
        }, function (err) {
            _this.isSending = false;
            _this.alertService.addDangerAlert('Coś poszło nie tak!');
        });
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            contact_service_1.ContactService,
            alert_service_1.AlertService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map