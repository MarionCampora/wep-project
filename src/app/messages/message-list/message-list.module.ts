import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MessageListComponent } from "./message-list.component";
import { MessageModule } from "../message";
import { MessageService } from "../../../shared/services";
import {WeatherService} from "../../../shared/services/weather/weather.service";

@NgModule({
  declarations: [
    MessageListComponent
  ],
  imports: [
    CommonModule,
    MessageModule
  ],
  exports: [MessageListComponent],
  providers: [MessageService, WeatherService]
})
export class MessageListModule { }
