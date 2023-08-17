import { FormArray, FormGroup } from "@angular/forms";

export function addItemToFormArray(formArray: FormArray, formGroup: FormGroup) {
    formArray.push(formGroup);
}

export function removeItemToFormArray(formArray: FormArray, index: number) {
    formArray.removeAt(index);
}

export function getFormArray(formGroup: FormGroup, controlName: string): FormArray {
    return formGroup.get(controlName) as FormArray; 
}