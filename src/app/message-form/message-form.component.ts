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

  constructor(private messageService: MessageService) {
    this.message = new MessageModel(1, "", "");
    this.route = "/messages";
  }

  ngOnInit() {
  }

  /**
   * Fonction pour envoyer un message.
   * L'envoi du message se fait à travers la methode sendMessage du service MessageService.
   * Cette méthode prend en paramètre la route pour envoyer un message (:id/messages avec id un entier correspondant à l'id du channel)
   * ainsi que le message à envoyer. Ce dernier correspond à l'objet MessageModel que l'utilisateur rempli à travers l'input.
   */
  sendMessage() {
    this.messageService.sendMessage(this.route, this.message);
    let auth: string;
    auth = this.message.from;
    this.message = new MessageModel(1, "", auth);
  }

  addEmot(chaine: String) {
    this.message.content = this.message.content + chaine;
  }
  onKey(event: any) {
    if (event.keyCode === 13) {
      this.sendMessage();
    }
  }
  withoutKey(event: any) {
    if (event.keyCode === 13) {
      this.message.content = "";
    }
  }
}
