import { Directive, OnInit, ElementRef} from '@angular/core';
import { NgControl } from '@angular/forms';
import {TaskMagicService} from "../services/task.magics.service";

@Directive({
  selector: '[booleandirective]',
  host: {

    '(change)': 'onEvent($event, true)'
  }
})


export class BooleanDirective implements OnInit {

  constructor(private el: ElementRef, private control: NgControl, protected _task: TaskMagicService) { }

  public onEvent($event){
    let value: string = this.el.nativeElement.value;

    //this.magic.
    if (value !== null && value.length > 0)
    {
      const newValue: string = this._task.GetRangedValue (this.control.name, value);
      if (newValue != null)
        this.control.control.setValue(newValue);
    }
  }

  ngOnInit(): void {
  }
}
