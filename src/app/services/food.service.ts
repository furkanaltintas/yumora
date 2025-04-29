import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
import { Foods } from './food/food.data';
import { countFoodsByTag, filterFoodsByTag } from './food/food.utils';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private readonly FOOD_KEY = 'foods';

  constructor() { }

  private saveFood(foods: Food[]) {
    localStorage.setItem(this.FOOD_KEY, JSON.stringify(foods));
  }

  getAll(): Food[] {
    const foodData = localStorage.getItem(this.FOOD_KEY);
    if(foodData) return JSON.parse(foodData);
    localStorage.setItem(this.FOOD_KEY, JSON.stringify(Foods));
    return Foods;
  }

  getFoodById(id: number): Food {
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllTags(): Tag[] {
    const getAll = this.getAll();
    return [
      // { name: 'All', count: getAll.length },
      { name: 'FastFood', count: countFoodsByTag(getAll, 'FastFood') },
      { name: 'Dinner', count: countFoodsByTag(getAll, 'Dinner') },
      { name: 'Lunch', count: countFoodsByTag(getAll, 'Lunch') },
      { name: 'Breakfast', count: countFoodsByTag(getAll, 'Breakfast') },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All' ? this.getAll() : filterFoodsByTag(this.getAll(), tag);
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(
      (food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        food.tags?.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        food.origins.some((origin) =>
          origin.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }

  changeFavorite(id: number) {
    const foods = this.getAll(); // LocalStorage üzerinden mevcut verileri al
    const food = foods.find(food => food.id == id);
    if(!food) return;

    food.favorite = !food.favorite; // Favori durumunu değiştir
    this.saveFood(foods); // Güncellenmiş veriyi kaydet
  }
}

// some => Bir öğenin, belli bir etikete sahip olup olmadığını kontrol eder
