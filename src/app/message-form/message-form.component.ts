import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../shared/services";
import { MessageModel } from "../../shared/models/MessageModel";
import { WeatherService } from "../../shared/services";


@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"]
})
export class MessageFormComponent implements OnInit {

  public message: MessageModel;
  private route: string;

  constructor(private messageService: MessageService, private weatherService: WeatherService) {
    this.message = new MessageModel(1, "", "");
    this.route = "/messages";
  }

  ngOnInit() {
    this.weatherService.weather$.subscribe((weather) => {
      this.messageService.sendMessage(this.route, new MessageModel(this.message.id, weather.printWeather(), "weather"));
    });
  }

  /**
   * Fonction pour envoyer un message.
   * L'envoi du message se fait à travers la methode sendMessage du service MessageService.
   * Cette méthode prend en paramètre la route pour envoyer un message (:id/messages avec id un entier correspondant à l'id du channel)
   * ainsi que le message à envoyer. Ce dernier correspond à l'objet MessageModel que l'utilisateur rempli à travers l'input.
   */
  sendMessage() {
    if (this.checkWeather(this.message.content)) {
      this.weatherService.getWeather(this.getCity(this.message.content));
    }
    this.messageService.sendMessage(this.route, this.message);
    let auth: string;
    auth = this.message.from;
    this.message = new MessageModel(1, "", auth);
  }

  addEmot(char: CharacterData) {
    this.message.content = this.message.content + char;
  }

  public checkWeather(message: string) {
    const regex = new RegExp(/\/meteo [a-zA-Z\-]+/);
    return regex.test(message);
  }
  public getCity(message: string): string {
    const regex = new RegExp(/\/meteo [a-zA-Z\-]+/);
    const matches = regex.exec(message);
    const city = matches[0].split(" ");
    return city[1];
  }
}
