import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/hmg-prod/images/delish-bolognese-horizontal-1-1540572556.jpg?crop=1xw:0.84375xh;center,top'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/hmg-prod/images/delish-bolognese-horizontal-1-1540572556.jpg?crop=1xw:0.84375xh;center,top')
  ];
  
  recipesss = "Duc"

  constructor(){

  }


  ngOnInit() {}


  



}
