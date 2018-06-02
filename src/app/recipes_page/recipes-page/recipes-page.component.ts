import { Recipe } from './../../models/recipe';
import { WebService } from './../../services/web.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {
  display:boolean = false;
  private recipes:Recipe[]

  constructor(private web_service:WebService) { }

  ngOnInit() {
    this.web_service.getAllRecipes().subscribe(
      (data:any) => {
        this.recipes = data;
        if(this.recipes.length > 0){
          var re = /;/gi;
          for(var i = 0; i < this.recipes.length; i++){
            this.recipes[i].ingredients = this.recipes[i].ingredients.replace(re, ", ");
            this.recipes[i].ingredients = this.recipes[i].ingredients.substr(0, this.recipes[i].ingredients.length-2);
          }
          console.log(this.recipes[0].name);
          console.log(this.recipes[0].effect)
          this.display = true;
        }else{
          this.display = false;
        }
        console.log(this.display);
      }
    );
  }

}
