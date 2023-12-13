import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private loadingSVC: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.loadingSVC.show();

    return next.handle(request)
      .pipe(
        tap(
          {
            next: (event) => {
                if (event instanceof HttpResponse) {
                    this.loadingSVC.hide();
                }
            },
            error: (err) => {
                console.log('HTTPInterceptor error', err);
                this.loadingSVC.resetSpinner();
            }
        }
      )
    );
  }
}
