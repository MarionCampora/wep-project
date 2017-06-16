import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MessageComponent } from "./message.component";
import {WeatherService} from "../../../shared/services/weather/weather.service";

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MessageComponent],
  providers: [WeatherService]
})
export class MessageModule { }
