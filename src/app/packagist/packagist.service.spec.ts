import { TestBed, inject } from '@angular/core/testing';

import { PackagistService } from './packagist.service';

describe('PackagistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackagistService]
    });
  });

  it('should be created', inject([PackagistService], (service: PackagistService) => {
    expect(service).toBeTruthy();
  }));
});
