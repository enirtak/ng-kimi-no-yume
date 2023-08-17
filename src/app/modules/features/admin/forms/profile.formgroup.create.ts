import { FormBuilder } from "@angular/forms";

export function createProfileFormGroup(fb: FormBuilder) {
    return fb.group({
        id: 0,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        aboutMe: '',
        gitHub: '',
        linkedIn: '',
        websiteUrl: '',
        other: '',
        addresses: fb.array([]),
        employers: fb.array([createEmployersFormGroup(fb)]),
        isActive: true
    });
}

export function createAddressFormGroup(fb: FormBuilder) {
    return fb.group({
        id: 0,
        personId: 0,
        address1: '',
        address2: '',
        country: '',
        city: '',
        state: '',
        zip: '',
        isActive: true
    });
}

export function createEmployersFormGroup(fb: FormBuilder) {
    return fb.group({
        id: 0,
        personId: 0,
        companyName: '',
        position: '',
        salary: 0,
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        address1: '',
        address2: '',
        country: '',
        city: '',
        state: '',
        zip: '',
        workExps: fb.array([createJobDescriptionFormGroup(fb)]),
        isActive: true
    });
}

export function createJobDescriptionFormGroup(fb: FormBuilder) {
    return fb.group({
        id: 0,
        employerId: 0,
        description: '',
        isActive: true
    });
}