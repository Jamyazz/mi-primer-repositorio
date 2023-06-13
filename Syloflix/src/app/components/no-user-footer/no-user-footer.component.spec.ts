import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUserFooterComponent } from './no-user-footer.component';

describe('NoUserFooterComponent', () => {
  let component: NoUserFooterComponent;
  let fixture: ComponentFixture<NoUserFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoUserFooterComponent]
    });
    fixture = TestBed.createComponent(NoUserFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
