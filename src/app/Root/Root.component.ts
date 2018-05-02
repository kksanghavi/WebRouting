import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector
} from "@magic-xpa/angular";

@Component({
	selector: "mga-Root",
	providers: [TaskMagicService],
	styleUrls: ["./Root.component.css"],
	templateUrl: "./Root.component.html"
})
export class Root extends BaseTaskMagicComponent {}
