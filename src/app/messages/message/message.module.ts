import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MessageComponent } from "./message.component";
import {WeatherService} from "../../../shared/services/weather/weather.service";
import {LinkParser} from "../../../shared/pipes/LinkParser.pipe";
import {UserInputPipe} from "../../../shared/pipes/UserInputPipe.pipe";

@NgModule({
  declarations: [
    MessageComponent,
    LinkParser,
    UserInputPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [MessageComponent],
  providers: [WeatherService, LinkParser, UserInputPipe]
})
export class MessageModule { }
