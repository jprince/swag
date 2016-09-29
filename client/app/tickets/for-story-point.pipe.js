import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'forStoryPoint'
})

export class ForStoryPointPipe implements PipeTransform {
  transform(value, storyPoints) {
    if (typeof value === "undefined" || value === null) {
      return;
    }
    return value.filter((item) => parseInt(item.fields.customfield_10002) === parseInt(storyPoints));
  }
}
