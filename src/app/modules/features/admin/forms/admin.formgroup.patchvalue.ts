import { FormGroup } from "@angular/forms";
import { DreamDictionaryDTO, DreamCategoryDTO } from "src/app/api/models";

export function yumeFormGroupToDTO(formvalue: any) : DreamDictionaryDTO {
    return {
        id: formvalue?.Id,
        dreamDescription: formvalue?.DreamDescription,
        dreamName: formvalue?.DreamName,
        dreamCategoryId: formvalue?.DreamCategoryId
    }
}

export function dreamCategoryFormGroupToDTO(formvalue: any) : DreamCategoryDTO {
    return {
        id: formvalue?.Id,
        categoryName: formvalue?.CategoryName
    }
}

export function dictionaryDTOToFormGroup(formValue: FormGroup, dto: DreamDictionaryDTO | undefined) {
    if (dto) {
        formValue.controls['Id'].patchValue(dto?.id);
        formValue.controls['DreamName'].patchValue(dto?.dreamName);
        formValue.controls['DreamDescription'].patchValue(dto?.dreamDescription);
        formValue.controls['DreamCategoryId'].patchValue(dto?.dreamCategoryId);
    }
}

export function dreamThemeDTOToFormGroup(formValue: FormGroup, dto: DreamCategoryDTO | undefined) {
    if (dto) {
        formValue.controls['Id'].patchValue(dto?.id);
        formValue.controls['CategoryName'].patchValue(dto?.categoryName);
    }
}