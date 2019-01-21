//libs
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';


//const routes
const routes: Routes = [
  {
    //route to login
    path: '',
    component: LoginComponent,
  },
  {
    //route to register
    path: 'register',
    component: RegisterComponent,
  },
  {
    //route to user
    path: 'user',
    component: UserComponent,
  },
  {
    //route to admin
    path: 'admin',
    component: AdminComponent,
  },
  {
    //route to home
    path: 'home',
    component: HomeComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
