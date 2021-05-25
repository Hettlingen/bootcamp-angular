import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParallaxScrollingComponent } from './parallax-scrolling.component';

describe('ParallaxScrollingComponent', () => {
  let component: ParallaxScrollingComponent;
  let fixture: ComponentFixture<ParallaxScrollingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxScrollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
