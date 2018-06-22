"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_routing_module_1 = require("src/app/app-routing.module");
var shared_module_1 = require("src/app/shared/shared.module");
var cosmetic_component_1 = require("src/app/services/cosmetic/cosmetic.component");
var hairdressing_component_1 = require("src/app/services/hairdressing/hairdressing.component");
var services_component_1 = require("src/app/services/services.component");
var services_list_component_1 = require("./services-list/services-list.component");
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        core_1.NgModule({
            declarations: [
                services_component_1.ServicesComponent,
                hairdressing_component_1.HairdressingComponent,
                cosmetic_component_1.CosmeticComponent,
                services_list_component_1.ServicesListComponent
            ],
            imports: [
                app_routing_module_1.AppRoutingModule,
                shared_module_1.SharedModule,
            ],
            exports: [],
        })
    ], ServicesModule);
    return ServicesModule;
}());
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=services.module.js.map