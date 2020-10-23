import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';



const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user-edit/:id', component: UserDetailComponent },
  { path: 'user-edit', component: UserDetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
