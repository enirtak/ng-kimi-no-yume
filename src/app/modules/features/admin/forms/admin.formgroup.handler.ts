import { FormGroup, Validators } from "@angular/forms";

export function setupCategoryFormGroupHandler(form: FormGroup) {
    form.controls['categoryName'].setValidators([
        Validators.required,
        Validators.minLength(1)
    ]);

    form.controls['description'].setValidators([
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(1000)
    ]);

    form.updateValueAndValidity();
}

export function setupDreamFormGroupHandler(form: FormGroup) {
    form.controls['dreamName'].setValidators([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
    ]);

    form.controls['dreamDescription'].setValidators([
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(1000)
    ]);

    form.controls['dreamCategoryId'].setValidators([
        Validators.required
    ]);

    form.updateValueAndValidity();
}