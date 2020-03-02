import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


GetStudentData():Observable<any>{
  return this.http.get('https://www.jsonblob.com/api/jsonblog/0c2056dd-5ca0-11ea-b3a3-ffb582663182');
  }

 GetWeatherDate():Observable<any>{
   return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=cb2d170ac04ef1d87ddedadaeb18bea7');
 } 

}