import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

// Shared Module
import { SharedModule } from '../shared/shared.module';

import { UserGridComponent } from './user-list/user-grid/user-grid.component';
import { UserFilterComponent } from './user-list/user-filter/user-filter.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-detail/user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
//Reactive Form Module
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [UserListComponent, UserGridComponent, UserFilterComponent, UserDetailComponent, UserFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
