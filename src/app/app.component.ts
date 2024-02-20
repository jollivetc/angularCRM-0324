import { Component } from '@angular/core';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularCRM';

  handle($event:string):void{
    console.log($event)
  }
  handle2($event:string):void{
    console.error($event)
  }
}
