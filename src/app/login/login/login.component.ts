import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
  
  showPassword : boolean = false;

  @ViewChild('loginForm') loginForm! : NgForm;

  email!: string;
  password!: string;

  constructor(){
  
    
  }

  ngOnInit(): void {
      
  }

  

  togglePassword() {
      this.showPassword = !this.showPassword;
  
    }

  
  public submit() {
    console.log(this.loginForm.value);
  }

   
}
