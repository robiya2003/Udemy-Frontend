import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTopicDeleteComponent } from './popular-topic-delete.component';

describe('PopularTopicDeleteComponent', () => {
  let component: PopularTopicDeleteComponent;
  let fixture: ComponentFixture<PopularTopicDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularTopicDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularTopicDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
