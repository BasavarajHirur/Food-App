import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMenuCardShimmerComponent } from './single-menu-card-shimmer.component';

describe('SingleMenuCardShimmerComponent', () => {
  let component: SingleMenuCardShimmerComponent;
  let fixture: ComponentFixture<SingleMenuCardShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleMenuCardShimmerComponent]
    });
    fixture = TestBed.createComponent(SingleMenuCardShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
