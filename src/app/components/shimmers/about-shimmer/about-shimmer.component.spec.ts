import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutShimmerComponent } from './about-shimmer.component';

describe('AboutShimmerComponent', () => {
  let component: AboutShimmerComponent;
  let fixture: ComponentFixture<AboutShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutShimmerComponent]
    });
    fixture = TestBed.createComponent(AboutShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
