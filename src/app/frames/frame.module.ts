import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import {FrameComponent} from "./frame.component";
import {LinkParser} from "../../shared/pipes/LinkParser.pipe";



@NgModule({
  declarations: [
    FrameComponent,
    LinkParser
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [FrameComponent],
  providers: [LinkParser],
})
export class FrameModule { }
