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
var services_service_1 = require("../services.service");
var HairdressingComponent = /** @class */ (function () {
    function HairdressingComponent(servicesService) {
        this.servicesService = servicesService;
        this.femaleServices = [];
        this.maleServices = [];
        this.isLoading = false;
    }
    HairdressingComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    HairdressingComponent.prototype.getData = function () {
        var _this = this;
        this.isLoading = true;
        this.dataStream = this.servicesService.getHairdressingServices().subscribe(function (response) {
            var services = response.categories.filter(function (c) { return c.type === 'hair'; });
            _this.femaleServices = _this.getGenderServices('female', services);
            _this.maleServices = _this.getGenderServices('male', services);
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
        });
    };
    HairdressingComponent.prototype.getGenderServices = function (gender, services) {
        var gServices = [];
        services.forEach(function (c) {
            var category = {};
            (category.name = c.name),
                (category.type = c.type),
                (category.services = c.services.filter(function (s) { return s.type === gender; }));
            if (category.services.length > 0) {
                gServices.push(category);
            }
        });
        return gServices;
    };
    HairdressingComponent.prototype.ngOnDestroy = function () {
        this.dataStream.unsubscribe();
    };
    HairdressingComponent = __decorate([
        core_1.Component({
            selector: 'app-hairdressing',
            templateUrl: './hairdressing.component.html',
            styleUrls: ['./hairdressing.component.scss']
        }),
        __metadata("design:paramtypes", [services_service_1.ServicesService])
    ], HairdressingComponent);
    return HairdressingComponent;
}());
exports.HairdressingComponent = HairdressingComponent;
//# sourceMappingURL=hairdressing.component.js.map