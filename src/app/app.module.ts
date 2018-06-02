import { WebService } from './services/web.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './Calculator_Components/ingredients/ingredients.component';
import {HttpClientModule} from '@angular/common/http';
import { CalculatorComponent } from './Calculator_Components/calculator/calculator.component';
import { RecipeRegistrationComponent } from './Calculator_Components/recipe-registration/recipe-registration.component';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsPageComponent } from './ingredients_page/ingredients-page/ingredients-page.component';
import { RecipesPageComponent } from './recipes_page/recipes-page/recipes-page.component';
import { RecipesComponent } from './Calculator_Components/recipes/recipes.component';
import { HomeComponent } from './home/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  {path: 'ingredients', component: IngredientsPageComponent},
  {path: 'recipes', component: RecipesPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    CalculatorComponent,
    RecipeRegistrationComponent,
    IngredientsPageComponent,
    RecipesPageComponent,
    RecipesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
