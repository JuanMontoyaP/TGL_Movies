# TGL_Movies

This project is a web application that displays popular movies using the [The movie database API](https://www.themoviedb.org/) for development. In this web app you can create a user and search or add your favorite movies, saving it for later.

### Technologies

- Frontend: The frontend was build using REACT.
- Backend: The backend was built using nodeJS and ExpressJS.
- Database: The used database was MongoDB.

## How to run the project?

For running the project you should follow the steps below:

1.  Clone the repository to your local machine.

2.  Then you have to create a .env file with the data showed in the example .env file that contains the following information .

        MONGODB_CNN=mongodb://mongodb:27017/topgunlab
        SECRETKEY=
        API_KEY=

    Where the SECRETKEY is specified for generating the JWT token and for the API_KEY from the [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction).

3.  Once you have create the .env file you can build the project using the following command:

        docker-compose build
        docker-compose up -d

4.  Open your browser in the following direction: http://localhost:3000

5.  Enjoy it!

PD. You have to install Docker if not already installed.

## Developers

- Catalina Quarleri [Frontend Developer] [Catalina's LinkedIn](https://www.linkedin.com/in/cataquarleri)
- Jose [Frontend Developer]
- Daniel Londoño [Backend Developer] [Daniel's LinkedIn](https://www.linkedin.com/in/daniel-londono-agudelo/)
- Juan Pablo Montoya [Backend Developer] [Juan's LinkedIn](https://www.linkedin.com/in/juan-montoya-a49958158/)
