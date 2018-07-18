import { Component, OnInit, EventEmitter, Output} from '@angular/core';


import { FolderService } from '../../sgr-service/folder.service';
import { FolderModel } from '../../sgr-model/folder-model';
@Component({
  selector: 'app-sgr-folder',
  templateUrl: './sgr-folder.component.html',
  styleUrls: ['./sgr-folder.component.scss'],
  providers: [FolderService]
})
export class SgrFolderComponent implements OnInit {
  @Output() selectPorject = new EventEmitter<FolderModel>();
  private selectFolder;
  public folderList;
  constructor(private folderService: FolderService) { }
  ngOnInit() {
    this.showProjectList();
  }
  addProject () {
    this.folderService.addProject();
    this.showProjectList();
  }
  showProject (folder) {
     this.selectFolder = folder;
     this.selectPorject.emit(folder);
  }
  managerProject (folder) {
    this.folderService.managerProject(folder).subscribe(msg => {
      if (msg === 'success') {
        this.showProjectList();
      }
    });
  }
  showProjectList () {
    this.folderService.getProjectList().subscribe(projectList => {
      this.folderList = projectList;
    });
  }
}
