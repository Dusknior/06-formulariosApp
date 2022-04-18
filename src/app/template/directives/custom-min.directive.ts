import { Directive, Input } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[customMin][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true,
    },
  ],
})
export class CustomMinDirective implements Validator {
  @Input() minimo!: number;

  constructor() {}

  validate(control: FormControl): ValidationErrors | null {
    if (control.value < this.minimo) {
      return {
        customMin: {
          valid: true,
        },
      };
    }
    return null;
  }
}
