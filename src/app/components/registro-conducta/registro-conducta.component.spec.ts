import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroConductaComponent } from './registro-conducta.component';

describe('RegistroConductaComponent', () => {
  let component: RegistroConductaComponent;
  let fixture: ComponentFixture<RegistroConductaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroConductaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroConductaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
