import { TestBed } from '@angular/core/testing';

import { InscripAlumService } from './inscripalum.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('InscripAlumService', () => {
  let service: InscripAlumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(InscripAlumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
