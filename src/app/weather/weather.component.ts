import { Component, Input, OnInit } from "@angular/core";

import { MessageModel } from "../../shared/models/MessageModel";
import {WeatherService} from "../../shared/services/weather/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {

  @Input() message: MessageModel;
  private messageToDisplay: MessageModel;

  constructor( private weatherService: WeatherService) {
    this.messageToDisplay = new MessageModel(0, "test", "weather");
  }

  ngOnInit() {
    this.weatherService.getWeather(this.getCity());
    this.weatherService.weather$.subscribe((weather) => {
      this.messageToDisplay = (new MessageModel(this.message.id, weather.printWeather(), "weather"));
    });
  }

  public getCity(): string {
    const regex = new RegExp(/\/meteo [a-zA-Z\-]+/);
    const matches = regex.exec(this.message.content);
    const city = matches[0].split(" ");
    return city[1];
  }
}

