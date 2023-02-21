import { itActsAsFavoriteMovieModel } from './contract/favoriteMovieContract';
import FavoriteMovideIdb from '../src/scripts/data/favorite-movie-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteMovideIdb.getAllMovies()).forEach(async (movie) => {
      await FavoriteMovideIdb.deleteMovie(movie.id);
    });
  });

  itActsAsFavoriteMovieModel(FavoriteMovideIdb);
});
