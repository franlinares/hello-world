import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserGridComponent } from './user-list/user-grid/user-grid.component';
import { UserFilterComponent } from './user-list/user-filter/user-filter.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-detail/user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
//Reactive Form Module
import { ReactiveFormsModule } from '@angular/forms';
//Forms Module
import { FormsModule  } from '@angular/forms';

// Pipes
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    UserListComponent, 
    UserGridComponent, 
    UserFilterComponent, 
    UserDetailComponent, 
    UserFormComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
