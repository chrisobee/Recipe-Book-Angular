import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent {

    recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is a test recipe', 'https://www.foodista.com/sites/default/files/recipe-detail_paneer-tikka_2.jpg')
    ];
    
}