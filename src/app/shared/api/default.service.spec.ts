import { TestBed , getTestBed } from '@angular/core/testing';

import { DefaultService } from './default.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {environment} from '@env/environment'
describe('DefaultService', () => {

  let service: DefaultService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DefaultService]
    });
    injector = getTestBed();
    service = injector.get(DefaultService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getAvailableApplications', () => {
    it('should return an Observable<any>', () => {
      const dummyInstalledApps = [
        {
          "id": "5ce44b372da57a0d3c5150dc",
          "name": "notepad.exe",
          "path": "~/"
        },
        {
          "id": "5ce44b372da57a0d3c5150dd",
          "name": "wordpad.exe",
          "path": "~/"
        }
      ];

      service.getAvailableApplications().subscribe(cities => {
        expect(cities.length).toBe(2);
        expect(cities).toEqual(dummyInstalledApps);
      });

      const req = httpMock.expectOne(`${environment.basePath}/remoteConfigs`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyInstalledApps);
    });
  });

  describe('getAllRemoteAppConfigs', () => {
    it('should return an Observable<any>', () => {
      const dummyConfigs = [
        {
          "alias": "sswqweqw",
          "colour": "#336da7",
          "id": "5ce44d6d2da57a0d3c5150df",
          "targetApplication": "wordpad.exe"
        },
        {
          "alias": "qasdqwdq",
          "colour": "#a72d8c",
          "id": "5ce44d7d2da57a0d3c5150e0",
          "targetApplication": "wordpad.exe"
        }
      ];
      const city = 'london';
      service.getAllRemoteAppConfigs().subscribe(data => {
        expect(data.length).toBe(2);
        expect(data).toEqual(dummyConfigs);
      });

      const req = httpMock.expectOne(`${environment.basePath}/remoteConfigs`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyConfigs);
    });
  });

});
