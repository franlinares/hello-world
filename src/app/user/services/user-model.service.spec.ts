import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User } from 'src/app/user/models/user';
import { UserModelService } from './user-model.service';

describe('UserModelService', () => {
  let service: UserModelService;
  let httpTestCtrl: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient,
                  HttpHandler,
                  UserModelService
                ]
    });
    service = TestBed.inject(UserModelService);
    httpTestCtrl = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestCtrl.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should test HttpClient.get', () => {
    const userList: User[] = [
      {id: 1, name: 'John', birthdate: new Date()},
      {id: 2, name: 'Peter', birthdate: new Date()},
    ];
      service.getUsers().subscribe((resp) => {
        expect(userList).toBe(resp, 'should check mocked data');
      });

      const req = httpTestCtrl.expectOne(service.url+'resp');

      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(userList);
      httpTestCtrl.verify();
  });

  xit('should add an user and return added user', () => {
    const newUser: User = {id: 24, name: 'Helen', birthdate: new Date()};

    service.saveUser(newUser).subscribe((resp) => {
      expect(resp).toBe(newUser);
    });

    const req = httpTestCtrl.expectOne(service.url + 'resp');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(newUser);
    httpTestCtrl.verify();
  });

});
