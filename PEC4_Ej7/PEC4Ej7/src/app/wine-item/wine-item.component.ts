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
    this.wine.quantityInCart = 0;
  }

  increment(): void {
    this.wine.quantityInCart++;
  }
  decrement(): void {
    if (this.wine.quantityInCart === 0) {
      this.wine.isOnSale = false;
      return;
    }
    this.wine.quantityInCart--;
  }

  quantityWineChange(event: number) {
    this.wine.quantityInCart = event;
    this.wineQuantityChangeEvent.emit({
      quantity: this.wine.quantityInCart,
      wine: this.wine,
    });
  }
}
