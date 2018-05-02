import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector
} from "@magic-xpa/angular";

@Component({
	selector: "mga-SubA1",
	providers: [TaskMagicService],
	styleUrls: ["./SubA1.component.css"],
	templateUrl: "./SubA1.component.html"
})
export class SubA1 extends BaseTaskMagicComponent {}
