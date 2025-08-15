interface ICommand1 {
  execute(): void;
  undo(): void;
}

class CreateFileCommand implements ICommand1 {
  constructor(private path: string) {}
  execute(): void {
    console.log(`Creating file at: ${this.path}`);
  }
  undo(): void {
    console.log(`Deleting file at: ${this.path}`);
  }
}

class DeleteFileCommand implements ICommand1 {
  constructor(private path: string) {}
  execute(): void {
    console.log(`Deleting file at: ${this.path}`);
  }
  undo(): void {
    console.log(`Restoring file at: ${this.path}`);
  }
}

class ReadFileCommand implements ICommand1 {
  constructor(private path: string) {}
  execute(): void {
    console.log(`Reading a file at: ${this.path}`);
  }
  undo(): void {
    console.log(`Undo not avalaible for reading`);
  }
}

class UpdateFileCommand implements ICommand1 {
  constructor(
    private path: string,
    private newContent: string,
    private oldContent: string
  ) {}
  execute(): void {
    console.log(`updating file: ${this.path}, new content ${this.newContent}`);
  }
  undo(): void {
    console.log(`Reverting file: ${this.path}, old content ${this.oldContent}`);
  }
}

class MyFileSystem {
  private commandQueue: ICommand1[] = [];
  public addCommand(command: ICommand1) {
    this.commandQueue.push(command);
  }
  public executeCommand() {
    if (this.hasCommands()) {
      const commandToExecute = this.commandQueue.shift();
      commandToExecute?.execute();
    } else {
      console.log("No command in queue");
    }
  }
  public undoCommand() {
    if (this.hasCommands()) {
      const commandToUndo = this.commandQueue.pop();
      commandToUndo?.undo();
      console.log(`${commandToUndo} undo`);
    } else {
      console.log("No command in queue");
    }
  }
  public hasCommands(): boolean {
    return this.commandQueue.length === 0 ? false : true;
  }
}

//client code
const DragosFileSystem = new MyFileSystem();
console.log(DragosFileSystem.hasCommands());

DragosFileSystem.addCommand(new CreateFileCommand("/path/file.txt"));

DragosFileSystem.addCommand(
  new UpdateFileCommand("/path/file.txt", "New content", "Old content")
);

DragosFileSystem.addCommand(new ReadFileCommand("/path/file.txt"));

DragosFileSystem.addCommand(new DeleteFileCommand("/path/file.txt"));

DragosFileSystem.undoCommand();

while (DragosFileSystem.hasCommands()) {
  DragosFileSystem.executeCommand();
}
