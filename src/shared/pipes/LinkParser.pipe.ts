/**
 * Created by user on 15/06/17.
 */
import { Pipe, PipeTransform } from "@angular/core";
import {isUndefined} from "util";
@Pipe({
  name: "linkParser"
})
export class LinkParser implements PipeTransform {
  transform(value: string): string {
    let res = value;
    if (this.checkYoutube(res)) {
      const idY = this.getYoutubeId(res);
      if (idY.length > 1) {
        res += "<br><iframe width=\"640\" height=\"360\" src=\"" + "https://www.youtube.com/embed/" + idY;
        res += "\"></iframe>";
        console.log(res);
      }
    }
    if (this.checkTwitter(res)) {
      const tweet = this.getTwitter(res);
      res += "<br><iframe width=\"640\" height=\"360\" src=http://twitframe.com/show?url=" + tweet;
      res += "&output=embed></iframe>";
    }
    if (this.checkInsta(res)) {
      res += "<br><iframe width=\"640\" height=\"360\" src=" + res;
      res += "></iframe>";
    }
    return res;
  }
  public checkYoutube(url: string) {
    if (isUndefined(url)) {
      return false;
    }
    const a = url.includes("youtube.com/");
    const b = url.includes("youtu.be/");
    const c = url.includes("v=");
    return (a || b) && c;
  }
  public getYoutubeId(url: string) {
    const regex = new RegExp(/(?:\?v=)([^&]+)(?:\&)*/);
    const matches = regex.exec(url);

    return matches[1];
  }
  public checkTwitter(url: string) {
    if (isUndefined(url)) {
      return false;
    }
    const a = url.includes("twitter.com/");
    const b = url.includes("/status/");
    return a && b ;
  }
  public getTwitter(url: string) {
    const regex = new RegExp(/http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/status\/([0-9]+)/);
    const matches = regex.exec(url);
    console.log(matches);
    return matches[0];
  }
  public checkInsta(url: string) {

    if (isUndefined(url)) {
      return false;
    }
    return url.includes("instagram");
  }
}
