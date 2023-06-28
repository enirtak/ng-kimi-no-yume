import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { createDreamFormGroup, createDreamCategoryFormGroup } from 'src/app/modules/features/admin/forms/admin.formgroup.create';
import { setupDreamFormGroupHandler, setupCategoryFormGroupHandler } from 'src/app/modules/features/admin/forms/admin.formgroup.handler';
import { dictionaryDTOToFormGroup, dreamThemeDTOToFormGroup } from 'src/app/modules/features/admin/forms/admin.formgroup.patchvalue';
import { DreamDictionaryDTO, DreamCategoryDTO } from '../../../api/models';
import { CategoryService } from '../../../services/category/category.service';
import { DictionaryService } from '../../../services/dictionary/dictionary.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // Dictionary
  showDreamForm: boolean = false;
  yumeFormGroup!: FormGroup;
  dreamList?: Array<DreamDictionaryDTO>;
  selectedDream?: DreamDictionaryDTO;

  // Theme
  showDreamThemeForm: boolean = false;
  dreamThemeFormGroup!: FormGroup; 
  dreamThemeList?: Array<DreamCategoryDTO>;
  selectedDreamTheme?: DreamCategoryDTO;

  constructor(
    private fb: FormBuilder,
    private dreamSVC: DictionaryService,
    private categorySVC: CategoryService,
    private loader: LoadingService
    ) { }

  ngOnInit() {
    if (!this.yumeFormGroup) this.yumeFormGroup = createDreamFormGroup(this.fb);
    if (!this.dreamThemeFormGroup) this.dreamThemeFormGroup = createDreamCategoryFormGroup(this.fb);

    setupDreamFormGroupHandler(this.yumeFormGroup);
    setupCategoryFormGroupHandler(this.dreamThemeFormGroup);

    this.getListOnCache();
  }

  getListOnCache() {
    let theme = localStorage.getItem("dreamTheme");
    if (theme && JSON.parse(theme)) {
      this.dreamThemeList = JSON.parse(theme);
    } else this.onGetDreamThemeList();

    let list = localStorage.getItem("dreamList");
    if (list && JSON.parse(list)) {
      this.dreamList = JSON.parse(list);
    } else this.onGetDreamList();
  }

  /* Dictionary Section - Start */
  onGetDreamList() {
    this.dreamSVC.GetList()
      .then((data) => {
        this.dreamList = data.dictionaryList;
        localStorage.setItem("dreamList", JSON.stringify(this.dreamList));
      });
  }

  onUpSertDream() {
    let formValues = this.yumeFormGroup?.value;
    console.log(formValues)

    if (formValues && formValues?.Id > 0) {
      this.dreamSVC.Update(formValues)
        .then(() => {
          this.resetForm();
        });
    } else {
      this.dreamSVC.Create(formValues)
        .then(() => {
          this.resetForm();
          this.dreamList?.push(formValues);
        });
    }
  }

  onGetSelectedDreamItem(id:number) {
    this.selectedDream = this.dreamList?.find(x => x.id === id);
    dictionaryDTOToFormGroup(this.yumeFormGroup, this.selectedDream);
  }

  onDeleteDreamConfirm() {
    this.dreamSVC.Delete(this.yumeFormGroup.value)
    .then(() => this.resetForm());
  }

  resetForm() {
    this.yumeFormGroup?.reset();
  }

  onShowEditDreamForm() {
    this.showDreamForm = !this.showDreamForm;
  }

  onShowAddDreamForm() {
    this.yumeFormGroup.reset();
  }
  /* Dictionary Section - End */

  /* Theme Section - Start */
  onGetDreamThemeList() {    
    this.categorySVC.GetList()
    .then((data) => {
      this.dreamThemeList = data.categories;

      localStorage.setItem("dreamTheme", JSON.stringify(this.dreamThemeList));
    });
  }

  onGetSelectedDreamThemeItem(id:number, showForm: boolean = true) {
    if (showForm) this.onShowEditDreamThemeForm();

    this.selectedDreamTheme = this.dreamThemeList?.find(x => x.id === id);
    dreamThemeDTOToFormGroup(this.dreamThemeFormGroup, this.selectedDreamTheme);
  }

  onUpSertDreamTheme() {
    let formValues = this.dreamThemeFormGroup?.value;

    if (formValues && formValues?.Id > 0) {
      this.categorySVC.Update(formValues)
        .then(() => {
          this.dreamThemeList?.map(x => {
            if (x.id === formValues.Id) x.categoryName = formValues.CategoryName
          });
          this.resetThemeForm();
        });
    } else {
      this.categorySVC.Create(formValues)
        .then(() => {
          this.dreamThemeList?.push(formValues);
          this.resetThemeForm();
        });
    }
  }

  onDeleteDreamTheme() {
    this.categorySVC.Delete(this.dreamThemeFormGroup?.value)
    .then(() => this.resetThemeForm());
  }

  resetThemeForm() {
    localStorage.setItem("dreamTheme", JSON.stringify(this.dreamThemeList));
    this.dreamThemeFormGroup?.reset();
  }

  onShowEditDreamThemeForm() {
    this.showDreamThemeForm = !this.showDreamThemeForm;
  }

  onShowAddDreamThemeForm() {
    this.dreamThemeFormGroup.reset();
  }
  /* Theme Section - End */
}