import { Component, OnInit } from '@angular/core';

import { ManagerService } from '../sgr-service/manager.service';
@Component({
  selector: 'app-sgr-workspace',
  templateUrl: './sgr-workspace.component.html',
  styleUrls: ['./sgr-workspace.component.scss']
})
export class SgrWorkspaceComponent implements OnInit {
  private tabs: string[] = [];
  private index = 0;
  constructor(private managerService: ManagerService) { }
  ngOnInit() {
    this.folderDetial();
  }
  closeTab (tab: string) {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }
  folderDetial () {
    this.managerService.managerItem.subscribe(folder => {
      if (this.tabs.indexOf(folder.name) === -1) {
        this.tabs.push(folder.name);
        this.index = this.tabs.length  - 1;
      } else {
        this.index = this.tabs.indexOf(folder.name);
      }
    });
  }
}
