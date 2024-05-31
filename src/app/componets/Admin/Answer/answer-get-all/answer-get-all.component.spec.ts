import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerGetAllComponent } from './answer-get-all.component';

describe('AnswerGetAllComponent', () => {
  let component: AnswerGetAllComponent;
  let fixture: ComponentFixture<AnswerGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnswerGetAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswerGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
