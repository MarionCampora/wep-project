/**
 * Created by Marion on 15/06/2017.
 */

import { Injectable } from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {KEY} from "../../constants/urls";
import {WeatherModel} from "../../models/WeatherModel";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Injectable()
export class WeatherService {
  public weather$: ReplaySubject<WeatherModel>;
  constructor(private http: Http) {
    this.weather$ = new ReplaySubject(1);
  }
  public getWeather(city: string) {
    const firstpart = "http://api.openweathermap.org/data/2.5/weather?units=metric&lang=FR&q=";
    const lastpart = "&appid=";
    const url = firstpart + city + lastpart + KEY;
    this.http.get(url)
      .subscribe((response) => this.weather$.next(this.extractAndUpdateWeather(response, city)));
  }
  extractAndUpdateWeather(response: Response, city: string): WeatherModel {
    return new WeatherModel(city, response.json().weather[0].description, response.json().main.temp);
  }
}
