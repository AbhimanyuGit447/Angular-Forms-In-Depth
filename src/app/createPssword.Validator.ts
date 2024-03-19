import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createPasswordValidator() : ValidatorFn {
  return (control : AbstractControl) : ValidationErrors | null => {
    const value = control.value;

    if(!value){
      return null;
    }

    const hasUppperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const passwordValid = hasUppperCase && hasLowerCase && hasNumeric;

    return !passwordValid ? {passwordStrength : true} : null;

  }
}
