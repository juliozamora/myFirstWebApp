import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public recipes = [
    'tomato-soup',
    'steamed-white-rice',
    'simple-black-beans',
    'pinto-beans',
    'chunky-vegetable-soup',
  ];
  public currentRecipe;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  selectRecipe() {
    const index = Math.floor(Math.random() * this.recipes.length);
    this.currentRecipe = this.recipes[index];
    this.router.navigate(['/recipe', this.currentRecipe]);
  }

}
