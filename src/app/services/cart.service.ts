import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  private readonly CART_KEY = 'cart';

  constructor() {
    this.loadCart(); // Uygulama başlatıldığında sepeti yükle
  }

  private loadCart() {
    const cartData = localStorage.getItem(this.CART_KEY);
    this.cart = cartData ? JSON.parse(cartData) : new Cart();
  }

  // Sepeti localStorage'a kaydeder
  private saveCart() {
    localStorage.setItem(this.CART_KEY, JSON.stringify(this.cart));
  }

  addToCart(food: Food): void {
    debugger;
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
    this.saveCart();
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id != foodId);
    this.saveCart();
  }

  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    this.saveCart();
  }

  // Sepeti döndürür
  getCart() {
    return this.cart;
  }

  get totalPrice(): number {
    let totalPrice = 0;
    this.cart.items.forEach((item) => {
      totalPrice += item.price;
    });

    return totalPrice;
  }
}
