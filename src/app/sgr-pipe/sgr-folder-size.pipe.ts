import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sgrFolderSize'
})
export class SgrFolderSizePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return null;
  }

}
