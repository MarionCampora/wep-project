import { Component, OnInit } from "@angular/core";

import { ChanelService } from "../../../shared/services";
import { ChanelModel } from "../../../shared/models/ChannelModel";

@Component({
  selector: "app-chanel-list",
  templateUrl: "./chanel-list.component.html",
  styleUrls: ["./chanel-list.component.css"]
})
export class ChanelListComponent implements OnInit {

  public chanelList: ChanelModel[];
  public i = 0;

  constructor(private chanelService: ChanelService) {}

  ngOnInit() {
    this.chanelService.getChanels(this.i);
    setInterval(() => this.chanelService.getChanels(this.i), 1000);
    this.chanelService.chanelList$.subscribe((chanels) => this.chanelList = chanels);
  }
  nextPageChanel() {
    this.chanelService.getChanels(++this.i);
  }
  previousPageChanel() {
    this.chanelService.getChanels(--this.i);
  }
  refreshChanel() {
    this.chanelService.getChanels(this.i);
  }
}
