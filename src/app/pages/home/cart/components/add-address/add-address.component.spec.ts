import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddAddressComponent } from './add-address.component';

describe('AddAddressComponent', () => {
  let component: AddAddressComponent;
  let fixture: ComponentFixture<AddAddressComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AddAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
