npm run build
docker build -t rmcomando34/esoawardsapp .
docker tag rmcomando34/esoawardsapp rmcomando34/esoawardsapp:v3.1
docker push rmcomando34/esoawardsapp:v3.1
ssh root@172.233.115.41 'docker pull rmcomando34/esoawardsapp:v3.1;docker stop esoawards;docker rm esoawards;docker run -p 80:80 --name esoawards rmcomando34/esoawardsapp:v3.1'