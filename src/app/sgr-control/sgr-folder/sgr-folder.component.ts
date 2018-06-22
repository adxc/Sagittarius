import { Component, OnInit } from '@angular/core';
import { FolderService } from '../../sgr-service/folder.service';
@Component({
  selector: 'app-sgr-folder',
  templateUrl: './sgr-folder.component.html',
  styleUrls: ['./sgr-folder.component.scss'],
  providers: [FolderService]
})
export class SgrFolderComponent implements OnInit {

  constructor(private folderService: FolderService) { }

  ngOnInit() {
  }
  addProject () {
    this.folderService.addProject();
  }
}
