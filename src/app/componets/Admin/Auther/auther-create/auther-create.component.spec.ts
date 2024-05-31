import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherCreateComponent } from './auther-create.component';

describe('AutherCreateComponent', () => {
  let component: AutherCreateComponent;
  let fixture: ComponentFixture<AutherCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutherCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutherCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
