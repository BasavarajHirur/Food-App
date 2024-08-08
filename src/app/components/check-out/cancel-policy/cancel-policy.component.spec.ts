import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPolicyComponent } from './cancel-policy.component';

describe('CancelPolicyComponent', () => {
  let component: CancelPolicyComponent;
  let fixture: ComponentFixture<CancelPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelPolicyComponent]
    });
    fixture = TestBed.createComponent(CancelPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
