import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';

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
        tags: ['FastFood,', 'Tost', 'Lunch']
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
        tags: ['FastFood,', 'Kebap', 'Lunch']
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
        tags: ['FastFood,', 'Tavuk', 'Lunch']
      }
    ];
  }
}
