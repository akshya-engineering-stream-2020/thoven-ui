import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RequestGroupComponent} from './request-group.component';

describe('RequestGroupComponent', () => {
  let component: RequestGroupComponent;
  let fixture: ComponentFixture<RequestGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestGroupComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
