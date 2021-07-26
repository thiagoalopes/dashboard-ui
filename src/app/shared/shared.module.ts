import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TotalsCardsComponent } from './totals-cards/totals-cards.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';


@NgModule({
  declarations: [
    NavbarComponent,
    TotalsCardsComponent,
    BarChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    NavbarComponent,
    TotalsCardsComponent,
    BarChartComponent,
    DoughnutChartComponent
  ]
})
export class SharedModule { }
