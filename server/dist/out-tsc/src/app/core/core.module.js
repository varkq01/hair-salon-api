"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var header_component_1 = require("./header/header.component");
var home_component_1 = require("./home/home.component");
var app_routing_module_1 = require("src/app/app-routing.module");
var footer_component_1 = require("./footer/footer.component");
var shared_module_1 = require("src/app/shared/shared.module");
var home_carousel_component_1 = require("./home/home-carousel/home-carousel.component");
var employees_list_component_1 = require("./home/employees-list/employees-list.component");
var gallery_component_1 = require("./home/gallery/gallery.component");
var map_component_1 = require("./home/map/map.component");
var image_preview_component_1 = require("./home/gallery/image-preview/image-preview.component");
var image_component_1 = require("./home/gallery/image/image.component");
var login_component_1 = require("./login/login.component");
var password_reset_component_1 = require("./password-reset/password-reset.component");
var register_component_1 = require("./register/register.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var alert_box_component_1 = require("./alert-box/alert-box.component");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            declarations: [
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                footer_component_1.FooterComponent,
                home_carousel_component_1.HomeCarouselComponent,
                employees_list_component_1.EmployeesListComponent,
                gallery_component_1.GalleryComponent,
                map_component_1.MapComponent,
                image_preview_component_1.ImagePreviewComponent,
                image_component_1.ImageComponent,
                login_component_1.LoginComponent,
                password_reset_component_1.PasswordResetComponent,
                register_component_1.RegisterComponent,
                alert_box_component_1.AlertBoxComponent
            ],
            imports: [app_routing_module_1.AppRoutingModule, shared_module_1.SharedModule, ng_bootstrap_1.NgbModule.forRoot(), forms_1.FormsModule, forms_2.ReactiveFormsModule],
            exports: [
                app_routing_module_1.AppRoutingModule,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                footer_component_1.FooterComponent,
                map_component_1.MapComponent
            ],
            entryComponents: [
                image_preview_component_1.ImagePreviewComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                password_reset_component_1.PasswordResetComponent
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map