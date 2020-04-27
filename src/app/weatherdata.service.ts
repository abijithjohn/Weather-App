import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private http: HttpClient) { }

  getWeatherReport(location = "Thrissur") {
    const appid = '2072812fa0029f3d93a1a2c1b89f755d'
    let weatherData = {}
    this.http.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        appid,
        q: location
      }
    }).subscribe({
      next(data) {
        if (data) {
          const weather = data['weather'][0];
          const main = data['main']
          const sys = data['sys']
          let icon = weather['icon']
          weatherData['name'] = data['name']
          weatherData['icon'] = `http://openweathermap.org/img/w/${icon}.png`
          weatherData['weather'] = weather['main']
          weatherData['temp'] = main['temp']
          weatherData['feelsLike'] = main['feels_like']
          weatherData['tempMax'] = main['temp_max']
          weatherData['tempMin'] = main['temp_min']
          weatherData['humidity'] = main['humidity']
          weatherData['country'] = sys['country']
          weatherData['sunrise'] = sys['sunrise']
          weatherData['sunset'] = sys['sunset']
          weatherData['date'] = data['dt']
          weatherData['wind'] = data['wind']['speed']
        }
      },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    })
    return weatherData
  }



}


