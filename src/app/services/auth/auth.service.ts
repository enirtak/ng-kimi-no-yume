import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'
import { lastValueFrom } from 'rxjs';
import { AuthenticateUserRequest } from 'src/app/api/models';
import { AuthenticateService } from 'src/app/api/services';
import { LocalStorageService } from '../localstorage/localstorage.service';
import { Settings } from 'src/settings/settings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private jwtHelper: JwtHelperService,
    private svc: AuthenticateService,
    private router: Router,
    private storageSVC: LocalStorageService) { 
      if (this.svc && this.svc.rootUrl === '') this.svc.rootUrl = Settings.APIUrl;
    }

  isAuthenticated() {
    const token = this.getTokenCache();
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  login(request: AuthenticateUserRequest) {
    lastValueFrom(this.svc.postApiAuthenticateAuthenticateUser(request))
    .then((response) => {
        this.storageSVC.set('token', response.token);
        this.router.navigate(['admin']); 
    })
    .catch(() => {
      console.log('Error occurred on login');
    });
  }

  getTokenCache() {
    return this.storageSVC.get("token");
  }

  logout() {
    this.storageSVC.remove("token");
    this.router.navigate(['/']);
  }
}
