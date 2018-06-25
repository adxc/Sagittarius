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
  private foldList: FolderModel [];
  constructor(private folderService: FolderService) { }

  ngOnInit() {
  }
  addProject () {
    this.folderService.addProject();
  }
  showProject (name) {
    console.log(name);
  }
}
