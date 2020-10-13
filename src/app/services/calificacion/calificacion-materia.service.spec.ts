import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { CalificacionMateriaService } from './calificacion-materia.service';

describe('CalificacionMateriaService', () => {
  let service: CalificacionMateriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CalificacionMateriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
