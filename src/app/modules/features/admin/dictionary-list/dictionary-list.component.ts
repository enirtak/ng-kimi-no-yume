import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DreamDictionaryDTO } from 'src/app/api/models';
import { Settings } from 'src/environments/environment';

@Component({
  selector: 'dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {

  @Input() dreamList?: Array<DreamDictionaryDTO>;

  @Output() onGetDreamList: EventEmitter<void> = new EventEmitter();
  @Output() onShowAddDreamForm: EventEmitter<void> = new EventEmitter();
  @Output() onGetSelectedDreamItem: EventEmitter<number> = new EventEmitter();

  dreamListSearch = '';
  itemCount = Settings.itemCount;
  currentPage = Settings.currentPage;

  constructor() { }

  ngOnInit(): void {
  }

  getDreamList() {
    this.onGetDreamList.emit();
  }

  getSelectedItem(id: number | undefined) {
    this.onGetSelectedDreamItem.emit(id);
  }

  addButtonClick() {
    this.onShowAddDreamForm.emit();
  }

}
