import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TribeComponent } from './tribe.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TribeComponent', () => {
  let component: TribeComponent;
  let fixture: ComponentFixture<TribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ TribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
