
#!/bin/bash

# Any installation related commands
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install wget
sudo apt-get install curl

echo 'Installed wget and curl'


## mongo-db installation
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -   
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org

echo "Installed mongodb"

## nodejs installation
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "Installed nodejs"

## install npm
#curl -L https://npmjs.org/install.sh | sudo sh
sudo apt install npm

echo "installed npm"
# Any configuration related commands
sudo apt-get update
