import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sgr-workspace',
  templateUrl: './sgr-workspace.component.html',
  styleUrls: ['./sgr-workspace.component.scss']
})
export class SgrWorkspaceComponent implements OnInit {
  tabs = [ 'Tab 1', 'Tab 2' ];
  constructor() { }

  ngOnInit() {
  }


  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
  }
}
