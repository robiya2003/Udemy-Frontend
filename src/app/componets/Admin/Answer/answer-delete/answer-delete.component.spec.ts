import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerDeleteComponent } from './answer-delete.component';

describe('AnswerDeleteComponent', () => {
  let component: AnswerDeleteComponent;
  let fixture: ComponentFixture<AnswerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnswerDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
