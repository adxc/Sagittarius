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
  private folderList;
  constructor(private folderService: FolderService) { }

  ngOnInit() {
    this.showProjectList();
  }
  addProject () {
    if (this.folderService.addProject()) {
      this.folderService.addProject().subscribe(projectList => {
        this.folderList = projectList;
      });
    }
  }
  showProject (folder) {
    // this.selectFolder = folder;
  }
  showProjectList () {
    this.folderService.getProjectList().subscribe(projectList => {
      this.folderList = projectList;
    });
  }
}
