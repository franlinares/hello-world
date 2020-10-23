import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


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
          return of([]);
        })
      );
  }
// Method to get a user
  getUser(id: number): Observable<User> {
    return this.http.get<any>(`${this.url}/${id}`)
      .pipe(
        map(resp => {
          if (resp) {
            return new User(resp);
          }
          return null;
        }),
        catchError((e) => {
          return of(null);
        })
      );
  }

  // Method to delete a user
  deleteUser(id: number): Observable<void> {
    return this.http.delete<boolean>(`${this.url}/${id}`)
      .pipe(
        catchError((e) => {
          return of(null);
        })
      );
  }

// Method to create a new user and update it
  saveUser(user: User): Observable<User> {
    if (user.id) {
      console.log(user);
      return this.http.put<any>(`${this.url}`, user)
        .pipe(
          map(resp => {
            if (resp) {
              return new User(resp);
            }
            return null;
          }),
          catchError((e) => {
            return of(null);
          })
        );
    } else {
      return this.http.post<any>(`${this.url}`, user)
        .pipe(
          map(resp => {
            if (resp) {
              return new User(resp);
            }
            return null;
          }),
          catchError((e) => {
            return of(null);
          })
        );
    }
  }

  // Method to filter users
  // searchUsers(params: UserFilter): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.url}/search?name=${params.name}`)
  //     .pipe(
  //       map(resp => resp.map(user => new User(user))),
  //       catchError((e) => {
  //         return of([]);
  //       })
  //     );
  // }
}
