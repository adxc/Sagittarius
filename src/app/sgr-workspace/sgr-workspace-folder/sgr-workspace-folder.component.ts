import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sgr-workspace-folder',
  templateUrl: './sgr-workspace-folder.component.html',
  styleUrls: ['./sgr-workspace-folder.component.scss']
})
export class SgrWorkspaceFolderComponent implements OnInit {
  private tabs: string[];
  constructor() { }
  ngOnInit() {
    this.tabs = ['abc', 'bbc'];
  }
  closeTab (tab: string) {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }
}
