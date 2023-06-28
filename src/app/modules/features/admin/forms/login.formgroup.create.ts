import { FormBuilder } from "@angular/forms";

export function createLoginFormGroup(fb: FormBuilder) {
    return fb.group({
        Username: '',
        Password: ''
    });
}