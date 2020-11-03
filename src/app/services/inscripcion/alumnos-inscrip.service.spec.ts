import { TestBed } from '@angular/core/testing';

import { AlumnosInscripService } from './alumnos-inscrip.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('AlumnosInscripService', () => {
  let service: AlumnosInscripService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AlumnosInscripService);
  });

/*   it('should be created', () => {
    expect(service).toBeTruthy();
  }); */
});
