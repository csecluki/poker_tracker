#!/bin/bash

ls
sudo docker stop $(sudo docker ps -a -q)
sudo docker rm -f $(sudo docker ps -a -q)
sudo docker rmi $(sudo docker images -q)
sudo docker compose up --build
