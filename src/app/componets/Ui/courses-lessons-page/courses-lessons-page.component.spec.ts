import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesLessonsPageComponent } from './courses-lessons-page.component';

describe('CoursesLessonsPageComponent', () => {
  let component: CoursesLessonsPageComponent;
  let fixture: ComponentFixture<CoursesLessonsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesLessonsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesLessonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
