import { TestBed } from '@angular/core/testing';

import { RpcServiceService } from './rpc-service.service';

describe('RpcServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RpcServiceService = TestBed.get(RpcServiceService);
    expect(service).toBeTruthy();
  });
});
