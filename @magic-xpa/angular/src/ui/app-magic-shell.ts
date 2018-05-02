import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {GuiCommand, CommandType} from "@magic-xpa/gui";
import { Title }     from '@angular/platform-browser';
import {ModalFormDefinition} from './magic-modal/magic-modal-form';
import {MagicEngine} from "../services/magic.engine";
import {ComponentListService} from '../services/component-list.service';
import {GuiInteractiveExecutor} from "./GuiInteractiveExecutor";

declare let myExtObject: any;

@Component({
  selector: 'magic-root',
/*  providers: [
    MagicEngine,
    ComponentListService
  ],*/
  template: `
    <ndc-dynamic [ndcDynamicComponent]="MainComp"
                 [ndcDynamicInputs]   ="MainCompParameters">
    </ndc-dynamic>
    
    <app-magic-modal
      *ngIf="ModalFormDefinition.comp !== null"
      [ModalComp]          ="ModalFormDefinition.comp"
      [ModalCompParameters]="ModalFormDefinition.parameters">
    </app-magic-modal>
 `
})
export class AppMagicShell implements OnInit {

  MainComp           : Component;
  MainCompParameters : any;
  ModalFormDefinition: ModalFormDefinition = new ModalFormDefinition();

  constructor(protected magic: MagicEngine,
              protected componentList:ComponentListService,
              protected changeDetectorRef: ChangeDetectorRef,
              private titleService: Title) {

    this.initializeMagic();
    this.setTitle();
  }

  ngOnInit() {
    this.magic.startMagic();
  }

  initializeMagic() {
    this.regUpdatesUI();
  }

  public setTitle( ) {
    const newTitle: string = this.componentList.title;
    this.titleService.setTitle( newTitle );
  }

  private InjectComponent(formName: string, taskId: string, taskDescription: string) {
    this.MainComp = this.componentList.getComponent(formName);
    this.MainCompParameters = {myTaskId: taskId, taskDescription: taskDescription};

    this.changeDetectorRef.detectChanges();
  }

  regUpdatesUI() {
    this.magic
      .refreshDom
      .filter(command => command.TaskTag === '0')
      .subscribe(command => {
        this.executeCommand(command);
      });

    this.magic
      .interactiveCommands
      .filter(command => command.TaskTag === '0')
      .subscribe(command => {
        let executor = new GuiInteractiveExecutor();
        executor.command = command;
        executor.Run();
      });
  }

  executeCommand(command: GuiCommand): void {
    console.log("AppComponent.executeCommand()");
    switch (command.CommandType) {
      case CommandType.OPEN_FORM:
        if(command.Bool1) { //open as modal dialog
          this.ModalFormDefinition.taskId = command.stringList[0];
          this.ModalFormDefinition.comp = this.componentList.getComponent(command.str);
          this.ModalFormDefinition.parameters = {
            myTaskId: command.stringList[0],
            taskDescription: command.stringList[1]
          };
          this.changeDetectorRef.detectChanges();
        }
        else {
          this.InjectComponent(command.str, command.stringList[0], command.stringList[1]);
        }

        break;

      case CommandType.CLOSE_FORM:
        if (command.str === this.ModalFormDefinition.taskId) {
          this.ModalFormDefinition = new ModalFormDefinition();
        }
        break;
    }
  }
}
