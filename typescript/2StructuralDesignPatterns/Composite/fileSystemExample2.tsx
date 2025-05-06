interface IFileSystemComponent {
  getName(): string;
  getSize(): number;
}

class File1 implements IFileSystemComponent {
  constructor(protected name: string, protected size: number) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }
}

interface ICompositeFileSystemComponent extends IFileSystemComponent {
  addComponent(component: IFileSystemComponent): void;
  removeComponent(component: IFileSystemComponent): void;
  getComponents(): IFileSystemComponent[];
}

class Folder1 implements ICompositeFileSystemComponent {
  constructor(
    protected name: string,
    protected components: IFileSystemComponent[] = []
  ) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    let sum = 0;
    this.components.forEach((comp) => {
      sum += comp.getSize();
    });
    return sum;
    //with reduce
    //return this.components.reduce((sum, comp) => sum + comp.getSize(), 0);
  }

  addComponent(component: IFileSystemComponent): void {
    this.components.push(component);
  }

  removeComponent(component: IFileSystemComponent): void {
    this.components = this.components.filter(
      (comp: IFileSystemComponent) => comp !== component
    );
  }

  getComponents(): IFileSystemComponent[] {
    return this.components;
  }
}

//Client Code
const file1 = new File1("3SudEst.mp3", 3500);
const file2 = new File1("dog.jpg", 500);
const file3 = new File1("cat.png", 750);

const MyFolder = new Folder1("MyDocuments", [file1, file2, file3]);

console.log(MyFolder);

console.log(MyFolder.getName());
console.log(MyFolder.getSize());
console.log(MyFolder.getComponents());
console.log(`Folder-> ${MyFolder.getName()} contains:`);
MyFolder.getComponents().map((component: IFileSystemComponent) => {
  console.log(` - ${component.getName()} size:${component.getSize()}`);
});
console.log("-------------------");
MyFolder.removeComponent(file2);
console.log(`Folder-> ${MyFolder.getName()} contains:`);
MyFolder.getComponents().map((component: IFileSystemComponent) => {
  console.log(` - ${component.getName()} size:${component.getSize()}`);
});
console.log(MyFolder.getSize());

const folder1 = new Folder1("New Folder1");
const folder2 = new Folder1("New Folder2");
folder1.addComponent(folder2);
