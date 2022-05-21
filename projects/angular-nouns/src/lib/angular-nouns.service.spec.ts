import { TestBed } from '@angular/core/testing';

import { AngularNounsService } from './angular-nouns.service';

describe('AngularNounsService', () => {
  let service: AngularNounsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularNounsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
