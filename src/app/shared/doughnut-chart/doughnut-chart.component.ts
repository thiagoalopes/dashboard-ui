import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {

  @Input() public doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {  },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public doughnutChartPlugins = [ChartDataLabels];

// Doughnut
@Input() public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
@Input() public doughnutChartData: MultiDataSet = [
  [350, 450, 100],
  [50, 150, 120],
  [250, 130, 70],
];
public doughnutChartType: ChartType = 'doughnut';

constructor() { }

ngOnInit(): void {
}

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}
}
