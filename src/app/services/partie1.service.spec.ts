import { TestBed } from '@angular/core/testing';

import { Partie1Service } from './partie1.service';

describe('Partie1Service', () => {
  let service: Partie1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Partie1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
