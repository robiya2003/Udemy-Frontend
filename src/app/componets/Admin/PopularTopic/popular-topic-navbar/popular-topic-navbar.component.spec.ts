import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTopicNavbarComponent } from './popular-topic-navbar.component';

describe('PopularTopicNavbarComponent', () => {
  let component: PopularTopicNavbarComponent;
  let fixture: ComponentFixture<PopularTopicNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularTopicNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularTopicNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
