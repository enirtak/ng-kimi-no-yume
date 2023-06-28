import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.css']
})
export class FieldErrorComponent implements OnInit {

  @Input() control: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
