import { TestBed, inject } from '@angular/core/testing';

import { ElectronRemoteService } from './electron-remote.service';

describe('ElectronRemoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectronRemoteService]
    });
  });

  it('should be created', inject([ElectronRemoteService], (service: ElectronRemoteService) => {
    expect(service).toBeTruthy();
  }));
});
