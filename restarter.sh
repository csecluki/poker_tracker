#!/bin/bash

echo Stopping all running containers
sudo docker stop $(sudo docker ps -a -q)
echo Containers stopped
echo

echo Removing all containers
sudo docker rm -f $(sudo docker ps -a -q)
echo Containers removed
echo

echo Removing all images
sudo docker rmi $(sudo docker images -q)
echo Images removed
echo

echo Starting...
sudo docker compose up --build

