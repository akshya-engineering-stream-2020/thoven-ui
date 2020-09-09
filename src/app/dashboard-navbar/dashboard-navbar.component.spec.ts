import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavbarComponent } from './dashboard-navbar.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('DashboardNavbarComponent', () => {
  let component: DashboardNavbarComponent;
  let fixture: ComponentFixture<DashboardNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ DashboardNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
