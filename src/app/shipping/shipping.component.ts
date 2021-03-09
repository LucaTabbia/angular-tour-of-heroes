import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Price } from '../models/price';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts: Price[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    let observable: Observable<Price[]> = this.cartService.getShippingPrices();
    observable.subscribe((response: Price[]) =>{
      console.log(response);
      this.shippingCosts = response;
      });
  }
  //shippingCosts = this.cartService.getShippingPrices();
}
