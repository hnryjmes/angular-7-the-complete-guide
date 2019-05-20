import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/satay-sweet-potato-curry_1.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/satay-sweet-potato-curry_1.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
