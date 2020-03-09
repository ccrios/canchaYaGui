import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePassworComponent } from './restore-passwor.component';

describe('RestorePassworComponent', () => {
  let component: RestorePassworComponent;
  let fixture: ComponentFixture<RestorePassworComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorePassworComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorePassworComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
