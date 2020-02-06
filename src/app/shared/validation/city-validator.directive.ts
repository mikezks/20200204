import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidatorDirective,
      multi: true
    }
  ]
})
export class CityValidatorDirective implements Validator {
  @Input() city: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const validCities = this.city.split(',');

    if (control.value && validCities.indexOf(control.value) === -1) {
      return { city: {
        actual: control.value,
        validCities
      }};
    }

    return null;
  }
}
