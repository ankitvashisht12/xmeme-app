const express = require('express');
const indexRouter = require('./src/routes/meme');
const connectDB = require('./src/config/db');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


// Mongo DB connection
connectDB();

const app = express();
const swaggerApp = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
swaggerApp.use(cors());


// setting app and swaggerApp port numbers
const port = process.env.PORT || 8081;
const swaggerPort = 8080;


const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'XMeme',
			description: 'Documentation for XMeme API',
			servers: ['locahost:'+port]
		},
		host: `localhost:${port}`,
		basePath: '/',
		schemes: 'http',

	},

	apis: ['./src/routes/*.js']
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);
swaggerApp.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use('/', indexRouter);




// Middleware for Errors
app.use((req, res, next) => {
	res.status(404).send('Page not found');
});



app.listen(port, () => console.log(`Server started at ${port}`));
swaggerApp.listen(swaggerPort, ()=>console.log(`swagger app is listening on ${swaggerPort}`))