import { Injectable, OnInit, } from '@angular/core';
import { Observable, of } from 'rxjs';
import  DOGS  from './dogdata.json';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})

export class DogsService implements OnInit {
  // private dogData: Dog[] = DOGS;
  private dogData = DOGS;

  constructor() { }

//ian added
//  allDogs(): string[] {
//    return ['Fido','Rover','Rex'];
  
all(): Observable<Dog[]> {
  return of (this.dogData);
}

ngOnInit(): void {
}

}
