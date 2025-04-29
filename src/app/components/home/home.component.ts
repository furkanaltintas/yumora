import { Component } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../shared/models/Food';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { TagsComponent } from "../tags/tags.component";
import { CartService } from '../../services/cart.service';
import { SwalService } from '../../services/swal/swal.service';
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchComponent, TagsComponent, RouterLink, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods: Food[] = [];
  hoveredFood: number | null = null; // Hover edilen öğenin ID bilgisini tutar.

  constructor(
    private foodService: FoodService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private swalService: SwalService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm'])
      } else if (params['tag']) {
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }

  createArray(length: number) {
    return Array.from({ length });
  }

  addToCart(food: Food, event: Event) {
    debugger;
    event.preventDefault(); // Varsayılan <a> davranışını engeller
    event.stopPropagation(); // Tıklama olayının <a> etiketi tarafındna tetiklenmesini engeller
    this.cartService.addToCart(food);
    this.swalService.showAlertWithRedirect("Item added to cart", "Go to cart", '/cart-page');
  }

  favoriteChange(id: number, event: Event) {
    event.preventDefault(); // Varsayılan <a> davranışını engeller
    event.stopPropagation(); // Tıklama olayının <a> etiketi tarafındna tetiklenmesini engeller
    
    this.foodService.changeFavorite(id); // Favori durumunu değiştir

    // Favori durumunu anında güncelle
    const food = this.foods.find((food) => food.id === id);
    if (food) food.favorite = !food.favorite;
  }
}