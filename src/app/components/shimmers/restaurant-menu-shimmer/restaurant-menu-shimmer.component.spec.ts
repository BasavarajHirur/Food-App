import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCardShimmerComponent } from './restaurant-menu-shimmer.component';

describe('MenuCardShimmerComponent', () => {
  let component: MenuCardShimmerComponent;
  let fixture: ComponentFixture<MenuCardShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCardShimmerComponent]
    });
    fixture = TestBed.createComponent(MenuCardShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
