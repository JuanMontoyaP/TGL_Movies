const getMovieData = async (movie) => {
  images_base_url = "https://image.tmdb.org/t/p/original";
  return Promise.resolve({
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    date: movie.release_date,
    image: `${images_base_url}${movie.poster_path}`,
    vote_average: movie.vote_average,
    genre_ids: movie.genre_ids,
    genre: movie.genres,
  });
};

const listMovies = async (movies) => {
  const listMovies = [];
  for (let movie of movies) {
    listMovies.push(await getMovieData(movie));
  }

  return listMovies;
};

module.exports = {
  getMovieData,
  listMovies,
};
