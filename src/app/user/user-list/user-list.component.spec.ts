import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { HttpClient, HttpHandler  } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  const fakeActivatedRoute = {
    snapshot: {
        queryParams: {
            returnUrl: '/'
          }
      }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     providers: [HttpClient,
                 HttpHandler,
                 {provide: ActivatedRoute, useFactory:() => fakeActivatedRoute },
                {provide: Router, useFactory:() => {}},
                ],
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
