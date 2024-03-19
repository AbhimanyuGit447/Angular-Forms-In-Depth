import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { PasswordStrtengthDirective } from '../directives/password-strength.directive';
import { createPasswordValidator } from '../createPssword.Validator';


@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {


  form = this.fb.group({
    email : ["", {
      validators : [Validators.required, Validators.email],
      updateOn : 'blur'
    }],
    password : ['', [Validators.required, Validators.minLength(8), createPasswordValidator()] ]
  });

  constructor(private fb : NonNullableFormBuilder) {


  }

  ngOnInit() {

  }


  login(){
   const formValue =  this.form.value

   this.form.patchValue({

   })

  }

  reset(){
    this.form.reset();
    console.log(this.form.value);

  }

  get email(){
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }



}
