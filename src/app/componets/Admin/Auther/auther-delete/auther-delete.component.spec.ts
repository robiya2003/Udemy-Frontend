import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherDeleteComponent } from './auther-delete.component';

describe('AutherDeleteComponent', () => {
  let component: AutherDeleteComponent;
  let fixture: ComponentFixture<AutherDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutherDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutherDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
