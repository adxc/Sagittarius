import { Injectable } from '@angular/core';

import { of } from 'rxjs';
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
  getMenu () {
    const menu = new this.Menu();
    menu.append(new this.MenuItem({label: 'MenuItem1', click(menuItem, browserWindow, event) {
      console.log(menuItem);
      console.log(browserWindow);
      console.log(event); }}));
    return of(menu.popup({}));
  }
}
