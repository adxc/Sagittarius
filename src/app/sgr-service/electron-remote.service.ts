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
  getMenu (): any {
    return this.Menu;
  }
  getMenuItem (label: string, callback: any, folder: object, obj: object): object {
    return new this.MenuItem({label: label, click () { callback.call(obj, folder); }});
  }
}
