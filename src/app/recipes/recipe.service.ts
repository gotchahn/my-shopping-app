import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            1,
            "Pollo Chuco", 
            "Pollo Frito con Tajada y Repollo", 
            "https://buenprovecho.hn/wp-content/uploads/2019/03/MH-pollochuco-010915.jpg",
            [
                new Ingredient("Repollo", 1),
                new Ingredient("Pollo", 2),
                new Ingredient("Platano", 3)
            ]
        ),
        new Recipe(
            2,
            "Yuca con Chicharron", 
            "Yuca Cosida con Chicharron, Repollo y salsita rica", 
            "https://comidadehonduras.com/wp-content/uploads/2020/01/yuca-con-chicharon-comidadehonduras-1024x684.jpg",
            [
                new Ingredient("Yuca", 3),
                new Ingredient("Chicharron", 5),
                new Ingredient("Repollo", 1)
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

    findRecipe(id: number){
        const recipe = this.recipes.find(
            (s) => {
                return s.id == id;
            }
        )
        return recipe;
    }
}