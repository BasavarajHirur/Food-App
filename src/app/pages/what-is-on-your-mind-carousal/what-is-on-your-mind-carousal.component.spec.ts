import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsOnYourMindCarousalComponent } from './what-is-on-your-mind-carousal.component';

describe('WhatIsOnYourMindCarousalComponent', () => {
  let component: WhatIsOnYourMindCarousalComponent;
  let fixture: ComponentFixture<WhatIsOnYourMindCarousalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatIsOnYourMindCarousalComponent]
    });
    fixture = TestBed.createComponent(WhatIsOnYourMindCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
