import { Component, OnInit , Input} from '@angular/core';

import { FolderModel } from '../../sgr-model/folder-model';
@Component({
  selector: 'app-sgr-workspace-folder',
  templateUrl: './sgr-workspace-folder.component.html',
  styleUrls: ['./sgr-workspace-folder.component.scss'],
})
export class SgrWorkspaceFolderComponent implements OnInit {
  @Input () folder: FolderModel;
  constructor() { }
  ngOnInit() {
    console.log(this.folder);
  }
}
