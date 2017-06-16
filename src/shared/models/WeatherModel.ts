/**
 * Created by Marion on 15/06/2017.
 */

export class WeatherModel {
/**
 * Ville de la météo
 */
public city: string;

/**
 * Etat du ciel (la météo quoi)
 */
public sky: string;

/**
 * Température
 */
public temp: number;

constructor(city: string, sky: string, temp: number) {
  this.city = city;
  this.sky = sky;
  this.temp = temp;
  }

  public printWeather(): string {
    return "Le temps est " + this.sky + " et la température est de " + this.temp + "°C à " + this.city;
  }
}
