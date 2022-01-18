import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.thespruceeats.com/thmb/xGusGYYmKSt0reKSB31KJwXkwtE=/3060x2040/filters:no_upscale():max_bytes(150000):strip_icc()/classic-korean-bibimbap-recipe-2118765-step-011-acab906539594dc9a668c7fbb753c43d.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.thespruceeats.com/thmb/xGusGYYmKSt0reKSB31KJwXkwtE=/3060x2040/filters:no_upscale():max_bytes(150000):strip_icc()/classic-korean-bibimbap-recipe-2118765-step-011-acab906539594dc9a668c7fbb753c43d.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
