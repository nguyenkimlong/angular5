import { Injectable } from '@angular/core';

import {Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Hero} from '../app/hero';
import { HEROES } from '../app/mock-heroes';

@Injectable()
export class MessageService {

  messages:string[]=[];
  
  constructor() { }

  add(messages :string)
  {
    this.messages.push(messages);
  }
  clear(){
    this.messages=[];
  }
 
  
}
