import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://157.253.205.147:8080/api/movies';

  constructor(private http: HttpClient) {}

  /** Lista todas las movies */
  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /** Consulta el detalle de una movie (por id) */
  getRecipeDetail(id: number): Observable<Movie> {
  return this.http.get<Movie>(
    ` http://157.253.205.147:8080/api/movies/{id}`
  );
}

}
