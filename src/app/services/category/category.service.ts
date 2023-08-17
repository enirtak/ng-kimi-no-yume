import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DreamCategoryDTO, CategoryRequest } from 'src/app/api/models';
import { DreamService } from 'src/app/api/services';
import { Settings } from 'src/settings/settings';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private svc: DreamService) {
    if (this.svc && this.svc.rootUrl === '') this.svc.rootUrl = Settings.APIUrl;
  }

  async GetList() {
    return await lastValueFrom(this.svc.getApiDreamGetCategories());
  }

  async Create(data: DreamCategoryDTO) {
    let request: CategoryRequest = {
      category : data
    };

   return await lastValueFrom(this.svc.postApiDreamCreateNewCategory(request));
  }

  async Update(data: any) {
    let request: CategoryRequest = {
      category : data
    };

   return await lastValueFrom(this.svc.postApiDreamUpdateCategory(request));
  }

  async Delete(data: any) {
    let request: CategoryRequest = {
      category : data
    };

   return await lastValueFrom(this.svc.deleteApiDreamDeleteCategory(request));
  }
}
