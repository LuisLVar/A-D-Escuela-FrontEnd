import { TestBed } from '@angular/core/testing';

import { SeccionesService } from './secciones.service';

describe('SeccionesService', () => {
  let service: SeccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
