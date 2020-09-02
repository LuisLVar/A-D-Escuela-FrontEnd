import { TestBed } from '@angular/core/testing';

import { GradoService } from './grado.service';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('GradoService', () => {
  let service: GradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
