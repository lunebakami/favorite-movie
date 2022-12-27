export function sortMoviesByYear(movies: Movie[]): Array<Movie> {
  return movies.sort((a: Movie, b: Movie) => {
    if (a.releaseYear < b.releaseYear) {
      return -1;
    }

    if (a.releaseYear > b.releaseYear) {
      return 1;
    }

    return 0;
  });
}
