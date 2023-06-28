import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'category-form',
  templateUrl: './catgory-form.component.html',
  styleUrls: ['./catgory-form.component.css']
})
export class CatgoryFormComponent implements OnInit {

  @Input() formGroup!: FormGroup;
  @Output() onUpSertButtonClick: EventEmitter<void> = new EventEmitter();

  formTitle = '';

  get isEditForm() {
    let id = this.formGroup.get('Id')?.value;
    return id !== null;
  }

  constructor() { }

  ngOnInit(): void {
  }

  upsertClickButtonClick() {
    this.onUpSertButtonClick.emit();
  }

}
