import { Injectable } from '@angular/core';

import { FolderModel } from '../sgr-model/folder-model';
import { IpcRendererService } from '../sgr-service/ipc-renderer.service';
import { resolve } from 'url';
import { reject } from '../../../node_modules/@types/q';
@Injectable({
  providedIn: 'root'
})
export class NodeLinkService {
  private fs  = window.require('fs');
  private path = window.require('path');
  private size = 0;
  private project: FolderModel;
  constructor(private ipcrenderer: IpcRendererService) { }
  getFolder (folderPath: string) {
    this.folderSize(folderPath);
    this.project = {
      name: this.path.basename(folderPath),
      path: folderPath,
      size: this.size,
      type: 'project',
    };
    this.ipcrenderer.insert(this.project).then(msg => {
      if (msg === 'success') {
        this.size = 0;
      }
    });
  }
  folderSize (folderPath: string) {
    const files = this.fs.readdirSync(folderPath);
    files.forEach(element => {
      const nowPath = folderPath + '/' + element;
      try {
        if (this.fs.statSync(nowPath).isDirectory()) {
          this.folderSize(nowPath);
        } else {
          this.size += this.fs.statSync(nowPath).size;
        }
      } catch (error) {}});
  }
  getFolderDesc (path: string) {
    this.fileContents(path, 'package.json').then(data => {
      console.log(data);
    });
  }
  fileContents (path: string, filename: string) {
    const file = this.path.join(path, filename);
    return new Promise((resolve, reject) => {
      this.fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}
