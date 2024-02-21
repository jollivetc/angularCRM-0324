import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

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
  passwordErrorMessages={
    required : 'enter a password',
    no$InPassword: 'no $'
  }

  constructor(private authent:AuthenticationService, private router:Router){
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, no$InPassword])
    })
    if(this.authent.isAuthenticated){
      this.authent.disconnect();
    }
  }

  onSubmit():void{
    console.log(this.loginForm.value)
    const user = this.authent.authentUser(this.loginForm.value.login,
                  this.loginForm.value.password);
    if(user){
      this.router.navigateByUrl('/home');
    }
  }
}

function no$InPassword(c: AbstractControl):ValidationErrors | null{
  if((c.value as string).indexOf('$')<0){
    return null;
  }else{
    return {no$InPassword: true};
  }

}
