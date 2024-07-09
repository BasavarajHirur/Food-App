import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianListComponent } from './accordian-list.component';

describe('AccordianListComponent', () => {
  let component: AccordianListComponent;
  let fixture: ComponentFixture<AccordianListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordianListComponent]
    });
    fixture = TestBed.createComponent(AccordianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
