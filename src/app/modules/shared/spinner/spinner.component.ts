import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  showSpinner: boolean = false;

  constructor(private svc: LoadingService,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadSpinner();
  }

  loadSpinner() {
    this.svc.getSpinnerObserver()
      .subscribe((status) => {
        this.showSpinner = (status === true);
        this.cd.detectChanges();
      })
  }
}
