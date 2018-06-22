"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./core/home/home.component");
var services_component_1 = require("./services/services.component");
var hairdressing_component_1 = require("./services/hairdressing/hairdressing.component");
var contact_component_1 = require("./contact/contact.component");
var visits_history_component_1 = require("./visits-history/visits-history.component");
var add_employee_component_1 = require("./employee/add-employee/add-employee.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    {
        path: 'services',
        component: services_component_1.ServicesComponent,
        children: [
            { path: '', redirectTo: 'hairdressing', pathMatch: 'full' },
            { path: 'hairdressing', component: hairdressing_component_1.HairdressingComponent },
        ]
    },
    { path: 'employee/add', component: add_employee_component_1.AddEmployeeComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'history', component: visits_history_component_1.VisitsHistoryComponent },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map