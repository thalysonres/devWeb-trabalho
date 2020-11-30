import { TestBed } from '@angular/core/testing';

import { BibliotecariaService } from './bibliotecaria.service';

describe('BibliotecariaService', () => {
  let service: BibliotecariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliotecariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
