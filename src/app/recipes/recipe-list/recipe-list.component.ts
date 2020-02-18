import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pollo Chuco", "Pollo Frito con Tajada y Repollo","https://buenprovecho.hn/wp-content/uploads/2019/03/MH-pollochuco-010915.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
