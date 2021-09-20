const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// -------------- ROUTES -------------- //

// Home (Root) route
app.get('/', (req, res) => {
    res.send('Hoome Page')
});

app.listen(PORT, ()=>{
	console.log(`Server running on port: ${PORT}`);
});