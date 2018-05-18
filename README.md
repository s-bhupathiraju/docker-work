docker version
docker info

## CONTAINERS
docker run hello-world
docker ps // currently running ps
docker ps -a // all ps including the stopped ones

docker run ubuntu:latest
docker start ubuntu_container_name_or_id
docker stop ubuntu_container_name_or_id

// remove stopped container using id
docker rm ff75647bd413

## IMAGES

//list all images
docker images

//ask daemon to pull an image into local repository
docker pull alpine

//ask daemon to pull an image of particular version
docker pull ubuntu:14.04

docker rmi ubuntu:14.04

## example for a web container
// run in detached mode, allow 8080 container port to be accessible on Host port 8099
docker run -d --name web -p 8099:8080 nigelpoulton/pluralsight-docker-ci

## example for an interactive shell
docker run -it --name shel ubuntu:latest /bin/bash

// type exit in the shell to exit 
// most of the time the only process running is one active process. if you kill the process, the container will exit


## Exit from a running interactive container
Ctrl P + Q

## stop all containers
docker stop $(docker ps -aq)

// remove all stopped containers
docker rm $(docker ps -aq)

// remove all images
docker rmi $(docker images -q)
