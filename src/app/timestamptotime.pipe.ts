import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamptotime'
})
export class TimestamptotimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    var date = new Date(value * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var timeString = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    var time = timeString.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? 'AM' : 'PM';
      time[0] = +time[0] % 12 || 12;
    }
    var formattedTime
    if (hours > 11) {
      formattedTime = time.join('')
    } else {
      formattedTime = timeString + "AM"
    }
    return formattedTime;
  }

}
