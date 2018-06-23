import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronRemoteService {
  private dialog = window.require('electron').remote.dialog;
  constructor() { }
  getDialog (): String[] {
    return this.dialog.showOpenDialog({properties: ['openDirectory', 'multiSelections']});
  }
}
