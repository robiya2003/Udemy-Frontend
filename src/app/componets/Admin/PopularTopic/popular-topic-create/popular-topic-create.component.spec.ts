import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTopicCreateComponent } from './popular-topic-create.component';

describe('PopularTopicCreateComponent', () => {
  let component: PopularTopicCreateComponent;
  let fixture: ComponentFixture<PopularTopicCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularTopicCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularTopicCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
