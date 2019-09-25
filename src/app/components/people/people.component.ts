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
      if(b.films.length === a.films.length) {
        return a.name !== b.name ? a.name < b.name ? -1 : 1 : 0
      }
      return b.films.length - a.films.length;
    });
  }
}
