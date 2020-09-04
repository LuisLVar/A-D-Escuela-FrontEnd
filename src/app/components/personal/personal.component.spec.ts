import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalComponent } from './personal.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { personal } from '../../models/personal';

fdescribe('PersonalComponent', () => {
  let component: PersonalComponent;
  let fixture: ComponentFixture<PersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
