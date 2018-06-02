import { Recipe } from './../models/recipe';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private httpClient:HttpClient) { }

  getIngredients(){    
    return this.httpClient.get("/api/ingredients");
  }

  getExactRecipe(ingreds:string){
    return this.httpClient.get("/api/find/recipes/ingredients/"+ingreds);
  }

  getAllRecipes(){
    return this.httpClient.get("/api/recipes");
  }

  getLikeRecipes(ingreds: String){
    var reg = /;/gi;
    ingreds = ingreds.replace(reg, "/");
    return this.httpClient.get("/api/search/recipes/ingredients/"+ingreds);
  }

  postData(recipe: Recipe){
     return this.httpClient.post("/api/add/recipe", {
       name: recipe.name,
       ingredients: recipe.ingredients,
       hearts: recipe.hearts,
       effect: recipe.effect,
       notes: recipe.notes
     });
  }
}
