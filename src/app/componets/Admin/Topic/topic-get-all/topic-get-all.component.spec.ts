import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicGetAllComponent } from './topic-get-all.component';

describe('TopicGetAllComponent', () => {
  let component: TopicGetAllComponent;
  let fixture: ComponentFixture<TopicGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicGetAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
