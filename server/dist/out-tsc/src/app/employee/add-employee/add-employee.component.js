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
var forms_1 = require("@angular/forms");
var employee_service_1 = require("../employee.service");
var rxjs_1 = require("rxjs");
var alert_service_1 = require("../../core/alert-box/alert.service");
var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(fb, cd, eS, alertService) {
        this.fb = fb;
        this.cd = cd;
        this.eS = eS;
        this.alertService = alertService;
        this.isLoading = false;
        this.form = this.fb.group({
            firstName: this.fb.control('', forms_1.Validators.required),
            lastName: this.fb.control('', forms_1.Validators.required),
            position: this.fb.control('', forms_1.Validators.required),
            description: this.fb.control('', forms_1.Validators.required),
            file: this.fb.control(null, forms_1.Validators.required)
        });
    }
    Object.defineProperty(AddEmployeeComponent.prototype, "position", {
        get: function () {
            return this.form.get('position');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEmployeeComponent.prototype, "description", {
        get: function () {
            return this.form.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEmployeeComponent.prototype, "firstName", {
        get: function () {
            return this.form.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEmployeeComponent.prototype, "lastName", {
        get: function () {
            return this.form.get('lastName');
        },
        enumerable: true,
        configurable: true
    });
    AddEmployeeComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.form.patchValue({
                    file: reader.result
                });
                // need to run CD since file load runs outside of zone
                _this.cd.markForCheck();
            };
        }
    };
    AddEmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        this.eS.add(this.form.value).subscribe(function (res) {
            _this.alertService.addSuccessAlert('Dodano nowego pracownika!');
            _this.isLoading = false;
            _this.form.reset();
        }, function (err) {
            console.log(err);
            rxjs_1.Observable.throw(err);
            _this.alertService.addWarningAlert('Wystąpił błąd, zmień dane i spróbuj ponownie.');
            _this.isLoading = false;
        });
    };
    AddEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-add-employee',
            templateUrl: './add-employee.component.html',
            styleUrls: ['./add-employee.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            core_1.ChangeDetectorRef,
            employee_service_1.EmployeeService,
            alert_service_1.AlertService])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=add-employee.component.js.map