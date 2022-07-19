const getMovieData = async (movie) => {
  images_base_url = "https://image.tmdb.org/t/p/original";
  return Promise.resolve({
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    date: movie.release_date,
    image: `${images_base_url}${movie.poster_path}`,
  });
};

module.exports = {
  getMovieData,
};
