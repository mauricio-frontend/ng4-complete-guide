import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c.pxhere.com/images/88/86/63646479c1c4d20e47385814636e-1619639.png!d'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c.pxhere.com/images/88/86/63646479c1c4d20e47385814636e-1619639.png!d')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
