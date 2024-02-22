import { Component, OnDestroy } from '@angular/core';
import { DemoObservableService } from '../common/demo-observable.service';
import { Observable, Subject, Subscription, catchError, map, of, take } from 'rxjs';

@Component({
  selector: 'crm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy{

  myObs?:Observable<number>;
  myphone:string='0123456789'
  private subs:Subscription[]=[];

  constructor(private demoObs:DemoObservableService){}
  ngOnDestroy(): void {
    this.subs.forEach(s=>s.unsubscribe());
  }

  testObservable():void{
    console.log('before')
    const subscription = this.demoObs.getObservable().pipe(
      take(2),
      map(x=>x*10)
    ).subscribe({
      next:(value:number)=>{console.log(value)},
      error:(error:Error)=>{console.error(error)},
      complete: ()=>{console.log('complete')}
    })
    this.subs.push(subscription);
    console.log('after')
 /*   setTimeout(() => {
      console.log('subs')
      obs.subscribe({
        next:(value:number)=>{console.log(value)},
        error:(error:Error)=>{console.error(error)},
        complete: ()=>{console.log('complete')}
      })
    }, 1500);*/
  }

  handleAsync(){
    this.myObs= this.demoObs.getObservable()
      .pipe(
        catchError((error)=>of(error))
      );
  }

  testObservable2(){
    const sub = new Subject<number>()
    sub.subscribe({
      next:(v)=>console.log(`first ${v}`)
    })

    setTimeout(()=>{
      sub.subscribe({
        next:(v)=>console.log(`second ${v}`)
      })
    }, 1500)
    setTimeout(() => {
      sub.next(1);
    }, 1000);
    setTimeout(() => {
      sub.next(2);
    }, 2000);
    setTimeout(() => {
      sub.next(3);
    }, 3000);
    setTimeout(() => {
      sub.next(4);
    }, 4000);

  }

}
