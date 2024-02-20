import { Component } from '@angular/core';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularCRM';
  fruits = [
    {id:1, variety:'Banane'},
    {id:2, variety:'Pomme'},
    {id:3, variety:'Fraise'},
    {id:4, variety:'Orange'},
    {id:5, variety:'Myrtille'},
  ]
  memory:string='';


  isEntering(i:number):void{
    this.memory = this.fruits[i].variety;
    this.fruits[i].variety="Cerise"
  }
  isLeaving(i:number):void{
    this.fruits[i].variety=this.memory;
  }
}
