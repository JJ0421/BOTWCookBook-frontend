import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
}
