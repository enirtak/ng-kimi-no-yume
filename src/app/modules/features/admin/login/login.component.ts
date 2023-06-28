import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createLoginFormGroup } from '../forms/login.formgroup.create';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthenticateUserRequest } from 'src/app/api/models';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginFormGroup!: FormGroup;

  constructor(private fb: FormBuilder,
    private authSVC: AuthService,
    private loader: LoadingService) { }

  ngOnInit() {
    if (!this.loginFormGroup) this.loginFormGroup = createLoginFormGroup(this.fb);
  }

  onLoginButtonClick() {
    let request = this.loginFormGroup.value as AuthenticateUserRequest;
    this.authSVC.login(request)
  }
}
