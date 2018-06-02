import { WebService } from './../../services/web.service';
import { Recipe } from './../../models/recipe';
import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  exactMatches:Recipe[] = new Array();
  likeMatches:Recipe[] = new Array();
  queryContainer:Recipe[];
  displayExact:Boolean = false;
  displayLike:Boolean = false;
  
  constructor(private data_service:SharedDataService, private web_service:WebService) { }

  ngOnInit() {
    this.web_service.getLikeRecipes(this.data_service.getQueryableIngredients()).subscribe(
      (data:any) => {
        this.queryContainer = data;
        if(this.queryContainer.length > 0){
          this.displayExact = true;
        }else{
          this.displayExact = false;
        }
        for(var i = 0; i < this.queryContainer.length; i++){
          var arr = this.data_service.getQueryableIngredients().split(";");
          var queryAbleIngredients = "";
          arr.sort();

          var j = 0;
          if(arr[0] === ""){
            j = 1;
          }

          for(j; j < arr.length; j++){
            queryAbleIngredients += arr[j]+";";
          }

          console.log(queryAbleIngredients);
          
          
          

          console.log("here");
          console.log("-----------");

          if(this.queryContainer[i].ingredients === queryAbleIngredients){
            var reg = /;/gi;
            this.queryContainer[i].ingredients = this.queryContainer[i].ingredients.replace(reg, ", ");
            this.queryContainer[i].ingredients = this.queryContainer[i].ingredients.substr(0, this.queryContainer[i].ingredients.length-2);
            this.exactMatches.push(this.queryContainer[i]);
            
          }else{
            var reg = /;/gi;
            this.queryContainer[i].ingredients = this.queryContainer[i].ingredients.replace(reg, ", ");
            this.queryContainer[i].ingredients = this.queryContainer[i].ingredients.substr(0, this.queryContainer[i].ingredients.length-2);
            this.likeMatches.push(this.queryContainer[i]);
          }
          if(this.likeMatches.length > 0){
            this.displayLike = true; 
          }else{
            this.displayLike = false;
          }
        }
      }
    );
  }

}
