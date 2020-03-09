import { TestBed, async, inject } from '@angular/core/testing';

import { AuthRoleAdminGuard } from './auth-role-admin.guard';

describe('AuthRoleAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRoleAdminGuard]
    });
  });

  it('should ...', inject([AuthRoleAdminGuard], (guard: AuthRoleAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
