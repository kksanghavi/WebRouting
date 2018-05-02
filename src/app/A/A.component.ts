import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector
} from "@magic-xpa/angular";

@Component({
	selector: "mga-A",
	providers: [TaskMagicService],
	styleUrls: ["./A.component.css"],
	templateUrl: "./A.component.html"
})
export class A extends BaseTaskMagicComponent {}
