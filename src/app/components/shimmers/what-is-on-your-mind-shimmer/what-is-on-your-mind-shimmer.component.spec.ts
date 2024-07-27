import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsOnYourMindShimmerComponent } from './what-is-on-your-mind-shimmer.component';

describe('WhatIsOnYourMindShimmerComponent', () => {
  let component: WhatIsOnYourMindShimmerComponent;
  let fixture: ComponentFixture<WhatIsOnYourMindShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatIsOnYourMindShimmerComponent]
    });
    fixture = TestBed.createComponent(WhatIsOnYourMindShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
