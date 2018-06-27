import { Injectable } from '@angular/core';


import {ElectronRemoteService} from './electron-remote.service';
import {NodeLinkService} from './node-link.service';
@Injectable()
export class FolderService {
  constructor(private electronRemote: ElectronRemoteService, private nodelink: NodeLinkService) { }
  addProject () {
    const path: String[] = this.electronRemote.getDialog();
    this.nodelink.getFolder(path[0]);
  }
  deleteProject () {
    console.log(1);
  }
}
