import { TestBed, inject } from '@angular/core/testing';

import { EmployeeWsService } from './employee-ws.service';

describe('EmployeeWsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeWsService]
    });
  });

  it('should be created', inject([EmployeeWsService], (service: EmployeeWsService) => {
    expect(service).toBeTruthy();
  }));
});
