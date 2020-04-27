import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherMonitorComponent } from './weather-monitor/weather-monitor.component';
import { HttpClientModule } from '@angular/common/http';
import { ConvertkelvintocelsiusPipe } from './convertkelvintocelsius.pipe';
import { TimestamptotimePipe } from './timestamptotime.pipe';
import { TimestamptodatePipe } from './timestamptodate.pipe';
import { CountrynamePipe } from './countryname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherMonitorComponent,
    ConvertkelvintocelsiusPipe,
    TimestamptotimePipe,
    TimestamptodatePipe,
    CountrynamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
