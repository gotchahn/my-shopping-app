import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, ip: string, ings: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = ip;
        this.ingredients = ings;
    }
}