import { Movie } from '../movie/Movie';

export class Actor {
  id: number;
  name: string;
  placeOfBirth: string;
  biography: string;
  birthDate: String;
  photoUrl: string;
  shortBiography: string;
  popularity: number;
  filmography: Movie[];

  constructor(
    id: number,
    name: string,
    placeOfBirth: string,
    biography: string,
    birthDate: String,
    photoUrl: string,
    shortBiography: string,
    popularity: number,
    filmography: Movie[]
  ) {
    this.id = id;
    this.name = name;
    this.placeOfBirth = placeOfBirth;
    this.biography = biography;
    this.birthDate = birthDate;
    this.photoUrl = photoUrl;
    this.shortBiography = shortBiography;
    this.popularity = popularity;
    this.filmography = filmography;
  }
}
