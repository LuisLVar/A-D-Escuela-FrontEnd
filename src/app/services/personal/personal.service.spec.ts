import { TestBed } from '@angular/core/testing';

import { PersonalService } from './personal.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PersonalService', () => {
  let service: PersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
