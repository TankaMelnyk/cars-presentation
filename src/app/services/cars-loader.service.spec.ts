import { TestBed, inject } from '@angular/core/testing';

import { CarsLoaderService } from './cars-loader.service';

describe('CarsLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsLoaderService]
    });
  });

  it('should be created', inject([CarsLoaderService], (service: CarsLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
