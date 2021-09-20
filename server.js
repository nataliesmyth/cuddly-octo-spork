const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs')
console.log('Absolute path to project directory = ', __dirname);
// -------------- MIDDLEWARE -------------- //

app.use(express.static(`${__dirname}/public`));
// -------------- ROUTES -------------- //

// Home (Root) route
app.get('/', (req, res) => {
    res.render('index')
});

app.listen(PORT, ()=>{
	console.log(`Server running on port: ${PORT}`);
});