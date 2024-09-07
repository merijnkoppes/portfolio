import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingBarComponent } from './scrolling-bar.component';

describe('ScrollingBarComponent', () => {
  let component: ScrollingBarComponent;
  let fixture: ComponentFixture<ScrollingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollingBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
