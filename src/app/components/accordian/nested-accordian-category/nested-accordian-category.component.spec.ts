import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedAccordianCategoryComponent } from './nested-accordian-category.component';

describe('NestedAccordianCategoryComponent', () => {
  let component: NestedAccordianCategoryComponent;
  let fixture: ComponentFixture<NestedAccordianCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedAccordianCategoryComponent]
    });
    fixture = TestBed.createComponent(NestedAccordianCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
