import { TestBed } from '@angular/core/testing';

import { AdminuploadService } from './adminupload.service';

describe('AdminuploadService', () => {
  let service: AdminuploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminuploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
