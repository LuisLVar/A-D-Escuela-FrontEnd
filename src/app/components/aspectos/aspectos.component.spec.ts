import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectosComponent } from './aspectos.component';

describe('AspectosComponent', () => {
  let component: AspectosComponent;
  let fixture: ComponentFixture<AspectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
