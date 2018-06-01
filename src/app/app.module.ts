import { WebService } from './services/web.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './Calculator_Components/ingredients/ingredients.component';
import {HttpClientModule} from '@angular/common/http';
import { CalculatorComponent } from './Calculator_Components/calculator/calculator.component';
import { RecipeRegistrationComponent } from './Calculator_Components/recipe-registration/recipe-registration.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    CalculatorComponent,
    RecipeRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
