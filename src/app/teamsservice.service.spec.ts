import { TestBed } from '@angular/core/testing';

import { TeamsserviceService } from './teamsservice.service';

describe('TeamsserviceService', () => {
  let service: TeamsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
