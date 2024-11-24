import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherWeekSummaryResponse } from '../model/WeatherWeekSummaryResponse';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WeatherWeekResponse } from '../model/WeatherWeekResponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiBaseUrl:String = 'http://localhost:8080/weather';
  constructor(private http: HttpClient) {}

  public getWeatherWeek(latitude: number, longitude:number): Observable<WeatherWeekResponse>{
    let params = new HttpParams().set('latitude', latitude).set('longitude',longitude)
    return this.http.get<WeatherWeekResponse>(`${this.apiBaseUrl}/week`,{params})
  }
 

  public getWeekSummary(latitude: number, longitude:number):Observable<WeatherWeekSummaryResponse>{
    let params = new HttpParams().set('latitude', latitude).set('longitude',longitude)
    return this.http.get<WeatherWeekSummaryResponse>(`${this.apiBaseUrl}/summary`,{params})
  }
}
