import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-care-service',
  templateUrl: './care-service.component.html',
  styleUrls: ['./care-service.component.css']
})
export class CareServiceComponent implements OnInit {
  Book = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone : new FormControl('', [Validators.required]),
    body: new FormControl('', Validators.required)
  });
  get f():any{
    return this.Book.controls;
  }

   
  
 
  submit_book(){
    console.log(this.Book.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
