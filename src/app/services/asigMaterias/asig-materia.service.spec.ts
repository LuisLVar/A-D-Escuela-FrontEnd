import { TestBed } from '@angular/core/testing';

import { AsigMateriaService } from './asig-materia.service';

describe('AsigMateriaService', () => {
  let service: AsigMateriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsigMateriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
