import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DreamCategoryDTO, CategoryRequest, DreamIdRequest, CategoryResponse } from 'src/app/api/models';
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

  async GetList() {
    return await lastValueFrom(this.svc.getApiDreamCategoryGetCategories());
  }

  async Create(data: DreamCategoryDTO) {
    let request: CategoryRequest = {
      category : data
    };

   return await lastValueFrom(this.svc.postApiDreamCategoryCreateNewCategory(request));
  }

  async Update(data: any) {
    let request: CategoryRequest = {
      category : data
    };

   return await lastValueFrom(this.svc.postApiDreamCategoryUpdateCategory(request));
  }

  async Delete(data: any) {
    let request: DreamIdRequest = {
      id : data
    };

   return await lastValueFrom(this.svc.postApiDreamCategoryDeleteCategory(request));
  }
}
