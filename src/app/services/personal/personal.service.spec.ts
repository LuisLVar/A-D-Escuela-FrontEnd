import { TestBed } from '@angular/core/testing';

import { PersonalService } from './personal.service';

describe('PersonalService', () => {
  let service: PersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
