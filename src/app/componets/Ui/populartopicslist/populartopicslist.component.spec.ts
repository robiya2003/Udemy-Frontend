import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulartopicslistComponent } from './populartopicslist.component';

describe('PopulartopicslistComponent', () => {
  let component: PopulartopicslistComponent;
  let fixture: ComponentFixture<PopulartopicslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopulartopicslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopulartopicslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
