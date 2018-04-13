import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import {HEROES} from '../mock-heroes'
import {HeroService} from '../hero.service'
import { OnChanges, AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
   selectedHero:Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    debugger;
    this.heroService.getHeroes().subscribe(heroes => this.heroes=heroes);
    console.log(" this.heroes", this.heroes);
  }
 
  // onSelect(hero:Hero):void{
   
  //   this.selectedHero = hero;
  //   console.log("selectedHero",this.selectedHero);
  // }
}
