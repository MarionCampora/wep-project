/**
 * Created by user on 13/06/17.
 */
import { Component, OnInit } from "@angular/core";
import {ChanelModel} from "../../shared/models/ChannelModel";


@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"]
})
export class ChanelFormComponent implements OnInit {

  public chanel: ChanelModel;
  private route: string;

  constructor(private ChanelService: ChanelModel) {

  }

  ngOnInit() { }

  /**
   * Fonction pour envoyer un message.
   * L'envoi du message se fait à travers la methode sendMessage du service MessageService.
   * Cette méthode prend en paramètre la route pour envoyer un message (:id/messages avec id un entier correspondant à l'id du channel)
   * ainsi que le message à envoyer. Ce dernier correspond à l'objet MessageModel que l'utilisateur rempli à travers l'input.
   */
  sendMessage() {
    console.log("Click!");
  }
}
