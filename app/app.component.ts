import { Component } from '@angular/core';
import {  Hero } from './hero'; 

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html' /*Remember, the references is from index.html */
})

//The app's code defines the data directly inside the component, which isn't best practice
export class AppComponent {
  title: string;
  myHero: Hero;
  heroes: Hero[];


  constructor(){
    this.title = 'Tour of Heroes';
    this.heroes = [ new Hero(1, "Jhonatan"),
                    new Hero(2, "Andres"),
                    new Hero(3, "Giraldo") ];
    this.myHero = this.heroes[0];
    
  }
}
