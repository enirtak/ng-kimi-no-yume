import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'
import { lastValueFrom } from 'rxjs';
import { AuthenticateUserRequest } from 'src/app/api/models';
import { AuthenticateService } from 'src/app/api/services';
import { Settings } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private jwtHelper: JwtHelperService,
    private svc: AuthenticateService,
    private router: Router) { 
      if (this.svc && this.svc.rootUrl === '') this.svc.rootUrl = Settings.apiUrl;
    }

  isAuthenticated() {
    const token = this.getTokenCache();
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  async login(request: AuthenticateUserRequest) {

    await lastValueFrom(this.svc.postApiAuthenticateAuthenticateUser(request))
    .then((response) => {
        this.setTokenCache(response.token);
        this.router.navigate(['auth']); 
    }).catch((error) => {
      console.log('error occurred on login');
    });

    // this.svc.postApiAuthenticateAuthenticateUser(request)
    // .subscribe({
    //   next: (response) => {
    //     let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    //     // this.setTokenCache(response.token);
    //     // this.setTokenCache(token);
    //     // this.router.navigate(['auth/admin']); 
    //   },
    //   error: (error) => {
    //     console.log('error occurred on login')
    //   }
    // });
  }

  setTokenCache(token: string | undefined) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getTokenCache(): string | null {
    let token = localStorage.getItem('token');
    return token;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
