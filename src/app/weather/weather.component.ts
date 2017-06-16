import { Component, Input, OnInit } from "@angular/core";

import { MessageModel } from "../../shared/models/MessageModel";
import {WeatherService} from "../../shared/services/weather/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  @Input() message: MessageModel;
  private reponse: String;

  constructor( private weatherService: WeatherService) {
    this.message = new MessageModel(0, "hello");
    this.reponse = "";
  }

  ngOnInit() {
    this.weatherService.getWeather(this.getCity());
    this.weatherService.weather$.subscribe((weather) => this.reponse = weather.printWeather());
    if (this.reponse === "") {
      this.reponse = "Ville inconnue";
    }
  }

  public getCity(): string {
    const regex = new RegExp(/\/meteo [a-zA-Z\-]+/);
    const matches = regex.exec(this.message.content);
    const city = matches[0].split(" ");
    return city[1];
  }
}

