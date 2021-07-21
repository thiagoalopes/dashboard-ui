import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './filtro/filtro.component';
import { DashboardRecadastramentoComponent } from './dashboard-recadastramento/dashboard-recadastramento.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FiltroComponent,
    DashboardRecadastramentoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DashboardRecadastramentoComponent
  ]
})
export class RecadastramentoModule { }
