import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from './model/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http:HttpClient) { }

  getConsumers(searched:string):Observable<Consumer[]>{
    if(searched){
      return this.http.get<Consumer[]>(`/api/consumers?q=${searched}`)
    }
    return this.http.get<Consumer[]>('/api/consumers')
  }

}
