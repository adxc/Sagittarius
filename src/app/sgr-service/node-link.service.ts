import { Injectable } from '@angular/core';
import { fromPromise } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeLinkService {
  private fs  = window.require('fs');
  constructor() { }
  getFolder (path: String[]) {
    console.log(path);
    this.fs.readdir(path[0], (err, files) => {
      console.log(files);
    });
  }
}
