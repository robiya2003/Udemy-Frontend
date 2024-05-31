import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetAllComponent } from './admin-get-all.component';

describe('AdminGetAllComponent', () => {
  let component: AdminGetAllComponent;
  let fixture: ComponentFixture<AdminGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminGetAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
