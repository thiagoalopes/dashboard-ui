import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-totals-cards',
  templateUrl: './totals-cards.component.html',
  styleUrls: ['./totals-cards.component.css']
})
export class TotalsCardsComponent {

  @Input() public title: string = '';
  @Input() public value: string = '0';

}
