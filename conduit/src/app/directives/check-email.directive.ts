import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

function validateEmail(regex:  RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const isValid = regex.test(control.value);
    
    return !isValid ? { 'email': true } : null;
  };
}

@Directive({
  selector: '[appCheckEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CheckEmailDirective, multi: true }]
})
export class CheckEmailDirective implements Validator {
  private defaultTemplate: string = "^\\w+[\\w-\\.]*\\@\\w+((-\\w+)|(\\w*))\\.[a-z]{2,3}$";

  @Input('appCheckEmail') emailTemplate: string;
  
  constructor() { }
  
  validate(control: AbstractControl): { [key: string]: any; } {
    const regex = this.emailTemplate || this.defaultTemplate;
    
    return validateEmail(new RegExp(regex, 'i'))(control);
  }
}
