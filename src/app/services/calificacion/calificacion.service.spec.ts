import { TestBed } from '@angular/core/testing';

import { CalificacionService } from './calificacion.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CalificacionService', () => {
  let service: CalificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CalificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
