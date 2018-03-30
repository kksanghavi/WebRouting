import { ComponentListBase } from "./ComponentListBase";
import { Component } from "@angular/core";

import { Root_Root } from "./Root/Root.component";

import { A_A } from "./A/A.component";

import { A_SubA1_SubA1 } from "./A/SubA1/SubA1.component";

import { B_B } from "./B/B.component";

export class ComponentsList extends ComponentListBase {
	static compHash: { [x: string]: any } = {
		Root_Root: Root_Root.Root,

		A_A: A_A.A,

		A_SubA1_SubA1: A_SubA1_SubA1.SubA1,

		B_B: B_B.B
	};

	static ComponentArray: any[] = [
		Root_Root.Root,

		A_A.A,

		A_SubA1_SubA1.SubA1,

		B_B.B
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
