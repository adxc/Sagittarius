import { TestBed, inject } from '@angular/core/testing';

import { NodeLinkService } from './node-link.service';

describe('NodeLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodeLinkService]
    });
  });

  it('should be created', inject([NodeLinkService], (service: NodeLinkService) => {
    expect(service).toBeTruthy();
  }));
});
