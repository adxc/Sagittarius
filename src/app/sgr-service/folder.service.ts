import { Injectable } from '@angular/core';


import {ElectronRemoteService} from './electron-remote.service';
import {NodeLinkService} from './node-link.service';
import {IpcRendererService} from '../sgr-service/ipc-renderer.service';
@Injectable()
export class FolderService {
  constructor(private electronRemote: ElectronRemoteService, private nodelink: NodeLinkService, private ipcrenderer: IpcRendererService) { }
  addProject () {
    const path: string[] = this.electronRemote.getDialog();
    this.nodelink.getFolder(path[0]);
  }
  deleteProject () {
    console.log(1);
  }
  getProjectList () {
    this.ipcrenderer.select();
  }
}
