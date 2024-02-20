import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  loginErrorMessages={
    required : 'Enter a login',
    minlength: 'more than 3 char'
  }

  constructor(){
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, no$InPassword])
    })
  }

  onSubmit():void{
    console.log(this.loginForm)
  }
}

function no$InPassword(c: AbstractControl):ValidationErrors | null{
  if((c.value as string).indexOf('$')<0){
    return null;
  }else{
    return {no$InPassword: true};
  }

}
