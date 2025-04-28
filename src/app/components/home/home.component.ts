import { Component } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../shared/models/Food';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit() : void {
    this.foods = this.foodService.getAll();
  }

  createArray(length: number) {
    return Array.from({ length });
  }
}
