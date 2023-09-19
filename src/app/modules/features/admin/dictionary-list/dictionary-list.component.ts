import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DreamCategoryDTO, DreamDictionaryDTO } from 'src/app/api/models';
import { DictionaryService } from 'src/app/services/dictionary/dictionary.service';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { Settings } from 'src/settings/settings';
import { dictionaryDTOToFormGroup, yumeFormGroupToList } from '../forms/admin.formgroup.patchvalue';
import { createDreamFormGroup } from '../forms/admin.formgroup.create';
import { setupDreamFormGroupHandler } from '../forms/admin.formgroup.handler';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {

  yumeFormGroup!: FormGroup;
  dreamList?: Array<DreamDictionaryDTO>;
  selectedDream?: DreamDictionaryDTO;
  selectedDreamCategory: string | undefined = '';
  dreamThemeList?: Array<DreamCategoryDTO>;

  dreamListSearch = '';
  itemCount = Settings.ItemCount;
  currentPage = Settings.CurrentPage;

  constructor(
    private dreamSVC: DictionaryService,
    private categorySVC: CategoryService,
    private storageSVC: LocalStorageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    if (!this.yumeFormGroup) this.yumeFormGroup = createDreamFormGroup(this.fb);
    setupDreamFormGroupHandler(this.yumeFormGroup);
    this.getListOnCache();
  }

  getListOnCache() {
    let list = this.storageSVC.get(Settings.DreamListKey);
    this.dreamList = this.storageSVC.parse(list) ?? this.getDreamList();

    let theme = this.storageSVC.get(Settings.DreamThemeKey);
    this.dreamThemeList = this.storageSVC.parse(theme) ?? this.getDreamCategoryList();
  }

  getDreamList() {
    this.dreamSVC.GetList()
      .then((data) => {
        this.dreamList = data.dictionaryList;
        this.storageSVC.set(Settings.DreamListKey, this.dreamList);
      });
  }

  getDreamCategoryList() {
    this.categorySVC.GetList()
      .then((data) => {
        this.dreamThemeList = data.categories;
        this.storageSVC.set(Settings.DreamThemeKey, this.dreamThemeList);
      });
  }

  getSelectedItem(id: number | undefined) {
    this.selectedDream = this.dreamList?.find(x => x.id === id);
    this.selectedDreamCategory = this.dreamThemeList?.find(x => x.id == this.selectedDream?.dreamCategoryId)?.categoryName;
    dictionaryDTOToFormGroup(this.yumeFormGroup, this.selectedDream);
  }

  addButtonClick() {
    this.yumeFormGroup.reset();
  }

  resetForm() {
    this.dreamList?.sort((a, b) => a.dreamName!.localeCompare(b.dreamName!));
    this.storageSVC.set(Settings.DreamListKey, this.dreamList);
    this.yumeFormGroup?.reset();
  }

  onUpSertDream() {
    let formValues = this.yumeFormGroup?.value;

    if (formValues && formValues?.id) {
      this.dreamSVC.Update(formValues)
        .then((response) => {
          this.dreamList?.map(x => {
            if (x.id === formValues.id) {
              yumeFormGroupToList(x, response.dreamItem as DreamDictionaryDTO);
            }
          });
          this.resetForm();
        });
    } else {
      if (!formValues.id) formValues.id = 0;
      this.dreamSVC.Create(formValues)
        .then((response) => {
          this.dreamList?.push(response.dreamItem as DreamDictionaryDTO);
          this.resetForm();
        });
    }
  }

  onDeleteDreamConfirm() {
    this.dreamSVC.Delete(this.yumeFormGroup.value)
    .then(() => this.resetForm());
  }
}
