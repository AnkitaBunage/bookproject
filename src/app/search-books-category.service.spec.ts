import { TestBed } from '@angular/core/testing';

import { SearchBooksCategoryService } from './search-books-category.service';

describe('SearchBooksCategoryService', () => {
  let service: SearchBooksCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBooksCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
