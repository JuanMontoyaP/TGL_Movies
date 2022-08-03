//Hooks
import React, { useContext, useState } from "react";
//Axios
import axios from "axios";

//userContext for loading
import { useUserContext } from "./UserContext";

//Create context
const MovieContext = React.createContext();

//Create custom hook to call context
export function useMovieContext() {
  return useContext(MovieContext);
}

//Context function
export function MovieContextProvider({ children }) {
  const { isLoading, setIsLoading, currentUser } = useUserContext();

  //Set in SearchBar component via handleInput function
  const [searchMovie, setSearchMovie] = useState("");
  //State used to map in MoviesCards and show eachMovieCard
  const [moviesArray, setMoviesArray] = useState([]);
  //State used to get array of all genres
  const [movieGenres, setMovieGenres] = useState([]);
  //State used to save genre selected
  const [genreSelected, setGenreSelected] = useState("");
  //State used to load favorite movies
  const [favMoviesArray, setFavMoviesArray] = useState([]);
  //API call to show popular movies
  async function popularMoviesFunction() {
    try {
      await axios
        .get("http://localhost:8080/movies/popular")
        .then((response) => {
          setMoviesArray(response.data.data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("error!", error);
    }
  }

  //API call to get all genres names
  async function movieGenresFunction() {
    try {
      await axios
        .get("http://localhost:8080/movies/genre")
        .then((response) => {
          setMovieGenres(response.data.data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("error!", error);
    }
  }

  //API call to search movie
  async function searchFunction() {
    try {
      await axios
        .get(`http://localhost:8080/movies?query=${searchMovie}`)
        .then((response) => {
          if (response.data.data.results.length == 0) {
            setMoviesArray([]);
          } else {
            moviesWithPoster(response.data.data.results);
            setIsLoading(false);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("error!", error);
    }
  }
  //Function to filter search results and show only movies with poster/image
  function moviesWithPoster(searchedMovies) {
    const filteredMovies = searchedMovies.filter((oneMovie) => {
      return oneMovie.image !== "https://image.tmdb.org/t/p/originalnull";
    });
    return setMoviesArray(filteredMovies);
  }

  async function addToFavorites(movieId, userId) {
    try {
      await axios
        .post(
          `http://localhost:8080/favoriteMovies/${userId}?movie_id=${movieId}`,
          userId
        )
        .then((response) => console.log("response de post fav", response))
        .catch((err) => console.log("error de fav", err));
    } catch (err) {
      console.log("error on async:", err);
    }
  }

  async function loadFavorites() {
    try {
      await axios
        .get(`http://localhost:8080/favoriteMovies/${currentUser.uid}`)
        .then((response) => {
          console.log("response de get fav", response);
          setFavMoviesArray(response.data.data);
        })
        .catch((err) => console.log("error on get", err));
    } catch (err) {
      console.log("error on async:", err);
    }
  }
  console.log("FAV MOVIES ARRAY", favMoviesArray);

  async function removeFromFavorites(movieId) {
    try {
      await axios
        .delete(
          `http://localhost:8080/favoriteMovies/${currentUser.uid}?movie_id=${movieId}`,
          currentUser.uid
        )
        .then(
          (response) => console.log("response de delete fav", response)
          // window.location.reload()
        )
        .catch((err) => console.log("error de fav", err));
    } catch (err) {
      console.log("error on async:", err);
    }
  }

  const value = {
    searchMovie,
    setSearchMovie,
    searchFunction,
    moviesArray,
    popularMoviesFunction,
    movieGenresFunction,
    movieGenres,
    genreSelected,
    setGenreSelected,
    addToFavorites,
    favMoviesArray,
    loadFavorites,
    removeFromFavorites,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}
