import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sgrFolderSize'
})
export class SgrFolderSizePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if ((value / 1024) < 1) {
      return value + 'B';
    }
    if ((value / 1024 / 1024 ) < 1) {
      return (value / 1024).toFixed(2) + 'KB';
    }
    return (value / 1024 / 1024 ).toFixed(2) + 'MB';
  }
}
