import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTopicGetAllComponent } from './popular-topic-get-all.component';

describe('PopularTopicGetAllComponent', () => {
  let component: PopularTopicGetAllComponent;
  let fixture: ComponentFixture<PopularTopicGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularTopicGetAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularTopicGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
