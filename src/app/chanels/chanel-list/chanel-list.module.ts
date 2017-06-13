import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ChanelListComponent } from "./chanel-list.component";
import { ChanelModule } from "../chanel";
import { ChanelService } from "../../../shared/services/";

@NgModule({
  declarations: [
    ChanelListComponent
  ],
  imports: [
    CommonModule,
    ChanelModule
  ],
  exports: [ChanelListComponent],
  providers: [ChanelService]
})
export class ChanelListModule { }
