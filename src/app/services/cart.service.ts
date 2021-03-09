import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Price } from '../models/price';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: any) {
    this.items.push(product);
    console.log(this.items);
    let total=0;
    //this.items.forEach(item=>total+=item.price);
    this.items.forEach(function (item) {total+=item.price});
    console.log('Costo totale', total);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() : Observable<Price[]> {
    return this.http.get<Price[]>('/assets/shipping.json');
  }
}
