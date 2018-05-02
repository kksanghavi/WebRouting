import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TextEditDialogComponent} from "./TextEditDialog/textedit.dialog";
import {MatInputModule, MatPaginatorModule, MatTableModule, MatButtonModule, MatListModule, MatTabsModule, MatCheckboxModule,
  MatSelectModule} from "@angular/material";
import {MagicModule,ComponentListService} from "@magic-xpa/angular";
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from "@angular/forms";



export const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatCheckboxModule,
  MatTabsModule,
  MatSelectModule
];


@NgModule({
  declarations: [
    TextEditDialogComponent
  ],
  exports: [
    TextEditDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    ...materialModules,
    MagicModule
  ]
})
export class MagicAngularMaterialModule {
    constructor(componentList:ComponentListService){
      componentList.dialogs.set( 'TextEditDialogComponent' , TextEditDialogComponent )
    }
}
