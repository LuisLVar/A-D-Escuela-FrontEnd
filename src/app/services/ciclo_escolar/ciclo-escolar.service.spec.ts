import { TestBed } from '@angular/core/testing';

import { CicloEscolarService } from './ciclo-escolar.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('CicloEscolarService', () => {
  let service: CicloEscolarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CicloEscolarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
