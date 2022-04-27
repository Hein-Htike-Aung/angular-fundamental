import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days',
})
export class DaysPipe implements PipeTransform {
  transform(value: any): unknown {

    
    if (value.length) {
      const arr: boolean[] = value;
      return arr
        .map((value, index) => (value ? ' ' + this.getDays(index) : null))
        .filter((value) => value != null);
    }

    return this.getDays(value);
  }

  getDays(index: number) {
    let result = '';

    switch (index) {
      case 0:
        result = 'Mon';
        break;
      case 1:
        result = 'Tue';
        break;
      case 2:
        result = 'Wed';
        break;
      case 3:
        result = 'Thur';
        break;
      case 4:
        result = 'Fri';
        break;
      case 5:
        result = 'Sat';
        break;
      case 6:
        result = 'Sun';
        break;
    }
    return result;
  }
}
