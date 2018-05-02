import {Directive, ElementRef, Input, Renderer2, ViewContainerRef} from '@angular/core';
import {MagicDirectiveBase} from "./magic-directive-base.directive";
import {TaskMagicService} from "../services/task.magics.service";

@Directive({
  selector: '[magic]'
})

// magic directive for full-control
export class MagicFullControlDirective extends MagicDirectiveBase {

  constructor(
    _task   : TaskMagicService,
    element : ElementRef,
    renderer: Renderer2,
    vcRef   : ViewContainerRef) {
    super(_task, element, renderer,  vcRef);
  }

  @Input('magic') set magic(val) {
    this.id = val;
    this.selector = 'magic';
  };
}




