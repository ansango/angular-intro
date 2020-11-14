import { Component, OnInit } from '@angular/core';
import Wine from '../model/wine';

@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css'],
})
export class WineItemComponent implements OnInit {
  public counter: number = 0;
  public wine!: Wine;
  constructor() {}

  ngOnInit(): void {
    this.wine = new Wine(
      'Protos',
      '../../assets/wines/protos.png',
      10,
      2,
      true
    );
    this.counter = 0;
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
}
