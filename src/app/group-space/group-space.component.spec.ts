import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSpaceComponent } from './group-space.component';

describe('GroupSpaceComponent', () => {
  let component: GroupSpaceComponent;
  let fixture: ComponentFixture<GroupSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
