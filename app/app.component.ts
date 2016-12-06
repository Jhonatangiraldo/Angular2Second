import { Component } from '@angular/core';
import {  Hero } from './hero'; 

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html' /*Remember, the references is from index.html */
})

//The app's code defines the data directly inside the component, which isn't best practice
export class AppComponent {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
