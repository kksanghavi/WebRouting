import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import{RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {DynamicModule} from 'ng-dynamic-component';

import {MagicEngine} from "./services/magic.engine";
import {ComponentListService} from './services/component-list.service';

import {MagicFullControlDirective} from "./ui/magic-fullcontrol-directive.directive";
import {MagicNoControlDirective} from "./ui/magic-nocontrol-directive.directive";
import {MagicDefaultValueAccessor, MagicFormControlNameDirective} from "./ui/magic.form-control-name.directive";
import {MagicModalWindow} from "./ui/magic-modal/magic-modal-window";
import {MagicRouterContainer} from './ui/MagicRouterContainer';
import {AlphaDirective} from './ui/magic-alpha-directive.directive';
import {BooleanDirective} from './ui/magic-boolean-directive.directive';
import {DateFormatPipe} from './ui/magic-datetransform-pipe';
import {TimeFormatPipe} from './ui/magic-timetransform-pipe';
import {RangeValidator} from './ui/magic-range-validator.directive';
import {Subform} from './ui/subform-component';
import {MagicCheckboxDirective, MatCheckboxDirective} from './ui/magic-checkbox.directive';
import {CommandsCollector} from './services/CommandsCollector';
import {AppMagicShell} from './ui/app-magic-shell';




const decs = [
  MagicFullControlDirective,
  MagicCheckboxDirective,
  MagicModalWindow,
  MagicRouterContainer,
  AppMagicShell,
  Subform,

  MatCheckboxDirective,
  MagicNoControlDirective,
  MagicDefaultValueAccessor,
  MagicFormControlNameDirective,

  AlphaDirective,
  BooleanDirective,
  DateFormatPipe,
  TimeFormatPipe,
  RangeValidator,

];

@NgModule({
  declarations: [...decs],
  exports     : [...decs],
  entryComponents:[],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //ThemeModule,
    RouterModule,
    DynamicModule.withComponents([MagicModalWindow])
  ]
})
export class MagicModule {
  static forRoot() {
    return {
      ngModule: MagicModule,
      providers: [
        MagicEngine,
        ComponentListService,
        CommandsCollector
      ]
    }
  }
}
