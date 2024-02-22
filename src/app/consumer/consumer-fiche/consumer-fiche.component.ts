import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'crm-consumer-fiche',
  templateUrl: './consumer-fiche.component.html',
  styleUrls: ['./consumer-fiche.component.scss']
})
export class ConsumerFicheComponent implements OnInit, OnDestroy{

  consumerForm:FormGroup;
  private subs:Subscription[]=[]
  private consumer:Consumer|null=null;

  constructor(private consumerService:ConsumerService, private router:Router, private activatedRoute: ActivatedRoute){
    this.consumerForm = new FormGroup({
      civility:new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }
  ngOnDestroy(): void {
    this.subs.forEach(s=>s.unsubscribe());
  }
  ngOnInit(): void {
    const consumerId= this.activatedRoute.snapshot.paramMap.get('id');
    if(consumerId){
      this.subs.push(this.consumerService.getById(consumerId).subscribe({
        next:(consumer:Consumer)=> {
          this.consumerForm.patchValue(consumer);
          this.consumer = consumer;
        },
        error:(error:Error)=> console.error(error),
        complete:()=>{}
      }))
    }
  }

  onSubmit():void{
    const sendValue = {...this.consumer, ...this.consumerForm.value}
    this.subs.push(this.consumerService.save(sendValue).subscribe({
      next:(value:Consumer)=>this.router.navigateByUrl('/consumers'),
      error:(error:Error)=> alert(error),
      complete:()=>{}
    }))
  }

}
