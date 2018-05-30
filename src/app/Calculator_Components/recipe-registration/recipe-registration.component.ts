import { SharedDataService } from './../../services/shared-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-registration',
  templateUrl: './recipe-registration.component.html',
  styleUrls: ['./recipe-registration.component.css']
})
export class RecipeRegistrationComponent implements OnInit {
  ingredients: string;

  constructor(private data_service: SharedDataService) { }

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

}
