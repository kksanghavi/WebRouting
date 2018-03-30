import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";

import { TaskMagicService } from "../magic/src/services/task.magics.service";

export namespace B_B {
	@Component({
		selector: "mga-B",
		providers: [TaskMagicService],
		styleUrls: ["./B.component.css"],
		templateUrl: "./B.component.html"
	})
	export class B extends BaseTaskMagicComponent {}
}
