import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppParams } from '../params/app.params';

@Injectable({
  providedIn: 'root'
})
export class Partie1Service {

  constructor(private http: HttpClient) { }

  getQ1(date: any){
    return this.http.get(AppParams.API_URL + `/i/q1/${date}`, );
  }

  getQ2(continent: any){
    return this.http.get(AppParams.API_URL + `/i/q2/${continent}`, );
  }

  getQ3(){
    return this.http.get(AppParams.API_URL + `/i/q3/`, );
  }
}
