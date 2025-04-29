import { Component } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { TagsComponent } from "../tags/tags.component";
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { NotFoundComponent } from "../not-found/not-found.component";
import { SwalService } from '../../services/swal/swal.service';

@Component({
  selector: 'app-food-page',
  imports: [TagsComponent, CommonModule, CurrencyPipe, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService, 
    private cartService: CartService,
    private router: Router,
    private swalService: SwalService) { 
    activatedRoute.params.subscribe((params) => {
      if(params["id"]) this.food = foodService.getFoodById(params["id"]);
    });
  }

  createArray(length: number) {
    return Array.from({ length });
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.swalService.showAlertNoIcon("Item added to cart", "Go to cart");
    // this.router.navigateByUrl('/cart-page');
    // Sepete yönlendirmeyi iptal ettim. Siz tekrardan açabilirsiniz.
  }

  favoriteChange(id: number, event: Event) {  
    this.foodService.changeFavorite(id); // Favori durumunu değiştir

    // Favori durumunu anında güncelle
    this.food.favorite = !this.food.favorite;
  }
}