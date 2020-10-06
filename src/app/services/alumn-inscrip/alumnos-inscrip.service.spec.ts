import { TestBed } from '@angular/core/testing';

import { InscripAlumService } from './inscripalum.service';

describe('InscripAlumService', () => {
  let service: InscripAlumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscripAlumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
