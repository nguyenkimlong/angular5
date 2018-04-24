import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  var hours =12;
    var mins = 5;
    var hdegree = hours * 30 + (mins / 2);
    var hrotate = "rotate(" + hdegree + "deg)";
    

    $("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
    var mdegree = mins * 6;
    var mrotate = "rotate(" + mdegree + "deg)";
    
    $("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
  }
    
  

}
