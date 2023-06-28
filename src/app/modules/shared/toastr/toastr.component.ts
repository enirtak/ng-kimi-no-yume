import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/services/toastr/toastr.service';

@Component({
  selector: 'toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

  showToast: boolean = true;
  toastMessage: string = '';
  toastClass = ['alert-warning'];

  constructor(public svc: ToastrService) { }

  ngOnInit(): void {
  }

  hideToast() {
    this.svc.hideToast();
    console.log('hideToast')
  }
}
