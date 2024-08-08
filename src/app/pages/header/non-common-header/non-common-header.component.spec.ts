import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonCommonHeaderComponent } from './non-common-header.component';

describe('NonCommonHeaderComponent', () => {
  let component: NonCommonHeaderComponent;
  let fixture: ComponentFixture<NonCommonHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonCommonHeaderComponent]
    });
    fixture = TestBed.createComponent(NonCommonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
