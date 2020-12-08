import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNoticeComponent } from './display-notice.component';

describe('DisplayNoticeComponent', () => {
  let component: DisplayNoticeComponent;
  let fixture: ComponentFixture<DisplayNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
