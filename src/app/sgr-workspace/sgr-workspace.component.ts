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
  private selectItem;
  constructor(private managerService: ManagerService) { }
  ngOnInit() {
    this.selected();
  }
  closeTab (tab: string) {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }
  selected () {
    this.managerService.managerItem.subscribe(data => {
      this.selectItem = data;
      if (this.tabs.indexOf(data) === -1) {
        this.tabs.push(data);
        this.index = this.tabs.length  - 1;
      } else {
        this.index = this.tabs.indexOf(data);
      }
    });
  }
  tabClick (tab) {
    this.selectItem = tab;
  }
}
