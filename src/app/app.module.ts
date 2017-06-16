import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { MessageComponent, MessageListComponent } from "./messages";
import { MessageFormComponent } from "./message-form";
import { MessageService } from "../shared/services/message/message.service";
import { ChanelFormComponent } from "./chanel-form/chanel-form.component";
import { ChanelService } from "../shared/services/chanels/chanel.service";
import {ChanelListComponent} from "./chanels/chanel-list/chanel-list.component";
import {ChanelComponent} from "./chanels/chanel/chanel.component";
import {UserInputPipe} from "../shared/pipes/UserInputPipe.pipe";

import {WeatherService} from "../shared/services/weather/weather.service";
import {LinkParser} from "../shared/pipes/LinkParser.pipe";
import {FrameComponent} from "./frames/frame.component";
import {WeatherComponent} from "./weather/weather.component";

@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent,
    MessageComponent,
    ChanelFormComponent,
    ChanelListComponent,
    ChanelComponent,
    UserInputPipe,
    LinkParser,
    FrameComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MessageService, ChanelService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
