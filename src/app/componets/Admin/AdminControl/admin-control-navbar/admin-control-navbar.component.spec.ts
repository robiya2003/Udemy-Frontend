import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControlNavbarComponent } from './admin-control-navbar.component';

describe('AdminControlNavbarComponent', () => {
  let component: AdminControlNavbarComponent;
  let fixture: ComponentFixture<AdminControlNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminControlNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminControlNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
