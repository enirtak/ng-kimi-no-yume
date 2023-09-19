import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DreamDictionaryDTO, DreamDictionaryRequest, DreamIdRequest } from 'src/app/api/models';
import { DreamDictionaryService } from 'src/app/api/services';
import { Settings } from 'src/settings/settings';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(
    private svc : DreamDictionaryService
  ) {
    if (this.svc && this.svc.rootUrl === '') this.svc.rootUrl = Settings.APIUrl;
   }

  async GetList() {
    return await lastValueFrom(this.svc.getApiDreamDictionaryGetDreamDictionary());
  }

  async Create(data: DreamDictionaryDTO) {
    let request: DreamDictionaryRequest = {
      dreamItem : data
    };

   return await lastValueFrom(this.svc.postApiDreamDictionaryCreateNewDream(request));
  }

  async Update(data: any) {
    let request: DreamDictionaryRequest = {
      dreamItem : data
    };

   return await lastValueFrom(this.svc.postApiDreamDictionaryUpdateDream(request));
  }

  async Delete(data: any) {
    let request: DreamIdRequest = {
      id : data
    };

   return await lastValueFrom(this.svc.postApiDreamDictionaryDeleteDream(request));
  }
}
