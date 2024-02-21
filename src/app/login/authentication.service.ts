import { Injectable } from '@angular/core';
import { User } from './model/user';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const CRM_USER_KEY='angularCRM.user.key';
const CRM_TOKEN_KEY='angularCRM.jwt.key';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser?:User;
  private jwtToken?:string;

  constructor(private http:HttpClient) {
    if(sessionStorage.getItem(CRM_USER_KEY)!==null){
      this.currentUser = JSON.parse(sessionStorage.getItem(CRM_USER_KEY)!);
    }
    if(sessionStorage.getItem(CRM_TOKEN_KEY)!==null){
      this.jwtToken = sessionStorage.getItem(CRM_TOKEN_KEY)!;
    }
  }

  get jwt():string|undefined{
    return this.jwtToken;
  }
  get isAuthenticated():boolean{
    return !!this.currentUser;
  }

  disconnect():void{
    this.currentUser=undefined;
    sessionStorage.clear()
  }

  authentUser(login:string, password:string):Observable<User>{
    return this.http.post<AuthentResponse>('/api/auth/login', {email:login, password:password})
        .pipe(
          map((resp:AuthentResponse)=>{
            this.currentUser = resp.user;
            this.jwtToken= resp.token;

            sessionStorage.setItem(CRM_USER_KEY, JSON.stringify(this.currentUser));
            sessionStorage.setItem(CRM_TOKEN_KEY, this.jwtToken);

            return this.currentUser;
          })
        )
  }
}

interface AuthentResponse{
  user:User,
  token:string
}
