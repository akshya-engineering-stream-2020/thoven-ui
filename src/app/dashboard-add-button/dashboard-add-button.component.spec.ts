import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddButtonComponent } from './dashboard-add-button.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('DashboardAddButtonComponent', () => {
  let component: DashboardAddButtonComponent;
  let fixture: ComponentFixture<DashboardAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
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
