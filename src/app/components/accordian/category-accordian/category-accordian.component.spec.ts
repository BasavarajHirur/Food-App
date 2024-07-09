import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAccordianComponent } from './category-accordian.component';

describe('CategoryAccordianComponent', () => {
  let component: CategoryAccordianComponent;
  let fixture: ComponentFixture<CategoryAccordianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryAccordianComponent]
    });
    fixture = TestBed.createComponent(CategoryAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
