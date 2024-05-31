import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherUpdateComponent } from './auther-update.component';

describe('AutherUpdateComponent', () => {
  let component: AutherUpdateComponent;
  let fixture: ComponentFixture<AutherUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutherUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutherUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
