import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalinfoComponent } from './modalinfo.component';

describe('ModalinfoComponent', () => {
  let component: ModalinfoComponent;
  let fixture: ComponentFixture<ModalinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalinfoComponent]
    });
    fixture = TestBed.createComponent(ModalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
