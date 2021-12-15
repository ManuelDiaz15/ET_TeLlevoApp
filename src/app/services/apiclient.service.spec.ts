import { TestBed } from '@angular/core/testing';

import { APIClientService } from './apiclient.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('APIClientService', () => {
  let service: APIClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(APIClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
