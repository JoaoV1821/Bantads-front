import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
  
  showPassword : boolean = false;
  submitted = false;

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password:  new FormControl(''),

  })

  email!: string;
  password!: string;

  constructor(private  fb: FormBuilder) {}
    
  
  ngOnInit(): void {
      this.form = this.fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
        }
      
      )
  }

  get f(): {[key: string]: AbstractControl} { return this.form.controls; }

  togglePassword() {
      this.showPassword = !this.showPassword;
  
    }

  validateEmail(email:string) : boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

    return emailRegex.test(email);
  }

  
  public submit(): void{
    this.submitted = true;

    if (this.form.invalid){
      return;
    }
  }  

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
