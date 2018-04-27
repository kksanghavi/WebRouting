import { Component } from "@angular/core";

import { BaseModalComponent } from "../magic/src/ui/magic-modal/magic-baseModalComponent";
import { WindowType, WindowPosition } from "@magic/utils";

import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-overlay",
	providers: [TaskMagicService],
	styleUrls: ["./overlay.component.css"],
	templateUrl: "./overlay.component.html"
})
export class overlay extends BaseModalComponent {
	private static readonly formName: string = "overlay";
	private static readonly showTitleBar: boolean = true;
	private static readonly x: number = 0;
	private static readonly y: number = 0;
	private static readonly windowPosition: WindowPosition = 7;

	get X() {
		return overlay.x;
	}

	get Y() {
		return overlay.y;
	}

	get WindowPosition() {
		return overlay.windowPosition;
	}

	get FormName() {
		return overlay.formName;
	}

	get ShowTitleBar() {
		return overlay.showTitleBar;
	}
}
