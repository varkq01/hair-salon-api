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
var VisitsHistoryComponent = /** @class */ (function () {
    function VisitsHistoryComponent() {
        this.visits = [
            {
                date: '11.05.2018',
                services: ['Strzyżenie', 'Stylizacja', 'Farbowanie'],
                price: 120
            },
            {
                date: '15.05.2018',
                services: ['Strzyżenie', 'Stylizacja', 'Farbowanie'],
                price: 60
            },
            { date: '25.05.2018', services: ['Strzyżenie'], price: 30 },
            { date: '29.05.2018', services: ['Stylizacja', 'Farbowanie'], price: 45 }
        ];
    }
    VisitsHistoryComponent.prototype.ngOnInit = function () { };
    VisitsHistoryComponent = __decorate([
        core_1.Component({
            selector: 'app-visits-history',
            templateUrl: './visits-history.component.html',
            styleUrls: ['./visits-history.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], VisitsHistoryComponent);
    return VisitsHistoryComponent;
}());
exports.VisitsHistoryComponent = VisitsHistoryComponent;
//# sourceMappingURL=visits-history.component.js.map