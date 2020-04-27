import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherMonitorComponent } from './weather-monitor.component';

describe('WeatherMonitorComponent', () => {
  let component: WeatherMonitorComponent;
  let fixture: ComponentFixture<WeatherMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
