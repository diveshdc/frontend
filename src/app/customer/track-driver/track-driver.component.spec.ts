import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDriverComponent } from './track-driver.component';

describe('TrackDriverComponent', () => {
  let component: TrackDriverComponent;
  let fixture: ComponentFixture<TrackDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
