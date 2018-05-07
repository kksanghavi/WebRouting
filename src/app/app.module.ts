import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DynamicModule} from 'ng-dynamic-component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentArray, compHash, title} from './component-list.g';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {
   MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule, MatListModule, MatPaginatorModule, MatSelectModule, MatTableModule,
   MatTabsModule, MatCardModule,
   MatTooltipModule, MatRadioModule,
   MatDatepickerModule, MatNativeDateModule

} from '@angular/material';
import {RouterModule} from '@angular/router';
import {routes} from './Routes';
import {MagicModule,ComponentListService} from '@magic-xpa/angular';
import {MagicAngularMaterialModule} from '@magic-xpa/angular-material-core';


@NgModule({
   declarations: [AppComponent, ...ComponentArray],
   imports: [
      // Angular modules
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes),

      // Material modules
      BrowserAnimationsModule,
      MatTableModule,
      MatPaginatorModule,
      MatInputModule,
      MatButtonModule,
      MatListModule,
      MatCheckboxModule,
      MatTabsModule,
      MatDialogModule,
      MatSelectModule,
      MatTooltipModule,
      MatCardModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,

      // Magic modules
      MagicModule.forRoot(),
      MagicAngularMaterialModule,
      InfiniteScrollModule,
      DynamicModule.withComponents(ComponentArray)
   ],
   bootstrap: [AppComponent],
})
export class AppModule {
   constructor(componentList:ComponentListService) {
      componentList.addComponents(compHash);
      componentList.title = title;
   }

}
