import { TestBed } from '@angular/core/testing';

import { SearchdashboardService } from './searchdashboard.service';

describe('SearchdashboardService', () => {
  let service: SearchdashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchdashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
