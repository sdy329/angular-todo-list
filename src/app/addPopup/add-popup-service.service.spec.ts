import { TestBed } from '@angular/core/testing';

import { AddPopupService } from './add-popup-service.service';

describe('AddPopupServiceService', () => {
  let service: AddPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
