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

  constructor(private chanelService: ChanelService) {}

  ngOnInit() {
    /*setInterval(() => this.messageService.getMessages(this.route), 1000);
    this.chanelService.messageList$.subscribe((messages) => this.messageList = messages);*/
    this.chanelService.getChanels();
    setInterval(() => this.chanelService.getChanels(), 60000);
    this.chanelService.chanelList$.subscribe((chanels) => this.chanelList = chanels);

  }
}
