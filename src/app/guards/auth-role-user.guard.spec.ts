import { TestBed, async, inject } from '@angular/core/testing';

import { AuthRoleUserGuard } from './auth-role-user.guard';

describe('AuthRoleUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRoleUserGuard]
    });
  });

  it('should ...', inject([AuthRoleUserGuard], (guard: AuthRoleUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
