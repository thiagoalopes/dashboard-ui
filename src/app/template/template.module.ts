import { NgModule } from '@angular/core';
import { TemplateComponent } from './template/template.component';
import { RecadastramentoModule } from '../views/recadastramento/recadastramento.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnquadramentoModule } from '../views/enquadramento/enquadramento.module';
import { NgChartjsModule } from 'ng-chartjs';


@NgModule({
  declarations: [
    TemplateComponent,
  ],
  imports: [
    NgbModule,
    RecadastramentoModule,
    EnquadramentoModule,
    NgChartjsModule
  ]
})
export class TemplateModule { }
