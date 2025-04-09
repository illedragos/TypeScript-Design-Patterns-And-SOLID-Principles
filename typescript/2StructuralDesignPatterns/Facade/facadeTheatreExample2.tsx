interface ITurnOn {
  turnOn(): void;
}

class Amplifier implements ITurnOn {
  public turnOn(): void {
    console.log("Amplifier turned on");
  }

  public setVolumne(level: number) {
    console.log(`Volume set to ${level}`);
  }
}

class DvdPlayer implements ITurnOn {
  public turnOn(): void {
    console.log("DVD Player turned on");
  }

  public play(movie: string) {
    console.log(`Playing movie:${movie}`);
  }
}

class Projector implements ITurnOn {
  public turnOn(): void {
    console.log("Projector turned on");
  }
  public setInput(dvdPlayer: DvdPlayer) {
    console.log("input set to dvd player");
  }
}

class Lights {
  public dim(level: number) {
    console.log(`level set to ${level}`);
  }
}

class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private dvdPlayer: DvdPlayer,
    private projector: Projector,
    private lights: Lights
  ) {}
  public watchMovie(movie: string, volume: number, level: number) {
    this.lights.dim(level);
    this.amplifier.turnOn();
    this.amplifier.setVolumne(volume);
    this.dvdPlayer.turnOn();
    this.projector.turnOn();
    this.projector.setInput(this.dvdPlayer);
    this.dvdPlayer.play(movie);
  }
}

//client code
const homeTheaterFacade = new HomeTheaterFacade(
  new Amplifier(),
  new DvdPlayer(),
  new Projector(),
  new Lights()
);

homeTheaterFacade.watchMovie("Titanic 1997", 78, 10);
