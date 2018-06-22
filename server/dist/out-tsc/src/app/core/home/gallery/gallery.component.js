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
var image_preview_component_1 = require("src/app/core/home/gallery/image-preview/image-preview.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(modalService) {
        this.modalService = modalService;
        this.images = [
            {
                source: '/assets/images/work1.jpg',
                description: 'Zdjęcie przedstawia nowa fryzurę klientki'
            },
            {
                source: '/assets/images/work2.jpg',
                description: 'Zdjęcie przedstawia nowa fryzurę klientki'
            },
            {
                source: '/assets/images/work3.jpg',
                description: 'Zdjęcie przedstawia nowa fryzurę klientki'
            },
            {
                source: '/assets/images/work4.jpg',
                description: 'Zdjęcie przedstawia nowa fryzurę klientki'
            },
            {
                source: '/assets/images/work5.jpg',
                description: 'Zdjęcie przedstawia nowa fryzurę klientki'
            },
            {
                source: '/assets/images/work6.jpg',
                description: 'Zdjęcie przedstawia nowa fryzurę klientki'
            }
        ];
    }
    GalleryComponent.prototype.showImagePreview = function (image) {
        var initialState = {
            source: image.source,
            description: image.description
        };
        this.modalRef = this.modalService.open(image_preview_component_1.ImagePreviewComponent, {
            windowClass: 'modal-image',
            size: 'lg',
            centered: true
        });
        this.modalRef.componentInstance.source = image.source;
        this.modalRef.componentInstance.description = image.description;
    };
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'app-gallery',
            templateUrl: './gallery.component.html',
            styleUrls: ['./gallery.component.scss']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map