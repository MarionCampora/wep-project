import {Component, Input, OnInit} from "@angular/core";

import { MessageModel } from "../../shared/models/MessageModel";
import {isUndefined} from "util";


@Component({
  selector: "app-frame",
  templateUrl: "./frame.component.html",
  styleUrls: ["./frame.component.css"]
})
export class FrameComponent implements OnInit {
  protected placedFrame = 0;

  @Input() message: MessageModel;
  public link: string;
  constructor() {
    this.message = new MessageModel(0, "");
    this.link = "";
  }

  ngOnInit() {
    if (this.checkPicture() && this.placedFrame === 0) {
      this.placedFrame = 1;
    }
    if (this.checkYoutube() && this.placedFrame === 0) {
      this.placedFrame = 2;
    }
    if (this.checkTwitter() && this.placedFrame === 0) {
      this.placedFrame = 3;
    }
    if (this.checkInsta() && this.placedFrame === 0) {
      this.placedFrame = 4;
    }
    console.log(this.placedFrame);
  }

  public checkYoutube() {
    if (isUndefined(this.message.content)) {
      return false;
    }
    const a = this.message.content.includes("youtube.com/");
    // const b = url.includes("youtu.be/");
    const c = this.message.content.includes("v=");
    return a && c;
  }
  public getYoutubeUrl() {
    const regex = new RegExp(/(?:\?v=)([0-9A-Za-z\-]+)(?:(&))*/);
    const matches = regex.exec(this.message.content);
    return "https://www.youtube.com/embed/" + matches[1];
  }
  public checkTwitter() {
    if (isUndefined(this.message.content)) {
      return false;
    }
    const a = this.message.content.includes("twitter.com/");
    const b = this.message.content.includes("/status/");
    return a && b;
  }
  public getTwitter() {
    const regex = new RegExp(/http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/status\/([0-9]+)/);
    const matches = regex.exec(this.message.content);

    return "http://twitframe.com/show?url=" + matches[0] + "&output=embed";
  }
  public checkInsta() {
    if (isUndefined(this.message.content)) {
      return false;
    }
    return this.message.content.includes("instagram.com/p/");
  }
  public getInstagram() {
    const regex = new RegExp(/instagram.com\/p\/([0-9A-Za-z\-]+)(\/(\?[a-zA-Z0-9_\-=&])?)?/);
    const matches = regex.exec(this.message.content);
    return "https:///instagram.com/p/" + matches[1] + "/embed/?size=t";
  }
  public checkPicture() {
    if (isUndefined(this.message.content)) {
      return false;
    }
    const regex = new RegExp(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|bmp|svg|PNG|JPG|JPEG|GIF|BMP|SVG))( |$)/);
    const matches = regex.exec(this.message.content);
    return matches != null;
  }
  public getPicture() {
    const regex = new RegExp(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|bmp|svg|PNG|JPG|JPEG|GIF|BMP|SVG))( |$)/);
    const matches = regex.exec(this.message.content);
    return matches[0];
  }
}
