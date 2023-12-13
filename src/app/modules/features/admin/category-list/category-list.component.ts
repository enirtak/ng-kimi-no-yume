import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DreamCategoryDTO, DreamDictionaryDTO } from '../../../../api/models';
import { Settings } from 'src/settings/settings';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { dreamCategoryDTOToFormGroup, dreamCategoryFormGroupToList } from '../forms/admin.formgroup.patchvalue';
import { createDreamCategoryFormGroup } from '../forms/admin.formgroup.create';
import { setupCategoryFormGroupHandler } from '../forms/admin.formgroup.handler';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Output() onGetDreamThemeList: EventEmitter<void> = new EventEmitter();
  @Output() onShowAddForm: EventEmitter<void> = new EventEmitter();
  @Output() onGetSelectedDreamThemeItem: EventEmitter<number> = new EventEmitter();

  dreamCategoryFormGroup!: FormGroup; 
  dreamCategoryList: Array<DreamCategoryDTO> | undefined = [];
  selectedDreamCategory?: DreamCategoryDTO;

  dreamCategorySearch = '';
  itemCount = Settings.ItemCount;
  currentPage = Settings.CurrentPage;

  constructor(
    private fb: FormBuilder,
    private categorySVC: CategoryService,
    private storageSVC: LocalStorageService
  ) { }

  ngOnInit(): void {
    if (!this.dreamCategoryFormGroup) this.dreamCategoryFormGroup = createDreamCategoryFormGroup(this.fb);
    setupCategoryFormGroupHandler(this.dreamCategoryFormGroup);

    this.getListOnCache();
  }

  getListOnCache() {
    let theme = this.storageSVC.get(Settings.DreamCategoryListKey);
    this.dreamCategoryList = this.storageSVC.parse(theme) ?? this.getDreamCategoryList();
  }

  getDreamCategoryList() {
    this.categorySVC.GetList()
    .then((data) => {
      this.dreamCategoryList = data.categories;
      this.storageSVC.set(Settings.DreamCategoryListKey, this.dreamCategoryList);
    });
  }

  getSelectedDreamCategory(id: number | undefined) {
    this.selectedDreamCategory = this.dreamCategoryList?.find(x => x.id === id);
    dreamCategoryDTOToFormGroup(this.dreamCategoryFormGroup, this.selectedDreamCategory);
  }

  addButtonClick() {
    this.dreamCategoryFormGroup.reset();
  }

  onUpSertDreamCategory() {
    let formValues = this.dreamCategoryFormGroup?.value;

    if (formValues && formValues.id) {
      this.categorySVC.Update(formValues)
        .then((response) => {
          this.dreamCategoryList?.map(x => {
            if (x.id === formValues.id) {
              dreamCategoryFormGroupToList(x, response.category as DreamDictionaryDTO);
            }
          });
          this.resetDreamCategoryForm();
        });
    } else {
      if (!formValues.id) formValues.id = 0;
      this.categorySVC.Create(formValues)
        .then((response) => {
          this.dreamCategoryList?.push(response.category as DreamCategoryDTO);
          this.resetDreamCategoryForm();
        });
    }
  }

  onDeleteDreamCategory() {
    this.categorySVC.Delete(this.dreamCategoryFormGroup?.value)
    .then(() => this.resetDreamCategoryForm());
  }

  resetDreamCategoryForm() {
    this.dreamCategoryList?.sort((a, b) => a.categoryName!.localeCompare(b.categoryName!));
    this.storageSVC.set(Settings.DreamCategoryListKey, this.dreamCategoryList);
    this.dreamCategoryFormGroup?.reset();
  }
}
