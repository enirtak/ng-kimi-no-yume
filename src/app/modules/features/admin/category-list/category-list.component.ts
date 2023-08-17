import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DreamCategoryDTO, DreamDictionaryDTO } from '../../../../api/models';
import { Settings } from 'src/settings/settings';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { dreamThemeDTOToFormGroup, dreamThemeFormGroupToList } from '../forms/admin.formgroup.patchvalue';
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

  dreamThemeFormGroup!: FormGroup; 
  dreamThemeList?: Array<DreamCategoryDTO>;
  selectedDreamTheme?: DreamCategoryDTO;

  dreamCategorySearch = '';
  itemCount = Settings.ItemCount;
  currentPage = Settings.CurrentPage;

  constructor(
    private fb: FormBuilder,
    private categorySVC: CategoryService,
    private storageSVC: LocalStorageService
  ) { }

  ngOnInit(): void {
    if (!this.dreamThemeFormGroup) this.dreamThemeFormGroup = createDreamCategoryFormGroup(this.fb);
    setupCategoryFormGroupHandler(this.dreamThemeFormGroup);

    this.getListOnCache();
  }

  getListOnCache() {
    let theme = this.storageSVC.get(Settings.DreamThemeKey);
    this.dreamThemeList = this.storageSVC.parse(theme) ?? this.getDreamThemeList();
  }

  getDreamThemeList() {
    this.categorySVC.GetList()
    .then((data) => {
      this.dreamThemeList = data.categories;
      this.storageSVC.set(Settings.DreamThemeKey, this.dreamThemeList);
    });
  }

  getSelectedDreamThemeItem(id: number | undefined) {
    this.selectedDreamTheme = this.dreamThemeList?.find(x => x.id === id);
    dreamThemeDTOToFormGroup(this.dreamThemeFormGroup, this.selectedDreamTheme);
  }

  addButtonClick() {
    this.dreamThemeFormGroup.reset();
  }

  onUpSertDreamTheme() {
    let formValues = this.dreamThemeFormGroup?.value;

    if (formValues && formValues?.id) {
      this.categorySVC.Update(formValues)
        .then((response) => {
          this.dreamThemeList?.map(x => {
            if (x.id === formValues.id) {
              dreamThemeFormGroupToList(x, response.category as DreamDictionaryDTO);
            }
          });
          this.resetThemeForm();
        });
    } else {
      if (!formValues.id) formValues.id = 0;
      this.categorySVC.Create(formValues)
        .then((response) => {
          this.dreamThemeList?.push(response.category as DreamCategoryDTO);
          this.resetThemeForm();
        });
    }
  }

  onDeleteDreamTheme() {
    this.categorySVC.Delete(this.dreamThemeFormGroup?.value)
    .then(() => this.resetThemeForm());
  }

  resetThemeForm() {
    this.dreamThemeList?.sort((a, b) => a.categoryName!.localeCompare(b.categoryName!));
    this.storageSVC.set(Settings.DreamThemeKey, this.dreamThemeList);
    this.dreamThemeFormGroup?.reset();
  }
}
