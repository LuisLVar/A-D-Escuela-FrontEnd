import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { LoginService } from "./services/login/login.service"

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginService]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
