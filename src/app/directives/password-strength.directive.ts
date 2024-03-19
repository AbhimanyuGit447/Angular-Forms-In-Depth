import {Directive} from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { createPasswordValidator } from '../createPssword.Validator';

@Directive({
  selector : "[passwordStrength]",
  providers : [{
    provide : NG_VALIDATORS,
    useExisting : PasswordStrtengthDirective,
    multi : true
  }]
})

export class PasswordStrtengthDirective implements Validator{
  validate(control : AbstractControl) : ValidationErrors | null {
   return createPasswordValidator()(control);
  }
}

