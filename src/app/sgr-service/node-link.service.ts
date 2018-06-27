import { Injectable } from '@angular/core';

import { FolderModel } from '../sgr-model/folder-model';

@Injectable({
  providedIn: 'root'
})
export class NodeLinkService {
  private fs  = window.require('fs');
  private path = window.require('path');
  constructor() { }
  getFolder (folderPath: String) {
    // const folder: FolderModel = {
    //   name: this.path.basename(folderPath),
    //   path: folderPath,
    //   size: 123
    // };
    // console.log(folderPath);
    // console.log(this.path.basename(folderPath));
    this.fs.readdir(folderPath, (err, files) => {
      console.log(files);
      files.forEach(element => {
        const nowPath = folderPath + '/' + element;
        // console.group(element);
        // console.log(this.fs.statSync(folderPath + '/' + element).isDirectory());
        // console.log(this.fs.statSync(folderPath + '/' + element));
        // console.groupEnd();
        if (this.fs.statSync(nowPath).isDirectory()) {
          this.getFolder(nowPath);
        }
      });
    });
  }
  folderSize (folderPath: String): Number {
    this.fs.readdir();
    return 1;
  }
}
