import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopostcodeComponent } from './nopostcode.component';

describe('NopostcodeComponent', () => {
  let component: NopostcodeComponent;
  let fixture: ComponentFixture<NopostcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopostcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
