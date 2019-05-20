import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Simple sweet potato curry',
      'Served with thai rice',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/satay-sweet-potato-curry_1.jpg',
      [
        new Ingredient('Sweet potato', 1),
        new Ingredient('Curry sauce', 1),
        new Ingredient('Thai rice', 1)
      ]
    ),
    new Recipe(
      'Falafel',
      'With spicy salsa and mushrooms',
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Falafel_lunch_with_spicy_salsa_and_mushrooms.jpg',
      [
        new Ingredient('Falafel', 2),
        new Ingredient('Spicy salsa', 1),
        new Ingredient('Mushrooms', 6)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
