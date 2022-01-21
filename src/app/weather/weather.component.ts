import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherserviceService } from '../weatherservice.service';
import { ForecastComponent } from '../forecast/forecast.component';
import { ForecastService } from '../forecast.service';



export const getWeatherIcon = (icon: string): string => {
  return icon ? `http://openweathermap.org/img/wn/${icon}@4x.png` : "";
};

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  public weatherSearchForm!: FormGroup 
  weatherData: any;
  location: any = [];
  
 
  constructor(private formBuilder: FormBuilder,  private weatherService: WeatherserviceService) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({location:[""]});
}


  sendToWeatherService(formValues: any) {
    this.weatherService
    .getWeather(formValues.location)
    .subscribe(data => this.weatherData = data)
      console.log(this.weatherData);
     

  }

 
  getIcon() : string
  {
    return getWeatherIcon(this.weatherData?.weather[0]?.icon);

  }

  /*CurrentLocation()
  {
    this.weatherSearchForm = this.formBuilder.group({location:[""]});
    
      navigator.geolocation.getCurrentPosition((pos)=>{
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.weatherService.getlocalWeather(lat,lon).subscribe((data) => {
      console.log(data);
      var Currentloc = JSON.stringify(data);
      this.weatherData = Currentloc;
     });
     
   })*/
  }



