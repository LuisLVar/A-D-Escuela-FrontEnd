import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigMateriaComponent } from './asig-materia.component';

describe('AsigMateriaComponent', () => {
  let component: AsigMateriaComponent;
  let fixture: ComponentFixture<AsigMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsigMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
