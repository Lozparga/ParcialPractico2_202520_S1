import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
    movie: Movie | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.getMovieDetail(id).subscribe({
      next: (data) => {
        this.movie = data;
      },
      error: (err) => {
        console.error('Error cargando detalle:', err);
      }
    });
  }
  goBack() {
    this.router.navigate(['/movie']);
  }
}

