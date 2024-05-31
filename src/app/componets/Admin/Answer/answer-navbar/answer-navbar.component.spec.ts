import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerNavbarComponent } from './answer-navbar.component';

describe('AnswerNavbarComponent', () => {
  let component: AnswerNavbarComponent;
  let fixture: ComponentFixture<AnswerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnswerNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
