import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Pollo Chuco", 
            "Pollo Frito con Tajada y Repollo", 
            "https://buenprovecho.hn/wp-content/uploads/2019/03/MH-pollochuco-010915.jpg",
            [
                new Ingredient("Repollo", 1),
                new Ingredient("Pollo", 2),
                new Ingredient("Platano", 3)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
       return this.recipes.slice();
    }

    addIngredients(ings: Ingredient[]){
        this.shoppingListService.addIngredients(ings);
        this.shoppingListService.shoppingListRequested.emit();
    }
}