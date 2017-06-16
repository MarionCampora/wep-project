/**
 * Created by user on 15/06/17.
 */
import { Pipe, PipeTransform } from "@angular/core";
import {isNullOrUndefined} from "util";

@Pipe({
  name: "userInput"
})
export class UserInputPipe implements PipeTransform {
  transform(value: string): string {
    let res = value;
    if (!isNullOrUndefined(value)) {
      res = res.replace(/:\)/gi, "🙂");
      res = res.replace(/;\)/gi, "😉");
      res = res.replace(/:'\(/gi, "😪");
      res = res.replace(/:\(/gi, "🙁");
      res = res.replace(/:D/gi, "😃");
      res = res.replace(/:p/gi, "😛");
      res = res.replace(/<3/gi, "❤️");
      res = res.replace(/:o/gi, "😮");
    }
    return res;
  }
}
