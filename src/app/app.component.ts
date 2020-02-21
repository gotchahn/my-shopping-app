import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-shopping-app';
  loadedFeature = "recipes";

  constructor(private shoppingListService: ShoppingListService){}

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

  ngOnInit(){
    this.shoppingListService.shoppingListRequested.subscribe(
      () => {
        this.loadedFeature = 'shopping-list'
      }
    )
  }
}
