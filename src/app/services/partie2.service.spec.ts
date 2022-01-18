import { TestBed } from '@angular/core/testing';

import { Partie2Service } from './partie2.service';

describe('Partie2Service', () => {
  let service: Partie2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Partie2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
