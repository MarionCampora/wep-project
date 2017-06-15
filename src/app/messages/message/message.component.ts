import { Component, Input, OnInit } from "@angular/core";

import { MessageModel } from "../../../shared/models/MessageModel";
import { MessageService } from "../../../shared/services/message/message.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {

  @Input() message: MessageModel;

  constructor(public messageService: MessageService, private sanitizer: DomSanitizer) {
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
      const idY = this.messageService.getYoutubeId(this.message.content);
      if (idY.length > 1) {
        this.message.content += "<br><iframe width=\"640\" height=\"360\" src=\"" + "https://www.youtube.com/embed/" + idY;
        this.message.content += "\"></iframe>";
      }
    }
    if (this.messageService.checkTwitter(this.message.content)) {
      const tweet = this.messageService.getTwitter(this.message.content);
      this.message.content += "<br><iframe width=\"550\" height=\"480\" src=http://twitframe.com/show?url=" + tweet;
      this.message.content += "&output=embed></iframe>";
    }
    if (this.messageService.checkInsta(this.message.content)) {
      const insta = this.messageService.getInstagram(this.message.content);
      this.message.content += "<br><iframe width=\"430\" height=\"550\" src=https:///instagram.com/p/" + insta + "/embed/?size=t";
      this.message.content += "></iframe>";
    }
  }

}
