import { FormBuilder } from "@angular/forms";

export function createDreamFormGroup(fb: FormBuilder) {
    return fb.group({
        id: 0,
        dreamName: '',
        dreamDescription: '',
        dreamCategoryId: 0
    });
}

export function createDreamCategoryFormGroup(fb: FormBuilder) {
    return fb.group({
        id: 0,
        categoryName: '',
        description: '',
        isActive: true
    });
}