import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  showToast$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toastMessageName$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  toastMessage$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  toastState$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  getToastrObserver() {
    return this.showToast$.asObservable();
  }

  showToast(state: string, messageName: string, message: string) {
    
    this.toastState$.next(state);
    this.toastMessageName$.next(messageName);
    this.toastMessage$.next(message);
    this.showToast$.next(true);

    setTimeout(() => {
      this.hideToast()
    }, 3000);
  }

  hideToast() {
    this.showToast$.next(false);
  }
}

export const TOAST_STATE = {
  success: 'alert-success',
  warning: 'alert-warning',
  danger: 'alert-danger'
}