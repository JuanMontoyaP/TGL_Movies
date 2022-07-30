docker build -t tgl-movies-back .
docker run -d --rm -p 8080:8080 tgl-movies-back