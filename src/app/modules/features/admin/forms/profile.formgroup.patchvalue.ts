import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { PersonDTO } from "src/app/api/models";

export function profileDTOToFormGroup(formValue: FormGroup, dto: PersonDTO | undefined, fb: FormBuilder) {
    if (dto) {
        formValue.controls['id'].patchValue(dto?.id);
        formValue.controls['firstName'].patchValue(dto?.firstName);
        formValue.controls['lastName'].patchValue(dto?.lastName);
        formValue.controls['phoneNumber'].patchValue(dto?.phoneNumber);
        formValue.controls['emailAddress'].patchValue(dto?.emailAddress);
        formValue.controls['linkedIn'].patchValue(dto?.linkedIn);
        formValue.controls['gitHub'].patchValue(dto?.gitHub);
        formValue.controls['websiteUrl'].patchValue(dto?.websiteUrl);
        formValue.controls['other'].patchValue(dto?.other);
        formValue.controls['aboutMe'].patchValue(dto?.aboutMe);
        formValue.controls['isActive'].patchValue(dto?.isActive);

        if (dto.addresses && dto.addresses.length > 0) {
            let addressFormArray = formValue.get('addresses') as FormArray;
            if (addressFormArray) {
                dto.addresses.forEach((address) => {
                    addressFormArray.push(fb.group({
                        id: address?.id,
                        personId: address?.personId,
                        address1: address?.address1,
                        address2: address?.address2,
                        country: address?.country,
                        city: address?.city,
                        state: address?.state,
                        zip: address?.zip,
                        isActive: address?.isActive
                    }));
                });
            }
        }

        if (dto.employers && dto.employers.length > 0) {
            let employersFormArray = formValue.get('employers') as FormArray;
            if (employersFormArray && employersFormArray.length > 0) {
                dto.employers.forEach((employer, index) => {
                    employersFormArray.clear();
                    employersFormArray.push(fb.group({
                        id: employer?.id,
                        personId: employer?.personId,
                        companyName: employer?.companyName,
                        position: employer?.position,
                        salary: employer?.salary,
                        startDate: parseEmploymentDate(employer?.startDate),
                        endDate: parseEmploymentDate(employer?.endDate),
                        address1: employer?.address1,
                        address2: employer?.address2,
                        country: employer?.country,
                        city: employer?.city,
                        state: employer?.state,
                        zip: employer?.zip,
                        isActive: employer?.isActive,
                        workExps: new FormArray([])
                    }));
    
                    if (employer.workExps && employer.workExps.length > 0) {
                        let jdFormArray = employersFormArray.at(index).get('workExps') as FormArray;
                        if (jdFormArray){
                            employer.workExps?.forEach((jd) => {
                                jdFormArray.push(fb.group({
                                    id: jd?.id,
                                    employerId: jd?.employerId,
                                    description: jd?.description,
                                    isActive: jd?.isActive
                                }));
                            });
                        }
                    }
                });
            }
        }
    }
}

function parseEmploymentDate(employmentDate: string | undefined): string {
    return new Date(employmentDate!).toJSON().split('T')[0];
}