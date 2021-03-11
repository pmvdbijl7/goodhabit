const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv/config');

// Get .env Variables
const hostURL = process.env.URL;
const hostPort = process.env.PORT || 8080;
const dbConnection = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gettingstarted.35frc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// Set Templating Engine
app.set('view engine', 'ejs');

// Set Public Directory as a Static Directory
app.use(express.static('public'));

// Middleware(s)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Connect to Database
mongoose.connect(
	dbConnection,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: true,
	},
	() => {
		console.log('Succesfully Connected to Database');
	}
);

// Get Home Page
app.get('/', (req, res) => {
	res.render('pages/home', { title: 'Home' });
});

// Show 404 Page if Page Doesn't Exist
app.use((req, res, next) => {
	res.status(404).end();
});

app.listen(hostPort, () => {
	console.log(`App Listening at ${hostURL}:${hostPort}`);
});
