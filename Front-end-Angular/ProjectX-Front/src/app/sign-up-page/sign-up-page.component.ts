import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  SignUpForm = this.fb.group({
    userFirstName: ['', Validators.required],
    userlastName: ['',Validators.required],
    gender: ['',Validators.required],
    email: ['',Validators.required, Validators.email],
    password: ['',Validators.required],

    address: this.fb.group({
      street: ['',Validators.required],
      city: ['',Validators.required],
      country: ['',Validators.required]
    }),

    child: this.fb.group({
      childName: ['',Validators.required],
      childAge: ['',Validators.required],
      childGender: ['',Validators.required],
      disability:['',Validators.required]
    })

  });
  

  onSubmit() {
    console.warn(this.SignUpForm.value);
  }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


}
