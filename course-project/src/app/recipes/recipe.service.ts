import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
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

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
