import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTopicUpdateComponent } from './popular-topic-update.component';

describe('PopularTopicUpdateComponent', () => {
  let component: PopularTopicUpdateComponent;
  let fixture: ComponentFixture<PopularTopicUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularTopicUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularTopicUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
