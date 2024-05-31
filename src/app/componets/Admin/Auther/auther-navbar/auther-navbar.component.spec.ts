import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherNavbarComponent } from './auther-navbar.component';

describe('AutherNavbarComponent', () => {
  let component: AutherNavbarComponent;
  let fixture: ComponentFixture<AutherNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutherNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutherNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
