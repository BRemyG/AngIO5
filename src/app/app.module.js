"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var example_component_component_1 = require('./example-component/example-component.component');
var comp_one_component_1 = require('./comp-one/comp-one.component');
var product_service_service_1 = require("./product-service.service");
var timer_service_1 = require('./timer.service');
var test_bar_component_1 = require('./test-bar/test-bar.component');
var question_component_1 = require('./question/question.component');
var table_component_1 = require('./table/table.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                example_component_component_1.ExampleComponentComponent,
                comp_one_component_1.CompOneComponent,
                test_bar_component_1.TestBarComponent,
                question_component_1.QuestionComponent,
                table_component_1.TableComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            providers: [product_service_service_1.ProductServiceService, timer_service_1.TimerService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map