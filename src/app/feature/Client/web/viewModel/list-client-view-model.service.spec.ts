import { TestBed } from '@angular/core/testing';

import { ListClientViewModelService } from './list-client-view-model.service';

describe('ListClientViewModelService', () => {
  let service: ListClientViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListClientViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
