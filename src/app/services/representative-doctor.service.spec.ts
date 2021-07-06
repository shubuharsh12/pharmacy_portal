import { TestBed } from '@angular/core/testing';

import { RepresentativeDoctorService } from './representative-doctor.service';

describe('RepresentativeDoctorService', () => {
  let service: RepresentativeDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepresentativeDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
