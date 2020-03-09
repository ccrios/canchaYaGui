import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailTournamentComponent } from './view-detail-tournament.component';

describe('ViewDetailTournamentComponent', () => {
  let component: ViewDetailTournamentComponent;
  let fixture: ComponentFixture<ViewDetailTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailTournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
