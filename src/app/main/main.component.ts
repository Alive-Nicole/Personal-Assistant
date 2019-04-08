import { Component, OnInit } from '@angular/core';
import { WeekDay } from '@angular/common';
// import {NgbCheckBox} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tasks = [{
    id: 0,
    task: "Go for the meeting",
    completed: false
  },{
    id: 1,
    task: "Do the laundary",
    completed: false
  },{
    id: 2,
    task: "Wash the dishes",
    completed: false
  }];

  formateDate(scope){
    scope.today = new Date();
  }
  


  constructor() { }

  ngOnInit() {
  }

}
