import { FormGroup, Validators } from "@angular/forms";

export function setupLoginFormGroupHandler(form: FormGroup) {
    form.controls['Email'].setValidators([
        Validators.required
    ]);

    form.controls['Password'].setValidators([
        Validators.required
    ]);

    form.updateValueAndValidity();
}