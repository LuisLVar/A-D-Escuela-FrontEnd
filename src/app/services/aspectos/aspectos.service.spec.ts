import { TestBed } from '@angular/core/testing';

import { AspectosService } from './aspectos.service';

describe('AspectosService', () => {
  let service: AspectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AspectosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
