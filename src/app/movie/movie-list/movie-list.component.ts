import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})

export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.movieService.getRecipes().subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: (err) => {
        console.error('Error cargando movies:', err);
      }
    });
  }

  goToDetail(movie: Movie) {
    this.router.navigate(['/movie', movie.id]);
  }
}

