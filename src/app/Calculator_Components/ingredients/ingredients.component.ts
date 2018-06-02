import { Component, OnInit } from '@angular/core';
import { Ingredient } from './../../models/ingredient';
import { Recipe } from './../../models/recipe';
import { WebService } from './../../services/web.service';
import { SharedDataService } from './../../services/shared-data.service';



@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[];
  found: boolean = false;
  cookingQueue = [];
  ingredientQueued: boolean = false;
  ingreds: string = "";
  queryableIngreds: string = "";
  exactRecipes: Recipe[];


  constructor(private webService: WebService, private dataService: SharedDataService) { }

  ngOnInit() {

    this.webService.getIngredients()
      .subscribe(
        (data: any[]) => {
          this.ingredients = data;
          if (this.ingredients.length > 0) {
            this.found = true;
          } else {
            this.found = false;
          }
        }
      );

  }

  getItem(item: Ingredient) {
    if (this.cookingQueue.length < 5) {
      this.cookingQueue.push(item);
      this.ingredientQueued = true;
    }
  }

  filterTable() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value;
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


  removeIngredientFromQueue(index: number) {
    var temp: string[] = new Array();
    var size = this.cookingQueue.length;
    var i;
    if (size == 1) {
      this.cookingQueue.pop();
    } else {
      for (i = size; i > index+1; i--) {
        temp.push(this.cookingQueue.pop());
      }
      this.cookingQueue.pop();
      while(temp.length > 0){
        this.cookingQueue.push(temp.pop());
      }
    }



    if (this.cookingQueue.length == 0) {
      this.ingredientQueued = false;
    }



  }

  cookQueue() {
    var i;
    var recipeFound = false;
    for (i = 0; i < this.cookingQueue.length - 1; i++) {
      this.ingreds += this.cookingQueue[i].name + "/";
      this.queryableIngreds += this.cookingQueue[i].name+";";
    }
    this.ingreds += this.cookingQueue[this.cookingQueue.length - 1].name;
    this.queryableIngreds += this.cookingQueue[this.cookingQueue.length-1].name+";";    
    this.webService.getExactRecipe(this.ingreds)
      .subscribe(
        (data: any[]) => {
          this.exactRecipes = data;
          if (this.exactRecipes.length > 0) {
            recipeFound = true;
          }
          
          while (this.cookingQueue.length > 0) {
            this.cookingQueue.pop();
            this.ingredientQueued = false;
          }
          this.dataService.setIngredients(this.ingreds);
          this.dataService.setQueryableIngredients(this.queryableIngreds);       
          this.ingreds = "";
          if (recipeFound) {
            this.dataService.switch(1);
          } else {
            this.dataService.switch(2);
          }

        }
      )
  }


}


