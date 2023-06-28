import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService implements OnDestroy {

  count = 0;
  spinner$ = new BehaviorSubject<boolean>(false);
  isRequestEnded = new BehaviorSubject<boolean>(false);

  constructor() { }

  getSpinnerObserver() {
    return this.spinner$.asObservable();
  }

  show() {
    if (++this.count === 1) this.spinner$.next(true);
  }

  hide() {
    if (this.count === 0 || --this.count === 0) {
      this.spinner$.next(false);
      this.isRequestEnded.next(true);
    }
  }

  resetSpinner() {
    this.count = 0;
    this.spinner$.next(false);
  }

  ngOnDestroy() {
    this.spinner$.unsubscribe();
  }
}
