import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [ Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@yopmail\.com$/) 
      ]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onLogin(): void { 
    console.log(this.loginForm.value);
    let obj = {
      email: this.loginForm.value.email,
      phone: "",
      phoneCode: "965",
      password: this.loginForm.value.password,
      deviceToken: "",
      deviceType: "",
      deviceModel: "",
      appVersion: "",
      osVersion: ""
    }
    this.api.login(obj).subscribe(res => {
      console.log(res.message);
      console.log(res.data);
      sessionStorage.setItem('isLoggedIn',res.data.sessionToken);
      sessionStorage.setItem('firstname',res.data.firstName);
      sessionStorage.setItem('lastname',res.data.lastName);
      sessionStorage.setItem('phone',res.data.phone);
      sessionStorage.setItem('email',res.data.email);
      sessionStorage.setItem('password',res.data.password)
      this.router.navigate(['/dashboard']);
    })
  }
}
