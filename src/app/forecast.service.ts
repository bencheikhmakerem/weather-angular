import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http:HttpClient) { }

  getWeatherForecast(location: any): Observable<any>{

    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=8387a71cdb9857de72acb8b7a3e0fd10&units=metric`)
  
  
}
   

   
}
