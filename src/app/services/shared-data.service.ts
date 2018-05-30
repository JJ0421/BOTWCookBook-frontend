import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private switcher = new BehaviorSubject<number>(0);
  state = this.switcher.asObservable();
  ingredients:string = "";

  constructor() { }

  switch(state:number){
    this.switcher.next(state);
  }

  setIngredients(ingredients:string){
    this.ingredients = ingredients;
  }

  getIngredients(){
    return this.ingredients;
  }


}
