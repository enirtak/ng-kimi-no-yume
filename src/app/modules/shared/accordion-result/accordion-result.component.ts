import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'accordion-result',
  templateUrl: './accordion-result.component.html',
  styleUrls: ['./accordion-result.component.css']
})
export class AccordionResultComponent implements OnInit {

  @Input() id!: number;
  @Input() title!: string | undefined;
  @Input() description!: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
