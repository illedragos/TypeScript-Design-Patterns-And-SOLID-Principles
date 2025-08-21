interface LightState {
  switchState(lightSwitch: LightSwitch): void;
}

class OnState implements LightState {
  public switchState(lightSwitch: LightSwitch): void {
    console.log("Light state is On. Turninf Off ...");
    lightSwitch.setState(new OffState());
  }
}

class OffState implements LightState {
  public switchState(lightSwitch: LightSwitch): void {
    console.log("Light state is Off. Turninf On ...");
    lightSwitch.setState(new OnState());
  }
}

class LightSwitch {
  constructor(private state: LightState) {}
  setState(state: LightState): void {
    this.state = state;
  }
  press(): void {
    this.state.switchState(this);
  }
}

//client code
const lightSwitch = new LightSwitch(new OffState());
lightSwitch.press();
