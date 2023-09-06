import { FormBuilder } from "@angular/forms";

export function createDreamFormGroup(fb: FormBuilder) {
    return fb.group({
        id: 0,
        dreamCategoryId: 0,
        dreamName: '',
        dreamDescription: '',
        isActive: true
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