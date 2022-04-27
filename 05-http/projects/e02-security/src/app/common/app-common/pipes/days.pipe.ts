import { Pipe, PipeTransform } from '@angular/core';
import { DAYS } from '../../app-service/model/app.model';

@Pipe({
  name: 'days',
})
export class DaysPipe implements PipeTransform {
  transform(value: any): unknown {
    if (value.length) {
      // Value is array
      const arr: boolean[] = value;

      return arr
        .map((value, index) => {
          if (value) {
            return ' ' + DAYS[index];
          } else {
            return null;
          }
        })
        .filter((mappedValue) => mappedValue !== null);
    }
    // Value is single
    return DAYS[value];
  }
}
