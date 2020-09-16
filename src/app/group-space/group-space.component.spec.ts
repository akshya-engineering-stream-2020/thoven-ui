import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupSpaceComponent} from './group-space.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('GroupSpaceComponent', () => {
  let component: GroupSpaceComponent;
  let fixture: ComponentFixture<GroupSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
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
