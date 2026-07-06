import { TestBed } from '@angular/core/testing';

import { employeeservice, Employee } from './employeeservice';

describe('Employeeservice', () => {
  let service: employeeservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(employeeservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
