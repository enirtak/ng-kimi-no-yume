import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DreamCategoryDTO, CategoryResponse, DreamCategoryRequest } from 'src/app/api/models';
import { DreamCategoryService } from 'src/app/api/services';
import { Settings } from 'src/settings/settings';
import { LocalStorageService } from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private svc: DreamCategoryService,
    private storageSVC: LocalStorageService
    ) {
    if (this.svc && this.svc.rootUrl === '') this.svc.rootUrl = Settings.APIUrl;
  }

  async GetListFromCache() {
    let list = this.storageSVC.get(Settings.DreamCategoryListKey);
    let result = this.storageSVC.parse(list) ?? await this.GetDreamCategoryList();

    return result;
  }

  async GetDreamCategoryList() {
    var response: CategoryResponse = {};
    
    await this.GetList()
      .then((response) => {
        response = response
        this.storageSVC.set(Settings.DreamCategoryListKey, response.categories);
      });

    return response.categories;
  }

  GetList() {
    return lastValueFrom(this.svc.getApiDreamCategoryGetCategories());
  }

  Create(data: DreamCategoryDTO) {
    let request: DreamCategoryRequest = {
      category : data
    };

   return lastValueFrom(this.svc.postApiDreamCategoryCreateNewCategory(request));
  }

  Update(data: any) {
    let request: DreamCategoryRequest = {
      category : data
    };

   return lastValueFrom(this.svc.postApiDreamCategoryUpdateCategory(request));
  }

  Delete(id: number) {
   return lastValueFrom(this.svc.putApiDreamCategoryDeleteCategory(id));
  }
}
