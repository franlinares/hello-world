import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserModelService } from './user-model.service';

describe('UserModelService', () => {
  let service: UserModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,
                  HttpHandler
                ]
    });
    service = TestBed.inject(UserModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
