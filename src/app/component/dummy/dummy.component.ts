import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'crm-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent {
  @Input()
  label:string=''
  @Input()
  label2:string=''

  @Output()
  clicked:EventEmitter<string>=new EventEmitter<string>()

  launchEvent():void{
    this.clicked.emit(`${this.label} launched`)
  }
}
