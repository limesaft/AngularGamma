import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWsComponent } from './employee-ws.component';

describe('EmployeeWsComponent', () => {
  let component: EmployeeWsComponent;
  let fixture: ComponentFixture<EmployeeWsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeWsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
