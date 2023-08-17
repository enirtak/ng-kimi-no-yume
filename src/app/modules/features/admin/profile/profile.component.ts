import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { createAddressFormGroup, createEmployersFormGroup, createProfileFormGroup, createJobDescriptionFormGroup } from '../forms/profile.formgroup.create';
import { addItemToFormArray, getFormArray, removeItemToFormArray } from '../forms/FormsHelper';
import { AdminProfileService } from 'src/app/services/profile/admin-profile.service';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { PersonDTO } from 'src/app/api/models';
import { profileDTOToFormGroup } from '../forms/profile.formgroup.patchvalue';
import { Settings } from 'src/settings/settings';

@Component({
  selector: 'admin-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileFormGroup!: FormGroup;
  addressesFormGroup!: FormGroup;
  employersFormGroup!: FormGroup;
  jobDescriptionFormGroup!: FormGroup;

  currentProfile: PersonDTO | undefined = {};

  selectedAddressState: any = [];
  selectedEmployeeStateList: any = [];
  countryList = ["Philippines", "United States"];
  stateList: any = {
    "Philippines" : Settings.PHProvinceList,
    "United States": Settings.USStateList
  };

  constructor(
    private fb: FormBuilder,
    private svc: AdminProfileService,
    private storageSVC: LocalStorageService) { }

  ngOnInit() {
    if (!this.profileFormGroup) this.profileFormGroup = createProfileFormGroup(this.fb);
    if (!this.addressesFormGroup) this.addressesFormGroup = createAddressFormGroup(this.fb);
    if (!this.employersFormGroup) this.employersFormGroup = createEmployersFormGroup(this.fb);
    if (!this.jobDescriptionFormGroup) this.jobDescriptionFormGroup = createJobDescriptionFormGroup(this.fb);

    this.getProfile();
    this.loadState();
  }

  loadState() {
    this.loadAddressStateList();
    this.loadEmployeeStateList();
  }

  loadAddressStateList() {
    this.currentProfile?.addresses?.forEach((value, index) => {
      this.selectedAddressState[index] = this.stateList[value?.country!];
    });
  }

  loadEmployeeStateList() {
    this.currentProfile?.employers?.forEach((value, index) => {
      this.selectedEmployeeStateList[index] = this.stateList[value?.country!];
    });
  }

  // https://stackoverflow.com/questions/60113914/duplicate-dynamic-select-box-using-angular-6-form-array
  onChangeEmployeeCountry(event: any, index: number) {
    this.selectedEmployeeStateList[index] = this.stateList[event?.target?.value];
  }

  onChangeAddressCountry(event: any, index: number) {
    this.selectedAddressState[index] = this.stateList[event?.target?.value];
  }

  getProfile() {
    let profile = this.storageSVC.parse(this.storageSVC.get("profile")) as PersonDTO;
    if (profile) {
      profileDTOToFormGroup(this.profileFormGroup, profile, this.fb);
      this.currentProfile = profile;
      console.log(profile.employers)
      this.loadState();
    } else {
      this.svc.GetProfile()
      .then((response) => {
        this.storageSVC.set("profile", response.person);
        profileDTOToFormGroup(this.profileFormGroup, response.person, this.fb);
        this.currentProfile = response.person;
      });
    }
  }

  submitForm() {
    let formValues = this.profileFormGroup?.value;
    // console.log(formValues)

    if (formValues.id && formValues.id > 0) {
      this.svc.Update(formValues)
        .then((response) => {
          if (response && response.person) {
            this.storageSVC.set("profile", response.person);
            this.currentProfile = response.person;
          }
        });
    } else {
      this.svc.Create(formValues)
        .then((response) => {
          if (response && response.person) {
            this.storageSVC.set("profile", response.person);
            this.currentProfile = response.person;
          }
        });
    }
  }

  get addressesFormArray() {
    return getFormArray(this.profileFormGroup, 'addresses');
  }

  employersFormArray() {
    return getFormArray(this.profileFormGroup, 'employers');
  }

  onAddEmployerClick() {
    addItemToFormArray(this.employersFormArray(), this.employersFormGroup);
  }

  onRemoveEmployerClick(index: number, id: number) {
    let selected = this.employersFormArray()?.at(index);
    if (selected && selected.value?.id === id) {
      selected.patchValue({
        isActive: false
      });
      removeItemToFormArray(this.employersFormArray(), index);
    }
  }

  // https://www.tektutorialshub.com/angular/nested-formarray-example-add-form-fields-dynamically/
  jobDescriptionFormsArray(index: number) {
    let result = this.employersFormArray().at(index).get('workExps') as FormArray;
    return result;
  }

  onAddJobDescriptionClick(index: number) {
    addItemToFormArray(this.jobDescriptionFormsArray(index), createJobDescriptionFormGroup(this.fb));
  }

  onRemoveJobDescriptionpClick(index: number, workExpIndex: number, id: number) {
    let selected = this.jobDescriptionFormsArray(index)?.at(workExpIndex);
    if (selected && selected.value?.id === id) {
      selected.patchValue({
        isActive: false
      });
      removeItemToFormArray(this.jobDescriptionFormsArray(index), workExpIndex);
    }
  }

  onIsActiveChange(event: any) {
    this.profileFormGroup?.patchValue({
      isActive: event?.target?.checked
    });
  }
}
