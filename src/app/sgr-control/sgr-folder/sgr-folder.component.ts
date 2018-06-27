import { Component, OnInit } from '@angular/core';


import { FolderService } from '../../sgr-service/folder.service';
import { FolderModel } from '../../sgr-model/folder-model';
@Component({
  selector: 'app-sgr-folder',
  templateUrl: './sgr-folder.component.html',
  styleUrls: ['./sgr-folder.component.scss'],
  providers: [FolderService]
})
export class SgrFolderComponent implements OnInit {
  folder: FolderModel;
  private selectFolder;
  folderList: FolderModel [] = [{name: 'abc', size: 12.3, path: 'D:\abc\ab'},
  {name: 'bbc', size: 45.6, path: 'D:\abc\bb'},
  {name: 'cbc', size: 78.9, path: 'D:\abc\cb'},
  {name: 'dbc', size: 12.10, path: 'D:\abc\db'}];
  constructor(private folderService: FolderService) { }

  ngOnInit() {
  }
  addProject () {
    this.folderService.addProject();
  }
  showProject (folder) {
    this.selectFolder = folder;
    console.log(name);
  }
}
