import { Ingredient } from './../models/ingredient';
import { WebService } from './../services/web.service';
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
  ingredientQueued:boolean = false;
  ingreds:string = "";
  recipeName:string = "";


  constructor(private webService:WebService) { }

  ngOnInit() {

    this.webService.getIngredients()
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
      this.ingredientQueued = true;
      console.log(item);
    }
  }

  filterTable(){
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value;
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");
    for(i = 0; i < tr.length; i++){
      td = tr[i].getElementsByTagName("td")[0];
      if(td){
        if(td.innerHTML.indexOf(filter) > -1){
          tr[i].style.display = "";
        }else{
          tr[i].style.display = "none";
        }
      }
    }
  }

  cookQueue(){
    for(let item of this.cookingQueue){
      this.ingreds += item + "/";
    }
    console.log(this.ingreds);
    this.webService.getExactRecipe(this.ingreds)
    .subscribe(
      (data:any) => {
          this.recipeName = data[0].name;
          console.log(this.recipeName);
      }
    )
  }


}


