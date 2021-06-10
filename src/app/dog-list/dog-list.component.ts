import { Component, OnInit } from '@angular/core';
import { DogsService } from  '../dogs.service';
import { Dog } from "../dog";

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  title:string = 'Dog List';
  dogs: Dog[] = [];
//  dogs: object[] = [];

  constructor(private dogsService: DogsService) { 
    console.log(dogsService);

//    this.dogs = [];
  }

  
  ngOnInit(): void {
    // this.dogs = this.dogsService.all();
    // console.log(this.dogsService.all());
    this.getUpdates(); 
   };

   getUpdates() {
     return this.dogsService.all().subscribe(data => this.dogs = data)
   }

  }


