import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NodeLinkService {
  private fs  = window.require('fs');
  private path = window.require('path');
  constructor() { }
  getFolder (folderPath: String[]) {
    console.log(folderPath);
    console.log(this.path.basename(folderPath[0]));
    this.fs.readdir(folderPath[0], (err, files) => {
      console.log(files);
    });
  }
}
