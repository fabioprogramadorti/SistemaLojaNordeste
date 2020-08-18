import { AuthGuardService } from './services/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ProdutoComponent } from './produto/produto.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'login', component: LoginComponent},  
  {path: 'dashboard', component: DashboardComponent},  
  {path: 'funcionario', component: FuncionarioComponent},  
  {path: 'produto', component: ProdutoComponent},  
  {path: 'registrar', component: RegisterComponent},  
  {path: 'perfil', component: ProfileComponent, canActivate: [AuthGuardService]},  
  { path: '', redirectTo: '/login',  pathMatch: 'full' },
  { path: '**',  redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
