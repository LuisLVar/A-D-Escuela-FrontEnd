import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalifiGrupalComponent } from './califi-grupal.component';

describe('CalifiGrupalComponent', () => {
  let component: CalifiGrupalComponent;
  let fixture: ComponentFixture<CalifiGrupalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalifiGrupalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalifiGrupalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
