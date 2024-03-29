import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.formBuilder.group({
    email:['jlmc@gmail.com', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(5)]]
  })

  constructor(private formBuilder:FormBuilder, private router:Router, private LoginService: LoginService){}

  ngOnInit(): void {
      
  }

  get email(){
    return this.loginForm.controls.email;
  }

  get password(){
    return this.loginForm.controls.password;
  }


  login(){
    if(this.loginForm.valid){
      ///console.log("llamar al servicio de Login");
      this.LoginService.login(this.loginForm.value as LoginRequest).subscribe({
        next:(userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
        },
        complete: () => {
          console.info("Login Completo");
        }
      });
      
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
    }
    else
    {
      this.loginForm.markAllAsTouched();
      ///alert("ERROR");
    }
  }
}
