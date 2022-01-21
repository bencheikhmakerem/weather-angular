import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ForecastData } from './forecastData';

export const getWeatherIcon = (icon: string): string => {
  return icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : "";
};


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  
  weatherData: any;
  forecastCity : ForecastData []=[];
  forecastForm!:FormGroup;
  
  
  constructor(private formBuilder: FormBuilder,private forcastservice: ForecastService) { }

  ngOnInit(): void {

      this.forecastForm = new FormGroup({
      forecastCity: new FormControl('')

    });
  
    }

    onSubmit()
   {
     this.forecastCity.splice(0, this.forecastCity.length)
     console.log(this.forecastForm)
     this.forcastservice.getWeatherForecast(this.forecastForm.value.forecastCity)
                        .subscribe((data)=> {
                         console.log(data);
                         for(let i =0; i<data.list.length;i+=8)
                         {
                            const temporary = new ForecastData(data.list[i].dt_txt,
                                                               data.list[i].main.temp,
                                                               data.list[i].weather[0].icon,                
                                                               data.list[i].main.temp_max,
                                                               data.list[i].main.temp_min)
                            this.forecastCity.push(temporary)
                         }
                         console.log(this.forecastCity);
     });


   }
   
   getIcon(icon: any): string 
   {
    return getWeatherIcon(icon);
   }
       
  
    }
  
    
