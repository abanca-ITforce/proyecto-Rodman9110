import { TestBed } from '@angular/core/testing';

import { CountresService } from './countres.service';

describe('CountresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountresService = TestBed.get(CountresService);
    expect(service).toBeTruthy();
  });
});
