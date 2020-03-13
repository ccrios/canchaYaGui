import { TestBed } from '@angular/core/testing';

import { ViewDetailTournamentService } from './view-detail-tournament.service';

describe('ViewDetailTournamentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewDetailTournamentService = TestBed.get(ViewDetailTournamentService);
    expect(service).toBeTruthy();
  });
});
