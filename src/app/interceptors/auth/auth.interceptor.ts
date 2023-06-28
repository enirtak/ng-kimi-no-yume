import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authSVC: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let userToken = this.authSVC.getTokenCache();
    if (userToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userToken}`
        }
      })
    }

    return next.handle(request);
  }
}
