import { TestBed } from '@angular/core/testing';

import { CicloEscolarService } from './ciclo-escolar.service';

describe('CicloEscolarService', () => {
  let service: CicloEscolarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CicloEscolarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
