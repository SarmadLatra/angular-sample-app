import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVenueComponent } from './home-venue.component';

describe('HomeVenueComponent', () => {
  let component: HomeVenueComponent;
  let fixture: ComponentFixture<HomeVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
