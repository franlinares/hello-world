
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User } from 'src/app/user/models/user';
import { UserModelService } from './user-model.service';

describe('UserModelService', () => {
  let service: UserModelService;
  let httpTestCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserModelService],
    });
    service = TestBed.inject(UserModelService);
    httpTestCtrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call an endpoint and get users data', () => {
    const userList: User[] = [
      new User({ id: 1, name: 'John', birthdate: new Date() }),
      new User({ id: 2, name: 'Peter', birthdate: new Date() }),
    ];
    service.getUsers().subscribe((resp) => {
      expect(userList).toEqual(resp);
    });

    const req = httpTestCtrl.expectOne(service.url);

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(userList);
  });

  it('should add an user and return added user', () => {
    const newUser: User = { id: 24, name: 'Helen', birthdate: new Date() };

    service.saveUser(newUser).subscribe((resp) => {
      expect(resp).toEqual(new User(newUser));
    });

    const req = httpTestCtrl.expectOne(service.url);

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(newUser);
  });

  it('should delete an user', () => {

      service.deleteUser(10).subscribe();

      const req = httpTestCtrl.expectOne(`${service.url}/10`);
        expect(req.request.url).toBe(`${service.url}/10`);
        expect(req.request.method).toBe('DELETE');
  });

  it('should update an user and return added user', () => {
    const updateUser: User = { id: 24, name: 'Helen', birthdate: new Date() };

    service.saveUser(updateUser).subscribe((resp) => {
      expect(resp).toEqual(new User(updateUser));
    });

    const req = httpTestCtrl.expectOne(service.url);

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(updateUser);
  });
});
