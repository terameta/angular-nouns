import { TestBed } from '@angular/core/testing';

import { NgNounService } from './ng-noun.service';

describe('NgNounService', () => {
  let service: NgNounService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgNounService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
