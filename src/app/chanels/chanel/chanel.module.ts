import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ChanelComponent} from "./chanel.component";

@NgModule({
  declarations: [
    ChanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ChanelComponent],
  providers: []
})
export class ChanelModule { }
