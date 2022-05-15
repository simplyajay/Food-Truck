import { TestBed } from '@angular/core/testing';

import { EmployeeDatabaseServiceService } from './employee-database-service.service';

describe('EmployeeDatabaseServiceService', () => {
  let service: EmployeeDatabaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDatabaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
