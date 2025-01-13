import { TestBed } from '@angular/core/testing';

import { TâchesService } from './tâches.service';

describe('TâchesService', () => {
  let service: TâchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TâchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
