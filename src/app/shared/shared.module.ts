import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TotalsCardsComponent } from './totals-cards/totals-cards.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TotalsCardsComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    TotalsCardsComponent
  ]
})
export class SharedModule { }
