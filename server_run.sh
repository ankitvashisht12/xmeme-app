#!/bin/bash

cd ./backend/

# Start mongo daemon service
sudo service mongod start 

# sleep for 10 sec
sleep 10

# install npm packages
npm install
npm start

