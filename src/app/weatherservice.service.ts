import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http: HttpClient) { }

  getWeather(location: string): Observable<any> {
    return this.http
               .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8387a71cdb9857de72acb8b7a3e0fd10&units=metric`
     );
     
}

 getlocalWeather(lat: any, lon: any): Observable<any>{

  return this.http
             .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8387a71cdb9857de72acb8b7a3e0fd10&units=metric`);


}

}
