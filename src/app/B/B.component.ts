import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector
} from "@magic-xpa/angular";

@Component({
	selector: "mga-B",
	providers: [TaskMagicService],
	styleUrls: ["./B.component.css"],
	templateUrl: "./B.component.html"
})
export class B extends BaseTaskMagicComponent {}
