import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CouponsComponent } from './coupons.component';

describe('CouponsComponent', () => {
  let component: CouponsComponent;
  let fixture: ComponentFixture<CouponsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CouponsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
