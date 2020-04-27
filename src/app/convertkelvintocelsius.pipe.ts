import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertkelvintocelsius'
})
export class ConvertkelvintocelsiusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let result
    result = (value - 273.15).toFixed(1);
    return result + "℃";
  }

}
