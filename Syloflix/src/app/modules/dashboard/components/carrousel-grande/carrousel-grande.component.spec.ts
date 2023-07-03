import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselGrandeComponent } from './carrousel-grande.component';

describe('CarrouselGrandeComponent', () => {
  let component: CarrouselGrandeComponent;
  let fixture: ComponentFixture<CarrouselGrandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrouselGrandeComponent]
    });
    fixture = TestBed.createComponent(CarrouselGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
