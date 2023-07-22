import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularNewsComponent } from './popular-news.component';

describe('PopularNewsComponent', () => {
  let component: PopularNewsComponent;
  let fixture: ComponentFixture<PopularNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularNewsComponent]
    });
    fixture = TestBed.createComponent(PopularNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
