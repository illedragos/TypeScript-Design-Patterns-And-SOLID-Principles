interface Tool {
  onMouseDown(): void;
  onMouseUp(): void;
}

class Canvas {
  constructor(private tool: Tool) {}

  setTool(tool: Tool) {
    this.tool = tool;
  }

  onMouseDown() {
    this.tool.onMouseDown();
  }

  onMouseUp() {
    this.tool.onMouseUp();
  }
}

class SelectionTool implements Tool {
  onMouseDown(): void {
    console.log("Selection down");
  }

  onMouseUp(): void {
    console.log("Selection draw");
  }
}

class BrushTool implements Tool {
  onMouseDown(): void {
    console.log("Brush started");
  }

  onMouseUp(): void {
    console.log("Brush drawn");
  }
}

class EraserTool implements Tool {
  onMouseDown(): void {
    console.log("Erase started");
  }

  onMouseUp(): void {
    console.log("Erased");
  }
}

const myCanvas = new Canvas(new SelectionTool());
myCanvas.onMouseDown();
myCanvas.onMouseUp();
myCanvas.setTool(new BrushTool());
myCanvas.onMouseDown();
myCanvas.onMouseUp();
