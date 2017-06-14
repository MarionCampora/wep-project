import { Component, Input, OnInit } from "@angular/core";

import { MessageModel } from "../../../shared/models/MessageModel";
import { MessageService } from "../../../shared/services/message/message.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {

  @Input() message: MessageModel;

  constructor(public messageService: MessageService) {
    // this.message = new MessageModel(0, "Hello!");
  }
  /**
   * Fonction ngOnInit.
   * Cette fonction est appelée après l'execution de tous les constructeurs de toutes les classes typescript.
   * Cette dernière s'avère très utile lorsque l'on souhaite attendre des valeurs venant de d'autres composants.
   * Notre composant qui prend en @Input un message. Les @Input ne sont accessibles uniquement à partir du ngOnInit,
   * pas dans le constructeur. Si vous souhaitez manipuler votre message lors du chargement du composant, vous devez
   * le faire dans le ngOnInit.
   */
  ngOnInit() {
    if (this.messageService.checkYoutube(this.message.content)) {
      this.message.content = "<iframe width=\"640\" height=\"360\" src=" + this.message.content + "></iframe>";
    }
  }

}
