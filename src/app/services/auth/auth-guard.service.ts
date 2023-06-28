import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad {

  constructor(
    private authSVC: AuthService,
    private router: Router
  ) { }

  canLoad(): boolean {
    if (!this.authSVC.isAuthenticated()) {
      console.log('User not authenticated. Redirecting back to login page.');
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
