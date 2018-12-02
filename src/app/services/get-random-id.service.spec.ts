import { TestBed } from '@angular/core/testing';

import { GetRandomIdService } from './get-random-id.service';

describe('GetRandomIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRandomIdService = TestBed.get(GetRandomIdService);
    expect(service).toBeTruthy();
  });
});
