import { TestBed } from '@angular/core/testing';

import { AspectosService } from './aspectos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AspectosService', () => {
  let service: AspectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AspectosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
