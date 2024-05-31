import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsGetAllComponent } from './news-get-all.component';

describe('NewsGetAllComponent', () => {
  let component: NewsGetAllComponent;
  let fixture: ComponentFixture<NewsGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsGetAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
