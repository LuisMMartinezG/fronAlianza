import { TestBed } from '@angular/core/testing';

import { FilterViewModelService } from './filter-view-model.service';

describe('FilterViewModelService', () => {
  let service: FilterViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
