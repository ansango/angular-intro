import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Food from '../model/food';
import Wine from '../model/wine';

export interface WineQuantityChange {
  wine: Wine;
  quantity: number;
}
@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css'],
})
export class WineItemComponent implements OnInit {
  @Input() public wine!: Wine;
  @Output() private wineQuantityChangeEvent: EventEmitter<
    WineQuantityChange
  > = new EventEmitter<WineQuantityChange>();
  public counter: number = 0;
  public units!: number[];

  constructor() {}

  ngOnInit(): void {
    this.counter = 0;
    this.units = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ];
  }

  unavilableWine(): void {
    this.wine.isOnSale = !this.wine.isOnSale;
  }

  increment(): void {
    this.counter++;
  }
  decrement(): void {
    if (this.counter === 0) return;
    this.counter--;
  }

  quantityWineChange(event: number) {
    this.counter = event;
    this.wineQuantityChangeEvent.emit({
      quantity: this.counter,
      wine: this.wine,
    });
  }
}
