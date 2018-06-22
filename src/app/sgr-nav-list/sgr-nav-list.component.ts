import { Component, OnInit } from '@angular/core';
import {ElectronRemoteService} from '../sgr-service/electron-remote.service';

@Component({
  selector: 'app-sgr-nav-list',
  templateUrl: './sgr-nav-list.component.html',
  styleUrls: ['./sgr-nav-list.component.scss']
})
export class SgrNavListComponent implements OnInit {
  isShow = false;
  isActive = 'folder';
  selectItem = 'folder';
  public isCollapsed = false;
  constructor(private electronRemote: ElectronRemoteService) { }

  ngOnInit() {
  }
  navSelect (item) {
    if (item !== this.selectItem) {
      this.isShow = false;
      this.selectItem = item;
    } else {
      this.isShow = !this.isShow;
    }
    if (this.isShow) {
      this.isActive = '';
      console.log(this.isActive);
    } else {
      this.isActive = item;
    }
  }
}
