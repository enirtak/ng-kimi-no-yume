import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DictionaryResponse, DreamDictionaryDTO, DreamDictionaryRequest } from 'src/app/api/models';
import { DreamDictionaryService } from 'src/app/api/services';
import { Settings } from 'src/settings/settings';
import { LocalStorageService } from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(
    private svc : DreamDictionaryService,
    private storageSVC: LocalStorageService
  ) {
    if (this.svc && this.svc.rootUrl === '') this.svc.rootUrl = Settings.APIUrl;
   }

   async GetListFromCache() {
    let list = this.storageSVC.get(Settings.DreamListKey);
    let result = this.storageSVC.parse(list) ?? await this.GetDreamList();

    return result;
   }

  async GetDreamList() {
    let response: DictionaryResponse = {};

    await this.GetList()
      .then((result) => {
        response = result;
        this.storageSVC.set(Settings.DreamListKey, response.dictionaryList);
      });

    return response.dictionaryList;
  }

  GetList() {
    return lastValueFrom(this.svc.getApiDreamDictionaryGetDreamDictionary());
  }

  Create(data: DreamDictionaryDTO) {
    let request: DreamDictionaryRequest = {
      dreamItem : data
    };

   return lastValueFrom(this.svc.postApiDreamDictionaryCreateNewDream(request));
  }

  Update(data: any) {
    let request: DreamDictionaryRequest = {
      dreamItem : data
    };

   return lastValueFrom(this.svc.postApiDreamDictionaryUpdateDream(request));
  }

  Delete(id: number) {
   return lastValueFrom(this.svc.putApiDreamDictionaryDeleteDream(id));
  }
}
