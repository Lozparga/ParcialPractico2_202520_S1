import { Actor } from '../actor/Actor';

export class Movie {
  id: number;
  title: string;
  genre: string;
  director: string;
  releaseYear: number;
  rating: number;
  description: string;
  duration: number;
  shortDescription: string;
  posterImageUrl: string;
  cast: Actor[];

  constructor(
    id: number,
    title: string,
    genre: string,
    director: string,
    releaseYear: number,
    rating: number,
    description: string,
    duration: number,
    shortDescription: string,
    posterImageUrl: string,
    cast: Actor[]
  ) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.director = director;
    this.releaseYear = releaseYear;
    this.rating = rating;
    this.description = description;
    this.duration = duration;
    this.shortDescription = shortDescription;
    this.posterImageUrl = posterImageUrl;
    this.cast = cast;
  }
}
