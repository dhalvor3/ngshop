import { Component, Input, OnInit } from '@angular/core';
import { DogsService } from  '../dogs.service';
import { Dog } from "../dog";
import { Counter } from '../counter';

@Component({
  selector: 'dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
@Input() dog: Dog;
@Input() counter: Counter = new Counter;

 counters: Counter[];

constructor() { 
 this.counters=[];
}

  ngOnInit(): void {
    
    const likeCntr = new Counter();
    this.counters.push(likeCntr);
  }

  favorite(): void {

  }

  like(): void {
    this.counter.value++;

  }
}
