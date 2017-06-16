import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { WeatherComponent } from "./weather.component";
import {WeatherService} from "../../shared/services/weather/weather.service";


@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    CommonModule,
    NgModule,
  ],
  exports: [WeatherComponent],
  providers: [WeatherService]
})
export class WeatherModule { }
