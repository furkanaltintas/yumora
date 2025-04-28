import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: "Hamburger",
        cookTime: "10-20",
        price: 10,
        favorite: false,
        origins: ['Amerika'],
        stars: 5,
        imageUrl: '/images/foods/1.jpg',
        tags: ['FastFood,', 'Hamburger', 'Lunch']
      },
      {
        id: 2,
        name: "Sosisli",
        cookTime: "10-20",
        price: 7,
        favorite: true,
        origins: ['Almanya'],
        stars: 4,
        imageUrl: '/images/foods/2.jpg',
        tags: ['FastFood,', 'HotDog', 'Lunch']
      },
      {
        id: 3,
        name: "Tost",
        cookTime: "10-20",
        price: 4,
        favorite: false,
        origins: ['Türkiye'],
        stars: 4,
        imageUrl: '/images/foods/3.jpg',
        tags: ['FastFood,', 'Tost', 'Breakfast']
      },
      {
        id: 4,
        name: "Döner",
        cookTime: "10-20",
        price: 8,
        favorite: true,
        origins: ['Türkiye'],
        stars: 5,
        imageUrl: '/images/foods/4.jpg',
        tags: ['FastFood,', 'Döner', 'Lunch']
      },
      {
        id: 5,
        name: "Kebap",
        cookTime: "10-20",
        price: 15,
        favorite: true,
        origins: ['Türkiye'],
        stars: 4,
        imageUrl: '/images/foods/5.jpg',
        tags: ['FastFood,', 'Kebap', 'Dinner']
      },
      {
        id: 6,
        name: "Tavuk Kanat",
        cookTime: "10-20",
        price: 20,
        favorite: false,
        origins: ['Amerika'],
        stars: 5,
        imageUrl: '/images/foods/6.jpg',
        tags: ['FastFood,', 'Tavuk', 'Dinner']
      }
    ];
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 }
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllFoodsBySearchTerm(searchTerm:string): Food[] {
    return this
          .getAll()
          .filter((food) =>
            food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            food.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
            food.origins.some((origin) => origin.toLowerCase().includes(searchTerm.toLowerCase()))
          );
  }
}
