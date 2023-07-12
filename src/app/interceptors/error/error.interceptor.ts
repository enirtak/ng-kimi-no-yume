import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TOAST_STATE, ToastrService } from 'src/app/services/toastr/toastr.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  httpMessage: string = '';

  constructor(private authSVC: AuthService,
    private toastrSVC: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      tap((success) => {
        if (success instanceof HttpResponse) {
          if (success.body && success.body.isSuccess) {
            this.httpMessage = `Success: ${success.statusText}`;
            this.toastrSVC.showToast(TOAST_STATE.success, 'Success Message', this.httpMessage);
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        // https://stackoverflow.com/questions/53361348/how-to-catch-the-successful-request-using-httpclient-interceptor
        if (error.error instanceof ErrorEvent) {
          console.log('Client-Side Error occurred.');
          if (error?.status === 401) {
            this.httpMessage = `Unauthorized: ${error?.message}`;
            this.authSVC.logout();
          } else {
            this.httpMessage = `Client Error: ${error?.message}`;
          }
        } else {
          console.log('Server-Side Error occurred.');
          if (error?.status === 404) {
            this.httpMessage = `Not found: ${error?.message}`;
          }
          else if (error?.status === 403) {
            this.httpMessage = `Access Denied: ${error?.message}`;
          }
          else if (error?.status === 500) {
            this.httpMessage = `Internal Server Error: ${error?.message}`;
          }
          else {
            this.httpMessage = `Server Error: ${error?.message}`;
          }
        }
        
        this.toastrSVC.showToast(TOAST_STATE.danger, error.name , this.httpMessage);
        return throwError(() => this.httpMessage);
      })
    )
  }
}
