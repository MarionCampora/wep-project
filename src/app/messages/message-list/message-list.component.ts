import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../../shared/services";
import { MessageModel } from "../../../shared/models/MessageModel";
import {IntervalObservable} from "rxjs/observable/IntervalObservable";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"]
})
export class MessageListComponent implements OnInit {

  public messageList: MessageModel[];
  private route: string;
  public i = 0;

  constructor(private messageService: MessageService) {
    this.route = "/messages";
  }

  /**
   * Fonction ngOnInit.
   * Cette fonction est appelée après l'execution de tous les constructeurs de toutes les classes typescript.
   * Cette dernière s'avère très utile lorsque l'on souhaite attendre des valeurs venant de d'autres composants.
   * Le composant MessageComponent prend en @Input un message. Les @Input ne sont accessibles uniquement à partir du ngOnInit,
   * pas dans le constructeur.
   * En general, l'utilisation des services dans le NgOnInit est une bonne practice. Le constructeur ne doit servir qu'à
   * l'initialisation simple des variables. Pour plus d'information sur le ngOnInit, il y a un lien dans le README.
   */
  ngOnInit() {
    this.messageService.getMessages(this.i);
    this.messageService.messageList$.subscribe((messages) => this.messageList = messages);
    IntervalObservable.create(2000).forEach(i => this.messageService.getMessages(this.i));
    // setInterval(() => {this.messageService.messageList$.subscribe((message) => this.messageList = message); }, 2000);
  }
  prevs() {
    if (this.i === 0) { this.i++; }
    this.messageService.getMessages(this.i++);
    this.messageService.messageList$.subscribe((messages) => this.messageList = messages);
  }
  lasts() {
    this.i = 0;
    this.messageService.getMessages(this.i);
    this.messageService.messageList$.subscribe((messages) => this.messageList = messages);
  }
  nexts() {
    this.messageService.getMessages(--this.i);
    this.messageService.messageList$.subscribe((messages) => this.messageList = messages);
  }
  refresh() {
    this.messageService.getMessages(this.i);
    this.messageService.messageList$.subscribe((messages) => this.messageList = messages);
  }
  trackBymessage(index: number, message: MessageModel): number {
    if (message == null) {
      return 0;
    }
    return message.id;
  }
}
