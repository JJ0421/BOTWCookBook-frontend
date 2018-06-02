import { Ingredient } from './../../models/ingredient';
import { WebService } from './../../services/web.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ingredients-page',
  templateUrl: './ingredients-page.component.html',
  styleUrls: ['./ingredients-page.component.css']
})
export class IngredientsPageComponent implements OnInit {

  ingredients: Ingredient[];
  display: boolean = false;

  constructor(private web_service: WebService) { }


  ngOnInit() {
    this.web_service.getIngredients().subscribe(
      (data:any) => {
        this.ingredients = data;
        if(this.ingredients.length > 0){
          this.display = true;
        }
        else{
          this.display = false;
        }
      }
    )
  }

}
