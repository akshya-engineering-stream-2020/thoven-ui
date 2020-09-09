import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddButtonComponent } from './dashboard-add-button.component';

describe('DashboardAddButtonComponent', () => {
  let component: DashboardAddButtonComponent;
  let fixture: ComponentFixture<DashboardAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
