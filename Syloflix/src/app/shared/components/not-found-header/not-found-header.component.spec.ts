import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundHeaderComponent } from './not-found-header.component';

describe('NotFoundHeaderComponent', () => {
  let component: NotFoundHeaderComponent;
  let fixture: ComponentFixture<NotFoundHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundHeaderComponent]
    });
    fixture = TestBed.createComponent(NotFoundHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
