import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/requests/login.request';
import { LoginResponse } from 'src/app/models/responses/login.response';
import { AuthService } from 'src/app/services/auth.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginRequest: LoginRequest = {} as LoginRequest;
  loginResponse: LoginResponse = {} as LoginResponse;
  loginForm = new FormGroup({
    email: new FormControl('',Validators.email),
    password: new FormControl(''),
  });
  isFormNull: boolean = false;
  isFalseInformation:boolean =false;
  constructor(private authService: AuthService, private stateService: StateService, private router:Router) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token){
      this.router.navigateByUrl('/profil');
    }
  }

  login() {
    if(this.loginForm.status=="INVALID") return;
    if ((this.loginForm.value.email != "" && this.loginForm.value.email != null) && (this.loginForm.value.password != null && this.loginForm.value.password != "")) {
      this.isFormNull = false;
      this.authenticateUser(this.loginForm.value.email, this.loginForm.value.password);
    }
    else this.isFormNull = true;
  }

  authenticateUser(identifier: string, password: string) {
    this.loginRequest.identifier = identifier;
    this.loginRequest.password = password;

    this.authService.login(this.loginRequest).subscribe(data => {
      this.loginResponse=data
      if (data.code == 0) {
        this.isFalseInformation=false;
        localStorage.setItem('token', data.token);
        this.router.navigateByUrl('/profil');
      }
    },
    error=>{
      this.isFalseInformation=true;
    }
    )
  }
}
