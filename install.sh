
#!/bin/bash

# Any installation related commands
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install wget
sudo apt-get install git

## mongo-db installation
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -   
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org

## nodejs installation
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Any configuration related commands
sudo apt-get update

