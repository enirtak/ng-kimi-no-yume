import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { PersonDTO, ProfileRequest } from 'src/app/api/models';
import { ProfileService } from 'src/app/api/services';
import { Settings } from 'src/settings/settings';
@Injectable({
  providedIn: 'root'
})
export class AdminProfileService {

  constructor(private svc: ProfileService) { 
    if (this.svc && this.svc.rootUrl === '') this.svc.rootUrl = Settings.APIUrl;
  }

  async GetList() {
    return await lastValueFrom(this.svc.getApiProfileGetProfileList());
  }

  async GetProfile() {
    return await lastValueFrom(this.svc.getApiProfileGetCurrentProfile());
  }

  async Create(data: PersonDTO) {
    let request :ProfileRequest = {
      person : data
    };
    return await lastValueFrom(this.svc.postApiProfileCreateProfile(request));
  }

  // Update / Delete 
  async Update(data: PersonDTO) {
    let request :ProfileRequest = {
      person : data
    };
    return await lastValueFrom(this.svc.putApiProfileUpdateProfile(request));
  }
}
