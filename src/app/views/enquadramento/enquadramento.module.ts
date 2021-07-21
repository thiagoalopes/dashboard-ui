import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardEnquadramentoComponent } from './dashboard-enquadramento/dashboard-enquadramento.component';



@NgModule({
  declarations: [
    DashboardEnquadramentoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardEnquadramentoComponent
  ]
})
export class EnquadramentoModule { }
