import { Component, Input, OnInit } from "@angular/core";

import {ChanelModel} from "../../../shared/models/ChannelModel";
import {MessageService} from "../../../shared/services/message/message.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: "app-chanel",
  templateUrl: "./chanel.component.html",
  styleUrls: ["./chanel.component.css"]
})
export class ChanelComponent implements OnInit {
  @Input() chanel: ChanelModel;

  constructor(private messageService: MessageService) {
    // this.chanel = new ChanelModel(0, "0", "0", "0");
  }
  /**
   * Fonction ngOnInit.
   * Cette fonction est appelée après l'execution de tous les constructeurs de toutes les classes typescript.
   * Cette dernière s'avère très utile lorsque l'on souhaite attendre des valeurs venant de d'autres composants.
   * Notre composant qui prend en @Input un message. Les @Input ne sont accessibles uniquement à partir du ngOnInit,
   * pas dans le constructeur. Si vous souhaitez manipuler votre message lors du chargement du composant, vous devez
   * le faire dans le ngOnInit.
   */
  ngOnInit() { }

  selectChanel(id: number) {
    this.messageService.setId(id);
    this.messageService.getMessages(0);
    AppComponent.updateTitle(this.chanel.name);
  }

}
