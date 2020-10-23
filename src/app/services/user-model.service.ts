import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserFilter } from './/../models/user-filter';



@Injectable({
  providedIn: 'root'
})
export class UserModelService {

  private url = 'http://hello-world.innocv.com/api/user';

  constructor(private http: HttpClient) { }

// Method to get all users
  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(`${this.url}`)
      .pipe(
        map(resp => resp.map(user => new User(user))),
        catchError((e) => {
          alert('Unable to get the user list');
          return of([]);
        })
      );
  }
// Method to get a user
  getUser(id: number): Observable<User> {
    return this.http.get<any[]>(`${this.url}/${id}`)
      .pipe(
        map(resp => {
          if (resp?.length > 0) {
            return new User(resp[0]);
          }
          return null;
        }),
        catchError((e) => {
          alert('Unable to get the user');
          return of(null);
        })
      );
  }

  // Method to delete a user
  deleteUser(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${id}`)
      .pipe(
        catchError((e) => {
          alert('Unable to delete the user list');
          return of(false);
        })
      );
  }

// Method to create a new user and update it
  saveUser(user: User): Observable<User> {
    if (user.id) {
      return this.http.put<any[]>(`${this.url}/${user.id}`, user)
        .pipe(
          map(resp => {
            if (resp?.length > 0) {
              return new User(resp[0]);
            }
            return null;
          }),
          catchError((e) => {
            alert('The user could not be saved');
            return of(null);
          })
        );
    } else {
      return this.http.post<any[]>(`${this.url}`, user)
        .pipe(
          map(resp => {
            if (resp?.length > 0) {
              return new User(resp[0]);
            }
            return null;
          }),
          catchError((e) => {
            alert('The user could not be saved');
            return of(null);
          })
        );
    }
  }

  // Method to filter users
  searchUsers(params: UserFilter): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/search?name=${params.name}`)
      .pipe(
        map(resp => resp.map(user => new User(user))),
        catchError((e) => {
          alert('Unable to get the user list');
          return of([]);
        })
      );
  }
}
