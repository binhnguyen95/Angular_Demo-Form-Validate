import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {
  title = 'reactive-form';

  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'Cambodia'},
    {id: 3, name: 'American Thor'},
  ];

  contactForm = new FormGroup({
    firstname: new FormControl("",[Validators.required,Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")]),
    lastname: new FormControl("",[Validators.required, Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")]),
    email: new FormControl("",[Validators.required, Validators.email]),
    gender: new FormControl("",[Validators.required]),
    country: new FormControl("",[Validators.required]),
  });

  get firstname(){
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get country() {
    return this.contactForm.get('country');
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
