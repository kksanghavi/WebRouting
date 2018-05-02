import {Component, Injectable} from '@angular/core';

export class ComponentListService{

  components = new Map<string,any>();
  dialogs    = new Map<string,any>();

  getComponent(name:string){
    return this.components.get(name);
  }

  addComponents(componentList:any){
    for(let key in componentList){
      this.components.set(key,componentList[key]);
    }
  }

  title : string;
}
