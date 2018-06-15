import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sgr-nav-list',
  templateUrl: './sgr-nav-list.component.html',
  styleUrls: ['./sgr-nav-list.component.scss']
})
export class SgrNavListComponent implements OnInit {
  isShow = false;
  constructor() { }

  ngOnInit() {
  }
  onFolder ($event) {
    this.isShow = !this.isShow;
    console.log($event);
  }
}
