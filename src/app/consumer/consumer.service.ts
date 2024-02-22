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

  getById(id:string):Observable<Consumer>{
    return this.http.get<Consumer>(`/api/consumers/${id}`)
  }

  save(consumer:Consumer):Observable<Consumer> {
    if(consumer.id){
      return this.http.put<Consumer>(`/api/consumers/${consumer.id}`, consumer);
    }else{
      return this.http.post<Consumer>("/api/consumers", consumer);
    }
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`/api/consumers/${id}`)
  }

}
