import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaleroComponent } from './calero.component';

describe('CaleroComponent', () => {
  let component: CaleroComponent;
  let fixture: ComponentFixture<CaleroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaleroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
