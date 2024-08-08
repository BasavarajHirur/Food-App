import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutShimmerComponent } from './check-out-shimmer.component';

describe('CheckOutShimmerComponent', () => {
  let component: CheckOutShimmerComponent;
  let fixture: ComponentFixture<CheckOutShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckOutShimmerComponent]
    });
    fixture = TestBed.createComponent(CheckOutShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
