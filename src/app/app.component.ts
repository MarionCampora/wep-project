import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  private static title = "Default channel";

  public static updateTitle(newT: string): void {
    this.title = newT;
  }

  constructor() {
    Observable.create();
  }
  staticGetTitle(): string {
    return AppComponent.title;
  }
}
