import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUserHeaderComponent } from './no-user-header.component';

describe('NoUserHeaderComponent', () => {
  let component: NoUserHeaderComponent;
  let fixture: ComponentFixture<NoUserHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoUserHeaderComponent]
    });
    fixture = TestBed.createComponent(NoUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
