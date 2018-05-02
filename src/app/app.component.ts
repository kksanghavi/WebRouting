import {Component} from '@angular/core';
import {GuiCommand, CommandType} from "@magic-xpa/gui";

declare let myExtObject: any;

@Component({
   selector: 'app-root',
   template: `
    <div>
      <magic-root></magic-root>
    </div>    
 `})
export class AppComponent {
}
