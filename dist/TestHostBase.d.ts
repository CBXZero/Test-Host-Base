import { ComponentFixture } from "@angular/core/testing/src/component_fixture";
import { ITestHostComponent } from "./ITestHostComponent";
import { Type } from "@angular/core";
export declare class TestHostBase implements ITestHostComponent {
    fixture: ComponentFixture<ITestHostComponent>;
    static getTestHost<T>(testHost: any): T;
    getDomElementBySelector(selector: string): HTMLElement;
    getDomElementsBySelector(selector: string): HTMLElement[];
    getInputByTypeAndName(inputType: string, inputName: string): HTMLInputElement;
    getInputByType(inputType: string): HTMLElement;
    getComponent<T>(componentType: Type<T>): T;
    loseFocus(fieldDom: any): void;
    setTextField(fieldDom: any, value: string): void;
    setSelectValue(selectDom: any, newValue: string): void;
}
