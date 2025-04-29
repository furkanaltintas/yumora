import { Food } from '../../shared/models/Food';

export const filterFoodsByTag = (foods: Food[], tagName: string): Food[] => {
  return foods.filter((food) => food.tags?.includes(tagName));
};

export const countFoodsByTag = (foods: Food[], tagName: string): number => {
  return foods.filter((food) => food.tags?.some((tag) => tag === tagName)).length;
};