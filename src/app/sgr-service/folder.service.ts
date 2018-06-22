import { Injectable } from '@angular/core';
import {ElectronRemoteService} from './electron-remote.service';
@Injectable()
export class FolderService {
  private fs  = window.require('fs');
  constructor(private electronRemote: ElectronRemoteService) { }
  addProject () {
    this.electronRemote.getDialog();
  }
  deleteProject () {
    console.log(1);
  }
}
