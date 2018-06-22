import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpcRendererService {
  private ipcRenderer = window.require('electron').ipcRenderer;
  constructor() { }
  getApi () {
    console.log(this.ipcRenderer);
  }
}
