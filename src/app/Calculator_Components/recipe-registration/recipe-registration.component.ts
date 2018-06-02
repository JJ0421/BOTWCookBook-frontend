import { Recipe } from './../../models/recipe';
import { WebService } from './../../services/web.service';
import { SharedDataService } from './../../services/shared-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-registration',
  templateUrl: './recipe-registration.component.html',
  styleUrls: ['./recipe-registration.component.css']
})
export class RecipeRegistrationComponent implements OnInit {
  ingredients: string;
  name: string;
  hearts: string;
  effect: string;
  notes: string;
  recipe: Recipe = new Recipe();

  postStatus: number = 0;


  constructor(private data_service: SharedDataService, private web_servie: WebService) { }

  ngOnInit() {
    this.ingredients = this.data_service.getIngredients();
    var arr = this.ingredients.split("/");
    this.ingredients = "";
    for(let ingredient of arr){
      this.ingredients += ingredient+";";
    }
  }

  getIngredients(){
    var arr = this.ingredients.split(";");
    var ingredients = "";
    for(var i = 0; i < arr.length-2; i++){
      ingredients += arr[i] + ", ";
    }
    ingredients += arr[arr.length-2];
    return ingredients;
  }

  postData(){
    this.recipe.setName(this.name);
    this.recipe.setIngredients(this.ingredients);
    this.recipe.setHearts(this.hearts);
    this.recipe.setEffect(this.effect);
    this.recipe.setNotes(this.notes);
    this.web_servie.postData(this.recipe).subscribe(
      res => {
        console.log(res);
        if(res){
          alert('Your recipe was successfully submitted!')
          this.data_service.switch(0);
        }else{
          alert('There was an error in submitting your recipe. Make sure your recipe has a name.');
        }
      }
    );
  }

}
