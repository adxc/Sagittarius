import { Injectable } from '@angular/core';

import { FolderModel } from '../sgr-model/folder-model';
@Injectable({
  providedIn: 'root'
})
export class IpcRendererService {
  private ipcRenderer = window.require('electron').ipcRenderer;
  constructor() { }
  getApi () {
    this.ipcRenderer.send('test', 'abc');
  }
  select () {
    this.ipcRenderer.send('select', 'abc');
  }
  update () {
    this.ipcRenderer.send('update', 'abc');
  }
  delete () {
    this.ipcRenderer.send('delect', 'abc');
  }
  insert (project: FolderModel) {
    this.ipcRenderer.send('insert', project);
  }
}
