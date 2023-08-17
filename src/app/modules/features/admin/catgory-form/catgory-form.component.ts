import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'category-form',
  templateUrl: './catgory-form.component.html',
  styleUrls: ['./catgory-form.component.css']
})
export class CatgoryFormComponent implements OnInit {

  @Input() modalId!: string;
  @Input() formGroup!: FormGroup;
  @Output() onUpSertButtonClick: EventEmitter<void> = new EventEmitter();

  formTitle = '';
  minDescriptionCount = 20;

  get isEditForm() {
    let id = this.formGroup.get('Id')?.value;
    return id > 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

  upsertClickButtonClick() {
    this.onUpSertButtonClick.emit();
  }

  get descriptionCharCount() {
    let descValue = this.formGroup.get('description')?.value;
    return !descValue ? 0 : descValue.length;
  }
}
