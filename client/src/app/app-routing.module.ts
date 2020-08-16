import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'login', component: LoginComponent},  
  {path: 'dashboard', component: DashboardComponent},  
  { path: '', redirectTo: '/login',  pathMatch: 'full' },
  { path: '**',  redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
