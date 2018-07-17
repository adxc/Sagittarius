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
  managerProject (folder): Observable<any> {
    const menu = new (this.electronRemote.getMenu());
    menu.append(this.electronRemote.getMenuItem('删除', this.deleteProject, folder, this));
    menu.popup({});
    return from(this.ipcrendererService.getMainMess('delete'));
  }
  deleteProject (folder) {
    this.ipcrendererService.delete(folder);
  }
  getProjectList (): Observable<object> {
    return from(this.ipcrendererService.select({type: 'project'}));
  }
}
