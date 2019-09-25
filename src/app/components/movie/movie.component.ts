import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import films from '../../models/films.json';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  films:any[];
  movie:any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.films = films.results;
    const movieId:number = parseInt(this.activatedRoute.snapshot.params.movieId);

    this.movie = this.films.filter((movie) => {
      if(movie.episode_id === movieId){
        return movie
      }
    })
  }

}
