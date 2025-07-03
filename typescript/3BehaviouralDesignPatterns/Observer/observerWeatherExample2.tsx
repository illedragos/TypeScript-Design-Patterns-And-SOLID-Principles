console.log("start-Index-2025");
// Let's say we have a weather station that measures temperature, humidity, and pressure.
// We have multiple display elements (e.g., Current Conditions Display, Statistics Display, Forecast Display) that show these measurements.
// When the weather station gets new measurements, all the displays should update.

interface IObserver {
  update(temperature: number, humidity: number, pressure: number): void;
}
interface ISubject {
  registerObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(): void;
}

class WeatherData implements ISubject {
  private observers: IObserver[] = [];
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;

  registerObserver(observer: IObserver): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    } else {
      console.log("Observer already exists");
    }
  }
  removeObserver(observer: IObserver): void {
    const indexOfObserver = this.observers.indexOf(observer);
    if (indexOfObserver !== -1) {
      this.observers.splice(indexOfObserver, 1);
      console.log("Observer removed");
    } else {
      console.log("Observer does not exists");
    }
  }
  notifyObservers(): void {
    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      this.observers.forEach((observer) => {
        observer.update(this.temperature!, this.humidity!, this.pressure!);
      });
    }
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }
}

//THIS IS THE OBSERVER CLASS
class CurentConditionDisplay implements IObserver {
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;
  constructor(private weatherData: ISubject) {
    this.weatherData.registerObserver(this);
  }
  update(
    temperature: number | undefined,
    humidity: number | undefined,
    pressure: number | undefined
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }
  display(): void {
    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      console.log(
        `Temperature:${this.temperature} Humidity:${this.humidity} Pressure:${this.pressure}`
      );
    } else {
      console.log("Weather data not available");
    }
    console.log("----------------------");
  }
}

class Antena1Weather implements IObserver {
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;
  constructor(private weatherData: ISubject) {
    this.weatherData.registerObserver(this);
  }
  update(
    temperature: number | undefined,
    humidity: number | undefined,
    pressure: number | undefined
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }
  display(): void {
    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      console.log(
        `Antena 1: Temperature:${this.temperature} Humidity:${this.humidity} Pressure:${this.pressure}`
      );
    } else {
      console.log("Antena1: Weather data not available");
    }
    console.log("----------------------");
  }
}

class ProTVWeather implements IObserver {
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;
  constructor(private weatherData: ISubject) {
    this.weatherData.registerObserver(this);
  }
  update(
    temperature: number | undefined,
    humidity: number | undefined,
    pressure: number | undefined
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }
  display(): void {
    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      console.log(
        `ProTV: Temperature:${this.temperature} Humidity:${this.humidity} Pressure:${this.pressure}`
      );
    } else {
      console.log("ProTV: Weather data not available");
    }
    console.log("----------------------");
  }
}

//client code
//subject
const WeatherDataOradea = new WeatherData();

const currentConditionsDisplay = new CurentConditionDisplay(WeatherDataOradea);
const proTVWeather = new ProTVWeather(WeatherDataOradea);
const antena1Weather = new Antena1Weather(WeatherDataOradea);

WeatherDataOradea.setMeasurements(100, 2123, 0.76);
WeatherDataOradea.setMeasurements(90, 2123, 0.76);
