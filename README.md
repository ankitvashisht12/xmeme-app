# X-MEME ( MEME STREAM )

X-MEME is a fun website where people can post funny memes with caption. 

## Project structure

The root directory contains 4 scripts and two main folders: 
1. meme-stream-backend : Contains files for backend
2. meme-stream-frontend: Contains files for frontend

### Overview of Project Structure
```
├── install.sh
├── meme-stream-backend
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   └── src
│       ├── config
│       │   └── db.js
│       ├── controllers
│       │   └── meme.js
│       ├── models
│       │   └── meme.js
│       ├── routes
│       │   └── meme.js
│       └── utils
├── meme-stream-frontend
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── logo.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── assets
│       │   ├── 404.jpeg
│       │   ├── backup-img.jpeg
│       │   └── logo.png
│       ├── components
│       │   ├── container
│       │   │   ├── Container.js
│       │   │   └── Container.module.css
│       │   ├── feed
│       │   │   ├── Feed.js
│       │   │   └── Feed.module.css
│       │   ├── feeds
│       │   │   ├── Feeds.js
│       │   │   └── Feeds.module.css
│       │   ├── header
│       │   │   ├── Header.js
│       │   │   └── Header.module.css
│       │   └── postForm
│       │       ├── Post.js
│       │       └── Post.module.css
│       ├── index.css
│       ├── index.js
│       └── reportWebVitals.js
├── README.md
├── server_run.sh
├── sleep.sh
└── test_server.sh
```
## Project Setup

> Note : Make sure to install npm, nodeJS, mongodb and other necessary programs by running `install.sh` script

### Start `mongod` daemon service

```bash
sudo service mongod start
```

### Start Nodejs server ( backend )

```bash
cd meme-stream-backend
npm install
npm run
```

### Start React app ( frontend )

```bash
cd meme-stream-frontend
npm install
npm run
```


