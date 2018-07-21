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
  select (args) {
    this.ipcRenderer.send('select', args);
    return this.getMainMess('select');
  }
  update () {
    this.ipcRenderer.send('update', 'abc');
  }
  delete (project: FolderModel) {
    this.ipcRenderer.send('delete', project);
  }
  insert (project: FolderModel) {
    this.ipcRenderer.send('insert', project);
    return this.getMainMess('insert');
  }
  getMainMess (type) {
    return new Promise((resolve, reject) => {
      this.ipcRenderer.on(type, (event, arg) => {
        resolve(arg);
      });
    });
  }
}
