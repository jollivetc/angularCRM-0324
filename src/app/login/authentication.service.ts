import { Injectable } from '@angular/core';
import { User } from './model/user';

const CRM_USER_KEY='angularCRM.user.key';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser?:User;
  constructor() {
    if(sessionStorage.getItem(CRM_USER_KEY)!==null){
      this.currentUser = JSON.parse(sessionStorage.getItem(CRM_USER_KEY)!);
    }
  }

  get isAuthenticated():boolean{
    return !!this.currentUser;
  }

  disconnect():void{
    this.currentUser=undefined;
    sessionStorage.clear()
  }

  authentUser(login:string, password:string):User{
    this.currentUser= {
      id:1,
      login:login,
      firstname:'John',
      lastname:'Doe'
    }
    sessionStorage.setItem(CRM_USER_KEY, JSON.stringify(this.currentUser));
    return this.currentUser
  }
}
