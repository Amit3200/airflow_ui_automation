import { TestBed, inject } from '@angular/core/testing';

import { GetNamesDbService } from './get-names-db.service';

describe('GetNamesDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetNamesDbService]
    });
  });

  it('should be created', inject([GetNamesDbService], (service: GetNamesDbService) => {
    expect(service).toBeTruthy();
  }));
});
