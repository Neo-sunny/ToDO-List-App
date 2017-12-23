import { TestBed, inject } from '@angular/core/testing';

import { STodoService } from './s-todo.service';

describe('STodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [STodoService]
    });
  });

  it('should be created', inject([STodoService], (service: STodoService) => {
    expect(service).toBeTruthy();
  }));
});
