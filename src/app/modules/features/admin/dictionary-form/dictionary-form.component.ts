import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DreamCategoryDTO } from 'src/app/api/models';

@Component({
  selector: 'dictionary-form',
  templateUrl: './dictionary-form.component.html',
  styleUrls: ['./dictionary-form.component.css']
})
export class DictionaryFormComponent implements OnInit {

  @Input() modalId!: string;
  @Input() formGroup!: FormGroup;
  @Input() dreamThemeList?: Array<DreamCategoryDTO>;
  @Output() onUpSertButtonClick: EventEmitter<void> = new EventEmitter();

  minDescriptionCount = 20;

  get isEditForm() {
    let id = this.formGroup.get('id')?.value;
    return id > 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

  upsertClickButtonClick() {
    this.onUpSertButtonClick.emit();
  }

  get descriptionCharCount() {
    let descValue = this.formGroup.get('dreamDescription')?.value;
    return !descValue ? 0 : descValue.length;
  }

}
