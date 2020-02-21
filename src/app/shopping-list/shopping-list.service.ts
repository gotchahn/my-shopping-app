import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient("Apple", 5),
        new Ingredient("Tomato", 3)
    ];
    shoppingListRequested = new EventEmitter<void>();

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }

    addIngredients(ings: Ingredient[]){
        this.ingredients.push(...ings);
    }

    getIngredients(){
        return this.ingredients;
    }
}