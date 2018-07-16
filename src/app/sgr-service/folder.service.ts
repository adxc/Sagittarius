import { Injectable } from '@angular/core';
import {Observable, from} from 'rxjs';

import {ElectronRemoteService} from './electron-remote.service';
import {NodeLinkService} from './node-link.service';
import {IpcRendererService} from '../sgr-service/ipc-renderer.service';
@Injectable()
export class FolderService {
  constructor(private electronRemote: ElectronRemoteService,
     private nodelink: NodeLinkService,
      private ipcrendererService: IpcRendererService) { }
  addProject () {
    const path: string[] = this.electronRemote.getDialog();
    if (path) {
      this.nodelink.getFolder(path[0]);
    }
  }
  managerProject (folder) {
    this.electronRemote.getMenu().subscribe(value => console.log(value));
  }
  deleteProject () {
    console.log(1);
  }
  getProjectList (): Observable<{}> {
    return from(this.ipcrendererService.select({type: 'project'}));
  }
}
