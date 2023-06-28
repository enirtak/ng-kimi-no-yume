import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DreamCategoryDTO } from '../../../../api/models';
import { Settings } from 'src/environments/environment';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @Input() dreamThemeList?: Array<DreamCategoryDTO>;

  @Output() onGetDreamThemeList: EventEmitter<void> = new EventEmitter();
  @Output() onShowEditForm: EventEmitter<void> = new EventEmitter();
  @Output() onShowAddForm: EventEmitter<void> = new EventEmitter();
  @Output() onGetSelectedDreamThemeItem: EventEmitter<number> = new EventEmitter();

  dreamCategorySearch = '';
  itemCount = Settings.itemCount;
  currentPage = Settings.currentPage;

  constructor() { }

  ngOnInit(): void {
  }

  getDreamThemeList() {
    this.onGetDreamThemeList.emit();
  }

  showEditDreamForm() {
    this.onShowEditForm.emit();
  }

  getSelectedDreamThemeItem(id: number | undefined) {
    this.onGetSelectedDreamThemeItem.emit(id);
  }

  addButtonClick() {
    this.onShowAddForm.emit();
  }

}
