"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var TestHostBase = /** @class */ (function () {
    function TestHostBase() {
    }
    TestHostBase.getTestHost = function (testHost) {
        var fixture = testing_1.TestBed.createComponent(testHost);
        testHost = fixture.componentInstance;
        testHost.fixture = fixture;
        return testHost;
    };
    TestHostBase.prototype.getDomElementBySelector = function (selector) {
        return this.fixture.debugElement.nativeElement.querySelector(selector);
    };
    TestHostBase.prototype.getDomElementsBySelector = function (selector) {
        return this.fixture.debugElement.nativeElement.querySelectorAll(selector);
    };
    TestHostBase.prototype.getInputByTypeAndName = function (inputType, inputName) {
        return this.getDomElementBySelector("input[name='" + inputName + "'][type='" + inputType + "']");
    };
    TestHostBase.prototype.getInputByType = function (inputType) {
        return this.getDomElementBySelector("input[type='" + inputType + "']");
    };
    TestHostBase.prototype.getComponent = function (componentType) {
        return this.fixture.debugElement.query(platform_browser_1.By.directive(componentType)).componentInstance;
    };
    TestHostBase.prototype.loseFocus = function (fieldDom) {
        fieldDom.dispatchEvent(new Event("blur"));
        this.fixture.detectChanges();
    };
    TestHostBase.prototype.setTextField = function (fieldDom, value) {
        fieldDom.value = value;
        fieldDom.dispatchEvent(new Event("input"));
        this.fixture.detectChanges();
    };
    TestHostBase.prototype.setSelectValue = function (selectDom, newValue) {
        selectDom.value = newValue;
        selectDom.dispatchEvent(new Event("change"));
        this.fixture.detectChanges();
    };
    return TestHostBase;
}());
exports.TestHostBase = TestHostBase;
