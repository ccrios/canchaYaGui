import { TestBed } from '@angular/core/testing';

import { SportSpaceService } from './sport-space.service';

describe('SportSpaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportSpaceService = TestBed.get(SportSpaceService);
    expect(service).toBeTruthy();
  });
});
