import { FormGroup, Validators } from "@angular/forms";

export function setupCategoryFormGroupHandler(form: FormGroup) {
    form.controls['CategoryName'].setValidators([
        Validators.required,
        Validators.minLength(1)
    ]);

    form.updateValueAndValidity();
}

export function setupDreamFormGroupHandler(form: FormGroup) {
    form.controls['DreamName'].setValidators([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
    ]);

    form.controls['DreamDescription'].setValidators([
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(1000)
    ]);

    form.controls['DreamCategoryId'].setValidators([
        Validators.required
    ]);

    form.updateValueAndValidity();
}