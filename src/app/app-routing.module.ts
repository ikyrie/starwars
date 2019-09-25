import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'movie', component: MovieComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
