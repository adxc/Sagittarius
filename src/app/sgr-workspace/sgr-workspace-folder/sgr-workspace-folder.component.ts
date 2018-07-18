import { Component, OnInit } from '@angular/core';

import { ManagerService } from '../../sgr-service/manager.service';
@Component({
  selector: 'app-sgr-workspace-folder',
  templateUrl: './sgr-workspace-folder.component.html',
  styleUrls: ['./sgr-workspace-folder.component.scss'],
})
export class SgrWorkspaceFolderComponent implements OnInit {
  private tabs: string[] = [];
  constructor(private managerService: ManagerService) { }
  ngOnInit() {
    this.folderDetial();
  }
  closeTab (tab: string) {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }
  folderDetial () {
    this.managerService.managerItem.subscribe(folder => {
      this.tabs.push(folder.name);
    });
  }
}
