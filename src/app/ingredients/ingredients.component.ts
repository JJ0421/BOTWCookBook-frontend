import { IngredientsService } from './ingredients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients:Ingredient[];
  found:boolean = false;
  cookingQueue = [];
  ingreds:string = "";
  recipeName:string = "";


  constructor(private ingredientsService:IngredientsService) { }

  ngOnInit() {
    
    this.ingredientsService.getIngredients()
    .subscribe(
      (data:any[]) => {
        this.ingredients = data;
        if(this.ingredients.length > 0){
          this.found = true;
        }else{
          this.found = false;
        }
      }
    );

  }

  getItem(item:string){
    if(this.cookingQueue.length < 5){
      this.cookingQueue.push(item);
      console.log(item);
    }
  }

  cookQueue(){
    for(let item of this.cookingQueue){
      this.ingreds += item + "/";
    }
    console.log(this.ingreds);
    this.ingredientsService.getExactRecipe(this.ingreds)
    .subscribe(
      (data:any) => {
          this.recipeName = data[0].name;
          console.log(this.recipeName);
      }
    )
  }


}

class Ingredient{
  id:number;
  name:string;
  type:string;
  hearts:string;
  effect:string;
}

