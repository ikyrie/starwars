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
    this.people = this.filterByFilms();
  }

  filterByFilms() {
    return people.results.sort((a, b) => {
      if(b.films.length === a.films.length) {
        return a.name !== b.name ? a.name < b.name ? -1 : 1 : 0
      }
      return b.films.length - a.films.length;
    });
  }

  filterByName() {
    return people.results.sort((a, b) => {
      return a.name !== b.name ? a.name < b.name ? -1 : 1 : 0
    })
  }

  filterByGender() {
    return people.results.sort((a, b) => {
      return a.gender !== b.gender ? a.gender < b.gender ? -1 : 1 : 0
    })
  }

  onChange(filterSelect:string) {
    if(filterSelect === 'films') {
      this.people = this.filterByFilms();
    }
    if(filterSelect === 'name') {
      this.people = this.filterByName();
    }
    if(filterSelect === 'gender') {
      this.people = this.filterByGender();
    }
  }
}
