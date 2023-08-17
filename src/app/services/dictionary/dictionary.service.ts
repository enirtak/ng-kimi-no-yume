import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DreamDictionaryDTO, DreamDictionaryRequest } from 'src/app/api/models';
import { DreamService } from 'src/app/api/services';
import { Settings } from 'src/settings/settings';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(
    private svc : DreamService
  ) {
    if (this.svc && this.svc.rootUrl === '') this.svc.rootUrl = Settings.APIUrl;
   }

  async GetList() {
    return await lastValueFrom(this.svc.getApiDreamGetDreamDictionary());
  }

  async Create(data: DreamDictionaryDTO) {
    let request: DreamDictionaryRequest = {
      dreamItem : data
    };

   return await lastValueFrom(this.svc.postApiDreamCreateNewDream(request));
  }

  async Update(data: any) {
    let request: DreamDictionaryRequest = {
      dreamItem : data
    };

   return await lastValueFrom(this.svc.putApiDreamUpdateDream(request));
  }

  async Delete(data: any) {
    let request: DreamDictionaryRequest = {
      dreamItem : data
    };

   return await lastValueFrom(this.svc.deleteApiDreamDeleteDream(request));
  }
}
