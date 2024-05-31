import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergetAllComponent } from './userget-all.component';

describe('UsergetAllComponent', () => {
  let component: UsergetAllComponent;
  let fixture: ComponentFixture<UsergetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsergetAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsergetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
