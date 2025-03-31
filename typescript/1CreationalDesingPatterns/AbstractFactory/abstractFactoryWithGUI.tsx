interface IButton {
  render(): void;
  onClick(f: Function): void;
}

interface ICheckBox {
  render(): void;
  toggle(): void;
}

interface GUIFactory {
  createButton(): IButton;
  createCheckBox(button: IButton): ICheckBox;
}

class WindowsButton implements IButton {
  render(): void {
    console.log("windows button rendered");
  }
  onClick(f: Function): void {
    console.log("Windows Button Clicked!");
    f();
  }
}

class MacOSButton implements IButton {
  render() {
    console.log("render MacOSButton");
  }
  onClick(f: Function): void {
    console.log("MacOSButton clicked");
    f();
  }
}

class WindowsCheckBox implements ICheckBox {
  constructor(private buttton: IButton) {}
  render(): void {
    console.log("Widnows button render");
  }
  toggle(): void {
    this.buttton.onClick(() => console.log("Windows checkbox toggle"));
  }
}

class MacOsCheckBox implements ICheckBox {
  constructor(private button: IButton) {}
  render(): void {
    console.log("MacOS Checkbox render");
  }
  toggle(): void {
    this.button.onClick(() => console.log("MacOS Checkbox toggled"));
  }
}

class WindowsFactory implements GUIFactory {
  createButton(): IButton {
    return new WindowsButton();
  }
  createCheckBox(button: IButton) {
    return new WindowsCheckBox(button);
  }
}
class MacOsFacory implements GUIFactory {
  createButton(): IButton {
    return new MacOSButton();
  }
  createCheckBox(button: IButton) {
    return new MacOsCheckBox(button);
  }
}

//Client code
function renderUI(factory: GUIFactory): void {
  const button = factory.createButton();
  const checkBox = factory.createCheckBox(button);

  button.render();
  checkBox.render();

  button.onClick(() => {
    console.log("BUUTON CLICKED!");
  });

  checkBox.toggle();
}

console.log("App: Launched with the Windows factory");
renderUI(new WindowsFactory());
console.log("-----------------");
console.log("App: Launched with the MacOS factory");
renderUI(new MacOsFacory());

// const windowsFactory = new WindowsFactory();
// const macOSFactory = new MacOsFacory();

// const windowsButton1 = windowsFactory.createButton();
// windowsButton1.render();
// windowsButton1.onClick(() => {});
// const windowsCheckBox1 = windowsFactory.createCheckBox(windowsButton1);

// const macOSButton1 = macOSFactory.createButton();
// macOSButton1.render();
// macOSButton1.onClick(() => {});
// const macOSCheckbox1 = macOSFactory.createCheckBox(macOSButton1);
