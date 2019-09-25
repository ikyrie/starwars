import { Component, OnInit } from '@angular/core';
import people from '../../models/people.json';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people:any[];

  constructor() { }

  ngOnInit() {
    this.people = people.results.sort((a, b) => {
      return b.films.length - a.films.length;
    });
  }
}
