import { Injectable } from '@angular/core';
import {Hero} from '../app/hero';
import { HEROES } from '../app/mock-heroes';

import {Observable } from 'rxjs/Observable';

import * as axios from 'axios'

import { of } from 'rxjs/observable/of';


import { MessageService } from './message.service';

 

@Injectable()
export class HeroService {

  constructor(private messageService :MessageService) { }

  getHero(id:number): Observable<Hero> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(x=>x.id===id));
  }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
 

}
