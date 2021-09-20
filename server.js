const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs')
// -------------- ROUTES -------------- //

// Home (Root) route
app.get('/', (req, res) => {
    res.render('index')
});

app.listen(PORT, ()=>{
	console.log(`Server running on port: ${PORT}`);
});