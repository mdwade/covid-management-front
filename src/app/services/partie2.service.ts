import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppParams } from '../params/app.params';

@Injectable({
  providedIn: 'root'
})
export class Partie2Service {

  constructor(private http: HttpClient) { }

  getQ1(isoCode: any, startedDate: any, endedDate: any){
    return this.http.get(AppParams.API_URL + `/ii/q1/${isoCode}/${startedDate}/${endedDate}`, );
  }

  getQ2(isoCode: any, startedDate: any, endedDate: any){
    return this.http.get(AppParams.API_URL + `/ii/q2/${isoCode}/${startedDate}/${endedDate}`, );
  }

  getQ3(date: any){
    return this.http.get(AppParams.API_URL + `/ii/q3/${date}`, );
  }

  getQ4(location: any){
    return this.http.get(AppParams.API_URL + `/ii/q4/${location}`, );
  }
}
