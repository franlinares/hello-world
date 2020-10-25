import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler  } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


import { UserDetailComponent } from './user-detail.component';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  const fakeActivatedRoute = {
    snapshot: {
        queryParams: {
            returnUrl: '/'
          }
      }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [HttpClient,
                  HttpHandler,
                  {provide: ActivatedRoute, useFactory:() => fakeActivatedRoute },
                  {provide: Router, useFactory:() => {}},
      ],
      declarations: [ UserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});