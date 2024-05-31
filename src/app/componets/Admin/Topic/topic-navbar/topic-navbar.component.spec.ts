import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicNavbarComponent } from './topic-navbar.component';

describe('TopicNavbarComponent', () => {
  let component: TopicNavbarComponent;
  let fixture: ComponentFixture<TopicNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
