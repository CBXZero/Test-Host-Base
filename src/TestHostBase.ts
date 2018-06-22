import { ComponentFixture } from "@angular/core/testing/src/component_fixture";
import { ITestHostComponent } from "./ITestHostComponent";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Type } from "@angular/core";

export class TestHostBase implements ITestHostComponent {
    fixture: ComponentFixture<ITestHostComponent>;

    static getTestHost<T>(testHost: any): T {
        const fixture = TestBed.createComponent<ITestHostComponent>(testHost);
        testHost = fixture.componentInstance;
        testHost.fixture = fixture;
        return testHost;
    }

    getDomElementBySelector(selector: string): HTMLElement {
        return this.fixture.debugElement.nativeElement.querySelector(selector);
    }

    getDomElementsBySelector(selector: string): HTMLElement[] {
        return this.fixture.debugElement.nativeElement.querySelectorAll(selector);
    }

    getInputByTypeAndName(inputType: string, inputName: string): HTMLInputElement {
        return this.getDomElementBySelector(`input[name='${inputName}'][type='${inputType}']`) as HTMLInputElement;
    }

    getInputByType(inputType: string): HTMLElement {
        return this.getDomElementBySelector(`input[type='${inputType}']`);
    }

    getComponent<T>(componentType: Type<T>):T {
        return this.fixture.debugElement.query(By.directive(componentType)).componentInstance;
    }

    loseFocus(fieldDom: any) {
        fieldDom.dispatchEvent(new Event("blur"));
        this.fixture.detectChanges();
    }

    setTextField(fieldDom: any, value: string) {
        fieldDom.value = value;
        fieldDom.dispatchEvent(new Event("input"));
        this.fixture.detectChanges();
    }

    setSelectValue(selectDom: any, newValue: string) {
        selectDom.value = newValue;
        selectDom.dispatchEvent(new Event("change"));
        this.fixture.detectChanges();
    }
}