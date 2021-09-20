const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Controllers
const authorsCtrl = require('./controllers/authorsController')

app.set('view engine', 'ejs')
console.log('Absolute path to project directory = ', __dirname);

// -------------- MIDDLEWARE -------------- //

// Serve static assets (front end JS, CSS, images, etc)
app.use(express.static(`${__dirname}/public`));

// -------------- ROUTES -------------- //

// Home (Root) route
app.get('/', (req, res) => {
    res.render('index')
});

// Authors Routes
app.use('/authors', authorsCtrl)

app.listen(PORT, ()=>{
	console.log(`Server running on port: ${PORT}`);
});