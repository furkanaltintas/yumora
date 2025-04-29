import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/CartItem';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwalService } from '../../services/swal/swal.service';
import { NotFoundComponent } from "../not-found/not-found.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule, RouterModule, FormsModule, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!: Cart;
  constructor(
    private cartService: CartService,
    private swalService: SwalService
  ) { 
    this.setCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.swalService.showDeleteAlertWithUndo(() => {
      // Geri Alma İşlemi
      setTimeout(() => {
        this.cartService.addToCart(cartItem.food);
        this.cartService.changeQuantity(cartItem.food.id, cartItem.quantity);
        this.setCart();
      }, 2000);
    });
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  increaseQuantity(cartItem: CartItem) {
    if (cartItem.quantity < 100) { // Maksimum miktar kontrolü
      cartItem.quantity++;
      this.changeQuantity(cartItem, cartItem.quantity.toString());
    }
  }
  
  decreaseQuantity(cartItem: CartItem) {
    if (cartItem.quantity > 1) { // Minimum miktar kontrolü
      cartItem.quantity--;
      this.changeQuantity(cartItem, cartItem.quantity.toString());
    }
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  totalPrice(): number {
    return this.cartService.totalPrice;
  }

}
