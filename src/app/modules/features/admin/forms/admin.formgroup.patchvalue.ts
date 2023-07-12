import { FormGroup } from "@angular/forms";
import { DreamDictionaryDTO, DreamCategoryDTO } from "src/app/api/models";

// Symbol
export function yumeFormGroupToDTO(formvalue: any) : DreamDictionaryDTO {
    return {
        id: formvalue?.Id,
        dreamDescription: formvalue?.dreamDescription,
        dreamName: formvalue?.dreamName,
        dreamCategoryId: formvalue?.dreamCategoryId
    }
}

export function yumeFormGroupToList(formValue: DreamDictionaryDTO, newValue: DreamDictionaryDTO) {
    if (newValue) {
        formValue.id = newValue.id;
        formValue.dreamName = newValue.dreamName;
        formValue.dreamDescription = newValue.dreamDescription;
        formValue.dreamCategoryId = newValue.dreamCategoryId;
    }
}

export function dictionaryDTOToFormGroup(formValue: FormGroup, dto: DreamDictionaryDTO | undefined) {
    if (dto) {
        formValue.controls['id'].patchValue(dto?.id);
        formValue.controls['dreamName'].patchValue(dto?.dreamName);
        formValue.controls['dreamDescription'].patchValue(dto?.dreamDescription);
        formValue.controls['dreamCategoryId'].patchValue(dto?.dreamCategoryId);
    }
}

// Category
export function dreamCategoryFormGroupToDTO(formvalue: any) : DreamCategoryDTO {
    return {
        id: formvalue?.Id,
        categoryName: formvalue?.categoryName,
        description: formvalue?.description
    }
}

export function dreamThemeDTOToFormGroup(formValue: FormGroup, dto: DreamCategoryDTO | undefined) {
    if (dto) {
        formValue.controls['id'].patchValue(dto?.id);
        formValue.controls['categoryName'].patchValue(dto?.categoryName);
        formValue.controls['description'].patchValue(dto?.description);
    }
}

export function dreamThemeFormGroupToList(formValue: DreamCategoryDTO, newValue: DreamCategoryDTO) {
    if (newValue) {
        formValue.id = newValue.id;
        formValue.categoryName = newValue.categoryName;
        formValue.description = newValue.description;
    }
}