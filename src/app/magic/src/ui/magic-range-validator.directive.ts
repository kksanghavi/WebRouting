import { Directive, OnInit, ElementRef} from '@angular/core';
import {
  NG_VALIDATORS,
  FormsModule,
  FormGroup,
  FormControl,
  ValidatorFn,
  Validator
} from '@angular/forms';
import {TaskMagicService} from '../services/task.magics.service';


@Directive({
  selector: '[rangevalidator] ',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RangeValidator,

      multi: true,

    }
  ]
})

export class RangeValidator implements Validator {
  validator: ValidatorFn;

  constructor(protected _task: TaskMagicService) {
    this.validator = this.rangeValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  public rangeValidator(): ValidatorFn {
    return (c: FormControl) => {
      let controlName: string;
      controlName = this.getControlName (c);
      let errMsg: string = this._task.ValidateControlValue (controlName,  c.value);
      let isValid: boolean = (errMsg == null) ? true : false;
      if (isValid) {
        return null;
      }
      else {
        return {
          rangevalidator: {
            errorMsg : errMsg
          }
        };
      }
    };
  }

  getControlName(c: FormControl): string | null {
    const formGroup = c.parent.controls;
    return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
  }
}
