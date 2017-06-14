import {Component, Input} from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  private static title = "Chat Groupe P";

  public static updateTitle(newT: string): void {
    this.title = newT;
    console.log(this.title);
    console.log(newT);
  }

  constructor() {
    Observable.create();
  }
  staticGetTitle(): string {
    return AppComponent.title;
  }
}
