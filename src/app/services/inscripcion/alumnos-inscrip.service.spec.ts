import { TestBed } from '@angular/core/testing';

import { AlumnosInscripService } from './alumnos-inscrip.service';

describe('AlumnosInscripService', () => {
  let service: AlumnosInscripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosInscripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
