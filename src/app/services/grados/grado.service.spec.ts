import { TestBed } from '@angular/core/testing';

import { GradoService } from './grado.service';

describe('GradoService', () => {
  let service: GradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
