import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdutoComponent } from './produto/produto.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    LoginComponent,
    DashboardComponent,
    ProdutoComponent,
    FuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
