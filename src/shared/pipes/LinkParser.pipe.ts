/**
 * Created by user on 15/06/17.
 */
import { Pipe, PipeTransform } from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
@Pipe({
  name: "linkParser"
})
export class LinkParser implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(value: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
