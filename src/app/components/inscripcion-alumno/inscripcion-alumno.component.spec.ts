import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionAlumnoComponent } from './inscripcion-alumno.component';

describe('InscripcionAlumnoComponent', () => {
  let component: InscripcionAlumnoComponent;
  let fixture: ComponentFixture<InscripcionAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
