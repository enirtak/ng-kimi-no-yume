import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { createDreamFormGroup, createDreamCategoryFormGroup } from 'src/app/modules/features/admin/forms/admin.formgroup.create';
import { setupDreamFormGroupHandler, setupCategoryFormGroupHandler } from 'src/app/modules/features/admin/forms/admin.formgroup.handler';
import { dictionaryDTOToFormGroup, dreamThemeDTOToFormGroup, dreamThemeFormGroupToList, yumeFormGroupToList } from 'src/app/modules/features/admin/forms/admin.formgroup.patchvalue';
import { DreamDictionaryDTO, DreamCategoryDTO } from '../../../api/models';
import { CategoryService } from '../../../services/category/category.service';
import { DictionaryService } from '../../../services/dictionary/dictionary.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { Settings } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // Dictionary
  yumeFormGroup!: FormGroup;
  dreamList?: Array<DreamDictionaryDTO>;
  selectedDream?: DreamDictionaryDTO;
  selectedDreamCategory: string | undefined = '';

  // Theme
  dreamThemeFormGroup!: FormGroup; 
  dreamThemeList?: Array<DreamCategoryDTO>;
  selectedDreamTheme?: DreamCategoryDTO;

  constructor(
    private fb: FormBuilder,
    private dreamSVC: DictionaryService,
    private categorySVC: CategoryService,
    private loader: LoadingService,
    private storageSVC: LocalStorageService
    ) { }

  ngOnInit() {
    if (!this.yumeFormGroup) this.yumeFormGroup = createDreamFormGroup(this.fb);
    if (!this.dreamThemeFormGroup) this.dreamThemeFormGroup = createDreamCategoryFormGroup(this.fb);

    setupDreamFormGroupHandler(this.yumeFormGroup);
    setupCategoryFormGroupHandler(this.dreamThemeFormGroup);

    this.getListOnCache();
  }

  getListOnCache() {
    let theme = this.storageSVC.get(Settings.dreamThemeKey);
    this.dreamThemeList = this.storageSVC.parse(theme) ?? this.onGetDreamThemeList();

    let list = this.storageSVC.get(Settings.dreamListKey);
    this.dreamList = this.storageSVC.parse(list) ?? this.onGetDreamList();
  }

  /* Dictionary Section - Start */
  onGetDreamList() {
    this.dreamSVC.GetList()
      .then((data) => {
        this.dreamList = data.dictionaryList;
        this.storageSVC.set(Settings.dreamListKey, this.dreamList);
      });
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

  onGetSelectedDreamItem(id:number) {
    this.selectedDream = this.dreamList?.find(x => x.id === id);
    this.selectedDreamCategory = this.dreamThemeList?.find(x => x.id == this.selectedDream?.dreamCategoryId)?.categoryName;
    dictionaryDTOToFormGroup(this.yumeFormGroup, this.selectedDream);
  }

  onDeleteDreamConfirm() {
    this.dreamSVC.Delete(this.yumeFormGroup.value)
    .then(() => this.resetForm());
  }

  resetForm() {
    this.dreamList?.sort((a, b) => a.dreamName!.localeCompare(b.dreamName!));
    this.storageSVC.set(Settings.dreamListKey, this.dreamList);
    this.yumeFormGroup?.reset();
  }

  // resets form when Add button is clicked
  onShowAddDreamForm() {
    this.yumeFormGroup.reset();
  }
  /* Dictionary Section - End */

  /* Theme Section - Start */
  onGetDreamThemeList() {    
    this.categorySVC.GetList()
    .then((data) => {
      this.dreamThemeList = data.categories;
      this.storageSVC.set(Settings.dreamThemeKey, this.dreamThemeList);
    });
  }

  onGetSelectedDreamThemeItem(id:number) {
    this.selectedDreamTheme = this.dreamThemeList?.find(x => x.id === id);
    dreamThemeDTOToFormGroup(this.dreamThemeFormGroup, this.selectedDreamTheme);
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
    this.storageSVC.set(Settings.dreamThemeKey, this.dreamThemeList);
    this.dreamThemeFormGroup?.reset();
  }

  // resets form when Add button is clicked
  onShowAddDreamThemeForm() {
    this.dreamThemeFormGroup.reset();
  }
  /* Theme Section - End */
}