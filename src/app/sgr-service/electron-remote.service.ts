import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronRemoteService {
  private dialog = window.require('electron').remote.dialog;
  private Menu = window.require('electron').remote.Menu;
  private MenuItem = window.require('electron').remote.MenuItem;
  constructor() { }
  getDialog (): string[] {
    return this.dialog.showOpenDialog({properties: ['openDirectory']});
  }
  getMenu (): string[] {
   return null;
  }
}
