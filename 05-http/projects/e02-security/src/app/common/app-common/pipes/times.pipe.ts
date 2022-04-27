import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'times',
})
export class TimesPipe implements PipeTransform {
  transform(value: any): unknown {
    if (value) {
      return `${value.startTime} - ${value.endTime}`;
    }

    return null;
  }
}
