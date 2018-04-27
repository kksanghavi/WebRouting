import { ComponentListBase } from "./ComponentListBase";
import { Component } from "@angular/core";

import { Root as Root_Root } from "./Root/Root.component";

import { A as A_A } from "./A/A.component";

import { SubA1 as A_SubA1_SubA1 } from "./A/SubA1/SubA1.component";

import { B as B_B } from "./B/B.component";

import { overlay as overlay_overlay } from "./overlay/overlay.component";

export class ComponentsList extends ComponentListBase {
	static compHash: { [x: string]: any } = {
		Root_Root: Root_Root,

		A_A: A_A,

		A_SubA1_SubA1: A_SubA1_SubA1,

		B_B: B_B,

		overlay_overlay: overlay_overlay
	};

	static ComponentArray: any[] = [
		Root_Root,

		A_A,

		A_SubA1_SubA1,

		B_B,

		overlay_overlay
	];

	static getArray() {
		return this.ComponentArray;
	}

	public getComponents(name: string): Component {
		return ComponentsList.compHash[name];
	}

	public static getAllComponents() {
		return this.ComponentArray;
	}

	public getTitle(): string {
		return "WebRouting";
	}
}
