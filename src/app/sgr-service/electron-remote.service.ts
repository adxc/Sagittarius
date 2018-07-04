import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronRemoteService {
  private dialog = window.require('electron').remote.dialog;
  constructor() { }
  getDialog (): string[] {
    return this.dialog.showOpenDialog({properties: ['openDirectory']});
  }
}
