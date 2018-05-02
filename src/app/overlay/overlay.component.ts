import { Component } from "@angular/core";

import { BaseModalComponent } from "@magic-xpa/angular";
import { WindowType, WindowPosition } from "@magic-xpa/utils";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector
} from "@magic-xpa/angular";

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
