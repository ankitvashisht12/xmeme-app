#!/bin/bash

cd ./meme-stream-backend/

# Start mongo daemon service
sudo service start mongod

# install npm packages
npm install
npm start

