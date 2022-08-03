# Backend for TGL Movies

The backend was build in NodeJS and ExpressJS and has the following endpoints.

## Movies

- GET /movies/popular: Get all the popular movies from the The Movie Database.

- GET /movies/detail/id: Get the details of the movie with the specified id.

- GET movies/?query=MovieName&page=1: Get the movies that match the specified query parameter as the movie name.

## Favorite Movies

- GET /favoriteMovies/user_id: Get all the favorite movies for the specified user.

- POST /favoriteMovies/user_id?movie_id=movie_id: Add a movie to the favorites list of a user.

- DELETE /favoriteMovies/user_id?movie_id=movie_id: Delete a movie from the favorites list of a user.

## CRUD Users

- GET /users/: Get all the users.

- POST /users/: Create a new user sended as request body.

- PUT /users/user_id: Update the user data name and password sended in the request body.

- DELETE /users/user_id: Delete the user user_id.

## Authentication

- POST /auth/login: Authenticates the specified user send in a request body.

- POST /auth/google: Authenticates the specified using google authentication.
