import { Injectable , EventEmitter} from '@angular/core';

import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  managerItem =  new EventEmitter();
  constructor() { }
}
