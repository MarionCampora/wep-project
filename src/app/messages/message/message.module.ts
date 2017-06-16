import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MessageComponent } from "./message.component";
import {LinkParser} from "../../../shared/pipes/LinkParser.pipe";

@NgModule({
  declarations: [
    MessageComponent,
    LinkParser
  ],
  imports: [
    CommonModule
  ],
  exports: [MessageComponent],
  providers: [LinkParser]
})
export class MessageModule { }
