docker build -t tgl-movies .
docker run -d --rm -p 8080:8080 tgl-movies