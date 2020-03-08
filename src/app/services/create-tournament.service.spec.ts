import { TestBed } from '@angular/core/testing';

import { CreateTournamentService } from './create-tournament.service';

describe('CreateTournamentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateTournamentService = TestBed.get(CreateTournamentService);
    expect(service).toBeTruthy();
  });
});
