import { FormBuilder } from "@angular/forms";

export function createDreamFormGroup(fb: FormBuilder) {
    return fb.group({
        Id: '0',
        DreamName: '',
        DreamDescription: '',
        DreamCategoryId: '0'
    });
}

export function createDreamCategoryFormGroup(fb: FormBuilder) {
    return fb.group({
        Id: '0',
        CategoryName: ''
    });
}