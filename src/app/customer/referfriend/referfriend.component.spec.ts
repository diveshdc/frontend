import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferfriendComponent } from './referfriend.component';

describe('ReferfriendComponent', () => {
  let component: ReferfriendComponent;
  let fixture: ComponentFixture<ReferfriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferfriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
