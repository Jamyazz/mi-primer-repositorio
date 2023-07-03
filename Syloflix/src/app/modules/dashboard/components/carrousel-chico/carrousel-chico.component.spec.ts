import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselChicoComponent } from './carrousel-chico.component';

describe('CarrouselChicoComponent', () => {
  let component: CarrouselChicoComponent;
  let fixture: ComponentFixture<CarrouselChicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrouselChicoComponent]
    });
    fixture = TestBed.createComponent(CarrouselChicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
