"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("src/app/app-routing.module");
var core_module_1 = require("./core/core.module");
var shared_module_1 = require("./shared/shared.module");
var services_module_1 = require("./services/services.module");
var contact_module_1 = require("./contact/contact.module");
var history_module_1 = require("./visits-history/history.module");
var http_1 = require("@angular/common/http");
var session_service_1 = require("./core/session.service");
var global_service_1 = require("./core/global.service");
var alert_service_1 = require("./core/alert-box/alert.service");
var services_service_1 = require("./services/services.service");
var contact_service_1 = require("./contact/contact.service");
var employee_service_1 = require("./employee/employee.service");
var employee_module_1 = require("./employee/employee.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                core_module_1.CoreModule,
                shared_module_1.SharedModule,
                services_module_1.ServicesModule,
                contact_module_1.ContactModule,
                history_module_1.HistoryModule,
                employee_module_1.EmployeeModule
            ],
            providers: [
                session_service_1.SessionService,
                global_service_1.GlobalService,
                alert_service_1.AlertService,
                services_service_1.ServicesService,
                contact_service_1.ContactService,
                employee_service_1.EmployeeService,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map