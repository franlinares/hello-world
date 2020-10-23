import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';




const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {path: '', pathMatch: 'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
