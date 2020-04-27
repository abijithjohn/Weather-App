import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from '../weatherdata.service';

@Component({
  selector: 'app-weather-monitor',
  templateUrl: './weather-monitor.component.html',
  styleUrls: ['./weather-monitor.component.scss']
})
export class WeatherMonitorComponent implements OnInit {
  weatherReport;
  cities = ["Koratty", "Angamaly", "Thrissur", "Pattikad", "Palakkad", "Paris", "New york"]

  constructor(private weatherData: WeatherdataService) { }

  ngOnInit(): void {
    this.getWeatherDetails(this.cities[0])
  }

  getWeatherDetails(location) {
    this.weatherReport = this.weatherData.getWeatherReport(location)
  }




}
