# Test Host Base

Test Host Base is an Angular Typescript class built to help test components in Angular!

##Installing

```
npm install test-host-base --save
```

## Using the Library

In your spec file, create a TestHostComponent Component class that extends TestHostBase and has a static create method that returns a new TestHost

```ts
import { TestHostBase } from 'test-host-base';

@Component({
    template: `<span>Hello world</span>`
})
class TestHostComponent extends TestHostBase {

    static create(): TestHostComponent {
        // Create a new TestHostComponent
        const testHost = TestHostBase.getTestHost<TestHostComponent>(this);

        // Detect any DOM changes
        testHost.fixture.detectChanges();
        
        // Return our new TestHostComponent
        return testHost;
    }
}
```

You can also pass in data into your test component like you would a real Angular Component!

```ts
import { TestHostBase } from 'test-host-base';

@Component({
    template: `<app-cool-count [count]="count"></app-cool-count>`
})
class TestHostComponent extends TestHostBase {
    coolCount: number = 0;
    
    static create(count: number): TestHostComponent {
        // Create a new testhost
        const testHost = TestHostBase.getTestHost<TestHostComponent>(this);

        // Assign count property
        testHost.coolCount = count;

        // Detect changes allows count to propagate down through the DOM
        testHost.fixture.detectChanges();

        return testHost;
    }
}
```

##Available Methods

###Get Component
Gets a child component if it exists. This can be the component you are testing.

```ts
    var testHost = TestHostComponent.create();
    testHost.getComponent(ChildComponent);
```

###Get Dom Element By Selector
Gets the first Dom Element found via a CSS Selector

```ts
    var testHost = TestHostComponent.create();
    testHost.getDomElementBySelector('h1'); // Gets first h1 tag
```

###Get Dom Elements By Selector
Gets ALL Dom Elements found via a CSS Selector

```ts
    var testHost = TestHostComponent.create();
    testHost.getDomElementsBySelector('h1'); // Gets ALL h1 tags
```

###Get Input By Type
Gets an input tag of a specified type

```ts
    var testHost = TestHostComponent.create();
    testHost.getInputByType("button"); // Gets an input of type button
```

###Get Input By Type and Name
Gets an input tag of a specific type and name

```ts
    var testHost = TestHostComponent.create();
    testHost.getInputByTypeAndName("button", "foo"); // Gets input of type button and name foo
```

###LoseFocus
Removes focus from a DOM element

```ts
    var testHost = TestHostCommponent.create();
    var inputDomElement = testHost.getDomElementBySelector("input");
    testHost.loseFocus(inputDomElement);
```

###Set Select Value
Sets the value of a select tag and emits an input event on it

```ts
    var testHost = TestHostComponent.create();
    var selectDomElement = testHost.getDomElementBySelector("select");
    testHost.SetSelectValue(selectDomElement, "Value"); // Sets the select to value = "Value"
```

###Set Text Field
Sets the value of a text field and emits an input event on it

```ts
    var testHost = TestHostComponent.create();
    var inputDomElement = testHost.getDomElementBySelector("input");
    testHost.SetTextField(inputDomElement, "Some Value"); // Sets the text field to value "Some Value"
```