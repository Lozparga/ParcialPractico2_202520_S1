import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { moviesData } from '../moviesData';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  selected: Boolean = false;
  selectedMovie: Movie | null = null;

  onSelect(movie: Movie) {
    this.selectedMovie = movie;
    this.selected = true;
  }

  ngOnInit() {
    this.movies = moviesData;
  }
}
