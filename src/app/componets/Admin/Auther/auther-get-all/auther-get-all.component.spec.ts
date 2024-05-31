import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherGetAllComponent } from './auther-get-all.component';

describe('AutherGetAllComponent', () => {
  let component: AutherGetAllComponent;
  let fixture: ComponentFixture<AutherGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutherGetAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutherGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
