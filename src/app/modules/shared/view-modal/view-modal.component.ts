import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'view-description-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class ViewModalComponent implements OnInit {

  @Input() modalId!: string;
  @Input() name: string | undefined;
  @Input() description!: string | undefined;
  @Input() categoryId!: string | undefined;
  @Input() isDreamDictionary!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
