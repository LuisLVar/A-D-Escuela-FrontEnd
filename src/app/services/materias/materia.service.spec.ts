import { TestBed } from '@angular/core/testing';
import { MateriaService } from './materia.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MateriaService', () => {
  let service: MateriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(MateriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
