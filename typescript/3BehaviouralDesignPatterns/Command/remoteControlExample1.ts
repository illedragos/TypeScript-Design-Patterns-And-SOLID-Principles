interface ICommand {
  execute(): void;
  undo(): void;
}

class Light {
  public turnOn(): void {
    console.log("The ligh is on");
  }
  public turnOff(): void {
    console.log("The ligh is off");
  }
}

class TurnOnCommand {
  constructor(private light: Light) {}
  public execute() {
    this.light.turnOn();
  }
  public undo() {
    this.light.turnOff();
  }
}
class TurnOffCommand {
  constructor(private light: Light) {}
  public execute() {
    this.light.turnOff();
  }
  public undo() {
    this.light.turnOn();
  }
}

class SimpleRemoteControl {
  private currentCommand: ICommand | null = null;
  private undoCommand: ICommand | null = null;
  private commandQueue: ICommand[] = [];

  public setCommand(command: ICommand): void {
    this.undoCommand = this.currentCommand;
    this.currentCommand = command;
    this.commandQueue.push(this.currentCommand);
  }

  public buttonWasPressed(): void {
    //grabs first comand and ivokes it
    if (this.commandQueue.length) {
      const command = this.commandQueue.shift();
      command?.execute();
    } else {
      console.log("No commands");
    }
  }

  public undoButtonWasPressed(): void {
    if (this.undoCommand) {
      this.undoCommand.execute();
    } else {
      console.log("No current comand");
    }
  }

  public hasCommands(): boolean {
    return this.commandQueue.length === 0 ? false : true;
  }
}

//client code
const remote: SimpleRemoteControl = new SimpleRemoteControl();
const light: Light = new Light();

//Turning On The Light
remote.setCommand(new TurnOnCommand(light));
remote.buttonWasPressed();

remote.setCommand(new TurnOffCommand(light));
remote.buttonWasPressed();

// Undo last operation
remote.undoButtonWasPressed();

remote.buttonWasPressed();

//Create a comman que
remote.setCommand(new TurnOnCommand(light));
remote.setCommand(new TurnOffCommand(light));

console.log("--------------------------------");

while (remote.hasCommands()) {
  remote.buttonWasPressed();
}
