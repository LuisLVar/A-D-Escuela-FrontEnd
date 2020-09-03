import { TestBed } from '@angular/core/testing';
import { AsigMateriaService } from './asig-materia.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AsigMateriaService', () => {
  let service: AsigMateriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AsigMateriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
