import { TestBed } from '@angular/core/testing';

import { BuyBookService } from './buy-book.service';

describe('BuyBookService', () => {
  let service: BuyBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
