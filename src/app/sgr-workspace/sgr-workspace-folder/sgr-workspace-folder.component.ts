import { Component, OnInit , Input} from '@angular/core';

import { FolderModel } from '../../sgr-model/folder-model';
import { NodeLinkService } from '../../sgr-service/node-link.service';
@Component({
  selector: 'app-sgr-workspace-folder',
  templateUrl: './sgr-workspace-folder.component.html',
  styleUrls: ['./sgr-workspace-folder.component.scss'],
})
export class SgrWorkspaceFolderComponent implements OnInit {
  @Input () folder: FolderModel;
  constructor(private nodeLink: NodeLinkService) { }
  ngOnInit() {
    this.getFolderDetail();
  }
  getFolderDetail () {
    this.nodeLink.getFolderDesc(this.folder.path).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
}
