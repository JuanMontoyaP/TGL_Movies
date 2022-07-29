docker build -t tgl-movies-front .
docker run -d --rm -p 3000:3000 tgl-movies-front