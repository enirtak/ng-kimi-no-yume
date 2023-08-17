import { Component, OnInit } from '@angular/core';
import { PersonDTO } from 'src/app/api/models';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { AdminProfileService } from 'src/app/services/profile/admin-profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  currentProfile: PersonDTO | undefined = {};

  constructor(
    private storageSVC: LocalStorageService,
    private svc: AdminProfileService
  ) { }

  getProfile() {
    let profile = this.storageSVC.parse(this.storageSVC.get("profile")) as PersonDTO;
    if (profile) {
      this.currentProfile = profile;
    } else {

    }
  }

  ngOnInit(): void {
    this.getProfile();
  }

}
