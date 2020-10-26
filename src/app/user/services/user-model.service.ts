import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserModelService {

  public url = 'http://hello-world.innocv.com/api/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}`)
      .pipe(
        map(resp => resp.map(user => new User(user))),
        catchError((e) => {
          return of([]);
        })
      );
  }

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

  deleteUser(id: number): Observable<void> {
    return this.http.delete<boolean>(`${this.url}/${id}`)
      .pipe(
        catchError((e) => {
          return of(null);
        })
      );
  }
  
  saveUser(user: User): Observable<User> {
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

  updateUser(user: User): Observable<User> {
    if (user.id) {
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
    }
  }

  //   saveUser(user: User): Observable<User> {
  //   if (user.id) {
  //     return this.http.put<any>(`${this.url}`, user)
  //       .pipe(
  //         map(resp => {
  //           if (resp) {
  //             return new User(resp);
  //           }
  //           return null;
  //         }),
  //         catchError((e) => {
  //           return of(null);
  //         })
  //       );
  //   } else {
  //     return this.http.post<any>(`${this.url}`, user)
  //       .pipe(
  //         map(resp => {
  //           if (resp) {
  //             return new User(resp);
  //           }
  //           return null;
  //         }),
  //         catchError((e) => {
  //           return of(null);
  //         })
  //       );
  //   }
  // }
}


