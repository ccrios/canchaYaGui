import { TestBed } from '@angular/core/testing';

import { ViewTournamentService } from './view-tournament.service';

describe('ViewTournamentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewTournamentService = TestBed.get(ViewTournamentService);
    expect(service).toBeTruthy();
  });
});
