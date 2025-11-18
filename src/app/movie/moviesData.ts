import { Actor } from '../actor/Actor';
import { Movie } from './Movie';

export const moviesData = [
  new Movie(
    1,
    'The Shawshank Redemption',
    'Drama',
    'Frank Darabont',
    1994,
    9.3,
    'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    142,
    'A story of hope and friendship.',
    'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    [
      new Actor(
        1,
        'Morgan Freeman',
        'Memphis, Tennessee, USA',
        'Morgan Freeman is an American actor, director, and narrator known for his distinctive deep voice and versatile acting skills. He has appeared in a wide range of films, earning critical acclaim and numerous awards throughout his career.',
        '1937-06-01',
        'https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_.jpg',
        'Renowned actor and narrator.',
        9.8,
        []
      ),
    ]
  ),
  new Movie(
    2,
    'Se7en',
    'Crime',
    'David Fincher',
    1995,
    8.6,
    'Two detectives hunt a serial killer who uses the seven deadly sins as his motives.',
    127,
    'A dark and gripping thriller.',
    'https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    [
      new Actor(
        1,
        'Morgan Freeman',
        'Memphis, Tennessee, USA',
        'Morgan Freeman is an American actor, director, and narrator known for his distinctive deep voice and versatile acting skills. He has appeared in a wide range of films, earning critical acclaim and numerous awards throughout his career.',
        '1937-06-01',
        'https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_.jpg',
        'Renowned actor and narrator.',
        9.8,
        []
      ),

      new Actor(
        2,
        'Brad Pitt',
        'Shawnee, Oklahoma, USA',
        'Brad Pitt is an American actor and film producer. He has received multiple awards for his performances in various films and is known for his charismatic screen presence and versatility as an actor.',
        '1963-12-18',
        'https://m.media-amazon.com/images/M/MV5BZTlhMWIxZjAtMWQ5YS00YmU0LTkwN2QtN2M5ZDRjYmRkMWFlXkEyXkFqcGc@._V1_.jpg',
        'Acclaimed actor and producer.',
        9.7,
        []
      ),
    ]
  ),
];
