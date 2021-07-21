import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template/template.component';
import { DashboardEnquadramentoComponent } from './views/enquadramento/dashboard-enquadramento/dashboard-enquadramento.component';
import { DashboardRecadastramentoComponent } from './views/recadastramento/dashboard-recadastramento/dashboard-recadastramento.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
