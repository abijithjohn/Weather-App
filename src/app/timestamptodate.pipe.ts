import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamptodate'
})
export class TimestamptodatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    var todate = new Date(value * 1000).getDate();
    var tomonth = new Date(value * 1000).getMonth() + 1;
    var toyear = new Date(value * 1000).getFullYear();
    var originalDate = todate + '/' + tomonth + '/' + toyear;
    return originalDate
  }

}
