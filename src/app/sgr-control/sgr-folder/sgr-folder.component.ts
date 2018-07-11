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
  folderList: FolderModel [] = [{name: 'abc', size: 12.3, path: 'D:\abc\ab', type: 'project'},
  {name: 'bbc', size: 45.6, path: 'D:\abc\bb', type: 'project'},
  {name: 'cbc', size: 78.9, path: 'D:\abc\cb', type: 'project'},
  {name: 'dbc', size: 12.10, path: 'D:\abc\db', type: 'project'},
  {name: 'dbc', size: 12.10, path: 'D:\abc\db', type: 'project'},
  {name: 'dbc', size: 12.10, path: 'D:\abc\db', type: 'project'}];
  constructor(private folderService: FolderService) { }

  ngOnInit() {
    this.showProjectList();
  }
  addProject () {
    this.folderService.addProject();
  }
  showProject (folder) {
    // this.selectFolder = folder;
  }
  showProjectList () {
    this.folderService.getProjectList();
  }
}
