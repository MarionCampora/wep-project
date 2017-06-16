import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MessageComponent } from "./message.component";
import {WeatherService} from "../../../shared/services/weather/weather.service";
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
  providers: [WeatherService, LinkParser]
})
export class MessageModule { }
