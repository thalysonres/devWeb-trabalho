import { TestBed } from '@angular/core/testing';

import { PrateleiraService } from './prateleira.service';

describe('PrateleiraService', () => {
  let service: PrateleiraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrateleiraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
