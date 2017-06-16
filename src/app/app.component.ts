import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {MessageService} from "../shared/services/message/message.service";
import {URLSERVER} from "../shared/constants/urls";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  private static title = "Welcome in the P group's chat";

  public static updateTitle(newT: string): void {
    this.title = newT;
  }

  constructor(private messageService: MessageService) {
    Observable.create();
  }
  staticGetTitle(): string {
    return AppComponent.title;
  }
  public isChannel(): boolean {
    return this.messageService.id === 0.5;
  }
}
