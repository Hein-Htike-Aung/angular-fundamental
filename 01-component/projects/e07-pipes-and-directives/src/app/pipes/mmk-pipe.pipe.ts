import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mmk'
})
export class MmkPipePipe implements PipeTransform {

  constructor(private df: DecimalPipe) {}

  transform(
    value: number | string | null,
    behind: boolean = true
  ): string | null {

    if(value) {

      let _value = (typeof value == 'number')?
          this.df.transform(value) : value;

      return behind ? `${_value} MMK` : `MMK ${_value}`;
    }

    return null;
  }

}
