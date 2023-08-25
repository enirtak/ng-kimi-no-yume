import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DreamCategoryDTO, CategoryRequest, CategoryIdRequest } from 'src/app/api/models';
import { DreamCategoryService } from 'src/app/api/services';
import { Settings } from 'src/settings/settings';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private svc: DreamCategoryService) {
    if (this.svc && this.svc.rootUrl === '') this.svc.rootUrl = Settings.APIUrl;
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

  async Delete(id: any) {
    let request: CategoryIdRequest = {
      id : id
    };

   return await lastValueFrom(this.svc.postApiDreamCategoryDeleteCategory(request));
  }
}
