import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonNavbarComponent } from './lesson-navbar.component';

describe('LessonNavbarComponent', () => {
  let component: LessonNavbarComponent;
  let fixture: ComponentFixture<LessonNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LessonNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
